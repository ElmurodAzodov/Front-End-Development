# 🌐 **Browser Object Model (BOM)**

---

## 📌 0. BOM nima va DOM dan farqi?

**BOM (Browser Object Model)** — brauzer oynasining o'zi bilan bog'liq bo'lgan obyektlar tizimi: oyna o'lchamlari, brauzer tarixi, joriy URL manzil, ekran ma'lumotlari, cookie lar va h.k. BOM — **DOM dan farqli** o'laroq, hujjat (HTML) tarkibi bilan emas, balki **brauzerning o'zi** bilan bog'liq.

**DOM va BOM farqi:**

|                     | DOM                                       | BOM                                                                                                |
| ------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Nima bilan ishlaydi | HTML hujjat tarkibi (elementlar, matn)    | Brauzer oynasining o'zi                                                                            |
| Kirish nuqtasi      | `document`                                | `window`                                                                                           |
| Standart            | W3C tomonidan rasmiy standartlashtirilgan | Rasmiy yagona standart YO'Q (brauzerlar orasida amaliyot bo'yicha kelishilgan — de facto standart) |
| Misollar            | `querySelector`, `createElement`          | `location`, `history`, `navigator`, `screen`                                                       |

**Muhim tushuncha:** `document` obyektining o'zi ham, aslida `window` ning bir qismi hisoblanadi (`window.document`). Shu ma'noda **DOM — BOM ning bir bo'lagi** deb qarash mumkin, garchi amaliyotda ular alohida mavzular sifatida o'rganiladi.

```javascript
console.log(window.document === document); // true - window ning ichida document bor
```

Ushbu reference quyidagi tartibda o'rganishga mo'ljallangan: avval `window` obyektining o'zi (o'lcham, metodlar, timerlar, animatsiya), so'ngra brauzer va qurilma haqida ma'lumot beruvchi `navigator`, joriy manzil bilan ishlash uchun `location`, brauzer tarixi bilan ishlash uchun `history`, ekran ma'lumotlari uchun `screen`, va nihoyat — ma'lumotlarni saqlash uchun cookie va Web Storage.

---

## 🌐 1. Window Object

`window` — brauzer oynasi (yoki tab) ni ifodalovchi **global obyekt**. Barcha global o'zgaruvchilar, funksiyalar (`setTimeout`, `alert` va h.k.) — aslida `window` ning xususiyatlari hisoblanadi.

```javascript
// Bu ikkalasi bir xil narsani anglatadi:
console.log(innerWidth);
console.log(window.innerWidth);

// window - JavaScript brauzerda global scope hisoblanadi
function mening_funksiyam() {}
console.log(window.mening_funksiyam); // funksiya - global deb e'lon qilingan funksiyalar window ga qo'shiladi
```

### 1.1. Dimensions (O'lchamlar)

Brauzer oynasi va ekranning turli o'lchamlarini olish uchun bir nechta xususiyat mavjud, va ularning har biri **farqli narsani** o'lchaydi.

```javascript
// innerWidth / innerHeight - BRAUZER OYNASINING "ichki" (viewport) o'lchami
// Bu - foydalanuvchi HAQIQATAN ko'radigan sahifa maydoni (skroll paneli, brauzer paneli KIRMAYDI)
console.log(window.innerWidth); // masalan 1440 (piksel)
console.log(window.innerHeight); // masalan 780

// outerWidth / outerHeight - BUTUN BRAUZER OYNASINING o'lchami
// Bu brauzerning manzillar paneli, yorliqlar, skroll paneli - HAMMASINI o'z ichiga oladi
console.log(window.outerWidth); // masalan 1456 (biroz KATTAROQ innerWidth dan)
console.log(window.outerHeight); // masalan 860
```

**Vizual tushuntirish:**

```
┌─────────────────────────────────────┐  <- outerWidth/outerHeight (BUTUN oyna)
│  [Manzillar paneli, tugmalar]          │
│ ┌───────────────────────────────┐   │
│ │                                   │   │  <- innerWidth/innerHeight
│ │      SAHIFA KONTENTI               │   │     (faqat "ko'rinadigan" hudud)
│ │                                   │   │
│ └───────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Amaliy qo'llanish:** Responsive dizayn logikasi uchun odatda `innerWidth` ishlatiladi (masalan mobil/desktop rejimini aniqlash uchun):

```javascript
function qurilmaTuriniAniqlash() {
  if (window.innerWidth < 768) {
    return "mobil";
  } else if (window.innerWidth < 1024) {
    return "planshet";
  } else {
    return "desktop";
  }
}

window.addEventListener("resize", () => {
  console.log(`Joriy qurilma turi: ${qurilmaTuriniAniqlash()}`);
});
```

### 1.2. Window Methods (Metodlar)

#### `window.open()`

Yangi brauzer oynasi (yoki tab) ochadi.

```javascript
window.open(url, target, windowFeatures);
```

| Parametr         | Turi     | Majburiymi | Tavsifi                                                        |
| ---------------- | -------- | ---------- | -------------------------------------------------------------- |
| `url`            | `string` | ❌ Yo'q    | Ochiladigan manzil (agar berilmasa, bo'sh oyna ochiladi)       |
| `target`         | `string` | ❌ Yo'q    | `"_blank"` (yangi tab), `"_self"` (joriy tab), yoki maxsus nom |
| `windowFeatures` | `string` | ❌ Yo'q    | Oyna xususiyatlari (masalan `"width=500,height=400"`)          |

```javascript
// Yangi tabda ochish
const yangiOyna = window.open("https://example.com", "_blank");

