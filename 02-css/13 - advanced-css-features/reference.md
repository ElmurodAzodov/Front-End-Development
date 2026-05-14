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

# CSS Clip Path

`clip-path` — elementning ko‘rinadigan qismini kesib (clip) shakl berish uchun ishlatiladi.

Oddiy qilib:
👉 elementni “shaklga solib kesib qo‘yadi”

---

# 1. `clip-path` umumiy ishlashi

```css
clip-path: shape();
```

Elementning faqat berilgan shakl ichidagi qismi ko‘rinadi, qolgan qismi yashirinadi.

---

# 2. `circle()` — doira shakli

```css
clip-path: circle();
```

---

## Sintaksis

```css
clip-path: circle(radius at position);
```

---

## Misol

```css
img {
  clip-path: circle(50%);
}
```

---

## Markazni o‘zgartirish

```css
img {
  clip-path: circle(40% at 30% 30%);
}
```

---

## Natija

- rasm doira shaklga kiradi
- faqat ichki qismi ko‘rinadi

---

# 3. `ellipse()` — ellips (oval)

```css
clip-path: ellipse();
```

---

## Sintaksis

```css
clip-path: ellipse(rx ry at x y);
```

---

## Misol

```css
img {
  clip-path: ellipse(40% 30%);
}
```

---

## Position bilan

```css
img {
  clip-path: ellipse(40% 30% at 50% 50%);
}
```

---

## Natija

- gorizontal yoki vertical oval kesiladi

---

# 4. `polygon()` — ko‘p burchakli shakl

Eng kuchli clip-path turi.

---

## Sintaksis

```css
clip-path: polygon(x y, x y, x y);
```

---

## Misol (triangle)

```css
img {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}
```

---

## Natija

- uchburchak shakl

---

## Rectangle-like shape

```css
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
```

---

## Star shape example

```css
clip-path: polygon(
  50% 0%,
  61% 35%,
  98% 35%,
  68% 57%,
  79% 91%,
  50% 70%,
  21% 91%,
  32% 57%,
  2% 35%,
  39% 35%
);
```

---

# 5. Clip-path example (real usage)

```css
.card {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
```

---

# Clip-path nima uchun ishlatiladi?

- creative UI design
- image cropping without editing
- shape-based cards
- hover effects
- animations

---

# Hover animation example

```css
img {
  clip-path: circle(20%);
  transition: 0.4s;
}

img:hover {
  clip-path: circle(50%);
}
```

---

# 6. `shape-outside` — text wrapping

`shape-outside` element atrofida text qanday oqishini boshqaradi.

👉 faqat `float` bilan ishlaydi.

---

# Muhim qoida

```css
shape-outside ishlashi uchun:
float: left yoki right bo‘lishi shart
```

---

# Sintaksis

```css
shape-outside: shape();
```

---

# 7. Circle text wrap

```css
img {
  float: left;
  shape-outside: circle(50%);
  width: 200px;
  height: 200px;
}
```

---

## Natija

- text rasm atrofida doira shaklida oqadi

---

# 8. Ellipse text wrap

```css
img {
  float: left;
  shape-outside: ellipse(50% 40%);
}
```

---

# 9. Polygon text wrap

```css
img {
  float: left;
  shape-outside: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
```

---

# 10. shape-margin

Text va shape orasidagi masofa.

```css
img {
  shape-outside: circle(50%);
  shape-margin: 20px;
}
```

---

# Clip-path vs shape-outside

| Property      | Vazifa                     |
| ------------- | -------------------------- |
| clip-path     | elementni kesadi           |
| shape-outside | text oqishini o‘zgartiradi |

---

# Real difference

## clip-path

👉 rasmni kesib tashlaydi

## shape-outside

👉 rasm o‘zgarmaydi, faqat text joylashuvi o‘zgaradi

---

# Combined example

```css
img {
  float: left;
  width: 200px;

  clip-path: circle(50%);
  shape-outside: circle(50%);
}
```

---

# Creative UI example

```css
.card {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}
```

---

# Animation idea

```css
img {
  clip-path: circle(20%);
  transition: 0.5s;
}

img:hover {
  clip-path: circle(50%);
}
```

---

# Performance note

- clip-path → GPU accelerated
- polygon → biroz heavy bo‘lishi mumkin

---

# Browser support

- modern browserlarda yaxshi ishlaydi
- eski browserlarda polygon cheklangan bo‘lishi mumkin

---

