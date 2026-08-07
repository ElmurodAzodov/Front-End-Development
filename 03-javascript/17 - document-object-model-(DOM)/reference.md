# 🌳 **Document Object Model (DOM)**

---

## 📌 0. DOM nima va u nima uchun kerak?

**DOM (Document Object Model)** — brauzer HTML hujjatni yuklaganda, uni **daraxtsimon obyektlar strukturasiga** aylantiradi. Bu struktura JavaScript orqali sahifani **dinamik tarzda o'qish, o'zgartirish, qo'shish yoki o'chirish** imkonini beradi.

Muhim narsa shuni tushunish kerak: **HTML — bu shunchaki matn fayli**, brauzer uni o'qib, xotirada **DOM daraxti** deb ataluvchi obyektlar tizimini yaratadi. JavaScript to'g'ridan-to'g'ri HTML faylga emas, balki aynan shu **xotiradagi DOM daraxtiga** murojaat qiladi va uni o'zgartiradi — brauzer esa bu o'zgarishlarni real vaqtda ekranda qayta chizadi (re-render qiladi).

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Salom</h1>
    <p>Bu matn</p>
  </body>
</html>
```

Brauzer buni quyidagicha obyektlar daraxtiga aylantiradi (soddalashtirilgan ko'rinishda):

```
document
  └── html
        ├── head
        └── body
              ├── h1 ("Salom")
              └── p ("Bu matn")
```

DOM — bu W3C tomonidan standartlashtirilgan **til-agnostik (platform-independent) interfeys** — ya'ni u faqat JavaScript uchun emas, balki nazariy jihatdan boshqa dasturlash tillari orqali ham HTML/XML hujjatlar bilan ishlash uchun mo'ljallangan. Lekin amaliyotda DOM bilan eng ko'p JavaScript orqali ishlanadi.

Ushbu reference quyidagi mantiqiy ketma-ketlikda o'rganishga mo'ljallangan: avval DOM daraxtining tuzilishini tushunish, so'ngra elementlarni tanlash, ular orasida harakatlanish (traversal), kontent bilan ishlash, atributlar va stillar bilan ishlash, va nihoyat — yangi elementlar yaratish/o'chirish hamda unumdorlikni oshirish texnikalari.

---

## 🌳 1. DOM Tree Structure (DOM Daraxti Tuzilishi)

### 1.1. Node turlari (Node Types)

DOM daraxtidagi har bir "bo'g'in" — **node (tugun)** deb ataladi. Node lar bir necha turga bo'linadi:

```javascript
// Eng muhim node turlari:

// 1. Element Node (nodeType === 1) - HTML teglari: <div>, <p>, <h1> va h.k.
// 2. Text Node (nodeType === 3) - elementlar ichidagi matnlar
// 3. Comment Node (nodeType === 8) - <!-- izohlar -->
// 4. Document Node (nodeType === 9) - butun hujjatning o'zi (document obyekti)

console.log(document.nodeType); // 9
console.log(document.body.nodeType); // 1
```

**Muhim nozik jihat:** HTML dagi bo'sh joy (whitespace) va yangi qator belgilari ham **Text Node** sifatida hisoblanadi. Shu sababli quyidagi HTML:

```html
<ul>
  <li>Birinchi</li>
  <li>Ikkinchi</li>
</ul>
```

DOM da `<ul>` ning `childNodes` ro'yxatida shunchaki 2 ta emas, balki **5 ta** node bo'ladi: matn (bo'sh joy), `<li>`, matn (bo'sh joy), `<li>`, matn (bo'sh joy). Bu farq keyinroq `children` va `childNodes` orasidagi farqni tushunishda muhim bo'ladi (2-bo'limda batafsil ko'riladi).

### 1.2. Daraxt ierarxiyasi va munosabatlar (relationships)

```
document
  └── html                        <- ildiz element (root element)
        ├── head
        │     ├── title
        │     └── meta
        └── body
              ├── header
              │     └── h1
              ├── main
              │     ├── p
              │     └── ul
              │           ├── li
              │           └── li
              └── footer
```

Har bir node quyidagi munosabatlarga ega bo'lishi mumkin:

- **Parent (ota)** — node ni o'z ichiga olgan tashqi element
- **Children (bolalar)** — node ichidagi to'g'ridan-to'g'ri ichki elementlar
- **Siblings (aka-uka/opa-singil)** — bir xil ota-elementga ega bo'lgan boshqa elementlar
- **Descendants (avlodlar)** — node ichidagi barcha ichki elementlar (bolalar, nabiralar va h.k.)
- **Ancestors (ajdodlar)** — node ni o'z ichiga olgan barcha tashqi elementlar (ota, bobo va h.k.)

### 1.3. `document` obyekti — DOM ning kirish nuqtasi

```javascript
console.log(document); // butun hujjat
console.log(document.documentElement); // <html> elementi
console.log(document.head); // <head> elementi
console.log(document.body); // <body> elementi
console.log(document.title); // sahifa sarlavhasi (<title> tegi ichidagi matn)
console.log(document.URL); // sahifaning to'liq manzili
```

---

## 🔍 2. Selecting Elements (Elementlarni Tanlash)

DOM bilan ishlashning birinchi qadami — kerakli elementni **tanlash (select qilish)**. JavaScript buning uchun bir nechta usul taqdim etadi, ularning har biri o'ziga xos xususiyat va cheklovlarga ega.

### 2.1. `getElementById()`

Eng **tez** va eng aniq usul — chunki `id` sahifada **yagona (unique)** bo'lishi kerak, brauzer uni to'g'ridan-to'g'ri indekslangan jadvaldan qidiradi.

```html
<div id="asosiy-kontent">Salom</div>
```

```javascript
const element = document.getElementById("asosiy-kontent");
console.log(element); // <div id="asosiy-kontent">Salom</div>

// Agar bunday id topilmasa - null qaytaradi (xatolik EMAS, lekin keyingi
// murojaat null.something qilinsa TypeError beradi)
const yoq = document.getElementById("mavjud-emas");
console.log(yoq); // null
```

**Muhim xususiyat:** `getElementById()` faqat `document` obyektida chaqiriladi (masalan `elementIchida.getElementById()` deb yozib bo'lmaydi), chunki `id` butun hujjat bo'yicha yagona bo'lishi kerak — bu mantiqiy cheklov.

### 2.2. `getElementsByClassName()` va `getElementsByTagName()` (Live Collections)

Bu ikkala metod ham **birdan ortiq element** bilan ishlash uchun mo'ljallangan va **HTMLCollection** degan maxsus turdagi natija qaytaradi.

```html
<p class="matn">Birinchi</p>
<p class="matn">Ikkinchi</p>
<span class="matn">Uchinchi</span>
```

```javascript
// Klass nomi bo'yicha qidirish
const elementlar = document.getElementsByClassName("matn");
console.log(elementlar.length); // 3
console.log(elementlar[0]); // birinchi <p class="matn">

