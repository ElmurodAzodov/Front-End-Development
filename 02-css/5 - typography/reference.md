# **Typography**

<br>
<br>

## 🔤 Font Properties (CSS Typography)

---

### 🧩 `font-family`

Matndagi shrift turini belgilaydi. Bir nechta variant beriladi — brauzer mavjudini tanlaydi.

**Turlari:**

- 🖥️ _System fonts_: `Arial`, `Times New Roman`
- 🌐 _Web fonts_: `Roboto`, `Open Sans`

**Sintaksis:**

```css
body {
  font-family: "Roboto", Arial, sans-serif;
}
```

**Izoh:**

- Birinchi shrift ishlamasa, keyingisiga o‘tadi (fallback).
- Oxirida umumiy tur (`serif`, `sans-serif`, `monospace`) bo‘lishi kerak.

---

### 📏 `font-size`

Matn o‘lchamini belgilaydi.

**Birliklar:**

- `px` – aniq (fixed)
- `rem` – root (`html`) ga bog‘liq
- `em` – parent elementga bog‘liq
- `clamp()` – moslashuvchan (responsive)

**Misollar:**

```css
p {
  font-size: 16px;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: clamp(1.5rem, 2vw, 3rem);
}
```

**Izoh:**

- `rem` — responsive dizayn uchun eng yaxshi.
- `clamp(min, ideal, max)` — ekran o‘lchamiga moslashadi.

---

### ⚖️ `font-weight`

Matn qalinligini belgilaydi.

**Qiymatlar:**

- 🔢 `100–900` (100 — juda yupqa, 900 — juda qalin)
- 🔤 `normal` = 400
- 🔤 `bold` = 700

**Misol:**

```css
p {
  font-weight: 400;
}
strong {
  font-weight: bold;
}
h1 {
  font-weight: 700;
}
```

**Izoh:**

- Hamma shriftlar barcha weightlarni qo‘llab-quvvatlamaydi.
- Variable fontlarda barcha qiymatlar mavjud bo‘lishi mumkin.

---

### 🎭 `font-style`

Matn uslubini belgilaydi.

**Qiymatlar:**

- `normal`
- `italic`
- `oblique`

**Misol:**

```css
p {
  font-style: italic;
}
```

---

### 🔠 `font-variant`

Matn variantlarini boshqaradi.

**Ko‘p ishlatiladigani:**

- `small-caps` — kichik harflar katta ko‘rinishda chiqadi

**Misol:**

```css
p {
  font-variant: small-caps;
}
```

---

### ⚡ `font` (Shorthand)

Barcha font xususiyatlarini bitta qatorda yozish.

**Tartib (muhim!):**

```
font: [style] [variant] [weight] [size/line-height] [family];
```

**Misol:**

```css
p {
  font:
    italic small-caps 700 16px/1.5 "Roboto",
    sans-serif;
}
```

**Majburiy:**

- `font-size`
- `font-family`

**Izoh:**

- Qolganlari ixtiyoriy.
- Tartib noto‘g‘ri bo‘lsa ishlamaydi.

---

<br>
<br>
<br>
<br>
<br>

## 📝 Text Properties (CSS Typography)

---

### 🎨 `color`

Matn rangini belgilaydi.

**Qiymatlar:**

- 🎯 Rang nomlari: `red`, `blue`
- 🎯 HEX: `#ff0000`
- 🎯 RGB: `rgb(255, 0, 0)`
- 🎯 HSL: `hsl(0, 100%, 50%)`

**Misol:**

```css
p {
  color: #333;
}
```

---

### 📐 `text-align`

Matnni gorizontal tekislaydi.

**Qiymatlar:**

- `left` (default)
- `right`
- `center`
- `justify` (ikki tomondan tekis)

**Misol:**

```css
p {
  text-align: center;
}
```

---

### ✏️ `text-decoration`

Matnga chiziqlar qo‘shadi.

**Asosiy qiymatlar:**

- `none`
- `underline`
- `overline`
- `line-through`

**Qo‘shimcha xususiyatlar:**

- `text-decoration-thickness` – chiziq qalinligi
- `text-underline-offset` – chiziq masofasi

**Misol:**

```css
a {
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 4px;
}
```

---

### 🔠 `text-transform`

Matn harflarini o‘zgartiradi.

**Qiymatlar:**

- `uppercase` – HAMMASI KATTA
- `lowercase` – hammasi kichik
- `capitalize` – Har So‘z Bosh Harfi Katta

**Misol:**

```css
h1 {
  text-transform: uppercase;
}
```

---

### ➡️ `text-indent`

Matnning birinchi qatorini ichkariga suradi.

**Misol:**

```css
p {
  text-indent: 30px;
}
```

---

### 🔤 `letter-spacing`

Harflar orasidagi masofa.

**Misol:**

```css
p {
  letter-spacing: 2px;
}
```

---

### 🔡 `word-spacing`

So‘zlar orasidagi masofa.

**Misol:**

```css
p {
  word-spacing: 5px;
}
```

---

### 📏 `line-height`

Qatorlar orasidagi masofa.

**Qiymatlar:**

- son (`1.5`) – tavsiya etiladi
- px (`20px`)

**Misol:**

```css
p {
  line-height: 1.6;
}
```

**Izoh:**

- O‘qilishi oson bo‘lishi uchun odatda `1.4 – 1.8`

---

### ⛔ `white-space`

Matndagi bo‘sh joy va satrlarni boshqaradi.

**Qiymatlar:**

- `normal` – default
- `nowrap` – bitta qatorda
- `pre` – formatni saqlaydi
- `pre-wrap` – format + wrap

**Misol:**

```css
p {
  white-space: nowrap;
}
```

---

### 🔪 `word-break`

