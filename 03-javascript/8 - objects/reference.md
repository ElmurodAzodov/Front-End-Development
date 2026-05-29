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

<br>
<br>
<br>
<br>
<br>

**🛠️ Object Methods — Ob'ekt Metodlari**

JavaScriptning `Object` built-in obyekti ko'plab foydali statik metodlarni taqdim etadi. Ular ob'ektlar bilan ishlashni ancha osonlashtiradi. Quyida eng muhim metodlar batafsil ko'rib chiqiladi.

---

### 1. **`Object.keys()`**, **`Object.values()`**, **`Object.entries()`** (ES2017+)

Bu metodlar ob'ektning xususiyatlarini turli shakllarda qaytarish uchun ishlatiladi.

| Metod              | Qaytaradigan natija               | Foydasi                                |
| ------------------ | --------------------------------- | -------------------------------------- |
| `Object.keys()`    | Kalitlar massivi (string[])       | Kalitlar ro'yxati kerak bo'lganda      |
| `Object.values()`  | Qiymatlar massivi                 | Faqat qiymatlar kerak bo'lganda        |
| `Object.entries()` | `[ [kalit, qiymat] ]` juftliklari | Eng kuchlisi — kalit va qiymatni birga |

**Amaliy misollar:**

```javascript
const student = {
  name: "Aziza",
  age: 21,
  major: "Computer Science",
  isGraduated: false,
};

// 1. Object.keys()
const keys = Object.keys(student);
console.log(keys);
// ["name", "age", "major", "isGraduated"]

// 2. Object.values()
const values = Object.values(student);
console.log(values);
// ["Aziza", 21, "Computer Science", false]

// 3. Object.entries() — eng mashhuri
const entries = Object.entries(student);
console.log(entries);
/*
[
  ["name", "Aziza"],
  ["age", 21],
  ["major", "Computer Science"],
  ["isGraduated", false]
]
*/

// entries bilan iteratsiya (eng zamonaviy usul)
for (let [key, value] of Object.entries(student)) {
  console.log(`${key} => ${value}`);
}
```

---

### 2. **`Object.assign()`** — Shallow Copy va Merging

Ob'ektlarni birlashtirish va nusxa olish uchun ishlatiladi.

```javascript
const defaultSettings = {
  theme: "light",
  fontSize: 16,
  notifications: true,
};

const userSettings = {
  theme: "dark",
  fontSize: 18,
};

// Merging (birlashtirish)
const finalSettings = Object.assign({}, defaultSettings, userSettings);
console.log(finalSettings);
// { theme: "dark", fontSize: 18, notifications: true }
```

**Shallow Copy misoli:**

```javascript
const original = {
  name: "Sardor",
  address: { city: "Tashkent", street: "Chilonzor" },
};

const shallowCopy = Object.assign({}, original);

shallowCopy.address.city = "Samarkand"; // ⚠️ Original ham o'zgaradi!
console.log(original.address.city); // "Samarkand"
```

> **Eslatma**: `Object.assign()` faqat **shallow copy** qiladi. Chuqur nusxa uchun `structuredClone()` tavsiya etiladi.

---

### 3. **`Object.freeze()`** va **`Object.seal()`**

Ob'ektni himoyalash uchun ishlatiladigan metodlar.

#### **`Object.freeze()`** — To'liq muzlatish

- Yangi xususiyat qo'shib bo'lmaydi
- Mavjud xususiyatni o'zgartirib bo'lmaydi
- Mavjud xususiyatni o'chirib bo'lmaydi

```javascript
const config = Object.freeze({
  apiUrl: "https://api.example.com",
  version: "1.2.0",
});

config.apiUrl = "https://new.com"; // ishlamaydi
config.newProp = "test"; // ishlamaydi
delete config.version; // ishlamaydi

console.log(Object.isFrozen(config)); // true
```

#### **`Object.seal()`** — Muhrlash

- Yangi xususiyat qo'shish mumkin emas
- Mavjud xususiyatlarni o'zgartirsa bo'ladi
- O'chirish mumkin emas

