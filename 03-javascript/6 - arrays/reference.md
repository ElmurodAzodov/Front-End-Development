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

# 📏 Array Properties: `length`

JavaScript arraylaridagi eng muhim propertylardan biri:

```js id="8tzahv"
length;
```

`length` array ichidagi elementlar sonini bildiradi.

---

# Sintaksis

```js id="c2e5e6"
array.length;
```

---

# Oddiy misol

```js id="g8r71u"
const fruits = ["apple", "banana", "orange"];

console.log(fruits.length);
```

Natija:

```js id="9n1v45"
3;
```

---

# `length` nima qaytaradi?

Arraydagi:

> eng katta index + 1

ni qaytaradi.

Bu juda muhim.

---

# Misol

```js id="jsr7kp"
const arr = ["a", "b", "c"];
```

Indexlar:

| Index | Value |
| ----- | ----- |
| 0     | "a"   |
| 1     | "b"   |
| 2     | "c"   |

Eng katta index:

```js id="4uj8tq"
2;
```

Shuning uchun:

```js id="jlwmck"
length === 3;
```

---

# Bo‘sh array

```js id="bmv1b7"
const arr = [];

console.log(arr.length);
```

Natija:

```js id="um0i1u"
0;
```

---

# Length dynamic property

`length` avtomatik yangilanadi.

---

# Element qo‘shilganda

```js id="5gmbhb"
const arr = [1, 2];

arr.push(3);

console.log(arr.length);
```

Natija:

```js id="0m5y6g"
3;
```

---

# Index orqali qo‘shilganda

```js id="8thvcz"
const arr = [1, 2];

arr[2] = 3;

console.log(arr.length);
```

Natija:

```js id="x5vz1u"
3;
```

---

# Massive index

```js id="o4q74k"
const arr = [];

arr[100] = "hello";

console.log(arr.length);
```

Natija:

```js id="6xob9m"
101;
```

---

# Nega 101?

Sabab:

Eng katta index:

```js id="0khb9r"
100;
```

Length:

```js id="q6zcm1"
100 + 1;
```

---

# Sparse Array va length

```js id="zwwa6s"
const arr = [];

arr[5] = "x";

console.log(arr);
console.log(arr.length);
```

Natija:

```js id="civ7to"
[empty × 5, "x"]
6
```

---

# Muhim tushuncha

`length`:

❌ haqiqiy elementlar sonini emas

✅ eng katta index + 1 ni saqlaydi.

---

# Real element count emas

Misol:

```js id="t8kt1t"
const arr = [];

arr[1000] = "x";

console.log(arr.length);
```

Natija:

```js id="3m3q2l"
1001;
```

Lekin real element faqat bitta.

---

# `length` writable property

Bu juda muhim.

JavaScript’da:

```js id="w0m8f8"
length;
```

ni o‘zgartirish mumkin.

---

# Length kamaytirish

```js id="6l3xtf"
const arr = [1, 2, 3, 4];

arr.length = 2;

console.log(arr);
```

Natija:

```js id="4v6cdu"
[1, 2];
```

---

# Nima bo‘ldi?

Array truncate qilindi.

Elementlar o‘chirildi.

---

# Memory behavior

```js id="y3h5sj"
const arr = [1, 2, 3, 4];

arr.length = 1;
```

Qoladigan array:

```js id="h1u5mq"
[1];
```

Qolgan elementlar remove qilinadi.

---

# Length 0 qilish

Arrayni tozalashning mashhur usuli.

```js id="w9uoq6"
const arr = [1, 2, 3];

arr.length = 0;

console.log(arr);
```

Natija:

```js id="ln8qnm"
[];
```

---

# Bu juda tez ishlaydi

Sabab:
engine optimized.

---

# Length oshirish

```js id="5wdb5x"
const arr = [1, 2];

arr.length = 5;

console.log(arr);
```

Natija:

```js id="xv2v3v"
[1, 2, empty × 3]
```

---

# Empty slots yaratiladi

Bu sparse array.

---

# Muhim farq

```js id="kn7hzt"
[undefined, undefined];
```

vs

```js id="g4xk4v"
new Array(2);
```

Ikkinchisida empty slots bor.

---

# Tekshirish

```js id="r0ktn8"
0 in [undefined];
```

Natija:

```js id="8zhz7r"
true;
```

---

```js id="0qv7s8"
0 in new Array(2);
```

