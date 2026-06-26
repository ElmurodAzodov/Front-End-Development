# JavaScript — Array Metodlari To'liq Qo'llanma

> **Belgilar:**
>
> - 🔴 **O'zgartiradi** — asl massivni o'zgartiradi
> - 🔵 **Yangi qaytaradi** — yangi massiv/qiymat qaytaradi, asl massiv saqlanib qoladi
> - 🟢 **true/false** — boolean qaytaradi
> - 🟡 **String** — string qaytaradi

---

## 1. Qo'shish va O'chirish

### `.push()` 🔴 O'zgartiradi

Massiv **oxiriga** bir yoki bir nechta element qo'shadi. Yangi uzunlikni qaytaradi.

```js
let arr = ["olma", "anor"];
arr.push("uzum");
console.log(arr); // ["olma", "anor", "uzum"]  |  qaytaradi: 3
```

---

### `.pop()` 🔴 O'zgartiradi

Massiv **oxiridagi** elementni olib tashlaydi va uni qaytaradi.

```js
let arr = ["olma", "anor", "uzum"];
let oxirgi = arr.pop();
console.log(oxirgi); // "uzum"
console.log(arr); // ["olma", "anor"]
```

---

### `.unshift()` 🔴 O'zgartiradi

Massiv **boshiga** bir yoki bir nechta element qo'shadi. Yangi uzunlikni qaytaradi.

```js
let arr = ["anor", "uzum"];
arr.unshift("olma");
console.log(arr); // ["olma", "anor", "uzum"]  |  qaytaradi: 3
```

---

### `.shift()` 🔴 O'zgartiradi

Massiv **boshidagi** elementni olib tashlaydi va uni qaytaradi.

```js
let arr = ["olma", "anor", "uzum"];
let birinchi = arr.shift();
console.log(birinchi); // "olma"
console.log(arr); // ["anor", "uzum"]
```

---

### `.splice()` 🔴 O'zgartiradi

Massivdan element **o'chiradi** va/yoki yangi elementlar **qo'shadi**.  
`splice(start, deleteCount, ...items)`

```js
let arr = ["a", "b", "c", "d"];
// 1-indeksdan 2ta o'chirib "X" qo'shadi
arr.splice(1, 2, "X");
console.log(arr); // ["a", "X", "d"]  |  qaytaradi: ["b","c"] (o'chirilganlar)
```

---

## 2. Qidirish va Iteratsiya

### `.indexOf()` 🔵 Yangi qaytaradi

Elementning **birinchi** marta uchragan indeksini qaytaradi. Topilmasa `-1` qaytaradi.

```js
let arr = ["olma", "anor", "uzum", "anor"];
console.log(arr.indexOf("anor")); // 1
console.log(arr.indexOf("nok")); // -1
```

---

### `.lastIndexOf()` 🔵 Yangi qaytaradi

Elementning **oxirgi** marta uchragan indeksini qaytaradi.

```js
let arr = ["a", "b", "a", "c", "a"];
console.log(arr.lastIndexOf("a")); // 4
```

---

### `.find()` 🔵 Yangi qaytaradi

Shartni qanoatlantirgan **birinchi elementning o'zini** qaytaradi. Topilmasa `undefined`.

```js
let sonlar = [3, 7, 12, 5, 18];
let natija = sonlar.find((n) => n > 10);
console.log(natija); // 12
```

---

### `.findIndex()` 🔵 Yangi qaytaradi

Shartni qanoatlantirgan **birinchi elementning indeksini** qaytaradi.

```js
let sonlar = [3, 7, 12, 5, 18];
let idx = sonlar.findIndex((n) => n > 10);
console.log(idx); // 2
```

---

### `.findLast()` 🔵 Yangi qaytaradi _(ES2023)_

Shartni qanoatlantirgan **oxirgi elementni** qaytaradi.

```js
let sonlar = [3, 7, 12, 5, 18, 4];
let natija = sonlar.findLast((n) => n > 10);
console.log(natija); // 18
```

---

### `.findLastIndex()` 🔵 Yangi qaytaradi _(ES2023)_

Shartni qanoatlantirgan **oxirgi elementning indeksini** qaytaradi.

```js
let sonlar = [3, 7, 12, 5, 18, 4];
let idx = sonlar.findLastIndex((n) => n > 10);
console.log(idx); // 4
```

---

### `.entries()` 🔵 Yangi qaytaradi

