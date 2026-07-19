# **Object-Oriented JavaScript**

JavaScript — **klassik OOP tillaridan (Java, C++) farqli**, **prototype-based (prototiplarga asoslangan)** til. ES6'dagi `class` sintaksisi esa haqiqiy klass emas — bu faqat **prototype mexanizmi ustidagi "shakar qoplama" (syntactic sugar)**. Shu sababli, OOP'ni chuqur tushunish uchun avval prototype tizimini, so'ngra `class` sintaksisini o'rganish to'g'ri yondashuv hisoblanadi.

---

## 🏗️ 1. Constructor Functions (Konstruktor funksiyalar)

`class` paydo bo'lishidan oldin (ES5 va undan avval), obyektlarni "shablon" asosida yaratish uchun **konstruktor funksiyalar** ishlatilgan. Konvensiyaga ko'ra, ular **katta harf bilan** boshlanadi.

```javascript
function Odam(ism, yosh) {
  this.ism = ism;
  this.yosh = yosh;
}

Odam.prototype.salomla = function () {
  return `Salom, men ${this.ism}, ${this.yosh} yoshdaman`;
};

const ali = new Odam("Ali", 25);
console.log(ali.salomla()); // "Salom, men Ali, 25 yoshdaman"
```

### 🔹 `new` operatori — 4 bosqichli jarayon

`new` kalit so'zi chaqirilganda, JavaScript dvigateli **avtomatik ravishda** quyidagi 4 ta amalni bajaradi:

```javascript
function Odam(ism) {
  // new Odam("Ali") chaqirilganda, dvigatel "orqa fonda" quyidagilarni bajaradi:

  // 1️⃣ Yangi bo'sh obyekt yaratiladi
  // let this = {};

  // 2️⃣ Yangi obyekt Odam.prototype'ga bog'lanadi
  // Object.setPrototypeOf(this, Odam.prototype);

  // 3️⃣ Funksiya tanasi bajariladi, 'this'ga xususiyatlar qo'shiladi
  this.ism = ism;

  // 4️⃣ Agar funksiya boshqa OBYEKT qaytarmasa, 'this' avtomatik qaytariladi
  // return this; (yashirin)
}

const odam1 = new Odam("Vali");
console.log(odam1.ism); // "Vali"
console.log(odam1 instanceof Odam); // true
```

### ⚠️ Konstruktor obyekt qaytarsa — o'sha obyekt ustunlik qiladi

```javascript
function Mahsulot(nomi) {
  this.nomi = nomi;
  return { boshqaNomi: "men boshqacha obyektman" }; // obyekt qaytarilyapti!
}

const m = new Mahsulot("Noutbuk");
console.log(m.nomi); // undefined
console.log(m.boshqaNomi); // "men boshqacha obyektman" — return qilingan obyekt ustunlik qildi

// Lekin agar oddiy QIYMAT (string, son) qaytarilsa — e'tiborga olinmaydi:
function Mahsulot2(nomi) {
  this.nomi = nomi;
  return "men string qaytaryapman"; // e'tiborga olinmaydi
}
const m2 = new Mahsulot2("Sichqoncha");
console.log(m2.nomi); // "Sichqoncha" — this baribir qaytariladi
```

### ⚠️ `new`siz chaqirilsa — jiddiy xato

```javascript
function Odam(ism) {
  this.ism = ism;
}

const notogri = Odam("Ali"); // 'new' unutildi!
console.log(notogri); // undefined
console.log(window.ism); // "Ali" — global obyektga sizib chiqdi (strict mode bo'lmasa)!
```

**Himoya usuli (ES5 davrida keng ishlatilgan):**

```javascript
function Odam(ism) {
  if (!(this instanceof Odam)) {
    return new Odam(ism); // avtomatik to'g'rilaydi
  }
  this.ism = ism;
}

const ali = Odam("Ali"); // 'new'siz chaqirilsa ham to'g'ri ishlaydi
console.log(ali.ism); // "Ali"
```

### 🔹 `this` konstruktorlarda

Konstruktor ichida `this` — **hozir yaratilayotgan yangi instance**ga ishora qiladi (`new` bo'limida batafsil ko'rilgan). Bu — oddiy funksiya yoki metoddagi `this`dan farq qiladi, chunki uning qiymati **doim** yangi obyekt bo'ladi (agar boshqa obyekt qaytarilmasa).

### 🔹 `instanceof` operatori

`instanceof` — obyektning **prototype zanjirida** berilgan konstruktorning `prototype`si mavjudligini tekshiradi:

```javascript
function Hayvon(tur) {
  this.tur = tur;
}

const mushuk = new Hayvon("mushuk");

console.log(mushuk instanceof Hayvon); // true
console.log(mushuk instanceof Object); // true — hamma narsa Object'dan meros oladi
console.log(mushuk instanceof Array); // false
```

