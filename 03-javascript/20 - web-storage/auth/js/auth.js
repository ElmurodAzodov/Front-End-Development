/**
 * auth.js
 * ---------------------------------------------------------------------------
 * Web Storage asosidagi autentifikatsiya tizimi.
 *
 * Qanday ishlaydi:
 *  - Foydalanuvchilar bazasi  -> localStorage ("auth_users")   — doimiy
 *  - Joriy sessiya (bitta tab)-> sessionStorage ("auth_session") — tab yopilsa o'chadi
 *  - "Meni eslab qol" tanlansa -> localStorage'da ham token saqlanadi, shuning
 *    uchun brauzer qayta ochilganda ham kirgan holat saqlanib qoladi
 *  - Boshqa tablarda "logout" holatini sinxronlashtirish -> `storage` event
 *
 * ⚠️ MUHIM (real loyihalar uchun eslatma):
 *  Bu — Web Storage mavzusini o'rgatish uchun tayyorlangan DEMO tizim.
 *  Parolni haqiqiy production tizimda HECH QACHON brauzerda (frontendda)
 *  tekshirish kerak emas — bu yerda faqat localStorage/sessionStorage/
 *  cookie/storage event mexanizmlarini ko'rsatish uchun soddalashtirilgan.
 *  Haqiqiy loyihada:
 *    - Parol backendda bcrypt/argon2 bilan hash qilinadi
 *    - Sessiya token'i server tomonidan HttpOnly cookie sifatida beriladi
 *    - localStorage'da token/parol saqlash XSS xavfi tug'diradi
 * ---------------------------------------------------------------------------
 */

const USERS_KEY = "auth_users"; // localStorage: barcha ro'yxatdan o'tgan foydalanuvchilar
const SESSION_KEY = "auth_session"; // sessionStorage: joriy tabdagi kirish holati
const REMEMBER_KEY = "auth_remember_token"; // localStorage: "meni eslab qol" tokeni
const LOGOUT_SIGNAL_KEY = "auth_logout_signal"; // tablararo logout signali
const COOKIE_NAME = "auth_last_login"; // cookie: oxirgi kirilgan email (demo uchun)

