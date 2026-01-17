# 🎨 Module 1: CSS Fundamentals (1 dars)

## 1. CSS nima? (ENG BOSHI)

### Nazariya:

**CSS (Cascading Style Sheets)** — HTML elementlarining:

- rangini
- o‘lchamini
- joylashuvini
- dizaynini

boshqarish uchun ishlatiladi.

📌 Qoidani yodda saqlang:

- HTML → **nima bor**
- CSS → **qanday ko‘rinadi**

---

## 2. CSS’ni HTML’ga ulash usullari

Bu yerda **3 xil usul** bor — barchasini bilish shart.

---

### 2.1 Inline CSS (faqat tanishuv)

```html
<p style="color: red; font-size: 18px;">Salom CSS</p>
```

❌ Kamchiliklari:

- Kod chalkashadi
- Qayta ishlatib bo‘lmaydi
- Professional emas

📌 Xulosa:

> Inline CSS — **o‘rganish uchun**, loyiha uchun ishlatilmaydi

---

### 2.2 Internal CSS

```html
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>
```

✔ Kichik sahifa uchun
❌ Katta loyiha uchun yaramaydi

---

### 2.3 External CSS (ASOSIY USUL)

```html
<link rel="stylesheet" href="style.css" />
```

```css
/* style.css */
p {
  color: green;
}
```

✅ ENG MUHIM
✅ Real loyihalarda ishlatiladi
✅ Modul davomida **doim shu**

---

## 3. CSS sintaksisi (qoidasi)

```css
selector {
  property: value;
}
```

### Misol:

```css
h1 {
  color: purple;
  font-size: 32px;
}
```

- **Selector** — qaysi element
- **Property** — nimani o‘zgartiramiz
- **Value** — qanday qiymat

---

## 4. Eng birinchi selectorlar

### 4.1 Element selector

```css
p {
  color: black;
}
```

➡️ barcha `<p>` lar

---

### 4.2 Class selector (`.`) — ENG ASOSIY

```html
<p class="text">Matn</p>
```

```css
.text {
  color: blue;
}
```

📌 90% holatda **class ishlatiladi**

---

### 4.3 ID selector (`#`)

```html
<h1 id="title">Sarlavha</h1>
```

```css
#title {
  font-size: 30px;
}
```

⚠️ bitta sahifada **1 marta**

---

## 5. Ranglar bilan ishlash

```css
color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);
```

### Background:

```css
body {
  background-color: #f4f4f4;
}
```

---

## 6. O‘lchamlar (units)

```css
p {
  font-size: 16px;
}

.container {
  width: 80%;
}
```

| Birlik | Izoh         |
| ------ | ------------ |
| px     | aniq         |
| %      | nisbiy       |
| rem    | professional |
| vw/vh  | responsive   |

---

## 7. Oddiy amaliy misol

### HTML:

```html
<h1 class="title">CSS Boshlanishi</h1>
<p class="text">Bu mening birinchi CSS darsim</p>
```

### CSS:

```css
.title {
  color: darkblue;
  text-align: center;
}

.text {
  font-size: 18px;
  color: #333;
}
```

---

# 🎨 Module 2: Selectors & Styling

**(1 dars – CSS Core)**

---

## 1. CSS Selectors tushunchasi

### Nazariya:

**Selector** — CSS qaysi HTML element(lar)ga ta’sir qilishini aniqlaydi.

```css
selector {
  property: value;
}
```

---

## 2. Basic Selectors (asosiy tanlovchilar)

---

### 2.1 Element selector

```css
p {
  color: black;
}
```

➡️ Barcha `<p>` elementlariga ta’sir qiladi

📌 Kam ishlatiladi (juda umumiy)

---

### 2.2 Class selector (`.`) — ENG MUHIM

```html
<p class="text">Matn</p>
```

```css
.text {
  color: blue;
}
```

✅ Qayta ishlatiladi
✅ Professional
✅ 90% holatda ishlatiladi

---

