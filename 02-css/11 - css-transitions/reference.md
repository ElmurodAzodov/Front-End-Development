# **CSS transitions**

**CSS Transitions – To‘liq Modul**

### 1. Transition Properties

#### `transition-property`

Qaysi CSS xususiyatini animatsiya qilishni belgilaydi.

```css
.box {
  transition-property: background-color; /* faqat rang */
  transition-property: width, height; /* bir nechta */
  transition-property: all; /* hamma o'zgaradigan xususiyatlar */
}
```

---

#### `transition-duration`

Animatsiya qancha vaqt davom etishini belgilaydi (soniya yoki millisekund).

```css
.box {
  transition-duration: 0.3s; /* 300ms - eng ko'p ishlatiladi */
  transition-duration: 500ms; /* 500 millisekund */
  transition-duration: 2s; /* 2 soniya */
}
```

---

#### `transition-timing-function`

Animatsiya tezligi qanday o‘zgarishini belgilaydi (easing).

**Asosiy qiymatlar:**

```css
.ease {
  transition-timing-function: ease; /* default - sekin boshlanib, sekin tugaydi */
}

.linear {
  transition-timing-function: linear; /* bir xil tezlik */
}

.ease-in {
  transition-timing-function: ease-in; /* sekin boshlanib, tez tugaydi */
}

.ease-out {
  transition-timing-function: ease-out; /* tez boshlanib, sekin tugaydi */
}

.ease-in-out {
  transition-timing-function: ease-in-out; /* sekin boshlanib va tugaydi */
}
```

**Cubic-bezier (maxsus egri chiziq):**

```css
.box {
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1); /* ease */
  transition-timing-function: cubic-bezier(0.42, 0, 1, 1); /* ease-out */
  transition-timing-function: cubic-bezier(
    0.68,
    -0.55,
    0.27,
    1.55
  ); /* bounce effekti */
}
```

---

#### `transition-delay`

Animatsiya boshlanishidan oldin nechta vaqt kutishini belgilaydi.

```css
.box {
  transition-delay: 0.2s; /* 200ms keyin boshlanadi */
  transition-delay: 500ms;
}
```

---

#### `transition` – Shorthand (eng qulay usul)

Barchasini bitta qatorda yozish:

```css
.box {
  transition: [property] [duration] [timing-function] [delay];
}
```

**Misollar:**

```css
/* Eng ko‘p ishlatiladigan */
.box {
  transition: background-color 0.3s ease;
}

/* Bir nechta xususiyat */
.box {
  transition:
    background-color 0.3s ease,
    transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    opacity 0.2s linear;
}

/* Hamma narsani */
.box {
  transition: all 0.35s ease;
}
```

---

### 2. What Can Be Animated (Animatsiya qilinadigan xususiyatlar)

**Yaxshi ishlaydigan (performans jihatdan zo‘r):**

- `transform` (translate, scale, rotate, skew)
- `opacity`
- `filter` (blur, brightness, contrast va h.k.)
- `color`, `background-color`
- `width`, `height` (lekin transform yaxshiroq)
- `margin`, `padding` (transform yaxshiroq)
- `border-radius`
- `box-shadow`
- `text-shadow`

**Yomonroq (qochishga harakat qiling):**

- `top`, `left`, `right`, `bottom` (o‘rniga `transform: translate()` ishlatish tavsiya qilinadi)
- `font-size`, `line-height` va boshqa layoutni o‘zgartiradigan xususiyatlar

---

### 3. Performance Best Practices

1. **Transform va Opacity** ni ustun qo‘ying — ular GPU tomonidan tezlashtiriladi.
2. `will-change` dan foydalaning (ehtiyotkorlik bilan):

```css
.box {
  will-change: transform, opacity;
}
```

3. `transition: all` dan qoching — faqat kerakli xususiyatlarni yozing.
4. Juda ko‘p elementlarga transition qo‘ymang.
5. Mobil qurilmalarda `cubic-bezier` larni oddiyroq tuting.

