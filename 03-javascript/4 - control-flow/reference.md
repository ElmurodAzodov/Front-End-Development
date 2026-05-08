# **JavaScript Control Flow (Boshqaruv Oqimi) – To‘liq Qo‘llanma**

Control Flow — dastur qanday ketma-ketlikda bajarilishini boshqarish demakdir. Ya’ni shartlarga qarab kodning turli qismlari ishga tushishi yoki o‘tkazib yuborilishini ta’minlaydi.

---

### 1. Conditional Statements (Shartli Operatorlar)

#### **if statement**

Eng oddiy va ko‘p ishlatiladigan shart.

```javascript
if (shart) {
  // shart rost bo‘lsa bajariladi
}
```

**Misol:**

```javascript
let age = 20;

if (age >= 18) {
  console.log("Siz voyaga yetgansiz.");
}
```

---

#### **else clause**

Agar `if` sharti rost bo‘lmasa, `else` ishlaydi.

```javascript
if (shart) {
  // rost
} else {
  // yolg‘on
}
```

**Misol:**

```javascript
let age = 16;

if (age >= 18) {
  console.log("Kirishga ruxsat.");
} else {
  console.log("Kirish taqiqlanadi.");
}
```

---

#### **else if ladder (Zanjirli shart)**

Bir nechta shartni ketma-ket tekshirish.

```javascript
if (shart1) {
  // 1
} else if (shart2) {
  // 2
} else if (shart3) {
  // 3
} else {
  // hech biri bajarilmadi
}
```

**Misol:**

```javascript
let score = 85;

if (score >= 90) {
  console.log("A – A’lo");
} else if (score >= 80) {
  console.log("B – Yaxshi");
} else if (score >= 70) {
  console.log("C – Qoniqarli");
} else {
  console.log("D – Qoniqarsiz");
}
```

---

### 2. Truthy va Falsy Qiymatlar

JavaScriptda har qanday qiymatni `boolean` kontekstida (shart sifatida) ishlatish mumkin.

#### **Falsy qiymatlar** (6 ta):

| Qiymat              | Turi      |
| ------------------- | --------- |
| `false`             | Boolean   |
| `0`, `-0`           | Number    |
| `0n`                | BigInt    |
| `""` (bo‘sh string) | String    |
| `null`              | Null      |
| `undefined`         | Undefined |
| `NaN`               | Number    |

**Boshqa barcha qiymatlar — Truthy** hisoblanadi.

**Misollar:**

```javascript
if (0) {
} // false
if ("") {
} // false
if (null) {
} // false
if (undefined) {
} // false
if (NaN) {
} // false
if (false) {
} // false

if (42) {
} // true
if ("hello") {
} // true
if ({}) {
} // true (bo‘sh object ham truthy)
if ([]) {
} // true (bo‘sh array ham truthy)
if ("0") {
} // true (string "0")
```

**Amaliy maslahat:**

```javascript
let user = null;

// Yaxshi usul
if (user) {
    console.log("Foydalanuvchi mavjud");
}

// Eng yaxshi usul (aniq tekshirish)
if (user !== null && user !== undefined) { ... }
```

---

### 3. Switch Statement

Biror o‘zgaruvchining qiymatiga qarab bir nechta holatni tekshirish uchun qulay.

**Sintaksis:**

```javascript
switch (expression) {
  case value1:
    // kod
    break;

  case value2:
    // kod
    break;

  default:
  // hech qaysi case mos kelmasa
}
```

**Misol:**

```javascript
let day = 3;

switch (day) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  default:
    console.log("Noto‘g‘ri kun");
}
```

#### **Fall-through (atayin tushib ketish)**

`break` qo‘ymasangiz, keyingi `case` lar ham bajariladi.

```javascript
let fruit = "apple";

switch (fruit) {
  case "apple":
  case "banana":
    console.log("Bu meva");
    break;
  case "carrot":
    console.log("Bu sabzi");
    break;
}
```

---

### 4. Ternary Operator (`? :`)

Bitta qatorli shartli operator. Juda qisqa va qulay.

**Sintaksis:**

```javascript
shart ? agar_rost : agar_yolg‘on
```

**Misollar:**

```javascript
let age = 20;
let status = age >= 18 ? "Voyaga yetgan" : "Voyaga yetmagan";
console.log(status);
```

**Bir nechta shart:**

```javascript
let score = 85;
let result = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
```

**Foydalanish joylari:**

- Oddiy qiymat qaytarish
- Funksiya argumentlari
- JSX (React) da
- Default qiymat berish

```javascript
function greet(name) {
  return `Salom, ${name ? name : "mehmon"}!`;
}
```

---

### Qo‘shimcha Maslahatlar va Eng Yaxshi Amaliyotlar

1. **if-else** ko‘p bo‘lsa → `switch` yoki object/map dan foydalaning.
2. **Ternary** ni murakkab qilmang (o‘qilishi qiyin bo‘lmasin).
3. **Truthy/Falsy** dan foydalanganda ehtiyot bo‘ling:
   - `0`, `""`, `false` lar muhim bo‘lsa aniq tekshiring (`===`).
4. **Early return** usuli (funktsiyalarda juda foydali):

```javascript
function checkAge(age) {
  if (age < 18) return "Kirish taqiqlanadi";
  if (age > 65) return "Chegirma mavjud";
  return "Xush kelibsiz!";
}
```

---
