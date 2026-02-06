
# 📚 Module 2: Colors, Backgrounds & Text
---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---

# 🎨 CSS Color Formats

Har bir elementga rang berish uchun CSS’da **bir nechta formatlar** mavjud. Eng mashhurlari:

1. **Hex (Hexadecimal)**
2. **RGB / RGBA**
3. **HSL / HSLA**

---

## 1️⃣ HEX (Hexadecimal)

### 🔹 Nazariya

Hex format — rangni **16-lik sonlar** orqali ifodalaydi.
Struktura: `#RRGGBB`

* `RR` — Qizil (Red) komponenti, 00–FF
* `GG` — Yashil (Green), 00–FF
* `BB` — Ko‘k (Blue), 00–FF

📌 Masalan:

```css
color: #ff0000; /* Qizil */
color: #00ff00; /* Yashil */
color: #0000ff; /* Ko‘k */
color: #ffffff; /* Oq */
color: #000000; /* Qora */
```

### 🔹 Shorthand Hex

Agar har bir komponent **juft raqamli** bo‘lsa, qisqartirish mumkin:

```css
#ff0000 → #f00
#00ff00 → #0f0
#0000ff → #00f
```

---

## 2️⃣ RGB va RGBA

### 🔹 Nazariya

RGB — Red, Green, Blue **0–255 oralig‘idagi qiymatlar** bilan ifodalanadi.

```css
color: rgb(255, 0, 0); /* Qizil */
color: rgb(0, 255, 0); /* Yashil */
color: rgb(0, 0, 255); /* Ko‘k */
```

---

### 🔹 RGBA

RGBA — RGB + Alpha (shaffoflik)

* `alpha` 0 → to‘liq shaffof
* `alpha` 1 → to‘liq opak

```css
color: rgba(255, 0, 0, 0.5); /* yarim shaffof qizil */
```

✅ Foydali: **hover effektlari, overlay, gradientlar** uchun

---

## 3️⃣ HSL va HSLA

### 🔹 Nazariya

HSL — Hue, Saturation, Lightness

* **Hue** — rang spektri (0–360°)
  0° = qizil, 120° = yashil, 240° = ko‘k
* **Saturation** — rang to‘yintirishi (0–100%)
* **Lightness** — yorqinlik (0–100%)

```css
color: hsl(0, 100%, 50%);   /* Qizil */
color: hsl(120, 100%, 50%); /* Yashil */
color: hsl(240, 100%, 50%); /* Ko‘k */
```

### 🔹 HSLA

HSLA — HSL + Alpha (shaffoflik)

```css
color: hsla(240, 100%, 50%, 0.5); /* yarim shaffof ko‘k */
```

✅ Foydali: **dynamic ranglarni oson o‘zgartirish, opacity bilan ishlash**

---

## 4️⃣ Hex vs RGB vs HSL (qisqa taqqoslash)

| Format     | Afzalligi                                                      | Kamchiligi                                        |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------- |
| HEX        | Qisqa, ko‘p ishlatiladi                                        | Opacity yo‘q                                      |
| RGB / RGBA | Shaffoflik, gradientlar bilan oson                             | Ko‘proq yoziladi                                  |
| HSL / HSLA | Ranglarni intuitiv o‘zgartirish oson (yorqinlik, to‘yintirish) | Ko‘pchilik dasturchi boshlanishda qiyin tushunadi |

---

## 5️⃣ Real dizayn misollari

### 🔹 Gradient fon

```css
background: linear-gradient(
  135deg,
  #6a11cb,
  #2575fc
);
```

### 🔹 Shaffof overlay

```css
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
```

### 🔹 Dynamic HSL ranglar

```css
.button:hover {
  background-color: hsl(200, 80%, 50%);
}
```

---

## 6️⃣ Amaliy tavsiyalar (Pro tips)

1. **Hex** — statik ranglar uchun
2. **RGBA / HSLA** — hover, overlay, gradient, animation uchun
3. **HSL** — rangni light/dark versiyasiga oson o‘zgartirish uchun
4. Gradient va hoverlarda **Alpha qiymat** bilan ishlash zarur

---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---
# 🖼 CSS BACKGROUND

Har bir elementga fon berish uchun CSS’da **bir nechta xossalar** mavjud:

1. `background-color`
2. `background-image`
3. `background-position`
4. `background-size`
5. `background-repeat`
6. `background-attachment`

---

## 1️⃣ `background-color` — Fon rangi

### 🔹 Nazariya

Elementning **asosan ko‘zga ko‘ringan fon rangini** belgilaydi.

```css
.box {
  background-color: #3498db; /* Hex */
  /* yoki rgb/rgba, hsl/hsla ham ishlaydi */
}
```

✅ Foydali: matnni o‘qish uchun kontrast yaratish, gradientdan oldin bazaviy rang

---

## 2️⃣ `background-image` — Fon rasmi

### 🔹 Nazariya

Elementga **rasm fon sifatida** qo‘shish uchun ishlatiladi.

```css
.box {
  background-image: url('image.jpg');
}
```

* `url()` ichiga rasm manzili
* Bir nechta rasmni qo‘shish mumkin (comma bilan)

```css
background-image: url('img1.jpg'), url('img2.png');
```

---

## 3️⃣ `background-position` — Rasmdagi pozitsiya

### 🔹 Nazariya

Rasm qayerga joylashishini belgilaydi:

```css
.box {
  background-image: url('image.jpg');
  background-position: center center; /* markazga */
}
```

### 🔹 Qiymatlar:

| Keyword                          | Ma’nosi                    |
| -------------------------------- | -------------------------- |
| top, bottom, left, right, center | oddiy pozitsiya            |
| x% y%                            | foiz bilan joylashuv       |
| px                               | aniq pixel bilan joylashuv |

### 🔹 Misol

```css
background-position: 10px 20px; /* x = 10px, y = 20px */
background-position: right bottom; /* o‘ng pastki burchak */
```

---

## 4️⃣ `background-size` — Rasmdagi o‘lcham

### 🔹 Nazariya

Rasm **qanchalik kattalashishi yoki kichrayishi** belgilanadi.

```css
.box {
  background-image: url('image.jpg');
  background-size: cover;
}
```

### 🔹 Qiymatlar:

| Qiymat     | Ma’nosi                                          |
| ---------- | ------------------------------------------------ |
| auto       | Asl o‘lcham                                      |
| cover      | Elementni to‘liq qoplaydi (crop bo‘lishi mumkin) |
| contain    | Element ichida sig‘adi, deformatsiya yo‘q        |
| 100px 50px | maxsus o‘lcham px bilan                          |

---

## 5️⃣ `background-repeat` — Rasm takrorlanishi

### 🔹 Nazariya

Rasm **element bo‘ylab takrorlanadimi yoki yo‘qmi** belgilaydi.

```css
.box {
  background-image: url('pattern.png');
  background-repeat: no-repeat; /* faqat bir marta */
}
```

### 🔹 Qiymatlar:

| Qiymat    | Tavsif                                       |
| --------- | -------------------------------------------- |
| repeat    | default, gorizontal va vertikal takrorlanadi |
| repeat-x  | faqat gorizontal                             |
| repeat-y  | faqat vertikal                               |
| no-repeat | takrorlanmaydi                               |

---

## 6️⃣ `background-attachment` — Fon statik yoki scroll bilan

### 🔹 Nazariya

Rasm **scroll qilinishiga ta’sir qiladi**:

```css
.box {
  background-image: url('image.jpg');
  background-attachment: fixed; /* statik */
}
```

### 🔹 Qiymatlar:

| Qiymat | Tavsif                             |
| ------ | ---------------------------------- |
| scroll | default, rasm **scroll qilinadi**  |
| fixed  | rasm **ekranda statik qoladi**     |
| local  | scroll content bilan harakatlanadi |

---

## 7️⃣ Shorthand yozuv

Barcha background xossalarini **bir qatorda** yozish mumkin:

```css
.box {
  background: #3498db url('image.jpg') no-repeat center/cover fixed;
}
```

📌 Tartib:
`background-color background-image background-repeat background-position/background-size background-attachment`

---

## 8️⃣ Real dizayn misollari

### 🔹 Hero section

```css
.hero {
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('hero.jpg') center/cover fixed;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
```

### 🔹 Pattern fon

```css
.pattern {
  background-image: url('dots.png');
  background-repeat: repeat;
  background-position: top left;
  background-size: 20px 20px;
}
```

---

## 9️⃣ Eng ko‘p uchraydigan xatolar ❌

❌ `cover` va `contain` ni chalkashtirish
❌ `fixed` fon mobil brauzerda noto‘g‘ri ishlashi
❌ Rasm yo‘qligida `background-color` qo‘ymaslik

---

## 🎯 Xulosa

| Property              | Maqsadi              |
| --------------------- | -------------------- |
| background-color      | Fon rangi            |
| background-image      | Rasmlar fon          |
| background-position   | Rasm pozitsiyasi     |
| background-size       | Rasmlarni o‘lchami   |
| background-repeat     | Rasm takrorlanishi   |
| background-attachment | Scroll bilan harakat |

---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---
# 🎨 CSS GRADIENTS

Gradient — bu **ranglarning asta-sekin o‘zgarishi**, ya’ni **gradient**.

---

## 1️⃣ Linear Gradient (`linear-gradient`)

### 🔹 Nazariya

Ranglar **bir yo‘nalishda** asta-sekin o‘zgaradi.
Yo‘nalish (direction) belgilanadi: vertical, horizontal, diagonal, degree.

```css
background: linear-gradient(direction, color1, color2, ...);
```

---

### 🔹 Direction (yo‘nalish)

| Yo‘nalish | Ta’siri                    |
| --------- | -------------------------- |
| to right  | chapdan o‘ngga             |
| to left   | o‘ngdan chapga             |
| to bottom | yuqoridan pastga (default) |
| to top    | pastdan yuqoriga           |
| deg       | burchak, masalan 45deg     |

---

### 🔹 Misollar

```css
/* Oddiy linear gradient */
background: linear-gradient(to right, #ff0000, #0000ff);

/* Diagonal gradient */
background: linear-gradient(45deg, #ff0000, #ffff00);

/* Ko‘p rangli gradient */
background: linear-gradient(to right, red, orange, yellow, green, blue);
```

---

### 🔹 Real dizayn misol

```css
.hero {
  height: 100vh;
  background: linear-gradient(to bottom right, #6a11cb, #2575fc);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
```

📌 Linear gradient hero sectionlarda **ko‘p ishlatiladi**.

---

## 2️⃣ Radial Gradient (`radial-gradient`)

