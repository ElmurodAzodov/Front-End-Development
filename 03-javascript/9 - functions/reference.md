
# **Functions**

JavaScript'da funksiyalar — bu **birinchi darajali obyektlar (first-class citizens)**. Ular kod qayta ishlatilishini, abstraksiyani va butun dasturlash paradigmalarini (funksional dasturlash) ta'minlaydi. Quyida barcha funksiya turlari, ularning xususiyatlari, farqlari va amaliy misollari keltirilgan.

---

## 📝 1. Function Declaration (Funksiya deklaratsiyasi)

```javascript
function salomBer(ism) {
  return `Salom, ${ism}!`;
}

console.log(salomBer("Ali")); // Salom, Ali!
```

### 🔑 Asosiy xususiyatlari:

- `function` kalit so'zi bilan boshlanadi va **nom majburiy**.
- **Hoisting** — funksiya deklaratsiyasi butun tanasi bilan birga xotiraning yuqorisiga "ko'chiriladi". Shu sababli uni e'lon qilishdan **oldin ham chaqirish mumkin**:

```javascript
salomlash(); // ✅ Ishlaydi — "Salom!"

function salomlash() {
  console.log("Salom!");
}
```

⚠️ **Diqqat:** Function Expression va Arrow Function'lar hoisting qilinmaydi (faqat `var`dagi o'zgaruvchi nomi hoisting bo'ladi, qiymati emas).

- Funksiya deklaratsiyasi blok ichida (`if`, `for`) ishlatilsa, strict mode'da xatti-harakati brauzerlarga qarab farq qilishi mumkin — shuning uchun **blok ichida function declaration ishlatishdan saqlaning**, buning o'rniga function expression ishlating.

---

## 📝 2. Function Expression (Funksiya ifodasi)

```javascript
const salomBer = function (ism) {
  return `Salom, ${ism}!`;
};

console.log(salomBer("Vali")); // Salom, Vali!
```

### 🔑 Asosiy xususiyatlari:

- Funksiya bir o'zgaruvchiga **qiymat sifatida** biriktiriladi.
- **Hoisting qilinmaydi** — faqat `let`/`const`/`var` o'zgaruvchisi hoisting bo'ladi, lekin qiymat (funksiya) yo'q:

```javascript
console.log(salom); // ❌ ReferenceError (let/const) yoki undefined (var)
const salom = function () {
  console.log("Salom!");
};
```

- **Named Function Expression** — funksiyaga ichki nom berish mumkin, bu nom faqat funksiya ichida (rekursiya uchun) ko'rinadi:

```javascript
const faktorial = function fakt(n) {
  return n <= 1 ? 1 : n * fakt(n - 1); // fakt faqat shu yerda ishlaydi
};
console.log(faktorial(5)); // 120
console.log(typeof fakt); // ❌ ReferenceError — tashqarida ko'rinmaydi
```

---

## 🏹 3. Arrow Functions (ES6+)

```javascript
const qoshish = (a, b) => a + b;
console.log(qoshish(2, 3)); // 5
```

### 🔑 Sintaksis variantlari:

```javascript
// Parametrsiz
const salom = () => console.log("Salom!");

// Bitta parametr — qavs shart emas
const kvadrat = (x) => x * x;

// Bir nechta parametr — qavs majburiy
const qoshish = (a, b) => a + b;

// Ko'p qatorli tana — {} va return kerak
const koshish2 = (a, b) => {
  const natija = a + b;
  return natija;
};

// Obyekt qaytarish — qavs ichiga olinadi (aks holda {} blok deb tushuniladi)
const yaratObyekt = (ism, yosh) => ({ ism, yosh });
```

### 🔑 Arrow Function'ning oddiy funksiyadan farqlari (juda muhim!):

#### 1) `this` — leksik bog'lanish

Arrow function o'zining `this`ini yaratmaydi, balki **o'rab turgan (tashqi) kontekstdan** `this`ni meros qilib oladi:

```javascript
const obyekt = {
  ism: "Elmurod",
  oddiyFunksiya: function () {
    console.log(this.ism); // "Elmurod" — this obyektga ishora qiladi
  },
  arrowFunksiya: () => {
    console.log(this.ism); // undefined — this tashqi (global) kontekstdan olinadi
  },
};

obyekt.oddiyFunksiya(); // Elmurod
obyekt.arrowFunksiya(); // undefined
```

