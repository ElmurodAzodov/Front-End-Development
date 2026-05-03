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

# Type Checking — ULTIMATE REFERENCE

---

## 1. 📖 Definition

**Type Checking (tipni tekshirish)** — bu JavaScript’da o‘zgaruvchining **qaysi data type (ma’lumot turi)** ga tegishli ekanligini aniqlash jarayoni.

JavaScript **dynamically typed (dinamik tiplangan)** til bo‘lgani uchun:

- variable tipi oldindan belgilanmaydi
- runtime (ishlash vaqtida) aniqlanadi

Shuning uchun type checking:

- xatolarni oldini olish
- noto‘g‘ri operatsiyalarni aniqlash
- API validation qilish

uchun muhim hisoblanadi.

---

## 2. 🎯 Nima uchun kerak (Why it exists)

### Muammo:

JavaScript’da quyidagi holatlar keng tarqalgan:

```js
"5" + 2; // "52"
"5" - 2; // 3
```

👉 implicit coercion (majburiy tur o‘zgarishi) sabab:

- buglar paydo bo‘ladi
- noto‘g‘ri natijalar chiqadi

---

### Yechim:

Type checking orqali:

- aniq type bilan ishlash
- xavfsiz kod yozish
- runtime errorlarni kamaytirish

---

## 3. ⚙️ Qanday ishlaydi (Under the hood)

### 🧠 Internal [[Class]] va Tag System

JavaScript engine (masalan V8) har bir qiymatga ichki **[[Type]] yoki [[Class]]** beradi:

```text
Number → "number"
String → "string"
Object → "object"
Array → "object" (muammo!)
```

---

### 🔥 typeof operator ichida nima bo‘ladi?

`typeof`:

- qiymatni tekshiradi
- string qaytaradi

```text
typeof value → string
```

---

### ⚠️ Historical bug:

```js
typeof null === "object";
```

👉 Sababi:

- eski implementation (32-bit tag system)
- null pointer → object sifatida belgilangan

---

## 4. 🧩 Sintaksis va asosiy ishlatish

---

# 🔍 1. typeof operator (tipni aniqlash operatori)

---

## 📖 Definition

**typeof operator** — qiymatning tipini aniqlab, string qaytaradi.

---

## 🧩 Syntax

```js
typeof value;
```

---

## 📊 Natijalar

| Value        | Natija      |
| ------------ | ----------- |
| 10           | "number"    |
| "hi"         | "string"    |
| true         | "boolean"   |
| undefined    | "undefined" |
| null         | ❌ "object" |
| {}           | "object"    |
| []           | "object"    |
| function(){} | "function"  |

---

## ⚠️ Edge case

```js
typeof null; // "object" ❌
```

---

```js
typeof []; // "object" ❌ (arrayni aniqlamaydi)
```

---

## 🧠 Best Practice

```js
if (value === null)
```

---

```js
if (Array.isArray(value))
```

---

---

# 🧱 2. instanceof operator (instance tekshirish operatori)

---

## 📖 Definition

**instanceof operator** — object ma’lum constructor’dan (konstruktor funksiyadan) yaratilganmi yoki yo‘qmi tekshiradi.

---

## 🧩 Syntax

```js
obj instanceof Constructor;
```

---

## 🧠 Under the hood

`instanceof`:
👉 prototype chain (prototip zanjiri) bo‘ylab tekshiradi

```text
obj.__proto__ → Constructor.prototype
```

---

## 🧩 Misollar

```js
[] instanceof Array // true
{} instanceof Object // true
```

---

```js
function User() {}
const u = new User();

u instanceof User; // true
```

---

## ⚠️ Edge case

### ❌ Cross-realm muammo (iframe, worker)

```js
iframeArray instanceof Array; // false
```

👉 Sababi: boshqa global context

---

## ⚠️ Primitive bilan ishlamaydi

```js
"hello" instanceof String; // false
```

---

## 🧠 Best Practice

- faqat objectlar uchun ishlat
- array uchun emas (Array.isArray ishlat)

---

---

# 🔢 3. Number.isNaN() vs isNaN()

---

## 📖 Definition

**NaN (Not a Number — son emas)** ni tekshirish uchun 2 xil metod mavjud.

---

## ❌ isNaN() (global funksiya — global tekshiruvchi)

---

### 📌 Tavsif:

- value’ni number’ga o‘giradi (type coercion — majburiy tur o‘zgarishi)
- keyin tekshiradi

---

### 🧩 Misollar

```js
isNaN("hello"); // true ❌
```

👉 Sababi:

```js
Number("hello") → NaN
```

---

## ✅ Number.isNaN() (aniq tekshiruvchi)

---

### 📌 Tavsif:

- faqat NaN bo‘lsa true qaytaradi
- coercion qilmaydi

---

### 🧩 Misollar

```js
Number.isNaN(NaN); // true
Number.isNaN("hello"); // false ✅
```

---

## 📊 Taqqoslash

| Method       | Coercion | Accurate |
| ------------ | -------- | -------- |
| isNaN        | ✅ bor   | ❌ yo‘q  |
| Number.isNaN | ❌ yo‘q  | ✅ aniq  |

