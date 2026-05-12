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

# CSS Filter Effects

CSS Filter Effects — elementga vizual effekt beruvchi funksiyalar.

Asosan:

- image
- background
- video
- div
- icon

larga ishlatiladi.

---

# `filter` property

Barcha filter funksiyalar:

```css
filter:;
```

orqali ishlaydi.

---

# Sintaksis

```css
filter: function(value);
```

---

# Bir nechta filter

```css
filter: blur(5px) brightness(120%);
```

---

# 1. `blur()` — Xiralashtirish

Elementni blur qiladi.

---

# Sintaksis

```css
filter: blur(value);
```

---

# Misol

```css
img {
  filter: blur(5px);
}
```

---

# Qanday ishlaydi

| Qiymat | Natija        |
| ------ | ------------- |
| `0px`  | blur yo‘q     |
| `5px`  | o‘rtacha blur |
| `20px` | kuchli blur   |

---

# Real example

```css
.background {
  filter: blur(10px);
}
```

---

# Glassmorphism example

```css
.card {
  backdrop-filter: blur(10px);
}
```

`backdrop-filter`
→ orqa fonni blur qiladi.

---

# 2. `brightness()` — Yorug‘lik

Element yorqinligini boshqaradi.

---

# Sintaksis

```css
filter: brightness(value);
```

---

# Misol

```css
img {
  filter: brightness(150%);
}
```

---

# Values

| Value  | Natija      |
| ------ | ----------- |
| `100%` | normal      |
| `50%`  | qorong‘i    |
| `200%` | juda yorqin |

---

# Decimal ham ishlaydi

```css
filter: brightness(1.5);
```

---

# Hover effect

```css
img:hover {
  filter: brightness(120%);
}
```

---

# 3. `contrast()` — Kontrast

Qora-oq farqini kuchaytiradi.

---

# Sintaksis

```css
filter: contrast(value);
```

---

# Misol

```css
img {
  filter: contrast(200%);
}
```

---

# Values

| Value  | Natija          |
| ------ | --------------- |
| `100%` | normal          |
| `0%`   | kulrang         |
| `200%` | kuchli kontrast |

---

# Combined example

```css
filter: brightness(120%) contrast(140%);
```

---

# 4. `grayscale()` — Oq-qora

Rasmni grayscale qiladi.

---

# Sintaksis

```css
filter: grayscale(value);
```

---

# Misol

```css
img {
  filter: grayscale(100%);
}
```

---

# Values

| Value  | Natija         |
| ------ | -------------- |
| `0%`   | original       |
| `100%` | full grayscale |

---

# Hover animation

```css
img {
  filter: grayscale(100%);
  transition: 0.3s;
}

img:hover {
  filter: grayscale(0%);
}
```

---

# 5. `hue-rotate()` — Rang aylantirish

Rang tonini aylantiradi.

---

# Sintaksis

```css
filter: hue-rotate(angle);
```

---

# Misol

```css
img {
  filter: hue-rotate(90deg);
}
```

---

# Values

| Value    | Natija             |
| -------- | ------------------ |
| `0deg`   | original           |
| `180deg` | katta o‘zgarish    |
| `360deg` | originalga qaytadi |

---

# Animation example

```css
img {
  animation: hue 3s linear infinite;
}

@keyframes hue {
  to {
    filter: hue-rotate(360deg);
  }
}
```

---

# 6. `invert()` — Ranglarni teskarilash

Ranglarni invert qiladi.

---

# Sintaksis

```css
filter: invert(value);
```

---

# Misol

```css
img {
  filter: invert(100%);
}
```

---

# Values

| Value  | Natija   |
| ------ | -------- |
| `0%`   | original |
| `100%` | invert   |

---

# Dark mode icon

```css
.icon {
  filter: invert(1);
}
```

---

# 7. `saturate()` — Rang kuchi

Rang to‘yinganligini boshqaradi.

---

# Sintaksis

```css
filter: saturate(value);
```

---

# Misol

```css
img {
  filter: saturate(200%);
}
```

---

# Values

| Value  | Natija      |
| ------ | ----------- |
| `100%` | normal      |
| `0%`   | grayscale   |
| `200%` | rang kuchli |

---

# Combined

```css
filter: saturate(150%) contrast(120%);
```

---

# 8. `sepia()` — Sepia effect

Rasmga eski foto effekti beradi.

---

# Sintaksis

```css
filter: sepia(value);
```

---

# Misol

```css
img {
  filter: sepia(100%);
}
```

---

# Values