Natija:

```js id="v8phvq"
false;
```

---

# Length va loop

Eng ko‘p ishlatiladigan pattern:

```js id="h10uxl"
const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

# Nega `< length`?

Indexlar:

```txt id="xh6z6o"
0 1 2
```

Length:

```txt id="jlwmk0"
3
```

Oxirgi valid index:

```js id="6tr8o0"
length - 1;
```

---

# Common bug

## ❌ Xato

```js id="f5wbqz"
for (let i = 0; i <= arr.length; i++)
```

Bu:

```js id="c6nl0s"
arr[arr.length];
```

ga kiradi.

Natija:

```js id="pkh8l8"
undefined;
```

---

# To‘g‘ri

```js id="w03i7m"
i < arr.length;
```

---

# Length cache qilish

Performance optimization.

---

# Oddiy

```js id="s4q7tx"
for (let i = 0; i < arr.length; i++)
```

Har iterationda `length` o‘qiladi.

---

# Cache version

```js id="cb0h4w"
for (let i = 0, len = arr.length; i < len; i++)
```

---

# Zamonaviy engine

Ko‘pincha optimization qiladi.

Lekin katta looplarda ishlatiladi.

---

# Array methods va length

Ko‘p array methodlar `length` asosida ishlaydi.

---

# forEach

```js id="7l0o5k"
arr.forEach(...)
```

`length` bo‘yicha iterate qiladi.

---

# map

```js id="eoq7v8"
arr.map(...)
```

ham `length` ishlatadi.

---

# Sparse array behavior

```js id="3aq1j6"
const arr = new Array(5);

console.log(arr.length);
```

Natija:

```js id="7ikd8r"
5;
```

Lekin:

```js id="hzpg6w"
arr.forEach((x) => console.log(x));
```

Hech narsa chiqarmaydi.

---

# Sabab

Empty slotlar iterate qilinmaydi.

---

# delete operator va length

Bu juda muhim.

---

# delete element

```js id="9d95yq"
const arr = [1, 2, 3];

delete arr[1];

console.log(arr);
console.log(arr.length);
```

Natija:

```js id="l6dpkm"
[1, empty, 3];
3;
```

---

# Length kamaymadi

Sabab:
`delete` slotni bo‘shatadi.

Element remove qilmaydi.

---

# To‘g‘ri remove usuli

```js id="62zy65"
arr.splice(1, 1);
```

---

# Length descriptor

`length` oddiy property emas.

Special internal behavior bor.

---

# Property descriptor

```js id="g2m4b8"
Object.getOwnPropertyDescriptor([], "length");
```

Natija taxminan:

```js id="1p8oy0"
{
  value: 0,
  writable: true,
  enumerable: false,
  configurable: false
}
```

---

# Writable

```js id="1zh8m8"
arr.length = 0;
```

ishlaydi.

---

# Enumerable emas

Looplarda ko‘rinmaydi.

---

# Configurable emas

Delete qilib bo‘lmaydi.

---

# Maximum array length

JavaScript array max length:

```js id="4d2m9e"
2 ^ (32 - 1);
```

ya’ni:

```js id="pczk46"
4294967295;
```

---

# Invalid length

```js id="3u2h0h"
const arr = [];

arr.length = -1;
```

Natija:

```js id="ckf0jm"
RangeError;
```

---

# Float ham mumkin emas

```js id="11l4az"
arr.length = 3.5;
```

Error.

---

# Valid length

- integer
- > = 0
- <= 2³²−1

---

# Array constructor bilan bog‘liqligi

```js id="f0ljpc"
new Array(5);
```

Bu:

```js id="3qjjfj"
length = 5;
```

bo‘lgan sparse array yaratadi.

---

# fill bilan

```js id="tn8dn8"
new Array(5).fill(0);
```

Natija:

```js id="m3ajlz"
[0, 0, 0, 0, 0];
```

---

# Last element patterns

## Oxirgi element

```js id="0yks7m"
arr[arr.length - 1];
```

---

# Ikkinchi oxirgi

```js id="1sj5om"
arr[arr.length - 2];
```

---

# at() bilan

```js id="lj1y8e"
arr.at(-1);
```

---

# Empty array muammosi

```js id="s91m40"
const arr = [];

