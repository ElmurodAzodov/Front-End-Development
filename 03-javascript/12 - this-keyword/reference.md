# **'this' keyword**

`this` — JavaScript'dagi eng ko'p chalkashtiradigan tushunchalardan biri, chunki uning qiymati **funksiya qayerda yozilganiga emas, balki QANDAY CHAQIRILGANIGA** bog'liq (arrow function bundan mustasno). Quyida `this`ning barcha kontekstlarda o'zini qanday tutishi to'liq tushuntirilgan.

---

## 🔑 Asosiy qoida

> **`this`ning qiymati funksiya CHAQIRILGAN PAYTDA aniqlanadi, funksiya E'LON QILINGAN paytda emas.**

Bu qoidani yodda tutish — barcha keyingi bo'limlarni tushunish uchun kalit hisoblanadi.

---

## 🌍 1. Global Context (Global kontekst)

Funksiyadan tashqarida, eng yuqori (global) darajada `this` — muhitga qarab farq qiladi:

### 🔹 Brauzerda — `window`

```javascript
console.log(this); // Window {...} — brauzerda global obyekt

console.log(this === window); // true
```

### 🔹 Node.js'da — `module.exports` (bo'sh obyekt)

```javascript
// Node.js muhitida (CommonJS modulida)
console.log(this); // {} — module.exports'ga ishora qiladi, window emas!
```

### 🔹 Universal yechim — `globalThis` (ES2020+)

Muhitdan qat'i nazar (brauzer, Node.js, Web Worker) bir xil ishlaydigan global obyektga murojaat qilish uchun ishlatiladi:

```javascript
console.log(globalThis);
// Brauzerda: Window
// Node.js'da: global obyekt
// Web Worker'da: WorkerGlobalScope

// Muhitni tekshirmasdan universal kod yozish mumkin:
if (typeof globalThis.fetch === "function") {
  console.log("fetch mavjud");
}
```

### ⚠️ Strict Mode'dagi farq

```javascript
"use strict";
function test() {
  console.log(this); // undefined — strict mode'da global this yo'q
}
test();

function testOddiy() {
  console.log(this); // Window (yoki global obyekt) — strict mode bo'lmasa
}
testOddiy();
```

---

## 📝 2. Function Context (Funksiya konteksti)

### 🔹 Regular Functions — `this` chaqiruvchiga bog'liq (dynamic)

Oddiy funksiya ichidagi `this` — funksiya **qanday chaqirilganiga** qarab dinamik ravishda o'zgaradi:

```javascript
function chiqar() {
  console.log(this);
}

chiqar(); // Window (yoki strict mode'da undefined) — hech qanday obyektsiz chaqirilyapti

const obyekt = { chiqar };
obyekt.chiqar(); // {chiqar: f} — obyekt orqali chaqirilgani uchun this = obyekt
```

**Muammoli holat — funksiyani o'zgaruvchiga "ajratib olish":**

```javascript
const foydalanuvchi = {
  ism: "Ali",
  salomla() {
    console.log(`Salom, ${this.ism}`);
  },
};

foydalanuvchi.salomla(); // "Salom, Ali" — to'g'ri

const ajratilganFunksiya = foydalanuvchi.salomla;
ajratilganFunksiya(); // "Salom, undefined" — this endi obyektga bog'liq emas!
```

Sabab: `ajratilganFunksiya()` **hech qanday obyekt orqali emas**, to'g'ridan-to'g'ri chaqirilyapti — shuning uchun `this` global obyekt (yoki strict mode'da `undefined`) bo'lib qoladi.

### 🏹 Arrow Functions — Lexical `this`

Arrow function **o'zining `this`ini yaratmaydi** — u yaratilgan (yozilgan) joydagi **tashqi (o'rab turgan) scope'ning `this`ini** meros qiladi. Bu — **lexical this** deb ataladi.

```javascript
const obyekt = {
  ism: "Elmurod",
  oddiyMetod: function () {
    console.log(this.ism); // "Elmurod" — this = obyekt
  },
  arrowMetod: () => {
    console.log(this.ism); // undefined — this obyektdan emas, tashqi (global) scope'dan olinadi
  },
};

obyekt.oddiyMetod(); // Elmurod
obyekt.arrowMetod(); // undefined
```

