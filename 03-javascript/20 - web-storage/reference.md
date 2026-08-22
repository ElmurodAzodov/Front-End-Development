# Web Storage — To'liq Qo'llanma (localStorage, sessionStorage, Cookies, IndexedDB, Cache API)

---

# 0-QISM: Nima uchun Web Storage kerak?

Odatda veb-sahifa yopilsa yoki qayta yuklansa, JavaScript o'zgaruvchilaridagi barcha ma'lumot yo'qoladi (masalan, `let user = "Ali"` — sahifa yangilansa, bu o'zgaruvchi yo'q bo'lib ketadi). Lekin ko'p hollarda ma'lumotni **brauzerning o'zida saqlab qo'yish** kerak bo'ladi:

- Foydalanuvchi tizimga kirganini eslab qolish (login holati)
- Savatchadagi mahsulotlarni saqlab qolish
- Sayt tilini yoki mavzusini (dark/light mode) eslab qolish
- Offline holatda ishlaydigan ilovalar yaratish

Shu maqsadlar uchun brauzer bir nechta **Web Storage** mexanizmini taqdim etadi. Har birining o'z xususiyati, hajmi va ishlatilish o'rni bor:

| Texnologiya        | Hajm chegarasi | Turi               | Asosiy vazifasi                                  |
| ------------------ | -------------- | ------------------ | ------------------------------------------------ |
| **Cookies**        | ~4KB           | String             | Serverga avtomatik yuboriladigan kichik ma'lumot |
| **localStorage**   | 5-10MB         | String (key-value) | Doimiy saqlanadigan mijoz tomondagi ma'lumot     |
| **sessionStorage** | 5-10MB         | String (key-value) | Faqat bitta tab davomida saqlanadigan ma'lumot   |
| **IndexedDB**      | Yuzlab MB / GB | Obyektlar bazasi   | Katta hajmdagi strukturaviy ma'lumotlar          |
| **Cache API**      | Katta hajm     | HTTP javoblar      | Fayl/so'rovlarni offline saqlash (PWA)           |

Endi har birini alohida-alohida, chuqur o'rganamiz.

---

# 1-QISM: localStorage

## 1.1 localStorage nima?

`localStorage` — brauzerda **kalit-qiymat (key-value)** ko'rinishida ma'lumot saqlaydigan omborxona. U `window` obyektining bir qismi (`window.localStorage`), shuning uchun to'g'ridan-to'g'ri `localStorage` deb yozish kifoya.

**Asosiy xususiyatlari:**

