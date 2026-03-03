# **STAGE 7 — CSS Grid**

## Grid Container

CSS Grid - ikki o'lchovli (qator va ustun) layout tizimi. Flexboxdan farqi bir vaqtning o'zida ikkala yo'nalishni boshqarish imkonini beradi.

### display: grid

Grid konteyner yaratish uchun ota-elementga `display: grid` beriladi. Shu bilan ichidagi barcha to'g'ridan-to'g'ri bolalar **grid item**ga aylanadi.

**Dastur**:
```html
<style>
  .container {
    display: grid;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
    text-align: center;
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Itemlar bir ustun bo'ylab (yuqoridan pastga) joylashadi (standart bir ustun).

---

### grid-template-columns

Ustunlar soni va ularning kengligini belgilaydi.

**Dastur 1 - Ikki ustun**:
```html
<style>
  .columns-2 {
    display: grid;
    grid-template-columns: 200px 300px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightcoral;
    padding: 20px;
    margin: 5px;
    border: 1px solid red;
    text-align: center;
  }
</style>

<div class="columns-2">
  <div class="item">1 (200px)</div>
  <div class="item">2 (300px)</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```
Natija: 1-ustun 200px, 2-ustun 300px. 3 va 4-itemlar yangi qatorlarda shu ustunlarga joylashadi.

**Dastur 2 - Uch ustun foizda**:
```html
<style>
  .columns-percent {
    display: grid;
    grid-template-columns: 30% 40% 30%;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightgreen;
    padding: 20px;
    margin: 5px;
    border: 1px solid green;
  }
</style>

<div class="columns-percent">
  <div class="item">1 (30%)</div>
  <div class="item">2 (40%)</div>
  <div class="item">3 (30%)</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Uch ustun 30%-40%-30% nisbatda. Qatorlar avtomatik hosil bo'ladi.

**Dastur 3 - Aralash o'lchamlar**:
```html
<div style="display: grid; grid-template-columns: 100px 200px auto; background: #f0f0f0; padding: 10px;">
  <div style="background: lightblue; padding: 20px; margin: 5px;">100px</div>
  <div style="background: lightcoral; padding: 20px; margin: 5px;">200px</div>
  <div style="background: lightgreen; padding: 20px; margin: 5px;">auto</div>
  <div style="background: lightyellow; padding: 20px; margin: 5px;">4</div>
  <div style="background: lightpink; padding: 20px; margin: 5px;">5</div>
  <div style="background: lightgray; padding: 20px; margin: 5px;">6</div>
</div>
```
Natija: 1-ustun 100px, 2-ustun 200px, 3-ustun qolgan joyni egallaydi.

---

### grid-template-rows

Qatorlar soni va ularning balandligini belgilaydi.

**Dastur 1 - Qator balandliklari**:
```html
<style>
  .rows-fixed {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 150px 200px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    height: 500px;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
</style>

<div class="rows-fixed">
  <div class="item">1 (qator1:100px)</div>
  <div class="item">2 (qator1:100px)</div>
  <div class="item">3 (qator1:100px)</div>
  <div class="item">4 (qator2:150px)</div>
  <div class="item">5 (qator2:150px)</div>
  <div class="item">6 (qator2:150px)</div>
  <div class="item">7 (qator3:200px)</div>
  <div class="item">8 (qator3:200px)</div>
  <div class="item">9 (qator3:200px)</div>
</div>
```
Natija: 1-qator 100px, 2-qator 150px, 3-qator 200px balandlikda.

