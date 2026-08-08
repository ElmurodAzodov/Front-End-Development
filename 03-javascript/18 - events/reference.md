# 🖱️ **DOM Events**

---

## 📌 0. Event nima va nima uchun kerak?

**Event (voqea)** — brauzerda yuz beradigan har qanday "hodisa": foydalanuvchi tugmani bosishi, klaviaturada tugma bosishi, sahifa yuklanishi, forma yuborilishi, sichqonchani harakatlantirish va h.k. JavaScript ning eng muhim vazifalaridan biri — aynan shu voqealarga **reaksiya bildirish (event handling)**, ya'ni sahifani **interaktiv** qilish.

Event lar bo'lmasa, veb-sahifa faqat statik hujjat bo'lib qolar edi — foydalanuvchi hech narsaga bosolmaydi, forma to'ldirolmaydi, sahifa hech qanday harakatga javob bermaydi. Aynan Event tizimi orqali JavaScript "foydalanuvchi nima qilyapti" ni biladi va shunga mos ravishda kodni ishga tushiradi.

**Ishlash prinsipi (soddalashtirilgan):** Brauzer doimiy ravishda foydalanuvchi harakatlarini (klik, tugma bosish va h.k.) kuzatib turadi. Voqea yuz berganda, brauzer maxsus **Event obyekti** yaratadi (bu voqea haqida barcha ma'lumotni o'z ichiga oladi) va uni shu voqeani "tinglayotgan" (listen qilayotgan) funksiyalarga uzatadi.

Ushbu reference quyidagi mantiqiy ketma-ketlikda tuzilgan: avval voqea turlari bilan tanishish, so'ngra ularni qanday "ushlash" (event handler biriktirish) mumkinligi, Event obyektining ichki tuzilishi, voqealarning DOM bo'ylab qanday "tarqalishi" (propagation), Event Delegation texnikasi, o'z voqealarini yaratish (Custom Events), va nihoyat — unumdorlik uchun debouncing/throttling texnikalari.

---

## 🖱️ 1. Event Types (Voqea Turlari)

Brauzerda o'nlab turli xil voqea mavjud. Ularni kategoriyalarga bo'lib o'rganish qulayroq.

### 1.1. Mouse Events (Sichqoncha voqealari)

```javascript
// click - element ustiga bosib, qo'yib yuborilganda (bir marta)
element.addEventListener("click", () => {
  console.log("Element bosildi");
});

// dblclick - ikki marta ketma-ket tez bosilganda
element.addEventListener("dblclick", () => {
  console.log("Ikki marta bosildi");
});

// mouseenter - sichqoncha ko'rsatkichi element USTIGA kirganda
// MUHIM: mouseenter bolalarga (ichki elementlarga) "bubbling" QILMAYDI
element.addEventListener("mouseenter", () => {
  console.log("Sichqoncha kirdi");
});

// mouseleave - sichqoncha ko'rsatkichi elementDAN chiqqanda
// mouseenter kabi, bubbling QILMAYDI
element.addEventListener("mouseleave", () => {
  console.log("Sichqoncha chiqdi");
});

// mousemove - sichqoncha element USTIDA harakatlanayotganda (JUDA TEZ-TEZ ishga tushadi!)
element.addEventListener("mousemove", (event) => {
  console.log(`Koordinata: ${event.clientX}, ${event.clientY}`);
});

// contextmenu - o'ng tugma bosilganda (kontekst menyu ochilishidan oldin)
element.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // brauzerning standart kontekst menyusini bloklash
  console.log("O'ng tugma bosildi - o'z menyumizni ko'rsatamiz");
});
```

**`mouseenter`/`mouseleave` va `mouseover`/`mouseout` farqi:** Bu — juda ko'p chalkashtiriladigan nozik jihat. `mouseenter` va `mouseleave` — **faqat aynan shu elementga** tegishli va bolalar elementlariga o'tishda qayta ishga tushmaydi. `mouseover` va `mouseout` esa — **bubbling qiladi**, ya'ni ichki elementga sichqoncha o'tganda ham qayta ishga tushadi:

```javascript
// Agar konteyner ichida bola elementlar bo'lsa:
// mouseenter/mouseleave - faqat KONTEYNER chegarasidan kirish/chiqishda ishga tushadi
konteyner.addEventListener("mouseenter", () => console.log("Faqat 1 marta"));

// mouseover/mouseout - HAR BIR ichki elementga o'tganda ham qayta ishga tushadi
konteyner.addEventListener("mouseover", () =>
  console.log("Har safar ichki elementga o'tganda ham"),
);
```

### 1.2. Keyboard Events (Klaviatura voqealari)

```javascript
// keydown - tugma BOSILGANDA (bosilib turilsa, TAKRORLANIB ishga tushadi)
document.addEventListener("keydown", (event) => {
  console.log(`Bosilgan tugma: ${event.key}, kod: ${event.code}`);
});

// keyup - tugma QO'YIB YUBORILGANDA (bir marta)
document.addEventListener("keyup", (event) => {
  console.log(`Qo'yib yuborilgan tugma: ${event.key}`);
});

