# 📦 **Built-in Objects — JavaScript**

JavaScript tilining o'zida tayyor holda mavjud bo'lgan (built-in) obyektlar — bu dasturchiga sana bilan ishlash, matematik hisob-kitoblar, sonlar bilan ishlash, ma'lumotlarni almashish (JSON) va matnlarda naqsh qidirish (RegExp) kabi kundalik vazifalarni bajarish uchun beriladigan tayyor vositalar to'plami. Ushbu qo'llanmada har bir obyekt, uning barcha muhim metodlari, parametrlari va ichki strukturasi batafsil yoritilgan.

---

## 📑 Mundarija

1. 📅 Date and Time
2. 🧮 Math Object
3. 📦 Number Object
4. 📦 JSON Object
5. 📦 RegExp (Regular Expressions) — qisqacha ko'rinish
6. 📌 Xulosa va Best Practices

---

## 1. 📅 Date and Time

`Date` — bu sana va vaqt bilan ishlash uchun ishlatiladigan built-in obyekt. Ichki mexanizmda `Date` obyekti **1970-yil 1-yanvar, 00:00:00 UTC** (bu sana **"Unix Epoch"** deb ataladi) dan boshlab o'tgan millisekundlar sonini son (number) sifatida saqlaydi.

### 1.1. `new Date()` — obyekt yaratish usullari

`Date` obyektini bir nechta xil usulda yaratish mumkin:

```javascript
// 1) Argumentsiz - joriy sana va vaqtni oladi
const hozir = new Date();
console.log(hozir); // Masalan: 2026-08-03T10:15:30.000Z

// 2) Millisekundlar soni orqali (Unix Epoch'dan boshlab)
const sana1 = new Date(0); // 1970-01-01T00:00:00.000Z
const sana2 = new Date(1000 * 60 * 60); // Epoch'dan 1 soat keyin

// 3) Sana string (ISO 8601 formatida tavsiya etiladi)
const sana3 = new Date("2026-08-03"); // faqat sana - UTC vaqt bo'yicha 00:00:00
const sana4 = new Date("2026-08-03T14:30:00"); // sana + vaqt
const sana5 = new Date("2026-08-03T14:30:00Z"); // "Z" - UTC ekanini bildiradi

// 4) Yil, oy, kun, soat, minut, sekund, millisekund (alohida argumentlar)
// DIQQAT: oy 0'dan boshlanadi! (0 = Yanvar, 11 = Dekabr)
const sana6 = new Date(2026, 7, 3, 14, 30, 0, 0); // 2026-yil, 8-oy (indeks 7), 3-kun, 14:30

console.log(sana6); // 2026-yil 3-avgust, 14:30:00

// 5) Faqat yil va oy (qolganlari default: kun=1, soat=0, minut=0...)
const sana7 = new Date(2026, 0); // 2026-yil 1-yanvar, 00:00:00
```

⚠️ **Eng ko'p uchraydigan xatolik:** Oy indeksi 0'dan boshlanadi. Masalan, avgust oyini yozish uchun `7` raqamini kiritish kerak (0=Yanvar, 1=Fevral, ..., 7=Avgust, 11=Dekabr).

### 1.2. `Date.now()` — joriy vaqt (millisekundlarda)