**Dastur 2 - Avtomatik qatorlar**:
```html
<style>
  .rows-auto {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 150px; /* faqat 2 qator belgilangan */
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightgreen;
    padding: 20px;
    margin: 5px;
  }
</style>

<div class="rows-auto">
  <div class="item">1 (100px)</div>
  <div class="item">2 (100px)</div>
  <div class="item">3 (150px)</div>
  <div class="item">4 (150px)</div>
  <div class="item">5 (auto)</div>
  <div class="item">6 (auto)</div>
</div>
```
Natija: 1-2 qatorlar belgilangan balandlikda, 3-qator avtomatik (content bo'yicha).

---

### gap (row-gap, column-gap)

Grid itemlar orasidagi bo'shliqni belgilaydi.

#### 1. `gap` (bir vaqtda)
- **Ta'rifi**: Qator va ustunlar orasidagi bo'shliqni bir xil qilib belgilaydi.

**Dastur**:
```html
<style>
  .gap-same {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    background: #f0f0f0;
    padding: 20px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    padding: 30px;
    text-align: center;
    border: 1px solid blue;
  }
</style>

<div class="gap-same">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Itemlar orasida 20px bo'shliq (qator va ustunlar orasi bir xil).

#### 2. `row-gap` va `column-gap`
- **Ta'rifi**: Qator va ustun bo'shliqlarini alohida belgilash.

**Dastur**:
```html
<style>
  .gap-different {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 30px;
    column-gap: 15px;
    background: #f0f0f0;
    padding: 20px;
    border: 2px solid black;
  }
  
  .item {
    background: lightcoral;
    padding: 30px;
    text-align: center;
    border: 1px solid red;
  }
</style>

<div class="gap-different">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
  <div class="item">9</div>
</div>
```
Natija: Qatorlar orasi 30px, ustunlar orasi 15px.

#### 3. `gap` bilan turli birliklar:
```html
<style>
  .gap-mixed {
    display: grid;
    grid-template-columns: 100px 200px 100px;
    gap: 10px 20px; /* row-gap column-gap */
    background: #f0f0f0;
    padding: 20px;
    border: 2px solid black;
  }
  
  .item {
    background: lightgreen;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="gap-mixed">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Qatorlar orasi 10px, ustunlar orasi 20px.

---

### Amaliy misollar

**Misol 1 - Oddiy grid layout**:
```html
<style>
  .simple-grid {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
    gap: 15px;
    background: #f0f0f0;
    padding: 20px;
    border: 2px solid black;
    width: 660px;
  }
  
  .box {
    background: lightblue;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
  }
</style>

<div class="simple-grid">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>
```
Natija: 3 ustun (200px har biri), 2 qator (100px), bo'shliq 15px.

**Misol 2 - Fr birligi bilan**:
```html
<style>
  .fr-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 100px 200px;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .cell {
    background: lightgreen;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="fr-grid">
  <div class="cell">1fr</div>
  <div class="cell">2fr</div>
  <div class="cell">1fr</div>
  <div class="cell">1fr</div>
  <div class="cell">2fr</div>
  <div class="cell">1fr</div>
</div>
```
Natija: O'rtadagi ustun ikki barobar keng (2:1:2:1 nisbat).

**Misol 3 - Header, content, footer**:
```html
<style>
  .page-layout {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 80px 400px 60px;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .header {
    grid-column: 1 / 3;
    background: lightcoral;
    padding: 20px;
    text-align: center;
  }
  
  .sidebar {
    background: lightblue;
    padding: 20px;
  }
  
  .main {
    background: lightgreen;
    padding: 20px;
  }
  
  .footer {
    grid-column: 1 / 3;
    background: lightyellow;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="page-layout">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar (1fr)</div>
  <div class="main">Main Content (3fr)</div>
  <div class="footer">Footer</div>
</div>
```
Natija: Header va footer to'liq enni egallaydi, sidebar va main yonma-yon.

---

### Asosiy farqlar jadvali

| Xususiyat | Vazifasi | Sintaksis | Misol |
|-----------|----------|-----------|-------|
| `display: grid` | Grid konteyner yaratish | `display: grid` | `display: grid;` |
| `grid-template-columns` | Ustunlar o'lchami | `grid-template-columns: qiymatlar` | `grid-template-columns: 100px 200px 1fr;` |
| `grid-template-rows` | Qatorlar o'lchami | `grid-template-rows: qiymatlar` | `grid-template-rows: 100px auto 200px;` |
| `gap` | Bir xil bo'shliq | `gap: qiymat` | `gap: 20px;` |
| `row-gap` | Qatorlar orasi | `row-gap: qiymat` | `row-gap: 15px;` |
| `column-gap` | Ustunlar orasi | `column-gap: qiymat` | `column-gap: 25px;` |

### Muhim eslatmalar:

1. **Grid ikki o'lchovli** - bir vaqtning o'zida qator va ustunlarni boshqaradi.
2. **Fr birligi** - flexbox'dagi `flex-grow`ga o'xshab, qolgan joyni taqsimlaydi.
3. **Avtomatik qatorlar** - agar itemlar ko'p bo'lsa, yangi qatorlar avtomatik hosil bo'ladi.
4. **Gap** - `margin` dan farqli, faqat itemlar orasiga bo'shliq qo'shadi, chetlariga emas.
5. **Qisqa yozuv** - `gap: 20px;` = `row-gap: 20px; column-gap: 20px;`
6. **Grid chiziqlar** - Har bir ustun va qator orasida raqamlangan chiziqlar mavjud (1 dan boshlanadi).

---
<br>
<br>
<br>
<br>
<br>

## Track Sizing

Grid track - ustun (column) yoki qator (row) larning o'lchamlarini belgilash usullari.

### 1. O'lchov birliklari (px, %, fr)

#### px - Piksel (qat'iy o'lcham)
- **Ta'rifi**: Aniq, o'zgarmas o'lcham.
- **Xususiyati**: Brauzer o'lchami o'zgarganda ham o'zgarmaydi.

**Dastur**:
```html
<style>
  .px-grid {
    display: grid;
    grid-template-columns: 150px 200px 100px;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    text-align: center;
    border: 1px solid blue;
  }
</style>

<div class="px-grid">
  <div class="item">150px</div>
  <div class="item">200px</div>
  <div class="item">100px</div>
  <div class="item">150px</div>
  <div class="item">200px</div>
  <div class="item">100px</div>
</div>
```
Natija: Ustunlar aniq piksel o'lchamlarida (150-200-100).

#### % - Foiz (nisbiy o'lcham)
- **Ta'rifi**: Konteyner kengligiga nisbatan foiz.
- **Xususiyati**: Konteyner o'lchami o'zgarganda o'zgaradi.

**Dastur**:
```html
<style>
  .percent-grid {
    display: grid;
    grid-template-columns: 25% 50% 25%;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 800px;
  }
  
  .item {
    background: lightcoral;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="percent-grid">
  <div class="item">25%</div>
  <div class="item">50%</div>
  <div class="item">25%</div>
</div>
```
Natija: 800px konteynerda: 200px | 400px | 200px (25% = 200px, 50% = 400px).

#### fr - Fraction (moslashuvchan birlik)
- **Ta'rifi**: Qolgan bo'sh joyni nisbatda taqsimlaydi.
- **Xususiyati**: Flexbox'dagi `flex-grow`ga o'xshaydi.

**Dastur 1 - Asosiy fr**:
```html
<style>
  .fr-grid {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 600px;
  }
  
  .item {
    background: lightgreen;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="fr-grid">
  <div class="item">1fr (150px)</div>
  <div class="item">2fr (300px)</div>
  <div class="item">1fr (150px)</div>
</div>
```
Natija: 600px - (2*10px gap) = 580px. 580/4 = 145px. 1fr=145px, 2fr=290px.

**Dastur 2 - Fr va px birgalikda**:
```html
<div style="display: grid; grid-template-columns: 200px 1fr 1fr; gap: 10px; background: #f0f0f0; padding: 10px;">
  <div style="background: lightblue; padding: 20px;">200px</div>
  <div style="background: lightcoral; padding: 20px;">1fr</div>
  <div style="background: lightgreen; padding: 20px;">1fr</div>
</div>
```
Natija: Birinchi ustun 200px, qolgan joy ikki fr ga teng taqsimlanadi.

---

### 2. repeat() funksiyasi

Takrorlanuvchi o'lchamlarni qisqaroq yozish uchun.

**Dastur 1 - Oddiy repeat**:
```html
<style>
  .repeat-simple {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightyellow;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="repeat-simple">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: `repeat(3, 1fr)` = `1fr 1fr 1fr` (uchta teng ustun).

**Dastur 2 - Murakkab repeat**:
```html
<style>
  .repeat-complex {
    display: grid;
    grid-template-columns: repeat(2, 100px 1fr 2fr);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
  }
  
  .item {
    background: lightpink;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="repeat-complex">
  <div class="item">100px</div>
  <div class="item">1fr</div>
  <div class="item">2fr</div>
  <div class="item">100px</div>
  <div class="item">1fr</div>
  <div class="item">2fr</div>
</div>
```
Natija: `repeat(2, 100px 1fr 2fr)` = `100px 1fr 2fr 100px 1fr 2fr` (6 ustun).

**Dastur 3 - Repeat bilan px va fr**:
```html
<div style="display: grid; grid-template-columns: repeat(4, 1fr) 200px; gap: 10px; background: #f0f0f0; padding: 10px;">
  <div style="background: lightblue; padding: 20px;">1fr</div>
  <div style="background: lightcoral; padding: 20px;">1fr</div>
  <div style="background: lightgreen; padding: 20px;">1fr</div>
  <div style="background: lightyellow; padding: 20px;">1fr</div>
  <div style="background: lightgray; padding: 20px;">200px</div>
</div>
```
Natija: 4 ta 1fr ustun + 200px ustun.

---

### 3. minmax() funksiyasi

Minimal va maksimal o'lcham chegarasini belgilaydi.

**Dastur 1 - Asosiy minmax**:
```html
<style>
  .minmax-basic {
    display: grid;
    grid-template-columns: minmax(100px, 200px) 1fr 1fr;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 600px;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    text-align: center;
  }
</style>

<div class="minmax-basic">
  <div class="item">minmax(100px,200px)</div>
  <div class="item">1fr</div>
  <div class="item">1fr</div>
</div>
```
Natija: Birinchi ustun 100px dan kichik bo'lmaydi, 200px dan katta bo'lmaydi.

**Dastur 2 - minmax bilan content**:
```html
<style>
  .minmax-content {
    display: grid;
    grid-template-columns: minmax(auto, 300px) 2fr;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightgreen;
    padding: 20px;
    text-align: center;
  }
  
  .long-text {
    background: lightcoral;
    padding: 20px;
  }
</style>

<div class="minmax-content">
  <div class="item">Qisqa matn</div>
  <div class="long-text">Bu juda uzun matn, lekin birinchi ustun 300px dan oshmaydi</div>
</div>
```
Natija: Birinchi ustun content bo'yicha lekin 300px chegarada.

**Dastur 3 - minmax(min-content, max-content)**:
```html
<style>
  .minmax-special {
    display: grid;
    grid-template-columns: minmax(min-content, max-content) 1fr;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
  }
  
  .item {
    background: lightyellow;
    padding: 20px;
  }
  
  .long {
    background: lightpink;
    padding: 20px;
    white-space: nowrap;
  }
</style>

<div class="minmax-special">
  <div class="item">Qisqa</div>
  <div class="long">Bu juda uzun matn bir qatorda</div>
</div>
```
Natija: Birinchi ustun minimal content kengligida, lekin maksimal contentdan oshmaydi.

---

### 4. auto-fill va auto-fit

`repeat()` funksiyasi bilan ishlatiladi. Qancha ustun sig'ishini avtomatik hisoblaydi.

#### auto-fill
- **Ta'rifi**: Mavjud bo'sh joyga imkon qadar ko'p track joylashtiradi. Bo'sh joy qolsa, bo'sh tracklar qoldiradi.

**Dastur**:
```html
<style>
  .auto-fill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 15px;
    background: #f0f0f0;
    padding: 15px;
    border: 2px solid black;
    width: 600px;
  }
  
  .item {
    background: lightblue;
    padding: 30px;
    text-align: center;
    border: 1px solid blue;
  }
</style>

<div class="auto-fill-grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
Natija: Har bir ustun min 120px. 600px ga 4-5 ustun sigadi. Bo'sh joy bo'lsa, bo'sh ustunlar qoladi.

#### auto-fit
- **Ta'rifi**: Mavjud bo'sh joyga imkon qadar ko'p track joylashtiradi. Bo'sh tracklarni yig'ib, mavjud itemlarni kengaytiradi.

**Dastur**:
```html
<style>
  .auto-fit-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 15px;
    background: #f0f0f0;
    padding: 15px;
    border: 2px solid black;
    width: 600px;
  }
  
  .item {
    background: lightgreen;
    padding: 30px;
    text-align: center;
    border: 1px solid green;
  }
</style>

<div class="auto-fit-grid">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
</div>
```
Natija: Har bir ustun min 120px. 5 ta item bo'lsa, ular kengayib butun joyni egallaydi.

#### auto-fill vs auto-fit farqi:
```html
<style>
  .compare {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    margin-bottom: 20px;
  }
  
  .compare-fit {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightcoral;
    padding: 20px;
    text-align: center;
  }
</style>

<h4>auto-fill (bo'sh joy qoldiradi):</h4>
<div class="compare">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>

<h4>auto-fit (bo'sh joyni taqsimlaydi):</h4>
<div class="compare-fit">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: auto-fill bo'sh joy qoldiradi, auto-fit itemlarni kengaytiradi.

---

### Amaliy misollar

**Misol 1 - Responsive galereya**:
```html
<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    background: #f0f0f0;
    padding: 20px;
    border: 2px solid black;
  }
  
  .card {
    background: white;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .card img {
    width: 100%;
    height: 150px;
    background: #ddd;
    display: block;
    margin-bottom: 10px;
  }
</style>

<div class="gallery">
  <div class="card"><img src="#">Rasm 1</div>
  <div class="card"><img src="#">Rasm 2</div>
  <div class="card"><img src="#">Rasm 3</div>
  <div class="card"><img src="#">Rasm 4</div>
  <div class="card"><img src="#">Rasm 5</div>
  <div class="card"><img src="#">Rasm 6</div>
</div>
```
Natija: Ekran kengligiga qarab, har bir karta min 200px, qancha sig'sa shuncha ustun.

**Misol 2 - Murakkab tracklar**:
```html
<style>
  .complex {
    display: grid;
    grid-template-columns: 
      minmax(100px, 150px) 
      repeat(2, 1fr 2fr) 
      minmax(200px, 300px);
    gap: 15px;
    background: #f0f0f0;
    padding: 15px;
  }
  
  .cell {
    background: lightblue;
    padding: 15px;
    text-align: center;
    border: 1px solid blue;
  }
</style>

<div class="complex">
  <div class="cell">1: 100-150px</div>
  <div class="cell">2: 1fr</div>
  <div class="cell">3: 2fr</div>
  <div class="cell">4: 1fr</div>
  <div class="cell">5: 2fr</div>
  <div class="cell">6: 200-300px</div>
</div>
```
Natija: 6 ustun: minmax, (1fr,2fr) ikki marta takror, minmax.

**Misol 3 - Dashboard layout**:
```html
<style>
  .dashboard {
    display: grid;
    grid-template-columns: 
      repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    background: #f5f5f5;
  }
  
  .widget {
    background: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    min-height: 150px;
  }
  
  .widget.wide {
    grid-column: span 2;
  }
</style>

<div class="dashboard">
  <div class="widget">Oddiy widget</div>
  <div class="widget wide">Keng widget (2 ustun)</div>
  <div class="widget">Oddiy widget</div>
  <div class="widget">Oddiy widget</div>
  <div class="widget">Oddiy widget</div>
</div>
```
Natija: Har bir widget min 250px, "wide" ikki ustun egallaydi.

---

### Asosiy farqlar jadvali

| Xususiyat | Vazifasi | Sintaksis | Misol |
|-----------|----------|-----------|-------|
| `px` | Qat'iy o'lcham | `100px` | `grid-template-columns: 200px 100px;` |
| `%` | Konteynerga nisbatan | `50%` | `grid-template-columns: 30% 70%;` |
| `fr` | Moslashuvchan qism | `1fr` | `grid-template-columns: 1fr 2fr;` |
| `repeat()` | Takrorlash | `repeat(n, o'lcham)` | `repeat(3, 1fr)` |
| `minmax()` | Min/max chegarasi | `minmax(min, max)` | `minmax(100px, 1fr)` |
| `auto-fill` | Bo'sh joyni to'ldirish | `repeat(auto-fill, ...)` | `repeat(auto-fill, 100px)` |
| `auto-fit` | Itemlarni kengaytirish | `repeat(auto-fit, ...)` | `repeat(auto-fit, minmax(100px, 1fr))` |

### Muhim eslatmalar:

1. **fr birligi** qolgan joyni taqsimlaydi, % va px dan keyin hisoblanadi.
2. **minmax()** responsive dizayn uchun muhim.
3. **auto-fill** va **auto-fit** farqi: auto-fill bo'sh tracklar qoldiradi, auto-fit ularni yig'adi.
4. **repeat()** murakkab tracklarni qisqaroq yozish imkonini beradi.
5. Track o'lchamlari kombinatsiyasi (px, fr, %, minmax) kuchli layoutlar yaratadi.
6. Responsive dizayn uchun `auto-fit` va `minmax()` kombinatsiyasi eng ko'p ishlatiladi.