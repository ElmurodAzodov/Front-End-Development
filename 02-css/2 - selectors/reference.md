# **Selectors**

<br>
<br>

# 🔤 CSS Selectors — Basic Selectors

---

## 🏷 Element Selector (Tag Selector)

HTML element nomi orqali tanlanadi.

### 📌 Sintaksis:

```css
element {
  property: value;
}
```

### ✅ Misollar:

```css
h1 {
  color: blue;
}

p {
  font-size: 16px;
}
```

### 🔍 Qanday ishlaydi:

- Sahifadagi **barcha `<h1>`** lar tanlanadi
- Sahifadagi **barcha `<p>`** lar tanlanadi
- Eng oddiy va keng qo‘llaniladigan selector

### ⚠️ Xususiyatlar:

- Specificity (ustuvorlik) past
- Global ta’sir qiladi

---

## 🎯 Class Selector

HTML elementga berilgan `class` atributi orqali tanlanadi.

### 📌 Sintaksis:

```css
.classname {
  property: value;
}
```

### ✅ Misollar:

```css
.button {
  background: green;
  color: white;
}

.text-red {
  color: red;
}
```

```html
<button class="button">Click</button>
<p class="text-red">Text</p>
```

### 🔍 Qanday ishlaydi:

- Bir xil class bir nechta elementda ishlatilishi mumkin
- Eng ko‘p ishlatiladigan selector

### ⚠️ Xususiyatlar:

- Specificity: o‘rtacha
- Reusable (qayta ishlatish mumkin)

---

## 🆔 ID Selector

HTML elementning `id` atributi orqali tanlanadi.

### 📌 Sintaksis:

```css
#idname {
  property: value;
}
```

### ✅ Misollar:

```css
#header {
  background: black;
  color: white;
}
```

```html
<div id="header">Header</div>
```

### 🔍 Qanday ishlaydi:

- Har bir `id` sahifada **unikal bo‘lishi kerak**
- Faqat bitta elementga ta’sir qiladi

### ⚠️ Xususiyatlar:

- Specificity juda yuqori
- Ko‘p ishlatish tavsiya etilmaydi (maintain qiyinlashadi)

---

## 🌐 Universal Selector

Barcha elementlarni tanlaydi.

### 📌 Sintaksis:

```css
* {
  property: value;
}
```

### ✅ Misollar:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### 🔍 Qanday ishlaydi:

- Sahifadagi **har bir elementga** ta’sir qiladi

### ⚠️ Xususiyatlar:

- Specificity: eng past
- Ko‘pincha reset / normalize uchun ishlatiladi

---

## 🧠 Selector Specificity (Ustuvorlik)