// event.key va event.code farqi:
// event.key - HAQIQIY belgi (klaviatura tiliga, Shift holatiga bog'liq): "a", "A", "1", "!"
// event.code - FIZIK tugma joyi (til/holatga bog'liq EMAS): "KeyA", "Digit1", "ShiftLeft"

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter bosildi");
  }
  if (event.ctrlKey && event.key === "s") {
    // Ctrl+S kombinatsiyasi
    event.preventDefault(); // brauzerning "Save Page" oynasini bloklash
    console.log("Ctrl+S ushlandi");
  }
});
```

**Diqqat qiling:** `keypress` voqeasi — **eskirgan (deprecated)** hisoblanadi va zamonaviy kodda ishlatilmasligi kerak, uning o'rniga `keydown` ishlatiladi.

### 1.3. Form Events (Forma voqealari)

```javascript
// submit - forma YUBORILGANDA (Submit tugmasi yoki Enter orqali)
forma.addEventListener("submit", (event) => {
  event.preventDefault(); // sahifa qayta yuklanishining oldini olish (standart xatti-harakat)
  console.log("Forma yuborildi");
});

// change - input QIYMATI o'zgarib, FOKUSDAN CHIQQANDA (element "blur" bo'lganda) ishga tushadi
input.addEventListener("change", (event) => {
  console.log(`Yakuniy qiymat: ${event.target.value}`);
});

// input - HAR BIR belgi kiritilishi/o'chirilishida DARHOL ishga tushadi (real-time)
input.addEventListener("input", (event) => {
  console.log(`Joriy qiymat: ${event.target.value}`);
});

// focus - element FOKUSGA olinganda (masalan input ga bosilganda)
input.addEventListener("focus", () => {
  console.log("Input fokusga olindi");
});

// blur - element FOKUSDAN chiqqanda
input.addEventListener("blur", () => {
  console.log("Input fokusdan chiqdi");
});

// reset - forma "Reset" tugmasi orqali tozalanganda
forma.addEventListener("reset", () => {
  console.log("Forma tozalandi");
});
```

**`change` va `input` farqi — muhim nozik jihat:**

|                              | `input`                                 | `change`                                         |
| ---------------------------- | --------------------------------------- | ------------------------------------------------ |
| Qachon ishga tushadi         | HAR bir belgi kiritilishida (real-time) | Faqat FOKUSDAN chiqqanda (yakuniy qiymat)        |
| `<input type="text">` da     | Har harf kiritilganda                   | Fokusdan chiqqanda                               |
| `<input type="checkbox">` da | Bosilganda                              | Bosilganda (bu holatda ikkalasi bir xil)         |
| `<select>` da                | Tanlov o'zgarganda                      | Tanlov o'zgarganda (bir xil)                     |
| Qachon ishlatish kerak       | Real-time validatsiya, qidiruv          | Yakuniy natijani saqlash, forma yuborish oldidan |

### 1.4. Window Events (Oyna/hujjat voqealari)

```javascript
// load - BUTUN sahifa (barcha rasmlar, stillar, skriptlar) TO'LIQ yuklangandan keyin
window.addEventListener("load", () => {
  console.log("Sahifa TO'LIQ yuklandi (rasmlar bilan birga)");
});

// DOMContentLoaded - faqat HTML/DOM tayyor bo'lganda (rasmlar hali yuklanmagan bo'lishi mumkin)
// Bu odatda "load" dan ANCHA TEZROQ ishga tushadi - shu sababli KO'PROQ ishlatiladi
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM tayyor - JavaScript ishlashni boshlashi mumkin");
});

// resize - brauzer oynasi o'lchami o'zgarganda
window.addEventListener("resize", () => {
  console.log(`Yangi o'lcham: ${window.innerWidth}x${window.innerHeight}`);
});

// scroll - sahifa (yoki element) skroll qilinganda
window.addEventListener("scroll", () => {
  console.log(`Skroll pozitsiyasi: ${window.scrollY}`);
});

// beforeunload - foydalanuvchi sahifani TARK ETMOQCHI bo'lganda (yopish, boshqa manzilga o'tish)
window.addEventListener("beforeunload", (event) => {
  event.preventDefault(); // ba'zi brauzerlarda kerak
  event.returnValue = ""; // "Sahifadan chiqishni xohlaysizmi?" ogohlantirishini ko'rsatish uchun
});
```

`load` va `DOMContentLoaded` orasidagi farq **DOM Lifecycle** mavzusida chuqurroq muhim ahamiyat kasb etadi — bu haqda alohida bo'lim (DOM Lifecycle) da batafsil to'xtalinadi, lekin asosiy qoida: **agar sizga faqat DOM elementlariga murojaat qilish kerak bo'lsa** (rasmlar yuklanishini kutish shart bo'lmasa), `DOMContentLoaded` dan foydalaning — bu tezroq va samaraliroq.

### 1.5. Touch Events (Teginish voqealari — mobil qurilmalar uchun)

```javascript
// touchstart - barmoq ekranga TEGGANDA
element.addEventListener("touchstart", (event) => {
  const teginish = event.touches[0]; // birinchi barmoq
  console.log(
    `Teginish koordinatasi: ${teginish.clientX}, ${teginish.clientY}`,
  );
});

// touchmove - barmoq ekran BO'YLAB HARAKATLANAYOTGANDA
element.addEventListener("touchmove", (event) => {
  event.preventDefault(); // sahifaning standart skroll qilishini bloklash (agar kerak bo'lsa)
  const teginish = event.touches[0];
  console.log(`Yangi pozitsiya: ${teginish.clientX}, ${teginish.clientY}`);
});

// touchend - barmoq ekrandan KO'TARILGANDA
element.addEventListener("touchend", () => {
  console.log("Teginish tugadi");
});

// event.touches - hozir ekranga tegib turgan BARCHA barmoqlar ro'yxati (multi-touch uchun)
element.addEventListener("touchstart", (event) => {
  console.log(`Nechta barmoq tegdi: ${event.touches.length}`);
});
```

### 1.6. Drag & Drop Events (Sudrab-tashlash voqealari)

```javascript
const sudraladiganElement = document.getElementById("sudraladigan");
const tashlashJoyi = document.getElementById("tashlash-joyi");

