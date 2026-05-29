# **Strings**

# 🆕 String Creation & Fundamentals

---

## 🆕 String Creation

### 1. Quotes: `''` va `""`

JavaScript'da string yaratishning eng asosiy usuli — qo'shtirnoq yoki bitta tirnoq ishlatish.

```javascript
// ✅ Single quotes
let name = "Ali";
let city = "Tashkent";

// ✅ Double quotes
let greeting = "Salom dunyo";
let country = "O'zbekiston";

// ⚠️ Ichida xuddi shu tirnoq bo'lsa — escape kerak
let msg1 = "It's a beautiful day"; // backslash bilan escape
let msg2 = 'He said "Hello"'; // backslash bilan escape

// ✅ Yoki boshqa tirnoq ishlatish — escape shart emas
let msg3 = "It's a beautiful day"; // ichida ' bor, tashqari "
let msg4 = 'He said "Hello"'; // ichida " bor, tashqari '
```

> 💡 **Farq yo'q** — `''` va `""` funksional jihatdan bir xil. Loyihada bittasini tanlang va izchil ishlating.

---

### 2. Template Literals `` ` ` `` — ES6+

Backtick (`` ` ``) bilan yoziladigan yangi usul. Ko'p imkoniyatlar beradi.

```javascript
// ✅ Oddiy template literal
let name = "Ali";
let greeting = `Salom, ${name}!`;
console.log(greeting); // "Salom, Ali!"

// ✅ Har qanday expression yozsa bo'ladi ${}  ichiga
let a = 10,
  b = 20;
console.log(`${a} + ${b} = ${a + b}`); // "10 + 20 = 30"
console.log(`5 ning kvadrati: ${5 ** 2}`); // "5 ning kvadrati: 25"
console.log(`Katta: ${a > b ? a : b}`); // "Katta: 20"

// ✅ Funksiya chaqirish ham mumkin
function upper(str) {
  return str.toUpperCase();
}
console.log(`Ism: ${upper("ali")}`); // "Ism: ALI"
```

```javascript
// ✅ Multi-line string — yangi qator uchun \n shart emas
let address = `
  Mamlakat: O'zbekiston
  Shahar: Tashkent
  Kod: 100000
`;
console.log(address);
// (3 qatorli chiqadi)

// ⚠️ Oddiy qo'shtirnoq bilan multi-line — xato beradi
let wrong = "qator 1
qator 2";  // ❌ SyntaxError!

// Eski usul — \n yozish kerak edi
let old = "qator 1\nqator 2";  // ✅ ishlaydi lekin o'qish qiyin
```

---

## 📏 String Properties: `.length`

`.length` — stringdagi **belgilar sonini** qaytaradi.

```javascript
let str = "Salom";
console.log(str.length); // 5

console.log("".length); // 0  — bo'sh string
console.log("  ".length); // 2  — probel ham belgi!
console.log("Ali\n".length); // 4  — \n ham 1 ta belgi

// ✅ Amaliy ishlatish
let password = "secret123";
if (password.length < 8) {
  console.log("Parol juda qisqa!");
} else {
  console.log("Parol uzunligi yetarli ✅");
}

// ✅ Oxirgi belgiga kirish
let word = "JavaScript";
console.log(word[word.length - 1]); // "t" — oxirgi harf
console.log(word[word.length - 2]); // "p" — oxiridan ikkinchi

// ⚠️ length — METHOD EMAS, PROPERTY!
console.log("test".length); // ✅ 4
console.log("test".length()); // ❌ TypeError: length is not a function
```

---

## 🔒 String Immutability

String **o'zgarmas (immutable)** — yaratilgandan keyin uning ichidagi belgilarni **o'zgartirib bo'lmaydi**.

```javascript
// ❌ Belgini to'g'ridan-to'g'ri o'zgartirish ishlamaydi
let str = "Salom";
str[0] = "X";
console.log(str); // "Salom" — o'zgarmadi! (strict mode'da error)

// ✅ Yangi string yaratish kerak
let str2 = "X" + str.slice(1);
console.log(str2); // "Xalom"
```

```javascript
// 🔍 Chuqurroq tushunish — variable vs string
let name = "Ali";
name = "Vali"; // ✅ bu ishlaydi — lekin!
// "Ali" o'zgarmadi — name variabli yangi "Vali" stringiga ko'rsatdi
// "Ali" xotirada o'chirilmagan, faqat reference o'zgardi

// Massiv bilan taqqoslash (massiv mutable):
let arr = [1, 2, 3];
arr[0] = 99;
console.log(arr); // [99, 2, 3]  ✅ — massiv o'zgardi

let s = "abc";
s[0] = "Z";
console.log(s); // "abc"  — string o'zgarmadi!
```

```javascript
// ✅ String methodlari YANGI string qaytaradi, eskisini o'zgartirmaydi
let original = "  salom  ";
let trimmed = original.trim();

console.log(original); // "  salom  "  — o'zgarmagan!
console.log(trimmed); // "salom"       — yangi string

// Amaliy misol: har bir qayta ishlashda yangi string
let text = "hello";
let result =
  text
    .toUpperCase() // "HELLO"    — yangi string
    .replace("H", "J") + // "JELLO"   — yangi string
  "!"; // "JELLO!"  — yangi string

console.log(text); // "hello" — original hech qachon o'zgarmaydi
console.log(result); // "JELLO!"
```

---

<br>
<br>
<br>
<br>
<br>

# 🛠️ String Methods

---

## 🔠 Case — Harf o'zgartirish

### `toUpperCase()` / `toLowerCase()`

```javascript
let str = "Hello World";

console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"

// ✅ Amaliy: case-insensitive taqqoslash
let input = "ALI";
let name = "ali";
console.log(input.toLowerCase() === name.toLowerCase()); // true

// ✅ Birinchi harf katta — klassik pattern
let word = "javascript";
let capitalized = word[0].toUpperCase() + word.slice(1);
console.log(capitalized); // "Javascript"

// ✅ Har so'zni katta harf bilan boshlash
let title = "salom dunyo uzbekiston";
let titled = title
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.slice(1))
  .join(" ");
