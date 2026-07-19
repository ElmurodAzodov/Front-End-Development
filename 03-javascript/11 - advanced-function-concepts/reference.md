# **Advanced Function Concepts**

Bu bo'lim — funksional dasturlash (Functional Programming) tamoyillariga asoslangan, senior dasturchilar kundalik ishida faol qo'llaydigan ilg'or funksiya konsepsiyalarini qamrab oladi. Bu texnikalar kodni **toza, qayta ishlatiladigan va bashorat qilinadigan (predictable)** qiladi.

---

## 🔗 1. Higher-Order Functions (Yuqori darajali funksiyalar)

**Higher-Order Function (HOF)** — quyidagi ikki shartdan **kamida bittasiga** javob beradigan funksiya:

1. Boshqa funksiyani **argument sifatida qabul qiladi**, YOKI
2. Funksiyani **natija sifatida qaytaradi**.

### 🔹 Funksiyani argument sifatida qabul qilish

```javascript
function amalniBajar(massiv, amal) {
  const natija = [];
  for (const el of massiv) {
    natija.push(amal(el));
  }
  return natija;
}

const sonlar = [1, 2, 3, 4];
console.log(amalniBajar(sonlar, (x) => x * 2)); // [2, 4, 6, 8]
console.log(amalniBajar(sonlar, (x) => x ** 2)); // [1, 4, 9, 16]
```

### 🔹 JavaScript'ning o'rnatilgan HOF metodlari

```javascript
const mahsulotlar = [
  { nomi: "Noutbuk", narx: 1200 },
  { nomi: "Sichqoncha", narx: 25 },
  { nomi: "Klaviatura", narx: 45 },
];

// map — har bir elementni o'zgartirib, YANGI massiv qaytaradi
const nomlar = mahsulotlar.map((m) => m.nomi);
console.log(nomlar); // ["Noutbuk", "Sichqoncha", "Klaviatura"]

// filter — shartga mos elementlarni tanlab oladi
const arzonlar = mahsulotlar.filter((m) => m.narx < 100);
console.log(arzonlar); // [{Sichqoncha...}, {Klaviatura...}]

// reduce — massivni bitta qiymatga "yig'adi"
const jamiNarx = mahsulotlar.reduce((jami, m) => jami + m.narx, 0);
console.log(jamiNarx); // 1270

// forEach — har bir element uchun amal bajaradi (natija qaytarmaydi)
mahsulotlar.forEach((m) => console.log(m.nomi));

// sort — massivni saralaydi
const saralangan = [...mahsulotlar].sort((a, b) => a.narx - b.narx);

// find — shartga mos BIRINCHI elementni qaytaradi
const qimmat = mahsulotlar.find((m) => m.narx > 1000);
```

### 🔹 Funksiyani natija sifatida qaytarish

```javascript
function chegirmaHisoblagichYarat(foiz) {
  return function (narx) {
    return narx - (narx * foiz) / 100;
  };
}

const yozgiChegirma = chegirmaHisoblagichYarat(20);
console.log(yozgiChegirma(1000)); // 800
```

### 💡 HOF'ning afzalligi

- **Abstraksiya** — "nima qilish" bilan "qanday qilish"ni ajratadi.
- **Qayta ishlatish** — bir xil logikani turli funksiyalar bilan qo'llash mumkin.
- **Deklarativ kod** — `for` loop o'rniga `map`/`filter`/`reduce` — kod nima qilishini aniqroq ifodalaydi.

---

## 📦 2. Function Composition (Funksiyalarni kompozitsiya qilish)

**Composition** — bir nechta kichik funksiyalarni birlashtirib, **bitta katta funksiya** yaratish jarayoni. Matematikadagi `f(g(x))` tushunchasiga o'xshaydi — bir funksiyaning natijasi ikkinchisiga kirish (input) bo'ladi.

### 🔹 Qo'lda kompozitsiya

```javascript
const qoshBir = (x) => x + 1;
const ikkigaKopaytir = (x) => x * 2;
const kvadratGa = (x) => x ** 2;

// Qo'lda birlashtirish — o'qishga noqulay, ichma-ich chaqiruvlar
const natija = kvadratGa(ikkigaKopaytir(qoshBir(3)));
console.log(natija); // ((3+1)*2)^2 = 64
```