// Elementni "sudralishi mumkin" deb belgilash HTML da SHART:
// <div id="sudraladigan" draggable="true"></div>

// dragstart - sudrash BOSHLANGANDA (asl elementda)
sudraladiganElement.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", event.target.id); // ma'lumot saqlash
  console.log("Sudrash boshlandi");
});

// dragend - sudrash TUGAGANDA (muvaffaqiyatli yoki bekor qilingan bo'lsa ham)
sudraladiganElement.addEventListener("dragend", () => {
  console.log("Sudrash tugadi");
});

// dragover - sudralayotgan element BOSHQA element USTIDA bo'lganda
// MUHIM: preventDefault() chaqirilmasa, drop voqeasi ISHLAMAYDI!
tashlashJoyi.addEventListener("dragover", (event) => {
  event.preventDefault(); // "bu yerga tashlash mumkin" deb ruxsat berish
});

// drop - element TASHLANGANDA (qo'yib yuborilganda)
tashlashJoyi.addEventListener("drop", (event) => {
  event.preventDefault();
  const elementId = event.dataTransfer.getData("text/plain");
  const sudralganElement = document.getElementById(elementId);
  tashlashJoyi.appendChild(sudralganElement); // elementni yangi joyga ko'chirish
  console.log("Element tashlandi");
});
```

### 1.7. Clipboard Events (Almashish buferi voqealari)

```javascript
// copy - matn NUSXALANGANDA (Ctrl+C)
element.addEventListener("copy", (event) => {
  console.log("Matn nusxalandi");
  // Nusxalangan matnni o'zgartirish ham mumkin:
  // event.clipboardData.setData("text/plain", "O'zgartirilgan matn");
  // event.preventDefault();
});

// cut - matn QIRQILGANDA (Ctrl+X)
element.addEventListener("cut", () => {
  console.log("Matn qirqildi");
});

// paste - matn QO'YILGANDA (Ctrl+V)
element.addEventListener("paste", (event) => {
  const qoyilganMatn = event.clipboardData.getData("text/plain");
  console.log(`Qo'yilgan matn: ${qoyilganMatn}`);
  // Masalan, formatlanmagan (plain) matn sifatida qo'yishni majburlash:
  // event.preventDefault();
  // document.execCommand("insertText", false, qoyilganMatn);
});
```

---

## 📝 2. Event Handlers (Voqea Ishlovchilari)

Voqeaga "reaksiya" qo'shishning **uchta asosiy usuli** mavjud, va ular orasida sifat va professional amaliyot jihatidan katta farq bor.

### 2.1. Inline HTML — `onclick="handler()"` (ISHLATISHDAN QOCHING)

```html
<!-- ESKI, TAVSIYA ETILMAYDIGAN usul -->
<button onclick="tugmaBosildi()">Bos</button>

<script>
  function tugmaBosildi() {
    console.log("Tugma bosildi");
  }
</script>
```

**Nima uchun bu usuldan qochish kerak:**

- HTML va JavaScript kodlarini **aralashtirib yuboradi** (separation of concerns tamoyilini buzadi)
- Bitta elementga faqat **BITTA** handler biriktirish mumkin — ikkinchisini qo'shsangiz, birinchisi **almashtiriladi**
- Global scope (`window`) da funksiya bo'lishini talab qiladi, bu esa nom to'qnashuvlariga olib kelishi mumkin
- Xavfsizlik siyosati (Content Security Policy — CSP) ko'pincha inline skriptlarni bloklaydi

### 2.2. DOM Property — `element.onclick = handler`

```javascript
const tugma = document.getElementById("tugma");

tugma.onclick = function () {
  console.log("Birinchi handler");
};

// XATOLIK: ikkinchi handler birinchisini ALMASHTIRADI (faqat bittasi ishlaydi)
tugma.onclick = function () {
  console.log("Ikkinchi handler");
};
// Natijada FAQAT "Ikkinchi handler" konsolga chiqadi, birinchisi YO'QOLDI

// Handler ni o'chirish
tugma.onclick = null;
```

Bu usul inline HTML dan biroz yaxshiroq (JavaScript va HTML ajratilgan), lekin **faqat bitta handler** biriktirish imkoniyati — uni katta loyihalar uchun noqulay qiladi.

### 2.3. `addEventListener()` — TAVSIYA ETILADIGAN, zamonaviy usul

```javascript
const tugma = document.getElementById("tugma");

// Bir nechta handler biriktirish MUMKIN - hammasi ishga tushadi
tugma.addEventListener("click", function () {
  console.log("Birinchi handler");
});

tugma.addEventListener("click", function () {
  console.log("Ikkinchi handler");
});
// Tugma bosilganda IKKALASI HAM ishlaydi: "Birinchi handler" VA "Ikkinchi handler"
```

#### To'liq sintaksis va parametrlar

```javascript
element.addEventListener(type, listener, options);
```

| Parametr   | Turi                    | Tavsifi                                                                              |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------ |
| `type`     | `string`                | Voqea nomi (masalan `"click"`, `"keydown"`) — `"on"` prefiksisiz!                    |
| `listener` | `function`              | Voqea yuz berganda chaqiriladigan funksiya (Event obyektini parametr sifatida oladi) |
| `options`  | `object` yoki `boolean` | Qo'shimcha sozlamalar (2.5-bandda batafsil)                                          |

### 2.4. `removeEventListener()` — handler ni olib tashlash

```javascript
function tugmaHandler() {
  console.log("Tugma bosildi");
}