| Selector       | Priority      |
| -------------- | ------------- |
| Inline style   | 🔥 Eng yuqori |
| ID (#id)       | 🟥            |
| Class (.class) | 🟧            |
| Element (h1)   | 🟨            |
| Universal (\*) | ⬜ Eng past   |

### 📌 Misol:

```css
p {
  color: blue;
}
.text {
  color: green;
}
#title {
  color: red;
}
```

```html
<p id="title" class="text">Hello</p>
```

👉 Natija: **red** (ID ustun)

---

## 🧩 Birlashtirib ishlatish

```css
p.text {
  color: purple;
}
```

```html
<p class="text">Works</p>
<p>Doesn't work</p>
```

👉 Faqat `p` + `.text` bo‘lgan element ishlaydi

---

<br>
<br>
<br>
<br>
<br>

# 🔗 CSS Combinators

Combinatorlar — elementlar orasidagi **munosabat (relationship)** orqali tanlash imkonini beradi.

---

## 🌳 Descendant Combinator (space)

Berilgan element ichidagi **barcha avlod (nested)** elementlarni tanlaydi.

### 📌 Sintaksis:

```css
parent descendant {
  property: value;
}
```

### ✅ Misol:

```css
div p {
  color: blue;
}
```

```html
<div>
  <p>Bu ishlaydi</p>
  <section>
    <p>Bu ham ishlaydi</p>
  </section>
</div>

<p>Bu ishlamaydi</p>
```

### 🔍 Qanday ishlaydi:

- `div` ichidagi **har qanday chuqurlikdagi** `p` lar tanlanadi
- To‘g‘ridan-to‘g‘ri child bo‘lishi shart emas

### ⚠️ Xususiyat:

- Juda keng qamrovli (barcha nested elementlar)
- Ba’zan ortiqcha ta’sir berishi mumkin

---

## 👶 Child Combinator (>)

Faqat **to‘g‘ridan-to‘g‘ri child (1-level)** elementlarni tanlaydi.

### 📌 Sintaksis:

```css
parent > child {
  property: value;
}
```

### ✅ Misol:

```css
div > p {
  color: red;
}
```

```html
<div>
  <p>Bu ishlaydi</p>

  <section>
    <p>Bu ishlamaydi</p>
  </section>
</div>
```

### 🔍 Qanday ishlaydi:

- Faqat `div` ning **bevosita farzandlari**
- Nested (ichkaridagi ichkarisi) elementlarga ta’sir qilmaydi

### ⚠️ Xususiyat:

- Descendant’dan aniqroq va xavfsizroq

---

## ➕ Adjacent Sibling Combinator (+)

Berilgan elementdan keyin **darhol keladigan bitta qo‘shni element**ni tanlaydi.

### 📌 Sintaksis:

```css
element1 + element2 {
  property: value;
}
```

### ✅ Misol:

```css
h1 + p {
  color: green;
}
```

```html
<h1>Title</h1>
<p>Bu ishlaydi</p>

<p>Bu ishlamaydi</p>
```

### 🔍 Qanday ishlaydi:

- `h1` dan keyingi **faqat 1 ta birinchi `p`**
- Agar boshqa element bo‘lsa, ishlamaydi

### ⚠️ Xususiyat:

- Juda aniq va tor tanlash

---

## 🔗 General Sibling Combinator (~)

Berilgan elementdan keyin keladigan **barcha sibling (aka-uka)** elementlarni tanlaydi.

### 📌 Sintaksis:

```css
element1 ~ element2 {
  property: value;
}
```

### ✅ Misol:

```css
h1 ~ p {
  color: orange;
}
```

```html
<h1>Title</h1>

<p>Bu ishlaydi</p>
<p>Bu ham ishlaydi</p>

<div>Bu yo‘q</div>
<p>Bu ham ishlaydi</p>
```

### 🔍 Qanday ishlaydi:

- `h1` dan keyingi **barcha `p` lar**
- Faqat bir xil parent ichida ishlaydi

### ⚠️ Xususiyat:

- Adjacent (`+`) ga qaraganda kengroq

---

## 🧠 Farqlarni qisqacha solishtirish

| Combinator       | Belgisi     | Qamrov                    |
| ---------------- | ----------- | ------------------------- |
| Descendant       | ` ` (space) | Barcha ichki elementlar   |
| Child            | `>`         | Faqat 1-level child       |
| Adjacent Sibling | `+`         | Keyingi bitta element     |
| General Sibling  | `~`         | Keyingi barcha siblinglar |

---

## 🧩 Real kombinatsiya misoli

```css
div > p + span {
  color: purple;
}
```

```html
<div>
  <p>Paragraph</p>
  <span>Bu ishlaydi</span>
</div>
```

### 🔍 Tahlil:

1. `div > p` → faqat child `p`
2. `p + span` → `p` dan keyingi `span`

---

<br>
<br>
<br>
<br>
<br>

# 🎭 CSS Attribute Selectors

Attribute selectorlar — HTML elementlarning **atributlari (attributes)** orqali tanlash imkonini beradi.

---

## 📌 [attr] — Attribute mavjud bo‘lishi

Elementda shu attribute bor-yo‘qligini tekshiradi.

### ✅ Sintaksis:

```css id="a1qk9m"
[attr] {
  property: value;
}
```

### 🔍 Misol:

```css id="x9k2ld"
[disabled] {
  opacity: 0.5;
}
```

```html id="q2m8pn"
<button disabled>Click</button> <button>Click</button>
```

### 📌 Natija:

- Faqat `disabled` attribute bor button ishlaydi

---

## 🎯 [attr="value"] — Aniq moslik

Attribute qiymati **to‘liq teng** bo‘lishi kerak.

### ✅ Sintaksis:

```css id="c8v0re"
[attr="value"] {
  property: value;
}
```

### 🔍 Misol:

```css id="p4m1sa"
input[type="text"] {
  border: 2px solid blue;
}
```

```html id="t7x9kd"
<input type="text" /> <input type="password" />
```

### 📌 Natija:

- Faqat `type="text"` ishlaydi

---

## 🚀 [attr^="value"] — Boshlanishi bo‘yicha

Attribute qiymati **shu qiymat bilan boshlansa** tanlanadi.

### ✅ Sintaksis:

```css id="v1k8ld"
[attr^="value"] {
  property: value;
}
```

### 🔍 Misol:

```css id="r8n2qp"
a[href^="https"] {
  color: green;
}
```

```html id="m3q8ty"
<a href="https://google.com">Google</a> <a href="http://example.com">Example</a>
```

### 📌 Natija:

- Faqat `https` bilan boshlangan linklar ishlaydi

---

## 🧲 [attr$="value"] — Tugashi bo‘yicha

Attribute qiymati **shu qiymat bilan tugasa** tanlanadi.

### ✅ Sintaksis:

```css id="l9p3wv"
[attr$="value"] {
  property: value;
}
```

### 🔍 Misol:

```css id="n2x8qp"
a[href$=".pdf"] {
  color: red;
}
```

```html id="k8v1mn"
<a href="file.pdf">PDF</a> <a href="image.png">Image</a>
```

### 📌 Natija:

- Faqat `.pdf` bilan tugagan fayllar

---

## 🔎 [attr*="value"] — Ichida bor bo‘lishi

Attribute qiymati ichida **har qanday joyda shu text bo‘lsa** tanlanadi.

### ✅ Sintaksis:

```css id="b7m0qp"
[attr*="value"] {
  property: value;
}
```

### 🔍 Misol:

```css id="d9k2lt"
a[href*="google"] {
  color: blue;
}
```

```html id="h3p8vn"
<a href="https://google.com">Google</a>
<a href="https://mygooglepage.com">My Page</a>
<a href="https://example.com">Example</a>
```

### 📌 Natija:

- `google` so‘zi bor barcha linklar ishlaydi

---

## 🧠 Xulosa (Farqlar)

| Selector          | Ma’nosi            | Misol              |
| ----------------- | ------------------ | ------------------ |
| `[attr]`          | attribute bor      | `[disabled]`       |
| `[attr="value"]`  | to‘liq teng        | `[type="text"]`    |
| `[attr^="value"]` | boshidan boshlansa | `[href^="https"]`  |
| `[attr$="value"]` | oxiridan tugasa    | `[href$=".pdf"]`   |
| `[attr*="value"]` | ichida bo‘lsa      | `[href*="google"]` |

---

## 🧩 Real amaliy misol

```css id="q1m9xz"
input[name^="user"] {
  border: 2px solid green;
}

input[type="email"] {
  background: lightyellow;
}

a[href$=".pdf"] {
  color: red;
}
```

---

<br>
<br>
<br>
<br>
<br>

# 🎨 CSS Pseudo-classes

Pseudo-classlar — elementning **holati (state)** yoki **struktura ichidagi o‘rni**ga qarab stil berish uchun ishlatiladi.

---

# 🖱 Interactivity States

## 🟢 :hover — ustiga sichqoncha kelganda

```css id="h1x9qv"
button:hover {
  background: green;
  color: white;
}
```

```html id="k2m8pd"
<button>Hover me</button>
```

### 🔍 Qanday ishlaydi:

- Mouse element ustiga borganda aktiv bo‘ladi
- Desktopda juda ko‘p ishlatiladi

---

## 🔴 :active — bosilgan paytda

```css id="a8v2lm"
button:active {
  transform: scale(0.95);
}
```

### 🔍 Qanday ishlaydi:

- Mouse bosib turgan paytda ishlaydi
- Click momentni ko‘rsatadi

---

## 🎯 :focus — input yoki element focus olganda

```css id="f3n9kp"
input:focus {
  border: 2px solid blue;
  outline: none;
}
```

### 🔍 Qanday ishlaydi:

- Input ichiga cursor kirganda
- Tab bilan navigatsiyada ham ishlaydi

---

## 👁 :focus-visible — faqat keyboard focus

```css id="v9m2qs"
button:focus-visible {
  outline: 2px solid orange;
}
```

### 🔍 Qanday ishlaydi:

- Faqat klaviatura (TAB) orqali fokus bo‘lsa ishlaydi
- Mouse clickda ko‘rsatmaydi

---

# 🧱 Structural Pseudo-classes

## 🥇 :first-child

```css id="p1x8kd"
li:first-child {
  color: red;
}
```

```html id="q8m2tv"
<ul>
  <li>1</li>
  <!-- ishlaydi -->
  <li>2</li>
</ul>
```

---

## 🥉 :last-child

```css id="l9v2ps"
li:last-child {
  color: blue;
}
```

---

## 🔢 :nth-child(n)

```css id="n2k8vq"
li:nth-child(2) {
  color: green;
}
```

### 📌 Qoidalar:

- `2` → ikkinchi element
- `odd` → toq
- `even` → juft
- `3n` → har 3-element

---

## 🎯 :nth-of-type()

```css id="t8v1mx"
p:nth-of-type(2) {
  color: purple;
}
```

### 🔍 Farqi:

- `nth-child` → umumiy pozitsiya
- `nth-of-type` → faqat o‘sha tur (tag) ichida

---

# 🚫 Logical / Filtering Pseudo-classes

## ❌ :not()

```css id="x7m2qp"
button:not(.primary) {
  background: gray;
}
```

### 🔍 Qanday ishlaydi:

- Berilgan shartga mos kelmaydigan elementlar

---

## 🧠 :is()

```css id="s8v1kd"
:is(h1, h2, h3) {
  color: red;
}
```

### 🔍 Qanday ishlaydi:

- Bir nechta selectorni qisqartirish

---

## 🎯 :where()

```css id="w3m9qp"
:where(h1, h2, h3) {
  margin: 0;
}
```

### 🔍 Farqi:

- `:is()` → specificity bor
- `:where()` → specificity = 0 (eng past)

---

## 🧩 :has() — parent selector (juda kuchli)

```css id="h9v2kl"
div:has(img) {
  border: 2px solid green;
}
```

### 🔍 Qanday ishlaydi:

- Ichida `img` bo‘lgan `div` ni tanlaydi
- CSSda “parent selection” imkonini beradi

---

# 🔗 Link States

## 🔵 :link

```css id="l2x8pq"
a:link {
  color: blue;
}
```

- hali bosilmagan link

---

## 🟣 :visited

```css id="v8m2qn"
a:visited {
  color: purple;
}
```

- oldin ochilgan link

---

# 📋 Form States

## ☑️ :checked

```css id="c1v9mx"
input:checked {
  accent-color: green;
}
```

- checkbox/radio belgilangan holat

---

## 🚫 :disabled

```css id="d9x2kp"
button:disabled {
  opacity: 0.5;
}
```

---

## ✅ :enabled

```css id="e3m8tv"
input:enabled {
  border: 1px solid black;
}
```

---

# 🌐 :root — global scope

```css id="r8v1qp"
:root {
  --main-color: blue;
  --font-size: 16px;
}
```

### 🔍 Qanday ishlaydi:

- HTML documentning eng yuqori darajasi
- CSS variables shu yerda saqlanadi

### 📌 Misol:

```css id="u1m9kd"
body {
  color: var(--main-color);
  font-size: var(--font-size);
}
```

---

# 🧠 Xulosa

| Category    | Pseudo-classes           |
| ----------- | ------------------------ |
| Interaction | :hover, :active, :focus  |
| Structure   | :first-child, :nth-child |
| Logic       | :not, :is, :where, :has  |
| Links       | :link, :visited          |
| Forms       | :checked, :disabled      |
| Global      | :root                    |

---

