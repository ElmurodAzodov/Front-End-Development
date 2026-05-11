# **Arrays - Massivlar**

# 🆕 Array Creation (JavaScript)

JavaScript’da **Array** — bir nechta qiymatlarni bitta o‘zgaruvchida saqlash uchun ishlatiladigan obyekt turidir.

Masalan:

```js
const fruits = ["apple", "banana", "orange"];
```

Bu yerda `fruits` ichida 3 ta qiymat saqlanmoqda.

---

# 1. `[]` Literal Syntax

Bu array yaratishning **eng ko‘p ishlatiladigan**, **eng tez**, va **eng tavsiya etilgan** usuli.

## Sintaksis

```js
const arr = [];
```

Yoki qiymatlar bilan:

```js
const numbers = [1, 2, 3, 4];
```

---

# Literal nima?

`[]` orqali to‘g‘ridan-to‘g‘ri array yozish “array literal” deyiladi.

JavaScript engine arrayni darhol yaratadi.

---

# Misollar

## Bo‘sh array

```js
const arr = [];

console.log(arr);
```

Natija:

```js
[];
```

---

## String array

```js
const fruits = ["apple", "banana", "orange"];

console.log(fruits);
```

Natija:

```js
["apple", "banana", "orange"];
```

---

## Number array

```js
const numbers = [10, 20, 30];

console.log(numbers);
```

---

## Mixed array

JavaScript array ichida turli datatype bo‘lishi mumkin.

```js
const mixed = [1, "hello", true, null];

console.log(mixed);
```

Natija:

```js
[1, "hello", true, null];
```

---

## Nested array

Array ichida array saqlash mumkin.

```js
const matrix = [
  [1, 2],
  [3, 4],
];

console.log(matrix);
```

---

# Array ichida obyekt

```js
const users = [{ name: "Ali" }, { name: "Vali" }];

console.log(users);
```

---

# Trailing comma

Oxirida vergul qoldirish mumkin.

```js
const arr = [1, 2, 3];
```

Bu syntax error emas.

Katta loyihalarda git diff uchun qulay.

---

# Sparse Array (bo‘sh joyli array)

```js
const arr = [1, , 3];

console.log(arr);
```

Natija:

```js
[1, empty, 3];
```

Bu yerda index `1` bo‘sh.

Bu tavsiya etilmaydi.

---

# Array uzunligi

```js
const arr = [1, 2, 3];

console.log(arr.length);
```

Natija:

```js
3;
```

---

# Array index

Array 0-indexed.

```js
const colors = ["red", "green", "blue"];

console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
```

Natija:

```js
red;
green;
blue;
```

---

# Literal syntax nega eng yaxshi?

## 1. Tez

Engine optimizatsiya qiladi.

---

## 2. O‘qilishi oson

```js
const arr = [1, 2, 3];
```

---

## 3. Xavfsiz

`new Array()` dagi ba’zi chalkashliklar yo‘q.

---

# 2. `new Array()` Constructor

Bu array yaratishning eski usuli.

## Sintaksis

```js
const arr = new Array();
```

Yoki:

```js
const arr = new Array(1, 2, 3);
```

---

# Oddiy misol

```js
const fruits = new Array("apple", "banana");

console.log(fruits);
```

Natija:

```js
["apple", "banana"];
```

---

# Muammo: Bitta number argument

Mana asosiy xavf.

```js
const arr = new Array(5);

console.log(arr);
```

Natija:

```js
[empty × 5]
```

Bu:

```js
[5];
```

emas.

Bu 5 ta bo‘sh joyli array yaratadi.

---

# Length

```js
const arr = new Array(5);

console.log(arr.length);
```

Natija:

```js
5;
```

Lekin qiymatlar yo‘q.

---

# Sparse array muammosi

```js
const arr = new Array(3);

console.log(arr[0]);
```

Natija:

```js
undefined;
```

Lekin bu oddiy `undefined` emas — slot bo‘sh.

---

# map ishlamasligi

```js
const arr = new Array(3);

arr.map((x) => 1);
```

Natija:

```js
[empty × 3]
```

Sabab:
`map()` bo‘sh slotlarni iterate qilmaydi.

---

# To‘ldirish uchun fill()

```js
const arr = new Array(3).fill(0);

console.log(arr);
```

Natija:

```js
[0, 0, 0];
```

---

# Nega `new Array()` tavsiya etilmaydi?

## 1. Chalkash behavior

```js
new Array(5);
```

vs

```js
new Array("5");
```

Farq qiladi.

---

## 2. Sparse array yaratadi

Bu ko‘p buglarga sabab bo‘ladi.

---

## 3. Literal syntax ancha yaxshi

Shuning uchun zamonaviy JS’da:

```js
[];
```

ishlatiladi.

---

# `new Array()` qachon ishlatiladi?

Kam hollarda.

Masalan oldindan size berish.

```js
const buffer = new Array(1000);
```

Lekin ko‘pincha:

```js
Array(1000).fill(0);
```

ishlatiladi.

---

# 3. `Array.from()` (ES6+)

Bu juda muhim metod.

`Array.from()` iterable yoki array-like object’dan haqiqiy array yaratadi.

---

# Sintaksis

```js
Array.from(iterable);
```

Yoki:

```js
Array.from(iterable, mapFn);
```

---

