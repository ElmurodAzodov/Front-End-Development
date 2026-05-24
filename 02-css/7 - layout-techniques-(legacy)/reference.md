# **Layout techniques (legacy)**

## 🎯 Display Property

`display` xususiyati elementning sahifada **qanday joylashishini** va **qanday ko'rinishini** belgilaydi.

---

### `block`

```css
div {
  display: block;
}
```

- Yangi qatordan boshlanadi
- Ota elementning **to'liq kengligini** egallaydi
- `width`, `height`, `margin`, `padding` — hammasi ishlaydi

```
|←————————————— 100% —————————————→|
|              block                |
|←————————————— 100% —————————————→|
|              block                |
```

**Default block elementlar:** `div`, `p`, `h1-h6`, `ul`, `li`, `section`, `article`, `header`, `footer`

```css
.box {
  display: block;
  width: 200px; /* ✅ ishlaydi */
  height: 100px; /* ✅ ishlaydi */
  margin: 20px auto; /* ✅ ishlaydi, markazga olish mumkin */
}
```

---

### `inline`

```css
span {
  display: inline;
}
```

- Yangi qatordan **boshlanmaydi**, matn oqimida davom etadi
- Kenglik va balandlik **kontentga qarab** o'zgaradi
- `width`, `height` — **ishlamaydi**
- `margin-top`, `margin-bottom` — **ishlamaydi**
- `padding-top`, `padding-bottom` — vizual ko'rinadi, lekin layout-ga ta'sir qilmaydi

```
|  matn [inline] matn [inline] matn  |
|  davom etadi...                    |
```

**Default inline elementlar:** `span`, `a`, `strong`, `em`, `img`, `button`, `input`, `label`

```css
.tag {
  display: inline;
  width: 200px; /* ❌ ishlamaydi */
  height: 50px; /* ❌ ishlamaydi */
  margin-top: 10px; /* ❌ ishlamaydi */
  padding: 5px 10px; /* ✅ gorizontal ishlaydi */
  color: red; /* ✅ ishlaydi */
}
```

---

### `inline-block`

```css
.box {
  display: inline-block;
}
```

`inline` + `block` ning yaxshi tomonlarini birlashtiradi:

- `inline` kabi — yangi qatordan **boshlanmaydi**, yonma-yon turadi
- `block` kabi — `width`, `height`, `margin`, `padding` **hammasi ishlaydi**

```
| [box 100x50] [box 100x50] [box 100x50] |
|        yonma-yon turadilar              |
```

```css
.card {
  display: inline-block;
  width: 150px; /* ✅ ishlaydi */
  height: 100px; /* ✅ ishlaydi */
  margin: 10px; /* ✅ ishlaydi */
  padding: 15px; /* ✅ ishlaydi */
}
```

---

### Uchala qiymatni solishtirish

```css
/* Uchala element ham bir xil CSS, faqat display farq qiladi */
.a {
  display: block;
}
.b {
  display: inline;
}
.c {
  display: inline-block;
}

width: 150px;
height: 60px;
margin: 20px;
padding: 10px;
background: lightblue;
```

| Xususiyat                      | `block` | `inline` | `inline-block` |
| ------------------------------ | ------- | -------- | -------------- |
| Yangi qatordan boshlanadi      | ✅      | ❌       | ❌             |
| `width` / `height` ishlaydi    | ✅      | ❌       | ✅             |
| `margin` (top/bottom) ishlaydi | ✅      | ❌       | ✅             |
| To'liq kenglik egallaydi       | ✅      | ❌       | ❌             |

---

### `none`

```css
.hidden {
  display: none;
}
```

- Element sahifadan **butunlay o'chiriladi**
- Joy egallamaydi — qo'shni elementlar uning joyiga siljiydi
- DOM-da mavjud bo'ladi, lekin ko'rinmaydi va joy egallamaydi

```
/* display: none YO'Q */
| [A] [B] [C] |

/* B ga display: none */
| [A] [C] |   ← B ning joyi ham yo'qoldi
```

```css
/* JavaScript bilan ko'rsatish/yashirish */
.modal {
  display: none;
}
.modal.active {
  display: block;
}
```

---

### `visibility: hidden`

```css
.invisible {
  visibility: hidden;
}
```

- Element **ko'rinmaydi**, lekin joyini **saqlab qoladi**
- `display: none` dan asosiy farqi shu