**Arrow function'ning eng katta afzalligi — ichma-ich funksiyalarda `this`ni "yo'qotmaslik":**

```javascript
const timer = {
  soniya: 0,
  start() {
    // ❌ Oddiy function bilan — setInterval ichida 'this' o'zgaradi
    setInterval(function () {
      this.soniya++; // ❌ Xato — this endi timer obyektiga ishora qilmaydi
      console.log(this.soniya); // NaN yoki xato
    }, 1000);
  },
};
```

```javascript
const timer2 = {
  soniya: 0,
  start() {
    // ✅ Arrow function — tashqi 'this' (ya'ni timer2)ni meros qiladi
    setInterval(() => {
      this.soniya++;
      console.log(this.soniya); // 1, 2, 3...
    }, 1000);
  },
};
timer2.start();
```

### 📊 Muhim eslatma

Arrow function'ning `this`i **`call`, `apply`, `bind` bilan HAM o'zgartirib bo'lmaydi** — chunki uning `this`i "qattiq" leksik jihatdan belgilangan:

```javascript
const arrowFn = () => console.log(this);
arrowFn.call({ ism: "Test" }); // this baribir o'zgarmaydi — global/undefined qoladi
```

---

## 🏗️ 3. Method Context (Metod konteksti)

Funksiya **obyektning metodi sifatida** chaqirilganda, `this` — **o'sha obyektga** ishora qiladi:

```javascript
const mashina = {
  marka: "Toyota",
  model: "Camry",
  malumot() {
    return `${this.marka} ${this.model}`;
  },
};

console.log(mashina.malumot()); // "Toyota Camry" — this = mashina
```

### 🔑 `this` chaqiruv nuqtasiga (call-site) bog'liq — obyektga emas

```javascript
const ota = {
  ism: "Ota obyekt",
  bola: {
    ism: "Bola obyekt",
    chiqar() {
      console.log(this.ism); // "Bola obyekt" — chunki bevosita 'bola' orqali chaqirilyapti
    },
  },
};

ota.bola.chiqar(); // "Bola obyekt" — eng yaqin (bevosita chaqirgan) obyekt this bo'ladi
```

### 🔑 Ichma-ich (nested) oddiy funksiyalarda `this` yo'qoladi

```javascript
const foydalanuvchi = {
  ism: "Vali",
  doslar: ["Ali", "Hasan"],
  dostlarniChiqar() {
    console.log(this.ism); // "Vali" — bu yerda this to'g'ri

    this.doslar.forEach(function (dost) {
      // ❌ Bu yerda 'this' endi foydalanuvchi obyektiga ishora qilmaydi!
      console.log(`${this.ism}ning dosti: ${dost}`); // "undefinedning dosti: Ali"
    });
  },
};
```

**Yechim 1 — Arrow function ishlatish:**

```javascript
const foydalanuvchi2 = {
  ism: "Vali",
  doslar: ["Ali", "Hasan"],
  dostlarniChiqar() {
    this.doslar.forEach((dost) => {
      console.log(`${this.ism}ning dosti: ${dost}`); // ✅ "Valining dosti: Ali"
    });
  },
};
```

**Yechim 2 — `this`ni o'zgaruvchiga saqlab qo'yish (eski, pre-ES6 usul):**

```javascript
const foydalanuvchi3 = {
  ism: "Vali",
  doslar: ["Ali", "Hasan"],
  dostlarniChiqar() {
    const ozim = this; // 'this'ni saqlab qolamiz
    this.doslar.forEach(function (dost) {
      console.log(`${ozim.ism}ning dosti: ${dost}`); // ✅ ishlaydi
    });
  },
};
```

---

## 🎁 4. Constructor Context (Konstruktor konteksti)

Funksiya `new` kalit so'zi bilan chaqirilganda, `this` — **yangi yaratilayotgan obyektga** ishora qiladi.

### 🔹 `new` nima qiladi (4 ta bosqich):

```javascript
function Odam(ism, yosh) {
  // 1️⃣ Yangi bo'sh obyekt yaratiladi: this = {}
  // 2️⃣ Bu obyekt Odam.prototype'ga bog'lanadi
  this.ism = ism; // 3️⃣ this'ga xususiyatlar qo'shiladi
  this.yosh = yosh;
  // 4️⃣ 'this' avtomatik qaytariladi (agar boshqa obyekt qaytarilmasa)
}

const odam1 = new Odam("Ali", 25);
console.log(odam1.ism); // "Ali"
console.log(odam1.yosh); // 25
```