tugma.addEventListener("click", tugmaHandler);

// Keyinroq, handler kerak bo'lmay qolganda:
tugma.removeEventListener("click", tugmaHandler);
```

**JUDA MUHIM QOIDA:** `removeEventListener()` ishlashi uchun, unga **AYNAN o'sha funksiya ishorasi (reference)** berilishi shart. Anonim funksiya yoki arrow function bilan yozilgan handler ni **o'chirib bo'lmaydi**, chunki har safar yangi funksiya "nusxasi" yaratiladi:

```javascript
// ❌ XATO - bu handler ni HECH QACHON o'chirib bo'lmaydi
tugma.addEventListener("click", function () {
  console.log("Bosildi");
});
tugma.removeEventListener("click", function () {
  console.log("Bosildi");
}); // ISHLAMAYDI - bu BUTUNLAY BOSHQA funksiya, garchi kodi bir xil bo'lsa ham!

// ✅ TO'G'RI - funksiyani alohida o'zgaruvchiga saqlash SHART
function bosishHandler() {
  console.log("Bosildi");
}
tugma.addEventListener("click", bosishHandler);
tugma.removeEventListener("click", bosishHandler); // TO'G'RI ishlaydi
```

### 2.5. `addEventListener()` ning qo'shimcha opsiyalari — `{ capture, once, passive, signal }`

Zamonaviy `addEventListener()` uchinchi parametr sifatida obyekt qabul qiladi, unda quyidagi sozlamalar mavjud:

```javascript
element.addEventListener("click", handler, {
  capture: false, // capturing bosqichida ishlaydimi (3-bo'limda batafsil)
  once: true, // handler FAQAT BIR MARTA ishga tushadi, keyin AVTOMATIK o'chiriladi
  passive: true, // handler HECH QACHON preventDefault() chaqirmasligini "va'da qiladi" (unumdorlik uchun)
  signal: kontroller.signal, // AbortController orqali handler ni bekor qilish (2.6-bandda)
});
```

#### `once: true` — bir martalik handler

```javascript
// Faqat BIR marta ishga tushadi, keyin avtomatik o'chiriladi (removeEventListener kerak emas)
tugma.addEventListener(
  "click",
  () => {
    console.log("Bu faqat BIR marta ko'rinadi");
  },
  { once: true },
);
```

#### `passive: true` — skroll unumdorligini oshirish

```javascript
// passive: true - brauzerga "men preventDefault() chaqirmayman" deb va'da beradi,
// shu sababli brauzer skroll animatsiyasini handler tugashini KUTMASDAN darhol boshlashi mumkin
document.addEventListener(
  "touchstart",
  () => {
    console.log("Teginish boshlandi");
  },
  { passive: true },
);

// Bu ayniqsa touchstart/touchmove/wheel kabi voqealarda MUHIM,
// chunki ular JUDA tez-tez ishga tushadi va skrollni "sekinlashtirishi" mumkin
```

### 2.6. `AbortController` bilan Event Listener Lifecycle ni boshqarish

Zamonaviy usulda, bir nechta event listener larni **birgalikda, bitta buyruq bilan** o'chirish uchun `AbortController` ishlatiladi — bu ko'p sonli `removeEventListener()` chaqiruvlarini yozishning o'rnini bosadi.

```javascript
const kontroller = new AbortController();

// Bir nechta handler bitta signal bilan biriktiriladi
button1.addEventListener("click", handler1, { signal: kontroller.signal });
button2.addEventListener("mouseenter", handler2, { signal: kontroller.signal });
document.addEventListener("keydown", handler3, { signal: kontroller.signal });

// Barcha uchta handler ni BIR MARTA chaqiruv bilan o'chirish
kontroller.abort();
// Endi button1, button2, document dagi handler lar BARCHASI o'chirilgan
```

**Amaliy qo'llanish** — komponent "yo'q qilinganda" (masalan React/Vue komponent unmount bo'lganda, yoki modal yopilganda) barcha unga tegishli handler larni tozalash uchun juda foydali, va **memory leak (xotira sizib chiqishi)** larning oldini oladi.

---

## 🎯 3. Event Object (Voqea Obyekti)

Har bir handler chaqirilganda, unga **avtomatik ravishda** Event obyekti uzatiladi — bu obyekt voqea haqidagi **barcha ma'lumotni** o'z ichiga oladi.

```javascript
element.addEventListener("click", function (event) {
  // "event" - Event obyekti, brauzer tomonidan avtomatik uzatiladi
  console.log(event);
});
```

### 3.1. `event.type`

Voqea turini (nomi) matn sifatida qaytaradi:

```javascript
element.addEventListener("click", (event) => {
  console.log(event.type); // "click"
});
```

### 3.2. `event.target` — voqea AYNAN YUZ BERGAN element

`target` — foydalanuvchi bevosita **ta'sir ko'rsatgan (masalan bosgan) haqiqiy element**.

```html
<div id="konteyner">
  <button id="tugma">Bos</button>