console.log(titled); // "Salom Dunyo Uzbekiston"
```

---

## 🔍 Search — Qidirish

### `indexOf()` / `lastIndexOf()`

```javascript
let str = "men javascript o'rganaman, javascript qiziq";
//         0123456789...

// indexOf — chapdan qidiradi, topilgan INDEX qaytaradi, topilmasa -1
console.log(str.indexOf("javascript")); // 4
console.log(str.indexOf("python")); // -1  — topilmadi

// ✅ 2-argument — qayerdan boshlash
console.log(str.indexOf("javascript", 10)); // 27  — 10-indexdan keyin qidiradi

// lastIndexOf — o'ngdan qidiradi (oxirgi uchrashuvni topadi)
console.log(str.lastIndexOf("javascript")); // 27
console.log(str.lastIndexOf("javascript", 20)); // 4 — 20-indexgacha qidiradi

// ✅ Amaliy: mavjudligini tekshirish
if (str.indexOf("javascript") !== -1) {
  console.log("Topildi! ✅");
}

// ✅ Amaliy: fayl kengaytmasini olish
let filename = "photo.vacation.jpg";
let lastDot = filename.lastIndexOf(".");
let ext = filename.slice(lastDot + 1);
console.log(ext); // "jpg"
```

---

### `includes()` / `startsWith()` / `endsWith()`

```javascript
let str = "JavaScript juda kuchli til";

// ✅ includes — mavjudmi? true/false qaytaradi
console.log(str.includes("kuchli")); // true
console.log(str.includes("python")); // false
console.log(str.includes("Java", 5)); // false — 5-indexdan keyin qidiradi

// ✅ startsWith — shu bilan boshlanadimi?
console.log(str.startsWith("JavaScript")); // true
console.log(str.startsWith("java")); // false  — case-sensitive!
console.log(str.startsWith("juda", 11)); // true   — 11-indexdan boshlab tekshiradi

// ✅ endsWith — shu bilan tugaydimi?
console.log(str.endsWith("til")); // true
console.log(str.endsWith("kuchli", 20)); // true   — faqat 20 belgigacha tekshiradi

// ✅ Amaliy: fayl turini tekshirish
let file = "resume.pdf";
if (file.endsWith(".pdf")) {
  console.log("Bu PDF fayl 📄");
}

// ✅ Amaliy: URL tekshirish
let url = "https://github.com/ali";
if (url.startsWith("https://")) {
  console.log("Xavfsiz ulanish 🔒");
}

// ✅ Amaliy: spam filter
let message = "Tabriklaymiz! 1,000,000 dollar yutdingiz!";
let spamWords = ["yutdingiz", "sovg'a", "bepul"];
let isSpam = spamWords.some((word) => message.includes(word));
console.log(isSpam); // true 🚫
```

---

## ✂️ Extract — Kesib olish

### `slice(start, end)`

```javascript
let str = "JavaScript";
//         0123456789
//        -10-9-8...  (manfiy indexlar)