### 🔹 Nazariya

Ranglar **markazdan tashqi tomonga** tarqaladi.
Shakli: circle (doira) yoki ellipse (ellips).

```css
background: radial-gradient(shape size at position, start-color, ..., last-color);
```

---

### 🔹 Shape (shakl)

| Shakl   | Ta’siri          |
| ------- | ---------------- |
| circle  | markazdan doira  |
| ellipse | markazdan ellips |

---

### 🔹 Size (o‘lcham)

| Qiymat          | Ta’siri                       |
| --------------- | ----------------------------- |
| closest-side    | markazdan eng yaqin tomonga   |
| closest-corner  | markazdan eng yaqin burchakka |
| farthest-side   | markazdan eng uzoq tomonga    |
| farthest-corner | markazdan eng uzoq burchakka  |

---

### 🔹 Position (joylashuv)

```css
background: radial-gradient(circle at center, red, yellow);
background: radial-gradient(circle at top left, red, blue);
```

---

### 🔹 Misollar

```css
/* Oddiy radial gradient */
background: radial-gradient(circle, #ff0000, #0000ff);

/* Elliptical gradient */
background: radial-gradient(ellipse at center, #ff9a9e, #fad0c4);

/* Multiple colors */
background: radial-gradient(circle at center, red, orange, yellow, green);
```

---

### 🔹 Real dizayn misol

```css
.button {
  padding: 1rem 2rem;
  border: none;
  color: white;
  background: radial-gradient(circle at center, #ff6a00, #ee0979);
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s;
}

.button:hover {
  transform: scale(1.05);
}
```

📌 Radial gradientlar **button, cards, icons** dizaynida ko‘p ishlatiladi.

---

## 3️⃣ Linear vs Radial

| Aspect      | Linear                           | Radial                            |
| ----------- | -------------------------------- | --------------------------------- |
| Yo‘nalish   | Horizontal / Vertical / Diagonal | Markazdan tashqi                  |
| Form        | Chiziqli                         | Doira yoki ellips                 |
| Foydalanish | Hero section, background         | Buttons, cards, spotlight effects |

---

## 4️⃣ Gradient + Transparency

RGBA yoki HSLA bilan ishlash mumkin:

```css
background: linear-gradient(to right, rgba(255,0,0,0.5), rgba(0,0,255,0.5));
background: radial-gradient(circle, rgba(255,255,0,0.6), rgba(0,255,0,0));
```

📌 Foydali: overlay, hover effektlar, background layerlar

---

## 5️⃣ Gradient Tips (Pro tricks)

1. Gradientni **fon rasmi bilan birga** ishlatish mumkin:

```css
background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('hero.jpg') center/cover no-repeat;
```

2. **Multiple linear gradients** birlashtirish:

```css
background: linear-gradient(to right, red, yellow), linear-gradient(to bottom, blue, green);
```

3. Gradients **opacity va animation** bilan kombinatsiya qilinadi:

```css
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.hero {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
```

---

## 6️⃣ Eng ko‘p uchraydigan xatolar ❌

❌ Gradientsni ranglarni chalkashtirish
❌ Linear va radial gradientlarni aralashtirib yozish
❌ Overlay bilan ishlashda opacity’ni unutish
❌ Browser compatibility (eski IE gradientni qo‘llab-quvvatlamaydi, lekin hozir deyarli barcha brauzerlarda ishlaydi)

---

✅ Xulosa:

| Property        | Linear                       | Radial                    |
| --------------- | ---------------------------- | ------------------------- |
| Rang o‘zgarishi | Chiziqli                     | Markazdan tashqi          |
| Yo‘nalish       | Degree yoki to top/right/... | Shape + position          |
| Foydalanish     | Hero section, cards          | Buttons, spotlight, cards |
| Transparency    | RGBA, HSLA bilan             | RGBA, HSLA bilan          |

---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---

# 📝 CSS TEXT STYLING

Text styling — bu matnning **pozitsiyasi, o‘lchami, oralig‘i, dekoratsiyasi va ko‘rinishi**ni boshqarish uchun ishlatiladi.

---

## 1️⃣ `text-align` — Matnni gorizontal tekislash

### 🔹 Nazariya

Matn yoki inline elementlarni **ota konteyner bo‘yicha gorizontal markazlash**.

```css
p {
  text-align: left;   /* default */
  text-align: center; /* markazga */
  text-align: right;  /* o‘ngga */
  text-align: justify; /* har bir qator kengayadi */
}
```

### 🔹 Misol

```css
h1 {
  text-align: center;
}
```

✅ Foydali: headings, hero section, button text

---

## 2️⃣ `line-height` — Qator balandligi

### 🔹 Nazariya

Qatorlar orasidagi **vertikal masofa**.
Unit: number (multipler), px, em, rem

```css
p {
  line-height: 1.6;  /* multipler, font-size ga nisbatan */
  line-height: 24px; /* absolute */
}
```

### 🔹 Misol

```css
p {
  font-size: 16px;
  line-height: 1.5; /* 16px * 1.5 = 24px qator balandligi */
}
```

✅ Foydali: matn o‘qilishi uchun, readability

---

## 3️⃣ `letter-spacing` — Harflar orasidagi masofa

### 🔹 Nazariya

Harflar orasidagi **gorizontal bo‘shliq**ni oshirish yoki kamaytirish