# Iterable nima?

Quyidagilar iterable:

- String
- Set
- Map
- NodeList
- Generator
- va boshqalar

---

# 3.1 String → Array

```js
const arr = Array.from("hello");

console.log(arr);
```

Natija:

```js
["h", "e", "l", "l", "o"];
```

---

# Spread bilan farqi

```js
[..."hello"];
```

ham ishlaydi.

Lekin `Array.from()` ko‘proq imkoniyat beradi.

---

# 3.2 Set → Array

```js
const set = new Set([1, 2, 3]);

const arr = Array.from(set);

console.log(arr);
```

Natija:

```js
[1, 2, 3];
```

---

# 3.3 NodeList → Array

DOM’da juda ishlatiladi.

```js
const divs = document.querySelectorAll("div");

const arr = Array.from(divs);
```

Sabab:
`querySelectorAll()` NodeList qaytaradi.

---

# 3.4 Array-like object

Masalan:

```js
const obj = {
  0: "a",
  1: "b",
  length: 2,
};

const arr = Array.from(obj);

console.log(arr);
```

Natija:

```js
["a", "b"];
```

---

# Array-like object nima?

Quyidagilar bo‘lsa:

- indexlar mavjud
- `length` mavjud

unda array-like hisoblanadi.

---

# 3.5 Mapping function

Bu juda powerful feature.

```js
const arr = Array.from([1, 2, 3], (x) => x * 2);

console.log(arr);
```

Natija:

```js
[2, 4, 6];
```

---

# map() bilan farqi

Bu:

```js
Array.from([1, 2, 3], fn);
```

quyidagiga o‘xshaydi:

```js
Array.from([1, 2, 3]).map(fn);
```

Lekin samaraliroq.

---

# 3.6 Range yaratish

Python’dagi `range()` ga o‘xshash.

---

## 1 dan 5 gacha

```js
const arr = Array.from({ length: 5 }, (_, i) => i + 1);

console.log(arr);
```

Natija:

```js
[1, 2, 3, 4, 5];
```

---

# Bu qanday ishlaydi?

## `{ length: 5 }`

Array-like object.

---

## `_`

Elementning o‘zi.

Bu yerda qiymat yo‘q.

---

## `i`

Index.

---

# 0 dan 9 gacha

```js
const arr = Array.from({ length: 10 }, (_, i) => i);

console.log(arr);
```

---

# Alphabet yaratish

```js
const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i),
);

console.log(alphabet);
```

---

# 3.7 Duplicate array copy

```js
const arr1 = [1, 2, 3];

const arr2 = Array.from(arr1);

console.log(arr2);
```

---

# Shallow copy

Bu shallow copy qiladi.

Nested objectlar clone bo‘lmaydi.

```js
const arr1 = [{ a: 1 }];

const arr2 = Array.from(arr1);

arr2[0].a = 100;

console.log(arr1);
```

Natija:

```js
[{ a: 100 }];
```

---

# 4. `Array.of()` (ES6+)

Bu metod argumentlardan array yaratadi.

---

# Sintaksis

```js
Array.of(element1, element2);
```

---

# Misol

```js
const arr = Array.of(1, 2, 3);

console.log(arr);
```

Natija:

```js
[1, 2, 3];
```

---

# Nega kerak?

Asosiy sabab:
`new Array()` muammosini hal qilish.

---

# Farq

## `new Array(5)`

```js
const arr = new Array(5);

console.log(arr);
```

Natija:

```js
[empty × 5]
```

---

## `Array.of(5)`

```js
const arr = Array.of(5);

console.log(arr);
```

Natija:

```js
[5];
```

---

# Bir nechta qiymat

```js
const arr = Array.of(1, 2, 3);

console.log(arr);
```

---

# Turli datatype

```js
const arr = Array.of(1, "hello", true);

console.log(arr);
```

---

# `[]` bilan farqi

Amalda deyarli farq yo‘q.

```js
[1, 2, 3];
```

vs

```js
Array.of(1, 2, 3);
```

Lekin `Array.of()` function style’da foydali.

---

# `Array.of()` qachon foydali?

## Dynamic API

```js
function createArray(...items) {
  return Array.of(...items);
}
```

---

# `Array.of()` va `Array.from()` farqi

## `Array.of()`

Argumentlardan array yaratadi.

```js
Array.of(1, 2, 3);
```

---

## `Array.from()`

Iterable’dan array yaratadi.

```js
Array.from("abc");
```

---

# Muhim farqlar jadvali

| Method         | Maqsad                      |
| -------------- | --------------------------- |
| `[]`           | Oddiy array yaratish        |
| `new Array()`  | Constructor orqali yaratish |
| `Array.from()` | Iterable → array            |
| `Array.of()`   | Argument → array            |

---

# Eng tavsiya etiladigan usullar

## Oddiy array

```js
[];
```

---

## Iterable convert qilish

```js
Array.from();
```

---

## `new Array()` ishlatmaslikka harakat qiling

Sabab:

- confusing behavior
- sparse arrays
- readability past

---

# Real-world tavsiyalar

## ✅ Preferred

```js
const arr = [];
```

```js
const arr = [1, 2, 3];
```

```js
const arr = Array.from(set);
```

---

## ⚠️ Ehtiyot bo‘ling

```js
new Array(10);
```

---