| Value  | Natija     |
| ------ | ---------- |
| `0%`   | original   |
| `100%` | full sepia |

---

# Vintage effect

```css
filter: sepia(80%) contrast(120%) brightness(90%);
```

---

# 9. `drop-shadow()` — Shadow

Element shakliga mos shadow beradi.

---

# Farqi `box-shadow` bilan

| `box-shadow`        | `drop-shadow()`     |
| ------------------- | ------------------- |
| to‘rtburchak shadow | real shape shadow   |
| box asosida         | image alpha asosida |

---

# Sintaksis

```css
filter: drop-shadow(x y blur color);
```

---

# Misol

```css
img {
  filter: drop-shadow(5px 5px 10px black);
}
```

---

# SVG icon example

```css
.icon {
  filter: drop-shadow(0 0 10px blue);
}
```

---

# Multiple shadows

```css
filter: drop-shadow(0 0 5px red) drop-shadow(0 0 10px blue);
```

---

# Real examples

# Blur background

```css
.overlay {
  backdrop-filter: blur(20px);
}
```

---

# Black-white hover

```css
img {
  filter: grayscale(100%);
}

img:hover {
  filter: grayscale(0%);
}
```

---

# Neon effect

```css
.logo {
  filter: drop-shadow(0 0 5px cyan) drop-shadow(0 0 20px cyan);
}
```

---

# Dark image overlay

```css
.hero img {
  filter: brightness(40%);
}
```

---

# Multiple filters together

```css
filter: brightness(120%) contrast(110%) saturate(140%) blur(1px);
```

Filterlar chapdan o‘ngga ishlaydi.

---

# Performance haqida

Ba’zi filterlar GPU ishlatadi.

Eng og‘irlari:

- blur()
- backdrop-filter()

Ko‘p ishlatilsa performance tushishi mumkin.

---

# Transition bilan ishlatish

```css
img {
  transition: filter 0.3s;
}

img:hover {
  filter: brightness(120%);
}
```

---

# Xulosa

# `blur()`

Xiralashtiradi.

```css
filter: blur(5px);
```

---

# `brightness()`

Yorug‘lik.

```css
filter: brightness(150%);
```

---

# `contrast()`

Kontrast.

```css
filter: contrast(200%);
```

---

# `grayscale()`

Oq-qora.

```css
filter: grayscale(100%);
```

---

# `hue-rotate()`

Rang aylanishi.

```css
filter: hue-rotate(90deg);
```

---

# `invert()`

Teskarilash.

```css
filter: invert(100%);
```

---

# `saturate()`

Rang kuchi.

```css
filter: saturate(200%);
```

---

# `sepia()`

Vintage effect.

```css
filter: sepia(100%);
```

---

# `drop-shadow()`

Shape-based shadow.

```css
filter: drop-shadow(5px 5px 10px black);
```

---

<br>
<br>
<br>
<br>
<br>

# CSS Blend Modes

Blend Modes — element ranglarini bir-biri bilan aralashtirish usuli.

CSS’da 2 ta asosiy blend mavjud:

- `mix-blend-mode`
- `background-blend-mode`

---

# Blend Mode nima?

2 ta layer:

- image
- background
- text
- color

bir-biri bilan qanday aralashishini belgilaydi.

Photoshop’dagi blend mode kabi ishlaydi.

---

# Asosiy blend mode values

| Value         | Vazifa                 |
| ------------- | ---------------------- |
| `normal`      | oddiy                  |
| `multiply`    | qoraytiradi            |
| `screen`      | yorqinlashtiradi       |
| `overlay`     | contrast blend         |
| `darken`      | eng qorong‘isini oladi |
| `lighten`     | eng yorug‘ini oladi    |
| `color-dodge` | kuchli light           |
| `color-burn`  | kuchli dark            |
| `difference`  | farq                   |
| `exclusion`   | yumshoq difference     |
| `hue`         | hue saqlaydi           |
| `saturation`  | saturation saqlaydi    |
| `color`       | color blend            |
| `luminosity`  | yorug‘lik blend        |

---

# 1. `mix-blend-mode`

Elementni orqasidagi content bilan blend qiladi.

---

# Sintaksis

```css
mix-blend-mode: value;
```

---

# Misol

```html
<div class="bg">
  <h1>TEXT</h1>
</div>
```

```css
.bg {
  background: orange;
}

h1 {
  color: white;
  mix-blend-mode: multiply;
}
```

---

# Qanday ishlaydi

`h1`
↓
orqa fon bilan aralashadi.