**`instanceof` qanday ishlaydi (ichki mexanizm):**

```javascript
// mushuk instanceof Hayvon quyidagicha tekshiradi:
// mushuk.__proto__ === Hayvon.prototype ? true
// aks holda mushuk.__proto__.__proto__ === Hayvon.prototype ? ...
// va h.k., prototype zanjiri bo'ylab yuqoriga qarab, toki null'gacha
```

**Amaliy foydasi — turlarni tekshirish:**

```javascript
function tekshir(obyekt) {
  if (obyekt instanceof Array) {
    console.log("Bu massiv");
  } else if (obyekt instanceof Date) {
    console.log("Bu sana");
  } else if (obyekt instanceof Error) {
    console.log("Bu xatolik obyekti");
  }
}
```

---

## 🔗 2. Prototypes and Prototype Chain (Prototiplar va Prototip zanjiri)

JavaScript'da **har bir obyekt** boshqa bir obyektga (uning **prototipi**ga) "ishora" qiladi. Agar obyektning o'zida xususiyat/metod topilmasa, JavaScript uni **prototip zanjiri (prototype chain)** bo'ylab qidiradi — bu esa **prototypal inheritance (prototiplar orqali meros olish)**ning asosidir.

### 🔹 `__proto__` (legacy) vs `Object.getPrototypeOf()`

`__proto__` — obyektning prototipiga kirish uchun **eski (legacy)**, lekin hali ham keng qo'llab-quvvatlanadigan xususiyat:

```javascript
const hayvon = {
  ovozChiqar() {
    console.log("Umumiy ovoz");
  },
};

const it = {
  ism: "Aka",
};

it.__proto__ = hayvon; // ⚠️ legacy — production kodida tavsiya etilmaydi

it.ovozChiqar(); // "Umumiy ovoz" — o'zida yo'q, prototipdan topildi
```

**Zamonaviy, tavsiya etiladigan usul — `Object.getPrototypeOf()` / `Object.setPrototypeOf()`:**

```javascript
const hayvon = {
  ovozChiqar() {
    console.log("Umumiy ovoz");
  },
};

const it = { ism: "Aka" };

Object.setPrototypeOf(it, hayvon); // prototipni belgilash
console.log(Object.getPrototypeOf(it) === hayvon); // true — prototipni olish

it.ovozChiqar(); // "Umumiy ovoz"
```

### ⚠️ Nima uchun `__proto__` o'rniga `Object.getPrototypeOf()`?

|              | `__proto__`                                                                                        | `Object.getPrototypeOf()` / `setPrototypeOf()`                                                                 |
| ------------ | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Holati       | Legacy, ba'zi eski brauzerlarda yo'q bo'lishi mumkin                                               | ES6 standart, hamma joyda ishonchli                                                                            |
| Ishlatilishi | Ba'zan noto'g'ri ishlatilib, xatoga olib keladi                                                    | Aniq va xavfsiz API                                                                                            |
| Performance  | `setPrototypeOf` bilan prototipni **o'zgartirish** sekin (dvigatel optimallashtirishlarini buzadi) | Xuddi shu muammo, lekin obyekt **yaratilish paytida** prototipni belgilash tavsiya etiladi (`Object.create()`) |

💡 **Eng yaxshi amaliyot:** Obyekt yaratilgandan keyin prototipni o'zgartirish o'rniga, **`Object.create()`** bilan boshidanoq to'g'ri prototip bilan yaratish tavsiya etiladi:

```javascript
const it2 = Object.create(hayvon); // yaratilishdayoq prototip belgilanadi
it2.ism = "Bars";
it2.ovozChiqar(); // "Umumiy ovoz"
```

### 🔹 `prototype` xususiyati — funksiyalarda

**Har bir oddiy funksiya** (arrow function bundan mustasno) avtomatik ravishda `prototype` nomli xususiyatga ega bo'ladi. Bu — funksiya `new` bilan chaqirilganda, yaratiladigan barcha obyektlarning **umumiy "shablon" obyekti** bo'lib xizmat qiladi.

```javascript
function Odam(ism) {
  this.ism = ism;
}

console.log(typeof Odam.prototype); // "object"

// Metodlarni prototype'ga qo'shish — barcha instance'lar UNI ULASHADI (memory-efficient)
Odam.prototype.salomla = function () {
  return `Salom, men ${this.ism}`;
};

const ali = new Odam("Ali");
const vali = new Odam("Vali");

console.log(ali.salomla()); // "Salom, men Ali"
console.log(vali.salomla()); // "Salom, men Vali"

// Ikkalasi HAM XUDDI SHU metodni ishlatadi (xotirada bitta nusxa)
console.log(ali.salomla === vali.salomla); // true

// Instance'ning __proto__'si konstruktorning prototype'iga teng:
console.log(ali.__proto__ === Odam.prototype); // true
console.log(Object.getPrototypeOf(ali) === Odam.prototype); // true
```

