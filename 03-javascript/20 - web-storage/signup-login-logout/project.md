
# **Web Storage**

**Web Storage** mavzusini o‘quvchiga o‘rgatish uchun eng yaxshi amaliy loyiha — **Sign Up → Login → Logout** tizimi. Bunda `localStorage`, `sessionStorage`, `setItem()`, `getItem()`, `removeItem()`, `JSON.stringify()` va `JSON.parse()` ni amalda ko‘ramiz.

> ⚠️ Muhim: bu loyiha **o‘rganish uchun**. Haqiqiy saytlarda parolni `localStorage`ga oddiy ko‘rinishda saqlash xavfsiz emas. Real loyihada authentication backend orqali qilinadi.

---

# 1. Web Storage nima?

JavaScript'dagi **Web Storage** — brauzer ichida ma'lumot saqlash imkonini beradigan mexanizm.

Asosan 2 turi bor:

```text
localStorage
sessionStorage
```

### `localStorage`

Ma'lumot brauzerda saqlanib qoladi.

```js
localStorage.setItem("name", "Elmurod");
```

Brauzerni yopib ochsak ham:

```js
localStorage.getItem("name");
```

natija:

```text
Elmurod
```

bo‘ladi.

---

### `sessionStorage`

Ma'lumot faqat joriy tab/session davomida saqlanadi.

```js
sessionStorage.setItem("name", "Elmurod");
```

Tab yopilgandan keyin ma'lumot yo‘qoladi.

---

# 2. Avval `localStorage`ning asosiy metodlarini o‘rganamiz

Web Storage'da eng kerakli 4 ta metod bor.

### 1. `setItem()`

Ma'lumot qo‘shadi.

```js
localStorage.setItem("name", "Elmurod");
```

Bu yerda:

```text
"name"      → key
"Elmurod"   → value
```

---

### 2. `getItem()`

Ma'lumotni oladi.

```js
const name = localStorage.getItem("name");

console.log(name);
```

Natija:

```text
Elmurod
```

---

### 3. `removeItem()`

Bitta ma'lumotni o‘chiradi.

```js
localStorage.removeItem("name");
```

---

### 4. `clear()`

Hammasini o‘chiradi.

```js
localStorage.clear();
```

⚠️ Buni ehtiyotkorlik bilan ishlatish kerak.

---

# 3. Nega Login/Signup bilan o‘rganamiz?

Oddiy misol:

```js
localStorage.setItem("name", "Ali");
```

bilan Web Storage'ni tushunish mumkin.

Lekin **Signup/Login** loyihasida uning haqiqiy ishlatilish mantig‘ini yaxshiroq tushunamiz.

Bizning loyiha:

```text
SIGN UP
   ↓
Foydalanuvchi ma'lumotlarini saqlash
   ↓
LOGIN
   ↓
localStorage'dagi ma'lumotlarni tekshirish
   ↓
To'g'ri bo'lsa
   ↓
HOME PAGE
   ↓
LOGOUT
   ↓
Login sahifasi
```

---

# 4. Loyihaning papka tuzilishi

O‘quvchiga quyidagicha loyiha berish mumkin:

```text
web-storage-project/
│
├── index.html
├── style.css
└── script.js
```

Bitta sahifada hammasini qilishimiz mumkin.

---

# 5. HTML yaratamiz