`Date.now()` — bu **static metod** (ya'ni instance yaratmasdan, to'g'ridan-to'g'ri `Date` orqali chaqiriladi) bo'lib, joriy vaqtni Epoch'dan boshlab o'tgan millisekundlar sonida qaytaradi.

```javascript
console.log(Date.now()); // Masalan: 1785845730000 (son, obyekt emas!)

// Amaliy misol: kod bajarilish vaqtini o'lchash
const boshlanish = Date.now();

for (let i = 0; i < 1000000; i++) {
  // og'ir hisoblash...
}

const tugash = Date.now();
console.log(`Bajarildi: ${tugash - boshlanish} millisekund`);

// Date.now() bilan "new Date().getTime()" bir xil natija beradi, lekin Date.now() tezroq
console.log(Date.now() === new Date().getTime()); // taxminan teng (millisekund farqi bo'lishi mumkin)
```

### 1.3. Getting (olish) metodlari — sananing qismlarini o'qish

Barcha "get" metodlari **lokal vaqt zonasi** (foydalanuvchi kompyuterining vaqt zonasi) bo'yicha ishlaydi. UTC bo'yicha o'qish uchun har bir metodning `getUTC...` varianti mavjud.

```javascript
const sana = new Date(2026, 7, 3, 14, 45, 30, 250); // 2026-yil 3-avgust, 14:45:30.250

console.log(sana.getFullYear());   // 2026 - to'liq yil (4 xonali)
console.log(sana.getMonth());      // 7 - oy (0-11 oralig'ida, 7 = Avgust)
console.log(sana.getDate());       // 3 - oyning kuni (1-31)
console.log(sana.getDay());        // 0-6 - haftaning kuni (0=Yakshanba, 1=Dushanba, ..., 6=Shanba)
console.log(sana.getHours());      // 14 - soat (0-23)
console.log(sana.getMinutes());    // 45 - minut (0-59)
console.log(sana.getSeconds());    // 30 - sekund (0-59)
console.log(sana.getMilliseconds()); // 250 - millisekund (0-999)
console.log(sana.getTime());       // Epoch'dan boshlab millisekundlar soni (katta son)
console.log(sana.getTimezoneOff­set()); // Mahalliy vaqt zonasi bilan UTC orasidagi farq (minutlarda)

// UTC variantlari - vaqt zonasidan qat'i nazar bir xil natija beradi
console.log(sana.getUTCFullYear());
console.log(sana.getUTCHours());
```

📌 **`getDay()` va `getDate()` farqini eslab qoling** — bu eng ko'p chalkashadigan joy:

- `getDate()` → oyning kuni (masalan, 3-avgust → `3`)
- `getDay()` → haftaning kuni (masalan, dushanba → `1`)

```javascript
const juma = new Date(2026, 7, 7); // 2026-yil 7-avgust - bu juma kuni
console.log(juma.getDate()); // 7 (oyning kuni)
console.log(juma.getDay()); // 5 (haftaning kuni - juma)

const kunlar = [
  "Yakshanba",
  "Dushanba",
  "Seshanba",
  "Chorshanba",
  "Payshanba",
  "Juma",
  "Shanba",
];
console.log(kunlar[juma.getDay()]); // Juma
```

### 1.4. Setting (o'rnatish) metodlari — sanani o'zgartirish

Har bir "get" metodiga mos "set" metodi mavjud bo'lib, ular mavjud `Date` obyektining biror qismini **joyida (mutating)** o'zgartiradi.

```javascript
const sana = new Date(2026, 7, 3);

sana.setFullYear(2027); // yilni o'zgartiradi
console.log(sana.getFullYear()); // 2027

sana.setMonth(11); // oyni Dekabrga o'zgartiradi (11 = Dekabr)
console.log(sana.getMonth()); // 11

sana.setDate(25); // kunni 25-ga o'zgartiradi
console.log(sana.getDate()); // 25

sana.setHours(18, 30, 0); // soat, minut, sekundni bir vaqtda o'rnatish mumkin
console.log(sana); // 2027-yil 25-dekabr, 18:30:00

// setDate() bilan sanalarni "avtomatik to'g'irlash" (overflow) xususiyati:
const sana2 = new Date(2026, 7, 31); // 31-avgust
sana2.setDate(sana2.getDate() + 1); // +1 kun qo'shamiz
console.log(sana2); // 2026-yil 1-sentyabr - avtomatik keyingi oyga o'tdi!

// Bu xususiyat sanalar bilan matematik amallar bajarishda juda foydali:
function kunQoshish(sana, kunSoni) {
  const yangiSana = new Date(sana);
  yangiSana.setDate(yangiSana.getDate() + kunSoni);
  return yangiSana;
}

console.log(kunQoshish(new Date(2026, 11, 30), 5)); // 2027-yil 4-yanvar
```

### 1.5. Sanalarni solishtirish va farqni hisoblash

```javascript
const sana1 = new Date(2026, 7, 3);
const sana2 = new Date(2026, 7, 10);

console.log(sana1 < sana2); // true - Date obyektlari solishtirish operatorlari bilan solishtirilishi mumkin
console.log(sana1.getTime() === sana2.getTime()); // false - vaqtni solishtirish uchun getTime() ishlatiladi

// Ikki sana orasidagi farqni hisoblash (millisekund -> kun)
const farqMs = sana2 - sana1; // Date obyektlarini ayirish avtomatik ravishda millisekundga aylantiradi
const farqKun = farqMs / (1000 * 60 * 60 * 24);
console.log(`Farq: ${farqKun} kun`); // Farq: 7 kun
```

### 1.6. ISO Formatting — `toISOString()` va boshqa formatlash metodlari

```javascript
const sana = new Date(2026, 7, 3, 14, 30, 0);

// toISOString() - ISO 8601 standart formatida, HAR DOIM UTC vaqtda qaytaradi
console.log(sana.toISOString()); // "2026-08-03T09:30:00.000Z" (misol, vaqt zonasiga bog'liq)

// Boshqa formatlash metodlari:
console.log(sana.toString()); // "Mon Aug 03 2026 14:30:00 GMT+0500 (Uzbekistan Standard Time)"
console.log(sana.toDateString()); // "Mon Aug 03 2026" - faqat sana
console.log(sana.toTimeString()); // "14:30:00 GMT+0500 (...)" - faqat vaqt
console.log(sana.toLocaleDateString()); // "8/3/2026" - lokal formatda sana (brauzer/OS tiliga bog'liq)
console.log(sana.toLocaleTimeString()); // "2:30:00 PM" - lokal formatda vaqt
console.log(sana.toLocaleString()); // "8/3/2026, 2:30:00 PM" - sana + vaqt birgalikda
console.log(sana.toJSON()); // toISOString() bilan bir xil - JSON.stringify() ichida avtomatik chaqiriladi

// Amaliy foydalanish: JSON.stringify() Date obyektini avtomatik ISO string'ga aylantiradi
const obj = { sana: new Date(2026, 7, 3) };
console.log(JSON.stringify(obj)); // {"sana":"2026-08-02T19:00:00.000Z"}

// ISO string'dan qaytadan Date obyekti yaratish
const qaytaSana = new Date("2026-08-03T09:30:00.000Z");
console.log(qaytaSana.getFullYear()); // 2026
```

### 1.7. `Intl.DateTimeFormat` — Lokalizatsiya (mahalliylashtirish)

`Intl.DateTimeFormat` — bu sanalarni turli tillar va mintaqalar formatida chiroyli ko'rsatish uchun ishlatiladigan xalqaro standart (Internationalization API).

```javascript
const sana = new Date(2026, 7, 3, 14, 30);

// Eng oddiy holat - o'zbek tilida (agar qo'llab-quvvatlansa) yoki boshqa tilda
const uzFormat = new Intl.DateTimeFormat("uz-UZ");
console.log(uzFormat.format(sana)); // 03.08.2026

const enFormat = new Intl.DateTimeFormat("en-US");
console.log(enFormat.format(sana)); // 8/3/2026

const ruFormat = new Intl.DateTimeFormat("ru-RU");
console.log(ruFormat.format(sana)); // 03.08.2026

// Options obyekti orqali batafsil formatlash
const batafsilFormat = new Intl.DateTimeFormat("uz-UZ", {
  weekday: "long", // "Dushanba" - hafta kuni to'liq nomi
  year: "numeric", // "2026"
  month: "long", // "avgust" - oy to'liq nomi
  day: "numeric", // "3"
  hour: "2-digit", // "14"
  minute: "2-digit", // "30"
});

console.log(batafsilFormat.format(sana));
// Masalan: "dushanba, 3 avgust, 2026, 14:30"

// format() metodidan tashqari, formatToParts() - sananing har bir qismini alohida obyekt sifatida beradi
const qismlar = batafsilFormat.formatToParts(sana);
console.log(qismlar);
// [{type: "weekday", value: "dushanba"}, {type: "literal", value: ", "}, ...]

// Vaqt zonasini aniq ko'rsatish
const tzFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Tashkent",
  dateStyle: "full",
  timeStyle: "long",
});
console.log(tzFormat.format(sana));

// Intl.RelativeTimeFormat - "3 kun oldin", "2 soat keyin" kabi nisbiy vaqt uchun (bonus)
const rtf = new Intl.RelativeTimeFormat("uz", { numeric: "auto" });
console.log(rtf.format(-3, "day")); // "3 kun oldin" (yoki mos tarjima)
console.log(rtf.format(2, "hour")); // "2 soatdan keyin"
```

📌 **`Date.parse()`** — sana string'ini millisekundga aylantiruvchi static metod (`new Date(string).getTime()` bilan bir xil):

```javascript
console.log(Date.parse("2026-08-03T14:30:00Z")); // millisekund (son)
console.log(Date.parse("noto'g'ri sana")); // NaN
```

---

## 2. 🧮 Math Object

`Math` — bu matematik konstantalar va funksiyalarni o'z ichiga olgan **static** obyekt. `Math` hech qachon `new` bilan chaqirilmaydi (u constructor emas) — barcha xususiyat va metodlari to'g'ridan-to'g'ri `Math.` orqali ishlatiladi.

### 2.1. Konstantalar

```javascript
console.log(Math.PI); // 3.141592653589793 - pi soni
console.log(Math.E); // 2.718281828459045 - Eyler soni (natural logarifm asosi)
console.log(Math.LN2); // 0.6931471805599453 - 2 ning natural logarifmi
console.log(Math.LN10); // 2.302585092994046 - 10 ning natural logarifmi
console.log(Math.LOG2E); // 1.4426950408889634 - E ning 2 asosli logarifmi
console.log(Math.LOG10E); // 0.4342944819032518 - E ning 10 asosli logarifmi
console.log(Math.SQRT2); // 1.4142135623730951 - 2 ning kvadrat ildizi
console.log(Math.SQRT1_2); // 0.7071067811865476 - 1/2 ning kvadrat ildizi
```

### 2.2. Tasodifiy son — `Math.random()`

`Math.random()` — `0` (kiritilgan) dan `1` (kiritilmagan) oralig'ida tasodifiy o'nlik (float) son qaytaradi.

```javascript
console.log(Math.random()); // Masalan: 0.7834920163...

// Amaliy misol: A va B orasida tasodifiy butun son olish (A va B ham kiritiladi)
function tasodifiySon(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(tasodifiySon(1, 6)); // Zar tashlash simulyatori: 1 dan 6 gacha
console.log(tasodifiySon(10, 20)); // 10 dan 20 gacha tasodifiy son

// Massivdan tasodifiy element tanlash
function tasodifiyElement(massiv) {
  return massiv[Math.floor(Math.random() * massiv.length)];
}

console.log(tasodifiyElement(["olma", "banan", "uzum"])); // tasodifiy meva nomi
```

### 2.3. Yaxlitlash metodlari — `round()`, `floor()`, `ceil()`, `trunc()`

```javascript
console.log(Math.round(4.4)); // 4 - eng yaqin butun songa yaxlitlaydi (0.5 va undan yuqori - yuqoriga)
console.log(Math.round(4.5)); // 5
console.log(Math.round(-4.5)); // -4 (diqqat: manfiy sonlarda -4.5 -> -4, ya'ni yuqoriga yaxlitlanadi!)

console.log(Math.floor(4.9)); // 4 - har doim PASTGA yaxlitlaydi (kichraytiradi)
console.log(Math.floor(-4.1)); // -5 - manfiy sonlarda ham "pastga" (kichikroq tomonga)

console.log(Math.ceil(4.1)); // 5 - har doim YUQORIGA yaxlitlaydi (kattalashtiradi)
console.log(Math.ceil(-4.9)); // -4 - manfiy sonlarda ham "yuqoriga" (kattaroq tomonga)

console.log(Math.trunc(4.9)); // 4 - kasr qismini shunchaki "kesib tashlaydi" (yaxlitlamaydi)
console.log(Math.trunc(-4.9)); // -4 - Math.floor'dan farqli, faqat kasr qismini olib tashlaydi

// round, floor, ceil, trunc farqini bitta jadvalda ko'rish:
console.log(Math.round(2.5), Math.floor(2.5), Math.ceil(2.5), Math.trunc(2.5)); // 3 2 3 2
console.log(
  Math.round(-2.5),
  Math.floor(-2.5),
  Math.ceil(-2.5),
  Math.trunc(-2.5),
); // -2 -3 -2 -2
```

### 2.4. Eng katta/kichik va absolyut qiymat — `max()`, `min()`, `abs()`

```javascript
console.log(Math.max(5, 10, 3, 8)); // 10 - berilgan sonlar orasidan eng kattasi
console.log(Math.min(5, 10, 3, 8)); // 3 - eng kichigi

console.log(Math.max()); // -Infinity - argumentsiz chaqirilsa
console.log(Math.min()); // Infinity

// Massiv bilan ishlatish uchun spread operator kerak (Math.max massiv qabul qilmaydi)
const sonlar = [45, 12, 78, 3, 99, 21];
console.log(Math.max(...sonlar)); // 99
console.log(Math.min(...sonlar)); // 3

// Yoki apply orqali (eski usul)
console.log(Math.max.apply(null, sonlar)); // 99

console.log(Math.abs(-15)); // 15 - absolyut qiymat (manfiy belgisini olib tashlaydi)
console.log(Math.abs(15)); // 15 - musbat songa ta'sir qilmaydi
console.log(Math.abs(-3.14)); // 3.14
```

### 2.5. Daraja va ildiz — `pow()`, `sqrt()`, `cbrt()`

```javascript
console.log(Math.pow(2, 10)); // 1024 - 2 ning 10-darajasi (2**10 bilan bir xil)
console.log(Math.pow(5, 2)); // 25 - 5 ning kvadrati
console.log(Math.pow(2, 0.5)); // 1.414... - kvadrat ildizga teng (chunki 0.5-daraja = ildiz)

// Zamonaviy alternativa - "**" operatori (ES2016+), Math.pow() bilan bir xil natija beradi
console.log(2 ** 10); // 1024

console.log(Math.sqrt(25)); // 5 - kvadrat ildiz
console.log(Math.sqrt(2)); // 1.4142135623730951
console.log(Math.sqrt(-4)); // NaN - manfiy sonning kvadrat ildizi mavjud emas (haqiqiy sonlar orasida)

console.log(Math.cbrt(27)); // 3 - kub ildiz (27 = 3*3*3)
console.log(Math.cbrt(-8)); // -2 - kub ildiz manfiy sonlar uchun ham ishlaydi!

// Boshqa foydali Math metodlari (bonus):
console.log(Math.hypot(3, 4)); // 5 - gipotenuza uzunligi (Pifagor teoremasi: sqrt(3^2+4^2))
console.log(Math.log(Math.E)); // 1 - natural logarifm (asosi E)
console.log(Math.log2(8)); // 3 - 2 asosli logarifm (2^3=8)
console.log(Math.log10(1000)); // 3 - 10 asosli logarifm
console.log(Math.sign(-5)); // -1 - sonning belgisini qaytaradi (-1, 0, yoki 1)
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0
```

---

## 3. 📦 Number Object

`Number` — sonlar bilan ishlash uchun **wrapper obyekt** (o'raydigan obyekt) bo'lib, ham konstruktor (`Number(qiymat)`), ham static metod va konstantalar to'plami sifatida ishlatiladi.

### 3.1. Konstantalar — `MAX_SAFE_INTEGER`, `MIN_SAFE_INTEGER` va boshqalar

JavaScript sonlarni **IEEE 754 double-precision floating point** formatida saqlaydi, shuning uchun butun sonlar uchun "xavfsiz" (aniq ifodalanadigan) chegara mavjud.

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991 (2^53 - 1)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308 - JS ifodalay oladigan eng katta son
console.log(Number.MIN_VALUE); // 5e-324 - eng kichik musbat son (nolga eng yaqin)

console.log(Number.EPSILON); // 2.220446049250313e-16 - eng kichik farq (float taqqoslashda ishlatiladi)

console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN - "Not a Number"

// "Xavfsiz" chegaradan chiqib ketish muammosi:
console.log(Number.MAX_SAFE_INTEGER + 1); // 9007199254740992 - hali to'g'ri
console.log(Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 - XATO! Aniqlik yo'qoldi
// Bunday katta sonlar uchun BigInt ishlatish kerak: 9007199254740993n

// Number.EPSILON'dan foydalanish - float sonlarni to'g'ri solishtirish uchun
console.log(0.1 + 0.2 === 0.3); // false! (float arifmetikasi aniqlik xatosi)
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true - to'g'ri solishtirish usuli
```

### 3.2. Tekshirish metodlari — `isInteger()`, `isNaN()`, `isFinite()`, `isSafeInteger()`

```javascript
// Number.isInteger() - qiymat butun son ekanligini tekshiradi
console.log(Number.isInteger(5)); // true
console.log(Number.isInteger(5.0)); // true - 5.0 aslida 5 bilan bir xil
console.log(Number.isInteger(5.5)); // false
console.log(Number.isInteger("5")); // false - string, avtomatik konvertatsiya QILINMAYDI!

// Number.isNaN() - global isNaN()dan farqli, avtomatik konvertatsiya QILMAYDI
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("salom")); // false! (chunki "salom" number'ga aylantirilmaydi, u string)
console.log(isNaN("salom")); // true (global isNaN avval Number()ga aylantiradi, keyin tekshiradi)

// Bu farq juda muhim - Number.isNaN() ANIQROQ va XAVFSIZROQ:
function xavfliTekshiruv(qiymat) {
  return isNaN(qiymat); // "salom" kabi string'lar uchun ham true qaytarishi mumkin - noto'g'ri!
}
function toʻgʻriTekshiruv(qiymat) {
  return Number.isNaN(qiymat); // faqat aniq NaN qiymati uchun true
}

// Number.isFinite() - global isFinite()dan farqli, konvertatsiya qilmaydi
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite("100")); // false! (string, Number.isFinite konvertatsiya qilmaydi)
console.log(isFinite("100")); // true (global versiya avval Number()ga aylantiradi)

// Number.isSafeInteger() - son "xavfsiz butun son" diapazonida ekanligini tekshiradi
console.log(Number.isSafeInteger(9007199254740991)); // true (MAX_SAFE_INTEGER)
console.log(Number.isSafeInteger(9007199254740992)); // false - xavfsiz chegaradan tashqarida
```

### 3.3. Parslash (matndan songa aylantirish) — `parseFloat()`, `parseInt()`

```javascript
// Number.parseFloat() - matndan o'nlik (kasr) son ajratib oladi
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("3.14sm")); // 3.14 - raqamdan keyingi matnni e'tiborsiz qoldiradi
console.log(Number.parseFloat("  42.5  ")); // 42.5 - bo'sh joylarni avtomatik olib tashlaydi
console.log(Number.parseFloat("abc")); // NaN - hech qanday son topilmasa