// slice(start, end) — start dan end gacha (end kirmaydi)
console.log(str.slice(0, 4)); // "Java"
console.log(str.slice(4)); // "Script"  — oxirigacha
console.log(str.slice(0)); // "JavaScript" — to'liq nusxa

// ✅ Manfiy index — oxiridan hisoblaydi
console.log(str.slice(-6)); // "Script"  — oxirgi 6 ta
console.log(str.slice(-6, -3)); // "Scr"
console.log(str.slice(0, -6)); // "Java"    — oxirgi 6 tasiz

// ✅ Amaliy misollar
let email = "ali@gmail.com";
let domain = email.slice(email.indexOf("@") + 1);
console.log(domain); // "gmail.com"

let filename = "photo.jpg";
let name = filename.slice(0, filename.lastIndexOf("."));
console.log(name); // "photo"

// Oxirgi N ta belgi
let code = "ERR_404";
console.log(code.slice(-3)); // "404"
```

---

### `substring(start, end)`

```javascript
let str = "JavaScript";

// substring — slice ga o'xshash, lekin farqlari bor
console.log(str.substring(0, 4)); // "Java"
console.log(str.substring(4)); // "Script"
console.log(str.substring(4, 0)); // "Java" ⚠️ — argumentlarni almashtiradi!

// ⚠️ Manfiy index ishlamaydi — 0 deb qabul qiladi
console.log(str.substring(-3)); // "JavaScript"  — -3 → 0 bo'ldi

// slice vs substring — farq
let s = "Hello";
console.log(s.slice(-3)); // "llo" ✅ — manfiy ishlaydi
console.log(s.substring(-3)); // "Hello" ⚠️ — manfiy ishlamaydi

// ✅ Qoida: substring o'rniga slice ishlating — aniqroq va kuchliroq
```

---

### ⛔ `substr()` — DEPRECATED, ishlatmang!

```javascript
// ❌ substr(start, LENGTH) — ikkinchi argument COUNT, standartdan chiqarilgan
let str = "JavaScript";
console.log(str.substr(4, 6)); // "Script" — ishlaydi lekin ishlatmang!

// ✅ O'rniga slice ishlating:
console.log(str.slice(4, 10)); // "Script"  — xuddi shu natija
```

---

## 🔀 Split/Join

### `split(separator)`

```javascript
// String → Array ga aylantiradi
let str = "ali,vali,soli,hasan";
console.log(str.split(","));
// ["ali", "vali", "soli", "hasan"]

// Bo'sh string — har bir belgiga ajratadi
console.log("hello".split(""));
// ["h", "e", "l", "l", "o"]

// Bo'shliq bo'yicha
let sentence = "men dastur yozaman";
console.log(sentence.split(" "));
// ["men", "dastur", "yozaman"]

// ✅ 2-argument — nechta element olish
console.log(str.split(",", 2));
// ["ali", "vali"]  — faqat 2 ta

// ✅ Argumentsiz — butun stringni bitta elementga
console.log("hello".split());
// ["hello"]

// ✅ Amaliy: CSV qayta ishlash
let csv = "Ism,Yosh,Shahar\nAli,25,Tashkent\nVali,30,Samarkand";
let rows = csv.split("\n");
rows.forEach((row) => {
  let cols = row.split(",");
  console.log(cols);
});
// ["Ism", "Yosh", "Shahar"]
// ["Ali", "25", "Tashkent"]
// ["Vali", "30", "Samarkand"]

// ✅ Amaliy: so'zlarni teskari tartibda
let text = "men o'zbek tilini yaxshi ko'raman";
let reversed = text.split(" ").reverse().join(" ");
console.log(reversed); // "ko'raman yaxshi tilini o'zbek men"

// ✅ Amaliy: string ni reverse qilish
let word = "JavaScript";
let rev = word.split("").reverse().join("");
console.log(rev); // "tpircSavaJ"
```

---

## 🔄 Replace — Almashtirish

### `replace()` / `replaceAll()` ES2021+

```javascript
let str = "men katta shahar shahar yashayman";

// replace — FAQAT BIRINCHI uchrashuvni almashtiradi
console.log(str.replace("shahar", "qishloq"));
// "men katta qishloq shahar yashayman"  — ikkinchisi qoldi!

// ✅ replaceAll — BARCHASINI almashtiradi (ES2021+)
console.log(str.replaceAll("shahar", "qishloq"));
// "men katta qishloq qishloq yashayman"

