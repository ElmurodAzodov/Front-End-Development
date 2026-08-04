# 🧩 **Error Handling — JavaScript**

Error Handling (xatoliklarni boshqarish) — bu dasturda kutilmagan holatlar (xatoliklar) yuzaga kelganda, dastur to'satdan "yiqilib qolmasligi" (crash bo'lmasligi), balki bu holatlarni nazorat ostida, chiroyli tarzda qayta ishlash uchun ishlatiladigan mexanizmlar to'plami. Ushbu qo'llanmada JavaScript'dagi barcha xatolik turlari, ularni ushlash (catch qilish), o'zingiz xatolik yaratish (throw qilish), custom error class'lar va global xatoliklarni boshqarish batafsil yoritilgan.

---

## 📑 Mundarija

1. ❌ Error Types (Xatolik turlari)
2. 🛡️ Try...Catch...Finally
3. ⬆️ Throwing Errors
4. 🎨 Custom Error Classes
5. 🔄 Error Propagation
6. 🌐 Global Error Handling
7. 📌 Xulosa va Best Practices

---

## 1. ❌ Error Types (Xatolik Turlari)

JavaScript'da barcha built-in xatolik turlari **`Error`** deb nomlangan asosiy (bazaviy) class'dan meros oladi. Har bir `Error` obyekti (va uning barcha "farzand" turlari) quyidagi asosiy xususiyatlarga ega:

- **`name`** — xatolik turining nomi (masalan, `"TypeError"`)
- **`message`** — xatolik haqida tushuntiruvchi matn
- **`stack`** — xatolik qayerda va qanday chaqiruvlar zanjiri orqali yuz berganini ko'rsatuvchi "stack trace" (faqat brauzer/Node.js'da qo'shimcha, standart emas, lekin barcha zamonaviy muhitlarda mavjud)

```javascript
const xato = new Error("Nimadir xato ketdi");

console.log(xato.name); // "Error"
console.log(xato.message); // "Nimadir xato ketdi"
console.log(xato.stack); // "Error: Nimadir xato ketdi\n    at <anonymous>:1:13\n    ..."
console.log(xato instanceof Error); // true
```

### 1.1. `Error` — asosiy (bazaviy) xatolik turi