```css
h1 {
  letter-spacing: 2px;   /* harflar orasini kengaytiradi */
}
h2 {
  letter-spacing: -1px;  /* harflar orasini siqadi */
}
```

✅ Foydali: headings, logo, button text, typographic design

---

## 4️⃣ `word-spacing` — So‘zlar orasidagi masofa

### 🔹 Nazariya

So‘zlar orasidagi **bo‘shliqni boshqaradi**

```css
p {
  word-spacing: 5px;  /* so‘zlar orasini kengaytiradi */
}
```

✅ Foydali: paragraph readability, justified text, typographic adjustments

---

## 5️⃣ `text-transform` — Matnni bosh harf / kichik harf / kapitalizatsiya qilish

### 🔹 Nazariya

```css
p {
  text-transform: none;       /* default */
  text-transform: uppercase;  /* hamma harflar katta */
  text-transform: lowercase;  /* hamma harflar kichik */
  text-transform: capitalize; /* har bir so‘zning bosh harfi katta */
}
```

### 🔹 Misol

```css
h1 {
  text-transform: uppercase;
}
```

✅ Foydali: headings, buttons, navigation links

---

## 6️⃣ `text-decoration` — Matnga dekor berish

### 🔹 Nazariya

Matnga **chiziqlar yoki boshqa dekorlar** qo‘shish

```css
a {
  text-decoration: none;        /* chiziq olib tashlash */
  text-decoration: underline;   /* pastki chiziq */
  text-decoration: overline;    /* yuqori chiziq */
  text-decoration: line-through; /* chiziq o‘rtadan */
}
```

### 🔹 Advanced CSS3 syntax

```css
p {
  text-decoration: underline wavy red; /* chiziq tipi va rangi */
}
```

✅ Foydali: links, headings, emphasis, typographic design

---

## 7️⃣ Real dizayn misollar

### 🔹 Hero heading

```css
.hero h1 {
  text-align: center;
  line-height: 1.2;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: underline wavy yellow;
}
```

### 🔹 Paragraph

```css
p {
  line-height: 1.6;
  word-spacing: 4px;
  letter-spacing: 0.5px;
  text-align: justify;
}
```

### 🔹 Button text

```css
button {
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
}
```

---

## 8️⃣ Eng ko‘p uchraydigan xatolar ❌

1. Line-height va font-size mos kelmasligi → readability buziladi
2. Text-align justify bilan small paragraph ishlatish → g‘alati bo‘shliq
3. Letter-spacing va word-spacing noto‘g‘ri ishlatilsa → matn o‘qilishi qiyin bo‘ladi
4. text-decoration default link underline’ni o‘chirmaslik

---

## 🎯 Xulosa

| Property        | Maqsadi                              | Foydali joyi                      |
| --------------- | ------------------------------------ | --------------------------------- |
| text-align      | Matnni gorizontal tekislash          | headings, hero section, buttons   |
| line-height     | Qator balandligi                     | paragraphs, readability           |
| letter-spacing  | Harflar orasidagi masofa             | headings, typographic emphasis    |
| word-spacing    | So‘zlar orasidagi masofa             | justified text, paragraph styling |
| text-transform  | Matnning case’ini o‘zgartirish       | headings, buttons, nav links      |
| text-decoration | Matnga chiziqlar yoki dekor qo‘shish | links, emphasis, headings         |

---

---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---
# 📚 MODULE 3: Borders, Box Model & Sizing
---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---

# 🔷 CSS BORDERS (Chegaralar)

**Border** — bu HTML elementning atrofiga chiziladigan **chegara chizig‘i**.

📦 Box model ichida border **padding va margin orasida** joylashadi.

---

## 1️⃣ Border’ning asosiy qismlari

Border 3 ta asosiy xususiyatdan iborat:

```
border = width + style + color
```

```css
border: 2px solid red;
```

👉 Agar **style bo‘lmasa**, border **umuman ko‘rinmaydi** (eng muhim qoida).

---

## 2️⃣ Border-width (Qalinligi)

Border chizig‘ining **qalinligini** belgilaydi.

### 🔹 Qiymatlar:

| Qiymat   | Izoh                 |
| -------- | -------------------- |
| `px`     | Eng ko‘p ishlatiladi |
| `thin`   | Yupqa                |
| `medium` | O‘rtacha (default)   |
| `thick`  | Qalin                |

### 🔹 Misollar:

```css
border-width: 1px;
border-width: 5px;
border-width: thick;
```

### 🔹 Har tomonga alohida:

```css
border-top-width: 4px;
border-right-width: 2px;
border-bottom-width: 6px;
border-left-width: 1px;
```

---

## 3️⃣ Border-style (Chegara turi)

Bu **borderning eng muhim qismi**, chunki **style bo‘lmasa — border yo‘q**.

### 🔹 Eng ko‘p ishlatiladigan style’lar:

---

### 🔸 `solid`

Oddiy, uzluksiz chiziq

```css
border: 2px solid black;
```

📌 Eng ko‘p ishlatiladigan turi

---

### 🔸 `dashed`

Uzilgan chiziq

```css
border: 2px dashed red;
```

📌 Ko‘pincha formalar yoki ajratish uchun

---

### 🔸 `dotted`

Nuqtali chiziq

```css
border: 2px dotted blue;
```

---

### 🔸 `double`

Ikki qatorli chiziq