```javascript
const userProfile = Object.seal({
  username: "elmurod",
  points: 1500,
});

userProfile.points = 2000; // ✅ ruxsat
userProfile.newField = "vip"; // ❌ ishlamaydi
delete userProfile.username; // ❌ ishlamaydi

console.log(Object.isSealed(userProfile)); // true
```

---

### 4. **`Object.hasOwn()`** (ES2022+)

`hasOwnProperty()` ning zamonaviy va xavfsizroq varianti.

**Nima uchun yaxshiroq?**

- `hasOwnProperty` ni ob'ekt meros qilib olishi mumkin (xavfli)
- `Object.hasOwn()` statik metod, toza va ishonchli

```javascript
const obj = { name: "Madina" };

// Eski usul
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("toString")); // false

// Yangi tavsiya etiladigan usul
console.log(Object.hasOwn(obj, "name")); // true
console.log(Object.hasOwn(obj, "toString")); // false
console.log(Object.hasOwn(obj, "undefinedProp")); // false
```

---

### 5. **`Object.groupBy()`** (ES2024+)

Massivdagi elementlarni berilgan kalit bo'yicha guruhlash uchun yangi qulay metod.

```javascript
const orders = [
  { id: 1, status: "pending", amount: 150 },
  { id: 2, status: "completed", amount: 300 },
  { id: 3, status: "pending", amount: 75 },
  { id: 4, status: "completed", amount: 500 },
];

// Status bo'yicha guruhlash
const groupedByStatus = Object.groupBy(orders, (order) => order.status);

console.log(groupedByStatus);
/*
{
  pending: [
    {id:1, status:"pending", amount:150},
    {id:3, status:"pending", amount:75}
  ],
  completed: [
    {id:2, status:"completed", amount:300},
    {id:4, status:"completed", amount:500}
  ]
}
*/

// Murakkabroq misol
const students = [
  { name: "Ali", grade: "A", city: "Tashkent" },
  { name: "Laylo", grade: "B", city: "Samarkand" },
  { name: "Bobur", grade: "A", city: "Tashkent" },
];

const groupedByGrade = Object.groupBy(students, (s) => s.grade);
const groupedByCity = Object.groupBy(students, (s) => s.city);
```

---

<br>
<br>
<br>
<br>
<br>

**🔗 Object References and Copying — Ob'ekt Referenslari va Nusxa Olish**

JavaScriptda ob'ektlar **reference** (havola) bo'yicha ishlaydi. Ya'ni, ob'ektni boshqa o'zgaruvchiga tenglashtirsangiz, u nusxa emas, **xuddi shu ob'ektga havola** bo'ladi.

```javascript
const original = { name: "Elmurod", age: 25 };
const copy = original; // Bu nusxa emas!

copy.age = 30;
console.log(original.age); // 30 → original ham o'zgardi!
```

---

### **Shallow Copy (Yuzaki Nusxa)**

Faqat birinchi darajadagi xususiyatlarni nusxalaydi. Ichki ob'ektlar (nested) esa havola bo'lib qoladi.

#### 1. **`Object.assign()`**

```javascript
const user = {
  name: "Madina",
  age: 22,
  address: { city: "Tashkent", street: "Chilonzor" },
};

const shallowCopy = Object.assign({}, user);

shallowCopy.name = "Laylo"; // ✅ birinchi daraja o'zgarmaydi
shallowCopy.address.city = "Samarkand"; // ❌ ichki ob'ekt o'zgaradi!

console.log(user.address.city); // "Samarkand"
```

#### 2. **Spread Operator `{...obj}`** (ES6+)

```javascript
const shallowCopy2 = { ...user };

shallowCopy2.address.street = "Mirzo Ulug'bek";
// original.address.street ham o'zgaradi
```

---

### **Deep Copy (Chuqur Nusxa)**

Barcha ichki ob'ektlarni ham to'liq nusxalaydi.