```
/* visibility: hidden YO'Q */
| [A] [B] [C] |

/* B ga visibility: hidden */
| [A] [   ] [C] |   ← B ning joyi bo'sh qoldi
```

```css
/* Hover effekt uchun */
.tooltip {
  visibility: hidden;
  opacity: 0;
}
.parent:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
```

**`display: none` va `visibility: hidden` farqi:**

|                     | `display: none` | `visibility: hidden`                          |
| ------------------- | --------------- | --------------------------------------------- |
| Ko'rinadi           | ❌              | ❌                                            |
| Joy egallaydi       | ❌              | ✅                                            |
| Farzand elementlar  | Yashiriladi     | `visibility: visible` bilan ko'rsatish mumkin |
| Transition ishlaydi | ❌              | ✅                                            |

```css
/* visibility transition ishlaydi, display ishlamaydi */
.box {
  visibility: hidden;
  transition: visibility 0.3s; /* ✅ */
}

.box2 {
  display: none;
  transition: display 0.3s; /* ❌ ishlamaydi */
}
```

---

### `contents`

```css
.wrapper {
  display: contents;
}
```

Element o'zini **"yo'q qiladi"** — uning o'zi render bo'lmaydi, faqat **farzand elementlari** qoladi. Go'yo wrapper element umuman yo'qdek, farzandlari bevosita ota elementning ichida turganday ishlaydi.

```html
<div class="parent">
  <!-- display: flex -->
  <div class="wrapper">
    <!-- display: contents -->
    <span>A</span>
    <span>B</span>
  </div>
  <span>C</span>
</div>
```

```
/* display: contents YO'Q */
parent sees: [wrapper(span A, span B)] [span C]

/* display: contents BOR */
parent sees: [span A] [span B] [span C]  ← wrapper ko'rinmaydi
```

```css
/* Flexbox yoki Grid bilan foydali */
.parent {
  display: flex;
}

.wrapper {
  display: contents;
  /* wrapper o'zi flex item bo'lmaydi,
     ichidagi span lar to'g'ridan-to'g'ri
     flex item bo'lib qoladi */
}
```

**Muhim:** `display: contents` ishlatilganda elementning `background`, `border`, `padding` kabi stillari **ko'rinmaydi**, chunki element o'zi render bo'lmaydi. Faqat farzandlarni "ozod qilish" uchun ishlatiladi.

---

<br>
<br>
<br>
<br>
<br>

## 📏 Positioning

`position` xususiyati elementning sahifada **qayerda va qanday joylashishini** boshqaradi.

---

### `static` — default

```css
.box {
  position: static;
}
```

- Barcha elementlarning **default** qiymati
- Normal document flow bo'yicha joylashadi
- `top`, `right`, `bottom`, `left`, `z-index` — **ishlamaydi**

---

### `relative`

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

- **O'zining normal pozitsiyasidan** siljiydi
- Siljigandan keyin ham **eski joyi saqlanib qoladi** — qo'shni elementlar uning joyiga kelmaydi
- `top`, `right`, `bottom`, `left` ishlaydi

```
Normal flow:
| [A] [B] [C] |

B ga relative top:20px left:30px:
| [A] [  joyi  ] [C] |
         ↓
      [B] ← 20px pastga, 30px o'ngga siljidi
```

```css
.box {
  position: relative;
  top: 20px; /* o'z joyidan 20px pastga */
  left: 30px; /* o'z joyidan 30px o'ngga */
}
```

**Eng muhim vazifasi** — `absolute` bolalar uchun **koordinat markazi** bo'lish:

```css
.parent {
  position: relative; /* ← absolute child shunga nisbatan joylashadi */
}
.child {
  position: absolute;
  top: 0;
  right: 0;
}
```

---

### `absolute`