---

### 4. Practical Effects (Amaliy Misollar)

#### Hover Effects

```css
.button {
  background-color: #3498db;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
}
```

#### Button Animations

```css
.btn-scale {
  transition: transform 0.2s ease;
}

.btn-scale:active {
  transform: scale(0.95);
}

.btn-slide {
  position: relative;
  overflow: hidden;
}

.btn-slide::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 40%;
  height: 200%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-30deg);
  transition: left 0.6s ease;
}

.btn-slide:hover::after {
  left: 120%;
}
```

#### Smooth State Changes (Class orqali)

```css
.card {
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}

.card.active {
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}
```

---

<br>
<br>
<br>
<br>
<br>

**CSS Transitions – What Can Be Animated**

CSS-da `transition` bilan deyarli har qanday **raqamli qiymatga ega** xususiyatni animatsiya qilish mumkin. Lekin ularning hammasi bir xil darajada yaxshi ishlamaydi.

### 1. Eng Yaxshi Animatsiya Qilinadigan Xususiyatlar (Recommended)

Bu guruhdagi xususiyatlar **GPU tomonidan tezlashtiriladi** (composited) va sahifani sekinlashtirmaydi.

| Xususiyat                    | Misol                                          | Tavsiya etiladi? | Izoh                   |
| ---------------------------- | ---------------------------------------------- | ---------------- | ---------------------- |
| `transform`                  | `translate()`, `scale()`, `rotate()`, `skew()` | ⭐⭐⭐⭐⭐       | Eng yaxshisi           |
| `opacity`                    | `opacity: 0 → 1`                               | ⭐⭐⭐⭐⭐       | Juda yaxshi            |
| `filter`                     | `blur()`, `brightness()`, `contrast()`         | ⭐⭐⭐⭐         | Yaxshi                 |
| `backdrop-filter`            | `blur()` (orqa fon)                            | ⭐⭐⭐⭐         | Zamonaviy brauzerlarda |
| `color` / `background-color` | rang o‘zgarishi                                | ⭐⭐⭐           | Yaxshi                 |
| `box-shadow`                 | soya effekti                                   | ⭐⭐⭐           | Yaxshi                 |
| `border-radius`              | chekka yumaloqligi                             | ⭐⭐⭐           | Yaxshi                 |
| `text-shadow`                | matn soyasi                                    | ⭐⭐⭐           | Yaxshi                 |

**Eng muhim qoida:**  
**`transform` + `opacity`** — bu ikkalasini iloji boricha ko‘proq ishlating.

---

### 2. O‘rtacha / Ehtiyotkorlik bilan ishlatiladiganlar

Ular ishlaydi, lekin sahifani qayta hisoblashga (layout/reflow) sabab bo‘lishi mumkin.

- `width`, `height`
- `max-width`, `min-width`
- `margin`, `padding`
- `border-width`
- `font-size`
- `line-height`
- `letter-spacing`
- `top`, `left`, `right`, `bottom`

**Maslahat:**  
`top/left` o‘rniga `transform: translate()` ishlatish ancha yaxshi.

---

### 3. Animatsiya Qilish tavsiya etilmaydiganlar (Avoid if possible)

- `display` (none ↔ block) — transition ishlamaydi
- `visibility`
- `position`
- `float`
- `grid-template-columns` / `flex-basis` (ba’zida qimmat)
- `z-index` (raqamli bo‘lsa ham silliq emas)

---

### Amaliy Misollar

#### 1. Transform + Opacity (Eng yaxshi usul)

```css
.card {
  opacity: 0.85;
  transform: translateY(20px) scale(0.95);
  transition:
    opacity 0.4s ease,
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.card:hover {
  opacity: 1;
  transform: translateY(0) scale(1);
}
```

#### 2. Rang va Shadow