#### **`structuredClone()`** — Eng yaxshi zamonaviy usul (ES2022+)

```javascript
const original = {
  name: "Sardor",
  address: { city: "Tashkent", coordinates: [41.2995, 69.2401] },
  date: new Date(),
  set: new Set([1, 2, 3]),
};

const deepCopy = structuredClone(original);

deepCopy.address.city = "Buxoro";
deepCopy.set.add(4);

console.log(original.address.city); // "Tashkent" — o'zgarmadi
console.log(original.set.has(4)); // false
```

**Afzalliklari:**

- `Date`, `Map`, `Set`, `ArrayBuffer`, `RegExp` kabi murakkab turlarni to'g'ri nusxalaydi.
- `JSON.parse(JSON.stringify())` dan ancha kuchli.

**Eski usul (tavsiya etilmaydi):**

```javascript
const badCopy = JSON.parse(JSON.stringify(original)); // Date, Set, Function yo'qoladi
```

---

### 🎯 **Object Destructuring — Ob'ektni Destruktizatsiya Qilish (ES6+)**

Ob'ektning xususiyatlarini qulay tarzda olish usuli.

#### **Asosiy Destructuring**

```javascript
const user = {
  name: "Aziz",
  age: 28,
  city: "Tashkent",
  profession: "Developer",
};

const { name, age, city } = user;
console.log(name, age, city); // Aziz 28 Tashkent
```

#### **Default Qiymat va Alias**

```javascript
const {
  name,
  age = 18, // default
  city: userCity = "Samarqand", // alias + default
} = user;
```

#### **Nested Destructuring**

```javascript
const student = {
  name: "Laylo",
  info: {
    age: 21,
    address: {
      city: "Fergana",
      zip: "150100",
    },
  },
  subjects: ["Math", "Physics", "English"],
};

const {
  name,
  info: {
    age,
    address: { city, zip },
  },
  subjects: [firstSubject, ...otherSubjects],
} = student;

console.log(city, zip, firstSubject); // Fergana 150100 Math
```

#### **Rest Operator (`...`)**

```javascript
const { name, age, ...rest } = student;
console.log(rest); // qolgan barcha xususiyatlar
```

---

### 🔄 **Iterating Objects — Ob'ektni Aylantirish**

#### 1. **`for...in`** (Eski usul)

```javascript
const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}
```

**Muhim:** `for...in` prototype'dagi xususiyatlarni ham aylantirishi mumkin. Shuning uchun `hasOwnProperty` yoki `Object.hasOwn()` bilan tekshirish kerak.

#### 2. **`Object.entries()` + `for...of`** (Eng tavsiya etiladigan)

```javascript
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key} → ${value}`);
}
```

#### Boshqa qulay usullar:

```javascript
// Faqat kalitlar
for (let key of Object.keys(obj)) { ... }

// Faqat qiymatlar
for (let value of Object.values(obj)) { ... }
```

---

### 🔒 **Optional Chaining — Xavfsiz Kirish (?.)**

Ob'ekt ichidagi chuqur xususiyatlarga xato chiqmasdan kirish imkonini beradi.

```javascript
const user = {
  profile: {
    name: "Jamshid",
    social: {
      telegram: "@jamshidjs",
      instagram: null,
    },
  },
};

// Xavfsiz kirish
console.log(user.profile?.social?.instagram); // null
console.log(user.profile?.address?.city); // undefined (xato chiqmaydi!)
console.log(user.settings?.theme?.color); // undefined
```

#### **Method chaqirish bilan**

```javascript
const result = user.getData?.(); // agar method mavjud bo'lmasa undefined
```

#### **Nullish Coalescing (`??`) bilan birga**

```javascript
const username = user.profile?.name ?? "Foydalanuvchi topilmadi";
const theme = user.settings?.theme ?? "light";
```

**Foydasi:**

- `TypeError: Cannot read property 'xxx' of undefined` xatolarini oldini oladi.
- Kodni ancha qisqa va xavfsiz qiladi.

---
