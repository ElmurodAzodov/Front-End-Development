# **Scope and Closures**

**Scope (doira)** — dasturning qaysi qismida qaysi o'zgaruvchiga kirish mumkinligini belgilaydigan qoidalar to'plami. Bu JavaScript'ning eng fundamental, ayni paytda ko'p dasturchilarni chalkashtiradigan mavzularidan biri. Quyida barcha scope turlari, closure mexanizmi va hoisting to'liq tushuntirilgan.

---

## 🌍 1. Global Scope

Funksiya yoki blokdan tashqarida e'lon qilingan o'zgaruvchilar **global scope**ga tegishli bo'ladi va dasturning **istalgan joyidan** kirish mumkin.

```javascript
let ilovaNomi = "Mening Ilovam"; // global scope

function chiqar() {
  console.log(ilovaNomi); // ✅ ko'rinadi — global o'zgaruvchiga kirish bor
}

function boshqaFunksiya() {
  console.log(ilovaNomi); // ✅ bu yerdan ham ko'rinadi
}

chiqar();
```

### 🔑 Muhim jihatlari:

- Brauzerda global `var`/function deklaratsiyalari **`window`** obyektiga biriktiriladi:

```javascript
var xabar = "Salom";
function test() {}

console.log(window.xabar); // "Salom"
console.log(window.test); // function test() {...}
```

- `let` va `const` bilan e'lon qilingan global o'zgaruvchilar `window`ga qo'shilmaydi (lekin baribir global scope'da qoladi):

```javascript
let maxfiy = "sir";
console.log(window.maxfiy); // undefined
```

### ⚠️ Global scope'ning xavfi

Har bir qo'shimcha global o'zgaruvchi **"global ifloslanish" (global pollution)** xavfini oshiradi — turli fayllar/modullar bir xil nom bilan o'zgaruvchi yaratsa, ular bir-birini qayta yozib yuboradi:

```javascript
// fayl1.js
var hisob = 10;

// fayl2.js (boshqa dasturchi yozgan)
var hisob = "boshlangich"; // ❌ fayl1.js'dagi qiymatni ustidan yozib yuboradi!
```

Shuning uchun zamonaviy JavaScript'da global o'zgaruvchilar sonini **minimal** qilish va o'rniga modullar (`import`/`export`) yoki closure (IIFE, module pattern) ishlatish tavsiya etiladi.

---

## 🏠 2. Local Scope (Function Scope)

Funksiya ichida e'lon qilingan o'zgaruvchilar faqat **o'sha funksiya ichida** ko'rinadi — bu **local (funksiya) scope** deyiladi.

```javascript
function hisoblagich() {
  let hisob = 0; // local scope — faqat shu funksiya ichida yashaydi
  hisob++;
  console.log(hisob); // 1
}

hisoblagich();
console.log(hisob); // ❌ ReferenceError: hisob is not defined
```

### 🔑 Har bir funksiya chaqiruvi — yangi scope

```javascript
function yarat() {
  let son = Math.random();
  return son;
}

console.log(yarat()); // 0.234...
console.log(yarat()); // 0.789... — har safar yangi, mustaqil scope
```

### 🔑 Ichma-ich (nested) funksiyalar

Ichki funksiya tashqi funksiyaning local o'zgaruvchilariga kirisha oladi, lekin **teskarisi ishlamaydi**:

```javascript
function tashqi() {
  let tashqiOzgaruvchi = "men tashqarida";

  function ichki() {
    console.log(tashqiOzgaruvchi); // ✅ ko'rinadi
  }

  ichki();
  console.log(ichkiOzgaruvchi); // ❌ ReferenceError — ichki funksiyaning o'zgaruvchisi tashqarida yo'q
}
```

`var` bilan e'lon qilingan o'zgaruvchi ham **function-scoped** — ya'ni blok (`if`, `for`) ichida bo'lsa ham, butun funksiya bo'ylab ko'rinadi:

```javascript
function test() {
  if (true) {
    var x = 10; // block emas, function scope
  }
  console.log(x); // 10 — ko'rinadi!
}
```

---

## 📦 3. Block Scope (`let`, `const`)

ES6 bilan kiritilgan `let` va `const` — `{}` bilan chegaralangan **har qanday blok** ichida (`if`, `for`, `while`, hattoki yolg'iz `{}`) o'z scope'iga ega bo'ladi.

```javascript
if (true) {
  let x = 10;
  const y = 20;
  var z = 30;
}

console.log(z); // 30 — var block scope'ga bo'ysunmaydi
console.log(x); // ❌ ReferenceError — let block scope'da qoladi
console.log(y); // ❌ ReferenceError — const ham block scope'da qoladi
```

### 🔑 `for` loop'da `let` vs `var` — klassik muammo

```javascript
// ❌ var bilan — hammasi bitta scope'ni ulashadi
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// ✅ let bilan — har bir iteratsiya o'ZINING scope'iga ega
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

Sabab: `let` bilan har bir iteratsiyada **yangi bog'lanish (binding)** yaratiladi, `var` esa faqat bitta o'zgaruvchini butun loop bo'ylab qayta ishlatadi.

### 🔑 `{}` — yolg'iz blok orqali ham scope yaratish mumkin

```javascript
{
  let maxfiy = "faqat shu yerda";
  console.log(maxfiy); // "faqat shu yerda"
}
console.log(maxfiy); // ❌ ReferenceError
```

### 📊 `var` / `let` / `const` taqqoslash

| Xususiyat                       | `var`                 | `let`        | `const`        |
| ------------------------------- | --------------------- | ------------ | -------------- |
| Scope turi                      | Function scope        | Block scope  | Block scope    |
| Qayta e'lon qilish              | ✅ Mumkin             | ❌ Xato      | ❌ Xato        |
| Qiymatini o'zgartirish          | ✅ Mumkin             | ✅ Mumkin    | ❌ Mumkin emas |
| Hoisting                        | ✅ `undefined` bilan  | ✅ TDZ bilan | ✅ TDZ bilan   |
| `window` obyektiga qo'shiladimi | ✅ Ha (global bo'lsa) | ❌ Yo'q      | ❌ Yo'q        |

---

## 🔗 4. Scope Chain (Doiralar zanjiri)

Agar o'zgaruvchi **joriy scope'da topilmasa**, JavaScript uni **tashqi scope'larda** izlashni davom ettiradi — bu jarayon **scope chain** deb ataladi va u global scope'ga yetguncha davom etadi.

```javascript
let daraja1 = "global";

function tashqi() {
  let daraja2 = "tashqi";

  function orta() {
    let daraja3 = "orta";

    function ichki() {
      let daraja4 = "ichki";
      // ichki() scope chain: ichki -> orta -> tashqi -> global
      console.log(daraja4); // "ichki"    — o'z scope'ida topildi
      console.log(daraja3); // "orta"     — orta scope'dan topildi
      console.log(daraja2); // "tashqi"   — tashqi scope'dan topildi
      console.log(daraja1); // "global"   — global scope'dan topildi
    }
    ichki();
  }
  orta();
}
tashqi();
```

### 🔑 Qidiruv faqat **ichkaridan tashqariga** boradi, teskarisi emas!

```javascript
function tashqi() {
  function ichki() {
    let maxsus = "faqat ichkida";
  }
  ichki();
  console.log(maxsus); // ❌ ReferenceError — tashqi funksiya ichki scope'ni ko'ra olmaydi
}
```

### 🔑 Bir xil nomli o'zgaruvchi — eng yaqin scope g'olib chiqadi (Shadowing)

```javascript
let ism = "Global Ism";

function chiqar() {
  let ism = "Local Ism"; // tashqi "ism"ni "soyalantiradi" (shadow)
  console.log(ism); // "Local Ism"
}
chiqar();
console.log(ism); // "Global Ism" — o'zgarmagan
```

Agar `chiqar` ichida `let` bo'lmasa, `ism = "..."` global o'zgaruvchini **o'zgartirib yuboradi**:

```javascript
let ism = "Global Ism";
function chiqar() {
  ism = "Yangi qiymat"; // let/const/var yo'q — global o'zgaruvchi o'zgartiriladi!
}
chiqar();
console.log(ism); // "Yangi qiymat"
```

---

## 📚 5. Lexical Scoping (Leksik doiralash)

**Lexical scoping** — bu scope'lar dastur **yozilgan (kod joylashgan) joyi** asosida, kod bajarilishidan oldin, **kompilyatsiya vaqtida** aniqlanishini bildiradi. Boshqacha aytganda, funksiya **qayerdan chaqirilganiga emas**, balki **qayerda yozilganiga** qarab o'zining tashqi scope'ini biladi.

```javascript
let x = "global";

function tashqi() {
  let x = "tashqi";
  ichki(); // ichki() shu yerdan chaqirilyapti...
}

function ichki() {
  console.log(x); // lekin "global" chiqadi — chunki ichki() global scope'da YOZILGAN
}

tashqi(); // "global"
```

Agar JavaScript **dynamic scoping** ishlatganida (ba'zi tillarda bo'lgani kabi), natija "tashqi" bo'lardi, chunki `ichki()` `tashqi()` ichidan chaqirildi. Lekin JS **lexical (static) scoping** ishlatadi — funksiya qayerda **e'lon qilingan** bo'lsa, o'sha joyning scope zanjiridan foydalanadi.

### 🔑 Bu closure'ning asosi!

Aynan lexical scoping tufayli funksiya, hatto boshqa joyga "olib ketilsa" ham, **o'zi yaratilgan joydagi o'zgaruvchilarni eslab qoladi**. Bu closure mexanizmining fundamenti.

---

## 🔒 6. Closures (Yopiqlar)

### 🔹 Closure nima?

> **Closure** — funksiya + uning yaratilgan paytdagi leksik muhiti (lexical environment)ning birikmasi. Funksiya, hatto tashqi (uni yaratgan) funksiya bajarilib bo'lgandan keyin ham, o'sha muhitdagi o'zgaruvchilarga kirisha oladi.

```javascript
function tashqiFunksiya() {
  let maxfiySon = 42; // bu o'zgaruvchi "yopiladi" (closed over)

  return function ichkiFunksiya() {
    console.log(maxfiySon); // tashqi scope'ga "yopishib qolgan"
  };
}

const mening = tashqiFunksiya(); // tashqiFunksiya() allaqachon TUGADI
mening(); // 42 — lekin maxfiySon hali ham xotirada saqlanmoqda!
```

JavaScript'da **HAR BIR funksiya** closure yaratadi — chunki har bir funksiya o'zi yaratilgan scope zanjirini "eslab qoladi". Lekin closure haqida odatda ichki funksiya tashqi funksiyadan **qaytarilganda yoki tashqariga uzatilganda** gapiriladi, chunki aynan o'shanda uning amaliy ahamiyati ko'rinadi.

### 🔑 Har bir chaqiruv — o'z mustaqil closure'ini yaratadi

```javascript
function hisoblagichYarat() {
  let hisob = 0;
  return () => ++hisob;
}

const hisoblagich1 = hisoblagichYarat();
const hisoblagich2 = hisoblagichYarat(); // butunlay boshqa, mustaqil "hisob"

console.log(hisoblagich1()); // 1
console.log(hisoblagich1()); // 2
console.log(hisoblagich2()); // 1 — hisoblagich1'ga umuman ta'sir qilmaydi
```

---

### 🎯 Amaliy qo'llanilish holatlari

#### 1) Data Privacy (Ma'lumotlar maxfiyligi / Encapsulation)

Closure orqali "private" o'zgaruvchilar yaratish mumkin — ular faqat maxsus qaytarilgan funksiyalar orqaligina o'zgartiriladi:

```javascript
function bankHisobiYarat(boshlangichBalans) {
  let balans = boshlangichBalans; // to'g'ridan-to'g'ri tashqaridan kirish yo'q

  return {
    balansKor: () => balans,
    pulSol(miqdor) {
      if (miqdor <= 0) return console.log("Noto'g'ri miqdor!");
      balans += miqdor;
    },
    pulOl(miqdor) {
      if (miqdor > balans) return console.log("Balans yetarli emas!");
      balans -= miqdor;
    },
  };
}

const hisobim = bankHisobiYarat(1000);
hisobim.pulSol(500);
console.log(hisobim.balansKor()); // 1500
console.log(hisobim.balans); // undefined — tashqaridan to'g'ridan-to'g'ri kirish yo'q
```

#### 2) Factory Functions (Fabrika funksiyalari)

Closure yordamida har biri o'z holatiga (state) ega bo'lgan mustaqil obyektlar "ishlab chiqarish":

```javascript
function foydalanuvchiYarat(ism, rol) {
  let faolligi = true; // har bir foydalanuvchi o'z holatiga ega

  return {
    malumot: () => `${ism} (${rol}) — ${faolligi ? "faol" : "faol emas"}`,
    blokla: () => {
      faolligi = false;
    },
  };
}

const foydalanuvchi1 = foydalanuvchiYarat("Ali", "admin");
const foydalanuvchi2 = foydalanuvchiYarat("Vali", "mijoz");

foydalanuvchi1.blokla();
console.log(foydalanuvchi1.malumot()); // Ali (admin) — faol emas
console.log(foydalanuvchi2.malumot()); // Vali (mijoz) — faol — mustaqil holat!
```

#### 3) Event Handlers (Hodisa ishlovchilar)

Closure orqali har bir event handler o'ziga tegishli ma'lumotni "eslab qoladi":

```javascript
function tugmaYarat(rangi) {
  const tugma = document.createElement("button");
  tugma.textContent = rangi;

  tugma.addEventListener("click", () => {
    // closure orqali "rangi" o'zgaruvchisi eslab qolinadi
    console.log(`Siz ${rangi} tugmasini bosdingiz`);
    document.body.style.backgroundColor = rangi;
  });

  return tugma;
}

document.body.append(tugmaYarat("qizil"), tugmaYarat("ko'k"));
```

#### 4) Memoization (Natijalarni keshlash)

```javascript
function memoize(fn) {
  const kesh = new Map(); // closure orqali "eslab qolinadi"

  return function (...args) {
    const kalit = JSON.stringify(args);
    if (kesh.has(kalit)) return kesh.get(kalit);

    const natija = fn(...args);
    kesh.set(kalit, natija);
    return natija;
  };
}

const tezFaktorial = memoize(function faktorial(n) {
  return n <= 1 ? 1 : n * faktorial(n - 1);
});
```

#### 5) Currying va qisman qo'llash (Partial application)

```javascript
const chegirmaHisobla = (foiz) => (narx) => narx - (narx * foiz) / 100;

const yozgiChegirma = chegirmaHisobla(20); // 20% chegirma "eslab qolinadi"
console.log(yozgiChegirma(1000)); // 800
console.log(yozgiChegirma(500)); // 400
```

---

### 🧠 Memory Implications (Xotiraga ta'siri)

Closure — juda foydali, lekin **bepul emas**. Bir nechta muhim jihatlarni bilish kerak:

#### 1) Garbage Collection to'sqinligi

Odatda funksiya bajarilib bo'lgach, uning local o'zgaruvchilari **Garbage Collector (GC)** tomonidan xotiradan tozalanadi. Lekin agar closure orqali ichki funksiya tashqariga "chiqarilgan" bo'lsa, tashqi funksiyaning butun scope'i **xotirada saqlanib qoladi** — chunki closure hali ham unga ishora qilib turibdi:

```javascript
function katta() {
  let ulkanMassiv = new Array(1000000).fill("ma'lumot"); // og'ir massiv

  return function () {
    console.log(ulkanMassiv.length); // ulkanMassiv butunlay xotirada qolib ketadi!
  };
}

const fn = katta(); // ulkanMassiv hali ham xotirada — GC tozalay olmaydi
```

#### 2) Xotira sizib chiqishi (Memory Leak) xavfi

Agar closure'ga endi kerak bo'lmagan katta obyektlar "ilashib qolsa" va referens uzoq vaqt saqlanib tursa (masalan, global o'zgaruvchida yoki tozalanmagan event listener'da), bu xotira sizib chiqishiga olib kelishi mumkin:

```javascript
function eventListenerQosh() {
  const ogirMalumot = fetchKattaMalumot(); // katta ma'lumot

  document.addEventListener("click", function () {
    console.log(ogirMalumot); // closure ogirMalumot'ni doim ushlab turadi
  });
  // Agar bu listener hech qachon removeEventListener bilan olib tashlanmasa,
  // ogirMalumot butun sahifa umri davomida xotirada qoladi!
}
```

#### 3) Yaxshi amaliyot (Best practices)

- Closure'ga faqat **kerakli** o'zgaruvchilarni "qamrab olish" — keraksiz katta obyektlarni closure ichiga "sudramaslik".
- Event listener'larni kerak bo'lmay qolganda `removeEventListener` bilan tozalash.
- Katta ma'lumotlarni closure o'rniga, agar kerak bo'lmasa, `null` qilib bo'shatish.

---

## 🎯 7. Module Pattern (Closure yordamida)

**Module Pattern** — IIFE va closure'larni birlashtirib, **private** va **public** a'zolarga ega mustaqil modul yaratish usuli. ES6 `import`/`export` paydo bo'lishidan oldin bu — JavaScript'da inkapsulyatsiya qilishning asosiy yo'li edi.

```javascript
const hisoblagichModul = (function () {
  // 🔒 PRIVATE — tashqaridan ko'rinmaydi
  let hisob = 0;

  function logYoz(xabar) {
    console.log(`[LOG]: ${xabar}`);
  }

  // 🌐 PUBLIC — tashqariga ochiq interfeys
  return {
    ortir() {
      hisob++;
      logYoz(`Hisob oshirildi: ${hisob}`);
      return hisob;
    },
    kamaytir() {
      hisob--;
      logYoz(`Hisob kamaytirildi: ${hisob}`);
      return hisob;
    },
    joriyHisob() {
      return hisob;
    },
  };
})();

hisoblagichModul.ortir(); // [LOG]: Hisob oshirildi: 1
hisoblagichModul.ortir(); // [LOG]: Hisob oshirildi: 2
console.log(hisoblagichModul.joriyHisob()); // 2

console.log(hisoblagichModul.hisob); // undefined — private, ko'rinmaydi
console.log(hisoblagichModul.logYoz); // undefined — private funksiya ham ko'rinmaydi
```

### 🔑 Revealing Module Pattern

Modulning yanada "toza" varianti — barcha funksiyalar avval private qilib yoziladi, so'ngra faqat kerakli qismlar oxirida "ochiladi" (reveal qilinadi):

```javascript
const savatchaModul = (function () {
  let mahsulotlar = [];

  function qoshish(mahsulot) {
    mahsulotlar.push(mahsulot);
  }

  function ochirish(mahsulot) {
    mahsulotlar = mahsulotlar.filter((m) => m !== mahsulot);
  }

  function royxatniOlish() {
    return [...mahsulotlar]; // nusxasini qaytaradi — asl massiv himoyalangan
  }

  // Faqat kerakli metodlarni "reveal" qilamiz
  return {
    qoshish,
    ochirish,
    royxatniOlish,
  };
})();

savatchaModul.qoshish("Noutbuk");
savatchaModul.qoshish("Sichqoncha");
console.log(savatchaModul.royxatniOlish()); // ["Noutbuk", "Sichqoncha"]
```

💡 **Eslatma:** Zamonaviy JavaScript'da ES6 modullari (`export`/`import`) bu naqshni katta darajada almashtirgan, chunki ular haqiqiy fayl-darajasidagi inkapsulyatsiyani beradi. Lekin Module Pattern hali ham legacy kodda, kutubxonalarda va closure tushunchasini chuqur anglash uchun muhim.

---

## 🔄 8. Variable Hoisting (O'zgaruvchilarni "ko'chirish")

**Hoisting** — JavaScript dvigateli kodni bajarishdan oldin, deklaratsiyalarni (e'lonlarni) o'zi ishlaydigan scope'ning **yuqorisiga "ko'chirib qo'yishi"**. Bu — jismoniy kodni qayta joylashtirish emas, balki **compile phase**da o'zgaruvchi/funksiya nomlari xotiradan joy oladigan mexanizm.

### 🔹 `var` hoisting — `undefined` bilan boshlang'ich qiymatlanadi

```javascript
console.log(ism); // undefined (xato emas!)
var ism = "Ali";
console.log(ism); // "Ali"

// Yuqoridagi kod aslida quyidagicha "tushuniladi":
var ism; // deklaratsiya yuqoriga ko'chadi, undefined bilan boshlanadi
console.log(ism); // undefined
ism = "Ali"; // qiymat berish o'z joyida qoladi
console.log(ism); // "Ali"
```

`var` funksiya ichida bo'lsa ham xuddi shunday ishlaydi — butun funksiya boshiga "ko'chadi":

```javascript
function test() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}
```

### 🔹 `let` / `const` hoisting — Temporal Dead Zone (TDZ)

`let` va `const` ham texnik jihatdan hoisting qilinadi (scope'ning boshida "biladi"), lekin ular **initsializatsiya qilinmaguncha** ishlatib bo'lmaydigan **"Temporal Dead Zone" (TDZ)** holatida bo'ladi:

```javascript
console.log(yosh); // ❌ ReferenceError: Cannot access 'yosh' before initialization
let yosh = 25;
```

```javascript
{
  // 🚫 TDZ boshlanadi — bu yerdan "let yosh"gacha bo'lgan hudud
  console.log(yosh); // ❌ ReferenceError
  console.log(typeof yosh); // ❌ ReferenceError (var bilan bo'lsa typeof "undefined" bo'lardi!)

  let yosh = 25; // ✅ TDZ shu yerda tugaydi
  console.log(yosh); // 25 — endi xavfsiz
}
```

`const` xuddi shunday TDZ'ga ega, ustiga **majburiy initsializatsiya** talab qiladi:

```javascript
const PI; // ❌ SyntaxError: Missing initializer in const declaration
```

### 📊 `var` vs `let`/`const` hoisting taqqoslash

|                          | `var`                 | `let` / `const`          |
| ------------------------ | --------------------- | ------------------------ |
| Hoisting bo'ladimi       | ✅ Ha                 | ✅ Ha (lekin TDZ bilan)  |
| Boshlang'ich qiymat      | `undefined`           | Yo'q — TDZ (xato beradi) |
| E'londan oldin ishlatish | `undefined` qaytaradi | `ReferenceError` beradi  |
| Scope                    | Function scope        | Block scope              |

### 🔹 Function Hoisting — faqat Declaration'larda

**Function Declaration** — butun tanasi bilan hoisting qilinadi, shuning uchun e'londan **oldin ham chaqirish mumkin**:

```javascript
salomla(); // ✅ "Salom!" — muammosiz ishlaydi

