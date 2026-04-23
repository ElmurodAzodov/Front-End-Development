# **Responsive Design**

<br>
<br>

## 📐 1. Viewport Meta Tag

### 🔹 Nazariya

Viewport — bu mobil qurilmalarda web sahifaning qanday ko‘rinishini boshqaradigan sozlama.

Agar viewport qo‘yilmasa, sayt mobil telefonda kichik (desktop kabi) ko‘rinadi.

### 🔹 HTML ichida ishlatiladi:


```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```


### 🔹 Tushuntirish:


- `width=device-width` → ekran kengligini qurilma ekraniga teng qiladi
- `initial-scale=1.0` → zoom 100% bo‘ladi


### 🔹 Natija:


✔ sayt telefon, planshet, desktopda moslashadi

---


## 📏 2. Media Queries


### 🔹 Nazariya

Media query — CSS ichida shart yozish usuli.
Ya’ni: “agar ekran shunday bo‘lsa, mana bu CSS ishlasin”.

---

### 🔹 Syntax:


```css
@media (shart) {
  selector {
    property: value;
  }
}
```

---

### 🔹 Oddiy misol:


```css
body {
  background: white;
}


@media (max-width: 600px) {
  body {
    background: lightgray;
  }
}
```

📌 Tushuntirish:

- 600px dan kichik ekranda fon kulrang bo‘ladi

---

## 📏 3. Media Features

---


## 🔹 width / max-width / min-width

### 📌 Nazariya

Ekran kengligiga qarab ishlaydi.

### 🔹 Misol:

```css
@media (max-width: 768px) {
  .box {
    width: 100%;
  }
}
```

📌 Tushuntirish:

- 768px dan kichik bo‘lsa → `.box` to‘liq kenglik oladi

---

## 🔹 orientation

### 📌 Nazariya

Ekran holati:

- portrait (tik)
- landscape (yotiq)

### 🔹 Misol:

```css
@media (orientation: landscape) {
  body {
    background: black;
  }
}
```

📌 Tushuntirish:

- telefon yon holatda bo‘lsa fon qora bo‘ladi

---

## 🔹 aspect-ratio

### 📌 Nazariya

Ekran nisbatini tekshiradi (kenglik / balandlik)

### 🔹 Misol:

```css
@media (aspect-ratio: 16/9) {
  .video {
    width: 100%;
  }
}
```

📌 Tushuntirish:

- 16:9 ekranlarda video to‘liq chiqadi

---

## 🔹 prefers-color-scheme

### 📌 Nazariya

Foydalanuvchi dark/light rejimini ishlatadimi aniqlaydi.

### 🔹 Misol:

```css
@media (prefers-color-scheme: dark) {
  body {
    background: black;
    color: white;
  }
}
```

📌 Tushuntirish:

- telefon dark mode bo‘lsa → sayt ham dark bo‘ladi

---

## 🔹 prefers-reduced-motion

### 📌 Nazariya

Foydalanuvchi animatsiyani kamaytirishni xohlaydimi.

### 🔹 Misol:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
  }
}
```

📌 Tushuntirish:

- animatsiyalar o‘chadi (sekin qurilmalar uchun foydali)

---

## 🔹 hover

### 📌 Nazariya

Mouse bilan ustiga olib borish mumkinmi?

### 🔹 Misol:

```css
@media (hover: hover) {
  button:hover {
    background: blue;
  }
}
```

📌 Tushuntirish:

- faqat mouse bor qurilmalarda hover ishlaydi

---

## 🔹 pointer

### 📌 Nazariya

Pointer turi:

- fine (mouse)
- coarse (touch)

### 🔹 Misol:

```css
@media (pointer: coarse) {
  button {
    padding: 20px;
  }
}
```

📌 Tushuntirish:

- telefon uchun tugmalar kattalashadi

---

## 🔗 4. Logical Operators (and, not, or)

---

## 🔹 and

### 📌 Nazariya

Ikki shart birga bajarilishi kerak

### 🔹 Misol:

```css
@media (min-width: 600px) and (max-width: 900px) {
  body {
    background: yellow;
  }
}
```

📌 Tushuntirish:

- faqat 600–900px oralig‘ida ishlaydi

---

## 🔹 not

### 📌 Nazariya

Shartni teskarisiga aylantiradi

### 🔹 Misol:

```css
@media not screen and (max-width: 600px) {
  body {
    color: red;
  }
}
```

📌 Tushuntirish:

- 600px dan kichik bo‘lmasa ishlaydi

---

## 🔹 or ("," bilan yoziladi)

### 📌 Nazariya

Kamida bittasi true bo‘lsa ishlaydi

### 🔹 Misol:

```css
@media (max-width: 600px), (orientation: landscape) {
  body {
    background: gray;
  }
}
```

📌 Tushuntirish:

- yoki kichik ekran yoki landscape bo‘lsa ishlaydi

---

## 📦 5. Container Queries (@container)

### 🔹 Nazariya

Media query ekran o‘lchamini tekshiradi
Container query esa — element ichidagi blok o‘lchamini tekshiradi

---

### 🔹 Avval container beriladi:

```css
.card-container {
  container-type: inline-size;
}
```

---

### 🔹 Keyin query yoziladi:

```css
@container (max-width: 500px) {
  .card {
    font-size: 14px;
  }
}
```

---

### 🔹 Tushuntirish:

- ekran emas, **ota element (container)** kichrayganda style o‘zgaradi

---

<br>
<br>
<br>
<br>
<br>

## 📱 Mobile-First vs Desktop-First

---

## 🔹 Mobile-First

### 📌 Nazariya

Avval **mobil uchun CSS yoziladi**, keyin kattaroq ekranlar uchun kengaytiriladi.

### 🔹 Syntax:

```css id="m1a1"
.box {
  width: 100%;
}