// Teg nomi bo'yicha qidirish
const paragraflar = document.getElementsByTagName("p");
console.log(paragraflar.length); // 2

// Barcha elementlarni olish
const hammasi = document.getElementsByTagName("*");
```

### 2.3. "Live Collection" nima degani — bu JUDA muhim nozik jihat

`getElementsByClassName()` va `getElementsByTagName()` qaytaradigan `HTMLCollection` — **"live" (jonli, tirik)** hisoblanadi. Bu degani, agar DOM o'zgarsa, avvalgi olingan collection **avtomatik yangilanadi** — uni qayta so'rashning hojati yo'q:

```javascript
const elementlar = document.getElementsByClassName("matn");
console.log(elementlar.length); // 3

// Yangi element qo'shamiz
const yangiSpan = document.createElement("span");
yangiSpan.className = "matn";
document.body.appendChild(yangiSpan);

console.log(elementlar.length); // 4 - AVTOMATIK YANGILANDI!
// Biz "elementlar" o'zgaruvchisini qayta so'ramadik, lekin u o'zgardi
```

Bu xususiyat ba'zan **kutilmagan xatoliklarga** olib kelishi mumkin, ayniqsa `for` sikli ichida elementlarni o'chirish yoki qo'shishda — chunki collection uzunligi sikl davomida o'zgarib ketaveradi:

```javascript
// XATOLIK BERUVCHI misol - live collection bilan sikl ichida o'chirish:
const elementlar = document.getElementsByClassName("ochirish-kerak");
for (let i = 0; i < elementlar.length; i++) {
  elementlar[i].remove(); // Har safar o'chirilganda, collection uzunligi kamayadi,
  // shu sababli ba'zi elementlar "o'tkazib yuboriladi"
}
// TO'G'RI YECHIM: teskari tartibda yoki Array.from() bilan statik nusxa olib sikllash
```

### 2.4. `querySelector()` — birinchi mos kelgan elementni topish

`querySelector()` — CSS selektor sintaksisidan foydalanadi va **birinchi mos kelgan elementni** qaytaradi. Bu eng **moslashuvchan (flexible)** usul, chunki istalgan murakkab CSS selektordan foydalanish mumkin.

```html
<div class="karta" id="birinchi-karta">
  <p>Matn</p>
</div>
```

```javascript
// ID bo'yicha (CSS selektor sintaksisida # belgisi bilan)
const el1 = document.querySelector("#birinchi-karta");

// Klass bo'yicha (. belgisi bilan)
const el2 = document.querySelector(".karta");

// Teg bo'yicha
const el3 = document.querySelector("p");

// Murakkab selektorlar - CSS da ishlaydigan HAR QANDAY selektor
const el4 = document.querySelector("div.karta > p");
const el5 = document.querySelector("ul li:first-child");
const el6 = document.querySelector("input[type='text']");
const el7 = document.querySelector(".forma .maydon:not(.yashirin)");

// Agar hech narsa topilmasa - null qaytaradi
console.log(document.querySelector(".mavjud-emas")); // null
```

### 2.5. `querySelectorAll()` — barcha mos kelganlarni topish (Static NodeList)

```javascript
const barchaKartalar = document.querySelectorAll(".karta");
console.log(barchaKartalar.length);

// NodeList - forEach metodiga ega (HTMLCollection dan farqli!)
barchaKartalar.forEach((karta, index) => {
  console.log(`${index}: ${karta.textContent}`);
});
```

### 2.6. `NodeList` (static) vs `HTMLCollection` (live) — MUHIM FARQ

Bu — DOM ni o'rganishdagi eng ko'p chalkashtiriladigan tushunchalardan biri:

| Xususiyat        | `HTMLCollection` (`getElementsBy*`)                   | `NodeList` (`querySelectorAll`)                                                |
| ---------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------ |
| Turi             | **Live** (jonli) - DOM o'zgarsa avtomatik yangilanadi | **Static** (statik) - olingan vaqtdagi "surat", DOM o'zgarsa ham o'zgarmaydi   |
| `forEach` metodi | ❌ Yo'q (Array ga aylantirish kerak)                  | ✅ Bor                                                                         |
| Element turi     | Faqat Element node lar                                | Har qanday node (lekin `querySelectorAll` odatda faqat elementlarni qaytaradi) |

```javascript
// HTMLCollection - LIVE
const live = document.getElementsByClassName("item");
console.log(live.length); // masalan 3

document.body.innerHTML += '<div class="item"></div>';
console.log(live.length); // 4 - avtomatik yangilandi

// NodeList - STATIC
const staticList = document.querySelectorAll(".item");
console.log(staticList.length); // 4 (yangi holatda so'ralgani uchun)

document.body.innerHTML += '<div class="item"></div>';
console.log(staticList.length); // hali ham 4 - O'ZGARMADI, chunki static
```

**HTMLCollection ni Array ga aylantirish** (forEach, map, filter kabi Array metodlaridan foydalanish uchun):

```javascript
const collection = document.getElementsByClassName("item");
const arrayGaAylantirilgan = Array.from(collection);
// yoki
const arrayGaAylantirilgan2 = [...collection];

arrayGaAylantirilgan.forEach((el) => console.log(el));
```

---

## 🔄 3. Traversing DOM (DOM Bo'ylab Harakatlanish)

Ba'zan elementni to'g'ridan-to'g'ri tanlash o'rniga, **allaqachon tanlangan elementdan boshlab**, DOM daraxti bo'ylab (yuqoriga, pastga, yon tomonga) harakatlanish kerak bo'ladi. Bu — **DOM traversal** deb ataladi.

### 3.1. Ota-elementga o'tish: `parentElement` va `parentNode`

```html
<div id="ota">
  <p id="bola">Matn</p>
</div>
```

```javascript
const bola = document.getElementById("bola");