// Kichik "popup" oyna sifatida ochish (ba'zi brauzerlarda bloklanishi mumkin)
const popup = window.open(
  "https://example.com",
  "mening-popupim",
  "width=500,height=400,left=100,top=100",
);

// Ochilgan oynani boshqarish
if (popup) {
  popup.focus(); // fokusni yangi oynaga o'tkazish
}
```

**Muhim eslatma:** Zamonaviy brauzerlar **pop-up bloklovchi** ga ega, va agar `window.open()` foydalanuvchi harakati (masalan tugma bosishi) natijasida emas, balki dastur o'zi (masalan `setTimeout` ichida) chaqirilsa, brauzer uni **avtomatik bloklab qo'yishi** mumkin.

#### `window.close()`

Joriy (yoki `window.open()` orqali ochilgan) oynani yopadi.

```javascript
const popup = window.open("https://example.com");
// Keyinroq:
popup.close();

// Diqqat: xavfsizlik sabablari bilan, brauzer FAQAT skript o'zi ochgan
// oynalarni yopishga ruxsat beradi. Foydalanuvchi qo'lda ochgan tabni
// window.close() orqali yopib bo'lmaydi (aksariyat brauzerlarda xato/ishlamaslik).
```

#### `window.scrollTo()` va `window.scrollBy()`

```javascript
// scrollTo() - sahifani ANIQ, ABSOLUT koordinataga skroll qiladi
window.scrollTo(x, y);
window.scrollTo(0, 500); // sahifaning tepasidan 500px pastga

// Zamonaviy sintaksis - obyekt bilan (silliq animatsiya bilan)
window.scrollTo({
  top: 500,
  left: 0,
  behavior: "smooth", // "auto" (darhol) yoki "smooth" (animatsiyali)
});

// scrollBy() - JORIY pozitsiyaga NISBATAN skroll qiladi (relative)
window.scrollBy(0, 100); // joriy pozitsiyadan yana 100px pastga

window.scrollBy({
  top: 100,
  behavior: "smooth",
});

// Sahifaning eng tepasiga qaytish (masalan "Back to top" tugmasi uchun)
function tepagaQaytish() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
```

### 1.3. Timers (Vaqt Boshqaruvchilari)

#### `setTimeout()` — bir martalik kechiktirilgan bajarish

```javascript
setTimeout(funksiya, kechikish_ms, ...qoshimchaArgumentlar);
```

| Parametr                  | Turi       | Majburiymi          | Tavsifi                                          |
| ------------------------- | ---------- | ------------------- | ------------------------------------------------ |
| `funksiya`                | `function` | ✅ Ha               | Belgilangan vaqtdan keyin bajariladigan funksiya |
| `kechikish_ms`            | `number`   | ❌ Yo'q (default 0) | Millisoniyalarda kutish vaqti                    |
| `...qoshimchaArgumentlar` | `any`      | ❌ Yo'q             | Funksiyaga uzatiladigan qo'shimcha argumentlar   |

```javascript
// 2 soniyadan keyin BIR MARTA bajariladi
const taймерId = setTimeout(() => {
  console.log("2 soniya o'tdi");
}, 2000);

// Qo'shimcha argumentlar bilan
setTimeout(
  (ism, xabar) => {
    console.log(`${ism}: ${xabar}`);
  },
  1000,
  "Tizim",
  "Vaqt tugadi",
);
```

`setTimeout()` — `Return Value` sifatida **noyob timer ID (raqam)** qaytaradi, u keyinchalik `clearTimeout()` orqali bekor qilish uchun ishlatiladi.

#### `clearTimeout()` — rejalashtirilgan timeout ni bekor qilish

```javascript
const taймерId = setTimeout(() => {
  console.log("Bu hech qachon chiqmaydi");
}, 5000);

clearTimeout(taймерId); // timeout ishga tushishidan OLDIN bekor qilindi
```

#### `setInterval()` — TAKRORLANUVCHI bajarish

```javascript
setInterval(funksiya, oraliq_ms, ...qoshimchaArgumentlar);
```

`setInterval()` — berilgan funksiyani, belgilangan vaqt oralig'ida **CHEKSIZ ravishda takrorlab** bajaradi, toki uni `clearInterval()` orqali to'xtatmaguncha.

```javascript
let hisoblagich = 0;
const intervalId = setInterval(() => {
  hisoblagich++;
  console.log(`Soniya: ${hisoblagich}`);

  if (hisoblagich >= 5) {
    clearInterval(intervalId); // 5 marta ishlagandan keyin TO'XTATISH
  }
}, 1000);
```

#### `clearInterval()`

```javascript
const intervalId = setInterval(() => {
  console.log("Har soniyada takrorlanadi");
}, 1000);

// Kerak bo'lganda to'xtatish (masalan tugma bosilganda)
document.getElementById("toxtatish-tugmasi").addEventListener("click", () => {
  clearInterval(intervalId);
});
```

**Muhim eslatma — `setTimeout(fn, 0)` xatti-harakati:** Garchi kechikish `0` deb berilsa ham, funksiya **DARHOL bajarilmaydi**. JavaScript **bir tomlangan (single-threaded)** til bo'lgani sababli, `setTimeout` har doim **Event Loop** (voqealar sikli) orqali, joriy bajarilayotgan barcha sinxron kod tugagandan KEYIN ishga tushadi:

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");

// Natija: 1, 3, 2 (garchi kechikish 0 bo'lsa ham, "2" OXIRIDA chiqadi)
```

