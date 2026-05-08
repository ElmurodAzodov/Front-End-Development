# **JavaScript Loops and Iteration (Tsikllar va Iteratsiya) – To‘liq Qo‘llanma**

Tsikllar (Loops) — bir xil yoki o‘xshash kodni bir necha marta bajarish uchun ishlatiladi. Masalan, massiv elementlarini chiqarish, hisoblash, ma’lumotlarni qayta ishlash va h.k.

---

### 1. for Loop

Eng klassik va ko‘p ishlatiladigan tsikl.

**Sintaksis:**

```javascript
for (boshlang‘ich; shart; o‘zgarish) {
    // bajariladigan kod
}
```

**Misol:**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Raqam:", i);
}
// Natija: 0, 1, 2, 3, 4
```

**Ko‘p qo‘llaniladigan variantlar:**

```javascript
// Orqaga sanash
for (let i = 10; i >= 0; i--) { ... }

// 2 tadan oshirish
for (let i = 0; i < 10; i += 2) { ... }
```

---

### 2. while Loop

Shart rost bo‘lsa, tsikl davom etadi.

**Sintaksis:**

```javascript
while (shart) {
  // kod
}
```

**Misol:**

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

**Eslatma:** Agar shart hech qachon `false` bo‘lmasa → **Infinite Loop** (cheksiz tsikl) yuzaga keladi.

---

### 3. do...while Loop

Tsikl kamida **1 marta** bajariladi (shart oxirida tekshiriladi).

**Sintaksis:**

```javascript
do {
  // kod
} while (shart);
```

**Misol:**

```javascript
let i = 0;

do {
  console.log("Kamida bir marta ishlaydi:", i);
  i++;
} while (i < 0); // shart yolg‘on bo‘lsa ham
```

**Foydalanish joyi:** Foydalanuvchidan ma’lumot kiritishni talab qilish (validatsiya).

---

### 4. Loop Control (Tsiklni Boshqarish)

#### **break** — Tsiklni butunlay to‘xtatish

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i); // 0 1 2 3 4
}
```

#### **continue** — Joriy iteratsiyani o‘tkazib yuborish

```javascript
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // juft sonlarni o‘tkazib yuborish
  console.log(i); // 1 3 5 7 9
}
```

---

### 5. for...in Loop

**Object** xususiyatlari (keys) bo‘yicha iteratsiya qilish uchun.

```javascript
const person = {
  name: "Ali",
  age: 25,
  job: "Developer",
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

**Diqqat!**

- Massivlarda ishlatish tavsiya etilmaydi (index + prototype xususiyatlarini ham oladi).
- Faqat **enumerable** xususiyatlarni qaytaradi.

---

### 6. for...of Loop (ES6+)

**Iterable** ob’ektlar (array, string, Map, Set, NodeList va h.k.) uchun eng yaxshi variant.

```javascript
const fruits = ["Olma", "Banan", "Apelsin"];

for (let fruit of fruits) {
  console.log(fruit);
}

// String bilan
for (let char of "Salom") {
  console.log(char); // S a l o m
}
```

**for...in vs for...of**

| Xususiyat      | for...in          | for...of           |
| -------------- | ----------------- | ------------------ |
| Nima ustida    | Object keys       | Qiymatlar (values) |
| Massiv uchun   | Tavsiya etilmaydi | Eng yaxshisi       |
| Index kerakmi? | Ha (key)          | Yo‘q (value)       |

---

### 7. Array Iteration Usullari (Eng Zamomaviy)

#### **forEach()**

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach((num, index) => {
  console.log(`${index}: ${num}`);
});
```

#### **map()** — Yangi massiv qaytaradi

```javascript
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

**Boshqa foydali metodlar:**

- `filter()`
- `find()`
- `some()`
- `every()`
- `reduce()`

---

### ⚠️ Infinite Loops (Cheksiz Tsikllar) va Ulardan Saqlanish

**Xavfli misol:**

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  // i++ ni unutish → cheksiz tsikl!
}
```

**Brauzerda** cheksiz tsikl sahifani osib qo‘yadi.

**Saqlanish usullari:**

- Har doim o‘zgaruvchini o‘zgartirishni unutmang.
- `break` bilan xavfsizlik qo‘shing.
- Katta tsikllarda `setTimeout` yoki Web Workers dan foydalaning.

---

### Eng Yaxshi Amaliyotlar (Best Practices)

1. **Massivlar uchun** → `for...of` yoki `forEach()` / `map()` ishlatish.
2. **Oddiy sanash** uchun → klassik `for` loop.
3. **Object** uchun → `for...in` yoki `Object.keys()/values()/entries()`.
4. **Kod o‘qilishi** uchun → `for...of` ni afzal ko‘ring.
5. **Performance** muhim bo‘lsa → klassik `for` tezroq ishlaydi.

**Object.keys() bilan:**

```javascript
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

---