// ✅ Callback funksiya bilan — dinamik almashtirish
let prices = "olma: 5000, banan: 3000, uzum: 8000";
let result = prices.replace(/\d+/g, (num) => Number(num) * 2 + " so'm");
console.log(result);
// "olma: 10000 so'm, banan: 6000 so'm, uzum: 16000 so'm"

// ✅ Amaliy: URL slug yasash
let title = "Mening Birinchi Blog Postim";
let slug = title.toLowerCase().replaceAll(" ", "-");
console.log(slug); // "mening-birinchi-blog-postim"

// ✅ Amaliy: karta raqamini yashirish
let card = "1234 5678 9012 3456";
let masked = card.slice(0, -4).replaceAll(/\d/g, "*") + card.slice(-4);
console.log(masked); // "**** **** **** 3456"
```

---

## ✂️ Trim — Bo'shliqlarni tozalash

### `trim()` / `trimStart()` / `trimEnd()`

```javascript
let str = "   Salom Dunyo   ";
//         ^^^             ^^^  — chet bo'shliqlar

// trim — ikki tomondan tozalaydi
console.log(str.trim()); // "Salom Dunyo"

// trimStart (trimLeft) — faqat chapdan
console.log(str.trimStart()); // "Salom Dunyo   "

// trimEnd (trimRight) — faqat o'ngdan
console.log(str.trimEnd()); // "   Salom Dunyo"

// ✅ Amaliy: forma inputini tozalash
function validateUsername(input) {
  let clean = input.trim();
  if (clean.length < 3) {
    return "Username kamida 3 ta belgi bo'lishi kerak!";
  }
  return `Xush kelibsiz, ${clean}!`;
}

console.log(validateUsername("   ali   ")); // "Xush kelibsiz, ali!"
console.log(validateUsername("  ab  ")); // "Username kamida 3 ta belgi..."

// ✅ Amaliy: bo'sh qatorlarni filtrlash
let text = "  qator1  \n  \n  qator2  \n   qator3   ";
let lines = text
  .split("\n")
  .map((line) => line.trim())
  .filter((line) => line.length > 0);
console.log(lines); // ["qator1", "qator2", "qator3"]
```

---

## 📐 Pad — To'ldirish

### `padStart(length, char)` / `padEnd(length, char)` — ES8+

```javascript
// padStart — CHAPDAN to'ldiradi
console.log("5".padStart(3, "0")); // "005"
console.log("42".padStart(5, "0")); // "00042"
console.log("hi".padStart(6, "*")); // "****hi"
console.log("hi".padStart(6)); // "    hi"  — default: bo'shliq

// padEnd — O'NGDAN to'ldiradi
console.log("5".padEnd(3, "0")); // "500"
console.log("hi".padEnd(6, ".")); // "hi...."

// ⚠️ String allaqachon yetarli uzunlikda bo'lsa — o'zgarmaydi
console.log("hello".padStart(3, "0")); // "hello"  — 5 > 3, shart yo'q

// ✅ Amaliy: soat formati
let h = "9",
  m = "5",
  s = "3";
console.log(
  `${h.padStart(2, "0")}:${m.padStart(2, "0")}:${s.padStart(2, "0")}`,
);
// "09:05:03"

// ✅ Amaliy: tartib raqami
for (let i = 1; i <= 5; i++) {
  console.log(String(i).padStart(3, "0") + " - mahsulot");
}
// "001 - mahsulot"
// "002 - mahsulot" ...

// ✅ Amaliy: jadval formatlash
let products = [
  ["Olma", 5000],
  ["Banan", 12000],
  ["Uzum", 8000],
];
products.forEach(([name, price]) => {
  console.log(name.padEnd(10, ".") + String(price).padStart(8) + " so'm");
});
// "Olma......    5000 so'm"
// "Banan.....   12000 so'm"
// "Uzum......    8000 so'm"
```

---

## 🔁 Repeat — Takrorlash ES6+

### `repeat(count)`

```javascript
// Stringni N marta takrorlaydi
console.log("ha".repeat(3)); // "hahaha"
console.log("*".repeat(5)); // "*****"
console.log("ab".repeat(0)); // ""  — bo'sh string
console.log("-".repeat(20)); // "--------------------"

// ⚠️ Manfiy son yoki Infinity — RangeError!
// console.log("a".repeat(-1));   // ❌ RangeError
// console.log("a".repeat(Infinity)); // ❌ RangeError

// ✅ Amaliy: separator chiziq
function printSection(title) {
  let line = "=".repeat(40);
  console.log(line);
  console.log(title.padStart((40 + title.length) / 2));
  console.log(line);
}
printSection("NATIJALAR");
// "========================================"
// "                NATIJALAR"
// "========================================"