### 2.3 ID selector (`#`)

```html
<h1 id="main-title">Sarlavha</h1>
```

```css
#main-title {
  font-size: 32px;
}
```

⚠️ Sahifada faqat **1 marta**

---

### 2.4 Group selector

```css
h1,
h2,
h3 {
  color: darkred;
}
```

➡️ Bir nechta elementni bir vaqtda bezash

---

### 2.5 Universal selector

```css
* {
  margin: 0;
  padding: 0;
}
```

📌 Reset CSS uchun ishlatiladi

---

## 3. Attribute selectors

### Nazariya:

Elementni **atributiga qarab** tanlash

```css
input[type="text"] {
  border: 2px solid blue;
}
```

### Qo‘shimcha misollar:

```css
a[target="_blank"] {
  color: red;
}

img[alt] {
  border: 1px solid gray;
}
```

---

## 4. Combinators (aloqador selectorlar)

---

### 4.1 Descendant selector (bo‘g‘inli)

```css
div p {
  color: green;
}
```

➡️ `div` ichidagi **barcha** `p`

---

### 4.2 Child selector (`>`)

```css
ul > li {
  list-style: square;
}
```

➡️ Faqat **bevosita bolalar**

---

### 4.3 Adjacent sibling (`+`)

```css
h2 + p {
  color: orange;
}
```

➡️ `h2` dan keyingi **bitta** `p`

---

### 4.4 General sibling (`~`)

```css
h2 ~ p {
  color: gray;
}
```

➡️ `h2` dan keyingi **barcha** `p`

---

## 5. Pseudo-classes (holatlar)

---

### 5.1 Link holatlari (LVHA)

```css
a:link {
  color: blue;
}
a:visited {
  color: purple;
}
a:hover {
  color: red;
}
a:active {
  color: black;
}
```

⚠️ Tartibni saqla!

---

### 5.2 Form holatlari

```css
input:focus {
  border-color: green;
}

input:checked {
  outline: 2px solid blue;
}

input:disabled {
  background-color: #ccc;
}
```

---

### 5.3 Strukturaviy pseudo-classes

```css
li:first-child {
  font-weight: bold;
}

li:last-child {
  color: red;
}

li:nth-child(odd) {
  background: #f2f2f2;
}

li:nth-child(2) {
  color: blue;
}
```

---

## 6. Pseudo-elements

### Nazariya:

Elementning **bir qismini** bezaydi

---

### Eng ko‘p ishlatiladiganlari:

```css
p::first-letter {
  font-size: 32px;
}

p::first-line {
  color: gray;
}
```

---

### `::before` va `::after`

```css
h2::after {
  content: " ★";
  color: gold;
}
```

📌 `content` majburiy

---

## 7. CSS Specificity (JUDA MUHIM!)

### Kuch tartibi:

1. `!important` ❌ (ishlatma)
2. Inline CSS
3. ID
4. Class / attribute / pseudo-class
5. Element

### Misol:

```css
p {
  color: black;
}
.text {
  color: blue;
}
#main {
  color: red;
}
```

```html
<p id="main" class="text">Matn</p>
```

➡️ Natija: **qizil**

---

## 8. Styling – asosiy dizayn xususiyatlari

---

### 8.1 Background

```css
.box {
  background-color: #eee;
  background-image: url(bg.jpg);
  background-size: cover;
  background-position: center;
}
```

---

### 8.2 Border

```css
.card {
  border: 2px solid #333;
  border-radius: 10px;
}
```

---

### 8.3 Shadow

```css
.card {
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

h1 {
  text-shadow: 2px 2px 4px gray;
}
```

---

## 9. Amaliy mini-topshiriq (DARSDA)

### Vazifa:

1. `.card` yarating
2. Ichiga:
   - `h2`
   - `p`
   - `a`

3. `hover` va `::after` ishlating

### Namuna CSS:

```css
.card a:hover {
  color: red;
}

.card h2::after {
  content: " ✔";
  color: green;
}
```

---
