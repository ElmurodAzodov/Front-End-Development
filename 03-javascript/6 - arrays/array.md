# **Array**

## 1. Array nima?

Array — bu **tartiblangan ro‘yxat**. Undagi har bir element indeks (nomer) orqali murojaat qilinadi. Indeks **0** dan boshlanadi.

```javascript
let mevalar = ["olma", "banan", "apelsin"];
console.log(mevalar[0]); // "olma"
console.log(mevalar[1]); // "banan"
```

---

## 2. Array yaratish usullari

### a) Array literal (eng ko‘p ishlatiladi)

```javascript
let arr = [1, 2, 3];
```

### b) `new Array()` konstruktori

```javascript
let arr = new Array(5); // uzunligi 5 bo‘sh array
let arr2 = new Array(1, 2, 3); // [1, 2, 3]
```

### c) `Array.from()` – iterable obyektlardan array yasash

```javascript
let str = "hello";
let arr = Array.from(str); // ['h','e','l','l','o']
```

### d) `Array.of()` – qiymatlardan array yasash

```javascript
let arr = Array.of(5); // [5] (new Array(5) dan farqi)
```

---

## 3. Array xususiyatlari

- **`length`** – elementlar soni

```javascript
let arr = [10, 20, 30];
console.log(arr.length); // 3
```

- Array’ga istalgan turdagi ma’lumotlar qo‘yish mumkin:

```javascript
let aralash = [1, "matn", true, null, undefined, { ism: "Ali" }, [1, 2]];
```

---

## 4. Asosiy metodlar (elementlarni qo‘shish/olib tashlash)

| Metod                                  | Tavsif                               | O‘zgaruvchanlik |
| -------------------------------------- | ------------------------------------ | --------------- |
| `push(el)`                             | Oxiriga qo‘shadi                     | ✅ o‘zgartiradi |
| `pop()`                                | Oxiridan olib tashlaydi va qaytaradi | ✅              |
| `unshift(el)`                          | Boshiga qo‘shadi                     | ✅              |
| `shift()`                              | Boshidan olib tashlaydi              | ✅              |
| `splice(start, deleteCount, ...items)` | O‘chirish/qo‘shish                   | ✅              |
| `slice(start, end)`                    | Nusxa oladi (o‘zgartirmaydi)         | ❌              |
| `concat(...arrays)`                    | Birlashtiradi                        | ❌              |

```javascript
let arr = [1, 2];
arr.push(3); // [1,2,3]
arr.pop(); // 3, arr [1,2]
arr.unshift(0); // [0,1,2]
arr.shift(); // 0, arr [1,2]
```

---

## 5. Array’ni aylanib chiqish (iteratsiya)

### a) `for` (klassik)

```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

### b) `for...of` (qiymatlar bo‘yicha)

```javascript
for (let qiymat of arr) {
  console.log(qiymat);
}
```

### c) `forEach()` – funksiya beriladi

```javascript
arr.forEach((element, indeks, array) => {
  console.log(indeks, element);
});
```

---

## 6. Transformatsiya metodlari (yangilangan array qaytaradi)

| Metod                      | Tavsif                                               |
| -------------------------- | ---------------------------------------------------- |
| `map(fn)`                  | Har bir elementni o‘zgartirib, yangi array qaytaradi |
| `filter(fn)`               | Shart bo‘yicha filtrlaydi                            |
| `reduce(fn, initial)`      | Bitta qiymatga yig‘adi                               |
| `reduceRight(fn, initial)` | O‘ngdan chapga                                       |
| `sort(fn)`                 | Tartiblaydi (o‘zini o‘zgartiradi)                    |
| `reverse()`                | Teskari qiladi (o‘zini o‘zgartiradi)                 |

```javascript
let sonlar = [1, 2, 3, 4];

let kvadrat = sonlar.map((x) => x * x); // [1,4,9,16]

let juftlar = sonlar.filter((x) => x % 2 === 0); // [2,4]