`index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Web Storage Login</title>

    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <!-- SIGN UP -->
      <div id="signupBox" class="box">
        <h2>Sign Up</h2>

        <input type="text" id="signupName" placeholder="Ismingiz" />

        <input type="email" id="signupEmail" placeholder="Email" />

        <input type="password" id="signupPassword" placeholder="Parol" />

        <button id="signupBtn">Sign Up</button>

        <p>
          Akkountingiz bormi?
          <span id="showLogin"> Login </span>
        </p>
      </div>

      <!-- LOGIN -->
      <div id="loginBox" class="box hidden">
        <h2>Login</h2>

        <input type="email" id="loginEmail" placeholder="Email" />

        <input type="password" id="loginPassword" placeholder="Parol" />

        <button id="loginBtn">Login</button>

        <p>
          Akkountingiz yo'qmi?
          <span id="showSignup"> Sign Up </span>
        </p>
      </div>

      <!-- HOME -->
      <div id="homeBox" class="box hidden">
        <h2>
          Xush kelibsiz,
          <span id="userName"></span>
        </h2>

        <p>Siz tizimga muvaffaqiyatli kirdingiz.</p>

        <button id="logoutBtn">Logout</button>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

---

# 6. CSS yozamiz

`style.css`:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background: #f2f2f2;
}

.container {
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 350px;
  padding: 30px;

  background: white;
  border-radius: 15px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.box h2 {
  margin-bottom: 20px;
}

.box input {
  width: 100%;
  padding: 12px;

  margin-bottom: 15px;

  border: 1px solid #ddd;
  border-radius: 8px;
}

.box button {
  width: 100%;
  padding: 12px;

  border: none;
  border-radius: 8px;

  background: black;
  color: white;

  cursor: pointer;
}

.box p {
  margin-top: 15px;
}

.box span {
  cursor: pointer;
  font-weight: bold;
}

.hidden {
  display: none;
}
```

---

# 7. Endi eng muhim qism — JavaScript

Avval HTML elementlarimizni olamiz:

```js
const signupBox = document.querySelector("#signupBox");
const loginBox = document.querySelector("#loginBox");
const homeBox = document.querySelector("#homeBox");

const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

const signupBtn = document.querySelector("#signupBtn");
const loginBtn = document.querySelector("#loginBtn");

const showLogin = document.querySelector("#showLogin");
const showSignup = document.querySelector("#showSignup");

const logoutBtn = document.querySelector("#logoutBtn");

const userName = document.querySelector("#userName");
```

Bu yerda hali Web Storage ishlatmadik.

---

# 8. Sign Up tugmasini ishlatamiz

```js
signupBtn.addEventListener("click", function () {
  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;

  console.log(name);
  console.log(email);
  console.log(password);
});
```

O‘quvchiga tushuntiring:

```js
signupName.value;
```

input ichidagi qiymatni oladi.

Masalan:

```text
Elmurod
```

---

# 9. Foydalanuvchi obyektini yaratamiz

Endi uchta ma'lumotni bitta obyektga joylaymiz:

```js
const user = {
  name: name,
  email: email,
  password: password,
};
```

Qisqartirib:

```js
const user = {
  name,
  email,
  password,
};
```

Natija:

```js
{
    name: "Elmurod",
    email: "elmurod@gmail.com",
    password: "12345"
}
```

---

# 10. Muammo: objectni localStorage'ga to‘g‘ridan-to‘g‘ri saqlab bo‘lmaydi

Masalan:

```js
localStorage.setItem("user", user);
```

deb yozsak, object to‘g‘ri saqlanmaydi.

Chunki `localStorage` qiymatni **string** ko‘rinishida saqlaydi.

Shuning uchun:

```js
JSON.stringify();
```

ishlatamiz.

---

# 11. `JSON.stringify()` nima?

Object:

```js
const user = {
  name: "Elmurod",
  email: "elmurod@gmail.com",
  password: "12345",
};
```

Stringga aylanadi:

```js
const userData = JSON.stringify(user);
```

Natija:

```text
{"name":"Elmurod","email":"elmurod@gmail.com","password":"12345"}
```

Endi localStorage'ga yuboramiz:

```js
localStorage.setItem("user", userData);
```

---

# 12. Sign Up kodini to‘liq qilamiz

```js
signupBtn.addEventListener("click", function () {
  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;

  const user = {
    name,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Ro'yxatdan o'tdingiz!");
});
```

Endi:

```text
Sign Up
   ↓
Inputlardan ma'lumot oladi
   ↓
Object yaratadi
   ↓
JSON.stringify()
   ↓
localStorage
```

---

# 13. Browser'da tekshiramiz

Chrome/Edge'da:

```text
F12
```

yoki:

```text
Developer Tools
```

→

```text
Application
```

→

```text
Local Storage
```

→

sayt manzili

U yerda:

```text
Key       Value
------------------------------
user      {"name":"Elmurod",...}
```

ko‘rinadi.

Bu juda muhim.

O‘quvchiga aynan **DevTools → Application → Local Storage** qismini ko‘rsatish kerak.

---

# 14. Endi Login

Login qilganda foydalanuvchi:

```text
Email
Password
```

kiritadi.

Biz localStorage'dagi userni olamiz:

```js
const userData = localStorage.getItem("user");
```

Lekin hozir u:

```text
string
```

ko‘rinishida.

---

# 15. `JSON.parse()` nima?

Biz oldin:

```js
JSON.stringify(user);
```

qilib objectni stringga aylantirdik.

Endi teskari qilishimiz kerak:

```js
JSON.parse(userData);
```

Ya'ni:

```text
Object
   ↓
JSON.stringify()
   ↓
String
   ↓
localStorage
```

Login paytida:

```text
localStorage
   ↓
String
   ↓
JSON.parse()
   ↓
Object
```

---

# 16. Login kodini yozamiz

```js
loginBtn.addEventListener("click", function () {
  const email = loginEmail.value;
  const password = loginPassword.value;

  const userData = localStorage.getItem("user");

  const user = JSON.parse(userData);

  console.log(user);
});
```

Endi `user`:

```js
{
    name: "Elmurod",
    email: "elmurod@gmail.com",
    password: "12345"
}
```

bo‘ladi.

---

# 17. Email va passwordni tekshiramiz

```js
if (email === user.email && password === user.password) {
  alert("Login muvaffaqiyatli!");
} else {
  alert("Email yoki parol noto'g'ri!");
}
```

Mana shu yerda o‘quvchi **Login qanday ishlashini** tushunadi.

---

# 18. Login'dan keyin Home'ni ko‘rsatamiz

Login muvaffaqiyatli bo‘lsa:

```js
signupBox.classList.add("hidden");
loginBox.classList.add("hidden");
homeBox.classList.remove("hidden");
```

User ismini ham chiqaramiz:

```js
userName.textContent = user.name;
```

---

# 19. Login kodining to‘liq varianti

```js
loginBtn.addEventListener("click", function () {
  const email = loginEmail.value;
  const password = loginPassword.value;

  const userData = localStorage.getItem("user");

  if (!userData) {
    alert("Avval ro'yxatdan o'ting!");
    return;
  }

  const user = JSON.parse(userData);

  if (email === user.email && password === user.password) {
    alert("Login muvaffaqiyatli!");

    loginBox.classList.add("hidden");
    homeBox.classList.remove("hidden");

    userName.textContent = user.name;
  } else {
    alert("Email yoki parol noto'g'ri!");
  }
});
```

Bu yerda juda muhim:

```js
if (!userData)
```

Agar `localStorage`da user bo‘lmasa, `JSON.parse(null)` bilan bog‘liq muammolarga duch kelmaslik uchun avval tekshiryapmiz.

---

# 20. Signup → Login o'tishini qilamiz

```js
showLogin.addEventListener("click", function () {
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});
```

Teskari:

```js
showSignup.addEventListener("click", function () {
  loginBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
});
```

---

# 21. Logout

Logout bosilganda Home yopiladi:

```js
homeBox.classList.add("hidden");
loginBox.classList.remove("hidden");
```

Kod:

```js
logoutBtn.addEventListener("click", function () {
  homeBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});
```

Lekin bu yerda **localStorage'dagi userni o‘chirmaymiz**.

Nega?

Chunki Logout:

```text
"accountni o'chirish"
```

degani emas.

Logout:

```text
"tizimdan chiqish"
```

degani.

---

# 22. `removeItem()` qachon ishlatiladi?

Agar foydalanuvchi akkauntini o‘chirmoqchi bo‘lsa:

```js
localStorage.removeItem("user");
```

Shunda:

```text
user
```

localStorage'dan o‘chadi.

---

# 23. `sessionStorage`ni ham qo‘shamiz

Endi o‘quvchiga savol beramiz:

> Login qilgan foydalanuvchini qanday qilib "login bo‘lgan" deb eslab qolamiz?

Masalan:

```js
sessionStorage.setItem("isLoggedIn", "true");
```

Login muvaffaqiyatli bo‘lganda:

```js
sessionStorage.setItem("isLoggedIn", "true");
```

Logout:

```js
sessionStorage.removeItem("isLoggedIn");
```

---

# 24. `localStorage` va `sessionStorage` farqi

|                    | localStorage    | sessionStorage  |
| ------------------ | --------------- | --------------- |
| Ma'lumot saqlanadi | Uzoq muddat     | Joriy session   |
| Browser yopilsa    | Saqlanadi       | O‘chadi         |
| Tab yopilsa        | Saqlanadi       | O‘chadi         |
| Hajmi              | Odatda ~5–10 MB | Odatda ~5–10 MB |
| API                | Deyarli bir xil | Deyarli bir xil |

Eng oson yodlash:

```text
localStorage
= doimiyroq saqlash

sessionStorage
= session davomida saqlash
```

---

# 25. Endi avtomatik login qilish

Bu Web Storage mavzusining juda yaxshi amaliy qismi.

Masalan foydalanuvchi:

```text
Login
   ↓
Home
```

ga kirdi.

Keyin sahifani refresh qildi.

Biz uni yana login qilishga majbur qilmasligimiz mumkin.

Buning uchun:

```js
const isLoggedIn = sessionStorage.getItem("isLoggedIn");
```

Tekshiramiz:

```js
if (isLoggedIn === "true") {
  const userData = localStorage.getItem("user");

  if (userData) {
    const user = JSON.parse(userData);

    signupBox.classList.add("hidden");
    loginBox.classList.add("hidden");
    homeBox.classList.remove("hidden");

    userName.textContent = user.name;
  }
}
```

---

# 26. To‘liq `script.js`

Endi o‘quvchiga yakuniy kodni berish mumkin:

```js
// ============================
// ELEMENTLARNI OLISH
// ============================

const signupBox = document.querySelector("#signupBox");
const loginBox = document.querySelector("#loginBox");
const homeBox = document.querySelector("#homeBox");

const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

const signupBtn = document.querySelector("#signupBtn");
const loginBtn = document.querySelector("#loginBtn");

const showLogin = document.querySelector("#showLogin");
const showSignup = document.querySelector("#showSignup");

const logoutBtn = document.querySelector("#logoutBtn");

const userName = document.querySelector("#userName");

// ============================
// SIGN UP
// ============================

signupBtn.addEventListener("click", function () {
  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();

  if (!name || !email || !password) {
    alert("Barcha maydonlarni to'ldiring!");
    return;
  }

  const user = {
    name,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Ro'yxatdan o'tish muvaffaqiyatli!");

  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";

  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

// ============================
// SIGN UP → LOGIN
// ============================

showLogin.addEventListener("click", function () {
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

// ============================
// LOGIN → SIGN UP
// ============================

showSignup.addEventListener("click", function () {
  loginBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
});

// ============================
// LOGIN
// ============================

loginBtn.addEventListener("click", function () {
  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  const userData = localStorage.getItem("user");

  if (!userData) {
    alert("Bunday foydalanuvchi mavjud emas!");
    return;
  }

  const user = JSON.parse(userData);

  if (email === user.email && password === user.password) {
    // Session yaratish
    sessionStorage.setItem("isLoggedIn", "true");

    // Login oynasini yopamiz
    loginBox.classList.add("hidden");

    // Home oynasini ochamiz
    homeBox.classList.remove("hidden");

    // User ismini chiqaramiz
    userName.textContent = user.name;

    alert("Login muvaffaqiyatli!");
  } else {
    alert("Email yoki parol noto'g'ri!");
  }
});

// ============================
// LOGOUT
// ============================

logoutBtn.addEventListener("click", function () {
  // Sessionni o'chiramiz
  sessionStorage.removeItem("isLoggedIn");

  // Home'ni yopamiz
  homeBox.classList.add("hidden");

  // Login'ni ochamiz
  loginBox.classList.remove("hidden");

  // Inputlarni tozalaymiz
  loginEmail.value = "";
  loginPassword.value = "";
});

// ============================
// PAGE LOAD
// ============================

const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
  const userData = localStorage.getItem("user");

  if (userData) {
    const user = JSON.parse(userData);

    signupBox.classList.add("hidden");
    loginBox.classList.add("hidden");
    homeBox.classList.remove("hidden");

    userName.textContent = user.name;
  }
}
```

