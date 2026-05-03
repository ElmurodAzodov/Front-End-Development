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

# Primitive Data Types — ULTIMATE REFERENCE

---

## 1. 📖 Definition

**Primitive Data Types (primitiv ma’lumot turlari)** — bu JavaScript’dagi **eng asosiy, o‘zgarmas (immutable — o‘zgarmaydigan)** qiymat turlari bo‘lib, ular:

- **to‘g‘ridan-to‘g‘ri qiymat sifatida saqlanadi (by value — qiymat orqali saqlash)**
- **heap emas, stack’da (stack — tezkor xotira)** joylashadi
- **reference emas (reference — murojaat emas)**

JavaScript’da 7 ta primitive type mavjud:

| Type                          | Tavsif            |
| ----------------------------- | ----------------- |
| number (son)                  | barcha sonlar     |
| string (matn)                 | tekst             |
| boolean (mantiqiy qiymat)     | true/false        |
| undefined (aniqlanmagan)      | qiymat berilmagan |
| null (bo‘sh qiymat)           | ataylab bo‘sh     |
| symbol (unikal identifikator) | ES6+              |
| bigint (katta butun son)      | ES2020+           |

---

## 2. 🎯 Nima uchun kerak (Why it exists)

### Muammo:

Dasturlashda turli xil ma’lumotlar mavjud:

- sonlar
- matnlar
- mantiqiy qiymatlar
- bo‘sh qiymatlar

Agar bularni ajratmasak:

- type xatolari chiqadi
- performance tushadi
- engine optimizatsiya qila olmaydi

### Yechim:

Primitive types orqali:

- aniq tur (type safety — tur xavfsizligi)
- tez ishlash (fast access — tez murojaat)
- predictability (oldindan bilish mumkin)

---

## 3. ⚙️ Qanday ishlaydi (Under the hood)

### 🧠 Memory Model

```text
Stack (tezkor xotira):
  number, string, boolean, null, undefined, symbol, bigint

Heap (murakkab xotira):
  object, array, function
```

---

### 📦 Value vs Reference

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
```

👉 Bu yerda:

- `a` va `b` alohida qiymatlar
- reference yo‘q

---

### 🔒 Immutability (o‘zgarmaslik)

```js
let str = "hello";
str[0] = "H";