### 1.4. Animation (Animatsiya)

#### `requestAnimationFrame()`

`setInterval()` orqali animatsiya yaratish — **eskirgan va samarasiz** usul, chunki u brauzerning haqiqiy chizish (rendering) siklidan **mustaqil** ishlaydi va noaniq vaqt oralig'ida ishga tushishi mumkin. `requestAnimationFrame()` esa — brauzerning **haqiqiy chizish siklini (odatda soniyasiga 60 marta — 60fps)** hisobga olib, animatsiyani **eng optimal, silliq** tarzda ishga tushiradi.

```javascript
requestAnimationFrame(callback);
```

| Parametr   | Turi       | Majburiymi | Tavsifi                                                                                                                                                   |
| ---------- | ---------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `callback` | `function` | ✅ Ha      | Har bir "frame" (kadr) chizilishidan OLDIN chaqiriladigan funksiya. Bu funksiyaga `timestamp` (millisoniyalarda vaqt belgisi) parametr sifatida uzatiladi |

```javascript
let pozitsiya = 0;
const element = document.getElementById("animatsiyaElementi");

function animatsiyaQadam(vaqtBelgisi) {
  pozitsiya += 2; // har kadrda 2px siljish
  element.style.transform = `translateX(${pozitsiya}px)`;

  if (pozitsiya < 300) {
    requestAnimationFrame(animatsiyaQadam); // KEYINGI kadr uchun qayta chaqirish
  }
}

requestAnimationFrame(animatsiyaQadam); // birinchi kadrni ishga tushirish
```

#### `cancelAnimationFrame()`

```javascript
const animatsiyaId = requestAnimationFrame(animatsiyaQadam);

// Animatsiyani to'xtatish
cancelAnimationFrame(animatsiyaId);
```

**`setInterval` va `requestAnimationFrame` solishtirish:**

|                                           | `setInterval`                                         | `requestAnimationFrame`                  |
| ----------------------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| Sinxronizatsiya                           | Brauzer render siklidan MUSTAQIL                      | Brauzer render sikli bilan SINXRON       |
| Sahifa "ko'rinmas" (fon tabida) bo'lganda | Ishlab turishda davom etadi (batareyani isrof qiladi) | AVTOMATIK to'xtaydi (batareyani tejaydi) |
| Silliq animatsiya uchun                   | ❌ Tavsiya etilmaydi                                  | ✅ Eng yaxshi tanlov                     |

---

## 📜 2. Navigator Object

`navigator` — foydalanuvchining brauzeri va qurilmasi haqidagi ma'lumotlarni taqdim etadi.

### 2.1. `navigator.userAgent` — brauzer aniqlash (imkon qadar QOCHISH kerak)

```javascript
console.log(navigator.userAgent);
// "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36..."
```

**Nima uchun `userAgent` orqali brauzer aniqlashdan qochish kerak:** `userAgent` matni **soxtalashtirilishi (spoof qilinishi)** oson, brauzerlar orasida formatlari izchil emas, va yangi brauzer versiyalari chiqqanda kodni doimiy yangilab turish talab qilinadi. Zamonaviy amaliyotda, brauzer TURINI aniqlash o'rniga, **feature detection (funksionallikni tekshirish)** tavsiya etiladi:

```javascript
// ❌ TAVSIYA ETILMAYDIGAN usul - userAgent orqali brauzerni "taxmin qilish"
if (navigator.userAgent.includes("Chrome")) {
  console.log("Bu Chrome");
}

// ✅ TAVSIYA ETILADIGAN usul - funksionallikni to'g'ridan-to'g'ri tekshirish
if ("geolocation" in navigator) {
  console.log("Geolocation qo'llab-quvvatlanadi");
}
if (typeof window.fetch === "function") {
  console.log("Fetch API mavjud");
}
```

### 2.2. `navigator.language` va `navigator.languages`

```javascript
console.log(navigator.language); // "uz" yoki "en-US" - foydalanuvchining ASOSIY tili
console.log(navigator.languages); // ["uz", "ru", "en"] - USTUVORLIK tartibida barcha tanlangan tillar

// Amaliy qo'llanish - avtomatik til tanlash
function saytTiliniAniqlash() {
  const qollabQuvvatlanuvchiTillar = ["uz", "ru", "en"];
  const foydalanuvchiTili = navigator.language.split("-")[0]; // "en-US" -> "en"
  return qollabQuvvatlanuvchiTillar.includes(foydalanuvchiTili)
    ? foydalanuvchiTili
    : "en";
}
```

### 2.3. `navigator.onLine` — tarmoq holatini tekshirish

```javascript
console.log(navigator.onLine); // true (internet bor) yoki false (internet yo'q)

// Tarmoq holati o'zgarganda voqealarni tinglash
window.addEventListener("online", () => {
  console.log("Internet ulanishi TIKLANDI");
});

window.addEventListener("offline", () => {
  console.log("Internet ulanishi UZILDI");
});
```