Barcha boshqa xatolik turlari shundan meros oladi. To'g'ridan-to'g'ri `Error`ni ham ishlatish mumkin, lekin odatda **aniqroq turdagi** xatoliklardan (quyida ko'ramiz) yoki custom error'lardan foydalanish tavsiya etiladi.

```javascript
try {
  throw new Error("Umumiy xatolik yuz berdi");
} catch (xato) {
  console.log(xato.name); // "Error"
  console.log(xato.message); // "Umumiy xatolik yuz berdi"
}
```

### 1.2. `SyntaxError` — sintaksis xatoligi

Kod noto'g'ri yozilganda (JavaScript grammatikasi buzilganda) yuzaga keladi. Bu xatolik odatda kod **bajarilishidan oldin**, parse (tahlil qilish) bosqichida chiqadi, shuning uchun uni `try...catch` bilan ushlab bo'lmaydi (agar kodning o'zi noto'g'ri yozilgan bo'lsa).

```javascript
// Bu quyidagi qator to'g'ridan-to'g'ri fayl ichida yozilsa - dastur umuman ishga tushmaydi:
// const x = ;  // ❌ SyntaxError: Unexpected token ';'

// Lekin SyntaxError'ni try...catch bilan ushlash mumkin bo'lgan holatlar:
// masalan, JSON.parse() yoki eval() ichida ishlatilganda
try {
  JSON.parse("{ism: 'Elmurod'}"); // JSON formatida key qo'sh qo'shtirnoqsiz - noto'g'ri
} catch (xato) {
  console.log(xato.name); // "SyntaxError"
  console.log(xato.message); // "Unexpected token i in JSON at position 1" (yoki shunga o'xshash)
}

try {
  eval("const = 5;"); // noto'g'ri sintaksis - "const" so'zidan keyin o'zgaruvchi nomi yo'q
} catch (xato) {
  console.log(xato instanceof SyntaxError); // true
}
```

### 1.3. `ReferenceError` — mavjud bo'lmagan o'zgaruvchiga murojaat

E'lon qilinmagan (deklaratsiya qilinmagan) yoki hali "temporal dead zone"da bo'lgan o'zgaruvchiga murojaat qilinganda yuzaga keladi.

```javascript
try {
  console.log(mavjudEmasOzgaruvchi); // hech qachon e'lon qilinmagan
} catch (xato) {
  console.log(xato.name); // "ReferenceError"
  console.log(xato.message); // "mavjudEmasOzgaruvchi is not defined"
}

// let/const "Temporal Dead Zone" (TDZ) misoli:
try {
  console.log(kechYoqlangan); // e'lon qilingan, lekin hali "ishga tushmagan" (TDZ ichida)
  let kechYoqlangan = 5;
} catch (xato) {
  console.log(xato.name); // "ReferenceError"
  console.log(xato.message); // "Cannot access 'kechYoqlangan' before initialization"
}

// Assignment (qiymat berish) paytida ham bo'lishi mumkin (strict mode'da):
function test() {
  "use strict";
  mavjudEmas = 10; // e'lon qilinmagan o'zgaruvchiga qiymat berish
}
try {
  test();
} catch (xato) {
  console.log(xato.name); // "ReferenceError"
}
```

### 1.4. `TypeError` — noto'g'ri turdagi qiymat bilan amal bajarish

Eng ko'p uchraydigan xatolik turlaridan biri — qiymat kutilgan turga mos kelmaganda yoki mavjud bo'lmagan metod chaqirilganda yuzaga keladi.

```javascript
try {
  const son = 5;
  son(); // sonni funksiya sifatida chaqirishga urinish
} catch (xato) {
  console.log(xato.name); // "TypeError"
  console.log(xato.message); // "son is not a function"
}

try {
  null.ism; // null'ning xususiyatiga murojaat
} catch (xato) {
  console.log(xato.message); // "Cannot read properties of null (reading 'ism')"
}

try {
  undefined.uzunlik; // undefined'ning xususiyatiga murojaat
} catch (xato) {
  console.log(xato.message); // "Cannot read properties of undefined (reading 'uzunlik')"
}

try {
  const doim = Object.freeze({ qiymat: 1 });
  ("use strict");
  Object.defineProperty(doim, "qiymat", { value: 2 }); // muzlatilgan obyektni o'zgartirish
} catch (xato) {
  console.log(xato.name); // "TypeError"
}

try {
  const massiv = [1, 2, 3];
  massiv.mavjudEmasMetod(); // massivda mavjud bo'lmagan metod
} catch (xato) {
  console.log(xato.message); // "massiv.mavjudEmasMetod is not a function"
}
```

### 1.5. `RangeError` — qiymat ruxsat etilgan diapazondan tashqarida

Son yoki qiymat kutilgan "chegara" (range)dan chiqib ketganda yuzaga keladi.

```javascript
try {
  const massiv = new Array(-5); // massiv uzunligi manfiy bo'lolmaydi
} catch (xato) {
  console.log(xato.name); // "RangeError"
  console.log(xato.message); // "Invalid array length"
}

try {
  const son = 3.14159;
  son.toFixed(150); // toFixed() faqat 0-100 oralig'ini qabul qiladi
} catch (xato) {
  console.log(xato.name); // "RangeError"
  console.log(xato.message); // "toFixed() digits argument must be between 0 and 100"
}

try {
  "salom".repeat(-1); // repeat() manfiy son qabul qilmaydi
} catch (xato) {
  console.log(xato.name); // "RangeError"
}

// Cheksiz rekursiya ham RangeError chiqaradi (chunki call stack chegarasi bor)
function cheksizRekursiya() {
  return cheksizRekursiya();
}
try {
  cheksizRekursiya();
} catch (xato) {
  console.log(xato.name); // "RangeError"
  console.log(xato.message); // "Maximum call stack size exceeded"
}
```

### 1.6. `URIError` — URI funksiyalarida noto'g'ri foydalanish

`encodeURIComponent()`, `decodeURIComponent()`, `encodeURI()`, `decodeURI()` kabi funksiyalarga noto'g'ri (yaroqsiz) qiymat berilganda yuzaga keladi.

```javascript
try {
  decodeURIComponent("%"); // "%" belgisidan keyin ikkita hex raqam bo'lishi kerak, lekin yo'q
} catch (xato) {
  console.log(xato.name); // "URIError"
  console.log(xato.message); // "URI malformed"
}

try {
  decodeURI("%E0%A4%A"); // to'liq bo'lmagan UTF-8 kodlash
} catch (xato) {
  console.log(xato.name); // "URIError"
}
```

### 1.7. Barcha xatolik turlarini solishtiruvchi jadval

| Xatolik turi     | Qachon yuzaga keladi                        | Misol                       |
| ---------------- | ------------------------------------------- | --------------------------- |
| `Error`          | Umumiy, boshqa turlar shundan meros oladi   | `new Error("xabar")`        |
| `SyntaxError`    | Kod grammatikasi noto'g'ri                  | `JSON.parse("{noto'g'ri}")` |
| `ReferenceError` | Mavjud bo'lmagan o'zgaruvchiga murojaat     | `mavjudEmas`                |
| `TypeError`      | Noto'g'ri tur bilan amal bajarish           | `null.xususiyat`, `5()`     |
| `RangeError`     | Qiymat ruxsat etilgan chegaradan tashqarida | `new Array(-1)`             |
| `URIError`       | URI funksiyalarida yaroqsiz qiymat          | `decodeURIComponent("%")`   |

📌 **Bonus — kam uchraydigan turlar:**

- **`EvalError`** — tarixiy sabablarga ko'ra mavjud, lekin zamonaviy JS'da deyarli hech qachon ishlatilmaydi (eskirgan).
- **`AggregateError`** (ES2021+) — bir nechta xatolikni bittada birlashtiradi, masalan `Promise.any()` barcha promise'lar rad etilganda ishlatadi.

```javascript
Promise.any([
  Promise.reject(new Error("Birinchi xato")),
  Promise.reject(new Error("Ikkinchi xato")),
]).catch((xato) => {
  console.log(xato.name); // "AggregateError"
  console.log(xato.errors); // [Error: "Birinchi xato", Error: "Ikkinchi xato"] - barcha xatoliklar massivi
});
```

---

## 2. 🛡️ Try...Catch...Finally

`try...catch...finally` — bu kod bloklarida yuzaga kelishi mumkin bo'lgan xatoliklarni **nazorat ostida** ushlash uchun ishlatiladigan asosiy konstruksiya.

### 2.1. `try` bloki

`try` bloki ichiga xatolik yuzaga kelishi mumkin bo'lgan kod yoziladi. Agar shu blok ichida xatolik yuzaga kelsa, qolgan qismlari **darhol to'xtaydi** va boshqaruv `catch` blokiga o'tadi.

```javascript
try {
  console.log("1-qadam bajarilmoqda");
  const natija = JSON.parse("noto'g'ri JSON");
  console.log("2-qadam - bu qator HECH QACHON bajarilmaydi"); // chunki yuqorida xatolik chiqdi
} catch (xato) {
  console.log("Xatolik ushlandi:", xato.message);
}
// Konsolda: "1-qadam bajarilmoqda" va "Xatolik ushlandi: ..."
// "2-qadam" hech qachon chiqmaydi
```

### 2.2. `catch(error)` bloki — ixtiyoriy binding (ES10 / ES2019+)

`catch` bloki `try` blokida yuzaga kelgan xatolikni "ushlab oladi". ES2019 (ES10)gacha `catch` doim parametr (xatolik obyekti) qabul qilishi **shart** edi, lekin ES2019'dan boshlab, agar xatolik obyekti kerak bo'lmasa, parametrni butunlay tashlab yuborish mumkin (**optional catch binding**).

```javascript
// ES2019'dan OLDINGI usul - parametr har doim yozilishi SHART edi, hatto ishlatilmasa ham
try {
  riskliAmal();
} catch (xato) {
  // "xato" ishlatilmasa ham yozish majburiy edi
  console.log("Xatolik yuz berdi, lekin tafsilotlar muhim emas");
}

// ES2019+ (ES10+) - agar xatolik obyekti kerak bo'lmasa, uni tashlab yuborish mumkin
try {
  riskliAmal();
} catch {
  // parametr yo'q - "optional catch binding"
  console.log("Xatolik yuz berdi, lekin tafsilotlar muhim emas");
}

function riskliAmal() {
  throw new Error("test xatoligi");
}
```

**Amaliy misol — optional catch binding qachon foydali:**

```javascript
// Masalan, funksiya mavjudligini shunchaki tekshirish kerak, xatolik SABABI muhim emas
function funksiyaMavjudmi(funksiyaNomi) {
  try {
    new Function(funksiyaNomi);
    return true;
  } catch {
    return false; // xatolik sababi bizga kerak emas, faqat "xatolik bo'ldi" degan fakt kerak
  }
}
```

### 2.3. `finally` bloki — har doim bajariladi

`finally` bloki — `try` blokida xatolik yuz berdimi yoki yo'qmi, **har doim** bajariladigan kod bo'limi. Odatda "tozalash" ishlari uchun ishlatiladi: fayllarni yopish, ulanishlarni uzish, yuklanish indikatorini o'chirish va h.k.

```javascript
function malumotYukla() {
  console.log("Yuklash boshlandi...");
  try {
    const malumot = JSON.parse('{"ism":"Elmurod"}'); // muvaffaqiyatli
    console.log("Ma'lumot yuklandi:", malumot);
    return malumot;
  } catch (xato) {
    console.log("Xatolik:", xato.message);
    return null;
  } finally {
    console.log(
      "Yuklash tugadi (muvaffaqiyatli yoki xatolik bilan - bari bir shu yerga keladi)",
    );
  }
}

malumotYukla();
// Yuklash boshlandi...
// Ma'lumot yuklandi: { ism: 'Elmurod' }
// Yuklash tugadi (muvaffaqiyatli yoki xatolik bilan - bari bir shu yerga keladi)
```

**`finally` hattoki `return` bo'lganda ham ishlaydi:**

```javascript
function test() {
  try {
    return "try'dan qaytish";
  } finally {
    console.log("finally baribir ishga tushadi, return'dan oldin!");
  }
}

console.log(test());
// "finally baribir ishga tushadi, return'dan oldin!"
// "try'dan qaytish"
```

⚠️ **Muhim va xavfli holat: `finally` ichida `return` yozish `try`/`catch`dagi `return`ni "yutib yuboradi":**

```javascript
function xavfliMisol() {
  try {
    return "try qiymati";
  } finally {
    return "finally qiymati"; // BU qaytadi! try'dagi return e'tiborga olinmaydi
  }
}

console.log(xavfliMisol()); // "finally qiymati" - try'dagi natija yo'qoldi!
// ⚠️ Shuning uchun finally ichida return yozish TAVSIYA ETILMAYDI
```

### 2.4. Real hayotiy to'liq misol

```javascript
function fayldanOʻqish(fayl) {
  let ulanishOchiqmi = true; // resurslarni ifodalash uchun (masalan, fayl ulanishi)

  try {
    console.log(`"${fayl}" fayli ochilmoqda...`);

    if (fayl === "") {
      throw new Error("Fayl nomi bo'sh bo'lishi mumkin emas");
    }

    if (!fayl.endsWith(".txt")) {
      throw new TypeError("Faqat .txt fayllar qo'llab-quvvatlanadi");
    }

    console.log("Fayl muvaffaqiyatli o'qildi");
    return "fayl mazmuni";
  } catch (xato) {
    if (xato instanceof TypeError) {
      console.log("Tur xatoligi:", xato.message);
    } else {
      console.log("Umumiy xatolik:", xato.message);
    }
    return null;
  } finally {
    ulanishOchiqmi = false;
    console.log("Fayl ulanishi yopildi. Ulanish holati:", ulanishOchiqmi);
  }
}

fayldanOʻqish("hujjat.pdf");
// "hujjat.pdf" fayli ochilmoqda...
// Tur xatoligi: Faqat .txt fayllar qo'llab-quvvatlanadi
// Fayl ulanishi yopildi. Ulanish holati: false
```

---

## 3. ⬆️ Throwing Errors (Xatolik Yaratish)

`throw` kalit so'zi orqali dasturchi **o'zi** xatolik yaratishi va uni "otib yuborishi" mumkin. `throw`dan keyin **istalgan qiymat** kelishi mumkin (nazariy jihatdan), lekin **doim `Error` obyektidan (yoki uning avlodidan) foydalanish kuchli tavsiya etiladi**.

```javascript
// ❌ YOMON amaliyot - oddiy string yoki obyekt otish
function boʻlish1(a, b) {
  if (b === 0) {
    throw "Nolga bo'lib bo'lmaydi!"; // string otildi - stack trace, name kabi foydali ma'lumotlar yo'q
  }
  return a / b;
}

// ✅ YAXSHI amaliyot - Error obyektidan foydalanish
function boʻlish2(a, b) {
  if (b === 0) {
    throw new Error("Nolga bo'lib bo'lmaydi!"); // stack trace, name, message - hammasi mavjud
  }
  return a / b;
}

try {
  boʻlish2(10, 0);
} catch (xato) {
  console.log(xato.message); // "Nolga bo'lib bo'lmaydi!"
  console.log(xato.stack); // to'liq stack trace - qayerda xatolik yuz berganini ko'rsatadi
}
```

### 3.1. Turli xatolik turlarini vaziyatga qarab tanlash

```javascript
function foydalanuvchiYarat(ism, yosh, email) {
  if (typeof ism !== "string") {
    throw new TypeError("Ism string turida bo'lishi kerak");
  }
  if (yosh < 0 || yosh > 150) {
    throw new RangeError("Yosh 0 dan 150 gacha bo'lishi kerak");
  }
  if (!email.includes("@")) {
    throw new Error("Email formati noto'g'ri"); // aniqroq tur bo'lmasa - oddiy Error yetarli
  }
  return { ism, yosh, email };
}

try {
  foydalanuvchiYarat("Elmurod", 200, "test@mail.com");
} catch (xato) {
  console.log(`${xato.name}: ${xato.message}`); // "RangeError: Yosh 0 dan 150 gacha bo'lishi kerak"
}
```

### 3.2. Funksiya ichida `throw` — bajarilishni to'xtatadi

`throw` chaqirilgan zahoti funksiyaning qolgan qismi (va uni chaqirgan barcha funksiyalar zanjiri, agar `try...catch` bo'lmasa) darhol to'xtaydi.

```javascript
function tekshir(qiymat) {
  console.log("Tekshirish boshlandi");
  if (qiymat < 0) {
    throw new Error("Manfiy qiymat qabul qilinmaydi");
  }
  console.log("Bu qator throw ishga tushsa hech qachon chiqmaydi");
  return qiymat * 2;
}

try {
  tekshir(-5);
} catch (xato) {
  console.log("Ushlandi:", xato.message);
}
// "Tekshirish boshlandi"
// "Ushlandi: Manfiy qiymat qabul qilinmaydi"
```

---

## 4. 🎨 Custom Error Classes (`extends Error`)

Katta loyihalarda odatda **o'z xatolik turlaringizni** yaratish tavsiya etiladi — bu xatoliklarni turlarga ajratish, ularni `instanceof` orqali aniq tekshirish va qo'shimcha ma'lumot (masalan, HTTP status kodi) saqlashni osonlashtiradi.

### 4.1. Oddiy custom error class

```javascript
class ValidatsiyaXatoligi extends Error {
  constructor(xabar) {
    super(xabar); // Error konstruktorini chaqirib, "message" xususiyatini o'rnatadi
    this.name = "ValidatsiyaXatoligi"; // "name"ni o'zgartiramiz, aks holda "Error" bo'lib qoladi
  }
}

function yoshniTekshir(yosh) {
  if (yosh < 18) {
    throw new ValidatsiyaXatoligi(
      "Foydalanuvchi 18 yoshdan katta bo'lishi kerak",
    );
  }
  return true;
}

try {
  yoshniTekshir(15);
} catch (xato) {
  console.log(xato.name); // "ValidatsiyaXatoligi"
  console.log(xato.message); // "Foydalanuvchi 18 yoshdan katta bo'lishi kerak"
  console.log(xato instanceof Error); // true - hamon Error'ning "farzandi"
  console.log(xato instanceof ValidatsiyaXatoligi); // true
}
```

### 4.2. Qo'shimcha ma'lumot bilan boyitilgan custom error

```javascript
class HttpXatoligi extends Error {
  constructor(xabar, statusKod, url) {
    super(xabar);
    this.name = "HttpXatoligi";
    this.statusKod = statusKod; // qo'shimcha, o'ziga xos ma'lumot
    this.url = url;
    // Zamonaviy JS muhitlarida stack trace'ni to'g'ri ushlab qolish uchun:
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpXatoligi);
    }
  }
}

async function malumotOlish(url) {
  const javob = { status: 404, ok: false }; // simulyatsiya qilingan javob (fetch o'rniga)

  if (!javob.ok) {
    throw new HttpXatoligi(
      `So'rov muvaffaqiyatsiz: ${javob.status}`,
      javob.status,
      url,
    );
  }
  return javob;
}