**Amaliy foydasi** — callback ichida `this`ni saqlab qolish uchun ideal:

```javascript
class Timer {
  constructor() {
    this.soniya = 0;
  }
  start() {
    // Oddiy function bo'lsa, setInterval ichida this — window/undefined bo'lardi
    setInterval(() => {
      this.soniya++;
      console.log(this.soniya);
    }, 1000);
  }
}
```

#### 2) `arguments` obyekti yo'q

```javascript
function oddiy() {
  console.log(arguments); // [1, 2, 3] — ishlaydi
}
oddiy(1, 2, 3);

const arrow = () => {
  console.log(arguments); // ❌ ReferenceError
};
```

O'rniga **rest parameters** ishlatiladi: `(...args) => {...}`

#### 3) `new` kalit so'zi bilan chaqirib bo'lmaydi

Arrow function **konstruktor emas** — `prototype` xususiyatiga ega emas:

```javascript
const Odam = (ism) => {
  this.ism = ism;
};
new Odam("Ali"); // ❌ TypeError: Odam is not a constructor
```

#### 4) `bind`, `call`, `apply` orqali `this`ni o'zgartirib bo'lmaydi

#### 5) `yield` ishlatib bo'lmaydi (generator bo'la olmaydi)

---

## 📤 4. Return Values (Qaytariladigan qiymatlar)

### 🔹 Implicit return (Arrow function'da yashirin qaytarish)

Agar arrow function'da `{}` bo'lmasa, ifoda natijasi avtomatik qaytariladi:

```javascript
const kub = (x) => x ** 3; // return so'zisiz ham qaytaradi
console.log(kub(3)); // 27
```

### 🔹 Explicit return (Ochiq/aniq qaytarish)

`{}` ishlatilganda `return` kalit so'zi **majburiy**, aks holda `undefined` qaytadi:

```javascript
const kub = (x) => {
  x ** 3;
}; // ❌ undefined qaytaradi (return yo'q!)
const kub2 = (x) => {
  return x ** 3;
}; // ✅ 27 qaytaradi
```

### 🔹 `return`siz funksiyalar — `undefined` qaytaradi

```javascript
function salomAyt() {
  console.log("Salom!");
  // return yo'q
}

const natija = salomAyt(); // "Salom!" konsolga chiqadi
console.log(natija); // undefined
```

### 🔹 `return` funksiya ishlashini darhol to'xtatadi

```javascript
function tekshir(son) {
  if (son < 0) {
    return "Manfiy son!"; // shu yerda funksiya to'xtaydi
  }
  return "Musbat yoki nol";
}
```

⚠️ **ASI (Automatic Semicolon Insertion) xatosi:**

```javascript
function notogri() {
  return; // ❌ bu yerga avtomatik ";" qo'yiladi!
  {
    ism: "Ali";
  }
}
console.log(notogri()); // undefined — xato natija!

// To'g'ri yozish:
function togri() {
  return {
    ism: "Ali",
  };
}
```

---

## 📞 5. Function Parameters (Parametrlar)

### 🔹 Required parameters (Majburiy parametrlar)

```javascript
function qoshish(a, b) {
  return a + b;
}
qoshish(5); // NaN — b berilmagani uchun undefined bo'ladi, 5 + undefined = NaN
```

JavaScript'da parametrlar sonini moslashtirish **majburiy emas** — ortiqcha argumentlar e'tiborga olinmaydi, yetishmasa `undefined` bo'ladi.

### 🔹 Default parameters (ES6+)

```javascript
function salomBer(ism = "Mehmon", til = "uz") {
  if (til === "uz") return `Salom, ${ism}!`;
  return `Hello, ${ism}!`;
}

salomBer(); // Salom, Mehmon!
salomBer("Ali"); // Salom, Ali!
salomBer("Ali", "en"); // Hello, Ali!
```

Default qiymat **oldingi parametrlarga bog'liq** bo'lishi ham mumkin:

```javascript
function hisobla(narx, chegirma = 0, yakuniyNarx = narx - chegirma) {
  return yakuniyNarx;
}
console.log(hisobla(100, 20)); // 80
```

⚠️ Default qiymat faqat argument `undefined` bo'lganda ishlaydi, `null` bo'lsa ishlamaydi:

```javascript
function test(x = 10) {
  console.log(x);
}
test(undefined); // 10
test(null); // null
```

### 🔹 Rest parameters `...args` (ES6+)

Noma'lum sondagi argumentlarni **massiv** shaklida yig'ib oladi:

```javascript
function jamla(...sonlar) {
  return sonlar.reduce((jami, son) => jami + son, 0);
}
console.log(jamla(1, 2, 3, 4)); // 10
```

**Qoidalar:**

- Rest parameter faqat **oxirgi parametr** bo'lishi kerak:

```javascript
function notogri(a, ...rest, b) {} // ❌ SyntaxError
function togri(a, b, ...rest) {}   // ✅
```

- Bir funksiyada faqat **bitta** rest parameter bo'lishi mumkin.
- Boshqa parametrlar bilan birga ishlatilishi mumkin:

```javascript
function tanishtir(ism, ...hobbilar) {
  console.log(`${ism} sevimli mashg'ulotlari: ${hobbilar.join(", ")}`);
}
tanishtir("Elmurod", "dasturlash", "futbol", "kitob");
// Elmurod sevimli mashg'ulotlari: dasturlash, futbol, kitob
```

`arguments`dan farqi: rest parameter — **haqiqiy massiv** (barcha massiv metodlari ishlaydi: `.map()`, `.filter()` va h.k.), `arguments` esa faqat massivsimon obyekt.

### 🔹 Parameter destructuring (Parametrlarni yoyish)

**Obyekt destructuring:**

```javascript
function foydalanuvchiChiqar({ ism, yosh, shahar = "Buxoro" }) {
  console.log(`${ism}, ${yosh} yosh, ${shahar}`);
}
foydalanuvchiChiqar({ ism: "Ali", yosh: 25 });
// Ali, 25 yosh, Buxoro
```

**Massiv destructuring:**

```javascript
function koordinata([x, y, z = 0]) {
  console.log(`x:${x}, y:${y}, z:${z}`);
}
koordinata([10, 20]); // x:10, y:20, z:0
```

**Amaliy foyda** — nomlangan parametrlar (named arguments) effektini beradi, tartib muhim emas:

```javascript
function yaratElement({ tag, matn, klass }) {
  const el = document.createElement(tag);
  el.textContent = matn;
  el.className = klass;
  return el;
}
yaratElement({ matn: "Salom", tag: "div", klass: "box" }); // tartib muhim emas
```

---

## 🌐 6. First-Class Functions (Birinchi darajali funksiyalar)

JavaScript'da funksiyalar — **obyekt** hisoblanadi, shuning uchun ular:

### 1) O'zgaruvchiga biriktirilishi mumkin

```javascript
const mening = function () {
  return "Salom";
};
```

### 2) Argument sifatida uzatilishi mumkin (Callback)

```javascript
function ishlaGa(son, callback) {
  return callback(son);
}

function ikkiBaravar(x) {
  return x * 2;
}

console.log(ishlaGa(5, ikkiBaravar)); // 10

// Yoki anonim/arrow bilan:
console.log(ishlaGa(5, (x) => x * 2)); // 10

// Real hayotdagi misol:
[1, 2, 3].forEach((son) => console.log(son * son)); // 1, 4, 9
setTimeout(() => console.log("3 soniyadan keyin"), 3000);
```

### 3) Funksiyadan qaytarilishi mumkin (Higher-Order Function)

**Higher-order function** — boshqa funksiyani argument sifatida oladigan **yoki** funksiya qaytaradigan funksiya:

```javascript
function koPaytiruvchiYarat(koeffitsient) {
  return function (son) {
    return son * koeffitsient;
  };
}

const ikkigaKopaytir = koPaytiruvchiYarat(2);
const ochtagaKopaytir = koPaytiruvchiYarat(8);