let yigindi = sonlar.reduce((sum, x) => sum + x, 0); // 10

sonlar.sort((a, b) => a - b); // o‘sish tartibi
```

---

## 7. Qidiruv metodlari

| Metod             | Tavsif                       |
| ----------------- | ---------------------------- |
| `indexOf(el)`     | Birinchi uchragan indeks     |
| `lastIndexOf(el)` | Oxirgi uchragan indeks       |
| `includes(el)`    | Bor/yo‘qligi (true/false)    |
| `find(fn)`        | Shartga mos birinchi element |
| `findIndex(fn)`   | Shartga mos indeks           |
| `some(fn)`        | Kamida bitta mos kelsa true  |
| `every(fn)`       | Hammasi mos kelsa true       |

```javascript
let arr = [5, 12, 8, 130, 44];
let topilgan = arr.find((el) => el > 10); // 12
let indeks = arr.findIndex((el) => el > 10); // 1
let bor = arr.includes(8); // true
```

---

## 8. Array’ni o‘zgartirmaydigan metodlar

- `slice()` – bo‘lak olish
- `concat()` – birlashtirish
- `join(separator)` – string ga aylantiradi
- `toString()` – string ga
- `toLocaleString()`

```javascript
let arr = [1, 2, 3];
let str = arr.join("-"); // "1-2-3"
let nusxa = arr.slice(1); // [2,3]
```

---

## 9. Array’ni tekshirish

```javascript
Array.isArray(arr); // true (typeof arr => "object" beradi, shuning uchun bu kerak)
```

---

## 10. Destructuring (array dan qiymatlarni olish)

```javascript
let [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

let [x, , z] = [10, 20, 30];
console.log(x, z); // 10 30

let [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2,3,4]
```

---

## 11. Spread operator (`...`)

```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let birlashma = [...arr1, ...arr2]; // [1,2,3,4]

let nusxa = [...arr1]; // shallow copy
```

---

## 12. Array’lar bilan ishlashda ehtiyot jihatlar

- Array **obyekt** hisoblanadi, shuning uchun `typeof` – `"object"` qaytaradi.
- `length` o‘zgaruvchan – agar kichikroq qiymat bersangiz, elementlar o‘chib ketadi.
- Array’lar **referens** bo‘yicha uzatiladi:

```javascript
let a = [1, 2];
let b = a;
b.push(3);
console.log(a); // [1,2,3] (a ham o‘zgaradi)
```

- Nusxa olish uchun `slice()` yoki spread `[...arr]` ishlating.

---

## 13. Multidimensional (ko‘p o‘lchamli) array

```javascript
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]); // 6
```

---

## 14. Yangi (ES6+) metodlar

- `flat(depth)` – ichki array’larni tekislaydi
- `flatMap(fn)` – map + flat(1)
- `at(indeks)` – manfiy indeks bilan ishlaydi

```javascript
let nested = [1, [2, [3, [4]]]];
console.log(nested.flat(2)); // [1,2,3,[4]]

let arr = [10, 20, 30];
console.log(arr.at(-1)); // 30 (oxirgi)
```

---

## 15. Amaliy misollar

### a) Takrorlanuvchi elementlarni olib tashlash

```javascript
let uniq = [...new Set([1, 2, 2, 3, 3, 4])]; // [1,2,3,4]
```

### b) Massivni guruhlash

```javascript
let odamlar = [
  { ism: "Ali", yosh: 25 },
  { ism: "Vali", yosh: 30 },
  { ism: "G'ani", yosh: 25 },
];
let guruh = odamlar.reduce((acc, odam) => {
  (acc[odam.yosh] = acc[odam.yosh] || []).push(odam);
  return acc;
}, {});
```

### c) O‘rtacha qiymat

```javascript
let sonlar = [10, 20, 30, 40];
let avg = sonlar.reduce((a, b) => a + b, 0) / sonlar.length;
```

---