malumotOlish("https://api.example.com/foydalanuvchi").catch((xato) => {
  if (xato instanceof HttpXatoligi) {
    console.log(
      `HTTP xatolik [${xato.statusKod}]: ${xato.message}, URL: ${xato.url}`,
    );
    // HTTP xatolik [404]: So'rov muvaffaqiyatsiz: 404, URL: https://api.example.com/foydalanuvchi
  }
});
```

### 4.3. Bir nechta custom error turlarini ierarxiya sifatida qurish

```javascript
// Bazaviy "ilova xatoligi" - barcha custom xatoliklarimiz shundan meros oladi
class IlovaXatoligi extends Error {
  constructor(xabar) {
    super(xabar);
    this.name = this.constructor.name; // avtomatik ravishda haqiqiy class nomini oladi
  }
}

class TarmoqXatoligi extends IlovaXatoligi {
  constructor(xabar, url) {
    super(xabar);
    this.url = url;
  }
}

class AutentifikatsiyaXatoligi extends IlovaXatoligi {
  constructor(xabar) {
    super(xabar);
  }
}

class RuxsatYoʻqXatoligi extends AutentifikatsiyaXatoligi {
  constructor(foydalanuvchi) {
    super(`"${foydalanuvchi}" uchun ruxsat berilmagan`);
    this.foydalanuvchi = foydalanuvchi;
  }
}