### 🔹 `class` bilan ham xuddi shunday ishlaydi

```javascript
class Mashina {
  constructor(marka, model) {
    this.marka = marka; // this = yaratilayotgan yangi instance
    this.model = model;
  }

  malumot() {
    return `${this.marka} ${this.model}`;
  }
}

const mening = new Mashina("Chevrolet", "Malibu");
console.log(mening.malumot()); // "Chevrolet Malibu"
```

### ⚠️ `new`siz chaqirilsa — xato yoki kutilmagan natija

```javascript
function Odam(ism) {
  this.ism = ism;
}

const notogri = Odam("Ali"); // 'new'siz chaqirildi!
console.log(notogri); // undefined — funksiya hech narsa qaytarmadi
console.log(window.ism); // "Ali" — strict mode bo'lmasa, this = window bo'lib, global ifloslanadi!

// class bilan bu xato oldindan oldi olinadi:
class OdamClass {
  constructor(ism) {
    this.ism = ism;
  }
}
OdamClass("Ali"); // ❌ TypeError: Class constructor cannot be invoked without 'new'
```

---

## 🔧 5. Explicit Binding — `call()`, `apply()`, `bind()`

Bu uch metod `this`ni **qo'lda, aniq belgilash** imkonini beradi (`explicit binding` deb ataladi).

```javascript
function salomla(shahar) {
  console.log(`Salom, men ${this.ism}, ${shahar}dan`);
}

const odam1 = { ism: "Ali" };
const odam2 = { ism: "Vali" };

// call — darhol chaqiradi, argumentlar bittalab
salomla.call(odam1, "Buxoro"); // Salom, men Ali, Buxorodan

// apply — darhol chaqiradi, argumentlar massiv shaklida
salomla.apply(odam2, ["Toshkent"]); // Salom, men Vali, Toshkentdan

// bind — darhol chaqirmaydi, yangi 'bog'langan' funksiya qaytaradi
const aliUchunSalom = salomla.bind(odam1);
aliUchunSalom("Xorazm"); // Salom, men Ali, Xorazmdan
```

### 🔑 `bind()` bilan bog'langan `this`ni **hech narsa o'zgartira olmaydi** (Hard Binding)

```javascript
const bogʻlangan = salomla.bind(odam1);

bogʻlangan.call(odam2, "Samarqand"); // "Salom, men Ali, Samarqanddan"
// ⚠️ Diqqat: odam2 berilsa ham, bind orqali 'qattiq bog'langan' this (odam1) o'zgarmaydi!
```

📊 To'liq taqqoslash uchun oldingi "Advanced Function Concepts" bo'limidagi jadvalga qarang.

---

## 📦 6. Event Handler Context (Hodisa ishlovchi konteksti)

DOM event handler'larida `this` — odatda **hodisa biriktirilgan HTML element**ga ishora qiladi (agar oddiy `function` ishlatilsa).

### 🔹 Oddiy funksiya bilan — `this` = element

```javascript
const tugma = document.querySelector("#mening-tugmam");

tugma.addEventListener("click", function () {
  console.log(this); // <button id="mening-tugmam">...</button> — bosilgan element
  this.style.backgroundColor = "green"; // elementni to'g'ridan-to'g'ri o'zgartirish mumkin
});
```

### 🔹 Arrow Function bilan — `this` lexical (elementga bog'lanmaydi!)

```javascript
tugma.addEventListener("click", () => {
  console.log(this); // ❌ element emas — tashqi (odatda global yoki module) scope'dan olinadi
});
```

⚠️ **Muhim:** Ko'p dasturchilar event handler'da arrow function ishlatib, keyin `this.style...` deb yozib, **xato qilishadi** — chunki arrow function'da `this` element emas!

### 🔹 HTML `onclick=""` attributida — `this` = element

```html
<button onclick="console.log(this)">Bos</button>
<!-- this — <button> elementiga ishora qiladi -->
```

### 🔑 Amaliy misol — event handler ichida class metodini chaqirish