- ✅ Ma'lumot **doimiy** saqlanadi — brauzer yopilsa ham, kompyuter o'chirilsa ham o'chib ketmaydi (foydalanuvchi o'zi tozalamaguncha)
- ✅ Faqat **shu domen** uchun ishlaydi (masalan, `site1.com`dagi localStorage `site2.com`da ko'rinmaydi)
- ⚠️ Faqat **string** (matn) saqlaydi — boshqa turdagi ma'lumotni saqlash uchun avval matnga aylantirish kerak
- ⚠️ **Synchronous (sinxron) API** — ya'ni har bir amal darhol, navbat bilan bajariladi va asosiy JavaScript oqimini (thread) bloklaydi. Juda katta hajmdagi ma'lumot bilan ishlaganda sahifa "qotib qolishi" mumkin
- 📏 Hajm chegarasi: odatda **5-10MB** (brauzerga qarab farq qiladi)

## 1.2 Asosiy metodlar

### `setItem(key, value)` — Ma'lumot saqlash

```javascript
localStorage.setItem("username", "javohir_dev");
localStorage.setItem("theme", "dark");
```

Agar shu `key` allaqachon mavjud bo'lsa, uning qiymati **yangisi bilan almashtiriladi** (xato bermaydi).

### `getItem(key)` — Ma'lumotni o'qish

```javascript
const username = localStorage.getItem("username");
console.log(username); // "javohir_dev"

const notExists = localStorage.getItem("age");
console.log(notExists); // null — mavjud bo'lmasa null qaytaradi
```

### `removeItem(key)` — Bitta elementni o'chirish

```javascript
localStorage.removeItem("theme");
```

### `clear()` — Hammasini tozalash

```javascript
localStorage.clear(); // shu domenga tegishli BARCHA localStorage ma'lumotlari o'chadi
```

### `key(index)` — Indeks bo'yicha kalit nomini olish

```javascript
localStorage.setItem("a", "1");
localStorage.setItem("b", "2");

console.log(localStorage.key(0)); // "a"
console.log(localStorage.key(1)); // "b"
```

### `length` — Nechta element saqlanganini bilish

```javascript
console.log(localStorage.length); // masalan, 2
```

**Barcha kalit-qiymatlarni aylanib chiqish:**

```javascript
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
}
```

## 1.3 ⚠️ Muhim: localStorage faqat STRING saqlaydi

Bu localStorage bilan ishlashda eng ko'p xato qilinadigan joy. Agar obyekt yoki massiv saqlamoqchi bo'lsangiz:

```javascript
const user = { name: "Dilnoza", age: 25 };

// XATO USUL:
localStorage.setItem("user", user);
console.log(localStorage.getItem("user")); // "[object Object]" — MA'LUMOT YO'QOLDI!
```

Bu yerda JavaScript obyektni avtomatik ravishda `.toString()` metodiga aylantiradi, va obyektlar uchun bu metod foydasiz `"[object Object]"` qatorini qaytaradi.

### ✅ To'g'ri usul: `JSON.stringify()` va `JSON.parse()`

```javascript
const user = { name: "Dilnoza", age: 25, hobbies: ["kitob", "sport"] };

// Saqlashda obyektni JSON-matnga aylantiramiz:
localStorage.setItem("user", JSON.stringify(user));

// O'qishda JSON-matnni qaytadan obyektga aylantiramiz:
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "Dilnoza"
console.log(savedUser.hobbies[0]); // "kitob"
```

**Xavfsiz yordamchi funksiyalar (amaliy loyihalarda tavsiya etiladi):**

```javascript
function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Ishlatish:
saveData("cart", [
  { id: 1, name: "Noutbuk" },
  { id: 2, name: "Sichqoncha" },
]);
const cart = loadData("cart");
console.log(cart); // to'liq massiv qayta tiklanadi
```

## 1.4 Amaliy misol: Dark/Light Mode saqlash

```javascript
const themeToggle = document.querySelector("#theme-toggle");

// Sahifa yuklanganda saqlangan mavzuni tiklash
const savedTheme = localStorage.getItem("theme") || "light";
document.body.className = savedTheme;

themeToggle.addEventListener("click", () => {
  const newTheme = document.body.className === "light" ? "dark" : "light";
  document.body.className = newTheme;
  localStorage.setItem("theme", newTheme); // tanlovni saqlab qo'yamiz
});
```

## 1.5 ⚠️ Xavfsizlik ogohlantirishi

`localStorage`dagi ma'lumotlarga **har qanday JavaScript kodi** (jumladan, agar saytda XSS zaifligi bo'lsa, zararli skriptlar ham) kirisha oladi. Shuning uchun:

- ❌ Parol, kredit karta raqami kabi **maxfiy ma'lumotlarni** localStorage'da saqlamang
- ❌ Autentifikatsiya token'larini (masalan, JWT) localStorage'da saqlash xavfli hisoblanadi (XSS orqali o'g'irlanishi mumkin) — buning o'rniga `HttpOnly` cookie tavsiya etiladi
- ✅ localStorage'ni faqat maxfiy bo'lmagan ma'lumotlar uchun ishlating: sozlamalar, tema, til, savatcha, forma qoralamasi

---

# 2-QISM: sessionStorage

## 2.1 sessionStorage nima?

`sessionStorage` API jihatidan `localStorage` bilan **aynan bir xil** — barcha metodlar (`setItem`, `getItem`, `removeItem`, `clear`, `key`, `length`) bir xilda ishlaydi. Yagona farq — **ma'lumot qachon o'chib ketishida**.

```javascript
sessionStorage.setItem("tempData", "vaqtinchalik qiymat");
console.log(sessionStorage.getItem("tempData"));
```

## 2.2 localStorage bilan asosiy farqi