// Number.parseInt() - matndan butun son ajratib oladi, ikkinchi argument - sanoq sistemasi (radix)
console.log(Number.parseInt("42px")); // 42
console.log(Number.parseInt("101", 2)); // 5 - "101" ni 2-lik (binary) sistema deb o'qiydi
console.log(Number.parseInt("FF", 16)); // 255 - "FF" ni 16-lik (hex) sistema deb o'qiydi
console.log(Number.parseInt("0x1F")); // 31 - "0x" prefiksini avtomatik hex deb tanib oladi
console.log(Number.parseInt("   42   ")); // 42 - bo'sh joylar e'tiborsiz

// DIQQAT: Number.parseInt() === global parseInt(), Number.parseFloat() === global parseFloat()
// Ular xuddi bir xil funksiya, faqat Number obyekti "namespace" sifatida ham taqdim etadi (ES6+)
console.log(Number.parseInt === parseInt); // true
console.log(Number.parseFloat === parseFloat); // true

// parseInt() bilan Number()ning farqi:
console.log(Number("42px")); // NaN - Number() BUTUN string to'g'ri son bo'lishini talab qiladi
console.log(Number.parseInt("42px")); // 42 - parseInt faqat boshidan raqamlarni oladi
```

### 3.4. Boshqa foydali Number metodlari (bonus)

```javascript
// toFixed() - kasr qismini belgilangan sondagi raqamgacha yaxlitlaydi, STRING qaytaradi
const son = 3.14159;
console.log(son.toFixed(2)); // "3.14" - string!
console.log(son.toFixed(0)); // "3"
console.log((5).toFixed(2)); // "5.00"