```css
.button {
  background-color: #3b82f6;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.button:hover {
  background-color: #2563eb;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

#### 3. Width o‘rniga Transform (Solishtirish)

```css
/* Yomonroq usul */
.bad {
  transition: width 0.4s ease;
}

.bad:hover {
  width: 300px;
}

/* Yaxshi usul */
.good {
  transition: transform 0.4s ease;
}

.good:hover {
  transform: scaleX(1.25); /* yoki translateX() */
}
```

#### 4. Filter bilan Chiroyli Effekt

```css
.image {
  filter: brightness(1) contrast(1) saturate(1);
  transition: filter 0.5s ease;
}

.image:hover {
  filter: brightness(1.1) contrast(1.15) saturate(1.3);
}
```

---

<br>
<br>
<br>
<br>
<br>

# **CSS Transitions – Performance Best Practices**

### 1. Eng Muhim Qoida (Golden Rule)

**Faqat `transform` va `opacity` ni animatsiya qiling** — ular GPU tomonidan tezlashtiriladi va sahifani sekinlashtirmaydi.

Boshqa xususiyatlar (width, height, margin, top, left, font-size va h.k.) **layout** yoki **paint** jarayonini qayta ishga tushiradi, bu esa animatsiyani “jittery” (qaltis) qiladi.

---

### 2. Tavsiya etiladigan va Tavsiya etilmaydigan Xususiyatlar

| Daraja         | Xususiyatlar                                                           | Sabab                     |
| -------------- | ---------------------------------------------------------------------- | ------------------------- |
| **Eng yaxshi** | `transform`, `opacity`                                                 | GPU accelerated           |
| **Yaxshi**     | `filter`, `backdrop-filter`, `box-shadow`, `color`, `background-color` | Ko‘pincha yaxshi ishlaydi |
| **O‘rtacha**   | `border-radius`, `text-shadow`                                         | Ehtiyotkorlik bilan       |
| **Yomon**      | `width`, `height`, `margin`, `padding`, `top`, `left`, `font-size`     | Layout trigger qiladi     |

---

### 3. Amaliy Performance Maslahatlar

#### 1. `transition: all` dan qoching

```css
/* ❌ Yomon */
.card {
  transition: all 0.4s ease;
}

/* ✅ Yaxshi */
.card {
  transition:
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s ease,
    box-shadow 0.4s ease;
}
```

#### 2. `will-change` dan to‘g‘ri foydalanish

```css
.card {
  /* Animatsiya boshlanishidan oldin qo‘shing */
  will-change: transform, opacity;
}

.card:hover {
  transform: translateY(-10px);
  opacity: 1;
}

/* Muhim: animatsiya tugagandan keyin olib tashlang */
.card {
  transition:
    transform 0.3s,
    opacity 0.3s;
}

.card:hover {
  will-change: transform, opacity; /* yoki JavaScript orqali boshqaring */
}
```

> **Ogohlantirish**: `will-change` ni doimiy ishlatmang — bu xotirani ko‘p ishlatadi.

#### 3. GPU Acceleration ni majburlash ( eski usul, lekin hali ham ishlatiladi)

```css
.gpu-accelerated {
  transform: translateZ(0); /* yoki translate3d(0,0,0) */
  backface-visibility: hidden;
  perspective: 1000px;
}
```

#### 4. Mobil qurilmalar uchun optimizatsiya

```css
@media (max-width: 768px) {
  .card {
    transition-duration: 0.25s; /* qisqaroq davomiylik */
    transition-timing-function: ease-out; /* sodda easing */
  }
}
```

#### 5. Ko‘p elementlarni bir vaqtda animatsiya qilmaslik

```css
/* ❌ Yomon — 100 ta element bir vaqtda */
.item {
  transition: transform 0.3s;
}