### ⚠️ Nima uchun metodlarni `this.metod = function(){}` emas, `prototype`ga qo'shish kerak?

```javascript
// ❌ SAMARASIZ — har bir instance uchun YANGI funksiya yaratiladi (xotira isrofi)
function OdamYomon(ism) {
  this.ism = ism;
  this.salomla = function () {
    return `Salom, ${this.ism}`;
  };
}
const a = new OdamYomon("Ali");
const b = new OdamYomon("Vali");
console.log(a.salomla === b.salomla); // false — ikkita ALOHIDA funksiya

// ✅ SAMARALI — prototype orqali BITTA funksiya barcha instance'lar tomonidan ulashiladi
function OdamYaxshi(ism) {
  this.ism = ism;
}
OdamYaxshi.prototype.salomla = function () {
  return `Salom, ${this.ism}`;
};
const c = new OdamYaxshi("Ali");
const d = new OdamYaxshi("Vali");
console.log(c.salomla === d.salomla); // true — bitta umumiy funksiya
```

### 🔹 Prototypal Inheritance (Prototiplar orqali meros olish)

```javascript
// Ota "klass"
function Hayvon(ism) {
  this.ism = ism;
}
Hayvon.prototype.ovozChiqar = function () {
  console.log(`${this.ism} ovoz chiqarmoqda`);
};

// Bola "klass" — Hayvon'dan meros oladi
function It(ism, zoti) {
  Hayvon.call(this, ism); // Ota konstruktorini chaqirish (this bilan bog'lab)
  this.zoti = zoti;
}

// Prototip zanjirini bog'lash — MUHIM QADAM
It.prototype = Object.create(Hayvon.prototype);
It.prototype.constructor = It; // constructor'ni to'g'rilash

// It'ga xos metod qo'shish
It.prototype.hurish = function () {
  console.log(`${this.ism} vov-vov qilmoqda`);
};

const tobik = new It("Tobik", "Ovcharka");
tobik.ovozChiqar(); // "Tobik ovoz chiqarmoqda" — Hayvon'dan meros olindi
tobik.hurish(); // "Tobik vov-vov qilmoqda" — It'ning o'z metodi

console.log(tobik instanceof It); // true
console.log(tobik instanceof Hayvon); // true — prototip zanjiri orqali
```

### 🔹 Prototype Chain qanday ishlaydi (vizual tushuntirish)

```
tobik  →  It.prototype  →  Hayvon.prototype  →  Object.prototype  →  null
(ism,       (hurish)         (ovozChiqar)         (toString va h.k.)
 zoti)
```

Xususiyat/metod izlanganda, JavaScript **avval obyektning o'zidan**, topilmasa **prototipidan**, yana topilmasa **prototipning prototipidan** — toki `null`gacha davom etadi:

```javascript
console.log(tobik.toString()); // "[object Object]" — Object.prototype'dan topildi (zanjir oxirigacha borildi)
```

---

## 📦 3. ES6+ Classes (Zamonaviy klasslar)

`class` — ES6 (2015) bilan kiritilgan, prototype mexanizmi ustidagi **sintaktik shakar (syntactic sugar)**. Ichki jihatdan baribir prototiplar ishlatiladi, lekin sintaksis Java/C++ dasturchilariga tanish va o'qilishi osonroq.

### 🔹 `class` deklaratsiyasi va `constructor` metodi

```javascript
class Odam {
  constructor(ism, yosh) {
    this.ism = ism; // instance xususiyati
    this.yosh = yosh;
  }

  salomla() {
    return `Salom, men ${this.ism}, ${this.yosh} yoshdaman`;
  }
}

const ali = new Odam("Ali", 25);
console.log(ali.salomla()); // "Salom, men Ali, 25 yoshdaman"

// Tasdiq: class — aslida function'ning boshqacha shakli
console.log(typeof Odam); // "function"
console.log(ali instanceof Odam); // true

// class'dagi metodlar ham prototype'da saqlanadi (function'dagi kabi)
console.log(Odam.prototype.salomla === ali.salomla); // true
```

### ⚠️ `class`ning `function`dan muhim farqlari

```javascript
// 1) class HOISTING qilinmaydi (TDZ'da qoladi)
const p = new Odam2(); // ❌ ReferenceError
class Odam2 {}

// 2) class TANASI avtomatik STRICT MODE'da ishlaydi
class Test {
  metod() {
    // bu yerda "use strict" yozilmasa ham strict mode qoidalari amal qiladi
  }
}

// 3) class konstruktorini 'new'siz chaqirib bo'lmaydi
class Odam3 {
  constructor() {}
}
Odam3(); // ❌ TypeError: Class constructor Odam3 cannot be invoked without 'new'
```