```css
border: 4px double green;
```

---

### 🔸 `groove`

3D ko‘rinishda **ichkariga botgandek**

```css
border: 6px groove gray;
```

📌 Rangga bog‘liq holda 3D effekt beradi

---

### 🔸 `ridge`

`groove` ning aksi — **tashqariga chiqqandek**

```css
border: 6px ridge gray;
```

---

### 🔸 `inset`

Element **ichkariga bosilgandek** ko‘rinadi

```css
border: 5px inset #999;
```

---

### 🔸 `outset`

`inset` ga teskari — **ko‘tarilgan tugma** kabi

```css
border: 5px outset #999;
```

---

### 🔸 `none` / `hidden`

Border yo‘q

```css
border: none;
```

---

## 4️⃣ Border-color (Rangi)

Border rangini belgilaydi.

### 🔹 Rang berish usullari:

```css
border-color: red;
border-color: #ff0000;
border-color: rgb(255, 0, 0);
border-color: hsl(0, 100%, 50%);
```

---

### 🔹 Har tomonga alohida rang:

```css
border-color: red green blue black;
```

👉 Tartibi:

```
top → right → bottom → left
```

---

## 5️⃣ Har tomonga alohida border berish

```css
border-top: 2px solid red;
border-right: 3px dashed green;
border-bottom: 4px groove blue;
border-left: 5px outset black;
```

📌 Juda foydali dizaynda

---

## 6️⃣ Border qisqa yozuvi (shorthand)

```css
border: 3px solid #3498db;
```

Bu quyidagiga teng:

```css
border-width: 3px;
border-style: solid;
border-color: #3498db;
```

---

## 7️⃣ Muhim eslatmalar ⚠️

✅ `border-style` bo‘lmasa — **border ko‘rinmaydi**
✅ `groove`, `ridge`, `inset`, `outset` rangga bog‘liq
✅ Juda katta border `box` o‘lchamiga ta’sir qiladi
✅ `border` box model’ning bir qismi

---

## 8️⃣ Real amaliy misol

```css
.card {
  width: 300px;
  padding: 20px;
  border: 4px ridge #2ecc71;
  background: #f9f9f9;
}
```
---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---
# 🔵 CSS `border-radius`
## 1️⃣ `border-radius` nima?

`border-radius` — bu CSS xossasi bo‘lib, **elementning burchaklarini yumaloqlash** uchun ishlatiladi.

📦 Oddiy qilib aytganda:

> **To‘g‘ri burchak → yumaloq burchak**

---

## 2️⃣ Qanday ishlaydi? (Nazariya)

Har bir HTML element 4 ta burchakka ega:

* Yuqori chap (top-left)
* Yuqori o‘ng (top-right)
* Pastki o‘ng (bottom-right)
* Pastki chap (bottom-left)

`border-radius` **har bir burchakka radius (aylana yoyini)** qo‘llaydi.

👉 Radius **qanchalik katta bo‘lsa**, burchak **shunchalik yumaloq bo‘ladi**.

---

## 3️⃣ Eng oddiy ishlatilishi

```css
.box {
  border-radius: 10px;
}
```

📌 Barcha 4 ta burchak **bir xil** yumaloqlanadi.

---

## 4️⃣ O‘lchov birliklari bilan ishlash

### 🔹 `px` (piksel)

Aniq va barqaror

```css
border-radius: 15px;
```

---

### 🔹 `%` (foiz)

Element o‘lchamiga bog‘liq

```css
border-radius: 50%;
```

📌 Agar element **kvadrat** bo‘lsa → **doira (circle)** bo‘ladi
📌 Agar **to‘g‘ri to‘rtburchak** bo‘lsa → **oval**

---

## 5️⃣ Aylana (Circle) va Tugma (Button)

### 🔵 Aylana yasash:

```css
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```

---

### 🔘 Tugma yasash:

```css
.button {
  padding: 12px 30px;
  border-radius: 25px;
}
```

---

## 6️⃣ Har burchakka alohida radius berish

### 🔹 4 ta qiymat bilan:

```css
border-radius: 10px 20px 30px 40px;
```

👉 Tartibi:

```
top-left → top-right → bottom-right → bottom-left
```

---

### 🔹 2 ta qiymat bilan:

```css
border-radius: 10px 30px;
```

👉 Ma’nosi:

* top-left & bottom-right → 10px
* top-right & bottom-left → 30px

---

### 🔹 3 ta qiymat bilan:

```css
border-radius: 10px 20px 30px;
```

---

## 7️⃣ Alohida xossalar (professional usul)

```css
border-top-left-radius: 20px;
border-top-right-radius: 5px;
border-bottom-right-radius: 30px;
border-bottom-left-radius: 0;
```

📌 Dizaynda juda ko‘p ishlatiladi

---

## 8️⃣ Elliptik radius (KENGAYTIRILGAN NAZARIYA) ⚙️

`border-radius` faqat doira emas, **ellips** ham bo‘lishi mumkin.

```css
border-radius: 50px / 20px;
```

👉 Bu yerda:

* gorizontal radius → 50px
* vertikal radius → 20px

📌 Juda murakkab dizaynlarda ishlatiladi

---

## 9️⃣ Border-radius va border o‘zaro bog‘liqligi

```css
.box {
  border: 5px solid blue;
  border-radius: 20px;
}
```

