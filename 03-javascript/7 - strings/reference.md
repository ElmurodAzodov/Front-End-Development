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

> ⚡ **Xulosa:**
>
> - `''` `""` — klassik string yaratish
> - `` ` ` `` — template literal, interpolation + multi-line uchun
> - `.length` — belgilar soni (property, qavslar yo'q)
> - **Immutability** — string o'zgarmas, methodlar har doim yangi string qaytaradi

---

<br>
<br>
<br>
<br>
<br>

