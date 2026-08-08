# 🚀 **ES6+ Modern Features**

---

## 📌 0. Kirish — ES6 va undan keyingi versiyalar nima?

**ES6 (ECMAScript 2015)** — JavaScript tilining tarixidagi eng katta yangilanish bo'lib, tilga zamonaviy sintaksis va imkoniyatlarni qo'shdi. Undan keyin har yili (ES2016, ES2017... ES2024) yangi kichikroq, lekin muhim qo'shimchalar chiqarilmoqda.

**Nima uchun bu mavzular muhim?** Zamonaviy JavaScript kodini (React, Node.js, Vue va boshqa barcha zamonaviy freymvorklar) tushunish va yozish uchun ushbu sintaksislarni bilish **shart**. Ular kodni qisqartiradi, o'qilishini osonlashtiradi va ko'p uchraydigan xatoliklarning oldini oladi.

Ushbu reference quyidagi mantiqiy ketma-ketlikda tuzilgan: avval eng ko'p ishlatiladigan, asosiy ES6 imkoniyatlari (template literals, arrow function, destructuring, spread/rest), so'ngra obyekt literallarini kengaytirish, va nihoyat ES2020 dan ES2024 gacha bo'lgan yangi, kichikroq lekin amaliy foydali qo'shimchalar.

---

## 📦 1. Template Literals (Shablon Satrlar)

### 1.1. Nima va nima uchun kerak