console.log(ikkigaKopaytir(5)); // 10
console.log(ochtagaKopaytir(5)); // 40
```

**Arrow function bilan qisqartirilgan (currying) shakli:**

```javascript
const koPaytiruvchiYarat = (koeffitsient) => (son) => son * koeffitsient;
```

### 4) Obyekt xususiyati sifatida saqlanishi mumkin

```javascript
const kalkulyator = {
  qoshish: (a, b) => a + b,
  ayirish: (a, b) => a - b,
};
```

### 5) Massivda saqlanishi mumkin

```javascript
const amallar = [(x) => x + 1, (x) => x * 2, (x) => x ** 2];
amallar.forEach((f) => console.log(f(5))); // 6, 10, 25
```

---

## 🔄 7. Recursion (Rekursiya)

Funksiya **o'zini o'zi chaqirishi** — rekursiya deyiladi. Har bir rekursiv funksiyada **2 ta muhim qism** bo'lishi shart:

1. **Base case (asosiy holat)** — rekursiya to'xtaydigan shart.
2. **Recursive case** — funksiya o'zini kichikroq masala bilan qayta chaqiradi.

```javascript
function faktorial(n) {
  if (n <= 1) return 1; // 🛑 base case
  return n * faktorial(n - 1); // 🔄 recursive case
}
console.log(faktorial(5)); // 120 (5*4*3*2*1)
```

**Fibonachchi qatori misolida:**

```javascript
function fibonachchi(n) {
  if (n <= 1) return n; // base case
  return fibonachchi(n - 1) + fibonachchi(n - 2);
}
console.log(fibonachchi(7)); // 13
```

**Ichma-ich massivni "tekislash" (flatten) — amaliy misol:**

```javascript
function tekislash(massiv) {
  let natija = [];
  for (const el of massiv) {
    if (Array.isArray(el)) {
      natija = natija.concat(tekislash(el)); // rekursiya
    } else {
      natija.push(el);
    }
  }
  return natija;
}
console.log(tekislash([1, [2, 3, [4, 5, [6]]]])); // [1,2,3,4,5,6]
```

### ⚠️ Rekursiyaning xavfi — Stack Overflow

```javascript
function cheksiz(n) {
  return cheksiz(n + 1); // base case yo'q!
}
cheksiz(1); // ❌ RangeError: Maximum call stack size exceeded
```

### 💡 Tail Call Optimization (TCO)

Nazariy jihatdan, agar `return` so'zidan keyin **darhol** rekursiv chaqiruv bo'lsa (boshqa amal qilinmasa), bu "tail call" deyiladi va ba'zi tillar buni optimallashtiradi. Afsuski, **JavaScript dvigatellarining aksariyati (V8/Chrome/Node) TCO'ni qo'llab-quvvatlamaydi**, shuning uchun katta `n` uchun rekursiya o'rniga **loop** yoki **iterativ yechim** afzalroq.

---

## ⚡ 8. IIFE — Immediately Invoked Function Expression

Funksiya e'lon qilinishi bilanoq **darhol chaqiriladigan** funksiya:

```javascript
(function () {
  console.log("Men darhol ishga tushdim!");
})();

// Arrow function bilan:
(() => {
  console.log("Men ham darhol ishladim!");
})();

// Qiymat bilan qaytariladigan IIFE:
const natija = (function () {
  return 5 + 5;
})();
console.log(natija); // 10
```

### 🔑 IIFE nima uchun kerak?

**1) Global scope'ni ifloslantirmaslik (module pattern):**

```javascript
const hisoblagichModul = (function () {
  let hisob = 0; // 🔒 tashqaridan ko'rinmaydi (private)

  return {
    ortir: () => ++hisob,
    olish: () => hisob,
  };
})();

hisoblagichModul.ortir();
hisoblagichModul.ortir();
console.log(hisoblagichModul.olish()); // 2
console.log(hisoblagichModul.hisob); // undefined — tashqaridan yopiq
```

**2) Bir martalik initsializatsiya (masalan, konfiguratsiya sozlash):**

```javascript
const config = (function () {
  const muhit = "production";
  return { muhit, versiya: "1.0.0" };
})();
```

**3) `var` bilan bog'liq eski muammolarni (loop + closure) hal qilish:**

```javascript
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log(j), 100); // 0, 1, 2 — to'g'ri natija
  })(i);
}
```

---

## 📦 9. Function Scope and Closures (Funksiya doirasi va Yopiqlar)

### 🔹 Function Scope

`var` bilan e'lon qilingan o'zgaruvchi faqat **funksiya ichida** ko'rinadi (block scope emas):

```javascript
function test() {
  if (true) {
    var x = 10; // function-scoped
    let y = 20; // block-scoped
  }
  console.log(x); // 10 — ko'rinadi
  console.log(y); // ❌ ReferenceError — ko'rinmaydi
}
```

### 🔹 Closure (Yopiq/Yopilma) nima?

**Closure** — bu funksiyaning o'zi yaratilgan **leksik muhitni (lexical environment)** "eslab qolishi" va tashqi funksiya bajarilib bo'lgandan keyin ham o'sha o'zgaruvchilarga kirisha olishi.

```javascript
function tashqiFunksiya() {
  let hisob = 0; // bu o'zgaruvchi "yopiladi"

  function ichkiFunksiya() {
    hisob++;
    return hisob;
  }

  return ichkiFunksiya;
}