👉 Border ham **yumaloq shaklga moslashadi**

---

## 🔟 Real UI dizayn misollari

### 🔹 Card dizayn:

```css
.card {
  width: 300px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
```

---

### 🔹 Image radius:

```css
img {
  border-radius: 10px;
}
```

---

## 1️⃣1️⃣ Keng tarqalgan xatolar ❌

❌ Juda katta radius → dizayn buziladi
❌ `%` ni noto‘g‘ri ishlatish
❌ `box-sizing` ni hisobga olmaslik

---

## 1️⃣2️⃣ Muhim tavsiyalar (BEST PRACTICE)

✅ Tugmalar: `20–30px`
✅ Card’lar: `8–16px`
✅ Aylana: `50%`
✅ Modern UI’da **yumaloq burchaklar juda muhim**

---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---
# 📦 CSS BOX MODEL
## 0️⃣ Eng muhim fikr (BUNI YODLAB OLING)

👉 **HTML’dagi har bir element — bu quti (BOX)**
👉 Bu quti **4 qismdan iborat**:

```
CONTENT → PADDING → BORDER → MARGIN
```

Bu tartib **HECH QACHON o‘zgarmaydi**.

---

# 1️⃣ CONTENT (ASOSIY MAZMUN) — ENG ICHKI QISM

## 📌 Content nima?

**Content** — element ichidagi:

* matn
* rasm
* video
* input
* boshqa elementlar

```html
<div class="box">Salom Dunyo</div>
```

Bu yerda **"Salom Dunyo" — content**.

---

## 📐 Content o‘lchami qanday belgilanadi?

```css
.box {
  width: 200px;
  height: 100px;
}
```

👉 `width` va `height` **DEFAULT holatda FAQAT CONTENT’ga tegishli**

---

## ⚠️ Muhim nuqta

❗ Agar `box-sizing: content-box` bo‘lsa (default):

* width = content
* padding va border **tashqaridan qo‘shiladi**

---

## 📌 Content nimaga bog‘liq?

Content hajmi quyidagilarga bog‘liq bo‘lishi mumkin:

* `width`, `height`
* matn uzunligi
* rasm o‘lchami
* `font-size`, `line-height`

---

# 2️⃣ PADDING (ICHKI BO‘SHLIQ) — CONTENTNI NAFAS OLDIRADI

## 📌 Padding nima?

**Padding** — content bilan border orasidagi **ICHKI masofa**.

📦 Vizual:

```
Border
  Padding
    Content
```

---

## ✍️ Padding yozilishi

### 🔹 Bitta qiymat:

```css
padding: 20px;
```

👉 4 tomonga bir xil

---

### 🔹 2 ta qiymat:

```css
padding: 10px 20px;
```

* top & bottom → 10px
* left & right → 20px

---

### 🔹 3 ta qiymat:

```css
padding: 10px 20px 30px;
```

* top → 10
* left & right → 20
* bottom → 30

---

### 🔹 4 ta qiymat:

```css
padding: 10px 20px 30px 40px;
```

📌 Soat strelkasi bo‘yicha:

```
top → right → bottom → left
```

---

## 🎨 Padding va background

⚠️ **BACKGROUND padding ichigacha bo‘yaladi**

```css
.box {
  background: yellow;
  padding: 20px;
}
```

👉 Sariq rang content + padding’ni qoplaydi

---

## ⚠️ Padding bilan bog‘liq xatolar

❌ Padding tashqi masofa deb o‘ylash
❌ Padding fon rangiga ta’sir qilmaydi deb o‘ylash

---

# 3️⃣ BORDER (CHEGARA) — QUTI RAMKASI

## 📌 Border nima?

**Border** — padding bilan margin orasidagi **CHEGARA CHIZIG‘I**.

---

## 🧱 Border tarkibi

Border **3 qismdan iborat**:

```
border-width
border-style
border-color
```

```css
border: 3px solid black;
```

---

## 📐 Border o‘lchamga ta’siri

Agar:

```css
width: 200px;
padding: 20px;
border: 5px solid black;
```

👉 Haqiqiy kenglik:

```
200 + 40 + 10 = 250px
```

---

## ⚠️ Muhim

❗ Border **background rangini olmaydi**
❗ Border radius bilan birga ishlaydi
❗ Border box model’ning MUHIM qismi

---

# 4️⃣ MARGIN (TASHQI BO‘SHLIQ) — ELEMENTLAR ORASIDAGI MASOFA

## 📌 Margin nima?

**Margin** — element bilan boshqa element orasidagi **TASHQI masofa**.

---

## ✍️ Margin yozilishi

```css
margin: 30px;
```

Yoki:

```css
margin: 10px 20px 30px 40px;
```

---

## 🎯 Markazga joylash (eng mashhur usul)

```css
.box {
  width: 300px;
  margin: 0 auto;
}
```

👉 Faqat **block elementlarda ishlaydi**

---

## 🚨 Margin Collapsing (JUDA MUHIM NAZARIYA)

### 📌 Margin collapsing nima?

**Vertical marginlar qo‘shilmaydi, balki birlashadi**.

```css
div1 { margin-bottom: 40px; }
div2 { margin-top: 30px; }
```

👉 Natija:

```
40px (emas 70px!)
```

📌 Bu faqat:

* top & bottom
* block elementlarda

---

## ❌ Margin bilan qilinadigan xatolar