function amalniBajar(foydalanuvchi, roli) {
  if (roli !== "admin") {
    throw new RuxsatYoʻqXatoligi(foydalanuvchi);
  }
  return "Amal bajarildi";
}

try {
  amalniBajar("Elmurod", "user");
} catch (xato) {
  console.log(xato.name); // "RuxsatYoʻqXatoligi" (this.constructor.name orqali avtomatik)
  console.log(xato.message); // ""Elmurod" uchun ruxsat berilmagan"

  // Ierarxiya bo'ylab tekshirish - eng aniqdan eng umumiygacha
  console.log(xato instanceof RuxsatYoʻqXatoligi); // true
  console.log(xato instanceof AutentifikatsiyaXatoligi); // true - meros orqali
  console.log(xato instanceof IlovaXatoligi); // true
  console.log(xato instanceof Error); // true
}
```

### 4.4. `cause` xususiyati (ES2022+) — xatoliklarni zanjirlash

ES2022'dan boshlab `Error` konstruktori ikkinchi argument sifatida `{ cause }` obyektini qabul qiladi — bu **bir xatolik boshqa xatolik sabab bo'lganda**, asl sababni yo'qotmasdan saqlab qolish imkonini beradi.

```javascript
function malumotBazasigaUlanish() {
  throw new Error("Ma'lumotlar bazasiga ulanib bo'lmadi");
}