// toPrecision() - umumiy "muhim raqamlar" sonini belgilaydi
console.log((123.456).toPrecision(4)); // "123.5"
console.log((0.001234).toPrecision(2)); // "0.0012"

// toString(radix) - sonni boshqa sanoq sistemasida (masalan, binary, hex) matn ko'rinishida qaytaradi
console.log((255).toString(16)); // "ff" - 16-lik (hex) ko'rinish
console.log((5).toString(2)); // "101" - 2-lik (binary) ko'rinish

// Number.isFinite vs Number.isNaN - to'liq validatsiya funksiyasi misoli:
function toʻgʻriSonmi(qiymat) {
  return (
    typeof qiymat === "number" &&
    Number.isFinite(qiymat) &&
    !Number.isNaN(qiymat)
  );
}
console.log(toʻgʻriSonmi(42)); // true
console.log(toʻgʻriSonmi(Infinity)); // false
console.log(toʻgʻriSonmi(NaN)); // false
console.log(toʻgʻriSonmi("42")); // false
```

---

## 4. 📦 JSON Object

`JSON` (JavaScript Object Notation) — ma'lumotlarni matn (string) ko'rinishida saqlash va almashish uchun ishlatiladigan universal format. `JSON` obyekti ikkita asosiy metodga ega: `stringify()` va `parse()`.

### 4.1. `JSON.stringify()` — obyektni JSON matniga aylantirish

**Sintaksis:** `JSON.stringify(qiymat, replacer, space)`

```javascript
const foydalanuvchi = {
  ism: "Elmurod",
  yosh: 25,
  faol: true,
  hobbi: ["dasturlash", "o'qitish"],
  manzil: null,
};