// ✅ Amaliy: progress bar
function progressBar(percent) {
  let filled = Math.round(percent / 5);
  let empty = 20 - filled;
  return "[" + "█".repeat(filled) + "░".repeat(empty) + "] " + percent + "%";
}
console.log(progressBar(0)); // "[░░░░░░░░░░░░░░░░░░░░] 0%"
console.log(progressBar(60)); // "[████████████░░░░░░░░] 60%"
console.log(progressBar(100)); // "[████████████████████] 100%"

// ✅ Amaliy: indent (ko'chirma) yaratish
function indent(code, level) {
  return "  ".repeat(level) + code;
}
console.log(indent("function foo() {", 0));
console.log(indent("return 42;", 2));
console.log(indent("}", 0));
```

---

## 🎯 Access — Belgiga kirish

### `charAt()` / `charCodeAt()` / `at()` ES2022+

```javascript
let str = "JavaScript";
//         0123456789

// charAt(index) — o'sha indexdagi belgini qaytaradi
console.log(str.charAt(0)); // "J"
console.log(str.charAt(4)); // "S"
console.log(str.charAt(99)); // ""  — bo'sh string (xato yo'q)

// Bracket notation bilan farqi:
console.log(str[0]); // "J"
console.log(str[99]); // undefined  ← farqi shu!

// charCodeAt(index) — belgining Unicode raqamini qaytaradi
console.log(str.charCodeAt(0)); // 74   — "J" ning kodi
console.log("A".charCodeAt(0)); // 65
console.log("a".charCodeAt(0)); // 97
console.log("0".charCodeAt(0)); // 48

// ✅ String.fromCharCode — koddan belgi yasash (teskari)
console.log(String.fromCharCode(74)); // "J"
console.log(String.fromCharCode(65)); // "A"

// ✅ at(index) — ES2022, MANFIY INDEX ishlaydi!
console.log(str.at(0)); // "J"
console.log(str.at(-1)); // "t"  — oxirgi belgi ✅
console.log(str.at(-2)); // "p"  — oxiridan ikkinchi ✅
console.log(str.at(99)); // undefined

// ⚖️ Taqqoslash jadvali:
//  Method         | Noto'g'ri index | Manfiy index
//  str[i]         | undefined       | undefined
//  charAt(i)      | ""              | "" (0 deb oladi)
//  at(i)          | undefined       | ✅ oxiridan hisoblaydi

// ✅ Amaliy: shifrlashtirish (ROT13)
function rot13(str) {
  return str
    .split("")
    .map((char) => {
      let code = char.charCodeAt(0);
      if (code >= 65 && code <= 90)
        // A-Z
        return String.fromCharCode(((code - 65 + 13) % 26) + 65);
      if (code >= 97 && code <= 122)
        // a-z
        return String.fromCharCode(((code - 97 + 13) % 26) + 97);
      return char;
    })
    .join("");
}
console.log(rot13("Hello")); // "Uryyb"
console.log(rot13("Uryyb")); // "Hello"

// ✅ Amaliy: oxirgi belgiga eng qulay usul
let filename = "photo.jpg";
console.log(filename.at(-1)); // "g"
console.log(filename.at(-3)); // "j"
// Oldin shunday yozilardi:
console.log(filename[filename.length - 1]); // "g" — uzoq yozuv
```

---

<br>
<br>
<br>
<br>
<br>

# 🔤 Template Literals

---

## `${}` Interpolation — Qiymat kiritish

```javascript
// Oddiy o'zgaruvchi
let name = "Ali";
let age = 25;
console.log(`Ism: ${name}, Yosh: ${age}`); // "Ism: Ali, Yosh: 25"

// ✅ Har qanday expression yozsa bo'ladi
let a = 10,
  b = 20;
console.log(`Yig'indi: ${a + b}`); // "Yig'indi: 30"
console.log(`Katta son: ${a > b ? a : b}`); // "Katta son: 20"
console.log(`Kvadrat: ${2 ** 8}`); // "Kvadrat: 256"
console.log(`Hozir: ${new Date().getFullYear()}-yil`); // "Hozir: 2026-yil"

// ✅ Funksiya chaqirish
function greet(name) {
  return `Salom, ${name}!`;
}
console.log(`Natija: ${greet("Vali")}`); // "Natija: Salom, Vali!"

