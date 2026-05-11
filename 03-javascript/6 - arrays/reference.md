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

<br>
<br>
<br>
<br>
<br>

# 📍 Array Indexing (0-based)

JavaScript array elementlariga murojaat qilish uchun **index** ishlatiladi.

Array ichidagi har bir elementning pozitsiyasi bo‘ladi va bu pozitsiya:

- `0` dan boshlanadi
- chapdan o‘ngga qarab oshadi

Shuning uchun JavaScript arraylari **0-based indexing** ishlatadi.

---

# Nima uchun 0-based?

Bu past-level memory addressing konseptidan keladi.

Index aslida:

> array boshidan nechta offset yurilganini bildiradi.

Masalan:

```js id="t4k6mf"
const arr = ["a", "b", "c"];
```

Memory konsepti:

| Index | Value |
| ----- | ----- |
| 0     | "a"   |
| 1     | "b"   |
| 2     | "c"   |

`arr[0]`:

> boshlang‘ichdan 0 ta siljish

`arr[1]`:

> boshlang‘ichdan 1 ta siljish

---

# Basic Access

## Sintaksis

```js id="qmv0gt"
array[index];
```

---

# Misol

```js id="bd5xdu"
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
```

Natija:

```js id="1a4b0h"
apple;
banana;
orange;
```

---

# Index har doim integer

Index:

- `0`
- `1`
- `2`

kabi butun son bo‘ladi.

---

# Length va oxirgi index

Array uzunligi:

```js id="7q86hf"
const arr = ["a", "b", "c"];

console.log(arr.length);
```

Natija:

```js id="f0zhoh"
3;
```

Lekin oxirgi index:

```js id="d1s29l"
2;
```

Sabab:

```txt id="xt6n8w"
0, 1, 2
```

---

# Formula

Oxirgi element indexi:

```js id="is2m34"
array.length - 1;
```

---

# Oxirgi elementni olish

```js id="ulr4r8"
const arr = ["red", "green", "blue"];

console.log(arr[arr.length - 1]);
```

Natija:

```js id="tt7t7q"
blue;
```

---

# Nega `length - 1`?

Agar length:

```js id="f4ny4z"
3;
```

bo‘lsa indexlar:

```txt id="3y4b7i"
0 1 2
```

Eng kattasi `2`.

---

# Dynamic last element

Bu juda muhim pattern.

```js id="whw4v4"
function getLast(arr) {
  return arr[arr.length - 1];
}
```

---

# Index orqali update qilish

Array mutable.

Elementni o‘zgartirish mumkin.

---

# Misol

```js id="6o0rj7"
const fruits = ["apple", "banana", "orange"];

fruits[1] = "grape";

console.log(fruits);
```

Natija:

```js id="1e4b4n"
["apple", "grape", "orange"];
```

---

# Yangi index qo‘shish

```js id="1v73r8"
const arr = [1, 2];

arr[2] = 3;

console.log(arr);
```

Natija:

```js id="q0t16r"
[1, 2, 3];
```

---

# Index skip qilish

```js id="shfdfz"
const arr = [];

arr[5] = "hello";

console.log(arr);
console.log(arr.length);
```

Natija:

```js id="a5sq3s"
[empty × 5, "hello"]
6
```

---

# Sparse Array

Bu:

```js id="uf8vli"
[empty × 5, "hello"]
```

Sparse array deyiladi.

Bo‘sh slotlar mavjud.

---

# Sparse array muammolari

Ba’zi metodlar skip qiladi:

```js id="x53iyj"
const arr = [];

arr[5] = "x";

arr.forEach((v) => console.log(v));
```

Natija:

```js id="ddfxk9"
x;
```

Faqat mavjud element iterate qilinadi.

---

# Undefined vs Empty Slot

Bu juda muhim.

---

# 1. Undefined value

```js id="3a6nlz"
const arr = [undefined];

console.log(arr[0]);
```

Bu yerda element mavjud.

Qiymati `undefined`.

---

# 2. Empty slot

```js id="w1a7wj"
const arr = [];

arr[0] = undefined;
```

vs

```js id="1z7r1n"
const arr = [,];
```

Ikkinchisi empty slot.

---

# Tekshirish

```js id="ycj9mr"
0 in [undefined];
```

Natija:

```js id="0h8hgh"
true;
```

---

```js id="p1o7ud"
0 in [,];
```

Natija:

```js id="42w4om"
false;
```

---

# Negative indexing?

Oddiy bracket syntax negative indexni qo‘llamaydi.

```js id="v4r17k"
const arr = [10, 20, 30];

console.log(arr[-1]);
```

Natija:

```js id="q9sv80"
undefined;
```

---

# Nega?

Array indexlari property hisoblanadi.

Bu aslida:

```js id="xz9o6l"
arr["-1"];
```

ga teng.

---

# at() method

ES2022’dan:

```js id="c2gv2p"
const arr = [10, 20, 30];

console.log(arr.at(-1));
```

Natija:

```js id="yjlwm6"
30;
```

---

# String indexing

String ham indexing ishlatadi.

```js id="x0epuh"
const str = "hello";

console.log(str[0]);
```

Natija:

```js id="mjjg0d"
h;
```

---

# Nested array indexing

Multidimensional arraylarda:

```js id="42t3h8"
const matrix = [
  [1, 2],
  [3, 4],
];

console.log(matrix[0][1]);
```

Natija:

```js id="o9lcrq"
2;
```

---

# Qanday ishladi?

## Step 1

```js id="4s0rpk"
matrix[0];
```

Natija:

```js id="ud1svl"
[1, 2];
```

---

## Step 2

```js id="5ivjnh"
[1, 2][1];
```

Natija:

```js id="vw4vnh"
2;
```

---

# Out of bounds access

Mavjud bo‘lmagan index:

```js id="s7a8rq"
const arr = [1, 2, 3];

console.log(arr[100]);
```

Natija:

```js id="fivv7s"
undefined;
```

---

# Error bo‘lmaydi

JavaScript exception tashlamaydi.

---

# Chaining muammosi

```js id="o0q61u"
const arr = [1, 2, 3];

console.log(arr[100].name);
```

Bu error beradi.

Sabab:

```js id="g2s9ic"
undefined.name;
```

---

# Optional chaining

```js id="t9e5i8"
console.log(arr[100]?.name);
```

Natija:

```js id="on0n9k"
undefined;
```

---

# Array aslida object

Bu juda muhim konsept.

```js id="7q6qav"
const arr = ["a", "b"];
```

Aslida:

```js id="s2r8y2"
{
  0: "a",
  1: "b",
  length: 2
}
```

ga o‘xshash object.

---

# Shu sabab:

```js id="gk8j12"
arr["0"];
```

ishlaydi.

---

# Property qo‘shish mumkin

```js id="7bqf8r"
const arr = [1, 2, 3];

arr.test = "hello";

console.log(arr.test);
```

Natija:

```js id="d4jpj8"
hello;
```

---

# Lekin bu index emas

```js id="dww4y9"
console.log(arr.length);
```

Natija:

```js id="dknqyr"
3;
```

`test` lengthga kirmaydi.

---

# Valid array index nima?

JavaScript’da valid array index:

- 0
- positive integer
- 2³² - 2 gacha

---

# Massive index

```js id="2rvltv"
const arr = [];

arr[999] = "x";

console.log(arr.length);
```

Natija:

```js id="a0o19g"
1000;
```

---

# Index order

```js id="sqnp4l"
const arr = ["a", "b", "c"];
```

Traversal:

```txt id="2a3od0"
0 → 1 → 2
```

---

# Iteration bilan bog‘liqligi

Ko‘p looplar index ishlatadi.

```js id="y43yeu"
const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

# Index-based loop afzalligi

- tez
- full control
- current position ma’lum

---

# Array methods index beradi

Masalan:

```js id="r8z9om"
const arr = ["a", "b", "c"];

arr.forEach((value, index) => {
  console.log(index, value);
});
```

Natija:

```js id="9f5f9w"
0 "a"
1 "b"
2 "c"
```

---

# Common mistakes

---

# ❌ 1. 1-based deb o‘ylash

```js id="0cxr7h"
arr[1];
```

birinchi emas.

Ikkinchi element.

---

# ❌ 2. length bilan access

```js id="5e9f3x"
arr[arr.length];
```

Bu mavjud emas.

---

# To‘g‘risi

```js id="ks9x4f"
arr[arr.length - 1];
```

---

# ❌ 3. Negative index ishlaydi deb o‘ylash

```js id="j1n8zh"
arr[-1];
```

ishlamaydi.

---

# To‘g‘risi

```js id="vjw0v4"
arr.at(-1);
```

---

# Performance haqida

Index access:

```js id="a7m4pf"
arr[i];
```

juda tez.

O(1) complexity.

---

# O(1) nima?

Elementga to‘g‘ridan-to‘g‘ri memory access.

Array katta bo‘lsa ham tezlik deyarli o‘zgarmaydi.

---

# Summary

## Array indexing:

- 0-based
- integer index
- `arr[index]`

---

## Muhim formulalar

Birinchi element:

```js id="sckx42"
arr[0];
```

Oxirgi element:

```js id="pzwj0w"
arr[arr.length - 1];
```

Negative access:

```js id="v8chbo"
arr.at(-1);
```

---

# Muhim tushunchalar

## Array:

- mutable
- indexed
- object-based

---

## Sparse array:

```js id="9c8m5u"
arr[100] = "x";
```

dangerous bo‘lishi mumkin.

---

## Undefined ≠ Empty slot

Bu JavaScript arraylaridagi eng muhim farqlardan biri.

---

<br>
<br>
<br>
<br>
<br>