### 🔹 Instance Properties/Methods (Instance xususiyatlari va metodlari)

**Instance metodlari** — `class` tanasida yozilgan, prototype'ga qo'shiladigan va barcha instance'lar tomonidan ulashiladigan metodlar:

```javascript
class Hisob {
  constructor(balans) {
    this.balans = balans; // instance xususiyati — har bir obyekt uchun ALOHIDA
  }

  pulSol(miqdor) {
    // instance metodi — barcha instance'lar ULASHADI
    this.balans += miqdor;
    return this.balans;
  }
}

const hisob1 = new Hisob(1000);
const hisob2 = new Hisob(500);

hisob1.pulSol(200);
console.log(hisob1.balans); // 1200
console.log(hisob2.balans); // 500 — hisob1'ga ta'sir qilmadi (alohida xususiyat)
console.log(hisob1.pulSol === hisob2.pulSol); // true — metod ulashilgan (bitta nusxa)
```

### 🔹 Class Fields (Instance Fields) — to'g'ridan-to'g'ri e'lon qilish (ES2022+ standart, amalda avvalroq keng qo'llab-quvvatlangan)

```javascript
class Hisob2 {
  balans = 0; // class field — constructor'dan tashqarida to'g'ridan-to'g'ri e'lon qilinadi
  valyuta = "UZS";

  constructor(boshlangichBalans) {
    this.balans = boshlangichBalans;
  }
}

const h = new Hisob2(5000);
console.log(h.balans, h.valyuta); // 5000 "UZS"
```

### 🔹 Static Properties/Methods (`static`)

**Static a'zolar** — instance'larga emas, **klassning o'ziga** tegishli bo'ladi. Instance orqali kirish mumkin emas, faqat klass nomi orqali chaqiriladi.

```javascript
class Matematika {
  static PI = 3.14159; // static xususiyat

  static kvadrat(x) {
    // static metod
    return x * x;
  }

  static {
    // static blok (ES2022+) — klass yuklanganda BIR MARTA ishga tushadigan initsializatsiya
    console.log("Matematika klassi yuklandi");
  }
}

console.log(Matematika.PI); // 3.14159
console.log(Matematika.kvadrat(5)); // 25

const m = new Matematika();
console.log(m.kvadrat); // undefined — instance orqali static metodga kirish mumkin emas!
```

**Amaliy misol — Factory pattern static metod orqali:**

```javascript
class Foydalanuvchi {
  constructor(ism, email) {
    this.ism = ism;
    this.email = email;
  }

  // Static factory metod — yangi instance'larni "tayyor holatda" yaratish uchun
  static mehmonYarat() {
    return new Foydalanuvchi("Mehmon", "mehmon@example.com");
  }

  static jsonDanYarat(jsonMatn) {
    const data = JSON.parse(jsonMatn);
    return new Foydalanuvchi(data.ism, data.email);
  }
}

const mehmon = Foydalanuvchi.mehmonYarat();
console.log(mehmon.ism); // "Mehmon"
```