| Xususiyat                             | localStorage                                | sessionStorage                              |
| ------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| Ma'lumot qachon o'chadi               | Hech qachon (qo'lda o'chirilmaguncha)       | Tab/oyna yopilganda                         |
| Bir nechta tab orasida bo'lishiladimi | Ha, bir xil domendagi barcha tablar ko'radi | **Yo'q**, har bir tab o'zinikini ko'radi    |
| Sahifa yangilansa (F5)                | Saqlanadi                                   | Saqlanadi                                   |
| Yangi tab ochilsa (bir xil sayt)      | Ma'lumot ko'rinadi                          | Ma'lumot **ko'rinmaydi** (bo'sh boshlanadi) |

⚠️ **Eng ko'p adashiladigan joy:** Agar siz bir xil saytni ikkita alohida tabda ochsangiz, ularning `sessionStorage`lari **butunlay mustaqil** — bir tabda saqlangan ma'lumot ikkinchi tabda ko'rinmaydi. Bu `localStorage`dan farqli, chunki `localStorage` barcha tablarda bo'lishiladi.

## 2.3 Qachon nimani ishlatish kerak?

**localStorage ishlatiladi:**

- Foydalanuvchi tanlagan tilni yoki temani eslab qolish
- "Meni eslab qol" funksiyasi (login holati)
- Uzoq muddat saqlanishi kerak bo'lgan sozlamalar

**sessionStorage ishlatiladi:**

- Ko'p bosqichli (multi-step) formani to'ldirish jarayonida vaqtinchalik ma'lumot saqlash
- Bitta sessiya davomida foydalanuvchi harakatlarini kuzatish
- Bir martalik, tab yopilgach kerak bo'lmaydigan ma'lumotlar

```javascript
// Amaliy misol: ko'p bosqichli ro'yxatdan o'tish formasi
function saveStep1(data) {
  sessionStorage.setItem("registrationStep1", JSON.stringify(data));
}

function getAllRegistrationData() {
  const step1 = JSON.parse(sessionStorage.getItem("registrationStep1") || "{}");
  const step2 = JSON.parse(sessionStorage.getItem("registrationStep2") || "{}");
  return { ...step1, ...step2 };
}
```

---

# 3-QISM: Cookies

## 3.1 Cookie nima?

Cookie — bu brauzer tomonidan saqlanadigan va **har bir HTTP so'rovi bilan avtomatik ravishda serverga yuboriladigan** kichik matn bo'lagi. Cookie'lar eng qadimgi (1994-yildan beri mavjud) brauzer saqlash mexanizmi bo'lib, asosan server bilan mijoz orasidagi holatni (state) saqlash uchun yaratilgan.

**localStorage'dan asosiy farqi:** localStorage faqat brauzerda qoladi va hech qachon serverga o'z-o'zidan yuborilmaydi. Cookie esa **har bir so'rovda avtomatik** serverga jo'natiladi — bu ijobiy tomondan autentifikatsiya uchun qulay, lekin manfiy tomondan har bir so'rov hajmini oshiradi (performance'ga ta'sir qiladi).

## 3.2 `document.cookie` orqali ishlash

```javascript
// Cookie o'rnatish
document.cookie = "username=Sardor";

// Bir nechta cookie o'rnatish uchun har birini alohida yozish kerak
document.cookie = "theme=dark";

// Barcha cookie'larni o'qish (bitta uzun string sifatida qaytadi)
console.log(document.cookie); // "username=Sardor; theme=dark"
```

⚠️ `document.cookie` — bu oddiy property emas, balki **maxsus getter/setter**. Unga yangi qiymat yozish avvalgi cookie'larni o'chirmaydi, balki faqat yangisini **qo'shadi** (agar shu nomli cookie mavjud bo'lmasa).

## 3.3 Cookie atributlari

Cookie yaratishda qo'shimcha sozlamalarni nuqtali vergul bilan qo'shish mumkin:

```javascript
document.cookie =
  "username=Sardor; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/; Secure; SameSite=Strict";
```

| Atribut    | Vazifasi                                                                                             |
| ---------- | ---------------------------------------------------------------------------------------------------- |
| `expires`  | Cookie qachon o'chishini aniq sana bilan belgilaydi (GMT formatida)                                  |
| `max-age`  | Cookie necha soniyadan keyin o'chishini belgilaydi (masalan, `max-age=3600` — 1 soat)                |
| `path`     | Cookie qaysi sahifa yo'lida ko'rinishini belgilaydi (`/` — butun sayt uchun)                         |
| `domain`   | Cookie qaysi domen/subdomenlarda ishlashini belgilaydi                                               |
| `Secure`   | Cookie faqat **HTTPS** orqali yuboriladi (HTTP orqali yuborilmaydi)                                  |
| `HttpOnly` | JavaScript orqali cookie'ga kirish **taqiqlanadi** (faqat server o'rnatishi mumkin) — XSS'dan himoya |
| `SameSite` | Cookie boshqa saytlardan (cross-site) so'rovlarda yuborilishini boshqaradi: `Strict`, `Lax`, `None`  |

⚠️ **Muhim eslatma:** Agar `expires` yoki `max-age` ko'rsatilmasa, cookie **"session cookie"** hisoblanadi va brauzer (tab emas, butun brauzer) yopilganda o'chib ketadi.

### `HttpOnly` haqida muhim tushuncha

```javascript
// Server tomonidan o'rnatilgan HttpOnly cookie'ni JavaScript orqali o'qib bo'lmaydi:
console.log(document.cookie); // HttpOnly cookie bu yerda umuman ko'rinmaydi
```

