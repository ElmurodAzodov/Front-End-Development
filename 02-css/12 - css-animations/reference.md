# **CSS Animations**

**CSS Animations – Keyframe Animations**

### 1. `@keyframes` Rule

Bu animatsiyaning asosiy qismi. Qanday o‘zgarishlar bo‘lishini belgilaydi.

```css
@keyframes nomi {
  from {
    /* boshlang‘ich holat */
  }
  to {
    /* tugash holati */
  }
}

/* Yoki foizlar bilan (eng qulay usul) */
@keyframes slideIn {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
```

**Yaxshi amaliyot**: Har doim `0%` va `100%` ishlatish tavsiya qilinadi.

---

### 2. Animation Properties

#### `animation-name`

Qaysi `@keyframes` ni ishlatishni belgilaydi.

```css
.box {
  animation-name: slideIn;
}
```

#### `animation-duration`

Animatsiya qancha vaqt davom etishi.

```css
.box {
  animation-duration: 0.6s; /* 600ms */
  animation-duration: 2s;
}
```

#### `animation-timing-function`

Tezlik egri chizig‘i (easing).

```css
.box {
  animation-timing-function: ease;
  animation-timing-function: linear;
  animation-timing-function: ease-in-out;
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.27, 1.55); /* bounce */
}
```

#### `animation-delay`

Animatsiya boshlanishidan oldin kutish vaqti.

```css
.box {
  animation-delay: 0.3s;
}
```

#### `animation-iteration-count`

Nechta marta takrorlanishi.

```css
.box {
  animation-iteration-count: 3; /* 3 marta */
  animation-iteration-count: infinite; /* cheksiz */
}
```

#### `animation-direction`

```css
.box {
  animation-direction: normal; /* oddiy (default) */
  animation-direction: reverse; /* teskari */
  animation-direction: alternate; /* oldinga-keyinga */
  animation-direction: alternate-reverse;
}
```

#### `animation-fill-mode`

Animatsiya tugagandan keyin element qanday holatda qolishini belgilaydi.

```css
.box {
  animation-fill-mode: none; /* default */
  animation-fill-mode: forwards; /* 100% holatida qoladi (eng ko‘p ishlatiladi) */
  animation-fill-mode: backwards; /* 0% holatidan boshlanadi */
  animation-fill-mode: both; /* forwards + backwards */
}
```

#### `animation-play-state`

Animatsiyani to‘xtatish yoki davom ettirish.

```css
.box {
  animation-play-state: running; /* default */
  animation-play-state: paused;
}
```

---

### 3. `animation` – Shorthand (Barchasini bitta qatorda)

```css
.box {
  animation: [name] [duration] [timing-function] [delay] [iteration-count]
    [direction] [fill-mode];
}
```

**Amaliy misollar:**

```css
/* Oddiy */
.fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

/* To‘liq shorthand */
.card {
  animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s both;
}

/* Bir nechta animatsiya bir vaqtda */
.box {
  animation:
    fadeIn 0.8s ease forwards,
    slideUp 0.6s ease 0.3s forwards;
}
```

---

### To‘liq Misol (Birlashtirilgan)

```css
@keyframes fadeSlide {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.card {
  animation: fadeSlide 0.7s ease forwards;
}
```

---

<br>
<br>
<br>
<br>
<br>

**CSS Transforms – To‘liq Bo‘lim**

### 1. 2D Transforms

#### `translate()` – Siljitish

```css
.box {
  transform: translate(50px, 100px); /* x va y o‘qi bo‘yicha */
  transform: translateX(30px); /* faqat gorizontal */
  transform: translateY(-20px); /* faqat vertikal */
}
```

#### `scale()` – Kattalashtirish / Kichiklashtirish

```css
.box {
  transform: scale(1.5); /* hammasi bo‘yicha 1.5x */
  transform: scale(0.8); /* kichraytirish */
  transform: scaleX(2); /* faqat eni bo‘yicha */
  transform: scaleY(0.5); /* faqat bo‘yi bo‘yicha */
}
```

#### `rotate()` – Burish

```css
.box {
  transform: rotate(45deg); /* soat yo‘nalishi bo‘yicha */
  transform: rotate(-30deg); /* teskari yo‘nalish */
}
```

#### `skew()` – Qiyshaytirish

```css
.box {
  transform: skew(20deg); /* ikkala o‘q bo‘yicha */
  transform: skewX(30deg); /* faqat x o‘qi */
  transform: skewY(15deg); /* faqat y o‘qi */
}
```

**Bir nechta transform bir vaqtda:**

```css
.box {
  transform: translateX(50px) rotate(20deg) scale(1.2);
}
```

---

### 2. 3D Transforms

#### `translate3d()`

```css
.box {
  transform: translate3d(50px, 100px, 80px); /* x, y, z */
  transform: translateZ(100px); /* faqat oldinga chiqarish */
}
```

#### `rotateX()`, `rotateY()`, `rotateZ()`

```css
.box {
  transform: rotateX(45deg); /* x o‘qi bo‘yicha (vertikal burish) */
  transform: rotateY(60deg); /* y o‘qi bo‘yicha (gorizontal burish) */
  transform: rotateZ(30deg); /* z o‘qi bo‘yicha (oddiy 2D rotate) */
}
```

#### `perspective` (Perspektiva)

Perspektivani elementga yoki uning ota-elementiga berish mumkin.

```css
.container {
  perspective: 1000px; /* qanchalik uzoqdan ko‘rinishi */
}

.box {
  transform: rotateY(45deg);
}
```

**Qisqa usul:**

```css
.box {
  transform: perspective(800px) rotateY(40deg);
}
```

---

### 3. Qo‘shimcha Transform Xususiyatlari

#### `transform-origin` – Burilish / Kattalashtirish markazi

```css
.box {
  transform-origin: center center; /* default */
  transform-origin: top left;
  transform-origin: 50% 50%;
  transform-origin: 0 0; /* chap yuqori burchak */
  transform-origin: 100% 100%; /* o‘ng pastki burchak */
}
```

#### `transform-style`

3D bolalar elementlarini qanday ko‘rsatishni belgilaydi.

```css
.container {
  transform-style: preserve-3d; /* 3D effektni saqlaydi (eng muhimi) */
  /* transform-style: flat; */ /* default - 3D ni yo‘qotadi */
}
```

#### `backface-visibility`

Element orqa tomoni ko‘rinishini boshqaradi (flip kartalar uchun juda muhim).

```css
.card {
  backface-visibility: hidden; /* orqa tomonini yashiradi */
  /* backface-visibility: visible; */
}
```

---

### To‘liq Amaliy Misollar

#### 1. Hover bilan 2D Transform

```css
.card {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-15px) scale(1.03) rotate(2deg);
}
```

#### 2. 3D Flip Card (Klassik Misol)

```css
.flip-card {
  perspective: 1200px;
}

.flip-card-inner {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.front,
.back {
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}
```

#### 3. 3D Hover Effekti

```css
.box {
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}

.box:hover {
  transform: rotateX(15deg) rotateY(25deg) translateZ(50px);
}
```

---

### Performance va Eng Yaxshi Amaliyotlar

- `transform` har doim GPU tomonidan tezlashtiriladi.
- Bir nechta transformni bitta `transform` qoidasida yozing.
- `translateZ(0)` yoki `translate3d(0,0,0)` bilan GPU acceleration ni majburlash mumkin (ba’zida kerak bo‘ladi).
- `will-change: transform;` ni vaqtincha qo‘shing.

---