**Amaliy misol — Static hisoblagich (barcha instance'lar sonini kuzatish):**

```javascript
class Mahsulot {
  static jamiSoni = 0; // klassga tegishli, barcha instance'lar UMUMIY

  constructor(nomi) {
    this.nomi = nomi;
    Mahsulot.jamiSoni++; // static xususiyatni oshirish
  }
}

new Mahsulot("Noutbuk");
new Mahsulot("Sichqoncha");
new Mahsulot("Klaviatura");

console.log(Mahsulot.jamiSoni); // 3
```

### 🔹 Getters and Setters (`get`, `set`)

**Getter/Setter** — xususiyatga **metod kabi mantiq qo'shib**, lekin **oddiy xususiyat kabi** (qavssiz) murojaat qilish imkonini beradi.

```javascript
class Toʻrtburchak {
  constructor(kenglik, balandlik) {
    this.kenglik = kenglik;
    this.balandlik = balandlik;
  }

  // Getter — hisoblangan qiymatni "xususiyat" ko'rinishida taqdim etadi
  get yuza() {
    return this.kenglik * this.balandlik;
  }

  get perimetr() {
    return 2 * (this.kenglik + this.balandlik);
  }

  // Setter — qiymat belgilanganda validatsiya/logika qo'shish imkonini beradi
  set olcham(qiymat) {
    if (qiymat <= 0) {
      throw new Error("O'lcham musbat bo'lishi kerak!");
    }
    this.kenglik = qiymat;
    this.balandlik = qiymat;
  }
}

const tt = new Toʻrtburchak(4, 5);
console.log(tt.yuza); // 20 — METOD emas, XUSUSIYAT kabi chaqirilyapti (qavssiz!)
console.log(tt.perimetr); // 18

tt.olcham = 10; // setter chaqiriladi — kvadratga aylantiradi
console.log(tt.yuza); // 100

tt.olcham = -5; // ❌ Error: O'lcham musbat bo'lishi kerak!
```

**Amaliy misol — private field bilan validatsiya qilingan xususiyat:**

```javascript
class Foydalanuvchi {
  #yosh; // private field (keyinroq batafsil ko'rib chiqamiz)

  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh; // setter orqali o'tadi
  }

  get yosh() {
    return this.#yosh;
  }

  set yosh(qiymat) {
    if (qiymat < 0 || qiymat > 150) {
      throw new Error("Yosh noto'g'ri!");
    }
    this.#yosh = qiymat;
  }
}

const foydalanuvchi = new Foydalanuvchi("Ali", 25);
console.log(foydalanuvchi.yosh); // 25
foydalanuvchi.yosh = -10; // ❌ Error: Yosh noto'g'ri!
```

### 🔹 Computed Method Names (Hisoblangan metod nomlari)

Metod nomini **dinamik ravishda**, `[]` ichida ifoda orqali belgilash mumkin:

```javascript
const metodNomi = "salomla";
const dinamikXususiyat = "maxsusMetod";

class Sinov {
  [metodNomi]() {
    return "Salom!";
  }

  [`${dinamikXususiyat}_v2`]() {
    return "Dinamik nomli metod";
  }

  // Ifoda orqali ham hisoblash mumkin
  ["kvadrat" + "Ol"](x) {
    return x * x;
  }
}

const s = new Sinov();
console.log(s.salomla()); // "Salom!"
console.log(s.maxsusMetod_v2()); // "Dinamik nomli metod"
console.log(s.kvadratOl(5)); // 25
```

**Amaliy foydasi** — masalan, metodlarni tashqi konfiguratsiya asosida dinamik yaratish, yoki `Symbol`lardan metod nomi sifatida foydalanish (`[Symbol.iterator]() {...}`).

---

## 👪 4. Class Inheritance (`extends`)

`extends` kalit so'zi — bir klassni ikkinchisidan **meros olishga (inherit)** imkon beradi. Bu — ichki jihatdan prototype zanjirini avtomatik bog'lab beradi.

```javascript
class Hayvon {
  constructor(ism) {
    this.ism = ism;
  }

  ovozChiqar() {
    console.log(`${this.ism} ovoz chiqarmoqda`);
  }

  malumot() {
    return `Bu — ${this.ism}`;
  }
}

class It extends Hayvon {
  constructor(ism, zoti) {
    super(ism); // Ota konstruktorini chaqirish — MAJBURIY!
    this.zoti = zoti;
  }

  // Metodni qayta belgilash (Override / Method Overriding)
  ovozChiqar() {
    console.log(`${this.ism} vov-vov qilmoqda`);
  }

  // Yangi, faqat It'ga xos metod
  dumChayqash() {
    console.log(`${this.ism} dumini chayqamoqda`);
  }
}

const tobik = new It("Tobik", "Ovcharka");

tobik.ovozChiqar(); // "Tobik vov-vov qilmoqda" — o'zgartirilgan metod ishlaydi
tobik.malumot(); // Hayvon'dan meros olingan metod ham ishlaydi
tobik.dumChayqash(); // "Tobik dumini chayqamoqda" — faqat It'da mavjud

console.log(tobik instanceof It); // true
console.log(tobik instanceof Hayvon); // true — meros orqali
```

### 🔑 Ko'p bosqichli meros (Multi-level Inheritance)

```javascript
class Hayvon {
  constructor(ism) {
    this.ism = ism;
  }
  yur() {
    console.log(`${this.ism} yurmoqda`);
  }
}

class It extends Hayvon {
  hurish() {
    console.log(`${this.ism} hurmoqda`);
  }
}

class Kuchukcha extends It {
  oynash() {
    console.log(`${this.ism} o'ynamoqda`);
  }
}

const kuchuk = new Kuchukcha("Bars");
kuchuk.yur(); // Hayvon'dan
kuchuk.hurish(); // It'dan
kuchuk.oynash(); // Kuchukcha'ning o'zidan

console.log(kuchuk instanceof Hayvon); // true — zanjir orqali
```

---

## 🔧 5. `super` Kalit So'zi

`super` — meros oluvchi (child) klassdan **ota (parent) klass**ga murojaat qilish uchun ishlatiladi. Ikki xil ko'rinishda ishlaydi:

### 🔹 `super(...)` — ota konstruktorini chaqirish

```javascript
class Hayvon {
  constructor(ism) {
    this.ism = ism;
    this.tirik = true;
  }
}