**Muhim eslatma:** `navigator.onLine` faqat **qurilmaning tarmoq adapteri ulanganligini** ko'rsatadi, lekin bu **haqiqiy internet mavjudligini kafolatlamaydi** (masalan, Wi-Fi ulangan bo'lishi mumkin, lekin routerda internet yo'q bo'lishi mumkin). Haqiqiy ulanishni tekshirish uchun, odatda serverga kichik so'rov (`fetch`) yuborib, javob kelishini tekshirish tavsiya etiladi.

### 2.4. `navigator.geolocation` — joylashuv ma'lumotlari

```javascript
// getCurrentPosition() - joriy joylashuvni BIR MARTA olish
navigator.geolocation.getCurrentPosition(
  (pozitsiya) => {
    // muvaffaqiyatli bo'lganda chaqiriladigan callback
    console.log(`Kenglik: ${pozitsiya.coords.latitude}`);
    console.log(`Uzunlik: ${pozitsiya.coords.longitude}`);
    console.log(`Aniqlik: ${pozitsiya.coords.accuracy} metr`);
  },
  (xatolik) => {
    // xatolik yuz berganda chaqiriladigan callback
    console.log(`Xatolik: ${xatolik.message}`);
    // xatolik.code: 1 = ruxsat berilmadi, 2 = joylashuv aniqlanmadi, 3 = vaqt tugadi
  },
  {
    // ixtiyoriy sozlamalar
    enableHighAccuracy: true, // GPS orqali aniqroq natija (batareyani ko'proq sarflaydi)
    timeout: 5000, // 5 soniyada javob kelmasa, xatolik qaytariladi
    maximumAge: 0, // eski (keshlangan) natijadan foydalanmaslik
  },
);

// watchPosition() - joylashuv O'ZGARGANDA HAR SAFAR avtomatik chaqiriladi (masalan xarita navigatsiyasi uchun)
const kuzatishId = navigator.geolocation.watchPosition((pozitsiya) => {
  console.log(
    `Yangi joylashuv: ${pozitsiya.coords.latitude}, ${pozitsiya.coords.longitude}`,
  );
});

// Kuzatishni to'xtatish
navigator.geolocation.clearWatch(kuzatishId);
```

**Muhim eslatma:** Geolocation API — **HTTPS** protokoli talab qiladi (xavfsizlik sababli), va foydalanuvchidan **ruxsat so'raladi** — birinchi chaqiriqda brauzer avtomatik ravishda ruxsat oynasini ko'rsatadi.

### 2.5. `navigator.clipboard` — almashish buferi bilan ishlash

```javascript
// writeText() - matnni almashish buferiga NUSXALASH
async function matnniNusxalash(matn) {
  try {
    await navigator.clipboard.writeText(matn);
    console.log("Matn nusxalandi");
  } catch (xatolik) {
    console.log(`Xatolik: ${xatolik.message}`);
  }
}
matnniNusxalash("Bu matn nusxalanadi");

// readText() - almashish buferidan matn O'QISH
async function matnniOqish() {
  try {
    const matn = await navigator.clipboard.readText();
    console.log(`Buferdagi matn: ${matn}`);
  } catch (xatolik) {
    console.log(`Xatolik: ${xatolik.message}`);
  }
}
```

**Muhim eslatba:** Clipboard API — **HTTPS talab qiladi** va ko'pincha foydalanuvchi ruxsatiga (yoki to'g'ridan-to'g'ri foydalanuvchi harakati — masalan tugma bosishi — natijasida chaqirilishiga) bog'liq.

### 2.6. `navigator.mediaDevices` — kamera, mikrofon, ekran

```javascript
// Kamera va mikrofonga ruxsat so'rash
async function kameraniYoqish() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true, // kamera
      audio: true, // mikrofon
    });

    const videoElement = document.getElementById("kamera-korinishi");
    videoElement.srcObject = stream; // olingan videoni <video> tegiga ulash
  } catch (xatolik) {
    console.log(`Kameraga ruxsat berilmadi: ${xatolik.message}`);
  }
}

// Ekranni yozib olish (screen capture)
async function ekranniUlashish() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    const videoElement = document.getElementById("ekran-korinishi");
    videoElement.srcObject = stream;
  } catch (xatolik) {
    console.log(`Ekranni ulashish rad etildi: ${xatolik.message}`);
  }
}

// Mavjud qurilmalar ro'yxatini olish (kameralar, mikrofonlar)
async function qurilmalarRoyxati() {
  const qurilmalar = await navigator.mediaDevices.enumerateDevices();
  qurilmalar.forEach((qurilma) => {
    console.log(`${qurilma.kind}: ${qurilma.label}`); // masalan "videoinput: Front Camera"
  });
}
```

### 2.7. `navigator.serviceWorker` — PWA (Progressive Web App) asosi

`serviceWorker` — brauzer fonida, veb-sahifadan **mustaqil** ishlaydigan skript bo'lib, u offline ishlashni, push-bildirishnomalarni va fon rejimida sinxronizatsiyani ta'minlaydi.

```javascript
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registratsiya) => {
      console.log(
        "Service Worker muvaffaqiyatli ro'yxatdan o'tdi:",
        registratsiya.scope,
      );
    })
    .catch((xatolik) => {
      console.log("Service Worker ro'yxatdan o'tishida xatolik:", xatolik);
    });
}
```

**Eslatma:** Service Worker — chuqur mavzu bo'lib, u odatda **PWA (Progressive Web App)** alohida mavzusi doirasida batafsilroq o'rganiladi; bu yerda faqat BOM kontekstida uning mavjudligi qayd etilmoqda.