// Eng oddiy holat - faqat qiymatni beramiz
const json1 = JSON.stringify(foydalanuvchi);
console.log(json1);
// {"ism":"Elmurod","yosh":25,"faol":true,"hobbi":["dasturlash","o'qitish"],"manzil":null}
console.log(typeof json1); // "string" - natija HAR DOIM string bo'ladi

// "space" parametri - o'qishga qulay (formatlangan) chiqish uchun
const json2 = JSON.stringify(foydalanuvchi, null, 2); // 2 - bo'shliq (indent) soni
console.log(json2);
/*
{
  "ism": "Elmurod",
  "yosh": 25,
  "faol": true,
  "hobbi": [
    "dasturlash",
    "o'qitish"
  ],
  "manzil": null
}
*/

const json3 = JSON.stringify(foydalanuvchi, null, "\t"); // tab belgisi bilan indentatsiya
```

**`JSON.stringify()` qanday qiymatlarni e'tiborsiz qoldiradi yoki o'zgartiradi:**

```javascript
const murakkabObj = {
  ism: "Test",
  funksiya: function () {
    console.log("salom");
  }, // e'tiborsiz qoldiriladi
  aniqlanmagan: undefined, // e'tiborsiz qoldiriladi
  belgi: Symbol("test"), // e'tiborsiz qoldiriladi
  sana: new Date(2026, 7, 3), // avtomatik toISOString()ga aylanadi
  cheksiz: Infinity, // "null"ga aylanadi
  sonEmas: NaN, // "null"ga aylanadi
};