class Mushuk extends Hayvon {
  constructor(ism, rang) {
    super(ism); // Hayvon konstruktorini chaqiradi — this.ism va this.tirik'ni o'rnatadi
    this.rang = rang;
  }
}

const mushuk = new Mushuk("Pushti", "kulrang");
console.log(mushuk.ism, mushuk.tirik, mushuk.rang); // Pushti true kulrang
```

### ⚠️ MUHIM QOIDA: `super()` — `this`dan OLDIN chaqirilishi SHART

```javascript
class Mushuk2 extends Hayvon {
  constructor(ism) {
    console.log(this.ism); // ❌ ReferenceError: Must call super constructor before accessing 'this'
    super(ism);
  }
}
```

Sabab: child klassda `this` — faqat `super()` chaqirilgandan **keyin** yaratiladi (chunki aslida ota konstruktori `this`ni "quradi").

### 🔹 `super.metod()` — ota klassning metodini chaqirish

```javascript
class Hayvon {
  ovozChiqar() {
    console.log("Umumiy hayvon ovozi");
  }
}

class It extends Hayvon {
  ovozChiqar() {
    super.ovozChiqar(); // ota metodini AVVAL chaqiramiz
    console.log("...va keyin vov-vov!"); // so'ngra o'zimizniki qo'shamiz
  }
}

const tobik = new It();
tobik.ovozChiqar();
// Umumiy hayvon ovozi
// ...va keyin vov-vov!
```

**Amaliy misol — ota metodini "kengaytirish" (extend, override emas):**

```javascript
class Shakl {
  malumot() {
    return "Bu — geometrik shakl";
  }
}

class Doira extends Shakl {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  malumot() {
    return `${super.malumot()}, aniqrog'i, radiusi ${this.radius} bo'lgan doira`;
  }
}

const doira = new Doira(5);
console.log(doira.malumot());
// "Bu — geometrik shakl, aniqrog'i, radiusi 5 bo'lgan doira"
```

### 🔹 Static metodlarda `super`

```javascript
class Hayvon {
  static turHaqida() {
    return "Umumiy hayvonlar";
  }
}

class It extends Hayvon {
  static turHaqida() {
    return `${super.turHaqida()} — itlar oilasi`;
  }
}

console.log(It.turHaqida()); // "Umumiy hayvonlar — itlar oilasi"
```

---

## 🏗️ 6. Mixins (Ko'p meros olishning alternativi)

JavaScript klasslari **faqat bitta** ota klassdan meros olishi mumkin (`extends` — yagona meros, single inheritance). Agar bir klass bir nechta manbadan funksionallikni "qo'shib olishi" kerak bo'lsa, **Mixin** pattern ishlatiladi.

> **Mixin** — boshqa klasslarga metodlar "qo'shib beradigan" oddiy obyekt yoki funksiya.

### 🔹 Obyekt-mixin (`Object.assign` orqali)

```javascript
const uchishMumkin = {
  uch() {
    console.log(`${this.ism} uchmoqda`);
  },
};

const suzishMumkin = {
  suz() {
    console.log(`${this.ism} suzmoqda`);
  },
};

class Parranda {
  constructor(ism) {
    this.ism = ism;
  }
}

// Ikkala mixin'ni Parranda.prototype'ga "qo'shib qo'yamiz"
Object.assign(Parranda.prototype, uchishMumkin, suzishMumkin);

const orda = new Parranda("O'rdak");
orda.uch(); // "O'rdak uchmoqda"
orda.suz(); // "O'rdak suzmoqda"
```

### 🔹 Funksional Mixin (yanada moslashuvchan, "klass fabrikasi")

```javascript
const Uchuvchi = (Base) =>
  class extends Base {
    uch() {
      console.log(`${this.ism} uchmoqda`);
    }
  };

const Suzuvchi = (Base) =>
  class extends Base {
    suz() {
      console.log(`${this.ism} suzmoqda`);
    }
  };

class HayvonAsosi {
  constructor(ism) {
    this.ism = ism;
  }
}

// Bir nechta mixin'ni ZANJIR shaklida "qatlamlab" qo'llash
class Ordak extends Suzuvchi(Uchuvchi(HayvonAsosi)) {}

const ordak = new Ordak("Ordak");
ordak.uch(); // "Ordak uchmoqda"
ordak.suz(); // "Ordak suzmoqda"
```

### 💡 Mixin qachon kerak?

- Bir nechta **bog'liq bo'lmagan** klasslarga bir xil funksionallikni (masalan, `EventEmitter`, `Serializable`, `Loggable`) qo'shish kerak bo'lganda.
- "is-a" (bu — X turi) emas, **"can-do" (bu — Y qila oladi)** munosabatini ifodalash kerak bo'lganda.
- Klassik ko'p-meros (multiple inheritance) muammosini (masalan, "olmos muammosi") oldini olgan holda, funksionallikni qayta ishlatish kerak bo'lganda.

---

## 📦 7. Private Class Fields (`#privateField`) — ES2022+