console.log(bola.parentElement); // <div id="ota">...</div>
console.log(bola.parentNode); // <div id="ota">...</div> (aksariyat holatlarda bir xil)
```

**`parentElement` va `parentNode` farqi:** Deyarli barcha holatlarda ular bir xil natija qaytaradi, lekin farq shundaki — `parentNode` **har qanday node turini** qaytarishi mumkin (masalan `document` ning o'zini), `parentElement` esa **faqat Element node** qaytaradi, aks holda `null` beradi:

```javascript
// document.documentElement (<html>) ning parentNode - bu document (Document node, Element emas)
console.log(document.documentElement.parentNode); // #document
console.log(document.documentElement.parentElement); // null (chunki document Element emas)
```

### 3.2. Bolalarga o'tish: `children` va `childNodes`

```html
<div id="konteyner">
  <p>Birinchi</p>
  <span>Ikkinchi</span>
  <!-- Bu izoh -->
  <p>Uchinchi</p>
</div>
```

```javascript
const konteyner = document.getElementById("konteyner");

// children - FAQAT Element node larni qaytaradi (matn, izohlarni hisobga olmaydi)
console.log(konteyner.children.length); // 3 (p, span, p)
console.log(konteyner.children[0]); // <p>Birinchi</p>

// childNodes - BARCHA node turlarini qaytaradi (matn bo'shliqlar, izohlar bilan birga)
console.log(konteyner.childNodes.length); // ancha ko'proq (bo'sh joy matn nodelari + izoh + elementlar)
```

**Amaliy qoida:** Agar sizga faqat HTML elementlar kerak bo'lsa (odatda shunday) — **har doim `children` dan foydalaning**, `childNodes` dan emas. `childNodes` odatda faqat matn manipulyatsiyasi kerak bo'lganda ishlatiladi.

### 3.3. Aka-uka/opa-singil elementlarga o'tish (Siblings)

```html
<ul>
  <li id="birinchi">Item 1</li>
  <li id="ikkinchi">Item 2</li>
  <li id="uchinchi">Item 3</li>
</ul>
```

```javascript
const ikkinchi = document.getElementById("ikkinchi");

// Faqat ELEMENT sibling larni qaytaradi (matn/izohlarni e'tiborsiz qoldiradi)
console.log(ikkinchi.nextElementSibling); // <li id="uchinchi">Item 3</li>
console.log(ikkinchi.previousElementSibling); // <li id="birinchi">Item 1</li>

// Oxirgi elementda nextElementSibling - null bo'ladi
const uchinchi = document.getElementById("uchinchi");
console.log(uchinchi.nextElementSibling); // null
```

Bunga o'xshash, lekin **barcha node turlarini** hisobga oluvchi versiyalari ham mavjud: `nextSibling` va `previousSibling` — ular matn/izoh node larini ham qaytarishi mumkin, shu sababli amaliyotda kamroq ishlatiladi.

### 3.4. Birinchi va oxirgi bolaga o'tish

```javascript
const konteyner = document.getElementById("konteyner");

// Faqat Element node larni hisobga oladi (tavsiya etiladi)
console.log(konteyner.firstElementChild); // birinchi HTML element
console.log(konteyner.lastElementChild); // oxirgi HTML element

// Barcha node turlarini hisobga oladi (matn bo'shliqlarni ham)
console.log(konteyner.firstChild); // ko'pincha bo'sh joy matn node bo'lishi mumkin!
console.log(konteyner.lastChild);
```

### 3.5. Traversal metodlarining to'liq jadvali

| Maqsad          | Faqat Element (tavsiya etiladi) | Barcha Node turlari |
| --------------- | ------------------------------- | ------------------- |
| Ota-element     | `parentElement`                 | `parentNode`        |
| Barcha bolalar  | `children`                      | `childNodes`        |
| Keyingi sibling | `nextElementSibling`            | `nextSibling`       |
| Oldingi sibling | `previousElementSibling`        | `previousSibling`   |
| Birinchi bola   | `firstElementChild`             | `firstChild`        |
| Oxirgi bola     | `lastElementChild`              | `lastChild`         |

**Umumiy qoida:** Deyarli har doim **"Element" so'zi bor versiyalarni** ishlating — ular bo'sh joy va izoh node laridan "iflos" bo'lmagan, faqat haqiqiy HTML elementlar bilan ishlashni ta'minlaydi.

---

## 📝 4. Manipulating Content (Kontentni O'zgartirish)

Element tanlangandan va unga murojaat qilingandan keyin, keyingi qadam — uning **ichidagi kontentni o'qish yoki o'zgartirish**. Buning uchun uchta asosiy xususiyat mavjud, va ularning har biri **o'ziga xos xatti-harakatga** ega.

### 4.1. `textContent` — xavfsiz va tez

`textContent` — elementning ichidagi **barcha matnni** (yashirin elementlar ichidagi matnni ham) **HTML teglarini "kod" sifatida talqin qilmasdan** o'qiydi yoki yozadi.

```html
<div id="konteyner">
  <span style="display: none;">Yashirin matn</span>
  <p>Ko'rinadigan <b>matn</b></p>
</div>
```

```javascript
const konteyner = document.getElementById("konteyner");

console.log(konteyner.textContent);
// "\n    Yashirin matn\n    Ko'rinadigan matn\n"
// (yashirin elementning matni ham qo'shiladi, HTML teglar olib tashlanadi)

// YOZISH
konteyner.textContent = "<b>Yangi matn</b>";
// Natija: sahifada AYNAN "<b>Yangi matn</b>" matni ko'rinadi
// (HTML sifatida emas, ODDIY MATN sifatida ko'rsatiladi - <b> teg emas!)
```

**Nima uchun `textContent` xavfsiz?** Chunki u foydalanuvchidan kelgan matnni **hech qachon HTML sifatida talqin qilmaydi**. Agar foydalanuvchi `<script>alert('hack')</script>` deb kiritsa va siz buni `textContent` orqali qo'ysangiz — u ekranda oddiy matn sifatida ko'rinadi, hech qanday skript ishga tushmaydi.

### 4.2. `innerHTML` — kuchli, lekin xavfli

`innerHTML` — elementning ichidagi kontentni **HTML kod sifatida** o'qiydi yoki yozadi. Yangi teglar, atributlar — hammasi haqiqiy HTML sifatida "render" qilinadi (chiziladi).

```javascript
const konteyner = document.getElementById("konteyner");

// O'QISH - butun HTML strukturani (teglar bilan birga) matn sifatida qaytaradi
console.log(konteyner.innerHTML);
// "<span style=\"display: none;\">Yashirin matn</span>\n<p>Ko'rinadigan <b>matn</b></p>"