console.log(arr[arr.length - 1]);
```

Natija:

```js id="4xpv0m"
undefined;
```

Sabab:

```js id="j6wvh6"
arr[-1];
```

bo‘ladi.

---

# Array-like objects

`length` array-like objectlarda ham ishlatiladi.

---

# Misol

```js id="xk4m2g"
const obj = {
  0: "a",
  1: "b",
  length: 2,
};
```

---

# Array.from()

```js id="2i2nd9"
Array.from(obj);
```

Natija:

```js id="v6ovtz"
["a", "b"];
```

---

# Function arguments

Eski JS’da:

```js id="h8dyjz"
function test() {
  console.log(arguments.length);
}

test(1, 2, 3);
```

Natija:

```js id="mr8w4s"
3;
```

---

# Summary

# `length` nima?

```js id="d1ytk3"
array.length;
```

→ eng katta index + 1

---

# Muhim behaviorlar

## Auto update

```js id="bg1mkk"
arr.push();
```

length oshadi.

---

## Writable

```js id="t4tn1w"
arr.length = 0;
```

array clear qiladi.

---

## Sparse arrays

```js id="2xpgxu"
arr[100] = "x";
```

→ length `101`

---

## delete

```js id="2ww2eh"
delete arr[1];
```

length kamaymaydi.

---

# Muhim formulalar

Oxirgi element:

```js id="2b42zx"
arr[arr.length - 1];
```

Loop:

```js id="lsm3zd"
for(let i = 0; i < arr.length; i++)
```

---

# Eng ko‘p ishlatiladigan patternlar

## Array clear

```js id="1rj22l"
arr.length = 0;
```

---

## Last item

```js id="3dbep7"
arr.at(-1);
```

yoki:

```js id="5hyltu"
arr[arr.length - 1];
```

---

<br>
<br>
<br>
<br>
<br>

# 🛠️ Basic Array Methods

JavaScript array methodlari array bilan ishlashning asosiy qismi hisoblanadi.

Bu methodlar:

- element qo‘shadi
- o‘chiradi
- qidiradi
- transform qiladi
- nusxa yaratadi
- sort qiladi
- stringga aylantiradi
- immutable operation bajaradi

Methodlarni 3 katta bo‘limga ajratamiz:

1. Adding / Removing
2. Accessing
3. Transforming

---

# 🔹 Adding / Removing Methods

---

# 1. `push()` — oxiriga qo‘shish

Array oxiriga element qo‘shadi.

---

# Sintaksis

```js id="a2m9vn"
array.push(element1, element2);
```

---

# Misol

```js id="h7l8x9"
const arr = [1, 2];

arr.push(3);

console.log(arr);
```

Natija:

```js id="vj5m1p"
[1, 2, 3];
```

---

# Bir nechta element

```js id="2n0q8x"
const arr = [1];

arr.push(2, 3, 4);

console.log(arr);
```

Natija:

```js id="2i4l7w"
[1, 2, 3, 4];
```

---

# Return value

`push()` yangi length qaytaradi.

```js id="2e4d1f"
const arr = [1, 2];

const result = arr.push(3);

console.log(result);
```

Natija:

```js id="l6z8xt"
3;
```

---

# Mutation

`push()` original arrayni o‘zgartiradi.

---

# Complexity

```txt id="0z9m0v"
O(1)
```

Juda tez.

---

# Stack konsepti

`push()` stack data structure’da ishlatiladi.

```js id="67h9tv"
stack.push(value);
```

---

# 2. `pop()` — oxiridan o‘chirish

Oxirgi elementni remove qiladi.

---

# Sintaksis

```js id="qqv4fj"
array.pop();
```

---

# Misol

```js id="c7a0xq"
const arr = [1, 2, 3];

const removed = arr.pop();

console.log(arr);
console.log(removed);
```

Natija:

```js id="m6f0qt"
[1, 2];
3;
```

---

# Return value

Remove qilingan elementni qaytaradi.

---

# Empty array

```js id="8oq8qi"
[].pop();
```

Natija:

```js id="f4e2x9"
undefined;
```

---

# Complexity

```txt id="j5h4r3"
O(1)
```

---

# Stack ishlatish

```js id="k6r3n0"
stack.pop();
```

---

# 3. `unshift()` — boshiga qo‘shish

Array boshiga element qo‘shadi.

---

# Sintaksis

```js id="m4v6e1"
array.unshift(element);
```

---

# Misol

```js id="g8r0tf"
const arr = [2, 3];

