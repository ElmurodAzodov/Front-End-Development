# **Unites and Sizing**

## 📐 Absolute Units (CSS Units & Sizing)

Absolute birliklar — **doimiy (fixed)** o‘lchamlar bo‘lib, ular boshqa elementlarga yoki ekran o‘lchamiga bog‘liq emas.

---

### 🔲 `px` (pixels)

Eng ko‘p ishlatiladigan birlik.

**Ta’rif:**

- 1px — ekrandagi bitta nuqta (pixel)

**Misol:**

```css id="k1z8px"
p {
  font-size: 16px;
}
```

**Afzalliklari:**

- 🎯 Aniq va nazorat oson
- 🎯 Har doim bir xil ko‘rinadi

**Kamchiligi:**

- ❌ Responsive emas (ekranga moslashmaydi)

---

### 📏 `cm`, `mm`, `in`

Real hayot o‘lchov birliklari.

**Qiymatlar:**

- `cm` — santimetr
- `mm` — millimetr
- `in` — dyuym (1in = 2.54cm)

**Misol:**

```css id="n4q2cm"
div {
  width: 5cm;
  height: 20mm;
}
```

**Izoh:**

- Brauzerda bu birliklar **har doim real o‘lchamga to‘g‘ri kelmasligi mumkin**
- Ko‘proq print (bosma) uchun ishlatiladi

---

### 📰 `pt` (points)

Asosan bosma (print) dizayn uchun.

**Ta’rif:**

- 1pt = 1/72 inch

**Misol:**

```css id="u3pt92"
p {
  font-size: 12pt;
}
```

**Izoh:**

- PDF, print style uchun mos
- Web’da kam ishlatiladi

---

### 📐 `pc` (picas)

Yana bir print birlik.

**Ta’rif:**

- 1pc = 12pt

**Misol:**

```css id="v9pc21"
h1 {
  font-size: 2pc;
}
```

---

<br>
<br>
<br>
<br>
<br>

## 📏 Relative Units (CSS Units & Sizing)

Relative birliklar — **boshqa qiymatlarga bog‘liq** bo‘lgan o‘lchamlar. Responsive dizayn uchun eng muhim.

---

### 📊 `%` (percentage)

Parent (ota element) o‘lchamiga nisbatan ishlaydi.

**Misol:**

```css id="2q9w1e"
div {
  width: 50%;
}
```

**Izoh:**

- `width: 50%` → parentning yarmi
- Ko‘p layoutlarda ishlatiladi

---

### 🔤 `em`

Parent elementning `font-size`iga bog‘liq.

**Misol:**

```css id="em82x1"
div {
  font-size: 20px;
}

p {
  font-size: 2em; /* 40px bo‘ladi */
}
```

**Izoh:**

- Har safar parentga qarab o‘zgaradi
- ❗ Nested elementlarda chalkashlik bo‘lishi mumkin

---

### 🌍 `rem`

Root (`html`) elementga bog‘liq.

**Misol:**

```css id="rem91z"
html {
  font-size: 16px;
}

p {
  font-size: 2rem; /* 32px */
}
```

**Afzallik:**

- 🎯 Barqaror
- 🎯 Responsive dizayn uchun eng yaxshi

---

### 🖥️ `vw`, `vh`

Viewport (ekran) o‘lchamiga bog‘liq.

**Qiymatlar:**

- `1vw` = ekran kengligining 1%
- `1vh` = ekran balandligining 1%

**Misol:**

```css id="vw2k9x"
h1 {
  font-size: 5vw;
}
```

---

### 📱 `dvw`, `dvh` (Dynamic Viewport)

Dynamic viewport (mobil UI o‘zgarishiga moslashadi).

**Misol:**

```css id="dvh8s1"
section {
  height: 100dvh;
}
```

**Izoh:**

- Mobil browser toolbar o‘zgarishini hisobga oladi

---

### 📲 `svw`, `svh` (Small Viewport)

Eng kichik viewport o‘lchamiga asoslanadi.