```css
.box {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

- Document flow-dan **butunlay chiqadi** — joy egallamaydi
- Eng yaqin **`position: relative/absolute/fixed/sticky`** bo'lgan ota elementga nisbatan joylashadi
- Bunday ota topilmasa — `<html>` ga (viewport) nisbatan joylashadi

```
.parent (position: relative)
┌─────────────────────────┐
│                  [child] ← top:0, right:0
│                         │
│                         │
└─────────────────────────┘
```

```css
/* Badge / notification uchun klassik misol */
.card {
  position: relative;
  width: 200px;
  height: 150px;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: red;
}
```

```css
/* Markazga olish */
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* ← o'zining yarmi qaytariladi */
}
```

---

### `fixed`

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

- Document flow-dan **chiqadi**
- **Viewport**ga (brauzer oynasi) nisbatan joylashadi
- Sahifa scroll qilinganda **qimirlamaydi**
- `transform` yoki `filter` qo'yilgan ota element ichida bo'lsa, viewport o'rniga **shu otaga nisbatan** joylashadi — bu keng tarqalgan bug

```
Scroll qilinsa ham:
┌─────────────────┐
│ [fixed navbar]  │ ← doim yuqorida
│─────────────────│
│   content ...   │
│   scroll ...    │
│   content ...   │
└─────────────────┘
```

```css
/* Klassik ishlatish holatlari */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.floating-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
```

---

### `sticky`

```css
.header {
  position: sticky;
  top: 0;
}
```

- `relative` va `fixed` ning **kombinatsiyasi**
- Scroll bo'lgunga qadar — `relative` kabi ishlaydi
- Belgilangan chegara (`top`, `bottom`)ga yetganda — `fixed` kabi **yopishib qoladi**
- **Ota element** scroll qilib o'tib ketsa, element ham ketadi

```
Scroll boshlanishida:        Scroll qilinganda:
┌─────────────────┐          ┌─────────────────┐
│   normal matn   │          │ [sticky header] │ ← yopishib qoldi
│ [sticky header] │    →     │─────────────────│
│   content ...   │          │   content ...   │
└─────────────────┘          └─────────────────┘
```

```css
/* Table header sticky */
thead th {
  position: sticky;
  top: 0;
  background: white; /* ← background berish shart, aks holda shaffof ko'rinadi */
  z-index: 1;
}

/* Sidebar navigation */
.sidebar {
  position: sticky;
  top: 20px; /* scroll qilinganda 20px dan yopishib qoladi */
  height: fit-content;
}
```

**Sticky ishlamasligi sabablari:**

```css
/* 1. top/bottom/left/right berilmagan */
.box {
  position: sticky;
} /* ❌ qayerda yopishishi noma'lum */
.box {
  position: sticky;
  top: 0;
} /* ✅ */

/* 2. Ota elementda overflow: hidden/auto/scroll bor */
.parent {
  overflow: hidden;
} /* ❌ sticky ishlamaydi */

/* 3. Ota element yetarlicha baland emas */
/* sticky faqat ota element doirasida ishlaydi */
```

---

### `top`, `right`, `bottom`, `left`

`static` dan tashqari barcha `position` qiymatlarida ishlaydi:

```css
.box {
  position: absolute;

  top: 20px; /* yuqori chegaradan 20px pastga */
  right: 10px; /* o'ng chegaradan 10px chapga */
  bottom: 20px; /* quyi chegaradan 20px tepaga */
  left: 10px; /* chap chegaradan 10px o'ngga */
}
```

`top` va `bottom` bir vaqtda berilsa — `top` ustunlik qiladi.
`left` va `right` bir vaqtda berilsa — `left` ustunlik qiladi (RTL layoutda `right`).

```css
/* To'liq ota elementni qoplash */
.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* Yoki qisqacha: inset: 0; */
}
```

---

### `z-index` va Stacking Context

#### `z-index`

Elementlar bir-birining **ustiga chiqib qolganida** qaysi biri oldinda ko'rinishini belgilaydi:

```css
.box1 {
  z-index: 1;
} /* orqada */
.box2 {
  z-index: 10;
} /* oldinda */
.box3 {
  z-index: 999;
} /* eng oldinda */
```

- Faqat `position: static` **bo'lmagan** elementlarda ishlaydi
- Katta son — oldinda. Manfiy son ham mumkin

```
z-index ko'rinishi (old → orqa):
[z:999] → [z:10] → [z:1] → [z: auto]
```

#### Stacking Context

Stacking context — bu elementlarning `z-index` bo'yicha **alohida guruh** hosil qilishi. Guruh ichidagi `z-index` faqat **o'sha guruh ichida** taqqoslanadi.

**Stacking context qachon yaratiladi:**

```css
/* position + z-index (auto dan boshqa) */
.ctx {
  position: relative;
  z-index: 1;
}