---

## 🧠 Best Practice

```js
Number.isNaN(value);
```

---

---

# 📦 4. Array.isArray() (array tekshiruvchi)

---

## 📖 Definition

**Array.isArray()** — qiymat array (massiv) ekanligini aniqlaydi.

---

## 🧩 Syntax

```js
Array.isArray(value);
```

---

## 🧩 Misollar

```js
Array.isArray([]); // true
Array.isArray({}); // false
```

---

## ⚙️ Under the hood

- internal [[Class]] tekshiradi
- cross-realm muammosiz ishlaydi

---

## ⚠️ typeof bilan farqi

```js
typeof []; // "object" ❌
```

---

## 🧠 Best Practice

👉 har doim:

```js
Array.isArray(value);
```

---

## 6. 🔄 Real-world misollar

---

### API validation

```js
function process(data) {
  if (!Array.isArray(data)) {
    throw new Error("Array bo‘lishi kerak");
  }

  return data.map((x) => x * 2);
}
```

---

### Safe type checking

```js
function safeParse(input) {
  if (typeof input !== "string") return null;

  try {
    return JSON.parse(input);
  } catch {
    return null;
  }
}
```

---

## 7. ⚠️ Keng tarqalgan xatolar

---

### ❌ typeof bilan array tekshirish

```js
typeof arr === "array"; // ❌ noto‘g‘ri
```

---

### ❌ isNaN ishlatish

```js
isNaN("123abc"); // true ❌
```

---

### ❌ instanceof primitive

```js
5 instanceof Number; // false
```

---

## 8. 🧠 Best Practices

---

- `typeof` → primitive uchun
- `instanceof` → object uchun
- `Array.isArray` → array uchun
- `Number.isNaN` → NaN uchun

---

## 9. 🚀 Performance va Memory

---

- `typeof` → eng tez
- `instanceof` → prototype chain traversal (sekinroq)
- `Array.isArray` → optimized native

---

## 10. 🆚 Eski vs Yangi

| Eski         | Yangi         |
| ------------ | ------------- |
| isNaN        | Number.isNaN  |
| typeof array | Array.isArray |

---

## 11. 🎯 Pro Tips

---

### 🔥 Universal type check

```js
Object.prototype.toString.call(value);
```

---

```js
Object.prototype.toString.call([]);
// "[object Array]"
```

---

### 🔥 Custom type guard

```js
function isObject(val) {
  return val !== null && typeof val === "object";
}
```

---

## 12. ❓ Interview Questions

1. typeof null nima?
   → "object" (bug)

2. arrayni qanday tekshirasan?
   → Array.isArray

3. instanceof qanday ishlaydi?
   → prototype chain

4. isNaN vs Number.isNaN?
   → coercion vs strict

5. typeof function?
   → "function"

6. primitive instanceof?
   → ishlamaydi

7. cross-realm muammo?
   → instanceof

8. typeof []?
   → object

9. NaN === NaN?
   → false

10. eng xavfsiz type check?
    → combination

---

<br>
<br>
<br>
<br>
<br>

# Type Conversion (Tipni o‘zgartirish) — ULTIMATE REFERENCE

---

## 1. 📖 Definition

**Type Conversion (tipni o‘zgartirish)** — bu JavaScript’da bir data type (ma’lumot turi) ni boshqa turga o‘zgartirish jarayoni.

JavaScript’da bu 2 xil bo‘ladi:

- **Explicit conversion (aniq/qo‘lda o‘zgartirish)**
- **Implicit conversion / Type coercion (avtomatik o‘zgartirish)**

---

## 2. 🎯 Nima uchun kerak (Why it exists)

### Muammo:

JavaScript dynamic typed (dinamik tiplangan), ya’ni:

```js
let x = "10";
let y = 5;
```

Bu yerda:

- biri string (matn)
- biri number (son)

👉 Agar conversion bo‘lmasa:

- operatsiyalar noto‘g‘ri ishlaydi
- buglar chiqadi

---

### Yechim:

Type conversion orqali:

- tur moslashadi
- operatsiyalar to‘g‘ri bajariladi
- input validation qilinadi

---

## 3. ⚙️ Qanday ishlaydi (Under the hood)

JavaScript engine (masalan V8) ichida:

### 🔥 Abstract Operations (ichki operatsiyalar)

```text
ToNumber()
ToString()
ToBoolean()
```

Bu funksiyalar:

- operatorlar ishlaganda avtomatik chaqiriladi

---

### 🔁 Misol:

```js
"5" - 1;
```

Engine:

```text
ToNumber("5") → 5
5 - 1 → 4
```

---

### ⚠️ Murakkab misol:

```js
[] + {};
```

```text
ToPrimitive([]) → ""
ToPrimitive({}) → "[object Object]"
Natija: "[object Object]"
```

---

## 4. 🧩 Explicit Conversion (aniq o‘zgartirish)

---

# 🔢 1. Number() (songa o‘girish)

---

## 📖 Definition

`Number()` — qiymatni number (son) ga o‘giradi.

---

## 🧩 Syntax

```js
Number(value);
```