function foydalanuvchiOlish() {
  try {
    malumotBazasigaUlanish();
  } catch (asilXato) {
    // Yangi, yuqori darajadagi xatolik yaratamiz, lekin asl sababni saqlab qolamiz
    throw new Error("Foydalanuvchi ma'lumotlarini olishda xatolik", {
      cause: asilXato,
    });
  }
}

try {
  foydalanuvchiOlish();
} catch (xato) {
  console.log(xato.message); // "Foydalanuvchi ma'lumotlarini olishda xatolik"
  console.log(xato.cause.message); // "Ma'lumotlar bazasiga ulanib bo'lmadi" - asl sabab saqlanib qoldi!
}
```

---

## 5. 🔄 Error Propagation (Xatolikning Tarqalishi)

Agar funksiya ichida yuzaga kelgan xatolik o'sha funksiyaning o'zida `try...catch` bilan ushlanmasa, u **call stack (chaqiruvlar zanjiri) bo'ylab yuqoriga qarab "ko'tariladi"** — bu jarayon **error propagation** (xatolikning tarqalishi/yoyilishi) deb ataladi. Xatolik uni ushlaydigan birinchi `catch` blokigacha (yoki hech kim ushlamasa, dastur to'xtab qolguncha) yuqoriga ko'tarilib boraveradi.

```javascript
function daraja3() {
  throw new Error("3-darajada xatolik yuz berdi");
}

