# **Operators**

---

## 1. 📖 Definition

**Operators (operatorlar)** — bu JavaScript’da qiymatlar (operandlar) ustida amal bajaruvchi maxsus belgilar yoki keyword’lar.

Masalan:

```js
a + b;
```

Bu yerda:

- `+` → operator
- `a`, `b` → operandlar

---

## 2. 🎯 Nima uchun kerak (Why it exists)

### Muammo:

Dasturda:

- hisoblash (calculation — hisob-kitob)
- solishtirish (comparison — taqqoslash)
- mantiqiy qaror (logic — mantiq)

kerak bo‘ladi.

---

### Yechim:

Operatorlar orqali:

- kod qisqaradi
- ifoda (expression — ifoda)lar yoziladi
- control flow (boshqaruv oqimi) ishlaydi

---

## 3. ⚙️ Qanday ishlaydi (Under the hood)

JavaScript engine:

1. operandlarni evaluate qiladi
2. agar kerak bo‘lsa type coercion (avtomatik tip o‘zgarishi) qiladi
3. operator algoritmini bajaradi

---

### 🔥 Example:

```js
"5" - 2;
```

Engine:

```text
ToNumber("5") → 5
5 - 2 → 3
```

---

## 4. 🧩 Arithmetic Operators (arifmetik operatorlar)

---

## 📖 Definition

**Arithmetic operators (arifmetik operatorlar)** — sonlar ustida matematik amal bajaradi.

---

## 📊 Operatorlar

| Operator | Tavsif                                      |
| -------- | ------------------------------------------- |
| +        | qo‘shish                                    |
| -        | ayirish                                     |
| \*       | ko‘paytirish                                |
| /        | bo‘lish                                     |
| %        | qoldiq (modulo)                             |
| \*\*     | darajaga oshirish (exponentiation — daraja) |

---

## 🧩 Misollar

```js
10 + 5; // 15
10 - 5; // 5
10 * 5; // 50
10 / 5; // 2
10 % 3; // 1
2 ** 3; // 8
```

---

## ⚠️ Edge case

```js
"5" + 2; // "52" (string concatenation — matn biriktirish)
```

---

---

### 🔁 Increment / Decrement (oshirish / kamaytirish)

---

## 📖 Definition

- `++` → increment (1 ga oshirish)
- `--` → decrement (1 ga kamaytirish)

---

## 🧩 Misollar

```js
let a = 5;
a++; // 6
```

---

## ⚠️ Pre vs Post

```js
let x = 5;

console.log(x++); // 5
console.log(++x); // 7
```

---

---

## 5. ⚖️ Comparison Operators (taqqoslash operatorlari)

---

## 📖 Definition

Qiymatlarni solishtiradi va boolean (true/false) qaytaradi.

---

## 📊 Operatorlar

| Operator  | Tavsif                                           |
| --------- | ------------------------------------------------ |
| ==        | loose equality (bo‘sh tenglik — coercion bor)    |
| ===       | strict equality (qat’iy tenglik — coercion yo‘q) |
| !=        | teng emas                                        |
| !==       | qat’iy teng emas                                 |
| > < >= <= | taqqoslash                                       |

---

## ⚠️ MUHIM: == vs ===

---

### ❌ == (loose equality — majburiy tip o‘zgartiradi)

```js
"5" == 5; // true ❌
```

---

### ✅ === (strict equality — tipni ham tekshiradi)

```js
"5" === 5; // false ✅
```

---

## ⚠️ Edge case

```js
null == undefined; // true ❌
null === undefined; // false ✅
```

---

---

## 6. 🔗 Logical Operators (mantiqiy operatorlar)

---

## 📖 Definition

Boolean (mantiqiy) ifodalar bilan ishlaydi.

---

## 📊 Operatorlar

| Operator | Tavsif                                               |     |           |
| -------- | ---------------------------------------------------- | --- | --------- |
| &&       | AND (va)                                             |     |           |
|          |                                                      |     | OR (yoki) |
| !        | NOT (emas)                                           |     |           |
| ??       | nullish coalescing (faqat null/undefined tekshiradi) |     |           |

---

## ⚙️ Short-circuit (qisqa baholash)

---

### AND

```js
true && "hello"; // "hello"
false && "hi"; // false
```

---

### OR

```js
false || "hello"; // "hello"
```