# Xulosa

## clip-path

Elementni shakl bo‘yicha kesadi:

```css
clip-path: circle();
clip-path: ellipse();
clip-path: polygon();
```

---

## shape-outside

Text oqishini shaklga moslaydi:

```css
shape-outside: circle();
```

---

## Eng muhim farq

- clip-path → ko‘rinishni o‘zgartiradi
- shape-outside → text layoutni o‘zgartiradi

---

<br>
<br>
<br>
<br>
<br>

# CSS Grid Subgrid (`subgrid`)

`subgrid` — CSS Grid ichida ishlatiladigan feature bo‘lib, **child grid elementga parent gridning track (column/row) strukturasi meros qilib beriladi**.

👉 Oddiy qilib:

- parent grid bor
- child ham grid bo‘ladi
- lekin child o‘z layoutini emas, parent grid liniyalarini ishlatadi

---

# 1. Muammo (subgrid nima uchun kerak?)

Oddiy gridda:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

Agar child ichida yana grid qilinsa:

```css
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

❌ muammo:

- child grid parent bilan align bo‘lmaydi
- columnlar “uzilib ketadi”
- design tartibsiz bo‘ladi

---

# 2. Subgrid yechimi

```css id="sub1"
.card {
  display: grid;
  grid-template-columns: subgrid;
}
```

👉 Bu yerda `.card` parent gridning columnlarini ishlatadi.

---

# 3. Asosiy sintaksis

```css id="sub2"
grid-template-columns: subgrid;
grid-template-rows: subgrid;
```

---

# 4. Oddiy misol

## HTML

```html id="sub3"
<div class="container">
  <div class="card">
    <h2>Title</h2>
    <p>Description</p>
  </div>