const hisoblagich = tashqiFunksiya(); // tashqiFunksiya() ishlab bo'ldi, lekin...
console.log(hisoblagich()); // 1
console.log(hisoblagich()); // 2 — hisob o'zgaruvchisi "eslab qolingan"!
console.log(hisoblagich()); // 3
```

`tashqiFunksiya()` allaqachon bajarilib bo'lgan bo'lsa-da, `ichkiFunksiya` hali ham `hisob` o'zgaruvchisiga kirisha oladi — chunki u closure orqali shu o'zgaruvchini "ushlab" qolgan.

### 🔑 Closure'ning amaliy qo'llanilishi:

**1) Xususiy (private) o'zgaruvchilar yaratish:**

```javascript
function bankHisobiYarat(boshlangichBalans) {
  let balans = boshlangichBalans; // tashqaridan to'g'ridan-to'g'ri o'zgartirib bo'lmaydi

  return {
    balansniKor: () => balans,
    pulSol: (miqdor) => (balans += miqdor),
    pulOl: (miqdor) => {
      if (miqdor > balans) {
        console.log("Balans yetarli emas!");
        return;
      }
      balans -= miqdor;
    },
  };
}

const meningHisobim = bankHisobiYarat(1000);
meningHisobim.pulSol(500);
meningHisobim.pulOl(200);
console.log(meningHisobim.balansniKor()); // 1300
console.log(meningHisobim.balans); // undefined — to'g'ridan-to'g'ri kirish yo'q
```

**2) Memoization (natijani keshlash orqali tezlashtirish):**

```javascript
function memoize(fn) {
  const kesh = {}; // closure orqali "eslab qolinadi"

  return function (n) {
    if (n in kesh) {
      console.log("Keshdan olindi:", n);
      return kesh[n];
    }
    const natija = fn(n);
    kesh[n] = natija;
    return natija;
  };
}

function sekinKvadrat(n) {
  for (let i = 0; i < 1e8; i++) {} // sun'iy sekinlik
  return n * n;
}

const tezKvadrat = memoize(sekinKvadrat);
console.log(tezKvadrat(5)); // hisoblanadi
console.log(tezKvadrat(5)); // "Keshdan olindi" — darhol qaytadi
```

**3) Currying (funksiyani bosqichma-bosqich chaqirish):**

```javascript
function qoshish(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(qoshish(1)(2)(3)); // 6

// Arrow bilan:
const qoshish2 = (a) => (b) => (c) => a + b + c;
```

**4) Loop ichida closure muammosi (juda ko'p uchraydigan xato):**

```javascript
// ❌ NOTO'G'RI — var function-scoped bo'lgani uchun
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100); // 4, 4, 4 chiqadi!
}

// ✅ TO'G'RI — let har bir iteratsiyada yangi scope yaratadi
for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100); // 1, 2, 3 chiqadi
}
```

---

## 🎁 Qo'shimcha (Senior darajasida bilish shart bo'lgan) mavzular

### 🔸 `call`, `apply`, `bind` — `this`ni boshqarish

```javascript
const odam1 = { ism: "Ali" };
const odam2 = { ism: "Vali" };

function salomla(shahar, mamlakat) {
  console.log(`Salom, men ${this.ism}, ${shahar}, ${mamlakat}dan`);
}

salomla.call(odam1, "Buxoro", "O'zbekiston"); // this=odam1, argumentlar bittalab
salomla.apply(odam2, ["Toshkent", "O'zbekiston"]); // this=odam2, argumentlar massivda