Bu — autentifikatsiya token'larini saqlash uchun `localStorage`ga qaraganda **xavfsizroq** usul hisoblanadi, chunki hatto XSS hujumi bo'lsa ham, zararli JavaScript kod `HttpOnly` cookie'ni o'g'irlab ololmaydi.

## 3.4 Cookie o'chirish

Cookie'ni to'g'ridan-to'g'ri "o'chirish" metodi yo'q — buning o'rniga uning `expires` sanasini **o'tgan vaqtga** o'rnatish kerak:

```javascript
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
```

## 3.5 Cookie hajm chegarasi

- Har bir cookie **~4KB** dan oshmasligi kerak
- Har bir domen uchun brauzer odatda **~20-50 ta** cookie saqlashga ruxsat beradi

Bu localStorage'ning 5-10MB hajmiga nisbatan juda kichik, shuning uchun cookie katta hajmli ma'lumot uchun umuman mos emas.

## 3.6 📊 Cookies vs Web Storage (localStorage/sessionStorage) vs IndexedDB — To'liq Taqqoslash

| Xususiyat                       | Cookies                         | localStorage     | sessionStorage     | IndexedDB                                     |
| ------------------------------- | ------------------------------- | ---------------- | ------------------ | --------------------------------------------- |
| Hajm chegarasi                  | ~4KB                            | 5-10MB           | 5-10MB             | Yuzlab MB / GB                                |
| Serverga avtomatik yuboriladimi | ✅ Ha, har bir so'rovda         | ❌ Yo'q          | ❌ Yo'q            | ❌ Yo'q                                       |
| Muddati                         | O'zingiz belgilaysiz            | Doimiy           | Tab yopilguncha    | Doimiy                                        |
| API turi                        | String (murakkab parsing kerak) | Synchronous      | Synchronous        | **Asynchronous**                              |
| Ma'lumot turi                   | Faqat string                    | Faqat string     | Faqat string       | Har qanday JS turi (obyekt, fayl, blob)       |
| Qidirish/indekslash             | Yo'q                            | Yo'q             | Yo'q               | ✅ Bor (indexes)                              |
| Asosiy ishlatilishi             | Autentifikatsiya, tracking      | Sozlamalar, kesh | Vaqtinchalik holat | Katta strukturaviy ma'lumot, offline ilovalar |

---

# 4-QISM: Storage Events (Tablararo Aloqa)

## 4.1 `storage` hodisasi nima?

Agar bir tabda `localStorage` o'zgartirilsa, brauzer **boshqa ochiq tab/oynalarga** (bir xil sayt) `storage` nomli hodisani avtomatik yuboradi. Bu — turli brauzer tablari orasida to'g'ridan-to'g'ri aloqa o'rnatishning oddiy usuli.

⚠️ **Eng muhim qoida:** `storage` hodisasi **faqat boshqa tab/oynalarda** ishga tushadi. Ma'lumotni o'zgartirgan tabning **o'zida bu hodisa ishlamaydi**.

```javascript
// 1-TAB kodi:
localStorage.setItem("message", "Salom!"); // shu tabda "storage" hodisasi ISHLAMAYDI

// 2-TAB kodi (bir xil sayt, boshqa tabda ochiq):
window.addEventListener("storage", function (event) {
  console.log("O'zgargan kalit:", event.key);
  console.log("Eski qiymat:", event.oldValue);
  console.log("Yangi qiymat:", event.newValue);
  console.log("Qaysi sahifada o'zgardi:", event.url);
});
```

## 4.2 Event obyekti xususiyatlari

| Xususiyat     | Tavsifi                                                          |
| ------------- | ---------------------------------------------------------------- |
| `key`         | O'zgargan kalit nomi (agar `clear()` chaqirilsa — `null`)        |
| `oldValue`    | O'zgarishdan oldingi qiymat                                      |
| `newValue`    | Yangi qiymat                                                     |
| `url`         | O'zgarish sodir bo'lgan sahifa manzili                           |
| `storageArea` | O'zgargan storage obyekti (`localStorage` yoki `sessionStorage`) |

## 4.3 Amaliy misol: Bir nechta tabda login holatini sinxronlashtirish

```javascript
// Foydalanuvchi chiqish (logout) tugmasini bosganda:
function logout() {
  localStorage.setItem("logoutEvent", Date.now()); // signal yuborish
  // ... logout logikasi
}

// Boshqa barcha ochiq tablar buni tinglaydi:
window.addEventListener("storage", function (event) {
  if (event.key === "logoutEvent") {
    alert("Siz boshqa oynada tizimdan chiqdingiz!");
    window.location.href = "/login";
  }
});
```