arr.unshift(1);

console.log(arr);
```

Natija:

```js id="z7n2lv"
[1, 2, 3];
```

---

# Bir nechta element

```js id="z1r7hj"
const arr = [3];

arr.unshift(1, 2);

console.log(arr);
```

Natija:

```js id="q3n8wr"
[1, 2, 3];
```

---

# Return value

Yangi length qaytaradi.

---

# Complexity

```txt id="f7m0az"
O(n)
```

---

# Nega sekin?

Barcha elementlar siljiydi.

---

# Oldin

```txt id="r8f0ta"
0:2
1:3
```

---

# Keyin

```txt id="k6y7wa"
0:1
1:2
2:3
```

---

# 4. `shift()` — boshidan remove

Birinchi elementni remove qiladi.

---

# Sintaksis

```js id="q1g4y5"
array.shift();
```

---

# Misol

```js id="x6f1jv"
const arr = [1, 2, 3];

const removed = arr.shift();

console.log(arr);
console.log(removed);
```

Natija:

```js id="q9u8l1"
[2, 3];
1;
```

---

# Complexity

```txt id="p7e9w2"
O(n)
```

---

# Nega?

Barcha indexlar qayta yoziladi.

---

# Queue structure

```js id="h5t8zs"
queue.shift();
```

---

# 5. `splice()` — universal modify method

Eng kuchli array methodlardan biri.

---

# Nimalar qila oladi?

- remove
- insert
- replace

hammasini bitta method bilan.

---

# Sintaksis

```js id="7r8g2f"
array.splice(start, deleteCount, item1, item2);
```

---

# Parameters

| Param       | Ma’no                    |
| ----------- | ------------------------ |
| start       | qayerdan boshlash        |
| deleteCount | nechta remove            |
| items       | qo‘shiladigan elementlar |

---

# 5.1 Remove qilish

```js id="n3k1d8"
const arr = [1, 2, 3, 4];

arr.splice(1, 2);

console.log(arr);
```

Natija:

```js id="r9a6v7"
[1, 4];
```

---

# Qanday ishladi?

Index `1` dan:

```txt id="0g1r2z"
2,3
```

remove qilindi.

---

# Return value

```js id="m4k2p1"
const arr = [1, 2, 3];

const removed = arr.splice(1, 1);

console.log(removed);
```

Natija:

```js id="r7v3p6"
[2];
```

---

# 5.2 Insert qilish

```js id="v2j6q1"
const arr = [1, 4];

arr.splice(1, 0, 2, 3);

console.log(arr);
```

Natija:

```js id="s1e8l2"
[1, 2, 3, 4];
```

---

# deleteCount = 0

Remove qilmaydi.

Faqat insert qiladi.

---

# 5.3 Replace qilish

```js id="w8u0y4"
const arr = [1, 2, 3];

arr.splice(1, 1, "X");

console.log(arr);
```

Natija:

```js id="m8k7a3"
[1, "X", 3];
```

---

# Negative index

```js id="h0j9n4"
const arr = [1, 2, 3, 4];

arr.splice(-2, 1);

console.log(arr);
```

Natija:

```js id="v6r2w8"
[1, 2, 4];
```

---

# Complexity

```txt id="f8m3t1"
O(n)
```

---

# Mutation

`splice()` original arrayni o‘zgartiradi.

---

# 🔹 Accessing Methods

---

# 6. `indexOf()`

Element indexini topadi.

---

# Sintaksis

```js id="z4t2j7"
array.indexOf(value);
```

---

# Misol

```js id="u7p4c8"
const arr = ["a", "b", "c"];

console.log(arr.indexOf("b"));
```

Natija:

```js id="n6r8e2"
1;
```

---

# Topilmasa

```js id="s9w5q1"
arr.indexOf("x");
```

Natija:

```js id="r3e1v0"
-1;
```

---

# Strict equality ishlatadi

```js id="o5u2h9"
[1].indexOf("1");
```

Natija:

```js id="q4n0k7"
-1;
```

---

# 7. `lastIndexOf()`

Oxiridan qidiradi.

---

# Misol

```js id="e3r6v2"
const arr = [1, 2, 1, 3];

console.log(arr.lastIndexOf(1));
```

Natija:

```js id="b2m8f5"
2;
```

---

# 8. `includes()` (ES7)

Element mavjudligini tekshiradi.

---

# Sintaksis

```js id="u0y8k2"
array.includes(value);
```

---

# Misol

```js id="h4t9z1"
const arr = [1, 2, 3];