/* opacity 1 dan kichik */
.ctx {
  opacity: 0.99;
}

/* transform */
.ctx {
  transform: translateX(0);
}

/* filter */
.ctx {
  filter: blur(0);
}

/* will-change */
.ctx {
  will-change: transform;
}
```

**Amaliy muammo:**

```css
.modal-overlay {
  position: fixed;
  z-index: 1000;
}

.modal {
  position: fixed;
  z-index: 1001;
}

/* Muammo: modal ichidagi tooltip z-index: 9999 bo'lsa ham,
   agar modal o'zi stacking context bo'lsa,
   tooltip modal dan tashqariga chiqib ketolmaydi */

.some-parent {
  transform: translateX(0); /* ← stacking context yaratdi! */
  z-index: 1; /* ← modal (z:1000) bu ichida qoldi */
}
```

**Amaliy z-index tizimi:**

```css
:root {
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
  --z-tooltip: 600;
}

.modal {
  z-index: var(--z-modal);
}
.tooltip {
  z-index: var(--z-tooltip);
}
```

---

### Barcha position qiymatlarini solishtirish

|                            | `static` | `relative` | `absolute`           | `fixed`  | `sticky`         |
| -------------------------- | -------- | ---------- | -------------------- | -------- | ---------------- |
| Flow-da qoladi             | ✅       | ✅         | ❌                   | ❌       | ✅               |
| top/left ishlaydi          | ❌       | ✅         | ✅                   | ✅       | ✅               |
| Nimaga nisbatan            | —        | O'zi       | Yaqin positioned ota | Viewport | Scroll container |
| Scroll bilan harakatlanadi | ✅       | ✅         | ✅                   | ❌       | Qisman           |

---

<br>
<br>
<br>
<br>
<br>

## 🌊 Floats

`float` — elementni normal document flow-dan chiqarib, **chap yoki o'ng tomonga** suradi va qolgan kontent uning atrofida o'raladi. Zamonaviy CSS-da Flexbox va Grid bor, shuning uchun float hozir **kamdan-kam** ishlatiladi.

---

### `float: left` va `float: right`

```css
.image {
  float: left; /* chap tomonga suriladi */
  margin: 0 20px 10px 0;
}
```

```
float: left:                    float: right:
┌────────┐                      ┌──────────────────┐
│ [img]  │ matn davom etadi     │ matn      [img]  │
│        │ matn davom etadi     │ matn      │    │  │
└────────┘ matn davom etadi     │ matn      └────┘  │
  matn to'liq kenglikda         └──────────────────┘
```

```css
/* Klassik matn + rasm layout */
.article img {
  float: left;
  width: 200px;
  margin: 0 20px 15px 0;
}

/* O'ng tomonga */
.article img {
  float: right;
  width: 200px;
  margin: 0 0 15px 20px;
}
```

**Float elementga nima bo'ladi:**

- Document flow-dan chiqadi, lekin **to'liq emas** — `absolute` dan farqi: matn uning atrofida o'raladi
- `block` kabi bo'ladi — `width`, `height` ishlaydi
- Ota element floated elementning **balandligini hisoblamaydi** ← asosiy muammo

```css
/* Muammo: ota element yiqiladi (collapse) */
.parent {
  background: lightblue;
  /* balandligi 0 bo'lib qoladi, chunki
     ichidagi element float qilingan */
}
.child {
  float: left;
  height: 100px;
}
```

```
Ko'rinishi:
┌─────────────────────┐  ← .parent (balandligi 0!)
│ [floated child]         │
└─────────────────────┘
  ↑ background ko'rinmaydi
```

---

### `clear`

Float elementlarning **atrofiga o'ralishini to'xtatadi** — navbatdagi element float-ning pastiga tushadi:

```css
.next-element {
  clear: left; /* faqat left float-dan pastga tushadi */
  clear: right; /* faqat right float-dan pastga tushadi */
  clear: both; /* ikkala tomondagi float-dan pastga tushadi */
  clear: none; /* default, o'ralish davom etadi */
}
```

```
clear yo'q:                    clear: both:
┌──────┐                       ┌──────┐
│[img] │ matn matn             │[img] │ matn matn
│      │ matn matn             │      │ matn matn
└──────┘                       └──────┘
[next] ← img yonida            [next] ← img pastida
```

```css
.float-left {
  float: left;
}
.float-right {
  float: right;
}