### 🔹 Umumiy `compose` funksiyasi yaratish

`compose` — funksiyalarni **o'ngdan chapga** bajaradi (matematik konvensiyaga mos):

```javascript
function compose(...funksiyalar) {
  return function (boshlangichQiymat) {
    return funksiyalar.reduceRight(
      (qiymat, fn) => fn(qiymat),
      boshlangichQiymat,
    );
  };
}

const hisobla = compose(kvadratGa, ikkigaKopaytir, qoshBir);
console.log(hisobla(3)); // qoshBir(3)=4 -> ikkigaKopaytir(4)=8 -> kvadratGa(8)=64
```

### 🔹 `pipe` funksiyasi — chapdan o'ngga (o'qishga qulayroq)

```javascript
function pipe(...funksiyalar) {
  return function (boshlangichQiymat) {
    return funksiyalar.reduce((qiymat, fn) => fn(qiymat), boshlangichQiymat);
  };
}

const hisobla2 = pipe(qoshBir, ikkigaKopaytir, kvadratGa);
console.log(hisobla2(3)); // xuddi shu natija: 64, lekin tartib o'qilishi bo'yicha tabiiyroq
```

### 🔑 Amaliy misol — matnni qayta ishlash "pipeline"i

```javascript
const kesish = (str) => str.trim();
const kichikHarf = (str) => str.toLowerCase();
const boshHarfniKattaQilish = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

const tozalaVaFormat = pipe(kesish, kichikHarf, boshHarfniKattaQilish);

console.log(tozalaVaFormat("   ELMUROD   ")); // "Elmurod"
```

### 💡 Composition nima uchun foydali?

- Har bir kichik funksiya **bitta ishni** qiladi (Single Responsibility Principle).
- Kichik funksiyalarni test qilish va debug qilish osonroq.
- Murakkab logikani o'qish oson bo'lgan "quvur (pipeline)" shaklida ifodalaydi.

---

## 🎭 3. Currying (Karrilash)

**Currying** — bir nechta argument qabul qiladigan funksiyani (`f(a, b, c)`), **har biri bitta argument qabul qiladigan funksiyalar zanjiriga** aylantirish jarayoni: `f(a)(b)(c)`.

### 🔹 Oddiy funksiyadan curry qilingan funksiyaga

```javascript
// Oddiy funksiya
function qoshish(a, b, c) {
  return a + b + c;
}
console.log(qoshish(1, 2, 3)); // 6

// Curry qilingan versiya
function qoshishCurry(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(qoshishCurry(1)(2)(3)); // 6

// Arrow function bilan qisqartirilgan
const qoshishCurry2 = (a) => (b) => (c) => a + b + c;
console.log(qoshishCurry2(1)(2)(3)); // 6
```

### 🔹 Curry qilishning amaliy foydasi — qayta ishlatiladigan "shablon" funksiyalar yaratish

```javascript
const solishtirish = (a) => (b) => a === b;

const rolniTekshir = solishtirish("admin");
console.log(rolniTekshir("admin")); // true
console.log(rolniTekshir("mijoz")); // false
```

```javascript
const logYoz = (daraja) => (xabar) => console.log(`[${daraja}]: ${xabar}`);

const xatoLog = logYoz("XATO");
const infoLog = logYoz("INFO");

xatoLog("Fayl topilmadi!"); // [XATO]: Fayl topilmadi!
infoLog("Muvaffaqiyatli saqlandi"); // [INFO]: Muvaffaqiyatli saqlandi
```

### 🔹 Universal `curry` funksiyasi (avtomatik curry qiluvchi)