</div>
```

```javascript
document.getElementById("konteyner").addEventListener("click", (event) => {
  console.log(event.target); // <button id="tugma"> - AYNAN qayerga bosilgan bo'lsa, o'sha
});
```

### 3.3. `event.currentTarget` — handler BIRIKTIRILGAN element

`currentTarget` — handler qaysi elementga `addEventListener()` orqali **biriktirilgan bo'lsa**, aynan o'sha elementga ishora qiladi — bu **bubbling** tufayli `target` dan farqli bo'lishi mumkin.

```javascript
document.getElementById("konteyner").addEventListener("click", (event) => {
  console.log(event.target); // <button id="tugma"> (bosilgan JOY)
  console.log(event.currentTarget); // <div id="konteyner"> (handler QAYERGA biriktirilgan)
});
```

**Bu farq nima uchun muhim?** Chunki voqealar DOM bo'ylab **"ko'tariladi" (bubbling)** — agar handler `konteyner` ga biriktirilgan bo'lsa-yu, lekin foydalanuvchi ichkarida joylashgan `tugma` ni bossa, `currentTarget` doim `konteyner` bo'ladi (chunki shu yerga biriktirilgan), `target` esa har doim **aynan bosilgan** elementni ko'rsatadi.

### 3.4. `event.preventDefault()` — standart xatti-harakatni bloklash

Ko'pgina HTML elementlar **standart (default) xatti-harakatga** ega: masalan `<a>` tegini bosish sahifani boshqa manzilga o'tkazadi, formani yuborish sahifani qayta yuklaydi. `preventDefault()` — aynan shu **standart xatti-harakatni bloklaydi**, lekin voqeaning o'zi (va uning bubbling jarayoni) davom etadi.

```javascript
// Havolani bosilganda sahifa o'tishini bloklash
havola.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Havola bosildi, lekin sahifa o'tmadi");
});

// Formani yuborilganda sahifa qayta yuklanishini bloklash
forma.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Forma AJAX orqali yuboriladi, sahifa qayta yuklanmaydi");
});
```

### 3.5. `event.stopPropagation()` va `event.stopImmediatePropagation()`

```javascript
// stopPropagation() - voqeaning DOM bo'ylab keyingi TARQALISHINI to'xtatadi
// (lekin SHU elementdagi qolgan handler lar ishlashda davom etadi)
ichkiElement.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Bu ishlaydi, lekin tashqi elementlarga TARQALMAYDI");
});

// stopImmediatePropagation() - stopPropagation() dan KUCHLIROQ:
// tarqalishni TO'XTATADI VA shu elementdagi QOLGAN handler larni ham TO'XTATADI
ichkiElement.addEventListener("click", (event) => {
  event.stopImmediatePropagation();
  console.log("Bu ishlaydi");
});
ichkiElement.addEventListener("click", () => {
  console.log("Bu ISHLAMAYDI - chunki yuqoridagi handler uni to'xtatdi");
});
```

---

## 🔄 4. Event Propagation (Voqea Tarqalishi)

Bu — DOM Events tizimidagi **eng muhim va chuqur tushunilishi kerak bo'lgan** mexanizmlardan biri.

### 4.1. Uchta bosqich (Phase)

Voqea DOM daraxtida yuz berganda, u **uchta bosqichdan** o'tadi:

```
1. CAPTURING PHASE (tutish bosqichi) - YUQORIDAN PASTGA
   window -> document -> html -> body -> ... -> maqsad elementning OTASI

2. TARGET PHASE (maqsad bosqichi)
   Aynan foydalanuvchi bosgan elementning o'zida

