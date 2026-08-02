# 🏛️ **Object-Oriented Programming (OOP) — JavaScript**

Ushbu qo'llanmada JavaScript'dagi OOP (Object-Oriented Programming — Obyektga Yo'naltirilgan Dasturlash) mavzusi boshidan oxirigacha, amaliy misollar bilan tushuntiriladi. Har bir bo'lim nazariya + kod + izoh tartibida berilgan.

---

## 📑 Mundarija

1. 🏗️ Constructor Functions
2. 🔗 Prototypes va Prototype Chain
3. 📦 ES6+ Classes
4. 👪 Class Inheritance (`extends`)
5. 🔧 `super` kalit so'zi
6. 🏗️ Mixins
7. 📦 Private Class Fields (`#privateField`)
8. 🏷️ Public Class Fields
9. 🔒 Private Methods
10. 🎭 Polimorfizm va Method Overriding
11. 🧩 Composition vs Inheritance
12. 🏭 Factory Functions vs Classes
13. ❄️ Object.freeze() — Immutability
14. 🔁 Symbol.iterator — Custom Iteration
15. 🎯 `new.target`, `toString`, `Symbol.toPrimitive`
16. 📌 Xulosa va Best Practices

---

## 1. 🏗️ Constructor Functions

Constructor function — bu oddiy funksiya bo'lib, `new` kalit so'zi bilan chaqirilganda yangi obyekt yaratish uchun ishlatiladi. ES6 class'lardan oldin JavaScript'da OOP shu usulda amalga oshirilgan.

### `new` operatori

`new` operatori chaqirilganda quyidagi 4 ta jarayon avtomatik ravishda bajariladi:

1. Yangi bo'sh obyekt `{}` yaratiladi.
2. Yangi obyektning `__proto__` xususiyati constructor funksiyaning `prototype`'iga bog'lanadi.
3. Constructor funksiya ichidagi `this` shu yangi obyektga bog'lanadi (bind qilinadi).
4. Agar constructor funksiya aniq bir obyekt qaytarmasa, yangi obyekt avtomatik qaytariladi.

```javascript
// Constructor function — katta harf bilan boshlanadi (convention)
function Odam(ism, yosh) {
  // "this" - yangi yaratilayotgan obyektni bildiradi
  this.ism = ism;
  this.yosh = yosh;

  this.salomBer = function () {
    console.log(`Salom, mening ismim ${this.ism}, men ${this.yosh} yoshdaman`);
  };
}

// "new" operatori bilan yangi obyekt yaratamiz
const odam1 = new Odam("Elmurod", 25);
const odam2 = new Odam("Aziza", 23);

odam1.salomBer(); // Salom, mening ismim Elmurod, men 25 yoshdaman
odam2.salomBer(); // Salom, mening ismim Aziza, men 23 yoshdaman

console.log(odam1); // Odam { ism: 'Elmurod', yosh: 25, salomBer: [Function] }
```

⚠️ **Muhim eslatma:** Agar `new` operatorisiz chaqirilsa, `this` global obyektga (yoki strict mode'da `undefined`ga) bog'lanadi va xatolikka olib kelishi mumkin:

```javascript
function Mashina(model) {
  "use strict";
  this.model = model;
}

const m1 = Mashina("Chevrolet"); // TypeError: Cannot set properties of undefined
// "new" so'zi ishlatilmagani uchun "this" undefined bo'ladi (strict mode'da)
```

### `this` konstruktorlarda

Constructor ichida `this` — yangi yaratilayotgan obyektning o'zini bildiradi. Har bir metodni constructor ichida yozish xotira jihatidan samarasiz, chunki har bir yangi obyekt uchun metod qayta-qayta yaratiladi. Shuning uchun metodlarni **prototype** orqali qo'shish tavsiya etiladi (keyingi bo'limda ko'ramiz).

```javascript
function Hisoblagich() {
  this.qiymat = 0;
}

// Metodni prototype orqali qo'shish - barcha instance'lar bitta metodni bo'lishadi
Hisoblagich.prototype.oshirish = function () {
  this.qiymat++;
};

const h1 = new Hisoblagich();
const h2 = new Hisoblagich();

h1.oshirish();
h1.oshirish();
h2.oshirish();

console.log(h1.qiymat); // 2
console.log(h2.qiymat); // 1
console.log(h1.oshirish === h2.oshirish); // true — bitta metod, xotira tejaladi
```

### `instanceof` operatori

`instanceof` operatori berilgan obyekt ma'lum bir constructor funksiya (yoki class)ning prototype zanjirida mavjudligini tekshiradi.

```javascript
function Hayvon(nomi) {
  this.nomi = nomi;
}

const mushuk = new Hayvon("Mushuk");

console.log(mushuk instanceof Hayvon); // true
console.log(mushuk instanceof Object); // true — har bir obyekt Object'dan meros oladi
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true

// instanceof qanday ishlaydi - ichki mexanizm:
function mensInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);
  while (proto !== null) {
    if (proto === Constructor.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}

console.log(mensInstanceof(mushuk, Hayvon)); // true
```

---

## 2. 🔗 Prototypes va Prototype Chain

JavaScript **prototype-based** (prototipga asoslangan) til hisoblanadi — bu degani, obyektlar boshqa obyektlardan to'g'ridan-to'g'ri meros olishi mumkin, klassik OOP tillaridagi kabi "class" tushunchasi shart emas (ES6 class'lar esa shunchaki prototype ustidan "syntactic sugar" hisoblanadi).

### `__proto__` (legacy) vs `Object.getPrototypeOf()`

- `__proto__` — obyektning ichki `[[Prototype]]` xususiyatiga kirish uchun **legacy** (eski, tavsiya etilmaydigan) usul.
- `Object.getPrototypeOf()` — bir xil ishni bajaruvchi **zamonaviy va tavsiya etiladigan** usul.

```javascript
const inson = {
  yur: function () {
    console.log("Men yuryapman");
  },
};

const talaba = {
  oqi: function () {
    console.log("Men o'qiyapman");
  },
};

// Legacy usul (ishlatish tavsiya etilmaydi, lekin bilish kerak)
talaba.__proto__ = inson;

// Zamonaviy va to'g'ri usul
console.log(Object.getPrototypeOf(talaba) === inson); // true

talaba.oqi(); // Men o'qiyapman
talaba.yur(); // Men yuryapman - prototype orqali meros olindi

// Prototype'ni o'rnatishning to'g'ri (tavsiya etilgan) usuli:
const talaba2 = Object.create(inson); // "inson" - talaba2ning prototipi bo'ladi
talaba2.yur(); // Men yuryapman
```

📌 **Nima uchun `__proto__` tavsiya etilmaydi?**

- U dastlab hech qanday rasmiy standart emas edi, faqat brauzerlar tomonidan qo'llab-quvvatlangan (keyinchalik ES6'da "legacy" sifatida standartlashtirildi).
- Ishlash tezligi (performance) past, chunki u getter/setter orqali ishlaydi.
- `Object.getPrototypeOf()` / `Object.setPrototypeOf()` aniqroq va tezroq.

### `prototype` xususiyati funksiyalarda

Har bir oddiy funksiya (arrow function'dan tashqari) avtomatik ravishda `prototype` nomli obyektga ega bo'ladi. Bu obyekt shu funksiya `new` bilan chaqirilganda yaratiladigan barcha instance'larning umumiy "andozasi" hisoblanadi.

```javascript
function Kitob(nom, muallif) {
  this.nom = nom;
  this.muallif = muallif;
}

// "prototype" - bu Kitob() funksiyasining o'zida mavjud bo'lgan maxsus obyekt
console.log(typeof Kitob.prototype); // "object"

Kitob.prototype.malumot = function () {
  return `"${this.nom}" - muallif: ${this.muallif}`;
};

const kitob1 = new Kitob("Alkimyogar", "Paulo Coelho");
console.log(kitob1.malumot()); // "Alkimyogar" - muallif: Paulo Coelho

// kitob1'ning o'z "prototype" xususiyati YO'Q, lekin __proto__ orqali
// Kitob.prototype'ga ulangan:
console.log(kitob1.prototype); // undefined
console.log(Object.getPrototypeOf(kitob1) === Kitob.prototype); // true
```

⚠️ **Farqni eslab qoling:**

- `Kitob.prototype` → funksiyaning o'zidagi xususiyat (andoza obyekt).
- `kitob1.__proto__` yoki `Object.getPrototypeOf(kitob1)` → instance orqali shu andozaga bog'lanish.

### Prototypal Inheritance (Prototip orqali meros)

```javascript
// Ota "class" (constructor)
function Transport(nomi, tezligi) {
  this.nomi = nomi;
  this.tezligi = tezligi;
}

Transport.prototype.harakatlan = function () {
  console.log(`${this.nomi} ${this.tezligi} km/soat tezlikda harakatlanmoqda`);
};

// Bola "class" (constructor)
function Mashina(nomi, tezligi, marka) {
  // Transport constructor'ini chaqirib, this'ni to'g'ri bog'laymiz
  Transport.call(this, nomi, tezligi);
  this.marka = marka;
}

// Prototype zanjirini bog'lash - Mashina.prototype endi Transport instance'idan meros oladi
Mashina.prototype = Object.create(Transport.prototype);
Mashina.prototype.constructor = Mashina; // constructor xususiyatini tiklash muhim!

Mashina.prototype.signalBer = function () {
  console.log(`${this.marka} signal berdi: Tuut-tuut!`);
};

const mashina1 = new Mashina("Sedan", 180, "Chevrolet");

mashina1.harakatlan(); // Sedan 180 km/soat tezlikda harakatlanmoqda (Transport'dan meros)
mashina1.signalBer(); // Chevrolet signal berdi: Tuut-tuut!

console.log(mashina1 instanceof Mashina); // true
console.log(mashina1 instanceof Transport); // true - prototype zanjiri orqali
```

**Prototype Chain (Prototip zanjiri) qanday ishlaydi:**

```javascript
// mashina1 -> Mashina.prototype -> Transport.prototype -> Object.prototype -> null
console.log(Object.getPrototypeOf(mashina1) === Mashina.prototype); // true
console.log(Object.getPrototypeOf(Mashina.prototype) === Transport.prototype); // true
console.log(Object.getPrototypeOf(Transport.prototype) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null - zanjir tugadi
```

Metod yoki xususiyatga murojaat qilinganda, JavaScript avval obyektning o'zidan qidiradi, topmasa `__proto__` orqali zanjir bo'ylab yuqoriga (`Object.prototype`gacha) qidiradi. Agar hech joyda topilmasa — `undefined` qaytadi.

---

## 3. 📦 ES6+ Classes

ES6 (2015)da kiritilgan `class` sintaksisi — prototype-based inheritance ustidan qurilgan **"syntactic sugar"** hisoblanadi (ya'ni, "class" ichki mexanizmda hamon prototype orqali ishlaydi, lekin yozish qulayroq va o'qilishi tushunarliroq).

### `class` deklaratsiyasi va `constructor` metodi

```javascript
class Odam {
  // constructor - "new" bilan obyekt yaratilganda avtomatik chaqiriladigan maxsus metod
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }

  // Instance metodi - avtomatik ravishda Odam.prototype'ga qo'shiladi
  salomBer() {
    console.log(`Salom, men ${this.ism}, ${this.yosh} yoshdaman`);
  }
}

const odam1 = new Odam("Elmurod", 25);
odam1.salomBer(); // Salom, men Elmurod, 25 yoshdaman

// Isbot: class metodlari ham prototype orqali ishlaydi
console.log(typeof Odam); // "function" - class aslida funksiya
console.log(Odam.prototype.salomBer === odam1.salomBer); // true
```

### Class Expression

Class'larni deklaratsiya (yuqoridagidek) yoki **expression** ko'rinishida ham yozish mumkin:

```javascript
// Nomsiz class expression
const Hayvon = class {
  constructor(turi) {
    this.turi = turi;
  }
};

// Nomli class expression (nom faqat class ichida ko'rinadi)
const Qush = class Parranda {
  uchish() {
    console.log("Men uchyapman!");
  }
};

const qush1 = new Qush();
qush1.uchish(); // Men uchyapman!
```

### Instance Properties va Methods

**Instance property** — har bir alohida obyektga tegishli xususiyat (odatda constructor ichida `this` orqali belgilanadi).
**Instance method** — barcha instance'lar tomonidan **umumiy foydalaniladigan** (prototype orqali) funksiya.

```javascript
class BankHisobi {
  constructor(egasi, balans) {
    this.egasi = egasi; // instance property
    this.balans = balans; // instance property
  }

  // instance method
  pulQoshish(summa) {
    this.balans += summa;
    console.log(`${summa} so'm qo'shildi. Yangi balans: ${this.balans}`);
  }

  pulYechish(summa) {
    if (summa > this.balans) {
      console.log("Balансda yetarli mablag' yo'q!");
      return;
    }
    this.balans -= summa;
    console.log(`${summa} so'm yechildi. Yangi balans: ${this.balans}`);
  }
}

const hisob1 = new BankHisobi("Elmurod", 1000000);
hisob1.pulQoshish(500000); // 500000 so'm qo'shildi. Yangi balans: 1500000
hisob1.pulYechish(200000); // 200000 so'm yechildi. Yangi balans: 1300000
```

### Static Properties/Methods (`static`)

`static` kalit so'zi bilan belgilangan xususiyat yoki metod **instance'larga emas, balki class'ning o'ziga** tegishli bo'ladi. Ular instance orqali emas, class nomi orqali chaqiriladi. Odatda **utility (yordamchi) funksiyalar** yoki **hisoblagichlar** uchun ishlatiladi.

```javascript
class Matematika {
  static PI = 3.14159; // static property

  // static method
  static kvadrat(son) {
    return son * son;
  }

  static doiraYuzi(radius) {
    return Matematika.PI * Matematika.kvadrat(radius);
  }
}

// Instance yaratmasdan to'g'ridan-to'g'ri class orqali chaqiriladi
console.log(Matematika.PI); // 3.14159
console.log(Matematika.kvadrat(5)); // 25
console.log(Matematika.doiraYuzi(10)); // 314.159

const m = new Matematika();
console.log(m.kvadrat); // undefined - static metod instance'da mavjud emas!
```

**Amaliy misol — static counter (obyektlar sonini hisoblash):**

```javascript
class Foydalanuvchi {
  static soni = 0; // barcha instance'lar uchun umumiy hisoblagich

  constructor(ism) {
    this.ism = ism;
    Foydalanuvchi.soni++; // har safar yangi instance yaratilganda +1
  }

  static jamiFoydalanuvchi() {
    return `Jami ${Foydalanuvchi.soni} ta foydalanuvchi ro'yxatdan o'tgan`;
  }
}

new Foydalanuvchi("Ali");
new Foydalanuvchi("Vali");
new Foydalanuvchi("Hasan");

console.log(Foydalanuvchi.jamiFoydalanuvchi()); // Jami 3 ta foydalanuvchi ro'yxatdan o'tgan
```

### Static Blocks (ES2022)

Static blocklar — class yuklanganda **bir marta** ishga tushadigan murakkab initsializatsiya (boshlang'ich sozlash) kodini yozish imkonini beradi.

```javascript
class Konfiguratsiya {
  static sozlamalar;

  // Static block - class e'lon qilinganda darhol bajariladi
  static {
    console.log("Konfiguratsiya yuklanmoqda...");
    // Masalan, murakkab hisob-kitob yoki tashqi manbadan ma'lumot olish
    Konfiguratsiya.sozlamalar = {
      til: "uz",
      versiya: "1.0.0",
    };
  }
}

console.log(Konfiguratsiya.sozlamalar); // { til: 'uz', versiya: '1.0.0' }
```

### Getters va Setters (`get`, `set`)

Getter va setter'lar xususiyatlarga **metod sifatida emas, oddiy property sifatida** murojaat qilish imkonini beradi, lekin orqa fonda mantiq (validatsiya, hisoblash va h.k.) bajarish imkoniyatini saqlab qoladi.

```javascript
class Toʻrtburchak {
  constructor(kenglik, balandlik) {
    this._kenglik = kenglik; // pastki chiziqcha - "ichki" xususiyat ekanini bildiradi (convention)
    this._balandlik = balandlik;
  }

  // getter - metodni oddiy xususiyatdek o'qish imkonini beradi
  get yuza() {
    return this._kenglik * this._balandlik;
  }

  get kenglik() {
    return this._kenglik;
  }

  // setter - qiymat o'rnatishda validatsiya qilish imkonini beradi
  set kenglik(yangiQiymat) {
    if (yangiQiymat <= 0) {
      console.log("Xatolik: kenglik musbat son bo'lishi kerak!");
      return;
    }
    this._kenglik = yangiQiymat;
  }
}

const tb = new Toʻrtburchak(5, 10);

console.log(tb.yuza); // 50 - metod emas, xuddi oddiy propertydek chaqirildi (qavssiz!)
console.log(tb.kenglik); // 5

tb.kenglik = 8; // setter ishga tushadi
console.log(tb.yuza); // 80

tb.kenglik = -3; // Xatolik: kenglik musbat son bo'lishi kerak!
console.log(tb.kenglik); // 8 - o'zgarmadi, chunki validatsiyadan o'tmadi
```

### Computed Method Names

Metod nomlarini **dinamik** (kvadrat qavs `[]` yordamida, ishga tushirish vaqtida hisoblanadigan) tarzda belgilash mumkin.

```javascript
const metodNomi = "salomBer";
const prefiks = "hisobla";

class Dinamik {
  // Computed method name - kvadrat qavs ichida ifoda yoziladi
  [metodNomi]() {
    console.log("Salom, bu computed method!");
  }

  [`${prefiks}Yigindi`](a, b) {
    return a + b;
  }

  // Symbol'lar bilan ham ishlatish mumkin
  [Symbol.iterator]() {
    console.log("Maxsus iterator chaqirildi");
  }
}

const d = new Dinamik();
d.salomBer(); // Salom, bu computed method!
console.log(d.hisoblaYigindi(3, 4)); // 7
```

---

## 4. 👪 Class Inheritance (`extends`)

`extends` kalit so'zi bir class'ni boshqa class'dan meros olish (inheritance) imkonini beradi. Bu prototype chain'ni avtomatik ravishda to'g'ri bog'lab beradi (yuqorida biz `Object.create()` bilan qo'lda qilgan ishni `extends` o'zi bajaradi).

```javascript
// Ota (parent / base / super) class
class Hayvon {
  constructor(ism) {
    this.ism = ism;
  }

  ovozChiqar() {
    console.log(`${this.ism} qandaydir ovoz chiqarmoqda`);
  }

  malumot() {
    return `Bu - ${this.ism}`;
  }
}

// Bola (child / derived / sub) class
class It extends Hayvon {
  constructor(ism, zoti) {
    super(ism); // Ota class'ning constructor'ini chaqirish - MAJBURIY!
    this.zoti = zoti;
  }

  // Metodni qayta belgilash (override qilish)
  ovozChiqar() {
    console.log(`${this.ism} (${this.zoti}) - Vov-vov!`);
  }
}

const it1 = new It("Rex", "Ovcharka");

it1.ovozChiqar(); // Rex (Ovcharka) - Vov-vov! (override qilingan versiya ishladi)
console.log(it1.malumot()); // Bu - Rex (Ota class'dan meros olingan, o'zgartirilmagan)

console.log(it1 instanceof It); // true
console.log(it1 instanceof Hayvon); // true - meros orqali
```

⚠️ **Muhim qoida:** Agar bola class'da `constructor` yozilgan bo'lsa, `this` ishlatilishidan oldin albatta `super()` chaqirilishi **shart**, aks holda `ReferenceError` chiqadi:

```javascript
class Mushuk extends Hayvon {
  constructor(ism) {
    this.ism = ism; // ❌ ReferenceError: Must call super constructor before accessing 'this'
  }
}
```

Agar bola class'da `constructor` umuman yozilmasa, JavaScript avtomatik ravishda quyidagini yaratadi:

```javascript
constructor(...args) {
  super(...args);
}
```

---

## 5. 🔧 `super` Kalit So'zi

`super` kalit so'zi ikki xil vaziyatda ishlatiladi:

### 5.1. `super()` — Ota constructor'ini chaqirish

```javascript
class Shakl {
  constructor(rang) {
    this.rang = rang;
  }
}

class Kvadrat extends Shakl {
  constructor(rang, tomon) {
    super(rang); // Shakl constructor'ini chaqiradi, this.rang = rang qiladi
    this.tomon = tomon;
  }
}

const kv = new Kvadrat("Qizil", 5);
console.log(kv.rang, kv.tomon); // Qizil 5
```

### 5.2. `super.metodNomi()` — Ota class metodini chaqirish

Bu ota class'ning metodini **butunlay almashtirmasdan**, uni kengaytirish (extend qilish) uchun juda foydali.

```javascript
class Ishchi {
  constructor(ism, maosh) {
    this.ism = ism;
    this.maosh = maosh;
  }

  malumot() {
    return `${this.ism} - maoshi: ${this.maosh} so'm`;
  }
}

class Menejer extends Ishchi {
  constructor(ism, maosh, jamoaSoni) {
    super(ism, maosh);
    this.jamoaSoni = jamoaSoni;
  }

  malumot() {
    // Ota class metodini chaqirib, natijasini kengaytiryapmiz
    const otaMalumot = super.malumot();
    return `${otaMalumot}, boshqaradigan jamoasi: ${this.jamoaSoni} kishi`;
  }
}

const menejer1 = new Menejer("Elmurod", 8000000, 12);
console.log(menejer1.malumot());
// Elmurod - maoshi: 8000000 so'm, boshqaradigan jamoasi: 12 kishi
```

### `super` static metodlarda

```javascript
class A {
  static salom() {
    return "Salom A'dan";
  }
}

class B extends A {
  static salom() {
    return super.salom() + " va B'dan"; // static context'da ham super ishlaydi
  }
}

console.log(B.salom()); // Salom A'dan va B'dan
```

---

## 6. 🏗️ Mixins (Ko'p meros olishning muqobili)

JavaScript'da class'lar faqat **bitta** ota class'dan meros olishi mumkin (`extends` faqat bitta argument qabul qiladi) — bu **single inheritance** deb ataladi. Ammo ba'zan bir nechta class'ning funksionalligini birlashtirish kerak bo'ladi. Bunga **mixin** pattern yordam beradi.

Mixin — bu boshqa class'larga metodlarni "qo'shib qo'yadigan" oddiy obyekt yoki funksiya hisoblanadi.

```javascript
// Mixin 1 - suzish qobiliyati
const SuzuvchiMixin = {
  suz() {
    console.log(`${this.ism} suzmoqda`);
  },
};

// Mixin 2 - uchish qobiliyati
const UchuvchiMixin = {
  uch() {
    console.log(`${this.ism} uchmoqda`);
  },
};

class Hayvon {
  constructor(ism) {
    this.ism = ism;
  }
}

class Orkinos extends Hayvon {}

// Object.assign yordamida mixin'larni prototype'ga qo'shamiz
Object.assign(Orkinos.prototype, SuzuvchiMixin);

const orkinos1 = new Orkinos("Vili");
orkinos1.suz(); // Vili suzmoqda

// Bir nechta mixin'ni birlashtirish mumkin (bu "multiple inheritance"ga o'xshash natija beradi)
class G'oz extends Hayvon {}
Object.assign(G'oz.prototype, SuzuvchiMixin, UchuvchiMixin);

const goz1 = new G'oz("Tim");
goz1.suz(); // Tim suzmoqda
goz1.uch(); // Tim uchmoqda
```

**Funksional mixin pattern** (ko'proq moslashuvchan, "factory function" uslubida):

```javascript
// Mixin - class qabul qilib, yangilangan class qaytaruvchi funksiya
const Serializable = (BazaClass) =>
  class extends BazaClass {
    toJSON() {
      return JSON.stringify(this);
    }
  };

const Comparable = (BazaClass) =>
  class extends BazaClass {
    tengmi(boshqa) {
      return JSON.stringify(this) === JSON.stringify(boshqa);
    }
  };

class Mahsulot {
  constructor(nomi, narxi) {
    this.nomi = nomi;
    this.narxi = narxi;
  }
}

// Mixin'larni zanjir shaklida qo'llash
class ToʻliqMahsulot extends Comparable(Serializable(Mahsulot)) {}

const mahsulot1 = new ToʻliqMahsulot("Noutbuk", 12000000);
console.log(mahsulot1.toJSON()); // {"nomi":"Noutbuk","narxi":12000000}

const mahsulot2 = new ToʻliqMahsulot("Noutbuk", 12000000);
console.log(mahsulot1.tengmi(mahsulot2)); // true
```

---

## 7. 📦 Private Class Fields (`#privateField`) — ES2022+

`#` belgisi bilan boshlangan xususiyatlar **private** (maxfiy) hisoblanadi — ular faqat class ichidan kirish mumkin, class tashqarisidan (hatto instance orqali ham) ko'rinmaydi va o'zgartirib bo'lmaydi.

```javascript
class BankKarta {
  #pin; // private field - class tashqarisida mutlaqo ko'rinmaydi
  #balans = 0; // private field, boshlang'ich qiymat bilan

  constructor(egasi, pin, boshlangichBalans) {
    this.egasi = egasi; // public field
    this.#pin = pin;
    this.#balans = boshlangichBalans;
  }

  pulYechish(summa, kiritilganPin) {
    if (kiritilganPin !== this.#pin) {
      console.log("Xato PIN kod!");
      return;
    }
    if (summa > this.#balans) {
      console.log("Balansda yetarli mablag' yo'q!");
      return;
    }
    this.#balans -= summa;
    console.log(`${summa} so'm yechildi. Qolgan balans: ${this.#balans}`);
  }

  balansniKor() {
    return this.#balans;
  }
}