---

## 📍 3. Location Object

`location` (`window.location` yoki `document.location`) — joriy sahifaning URL manzili haqidagi to'liq ma'lumotni beradi va manzil bilan bog'liq amallarni (yo'naltirish, qayta yuklash) bajarish imkonini beradi.

### 3.1. URL ning tarkibiy qismlari

```javascript
// Misol URL: https://example.com:8080/mahsulotlar/telefon?rang=qora&narx=past#sharhlar

console.log(location.href); // "https://example.com:8080/mahsulotlar/telefon?rang=qora&narx=past#sharhlar" (TO'LIQ manzil)
console.log(location.protocol); // "https:" (protokol, doim ":" bilan tugaydi)
console.log(location.host); // "example.com:8080" (domen + port, agar standart bo'lmasa)
console.log(location.hostname); // "example.com" (faqat domen, PORTSIZ)
console.log(location.port); // "8080" (faqat port raqami)
console.log(location.pathname); // "/mahsulotlar/telefon" (domen dan keyingi YO'L)
console.log(location.search); // "?rang=qora&narx=past" (so'rov parametrlari, "?" bilan)
console.log(location.hash); // "#sharhlar" (sahifa ichidagi bo'lim, "#" bilan)
console.log(location.origin); // "https://example.com:8080" (protokol + host)
```

### 3.2. `location.search` ni tahlil qilish — `URLSearchParams` bilan

```javascript
// URL: https://example.com/mahsulotlar?rang=qora&narx=past&saralash=arzon

const parametrlar = new URLSearchParams(location.search);

console.log(parametrlar.get("rang")); // "qora"
console.log(parametrlar.get("narx")); // "past"
console.log(parametrlar.has("saralash")); // true
console.log(parametrlar.get("mavjud-emas")); // null

// Barcha parametrlarni aylanib chiqish
for (const [kalit, qiymat] of parametrlar) {
  console.log(`${kalit}: ${qiymat}`);
}

// Yangi parametr qo'shish/o'zgartirish
parametrlar.set("sahifa", "2");
console.log(parametrlar.toString()); // "rang=qora&narx=past&saralash=arzon&sahifa=2"
```

### 3.3. Sahifani boshqarish metodlari

```javascript
// reload() - sahifani QAYTA YUKLASH
location.reload();

// assign() - YANGI manzilga o'tish (brauzer TARIXIGA yangi yozuv qo'shiladi - "Orqaga" tugmasi ishlaydi)
location.assign("https://example.com/yangi-sahifa");

// href ga to'g'ridan-to'g'ri yozish - assign() bilan BIR XIL natija beradi
location.href = "https://example.com/yangi-sahifa";

// replace() - YANGI manzilga o'tish, LEKIN brauzer TARIXIDA joriy sahifani ALMASHTIRADI
// ("Orqaga" tugmasi bosilganda, o'chirilgan sahifaga emas, undan OLDINGI sahifaga qaytadi)
location.replace("https://example.com/yangi-sahifa");
```

**`assign()` va `replace()` farqi — amaliy misol:**

```javascript
// Login sahifasidan keyin foydalanuvchini boshqa sahifaga yo'naltirish:

// ❌ assign() bilan - foydalanuvchi "Orqaga" tugmasini bossa, LOGIN sahifasiga qaytadi
// (bu forma qayta yuborilishi kabi noqulayliklarga olib kelishi mumkin)
location.assign("/dashboard");

// ✅ replace() bilan - "Orqaga" tugmasi LOGIN sahifasini "atlab o'tadi"
// (login sahifasi tarixdan olib tashlangan, bu YAXSHIROQ UX beradi)
location.replace("/dashboard");
```

---

## 📜 4. History Object

`history` — brauzerning **tashrif buyurilgan sahifalar tarixi** bilan ishlash imkonini beradi.

### 4.1. Oddiy navigatsiya metodlari

```javascript
history.back(); // "Orqaga" tugmasi bilan bir xil - bir sahifa ORQAGA
history.forward(); // "Oldinga" tugmasi bilan bir xil - bir sahifa OLDINGA
history.go(-2); // 2 sahifa ORQAGA (manfiy son)
history.go(1); // 1 sahifa OLDINGA (musbat son)
history.go(0); // joriy sahifani QAYTA YUKLASH (location.reload() ga o'xshash)

console.log(history.length); // tarixdagi umumiy sahifalar soni
```

### 4.2. `pushState()` va `replaceState()` — SPA (Single Page Application) uchun

Bu ikkala metod — sahifani **QAYTA YUKLAMASDAN**, brauzer URL manzilini o'zgartirish imkonini beradi. Bu — zamonaviy SPA (React, Vue) freymvorklarining **routing (marshrutlash)** tizimlari asosida yotgan mexanizm.

```javascript
history.pushState(state, title, url);
```

| Parametr | Turi     | Majburiymi                                             | Tavsifi                                                                  |
| -------- | -------- | ------------------------------------------------------ | ------------------------------------------------------------------------ |
| `state`  | `object` | ✅ Ha (`null` bo'lishi mumkin)                         | Ushbu URL bilan bog'liq, keyinroq qayta olinishi mumkin bo'lgan ma'lumot |
| `title`  | `string` | ✅ Ha (deyarli barcha brauzerlar e'tiborsiz qoldiradi) | Sahifa sarlavhasi (amaliyotda ishlatilmaydi, bo'sh matn berish mumkin)   |
| `url`    | `string` | ❌ Yo'q                                                | Yangi URL (nisbiy yoki to'liq manzil)                                    |