function salomla() {
  console.log("Salom!");
}
```

**Function Expression** va **Arrow Function** esa hoisting qilinmaydi (chunki ular `var`/`let`/`const`ga "qiymat" sifatida biriktiriladi, va faqat o'zgaruvchi nomi hoisting bo'ladi, funksiya tanasi emas):

```javascript
salomla(); // ❌ TypeError: salomla is not a function (var hoisting sabab undefined chaqirilyapti)

var salomla = function () {
  console.log("Salom!");
};
```

```javascript
salomla(); // ❌ ReferenceError: Cannot access 'salomla' before initialization (TDZ)

const salomla = () => {
  console.log("Salom!");
};
```

### 🔑 Deklaratsiya turlari va hoisting xulosasi

```javascript
// 1️⃣ Function Declaration — TO'LIQ hoisting (chaqirish mumkin)
test1(); // ✅ ishlaydi
function test1() {
  console.log("declaration");
}

// 2️⃣ var Function Expression — faqat nom hoisting, undefined bilan
test2(); // ❌ TypeError
var test2 = function () {
  console.log("expression");
};

// 3️⃣ let/const Function Expression — TDZ, umuman ishlamaydi
test3(); // ❌ ReferenceError
const test3 = function () {
  console.log("expression");
};

// 4️⃣ Arrow Function — xuddi shunday TDZ qoidasiga bo'ysunadi
test4(); // ❌ ReferenceError
const test4 = () => console.log("arrow");
```

### ⚠️ Amaliy tavsiya

Kod xatolarining oldini olish uchun:

- **Har doim o'zgaruvchini ishlatishdan OLDIN e'lon qiling** — hoisting'ga tayanmang.
- `var` o'rniga **`let`/`const`** ishlating — TDZ xatolari muammoni ertaroq aniqlashga yordam beradi.
- Funksiyalarni ishlatishdan oldin e'lon qiling, hoisting'ga ishonib qolmang — kod o'qilishi osonlashadi.

---

## 📊 Umumiy xulosa jadvali

| Tushuncha              | Ta'rifi                                           | Asosiy kalit so'z/mexanizm                                |
| ---------------------- | ------------------------------------------------- | --------------------------------------------------------- |
| Global Scope           | Dasturning istalgan joyidan ko'rinadigan doira    | `var`/`let`/`const` (funksiya tashqarisida)               |
| Local (Function) Scope | Faqat o'sha funksiya ichida ko'rinadigan doira    | Funksiya ichidagi barcha o'zgaruvchilar                   |
| Block Scope            | `{}` bilan chegaralangan doira                    | `let`, `const`                                            |
| Scope Chain            | O'zgaruvchini tashqi scope'larda izlash zanjiri   | Avtomatik, dvigatel tomonidan                             |
| Lexical Scoping        | Scope kod yozilgan joyga qarab aniqlanishi        | Kompilyatsiya vaqtida belgilanadi                         |
| Closure                | Funksiya + uning leksik muhiti                    | Har bir funksiyada mavjud                                 |
| Module Pattern         | Closure orqali private/public a'zolarga ega modul | IIFE + closure                                            |
| Hoisting               | Deklaratsiyalarning scope boshiga "ko'chishi"     | `var` (undefined), `let`/`const` (TDZ), function (to'liq) |

---

## ✅ Yakuniy xulosa

- **Har doim `let`/`const` ishlating**, `var`dan saqlaning — bu block scope va TDZ orqali ko'plab xatolarning oldini oladi.
- **Scope chain**ni tushunish — nima uchun ba'zi o'zgaruvchilar "ko'rinmasligi" yoki kutilmagan qiymat qaytarishini tushuntiradi.
- **Closure** — JavaScript'dagi eng kuchli vositalardan biri: private state, factory function, module pattern, memoization — bularning barchasi closure asosida quriladi.
- Closure ishlatganda **xotira** haqida o'ylang — kerak bo'lmagan og'ir ma'lumotlarni closure ichida "ushlab turmang".
- **Hoisting**ga tayanib kod yozmang — har doim o'zgaruvchi va funksiyalarni ishlatishdan oldin aniq e'lon qiling, kod aniqroq va xatosiz bo'ladi.
