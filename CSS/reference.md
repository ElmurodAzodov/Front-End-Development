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