// YOZISH - HTML sifatida talqin qilinadi va render qilinadi
konteyner.innerHTML = "<b>Qalin matn</b> va <i>qiya matn</i>";
// Sahifada HAQIQIY qalin va qiya matn ko'rinadi (teglar ishlaydi)
```

### 4.3. ⚠️ XSS (Cross-Site Scripting) xavfi — `innerHTML` ni foydalanuvchi ma'lumoti bilan ISHLATMANG

Bu — veb-xavfsizlikdagi eng muhim tushunchalardan biri. Agar siz foydalanuvchidan kelgan (masalan forma orqali kiritilgan, yoki serverdan kelgan, lekin tozalanmagan) matnni `innerHTML` orqali sahifaga qo'ysangiz, va u matn ichida `<script>` tegi bo'lsa — bu skript **haqiqatan ishga tushishi mumkin**:

```javascript
// ❌ XAVFLI KOD - HECH QACHON BUNDAY QILMANG:
const foydalanuvchiInputi = document.getElementById("izoh-maydoni").value;
// Agar foydalanuvchi shunday yozsa: <img src=x onerror="alert('Xakerlandingiz!')">
document.getElementById("izohlar").innerHTML += foydalanuvchiInputi;
// Bu kod HAQIQATAN ishga tushadi va zararli JavaScript bajarilishi mumkin!

// ✅ XAVFSIZ USUL - foydalanuvchi kiritgan matn uchun textContent ishlating:
document.getElementById("izohlar").textContent += foydalanuvchiInputi;
// Bu holda <img src=x onerror=...> AYNAN SHU KO'RINISHDA matn sifatida ko'rsatiladi,
// hech qanday kod ishga tushmaydi
```

**Amaliy qoida:** `innerHTML` ni faqat **o'zingiz nazorat qiladigan, ishonchli manbadan kelgan** HTML uchun ishlating (masalan statik shablonlar). Foydalanuvchi kiritgan yoki tashqi manbadan kelgan ma'lumot uchun **har doim `textContent` yoki `createElement`** dan foydalaning.

### 4.4. `innerText` — stilizatsiyani hisobga oladi

`innerText` — `textContent` ga o'xshaydi, lekin muhim farqlari bor: u **CSS stillarini hisobga oladi** va faqat **ko'rinadigan (visible)** matnni qaytaradi.

```html
<div id="test">
  <span style="display: none;">Yashirin</span>
  <span>Ko'rinadigan</span>
</div>
```

```javascript
const test = document.getElementById("test");

console.log(test.textContent); // "\nYashirin\nKo'rinadigan\n" - HAMMASI, yashirin ham
console.log(test.innerText); // "Ko'rinadigan" - FAQAT ko'rinadigan matn
```

### 4.5. Uch xususiyatni solishtirish jadvali

| Xususiyat     | HTML teglarni talqin qiladimi | Yashirin elementlarni hisobga oladimi | Tezlik                             | Xavfsizlik               |
| ------------- | ----------------------------- | ------------------------------------- | ---------------------------------- | ------------------------ |
| `textContent` | ❌ Yo'q (xavfsiz)             | ✅ Ha (hammasini qaytaradi)           | ⚡ Tez                             | ✅ Xavfsiz               |
| `innerHTML`   | ✅ Ha                         | ✅ Ha                                 | 🐢 Sekinroq (parse qiladi)         | ⚠️ Ehtiyot bo'lish kerak |
| `innerText`   | ❌ Yo'q                       | ❌ Yo'q (faqat ko'rinadiganlar)       | 🐢 Eng sekin (reflow talab qiladi) | ✅ Xavfsiz               |

`innerText` sekinroq ishlaydi, chunki brauzer uni hisoblash uchun **CSS stillarni ham hisobga olishi** kerak (qaysi elementlar `display: none` ekanligini bilish uchun sahifani "reflow" qilishi kerak bo'lishi mumkin) — bu qo'shimcha hisoblash resurslarini talab qiladi.

---

## 🎨 5. Manipulating Attributes (Atributlar bilan ishlash)

HTML elementlarning **atributlari** (masalan `src`, `href`, `class`, `disabled`) bilan ishlash uchun maxsus metodlar mavjud.

### 5.1. Asosiy atribut metodlari

```html
<img id="rasm" src="eski.jpg" alt="Rasm tavsifi" data-yuklangan="false" />
```

```javascript
const rasm = document.getElementById("rasm");

// O'QISH
console.log(rasm.getAttribute("src")); // "eski.jpg"
console.log(rasm.getAttribute("alt")); // "Rasm tavsifi"

// YOZISH / O'ZGARTIRISH
rasm.setAttribute("src", "yangi.jpg");
rasm.setAttribute("alt", "Yangi tavsif");

// TEKSHIRISH - atribut mavjudmi
console.log(rasm.hasAttribute("data-yuklangan")); // true
console.log(rasm.hasAttribute("data-mavjud-emas")); // false

// O'CHIRISH
rasm.removeAttribute("data-yuklangan");
```

### 5.2. Property vs Attribute — muhim farq

Ko'pgina HTML atributlar JavaScript da **to'g'ridan-to'g'ri property (xususiyat) sifatida ham mavjud**:

```javascript
const rasm = document.getElementById("rasm");

// Ikkala usul ham ko'p hollarda bir xil natija beradi
rasm.setAttribute("src", "yangi.jpg");
rasm.src = "yangi.jpg"; // to'g'ridan-to'g'ri property orqali

console.log(rasm.getAttribute("src")); // "yangi.jpg"
console.log(rasm.src); // TO'LIQ URL manzil qaytaradi, masalan "https://sayt.uz/yangi.jpg"
```

**Muhim farq:** `getAttribute()` **AYNAN HTML da yozilganidek** qiymatni qaytaradi, property esa brauzer tomonidan **qayta ishlangan (processed)** qiymatni qaytarishi mumkin. Masalan `src` atributi uchun `getAttribute("src")` nisbiy yo'lni qaytaradi, `.src` property esa to'liq (absolute) URL ni qaytaradi.

Bundan tashqari, ba'zi holatlarda ular **butunlay farqli xatti-harakatga** ega bo'lishi mumkin — masalan `checkbox` uchun `checked` atributi va `.checked` property si:

```javascript
const checkbox = document.getElementById("mening-checkboxim");

// checked ATRIBUT - faqat "boshlang'ich holatni" ifodalaydi (HTML da yozilgan holat)
console.log(checkbox.getAttribute("checked")); // null yoki "checked" (o'zgarmaydi)