`[indeks, qiymat]` juftliklaridan iborat iterator qaytaradi.

```js
let arr = ["olma", "anor", "uzum"];
for (let [i, v] of arr.entries()) {
  console.log(i + ": " + v);
}
// 0: olma
// 1: anor
// 2: uzum
```

---

### `.keys()` 🔵 Yangi qaytaradi

Massiv **indekslaridan** iborat iterator qaytaradi.

```js
let arr = ["a", "b", "c"];
for (let key of arr.keys()) {
  console.log(key); // 0, 1, 2
}
```

---

### `.values()` 🔵 Yangi qaytaradi

Massiv **qiymatlaridan** iborat iterator qaytaradi.

```js
let arr = ["a", "b", "c"];
for (let val of arr.values()) {
  console.log(val); // a, b, c
}
```

---

## 3. Aylantirish (Transformation)

### `.map()` 🔵 Yangi qaytaradi

Har bir elementni **o'zgartirib yangi massiv** qaytaradi. Asl massiv o'zgarmaydi.

```js
let sonlar = [1, 2, 3, 4];
let ikkilangan = sonlar.map((n) => n * 2);
console.log(ikkilangan); // [2, 4, 6, 8]
console.log(sonlar); // [1, 2, 3, 4]  — o'zgarmagan
```

---

### `.filter()` 🔵 Yangi qaytaradi

Shartni qanoatlantirgan elementlardan **yangi massiv** qaytaradi.

```js
let sonlar = [1, 2, 3, 4, 5, 6];
let juftlar = sonlar.filter((n) => n % 2 === 0);
console.log(juftlar); // [2, 4, 6]
```

---

### `.reduce()` 🔵 Yangi qaytaradi

Barcha elementlarni **bitta qiymatga** kamaytiradi. Yig'indi, ko'paytma va h.k.

```js
let sonlar = [1, 2, 3, 4, 5];
let yigindi = sonlar.reduce((acc, n) => acc + n, 0);
console.log(yigindi); // 15
```

---

### `.reduceRight()` 🔵 Yangi qaytaradi

`reduce()` ga o'xshash, lekin **o'ngdan chapga** qarab ishlaydi.

```js
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let birlashgan = arr.reduceRight((acc, cur) => acc.concat(cur), []);
console.log(birlashgan); // [5, 6, 3, 4, 1, 2]
```

---

### `.forEach()` 🔵 Yangi qaytaradi

Har bir element ustida funksiya chaqiradi. **Hech narsa qaytarmaydi** (`undefined`).

```js
let mevalar = ["olma", "anor", "uzum"];
mevalar.forEach((meva, i) => {
  console.log(i + ": " + meva);
});
// 0: olma
// 1: anor
// 2: uzum
```

---

### `.flat()` 🔵 Yangi qaytaradi

Ichma-ich massivlarni **tekis** qiladi. Chuqurlikni argument sifatida berish mumkin.

```js
let arr = [1, [2, 3], [4, [5, 6]]];
console.log(arr.flat()); // [1, 2, 3, 4, [5, 6]]  — 1 daraja
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]    — 2 daraja
```

---

### `.flatMap()` 🔵 Yangi qaytaradi

`map()` + `flat(1)` birgalikda. Har elementni massivga aylantiradi va tekislaydi.

```js
let jumlalar = ["salom dunyo", "men dasturchi"];
let sozlar = jumlalar.flatMap((j) => j.split(" "));
console.log(sozlar); // ["salom","dunyo","men","dasturchi"]
```

---

## 4. Tekshirish

### `.includes()` 🟢 true/false

Massivda element **bor-yo'qligini** tekshiradi.

```js
let arr = ["olma", "anor", "uzum"];
console.log(arr.includes("anor")); // true
console.log(arr.includes("nok")); // false
```

---

### `.every()` 🟢 true/false

**Barcha** elementlar shartni qanoatlantirsa `true`, bitta ham qanoatlanmasa `false`.

```js
let sonlar = [2, 4, 6, 8];
console.log(sonlar.every((n) => n % 2 === 0)); // true  (hammasi juft)
```

---

### `.some()` 🟢 true/false

**Kamida bitta** element shartni qanoatlantirsa `true` qaytaradi.

```js
let sonlar = [1, 3, 5, 6, 7];
console.log(sonlar.some((n) => n % 2 === 0)); // true  (6 juft)
```

---

## 5. Boshqa Metodlar