console.log(JSON.stringify(murakkabObj));
// {"ism":"Test","sana":"2026-08-02T19:00:00.000Z","cheksiz":null,"sonEmas":null}
// funksiya, aniqlanmagan, belgi - butunlay yo'qoldi!

// Massiv ichidagi "qo'llab-quvvatlanmaydigan" qiymatlar - "null"ga aylanadi (o'chirilmaydi)
console.log(JSON.stringify([undefined, function () {}, Symbol("x"), 42]));
// [null,null,null,42]
```

### 4.2. `JSON.parse()` — JSON matnini obyektga aylantirish

**Sintaksis:** `JSON.parse(matn, reviver)`

```javascript
const jsonMatn =
  '{"ism":"Aziza","yosh":23,"faol":true,"hobbi":["kitob o\'qish","sayohat"]}';

const obj = JSON.parse(jsonMatn);
console.log(obj); // { ism: 'Aziza', yosh: 23, faol: true, hobbi: [...] }
console.log(typeof obj); // "object" - endi haqiqiy JavaScript obyekti!
console.log(obj.ism); // Aziza
console.log(obj.hobbi[0]); // kitob o'qish

// Noto'g'ri JSON formatida xatolik chiqadi:
try {
  JSON.parse("{ism: 'Aziza'}"); // ❌ noto'g'ri - key va string qo'shtirnoq ichida bo'lishi SHART
} catch (xato) {
  console.log(xato.message); // "Unexpected token i in JSON at position 1" (yoki shunga o'xshash)
}