// checked PROPERTY - JORIY, HAQIQIY holatni ifodalaydi (foydalanuvchi bosgandan keyin ham yangilanadi)
console.log(checkbox.checked); // true yoki false (real vaqtda o'zgaradi)
```

### 5.3. `classList` — klasslar bilan ishlash

`class` atributi bilan ishlash uchun `className` (oddiy matn sifatida) yoki **ancha qulayroq `classList`** obyektidan foydalanish mumkin.

```html
<div id="karta" class="karta faol katta"></div>
```

```javascript
const karta = document.getElementById("karta");

// QO'SHISH
karta.classList.add("yangi-klass");
karta.classList.add("klass1", "klass2"); // bir nechtasini birdan

// O'CHIRISH
karta.classList.remove("faol");

// ALMASHTIRISH (toggle) - agar bo'lsa o'chiradi, bo'lmasa qo'shadi
karta.classList.toggle("yashirin");
// Ikkinchi marta chaqirilsa, aksincha ishlaydi (qayta ko'rinadigan qiladi)

// Majburiy toggle - ikkinchi argument orqali aniq holatni belgilash
karta.classList.toggle("yashirin", true); // faqat QO'SHADI (borligiga qaramasdan)
karta.classList.toggle("yashirin", false); // faqat O'CHIRADI

// TEKSHIRISH
console.log(karta.classList.contains("faol")); // true/false

// ALMASHTIRISH (bitta klassni boshqasiga)
karta.classList.replace("katta", "kichik"); // "katta" o'rniga "kichik" bo'ladi

// Barcha klasslarni ko'rish
console.log(karta.classList); // DOMTokenList obyekti
console.log([...karta.classList]); // ["karta", "faol", "katta"] - array ko'rinishida
```

**Nima uchun `classList` `className` dan yaxshiroq?** Chunki `className` — bu shunchaki matn qatori (string), va agar siz bitta klassni qo'shmoqchi bo'lsangiz, butun matnni qo'lda "parselash" kerak bo'lardi:

```javascript
// ❌ ESKI, NOQULAY usul (className bilan)
karta.className = karta.className + " yangi-klass"; // bo'shliqlarni qo'lda boshqarish kerak

// ✅ ZAMONAVIY, QULAY usul (classList bilan)
karta.classList.add("yangi-klass"); // avtomatik, xatosiz
```

### 5.4. Dataset — `data-*` atributlar bilan ishlash

HTML5 da maxsus **custom (o'ziga xos) atributlarni** `data-` prefiksi bilan yozish mumkin. Ular JavaScript da `element.dataset` orqali qulay tarzda o'qiladi/yoziladi.

```html
<div
  id="mahsulot"
  data-id="42"
  data-narx="150000"
  data-mavjud-emas="false"
></div>
```

```javascript
const mahsulot = document.getElementById("mahsulot");

// O'QISH - "data-" prefiksi olib tashlanadi, kebab-case dan camelCase ga aylanadi
console.log(mahsulot.dataset.id); // "42" (DIQQAT: har doim STRING qaytaradi!)
console.log(mahsulot.dataset.narx); // "150000"
console.log(mahsulot.dataset.mavjudEmas); // "false" ("mavjud-emas" -> "mavjudEmas")

// YOZISH
mahsulot.dataset.id = "43";
mahsulot.dataset.yangiMaydon = "qiymat"; // avtomatik "data-yangi-maydon" atributini yaratadi

// O'CHIRISH
delete mahsulot.dataset.mavjudEmas;
```

**Muhim eslatma:** `dataset` orqali olingan barcha qiymatlar **har doim string (matn) turida** bo'ladi, hatto HTML da raqam kabi ko'rinsa ham. Agar raqam bilan matematik amal bajarmoqchi bo'lsangiz, uni `Number()` yoki `parseInt()` bilan konvertatsiya qilish kerak:

```javascript
const narx = Number(mahsulot.dataset.narx); // 150000 (raqam turida)
console.log(narx + 1000); // 151000

// Agar konvertatsiya qilmasdan qo'shsangiz:
console.log(mahsulot.dataset.narx + 1000); // "1500001000" - XATO! (string konkatenatsiya)
```

---

## 🎭 6. Manipulating Styles (Stillar bilan ishlash)

### 6.1. `style` property — inline stillar

`style` property elementga **to'g'ridan-to'g'ri, inline stil** qo'shish imkonini beradi (HTML dagi `style="..."` atributiga ekvivalent).

```javascript
const karta = document.getElementById("karta");

// Bitta stil xususiyatini o'rnatish
karta.style.color = "red";
karta.style.backgroundColor = "blue"; // CSS dagi "background-color" -> camelCase "backgroundColor"
karta.style.fontSize = "20px";
karta.style.display = "none"; // elementni yashirish

// Bir nechta stilni birdan o'rnatish (cssText orqali)
karta.style.cssText = "color: red; background-color: blue; font-size: 20px;";
// ESLATMA: cssText BARCHA avvalgi inline stillarni O'CHIRIB, yangilarini qo'yadi

// Stilni o'chirish
karta.style.color = ""; // bo'sh qatorga o'rnatish - shu xususiyatni olib tashlaydi

// Custom CSS Property (CSS o'zgaruvchisi) qiymatini o'rnatish
karta.style.setProperty("--asosiy-rang", "#3498db");
```

**Muhim qoida:** CSS dagi tire (`-`) bilan yozilgan xususiyat nomlari, JavaScript da **camelCase** ga aylanadi:

```javascript
// CSS: background-color   -> JS: style.backgroundColor
// CSS: font-size           -> JS: style.fontSize
// CSS: border-radius       -> JS: style.borderRadius
// CSS: margin-top          -> JS: style.marginTop
```

### 6.2. `getComputedStyle()` — HAQIQIY qo'llanilgan stilni olish

`element.style` faqat **inline stillarni** ko'rsatadi — agar stil CSS faylida yoki `<style>` tegida yozilgan bo'lsa, `element.style` orqali uni O'QIB bo'lmaydi (faqat yozish uchun ishlatiladi, o'qishda bo'sh qaytaradi):

```html
<style>
  #karta {
    color: green;
    padding: 10px;
  }
</style>
<div id="karta" style="font-weight: bold;">Matn</div>
```

```javascript
const karta = document.getElementById("karta");