### `.slice()` 🔵 Yangi qaytaradi

Massivning bir qismini yangi massiv sifatida qaytaradi. **Asl massiv o'zgarmaydi.**  
`slice(start, end)`

```js
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(1, 3)); // ["b","c"]  — 1,2 indeks
console.log(arr.slice(-2)); // ["d","e"]  — oxirgi 2ta
console.log(arr); // o'zgarmagan
```

---

### `.concat()` 🔵 Yangi qaytaradi

Ikki yoki undan ko'p massivni **birlashtiradi**. Asl massivlar o'zgarmaydi.

```js
let a = [1, 2, 3];
let b = [4, 5];
let c = a.concat(b, [6, 7]);
console.log(c); // [1, 2, 3, 4, 5, 6, 7]
```

---

### `.join()` 🟡 String

Massiv elementlarini **string sifatida birlashtiradi**. Ajratuvchi belgi beriladi.

```js
let arr = ["olma", "anor", "uzum"];
console.log(arr.join(", ")); // "olma, anor, uzum"
console.log(arr.join(" - ")); // "olma - anor - uzum"
console.log(arr.join("")); // "olmaaanoruzum"
```

---

### `.reverse()` 🔴 O'zgartiradi

Massiv elementlarini **teskari tartibga** o'zgartiradi. Asl massivni o'zgartiradi!

```js
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]
```

---

### `.sort()` 🔴 O'zgartiradi

Massivni **saralaydi**. Raqamlar uchun taqqoslash funksiyasi berish shart!

```js
let mevalar = ["uzum", "olma", "anor"];
mevalar.sort();
console.log(mevalar); // ["anor","olma","uzum"]

let sonlar = [10, 2, 5, 1, 8];
sonlar.sort((a, b) => a - b); // o'sish tartibida
console.log(sonlar); // [1, 2, 5, 8, 10]
```

---

### `.fill()` 🔴 O'zgartiradi

Massivni bir **qiymat bilan to'ldiradi**.  
`fill(value, start, end)`

```js
let arr = [1, 2, 3, 4, 5];
arr.fill(0, 1, 4);
console.log(arr); // [1, 0, 0, 0, 5]

let yangi = new Array(5).fill(7);
console.log(yangi); // [7, 7, 7, 7, 7]
```

---

### `.copyWithin()` 🔴 O'zgartiradi

Massivning bir qismini uning **ichida boshqa joyga ko'chiradi**.

```js
let arr = [1, 2, 3, 4, 5];
arr.copyWithin(3, 0); // 0-dan nusxa olib 3-indeksga joylashtiradi
console.log(arr); // [1, 2, 3, 1, 2]
```

---

### `.at()` 🔵 Yangi qaytaradi

Indeks bo'yicha element qaytaradi. **Manfiy indeks** oxirdan hisoblaydi.

```js
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.at(1)); // "b"   — oldindan
console.log(arr.at(-1)); // "e"   — oxirgi
console.log(arr.at(-2)); // "d"   — oxiridan 2-chi
```

---

### `Array.from()` 🔵 Yangi qaytaradi

Boshqa iterable (`string`, `Set` va h.k.) dan **massiv yaratadi**.

```js
console.log(Array.from("salom")); // ["s","a","l","o","m"]
console.log(Array.from({ length: 4 }, (_, i) => i + 1)); // [1, 2, 3, 4]
console.log(Array.from(new Set([1, 2, 2, 3, 3]))); // [1, 2, 3]
```

---

### `Array.isArray()` 🟢 true/false

Qiymat **massiv ekanligini** tekshiradi.

```js
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("salom")); // false
console.log(Array.isArray({ a: 1 })); // false
```

---

### `Array.of()` 🔵 Yangi qaytaradi

Argumentlardan **yangi massiv yaratadi**.  
`new Array()` dan farqi: bir argument uzunlik emas, element.

```js
console.log(Array.of(3)); // [3]
console.log(new Array(3)); // [ , , ] — 3 bo'sh joy
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
```

---

## 6. ES2023 Yangi Metodlar (Asl massivni o'zgartirmaydi)

> Bu metodlar eski metodlarning "xavfsiz" versiyalari — asl massivni o'zgartirmaydi.

### `.toSorted()` 🔵 Yangi qaytaradi

`sort()` ga o'xshash, lekin asl massivni **o'zgartirmaydi**.