console.log(arr.includes(2));
```

Natija:

```js id="d8k3m6"
true;
```

---

# Topilmasa

```js id="j7w2r5"
false;
```

---

# indexOf dan farqi

## Oldin

```js id="w6e3f1"
arr.indexOf(2) !== -1;
```

---

## Hozir

```js id="y5u1n8"
arr.includes(2);
```

ancha readable.

---

# NaN muammosi

```js id="c8r2t7"
[NaN].indexOf(NaN);
```

Natija:

```js id="z3x0q4"
-1;
```

---

```js id="n1m7k9"
[NaN].includes(NaN);
```

Natija:

```js id="f0w4v2"
true;
```

---

# 9. `find()` (ES6)

Condition bo‘yicha element topadi.

---

# Sintaksis

```js id="v5p3x7"
array.find(callback);
```

---

# Misol

```js id="a4u7m1"
const users = [{ id: 1 }, { id: 2 }];

const result = users.find((user) => user.id === 2);

console.log(result);
```

Natija:

```js id="l7r9q0"
{
  id: 2;
}
```

---

# Topilmasa

```js id="t1k6v8"
undefined;
```

---

# find vs filter

## `find()`

Birinchi match qaytaradi.

---

## `filter()`

Barcha matchlarni array sifatida qaytaradi.

---

# 10. `findIndex()`

Condition bo‘yicha index topadi.

---

# Misol

```js id="m0q5j4"
const arr = [5, 10, 15];

const index = arr.findIndex((x) => x > 10);

console.log(index);
```

Natija:

```js id="e8w3t1"
2;
```

---

# Topilmasa

```js id="u7j2c5"
-1;
```

---

# 11. `at()` (ES2022)

Negative indexing uchun.

---

# Misol

```js id="f2m9v6"
const arr = [10, 20, 30];

console.log(arr.at(-1));
```

Natija:

```js id="k6w8q3"
30;
```

---

# Oddiy indexing bilan farqi

```js id="x9p4r2"
arr[-1];
```

ishlamaydi.

---

# `at(0)`

```js id="h1q7e8"
arr.at(0);
```

normal indexing kabi.

---

# 🔹 Transforming Methods

---

# 12. `concat()`

Arraylarni birlashtiradi.

---

# Sintaksis

```js id="s7r3m0"
array.concat(otherArray);
```

---

# Misol

```js id="u4n8v2"
const a = [1, 2];
const b = [3, 4];

const result = a.concat(b);

console.log(result);
```

Natija:

```js id="p6w1k5"
[1, 2, 3, 4];
```

---

# Mutation yo‘q

Original arraylar o‘zgarmaydi.

---

# Multiple arrays

```js id="z5t0x4"
a.concat(b, c, d);
```

---

# Spread alternative

```js id="o2v7j1"
[...a, ...b];
```

---

# 13. `slice()`

Arraydan portion oladi.

---

# Sintaksis

```js id="v8m2p6"
array.slice(start, end);
```

---

# Misol

```js id="t4q9x1"
const arr = [1, 2, 3, 4];

console.log(arr.slice(1, 3));
```

Natija:

```js id="m7w5k0"
[2, 3];
```

---

# End inclusive emas

```txt id="p8v1t7"
1 → included
3 → excluded
```

---

# Copy array

```js id="c0r4n2"
const copy = arr.slice();
```

---

# Negative indexes

```js id="n6j3q8"
arr.slice(-2);
```

Oxirgi 2 element.

---

# Mutation yo‘q

Immutable method.

---

# 14. `join()`

Arrayni stringga aylantiradi.

---

# Sintaksis

```js id="d9m7w1"
array.join(separator);
```

---

# Misol

```js id="j2q8v5"
const arr = ["a", "b", "c"];

console.log(arr.join("-"));
```

Natija:

```js id="r4k0n6"
"a-b-c";
```

---

# Default separator

```js id="u1w5x8"
arr.join();
```

Natija:

```js id="h7t2m9"
"a,b,c";
```

---

# Empty string

```js id="x3v8q1"
arr.join("");
```

Natija:

```js id="n5m0k4"
"abc";
```

---

# 15. `reverse()`

Arrayni teskari qiladi.

---

# Misol

```js id="w8q2m7"
const arr = [1, 2, 3];