---

### ❗ Real behavior

```js
0 || 10; // 10
```

---

### 🆕 Nullish coalescing (??)

```js
null ?? "default"; // "default"
0 ?? 5; // 0 ✅
```

---

## ⚠️ || vs ??

```js
0 || 10; // 10 ❌
0 ?? 10; // 0 ✅
```

---

---

## 7. 📝 Assignment Operators (qiymat berish operatorlari)

---

## 📖 Definition

Variable’ga qiymat berish yoki yangilash uchun ishlatiladi.

---

## 📊 Operatorlar

| Operator | Misol     |
| -------- | --------- |
| =        | a = 5     |
| +=       | a += 5    |
| -=       | a -= 5    |
| \*=      | a \*= 2   |
| /=       | a /= 2    |
| %=       | a %= 2    |
| \*\*=    | a \*\*= 2 |

---

## 🧩 Misol

```js
let a = 10;
a += 5; // 15
```

---

### 🔥 Logical assignment (mantiqiy assign)

---

```js
a ||= 10;
a &&= 5;
a ??= 20;
```

---

## ⚠️ Edge case

```js
let x = 0;
x ||= 10; // 10 ❌
x ??= 10; // 0 ✅
```

---

---

## 8. 👥 Other Operators (boshqa operatorlar)

---

### 🔍 typeof (tipni aniqlash)

```js
typeof 5; // "number"
```

---

### 🧱 instanceof (instansiyani tekshirish)

```js
[] instanceof Array; // true
```

---

### 🔑 in (property mavjudligini tekshirish)

```js
"name" in { name: "Ali" }; // true
```

---

### ❌ delete (property o‘chirish)

```js
const obj = { a: 1 };
delete obj.a;
```

---

---

## 9. ❓ Ternary Operator (shartli operator)

---

## 📖 Definition

If-else ning qisqa yozilishi

---

## 🧩 Syntax

```js
condition ? value1 : value2;
```

---

## 🧩 Misol

```js
let age = 18;
let result = age >= 18 ? "Adult" : "Minor";
```

---

---

## 10. 🔗 Optional Chaining (?. — xavfsiz murojaat)

---

## 📖 Definition

Object ichidagi property mavjud bo‘lmasa error bermaydi

---

## 🧩 Misol

```js
user?.address?.city;
```

---

## ⚠️ Without it

```js
user.address.city; // ❌ crash
```

---

---

## 11. 🧩 Comma Operator (vergul operatori)

---

## 📖 Definition

Bir nechta expression bajaradi, oxirgisini qaytaradi

---

## 🧩 Misol

```js
let x = (1, 2, 3);
console.log(x); // 3
```

---

---

## 12. 🔄 Real-world misollar

---

### Default value

```js
const username = input || "Guest";
```

---

### Safe access

```js
const city = user?.address?.city ?? "Unknown";
```

---

### Counter

```js
count++;
```

---

---

## 13. ⚠️ Keng tarqalgan xatolar (Pitfalls)

---

❌ `==` ishlatish

```js
0 == false; // true ❌
```

---

❌ `||` noto‘g‘ri default

```js
0 || 10; // 10 ❌
```

---

❌ delete performance muammo

---

---

## 14. 🧠 Best Practices

---

- har doim `===`
- default uchun `??`
- optional chaining ishlat
- complex ternary’dan qoch

---

---

## 15. 🚀 Performance va Memory

---

- arithmetic tez
- logical short-circuit → optimization
- delete → slow

---

---

## 16. 🆚 Eski vs Yangi

| Eski        | Yangi |         |     |
| ----------- | ----- | ------- | --- |
|             |       | default | ??  |
| if chaining | ?.    |         |     |
| Math.pow    | \*\*  |         |     |

---

---

## 17. 🎯 Pro Tips

---

### 🔥 Double NOT (!!)

```js
!!value;
```

---

### 🔥 Safe chaining

```js
user?.posts?.[0]?.title;
```

---

---

## 18. ❓ Interview Questions

1. == vs ===?
2. short-circuit nima?
3. ?? vs ||?
4. typeof null?
5. optional chaining nima?
6. delete ishlashi?
7. NaN comparison?
8. ++ farqi?
9. ternary qachon ishlatiladi?
10. instanceof qanday ishlaydi?

---