So‘zlarni qayerda bo‘lishni boshqaradi.

**Qiymatlar:**

- `normal`
- `break-all` – istalgan joyda bo‘ladi
- `keep-all` – bo‘linmaydi

**Misol:**

```css
p {
  word-break: break-all;
}
```

---

### 🔄 `overflow-wrap` (oldin: word-wrap)

Uzun so‘zlarni qatorga sig‘diradi.

**Qiymatlar:**

- `normal`
- `break-word`

**Misol:**

```css
p {
  overflow-wrap: break-word;
}
```

---

### ➗ `hyphens`

So‘zlarni tire (`-`) bilan bo‘lishni boshqaradi.

**Qiymatlar:**

- `none`
- `manual`
- `auto`

**Misol:**

```css
p {
  hyphens: auto;
}
```

---

<br>
<br>
<br>
<br>
<br>

## 🌐 Web Fonts (CSS Typography)

---

### 🧩 `@font-face`

Custom (o‘zingiz yuklagan) shriftlarni ishlatish uchun ishlatiladi.

**Sintaksis:**

```css id="m7k3xz"
@font-face {
  font-family: "MyFont";
  src:
    url("fonts/myfont.woff2") format("woff2"),
    url("fonts/myfont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
```

**Qo‘llash:**

```css id="o7q8rt"
body {
  font-family: "MyFont", sans-serif;
}
```

**Izoh:**

- `font-family` — nom beriladi (o‘zingiz xohlagan).
- `src` — font fayl manzili.
- Bir nechta format berish — browser moslashuvi uchun.

---

### 🔎 Google Fonts (Performance)

Internet orqali tayyor shriftlarni ulash.

**Ulash (HTML orqali):**

```html id="j1kp8c"
<link
  href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

**CSS:**

```css id="d6e0n1"
body {
  font-family: "Roboto", sans-serif;
}
```

**Performance tavsiyalar:**

- ⚡ Faqat kerakli `font-weight`larni yuklang
- ⚡ `display=swap` ishlating
- ⚡ Ortiqcha fontlardan foydalanmang

---

### 📦 Font Formats

Shrift fayl formatlari.

**Asosiylari:**

- 🥇 `WOFF2` — eng tez, eng kichik (tavsiya etiladi)
- 🥈 `WOFF` — eski browserlar uchun
- 🥉 `TTF` — katta hajm, kam tavsiya

**Misol:**

```css id="8n2b3p"
src:
  url("font.woff2") format("woff2"),
  url("font.woff") format("woff");
```

---

### 🎚️ Variable Fonts

Bitta font faylda ko‘p variant (weight, width va boshqalar).

**Afzalliklari:**

- ⚡ Kamroq fayl yuklanadi
- 🎯 Moslashuvchan dizayn

**Misol:**

```css id="c2y8s4"
body {
  font-family: "Inter", sans-serif;
  font-weight: 100 900;
}
```

**Izoh:**

- `100–900` oralig‘ida istalgan qiymat ishlatish mumkin.
- Faqat variable fontlar qo‘llab-quvvatlaydi.

---

### ⏳ `font-display`

Font yuklanish vaqtida qanday ko‘rinishini boshqaradi.

**Qiymatlar:**

- `swap` — fallback font chiqadi, keyin almashtiradi ✅
- `fallback` — qisqa kutadi, keyin fallback
- `optional` — yuklanmasa ham muammo emas
- `block` — kutadi (FOIT muammo)

**Misol:**

```css id="zz1x9q"
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2");
  font-display: swap;
}
```

---

<br>
<br>
<br>
<br>
<br>

## 📜 Text Effects (CSS Typography)

---

### 🌫️ `text-shadow`

Matnga soya (shadow) qo‘shadi.

**Sintaksis:**

```css id="r4v9mz"
text-shadow: x-offset y-offset blur color;
```

**Misol:**

```css id="w8j2ka"
h1 {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}
```

**Izoh:**

- `x-offset` → gorizontal siljish
- `y-offset` → vertikal siljish
- `blur` → yumshoqlik
- `color` → soya rangi

**Ko‘p soya:**

```css id="9n2s0x"
h1 {
  text-shadow:
    1px 1px 2px black,
    0 0 10px gray;
}
```

---

### ✂️ `text-overflow`

Sig‘magan matnni qanday ko‘rsatishni belgilaydi.

**Qiymatlar:**

- `clip` — kesadi
- `ellipsis` — `...` qo‘yadi

**Misol:**

```css id="7h3d1q"
p {
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

**Izoh:**

- Ishlashi uchun:
  - `overflow: hidden`
  - `white-space: nowrap` bo‘lishi shart

---

### 🔄 `direction`

Matn yo‘nalishini belgilaydi.

**Qiymatlar:**

- `ltr` — chapdan o‘ngga (default)
- `rtl` — o‘ngdan chapga (arab, hebrew)

**Misol:**

```css id="j5m1pt"
p {
  direction: rtl;
}
```

---

### 🧠 `unicode-bidi`

Matn ichida turli yo‘nalishlarni boshqaradi.

**Ko‘p ishlatiladigan:**

- `normal`
- `embed`
- `bidi-override`

**Misol:**

```css id="6c9g2y"
p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

**Izoh:**

- Murakkab tillar aralashganda ishlatiladi.

---

### 🔃 `writing-mode`

Matn yozilish yo‘nalishini o‘zgartiradi.

**Qiymatlar:**

- `horizontal-tb` — oddiy (default)
- `vertical-rl` — yuqoridan past, o‘ngdan chap
- `vertical-lr` — yuqoridan past, chapdan o‘ng

**Misol:**

```css id="k3z8w1"
p {
  writing-mode: vertical-rl;
}
```

---