// ✅ Massiv va obyekt
let fruits = ["olma", "banan", "uzum"];
let user = { name: "Ali", role: "admin" };
console.log(`Mevalar: ${fruits.join(", ")}`); // "Mevalar: olma, banan, uzum"
console.log(`${user.name} (${user.role})`); // "Ali (admin)"

// ✅ Ichma-ich template literal
let items = ["HTML", "CSS", "JS"];
console.log(`Texnologiyalar: ${items.map((i) => `[${i}]`).join(" ")}`);
// "Texnologiyalar: [HTML] [CSS] [JS]"

// ✅ Shartli ko'rsatish
let score = 85;
console.log(`Baho: ${score >= 90 ? "A" : score >= 80 ? "B" : "C"}`);
// "Baho: B"
```

---

## 📄 Multi-line Strings — Ko'p qatorli

```javascript
// ❌ Eski usul — \n yozish kerak, o'qish qiyin
let old = "1-qator\n2-qator\n3-qator";

// ✅ Template literal — xuddi shunday yozasan, xuddi shunday chiqadi
let modern = `
1-qator
2-qator
3-qator
`;
console.log(modern);
// (bo'sh qator)
// 1-qator
// 2-qator
// 3-qator
// (bo'sh qator)

// ⚠️ Birinchi \n ni oldini olish
let clean = `1-qator
2-qator
3-qator`;
console.log(clean);
// 1-qator
// 2-qator
// 3-qator

// ✅ Amaliy: HTML yasash
let product = { name: "Noutbuk", price: 12000000, brand: "Dell" };

let card = `
<div class="card">
  <h2>${product.name}</h2>
  <p>Brend: ${product.brand}</p>
  <p>Narx: ${product.price.toLocaleString()} so'm</p>
</div>`;
console.log(card);
/*
<div class="card">
  <h2>Noutbuk</h2>
  <p>Brend: Dell</p>
  <p>Narx: 12,000,000 so'm</p>
</div>
*/

// ✅ Amaliy: SQL query
let table = "users";
let status = "active";
let limit = 10;

let query = `
  SELECT id, name, email
  FROM ${table}
  WHERE status = '${status}'
  ORDER BY created_at DESC
  LIMIT ${limit}
`;
console.log(query);

// ✅ Amaliy: Email shablon
function emailTemplate(user, resetLink) {
  return `
Hurmatli ${user.name},

Parolingizni tiklash uchun quyidagi havolani bosing:
${resetLink}

Havola ${user.expireHours} soat davomida amal qiladi.

Hurmat bilan,
Jamoa
    `.trim();
}

console.log(
  emailTemplate(
    { name: "Ali", expireHours: 24 },
    "https://example.com/reset/abc123",
  ),
);
```

---

## 🏷️ Tagged Templates — Maxsus qayta ishlash

Tagged template — template literalni **funksiya orqali qayta ishlash** imkoniyati.

```javascript
// Sintaksis: tagFn`string ${val} string`
//            ↑ bu funksiya chaqiruvi — qavslar yo'q!

// Funksiya qanday argument oladi:
function tag(strings, ...values) {
  console.log(strings); // string qismlari — ARRAY
  console.log(values); // ${} qiymatlari  — ARRAY
}

tag`Salom ${name}, yosh: ${age}!`;
// strings → ["Salom ", ", yosh: ", "!"]
// values  → ["Ali", 25]

// ⚠️ strings.length = values.length + 1 — DOIM!
```

```javascript
// ✅ Misol 1: Oddiy qayta yig'ish (xuddi oddiy template kabi)
function normal(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    result += str;
    if (i < values.length) result += values[i];
  });
  return result;
}

let name = "Ali",
  age = 25;
console.log(normal`Ism: ${name}, Yosh: ${age}`);
// "Ism: Ali, Yosh: 25"
```

```javascript
// ✅ Misol 2: XSS himoya — HTML escape
function safeHtml(strings, ...values) {
  const escape = (str) =>
    String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  return strings.reduce((result, str, i) => {
    return result + str + (i < values.length ? escape(values[i]) : "");
  }, "");
}

// Foydalanuvchi zararli kod kiritgan:
let userInput = '<script>alert("hacked!")</script>';
let username = "Ali";

// ❌ Oddiy template — xavfli!
let unsafe = `<p>Salom, ${userInput}</p>`;
console.log(unsafe);
// <p>Salom, <script>alert("hacked!")</script></p>  ← XSS!