Template literal — orqa qavs (backtick `` ` ``) bilan yoziladigan matn qatori bo'lib, u ichiga o'zgaruvchi va ifodalarni to'g'ridan-to'g'ri **qo'shish (interpolation)**, ko'p qatorli matn yozish va **teglangan shablonlar (tagged templates)** yaratish imkonini beradi.

```javascript
const ism = "Jasur";
const yosh = 25;

// ESKI usul (ES5) - qo'shish operatori (+) orqali
const eskiUslub = "Salom, men " + ism + "man va " + yosh + " yoshdaman.";

// YANGI usul (ES6) - template literal orqali
const yangiUslub = `Salom, men ${ism}man va ${yosh} yoshdaman.`;

console.log(yangiUslub); // "Salom, men Jasurman va 25 yoshdaman."
```

### 1.2. Ifodalar bilan ishlash

`${}` ichiga **istalgan haqiqiy JavaScript ifodasi** yozilishi mumkin — nafaqat oddiy o'zgaruvchi, balki matematik amal, funksiya chaqiruvi, shartli (ternary) ifoda va h.k.:

```javascript
const a = 5;
const b = 10;

console.log(`Yig'indi: ${a + b}`); // "Yig'indi: 15"

function katta(x, y) {
  return x > y ? x : y;
}
console.log(`Kattasi: ${katta(a, b)}`); // "Kattasi: 10"

const foydalanuvchi = { ism: "Dilnoza", faol: true };
console.log(`Holat: ${foydalanuvchi.faol ? "faol" : "faol emas"}`); // "Holat: faol"
```

### 1.3. Ko'p qatorli matn (Multi-line strings)

ES5 da ko'p qatorli matn yozish uchun `\n` yoki `+` orqali qatorlarni qo'shish kerak edi. Template literal da esa oddiy Enter tugmasi bilan yangi qator yaratish yetarli:

```javascript
// ESKI usul
const eski = "Birinchi qator\n" + "Ikkinchi qator\n" + "Uchinchi qator";

// YANGI usul - to'g'ridan-to'g'ri backtick ichida Enter bosish
const yangi = `Birinchi qator
Ikkinchi qator
Uchinchi qator`;

console.log(yangi);
// Birinchi qator
// Ikkinchi qator
// Uchinchi qator
```

### 1.4. Nested Template Literals (ichma-ich shablonlar)

Template literal ichida yana boshqa template literal ishlatish mumkin:

```javascript
const foydalanuvchilar = [
  { ism: "Dilnoza", faol: true },
  { ism: "Sherzod", faol: false },
];

const royxat = `
    <ul>
        ${foydalanuvchilar.map((f) => `<li>${f.ism} - ${f.faol ? "faol" : "nofaol"}</li>`).join("")}
    </ul>
`;
console.log(royxat);
```

### 1.5. Tagged Templates (Teglangan shablonlar) — ilg'or imkoniyat

Template literal oldiga funksiya nomi yozilsa, bu funksiya shablonni **maxsus tarzda qayta ishlash** imkonini beradi. Bu ilg'or texnika, ko'pincha kutubxonalarda (masalan `styled-components`) ishlatiladi.

```javascript
function belgila(strings, ...qiymatlar) {
  // strings - matn bo'laklari massivi
  // qiymatlar - ${} ichidagi qiymatlar massivi
  return strings.reduce((natija, str, i) => {
    return `${natija}${str}${qiymatlar[i] ? `<b>${qiymatlar[i]}</b>` : ""}`;
  }, "");
}

const ism = "Jasur";
const natija = belgila`Salom, ${ism}! Xush kelibsiz.`;
console.log(natija); // "Salom, <b>Jasur</b>! Xush kelibsiz."
```

---

## 🏹 2. Arrow Functions (Strelka Funksiyalari)

### 2.1. Sintaksis va oddiy funksiyadan farqi

Arrow function — funksiyalarni qisqaroq yozish uchun ES6 da kiritilgan yangi sintaksis, lekin uning **`this` bilan ishlash tamoyili** oddiy funksiyalardan **tubdan farqli**.

```javascript
// ODDIY funksiya
function qoshish(a, b) {
  return a + b;
}

// ARROW function - to'liq versiya
const qoshishArrow = (a, b) => {
  return a + b;
};

// ARROW function - qisqartirilgan versiya (bitta ifoda bo'lsa, return va {} kerak emas)
const qoshishQisqa = (a, b) => a + b;

// Bitta parametr bo'lsa - qavslar ixtiyoriy
const kvadrat = (x) => x * x;

// Parametr bo'lmasa - bo'sh qavslar SHART
const salomBer = () => console.log("Salom!");

// Obyekt qaytarish - qavs ichiga olish SHART (aks holda { } funksiya blokidek talqin qilinadi)
const obyektYarat = (ism, yosh) => ({ ism, yosh });
```

### 2.2. `this` kalit so'zining farqi — ENG MUHIM jihat

Bu — arrow function larni tushunishdagi **eng muhim va ko'p xato qilinadigan** mavzu.

```javascript
// ODDIY funksiya - "this" chaqirilish usuliga bog'liq (dynamic this)
const odam1 = {
  ism: "Dilnoza",
  salomBer: function () {
    console.log(`Salom, men ${this.ism}man`); // "this" - odam1 obyektiga ishora qiladi
  },
};
odam1.salomBer(); // "Salom, men Dilnozaman"

// ARROW function - "this" YOZILGAN JOYIDAGI (lexical) konteksdan meros oladi
const odam2 = {
  ism: "Sherzod",
  salomBer: () => {
    console.log(`Salom, men ${this.ism}man`); // "this" - odam2 EMAS, tashqi (global) kontekst!
  },
};
odam2.salomBer(); // "Salom, men undefinedman" (this - global scope, u yerda "ism" yo'q)
```

**Amaliy foyda:** Arrow function larning bu xususiyati, ayniqsa **callback funksiyalar ichida `this` ni saqlab qolish kerak bo'lganda** juda foydali:

```javascript
class Timer {
  constructor() {
    this.soniya = 0;
  }

  boshla() {
    // Oddiy funksiya bilan MUAMMO:
    setInterval(function () {
      this.soniya++; // XATO: "this" - setInterval kontekstiga tegishli, Timer ga emas
    }, 1000);

    // Arrow function bilan TO'G'RI YECHIM:
    setInterval(() => {
      this.soniya++; // TO'G'RI: "this" - Timer obyektining o'zi (tashqi konteksdan meros oldi)
    }, 1000);
  }
}
```

### 2.3. Arrow function larning boshqa cheklovlari

```javascript
// 1. "arguments" obyekti YO'Q (oddiy funksiyada mavjud)
function oddiy() {
  console.log(arguments); // ishlaydi - barcha argumentlar ro'yxati
}
const arrow = () => {
  console.log(arguments); // ReferenceError yoki tashqi "arguments" ni ko'rsatadi
};

// Arrow function da o'rniga Rest Parameters ishlatiladi:
const arrowToTogri = (...args) => {
  console.log(args); // barcha argumentlar Array sifatida
};

// 2. Constructor sifatida ishlatib bo'lmaydi ("new" bilan chaqirib bo'lmaydi)
const Odam = (ism) => {
  this.ism = ism;
};
// new Odam("Dilnoza"); // TypeError: Odam is not a constructor

// 3. "yield" kalit so'zi ishlatib bo'lmaydi (generator bo'la olmaydi)
```

### 2.4. Qachon arrow function, qachon oddiy funksiya ishlatish kerak

```javascript
// ✅ ARROW function - callback larda, ayniqsa "this" tashqi konteksdan kelishi kerak bo'lsa
array.map((x) => x * 2);
button.addEventListener("click", () => {
  /* this - tashqi kontekst */
});

// ✅ ODDIY funksiya - obyekt METODLARIDA (this obyektning o'ziga ishora qilishi kerak bo'lsa)
const obyekt = {
  ism: "Test",
  metod: function () {
    console.log(this.ism); // TO'G'RI ishlaydi
  },
};

// ✅ ODDIY funksiya - constructor sifatida ishlatish kerak bo'lsa
function Mashina(model) {
  this.model = model;
}
```

---

## 📚 3. Destructuring (Ajratib Olish)

Destructuring — massiv yoki obyektdan qiymatlarni **alohida o'zgaruvchilarga qisqa sintaksis bilan ajratib olish** imkonini beradi.

### 3.1. Array Destructuring

```javascript
const ranglar = ["qizil", "yashil", "ko'k"];

// ESKI usul
const rang1_eski = ranglar[0];
const rang2_eski = ranglar[1];

// YANGI usul - destructuring
const [rang1, rang2, rang3] = ranglar;
console.log(rang1, rang2, rang3); // "qizil" "yashil" "ko'k"

// Ba'zi elementlarni "o'tkazib yuborish" (vergul bilan bo'sh joy qoldirish)
const [birinchi, , uchinchi] = ranglar;
console.log(birinchi, uchinchi); // "qizil" "ko'k"

// Default (standart) qiymat berish - agar element mavjud bo'lmasa ishlatiladi
const [a, b, c, d = "sariq"] = ranglar;
console.log(d); // "sariq" (chunki ranglar da 4-element yo'q)

// O'zgaruvchilarni SWAP qilish (almashtirish) - destructuring ning eng chiroyli qo'llanilishi
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// Funksiyadan qaytgan massivni destructuring qilish
function koordinatalarniOl() {
  return [40.7128, -74.006];
}
const [kenglik, uzunlik] = koordinatalarniOl();
```

### 3.2. Object Destructuring

```javascript
const foydalanuvchi = {
  ism: "Jasur",
  yosh: 25,
  kasb: "Dasturchi",
  manzil: "Toshkent",
};

// ESKI usul
const ism_eski = foydalanuvchi.ism;

// YANGI usul - obyekt destructuring (o'zgaruvchi nomi PROPERTY nomiga MOS bo'lishi kerak)
const { ism, yosh, kasb } = foydalanuvchi;
console.log(ism, yosh, kasb); // "Jasur" 25 "Dasturchi"

// Boshqa nom bilan olish (rename/alias)
const { ism: foydalanuvchiIsmi, yosh: foydalanuvchiYoshi } = foydalanuvchi;
console.log(foydalanuvchiIsmi); // "Jasur" (endi "ism" o'zgaruvchisi mavjud emas!)

// Default qiymat
const { manzil, telefon = "kiritilmagan" } = foydalanuvchi;
console.log(telefon); // "kiritilmagan" (chunki foydalanuvchi da telefon yo'q)

// Default qiymat + rename birgalikda
const { kasb: mutaxassislik = "noma'lum" } = foydalanuvchi;
```

### 3.3. Nested Destructuring (Ichma-ich ajratib olish)

```javascript
const foydalanuvchi = {
  ism: "Dilnoza",
  manzil: {
    shahar: "Toshkent",
    tuman: "Chilonzor",
    koordinatalar: {
      kenglik: 41.2995,
      uzunlik: 69.2401,
    },
  },
  tillar: ["o'zbek", "ingliz", "rus"],
};

// Obyekt ichidagi obyektni destructuring qilish
const {
  manzil: { shahar, tuman },
} = foydalanuvchi;
console.log(shahar, tuman); // "Toshkent" "Chilonzor"

// 3 daraja chuqurlikda
const {
  manzil: {
    koordinatalar: { kenglik, uzunlik },
  },
} = foydalanuvchi;
console.log(kenglik, uzunlik); // 41.2995 69.2401

// Obyekt ICHIDAGI massivni destructuring qilish
const {
  tillar: [birinchiTil, ikkinchiTil],
} = foydalanuvchi;
console.log(birinchiTil, ikkinchiTil); // "o'zbek" "ingliz"

// Massiv ICHIDAGI obyektlarni destructuring qilish
const foydalanuvchilar = [
  { ism: "Dilnoza", yosh: 23 },
  { ism: "Sherzod", yosh: 27 },
];
const [{ ism: birinchiIsm }, { ism: ikkinchiIsm }] = foydalanuvchilar;
console.log(birinchiIsm, ikkinchiIsm); // "Dilnoza" "Sherzod"
```

### 3.4. Funksiya parametrlarida destructuring

Bu — amaliyotda **juda ko'p** ishlatiladigan pattern, ayniqsa funksiyaga ko'p sonli "options" (sozlamalar) obyektini uzatishda:

```javascript
// Destructuring SIZ
function foydalanuvchiYarat(sozlamalar) {
  console.log(sozlamalar.ism, sozlamalar.yosh);
}

// Destructuring BILAN - to'g'ridan-to'g'ri parametrda ajratib olish
function foydalanuvchiYaratYangi({ ism, yosh, kasb = "noma'lum" }) {
  console.log(`${ism}, ${yosh} yosh, ${kasb}`);
}

foydalanuvchiYaratYangi({ ism: "Jasur", yosh: 25 });
// "Jasur, 25 yosh, noma'lum"

// Massiv parametrlarni ham destructuring qilish mumkin
function ikkiSonQoshish([birinchi, ikkinchi]) {
  return birinchi + ikkinchi;
}
console.log(ikkiSonQoshish([5, 10])); // 15
```

---

## 🌐 4. Spread Operator (`...`)

Spread operator — massiv, obyekt yoki iterable (aylanuvchi) qiymatlarni **"yoyib", alohida elementlarga ajratish** imkonini beradi. U destructuring ga o'xshaydi, lekin **teskari yo'nalishda** ishlaydi (birlashtirish uchun).

### 4.1. Massivlar bilan Spread

```javascript
const massiv1 = [1, 2, 3];
const massiv2 = [4, 5, 6];

// Ikkita massivni birlashtirish
const birlashgan = [...massiv1, ...massiv2];
console.log(birlashgan); // [1, 2, 3, 4, 5, 6]

// Massivning NUSXASINI yaratish (shallow copy - sayoz nusxa)
const nusxa = [...massiv1];
nusxa.push(4);
console.log(massiv1); // [1, 2, 3] - asl massiv o'zgarmadi
console.log(nusxa); // [1, 2, 3, 4]

// Massiv ichiga qo'shimcha elementlar bilan birga qo'shish
const yangiMassiv = [0, ...massiv1, 100];
console.log(yangiMassiv); // [0, 1, 2, 3, 100]

// Matnni belgilarga (harflarga) ajratish
const harflar = [..."salom"];
console.log(harflar); // ["s", "a", "l", "o", "m"]

// Eng katta/kichik qiymatni topish (Math.max array qabul qilmaydi, spread orqali yechim)
const sonlar = [5, 12, 8, 130, 44];
console.log(Math.max(...sonlar)); // 130
```

### 4.2. Obyektlar bilan Spread (ES2018)

```javascript
const asosiyMalumot = { ism: "Jasur", yosh: 25 };
const qoshimchaMalumot = { kasb: "Dasturchi", shahar: "Toshkent" };

// Ikkita obyektni birlashtirish
const toliqMalumot = { ...asosiyMalumot, ...qoshimchaMalumot };
console.log(toliqMalumot);
// { ism: "Jasur", yosh: 25, kasb: "Dasturchi", shahar: "Toshkent" }

// Obyektning nusxasini yaratish (shallow copy)
const nusxa = { ...asosiyMalumot };

// MAVJUD xususiyatni QAYTA YOZISH (o'zgartirish) - immutable update pattern
const yangilangan = { ...asosiyMalumot, yosh: 26 };
console.log(yangilangan); // { ism: "Jasur", yosh: 26 } - yosh yangilandi

// DIQQAT: agar bir xil xususiyat bir necha marta bo'lsa, OXIRGISI ustunlik qiladi
const test = { ism: "Birinchi", ...{ ism: "Ikkinchi" } };
console.log(test.ism); // "Ikkinchi"
```

### 4.3. Funksiya chaqiruvlarida Spread

```javascript
function uchSonniQoshish(a, b, c) {
  return a + b + c;
}

const sonlar = [1, 2, 3];

// ESKI usul - apply() orqali
console.log(uchSonniQoshish.apply(null, sonlar));

// YANGI usul - spread orqali (ancha oson o'qiladi)
console.log(uchSonniQoshish(...sonlar)); // 6

// Massivga boshqa massivni "yoyib" qo'shish
const massiv1 = [1, 2, 3];
massiv1.push(...[4, 5, 6]);
console.log(massiv1); // [1, 2, 3, 4, 5, 6]
```

### 4.4. Muhim eslatma: Spread — faqat "Shallow Copy" (sayoz nusxa)

```javascript
const asosiy = { ism: "Dilnoza", manzil: { shahar: "Toshkent" } };
const nusxa = { ...asosiy };

nusxa.ism = "Sherzod"; // faqat nusxadagi "ism" o'zgaradi, asosiyga ta'sir qilmaydi
console.log(asosiy.ism); // "Dilnoza" - o'zgarmadi

nusxa.manzil.shahar = "Samarqand"; // ICHKI obyekt hali ham BIR XIL manzilga ishora qiladi!
console.log(asosiy.manzil.shahar); // "Samarqand" - ASOSIY ham o'zgardi! (chunki shallow copy)
```

Bu sababdan, agar ichma-ich (nested) obyektlarni to'liq nusxalash kerak bo'lsa, `structuredClone()` funksiyasi yoki chuqur nusxalash (deep clone) kutubxonalaridan foydalanish kerak.

---

## 📦 5. Rest Parameters (`...args`)

Rest parameters — spread operator bilan **bir xil belgi** (`...`) ishlatadi, lekin **teskari vazifani** bajaradi: u ko'p sonli argumentlarni **BITTA massivga yig'ib** oladi.

### 5.1. Asosiy foydalanish

```javascript
// Cheksiz sonli argumentlarni qabul qilish
function hammasiniQoshish(...sonlar) {
  // "sonlar" - haqiqiy Array (arguments obyekti EMAS)
  return sonlar.reduce((yigindi, son) => yigindi + son, 0);
}

console.log(hammasiniQoshish(1, 2, 3)); // 6
console.log(hammasiniQoshish(1, 2, 3, 4, 5)); // 15
console.log(hammasiniQoshish()); // 0
```

### 5.2. Oddiy parametrlar bilan birgalikda ishlatish

```javascript
// Rest parameter HAR DOIM oxirgi parametr bo'lishi SHART
function foydalanuvchiYarat(ism, yosh, ...qiziqishlar) {
  console.log(`${ism}, ${yosh} yosh`);
  console.log(`Qiziqishlari: ${qiziqishlar.join(", ")}`);
}

foydalanuvchiYarat("Jasur", 25, "dasturlash", "sport", "musiqa");
// "Jasur, 25 yosh"
// "Qiziqishlari: dasturlash, sport, musiqa"

// ❌ XATO - rest parameter oxirgi bo'lishi SHART
// function xato(...qiymatlar, oxirgi) {} // SyntaxError
```

### 5.3. `arguments` obyektidan farqi

```javascript
function eski() {
  console.log(arguments); // Arguments obyekti - Array EMAS (map, filter ishlamaydi)
  console.log(Array.isArray(arguments)); // false
}

function yangi(...args) {
  console.log(args); // HAQIQIY Array - barcha Array metodlari ishlaydi
  console.log(Array.isArray(args)); // true
  console.log(args.map((x) => x * 2)); // to'g'ridan-to'g'ri ishlaydi
}
```

### 5.4. Destructuring bilan Rest

```javascript
// Massiv destructuring da
const [birinchi, ikkinchi, ...qolganlari] = [1, 2, 3, 4, 5];
console.log(birinchi, ikkinchi); // 1 2
console.log(qolganlari); // [3, 4, 5]

// Obyekt destructuring da
const { ism, ...boshqaMalumotlar } = {
  ism: "Dilnoza",
  yosh: 23,
  kasb: "Dizayner",
};
console.log(ism); // "Dilnoza"
console.log(boshqaMalumotlar); // { yosh: 23, kasb: "Dizayner" }
```

---

## 📦 6. Enhanced Object Literals (Kengaytirilgan Obyekt Literallari)

ES6 obyekt literallarini yozishning bir nechta **qisqartirilgan, qulayroq** usullarini kiritdi.

### 6.1. Property Shorthand (Qisqartirilgan xususiyat)

Agar o'zgaruvchi nomi va obyekt xususiyati nomi **bir xil** bo'lsa, uni ikki marta yozish shart emas:

```javascript
const ism = "Jasur";
const yosh = 25;

// ESKI usul
const foydalanuvchi_eski = { ism: ism, yosh: yosh };

// YANGI usul - shorthand
const foydalanuvchi = { ism, yosh };
console.log(foydalanuvchi); // { ism: "Jasur", yosh: 25 }
```

### 6.2. Method Shorthand (Qisqartirilgan metod)

```javascript
// ESKI usul
const obyekt_eski = {
  salomBer: function () {
    console.log("Salom!");
  },
};

// YANGI usul - "function" kalit so'zi va ":" belgisisiz
const obyekt = {
  salomBer() {
    console.log("Salom!");
  },
};
```

### 6.3. Computed Property Names (Hisoblanadigan xususiyat nomlari)

Obyekt xususiyat nomini **dinamik tarzda, o'zgaruvchi orqali** belgilash imkonini beradi:

```javascript
const kalitNomi = "yosh";
const qiymat = 25;

// ESKI usul - avval obyekt yaratib, keyin qo'shish kerak edi
const obyekt_eski = {};
obyekt_eski[kalitNomi] = qiymat;

// YANGI usul - to'g'ridan-to'g'ri obyekt yaratishda
const obyekt = {
  [kalitNomi]: qiymat,
  [`${kalitNomi}_ikkinchi`]: 30, // ifoda bilan ham ishlaydi
};
console.log(obyekt); // { yosh: 25, yosh_ikkinchi: 30 }

// Amaliy misol - forma ma'lumotlarini dinamik saqlash
function inputOzgardi(maydonNomi, qiymat) {
  return {
    ...formaHolati,
    [maydonNomi]: qiymat, // maydonNomi qaysi bo'lsa, o'sha xususiyat yangilanadi
  };
}
```

---

## 🔗 7. Optional Chaining (`?.`) — ES2020

### 7.1. Muammo — nested obyektlarga xavfsiz murojaat qilish

```javascript
const foydalanuvchi = {
  ism: "Dilnoza",
  manzil: {
    shahar: "Toshkent",
  },
};

// Agar "manzil" mavjud bo'lmasa nima bo'ladi?
const foydalanuvchi2 = { ism: "Sherzod" }; // manzil YO'Q

// ❌ ESKI usul - xatolikka olib keladi
console.log(foydalanuvchi2.manzil.shahar); // TypeError: Cannot read properties of undefined

// ESKI usul - qo'lda tekshirish (uzun va noqulay)
console.log(foydalanuvchi2.manzil && foydalanuvchi2.manzil.shahar); // undefined (xato bermadi, lekin uzun)
```

### 7.2. Optional Chaining bilan yechim

```javascript
// ✅ YANGI usul - ?. orqali
console.log(foydalanuvchi2.manzil?.shahar); // undefined (xato bermaydi!)
console.log(foydalanuvchi.manzil?.shahar); // "Toshkent" (mavjud bo'lsa, oddiy ishlaydi)

// Chuqur ichma-ich zanjirlarda
const chuqurObyekt = { a: { b: { c: 42 } } };
console.log(chuqurObyekt?.a?.b?.c); // 42
console.log(chuqurObyekt?.x?.y?.z); // undefined (xato bermaydi)
```

### 7.3. Metodlarni chaqirishda

```javascript
const obyekt = {
  salomBer() {
    console.log("Salom!");
  },
};

// Agar metod mavjud bo'lmasa - TypeError o'rniga undefined qaytaradi
obyekt.salomBer?.(); // "Salom!" ishlaydi
obyekt.xayrlash?.(); // hech narsa bajarilmaydi, xato bermaydi (metod mavjud emas)

// ❌ Metod mavjud emasligini oddiy usulda tekshirish uzun edi:
if (obyekt.xayrlash) {
  obyekt.xayrlash();
}
```

### 7.4. Massivlar va indekslar bilan

```javascript
const malumot = { royxat: [1, 2, 3] };
const malumot2 = {};

console.log(malumot?.royxat?.[0]); // 1
console.log(malumot2?.royxat?.[0]); // undefined (xato bermaydi)
```

### 7.5. Muhim eslatma

```javascript
// Optional chaining faqat "null" va "undefined" uchun ishlaydi,
// boshqa "falsy" qiymatlar (0, "", false) uchun ZANJIRNI TO'XTATMAYDI:
const obyekt = { son: 0 };
console.log(obyekt?.son ?? "standart"); // 0 (to'g'ri, chunki 0 - mavjud qiymat)

// ?.= (optional chaining bilan tayinlash) MAVJUD EMAS:
// obyekt?.son = 5; // SyntaxError - bu ishlatib bo'lmaydi
```

---

## 🔗 8. Nullish Coalescing (`??`) — ES2020

### 8.1. Muammo — `||` operatorining kamchiligi

```javascript
function sozlamalarniOl(sozlamalar) {
  // ❌ MUAMMOLI: || operatori BARCHA "falsy" qiymatlarni (0, "", false, null, undefined)
  // "yo'q" deb hisoblaydi
  const sonMiqdori = sozlamalar.miqdor || 10;
  return sonMiqdori;
}

console.log(sozlamalarniOl({ miqdor: 0 })); // 10 - XATO! Foydalanuvchi ATAYLAB 0 kiritgan edi,
// lekin || uni "yo'q" deb hisoblab standart qiymatni qo'ydi
```

### 8.2. Yechim — `??` operatori

`??` — faqat qiymat **aynan `null` yoki `undefined`** bo'lgandagina, standart qiymatni qo'llaydi. Boshqa "falsy" qiymatlar (`0`, `""`, `false`, `NaN`) **haqiqiy, kutilgan qiymat** sifatida qabul qilinadi.

```javascript
function sozlamalarniOlTogri(sozlamalar) {
  const sonMiqdori = sozlamalar.miqdor ?? 10;
  return sonMiqdori;
}

console.log(sozlamalarniOlTogri({ miqdor: 0 })); // 0 - TO'G'RI! (0 - haqiqiy qiymat sifatida saqlandi)
console.log(sozlamalarniOlTogri({ miqdor: null })); // 10 (null bo'lgani uchun standart qiymat qo'llandi)
console.log(sozlamalarniOlTogri({})); // 10 (undefined bo'lgani uchun)

// Boshqa misollar:
console.log("" ?? "standart matn"); // "" (bo'sh matn - haqiqiy qiymat, standart QO'LLANMAYDI)
console.log("" || "standart matn"); // "standart matn" (|| farqli natija beradi!)

console.log(false ?? true); // false
console.log(false || true); // true (farqli natija!)
```

### 8.3. `?.` va `??` ni birgalikda ishlatish

```javascript
const foydalanuvchi = { sozlamalar: { bildirishnomalar: 0 } };

const bildirishnomalarSoni =
  foydalanuvchi?.sozlamalar?.bildirishnomalar ?? "yoqilmagan";
console.log(bildirishnomalarSoni); // 0 (chunki 0 - haqiqiy qiymat)
```

---

## 🔢 9. Numeric Separators (`1_000_000`) — ES2021

Katta sonlarni **o'qish uchun qulayroq** qilib yozish imkonini beradi — pastki chiziq (`_`) shunchaki vizual ajratuvchi, sonning haqiqiy qiymatiga ta'sir qilmaydi.

```javascript
// ESKI usul - o'qish qiyin
const katta_son = 1000000000;

// YANGI usul - Numeric Separator bilan
const kattaSon = 1_000_000_000;
console.log(kattaSon); // 1000000000 (aynan bir xil qiymat)

// Boshqa son turlari bilan ham ishlaydi
const oyliksMaosh = 15_000_000; // 15 million so'm
const binaryson = 0b1010_0001; // ikkilik sanoq sistemasida
const heksadesimal = 0xff_ff_ff; // o'n oltilik sanoq sistemasida
const kasrSon = 1_234.567_89; // kasr qismida ham ishlatish mumkin

console.log(oyliksMaosh); // 15000000
```

**Muhim qoida:** Pastki chiziqni sonning **boshida, oxirida** yoki **ketma-ket ikkita** joylashtirib bo'lmaydi:

```javascript
// const xato1 = _1000; // SyntaxError
// const xato2 = 1000_; // SyntaxError
// const xato3 = 1__000; // SyntaxError (ketma-ket ikkita _)
```

---

## 🎯 10. Logical Assignment Operators (`&&=`, `||=`, `??=`) — ES2021

Bu operatorlar — **shartli tayinlashni (conditional assignment)** qisqaroq yozish imkonini beradi. Ular mos matematik/logik operator bilan `=` ni birlashtiradi.

### 10.1. `||=` (Logical OR Assignment)

Agar chap tomondagi o'zgaruvchi **falsy** bo'lsa, unga yangi qiymat tayinlaydi:

```javascript
let sarlavha = "";
sarlavha ||= "Standart sarlavha";
console.log(sarlavha); // "Standart sarlavha" (bo'sh matn falsy edi)

// Bu quyidagiga TENG:
let sarlavha2 = "";
sarlavha2 = sarlavha2 || "Standart sarlavha";
```

### 10.2. `&&=` (Logical AND Assignment)

Agar chap tomondagi o'zgaruvchi **truthy** bo'lsa, unga yangi qiymat tayinlaydi:

```javascript
let foydalanuvchi = { ism: "Dilnoza", faol: true };
foydalanuvchi.faol &&= false; // faol TRUE edi, shu sababli yangilandi
console.log(foydalanuvchi.faol); // false

let bosh = null;
bosh &&= "yangi qiymat"; // bosh FALSY (null) edi, shu sababli o'zgarmadi
console.log(bosh); // null
```

### 10.3. `??=` (Nullish Coalescing Assignment) — eng ko'p ishlatiladigan

Agar chap tomondagi o'zgaruvchi `null` yoki `undefined` bo'lsa, unga yangi qiymat tayinlaydi:

```javascript
function sozlamalarniTayyorlash(sozlamalar = {}) {
  sozlamalar.til ??= "uz"; // agar "til" berilmagan bo'lsa, standart qiymat qo'yiladi
  sozlamalar.mavzu ??= "yorug'"; // agar "mavzu" berilmagan bo'lsa
  return sozlamalar;
}

console.log(sozlamalarniTayyorlash({ til: "en" }));
// { til: "en", mavzu: "yorug'" } - til o'zgarmadi (berilgan edi), mavzu qo'shildi

console.log(sozlamalarniTayyorlash({ til: null }));
// { til: "uz", mavzu: "yorug'" } - til null edi, shu sababli standart qiymat qo'yildi
```

---

## 📦 11. `String.prototype.replaceAll()` — ES2021

Avval `replace()` metodi faqat **birinchi** uchragan mos kelishni almashtirar edi (agar regex bilan global flag ishlatilmasa). `replaceAll()` esa **BARCHA** uchragan joylarni almashtiradi.

```javascript
const matn = "olma, banan, olma, uzum, olma";

// ESKI usul - faqat birinchisini almashtiradi
console.log(matn.replace("olma", "shaftoli"));
// "shaftoli, banan, olma, uzum, olma" - faqat BIRINCHISI o'zgardi

// YANGI usul - hammasini almashtiradi
console.log(matn.replaceAll("olma", "shaftoli"));
// "shaftoli, banan, shaftoli, uzum, shaftoli" - HAMMASI o'zgardi

// Regex bilan ham ishlaydi (lekin regex GLOBAL flag "g" bilan bo'lishi SHART)
console.log(matn.replaceAll(/olma/g, "shaftoli")); // xuddi yuqoridagidek natija

// Agar regex "g" flagsiz berilsa - XATOLIK beradi
// matn.replaceAll(/olma/, "shaftoli"); // TypeError: replaceAll must be called with a global RegExp
```

---

## 📦 12. `Array.prototype.at()` — ES2022

Massiv elementlariga **manfiy indeks** orqali (masalan oxiridan) murojaat qilish imkonini beradi.

```javascript
const massiv = [10, 20, 30, 40, 50];

// ESKI usul - oxirgi elementni olish uchun uzunlikni hisoblash kerak edi
console.log(massiv[massiv.length - 1]); // 50

// YANGI usul - at() bilan manfiy indeks
console.log(massiv.at(-1)); // 50 (oxirgi element)
console.log(massiv.at(-2)); // 40 (oxiridan ikkinchi)
console.log(massiv.at(0)); // 10 (musbat indeks ham oddiy ishlaydi)

// Matnlar (string) bilan ham ishlaydi
const matn = "Salom";
console.log(matn.at(-1)); // "m" (oxirgi harf)

// Chegaradan tashqarida bo'lsa - undefined qaytaradi (xato bermaydi)
console.log(massiv.at(100)); // undefined
```

---

## 📦 13. `Object.hasOwn()` — ES2022

Obyektning berilgan xususiyatga **o'zining (prototip zanjiridan emas)** ega ekanini tekshiradi. Bu — eski `hasOwnProperty()` metodining zamonaviy, xavfsizroq muqobili.

```javascript
const obyekt = { ism: "Dilnoza" };

// ESKI usul
console.log(obyekt.hasOwnProperty("ism")); // true

// YANGI usul - Object.hasOwn()
console.log(Object.hasOwn(obyekt, "ism")); // true
console.log(Object.hasOwn(obyekt, "yosh")); // false

// Nima uchun Object.hasOwn() XAVFSIZROQ?
// Agar obyektda "hasOwnProperty" nomli o'z xususiyati bo'lsa yoki
// obyekt Object.create(null) orqali yaratilgan bo'lsa, .hasOwnProperty() ISHLAMAYDI:
const xavfliObyekt = Object.create(null); // prototype ZANJIRI YO'Q
xavfliObyekt.ism = "Test";

// xavfliObyekt.hasOwnProperty("ism"); // TypeError: xavfliObyekt.hasOwnProperty is not a function

console.log(Object.hasOwn(xavfliObyekt, "ism")); // true - MUAMMOSIZ ishlaydi
```

---

## 📦 14. Top-level `await` — ES2022

Avval `await` faqat `async` funksiya **ICHIDA** ishlatilishi mumkin edi. ES2022 dan boshlab, ES modullarida (`type="module"`) `await` ni **to'g'ridan-to'g'ri, modul darajasida** (async funksiyasiz) ishlatish mumkin.

```javascript
// ESKI usul - async funksiya ICHIDA ishlatish kerak edi
async function malumotOlish() {
  const javob = await fetch("https://api.example.com/malumot");
  const data = await javob.json();
  return data;
}
malumotOlish();

// YANGI usul - MODUL DARAJASIDA to'g'ridan-to'g'ri (faqat ES modul fayllarida ishlaydi!)
// fayl.mjs yoki <script type="module"> ichida:
const javob = await fetch("https://api.example.com/malumot");
const data = await javob.json();
console.log(data);

// Amaliy foyda - modul yuklanishidan oldin ma'lumotni tayyorlash:
const konfiguratsiya = await fetch("./config.json").then((r) => r.json());
export const sozlamalar = konfiguratsiya;
```

**Muhim eslatma:** Top-level `await` faqat **ES modullarida** ishlaydi (`type="module"` skript yoki `.mjs` fayl), oddiy `<script>` yoki CommonJS (`require`) tizimida ishlamaydi.

---

## 📦 15. `Array.prototype.findLast()` va `findLastIndex()` — ES2023

`find()` va `findIndex()` massivni **boshidan** qidiradi, `findLast()` va `findLastIndex()` esa **oxiridan boshlab** qidiradi.

```javascript
const sonlar = [5, 12, 8, 130, 44, 12];

// ESKI usul - boshidan qidiradi
console.log(sonlar.find((n) => n > 10)); // 12 (birinchi topilgan, indeks 1)
console.log(sonlar.findIndex((n) => n > 10)); // 1

// YANGI usul - oxiridan qidiradi
console.log(sonlar.findLast((n) => n > 10)); // 12 (oxirgi topilgan, indeks 5 dagi)
console.log(sonlar.findLastIndex((n) => n > 10)); // 5

// Amaliy misol - eng oxirgi "xato" holatidagi elementni topish
const amaliyotlar = [
  { turi: "kirim", summa: 100 },
  { turi: "chiqim", summa: 50 },
  { turi: "kirim", summa: 200 },
  { turi: "chiqim", summa: 30 },
];
const oxirgiChiqim = amaliyotlar.findLast((a) => a.turi === "chiqim");
console.log(oxirgiChiqim); // { turi: "chiqim", summa: 30 }
```

---

## 📦 16. Immutable Array Metodlari — ES2023

### 16.1. Muammo — an'anaviy metodlar asl massivni O'ZGARTIRADI (mutate qiladi)

```javascript
const asosiy = [3, 1, 4, 1, 5];

// .sort() ASL massivni o'zgartiradi (mutating)
asosiy.sort();
console.log(asosiy); // [1, 1, 3, 4, 5] - ASL massiv o'zgardi!
```

Bu ba'zan **kutilmagan xatoliklarga** olib keladi, ayniqsa React kabi freymvorklarda, ular holatning (state) **o'zgarmasligini (immutability)** talab qiladi.

### 16.2. Yechim — yangi, "immutable" (o'zgarmas) versiyalar

```javascript
const asosiy = [3, 1, 4, 1, 5];

// toSorted() - saralangan YANGI massiv qaytaradi, ASLINI o'zgartirmaydi
const saralangan = asosiy.toSorted();
console.log(asosiy); // [3, 1, 4, 1, 5] - o'zgarmadi
console.log(saralangan); // [1, 1, 3, 4, 5] - yangi massiv

// toReversed() - teskari tartibdagi YANGI massiv
const teskari = asosiy.toReversed();
console.log(asosiy); // [3, 1, 4, 1, 5] - o'zgarmadi
console.log(teskari); // [5, 1, 4, 1, 3]

// toSpliced() - splice() ning immutable versiyasi
const yangiSplice = asosiy.toSpliced(1, 2, "yangi"); // 1-indeksdan 2ta elementni "yangi" bilan almashtirish
console.log(asosiy); // [3, 1, 4, 1, 5] - o'zgarmadi
console.log(yangiSplice); // [3, "yangi", 1, 5]

// with() - ma'lum indeksdagi elementni almashtirib, YANGI massiv qaytaradi
const yangilangan = asosiy.with(0, 100); // 0-indeksni 100 bilan almashtirish
console.log(asosiy); // [3, 1, 4, 1, 5] - o'zgarmadi
console.log(yangilangan); // [100, 1, 4, 1, 5]
```

### 16.3. Mutating vs Immutable metodlar solishtirish jadvali

| Eski (Mutating - asl massivni o'zgartiradi)    | Yangi (Immutable - yangi massiv qaytaradi) |
| ---------------------------------------------- | ------------------------------------------ |
| `sort()`                                       | `toSorted()`                               |
| `reverse()`                                    | `toReversed()`                             |
| `splice()`                                     | `toSpliced()`                              |
| `arr[i] = x` (to'g'ridan-to'g'ri o'zgartirish) | `with(i, x)`                               |

---

## 📦 17. `Object.groupBy()` va `Map.groupBy()` — ES2024

Massiv elementlarini **berilgan mezon bo'yicha guruhlarga** ajratish imkonini beradi — bu avval `reduce()` orqali qo'lda yozilishi kerak bo'lgan keng tarqalgan vazifani soddalashtiradi.

```javascript
const mahsulotlar = [
  { nomi: "Olma", turi: "meva" },
  { nomi: "Sabzi", turi: "sabzavot" },
  { nomi: "Banan", turi: "meva" },
  { nomi: "Kartoshka", turi: "sabzavot" },
];

// ESKI usul - reduce() orqali qo'lda guruhlash
const eskiGuruhlash = mahsulotlar.reduce((natija, mahsulot) => {
  const kalit = mahsulot.turi;
  if (!natija[kalit]) natija[kalit] = [];
  natija[kalit].push(mahsulot);
  return natija;
}, {});

// YANGI usul - Object.groupBy()
const guruhlangan = Object.groupBy(mahsulotlar, (mahsulot) => mahsulot.turi);
console.log(guruhlangan);
// {
//   meva: [{ nomi: "Olma", turi: "meva" }, { nomi: "Banan", turi: "meva" }],
//   sabzavot: [{ nomi: "Sabzi", turi: "sabzavot" }, { nomi: "Kartoshka", turi: "sabzavot" }]
// }

// Map.groupBy() - xuddi shunday, lekin Map obyekti qaytaradi (kalitlar istalgan turda bo'lishi mumkin)
const guruhlanganMap = Map.groupBy(mahsulotlar, (mahsulot) => mahsulot.turi);
console.log(guruhlanganMap.get("meva")); // [{ nomi: "Olma", ... }, { nomi: "Banan", ... }]
```

---

## 📦 18. `Promise.withResolvers()` — ES2024

Yangi Promise yaratish bilan birga, uning `resolve` va `reject` funksiyalarini **to'g'ridan-to'g'ri tashqariga** olish imkonini beradi (avval buning uchun Promise konstruktori ichida qo'shimcha o'zgaruvchilarga tayinlash kerak edi).

```javascript
// ESKI usul - resolve/reject ni tashqariga chiqarish uchun qo'shimcha o'zgaruvchilar kerak edi
let eskiResolve, eskiReject;
const eskiPromise = new Promise((resolve, reject) => {
  eskiResolve = resolve;
  eskiReject = reject;
});

// YANGI usul - Promise.withResolvers()
const { promise, resolve, reject } = Promise.withResolvers();

// Endi resolve/reject ni istalgan joyda, Promise yaratilgan konteksdan tashqarida ham chaqirish mumkin
setTimeout(() => resolve("Muvaffaqiyatli!"), 1000);

promise.then((natija) => console.log(natija)); // 1 soniyadan keyin: "Muvaffaqiyatli!"

// Amaliy qo'llanish - event bilan bog'liq Promise yaratish
function tugmaBosilishiniKutish(tugma) {
  const { promise, resolve } = Promise.withResolvers();
  tugma.addEventListener("click", () => resolve("Tugma bosildi"), {
    once: true,
  });
  return promise;
}
```

---

## 📋 19. Yakuniy xulosa jadvali — ES versiyalari bo'yicha

| Versiya          | Yil  | Asosiy qo'shimchalar                                                                               |
| ---------------- | ---- | -------------------------------------------------------------------------------------------------- |
| **ES6 (ES2015)** | 2015 | Template literals, arrow functions, destructuring, spread/rest, class, let/const, Promise, modules |
| **ES2018**       | 2018 | Object spread/rest, async iteration                                                                |
| **ES2020**       | 2020 | Optional chaining (`?.`), nullish coalescing (`??`), `Promise.allSettled()`, BigInt                |
| **ES2021**       | 2021 | Numeric separators, logical assignment operators, `replaceAll()`                                   |
| **ES2022**       | 2022 | `Array.at()`, `Object.hasOwn()`, top-level await, class private fields (`#`)                       |
| **ES2023**       | 2023 | `findLast()`, `findLastIndex()`, immutable array metodlari (`toSorted()` va h.k.)                  |
| **ES2024**       | 2024 | `Object.groupBy()`, `Map.groupBy()`, `Promise.withResolvers()`                                     |

---

## 💡 20. Best Practices (Tavsiyalar)

```javascript
// ✅ 1. Matnlarni birlashtirish uchun har doim template literal ishlating, + operatoridan emas
const xabar = `Salom, ${ism}!`; // + "ism" + "!" o'rniga

// ✅ 2. Callback funksiyalarda arrow function, obyekt metodlarida oddiy funksiya ishlating

// ✅ 3. Funksiyalarga ko'p parametr uzatishda destructuring bilan obyekt qabul qiling

// ✅ 4. Standart qiymat kerak bo'lganda ?? dan foydalaning, || dan emas
//       (0, "", false kabi qiymatlar noto'g'ri almashtirilib qolmasligi uchun)

// ✅ 5. Ichma-ich obyektlarga murojaat qilishda ?. dan foydalaning -
//       bu kodni TypeError lardan himoya qiladi

// ✅ 6. React/Vue kabi freymvorklarda holatni yangilashda spread operator yoki
//       immutable metodlar (toSorted, with va h.k.) dan foydalaning,
//       to'g'ridan-to'g'ri o'zgartirishdan (mutation) saqlaning

// ✅ 7. Katta sonlarni numeric separator bilan yozib, o'qilishini osonlashtiring
```

---