`#` belgisi bilan boshlangan xususiyat/metod — **haqiqiy private (maxfiy)** hisoblanadi. Ular faqat **klass ichida** ko'rinadi, tashqaridan (hattoki `Object.keys()`, konsoldan ham) kirish mumkin emas.

```javascript
class BankHisobi {
  #balans; // private field e'lon qilish

  constructor(boshlangichBalans) {
    this.#balans = boshlangichBalans;
  }

  balansniKor() {
    return this.#balans; // faqat klass ICHIDA kirish mumkin
  }

  pulSol(miqdor) {
    if (miqdor <= 0) throw new Error("Miqdor musbat bo'lishi kerak");
    this.#balans += miqdor;
  }
}

const hisob = new BankHisobi(1000);
console.log(hisob.balansniKor()); // 1000

console.log(hisob.#balans); // ❌ SyntaxError: Private field '#balans' must be declared in an enclosing class
console.log(hisob.balans); // undefined — bu boshqa, "balans" (# siz) xususiyati umuman yo'q
console.log(Object.keys(hisob)); // [] — private field ko'rinmaydi
```

### 🔑 Nima uchun `_balans` (konvensiya) emas, `#balans` (haqiqiy private)?

Eski, ES6'gacha bo'lgan davrda dasturchilar "bu private" degan **konvensiyani** bildirish uchun `_` prefiksidan foydalanishgan, lekin bu **hech qanday texnik himoya bermas edi**:

```javascript
class EskiUsul {
  constructor(balans) {
    this._balans = balans; // faqat KONVENSIYA — "tegmang" degani, lekin texnik jihatdan ochiq
  }
}

const h = new EskiUsul(1000);
h._balans = 999999; // ❌ hech narsa to'xtatmaydi — to'g'ridan-to'g'ri o'zgartirib bo'ladi!
```

`#` bilan esa bu **til darajasida** himoyalangan — tashqaridan umuman kirib bo'lmaydi.

### 🔹 Private field'larni tekshirish — `in` operatori

```javascript
class Hisob {
  #balans = 0;

  static balansiBormi(obyekt) {
    return #balans in obyekt; // xavfsiz tekshirish
  }
}

console.log(Hisob.balansiBormi(new Hisob())); // true
console.log(Hisob.balansiBormi({})); // false
```

---

## 🏷️ 8. Public Class Fields — ES2022+ (amalda avvalroq keng qo'llanilgan)

**Public class field** — `constructor`dan tashqarida, to'g'ridan-to'g'ri klass tanasida e'lon qilinadigan instance xususiyatlari.

```javascript
class Foydalanuvchi {
  // Public class fields — constructor'siz to'g'ridan-to'g'ri e'lon qilinadi
  ism = "Noma'lum";
  faol = true;
  royxatdanOtganVaqt = new Date();

  constructor(ism) {
    if (ism) this.ism = ism; // constructor ichida qiymatni o'zgartirish mumkin
  }
}

const f1 = new Foydalanuvchi();
console.log(f1.ism, f1.faol); // "Noma'lum" true

const f2 = new Foydalanuvchi("Ali");
console.log(f2.ism); // "Ali"
```

### 🔑 Class Field'ning eng katta afzalligi — Arrow Function metodlar

Class field sifatida yozilgan arrow function — **avtomatik ravishda `this`ni instance'ga bog'laydi**, `.bind(this)` yozish shart emas:

```javascript
class Tugma {
  ism = "Yubor";

  // Oddiy metod — event handler sifatida uzatilsa 'this' yo'qoladi
  bosildiOddiy() {
    console.log(this.ism); // callback sifatida chaqirilsa, xato beradi
  }

  // Class field + arrow function — 'this' DOIM klass instance'iga bog'langan
  bosildi = () => {
    console.log(`${this.ism} tugmasi bosildi`); // har doim to'g'ri ishlaydi
  };
}

const t = new Tugma();
const { bosildi } = t; // metodni "ajratib olsak" ham...
bosildi(); // ✅ "Yubor tugmasi bosildi" — arrow function bo'lgani uchun ishlaydi

document.querySelector("button").addEventListener("click", t.bosildi); // bind() shart emas!
```

---

## 🔒 9. Private Methods — ES2022+

Xuddi private field'lar kabi, metodlar ham `#` bilan **private** qilinishi mumkin — ular faqat klass ichidan chaqirilishi mumkin.