3. BUBBLING PHASE (ko'tarilish bosqichi) - PASTDAN YUQORIGA
   maqsad elementning OTASI -> ... -> body -> html -> document -> window
```

Buni vizual tarzda tushunish uchun:

```html
<div id="tashqi">
  <div id="orta">
    <button id="ichki">Bos</button>
  </div>
</div>
```

Foydalanuvchi `#ichki` tugmasini bosganda, voqea quyidagi yo'lni bosib o'tadi:

```
CAPTURING:  window -> document -> html -> body -> #tashqi -> #orta -> #ichki
TARGET:     #ichki (bu yerda voqea "yuz beradi")
BUBBLING:   #ichki -> #orta -> #tashqi -> body -> html -> document -> window
```

### 4.2. `addEventListener()` uchinchi parametri — `useCapture`

```javascript
// Uchinchi parametr TRUE bo'lsa - handler CAPTURING bosqichida ishga tushadi
element.addEventListener("click", handler, true); // eski, boolean sintaksis
element.addEventListener("click", handler, { capture: true }); // zamonaviy sintaksis

// Uchinchi parametr FALSE yoki berilmasa (DEFAULT) - handler BUBBLING bosqichida ishga tushadi
element.addEventListener("click", handler, false); // yoki shunchaki: element.addEventListener("click", handler)
```

### 4.3. Amaliy misol — bosqichlarni ko'rsatish

```javascript
const tashqi = document.getElementById("tashqi");
const orta = document.getElementById("orta");
const ichki = document.getElementById("ichki");

// CAPTURING bosqichida handler lar (yuqoridan pastga ishga tushadi)
tashqi.addEventListener("click", () => console.log("1. Tashqi - CAPTURE"), {
  capture: true,
});
orta.addEventListener("click", () => console.log("2. Orta - CAPTURE"), {
  capture: true,
});

// BUBBLING bosqichida handler lar (pastdan yuqoriga ishga tushadi, DEFAULT xatti-harakat)
ichki.addEventListener("click", () =>
  console.log("3. Ichki - BUBBLE (TARGET)"),
);
orta.addEventListener("click", () => console.log("4. Orta - BUBBLE"));
tashqi.addEventListener("click", () => console.log("5. Tashqi - BUBBLE"));

// #ichki tugma bosilganda konsolga QUYIDAGI TARTIBDA chiqadi:
// 1. Tashqi - CAPTURE
// 2. Orta - CAPTURE
// 3. Ichki - BUBBLE (TARGET)
// 4. Orta - BUBBLE
// 5. Tashqi - BUBBLE
```

**Amaliy qoida:** Aksariyat holatlarda **bubbling (default)** rejimi ishlatiladi, chunki u ko'proq intuitiv. `capture: true` odatda maxsus vaziyatlarda — masalan, voqeani **bola elementga yetib borishidan OLDIN** ushlab qolish kerak bo'lganda ishlatiladi.

### 4.4. Barcha elementlarda bubbling ishlamaydi

Ba'zi voqealar (masalan `focus`, `blur`, `mouseenter`, `mouseleave`) **bubbling qilmaydi** — ular faqat aynan o'sha elementda ishga tushadi va yuqoriga "ko'tarilmaydi". Bu holatlarda ularning "bubbling qiladigan" muqobillari ishlatiladi (masalan `focus` o'rniga `focusin`, `mouseenter` o'rniga `mouseover`).

---

## 🎭 5. Event Delegation (Voqea Delegatsiyasi)

### 5.1. Muammo — ko'p sonli elementlarga alohida handler biriktirish

```html
<ul id="royxat">
  <li>Element 1</li>
  <li>Element 2</li>
  <li>Element 3</li>
  <!-- ... 1000 ta li bo'lishi mumkin -->
</ul>
```

```javascript
// ❌ SAMARASIZ USUL - har bir <li> ga alohida handler biriktirish
const barchaLilar = document.querySelectorAll("#royxat li");
barchaLilar.forEach((li) => {
  li.addEventListener("click", () => {
    console.log(`Bosildi: ${li.textContent}`);
  });
});
// MUAMMOLAR:
// 1. 1000 ta li bo'lsa - 1000 ta alohida handler xotirada saqlanadi (xotira isrofi)
// 2. Agar YANGI <li> DINAMIK tarzda qo'shilsa, unga handler AVTOMATIK biriktirilmaydi!
```

### 5.2. Yechim — Event Delegation

**Event Delegation** — voqealarning **bubbling** xususiyatidan foydalanib, ko'p sonli bola elementlarga alohida-alohida emas, balki ularning **UMUMIY OTASIGA BITTA handler** biriktirish texnikasi.

```javascript
// ✅ SAMARALI USUL - faqat BITTA handler, OTA elementga biriktirilgan
const royxat = document.getElementById("royxat");

royxat.addEventListener("click", (event) => {
  // event.target - AYNAN bosilgan <li> elementi (bubbling tufayli bu yerga "yetib keladi")
  if (event.target.tagName === "LI") {
    console.log(`Bosildi: ${event.target.textContent}`);
  }
});
```

### 5.3. `closest()` bilan aniqroq nazorat

Ba'zan `<li>` ichida yana boshqa elementlar (masalan `<span>`, `<b>`) bo'lishi mumkin, va foydalanuvchi aynan o'sha ichki elementga bosishi mumkin. Bu holatda `event.target.tagName === "LI"` ishlamaydi (chunki `target` — ichki `<span>` bo'ladi). Buning yechimi — `closest()` metodi:

```javascript
royxat.addEventListener("click", (event) => {
  // closest() - target dan boshlab, YUQORIGA qarab eng yaqin mos keluvchi ajdodni topadi
  const liElement = event.target.closest("li");

  if (liElement) {
    // agar bosilgan joy <li> ICHIDA (yoki aynan <li> ning o'zi) bo'lsa
    console.log(`Bosildi: ${liElement.textContent}`);
  }
});
```

### 5.4. Dinamik elementlar bilan Event Delegation — eng katta afzallik

```javascript
const royxat = document.getElementById("royxat");

// Handler BIR MARTA, boshida biriktiriladi
royxat.addEventListener("click", (event) => {
  const liElement = event.target.closest("li");
  if (liElement) {
    console.log(`Bosildi: ${liElement.textContent}`);
  }
});

// Keyinroq, DINAMIK tarzda yangi <li> qo'shiladi
function yangiElementQoshish(matn) {
  const yangiLi = document.createElement("li");
  yangiLi.textContent = matn;
  royxat.appendChild(yangiLi);
  // DIQQAT: yangiLi ga ALOHIDA handler biriktirish SHART EMAS!
  // Chunki u royxat ICHIDA bo'lgani uchun, bosilganda bubbling orqali
  // royxat dagi handler AVTOMATIK ishlaydi
}

yangiElementQoshish("Yangi element");
// Bu yangi elementga bosilganda ham handler TO'G'RI ishlaydi - qo'shimcha kod kerak emas!
```

### 5.5. Event Delegation ning afzalliklari va cheklovlari

**Afzalliklari:**

- Xotirada **bitta** handler saqlanadi, minglab emas — unumdorlik uchun juda foydali
- Dinamik qo'shilgan elementlar **avtomatik** ishlaydi, qo'shimcha handler biriktirish shart emas
- Kodni soddalashtiradi va boshqarishni osonlashtiradi

**Cheklovlari:**

- Bubbling qilmaydigan voqealar (`focus`, `blur`, `mouseenter`, `mouseleave`) uchun to'g'ridan-to'g'ri ishlamaydi (ularning bubbling qiladigan variantlari — `focusin`/`focusout`/`mouseover`/`mouseout` ishlatilishi kerak)
- Juda chuqur ichma-ich (deeply nested) strukturalarda, `event.target` dan kerakli elementgacha yetib borish uchun ko'proq logika talab qilinishi mumkin

---

## 🎨 6. Custom Events (O'z Voqealarini Yaratish)