❌ Padding o‘rniga margin ishlatish
❌ Margin fon rangini oladi deb o‘ylash

---

# 5️⃣ BOX MODEL O‘LCHAMI — TO‘LIQ HISOB

## 🧮 Umumiy formulasi:

```
Total width =
content
+ padding-left + padding-right
+ border-left + border-right
```

Margin **tashqi**, hisobga kirmaydi.

---

# 6️⃣ box-sizing — BOX MODELNI BOSHQARISH

## 🔹 Default:

```css
box-sizing: content-box;
```

👉 width = faqat content

---

## ✅ Professional usul:

```css
box-sizing: border-box;
```

👉 width = content + padding + border

📌 **BARCHA PROYEKTLARDA SHU ISHLATILADI**:

```css
* {
  box-sizing: border-box;
}
```

---

# 7️⃣ REAL DIZAYN MISOLI (PRO LEVEL)

```css
.card {
  width: 320px;
  padding: 20px;
  border: 1px solid #ddd;
  margin: 40px auto;
  border-radius: 12px;
  box-sizing: border-box;
}
```

👉 Kenglik buzilmaydi
👉 Dizayn toza
👉 Responsive’ga tayyor

---

# 8️⃣ ENG KO‘P UCHRAYDIGAN INTERVYU SAVOLLARI

❓ Margin va padding farqi?
❓ box-sizing nima qiladi?
❓ Nima uchun width noto‘g‘ri chiqadi?
❓ Margin collapsing nima?

---

# 🎯 YAKUNIY XULOSA (OLTIN QOIDA)

| Qism       | Vazifasi           |
| ---------- | ------------------ |
| Content    | Asosiy mazmun      |
| Padding    | Ichki bo‘shliq     |
| Border     | Chegara            |
| Margin     | Tashqi masofa      |
| box-sizing | Hisobni boshqaradi |

---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---

# 📦 CSS `box-sizing`

## 1️⃣ `box-sizing` nima? (ASOSIY NAZARIYA)

`box-sizing` — bu CSS xossasi bo‘lib, **`width` va `height` qaysi qismlarni o‘z ichiga olishini** belgilaydi.

👉 Ya’ni:

> **Elementning haqiqiy o‘lchami qanday hisoblanadi?**

---

## 2️⃣ Box model bilan bog‘liqligi

Eslab o‘tamiz, box model 4 qismdan iborat:

```
CONTENT → PADDING → BORDER → MARGIN
```

❗ **Margin** hech qachon `width` yoki `height` ichiga kirmaydi.

---

## 3️⃣ `box-sizing` ning turlari

CSS’da **faqat 2 ta asosiy qiymat** bor:

| Qiymat        | Tavsif             |
| ------------- | ------------------ |
| `content-box` | Default (standart) |
| `border-box`  | Tavsiya etiladi    |

---

# 4️⃣ `content-box` (DEFAULT HOLAT)

## 📌 Qanday ishlaydi?

```css
.box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

### 🧮 Hisob-kitob:

```
Content = 200px
Padding = 20px + 20px = 40px
Border  = 5px + 5px = 10px
--------------------------------
HAQIQIY KENGLIK = 250px
```

👉 `width` faqat **content** uchun
👉 Padding va border **tashqaridan qo‘shiladi**

---

## ❌ Muammolari

❌ Dizayn buziladi
❌ Responsive qilish qiyin
❌ Grid / flex’da width to‘g‘ri kelmaydi

📌 Shu sababli professional loyihalarda **kam ishlatiladi**

---

# 5️⃣ `border-box` (PROFESSIONAL USUL)

## 📌 Qanday ishlaydi?

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}
```

### 🧮 Hisob-kitob:

```
Umumiy kenglik = 200px (O‘ZGARMAYDI)
```

👉 Content **kichrayadi**, lekin element tashqi o‘lchami saqlanadi
👉 Padding va border width ichiga SIQILADI

---

## ✅ Afzalliklari

✅ Dizayn buzilmaydi
✅ Responsive juda oson
✅ Flex va Grid’da ideal
✅ Real loyihalarda STANDART

---

# 6️⃣ Vizual solishtirish (MUHIM)

| Xususiyat              | content-box        | border-box                 |
| ---------------------- | ------------------ | -------------------------- |
| Width nimani o‘lchaydi | Faqat content      | Content + padding + border |
| Padding ta’siri        | O‘lchamni oshiradi | Ichidan joy oladi          |
| Professional loyiha    | ❌                  | ✅                          |

---

# 7️⃣ Global qilib berish (ENG MUHIM QOIDA) ⭐

📌 **Har bir professional loyiha shundan boshlanadi**:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

👉 Pseudo-elementlar ham hisobga olinadi
👉 100% barqaror dizayn

---

# 8️⃣ Real amaliy misollar

## 🔹 Card dizayn

```css
.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}
```

👉 Kenglik HECH QACHON oshmaydi

---

## 🔹 Form input muammosi (ENG KO‘P UCHRAYDI)

```css
input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}
```

👉 Input tashqariga chiqib ketmaydi

---

## 🔹 Flex’da muammo yechimi

```css
.item {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
}
```

---

# 9️⃣ box-sizing va % (foiz) bilan ishlash

```css
.box {
  width: 50%;
  padding: 20px;
  box-sizing: border-box;
}
```

👉 Element ota konteynerdan chiqib ketmaydi