---

# `multiply`

Ranglarni ko‘paytiradi → qorayadi.

```css
mix-blend-mode: multiply;
```

---

# `screen`

Teskarisi:

- yorqinlashtiradi.

```css
mix-blend-mode: screen;
```

---

# `overlay`

Contrast kuchayadi.

```css
mix-blend-mode: overlay;
```

---

# Text blend example

```css
h1 {
  font-size: 100px;
  color: white;
  mix-blend-mode: difference;
}
```

---

# `difference`

Ranglarni teskarilashtirishga o‘xshaydi.

Oq text qora fonda → oq
oq text oq fonda → qora

---

# Real neon example

```css
.text {
  color: cyan;
  mix-blend-mode: screen;
}
```

---

# Image blend

```css
img {
  mix-blend-mode: multiply;
}
```

Image background bilan blend bo‘ladi.

---

# Transparent effect

```css
.logo {
  mix-blend-mode: lighten;
}
```

---

# Isolation muammosi

Ba’zida blend butun page bilan ishlaydi.

Buni oldini olish:

```css
.container {
  isolation: isolate;
}
```

---

# Nega kerak?

`mix-blend-mode`
faqat parent ichida ishlaydi.

---

# Example

```css
.wrapper {
  isolation: isolate;
}
```

---

# 2. `background-blend-mode`

Bu:

- background layers
  orasida blend qiladi.

---

# Sintaksis

```css
background-blend-mode: value;
```

---

# Misol

```css
.box {
  background-image: url(bg.jpg), linear-gradient(red, blue);

  background-blend-mode: multiply;
}
```

---

# Qanday ishlaydi

Background image

- Gradient

bir-biri bilan blend bo‘ladi.

---

# Overlay effect

```css
.hero {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(hero.jpg);

  background-blend-mode: darken;
}
```

---

# Color overlay

```css
background-blend-mode: overlay;
```

Image ustiga cinematic effect beradi.

---

# Multiple backgrounds

```css
background-image: url(a.jpg), url(b.jpg), linear-gradient(red, blue);

background-blend-mode: screen, multiply;
```

---

# Blend mode count rule

Agar:

- 3 ta background bo‘lsa,
- 2 ta blend mode yetadi.

---

# Real examples

# Dark overlay image

```css
.hero {
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(bg.jpg);

  background-blend-mode: multiply;
}
```

---

# Artistic image

```css
img {
  mix-blend-mode: color-dodge;
}
```

---

# Gradient + image blend

```css
.card {
  background-image: linear-gradient(purple, cyan), url(photo.jpg);

  background-blend-mode: soft-light;
}
```

---

# Text cutout effect

```css
h1 {
  color: white;
  mix-blend-mode: difference;
}
```

---

# Most used blend modes

| Blend        | Effect      |
| ------------ | ----------- |
| `multiply`   | dark        |
| `screen`     | light       |
| `overlay`    | cinematic   |
| `difference` | invert-like |
| `lighten`    | lighter     |
| `darken`     | darker      |

---

# `mix-blend-mode` vs `background-blend-mode`

| Property                | Blend qiladi       |
| ----------------------- | ------------------ |
| `mix-blend-mode`        | element + orqa fon |
| `background-blend-mode` | background layers  |

---

# Browser support

Ikkalasi ham modern browserlarda ishlaydi.

Lekin:

- eski browserlarda muammo bo‘lishi mumkin.

---

# Performance

Blend modes GPU ishlatadi.

Ko‘p ishlatilsa:

- rendering og‘irlashadi.

---

# Muhim eslatmalar

# Blend ko‘rinishi uchun overlap kerak

Agar element orqasida hech narsa bo‘lmasa:

- effect bilinmaydi.

---

# `mix-blend-mode` stacking contextga bog‘liq

Ba’zan:

```css
position
z-index
opacity
transform
```

blend natijasini o‘zgartiradi.

---

# `isolation: isolate`

Eng muhim fixlardan biri.

```css
.container {
  isolation: isolate;
}
```

---

# Xulosa

# `mix-blend-mode`

Elementni orqa content bilan blend qiladi.

```css
mix-blend-mode: multiply;
```

---

# `background-blend-mode`

Background layerlarni blend qiladi.

```css
background-blend-mode: overlay;
```

---

# Eng mashhur blendlar

```css
multiply
screen
overlay
difference
```

---

# Isolation

```css
isolation: isolate;
```

blend scope’ni cheklaydi.

---

<br>
<br>
<br>
<br>
<br>