```javascript
class RangTanlagich {
  constructor(elementId) {
    this.element = document.querySelector(elementId);
    // .bind(this) shart — aks holda handleClick ichida this = tugma bo'lib qoladi
    this.element.addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log(this); // ✅ RangTanlagich instance'i — bind tufayli
    this.element.style.color = "blue";
  }
}
```

Yoki **class field + arrow function** bilan `bind()`siz yechim:

```javascript
class RangTanlagich2 {
  constructor(elementId) {
    this.element = document.querySelector(elementId);
    this.element.addEventListener("click", this.handleClick); // bind shart emas!
  }

  // Arrow function class field — avtomatik ravishda 'this'ni instance'ga bog'laydi
  handleClick = () => {
    console.log(this); // ✅ RangTanlagich2 instance'i
    this.element.style.color = "blue";
  };
}
```

---

## ⚠️ 7. Common Pitfalls (Ko'p uchraydigan xatolar)

### 🔸 Xato 1 — Callback ichida `this`ni yo'qotish

```javascript
class Hisoblagich {
  constructor() {
    this.hisob = 0;
  }

  ortir() {
    this.hisob++;
    console.log(this.hisob);
  }

  boshla() {
    // ❌ NOTO'G'RI — oddiy funksiya sifatida uzatilganda 'this' yo'qoladi
    document.querySelector("button").addEventListener("click", this.ortir);
    // Bosilganda: TypeError — this.hisob undefined, chunki this = <button> elementi
  }
}
```

**Yechim variantlari:**

```javascript
class Hisoblagich2 {
  constructor() {
    this.hisob = 0;
  }

  ortir() {
    this.hisob++;
    console.log(this.hisob);
  }

  boshla() {
    // ✅ Yechim 1: bind() ishlatish
    document
      .querySelector("button")
      .addEventListener("click", this.ortir.bind(this));

    // ✅ Yechim 2: arrow function bilan o'rab olish
    document
      .querySelector("button")
      .addEventListener("click", () => this.ortir());
  }
}
```

### 🔸 Xato 2 — `setTimeout`/`setInterval` ichida `this`ning yo'qolishi

```javascript
class Xabarnoma {
  constructor(matn) {
    this.matn = matn;
  }

  korsat() {
    // ❌ NOTO'G'RI — setTimeout ichidagi oddiy function o'z 'this'iga ega
    setTimeout(function () {
      console.log(this.matn); // undefined — this = global obyekt (yoki undefined, strict mode)
    }, 1000);
  }
}
```

```javascript
class Xabarnoma2 {
  constructor(matn) {
    this.matn = matn;
  }

  korsat() {
    // ✅ TO'G'RI — arrow function tashqi (korsat metodining) 'this'ini meros qiladi
    setTimeout(() => {
      console.log(this.matn); // ✅ to'g'ri chiqadi
    }, 1000);
  }
}
```

### 🔸 Xato 3 — Metodni destructuring qilish orqali `this`ni yo'qotish

```javascript
const foydalanuvchi = {
  ism: "Ali",
  salomla() {
    console.log(`Salom, ${this.ism}`);
  },
};

const { salomla } = foydalanuvchi; // metodni "ajratib" olamiz
salomla(); // ❌ "Salom, undefined" — obyektdan uzilgani uchun this yo'qoldi
```

### 🔸 Xato 4 — Massiv metodlarida (`map`, `forEach`) oddiy function ishlatish

```javascript
class MahsulotlarRoyxati {
  constructor() {
    this.chegirma = 10;
  }

  narxlarniHisobla(narxlar) {
    // ❌ NOTO'G'RI
    return narxlar.map(function (narx) {
      return narx - this.chegirma; // ❌ this undefined — TypeError
    });
  }

  narxlarniHisoblaTogri(narxlar) {
    // ✅ TO'G'RI — arrow function tashqi this'ni meros qiladi
    return narxlar.map((narx) => narx - this.chegirma);
  }
}
```

### 🔸 Xato 5 — `this` klass metodida obyekt qayta yaratilganda yo'qoladi

```javascript
class Modal {
  ochish() {
    console.log("Modal ochildi");
  }
}

const oynalar = { modal: new Modal() };
const { modal } = oynalar;
const ochishFunksiyasi = modal.ochish;

ochishFunksiyasi(); // Agar 'this' ishlatilgan bo'lsa, xato beradi — obyektdan uzildi
```