---

# 🔟 Eng ko‘p uchraydigan xatolar ❌

❌ `box-sizing` qo‘ymaslik
❌ Faqat ayrim elementlarga qo‘llash
❌ Input’larda unutish

---

# 1️⃣1️⃣ Interview savollari

❓ box-sizing nima qiladi?
❓ content-box va border-box farqi?
❓ Nima uchun global beriladi?
❓ Margin nima uchun hisobga kirmaydi?

---

# 🎯 YAKUNIY XULOSA (OLTIN QOIDA)

> 🔥 **Har doim `box-sizing: border-box;` ishlating**

| Qiymat      | Qachon      |
| ----------- | ----------- |
| content-box | Juda kam    |
| border-box  | 99% holatda |

---
🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴🔴
---
# 📐 CSS O‘LCHAMLAR — 100% TO‘LIQ QO‘LLANMA

---

## 1️⃣ `width` va `height` — ASOSIY O‘LCHAMLAR

### 📌 `width`

Elementning **kengligini** belgilaydi.

```css
.box {
  width: 300px;
}
```

### 📌 `height`

Elementning **balandligini** belgilaydi.

```css
.box {
  height: 150px;
}
```

---

### ⚠️ MUHIM NAZARIYA

👉 `width` va `height` **nima o‘lchanishini**:

* `box-sizing: content-box` → faqat content
* `box-sizing: border-box` → content + padding + border

---

### ❗ Qachon ishlamasligi mumkin?

* `inline` elementlarda (`span`, `a`)
  ➜ `display: inline-block` qilish kerak

```css
span {
  display: inline-block;
  width: 100px;
}
```

---

## 2️⃣ `min-width` va `max-width` — CHEGARALASH

### 📌 `min-width`

Minimal kenglikni belgilaydi
👉 undan kichraymaydi

```css
.box {
  width: 50%;
  min-width: 200px;
}
```

---

### 📌 `max-width`

Maksimal kenglikni belgilaydi
👉 undan kattalashmaydi

```css
.box {
  width: 100%;
  max-width: 1200px;
}
```

📌 **Responsive saytlar uchun ENG MUHIM QOIDA**:

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
```

---

## 3️⃣ `min-height` va `max-height`

### 📌 `min-height`

Minimal balandlik

```css
.section {
  min-height: 100vh;
}
```

---

### 📌 `max-height`

Maksimal balandlik

```css
.box {
  max-height: 300px;
  overflow: auto;
}
```

---

## 4️⃣ `auto` qiymati (MUHIM)

```css
width: auto;
height: auto;
```

👉 Brauzer content’ga qarab hisoblaydi
👉 `block` elementlar default: `width: auto`

---

# 📏 5️⃣ O‘LCHOV BIRLIKLARI (UNITS) — JUDA MUHIM BO‘LIM

---

## 🔹 `px` — PIXEL

### 📌 Nima?

Aniq o‘lchov (absolyut)

```css
width: 200px;
```

### ✅ Qachon ishlatiladi?

* Border
* Kichik elementlar
* Aniq dizayn

❌ Responsive’da kamroq

---

## 🔹 `%` — FOIZ

### 📌 Nima?

Ota elementga nisbatan

```css
width: 50%;
```

### ⚠️ Muhim:

* width → ota element kengligi
* height → ota element height BERILGAN bo‘lsa

---

## 🔹 `em` — OTA ELEMENTGA BOG‘LIQ

```css
padding: 2em;
```

👉 Ota element `font-size` ga qarab hisoblanadi

❌ Murakkab joylarda xatolik bo‘lishi mumkin

---

## 🔹 `rem` — ROOT (HTML) GA BOG‘LIQ ⭐

```css
font-size: 1.5rem;
```

👉 HTML `font-size` ga qaraydi
👉 Barqaror va professional

📌 Tavsiya etiladi:

```css
html {
  font-size: 16px;
}
```

---

## 🔹 `vw` va `vh` — VIEWPORT

| Unit  | Ma’nosi                 |
| ----- | ----------------------- |
| `1vw` | ekran kengligining 1%   |
| `1vh` | ekran balandligining 1% |

```css
.hero {
  width: 100vw;
  height: 100vh;
}
```

---

### ⚠️ Mobil muammo:

`100vh` ba’zan noto‘g‘ri bo‘ladi (browser panel sabab)

---

## 6️⃣ REAL TAQQOSLASH (QACHON QAYSI UNIT?)

| Vaziyat            | Tavsiya       |
| ------------------ | ------------- |
| Tugma padding      | rem           |
| Container width    | % + max-width |
| Full ekran section | vh            |
| Border             | px            |
| Font-size          | rem           |

---

## 7️⃣ ENG KATTA XATOLAR ❌

❌ Hamma joyda px ishlatish
❌ height: 100% noto‘g‘ri ishlatilishi
❌ max-width ishlatmaslik

---

## 8️⃣ REAL PROFESSIONAL MISOL

```css
.container {
  width: 100%;
  max-width: 1200px;
  padding: 1.5rem;
  margin: 0 auto;
  box-sizing: border-box;
}
```

---

## 🎯 YAKUNIY OLTIN QOIDALAR

✅ Layout → `% + max-width`

✅ Font → `rem`

✅ Full ekran → `vh / vw`

✅ Barqaror dizayn → `box-sizing: border-box`

---