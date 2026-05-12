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

# CSS Functions

CSS Functions — CSS ichida maxsus hisob-kitob yoki qiymat qaytaruvchi funksiyalar.

Bu mavzuda:

- `calc()`
- `min()`
- `max()`
- `clamp()`
- `attr()`
- `url()`

ko‘riladi.

---

# 1. `calc()` — Calculations

`calc()` CSS ichida matematik hisoblash qiladi.

---

# Sintaksis

```css
calc(expression)
```

---

# Qo‘llab-quvvatlanadigan operatorlar

| Operator | Vazifa       |
| -------- | ------------ |
| `+`      | qo‘shish     |
| `-`      | ayirish      |
| `*`      | ko‘paytirish |
| `/`      | bo‘lish      |

---

# Oddiy misol

```css
width: calc(100% - 200px);
```

Ma’nosi:

- element eni = 100% dan 200px ayiriladi.

---

# Real example

```css
.sidebar {
  width: 250px;
}

.content {
  width: calc(100% - 250px);
}
```

---

# Height calculation

```css
height: calc(100vh - 80px);
```

Ma’nosi:

- ekran balandligi minus navbar.

---

# Margin calculation

```css
margin: calc(20px + 10px);
```

---

# Mixed units

`calc()` turli birliklarni aralashtira oladi.

```css
font-size: calc(1rem + 2vw);
```

Bu responsive typography uchun ishlatiladi.

---

# Muhim qoida

`+` va `-` operatorlarida bo‘sh joy kerak.

## To‘g‘ri

```css
calc(100% - 20px)
```

## Noto‘g‘ri

```css
calc(100%-20px)
```

---

# Nested calc

```css
width: calc((100% - 50px) / 2);
```

---

# 2. `min()` — Eng kichik qiymat

`min()` berilgan qiymatlardan eng kichigini tanlaydi.

---

# Sintaksis

```css
min(value1, value2)
```

---

# Misol

```css
width: min(500px, 100%);
```

Natija:

- element hech qachon 500px dan katta bo‘lmaydi.

---

# Responsive example

```css
font-size: min(5vw, 40px);
```

Ma’nosi:

- shrift responsive,
- lekin 40px dan oshmaydi.

---

# 3. `max()` — Eng katta qiymat

`max()` eng katta qiymatni tanlaydi.

---

# Sintaksis

```css
max(value1, value2)
```

---

# Misol

```css
width: max(300px, 50%);
```

Natija:

- width hech qachon 300px dan kichik bo‘lmaydi.

---

# Responsive text

```css
font-size: max(16px, 2vw);
```

Ma’nosi:

- shrift minimum 16px.

---

# 4. `clamp()` — Responsive Range

`clamp()`:

- minimum,
- ideal,
- maximum

qiymat beradi.

---

# Sintaksis

```css
clamp(min, preferred, max)
```

---

# Formula

```text
clamp(MIN, IDEAL, MAX)
```

---

# Misol

```css
font-size: clamp(16px, 5vw, 40px);
```

---

# Qanday ishlaydi

| Holat             | Natija |
| ----------------- | ------ |
| juda kichik ekran | 16px   |
| normal ekran      | 5vw    |
| juda katta ekran  | 40px   |

---

# Responsive typography

```css
h1 {
  font-size: clamp(24px, 5vw, 60px);
}
```

---

# Responsive width

```css
width: clamp(300px, 50%, 900px);
```

---

# `clamp()` afzalligi

Oldin:

```css
@media (...);
```

ko‘p yozilardi.

Hozir:

```css
clamp()
```

bilan qisqaroq responsive design qilinadi.

---

# 5. `attr()` — HTML Attribute olish

`attr()` HTML attributeni CSS ichida ishlatadi.

---

# Sintaksis

```css
attr(attribute-name)
```

---

# Misol

## HTML

```html
<button data-text="Save"></button>
```

## CSS

```css
button::after {
  content: attr(data-text);
}
```

Natija:

- button ichida `"Save"` chiqadi.

---

# Title attribute example

## HTML

```html
<p title="Hello World">Hover me</p>
```

## CSS

```css
p:hover::after {
  content: attr(title);
}
```

---

# Eng ko‘p ishlatiladigan joy

`content` bilan.

```css
content: attr(data-value);
```

---

# Custom data attributes

HTML:

```html
<div data-price="$50"></div>
```

CSS:

```css
div::before {
  content: attr(data-price);
}
```

---

# Muhim eslatma

`attr()` ko‘p CSS propertylarda hali to‘liq ishlamaydi.

Eng xavfsiz ishlatiladigan joy:

- `content`

---

# 6. `url()` — Resource yuklash

`url()` fayl manzilini ko‘rsatadi.

---

# Sintaksis

```css
url(path)
```

---

# Background image

```css
background-image: url("image.jpg");
```

---

# Font yuklash

```css
src: url("font.woff2");
```

---

# SVG ishlatish

```css
background: url("icon.svg");
```

---

# Absolute URL

```css
background-image: url("https://example.com/bg.jpg");
```

---

# Relative URL

```css
background-image: url("../images/bg.jpg");
```

---

# Quotes optional

## To‘g‘ri

```css
url("img.jpg")
url('img.jpg')
url(img.jpg)
```

---

# Multiple backgrounds

```css
background-image: url("top.png"), url("bottom.png");
```

---

# Data URL

Base64 image ishlatish mumkin.

```css
background-image: url(data:image/png;base64,...);
```

---

# Real example

```css
.hero {
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("hero.jpg");

  background-size: cover;
}
```

---

# Xulosa

# `calc()`

Matematik hisoblash.

```css
calc(100% - 20px)
```

---

# `min()`

Eng kichik qiymatni tanlaydi.

```css
min(500px, 100%)
```

---

# `max()`

Eng katta qiymatni tanlaydi.

```css
max(300px, 50%)
```

---

# `clamp()`

Responsive min/ideal/max.

```css
clamp(16px, 5vw, 40px)
```

---

# `attr()`

HTML attribute olish.

```css
attr(data-text)
```

---

# `url()`

Fayl manzili.

```css
url("image.jpg")
```

---

<br>
<br>
<br>
<br>
<br>

