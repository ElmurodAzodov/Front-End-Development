# 🔧 JavaScript Functions — To'liq Qo'llanma

Bu hujjat JavaScript'dagi **funksiyalar** mavzusini boshidan oxirigacha, barcha turlari, parametr strukturalari va metodlari bilan birga tushuntiradi.

---

## 📌 1. Funksiya nima?

Funksiya — bu ma'lum bir vazifani bajarish uchun yozilgan, qayta-qayta chaqirilishi mumkin bo'lgan kod bloki.

```javascript
function salom() {
  console.log("Salom, dunyo!");
}

salom(); // Salom, dunyo!
```

**Funksiyalardan foydalanish sabablari:**
- Kodni takrorlamaslik (DRY — Don't Repeat Yourself)
- Kodni bo'laklarga bo'lib, tushunarli qilish
- Qayta ishlatish imkoniyati
- Testlash va debugging osonlashadi

---

## 📌 2. Funksiya E'lon Qilish Turlari

JavaScript'da funksiyalarni bir necha xil usulda yaratish mumkin.

### 2.1 Function Declaration (Funksiya deklaratsiyasi)

```javascript
function yigindi(a, b) {
  return a + b;
}

console.log(yigindi(5, 3)); // 8
```

**Xususiyati:** Hoisting (ko'tarilish) bo'ladi — ya'ni funksiya e'lon qilinishidan oldin ham chaqirilishi mumkin.

```javascript
console.log(kupaytma(2, 4)); // 8 — xato bermaydi

function kupaytma(a, b) {
  return a * b;
}
```

### 2.2 Function Expression (Funksiya ifodasi)

Funksiya o'zgaruvchiga qiymat sifatida beriladi.

```javascript
const ayirish = function (a, b) {
  return a - b;
};

console.log(ayirish(10, 4)); // 6
```

**Xususiyati:** Hoisting bo'lmaydi (faqat o'zgaruvchi hoisting bo'ladi, qiymati emas).

```javascript
console.log(bolish(10, 2)); // ❌ Xato: Cannot access before initialization

const bolish = function (a, b) {
  return a / b;
};
```

### 2.3 Named Function Expression

```javascript
const faktorial = function fakt(n) {
  return n <= 1 ? 1 : n * fakt(n - 1);
};

console.log(faktorial(5)); // 120
```

Bu yerda `fakt` nomi faqat funksiya ichida (rekursiya uchun) ko'rinadi, tashqarida ko'rinmaydi.

### 2.4 Arrow Function (Strelka funksiya) — ES6

```javascript
const yigindi = (a, b) => a + b;
console.log(yigindi(3, 7)); // 10
```

**Turli yozilish shakllari:**

```javascript
// Parametrsiz
const salomAyt = () => console.log("Salom!");

// Bitta parametr — qavs shart emas
const kvadrat = x => x * x;

// Ikkita va undan ko'p parametr — qavs shart
const kupaytir = (a, b) => a * b;

// Bir nechta qatorli tana — {} va return kerak
const ozgartir = (son) => {
  const natija = son * 2;
  return natija;
};

// Obyekt qaytarish — qavs ichiga olinadi
const obyektYarat = (nom, yosh) => ({ ism: nom, yosh: yosh });
```

**Arrow function bilan oddiy funksiya farqlari:**

| Xususiyat | Function Declaration/Expression | Arrow Function |
|---|---|---|
| `this` | O'zining `this`i bor | `this`ni tashqi (lexical) muhitdan oladi |
| `arguments` obyekti | Bor | Yo'q |
| Konstruktor sifatida (`new`) | Ishlatiladi | Ishlatilmaydi (xato beradi) |
| Hoisting | Declaration — ha, Expression — yo'q | Yo'q |
| Metod sifatida yozish | Tavsiya etiladi | Tavsiya etilmaydi |

```javascript
const obj = {
  ism: "Elmurod",
  // ❌ Arrow function 'this' bilan obj'ni ko'rmaydi
  salom: () => {
    console.log(this.ism); // undefined
  },
  // ✅ Oddiy funksiya to'g'ri ishlaydi
  salom2: function () {
    console.log(this.ism); // Elmurod
  },
};
```

### 2.5 Function Constructor (kamdan-kam ishlatiladi)

```javascript
const yigindi = new Function("a", "b", "return a + b");
console.log(yigindi(2, 3)); // 5
```

⚠️ Xavfsizlik va performance sababli tavsiya etilmaydi (`eval`ga o'xshaydi).

---

## 📌 3. Parametrlar va Argumentlar

**Parametr** — funksiya e'lon qilinganda ko'rsatilgan o'zgaruvchi nomi.
**Argument** — funksiya chaqirilganda parametrga uzatilgan haqiqiy qiymat.

```javascript
function salomla(ism) { // ism — parametr
  console.log(`Salom, ${ism}!`);
}

salomla("Aziza"); // "Aziza" — argument
```

### 3.1 Default Parametrlar (ES6)

Agar argument berilmasa yoki `undefined` bo'lsa, standart qiymat ishlatiladi.

```javascript
function salomla(ism = "Mehmon") {
  console.log(`Salom, ${ism}!`);
}

salomla();        // Salom, Mehmon!
salomla("Sardor"); // Salom, Sardor!
salomla(undefined); // Salom, Mehmon!
salomla(null);      // Salom, null! (null default'ni ishga tushirmaydi!)
```

Default qiymat sifatida boshqa parametrdan ham foydalanish mumkin:

```javascript
function narxHisobla(narx, chegirma = 0, yakuniyNarx = narx - chegirma) {
  return yakuniyNarx;
}

console.log(narxHisobla(100, 20)); // 80
```

### 3.2 Rest Parametrlar (`...`)

Noaniq sondagi argumentlarni massiv shaklida qabul qilish uchun ishlatiladi.

```javascript
function yigindi(...sonlar) {
  return sonlar.reduce((jami, son) => jami + son, 0);
}

console.log(yigindi(1, 2, 3));       // 6
console.log(yigindi(5, 10, 15, 20)); // 50
```

**Qoidalar:**
- Rest parametr faqat **oxirgi** parametr bo'lishi kerak
- Bir funksiyada faqat **bitta** rest parametr bo'lishi mumkin

```javascript
function malumot(ism, yosh, ...hobbylar) {
  console.log(ism, yosh, hobbylar);
}

malumot("Ali", 25, "futbol", "kitob o'qish", "dasturlash");
// Ali 25 ['futbol', 'kitob o'qish', 'dasturlash']
```

### 3.3 `arguments` Obyekti (eski usul)

Faqat oddiy `function`larda mavjud (arrow function'da yo'q). Massivsimon obyekt.

```javascript
function yigindi() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  let jami = 0;
  for (let i = 0; i < arguments.length; i++) {
    jami += arguments[i];
  }
  return jami;
}

console.log(yigindi(1, 2, 3)); // 6
```

📌 **Zamonaviy JavaScript'da `arguments` o'rniga rest parametr (`...args`) ishlatish tavsiya etiladi**, chunki u haqiqiy massiv va barcha massiv metodlarini (`map`, `filter` va h.k.) qo'llab-quvvatlaydi.

### 3.4 Destructuring Parametrlar

**Obyektni destructuring qilish:**

```javascript
function foydalanuvchiYarat({ ism, yosh, shahar = "Toshkent" }) {
  console.log(`${ism}, ${yosh} yosh, ${shahar}dan`);
}

foydalanuvchiYarat({ ism: "Laylo", yosh: 22 });
// Laylo, 22 yosh, Toshkentdan
```

**Massivni destructuring qilish:**

```javascript
function koordinata([x, y, z = 0]) {
  console.log(`x: ${x}, y: ${y}, z: ${z}`);
}

koordinata([10, 20]); // x: 10, y: 20, z: 0
```

### 3.5 Parametrlarni Aralashtirib Ishlatish

```javascript
function buyurtma(mahsulot, miqdor = 1, ...qoshimchalar) {
  console.log(mahsulot, miqdor, qoshimchalar);
}

buyurtma("Pizza", 2, "pepsi", "salat");
// Pizza 2 [ 'pepsi', 'salat' ]
```

---

## 📌 4. `return` Operatori

Funksiyadan qiymat qaytarish uchun ishlatiladi. `return`dan keyingi kod bajarilmaydi.

```javascript
function tekshir(son) {
  if (son % 2 === 0) {
    return "juft";
  }
  return "toq";
}

console.log(tekshir(4)); // juft
```

⚠️ Agar `return` yozilmasa, funksiya avtomatik `undefined` qaytaradi.

```javascript
function hechNima() {
  console.log("Ishladi");
}

console.log(hechNima()); // Ishladi \n undefined
```

⚠️ **Diqqat:** `return`dan keyin yangi qatorga o'tib qiymat yozish xato keltirib chiqaradi (ASI — Automatic Semicolon Insertion tufayli):

```javascript
function xato() {
  return
    { ism: "Test" }; // ❌ undefined qaytadi!
}
```

---

## 📌 5. Funksiya Scope (Ko'lami) va Closure

### 5.1 Scope turlari

```javascript
let global = "Men global o'zgaruvchiman";

function tashqi() {
  let tashqiOzgaruvchi = "Men tashqi funksiyadaman";

  function ichki() {
    let ichkiOzgaruvchi = "Men ichki funksiyadaman";
    console.log(global);          // ✅ ko'rinadi
    console.log(tashqiOzgaruvchi); // ✅ ko'rinadi
    console.log(ichkiOzgaruvchi);  // ✅ ko'rinadi
  }

  ichki();
  // console.log(ichkiOzgaruvchi); // ❌ xato — ko'rinmaydi
}
```

### 5.2 Closure (Yopiq funksiya)

Closure — ichki funksiya tashqi funksiya o'zgaruvchilarini "eslab qolishi".

```javascript
function hisoblagich() {
  let son = 0;
  return function () {
    son++;
    return son;
  };
}

const sanash = hisoblagich();
console.log(sanash()); // 1
console.log(sanash()); // 2
console.log(sanash()); // 3
```

**Amaliy misol — xususiy (private) o'zgaruvchilar:**

```javascript
function bankHisobi(boshlangichBalans) {
  let balans = boshlangichBalans;

  return {
    pulQoshish(miqdor) {
      balans += miqdor;
      return balans;
    },
    pulYechish(miqdor) {
      if (miqdor > balans) {
        console.log("Balansda yetarli mablag' yo'q");
        return balans;
      }
      balans -= miqdor;
      return balans;
    },
    balansniKor() {
      return balans;
    },
  };
}

const hisob = bankHisobi(1000);
console.log(hisob.pulQoshish(500));  // 1500
console.log(hisob.pulYechish(300));  // 1200
console.log(hisob.balansniKor());    // 1200
// balans o'zgaruvchisiga tashqaridan bevosita kirib bo'lmaydi
```

---

## 📌 6. IIFE (Immediately Invoked Function Expression)

Yaratilishi bilan darhol ishga tushadigan funksiya.

```javascript
(function () {
  console.log("Men darhol ishga tushdim!");
})();

// Arrow function bilan
(() => {
  console.log("Men ham darhol ishga tushdim!");
})();

// Qiymat qaytarish bilan
const natija = (function () {
  return 5 + 5;
})();

console.log(natija); // 10
```

**Ishlatilish sababi:** Global scope'ni ifloslantirmaslik va bir martalik ishga tushiriladigan kodni izolyatsiya qilish uchun.

---

## 📌 7. Higher-Order Functions (Yuqori darajali funksiyalar)

Boshqa funksiyani argument sifatida qabul qiladigan yoki funksiya qaytaradigan funksiyalar.

### 7.1 Funksiyani argument sifatida qabul qilish (Callback)

```javascript
function ishlov(massiv, callback) {
  const natija = [];
  for (let elem of massiv) {
    natija.push(callback(elem));
  }
  return natija;
}

const ikkiBaravar = (son) => son * 2;
console.log(ishlov([1, 2, 3], ikkiBaravar)); // [2, 4, 6]
```

### 7.2 Funksiya qaytaradigan funksiya

```javascript
function kupaytuvchiYarat(kupaytuvchi) {
  return function (son) {
    return son * kupaytuvchi;
  };
}

const ikkigaKupaytir = kupaytuvchiYarat(2);
const ochtagaKupaytir = kupaytuvchiYarat(8);

console.log(ikkigaKupaytir(5)); // 10
console.log(ochtagaKupaytir(5)); // 40
```

### 7.3 Massivning tayyor Higher-Order metodlari

```javascript
const sonlar = [1, 2, 3, 4, 5];

// map — har bir elementni o'zgartiradi
console.log(sonlar.map(son => son * 2)); // [2, 4, 6, 8, 10]

// filter — shartga mos elementlarni tanlaydi
console.log(sonlar.filter(son => son % 2 === 0)); // [2, 4]

// reduce — barcha elementlarni bitta qiymatga jamlaydi
console.log(sonlar.reduce((jami, son) => jami + son, 0)); // 15

// forEach — har bir element uchun amal bajaradi (qiymat qaytarmaydi)
sonlar.forEach(son => console.log(son));

// find — shartga mos birinchi elementni topadi
console.log(sonlar.find(son => son > 3)); // 4

// some / every — shartni tekshiradi
console.log(sonlar.some(son => son > 4));  // true
console.log(sonlar.every(son => son > 0)); // true
```

---

## 📌 8. `this` Kalit So'zi va Funksiya Metodlari

`this` funksiya qanday chaqirilishiga qarab qiymat oladi.

```javascript
const shaxs = {
  ism: "Aziz",
  salomAyt() {
    console.log(`Salom, men ${this.ism}man`);
  },
};

shaxs.salomAyt(); // Salom, men Azizman
```

### 8.1 `call()` metodi

Funksiyani darhol chaqiradi, `this` qiymatini va argumentlarni **birma-bir** beradi.

```javascript
function salomla(shahar, mamlakat) {
  console.log(`Salom, men ${this.ism}, ${shahar}, ${mamlakat}dan`);
}

const odam = { ism: "Sardor" };

salomla.call(odam, "Xorazm", "O'zbekiston");
// Salom, men Sardor, Xorazm, O'zbekistondan
```

### 8.2 `apply()` metodi

`call()` bilan bir xil, lekin argumentlarni **massiv** shaklida qabul qiladi.

```javascript
salomla.apply(odam, ["Xorazm", "O'zbekiston"]);
// Salom, men Sardor, Xorazm, O'zbekistondan

// Amaliy misol: massivdagi eng katta sonni topish
const sonlar = [5, 12, 8, 130, 44];
console.log(Math.max.apply(null, sonlar)); // 130
// Zamonaviy usul: Math.max(...sonlar)
```

### 8.3 `bind()` metodi

Funksiyani **darhol chaqirmaydi**, balki `this` biriktirilgan **yangi funksiya** qaytaradi.

```javascript
const azizSalom = salomla.bind(odam);
azizSalom("Toshkent", "O'zbekiston");
// Salom, men Sardor, Toshkent, O'zbekistondan

// Qisman argument biriktirish (Partial Application)
function yigindi(a, b, c) {
  return a + b + c;
}

const beshQoshish = yigindi.bind(null, 5);
console.log(beshQoshish(10, 15)); // 30 (5+10+15)
```

**Uchala metod taqqoslash jadvali:**

| Metod | Chaqiradimi? | Argumentlar formati | Qaytaradigan qiymat |
|---|---|---|---|
| `call()` | Darhol | Birma-bir: `f.call(this, a, b)` | Funksiya natijasi |
| `apply()` | Darhol | Massiv: `f.apply(this, [a, b])` | Funksiya natijasi |
| `bind()` | Yo'q | Birma-bir: `f.bind(this, a, b)` | Yangi funksiya |

---

## 📌 9. Rekursiya (Recursion)

Funksiyaning o'zini-o'zi chaqirishi.

```javascript
function faktorial(n) {
  if (n <= 1) return 1; // baza holati (base case)
  return n * faktorial(n - 1); // rekursiv chaqiruv
}

console.log(faktorial(5)); // 120 (5*4*3*2*1)
```

**Fibonachchi ketma-ketligi misoli:**

```javascript
function fibonachchi(n) {
  if (n <= 1) return n;
  return fibonachchi(n - 1) + fibonachchi(n - 2);
}

console.log(fibonachchi(7)); // 13
```

⚠️ **Diqqat:** Har doim baza holati (to'xtash sharti) bo'lishi shart, aks holda "Maximum call stack size exceeded" xatosi chiqadi (cheksiz rekursiya).

---

## 📌 10. Pure va Impure Funksiyalar

### Pure Function (Sof funksiya)
- Bir xil argument uchun har doim bir xil natija qaytaradi
- Tashqi holatni o'zgartirmaydi (side-effect yo'q)

```javascript
function yigindi(a, b) {
  return a + b; // faqat argumentlarga bog'liq
}
```

### Impure Function (Nosof funksiya)

```javascript
let jami = 0;
function qoshish(son) {
  jami += son; // tashqi o'zgaruvchini o'zgartiradi — side effect
  return jami;
}
```

📌 Pure funksiyalar testlash, debugging va funksional dasturlashda katta afzallikka ega.

---

## 📌 11. Generator Funksiyalar (`function*`)

Bajarilishni to'xtatib, keyin davom ettirish mumkin bo'lgan maxsus funksiyalar.

```javascript
function* sonlarGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = sonlarGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// for...of bilan
for (const son of sonlarGenerator()) {
  console.log(son); // 1, 2, 3
}
```

---

## 📌 12. Async Funksiyalar

Asinxron (kutish talab qiladigan) amallar bilan ishlash uchun.

```javascript
function malumotOl() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Ma'lumot keldi!"), 2000);
  });
}

async function ishga() {
  console.log("Boshlandi...");
  const natija = await malumotOl(); // 2 soniya kutadi
  console.log(natija); // Ma'lumot keldi!
}

ishga();
```

**Xatolarni ushlash:**

```javascript
async function malumotOlish() {
  try {
    const javob = await fetch("https://api.example.com/data");
    const data = await javob.json();
    console.log(data);
  } catch (xato) {
    console.log("Xatolik yuz berdi:", xato.message);
  }
}
```

---

## 📌 13. Named vs Anonymous Funksiyalar

```javascript
// Named — nomi bor, stack trace'da ko'rinadi, debugging osonroq
function ismliFunksiya() {}

// Anonymous — nomi yo'q
const anonim = function () {};

// Arrow function ham odatda anonim bo'ladi
const kvadrat = (x) => x * x;
```

📌 Xato yuz berganda named funksiyalar stack trace'da o'z nomi bilan ko'rinadi, bu debugging jarayonini osonlashtiradi.

---

## 📌 14. Funksiya sifatida — `Function` obyekti va foydali metodlar

```javascript
function namuna(a, b, c) {
  return a + b + c;
}

console.log(namuna.name);   // "namuna"
console.log(namuna.length); // 3 (kutilayotgan parametrlar soni — rest va default hisobga olinmaydi)

// toString() — funksiya kodini matn sifatida qaytaradi
console.log(namuna.toString());
```

---

## 📌 15. Xulosa — Qachon Qaysi Funksiya Turini Ishlatish Kerak?

| Vaziyat | Tavsiya etiladigan tur |
|---|---|
| Obyekt metodi yaratish | Oddiy `function` (`this` uchun) |
| Qisqa, bir qatorli mantiq | Arrow function |
| Callback funksiya (`map`, `filter`) | Arrow function |
| Hoisting kerak bo'lganda | Function Declaration |
| Rekursiv, nomi kerak bo'lgan funksiya | Named Function Expression |
| Konstruktor (`new` bilan) | Oddiy `function` |
| Asinxron amal | `async function` |
| Bosqichma-bosqich qiymat generatsiya qilish | `function*` (generator) |

---

## 📎 Qo'shimcha Manbalar

- [MDN — Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions)
- [MDN — Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [MDN — Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

---

*Ushbu qo'llanma JavaScript funksiyalari mavzusini to'liq qamrab olish uchun tayyorlangan. GitHub reference.md sifatida ishlatish uchun mos.*
