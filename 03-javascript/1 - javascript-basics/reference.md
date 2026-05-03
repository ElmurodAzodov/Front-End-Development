# **JavaScript Basics — ULTIMATE REFERENCE**

---

## 1. 📖 Definition

**JavaScript** — bu **high-level, interpreted (yoki JIT compiled), single-threaded, event-driven programming language** bo‘lib, u:

- **ECMAScript specification** asosida ishlaydi
- **Dynamic typing** ga ega
- **Prototype-based object-oriented** modeldan foydalanadi
- **Garbage-collected memory management** ga ega

JavaScript quyidagi muhitlarda ishlaydi:

- **Browser (client-side)** — DOM, BOM bilan ishlaydi
- **Server-side (Node.js, Deno, Bun)** — backend, API, CLI tools

---

## 2. 🎯 Nima uchun kerak (Why it exists)

### Muammo (1990-yillar):

Web sahifalar statik edi:

- HTML → struktura
- CSS → dizayn
- ❌ Interaktivlik yo‘q

### Yechim:

JavaScript yaratildi:

- Dynamic UI
- User interaction (click, input)
- Network requests (AJAX → Fetch API)
- Real-time apps

### Evolution:

| Versiya      | Yil    | O‘zgarish                          |
| ------------ | ------ | ---------------------------------- |
| ES5          | 2009   | Stable base                        |
| ES6 (ES2015) | 2015   | let/const, arrow, classes          |
| ES2020+      | 2020+  | optional chaining, nullish, BigInt |
| ES2024+      | modern | groupBy, withResolvers             |

---

## 3. ⚙️ Qanday ishlaydi (Under the hood)

### 🔥 JS Engine (V8 misolida)

JavaScript **interpreted emas faqat**, balki:
👉 **Just-In-Time (JIT) compiled**

### Pipeline:

```
Source Code
   ↓
Parser → AST (Abstract Syntax Tree)
   ↓
Ignition (Interpreter)
   ↓
TurboFan (Optimizer)
   ↓
Machine Code
```

---

### 🧠 Memory Model

```
Stack (primitive values)
Heap (objects, arrays, functions)
```

```js
let a = 10; // stack
let obj = { x: 1 }; // heap
```

---

### 🧵 Single Thread + Event Loop

JavaScript:

- Single-threaded
- Async behavior → Event Loop orqali

```
Call Stack
   ↓
Web APIs
   ↓
Task Queue / Microtask Queue
```

---

## 4. 🧩 Sintaksis va asosiy ishlatish

### Case-sensitive

```js
let name = "Ali";
let Name = "Vali"; // boshqa variable
```

---

### Semicolon

```js
let a = 10;
let b = 20;
```

ASI (Automatic Semicolon Insertion) ishlaydi, lekin:

⚠️ Xavfli:

```js
return;
{
  name: "Ali";
}
```

---

### Script qo‘shish

```html
<script src="app.js" defer></script>
```

---

### async vs defer

| Feature         | async | defer |
| --------------- | ----- | ----- |
| Blocking        | ❌    | ❌    |
| Execution order | ❌    | ✅    |
| DOM ready       | ❌    | ✅    |

---

### Module

```html
<script type="module" src="main.js"></script>
```

```js
import { sum } from "./math.js";
```

---

## 5. 🛠️ JavaScript Execution Environments

### 🌐 Browser

- DOM
- window object
- fetch, localStorage

```js
console.log(window.location.href);
```

---

### 🖥️ Node.js

- File system
- process
- global

```js
console.log(process.env.NODE_ENV);
```

---

### ⚡ Deno / Bun

| Feature     | Node   | Deno | Bun       |
| ----------- | ------ | ---- | --------- |
| Security    | ❌     | ✅   | ❌        |
| TS support  | ❌     | ✅   | ✅        |
| Performance | medium | high | very high |

---

## 6. 🔄 Real-world misollar

### DOM + Event

```js
document.querySelector("#btn").addEventListener("click", () => {
  console.log("Clicked");
});
```

---

### Fetch API

```js
async function getUsers() {
  const res = await fetch("/api/users");
  const data = await res.json();
  return data;
}
```

---

### Module structure

```js
// math.js
export const sum = (a, b) => a + b;

// main.js
import { sum } from "./math.js";
console.log(sum(2, 3));
```

---

## 7. ⚠️ Keng tarqalgan xatolar (Pitfalls)

### ❌ ASI muammosi

```js
return;
10;
```

---

### ❌ Global pollution

```js
x = 10; // global leak
```

---

### ❌ Script loading

```html
<script src="app.js"></script>
<!-- DOM hali ready emas -->
```

---

## 8. 🧠 Best Practices

✅ Always use:

```js
"use strict";
```

✅ Prefer:

- `const` > `let` > ❌ `var`
- `===` instead of `==`
- modules (`import/export`)

---

## 9. 🚀 Performance va Memory

### defer vs async

- `defer` → optimal for large apps
- `async` → analytics, ads

---

### Memory leaks

```js
let cache = [];
function add() {
  cache.push(new Array(1000000));
}
```

---

## 10. 🆚 Eski vs Yangi usullar

| Eski      | Yangi       |
| --------- | ----------- |
| var       | let/const   |
| require   | import      |
| callbacks | async/await |

---

## 11. 🎯 Pro Tips

### ✅ Use modules always

```js
export default function () {}
```

---

### ✅ Avoid global scope

```js
(() => {
  // isolated scope
})();
```

---

### ✅ Lazy loading

```js
const module = await import("./heavy.js");
```

---

## 12. ❓ Interview Questions

1. JavaScript interpretedmi yoki compiledmi?
   → JIT compiled

2. Event Loop nima?
   → Async tasklarni boshqaradi

3. async vs defer?
   → Execution order vs parallel

4. Global scope nima?
   → window/globalThis

5. JS single-threadedmi?
   → Ha, lekin async orqali parallel illusion

6. Hoisting nima?
   → Declaration oldinga ko‘chadi

7. ES6 nima?
   → Major update (2015)

8. Module nima?
   → Code isolation

9. strict mode nima?
   → Errorlarni qattiq qiladi

10. JS engine nima?
    → Code execution engine (V8)

---

## 13. 📌 Xulosa

JavaScript:

- Web’ning asosiy tili
- Multi-environment (browser + server)
- Async va event-driven modelga ega
- Doim rivojlanib boradi (ES6+)

👉 Bu bo‘lim — foundation
👉 Keyingi barcha mavzular shunga tayanadi

---