// style faqat INLINE (HTML ichida "style=" orqali yozilgan) stillarni ko'rsatadi
console.log(karta.style.color); // "" (bo'sh, chunki color CSS faylida yozilgan, inline emas)
console.log(karta.style.fontWeight); // "bold" (bu inline yozilgan, shuning uchun ko'rinadi)

// getComputedStyle() - brauzer TOMONIDAN HAQIQATAN qo'llanilgan yakuniy stilni qaytaradi
// (CSS fayldan, <style> tegidan, inline dan, va brauzer defaultlaridan kelib chiqib hisoblangan)
const hisoblanganStil = getComputedStyle(karta);
console.log(hisoblanganStil.color); // "rgb(0, 128, 0)" - HAQIQIY yakuniy rang
console.log(hisoblanganStil.padding); // "10px"
console.log(hisoblanganStil.fontWeight); // "bold" ("700" ga aylantirilgan bo'lishi ham mumkin)
```

**`getComputedStyle()` faqat O'QISH uchun** — uning qaytargan qiymatlarini o'zgartirib bo'lmaydi (`readonly`). Agar stilni o'zgartirmoqchi bo'lsangiz, `element.style` dan foydalanishingiz kerak.

### 6.3. CSS Custom Properties (o'zgaruvchilar) bilan ishlash

Zamonaviy CSS da **custom property (o'zgaruvchi)** lar `--nom` ko'rinishida yoziladi, va ularni JavaScript orqali dinamik o'zgartirish mumkin — bu ayniqsa **theme (mavzu) almashtirish** kabi funksiyalar uchun juda foydali.

```css
:root {
  --asosiy-rang: #3498db;
  --shrift-hajmi: 16px;
}

.tugma {
  background-color: var(--asosiy-rang);
  font-size: var(--shrift-hajmi);
}
```

```javascript
// Custom property qiymatini o'rnatish (odatda :root elementida - butun sayt uchun)
document.documentElement.style.setProperty("--asosiy-rang", "#e74c3c");
// Endi BARCHA "var(--asosiy-rang)" ishlatilgan joylar avtomatik yangilanadi

// Custom property qiymatini o'qish
const qiymat = getComputedStyle(document.documentElement).getPropertyValue(
  "--asosiy-rang",
);
console.log(qiymat); // " #e74c3c"

// O'chirish
document.documentElement.style.removeProperty("--asosiy-rang");
```

**Amaliy misol — Dark/Light Theme almashtirish:**

```javascript
function temaniAlmashtirish() {
  const root = document.documentElement;
  const hozirgiTema = root.style.getPropertyValue("--fon-rangi");

  if (hozirgiTema === "#000000") {
    root.style.setProperty("--fon-rangi", "#ffffff");
    root.style.setProperty("--matn-rangi", "#000000");
  } else {
    root.style.setProperty("--fon-rangi", "#000000");
    root.style.setProperty("--matn-rangi", "#ffffff");
  }
}
```

---

## 🏗️ 7. Creating and Removing Elements (Elementlar Yaratish va O'chirish)

Bu bo'lim — dinamik veb-sahifalar yaratishning **markaziy qismi**: JavaScript orqali yangi HTML elementlarni yaratish, ularni DOM ga joylashtirish, va kerak bo'lganda o'chirish.

### 7.1. `createElement()` va `createTextNode()`

```javascript
// Yangi element yaratish (hali DOM ga qo'shilmagan, faqat xotirada mavjud)
const yangiDiv = document.createElement("div");
yangiDiv.className = "karta";
yangiDiv.textContent = "Men yangi elementman";

// Matn node yaratish (kamdan-kam to'g'ridan-to'g'ri ishlatiladi,
// odatda textContent orqali qulayroq)
const matnNode = document.createTextNode("Bu shunchaki matn");
```

Diqqat qiling: `createElement()` bilan yaratilgan element **hali DOM daraxtida ko'rinmaydi** — u faqat JavaScript xotirasida mavjud. Uni sahifada ko'rsatish uchun **DOM ga qo'shish (append/insert)** kerak.

### 7.2. Elementni qo'shish: `append()`, `appendChild()`, `prepend()`

```html
<ul id="royxat">
  <li>Birinchi</li>
</ul>
```

```javascript
const royxat = document.getElementById("royxat");

// YANGI element yaratish
const yangiElement = document.createElement("li");
yangiElement.textContent = "Ikkinchi";

// appendChild() - ESKI, klassik usul - OXIRIGA qo'shadi
royxat.appendChild(yangiElement);

// append() - ZAMONAVIY usul, appendChild dan farqi:
const uchinchiElement = document.createElement("li");
uchinchiElement.textContent = "Uchinchi";
royxat.append(uchinchiElement);

// append() ning appendChild() dan AFZALLIKLARI:
// 1. Bir nechta elementni birdan qo'shish mumkin
royxat.append(document.createElement("li"), document.createElement("li"));

// 2. To'g'ridan-to'g'ri MATN qo'shish mumkin (appendChild buni qila olmaydi!)
royxat.append("Oddiy matn qatori ham");

// 3. Hech narsa qaytarmaydi (undefined), appendChild esa qo'shilgan node ni qaytaradi

// prepend() - BOSHIGA qo'shadi (append ga o'xshash, lekin boshiga joylashtiradi)
const birinchiBolib = document.createElement("li");
birinchiBolib.textContent = "Men birinchi bo'ldim";
royxat.prepend(birinchiBolib);
```

### 7.3. Aniq joyga qo'shish: `insertBefore()`, `insertAdjacentElement()`, `insertAdjacentHTML()`

```javascript
const royxat = document.getElementById("royxat");
const ikkinchiElement = royxat.children[1]; // masalan "Ikkinchi" elementi

// insertBefore(yangiNode, ma'lumNodedanOldin) - ESKI usul
const yangi = document.createElement("li");
yangi.textContent = "Bu 'Ikkinchi' dan oldin qo'yiladi";
royxat.insertBefore(yangi, ikkinchiElement);

// insertAdjacentElement(pozitsiya, element) - ZAMONAVIY, aniqroq nazorat
// 4 xil pozitsiya mavjud:
const maqsadElement = document.getElementById("maqsad");

maqsadElement.insertAdjacentElement("beforebegin", yangiElement1); // elementdan OLDIN (tashqarida)
maqsadElement.insertAdjacentElement("afterbegin", yangiElement2); // element ICHIDA, boshida
maqsadElement.insertAdjacentElement("beforeend", yangiElement3); // element ICHIDA, oxirida
maqsadElement.insertAdjacentElement("afterend", yangiElement4); // elementdan KEYIN (tashqarida)
```

Bu 4 ta pozitsiyani vizual tushunish uchun:

```html
<!-- beforebegin -->
<div id="maqsad">
  <!-- afterbegin -->
  Mavjud kontent
  <!-- beforeend -->