// ✅ Tagged template — xavfsiz!
let safe = safeHtml`<p>Salom, ${userInput}</p>`;
console.log(safe);
// <p>Salom, &lt;script&gt;alert(&quot;hacked!&quot;)&lt;/script&gt;</p> ✅
```

```javascript
// ✅ Misol 3: i18n (tarjima tizimi)
const translations = {
  uz: { greeting: "Salom", bye: "Xayr" },
  en: { greeting: "Hello", bye: "Goodbye" },
  ru: { greeting: "Привет", bye: "Пока" },
};

function i18n(lang) {
  return function (strings, ...values) {
    return strings.reduce((result, str, i) => {
      let val = values[i] !== undefined ? values[i] : "";
      // kalit so'zni tarjima qilish
      let translated = translations[lang]?.[val] || val;
      return result + str + translated;
    }, "");
  };
}

let uz = i18n("uz");
let en = i18n("en");

console.log(uz`So'z: ${"greeting"}!`); // "So'z: Salom!"
console.log(en`So'z: ${"greeting"}!`); // "So'z: Hello!"
console.log(uz`Oxirgi: ${"bye"}`); // "Oxirgi: Xayr"
```

```javascript
// ✅ Misol 4: highlight — qiymatlarni ajratib ko'rsatish (debug uchun)
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    let val =
      values[i] !== undefined
        ? `\x1b[33m${values[i]}\x1b[0m` // sariq rang (terminal)
        : "";
    return result + str + val;
  }, "");
}

let item = "Noutbuk";
let price = 12000000;
console.log(highlight`Mahsulot: ${item}, narxi: ${price} so'm`);
// "Mahsulot: [sariq]Noutbuk[reset], narxi: [sariq]12000000[reset] so'm"
```

---

# 📝 Regular Expressions with Strings

## Regex asoslari

```javascript
// Regex yaratish — 2 usul:
let re1 = /pattern/flags;          // literal (tezroq, qulay)
let re2 = new RegExp("pattern", "flags");  // konstruktor (dinamik)

// Flags (bayroqlar):
// g  — global (hammani topadi, faqat birinchisi emas)
// i  — case-insensitive (katta-kichik farq qilmaydi)
// m  — multiline (^ va $ har qator uchun ishlaydi)
// s  — dotAll (. yangi qatorni ham qamrab oladi)
```

---

## String metodlari + Regex

### `match()` — Topish

```javascript
let str = "JavaScript 2024, Python 2023, Java 2022";

// Birinchi mos kelganini topadi (g flagsiz)
let first = str.match(/\d+/);
console.log(first[0]); // "2024"
console.log(first.index); // 11  — qayerda

// ✅ g flag — HAMMASINI topadi, array qaytaradi
let allNums = str.match(/\d+/g);
console.log(allNums); // ["2024", "2023", "2022"]

// ✅ i flag — katta-kichik farq qilmaydi
let text = "Java JAVA java JaVa";
console.log(text.match(/java/gi)); // ["Java", "JAVA", "java", "JaVa"]

// ✅ Guruhlar bilan (capturing groups)
let date = "Bugun: 2026-05-29";
let result = date.match(/(\d{4})-(\d{2})-(\d{2})/);
console.log(result[0]); // "2026-05-29"  — to'liq mos
console.log(result[1]); // "2026"         — 1-guruh
console.log(result[2]); // "05"           — 2-guruh
console.log(result[3]); // "29"           — 3-guruh

// Topilmasa — null qaytaradi
console.log("hello".match(/\d+/)); // null
console.log("hello".match(/\d+/)?.[0] ?? "topilmadi"); // "topilmadi"
```

---

### `matchAll()` — Hammasini guruh bilan topish ES2020+

```javascript
let str = "cat:meow, dog:woof, bird:tweet";

// matchAll — iterator qaytaradi, g flag MAJBURIY
let matches = [...str.matchAll(/(\w+):(\w+)/g)];

matches.forEach((m) => {
  console.log(`Hayvon: ${m[1]}, Ovoz: ${m[2]}`);
});
// "Hayvon: cat,  Ovoz: meow"
// "Hayvon: dog,  Ovoz: woof"
// "Hayvon: bird, Ovoz: tweet"

// ✅ Amaliy: barcha URL larni olish
let html = `
  <a href="https://google.com">Google</a>
  <a href="https://github.com">GitHub</a>
`;
let urls = [...html.matchAll(/href="([^"]+)"/g)];
urls.forEach((m) => console.log(m[1]));
// "https://google.com"
// "https://github.com"
```

---

### `search()` — Index qidirish

```javascript
// indexOf ga o'xshash, lekin regex qabul qiladi
let str = "Narx: 15000 so'm";