const karta1 = new BankKarta("Elmurod", "1234", 5000000);

karta1.pulYechish(1000000, "1234"); // 1000000 so'm yechildi. Qolgan balans: 4000000
console.log(karta1.balansniKor()); // 4000000

// Tashqaridan private field'ga kirishga urinish:
console.log(karta1.#balans); // ❌ SyntaxError: Private field '#balans' must be declared in an enclosing class
console.log(karta1.#pin); // ❌ SyntaxError - hatto o'qishga ham urinib bo'lmaydi

// Private field mavjudligini tekshirish (ichkarida):
class Tekshiruv {
  #maxfiy = true;

  static mavjudmi(obj) {
    return #maxfiy in obj; // "in" operatori bilan private field mavjudligini tekshirish (ES2022)
  }
}
console.log(Tekshiruv.mavjudmi(new Tekshiruv())); // true
```

📌 **Nima uchun kerak?** Private field'lar **encapsulation** (inkapsulyatsiya) prinsipini to'liq amalga oshiradi — obyektning ichki holatini tashqi ta'sirdan himoya qiladi. ES2022'gacha buning uchun `WeakMap` yoki closure'lardan foydalanilardi (quyida solishtirish uchun misol):

```javascript
// ES2022'dan OLDINGI eski usul - WeakMap orqali "private" imitatsiya qilish
const _balans = new WeakMap();

class EskiBankKarta {
  constructor(boshlangichBalans) {
    _balans.set(this, boshlangichBalans);
  }

  balansniKor() {
    return _balans.get(this);
  }
}
// Bu usul ishlaydi, lekin # sintaksisiga qaraganda ancha noqulay va uzun
```

---

## 8. 🏷️ Public Class Fields — ES2022+

Public field'lar `constructor` yozmasdan class ichida to'g'ridan-to'g'ri xususiyat e'lon qilish imkonini beradi. Bu kod qisqaroq va toza bo'lishiga yordam beradi.

```javascript
class Mahsulot {
  // Public class fields - constructor'dan tashqarida to'g'ridan-to'g'ri e'lon qilinadi
  nomi = "Noma'lum mahsulot"; // boshlang'ich (default) qiymat bilan
  narxi = 0;
  soni = 1;

  constructor(nomi, narxi) {
    this.nomi = nomi; // agar konstruktorda qiymat berilsa, default qiymat ustidan yoziladi
    this.narxi = narxi;
  }

  jamiNarx() {
    return this.narxi * this.soni;
  }
}

const mahsulot1 = new Mahsulot("Telefon", 3000000);
console.log(mahsulot1.nomi); // Telefon
console.log(mahsulot1.soni); // 1 - default qiymat ishlatildi
console.log(mahsulot1.jamiNarx()); // 3000000

// Public field'larning yana bir foydasi: arrow function metodlarida
// "this" muammosini hal qiladi (this har doim to'g'ri bog'lanadi)
class Tugma {
  matn = "Bosing";

  // Odatiy metod - "this" chaqirilish kontekstiga bog'liq bo'lib qolishi mumkin
  oddiyBosildi() {
    console.log(this.matn);
  }

  // Arrow function public field sifatida - "this" doim class instance'iga bog'lanadi
  bosildi = () => {
    console.log(this.matn);
  };
}

const tugma1 = new Tugma();
const { oddiyBosildi, bosildi } = tugma1; // metodlarni obyektdan "ajratib olamiz"

// oddiyBosildi(); // ❌ TypeError: Cannot read properties of undefined (this yo'qoldi)
bosildi(); // ✅ Bosing - this to'g'ri ishladi, chunki arrow function'ni "bind" qilib bo'lmaydi
```

---

## 9. 🔒 Private Methods — ES2022+

Xuddi private field'lar kabi, metodlarni ham `#` bilan private qilish mumkin. Bu class'ning **ichki (implementation) mantiqini** tashqi dunyodan yashirish uchun ishlatiladi — faqat kerakli (public) metodlar orqali muloqot qilinadi.

```javascript
class Parol {
  #qiymat;

  constructor(qiymat) {
    this.#qiymat = qiymat;
  }

  // Private method - faqat class ichidan chaqirilishi mumkin
  #kuchliligiTekshir() {
    const uzunlik = this.#qiymat.length >= 8;
    const raqamBor = /\d/.test(this.#qiymat);
    const kattaHarf = /[A-Z]/.test(this.#qiymat);
    return uzunlik && raqamBor && kattaHarf;
  }

  // Public method - ichkarida private metodni ishlatadi
  yaroqlimi() {
    if (this.#kuchliligiTekshir()) {
      return "Parol yetarlicha kuchli ✅";
    }
    return "Parol zaif — kamida 8ta belgi, 1ta raqam va 1ta katta harf bo'lsin ❌";
  }
}

const parol1 = new Parol("Salom123");
console.log(parol1.yaroqlimi()); // Parol yetarlicha kuchli ✅

const parol2 = new Parol("salom");
console.log(parol2.yaroqlimi()); // Parol zaif...

parol1.#kuchliligiTekshir(); // ❌ SyntaxError: Private field '#kuchliligiTekshir' must be declared in an enclosing class
```

**Private static metodlar** ham xuddi shunday e'lon qilinadi:

```javascript
class Validator {
  static #emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  static #tekshir(qiymat, regex) {
    return regex.test(qiymat);
  }

  static emailToʻgʻrimi(email) {
    return Validator.#tekshir(email, Validator.#emailRegex);
  }
}

console.log(Validator.emailToʻgʻrimi("test@mail.com")); // true
console.log(Validator.emailToʻgʻrimi("notoʻgʻri")); // false
```

---

## 10. 🎭 Polimorfizm va Method Overriding

**Polimorfizm** (ko'p shakllilik) — OOP'ning asosiy prinsiplaridan biri bo'lib, turli class'lardagi obyektlar **bir xil nomdagi metodga** turlicha javob berishi (turlicha ishlashi) imkonini beradi.

```javascript
class Shakl {
  yuzaHisobla() {
    return 0; // asosiy (default) implementatsiya
  }
}

class Doira extends Shakl {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Method overriding - ota class metodi qayta yoziladi
  yuzaHisobla() {
    return Math.PI * this.radius ** 2;
  }
}

class Toʻrtburchak extends Shakl {
  constructor(kenglik, balandlik) {
    super();
    this.kenglik = kenglik;
    this.balandlik = balandlik;
  }

  yuzaHisobla() {
    return this.kenglik * this.balandlik;
  }
}

// Polimorfizm - bitta funksiya turli obyektlar bilan turlicha ishlaydi
const shakllar = [new Doira(5), new Toʻrtburchak(4, 6)];

shakllar.forEach((shakl) => {
  // Har bir obyekt o'zining "yuzaHisobla" versiyasini chaqiradi - bu polimorfizm!
  console.log(`Yuza: ${shakl.yuzaHisobla().toFixed(2)}`);
});
// Yuza: 78.54
// Yuza: 24.00
```

---

## 11. 🧩 Composition vs Inheritance

Ba'zan `extends` orqali chuqur meros zanjiri qurish kod murakkabligini oshirib yuboradi ("fragile base class" muammosi). Shu sababli zamonaviy dasturlashda ko'pincha **"composition over inheritance"** (meros olishdan ko'ra tarkiblashni afzal ko'rish) prinsipi tavsiya etiladi.

```javascript
// INHERITANCE (meros) - qattiq bog'liqlik yaratadi
class Robot {
  yur() {
    console.log("Yuryapman");
  }
  gapir() {
    console.log("Gapiryapman");
  }
  uch() {
    console.log("Uchyapman");
  } // Har bir robot uchishi shart emas!
}

// COMPOSITION (tarkiblash) - moslashuvchan, faqat kerakli qobiliyatlarni qo'shadi
const yuruvchi = {
  yur() {
    console.log(`${this.ism} yuryapti`);
  },
};

const gapiruvchi = {
  gapir() {
    console.log(`${this.ism} gapiryapti`);
  },
};

const uchuvchi = {
  uch() {
    console.log(`${this.ism} uchyapti`);
  },
};

// Har bir robotga faqat kerakli qobiliyatlarni "composition" orqali qo'shamiz
function robotYarat(ism, ...qobiliyatlar) {
  const robot = { ism };
  return Object.assign(robot, ...qobiliyatlar);
}

const oddiyRobot = robotYarat("R2D2", yuruvchi, gapiruvchi); // uchmaydi
const uchuvchiRobot = robotYarat("Drone-X", yuruvchi, uchuvchi); // gapirmaydi

oddiyRobot.yur(); // R2D2 yuryapti
uddiyRobot?.uch; // mavjud emas - xatolik chiqarmaydi, chunki funksiya umuman yo'q
uchuvchiRobot.uch(); // Drone-X uchyapti
```

📌 **Qachon qaysi birini tanlash kerak?**

- **Inheritance** — "is-a" (bu — ... turi) munosabat bo'lganda (masalan, `It` — bu `Hayvon`).
- **Composition** — "has-a" / "can-do" (bunda ... bor / bu ... qila oladi) munosabat bo'lganda (masalan, robot uchish **qobiliyatiga ega**, lekin "uchuvchi turi" emas).

---

## 12. 🏭 Factory Functions vs Classes

**Factory function** — `new` operatorisiz obyekt yaratadigan oddiy funksiya. Ba'zi loyihalarda class'lar o'rniga qo'llaniladi, chunki `this` va `new` bilan bog'liq muammolarni chetlab o'tadi.

```javascript
// Factory function - "new" kerak emas
function odamYarat(ism, yosh) {
  return {
    ism,
    yosh,
    salomBer() {
      console.log(`Salom, men ${ism}`);
    },
  };
}

const odam1 = odamYarat("Elmurod", 25); // "new" so'zisiz chaqiriladi
odam1.salomBer(); // Salom, men Elmurod

// Solishtirish uchun xuddi shu narsa class bilan:
class OdamClass {
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }
  salomBer() {
    console.log(`Salom, men ${this.ism}`);
  }
}
const odam2 = new OdamClass("Aziza", 23); // "new" so'zi SHART
```

| Xususiyat                     | Factory Function                             | Class                            |
| ----------------------------- | -------------------------------------------- | -------------------------------- |
| `new` kerakmi?                | Yo'q                                         | Ha (odatda)                      |
| `this` muammolari             | Yo'q (closure ishlatiladi)                   | Bo'lishi mumkin                  |
| Xotira sarfi (metodlar)       | Har instance uchun metod nusxalanishi mumkin | Prototype orqali umumiy, tejamli |
| Private data                  | Closure orqali oson                          | `#` field kerak (ES2022+)        |
| `instanceof` bilan tekshirish | Ishlamaydi                                   | Ishlaydi                         |

---

## 13. ❄️ Object.freeze() — Immutability (O'zgarmaslik)

`Object.freeze()` obyektni **"muzlatadi"** — uning xususiyatlarini o'zgartirish, qo'shish yoki o'chirishni taqiqlaydi. Bu ma'lumotlarni tasodifiy o'zgarishlardan himoya qilish uchun ishlatiladi (masalan, konfiguratsiya obyektlari yoki "constant" qiymatlar uchun).

```javascript
class Sozlamalar {
  constructor() {
    this.til = "uz";
    this.versiya = "1.0.0";
    Object.freeze(this); // instance yaratilgandan so'ng uni "muzlatamiz"
  }
}

const sozlama1 = new Sozlamalar();

sozlama1.til = "en"; // hech qanday xatolik chiqmaydi (silent fail, strict mode'da emas)
console.log(sozlama1.til); // "uz" - o'zgarmadi, chunki obyekt muzlatilgan

sozlama1.yangiXususiyat = "test"; // qo'shib bo'lmaydi
console.log(sozlama1.yangiXususiyat); // undefined

// Muzlatilganligini tekshirish:
console.log(Object.isFrozen(sozlama1)); // true

// Diqqat: Object.freeze() faqat "shallow" (sayoz) ishlaydi -
// ichki obyektlar hamon o'zgartirilishi mumkin!
const obj = Object.freeze({ ichki: { qiymat: 1 } });
obj.ichki.qiymat = 999; // BU ISHLAYDI, chunki faqat tashqi qatlam muzlatilgan
console.log(obj.ichki.qiymat); // 999
```

---

## 14. 🔁 Symbol.iterator — Custom Iteration

`Symbol.iterator` — bu maxsus "well-known symbol" bo'lib, obyektni `for...of` sikli, spread operator (`...`) va destructuring bilan ishlatish imkonini beradi (ya'ni, obyektni **iterable** — sanaladigan qiladi).

```javascript
class Diapazon {
  constructor(boshlanish, tugash) {
    this.boshlanish = boshlanish;
    this.tugash = tugash;
  }

  // Symbol.iterator - class'ni "iterable" (sanaladigan) qiladi
  [Symbol.iterator]() {
    let joriy = this.boshlanish;
    const tugash = this.tugash;

    return {
      next() {
        if (joriy <= tugash) {
          return { value: joriy++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}

const diapazon1 = new Diapazon(1, 5);

// Endi class'ni for...of orqali sanash mumkin!
for (const son of diapazon1) {
  console.log(son); // 1, 2, 3, 4, 5 - ketma-ket chiqadi
}

// Spread operator bilan ham ishlaydi
console.log([...diapazon1]); // [1, 2, 3, 4, 5]

// Destructuring bilan ham ishlaydi
const [birinchi, ikkinchi] = diapazon1;
console.log(birinchi, ikkinchi); // 1 2
```

---

## 15. 🎯 `new.target`, `toString()`, `Symbol.toPrimitive`

### `new.target`

`new.target` — funksiya `new` bilan chaqirilganmi yoki yo'qmi, shuningdek qaysi class orqali chaqirilganini aniqlash uchun ishlatiladi. Bu **abstract class** (mavhum class, to'g'ridan-to'g'ri instance yaratib bo'lmaydigan class) yaratishda foydali.

```javascript
class MavhumShakl {
  constructor() {
    // Agar to'g'ridan-to'g'ri MavhumShakl orqali instance yaratilsa - xatolik chiqaramiz
    if (new.target === MavhumShakl) {
      throw new Error(
        "MavhumShakl'dan to'g'ridan-to'g'ri instance yaratib bo'lmaydi!",
      );
    }
  }

  yuzaHisobla() {
    throw new Error(
      "yuzaHisobla() metodi bola class'da albatta yozilishi kerak!",
    );
  }
}

class Kvadrat extends MavhumShakl {
  constructor(tomon) {
    super();
    this.tomon = tomon;
  }
  yuzaHisobla() {
    return this.tomon ** 2;
  }
}

const kv = new Kvadrat(4);
console.log(kv.yuzaHisobla()); // 16

const mavhum = new MavhumShakl(); // ❌ Error: MavhumShakl'dan to'g'ridan-to'g'ri instance yaratib bo'lmaydi!
```

### `toString()` metodini qayta yozish

Obyekt matn (string) sifatida ishlatilganda (masalan, template literal ichida yoki `console.log` bilan birlashtirilganda) qanday ko'rinishini boshqarish uchun ishlatiladi.

```javascript
class Pul {
  constructor(summa, valyuta) {
    this.summa = summa;
    this.valyuta = valyuta;
  }

  // Object.prototype.toString()'ni override qilamiz
  toString() {
    return `${this.summa} ${this.valyuta}`;
  }
}

const narx = new Pul(50000, "so'm");

console.log(`Narx: ${narx}`); // Narx: 50000 so'm - avtomatik toString() chaqirildi
console.log("Narx: " + narx); // Narx: 50000 so'm
console.log(String(narx)); // 50000 so'm
```

### `Symbol.toPrimitive`

Obyekt raqam, matn yoki umumiy (default) kontekstda ishlatilganda qanday "primitive" qiymatga aylanishini to'liq nazorat qilish uchun ishlatiladi.

```javascript
class Harorat {
  constructor(daraja) {
    this.daraja = daraja;
  }

  [Symbol.toPrimitive](tur) {
    if (tur === "number") {
      return this.daraja; // Masalan: +harorat1
    }
    if (tur === "string") {
      return `${this.daraja}°C`; // Masalan: `${harorat1}`
    }
    return `Harorat: ${this.daraja}`; // "default" holat, masalan: harorat1 + ""
  }
}

const harorat1 = new Harorat(25);

console.log(+harorat1); // 25 - "number" konteksti
console.log(`${harorat1}`); // 25°C - "string" konteksti
console.log(harorat1 + ""); // Harorat: 25 - "default" konteksti
```

---

## 16. 📌 Xulosa va Best Practices

✅ **Class ishlatishning to'g'ri yondashuvlari:**

1. **Encapsulation** (inkapsulyatsiya) — ichki holatni `#private` field'lar bilan yashiring, faqat public metodlar orqali muloqot qiling.
2. **"is-a" munosabat bo'lsagina `extends` ishlating** — aks holda composition'ni afzal ko'ring.
3. **Chuqur meros zanjiridan saqlaning** — 2-3 darajadan chuqurroq `extends` zanjiri kodni tushunishni qiyinlashtiradi.
4. **Metodlarni prototype orqali (yoki class ichida) yozing**, constructor ichida emas — xotira tejash uchun.
5. **`super()`ni har doim eslab qoling** — agar bola class'da constructor bo'lsa.
6. **Static'ni faqat "class'ga tegishli" narsalar uchun ishlating** (masalan, utility funksiyalar, hisoblagichlar) — instance ma'lumotlari uchun emas.
7. **Getter/setter'larni validatsiya va hisoblangan (computed) xususiyatlar uchun ishlating**, ortiqcha murakkablashtirmang.

### Umumiy taqqoslash jadvali

| Tushuncha               | Nima uchun ishlatiladi                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------- |
| Constructor Function    | Class'lardan oldingi eski usul, hozir kam ishlatiladi                                   |
| Prototype               | Metodlarni instance'lar orasida xotira tejab bo'lishish                                 |
| Class                   | Zamonaviy, o'qilishi oson OOP sintaksisi                                                |
| `extends` / `super`     | Inheritance orqali kod qayta ishlatish                                                  |
| Mixins                  | Bir nechta manbadan funksionallik olish (single inheritance chegarasini chetlab o'tish) |
| `#private` field/method | Ma'lumotlarni tashqi ta'sirdan himoya qilish (encapsulation)                            |
| Composition             | Moslashuvchan, kam bog'liq (loosely coupled) arxitektura qurish                         |
| Factory functions       | `new`/`this` murakkabliklarisiz oddiy obyekt yaratish                                   |

---

**Muallif izohi:** Ushbu qo'llanma JavaScript'dagi OOP tushunchalarini konstruktor funksiyalardan tortib eng zamonaviy ES2022+ imkoniyatlarigacha (`#private field`, static blocks) qamrab oladi. Har bir bo'limni amaliy misollar bilan mustaqil sinab ko'rish tavsiya etiladi — bu tushunishni sezilarli darajada mustahkamlaydi.