```javascript
// pushState() - yangi TARIX YOZUVI qo'shadi (Orqaga tugmasi bilan qaytish mumkin)
history.pushState({ sahifa: "mahsulotlar" }, "", "/mahsulotlar");
console.log(location.pathname); // "/mahsulotlar" - URL o'zgardi, LEKIN sahifa QAYTA YUKLANMADI!

history.pushState({ sahifa: "savatcha" }, "", "/savatcha");
// Endi tarix: [bosh_sahifa, /mahsulotlar, /savatcha]

// replaceState() - JORIY tarix yozuvini ALMASHTIRADI (yangi yozuv QO'SHILMAYDI)
history.replaceState({ sahifa: "yangilangan" }, "", "/yangilangan-manzil");
```

### 4.3. `popstate` voqeasi — brauzer navigatsiya tugmalarini "ushlash"

Foydalanuvchi brauzerning **"Orqaga"** yoki **"Oldinga"** tugmalarini bosganda (yoki `history.back()/forward()/go()` chaqirilganda), `popstate` voqeasi ishga tushadi — bu SPA ilovalarida **URL o'zgarganda mos kontentni ko'rsatish** uchun ishlatiladi.

```javascript
window.addEventListener("popstate", (event) => {
  console.log(`URL o'zgardi: ${location.pathname}`);
  console.log(`Saqlangan state:`, event.state); // pushState/replaceState da berilgan "state" obyekti

  // Yangi URL ga mos kontentni ko'rsatish (SPA routing mantig'i)
  sahifaniYangilash(location.pathname);
});

function sahifaniYangilash(yol) {
  const kontent = document.getElementById("asosiy-kontent");
  if (yol === "/mahsulotlar") {
    kontent.textContent = "Mahsulotlar sahifasi";
  } else if (yol === "/savatcha") {
    kontent.textContent = "Savatcha sahifasi";
  }
}
```

**MUHIM ESLATMA:** `popstate` voqeasi **FAQAT** foydalanuvchi brauzer tugmalarini bosganda (yoki `history.back/forward/go()` chaqirilganda) ishga tushadi. `pushState()` yoki `replaceState()` **to'g'ridan-to'g'ri chaqirilganda**, `popstate` **ISHGA TUSHMAYDI** — shu sababli, agar SPA da yangi sahifaga o'tish paytida kontentni yangilash kerak bo'lsa, buni `pushState()` chaqirilgandan **keyin qo'lda** bajarish kerak:

```javascript
function sahifagaOtish(yol) {
  history.pushState({}, "", yol);
  sahifaniYangilash(yol); // pushState() popstate ni ISHGA TUSHIRMAYDI - qo'lda chaqirish kerak
}
```

---

## 💾 5. Screen Object

`screen` — foydalanuvchining **fizik ekrani** haqidagi ma'lumotni beradi (brauzer oynasi emas, balki butun monitor/displey).

```javascript
console.log(screen.width); // ekranning TO'LIQ kengligi (piksellarda)
console.log(screen.height); // ekranning TO'LIQ balandligi

console.log(screen.availWidth); // ekranning "FOYDALANISH MUMKIN BO'LGAN" kengligi
// (operatsion tizim taskbar/dock kabi elementlarni HISOBGA OLGAN holda)
console.log(screen.availHeight); // xuddi shunday, balandlik uchun

console.log(screen.colorDepth); // rang chuqurligi (odatda 24 yoki 30 bit)
console.log(screen.pixelDepth); // piksel chuqurligi
```

**`screen` va `window` o'lchamlari farqi:**

```
screen.width/height        - BUTUN FIZIK EKRAN (masalan 1920x1080)
screen.availWidth/Height   - Taskbar/Dock HISOBGA OLINGAN holda mavjud maydon (masalan 1920x1040)
window.outerWidth/Height   - BRAUZER OYNASINING o'zi (masalan 1440x900, agar oyna to'liq ekran bo'lmasa)
window.innerWidth/Height   - Brauzer oynasi ICHIDAGI ko'rinadigan maydon (masalan 1424x780)
```

**Amaliy qo'llanish** — masalan yangi oynani ekranning aynan o'rtasida ochish:

```javascript
function ortadaOynaOchish(url, kenglik, balandlik) {
  const chap = (screen.availWidth - kenglik) / 2;
  const yuqori = (screen.availHeight - balandlik) / 2;

  window.open(
    url,
    "ortadagi_oyna",
    `width=${kenglik},height=${balandlik},left=${chap},top=${yuqori}`,
  );
}
```

---

## 🍪 6. Cookies — `document.cookie`

Cookie — brauzerda saqlanadigan, **har bir HTTP so'rovi bilan avtomatik serverga yuboriladigan** kichik hajmdagi matn ma'lumoti. `document.cookie` — cookie lar bilan ishlash uchun **eng oddiy, lekin noqulay** interfeys hisoblanadi (chunki u xom matn qatori bilan ishlaydi).

### 6.1. Cookie o'qish

```javascript
console.log(document.cookie);
// "foydalanuvchi_id=42; til=uz; tema=qorong'u"
// BARCHA cookie lar BITTA matn qatorida, "; " bilan ajratilgan holda qaytariladi
```

### 6.2. Cookie yozish/o'rnatish

```javascript
// Oddiy cookie o'rnatish
document.cookie = "til=uz";