```javascript
function curry(fn) {
  return function curried(...argumentlar) {
    if (argumentlar.length >= fn.length) {
      return fn.apply(this, argumentlar);
    }
    return function (...qolganArgumentlar) {
      return curried.apply(this, [...argumentlar, ...qolganArgumentlar]);
    };
  };
}

function qoshish3(a, b, c) {
  return a + b + c;
}

const curried = curry(qoshish3);

console.log(curried(1)(2)(3)); // 6 — to'liq curry
console.log(curried(1, 2)(3)); // 6 — qisman + qisman
console.log(curried(1, 2, 3)); // 6 — oddiy chaqiruv kabi ham ishlaydi
console.log(curried(1)(2, 3)); // 6
```

### 💡 Currying qachon kerak?

- Funksiyani **qadamma-qadam sozlash** kerak bo'lganda (masalan, konfiguratsiya + ma'lumot alohida beriladi).
- Function composition bilan birga ishlatilganda — barcha funksiyalar bitta argument qabul qilishi kompozitsiyani osonlashtiradi.
- Qayta ishlatiladigan, "moslashtirilgan" funksiyalar (masalan, `logYoz("XATO")`) yaratishda.

---

## 🔄 4. Partial Application (Qisman qo'llash)

**Partial Application** — curryingga o'xshaydi, lekin farqi bor: funksiyaga **bir nechta argumentni bir vaqtning o'zida oldindan "bog'lab qo'yib"**, qolganlarini keyinroq berish uchun **yangi, "kichikroq" funksiya** yaratish.