.footer {
  clear: both; /* ikkala float ham tugagandan keyin boshlanadi */
}
```

---

### Clearfix Hack

Ota elementning float bolalar sababli **yiqilishini** (collapse) oldini olish usuli.

**Muammo:**

```html
<div class="parent">
  <div class="child" style="float:left; height:100px;">Float</div>
</div>
<div class="next">Keyingi element</div>
```

```
┌────────────────────┐  ← .parent balandligi 0!
│[float child]           │
└────────────────────┘
[next] ← parent ichiga kirib qoladi
```

**Clearfix yechimi — `::after` pseudo-element:**

```css
.clearfix::after {
  content: "";
  display: block; /* yoki table */
  clear: both;
}
```

```html
<div class="parent clearfix">
  <div class="child" style="float:left; height:100px;">Float</div>
</div>
<div class="next">Keyingi element</div>
```

```
┌────────────────────┐  ← .parent endi to'g'ri balandlik
│ [float child]      │
│ [::after clear]    │  ← ko'rinmas, faqat clear qiladi
└────────────────────┘
[next] ← to'g'ri joyda
```

**`overflow: hidden` — muqobil yechim:**

```css
.parent {
  overflow: hidden; /* yoki overflow: auto */
  /* Bu ham ota elementni to'g'ri balandlikka keltiradi */
}
```

Lekin bu yechimning kamchiligi — **tashqariga chiqib ketgan kontent kesiladi.**

---

### Qachon float ishlatish kerak

Hozirgi zamonaviy CSS-da float **deyarli ishlatilmaydi.** Uning o'rniga:

```css
/* Layout uchun — Flexbox */
.container {
  display: flex;
  gap: 20px;
}

/* Grid layout uchun */
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

**Float hozirgacha mos keladigan yagona holat:**

```css
/* Matn ichida rasmni o'rash — hali ham float eng qulay */
.article p img {
  float: left;
  margin: 0 15px 10px 0;
  shape-outside: circle(); /* matn rasm shakliga o'ralishi uchun */
}
```

```
┌──────────┐
│  (rasm)  │ Matn shu yerda boshlanadi va
│          │ rasmning shakliga qarab
└──────────┘ o'ralib davom etadi.
  Matn to'liq kenglikda davom etadi.
```

| Vazifa           | Float       | Zamonaviy         |
| ---------------- | ----------- | ----------------- |
| Ustunli layout   | ❌ ishlatma | ✅ Flexbox / Grid |
| Navbar           | ❌ ishlatma | ✅ Flexbox        |
| Matn ichida rasm | ✅ Hali mos | —                 |
| Card grid        | ❌ ishlatma | ✅ Grid           |

> ⚠️ Eski kod bazalarida float-ga ko'p duch kelasiz. Tushunish muhim, lekin yangi proyektlarda **Flexbox yoki Grid** ishlatish tavsiya etiladi.

---

<br>
<br>
<br>
<br>
<br>

## 📏 Overflow

Element o'z o'lchamidan katta kontent bo'lganida, `overflow` xususiyati bu **ortiqcha kontentga nima qilishni** belgilaydi.

---

### `overflow: visible` — default

```css
.box {
  overflow: visible;
  width: 200px;
  height: 100px;
}
```

- Kontent chegaradan **tashqariga chiqib ketadi**
- Element o'z o'lchamini **o'zgartirmaydi**
- Qo'shni elementlarga **vizual** ta'sir qilishi mumkin, lekin layout buzilmaydi

```
┌──────────────┐
│  Bu kontent  │
│  chegaradan ←┼── tashqariga chiqib ketadi
└──────────────┘
```

---

### `overflow: hidden`

```css
.box {
  overflow: hidden;
  width: 200px;
  height: 100px;
}
```

- Chegaradan chiqgan kontent **kesiladi**, scroll yo'q
- Clearfix o'rnida ishlatilishi mumkin (float collapse oldini olish)
- `border-radius` bilan birga ishlatganda ichidagi elementlar ham **yumaloqlanadi**

```
┌──────────────┐
│  Bu kontent  │
│  chegaradan  │ ← ortiqcha kontent ko'rinmaydi
└──────────────┘
```

