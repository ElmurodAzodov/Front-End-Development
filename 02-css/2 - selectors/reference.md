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