```js
let arr = [3, 1, 4, 1, 5];
let saralangan = arr.toSorted((a, b) => a - b);
console.log(saralangan); // [1, 1, 3, 4, 5]
console.log(arr); // [3, 1, 4, 1, 5]  — o'zgarmagan
```

---

### `.toReversed()` 🔵 Yangi qaytaradi

`reverse()` ga o'xshash, lekin asl massivni **o'zgartirmaydi**.

```js
let arr = [1, 2, 3, 4, 5];
let teskari = arr.toReversed();
console.log(teskari); // [5, 4, 3, 2, 1]
console.log(arr); // [1, 2, 3, 4, 5]  — o'zgarmagan
```

---

### `.toSpliced()` 🔵 Yangi qaytaradi

`splice()` ga o'xshash, lekin asl massivni **o'zgartirmaydi**.

```js
let arr = ["a", "b", "c", "d"];
let yangi = arr.toSpliced(1, 2, "X");
console.log(yangi); // ["a","X","d"]
console.log(arr); // ["a","b","c","d"]  — o'zgarmagan
```

---

### `.with()` 🔵 Yangi qaytaradi

Berilgan indeksdagi elementni yangi qiymat bilan **almashtiradi**, yangi massiv qaytaradi.

```js
let arr = ["a", "b", "c", "d"];
let yangi = arr.with(2, "Z");
console.log(yangi); // ["a","b","Z","d"]
console.log(arr); // ["a","b","c","d"]  — o'zgarmagan
```

---

## Qisqacha Jadval

| Metod             | Turi | Nima qiladi                    |
| ----------------- | ---- | ------------------------------ |
| `push()`          | 🔴   | Oxiriga qo'shadi               |
| `pop()`           | 🔴   | Oxiridan o'chiradi             |
| `unshift()`       | 🔴   | Boshiga qo'shadi               |
| `shift()`         | 🔴   | Boshidan o'chiradi             |
| `splice()`        | 🔴   | O'chiradi/qo'shadi             |
| `reverse()`       | 🔴   | Teskari qiladi                 |
| `sort()`          | 🔴   | Saralaydi                      |
| `fill()`          | 🔴   | To'ldiradi                     |
| `copyWithin()`    | 🔴   | Ichida ko'chiradi              |
| `map()`           | 🔵   | Yangi massiv (o'zgartirilgan)  |
| `filter()`        | 🔵   | Yangi massiv (filtrlangan)     |
| `reduce()`        | 🔵   | Bitta qiymat                   |
| `forEach()`       | 🔵   | Hech narsa qaytarmaydi         |
| `slice()`         | 🔵   | Qism massiv                    |
| `concat()`        | 🔵   | Birlashtiradi                  |
| `flat()`          | 🔵   | Tekis qiladi                   |
| `flatMap()`       | 🔵   | map + flat(1)                  |
| `find()`          | 🔵   | Birinchi mos element           |
| `findIndex()`     | 🔵   | Birinchi mos indeks            |
| `findLast()`      | 🔵   | Oxirgi mos element             |
| `findLastIndex()` | 🔵   | Oxirgi mos indeks              |
| `indexOf()`       | 🔵   | Birinchi indeks (-1 agar yo'q) |
| `lastIndexOf()`   | 🔵   | Oxirgi indeks                  |
| `at()`            | 🔵   | Indeks bo'yicha (manfiy ham)   |
| `entries()`       | 🔵   | [i, v] iterator                |
| `keys()`          | 🔵   | Indekslar iterator             |
| `values()`        | 🔵   | Qiymatlar iterator             |
| `toSorted()`      | 🔵   | sort() — o'zgartirmaydi        |
| `toReversed()`    | 🔵   | reverse() — o'zgartirmaydi     |
| `toSpliced()`     | 🔵   | splice() — o'zgartirmaydi      |
| `with()`          | 🔵   | Element almashtiradi           |
| `reduceRight()`   | 🔵   | O'ngdan chapga reduce          |
| `includes()`      | 🟢   | Bor/yo'q tekshiradi            |
| `every()`         | 🟢   | Hammasi shartni bajarsami?     |
| `some()`          | 🟢   | Birontasi shartni bajarsami?   |
| `Array.isArray()` | 🟢   | Massivmi?                      |
| `join()`          | 🟡   | Stringga o'giradi              |
| `Array.from()`    | 🔵   | Iterabledan massiv             |
| `Array.of()`      | 🔵   | Argumentlardan massiv          |