function daraja2() {
  console.log("2-daraja: daraja3() chaqirilmoqda");
  daraja3(); // bu yerda xatolik ushlanmaydi - yuqoriga "otiladi"
  console.log("Bu qator hech qachon bajarilmaydi");
}

function daraja1() {
  console.log("1-daraja: daraja2() chaqirilmoqda");
  daraja2(); // bu yerda ham ushlanmaydi
}

try {
  daraja1(); // faqat eng tashqi (yuqori) darajada ushlanadi
} catch (xato) {
  console.log("Asosiy dasturda ushlandi:", xato.message);
}
// "1-daraja: daraja2() chaqirilmoqda"
// "2-daraja: daraja3() chaqirilmoqda"
// "Asosiy dasturda ushlandi: 3-darajada xatolik yuz berdi"
```

### 5.1. Xatolikni qisman ushlab, keyin qayta "otish" (re-throw)

Ba'zan funksiya xatolikni ushlab, unga qandaydir amal bajarishi (masalan, log yozish), so'ngra uni **yana yuqoriga uzatishi** kerak bo'ladi.

```javascript
function malumotQayta1shlash(malumot) {
  try {
    return JSON.parse(malumot);
  } catch (xato) {
    console.log("Log: JSON parslashda xatolik yuz berdi, qayta otilmoqda...");
    throw xato; // xatolikni qayta "otib yuboramiz" - chaqiruvchi funksiya ushlasin
  }
}

function asosiyFunksiya() {
  try {
    malumotQayta1shlash("noto'g'ri json");
  } catch (xato) {
    console.log("asosiyFunksiya'da yakuniy ushlash:", xato.message);
  }
}

asosiyFunksiya();
// "Log: JSON parslashda xatolik yuz berdi, qayta otilmoqda..."
// "asosiyFunksiya'da yakuniy ushlash: Unexpected token o in JSON at position 1"
```

### 5.2. Asinxron kodda (`async`/`await`) propagation

```javascript
async function malumotOlish() {
  throw new Error("API xatoligi");
}

async function malumotniQaytaIshlash() {
  // async funksiya ichida throw qilingan xatolik AVTOMATIK ravishda
  // qaytarilgan Promise'ning "rejected" holatiga aylanadi
  const natija = await malumotOlish(); // bu yerda xatolik "otiladi"
  return natija; // bu qator hech qachon bajarilmaydi
}

async function ishgaTushirish() {
  try {
    await malumotniQaytaIshlash();
  } catch (xato) {
    console.log("Asinxron xatolik ushlandi:", xato.message); // "API xatoligi"
  }
}

ishgaTushirish();

// Promise zanjiri (.then/.catch) orqali ham xuddi shunday tarqaladi:
malumotOlish()
  .then((natija) => console.log(natija)) // xatolik bo'lgani uchun bu chaqirilmaydi
  .catch((xato) => console.log(".catch() orqali ushlandi:", xato.message)); // shu yerda ushlanadi
