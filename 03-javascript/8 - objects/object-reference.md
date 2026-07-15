# 📦 JavaScript Object — To'liq Qo'llanma

> Ushbu qo'llanmada JavaScript'dagi **Object** (obyekt) mavzusi chuqur, misollar va mashqlar bilan tushuntiriladi.

---

## 📌 Mundarija

1. [Object nima?](#1-object-nima)
2. [Object yaratish usullari](#2-object-yaratish-usullari)
3. [Property bilan ishlash](#3-property-bilan-ishlash)
4. [Object ichidagi metodlar va `this`](#4-object-ichidagi-metodlar-va-this)
5. [Object statik metodlari (to'liq ro'yxat)](#5-object-statik-metodlari)
6. [Getter va Setter](#6-getter-va-setter)
7. [Object destructuring](#7-object-destructuring)
8. [Spread va Rest operatorlari](#8-spread-va-rest-operatorlari)
9. [Nested (ichma-ich) object'lar va deep copy](#9-nested-ichma-ich-objectlar-va-deep-copy)
10. [Optional chaining va Nullish coalescing](#10-optional-chaining-va-nullish-coalescing)
11. [for...in va hasOwnProperty](#11-forin-va-hasownproperty)
12. [JSON.stringify va JSON.parse](#12-jsonstringify-va-jsonparse)
13. [Amaliy mashqlar](#13-amaliy-mashqlar)

---

## 1. Object nima?

**Object** — bu key-value (kalit-qiymat) juftliklaridan iborat ma'lumotlar strukturasi. JavaScript'da deyarli hamma narsa (array, function, hatto class'lar) — object asosida ishlaydi.

```javascript
const inson = {
  ism: "Elmurod",
  yosh: 25,
  kasbi: "Dasturchi"
};
```

- `ism`, `yosh`, `kasbi` — **key** (property nomi)
- `"Elmurod"`, `25`, `"Dasturchi"` — **value** (qiymat)

### Nega Object kerak?

Real hayotdagi narsalarni (foydalanuvchi, mahsulot, mashina va h.k.) tasvirlash uchun ishlatiladi — chunki ularning bir nechta xususiyatlari (property) bor.

---

## 2. Object yaratish usullari

### 2.1. Object literal (eng ko'p ishlatiladigan usul)

```javascript
const kitob = {
  nomi: "Sariq devni minib",
  muallif: "Xudoyberdi To'xtaboyev",
  sahifa: 320
};
```

### 2.2. `new Object()` konstruktor usuli

```javascript
const kitob = new Object();
kitob.nomi = "O'tkan kunlar";
kitob.muallif = "Abdulla Qodiriy";
```

> ⚠️ Bu usul kamdan-kam qo'llaniladi, chunki object literal qisqaroq va tushunarliroq.

### 2.3. `Object.create()` usuli

Bu usul yangi object'ni **berilgan prototype** asosida yaratadi.

```javascript
const inson = {
  salomAyt() {
    console.log("Salom!");
  }
};

const talaba = Object.create(inson);
talaba.ism = "Aziz";
talaba.salomAyt(); // "Salom!" — prototype orqali meros oldi
```

### 2.4. Class orqali (obyektlar shabloni)

```javascript
class Foydalanuvchi {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }
}

const user1 = new Foydalanuvchi("Malika", 22);
```

### 2.5. Factory function orqali

```javascript
function foydalanuvchiYarat(ism, yosh) {
  return { ism, yosh };
}

const user2 = foydalanuvchiYarat("Bekzod", 30);
```

---

## 3. Property bilan ishlash

### 3.1. Qo'shish

```javascript
const mashina = { marka: "Chevrolet" };

mashina.model = "Cobalt";       // dot notation
mashina["rang"] = "Oq";         // bracket notation
```

> 💡 **Bracket notation** — property nomi o'zgaruvchida saqlangan yoki bo'sh joy/maxsus belgi bo'lsa ishlatiladi:
```javascript
const key = "narxi";
mashina[key] = 15000;

mashina["ishlab chiqarilgan yili"] = 2023; // bo'sh joy bor, faqat [] ishlaydi
```

### 3.2. O'qish

```javascript
console.log(mashina.marka);   // "Chevrolet"
console.log(mashina["model"]); // "Cobalt"
```

### 3.3. O'zgartirish

```javascript
mashina.rang = "Qora"; // eski qiymat "Oq" o'rniga
```

### 3.4. O'chirish — `delete`

```javascript
delete mashina.rang;
console.log(mashina.rang); // undefined
```

### 3.5. Mavjudligini tekshirish

```javascript
console.log("marka" in mashina);      // true
console.log(mashina.hasOwnProperty("model")); // true
console.log(mashina.narxi !== undefined); // tekshirishning yana bir usuli
```

---

## 4. Object ichidagi metodlar va `this`

Object ichidagi funksiyalar **metod** deb ataladi.

```javascript
const hisoblagich = {
  son: 0,
  oshir() {
    this.son++; // "this" - shu object'ning o'ziga ishora qiladi
    console.log(this.son);
  },
  kamayt: function() {
    this.son--;
    console.log(this.son);
  }
};

hisoblagich.oshir(); // 1
hisoblagich.oshir(); // 2
hisoblagich.kamayt(); // 1
```

### ⚠️ `this` bilan bog'liq keng tarqalgan xato

```javascript
const obj = {
  ism: "Aziz",
  salom: () => {
    console.log(this.ism); // undefined! Arrow function "this"ni o'zidan olmaydi
  }
};
obj.salom(); // undefined
```

> **Qoida:** Object metodlarida oddiy `function` yoki qisqa yozuv (`metod() {}`) ishlating, arrow function emas — chunki arrow function o'z `this`iga ega bo'lmaydi, u tashqi (lexical) `this`ni oladi.

### `this` ni to'g'ri bog'lash: `call`, `apply`, `bind`

```javascript
const odam1 = { ism: "Vali" };
const odam2 = { ism: "Guli" };

function salomlash(shahar) {
  console.log(`Salom, men ${this.ism}, ${shahar}dan`);
}

salomlash.call(odam1, "Toshkent");   // this = odam1
salomlash.apply(odam2, ["Xorazm"]);  // this = odam2, argument array shaklida
const bogliq = salomlash.bind(odam1);
bogliq("Andijon");                   // this doim odam1 bo'lib qoladi
```

| Metod | Vazifasi | Argumentlar formati |
|---|---|---|
| `call()` | Funksiyani darhol chaqiradi | vergul bilan ajratilgan |
| `apply()` | Funksiyani darhol chaqiradi | array shaklida |
| `bind()` | Yangi funksiya qaytaradi (chaqirmaydi) | vergul bilan ajratilgan |

---

## 5. Object statik metodlari

Bu metodlar `Object.` orqali to'g'ridan-to'g'ri chaqiriladi (object instance'idan emas).

### 5.1. `Object.keys(obj)`
Object'ning barcha kalitlarini **array** shaklida qaytaradi.

```javascript
const talaba = { ism: "Nodira", yosh: 21, fakultet: "IT" };
console.log(Object.keys(talaba)); // ["ism", "yosh", "fakultet"]
```

### 5.2. `Object.values(obj)`
Barcha qiymatlarni array shaklida qaytaradi.

```javascript
console.log(Object.values(talaba)); // ["Nodira", 21, "IT"]
```

### 5.3. `Object.entries(obj)`
Har bir `[key, value]` juftligidan iborat array qaytaradi.

```javascript
console.log(Object.entries(talaba));
// [["ism", "Nodira"], ["yosh", 21], ["fakultet", "IT"]]

for (const [key, value] of Object.entries(talaba)) {
  console.log(`${key}: ${value}`);
}
```

### 5.4. `Object.assign(target, ...sources)`
Bir yoki bir nechta object'larni **birlashtiradi** (yuzaki nusxa — shallow copy).

```javascript
const asosiy = { a: 1, b: 2 };
const qoshimcha = { b: 3, c: 4 };

const natija = Object.assign({}, asosiy, qoshimcha);
console.log(natija); // { a: 1, b: 3, c: 4 } — b qayta yozildi
```

> 💡 Birinchi bo'sh `{}` yozish muhim — aks holda `asosiy` object'ning o'zi o'zgartiriladi.

### 5.5. `Object.freeze(obj)`
Object'ni **"muzlatadi"** — property qo'shish, o'chirish, o'zgartirish imkonsiz bo'ladi.

```javascript
const sozlamalar = { til: "uz" };
Object.freeze(sozlamalar);

sozlamalar.til = "en"; // hech narsa bo'lmaydi (strict mode'da xato beradi)
console.log(sozlamalar.til); // "uz"

console.log(Object.isFrozen(sozlamalar)); // true
```

### 5.6. `Object.seal(obj)`
Yangi property qo'shish/o'chirishni bloklaydi, lekin **mavjud property'larni o'zgartirish mumkin**.

```javascript
const profil = { ism: "Aziz" };
Object.seal(profil);

profil.ism = "Bekzod"; // ✅ ishlaydi
profil.yosh = 20;      // ❌ qo'shilmaydi
delete profil.ism;     // ❌ o'chirilmaydi

console.log(Object.isSealed(profil)); // true
```

### 5.7. `Object.create(proto)`
Berilgan prototype asosida yangi object yaratadi *(2.3-bo'limda ko'rdik)*.

### 5.8. `Object.defineProperty(obj, key, descriptor)`
Property'ni to'liq nazorat qilib qo'shish (masalan, uni o'zgartirib bo'lmaydigan qilish).

```javascript
const mahsulot = {};

Object.defineProperty(mahsulot, "narx", {
  value: 50000,
  writable: false,     // o'zgartirib bo'lmaydi
  enumerable: true,     // for...in va Object.keys'da ko'rinadi
  configurable: false   // delete qilib bo'lmaydi
});

mahsulot.narx = 99999; // e'tiborga olinmaydi
console.log(mahsulot.narx); // 50000
```

### 5.9. `Object.defineProperties(obj, descriptors)`
Bir vaqtda bir nechta property'ni shu tarzda belgilaydi.

```javascript
const inson = {};
Object.defineProperties(inson, {
  ism: { value: "Laylo", writable: true, enumerable: true },
  yosh: { value: 19, writable: true, enumerable: true }
});
```

### 5.10. `Object.getPrototypeOf(obj)` / `Object.setPrototypeOf(obj, proto)`
Object'ning prototipini olish yoki o'rnatish.

```javascript
const hayvon = { ovozChiqar() { console.log("..."); } };
const mushuk = Object.create(hayvon);

console.log(Object.getPrototypeOf(mushuk) === hayvon); // true
```

### 5.11. `Object.fromEntries(array)`
`Object.entries()` ning teskarisi — `[key, value]` juftliklaridan object yasaydi.

```javascript
const juftliklar = [["ism", "Kamola"], ["yosh", 24]];
const obj = Object.fromEntries(juftliklar);
console.log(obj); // { ism: "Kamola", yosh: 24 }

// Amaliy misol: Map'dan Object'ga o'tkazish
const map = new Map([["a", 1], ["b", 2]]);
console.log(Object.fromEntries(map)); // { a: 1, b: 2 }
```

### 5.12. `Object.getOwnPropertyNames(obj)`
Barcha property nomlarini qaytaradi (enumerable bo'lmaganlarni ham).

```javascript
const arr = [1, 2, 3];
console.log(Object.getOwnPropertyNames(arr)); // ["0","1","2","length"]
```

### 5.13. `Object.getOwnPropertyDescriptor(obj, key)`
Bitta property haqida to'liq ma'lumot (descriptor) beradi.

```javascript
const kitob = { nomi: "Kecha va kunduz" };
console.log(Object.getOwnPropertyDescriptor(kitob, "nomi"));
// { value: "Kecha va kunduz", writable: true, enumerable: true, configurable: true }
```

### 5.14. `Object.is(qiymat1, qiymat2)`
`===` ga o'xshash, lekin ba'zi maxsus holatlarda farqlanadi.

```javascript
console.log(Object.is(NaN, NaN));   // true  (=== esa false qaytaradi!)
console.log(Object.is(0, -0));      // false (=== esa true qaytaradi!)
console.log(Object.is(5, 5));       // true
```

### 📋 Statik metodlar jadvali

| Metod | Vazifasi |
|---|---|
| `Object.keys()` | Kalitlar array'i |
| `Object.values()` | Qiymatlar array'i |
| `Object.entries()` | [key, value] juftliklar array'i |
| `Object.assign()` | Object'larni birlashtiradi |
| `Object.freeze()` | To'liq o'zgarmas qiladi |
| `Object.seal()` | Property qo'shish/o'chirishni cheklaydi |
| `Object.create()` | Prototype asosida yaratadi |
| `Object.defineProperty()` | Bitta property'ni nazorat bilan qo'shadi |
| `Object.defineProperties()` | Bir nechta property'ni nazorat bilan qo'shadi |
| `Object.fromEntries()` | Juftliklardan object yasaydi |
| `Object.getPrototypeOf()` | Prototipni oladi |
| `Object.is()` | Qat'iy taqqoslash (maxsus holatlar bilan) |

---

## 6. Getter va Setter

Property'ni **funksiya kabi hisoblab, lekin oddiy property kabi o'qish/yozish** imkonini beradi.

```javascript
const foydalanuvchi = {
  ismi: "Elmurod",
  familiyasi: "Sattorov",

  // getter — hisoblangan property
  get toliqIsm() {
    return `${this.ismi} ${this.familiyasi}`;
  },

  // setter — qiymat o'rnatilganda ishga tushadi
  set toliqIsm(yangiIsm) {
    const qismlar = yangiIsm.split(" ");
    this.ismi = qismlar[0];
    this.familiyasi = qismlar[1];
  }
};

console.log(foydalanuvchi.toliqIsm); // "Elmurod Sattorov" — funksiya emas, xuddi property kabi!

foydalanuvchi.toliqIsm = "Aziz Karimov"; // setter ishga tushadi
console.log(foydalanuvchi.ismi); // "Aziz"
```

> 💡 Getter/setter — ma'lumotni validatsiya qilish yoki hisoblab chiqarish uchun juda qulay (masalan, narx + QQS avtomatik hisoblanishi).

---

## 7. Object destructuring

Object'dagi qiymatlarni tez va qisqa usulda o'zgaruvchilarga ajratib olish.

```javascript
const mashina = { marka: "Kia", model: "Rio", yil: 2022 };

// oddiy destructuring
const { marka, model } = mashina;
console.log(marka, model); // "Kia" "Rio"

// boshqa nom bilan olish
const { marka: brend } = mashina;
console.log(brend); // "Kia"

// default qiymat berish
const { rang = "Noma'lum" } = mashina;
console.log(rang); // "Noma'lum" — mashina object'ida rang yo'q edi

// nested destructuring
const foydalanuvchi = {
  ism: "Diyor",
  manzil: { shahar: "Xiva", kocha: "Amir Temur" }
};
const { manzil: { shahar } } = foydalanuvchi;
console.log(shahar); // "Xiva"

// funksiya parametrida destructuring
function chiqar({ ism, yosh }) {
  console.log(`${ism}, ${yosh} yoshda`);
}
chiqar({ ism: "Malika", yosh: 20 });
```

---

## 8. Spread va Rest operatorlari

### 8.1. Spread (`...`) — object'ni "yoyish"

```javascript
const asosiy = { ism: "Sardor", yosh: 27 };
const kengaytirilgan = { ...asosiy, kasb: "Dizayner" };
console.log(kengaytirilgan); // { ism: "Sardor", yosh: 27, kasb: "Dizayner" }

// object nusxasini olish (shallow copy)
const nusxa = { ...asosiy };

// bir nechta object'ni birlashtirish
const a = { x: 1 };
const b = { y: 2 };
const c = { ...a, ...b }; // { x: 1, y: 2 }
```

### 8.2. Rest (`...`) — qolgan property'larni yig'ish

```javascript
const mahsulot = { nomi: "Telefon", narx: 3000000, rang: "Qora", kafolat: 12 };

const { nomi, ...qolgani } = mahsulot;
console.log(nomi);     // "Telefon"
console.log(qolgani);  // { narx: 3000000, rang: "Qora", kafolat: 12 }
```

---

## 9. Nested (ichma-ich) object'lar va deep copy

```javascript
const kompaniya = {
  nomi: "TechUZ",
  manzil: {
    shahar: "Toshkent",
    tuman: "Chilonzor"
  },
  xodimlar: ["Ali", "Vali", "Guli"]
};

console.log(kompaniya.manzil.shahar); // "Toshkent"
console.log(kompaniya.xodimlar[1]);   // "Vali"
```

### ⚠️ Shallow copy muammosi

```javascript
const asl = { ism: "Botir", manzil: { shahar: "Buxoro" } };
const nusxa = { ...asl }; // faqat 1-darajali nusxa (shallow)

nusxa.manzil.shahar = "Samarqand";
console.log(asl.manzil.shahar); // "Samarqand" — asl object HAM o'zgardi!
```

**Sabab:** spread operator faqat birinchi darajadagi property'larni nusxalaydi. Ichki object'lar hali ham **bir xil manzilga (reference) ishora qiladi**.

### ✅ Deep copy yechimlari

```javascript
// 1-usul: structuredClone (eng zamonaviy va tavsiya etiladi)
const deepNusxa1 = structuredClone(asl);

// 2-usul: JSON orqali (function va undefined saqlanmaydi!)
const deepNusxa2 = JSON.parse(JSON.stringify(asl));

// 3-usul: lodash kutubxonasi
// const deepNusxa3 = _.cloneDeep(asl);

deepNusxa1.manzil.shahar = "Andijon";
console.log(asl.manzil.shahar); // "Samarqand" — asl object o'zgarmadi ✅
```

---

## 10. Optional chaining va Nullish coalescing

### 10.1. Optional chaining (`?.`)

Ichma-ich property mavjud bo'lmasa, xato bermasdan `undefined` qaytaradi.

```javascript
const user = { ism: "Jasur" };

console.log(user.manzil.shahar);   // ❌ Xato: Cannot read property 'shahar' of undefined
console.log(user.manzil?.shahar);  // ✅ undefined — dastur to'xtamaydi

// funksiya chaqirishda ham ishlaydi
user.salomAyt?.(); // funksiya mavjud bo'lmasa, hech narsa qilmaydi
```

### 10.2. Nullish coalescing (`??`)

Qiymat `null` yoki `undefined` bo'lsagina default qiymat beradi (0 va "" kabi "falsy" qiymatlarni default bilan almashtirmaydi).

```javascript
const sozlamalar = { ovozBalandligi: 0 };

console.log(sozlamalar.ovozBalandligi || 50); // 50 ❌ (0 falsy deb hisoblanadi)
console.log(sozlamalar.ovozBalandligi ?? 50); // 0  ✅ (to'g'ri natija)

// ikkalasini birga ishlatish
const shaharNomi = user?.manzil?.shahar ?? "Manzil kiritilmagan";
console.log(shaharNomi); // "Manzil kiritilmagan"
```

---

## 11. for...in va hasOwnProperty

```javascript
const talaba = { ism: "Rustam", kurs: 2, fakultet: "IT" };

for (const key in talaba) {
  console.log(`${key}: ${talaba[key]}`);
}
// ism: Rustam
// kurs: 2
// fakultet: IT
```

### ⚠️ `for...in` prototype'dagi property'larni ham aylanadi

```javascript
Object.prototype.yangiXossa = "test"; // (bu amalda tavsiya etilmaydi!)

for (const key in talaba) {
  if (talaba.hasOwnProperty(key)) { // faqat o'ziga tegishlilarni filtrlash
    console.log(key);
  }
}
```

> 💡 Shu sababli ko'pincha `for...in` o'rniga `Object.keys()` + `forEach` ishlatish tavsiya etiladi — u faqat o'z (own) property'larni qaytaradi.

---

## 12. JSON.stringify va JSON.parse

Object'ni matn (JSON string) formatiga aylantirish va aksincha.

```javascript
const kitob = { nomi: "Mehrobdan chayon", sahifa: 400, mavjud: true };

// Object → JSON string
const jsonMatn = JSON.stringify(kitob);
console.log(jsonMatn); // '{"nomi":"Mehrobdan chayon","sahifa":400,"mavjud":true}'

// chiroyli formatda chiqarish (indentatsiya bilan)
console.log(JSON.stringify(kitob, null, 2));

// JSON string → Object
const qaytaObject = JSON.parse(jsonMatn);
console.log(qaytaObject.nomi); // "Mehrobdan chayon"
```

**Qayerda ishlatiladi?**
- API'ga ma'lumot yuborish/qabul qilish (`fetch`, backend bilan ishlash)
- `localStorage`da object saqlash (chunki u faqat string qabul qiladi)

```javascript
localStorage.setItem("foydalanuvchi", JSON.stringify(kitob));
const saqlangan = JSON.parse(localStorage.getItem("foydalanuvchi"));
```

---

## 13. Amaliy mashqlar

### 🟢 Boshlang'ich daraja

**1-mashq:** `talaba` nomli object yarating (ism, yosh, kurs xususiyatlari bilan), so'ng uning barcha ma'lumotlarini konsolga chiqaring.

**2-mashq:** Berilgan object'ga yangi property qo'shing, birini o'chiring va birini o'zgartiring:
```javascript
const mahsulot = { nomi: "Noutbuk", narx: 8000000 };
```

### 🟡 O'rta daraja

**3-mashq:** `Object.entries()` yordamida quyidagi object'dagi barcha qiymatlar yig'indisini toping:
```javascript
const savatcha = { non: 3000, sut: 12000, tuxum: 25000 };
// Javob: 40000
```

**4-mashq:** Ikki object'ni `Object.assign()` yoki spread yordamida birlashtiring va natijani chiqaring:
```javascript
const shaxsiy = { ism: "Nilufar", yosh: 23 };
const ish = { lavozim: "Marketolog", stajGodi: 2 };
```

### 🔴 Yuqori daraja

**5-mashq:** Getter va setter ishlatib, `to'rtburchak` object yarating: `en` va `bo'yi` property'lari bo'lsin, `yuza` esa getter orqali avtomatik hisoblansin.

**6-mashq:** Quyidagi nested object'ning **deep copy**sini yarating va nusxadagi o'zgarish asl object'ga ta'sir qilmasligini isbotlang:
```javascript
const kompaniya = {
  nomi: "EduTech",
  manzil: { shahar: "Namangan" },
  xodimlar: [{ ism: "Off1" }, { ism: "Off2" }]
};
```

**7-mashq:** `Object.freeze()` yordamida o'zgarmas `KONFIG` object yarating va uni o'zgartirishga urinib ko'ring — natijani tushuntiring.

---

## 📝 Xulosa

| Tushuncha | Qisqacha |
|---|---|
| Object literal | `{ key: value }` — eng tez usul |
| `this` | Object metodida — o'sha object'ga ishora |
| Statik metodlar | `Object.keys/values/entries/assign/freeze...` |
| Getter/Setter | Hisoblangan property'lar |
| Destructuring | Qiymatlarni tez ajratib olish |
| Spread/Rest | Birlashtirish va yig'ish |
| Shallow vs Deep copy | `{...obj}` sayoz, `structuredClone()` chuqur |
| Optional chaining `?.` | Xatosiz ichki property'ga kirish |
| JSON | Object ↔ String aylantirish |

---
*Tayyorladi: Elmurod | JavaScript Reference seriyasi*