</div>
<!-- afterend -->
```

```javascript
// insertAdjacentHTML(pozitsiya, htmlMatni) - to'g'ridan-to'g'ri HTML matnini kiritish
maqsadElement.insertAdjacentHTML(
  "beforeend",
  "<p>Yangi <b>HTML</b> kontent</p>",
);
// Bu ancha tez ishlaydi, chunki avval element yaratib, keyin qo'shish shart emas -
// lekin innerHTML kabi XSS xavfini yodda tutish kerak (foydalanuvchi datasi bilan ishlatmang)
```

### 7.4. Elementlarni almashtirish: `replaceChild()`, `replaceChildren()`

```javascript
const royxat = document.getElementById("royxat");
const eskiElement = royxat.children[0];
const yangiElement = document.createElement("li");
yangiElement.textContent = "Almashtirilgan element";

// replaceChild(yangi, eski) - ESKI usul
royxat.replaceChild(yangiElement, eskiElement);

// replaceChildren() - ZAMONAVIY usul - BARCHA bolalarni bir zumda almashtiradi
royxat.replaceChildren(); // barcha bolalarni o'chirib tashlaydi (bo'sh qiladi)

royxat.replaceChildren(
  document.createElement("li"),
  document.createElement("li"),
); // yangi elementlar bilan to'ldiradi
```

### 7.5. Elementlarni o'chirish: `remove()`, `removeChild()`

```javascript
const elementniOchirish = document.getElementById("ochirilishi-kerak");

// remove() - ZAMONAVIY, ENG SODDA usul - elementning o'zi o'zini o'chiradi
elementniOchirish.remove();

// removeChild() - ESKI usul - OTA element orqali chaqiriladi
const ota = document.getElementById("ota-konteyner");
const bola = document.getElementById("ochirilishi-kerak");
ota.removeChild(bola);
// removeChild() o'chirilgan elementni QAYTARADI (masalan boshqa joyga ko'chirish uchun foydali)
```

### 7.6. `cloneNode()` — elementni nusxalash

```javascript
const asliElement = document.getElementById("shablon");

// cloneNode(true) - CHUQUR nusxalash - barcha ICHKI elementlar bilan birga nusxalanadi
const chuqurNusxa = asliElement.cloneNode(true);

// cloneNode(false) - SAYOZ nusxalash - faqat elementning o'zi, ICHIDAGI kontentsiz
const sayozNusxa = asliElement.cloneNode(false);

document.body.appendChild(chuqurNusxa);
```

**Muhim eslatma:** `cloneNode()` nusxalangan elementga bog'langan **event listener larni (voqea tinglovchilarni) NUSXALAMAYDI**. Agar asl elementga `addEventListener` orqali voqea biriktirilgan bo'lsa, nusxada bu voqea ishlamaydi — uni qayta biriktirish kerak bo'ladi.

---

## 📦 8. DocumentFragment (Ommaviy Operatsiyalar Uchun Unumdorlik)

### 8.1. Muammo: DOM ga ko'p marta murojaat qilish sekin

Har safar DOM ga o'zgarish kiritilganda (masalan `appendChild` chaqirilganda), brauzer sahifani **qayta chizishi (reflow/repaint)** kerak bo'lishi mumkin. Agar siz 1000 ta elementni bittalab, sikl ichida to'g'ridan-to'g'ri DOM ga qo'shsangiz, bu **1000 marta** qayta chizishga olib kelishi mumkin — bu juda sekin.

```javascript
// ❌ SEKIN USUL - har bir appendChild DOM ni "iflslaydi" (qayta chizishga majbur qilishi mumkin)
const royxat = document.getElementById("royxat");
for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Element ${i}`;
  royxat.appendChild(li); // Har safar HAQIQIY DOM ga qo'shiladi - sekin!
}
```

### 8.2. Yechim: `DocumentFragment`

`DocumentFragment` — bu **"xotiradagi vaqtinchalik konteyner"** — u haqiqiy DOM ning bir qismi emas (sahifada ko'rinmaydi), lekin oddiy DOM elementi kabi ishlaydi. Siz unga istagancha element qo'shishingiz mumkin, va faqat **BIR MARTA**, tayyor bo'lgandan keyin, uni haqiqiy DOM ga qo'shasiz — bu esa faqat **bitta reflow/repaint** talab qiladi.

```javascript
// ✅ TEZ USUL - DocumentFragment orqali
const royxat = document.getElementById("royxat");
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Element ${i}`;
  fragment.appendChild(li); // Bu XOTIRADA, DOM ga hali tegmaydi - juda tez!
}

// Faqat BIR MARTA, tayyor bo'lgan fragmentni haqiqiy DOM ga qo'shamiz
royxat.appendChild(fragment);
// Diqqat: fragment "ichidagi" barcha elementlar DOM ga ko'chadi,
// fragment o'zi esa BO'SHAB QOLADI (u shunchaki "tashuvchi konteyner")
```

### 8.3. Nima uchun bu ishlaydi — texnik tushuntirish

```
DocumentFragment - haqiqiy DOM daraxtining bir qismi EMAS.
U "virtual" konteyner bo'lib, ichidagi o'zgarishlar brauzer tomonidan
KUZATILMAYDI (render/reflow qilinmaydi).

Faqat u haqiqiy DOM ga qo'shilgan payt - brauzer BIR MARTA
"Bu yerga qancha ko'p element qo'shilgan bo'lsa ham, bir martagina qayta chizaman" deydi.

