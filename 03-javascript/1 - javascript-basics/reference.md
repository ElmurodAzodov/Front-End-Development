# **JavaScript Basics**

### 🌐 What is JavaScript?

JavaScript — bu web sahifalarga interaktivlik qo‘shish uchun yaratilgan dasturlash tili. U 1995-yilda Brendan Eich tomonidan yaratilgan.

#### Evolution:

- **ES5 (2009)** – barqaror standart
- **ES6 / ES2015** – katta yangilanish (let/const, arrow functions, classes)
- **ES2020+** – zamonaviy imkoniyatlar (optional chaining, nullish coalescing)
- **ES2024+** – yangi sintaksis va performance yaxshilanishlari

---

### 🔧 JavaScript Execution Environments

JavaScript turli muhitlarda ishlaydi:

#### 🌍 Browser (client-side)

- Foydalanuvchi brauzerida ishlaydi
- DOM bilan ishlaydi

#### 🖥️ Node.js (server-side)

- Serverda ishlaydi
- Backend yaratish uchun ishlatiladi

#### ⚡ Deno, Bun

- Zamonaviy runtime muhitlar
- Tezlik va xavfsizlikka e’tibor qaratilgan

---

### 📦 Adding JavaScript to HTML

#### Inline `<script>`

```html
<script>
  console.log("Hello World");
</script>
```

#### External file

```html
<script src="app.js"></script>
```

#### async vs defer

```html
<script src="app.js" async></script>
<script src="app.js" defer></script>
```

- **async** – yuklanishi bilan darhol ishlaydi
- **defer** – HTML to‘liq yuklangandan keyin ishlaydi

#### Module

```html
<script type="module" src="app.js"></script>
```

---

### 💬 Comments

```js
// Single line comment

/*
  Multi-line comment
*/
```

---

### 📄 JavaScript Syntax Basics

- JavaScript **case-sensitive**

```js
let name = "Ali";
let Name = "Vali"; // boshqa o'zgaruvchi
```

- Nuqta-vergul (`;`) ixtiyoriy, lekin tavsiya etiladi

```js
let x = 10;
```

---

### 🚀 JavaScript Versions

| Version | Yil  | Asosiy xususiyatlar                 |
| ------- | ---- | ----------------------------------- |
| ES5     | 2009 | strict mode, JSON                   |
| ES6     | 2015 | let/const, arrow functions, classes |
| ES2020  | 2020 | optional chaining, BigInt           |
| ES2024  | 2024 | yangi array metodlar, performance   |

---