const AuthService = {
  // ---------------------------------------------------------------------
  // YORDAMCHI FUNKSIYALAR
  // ---------------------------------------------------------------------

  /** Tasodifiy tuz (salt) yaratish */
  _generateSalt() {
    const arr = new Uint8Array(16);
    crypto.getRandomValues(arr);
    return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
  },

  /** Tasodifiy sessiya tokeni yaratish */
  _generateToken() {
    const arr = new Uint8Array(24);
    crypto.getRandomValues(arr);
    return Array.from(arr, (b) => b.toString(16).padStart(2, "0")).join("");
  },

  /** Parolni SHA-256 + tuz bilan hash qilish (Web Crypto API) */
  async _hashPassword(password, salt) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + salt);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer), (b) =>
      b.toString(16).padStart(2, "0"),
    ).join("");
  },

  /** Barcha foydalanuvchilarni localStorage'dan olish */
  _getUsers() {
    return Storage.get(USERS_KEY, []);
  },

  /** Foydalanuvchilar ro'yxatini saqlash */
  _saveUsers(users) {
    Storage.set(USERS_KEY, users);
  },

  /** Email bo'yicha foydalanuvchini topish */
  _findUserByEmail(email) {
    return this._getUsers().find(
      (u) => u.email.toLowerCase() === email.toLowerCase(),
    );
  },

  // ---------------------------------------------------------------------
  // COOKIE YORDAMCHI FUNKSIYALARI (demo maqsadida)
  // ---------------------------------------------------------------------

  _setCookie(name, value, days = 30) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  },

  _getCookie(name) {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(name + "="));
    return match ? decodeURIComponent(match.split("=")[1]) : null;
  },

  // ---------------------------------------------------------------------
  // RO'YXATDAN O'TISH
  // ---------------------------------------------------------------------

  /**
   * @returns {Promise<{ok: boolean, message: string}>}
   */
  async register({ fullName, email, password }) {
    if (!fullName || !email || !password) {
      return { ok: false, message: "Barcha maydonlarni to'ldiring." };
    }
    if (password.length < 6) {
      return { ok: false, message: "Parol kamida 6 belgidan iborat bo'lishi kerak." };
    }
    if (this._findUserByEmail(email)) {
      return { ok: false, message: "Bu email bilan foydalanuvchi allaqachon ro'yxatdan o'tgan." };
    }

    const salt = this._generateSalt();
    const passwordHash = await this._hashPassword(password, salt);

    const users = this._getUsers();
    const newUser = {
      id: Date.now(),
      fullName,
      email,
      passwordHash,
      salt,
      createdAt: new Date().toISOString(),
    };
    users.push(newUser);
    this._saveUsers(users);

    return { ok: true, message: "Ro'yxatdan muvaffaqiyatli o'tdingiz! Endi tizimga kiring." };
  },

  // ---------------------------------------------------------------------
  // TIZIMGA KIRISH
  // ---------------------------------------------------------------------

  /**
   * @param {{email: string, password: string, remember: boolean}} params
   * @returns {Promise<{ok: boolean, message: string}>}
   */
  async login({ email, password, remember }) {
    const user = this._findUserByEmail(email);
    if (!user) {
      return { ok: false, message: "Email yoki parol noto'g'ri." };
    }

    const hash = await this._hashPassword(password, user.salt);
    if (hash !== user.passwordHash) {
      return { ok: false, message: "Email yoki parol noto'g'ri." };
    }

    const token = this._generateToken();
    const sessionData = {
      userId: user.id,
      fullName: user.fullName,
      email: user.email,
      token,
      loginAt: new Date().toISOString(),
    };

    // Joriy tab uchun sessiya (sessionStorage) — tab yopilsa o'chadi
    Storage.set(SESSION_KEY, sessionData, /* session */ true);

    // "Meni eslab qol" tanlansa — localStorage'da ham saqlaymiz,
    // shunda brauzer qayta ochilganda ham kirgan holat davom etadi
    if (remember) {
      Storage.set(REMEMBER_KEY, sessionData);
    } else {
      Storage.remove(REMEMBER_KEY);
    }

    // Demo uchun: oxirgi kirgan email'ni cookie'da ham saqlaymiz
    this._setCookie(COOKIE_NAME, email);

    return { ok: true, message: `Xush kelibsiz, ${user.fullName}!` };
  },

  // ---------------------------------------------------------------------
  // JORIY HOLATNI TEKSHIRISH
  // ---------------------------------------------------------------------

  /**
   * Joriy tabda foydalanuvchi kirganmi — avval sessionStorage'ni,
   * topilmasa "remember me" localStorage tokenini tekshiradi.
   */
  getCurrentSession() {
    const tabSession = Storage.get(SESSION_KEY, null, true);
    if (tabSession) return tabSession;

    const remembered = Storage.get(REMEMBER_KEY, null);
    if (remembered) {
      // Eslab qolingan sessiyani joriy tab uchun ham faollashtiramiz
      Storage.set(SESSION_KEY, remembered, true);
      return remembered;
    }
    return null;
  },

  isAuthenticated() {
    return this.getCurrentSession() !== null;
  },

  // ---------------------------------------------------------------------
  // CHIQISH (LOGOUT)
  // ---------------------------------------------------------------------

  logout() {
    Storage.remove(SESSION_KEY, true);
    Storage.remove(REMEMBER_KEY);

    // Boshqa ochiq tablarga "logout bo'ldi" signalini yuboramiz.
    // localStorage'ga yozish -> boshqa tablarda "storage" hodisasini ishga tushiradi.
    localStorage.setItem(LOGOUT_SIGNAL_KEY, Date.now().toString());
  },

  // ---------------------------------------------------------------------
  // TABLARARO SINXRONIZATSIYA
  // ---------------------------------------------------------------------

  /**
   * Boshqa tabda logout bo'lsa, joriy tabni ham chiqarish uchun tinglovchi.
   * @param {Function} onForceLogout - logout signali kelganda chaqiriladigan callback
   */
  watchLogoutAcrossTabs(onForceLogout) {
    window.addEventListener("storage", (event) => {
      if (event.key === LOGOUT_SIGNAL_KEY) {
        // Joriy tabning o'z sessiyasini ham tozalaymiz
        Storage.remove(SESSION_KEY, true);
        onForceLogout();
      }
    });
  },
};