```css
/* border-radius bilan klassik ishlatish */
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden; /* ichidagi img doira shaklida kesiladi */
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

### `overflow: scroll`

```css
.box {
  overflow: scroll;
  width: 200px;
  height: 100px;
}
```

- Har doim **scroll bar ko'rsatadi** — kontent sig'adimi yoki yo'qmi, farqi yo'q
- Kontent sig'sa ham scroll bar joy egallaydi

```
┌──────────────┬─┐
│  Kontent     │↑│
│  scroll      │ │ ← scroll bar doim ko'rinadi
│  qilinadi    │↓│
└──────────────┴─┘
```

---

### `overflow: auto`

```css
.box {
  overflow: auto;
  width: 200px;
  height: 100px;
}
```

- Kontent sig'masa — **scroll bar paydo bo'ladi**
- Kontent sig'sa — scroll bar **ko'rinmaydi**
- `scroll` dan ko'ra ko'proq ishlatiladi

```css
/* Klassik ishlatish holatlari */
.sidebar {
  overflow-y: auto;
  height: 100vh; /* balandlik belgilangan bo'lishi shart */
}

.code-block {
  overflow: auto;
  max-height: 400px;
}
```

---

### `overflow` qiymatlarini solishtirish

| Qiymat    | Kontent kesiladi | Scroll bar   | Scroll bar doim |
| --------- | ---------------- | ------------ | --------------- |
| `visible` | ❌               | ❌           | ❌              |
| `hidden`  | ✅               | ❌           | ❌              |
| `scroll`  | ✅               | ✅           | ✅              |
| `auto`    | ✅               | Kerak bo'lsa | ❌              |

---

### `overflow-x` va `overflow-y`

Gorizontal va vertikal overflow-ni **alohida** boshqarish:

```css
.box {
  overflow-x: hidden; /* gorizontal: kesish */
  overflow-y: auto; /* vertikal: kerak bo'lsa scroll */
}
```

```css
/* Gorizontal scroll — kod bloklari uchun */
.code-block {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap; /* kontent yangi qatorga tushmasin */
}

/* Faqat vertikal scroll — sidebar */
.sidebar {
  overflow-x: hidden;
  overflow-y: auto;
  height: 100vh;
}
```

**Muhim:** `overflow-x: hidden` va `overflow-y: visible` bir vaqtda berish mumkin emas — brauzer `visible` ni avtomatik `auto` ga o'zgartiradi:

```css
.box {
  overflow-x: hidden;
  overflow-y: visible; /* ❌ brauzer buni 'auto' ga o'zgartiradi */
}
```

---

### `text-overflow`

Matn konteynerdan chiqib ketganda **qanday ko'rsatishni** belgilaydi. Ishlashi uchun qo'shimcha shartlar kerak:

```css
.text {
  white-space: nowrap; /* 1. matn yangi qatorga o'tmasin */
  overflow: hidden; /* 2. overflow hidden bo'lsin */
  text-overflow: ellipsis; /* 3. endi ishlaydi */
}
```

**`text-overflow: clip`** — default, matn shunchaki kesiladi:

```css
.box {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
}
/* "Bu juda uzun matnn" → "Bu juda uzun ma" */
```

**`text-overflow: ellipsis`** — oxiriga `...` qo'yiladi:

```css
.box {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* "Bu juda uzun matn" → "Bu juda uzun..." */
```

```css
/* Klassik card title */
.card-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}

/* Dropdown item */
.dropdown-item {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 150px;
}
```

**Ko'p qatorli ellipsis** — `-webkit-line-clamp` bilan:

```css
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 3 qatordan keyin ... */
  overflow: hidden;
}
/* 
  "Bu juda uzun matn bo'lib, 
   bir necha qatorga 
   cho'zilishi mumkin..." 
*/
```

---

### Amaliy misollar

```css
/* 1. Rasm konteyner */
.image-container {
  width: 300px;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 2. Chat oynasi */
.chat-window {
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}

/* 3. Kod bloki */
pre {
  overflow-x: auto;
  white-space: pre; /* kodda bo'shliqlar saqlansin */
  max-height: 400px;
  overflow-y: auto;
}

/* 4. Jadval scroll */
.table-wrapper {
  overflow-x: auto; /* kichik ekranda jadval scroll bo'ladi */
}
table {
  min-width: 600px;
}
```