// TO'G'RI JSON formati talablari:
// 1) Key'lar albatta qo'sh qo'shtirnoq ichida: "ism", "yosh" (bitta qo'shtirnoq YOKI qo'shtirnoqsiz bo'lmaydi)
// 2) String qiymatlar ham qo'sh qo'shtirnoqda: "Aziza" (bitta qo'shtirnoqda emas)
// 3) Trailing comma (oxirgi vergul) qo'yilmaydi: {"a":1,} - XATO
// 4) Funksiya, undefined, Symbol JSON'da UMUMAN mavjud bo'lolmaydi
```

### 4.3. Replacer funksiyasi — `JSON.stringify()`da filtrlash va o'zgartirish

`replacer` — `JSON.stringify()`ning ikkinchi argumenti bo'lib, ikki xil ko'rinishda bo'lishi mumkin: **massiv** (faqat kerakli key'larni tanlash) yoki **funksiya** (har bir qiymatni moslashtirib o'zgartirish).

```javascript
const foydalanuvchi = {
  ism: "Elmurod",
  yosh: 25,
  parol: "maxfiy123",
  email: "elmurod@example.com",
};

// 1) Replacer MASSIV sifatida - faqat ko'rsatilgan key'larni qoldiradi
const json1 = JSON.stringify(foydalanuvchi, ["ism", "email"]);
console.log(json1); // {"ism":"Elmurod","email":"elmurod@example.com"} - "yosh" va "parol" chiqarib tashlandi

// 2) Replacer FUNKSIYA sifatida - har bir key/qiymat juftligi orqali o'tadi
const json2 = JSON.stringify(foydalanuvchi, (key, qiymat) => {
  if (key === "parol") return undefined; // "parol" key'ini butunlay olib tashlaymiz
  if (typeof qiymat === "string") return qiymat.toUpperCase(); // barcha string qiymatlarni katta harfga
  return qiymat;
});
console.log(json2); // {"ism":"ELMUROD","yosh":25,"email":"ELMUROD@EXAMPLE.COM"}

// Diqqat: replacer funksiyasi ENG BIRINCHI marta butun obyektning o'zi uchun ham chaqiriladi
// ("" key bilan), shuning uchun log qo'yib tekshirib ko'rish foydali:
JSON.stringify({ a: 1 }, function (key, value) {
  console.log(`key: "${key}", value:`, value);
  return value;
});
// key: "", value: {a: 1}   <- butun obyektning o'zi
// key: "a", value: 1        <- keyin har bir xususiyat
```

### 4.4. Reviver funksiyasi — `JSON.parse()`da qiymatlarni qayta tiklash

`reviver` — `JSON.parse()`ning ikkinchi argumenti, har bir key/qiymat juftligi parse qilingandan so'ng ularni **qayta ishlash** imkonini beradi. Odatda sana kabi maxsus turlarni JSON'dan "tiklash" uchun ishlatiladi (chunki JSON'da `Date` turi mavjud emas, u har doim oddiy string bo'lib qoladi).

```javascript
const jsonMatn =
  '{"ism":"Elmurod","royxatdanOtganSana":"2026-08-03T09:30:00.000Z"}';

// Reviversiz - sana oddiy STRING bo'lib qoladi
const oddiy = JSON.parse(jsonMatn);
console.log(typeof oddiy.royxatdanOtganSana); // "string"

// Reviver bilan - stringni haqiqiy Date obyektiga aylantiramiz
const toʻliq = JSON.parse(jsonMatn, (key, qiymat) => {
  // ISO sana formatiga o'xshagan string'larni Date obyektiga aylantiramiz
  if (key === "royxatdanOtganSana") {
    return new Date(qiymat);
  }
  return qiymat;
});

console.log(toʻliq.royxatdanOtganSana instanceof Date); // true
console.log(toʻliq.royxatdanOtganSana.getFullYear()); // 2026

// Umumiy (universal) reviver - har qanday ISO-formatga o'xshash string'ni avtomatik Date qiladi
const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;

function universalReviver(key, qiymat) {
  if (typeof qiymat === "string" && isoRegex.test(qiymat)) {
    return new Date(qiymat);
  }
  return qiymat;
}