**Misol:**

```css id="svh7m3"
div {
  height: 100svh;
}
```

---

### 🖥️ `lvw`, `lvh` (Large Viewport)

Eng katta viewport o‘lchamiga asoslanadi.

**Misol:**

```css id="lvh5p0"
div {
  height: 100lvh;
}
```

---

### 🔄 `vmin`, `vmax`

Viewportning kichik yoki katta tomoniga qarab ishlaydi.

**Qiymatlar:**

- `vmin` → kichik tomonga qarab
- `vmax` → katta tomonga qarab

**Misol:**

```css id="vmin2c"
h1 {
  font-size: 10vmin;
}
```

---

### 🔢 `ch`

`0` (nol) belgisi kengligiga teng.

**Misol:**

```css id="ch2k8"
p {
  width: 60ch;
}
```

**Izoh:**

- Matn uzunligini boshqarishda foydali

---

### 🔠 `ex`

`x` harfining balandligiga bog‘liq.

**Misol:**

```css id="ex4h9"
p {
  font-size: 2ex;
}
```

**Izoh:**

- Kam ishlatiladi

---

### 📦 `cqw`, `cqh` (Container Query Units)

Container (ota blok) o‘lchamiga bog‘liq.

**Qiymatlar:**

- `cqw` → container width %
- `cqh` → container height %

**Misol:**

```css id="cqw8t1"
.card {
  width: 50cqw;
}
```

**Izoh:**

- Container queries bilan ishlaydi
- Zamonaviy responsive dizayn uchun

---

<br>
<br>
<br>
<br>
<br>

## 📦 Sizing Properties (CSS Units & Layout)

---

### 📐 `width` / `height`

Elementning **kengligi** va **balandligini** belgilaydi.

**Misol:**

```css id="w1h2x3"
div {
  width: 300px;
  height: 200px;
}
```

**Qiymatlar:**

- `px`, `%`, `rem`, `vw`, va boshqalar

**Izoh:**

- `%` → parentga bog‘liq
- `auto` → default (kontentga qarab)

---

### 🔽 `min-width` / `max-width`

Element kengligining **minimal va maksimal chegaralari**.

**Misol:**

```css id="mw9x1a"
div {
  width: 100%;
  max-width: 1200px;
}
```

**Izoh:**

- Responsive layoutda juda muhim
- `max-width` → element haddan tashqari kattalashib ketmasligini oldini oladi

---

### 🔼 `min-height` / `max-height`

Element balandligining chegaralari.

**Misol:**

```css id="mh3b8c"
div {
  min-height: 100px;
  max-height: 500px;
}
```

**Izoh:**

- `min-height` → kamida shu balandlik bo‘ladi
- `max-height` → undan oshmaydi

---

### 🧮 `aspect-ratio`

Elementning **kenglik/balandlik nisbatini** belgilaydi.

**Sintaksis:**

```css id="ar7n2q"
div {
  aspect-ratio: 16 / 9;
}
```

**Misol:**

```css id="ar9z4k"
.video {
  width: 100%;
  aspect-ratio: 16 / 9;
}
```

**Izoh:**

- Responsive video, image uchun juda foydali
- Height avtomatik hisoblanadi

---

### 📦 `box-sizing`

Element o‘lcham hisoblash usuli.

---

#### 📦 `content-box` (default)

**Faqat content hisoblanadi**

```css id="cb1x9"
div {
  width: 200px;
  padding: 20px;
  border: 10px solid black;
  box-sizing: content-box;
}
```

**Natija:**

- Real width = 200 + 20+20 + 10+10 = **260px**

---

#### 📦 `border-box`

**Hammasi ichiga kiradi (eng muhim)**

```css id="bb8k2"
div {
  width: 200px;
  padding: 20px;
  border: 10px solid black;
  box-sizing: border-box;
}
```

**Natija:**

- Real width = **200px** (padding va border ichida)

---

### 🌍 Global ishlatish (tavsiya etiladi)

```css id="global1"
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

---