Brauzer taqdim etadigan standart voqealardan (`click`, `submit` va h.k.) tashqari, dasturchi **o'zining maxsus voqealarini** yaratishi va ularni boshqa kod qismlariga "eshittirishi" mumkin.

### 6.1. `new CustomEvent()` bilan yaratish

```javascript
// Sintaksis
const mahsulotQoshildiVoqeasi = new CustomEvent("mahsulotQoshildi", {
  detail: {
    // "detail" - voqea bilan birga uzatiladigan ISTALGAN qo'shimcha ma'lumot
    mahsulotNomi: "Noutbuk",
    narx: 5000000,
  },
  bubbles: true, // bu voqea DOM bo'ylab "ko'tarilishi" kerakmi?
  cancelable: true, // bu voqeani preventDefault() orqali bekor qilish mumkinmi?
});
```

### 6.2. `dispatchEvent()` bilan voqeani "ishga tushirish"

```javascript
const savatchaElement = document.getElementById("savatcha");

// Voqeani biror elementdan "chiqarish" (dispatch qilish)
savatchaElement.dispatchEvent(mahsulotQoshildiVoqeasi);
```

### 6.3. Custom Event ni tinglash

```javascript
savatchaElement.addEventListener("mahsulotQoshildi", (event) => {
  console.log(`Yangi mahsulot: ${event.detail.mahsulotNomi}`);
  console.log(`Narxi: ${event.detail.narx}`);
});
```

### 6.4. To'liq amaliy misol — komponentlar orasida aloqa

Custom Event lar, ayniqsa **bir-biri bilan bog'liq bo'lmagan** JavaScript kod qismlari orasida aloqa o'rnatish uchun juda foydali (masalan katta loyihada turli modullar orasida):

```javascript
class Savatcha {
  constructor(element) {
    this.element = element;
    this.mahsulotlar = [];
  }

  mahsulotQoshish(mahsulot) {
    this.mahsulotlar.push(mahsulot);

    // Boshqa qismlarga "mahsulot qo'shildi" deb xabar berish
    const voqea = new CustomEvent("savatchaYangilandi", {
      detail: {
        mahsulotlar: this.mahsulotlar,
        jamiSoni: this.mahsulotlar.length,
      },
      bubbles: true,
    });
    this.element.dispatchEvent(voqea);
  }
}

const savatcha = new Savatcha(document.getElementById("savatcha"));

// Sahifaning BUTUNLAY BOSHQA qismi, savatcha klassi haqida hech narsa bilmasa ham,
// shu voqeaga obuna bo'lib, unga reaksiya bildirishi mumkin:
document
  .getElementById("savatcha-hisoblagich")
  .addEventListener("savatchaYangilandi", (event) => {
    document.getElementById("savatcha-hisoblagich").textContent =
      event.detail.jamiSoni;
  });

savatcha.mahsulotQoshish({ nomi: "Sichqoncha", narx: 150000 });
// Avtomatik ravishda hisoblagich yangilanadi
```

---

## ⏱️ 7. Debouncing va Throttling (Unumdorlik uchun)

### 7.1. Muammo — ba'zi voqealar JUDA tez-tez ishga tushadi

`scroll`, `resize`, `mousemove`, `input` kabi voqealar **soniyasiga o'nlab, hatto yuzlab marta** ishga tushishi mumkin. Agar handler ichida "og'ir" operatsiya (masalan API so'rovi, murakkab hisoblash yoki DOM manipulyatsiyasi) bo'lsa, bu sahifani **sekinlashtirishi** yoki hatto "muzlatib" qo'yishi mumkin.

```javascript
// ❌ MUAMMOLI KOD - har bir harf kiritilganda DARHOL API so'rovi yuboriladi
qidiruvInput.addEventListener("input", (event) => {
  fetch(`/api/qidiruv?q=${event.target.value}`); // "salom" so'zi uchun 5 marta so'rov yuboriladi!
});
```

### 7.2. Debouncing — "kutish va bitta marta bajarish"

**Debounce** — funksiyaning bajarilishini, oxirgi chaqiruvdan keyin **ma'lum vaqt (masalan 300ms) hech qanday yangi chaqiruv bo'lmasa**, kechiktirib bajarish texnikasi. Bu — foydalanuvchi **yozishni to'xtatgandan keyingina** amal bajarilishini ta'minlaydi.

```javascript
function debounce(funksiya, kechikish) {
  let taймер;
  return function (...args) {
    clearTimeout(taймер); // avvalgi rejalashtirilgan chaqiruvni bekor qilish
    таймер = setTimeout(() => {
      funksiya.apply(this, args);
    }, kechikish);
  };
}

// Foydalanish
const debounceQilinganQidiruv = debounce((qidiruvSozi) => {
  console.log(`API so'rovi yuborilmoqda: ${qidiruvSozi}`);
  fetch(`/api/qidiruv?q=${qidiruvSozi}`);
}, 300);

qidiruvInput.addEventListener("input", (event) => {
  debounceQilinganQidiruv(event.target.value);
});
// Foydalanuvchi "salom" deb yozayotganda - HAR bir harfda funksiya chaqiriladi,
// LEKIN faqat foydalanuvchi 300ms davomida YOZMASDAN TO'XTAGANDA,
// haqiqiy API so'rovi YUBORILADI (faqat 1 marta, "salom" so'zi to'liq bo'lgach)
```

**Debounce qachon ishlatiladi:** qidiruv input lari (search-as-you-type), forma validatsiyasi, "auto-save" funksiyalari, window resize hisoblashlari.

### 7.3. Throttling — "muntazam oraliqlarda bajarish"

**Throttle** — funksiyaning bajarilishini, **ma'lum vaqt oralig'ida FAQAT BIR MARTA** ishga tushishini ta'minlaydi (debounce dan farqli, u "kutmaydi", balki muntazam intervallar bilan ishlaydi).

```javascript
function throttle(funksiya, oraliq) {
  let oxirgiBajarish = 0;
  return function (...args) {
    const hozir = Date.now();
    if (hozir - oxirgiBajarish >= oraliq) {
      funksiya.apply(this, args);
      oxirgiBajarish = hozir;
    }
  };
}

