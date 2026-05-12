# **Advanced CSS Features**

# Custom Properties (CSS Variables)

CSS Variables — CSS ichida qiymatlarni o‘zgaruvchi sifatida saqlash usuli.

Ular:

- kodni qisqartiradi,
- bir xil qiymatni qayta ishlatadi,
- theme (dark/light mode) qilishni osonlashtiradi,
- JavaScript bilan dinamik o‘zgartiriladi.

---

# 1. Declaration (`--variable-name`)

Variable yaratish uchun `--` bilan boshlanadi.

## Sintaksis

```css
--variable-name: value;
```

## Misol

```css
:root {
  --main-color: blue;
  --font-size: 20px;
}
```

Bu yerda:

- `--main-color` → blue
- `--font-size` → 20px

---

# `:root` nima?

```css
:root;
```

bu HTML documentning eng yuqori elementi (`html`) hisoblanadi.

`:root` ichida yozilgan variable butun sahifada ishlaydi.

## Misol

```css
:root {
  --primary-color: red;
}
```

---

# Variable naming rules

## To‘g‘ri:

```css
--color
--main-bg
--font-size
```

## Noto‘g‘ri:

```css
-main-color
main-color
```

Variable HAR DOIM `--` bilan boshlanishi kerak.

---

# 2. Usage (`var(--variable-name)`)

Variable ishlatish uchun `var()` ishlatiladi.

## Sintaksis

```css
var(--variable-name)
```

## Misol

```css
:root {
  --main-color: crimson;
}

h1 {
  color: var(--main-color);
}
```

Natija:

- `h1` rangi crimson bo‘ladi.

---

# Bir nechta joyda ishlatish

```css
:root {
  --primary: #3498db;
}

button {
  background: var(--primary);
}

h1 {
  color: var(--primary);
}

p {
  border-color: var(--primary);
}
```

1 ta variable → ko‘p joyda ishlatilmoqda.

---

# Variables boshqa variables ichida

```css
:root {
  --main-color: blue;
  --button-color: var(--main-color);
}
```

---

# 3. Fallback Values

Agar variable mavjud bo‘lmasa, zaxira qiymat ishlatiladi.

## Sintaksis

```css
var(--name, fallback)
```

## Misol

```css
h1 {
  color: var(--text-color, black);
}
```

Agar:

- `--text-color` mavjud bo‘lsa → ishlaydi
- bo‘lmasa → black ishlaydi

---

# Bir nechta fallback

```css
color: var(--a, var(--b, red));
```

Tartib:

1. `--a`
2. `--b`
3. `red`

---

# 4. Scoped Variables

Variables faqat ma’lum element ichida ishlashi mumkin.

Bu “scope” deyiladi.

---

# Global scope

```css
:root {
  --main-color: blue;
}
```

Butun sahifada ishlaydi.

---

# Local scope

```css
.card {
  --main-color: green;
}
```

Bu variable faqat `.card` ichida ishlaydi.

---

# Misol

```html
<div class="card">
  <p>Hello</p>
</div>

<p>Outside</p>
```

```css
:root {
  --text-color: blue;
}

.card {
  --text-color: green;
}

p {
  color: var(--text-color);
}
```

## Natija

- `.card` ichidagi `p` → green
- tashqaridagi `p` → blue

---

# Variable inheritance

Variables inherit bo‘ladi.

Farzand element ota element variablesini oladi.

## Misol

```css
.box {
  --color: red;
}

.box p {
  color: var(--color);
}
```

`p` → red oladi.

---

# Scoped variable override

```css
:root {
  --bg: white;
}

.dark {
  --bg: black;
}

body {
  background: var(--bg);
}
```

Agar `body` ichida `.dark` ishlatilsa:

- background qora bo‘ladi.

---

# 5. Dynamic Updates with JavaScript

CSS variables JavaScript orqali real vaqtda o‘zgaradi.

Bu:

- dark mode
- live theme
- animation
- responsive UI

uchun juda foydali.

---

# Variable o‘zgartirish

## HTML

```html
<button onclick="changeColor()">Change</button>
```

## CSS

```css
:root {
  --main-color: blue;
}

h1 {
  color: var(--main-color);
}
```

## JavaScript

```javascript
function changeColor() {
  document.documentElement.style.setProperty("--main-color", "red");
}
```

## Natija

Button bosilganda:

- `--main-color` → red bo‘ladi.

---

# `document.documentElement` nima?

Bu:

```html
<html></html>
```

elementini bildiradi.

Demak:

- global variable o‘zgaryapti.

---

# Element ichidagi variable o‘zgartirish

```javascript
const card = document.querySelector(".card");

card.style.setProperty("--bg", "orange");
```

---

# Variable qiymatini olish

```javascript
getComputedStyle(document.documentElement).getPropertyValue("--main-color");
```

---

# Real example — Dark Mode

## CSS

```css
:root {
  --bg: white;
  --text: black;
}

.dark {
  --bg: black;
  --text: white;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

## JavaScript

```javascript
document.body.classList.toggle("dark");
```

---

# Variables afzalliklari

## 1. Reusable

1 ta qiymatni ko‘p joyda ishlatadi.

---

## 2. Easy maintenance

1 joyni o‘zgartirasiz → hammasi yangilanadi.

---

## 3. Dynamic UI

JavaScript bilan oson boshqariladi.

---

## 4. Cleaner code

Kod tartibli bo‘ladi.

---

# Muhim eslatmalar

## Variables case-sensitive

```css
--Color
--color
```

ikkalasi boshqa variable.

---

## Variables faqat `var()` bilan ishlaydi

Noto‘g‘ri:

```css
color: --main-color;
```

To‘g‘ri:

```css
color: var(--main-color);
```

---

# Eng ko‘p ishlatiladigan pattern

```css
:root {
  --primary: #3498db;
  --secondary: #2ecc71;
  --danger: #e74c3c;

  --font-lg: 32px;
  --font-md: 20px;
  --font-sm: 14px;

  --radius: 10px;
}
```

---

# Xulosa

## Declaration

```css
--name: value;
```

Variable yaratadi.

---

## Usage

```css
var(--name)
```

Variable ishlatadi.

---

## Fallback

```css
var(--name, fallback)
```

Variable topilmasa fallback ishlaydi.

---

## Scoped Variables

Variable ma’lum element ichida ishlashi mumkin.

---

## JavaScript Dynamic Update

```javascript
setProperty();
```

orqali variable real vaqtda o‘zgaradi.

---

<br>
<br>
<br>
<br>
<br>