/* ✅ Yaxshiroq — kechikish qo‘shish */
.item:nth-child(1) {
  transition-delay: 0ms;
}
.item:nth-child(2) {
  transition-delay: 30ms;
}
.item:nth-child(3) {
  transition-delay: 60ms;
}
```

---

### 4. Kuchli Misollar (Yaxshi Performance)

```css
/* Yuqori performance hover effekti */
.card {
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s ease;
  will-change: transform, box-shadow;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

```css
/* Loading skeleton effekti */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite; /* Bu yerda animation ishlatiladi */
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
```

---

### 5. Performance ni Tekshirish Usullari

- Chrome DevTools → **Performance** paneli
- **Layers** panelida elementlar alohida layer ekanligini tekshiring
- **Paint** va **Layout** bo‘limlarida qizil rang ko‘p chiqmasligi kerak

---

<br>
<br>
<br>
<br>
<br>

# Practical Effects in CSS Transitions

CSS Transition’larning eng ko‘p ishlatiladigan joylari:

- Hover Effects
- Button Animations
- Smooth State Changes

Bu effektlar website’ni:

- professional
- zamonaviy
- interaktiv
- chiroyli

ko‘rsatadi.

---

# 1. Hover Effects

Hover — sichqoncha element ustiga borgandagi holat.

```css
:hover;
```

Transition bilan hover juda smooth ishlaydi.

---

# Hover Zoom Effect

Rasm hover bo‘lganda kattalashadi.

## Kod

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .card {
        width: 300px;
        overflow: hidden;
      }

      .card img {
        width: 100%;

        transition: transform 0.5s ease;
      }

      .card:hover img {
        transform: scale(1.1);
      }
    </style>
  </head>
  <body>
    <div class="card">
      <img src="https://picsum.photos/300/200" />
    </div>
  </body>
</html>
```

---

## Tushuntirish

### transition

```css
transition: transform 0.5s ease;
```

Bu:

- transform animatsiya bo‘lsin
- 0.5 sekund davom etsin
- smooth ishlasin

deganidir.

---

### transform: scale()

```css
transform: scale(1.1);
```

Element 1.1 marta kattalashadi.

---

# Hover Shadow Effect

Card hover bo‘lganda soya chiqadi.

## Kod

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        width: 250px;
        height: 150px;
        background: white;
        border-radius: 10px;

        transition: box-shadow 0.4s ease;
      }

      .box:hover {
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

---

## Natija

Hover bo‘lganda:

- card havoda turgandek ko‘rinadi
- professional UI hosil bo‘ladi

---

# Hover Underline Animation

Link tagida animatsion chiziq.

## Kod

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      a {
        text-decoration: none;
        color: black;
        position: relative;
      }

      a::after {
        content: "";
        position: absolute;

        left: 0;
        bottom: -5px;

        width: 0;
        height: 2px;

        background: red;

        transition: width 0.4s ease;
      }

      a:hover::after {
        width: 100%;
      }
    </style>
  </head>
  <body>
    <a href="#">Hover Me</a>
  </body>
</html>
```

---

## Qanday ishlaydi?

Pseudo-element:

```css
::after;
```

hover bo‘lganda:

```css
width: 100%;
```

bo‘ladi va chiziq chapdan o‘ngga ochiladi.

---

# 2. Button Animations

Button transition’lar website’da juda ko‘p ishlatiladi.

Masalan:

- hover
- click
- loading
- glow
- fill animation

---

# Smooth Button Hover

## Kod

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      button {
        padding: 15px 30px;
        border: none;

        background: royalblue;
        color: white;

        font-size: 18px;
        border-radius: 8px;

        cursor: pointer;

        transition: all 0.3s ease;
      }

      button:hover {
        background: darkblue;

        transform: translateY(-5px);
      }
    </style>
  </head>
  <body>
    <button>Click Me</button>
  </body>
</html>
```

---

## Tushuntirish

### translateY()

```css
transform: translateY(-5px);
```

Button tepaga ko‘tariladi.

---

## Natija

Button:

- jonli ko‘rinadi
- hover efekti professional bo‘ladi

---

# Glow Button Animation

## Kod

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      button {
        padding: 15px 40px;
        border: none;

        background: black;
        color: white;

        border-radius: 50px;

        transition: all 0.4s ease;

        cursor: pointer;
      }

      button:hover {
        box-shadow:
          0 0 10px cyan,
          0 0 20px cyan,
          0 0 40px cyan;

        transform: scale(1.05);
      }
    </style>
  </head>
  <body>
    <button>Glow Button</button>
  </body>
</html>
```

---

## Natija

Hover bo‘lganda:

- neon effekt chiqadi
- button glow qiladi

---

# Fill Animation Button

## Kod

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      button {
        position: relative;

        overflow: hidden;

        padding: 15px 40px;

        border: 2px solid crimson;
        background: transparent;

        color: crimson;

        cursor: pointer;

        transition: color 0.5s ease;
      }

      button::before {
        content: "";

        position: absolute;

        left: 0;
        top: 0;

        width: 0;
        height: 100%;

        background: crimson;

        z-index: -1;

        transition: width 0.5s ease;
      }

      button:hover::before {
        width: 100%;
      }

      button:hover {
        color: white;
      }
    </style>
  </head>
  <body>
    <button>Hover Me</button>
  </body>
</html>
```

---

## Qanday ishlaydi?

Pseudo-element:

```css
::before;
```

button ichini to‘ldirib boradi.

---

# 3. Smooth State Changes

State change — element holatining o‘zgarishi.

Masalan:

| State   | Ma’nosi           |
| ------- | ----------------- |
| hover   | Sichqoncha ustida |
| focus   | Input tanlangan   |
| active  | Bosilgan          |
| checked | Checkbox yoqilgan |

---

# Input Focus Animation

Input tanlanganda glow chiqadi.

## Kod

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      input {
        width: 250px;
        padding: 12px;

        border: 2px solid gray;

        outline: none;

        transition:
          border-color 0.3s ease,
          box-shadow 0.3s ease;
      }

      input:focus {
        border-color: dodgerblue;

        box-shadow: 0 0 10px rgba(30, 144, 255, 0.5);
      }
    </style>
  </head>
  <body>
    <input type="text" placeholder="Enter text" />
  </body>
</html>
```

---

## Natija

Input focus bo‘lganda:

- border rangi o‘zgaradi
- glow chiqadi
- smooth animatsiya bo‘ladi

---

# Toggle Switch Animation

## Kod

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .switch {
        position: relative;

        width: 70px;
        height: 35px;
      }

      .switch input {
        display: none;
      }

      .slider {
        position: absolute;

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background: gray;

        border-radius: 35px;

        transition: background 0.4s ease;
      }

      .slider::before {
        content: "";

        position: absolute;

        width: 28px;
        height: 28px;

        left: 4px;
        top: 3.5px;

        background: white;

        border-radius: 50%;

        transition: transform 0.4s ease;
      }

      input:checked + .slider {
        background: limegreen;
      }

      input:checked + .slider::before {
        transform: translateX(35px);
      }
    </style>
  </head>
  <body>
    <label class="switch">
      <input type="checkbox" />

      <span class="slider"></span>
    </label>
  </body>
</html>
```

---

# Natija

Checkbox yoqilganda:

- tugmacha o‘ngga yuradi
- background rangi o‘zgaradi
- hammasi smooth bo‘ladi

---

# Practical Effects uchun Eng Muhim Propertylar

## transform

```css
transform: scale();
transform: rotate();
transform: translate();
```

Eng yaxshi performance beradi.

---

## opacity

```css
opacity: 0;
opacity: 1;
```

Fade effektlar uchun ishlatiladi.

---

## box-shadow

Glow va hover effektlar uchun.

---

# Eng Muhim Tavsiya

❌ Yomon:

```css
transition: all 1s;
```

✅ Yaxshi:

```css
transition: transform 0.3s ease;
```

Specific property ishlatish performance uchun yaxshiroq.

---
