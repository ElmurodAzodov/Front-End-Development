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