### 📋 Umumiy qoida — xatolarning oldini olish

| Vaziyat                                                           | Tavsiya                                                              |
| ----------------------------------------------------------------- | -------------------------------------------------------------------- |
| Class metodini callback sifatida uzatish                          | `.bind(this)` yoki arrow function bilan o'rash                       |
| `setTimeout`/`setInterval` ichida `this` kerak                    | Arrow function ishlatish                                             |
| Massiv metodlari (`map`, `filter`, `forEach`) ichida `this` kerak | Arrow function ishlatish (yoki 2-argument sifatida `thisArg` berish) |
| Event handler'da elementga emas, class instance'ga `this` kerak   | `.bind(this)` yoki class field arrow function                        |
| Obyekt metodi (oddiy `this` ishlatadigan)                         | Har doim obyekt orqali chaqirish, ajratib olmaslik                   |

**Bonusli yechim — `forEach`ning ikkinchi argumenti (`thisArg`):**

```javascript
class Hisoblagich3 {
  constructor() {
    this.jami = 0;
  }

  qoshish(sonlar) {
    sonlar.forEach(function (son) {
      this.jami += son;
    }, this); // ✅ ikkinchi argument sifatida 'this'ni uzatish
    return this.jami;
  }
}
```

---

## 📊 Umumiy xulosa jadvali — `this` har xil kontekstda

| Kontekst                         | `this` nimaga teng                                   | Misol                                        |
| -------------------------------- | ---------------------------------------------------- | -------------------------------------------- |
| Global (brauzer)                 | `window`                                             | `console.log(this)`                          |
| Global (Node.js)                 | `module.exports` (`{}`)                              | —                                            |
| Global (strict mode)             | `undefined`                                          | `"use strict"`                               |
| Oddiy funksiya (`funksiya()`)    | Global obyekt / `undefined` (strict)                 | Chaqiruvchisiz chaqirilganda                 |
| Obyekt metodi (`obyekt.metod()`) | Metodni chaqirgan obyekt                             | `mashina.malumot()`                          |
| Arrow function                   | Tashqi (leksik) scope'ning `this`i                   | Doim "meros" oladi                           |
| Konstruktor (`new Fn()`)         | Yangi yaratilgan instance                            | `new Odam("Ali")`                            |
| `call`/`apply`                   | Argument sifatida berilgan obyekt                    | `fn.call(obyekt)`                            |
| `bind`                           | "Qattiq" bog'langan obyekt (o'zgarmaydi)             | `fn.bind(obyekt)`                            |
| Event handler (oddiy fn)         | Hodisa biriktirilgan HTML element                    | `addEventListener("click", function(){...})` |
| Event handler (arrow fn)         | Tashqi leksik scope                                  | `this` element emas!                         |
| Class metodi                     | Chaqiruvga bog'liq (obyekt orqali bo'lsa — instance) | Xuddi oddiy metod kabi                       |

---

## ✅ Yakuniy xulosa — `this`ni aniqlash uchun 4 ta savol

`this`ning qiymatini aniqlash uchun quyidagi tartibda o'zingizga savol bering (ustunlik tartibida):

1. **`new` bilan chaqirilganmi?** → `this` = yangi obyekt.
2. **`call`/`apply`/`bind` bilan aniq belgilanganmi?** → `this` = belgilangan obyekt.
3. **Obyektning metodi sifatida chaqirilyaptimi (`obyekt.metod()`)?** → `this` = o'sha obyekt.
4. **Yuqoridagilarning hech biri emasmi?** → `this` = global obyekt (yoki strict mode'da `undefined`).

**Arrow function uchun bu qoidalarning hech biri ishlamaydi** — u har doim yozilgan joydagi tashqi `this`ni "meros" oladi, hech qachon o'zgartirib bo'lmaydi.

💡 **Amaliy tavsiya:** Zamonaviy JavaScript'da callback va event handler'larda **arrow function**ni afzal ko'ring — bu `this`ni yo'qotish bilan bog'liq ko'plab xatolarning oldini oladi. Lekin obyekt metodlarini (`salomla() {...}`) yozganda, **arrow function ishlatmang** — chunki u `this`ni obyektga bog'lay olmaydi.