Bu usul, masalan, ko'p tabda ochilgan bank yoki elektron pochta saytlarida — bitta tabda "Chiqish" bosilganda, barcha boshqa tablar ham avtomatik chiqishi uchun ishlatiladi.

---

# 5-QISM: IndexedDB

## 5.1 IndexedDB nima va nega kerak?

`localStorage` va `sessionStorage` oddiy, lekin cheklangan: faqat string saqlaydi, qidirish imkoniyati yo'q, hajmi kichik. Katta hajmdagi, murakkab, strukturaviy ma'lumotlar (masalan, minglab yozuv, fayllar, rasmlar) uchun brauzer **IndexedDB** degan to'liq huquqli, obyekt-yo'naltirilgan bazani taqdim etadi.

**Asosiy xususiyatlari:**

- ✅ **Asynchronous (asinxron) API** — katta hajmdagi ma'lumot bilan ishlaganda ham sahifani "qotirmaydi"
- ✅ Har qanday JavaScript turini saqlay oladi: obyektlar, massivlar, fayllar, Blob'lar (faqat string emas!)
- ✅ Katta hajm (odatda diskning bir necha foizigacha, brauzerga qarab)
- ✅ Indekslar orqali tez qidirish imkoniyati
- ⚠️ API biroz murakkab va ko'p "boilerplate" kod talab qiladi

## 5.2 Asosiy tushunchalar

IndexedDB'ni SQL bazasiga o'xshatib tasavvur qilish mumkin:

| SQL baza tushunchasi | IndexedDB muqobili |
| -------------------- | ------------------ |
| Baza (Database)      | Database           |
| Jadval (Table)       | Object Store       |
| Qator (Row)          | Record (obyekt)    |
| Ustun (Column)       | Obyekt property    |
| Primary Key          | `keyPath`          |
| Index                | Index              |

## 5.3 Bazani ochish va versiyalash

```javascript
const request = indexedDB.open("MyDatabase", 1); // ("baza nomi", versiya raqami)

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  console.log("Baza yaratilmoqda yoki yangilanmoqda...");

  // Object store (jadval) yaratish — FAQAT shu hodisa ichida yaratish mumkin!
  if (!db.objectStoreNames.contains("users")) {
    const store = db.createObjectStore("users", {
      keyPath: "id",
      autoIncrement: true,
    });
    store.createIndex("emailIndex", "email", { unique: true }); // qidirish uchun indeks
  }
};

request.onsuccess = function (event) {
  const db = event.target.result;
  console.log("Baza muvaffaqiyatli ochildi:", db);
};

request.onerror = function (event) {
  console.error("Xatolik:", event.target.error);
};
```

### Asosiy hodisalar tushuntirishi

| Hodisa            | Qachon ishga tushadi                                                                                             |
| ----------------- | ---------------------------------------------------------------------------------------------------------------- |
| `onupgradeneeded` | Baza birinchi marta yaratilganda YOKI versiya raqami oshirilganda (bu yerda object store va indexlar yaratiladi) |
| `onsuccess`       | Baza muvaffaqiyatli ochilganda                                                                                   |
| `onerror`         | Xatolik yuz berganda                                                                                             |

### `keyPath` va `autoIncrement`

```javascript
// keyPath — qaysi property Primary Key vazifasini bajarishini belgilaydi
const store = db.createObjectStore("users", { keyPath: "id" });

// autoIncrement — id avtomatik o'sib boradigan qilib belgilash (1, 2, 3...)
const store2 = db.createObjectStore("products", {
  keyPath: "id",
  autoIncrement: true,
});
```

### Versiyalash nima uchun kerak?

