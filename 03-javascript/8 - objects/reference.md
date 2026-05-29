# **Objects**

**📚 3.8 JavaScript Ob'ektlari (Objects)**

JavaScriptda **ob'ekt** — bu kalit-qiymat juftliklaridan (key-value pairs) tashkil topgan asosiy ma'lumot strukturasidir. Ob'ektlar orqali murakkab ma'lumotlarni saqlash, boshqarish va ishlatish mumkin.

---

### 🆕 **Object Creation — Ob'ekt Yaratish**

#### 1. **Object Literal** (Eng tavsiya etiladigan usul)

```javascript
const user = {
  name: "Elmurod",
  age: 25,
  isStudent: true,
  hobbies: ["coding", "reading"],
};

console.log(user);
```

**Afzalligi**: Qisqa, o'qilishi oson va eng ko'p ishlatiladi.

#### 2. **`new Object()` Konstruktori** (Tavsiya etilmaydi)

```javascript
const person = new Object();
person.name = "Aziz";
person.age = 30;
```

**Nima uchun avoid qilish kerak?** Kodni uzunlashtiradi va keraksiz murakkablik yaratadi.

#### 3. **`Object.create()`** — Prototypal Inheritance uchun kuchli usul

```javascript
const personProto = {
  greet() {
    console.log(`Salom, mening ismim ${this.name}`);
  },
};

const student = Object.create(personProto);
student.name = "Madina";
student.age = 22;

student.greet(); // Salom, mening ismim Madina
```

`Object.create(null)` — hech qanday prototype bo'lmagan toza ob'ekt yaratadi:

```javascript
const pureObj = Object.create(null);
```

---

### 📦 **Object Properties — Ob'ekt Xususiyatlari**

#### 1. **Dot Notation** (Nuqta orqali)

```javascript
const car = { brand: "BMW", model: "X5" };
console.log(car.brand); // BMW
car.year = 2024; // Yangi property qo'shish
```

#### 2. **Bracket Notation** (Kvadrat qavs orqali)

Foydali holatlar:

- Property nomi raqam yoki maxsus belgi bilan boshlansa
- Property nomi o'zgaruvchidan kelsa

```javascript
const car = {};
const propName = "model";

car["brand"] = "Tesla";
car[propName] = "Model Y";
console.log(car["brand"]); // Tesla
```

#### 3. **Computed Property Names (ES6+)**

```javascript
const key = "age";
const person = {
  name: "Sardor",
  [key]: 28, // computed
  [`${key}InMonths`]: 28 * 12, // murakkab computed
};

console.log(person.ageInMonths); // 336
```

#### 4. **Property Value Shorthand (ES6+)**

```javascript
const name = "Vali";
const age = 27;
const city = "Tashkent";

const user = { name, age, city }; // shorthand

console.log(user); // { name: 'Vali', age: 27, city: 'Tashkent' }
```

---

### 🛠️ **Object Methods — Ob'ekt Metodlari**

```javascript
const calculator = {
  a: 10,
  b: 5,

  add() {
    return this.a + this.b;
  }, // method shorthand
  multiply: function () {
    return this.a * this.b;
  },
};

console.log(calculator.add()); // 15
```

#### Muhim Statik Metodlar:

**`Object.keys()`**, **`Object.values()`**, **`Object.entries()`** (ES2017+)

```javascript
const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // ["a", "b", "c"]
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [["a",1], ["b",2], ["c",3]]
```

**`Object.assign()`** — Shallow copy

```javascript
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2, c: 3 }
```

**`Object.freeze()`** — Ob'ektni muzlatish (o'zgartirib bo'lmaydi)

```javascript
const frozen = Object.freeze({ name: "Test" });
frozen.name = "Changed"; // ishlamaydi (strict mode da xato)
```

**`Object.seal()`** — Yangi property qo'shish mumkin emas, lekin mavjudlarini o'zgartirsa bo'ladi.

**`Object.hasOwn()`** (ES2022+) — `hasOwnProperty` ning zamonaviy varianti

```javascript
const obj = { name: "Ali" };
console.log(Object.hasOwn(obj, "name")); // true
console.log(Object.hasOwn(obj, "toString")); // false (prototype dagi emas)
```

**`Object.groupBy()`** (ES2024+)

```javascript
const fruits = [
  { name: "apple", category: "fruit" },
  { name: "carrot", category: "vegetable" },
];

const grouped = Object.groupBy(fruits, (item) => item.category);
console.log(grouped);
```

---

### 🔗 **Object References va Copying**

**Shallow Copy** (Yuzaki nusxa):

```javascript
const original = { a: 1, nested: { b: 2 } };

// 1-usul
const copy1 = { ...original };

// 2-usul
const copy2 = Object.assign({}, original);
```

**Deep Copy** (To'liq nusxa) — Eng yaxshisi:

```javascript
const deepCopy = structuredClone(original); // ES2022+
```

**Eslatma**: `JSON.parse(JSON.stringify(obj))` eski usul, `Date`, `Map`, `Set`, `Function` larni to'g'ri ko'chirmaydi.

---

### 🎯 **Object Destructuring (ES6+)**

```javascript
const user = {
  name: "Olim",
  age: 30,
  address: {
    city: "Tashkent",
    street: "Amir Temur",
  },
  hobbies: ["football", "chess"],
};

// Oddiy destructuring
const { name, age } = user;
console.log(name, age);

// Default qiymat + alias
const { city: userCity = "Samarqand" } = user.address;

// Nested destructuring
const {
  address: { street },
  hobbies: [firstHobby],
} = user;

console.log(street, firstHobby);
```

**Rest operator bilan**:

```javascript
const { name, ...restInfo } = user;
console.log(restInfo); // qolgan barcha propertylar
```

---

### 🔄 **Iterating Objects — Ob'ektni Aylantirish**

#### 1. **`for...in`** (faqat enumerable propertylar)

```javascript
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

#### 2. **`Object.entries()` + `for...of`** (Eng zamonaviy va tavsiya etiladigan)

```javascript
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} => ${value}`);
}
```

---

### 🔒 **Optional Chaining (?.)**

```javascript
const user = {
  profile: {
    name: "Jamshid",
    social: {
      instagram: "@jamshid_dev",
    },
  },
};

// Xavfsiz kirish
console.log(user.profile?.social?.instagram); // @jamshid_dev
console.log(user.profile?.address?.city); // undefined (xato chiqmaydi)

console.log(user.method?.()); // agar method mavjud bo'lmasa undefined
```

**Nullish Coalescing bilan birga**:

```javascript
const username = user.profile?.name ?? "Foydalanuvchi topilmadi";
```

---