const natija = JSON.parse(jsonMatn, universalReviver);
console.log(natija.royxatdanOtganSana instanceof Date); // true
```

### 4.5. `toJSON()` metodi — obyektning o'z JSON ko'rinishini belgilashi

Agar obyektda `toJSON()` metodi mavjud bo'lsa, `JSON.stringify()` obyektning o'zini emas, balki `toJSON()` qaytargan qiymatni ishlatadi.

```javascript
class Pul {
  constructor(summa, valyuta) {
    this.summa = summa;
    this.valyuta = valyuta;
  }

  // JSON.stringify() avtomatik ravishda shu metodni chaqiradi (agar mavjud bo'lsa)
  toJSON() {
    return `${this.summa} ${this.valyuta}`;
  }
}

const narx = new Pul(50000, "so'm");
console.log(JSON.stringify({ mahsulot: "Kitob", narx }));
// {"mahsulot":"Kitob","narx":"50000 so'm"} - Pul obyekti string'ga aylandi, toJSON() orqali
```

---

## 5. 📦 RegExp (Regular Expressions) — Qisqacha Ko'rinish

📌 **Eslatma:** RegExp (Regular Expressions — muntazam ifodalar) mavzusi juda katta va chuqur bo'lgani uchun, u alohida **3.24-bo'limda** batafsil (naqsh belgilari, flag'lar, `test()`, `exec()`, `match()`, `replace()`, guruhlar va h.k. bilan) yoritiladi. Bu yerda faqat umumiy tasavvur uchun qisqacha misol keltiramiz:

```javascript
// RegExp yaratishning ikki usuli
const regex1 = /\d+/g; // literal (to'g'ridan-to'g'ri) sintaksis
const regex2 = new RegExp("\\d+", "g"); // konstruktor sintaksisi (dinamik naqshlar uchun qulay)

const matn = "Mening telefon raqamim: 998901234567";

console.log(regex1.test(matn)); // true - naqsh mos kelishini tekshiradi
console.log(matn.match(regex1)); // ["998901234567"] - mos kelgan qismlarni topadi
console.log(matn.replace(regex1, "***")); // "Mening telefon raqamim: ***" - almashtiradi
```

To'liq mavzu (guruhlash, `lookahead`/`lookbehind`, barcha flag'lar, `matchAll()`, `Symbol.replace` va h.k.) uchun 3.24-bo'limga qarang.

---

## 6. 📌 Xulosa va Best Practices

| Obyekt   | Asosiy vazifasi                               | Eng ko'p ishlatiladigan metodlar                             |
| -------- | --------------------------------------------- | ------------------------------------------------------------ |
| `Date`   | Sana va vaqt bilan ishlash                    | `new Date()`, `Date.now()`, `getFullYear()`, `toISOString()` |
| `Math`   | Matematik hisob-kitoblar                      | `Math.random()`, `Math.round()`, `Math.max()/min()`          |
| `Number` | Sonlarni tekshirish va parslash               | `Number.isInteger()`, `Number.parseFloat()`, `toFixed()`     |
| `JSON`   | Ma'lumotlarni matn shaklida saqlash/almashish | `JSON.stringify()`, `JSON.parse()`                           |
| `RegExp` | Matnlarda naqsh qidirish                      | `test()`, `match()`, `replace()` (3.24-bo'limda batafsil)    |

✅ **Amaliy tavsiyalar:**

1. **Sana bilan ishlaganda** har doim `getMonth()` 0'dan boshlanishini eslang, va murakkab loyihalarda `date-fns` yoki `Day.js` kabi kutubxonalardan foydalanishni ko'rib chiqing (native `Date` API ba'zi vaziyatlarda noqulay).
2. **Float sonlarni solishtirishda** hech qachon `===` ishlatmang — `Number.EPSILON` orqali solishtiring.
3. **`Number.isNaN()` va `Number.isFinite()`ni** har doim global `isNaN()`/`isFinite()`dan afzal ko'ring — ular aniqroq (avtomatik konvertatsiya qilmaydi).
4. **`JSON.stringify()` bilan maxfiy ma'lumotlarni (parol, token) hech qachon serverga yubormang** — `replacer` funksiyasi orqali ularni albatta filtrlang.
5. **`JSON.parse()`ni doim `try...catch` bilan o'rang** — noto'g'ri formatdagi JSON matni xatolik (`SyntaxError`) chiqarishi mumkin.
6. **Katta sonlar (`Number.MAX_SAFE_INTEGER`dan oshadigan) bilan ishlaganda** `BigInt` turidan foydalaning (`123456789012345678901234n`).

---

**Muallif izohi:** Ushbu qo'llanma JavaScript'ning eng ko'p ishlatiladigan to'rtta built-in obyekti — `Date`, `Math`, `Number`, `JSON`ni barcha muhim metodlari, parametrlari va real hayotiy misollari bilan qamrab oladi. `RegExp` mavzusi chuqurligi tufayli alohida modulga (3.24) ajratilgan.