Baza strukturasini (masalan, yangi object store yoki indeks qo'shish) o'zgartirish uchun versiya raqamini oshirish kerak:

```javascript
const request = indexedDB.open("MyDatabase", 2); // 1 dan 2 ga oshirildi

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  const oldVersion = event.oldVersion; // 1
  const newVersion = event.newVersion; // 2

  if (oldVersion < 2) {
    // faqat 2-versiyaga o'tishda kerak bo'lgan o'zgarishlar
    db.createObjectStore("orders", { keyPath: "orderId" });
  }
};
```

## 5.4 Transactions (Tranzaksiyalar)

IndexedDB'da har qanday ma'lumot bilan ishlash (o'qish yoki yozish) **tranzaksiya** orqali amalga oshiriladi. Tranzaksiya — bir nechta amalni "hammasi yoki hech narsa" (all-or-nothing) tamoyili bilan bajarish kafolati.

```javascript
const transaction = db.transaction("users", "readwrite"); // yoki "readonly"
const store = transaction.objectStore("users");

transaction.oncomplete = function () {
  console.log("Tranzaksiya muvaffaqiyatli yakunlandi");
};

transaction.onerror = function (event) {
  console.error("Tranzaksiya xatoligi:", event.target.error);
};
```

| Tranzaksiya turi  | Vazifasi                                             |
| ----------------- | ---------------------------------------------------- |
| `"readonly"`      | Faqat o'qish uchun (tezroq, chunki qulflash kamroq)  |
| `"readwrite"`     | O'qish va yozish uchun                               |
| `"versionchange"` | Faqat `onupgradeneeded` ichida avtomatik ishlatiladi |

## 5.5 CRUD amallari

### CREATE — `add()` va `put()`

```javascript
function addUser(user) {
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");
  const request = store.add(user); // yangi yozuv qo'shadi

  request.onsuccess = () =>
    console.log("Foydalanuvchi qo'shildi, ID:", request.result);
  request.onerror = () => console.error("Xatolik: bu ID allaqachon mavjud");
}

addUser({ name: "Kamola", email: "kamola@example.com" });
```

**`add()` vs `put()` farqi:**

```javascript
store.add(user); // Agar shu keyPath (masalan, id) bilan yozuv MAVJUD bo'lsa — XATO beradi
store.put(user); // Agar mavjud bo'lsa — USTIDAN YOZADI (yangilaydi), yo'q bo'lsa — yangi qo'shadi
```

### READ — `get()`

```javascript
function getUser(id) {
  const transaction = db.transaction("users", "readonly");
  const store = transaction.objectStore("users");
  const request = store.get(id);

  request.onsuccess = function () {
    console.log("Topilgan foydalanuvchi:", request.result);
  };
}

getUser(1);
```

### UPDATE — `put()`

```javascript
function updateUser(id, newData) {
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");
  const getRequest = store.get(id);

  getRequest.onsuccess = function () {
    const user = getRequest.result;
    const updatedUser = { ...user, ...newData };
    store.put(updatedUser); // mavjud yozuvni yangilaydi
  };
}

updateUser(1, { name: "Kamola Yangi" });
```

### DELETE — `delete()`

```javascript
function deleteUser(id) {
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");
  store.delete(id);
}

deleteUser(1);
```

## 5.6 Indexes — Qidirish uchun

Agar `id` bo'yicha emas, balki boshqa property (masalan, `email`) bo'yicha qidirish kerak bo'lsa, indeks yaratilgan bo'lishi kerak (yuqorida `onupgradeneeded` ichida yaratilgan edi):

```javascript
function findUserByEmail(email) {
  const transaction = db.transaction("users", "readonly");
  const store = transaction.objectStore("users");
  const index = store.index("emailIndex"); // avval yaratilgan indeks nomi
  const request = index.get(email);

  request.onsuccess = function () {
    console.log("Email bo'yicha topildi:", request.result);
  };
}

findUserByEmail("kamola@example.com");
```

### `IDBKeyRange` — Diapazon bo'yicha qidirish

```javascript
// Yoshi 18 dan 30 gacha bo'lgan foydalanuvchilarni topish
const range = IDBKeyRange.bound(18, 30);

const index = store.index("ageIndex");
const request = index.getAll(range);

request.onsuccess = function () {
  console.log("Diapazondagi foydalanuvchilar:", request.result);
};
```

```javascript
IDBKeyRange.lowerBound(18); // 18 va undan katta
IDBKeyRange.upperBound(30); // 30 va undan kichik
IDBKeyRange.bound(18, 30); // 18 dan 30 gacha (ikkalasi ham kiradi)
IDBKeyRange.only(25); // faqat 25 ga teng
```

## 5.7 Cursors — Barcha yozuvlarni birma-bir aylanib chiqish

`getAll()` barcha natijalarni bir vaqtda xotiraga yuklaydi (katta ma'lumotlarda samarasiz bo'lishi mumkin). `openCursor()` esa yozuvlarni **birma-bir**, oqim (stream) tarzida qayta ishlash imkonini beradi.

```javascript
function printAllUsers() {
  const transaction = db.transaction("users", "readonly");
  const store = transaction.objectStore("users");
  const request = store.openCursor();

  request.onsuccess = function (event) {
    const cursor = event.target.result;
    if (cursor) {
      console.log("Foydalanuvchi:", cursor.value);
      cursor.continue(); // keyingi yozuvga o'tish
    } else {
      console.log("Barcha yozuvlar tugadi");
    }
  };
}

printAllUsers();
```

## 5.8 To'liq amaliy misol: Vazifalar (To-Do) ro'yxatini IndexedDB'da saqlash

```javascript
let db;

// 1. Bazani ochish
const request = indexedDB.open("TodoApp", 1);

request.onupgradeneeded = function (event) {
  db = event.target.result;
  db.createObjectStore("todos", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = function (event) {
  db = event.target.result;
  loadTodos();
};

// 2. Yangi vazifa qo'shish
function addTodo(text) {
  const transaction = db.transaction("todos", "readwrite");
  const store = transaction.objectStore("todos");
  store.add({ text: text, completed: false, createdAt: new Date() });

  transaction.oncomplete = () => loadTodos();
}

// 3. Barcha vazifalarni yuklash va ko'rsatish
function loadTodos() {
  const transaction = db.transaction("todos", "readonly");
  const store = transaction.objectStore("todos");
  const request = store.getAll();

  request.onsuccess = function () {
    console.log("Barcha vazifalar:", request.result);
  };
}

// 4. Vazifani o'chirish
function deleteTodo(id) {
  const transaction = db.transaction("todos", "readwrite");
  const store = transaction.objectStore("todos");
  store.delete(id);

  transaction.oncomplete = () => loadTodos();
}
```

## 5.9 Amaliy eslatma: Wrapper kutubxonalar

Xom (raw) IndexedDB API sintaksisi juda uzun va callback-asosli bo'lgani uchun, amaliy loyihalarda ko'pincha uni soddalashtiruvchi kutubxonalar ishlatiladi:

- **Dexie.js** — Promise-asosli, sodda va o'qish oson sintaksis beradi
- **idb** — Google tomonidan yaratilgan, IndexedDB'ni Promise'larga o'raydigan yengil kutubxona

```javascript
// Dexie.js bilan taqqoslash uchun misol (kutubxona o'rnatilgan bo'lsa):
const db = new Dexie("MyDatabase");
db.version(1).stores({ users: "++id, email" });

await db.users.add({ name: "Kamola", email: "kamola@example.com" });
const user = await db.users.get(1);
```

---

# 6-QISM: Cache API (Service Workers, PWA)

## 6.1 Cache API nima?

`Cache API` — bu HTTP so'rovlari va javoblarini (Request/Response juftliklarini) saqlash uchun mo'ljallangan storage turi. U asosan **Service Worker**lar bilan birgalikda, **PWA (Progressive Web App)** larni **offline** ishlatish uchun qo'llaniladi.

**Oddiy brauzer HTTP kesh (cache)idan farqi:** Oddiy HTTP kesh brauzer va server sarlavhalari (headers) orqali avtomatik boshqariladi va dasturchi uni to'liq nazorat qila olmaydi. Cache API esa — dasturchi tomonidan **to'liq dasturiy nazorat qilinadigan**, JavaScript orqali ochiq boshqariladigan kesh hisoblanadi.

## 6.2 Asosiy metodlar

```javascript
// 1. Kesh ochish (yoki yaratish, agar mavjud bo'lmasa)
caches.open("my-cache-v1").then(function (cache) {
  // 2. Bitta faylni keshga qo'shish
  cache.add("/styles.css");

  // 3. Bir nechta faylni birdan qo'shish
  cache.addAll(["/", "/index.html", "/styles.css", "/script.js", "/logo.png"]);
});
```

```javascript
// Keshga to'g'ridan-to'g'ri Response obyekti qo'shish
caches.open("my-cache-v1").then(function (cache) {
  fetch("/data.json").then(function (response) {
    cache.put("/data.json", response); // olingan javobni keshga saqlash
  });
});
```

```javascript
// Keshdan qidirish
caches.match("/styles.css").then(function (response) {
  if (response) {
    console.log("Keshdan topildi!");
  } else {
    console.log("Keshda yo'q, tarmoqdan olish kerak");
  }
});
```

## 6.3 Service Worker bilan birgalikda ishlatish (Offline-first strategiya)

Cache API o'z-o'zidan hech narsani "ushlab qolmaydi" — u faqat saqlash joyi. Haqiqiy offline ishlash uchun **Service Worker**ning `fetch` hodisasi bilan birga ishlatiladi:

```javascript
// service-worker.js fayli ichida:

const CACHE_NAME = "app-cache-v1";
const urlsToCache = ["/", "/index.html", "/styles.css", "/script.js"];

// O'rnatilganda kerakli fayllarni keshga saqlab qo'yish
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(urlsToCache);
    }),
  );
});

// Har bir tarmoq so'rovini ushlab, avval keshdan javob berishga harakat qilish
self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Agar keshda bo'lsa — keshdan qaytarish, bo'lmasa — tarmoqdan olish
      return response || fetch(event.request);
    }),
  );
});
```

Bu — **"Cache First"** strategiyasi deb ataladi: avval keshni tekshirish, topilmasa tarmoqqa murojaat qilish. Bu foydalanuvchiga internet bo'lmaganda ham sayt ishlashini ta'minlaydi.

---

# 7-QISM: Storage Manager API

## 7.1 Qancha joy ishlatilayotganini tekshirish

Zamonaviy brauzerlar barcha storage turlari (localStorage, IndexedDB, Cache API va h.k.) uchun umumiy hisobotni olish imkonini beradi:

```javascript
navigator.storage.estimate().then(function (estimate) {
  console.log("Ishlatilgan joy:", estimate.usage, "bayt");
  console.log("Mavjud umumiy joy:", estimate.quota, "bayt");
  console.log(
    "Foiz hisobida:",
    ((estimate.usage / estimate.quota) * 100).toFixed(2) + "%",
  );
});
```

## 7.2 Ma'lumotni "persist" qilish

Ba'zida brauzer diskda joy yetishmasa, eng kam ishlatilgan storage ma'lumotlarini **o'zi avtomatik o'chirib yuborishi** mumkin. `persist()` so'rovi orqali brauzerdan ma'lumotni "muhim, o'chirmang" deb so'rash mumkin:

```javascript
navigator.storage.persist().then(function (isPersisted) {
  if (isPersisted) {
    console.log("Ma'lumotlar endi avtomatik o'chirilmaydi");
  } else {
    console.log("Brauzer so'rovni rad etdi");
  }
});
```

---

# 8-QISM: Yakuniy Solishtirish va Qachon Nimani Tanlash

## 8.1 Qaror qabul qilish sxemasi

```
Ma'lumot serverga har doim yuborilishi kerakmi?
 ├── HA → Cookies
 └── YO'Q
      │
      Ma'lumot qancha vaqt saqlanishi kerak?
      ├── Faqat shu tab ochiq turgancha → sessionStorage
      └── Doimiy (tab yopilsa ham)
           │
           Ma'lumot qanday va qancha hajmda?
           ├── Kichik, oddiy string/JSON (< 5MB) → localStorage
           └── Katta, murakkab, qidirish kerak, fayllar → IndexedDB

Offline rejimda fayl/so'rovlarni saqlash kerakmi (PWA)?
 └── HA → Cache API (Service Worker bilan birga)
```

## 8.2 Amaliy misollar bo'yicha tanlov

| Vazifa                                     | Tavsiya etilgan storage       |
| ------------------------------------------ | ----------------------------- |
| Login sessiyasi tokeni                     | Cookie (`HttpOnly`, `Secure`) |
| Sayt temasi (dark/light)                   | localStorage                  |
| Til tanlovi                                | localStorage                  |
| Ko'p bosqichli forma qoralamasi            | sessionStorage                |
| Xarid savatchasi (kichik)                  | localStorage                  |
| Offline-first blog/PWA fayllar             | Cache API                     |
| Minglab yozuvli offline ma'lumotlar bazasi | IndexedDB                     |
| Foydalanuvchi tracking/analytics ID        | Cookie                        |

---

# ✅ Yakuniy Xulosa

Ushbu qo'llanma quyidagilarni to'liq qamrab oladi:

1. **localStorage** — barcha metodlar, faqat string saqlashi, `JSON.stringify/parse` orqali obyekt saqlash, xavfsizlik ogohlantirishi
2. **sessionStorage** — localStorage bilan farqi, har bir tab uchun alohida ekanligi
3. **Cookies** — `document.cookie` sintaksisi, barcha atributlar (`expires`, `Secure`, `HttpOnly`, `SameSite`), hajm chegarasi, serverga avtomatik yuborilishi
4. **Cookies vs Web Storage vs IndexedDB** — to'liq taqqoslash jadvali
5. **Storage Events** — tablararo aloqa, faqat boshqa tabda ishga tushishi, event xususiyatlari
6. **IndexedDB** — asinxron API, versiyalash, object store, tranzaksiyalar, CRUD, indexlar, `IDBKeyRange`, cursorlar, wrapper kutubxonalar
7. **Cache API** — Service Worker bilan offline-first strategiya
8. **Storage Manager API** — joy hisobotini olish va ma'lumotni "persist" qilish
9. Barcha texnologiyalarni qachon qo'llash bo'yicha amaliy qaror qabul qilish sxemasi