> 🔑 **Farqi:** Currying har doim **bittalab** argument qabul qiladigan funksiyalar zanjiri yaratadi. Partial Application esa argumentlarni **istalgan guruhlarda** (1ta, 2ta yoki undan ko'p birdaniga) berish imkonini beradi.

### 🔹 `bind()` yordamida partial application

```javascript
function qoshish(a, b, c) {
  return a + b + c;
}

// 'a' argumentini oldindan "5" qilib bog'laymiz
const besh_dan_qoshish = qoshish.bind(null, 5);

console.log(besh_dan_qoshish(2, 3)); // 5 + 2 + 3 = 10
console.log(besh_dan_qoshish(10, 1)); // 5 + 10 + 1 = 16
```

### 🔹 Qo'lda `partial` funksiyasi yaratish

```javascript
function partial(fn, ...bogliqArgumentlar) {
  return function (...qolganArgumentlar) {
    return fn(...bogliqArgumentlar, ...qolganArgumentlar);
  };
}

function tabrikla(salomlashuv, ism, imzo) {
  return `${salomlashuv}, ${ism}! ${imzo}`;
}

const rasmiyTabrik = partial(tabrikla, "Hurmatli");
console.log(rasmiyTabrik("Aziza", "Hurmat bilan, Kompaniya"));
// "Hurmatli, Aziza! Hurmat bilan, Kompaniya"
```

### 🔹 Amaliy misol — API so'rovlarini soddalashtirish

```javascript
function apiSorov(baseUrl, endpoint, parametrlar) {
  return `${baseUrl}/${endpoint}?${new URLSearchParams(parametrlar)}`;
}

// baseUrl'ni doim bir xil ishlatamiz — partial qilamiz
const meningApim = partial(apiSorov, "https://api.example.com");

console.log(meningApim("foydalanuvchilar", { sahifa: 1 }));
// https://api.example.com/foydalanuvchilar?sahifa=1
console.log(meningApim("mahsulotlar", { kategoriya: "elektronika" }));
// https://api.example.com/mahsulotlar?kategoriya=elektronika
```

---

## 📝 5. Pure Functions (Sof funksiyalar)

**Pure Function** — funksional dasturlashning asosiy g'oyasi. Ikki shartga javob beradi:

1. **Deterministik** — bir xil argumentlar uchun **har doim bir xil natija** qaytaradi.
2. **Side-effect'siz** — funksiya tashqarisidagi hech narsani o'zgartirmaydi (global o'zgaruvchi, DOM, fayl, tarmoq so'rovi va h.k.).

### 🔹 Pure vs Impure taqqoslash

```javascript
// ✅ PURE — faqat argumentlarga bog'liq, tashqi holatga tegmaydi
function qoshish(a, b) {
  return a + b;
}
console.log(qoshish(2, 3)); // 5 — doim 5

// ❌ IMPURE — tashqi o'zgaruvchiga bog'liq (deterministik emas)
let koeffitsient = 10;
function kopaytir(x) {
  return x * koeffitsient; // tashqi 'koeffitsient'ga bog'liq
}

// ❌ IMPURE — side effect (tashqi holatni o'zgartiradi)
let jami = 0;
function jamlashQosh(son) {
  jami += son; // tashqi o'zgaruvchini o'zgartiradi!
  return jami;
}

// ❌ IMPURE — kirish argumentini (massivni) o'zgartiradi (mutation)
function birinchiElementniOchir(massiv) {
  massiv.shift(); // asl massivni o'zgartiradi!
  return massiv;
}

// ✅ PURE versiyasi — yangi massiv qaytaradi, aslini o'zgartirmaydi
function birinchiElementsizMassiv(massiv) {
  return massiv.slice(1); // yangi massiv
}
```

### 🔹 Tez-tez uchraydigan "side effect" turlari

- Tashqi (global) o'zgaruvchini o'zgartirish
- Kirish parametrini (obyekt/massivni) to'g'ridan-to'g'ri o'zgartirish (mutation)
- DOM'ni o'zgartirish (`document.querySelector(...).innerHTML = ...`)
- Konsolga chiqarish, fayl yozish, tarmoq so'rovi (`fetch`, `console.log`)
- `Math.random()`, `Date.now()` ishlatish (natija har safar boshqacha bo'lgani uchun deterministik emas)

### 💡 Pure Functions nima uchun muhim?

- **Bashorat qilinadigan (predictable)** — kod qanday ishlashini oson tushunish mumkin.
- **Test qilish oson** — faqat kirish/chiqishni tekshirish yetarli, tashqi holatni "mock" qilish shart emas.
- **Xavfsiz qayta ishlatish** — bir joyda ishlatilgan funksiya boshqa joyga kutilmagan ta'sir qilmaydi.
- **Parallellashtirish** — side effect yo'qligi sababli, bir nechta pure funksiyani bir vaqtda xavfsiz bajarish mumkin.
- React kabi kutubxonalarda komponentlar imkon qadar pure bo'lishi tavsiya etiladi.

---

## 🔒 6. Function Memoization (Natijalarni keshlash)

**Memoization** — funksiya natijalarini **keshlab (saqlab)** qo'yib, bir xil argumentlar bilan qayta chaqirilganda hisoblashni takrorlamasdan, to'g'ridan-to'g'ri keshdan qaytarish texnikasi. Bu — **faqat pure function'lar uchun xavfsiz** (chunki natija argumentlarga bog'liq bo'lishi shart).

```javascript
function memoize(fn) {
  const kesh = new Map();

  return function (...argumentlar) {
    const kalit = JSON.stringify(argumentlar);

    if (kesh.has(kalit)) {
      console.log("♻️ Keshdan olindi:", kalit);
      return kesh.get(kalit);
    }

    console.log("⚙️ Hisoblanmoqda:", kalit);
    const natija = fn(...argumentlar);
    kesh.set(kalit, natija);
    return natija;
  };
}

// Og'ir (sekin) hisoblash funksiyasi
function faktorial(n) {
  if (n <= 1) return 1;
  return n * faktorial(n - 1);
}

const tezFaktorial = memoize(faktorial);

console.log(tezFaktorial(10)); // ⚙️ Hisoblanmoqda -> 3628800
console.log(tezFaktorial(10)); // ♻️ Keshdan olindi -> 3628800 (darhol)
console.log(tezFaktorial(7)); // ⚙️ Hisoblanmoqda -> 5040 (yangi argument)
```

### 🔹 Amaliy misol — API natijalarini keshlash

```javascript
function memoizeAsync(fn) {
  const kesh = new Map();

  return async function (...argumentlar) {
    const kalit = JSON.stringify(argumentlar);
    if (kesh.has(kalit)) return kesh.get(kalit);

    const natija = await fn(...argumentlar);
    kesh.set(kalit, natija);
    return natija;
  };
}

async function foydalanuvchiOlish(id) {
  const javob = await fetch(`https://api.example.com/foydalanuvchilar/${id}`);
  return javob.json();
}

const tezFoydalanuvchiOlish = memoizeAsync(foydalanuvchiOlish);
// Birinchi chaqiruv — tarmoq so'rovi yuboriladi
// Xuddi shu id bilan ikkinchi chaqiruv — keshdan darhol qaytadi, tarmoq so'rovisiz
```

### ⚠️ Memoization'ning cheklovlari

- Faqat **pure funksiyalar** uchun ishlaydi — natija argumentlardan tashqari hech narsaga bog'liq bo'lmasligi kerak.
- **Xotira sarfini** oshiradi — har bir yangi kombinatsiya kesh xotirasida saqlanadi (katta massiv/obyekt argumentlar bilan ehtiyot bo'ling).
- Katta ilovalarda kesh hajmini cheklash (`LRU cache` kabi strategiyalar) kerak bo'lishi mumkin.

---

## ⏱️ 7. Throttling and Debouncing

Ikkalasi ham — tez-tez chaqiriladigan funksiyalarning (masalan, `scroll`, `resize`, `input` hodisalari) ishga tushish tezligini **cheklash (control)** uchun ishlatiladigan texnikalar, lekin **turlicha maqsadda**:

- **Debounce** — funksiya faqat "sukunat" (harakatlar to'xtagandan) keyin **bir marta** ishga tushadi.
- **Throttle** — funksiya **belgilangan vaqt oralig'ida ko'pi bilan bir marta** ishga tushadi (harakat davomida ham).

### 🔹 Debounce (Kechiktirish)

```javascript
function debounce(fn, kechikish) {
  let taymer;

  return function (...argumentlar) {
    clearTimeout(taymer); // oldingi rejalashtirilgan chaqiruvni bekor qilamiz
    taymer = setTimeout(() => {
      fn.apply(this, argumentlar);
    }, kechikish);
  };
}

// Amaliy misol: qidiruv input'i — foydalanuvchi yozishni TO'XTATGANDAN keyingina so'rov yuboriladi
const qidiruvSorov = debounce(function (matn) {
  console.log(`API'ga so'rov yuborilmoqda: "${matn}"`);
}, 500);

document.querySelector("#qidiruv").addEventListener("input", (e) => {
  qidiruvSorov(e.target.value);
});
// Foydalanuvchi "salom" deb yozsa: s-a-l-o-m harflarining har birida chaqiriladi,
// lekin faqat OXIRGI harfdan 500ms o'tgach — bitta so'rov yuboriladi.
```

**Debounce qo'llaniladigan joylar:**

- Qidiruv input'i (search-as-you-type)
- Forma validatsiyasi (foydalanuvchi yozishni tugatgach tekshirish)
- Window `resize` hodisasi (o'lchamni qayta hisoblash)
- "Saqlash" tugmasini avtomatik bosish (auto-save)

### 🔹 Throttle (Cheklash)

```javascript
function throttle(fn, chegara) {
  let ruxsatBor = true;

  return function (...argumentlar) {
    if (!ruxsatBor) return; // hali vaqt o'tmagan — chaqiruvni o'tkazib yuboramiz

    fn.apply(this, argumentlar);
    ruxsatBor = false;

    setTimeout(() => {
      ruxsatBor = true;
    }, chegara);
  };
}

// Amaliy misol: scroll hodisasi — har 200ms'da ko'pi bilan bir marta ishlaydi
const scrollNazorati = throttle(function () {
  console.log("Scroll pozitsiyasi:", window.scrollY);
}, 200);

window.addEventListener("scroll", scrollNazorati);
// Foydalanuvchi uzluksiz scroll qilsa ham, funksiya har 200ms'da FAQAT bir marta ishlaydi
```

**Throttle qo'llaniladigan joylar:**

- Scroll hodisasi (infinite scroll, "yuqoriga qaytish" tugmasi)
- Window resize (real-vaqtda UI yangilash)
- O'yinlardagi tugma bosish (button spam'ning oldini olish)
- API so'rovlarini "rate limit" qilish (masalan, "like" tugmasi)

### 📊 Debounce vs Throttle — vizual solishtiruv

```
Foydalanuvchi harakati:  |--x--x--x--x--x-----------x--x--x--|

DEBOUNCE (500ms):        |------------------x-----------------x|
                          (faqat harakat TO'XTAGANDAN keyin, bir marta)

THROTTLE (500ms):        |--x-----x-----x-----------x-----x----|
                          (belgilangan oraliqda muntazam ishlaydi)
```

|                            | Debounce                      | Throttle                          |
| -------------------------- | ----------------------------- | --------------------------------- |
| Qachon ishlaydi            | Harakatlar to'xtagandan keyin | Muntazam vaqt oralig'ida          |
| Nechta marta ishga tushadi | Faqat 1 marta (oxirida)       | Bir necha marta (davriy)          |
| Tipik ishlatilishi         | Qidiruv, forma validatsiya    | Scroll, resize, spam oldini olish |

---

## 🔧 8. Function Binding — `bind()`, `call()`, `apply()`

Bu uch metod — funksiya ichidagi **`this` qiymatini qo'lda belgilash** uchun ishlatiladi. Ularsiz `this` qiymati funksiya **qanday chaqirilganiga** bog'liq bo'lib, ba'zan kutilmagan natijalarga olib keladi.

### 🔹 Muammoning kelib chiqishi

```javascript
const foydalanuvchi = {
  ism: "Elmurod",
  salomla() {
    console.log(`Salom, men ${this.ism}`);
  },
};

foydalanuvchi.salomla(); // "Salom, men Elmurod" — to'g'ri, chunki obyekt orqali chaqirilyapti

const funksiya = foydalanuvchi.salomla;
funksiya(); // ❌ "Salom, men undefined" — this endi obyektga bog'liq emas!
```

### 🔹 `call()` — darhol chaqiradi, argumentlarni **bittalab** beradi

```javascript
function salomla(shahar, mamlakat) {
  console.log(`Salom, men ${this.ism}, ${shahar}, ${mamlakat}dan`);
}

const odam1 = { ism: "Ali" };
const odam2 = { ism: "Vali" };

salomla.call(odam1, "Buxoro", "O'zbekiston");
// Salom, men Ali, Buxoro, O'zbekistondan

salomla.call(odam2, "Toshkent", "O'zbekiston");
// Salom, men Vali, Toshkent, O'zbekistondan
```

### 🔹 `apply()` — darhol chaqiradi, argumentlarni **massiv** shaklida beradi

```javascript
salomla.apply(odam1, ["Xorazm", "O'zbekiston"]);
// Salom, men Ali, Xorazm, O'zbekistondan
```

**Amaliy misol — massivdagi eng katta sonni topish (spread operatoridan oldingi klassik usul):**

```javascript
const sonlar = [5, 12, 8, 130, 44];
console.log(Math.max.apply(null, sonlar)); // 130

// Zamonaviy alternativa (spread bilan):
console.log(Math.max(...sonlar)); // 130
```

### 🔹 `bind()` — darhol chaqirmaydi, **yangi funksiya** qaytaradi (`this` bog'langan holda)

```javascript
const aliUchunSalom = salomla.bind(odam1);

aliUchunSalom("Samarqand", "O'zbekiston");
// Salom, men Ali, Samarqand, O'zbekistondan

// bind orqali ba'zi argumentlarni ham oldindan "bog'lash" mumkin (partial application):
const aliSalomBuxoroda = salomla.bind(odam1, "Buxoro");
aliSalomBuxoroda("O'zbekiston"); // Salom, men Ali, Buxoro, O'zbekistondan
```

### 🔹 Amaliy holat — `bind()` bilan `this`ni event handler'da saqlash

```javascript
class Tugma {
  constructor(nomi) {
    this.nomi = nomi;
    // bind qilinmasa, click hodisasida 'this' — tugmaning DOM elementiga ishora qiladi, obyektga emas!
    this.bosildi = this.bosildi.bind(this);
  }

  bosildi() {
    console.log(`${this.nomi} tugmasi bosildi`);
  }
}

const meningTugmam = new Tugma("Yuborish");
document
  .querySelector("button")
  .addEventListener("click", meningTugmam.bosildi);
// bind qilingani uchun 'this' to'g'ri — Tugma obyektiga ishora qiladi
```

**Arrow function bilan alternativ yechim** (class field sifatida — `bind()` shart emas):

```javascript
class Tugma {
  constructor(nomi) {
    this.nomi = nomi;
  }

  // Arrow function — leksik this, avtomatik ravishda obyektga bog'lanadi
  bosildi = () => {
    console.log(`${this.nomi} tugmasi bosildi`);
  };
}
```

### 📊 `call` / `apply` / `bind` taqqoslash jadvali

| Metod                    | Darhol chaqiradimi? | Argumentlar formati          | Qaytaradigan qiymat       |
| ------------------------ | ------------------- | ---------------------------- | ------------------------- |
| `call(this, a, b, c)`    | ✅ Ha               | Bittalab, vergul bilan       | Funksiya natijasi         |
| `apply(this, [a, b, c])` | ✅ Ha               | Massiv shaklida              | Funksiya natijasi         |
| `bind(this, a, b)`       | ❌ Yo'q             | Bittalab (qisman ham mumkin) | Yangi bog'langan funksiya |

### 💡 Qachon nimani ishlatish kerak?

- **`call`** — argumentlar oldindan ma'lum va kam bo'lsa, darhol chaqirish kerak bo'lganda.
- **`apply`** — argumentlar massiv shaklida mavjud bo'lsa (masalan, dinamik ro'yxat).
- **`bind`** — funksiyani **keyinroq** chaqirish kerak bo'lsa (event handler, callback, setTimeout) va `this` doim bir xil bo'lishi kerak bo'lganda.

---

## 📊 Umumiy xulosa jadvali

| Konsepsiya             | Maqsadi                                                  | Asosiy vosita                 |
| ---------------------- | -------------------------------------------------------- | ----------------------------- |
| Higher-Order Functions | Funksiyalarni argument/natija sifatida ishlatish         | `map`, `filter`, `reduce`     |
| Function Composition   | Kichik funksiyalarni birlashtirib katta logika yaratish  | `pipe`, `compose`             |
| Currying               | Ko'p argumentli funksiyani bittalab zanjirga aylantirish | `f(a)(b)(c)`                  |
| Partial Application    | Ba'zi argumentlarni oldindan "bog'lab" qo'yish           | `bind`, qo'lda `partial`      |
| Pure Functions         | Bashorat qilinadigan, side-effect'siz kod                | Deterministik + immutability  |
| Memoization            | Og'ir hisoblashlarni keshlash orqali tezlashtirish       | `Map`/obyekt kesh             |
| Debounce               | Harakat to'xtagandan keyin bir marta ishga tushirish     | `setTimeout` + `clearTimeout` |
| Throttle               | Vaqt oralig'ida muntazam cheklash                        | `setTimeout` + flag           |
| `call`/`apply`/`bind`  | `this` qiymatini qo'lda boshqarish                       | Funksiya metodlari            |

---

## ✅ Yakuniy xulosa

Bu bo'limdagi texnikalarning aksariyati **funksional dasturlash (Functional Programming)** falsafasidan kelib chiqadi:

- **Pure functions** — barcha boshqa texnikalarning poydevori. Agar funksiyangiz pure bo'lmasa, uni memoize qilib bo'lmaydi va composition'da ishlatish xavfli bo'ladi.
- **HOF, composition, currying, partial application** — bir-biri bilan chambarchas bog'liq: currying qilingan pure funksiyalarni composition orqali birlashtirish — zamonaviy funksional kodning asosiy naqshi (masalan, Redux, RxJS kabi kutubxonalarda keng qo'llaniladi).
- **Memoization, debounce, throttle** — performance optimallashtirish uchun amaliy vositalar, real loyihalarda (qidiruv, scroll, og'ir hisoblashlar) muntazam ishlatiladi.
- **`call`/`apply`/`bind`** — `this` kalit so'zi ustidan to'liq nazorat berib, class metodlari, event handler'lar va eski (pre-ES6) kod bilan ishlashda muhim rol o'ynaydi.