---

# 27. Butun dasturning ishlash sxemasi

O‘quvchiga mana shu sxemani yodlatish juda foydali:

```text
                 SIGN UP
                    │
                    ▼
              Inputlardan olish
                    │
                    ▼
                Object
                    │
                    ▼
            JSON.stringify()
                    │
                    ▼
              localStorage
                    │
                    │
                    ▼
                  LOGIN
                    │
                    ▼
         localStorage'dan olish
                    │
                    ▼
               JSON.parse()
                    │
                    ▼
           Email + Password
                tekshirish
                    │
             ┌──────┴──────┐
             │             │
          TO'G'RI        NOTO'G'RI
             │             │
             ▼             ▼
           HOME          ERROR
             │
             ▼
       sessionStorage
       isLoggedIn=true
             │
             ▼
           LOGOUT
             │
             ▼
       sessionStorage
          remove
```

---

# 28. Eng muhim 6 ta kodni alohida yodlash

O‘quvchi Web Storage'dan quyidagilarni bilishi kerak:

### Ma'lumot saqlash

```js
localStorage.setItem("name", "Ali");
```

### Ma'lumot olish

```js
localStorage.getItem("name");
```

### Ma'lumot o‘chirish

```js
localStorage.removeItem("name");
```

### Hammasini o‘chirish

```js
localStorage.clear();
```

### Object → String

```js
JSON.stringify(user);
```

### String → Object

```js
JSON.parse(userData);
```

---

# 29. Darsni qanday ketma-ketlikda o'tkazish kerak?

Men o‘quvchilarga aynan quyidagi tartibda tushuntirishni tavsiya qilaman:

### 1-dars — Web Storage tushunchasi

```text
Web Storage nima?
localStorage nima?
sessionStorage nima?
```

### 2-dars — localStorage

```js
setItem();
getItem();
removeItem();
clear();
```

### 3-dars — JSON

```js
JSON.stringify();
JSON.parse();
```

### 4-dars — Sign Up

```text
Input
 ↓
Object
 ↓
JSON.stringify()
 ↓
localStorage
```

### 5-dars — Login

```text
localStorage
 ↓
getItem()
 ↓
JSON.parse()
 ↓
email/password
 ↓
if
```

### 6-dars — Session

```js
sessionStorage;
```

### 7-dars — Logout

```js
sessionStorage.removeItem();
```

### 8-dars — Refreshdan keyin Login holatini saqlash

```js
sessionStorage.getItem();
```

---

# 30. Keyingi bosqichda loyihani kuchaytirish

Shundan keyin o‘quvchilarga loyiha sifatida quyidagilarni berish mumkin:

```text
Web Storage Authentication
│
├── Sign Up
├── Login
├── Logout
├── User profile
├── Edit profile
├── Delete account
├── Remember me
├── Dark mode
└── Shopping Cart
```

Keyin esa **Web Storage + DOM + Array + Object** ni birlashtirib:

```text
Mini E-commerce
```

qilsa juda yaxshi amaliy loyiha bo‘ladi.

Masalan:

```text
Products
    ↓
Add to Cart
    ↓
localStorage
    ↓
Refresh
    ↓
Cart saqlanib qoladi
    ↓
Remove Product
    ↓
localStorage yangilanadi
```