// Amal qilish muddati bilan (expires - UTC formatida sana)
document.cookie = "til=uz; expires=Fri, 31 Dec 2026 23:59:59 UTC";

// max-age orqali (soniyalarda, expires dan qulayroq)
document.cookie = "til=uz; max-age=" + 60 * 60 * 24 * 30; // 30 kun

// Qo'shimcha xavfsizlik sozlamalari bilan
document.cookie =
  "sessiya=abc123; max-age=3600; path=/; secure; samesite=strict";
```

| Atribut    | Tavsifi                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| `expires`  | Cookie qachon "o'chishi" kerakligini bildiruvchi ANIQ sana                                                  |
| `max-age`  | Cookie necha SONIYA amal qilishini bildiradi (expires dan zamonaviyroq)                                     |
| `path`     | Cookie qaysi YO'L (path) larda mavjud bo'lishini belgilaydi (`/` — butun sayt)                              |
| `domain`   | Cookie qaysi domenlarga tegishli ekanini belgilaydi                                                         |
| `secure`   | Faqat **HTTPS** orqali yuborilishini ta'minlaydi                                                            |
| `samesite` | CSRF hujumlaridan himoya (`strict`, `lax`, `none`)                                                          |
| `httponly` | ⚠️ Faqat SERVER tomonidan o'rnatiladi, JavaScript orqali **O'RNATIB YOKI O'QIB bo'lmaydi** (XSS dan himoya) |

### 6.3. Cookie ni o'chirish

```javascript
// Cookie ni o'chirish uchun, uning muddatini O'TGAN sanaga o'rnatish kerak
document.cookie = "til=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

// Yoki max-age=0 orqali
document.cookie = "til=; max-age=0; path=/";
```

### 6.4. Cookie larni "parse" qilish (tahlil qilish) — yordamchi funksiyalar

```javascript
// document.cookie matnini qulay obyektga aylantirish
function cookielarniOlish() {
  return document.cookie.split("; ").reduce((natija, cookie) => {
    const [kalit, qiymat] = cookie.split("=");
    if (kalit) natija[kalit] = decodeURIComponent(qiymat);
    return natija;
  }, {});
}

console.log(cookielarniOlish()); // { foydalanuvchi_id: "42", til: "uz", tema: "qorong'u" }

// Bitta cookie qiymatini olish
function cookieOl(nom) {
  const barchaCookielar = cookielarniOlish();
  return barchaCookielar[nom] || null;
}

console.log(cookieOl("til")); // "uz"
```

### 6.5. Cookie ning zamonaviy muqobillari

Zamonaviy veb-ilovalarda, oddiy ma'lumot saqlash uchun **cookie o'rniga** ko'pincha `localStorage`/`sessionStorage` (7-bo'limda) ishlatiladi, chunki ular:

- Serverga **avtomatik yuborilmaydi** (tarmoq trafigini tejaydi)
- **Ancha ko'proq hajmda** ma'lumot saqlash imkonini beradi (~5-10MB, cookie esa atigi ~4KB)
- Qulayroq API ga ega

**Cookie hali ham kerak bo'lgan holatlar:** autentifikatsiya sessiyalari (ayniqsa `httpOnly` bilan, xavfsizlik uchun), server tomonidan o'qilishi kerak bo'lgan ma'lumotlar (chunki cookie har bir HTTP so'rovi bilan avtomatik yuboriladi, `localStorage` esa yuborilmaydi).

---

## 📦 7. Web Storage — `localStorage` va `sessionStorage`

`localStorage` va `sessionStorage` — brauzerda ma'lumot saqlashning **cookie dan zamonaviyroq va qulayroq** usuli.

### 7.1. `localStorage` vs `sessionStorage` farqi

|                 | `localStorage`                                                      | `sessionStorage`                                             |
| --------------- | ------------------------------------------------------------------- | ------------------------------------------------------------ |
| Saqlash muddati | **DOIMIY** (brauzer yopilsa ham saqlanadi, qo'lda o'chirilmaguncha) | Faqat joriy **TAB/SESSIYA** davomida (tab yopilsa yo'qoladi) |
| Qamrovi         | Bir xil domen bo'yicha BARCHA tab larda umumiy                      | Har bir TAB uchun ALOHIDA (boshqa tabda ko'rinmaydi)         |
| Hajmi           | ~5-10MB (brauzerga bog'liq)                                         | ~5-10MB                                                      |

### 7.2. Asosiy metodlar (ikkalasida ham bir xil API)

```javascript
// setItem() - ma'lumot saqlash (FAQAT matn saqlanadi!)
localStorage.setItem("foydalanuvchi_ismi", "Test");
sessionStorage.setItem("vaqtinchalik_holat", "faol");

// getItem() - ma'lumot olish
console.log(localStorage.getItem("foydalanuvchi_ismi")); // "Test"
console.log(localStorage.getItem("mavjud_emas")); // null (xatolik EMAS)

// removeItem() - bitta kalitni o'chirish
localStorage.removeItem("foydalanuvchi_ismi");

// clear() - BARCHA saqlangan ma'lumotni tozalash
localStorage.clear();

// key() - berilgan indeksdagi kalit nomini olish
console.log(localStorage.key(0)); // birinchi saqlangan kalit nomi