```

---

## 6. 🌐 Global Error Handling (Global Xatoliklarni Boshqarish)

Ba'zan xatoliklar hech qanday `try...catch` bilan o'ralmagan joyda yuzaga keladi (masalan, event handler ichida yoki asinxron kodda unutilib qolgan holatda). Bunday "ushlanmagan" xatoliklarni **butun dastur darajasida** ushlash uchun global mexanizmlar mavjud.

### 6.1. `window.onerror` (brauzer muhiti)

`window.onerror` — brauzerda yuzaga kelgan, hech qanday `try...catch` bilan ushlanmagan xatoliklarni **global darajada** ushlab olish imkonini beradi. Odatda xatoliklarni log qilish (masalan, Sentry kabi xizmatlarga yuborish) uchun ishlatiladi.

```javascript
// Global xatolik handler'ini o'rnatish (brauzer muhitida)
window.onerror = function (xabar, manba, qatorRaqami, ustunRaqami, xatoObj) {
  console.log("Global xatolik ushlandi:");
  console.log("Xabar:", xabar); // xatolik matni
  console.log("Manba fayl:", manba); // xatolik yuz bergan fayl
  console.log("Qator:", qatorRaqami); // qaysi qatorda
  console.log("Ustun:", ustunRaqami); // qaysi ustunda
  console.log("Error obyekti:", xatoObj); // to'liq Error obyekti

  return true; // true qaytarilsa - brauzerning standart xatolik konsoliga chiqishini oldini oladi
};

// Bu funksiya try...catch bilan o'ralmagan, shuning uchun xatolik window.onerror'ga boradi
function xavfliFunksiya() {
  mavjudEmasOzgaruvchi.metod(); // ReferenceError
}

// setTimeout ichida chaqirilsa - bu xatolikni tashqi try...catch ushlay olmaydi!
setTimeout(xavfliFunksiya, 100);
// window.onerror orqali ushlanadi
```

**Zamonaviy alternativa — `addEventListener("error", ...)`:**

```javascript
window.addEventListener("error", (hodisa) => {
  console.log("Xatolik hodisasi:", hodisa.message);
  console.log("Fayl:", hodisa.filename, "Qator:", hodisa.lineno);
  hodisa.preventDefault(); // standart brauzer xatti-harakatini to'xtatish
});
```

### 6.2. `unhandledrejection` hodisasi — ushlanmagan Promise rad etilishlari

Agar `Promise` "rejected" (rad etilgan) holatga o'tsa, lekin unga hech qanday `.catch()` yoki `try...catch` (async/await ichida) biriktirilmagan bo'lsa, bu **"unhandled promise rejection"** deb ataladi. Buni ushlash uchun brauzerda `unhandledrejection` hodisasi ishlatiladi.

```javascript
// Brauzer muhitida
window.addEventListener("unhandledrejection", (hodisa) => {
  console.log("Ushlanmagan Promise xatoligi:", hodisa.reason);
  // hodisa.reason - bu rad etish sababi (odatda Error obyekti)
  hodisa.preventDefault(); // konsolda standart ogohlantirish chiqishini oldini oladi
});

// Bu Promise hech qanday .catch() bilan ushlanmagan - "unhandledrejection" ishga tushadi
function xatoliPromiseYarat() {
  return new Promise((resolve, reject) => {
    reject(new Error("Bu xatolik hech qachon ushlanmadi"));
  });
}

xatoliPromiseYarat(); // .catch() yo'q!
// Konsolda: "Ushlanmagan Promise xatoligi: Error: Bu xatolik hech qachon ushlanmadi"
```

**Amaliy foydalanish — monitoring/log tizimlari uchun:**

```javascript
window.addEventListener("unhandledrejection", (hodisa) => {
  // Masalan, xatolikni tashqi monitoring xizmatiga yuborish
  fetch("/api/log-xatolik", {
    method: "POST",
    body: JSON.stringify({
      xabar: hodisa.reason.message,
      stack: hodisa.reason.stack,
      vaqt: new Date().toISOString(),
    }),
  }).catch(() => {
    // Log yuborishning o'zi ham xatolik bersa - uni jimgina e'tiborsiz qoldiramiz
  });
});
```

### 6.3. `process.on('uncaughtException')` — Node.js muhiti

Node.js muhitida brauzerdagi `window` obyekti mavjud emas, uning o'rniga global `process` obyekti orqali ushlanmagan xatoliklarni boshqarish mumkin.

```javascript
// Node.js muhitida - "uncaughtException" - sinxron kodda ushlanmagan xatoliklar uchun
process.on("uncaughtException", (xato, kelibChiqishTuri) => {
  console.log("Ushlanmagan istisno:", xato.message);
  console.log("Kelib chiqish turi:", kelibChiqishTuri); // "uncaughtException"

  // ⚠️ MUHIM: uncaughtException'dan keyin dastur holati NOANIQ bo'lib qolishi mumkin
  // Shuning uchun odatda log yozib, keyin dasturni to'g'ri yopish TAVSIYA ETILADI:
  // process.exit(1);
});