console.log(str.search(/\d+/)); // 6  — raqam boshlangan index
console.log(str.search(/[A-Z]/)); // 0  — katta harf
console.log(str.search(/xyz/)); // -1 — topilmadi

// ✅ indexOf vs search farqi:
// indexOf — aniq string qidiradi (tezroq)
// search  — regex qidiradi (moslashuvchan)
```

---

### `replace()` + Regex

```javascript
// ✅ Regex bilan replace — kuchli kombinatsiya
let str = "Telefon: +998-90-123-45-67";

// Barcha tirechalarni olib tashlash
console.log(str.replace(/-/g, ""));
// "Telefon: +998901234567"

// ✅ Capture group larni ishlatish ($1, $2...)
let date = "2026-05-29";
let reformatted = date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
console.log(reformatted); // "29/05/2026"

// ✅ Named groups — ($<name>)
let swapped = "Ali Karimov".replace(
  /(?<first>\w+)\s(?<last>\w+)/,
  "$<last> $<first>",
);
console.log(swapped); // "Karimov Ali"

// ✅ Callback bilan — har bir mos uchun funksiya
let text = "narx: 5000, soliq: 500, jami: 5500";
let result = text.replace(/\d+/g, (n) => (Number(n) * 1.1).toFixed(0));
console.log(result);
// "narx: 5500, soliq: 550, jami: 6050"

// ✅ Amaliy: camelCase → snake_case
function toSnakeCase(str) {
  return str
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .replace(/^_/, "");
}
console.log(toSnakeCase("getUserName")); // "get_user_name"
console.log(toSnakeCase("myVariableName")); // "my_variable_name"

// ✅ Amaliy: telefon raqamini formatlash
function formatPhone(phone) {
  let digits = phone.replace(/\D/g, ""); // faqat raqamlar
  return digits.replace(
    /(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/,
    "+$1 $2 $3-$4-$5",
  );
}
console.log(formatPhone("998901234567")); // "+998 90 123-45-67"
console.log(formatPhone("+99890-123-4567")); // "+998 90 123-45-67"
```

---

### `split()` + Regex

```javascript
// ✅ Regex bilan split — moslashuvchan ajratish
let str = "bir,ikki;uch  to'rt\tbesh";

// Vergul, nuqtali vergul, bo'shliq, tab — barchasi separator
let words = str.split(/[,;\s]+/);
console.log(words); // ["bir", "ikki", "uch", "to'rt", "besh"]

// ✅ Ko'p bo'shliqlarni birga ajratish
let sentence = "men    juda    ko'p    bo'shliq";
console.log(sentence.split(/\s+/));
// ["men", "juda", "ko'p", "bo'shliq"]

// ✅ Capture group bilan — separatorni saqlash
let expr = "10+20-30*40";
let parts = expr.split(/([+\-*\/])/);
console.log(parts); // ["10", "+", "20", "-", "30", "*", "40"]
```

---

## 🔑 Eng ko'p ishlatiladigan Regex patternlar

```javascript
// ✅ Email tekshirish
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
console.log(isValidEmail("ali@gmail.com")); // true
console.log(isValidEmail("ali@")); // false
console.log(isValidEmail("notanemail")); // false

// ✅ Parol kuchliligi
function checkPassword(pass) {
  let hasUpper = /[A-Z]/.test(pass);
  let hasLower = /[a-z]/.test(pass);
  let hasDigit = /\d/.test(pass);
  let hasLength = pass.length >= 8;
  return hasUpper && hasLower && hasDigit && hasLength;
}
console.log(checkPassword("Secret123")); // true
console.log(checkPassword("weak")); // false

// ✅ Faqat raqammi?
console.log(/^\d+$/.test("12345")); // true
console.log(/^\d+$/.test("123a5")); // false

// ✅ Bo'sh stringmi (faqat probel)?
console.log(/^\s*$/.test("   ")); // true
console.log(/^\s*$/.test("  a  ")); // false

// ✅ Hashtag larni olish
let post = "Bugun #javascript va #nodejs o'rgandim #webdev";
let tags = post.match(/#\w+/g);
console.log(tags); // ["#javascript", "#nodejs", "#webdev"]

// ✅ Barcha HTML teglarini tozalash
let html = "<h1>Salom</h1><p>Bu <b>matn</b></p>";
let plain = html.replace(/<[^>]*>/g, "");
console.log(plain); // "SalomBu matn"

// ✅ Takrorlangan so'zlarni topish
let text = "bu bu gap gap takror takror emas";
let dups = text.match(/\b(\w+)\s+\1\b/g);
console.log(dups); // ["bu bu", "gap gap", "takror takror"]
```