Natija: 1000 marta reflow o'rniga -> FAQAT 1 marta reflow
```

---

## 🌐 9. `innerHTML` vs `insertAdjacentHTML` vs `DocumentFragment` — Qaysi qachon ishlatiladi?

Bu uchtasi ham DOM ga kontent qo'shish uchun ishlatiladi, lekin ular orasida **muhim farqlar va tanlov mezonlari** mavjud.

### 9.1. Solishtirish jadvali

| Usul                                 | Tezlik                          | Xavfsizlik                                             | Qachon ishlatish kerak                                             |
| ------------------------------------ | ------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------ |
| `innerHTML +=`                       | 🐢 Eng sekin                    | ⚠️ XSS xavfi bor                                       | Kichik, kamdan-kam o'zgarishlar uchun, ishonchli statik HTML bilan |
| `insertAdjacentHTML()`               | 🚀 O'rtacha-tez                 | ⚠️ XSS xavfi bor                                       | Aniq bir joyga HTML matnini tez qo'shish kerak bo'lganda           |
| `DocumentFragment` + `createElement` | ⚡ Eng tez (ko'p element uchun) | ✅ Xavfsiz (agar `textContent` bilan birga ishlatilsa) | Ko'p sonli (masalan 100+) elementlarni dinamik yaratishda          |

### 9.2. `innerHTML +=` nima uchun ayniqsa sekin

```javascript
// ❌ ENG SEKIN USUL:
let royxatHTML = document.getElementById("royxat");
for (let i = 0; i < 1000; i++) {
  royxatHTML.innerHTML += `<li>Element ${i}</li>`;
  // MUAMMO: har safar bu:
  // 1. Butun mavjud innerHTML ni MATN sifatida o'qiydi
  // 2. Yangi matnni oxiriga QO'SHADI
  // 3. Butun natijani QAYTADAN HTML sifatida PARSE qiladi
  // 4. Butun ichki DOM daraxtini QAYTA QURADI (eski elementlar YO'Q QILINIB, qaytadan yaratiladi!)
  // Bu ayniqsa yomon, chunki mavjud elementlarga bog'langan
  // event listener lar ham YO'QOLADI
}
```

### 9.3. Amaliy tavsiyalar — qaysi vaziyatda qaysi usulni tanlash

```javascript
// VAZIYAT 1: Statik, ishonchli HTML shablonini bir marta qo'yish
// -> innerHTML to'g'ridan-to'g'ri (bir marta, sikl ichida emas) YAXSHI ishlaydi
konteyner.innerHTML = `<div class="karta"><h2>Sarlavha</h2><p>Matn</p></div>`;

// VAZIYAT 2: Mavjud kontentga tez qo'shimcha HTML kiritish (bitta marta)
// -> insertAdjacentHTML() YAXSHI tanlov
konteyner.insertAdjacentHTML("beforeend", `<li>Yangi element</li>`);

// VAZIYAT 3: Ko'p sonli (masalan API dan kelgan 500 ta mahsulot) elementlarni yaratish
// -> DocumentFragment + createElement ENG YAXSHI (tez va xavfsiz)
const fragment = document.createDocumentFragment();
mahsulotlarRoyxati.forEach((mahsulot) => {
  const li = document.createElement("li");
  li.textContent = mahsulot.nomi; // XSS dan himoyalangan (textContent)
  fragment.appendChild(li);
});
konteyner.appendChild(fragment);

// VAZIYAT 4: Foydalanuvchidan kelgan matnni ko'rsatish (masalan izoh, sharh)
// -> textContent (yoki DocumentFragment + textContent) - HAR DOIM XAVFSIZ tanlov
izohElementi.textContent = foydalanuvchiIzohi;
```

---

## 📋 10. Yakuniy xulosa jadvali — barcha muhim metodlar

| Kategoriya            | Metod/Xususiyat                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------ |
| Tanlash (bitta)       | `getElementById()`, `querySelector()`                                                      |
| Tanlash (ko'p)        | `getElementsByClassName()`, `getElementsByTagName()`, `querySelectorAll()`                 |
| Ota-elementga o'tish  | `parentElement`, `parentNode`                                                              |
| Bolalarga o'tish      | `children`, `childNodes`                                                                   |
| Sibling ga o'tish     | `nextElementSibling`, `previousElementSibling`                                             |
| Kontent bilan ishlash | `textContent`, `innerHTML`, `innerText`                                                    |
| Atributlar            | `getAttribute()`, `setAttribute()`, `removeAttribute()`, `hasAttribute()`                  |
| Klasslar              | `classList.add/remove/toggle/contains/replace`                                             |
| Data atributlar       | `element.dataset`                                                                          |
| Stillar               | `style`, `getComputedStyle()`, `style.setProperty()`                                       |
| Yaratish              | `createElement()`, `createTextNode()`                                                      |
| Qo'shish              | `append()`, `appendChild()`, `prepend()`, `insertBefore()`, `insertAdjacentElement/HTML()` |
| Almashtirish          | `replaceChild()`, `replaceChildren()`                                                      |
| O'chirish             | `remove()`, `removeChild()`                                                                |
| Nusxalash             | `cloneNode()`                                                                              |
| Unumdorlik            | `DocumentFragment`                                                                         |

---

## 💡 11. Best Practices (Tavsiyalar)

```javascript
// ✅ 1. Elementlarni tanlashda ID mavjud bo'lsa getElementById() ni ishlating -
//       u querySelector dan tezroq

// ✅ 2. Bir nechta murakkab selektor kerak bo'lsa querySelector/querySelectorAll ishlating

// ✅ 3. Foydalanuvchi kiritgan yoki tashqi manbadan kelgan MATN uchun
//       HAR DOIM textContent ishlating, innerHTML EMAS (XSS xavfi)

// ✅ 4. Ko'p sonli elementlar yaratishda DocumentFragment dan foydalaning

// ✅ 5. children va nextElementSibling kabi "Element" so'zli versiyalarni ishlating -
//       ular bo'sh joy/izoh node laridan tozalangan

// ✅ 6. classList dan foydalaning, className ni to'g'ridan-to'g'ri matn sifatida
//       o'zgartirishdan saqlaning

// ✅ 7. getComputedStyle() faqat O'QISH uchun, style property esa YOZISH uchun ishlatiladi

// ✅ 8. Live HTMLCollection bilan sikl ichida elementlarni o'chirishdan saqlaning -
//       bu kutilmagan natijalarga olib kelishi mumkin (Array.from() bilan nusxa oling)

// ✅ 9. dataset dan olingan qiymatlar HAR DOIM string - raqam kerak bo'lsa Number() bilan
//       konvertatsiya qiling
```

---

Ushbu reference — Document Object Model (DOM) ning barcha asosiy va zarur tushunchalarini mantiqiy ketma-ketlikda qamrab oladi: DOM daraxti tuzilishidan boshlab, elementlarni tanlash usullari (va live vs static collection farqi), DOM bo'ylab harakatlanish, kontent bilan xavfsiz ishlash (textContent vs innerHTML xavfsizligi), atribut va stil manipulyatsiyasi, elementlar yaratish/o'chirish, va nihoyat — DocumentFragment orqali unumdorlikni oshirish texnikasigacha.