</div>
```

---

## CSS

```css id="sub4"
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
}
```

---

## Subgrid qo‘llash

```css id="sub5"
.card {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
}
```

---

## Natija

- `.card` ichidagi elementlar
- parent grid columnlariga aniq moslashadi

---

# 5. Rows bilan subgrid

```css id="sub6"
.container {
  display: grid;
  grid-template-rows: auto auto auto;
}
```

```css id="sub7"
.card {
  display: grid;
  grid-template-rows: subgrid;
}
```

---

# 6. Column + Row subgrid

```css id="sub8"
.card {
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

👉 to‘liq parent grid strukturasi childga o‘tadi

---

# 7. Real UI misol (card layout)

## Parent grid

```css id="sub9"
.page {
  display: grid;
  grid-template-columns: 100px 1fr 100px;
}
```

---

## Card

```css id="sub10"
.card {
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 1 / -1;
}
```

---

## Natija

- header
- content
- footer

hammasi bir xil alignmentda turadi

---

# 8. Subgrid vs normal grid

| Feature                | grid   | subgrid   |
| ---------------------- | ------ | --------- |
| Mustaqil layout        | ha     | yo‘q      |
| Parent bilan alignment | yo‘q   | ha        |
| Column control         | o‘zida | parentdan |
| Design consistency     | qiyin  | oson      |

---

# 9. Qachon ishlatiladi?

✔ Card design
✔ Table-like layouts
✔ Dashboard UI
✔ Form alignment
✔ Nested grid alignment

---

# 10. Muhim eslatma

## Subgrid ishlashi uchun:

- parent `display: grid` bo‘lishi kerak
- child ham `display: grid` bo‘lishi kerak
- browser support kerak (modern browserlar)

---

# 11. Eng kuchli use-case

Form alignment:

```css id="sub11"
.form {
  display: grid;
  grid-template-columns: 150px 1fr;
}
```

```css id="sub12"
.field {
  display: grid;
  grid-template-columns: subgrid;
}
```

👉 label va inputlar hamma joyda bir xil line’da turadi

---

# 12. Visual natija tushunchasi

Oddiy grid:

```
| A | B | C |
```

Subgrid:

```
Parent: | A | B | C |
Child : | A | B | C |  (same lines)
```

---

# Xulosa

## `subgrid` nima?

👉 child gridga parent grid layoutini meros qilib beruvchi CSS Grid feature.

---

## Asosiy yozilishi:

```css id="sub13"
grid-template-columns: subgrid;
grid-template-rows: subgrid;
```

---

## Eng katta foyda:

- layout bir xil qoladi
- alignment osonlashadi
- nested grid muammolari yo‘qoladi

---

<br>
<br>
<br>
<br>
<br>

# CSS Container Queries (`@container`)

`@container` — bu CSS’da **elementning o‘z parent container o‘lchamiga qarab style o‘zgarishini ta’minlaydi**.

👉 Oddiy qilib:

- `@media` → viewport (ekran)ga qaraydi
- `@container` → elementning ichki containeriga qaraydi

---

# 1. Muammo (nima uchun kerak?)

Oldin faqat shunday edi:

```css id="c1"
@media (max-width: 600px) {
  .card {
    font-size: 14px;
  }
}
```

❌ muammo:

- faqat ekran o‘lchamiga bog‘liq
- component boshqa joyga qo‘yilsa buziladi

---

# 2. Container Queries yechimi

Endi component o‘z “ota blok”iga qaraydi:

👉 masalan:

- sidebar ichida kichik card
- main ichida katta card

---

# 3. Asosiy 2 qadam

## 1) Container belgilash

```css id="c2"
.card-wrapper {
  container-type: inline-size;
}
```

---

## 2) Container query yozish

```css id="c3"
@container (min-width: 400px) {
  .card {
    font-size: 20px;
  }
}
```

---

# 4. Container type turlari

## `inline-size`

```css id="c4"
container-type: inline-size;
```

👉 faqat width bo‘yicha hisoblaydi

---

## `size`

```css id="c5"
container-type: size;
```

👉 width + height

---

## `normal`

```css id="c6"
container-type: normal;
```

👉 container query ishlamaydi

---

# 5. Oddiy real misol

## HTML

```html id="c7"
<div class="sidebar">
  <div class="card">Hello</div>
</div>
```

---

## CSS

```css id="c8"
.sidebar {
  width: 300px;
  container-type: inline-size;
}
```

---

## Container query

```css id="c9"
@container (min-width: 250px) {
  .card {
    font-size: 18px;
  }
}
```

---

# 6. Katta container misol

```css id="c10"
.main {
  width: 800px;
  container-type: inline-size;
}
```

```css id="c11"
@container (min-width: 600px) {
  .card {
    display: flex;
  }
}
```

---

# 7. Container name (nom berish)

Agar bir nechta container bo‘lsa:

```css id="c12"
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}
```

---

## Query bilan ishlatish

```css id="c13"
@container card (min-width: 400px) {
  .card {
    padding: 30px;
  }
}
```

---

# 8. Media Query vs Container Query

| Feature          | @media  | @container |
| ---------------- | ------- | ---------- |
| asos             | ekran   | element    |
| scope            | global  | local      |
| reuse            | qiyin   | oson       |
| component design | kam mos | ideal      |

---

# 9. Real UI example (card system)

## Container

```css id="c14"
.widget {
  container-type: inline-size;
}
```

---

## Small layout

```css id="c15"
@container (max-width: 300px) {
  .card {
    flex-direction: column;
  }
}
```

---

## Large layout

```css id="c16"
@container (min-width: 600px) {
  .card {
    flex-direction: row;
  }
}
```

---

# 10. Responsive component (eng kuchli use-case)

```css id="c17"
.card {
  display: flex;
}
```

```css id="c18"
@container (max-width: 400px) {
  .card {
    flex-direction: column;
  }
}
```

👉 card qayerda tursa ham moslashadi

---

# 11. Nesting imkoniyati

```css id="c19"
.container {
  container-type: inline-size;
}

@container (min-width: 500px) {
  .item {
    font-size: 22px;
  }
}
```

---

# 12. Qachon ishlatiladi?

✔ reusable components
✔ design systems
✔ cards
✔ widgets
✔ dashboards
✔ UI libraries

---

# 13. Muhim qoida

👉 Container query ishlashi uchun container bo‘lishi SHART:

```css id="c20"
container-type: inline-size;
```

---

# 14. Oddiy tushuncha

- `@media` → “ekran katta/kichikmi?”
- `@container` → “bu blok katta/kichikmi?”

---

# 15. Eng kuchli afzallik

Component “self-aware” bo‘ladi:

👉 qayerga qo‘yilsa ham o‘zini moslaydi

---

# Xulosa

## Container Query nima?

👉 element o‘lchamiga qarab style o‘zgartiradi

---

## Asosiy yozilishi:

```css id="c21"
@container (min-width: 400px) {
  .card {
    font-size: 18px;
  }
}
```

---

## Container belgilash:

```css id="c22"
container-type: inline-size;
```

---

## Eng katta foyda:

- responsive components
- reusable UI
- media queryga bog‘liqlik kamayadi

---

<br>
<br>
<br>
<br>
<br>

# CSS `:has()` — Parent Selector

`:has()` — CSS’da **parent (ota) elementni child ichidagi holatga qarab style qilish** imkonini beradigan selector.

👉 Eng muhim g‘oya:

- oldin CSS faqat **pastga (parent → child)** ishlardi
- `:has()` bilan **tepaga (child → parent)** ham ishlash mumkin bo‘ldi

---

# 1. Oddiy muammo

Oldin CSS’da bunday narsa imkonsiz edi:

❌ “Agar ichida input focus bo‘lsa, parentni o‘zgartir”

---

# 2. `:has()` yechimi

```css id="h1"
.parent:has(input:focus) {
  border: 2px solid blue;
}
```

👉 ma’nosi:

- agar `.parent` ichida `input:focus` bo‘lsa
- `.parent` ga style ber

---

# 3. Eng oddiy tushuncha

```text id="h2"
Parent ichidagi holat → Parentni o‘zgartir
```

---

# 4. Basic syntax

```css id="h3"
selector:has(condition) {
  styles
}
```

---

# 5. Input focus example

## HTML

```html id="h4"
<div class="box">
  <input type="text" />
</div>
```

---

## CSS

```css id="h5"
.box:has(input:focus) {
  background: lightblue;
}
```

---

## Natija:

- input fokus bo‘lsa
- box rangi o‘zgaradi

---

# 6. Checkbox example

```css id="h6"
.card:has(input[type="checkbox"]:checked) {
  background: green;
}
```

👉 checkbox belgilanganda card o‘zgaradi

---

# 7. Image mavjudligini tekshirish

```css id="h7"
.post:has(img) {
  padding: 20px;
}
```

👉 agar post ichida rasm bo‘lsa

---

# 8. Empty state detection

```css id="h8"
.list:not(:has(li)) {
  display: none;
}
```

👉 agar list bo‘sh bo‘lsa yashir

---

# 9. Button ichida icon borligi

```css id="h9"
button:has(svg) {
  padding-left: 30px;
}
```

---

# 10. Multiple conditions

```css id="h10"
.card:has(img):has(h2) {
  border: 2px solid black;
}
```

👉 card ichida rasm ham, title ham bo‘lsa

---

# 11. Real UI example (form validation)

```css id="h11"
.form-group:has(input:invalid) {
  border: 1px solid red;
}
```

👉 input xato bo‘lsa, parent qizil bo‘ladi

---

# 12. Hover based parent effect

```css id="h12"
.card:has(img:hover) {
  transform: scale(1.05);
}
```

👉 rasm ustiga hover qilinsa card kattalashadi

---

# 13. `:has()` vs old CSS

## Old usul (imkonsiz):

```css id="h13"
/* Parentni childga qarab o‘zgartirib bo‘lmas edi */
```

---

## Yangi usul:

```css id="h14"
.parent:has(child) {
}
```

---

# 14. Real dashboard example

```css id="h15"
.widget:has(.error) {
  border-left: 4px solid red;
}
```

---

# 15. Navigation example

```css id="h16"
.menu-item:has(.active) {
  background: blue;
}
```

---

# 16. Important limitation

❗ `:has()` juda kuchli, lekin:

- katta layoutlarda ehtiyot bo‘lish kerak
- performancega ta’sir qilishi mumkin

---

# 17. Browser support

Modern browserlarda ishlaydi:

✔ Chrome
✔ Edge
✔ Safari
✔ Firefox (yangi versiyalar)

---

# 18. Mental model

Oddiy CSS:

```text id="h17"
Parent → Child
```

`:has()` bilan:

```text id="h18"
Child state → Parent
```

---

# 19. Eng kuchli use cases

✔ Form validation UI
✔ Card states
✔ Empty/filled detection
✔ Dynamic layouts
✔ Interactive components

---

# 20. Xulosa

## `:has()` nima?

👉 parent selector bo‘lib, child ichidagi holatga qarab parentni style qiladi

---

## Sintaksis:

```css id="h19"
.parent:has(child-condition) {
}
```

---

## Eng kuchli imkoniyati:

- CSS’da “parent logic” qo‘shadi
- JavaScript’siz interactivity beradi

---

<br>
<br>
<br>
<br>
<br>

# CSS `@scope` Rule

`@scope` — CSS’da **style’larni faqat ma’lum bir DOM (scope) ichida cheklab qo‘yish** uchun ishlatiladi.

👉 Oddiy qilib:

- CSS odatda global ishlaydi
- `@scope` esa “bu style faqat shu blok ichida ishlasin” deydi

---

# 1. Muammo (nima uchun kerak?)

Oldin CSS shunaqa edi:

```css id="s1"
.title {
  color: red;
}
```

❌ muammo:

- `.title` hamma joyda ishlaydi
- katta projectlarda conflict bo‘ladi

---

# 2. `@scope` yechimi

```css id="s2"
@scope (.card) {
  .title {
    color: blue;
  }
}
```

👉 ma’nosi:

- `.card` ichidagi `.title` faqat shu scope’da ishlaydi

---

# 3. Asosiy tushuncha

```text id="s3"
Scope = CSS uchun “chegaralangan zona”
```

---

# 4. Basic syntax

```css id="s4"
@scope (scope-root) {
  styles
}
```

---

# 5. Oddiy misol

## HTML

```html id="s5"
<div class="card">
  <h2 class="title">Hello</h2>
</div>

<h2 class="title">Outside</h2>
```

---

## CSS

```css id="s6"
@scope (.card) {
  .title {
    color: red;
  }
}
```

---

## Natija:

- `.card` ichidagi title → red
- tashqaridagi title → o‘zgarmaydi

---

# 6. Scope root va scope limit

`@scope` 2 qismdan iborat bo‘lishi mumkin:

```css id="s7"
@scope (.card) to (.footer) {
  styles
}
```

---

👉 ma’nosi:

- `.card` dan boshlanadi
- `.footer` ga yetganda to‘xtaydi

---

# 7. Real example

```css id="s8"
@scope (.article) to (.end) {
  p {
    font-size: 18px;
  }
}
```

---

# 8. Nested scope (ichma-ich)

```css id="s9"
@scope (.modal) {
  h1 {
    color: white;
  }

  @scope (.inner) {
    p {
      color: gray;
    }
  }
}
```

---

# 9. Component-based design

```css id="s10"
@scope (.card) {
  .title {
    font-weight: bold;
  }

  .text {
    color: #666;
  }
}
```

👉 bu:

- component CSS’ni isolate qiladi

---

# 10. `@scope` vs normal CSS

| Feature             | normal CSS      | @scope |
| ------------------- | --------------- | ------ |
| global              | ha              | yo‘q   |
| conflict            | bo‘lishi mumkin | yo‘q   |
| component isolation | yo‘q            | ha     |
| reuse safety        | past            | yuqori |

---

# 11. Real UI example

## Card system

```css id="s11"
@scope (.product-card) {
  h2 {
    font-size: 20px;
  }

  p {
    color: gray;
  }
}
```

---

# 12. Scoped reset example

```css id="s12"
@scope (.editor) {
  * {
    margin: 0;
    padding: 0;
  }
}
```

👉 faqat editor ichida reset bo‘ladi

---

# 13. Scope + :scope pseudo

```css id="s13"
@scope (.card) {
  :scope {
    border: 1px solid black;
  }
}
```

👉 `:scope` = hozirgi scope root

---

# 14. Scope chaining

```css id="s14"
@scope (.page) {
  @scope (.section) {
    p {
      color: blue;
    }
  }
}
```

---

# 15. Qachon ishlatiladi?

✔ Design systems
✔ Component libraries
✔ Large projects
✔ Avoid CSS conflicts
✔ Scoped UI sections

---

# 16. Muhim eslatma

❗ `@scope` hali yangi feature:

- hamma browserlarda 100% universal emas
- lekin modern browserlarda ishlaydi

---

# 17. Mental model

## Old CSS:

```text id="s15"
Global CSS → hamma joyga ta’sir qiladi
```

## @scope:

```text id="s16"
Local CSS → faqat shu blok ichida ishlaydi
```

---

# 18. Eng kuchli foyda

👉 CSS modular bo‘ladi
👉 conflict yo‘qoladi
👉 component architecture kuchayadi

---

# Xulosa

## `@scope` nima?

👉 CSS style’larni faqat ma’lum DOM ichida cheklaydigan rule

---

## Asosiy yozilishi:

```css id="s17"
@scope (.container) {
  .title {
    color: red;
  }
}
```

---

## Eng katta foyda:

- scoped styling
- clean architecture
- component isolation
- CSS conflict yo‘q

---