/* katta ekran */
@media (min-width: 768px) {
  .box {
    width: 50%;
  }
}
```

### 📌 Tushuntirish:

- default → telefon
- keyin → planshet/desktop qo‘shiladi

### 🔥 Afzallik:

- tez ishlaydi
- SEO va performance yaxshi
- zamonaviy yondashuv

---

## 🔹 Desktop-First

### 📌 Nazariya

Avval desktop uchun yoziladi, keyin kichik ekranlarga moslashtiriladi.

### 🔹 Syntax:

```css id="d2b2"
.box {
  width: 50%;
}

@media (max-width: 768px) {
  .box {
    width: 100%;
  }
}
```

### 📌 Tushuntirish:

- default → katta ekran
- keyin → kichraytiriladi

---

# 🎨 Responsive Patterns

---

## 📦 1. Fluid Layouts

### 📌 Nazariya

O‘lchamlar **fixed emas**, foiz yoki flexible birliklarda bo‘ladi.

### 🔹 Misol:

```css id="fl1"
.container {
  width: 90%;
}
```

### 📌 Tushuntirish:

- ekran kichik/katta bo‘lsa ham moslashadi

---

## ✍️ 2. Responsive Typography (clamp())

### 📌 Nazariya

Matn o‘lchami avtomatik moslashadi.

### 🔹 Syntax:

```css id="cl1"
h1 {
  font-size: clamp(16px, 4vw, 40px);
}
```

### 📌 Tushuntirish:

- 16px → minimum
- 4vw → moslashuvli o‘lcham
- 40px → maksimum

---

## 🖼 3. Responsive Images

### 📌 Nazariya

Rasm ekran o‘lchamiga qarab o‘zgaradi.

### 🔹 Misol:

```css id="img1"
img {
  max-width: 100%;
  height: auto;
}
```

### 🔹 HTML variant:

```html id="img2"
<img src="image.jpg" srcset="small.jpg 480w, large.jpg 1024w" />
```

### 📌 Tushuntirish:

- rasm buzilmaydi
- tez yuklanadi

---

## 🧭 4. Responsive Navigation

### 📌 Nazariya

Katta ekranda menu ko‘rinadi, kichikda burger menu bo‘ladi.

### 🔹 Misol:

```css id="nav1"
.menu {
  display: flex;
}

@media (max-width: 768px) {
  .menu {
    display: none;
  }
  .burger {
    display: block;
  }
}
```

---

## 📊 5. Responsive Tables

### 📌 Nazariya

Jadval kichik ekranda buzilmasligi kerak.

### 🔹 Usul 1: scroll

```css id="tbl1"
.table-wrapper {
  overflow-x: auto;
}
```

### 🔹 Usul 2: block qilish

```css id="tbl2"
table,
tr,
td {
  display: block;
}
```

---

# 📏 Breakpoint Strategies

---

## 🧠 1. Content-based breakpoints

### 📌 Nazariya

Breakpoint ekran emas, **kontent buzilganda** qo‘yiladi.

### 🔹 Misol:

- matn siqilsa
- rasm chiqmay qolsa
- layout buzilsa

### 📌 Tushuntirish:

✔ eng to‘g‘ri yondashuv

---

## 📱 2. Common breakpoints

### 📌 Nazariya

Eng ko‘p ishlatiladigan standart o‘lchamlar:

```text id="bp1"
640px  → mobile large
768px  → tablet
1024px → laptop
1280px → desktop
```

### 🔹 Misol:

```css id="bp2"
@media (min-width: 640px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1280px) {
}
```

---

# ✍️ Fluid Typography

---

## 📌 Nazariya

Matn o‘lchami **ekran bilan birga o‘zgaradi**.

---

## 🔹 clamp() bilan:

```css id="ft1"
body {
  font-size: clamp(14px, 2vw, 20px);
}
```

---

## 📌 Tushuntirish:

- 14px → eng kichik
- 2vw → moslashuv
- 20px → eng katta

---