const aliUchunSalom = salomla.bind(odam1); // yangi funksiya qaytaradi, darhol chaqirmaydi
aliUchunSalom("Xorazm", "O'zbekiston");
```

| Metod   | Chaqiradi darhol?            | Argumentlar          |
| ------- | ---------------------------- | -------------------- |
| `call`  | ✅ Ha                        | bittalab (`a, b, c`) |
| `apply` | ✅ Ha                        | massiv (`[a, b, c]`) |
| `bind`  | ❌ Yo'q (yangi fn qaytaradi) | bittalab             |

### 🔸 Pure Functions (Sof funksiyalar)

Funksional dasturlashning asosi — **bir xil argumentlar uchun doim bir xil natija** qaytaradi va **tashqi holatga (side effect) ta'sir qilmaydi**:

```javascript
// ✅ Pure — tashqarisiga ta'sir qilmaydi
function qoshish(a, b) {
  return a + b;
}

// ❌ Impure — tashqi o'zgaruvchini o'zgartiradi (side effect)
let jami = 0;
function qoshishImpure(a) {
  jami += a;
  return jami;
}
```

### 🔸 Generator Functions (`function*`)

Bajarilishni "to'xtatib-davom ettirish" imkonini beradi:

```javascript
function* sonlarGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = sonlarGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done); // true
```

### 🔸 `arguments` obyekti (faqat oddiy funksiyalarda)

```javascript
function test() {
  console.log(arguments.length); // nechta argument berilgani
  console.log(arguments[0]); // birinchi argument
  console.log(Array.from(arguments)); // haqiqiy massivga aylantirish
}
test(1, 2, 3); // 3, 1, [1,2,3]
```

### 🔸 `Function.length` va `Function.name`

```javascript
function ornek(a, b, c = 1) {}
console.log(ornek.length); // 2 — default va rest parametrlar hisobga olinmaydi
console.log(ornek.name); // "ornek"

const arrowFn = () => {};
console.log(arrowFn.name); // "arrowFn" — o'zgaruvchi nomidan olinadi
```

### 🔸 `new Function()` — Function Constructor (kamdan-kam ishlatiladi)

```javascript
const qoshish = new Function("a", "b", "return a + b");
console.log(qoshish(2, 3)); // 5
// ⚠️ eval() kabi xavfli — foydalanuvchidan kelgan matnni bajarish xavfsizlik muammosi tug'diradi
```

---

## 📊 Umumiy taqqoslash jadvali

| Xususiyat               | Function Declaration   | Function Expression | Arrow Function              |
| ----------------------- | ---------------------- | ------------------- | --------------------------- |
| Hoisting                | ✅ To'liq (tana bilan) | ❌ Yo'q             | ❌ Yo'q                     |
| O'z `this`i             | ✅ Bor                 | ✅ Bor              | ❌ Yo'q (tashqaridan oladi) |
| `arguments` obyekti     | ✅ Bor                 | ✅ Bor              | ❌ Yo'q                     |
| `new` bilan chaqirish   | ✅ Mumkin              | ✅ Mumkin           | ❌ Mumkin emas              |
| Implicit return         | ❌ Yo'q                | ❌ Yo'q             | ✅ Bor (`{}`siz)            |
| Metod sifatida ideal    | ✅ Ha                  | ✅ Ha               | ❌ Yo'q (`this` muammosi)   |
| Callback sifatida ideal | O'rtacha               | O'rtacha            | ✅ Juda qulay               |

---

## ✅ Xulosa — Qachon nimani ishlatish kerak?

- **Function Declaration** — global yordamchi funksiyalar, hoisting kerak bo'lganda.
- **Function Expression** — shartli yaratiladigan funksiyalar, named recursion kerak bo'lsa.
- **Arrow Function** — callback'lar (`map`, `filter`, `setTimeout`), `this`ni saqlab qolish kerak bo'lganda, qisqa bir qatorli funksiyalar.
- **Object metodlari** uchun arrow emas, **oddiy function** ishlating (`this` muammosi tufayli).
- **Closure** — private state, module pattern, memoization, event handler'larda holat saqlash uchun.
- **Recursion** — daraxtsimon/ichma-ich strukturalar (DOM, JSON, fayl tizimi) bilan ishlashda.
- **IIFE** — zamonaviy loyihalarda ES6 modullari (`import`/`export`) buni asosan almashtirgan, lekin legacy kodda va bir martalik initsializatsiyada hali ham uchraydi.