arr.reverse();

console.log(arr);
```

Natija:

```js id="t6r9v1"
[3, 2, 1];
```

---

# Mutation

Original array o‘zgaradi.

---

# Complexity

```txt id="k3m7q0"
O(n)
```

---

# 16. `sort()`

Arrayni sort qiladi.

---

# Default behavior

```js id="b9w2t4"
[10, 2, 5].sort();
```

Natija:

```js id="r1x6m8"
[10, 2, 5];
```

---

# Nega?

String sifatida compare qiladi.

---

# To‘g‘ri numeric sort

```js id="u7q1n5"
[10, 2, 5].sort((a, b) => a - b);
```

Natija:

```js id="f4m8w2"
[2, 5, 10];
```

---

# Descending

```js id="g5r9x3"
(a, b) => b - a;
```

---

# Mutation

`sort()` original arrayni o‘zgartiradi.

---

# String sort

```js id="m8q3v6"
["c", "a", "b"].sort();
```

Natija:

```js id="n2t7w1"
["a", "b", "c"];
```

---

# Unicode sorting

`sort()` Unicode order ishlatadi.

---

# 17. `toReversed()` (ES2023)

Immutable reverse.

---

# Misol

```js id="q6m1x8"
const arr = [1, 2, 3];

const result = arr.toReversed();

console.log(result);
console.log(arr);
```

Natija:

```js id="w5r8n2"
[3, 2, 1][(1, 2, 3)];
```

---

# Difference

| Method       | Mutable |
| ------------ | ------- |
| reverse()    | ✅      |
| toReversed() | ❌      |

---

# 18. `toSorted()` (ES2023)

Immutable sort.

---

# Misol

```js id="t1m4q7"
const arr = [3, 1, 2];

const sorted = arr.toSorted();

console.log(sorted);
console.log(arr);
```

Natija:

```js id="v8r2n5"
[1, 2, 3][(3, 1, 2)];
```

---

# Compare function ham ishlaydi

```js id="f5q8m2"
arr.toSorted((a, b) => a - b);
```

---

# 19. `toSpliced()` (ES2023)

Immutable splice.

---

# Misol

```js id="r2m7q1"
const arr = [1, 2, 3];

const result = arr.toSpliced(1, 1);

console.log(result);
console.log(arr);
```

Natija:

```js id="x9w4n6"
[1, 3][(1, 2, 3)];
```

---

# Difference

| Method      | Mutable |
| ----------- | ------- |
| splice()    | ✅      |
| toSpliced() | ❌      |

---

# Mutable vs Immutable

---

# Mutable methods

Original arrayni o‘zgartiradi:

- push
- pop
- shift
- unshift
- splice
- reverse
- sort

---

# Immutable methods

Yangi array qaytaradi:

- concat
- slice
- toSorted
- toReversed
- toSpliced

---

# Real-world recommendation

Modern JavaScript’da immutable methods ko‘proq tavsiya qilinadi.

Sabab:

- predictable
- safer
- React bilan yaxshi ishlaydi
- debugging oson

---

# Eng muhim methodlar

Daily ishlatiladiganlar:

```txt id="v0m6r2"
push
pop
map
filter
find
includes
slice
splice
sort
concat
```

---

# Eng xavfli methodlar

Mutation sabab:

```txt id="y8w1q5"
sort
reverse
splice
```

Ko‘p buglar shu yerda chiqadi.

---

# Summary Table

| Method     | Vazifa                  | Mutable |
| ---------- | ----------------------- | ------- |
| push       | end add                 | ✅      |
| pop        | end remove              | ✅      |
| unshift    | start add               | ✅      |
| shift      | start remove            | ✅      |
| splice     | modify anywhere         | ✅      |
| indexOf    | find index              | ❌      |
| includes   | exists check            | ❌      |
| find       | find element            | ❌      |
| findIndex  | find index by condition | ❌      |
| at         | negative indexing       | ❌      |
| concat     | merge                   | ❌      |
| slice      | extract/copy            | ❌      |
| join       | to string               | ❌      |
| reverse    | reverse                 | ✅      |
| sort       | sort                    | ✅      |
| toReversed | immutable reverse       | ❌      |
| toSorted   | immutable sort          | ❌      |
| toSpliced  | immutable splice        | ❌      |

---