```javascript
class Parol {
  #qiymat;

  constructor(qiymat) {
    this.#qiymat = qiymat;
  }

  // Private metod — faqat klass ichida ishlatiladigan "yordamchi" logika
  #kuchliMi() {
    return this.#qiymat.length >= 8 && /\d/.test(this.#qiymat);
  }

  tekshir() {
    // public metod, ICHIDA private metodni chaqiradi
    if (this.#kuchliMi()) {
      return "Parol kuchli ✅";
    }
    return "Parol zaif — kamida 8 belgi va 1 raqam bo'lsin ❌";
  }
}

const p = new Parol("abc123456");
console.log(p.tekshir()); // "Parol kuchli ✅"

p.#kuchliMi(); // ❌ SyntaxError — tashqaridan chaqirib bo'lmaydi
```

### 🔹 Private Static Metodlar

```javascript
class Validator {
  static #minUzunlik = 8; // private STATIC field

  static #uzunlikTogrimi(matn) {
    // private static metod
    return matn.length >= Validator.#minUzunlik;
  }

  static tekshir(matn) {
    if (!Validator.#uzunlikTogrimi(matn)) {
      return "Juda qisqa!";
    }
    return "To'g'ri";
  }
}

console.log(Validator.tekshir("salom123")); // "To'g'ri"
Validator.#uzunlikTogrimi("test"); // ❌ SyntaxError — tashqaridan chaqirib bo'lmaydi
```

### 💡 Private a'zolarning amaliy foydasi (Encapsulation)

- **Ichki implementatsiyani yashirish** — foydalanuvchi (boshqa dasturchi) faqat "public interfeys" bilan ishlaydi, ichki detallar bilan "bosh og'rig'i" bo'lmaydi.
- **Xavfsizlik** — muhim ma'lumotlar (parol, balans, token) tashqi kod tomonidan tasodifan yoki ataylab o'zgartirilishining oldini oladi.
- **Refactoring erkinligi** — private metod/field'larni implementatsiyani o'zgartirganda xavotirsiz qayta yozish mumkin, chunki ular tashqi kodga "ta'sir qilmaydi" (chunki ular umuman ko'rinmagan).

---

## 📊 Umumiy xulosa jadvali

| Konsepsiya             | Maqsadi                                              | Kalit so'z/sintaksis              |
| ---------------------- | ---------------------------------------------------- | --------------------------------- |
| Constructor Function   | Obyekt yaratish shabloni (pre-ES6)                   | `function` + `new`                |
| `instanceof`           | Obyekt qaysi konstruktordan yaratilganini tekshirish | `obj instanceof Ctor`             |
| Prototype Chain        | Meros olish mexanizmi                                | `__proto__`, `prototype`          |
| ES6 `class`            | Zamonaviy, o'qilishi oson OOP sintaksisi             | `class`, `constructor`            |
| Static a'zolar         | Klassga tegishli (instance'ga emas)                  | `static`                          |
| Getter/Setter          | Xususiyat kabi ko'rinuvchi hisoblangan qiymat        | `get`, `set`                      |
| `extends`              | Klasslar orasida meros                               | `class B extends A`               |
| `super`                | Ota klassga murojaat                                 | `super()`, `super.metod()`        |
| Mixin                  | Ko'p manbadan funksionallik qo'shish                 | `Object.assign`, funksional mixin |
| Private Fields/Methods | Haqiqiy inkapsulyatsiya                              | `#fieldNomi`                      |
| Public Class Fields    | Constructor'siz xususiyat e'lon qilish               | `fieldNomi = qiymat`              |

---

## ✅ Yakuniy xulosa

- JavaScript OOP'ning yuragi — **prototype zanjiri**. `class` — bu mexanizmni yashiradigan qulay sintaksis, lekin "orqa fonda" baribir prototiplar ishlaydi.
- **Metodlarni har doim `prototype`ga (yoki `class` tanasiga) qo'shing**, `constructor` ichida emas — bu xotirani tejaydi va performance'ni yaxshilaydi.
- **`super()`ni child konstruktorda eng birinchi qatorda** chaqiring — `this`dan foydalanishdan oldin bu majburiy.
- Zamonaviy loyihalarda **`#private` field/metodlardan** faol foydalaning — bu haqiqiy inkapsulyatsiya beradi, `_` prefiksi kabi shunchaki konvensiya emas.
- **Mixin'lar** — yagona merosning cheklovini chetlab o'tishning eng toza usuli, ayniqsa "can-do" munosabatlarini ifodalashda foydali.
- **Getter/Setter** — validatsiya va hisoblangan xususiyatlar uchun kodni ancha o'qilishi oson qiladi, ayniqsa private field bilan birga ishlatilganda.
