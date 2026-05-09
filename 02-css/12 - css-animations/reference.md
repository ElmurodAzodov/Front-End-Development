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