console.log(str); // "hello"
```

👉 string o‘zgarmaydi, yangi string yaratiladi

---

## 4. 🧩 Har bir primitive type chuqur tahlil

---

# 🔢 1. number (son)

---

## 📖 Definition

**number (son)** — JavaScript’da barcha sonlar uchun yagona type.

Bu:

- integer (butun son)
- float (kasr son)
- special qiymatlar

ni o‘z ichiga oladi.

---

## ⚙️ Under the hood

JavaScript number:
👉 **IEEE 754 double precision floating point**

64-bit format:

```text
Sign | Exponent | Fraction
```

---

## 🧩 Misollar

```js
let a = 10; // integer
let b = 10.5; // float
let c = -3;
```

---

## ⚠️ Special qiymatlar

---

### ❗ NaN (Not a Number — son emas)

```js
let x = "hello" * 2;
console.log(x); // NaN
```

---

### ❗ Infinity (cheksizlik)

```js
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
```

---

## ⚠️ Precision muammo

```js
console.log(0.1 + 0.2); // 0.30000000000000004
```

👉 floating point xatosi

---

## 🧠 Best Practice

```js
Number((0.1 + 0.2).toFixed(2));
```

---

## 🚀 Performance

- number tez ishlaydi
- lekin floating math ehtiyot bo‘lish kerak

---

# 🔤 2. string (matn)

---

## 📖 Definition

**string (matn)** — belgilar ketma-ketligi.

---

## 🧩 Yaratish

```js
let a = "hello";
let b = "world";
let c = `template`;
```

---

## 🔥 Template literals (shablon satrlar)

```js
let name = "Ali";
let msg = `Hello ${name}`;
```

---

## ⚙️ Under the hood

- UTF-16 encoding ishlatiladi
- immutable (o‘zgarmas)

---

## ⚠️ Edge case

```js
"5" + 1; // "51"
"5" - 1; // 4
```

👉 coercion (majburiy tur o‘zgartirish)

---

## 🚀 Performance

- string concatenation qimmat
- template literal yaxshiroq

---

# 🔘 3. boolean (mantiqiy qiymat)

---

## 📖 Definition

**boolean (mantiqiy qiymat)** — faqat 2 ta qiymat:

```js
true;
false;
```

---

## ⚙️ Under the hood

ko‘pincha:

```text
true = 1
false = 0
```

---

## 🧩 Misollar

```js
let isActive = true;
let isAdmin = false;
```

---

## 🔄 Truthy / Falsy

Falsy:

```js
(false, 0, "", null, undefined, NaN);
```

---

## ⚠️ Pitfall

```js
if ("0") {
  console.log("true"); // ishlaydi
}
```

---

# ❓ 4. undefined (aniqlanmagan)

---

## 📖 Definition

**undefined (aniqlanmagan)** — variable bor, lekin qiymat yo‘q

---

## 🧩 Misol

```js
let x;
console.log(x); // undefined
```

---

## ⚙️ Under the hood

- JS engine default value sifatida beradi

---

## ⚠️ Pitfall

```js
function test() {}
console.log(test()); // undefined
```

---

# ⛔ 5. null (bo‘sh qiymat)

---

## 📖 Definition

**null (bo‘sh qiymat)** — ataylab bo‘sh qilingan qiymat

---

## 🧩 Misol

```js
let user = null;
```

---

## ⚠️ tarixiy bug

```js
typeof null === "object";
```

👉 bu JavaScript’dagi eski bug

---

## 🆚 null vs undefined

| null             | undefined     |
| ---------------- | ------------- |
| intentional      | default       |
| developer beradi | engine beradi |

---

# 🔑 6. symbol (unikal identifikator)

---

## 📖 Definition

**symbol (unikal identifikator)** — har doim unique qiymat

---

## 🧩 Misol

```js
const id = Symbol("id");
```

---

## ⚙️ Under the hood

- har bir Symbol unique
- object key sifatida ishlatiladi

---

## ⚠️ Edge case

```js
Symbol("a") === Symbol("a"); // false
```

---

## 🚀 Use case

```js
const ID = Symbol();

const user = {
  name: "Ali",
  [ID]: 123,
};
```

---

# 🔢 7. bigint (katta son)

---

## 📖 Definition

**bigint (katta butun son)** — Number limitidan katta sonlar uchun

---

## 🧩 Misol

```js
let big = 123456789012345678901234567890n;
```

---

## ⚙️ Under the hood

- arbitrary precision (cheklanmagan aniqlik)

---

## ⚠️ Pitfall

```js
10n + 10; // ❌ Error
```

---

## 🧠 Best Practice

```js
BigInt(10);
```

---

## 6. 🔄 Real-world misollar

---

### API response

```js
const data = {
  id: 123,
  name: "Ali",
  isActive: true,
  lastLogin: null,
};
```

---

### ID system

```js
const ID = Symbol();
```

---

## 7. ⚠️ Keng tarqalgan xatolar

---

❌ NaN tekshirish

```js
NaN === NaN; // false
```

✅ To‘g‘ri:

```js
Number.isNaN(NaN);
```

---

❌ null vs undefined chalkashish

---

## 8. 🧠 Best Practices

---

- `===` ishlat
- `null` ni intentional ishlat
- `undefined` ni o‘zgartirma
- BigInt faqat kerak bo‘lsa

---

## 9. 🚀 Performance va Memory

---

- primitive → tez
- stack → tez access
- immutable → predictable

---

## 10. 🆚 Eski vs Yangi

| Old           | New      |
| ------------- | -------- |
| faqat number  | bigint   |
| string concat | template |

---

## 11. 🎯 Pro Tips

---

```js
Object.is(NaN, NaN); // true
```

---

```js
typeof null === "object"; // historical bug
```

---

## 12. ❓ Interview Questions

1. primitive vs reference?
2. NaN nima?
3. null vs undefined?
4. bigint qachon ishlatiladi?
5. symbol nima?
6. typeof null?
7. string immutablemi?
8. truthy/falsy?
9. IEEE 754 nima?
10. precision muammo?

---

<br>
<br>
<br>
<br>
<br>