// Foydalanish
const throttleQilinganScroll = throttle(() => {
  console.log(`Skroll pozitsiyasi: ${window.scrollY}`);
}, 200);

window.addEventListener("scroll", throttleQilinganScroll);
// Foydalanuvchi qanchalik tez skroll qilmasin, funksiya HAR 200ms da FAQAT
// BIR MARTA ishga tushadi (soniyasiga 100 marta emas)
```

**Throttle qachon ishlatiladi:** scroll voqealari (infinite scroll, "orqaga qaytish" tugmasini ko'rsatish), window resize (layout hisoblash), o'yinlarda sichqoncha harakatini kuzatish.

### 7.4. Debounce va Throttle farqi — vizual tushuntirish

```
Foydalanuvchi harakati:    | | | | | | | | | |  (juda tez-tez, masalan yozish)

DEBOUNCE (faqat OXIRIDA, kutish tugagach):
                            . . . . . . . . . [BAJARILDI]
                            (faqat bitta marta, harakat TO'XTAGANDAN keyin)

THROTTLE (MUNTAZAM oraliqlar bilan):
                            [BAJARILDI] . . [BAJARILDI] . . [BAJARILDI]
                            (belgilangan vaqt oralig'ida, harakat davom etayotganda ham)
```

|                  | Debounce                            | Throttle                                                      |
| ---------------- | ----------------------------------- | ------------------------------------------------------------- |
| Qachon bajaradi  | Faqat harakat TO'XTAGANDAN keyin    | MUNTAZAM oraliqlar bilan, harakat davomida ham                |
| Qachon ishlatish | Qidiruv, auto-save, validatsiya     | Scroll, resize, animatsiya                                    |
| Natija           | Faqat OXIRGI chaqiruv "hisoblanadi" | Vaqt oralig'ida BIRINCHI (yoki oxirgi) chaqiruv "hisoblanadi" |

---

## 📋 8. Yakuniy xulosa jadvali — barcha muhim tushunchalar

| Kategoriya                                    | API/Tushuncha                                                 |
| --------------------------------------------- | ------------------------------------------------------------- |
| Voqea biriktirish                             | `addEventListener()`, `removeEventListener()`                 |
| Voqea obyekti                                 | `event.target`, `event.currentTarget`, `event.type`           |
| Standart harakatni bloklash                   | `event.preventDefault()`                                      |
| Tarqalishni to'xtatish                        | `event.stopPropagation()`, `event.stopImmediatePropagation()` |
| Tarqalish bosqichlari                         | Capturing → Target → Bubbling                                 |
| Ko'p elementga bitta handler                  | Event Delegation, `closest()`                                 |
| O'z voqeasini yaratish                        | `new CustomEvent()`, `dispatchEvent()`                        |
| Handler lar tozalash                          | `AbortController`, `{ signal }`                               |
| Bir martalik handler                          | `{ once: true }`                                              |
| Unumdorlik (skroll)                           | `{ passive: true }`                                           |
| Tez-tez ishga tushuvchi voqealarni boshqarish | Debounce, Throttle                                            |

---

## 💡 9. Best Practices (Tavsiyalar)

```javascript
// ✅ 1. Har doim addEventListener() dan foydalaning, inline HTML yoki .onclick dan emas

// ✅ 2. Ko'p sonli o'xshash elementlar (ro'yxat, jadval qatorlari) uchun
//       alohida-alohida handler o'rniga Event Delegation ishlating

// ✅ 3. removeEventListener() kerak bo'lsa, handler funksiyasini albatta
//       alohida o'zgaruvchida saqlang (anonim funksiya bilan o'chirib bo'lmaydi)

// ✅ 4. scroll, resize, mousemove, input kabi tez-tez ishga tushuvchi voqealarda
//       debounce yoki throttle qo'llang

// ✅ 5. Formani yuborishda ALWAYS event.preventDefault() chaqiring
//       (agar AJAX/fetch orqali yubormoqchi bo'lsangiz)

// ✅ 6. Komponent/modal yo'q qilinganda, unga tegishli barcha event listener larni
//       AbortController orqali tozalang - memory leak lardan saqlaning

// ✅ 7. touchstart/touchmove kabi voqealarda { passive: true } dan foydalaning,
//       agar preventDefault() chaqirish shart bo'lmasa - bu skroll unumdorligini oshiradi

// ✅ 8. event.target va event.currentTarget farqini har doim yodda tuting,
//       ayniqsa Event Delegation ishlatganda
```

---

Ushbu reference — DOM Events tizimining barcha asosiy va zarur tushunchalarini mantiqiy ketma-ketlikda qamrab oladi: voqea turlaridan boshlab (sichqoncha, klaviatura, forma, oyna, teginish, sudrash, almashish buferi), voqea handler larini biriktirish usullari, Event obyektining ichki tuzilishi, voqea tarqalishi (capturing/bubbling), Event Delegation texnikasi, Custom Event lar yaratish, va nihoyat — unumdorlik uchun debounce/throttle texnikalarigacha.