// length - saqlangan elementlar soni
console.log(localStorage.length);
```

### 7.3. Murakkab ma'lumotlarni saqlash — `JSON.stringify()`/`JSON.parse()`

**MUHIM QOIDA:** `localStorage`/`sessionStorage` **faqat MATN (string)** saqlaydi. Agar obyekt yoki massiv saqlamoqchi bo'lsangiz, uni avval `JSON.stringify()` orqali matnga aylantirish, o'qishda esa `JSON.parse()` orqali qaytadan obyektga aylantirish kerak.

```javascript
const foydalanuvchi = { ism: "Test", yosh: 25, tillar: ["o'zbek", "ingliz"] };

// SAQLASH
localStorage.setItem("foydalanuvchi", JSON.stringify(foydalanuvchi));

// O'QISH
const saqlanganMatn = localStorage.getItem("foydalanuvchi");
const foydalanuvchiObyekti = JSON.parse(saqlanganMatn);
console.log(foydalanuvchiObyekti.ism); // "Test"

// Agar to'g'ridan-to'g'ri obyektni JSON.stringify SIZ saqlasangiz:
localStorage.setItem("xato", foydalanuvchi);
console.log(localStorage.getItem("xato")); // "[object Object]" - MA'LUMOT YO'QOLDI!
```

### 7.4. `storage` voqeasi — tab lar orasida sinxronizatsiya

`storage` voqeasi — `localStorage` **BOSHQA tab yoki oynada** o'zgartirilganda ishga tushadi (joriy tabning o'zida emas — bu muhim nozik jihat).

```javascript
window.addEventListener("storage", (event) => {
  console.log(`O'zgargan kalit: ${event.key}`);
  console.log(`Eski qiymat: ${event.oldValue}`);
  console.log(`Yangi qiymat: ${event.newValue}`);
});

// Bu voqea FAQAT boshqa tab/oynada localStorage o'zgarganda ishga tushadi,
// AYNAN SHU tabda o'zgartirilganda EMAS
```

**Amaliy qo'llanish:** Bir nechta tab ochilgan bo'lsa (masalan bir xil saytning ikkita tabi), foydalanuvchi bittasida tizimdan chiqsa, ikkinchi tabni ham avtomatik "chiqarish" uchun ishlatiladi.

---

## 📋 8. Yakuniy xulosa jadvali — barcha muhim obyektlar va metodlar

| Obyekt                          | Asosiy vazifasi                       | Muhim a'zolar                                                                     |
| ------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------- |
| `window`                        | Brauzer oynasining o'zi, global scope | `innerWidth/Height`, `setTimeout/Interval`, `requestAnimationFrame`, `open/close` |
| `navigator`                     | Brauzer va qurilma haqida ma'lumot    | `userAgent`, `language`, `onLine`, `geolocation`, `clipboard`, `mediaDevices`     |
| `location`                      | Joriy URL manzil bilan ishlash        | `href`, `pathname`, `search`, `reload()`, `assign()`, `replace()`                 |
| `history`                       | Brauzer tarixi bilan ishlash          | `back()`, `forward()`, `pushState()`, `replaceState()`, `popstate`                |
| `screen`                        | Fizik ekran haqida ma'lumot           | `width/height`, `availWidth/Height`                                               |
| `document.cookie`               | Cookie lar bilan ishlash              | matn ko'rinishidagi o'qish/yozish                                                 |
| `localStorage`/`sessionStorage` | Zamonaviy ma'lumot saqlash            | `setItem`, `getItem`, `removeItem`, `clear`                                       |

---

## 💡 9. Best Practices (Tavsiyalar)

```javascript
// ✅ 1. Brauzer turini aniqlash uchun userAgent o'rniga feature detection ishlating

// ✅ 2. Animatsiya uchun setInterval o'rniga requestAnimationFrame dan foydalaning

// ✅ 3. SPA routing da history.pushState() dan foydalanganda, popstate voqeasini
//       ham ALBATTA tinglang - aks holda "Orqaga" tugmasi noto'g'ri ishlaydi

// ✅ 4. Login/muhim navigatsiyalarda location.replace() dan foydalaning -
//       shunda "Orqaga" tugmasi eski (masalan login) sahifaga qaytarmaydi

// ✅ 5. localStorage ga obyekt/massiv saqlashda JSON.stringify()/JSON.parse()
//       dan foydalanishni UNUTMANG

// ✅ 6. Maxfiy yoki xavfsizlikka oid ma'lumotlarni (parol, token) hech qachon
//       localStorage da SAQLAMANG - u JavaScript orqali (shu jumladan XSS orqali)
//       to'liq o'qilishi mumkin; buning o'rniga httpOnly cookie ishlatilishi tavsiya etiladi

// ✅ 7. Geolocation, Clipboard, MediaDevices kabi API lar HTTPS talab qiladi -
//       lokal ishlab chiqishda (localhost) bundan mustasno
```

---

Ushbu reference — Browser Object Model (BOM) ning barcha asosiy tushunchalarini qamrab oladi: `window` obyektidan (o'lchamlar, metodlar, timerlar, animatsiya) boshlab, `navigator` (brauzer/qurilma ma'lumotlari, geolocation, clipboard, media qurilmalar), `location` (URL bilan ishlash), `history` (SPA routing uchun pushState/replaceState), `screen`, va nihoyat — cookie hamda Web Storage (localStorage/sessionStorage) gacha.