// Bu xatolik hech qanday try...catch bilan ushlanmagan
setTimeout(() => {
  throw new Error("Node.js'da ushlanmagan xatolik");
}, 100);
```

**Node.js'da Promise rad etilishlari uchun — `unhandledRejection`:**

```javascript
// Node.js muhitida - "unhandledRejection" - asinxron Promise xatoliklari uchun
process.on("unhandledRejection", (sabab, promise) => {
  console.log("Ushlanmagan Promise rad etilishi:", sabab);
  console.log("Promise obyekti:", promise);
});

function asinxronXato() {
  return Promise.reject(new Error("Node.js'da ushlanmagan Promise xatoligi"));
}

asinxronXato(); // .catch() yo'q
```

**Node.js'da to'liq, ishlab chiqarish (production) uchun tavsiya etiladigan yondashuv:**

```javascript
process.on("uncaughtException", (xato) => {
  console.error("KUTILMAGAN XATOLIK:", xato);
  // Log tizimiga yuborish...
  process.exit(1); // dastur holati ishonchsiz bo'lgani uchun, xavfsiz tarzda to'xtatish tavsiya etiladi
});

process.on("unhandledRejection", (sabab) => {
  console.error("USHLANMAGAN PROMISE:", sabab);
  // Odatda bu yerda ham log yozib, keyin process.exit(1) chaqiriladi
  process.exit(1);
});
```

### 6.4. Global handler'lar va oddiy `try...catch` farqi

| Xususiyat               | `try...catch`                                          | Global handler (`window.onerror`, `process.on`)                 |
| ----------------------- | ------------------------------------------------------ | --------------------------------------------------------------- |
| Qamrov darajasi         | Faqat o'ralgan kod bloki                               | Butun dastur/sahifa                                             |
| Ishlatilish maqsadi     | Kutilgan, aniq xatoliklarni boshqarish                 | Kutilmagan, "unutilib qolgan" xatoliklarni ushlash              |
| Dasturni davom ettirish | Aniq nazorat qilinadi                                  | Ko'pincha faqat log yozish, dastur holati noaniq bo'lib qoladi  |
| Tavsiya etilishi        | Har doim, imkon qadar aniq joylarda ishlatilishi kerak | Faqat "oxirgi chegara" (last resort) sifatida, monitoring uchun |

---

## 7. 📌 Xulosa va Best Practices

✅ **Amaliy tavsiyalar:**

1. **Har doim `Error` obyektidan (yoki uning avlodidan) `throw` qiling**, hech qachon oddiy string yoki raqam otmang — aks holda `stack`, `name` kabi foydali ma'lumotlarni yo'qotasiz.
2. **Xatolik turlarini aniq tanlang** — `TypeError`, `RangeError` kabi mos turlardan foydalaning, bu kodni o'qigan boshqa dasturchiga (yoki kelajakdagi sizga) tezda tushunish imkonini beradi.
3. **Custom error class'lar yarating** — katta loyihalarda `ValidatsiyaXatoligi`, `TarmoqXatoligi` kabi aniq nomlangan xatolik turlari kodni ancha tushunarli va boshqarilishini osonlashtiradi qiladi.
4. **`try...catch`ni juda "keng" qilib yozmang** — faqat aniq xatolik yuzaga kelishi mumkin bo'lgan kod qismini o'rab oling, aks holda haqiqiy xatolik manbasini topish qiyinlashadi.
5. **`finally` ichida `return` yozmang** — bu `try`/`catch`dagi natijani "yutib yuboradi" va tushunarsiz xatoliklarga olib keladi.
6. **Xatolikni faqat "yutib yubormang"** (`catch` blokini bo'sh qoldirmang) — hech bo'lmaganda log yozing, aks holda muammoni aniqlash imkonsiz bo'lib qoladi.
7. **Global handler'larni (`window.onerror`, `unhandledrejection`, `process.on`) faqat "oxirgi chegara" sifatida ishlating** — ular oddiy `try...catch` o'rnini bosmaydi, balki qo'shimcha xavfsizlik tarmog'i (safety net) sifatida xizmat qiladi.
8. **Asinxron kodda `await`ni har doim `try...catch` bilan o'rang** (yoki `.catch()` qo'shing) — aks holda "unhandled promise rejection" xatoligiga duch kelasiz.

---

**Muallif izohi:** Ushbu qo'llanma JavaScript'dagi xatoliklarni boshqarish mexanizmlarini — barcha built-in xatolik turlaridan tortib, custom error class'lar, xatolikning tarqalishi va global xatoliklarni ushlashgacha — to'liq amaliy misollar bilan qamrab oladi. Har bir bo'limni o'zingiz sinab ko'rish (ayniqsa `finally` va `re-throw` misollarini) tushunishni sezilarli mustahkamlaydi.
