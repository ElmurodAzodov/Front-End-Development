# **Variables and Data Types — Variable Declarations (var, let, const)**

---

## 1. 📖 Definition

**Variable (o‘zgaruvchi)** — bu xotirada qiymatni saqlash uchun ajratilgan nomlangan joy.

JavaScript’da variable orqali:

- primitive qiymatlar (number, string, boolean, etc.)
- yoki reference qiymatlar (object, array, function)

saqlanadi.

---

## 2. 🎯 Nima uchun kerak (Why it exists)

### Muammo:

Dastur ishlashi davomida:

- ma’lumotlarni vaqtincha saqlash kerak
- qiymatlarni o‘zgartirish kerak
- state boshqarish kerak

### Yechim:

Variable declarations:

- `var`
- `let`
- `const`

ular orqali:

- scope (qaysi hududda ishlashi)
- mutability (o‘zgaruvchanlik)
- lifecycle boshqariladi

---

## 3. ⚙️ Qanday ishlaydi (Under the hood)

### 🔥 Execution Context (bajarilish muhiti)

JavaScript engine (masalan V8) kodni 2 bosqichda ishlaydi:

```text
1. Creation Phase (yaratish bosqichi)
2. Execution Phase (bajarish bosqichi)
```

---

### 🧠 Hoisting (oldindan ko‘tarish)

Variable declarationlar **creation phase** da:

- memoryga joy ajratiladi

#### `var`:

```js
console.log(a); // undefined
var a = 10;
```

Internally:

```text
var a = undefined; // hoisted
```

---

#### `let` va `const`:

```js
console.log(b); // ❌ ReferenceError
let b = 10;
```

👉 Sababi: **Temporal Dead Zone (vaqtinchalik o‘lik zona)**

---

### 📦 Memory Allocation

```text
var → global objectga biriktiriladi (window/globalThis)
let/const → block scope ichida saqlanadi (lexical environment)
```

---

## 4. 🧩 Sintaksis va asosiy ishlatish

---

### 🔴 `var` (function-scoped — funksiyaga bog‘liq scope, legacy — eski usul, hoisting issues — hoisting muammolari)

```js
var x = 10;
```

---

### 🟢 `let` (block-scoped — blokka bog‘liq scope, mutable — o‘zgaruvchan)

```js
let y = 20;
y = 30;
```

---

### 🔵 `const` (block-scoped — blokka bog‘liq scope, immutable reference — referens o‘zgarmaydi)

```js
const z = 40;
```

⚠️ Qayta assign qilish mumkin emas:

```js
z = 50; // ❌ Error
```

---

## 5. 🛠️ Har biri chuqur tahlil

---

### 🔴 `var`

#### 📌 Tavsif:

- Function scoped (faqat function ichida chegaralangan)
- Hoisted (undefined bilan)
- Global scope’da `window`ga ulanadi

#### 📌 Misol:

```js
function test() {
  if (true) {
    var a = 10;
  }
  console.log(a); // 10
}
```

---

#### ⚠️ Edge case:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 3 3 3
```

👉 Sababi: bitta shared variable

---

### 🟢 `let`

#### 📌 Tavsif:

- Block scoped (blok ichida yashaydi)
- Hoisted, lekin TDZ bor
- Reassign qilish mumkin

#### 📌 Misol:

```js
if (true) {
  let a = 10;
}
// console.log(a); ❌
```

---

#### ⚠️ Edge case:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// 0 1 2
```

👉 Har iteration uchun yangi binding

---

### 🔵 `const`

#### 📌 Tavsif:

- Block scoped
- Reassign mumkin emas
- Lekin object ichidagi qiymat o‘zgaradi

#### 📌 Misol:

```js
const obj = { name: "Ali" };
obj.name = "Vali"; // ✅ mumkin
```

---

#### ⚠️ Edge case:

```js
const arr = [];
arr.push(1); // ✅
arr = [1, 2]; // ❌
```

---

## 6. 🔄 Real-world misollar

---

### ✅ Config values

```js
const API_URL = "https://api.example.com";
```

---

### ✅ Mutable state

```js
let count = 0;
count++;
```

---

### ❌ Yomon misol (var ishlatish)

```js
var user = "Ali";
```

---

### ✅ Yaxshi misol

```js
const user = "Ali";
```

---

## 7. ⚠️ Keng tarqalgan xatolar (Pitfalls)

---

### ❌ var bilan global leak

```js
function test() {
  a = 10;
}
```

---

### ❌ const noto‘g‘ri tushunish

```js
const obj = {};
obj = {}; // ❌
```

---

### ❌ TDZ tushunmaslik

```js
console.log(x);
let x = 5;
```

---

## 8. 🧠 Best Practices

---

### ✅ Har doim default:

```js
const
```

---

### ✅ Agar o‘zgaradigan bo‘lsa:

```js
let;
```

---

### ❌ Hech qachon:

```js
var
```

---

### ✅ Naming convention (camelCase — kichik harf bilan boshlanadi, keyingi so‘zlar katta harf bilan)

```js
let userName = "Ali";
let totalPrice = 100;
```

---

### 📛 Qoidalar:

| Qoidalar              | Tavsif       |
| --------------------- | ------------ |
| harf bilan boshlansin | ❌ 1name     |
| maxsus belgilar yo‘q  | ❌ user-name |
| camelCase ishlat      | ✅ userName  |

---

## 9. 🚀 Performance va Memory

---

### var vs let/const

| Feature       | var      | let/const |
| ------------- | -------- | --------- |
| Scope         | function | block     |
| Memory safety | ❌       | ✅        |
| Optimization  | ❌       | ✅        |

---

### Optimization

- `const` → engine optimizatsiya qiladi
- Immutable reference → predictable behavior

---

## 10. 🆚 Eski vs Yangi

| Eski           | Yangi       |
| -------------- | ----------- |
| var            | let / const |
| function scope | block scope |
| unsafe         | safe        |

---

## 11. 🎯 Pro Tips

---

### 🔥 Destructuring bilan const

```js
const { name, age } = user;
```

---

### 🔥 Freeze object

```js
const config = Object.freeze({
  API: "url",
});
```

---

### 🔥 Avoid mutation

```js
const newArr = [...arr, 4];
```

---

## 12. ❓ Interview Questions

1. `var` va `let` farqi?
   → scope + hoisting

2. TDZ nima?
   → let/const ishlatilishdan oldin zona

3. const nimani o‘zgartirmaydi?
   → reference

4. var globalga qanday ulanadi?
   → window orqali

5. block scope nima?
   → {} ichidagi scope

6. hoisting nima?
   → declaration oldinga ko‘chadi

7. let qayta e’lon qilinadimi?
   → ❌ yo‘q

8. const bilan array o‘zgaradimi?
   → ✅ ha

9. var loop bug?
   → closure muammo

10. best practice?
    → const > let > ❌ var

---

## 13. 📌 Xulosa

- `var` — eski, xavfli, ishlatmaslik kerak
- `let` — o‘zgaruvchan qiymatlar uchun
- `const` — default tanlov
- Scope va hoisting — JS’ning eng muhim fundamentlari

---

<br>
<br>
<br>
<br>
<br>