---

## 🧩 Misollar

```js
Number("123"); // 123
Number("123.45"); // 123.45
Number(""); // 0
Number("hello"); // NaN
```

---

## ⚠️ Edge cases

```js
Number(null); // 0
Number(undefined); // NaN
```

---

## 🧠 Best Practice

- har doim input validation bilan ishlat

---

---

# 🔤 2. String() (matnga o‘girish)

---

## 📖 Definition

`String()` — qiymatni string (matn) ga o‘giradi.

---

## 🧩 Misollar

```js
String(123); // "123"
String(true); // "true"
String(null); // "null"
```

---

## ⚠️ Edge case

```js
String(Symbol()); // ❌ Error
```

---

---

# 🔘 3. Boolean() (mantiqiy qiymatga o‘girish)

---

## 📖 Definition

`Boolean()` — qiymatni true/false ga o‘giradi

---

## 🧩 Misollar

```js
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean("hi"); // true
```

---

## 📊 Falsy values (false bo‘ladigan qiymatlar)

```js
false;
0;
("");
null;
undefined;
NaN;
```

---

---

# 🔢 4. parseInt() (butun songa o‘girish)

---

## 📖 Definition

`parseInt()` — string’dan integer (butun son) chiqaradi

---

## 🧩 Syntax

```js
parseInt(string, radix);
```

---

## 🧩 Misollar

```js
parseInt("123"); // 123
parseInt("123px"); // 123
parseInt("10", 2); // 2
```

---

## ⚠️ Edge case

```js
parseInt("abc"); // NaN
```

---

---

# 🔢 5. parseFloat() (kasr songa o‘girish)

---

## 📖 Definition

`parseFloat()` — string’dan float (kasr son) chiqaradi

---

## 🧩 Misollar

```js
parseFloat("10.5"); // 10.5
parseFloat("10.5px"); // 10.5
```

---

---

# 🔄 Implicit Conversion (type coercion — avtomatik o‘zgartirish)

---

## 📖 Definition

**Implicit conversion (avtomatik o‘zgartirish)** — JavaScript operator ishlaganda type’ni o‘zi o‘zgartiradi.

---

## ⚙️ Qanday ishlaydi

Operatorga qarab:

| Operator | Conversion        |
| -------- | ----------------- |
| +        | stringga o‘giradi |
| -, \*, / | numberga o‘giradi |

---

## 🧩 Misollar

```js
"5" + 2; // "52"
"5" - 2; // 3
true + 1; // 2
```

---

## ⚠️ Murakkab misollar

```js
[] + []       // ""
[] + {}       // "[object Object]"
{} + []       // 0
```

---

## 🧠 Best Practice

👉 implicit conversion’dan qoch

---

---

# 🔁 toString() method (stringga o‘girish metodi)

---

## 📖 Definition

`toString()` — object yoki primitive’ni stringga o‘giradi

---

## 🧩 Misollar

```js
(123).toString(); // "123"
true.toString(); // "true"
```

---

## ⚠️ Edge case

```js
null.toString(); // ❌ Error
undefined.toString(); // ❌ Error
```

---

## 🧠 Alternative

```js
String(null); // "null"
```

---

---

## 6. 🔄 Real-world misollar

---

### Form input parsing

```js
function getAge(input) {
  const age = Number(input);

  if (Number.isNaN(age)) {
    throw new Error("Invalid age");
  }

  return age;
}
```

---

### Boolean logic

```js
const isLoggedIn = Boolean(user);
```

---

### URL params

```js
const page = parseInt(query.page, 10) || 1;
```

---

---

## 7. ⚠️ Keng tarqalgan xatolar (Pitfalls)

---

### ❌ + operator noto‘g‘ri ishlatish

```js
"5" + 2; // "52"
```

---

### ❌ parseInt radixsiz

```js
parseInt("08"); // noaniq
```

---

### ❌ NaN tekshirish

```js
NaN === NaN; // false
```

---

---

## 8. 🧠 Best Practices

---

- Har doim explicit conversion ishlat
- `Number.isNaN` ishlat
- `parseInt` bilan radix ber
- `===` ishlat

---

---

## 9. 🚀 Performance va Memory

---

- implicit conversion → unpredictable
- explicit conversion → optimized

---

---

## 10. 🆚 Eski vs Yangi

| Eski       | Yangi        |
| ---------- | ------------ |
| isNaN      | Number.isNaN |
| + coercion | Number()     |

---

---

## 11. 🎯 Pro Tips

---

### 🔥 Unary plus

```js
+"123"; // 123
```

---

### 🔥 Double NOT (!!)

```js
!!value; // boolean
```

---

### 🔥 Safe number parse

```js
const num = Number(value) || 0;
```

---

---

## 12. ❓ Interview Questions

1. implicit vs explicit?
2. NaN nima?
3. parseInt vs Number?
4. - operator qanday ishlaydi?
5. [] + {} natija?
6. Boolean falsy?
7. toString qayerda ishlamaydi?
8. Number(null)?
9. Number(undefined)?
10. coercion xavfi?

---

---

<br>
<br>
<br>
<br>
<br>

