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

---
<br>
<br>
<br>
<br>
<br>

## Item Placement

Grid itemlarni aniq joylarga qo'yish va ularni bir necha qator/ustunlarga yoyish.

### Grid chiziqlari tushunchasi

Gridda har bir ustun va qator orasida **chiziqlar** mavjud. Chiziqlar 1 dan boshlanadi va oxirgi chiziq -1 bilan ham belgilanadi.

```
1---[1-ustun]---2---[2-ustun]---3---[3-ustun]---4
|                |                |                |
1---[1-qator]---2---[2-qator]---3---[3-qator]---4
|                |                |                |
```

---

### 1. grid-column

Itemning gorizontal (ustun) bo'ylab qayerdan qayergacha joylashishini belgilaydi.

#### grid-column-start va grid-column-end
- **Ta'rifi**: Boshlanish va tugash chiziqlari raqamlari.
- **Shorthand**: `grid-column: start / end`

**Dastur 1 - Asosiy grid-column**:
```html
<style>
  .grid-basic {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    border: 1px solid blue;
  }
  
  .item1 { grid-column: 1 / 3; } /* 1-chiziqdan 3-chiziqqacha (2 ustun) */
  .item2 { grid-column: 3 / 4; } /* 3-chiziqdan 4-chiziqqacha (1 ustun) */
  .item3 { grid-column: 1 / 2; } /* 1-ustun */
  .item4 { grid-column: 2 / 4; } /* 2-ustundan 3-ustungacha (2 va 3) */
</style>

<div class="grid-basic">
  <div class="item item1">1 (1/3)</div>
  <div class="item item2">2 (3/4)</div>
  <div class="item item3">3 (1/2)</div>
  <div class="item item4">4 (2/4)</div>
</div>
```
Natija: Item1 2 ustun egallaydi, Item2 1 ustun, Item3 1-ustun, Item4 2-3 ustunlar.

**Dastur 2 - Span bilan**:
```html
<style>
  .grid-span {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
  }
  
  .cell {
    background: lightcoral;
    padding: 30px;
    text-align: center;
  }
  
  .span2 { grid-column: span 2; } /* 2 ustun egallaydi */
  .span3 { grid-column: span 3; } /* 3 ustun egallaydi */
  .full { grid-column: 1 / -1; } /* barcha ustunlar (-1 oxirgi chiziq) */
</style>

<div class="grid-span">
  <div class="cell span2">span 2</div>
  <div class="cell">1</div>
  <div class="cell">1</div>
  <div class="cell span3">span 3</div>
  <div class="cell">1</div>
  <div class="cell full">full width (1/-1)</div>
</div>
```
Natija: `span 2` 2 ustun, `span 3` 3 ustun, `1/-1` barcha ustunlarni egallaydi.

**Dastur 3 - Manfiy chiziqlar**:
```html
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; background: #f0f0f0; padding: 10px;">
  <div style="grid-column: 1 / -2; background: lightgreen; padding: 20px;">1 dan -2 gacha</div>
  <div style="grid-column: -2 / -1; background: lightyellow; padding: 20px;">-2 dan -1 gacha</div>
  <div style="grid-column: 1 / -1; background: lightblue; padding: 20px;">to'liq en</div>
</div>
```
Natija: -1 oxirgi chiziq, -2 oxirgidan oldingi chiziq.

---

### 2. grid-row

Itemning vertikal (qator) bo'ylab qayerdan qayergacha joylashishini belgilaydi.

#### grid-row-start va grid-row-end
- **Ta'rifi**: Qator chiziqlari raqamlari.
- **Shorthand**: `grid-row: start / end`

**Dastur 1 - Asosiy grid-row**:
```html
<style>
  .row-basic {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 80px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .box {
    background: lightblue;
    padding: 20px;
    border: 1px solid blue;
  }
  
  .box1 { grid-row: 1 / 3; } /* 1-qatordan 3-qatorgacha (2 qator) */
  .box2 { grid-row: 1 / 2; } /* 1-qator */
  .box3 { grid-row: 2 / 4; } /* 2-qatordan 4-qatorgacha (2-3 qatorlar) */
  .box4 { grid-row: 3 / 5; } /* 3-qatordan 5-qatorgacha (3-4 qatorlar) */
</style>

<div class="row-basic">
  <div class="box box1">1 (1/3)</div>
  <div class="box box2">2 (1/2)</div>
  <div class="box box3">3 (2/4)</div>
  <div class="box box4">4 (3/5)</div>
</div>
```
Natija: Itemlar belgilangan qatorlarni egallaydi.

**Dastur 2 - Row span**:
```html
<style>
  .row-span {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
  }
  
  .cell {
    background: lightgreen;
    padding: 20px;
    text-align: center;
  }
  
  .row2 { grid-row: span 2; } /* 2 qator egallaydi */
  .row3 { grid-row: span 3; } /* 3 qator egallaydi */
  .full-row { grid-row: 1 / -1; } /* barcha qatorlar */
</style>

<div class="row-span">
  <div class="cell row2">span 2</div>
  <div class="cell">1</div>
  <div class="cell">1</div>
  <div class="cell row3">span 3</div>
  <div class="cell">1</div>
  <div class="cell full-row">full height</div>
</div>
```
Natija: `span 2` 2 qator, `span 3` 3 qator, `1/-1` barcha qatorlarni egallaydi.

**Dastur 3 - Grid-column va grid-row birgalikda**:
```html
<style>
  .both-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
  }
  
  .area {
    background: lightcoral;
    padding: 20px;
  }
  
  .header { grid-column: 1 / 5; grid-row: 1 / 2; background: lightblue; }
  .sidebar { grid-column: 1 / 2; grid-row: 2 / 4; background: lightgreen; }
  .main { grid-column: 2 / 5; grid-row: 2 / 3; background: lightyellow; }
  .footer { grid-column: 2 / 5; grid-row: 3 / 4; background: lightpink; }
</style>

<div class="both-grid">
  <div class="area header">Header (1-5 ustun, 1-qator)</div>
  <div class="area sidebar">Sidebar (1-ustun, 2-3 qator)</div>
  <div class="area main">Main (2-5 ustun, 2-qator)</div>
  <div class="area footer">Footer (2-5 ustun, 3-qator)</div>
</div>
```
Natija: To'liq layout - header, sidebar, main, footer.

---

### 3. grid-area

Itemning joylashishini qisqacha belgilashning uch usuli:

#### Usul 1: grid-column + grid-row o'rniga
`grid-area: row-start / column-start / row-end / column-end`

**Dastur**:
```html
<style>
  .area-shorthand {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
  }
  
  .item1 { grid-area: 1 / 1 / 2 / 3; } /* row:1/2, col:1/3 */
  .item2 { grid-area: 1 / 3 / 3 / 4; } /* row:1/3, col:3/4 */
  .item3 { grid-area: 2 / 1 / 4 / 2; } /* row:2/4, col:1/2 */
  .item4 { grid-area: 2 / 2 / 3 / 3; } /* row:2/3, col:2/3 */
  .item5 { grid-area: 3 / 2 / 4 / 4; } /* row:3/4, col:2/4 */
</style>

<div class="area-shorthand">
  <div class="item item1">1</div>
  <div class="item item2">2</div>
  <div class="item item3">3</div>
  <div class="item item4">4</div>
  <div class="item item5">5</div>
</div>
```
Natija: Tartib: row-start/col-start/row-end/col-end.

#### Usul 2: Nomlangan grid area
`grid-template-areas` bilan nom berish va `grid-area` bilan nomni ishlatish.

**Dastur**:
```html
<style>
  .named-areas {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
      "header header header"
      "sidebar main right"
      "footer footer footer";
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    height: 400px;
  }
  
  .header { grid-area: header; background: lightblue; padding: 20px; }
  .sidebar { grid-area: sidebar; background: lightcoral; padding: 20px; }
  .main { grid-area: main; background: lightgreen; padding: 20px; }
  .right { grid-area: right; background: lightyellow; padding: 20px; }
  .footer { grid-area: footer; background: lightgray; padding: 20px; }
</style>

<div class="named-areas">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="right">Right Panel</div>
  <div class="footer">Footer</div>
</div>
```
Natija: Layout grid-template-areas bo'yicha joylashadi.

#### Usul 3: Qator va ustun nomlari
Chiziqlarga nom berish va shu nomlarni ishlatish.

**Dastur**:
```html
<style>
  .named-lines {
    display: grid;
    grid-template-columns: [main-start] 1fr [content-start] 2fr [content-end] 1fr [main-end];
    grid-template-rows: [top] 100px [middle] 200px [bottom];
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    height: 350px;
  }
  
  .box {
    background: lightblue;
    padding: 20px;
  }
  
  .box1 { grid-column: main-start / content-end; grid-row: top / middle; }
  .box2 { grid-column: content-end / main-end; grid-row: top / bottom; }
  .box3 { grid-column: main-start / content-start; grid-row: middle / bottom; }
</style>

<div class="named-lines">
  <div class="box box1">1</div>
  <div class="box box2">2</div>
  <div class="box box3">3</div>
</div>
```
Natija: Chiziq nomlari bilan joylashish.

---

### Amaliy misollar

**Misol 1 - Magazine layout**:
```html
<style>
  .magazine {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 150px);
    gap: 15px;
    background: #f0f0f0;
    padding: 15px;
    border: 2px solid black;
  }
  
  .article {
    background: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .featured {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    background: lightcoral;
  }
  
  .sidebar {
    grid-column: 4 / 5;
    grid-row: 1 / 4;
    background: lightblue;
  }
  
  .wide {
    grid-column: 1 / 4;
    background: lightgreen;
  }
</style>

<div class="magazine">
  <div class="article featured">Featured Article (2x2)</div>
  <div class="article">Article 2</div>
  <div class="article">Article 3</div>
  <div class="article sidebar">Sidebar (1x3)</div>
  <div class="article">Article 4</div>
  <div class="article wide">Wide Article (3x1)</div>
</div>
```

**Misol 2 - Photo gallery**:
```html
<style>
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-auto-rows: 150px;
    gap: 15px;
    background: #f0f0f0;
    padding: 15px;
  }
  
  .photo {
    background: #ddd;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #666;
  }
  
  .tall {
    grid-row: span 2;
    background: lightcoral;
  }
  
  .wide {
    grid-column: span 2;
    background: lightgreen;
  }
  
  .big {
    grid-column: span 2;
    grid-row: span 2;
    background: lightblue;
  }
</style>

<div class="gallery-grid">
  <div class="photo">1</div>
  <div class="photo tall">2 (tall)</div>
  <div class="photo wide">3 (wide)</div>
  <div class="photo">4</div>
  <div class="photo big">5 (big)</div>
  <div class="photo">6</div>
  <div class="photo">7</div>
  <div class="photo">8</div>
</div>
```

**Misol 3 - Holy Grail layout**:
```html
<style>
  .holy-grail {
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: 
      "header header header"
      "nav main aside"
      "footer footer footer";
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    height: 500px;
  }
  
  .header { grid-area: header; background: lightblue; padding: 20px; }
  .nav { grid-area: nav; background: lightcoral; padding: 20px; }
  .main { grid-area: main; background: lightgreen; padding: 20px; }
  .aside { grid-area: aside; background: lightyellow; padding: 20px; }
  .footer { grid-area: footer; background: lightgray; padding: 20px; }
  
  @media (max-width: 600px) {
    .holy-grail {
      grid-template-columns: 1fr;
      grid-template-areas: 
        "header"
        "nav"
        "main"
        "aside"
        "footer";
    }
  }
</style>

<div class="holy-grail">
  <div class="header">Header</div>
  <div class="nav">Navigation</div>
  <div class="main">Main Content</div>
  <div class="aside">Sidebar</div>
  <div class="footer">Footer</div>
</div>
```

---

### Asosiy farqlar jadvali

| Xususiyat | Sintaksis | Misol | Vazifasi |
|-----------|-----------|-------|----------|
| `grid-column` | `start / end` | `grid-column: 1 / 3;` | Ustunlar oralig'i |
| `grid-column` | `span n` | `grid-column: span 2;` | Necha ustun egallashi |
| `grid-row` | `start / end` | `grid-row: 2 / 4;` | Qatorlar oralig'i |
| `grid-row` | `span n` | `grid-row: span 3;` | Necha qator egallashi |
| `grid-area` | `row-start/col-start/row-end/col-end` | `grid-area: 1/1/3/4;` | To'liq joylashuv |
| `grid-area` | `name` | `grid-area: header;` | Nomlangan area |

### Muhim eslatmalar:

1. **Chiziqlar raqamlari**: 1 dan boshlanadi, -1 oxirgi chiziq.
2. **Span**: `span 2` ikki qator/ustun egallaydi, qayerdan boshlanishi avtomatik.
3. **Nomlangan area** eng o'qiladigan usul.
4. **Overlap**: Agar itemlar bir joyga tushsa, keyingi item oldingisini ustidan yopadi.
5. **Responsive**: Media query bilan grid-area nomlarini o'zgartirish mumkin.
6. **grid-auto-flow**: Agar item joylashtirilmagan bo'lsa, avtomatik joylashadi.

---
<br>
<br>
<br>
<br>
<br>

## Alignment

Gridda elementlarni gorizontal va vertikal bo'ylab joylashtirish xususiyatlari.

### Asosiy tushunchalar

- **Justify** - gorizontal o'q (qator bo'ylab)
- **Align** - vertikal o'q (ustun bo'ylab)
- **Items** - grid itemlarning o'z katakchalari ichida joylashishi
- **Content** - butun grid tracklarning konteyner ichida joylashishi

---

### 1. justify-items

Barcha grid itemlarni **gorizontal** (qator bo'ylab) o'z katakchalari ichida joylashtirish.

#### Qiymatlari:
- `stretch` (standart) - katakchani to'ldiradi
- `start` - chap tomonda
- `end` - o'ng tomonda
- `center` - markazda

**Dastur 1 - stretch (standart)**:
```html
<style>
  .grid-demo {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(2, 120px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    border: 1px solid blue;
  }
  
  .item-content {
    background: lightcoral;
    padding: 10px;
    width: 50px;
  }
</style>

<div class="grid-demo" style="justify-items: stretch;">
  <div class="item"><div class="item-content">1</div></div>
  <div class="item"><div class="item-content">2</div></div>
  <div class="item"><div class="item-content">3</div></div>
  <div class="item"><div class="item-content">4</div></div>
  <div class="item"><div class="item-content">5</div></div>
  <div class="item"><div class="item-content">6</div></div>
</div>
<p>stretch: itemlar katakchani to'ldiradi</p>
```
Natija: Har bir item butun katakchani egallaydi.

**Dastur 2 - start, end, center**:
```html
<style>
  .items-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .box {
    background: lightgreen;
    padding: 10px;
    width: 60px;
    height: 60px;
    border: 1px solid green;
  }
</style>

<h4>justify-items: start</h4>
<div class="items-grid" style="justify-items: start;">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>

<h4>justify-items: center</h4>
<div class="items-grid" style="justify-items: center;">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>

<h4>justify-items: end</h4>
<div class="items-grid" style="justify-items: end;">
  <div class="box">1</div>
  <div class="box">2</div>
  <div class="box">3</div>
  <div class="box">4</div>
  <div class="box">5</div>
  <div class="box">6</div>
</div>
```
Natija: 
- `start`: boxlar chap tomonda
- `center`: boxlar o'rtada
- `end`: boxlar o'ng tomonda

---

### 2. align-items

Barcha grid itemlarni **vertikal** (ustun bo'ylab) o'z katakchalari ichida joylashtirish.

#### Qiymatlari:
- `stretch` (standart) - katakchani to'ldiradi
- `start` - yuqori tomonda
- `end` - pastki tomonda
- `center` - markazda

**Dastur 1 - align-items qiymatlari**:
```html
<style>
  .align-demo {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 150px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .cell {
    background: lightcoral;
    padding: 10px;
    width: 80px;
    height: 50px;
    border: 1px solid red;
  }
</style>

<h4>align-items: start (yuqori)</h4>
<div class="align-demo" style="align-items: start;">
  <div class="cell">1</div>
  <div class="cell">2</div>
  <div class="cell">3</div>
  <div class="cell">4</div>
  <div class="cell">5</div>
  <div class="cell">6</div>
</div>

<h4>align-items: center (o'rta)</h4>
<div class="align-demo" style="align-items: center;">
  <div class="cell">1</div>
  <div class="cell">2</div>
  <div class="cell">3</div>
  <div class="cell">4</div>
  <div class="cell">5</div>
  <div class="cell">6</div>
</div>

<h4>align-items: end (past)</h4>
<div class="align-demo" style="align-items: end;">
  <div class="cell">1</div>
  <div class="cell">2</div>
  <div class="cell">3</div>
  <div class="cell">4</div>
  <div class="cell">5</div>
  <div class="cell">6</div>
</div>

<h4>align-items: stretch (to'ldirish)</h4>
<div class="align-demo" style="align-items: stretch;">
  <div class="cell" style="height: auto;">1</div>
  <div class="cell" style="height: auto;">2</div>
  <div class="cell" style="height: auto;">3</div>
  <div class="cell" style="height: auto;">4</div>
  <div class="cell" style="height: auto;">5</div>
  <div class="cell" style="height: auto;">6</div>
</div>
```
Natija: 
- `start`: katakcha yuqorisida
- `center`: o'rtada
- `end`: pastda
- `stretch`: butun balandlikni egallaydi

**Dastur 2 - justify-items va align-items birgalikda**:
```html
<style>
  .both-demo {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    grid-template-rows: repeat(2, 150px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .both-item {
    background: lightblue;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid blue;
  }
</style>

<div class="both-demo" style="justify-items: center; align-items: center;">
  <div class="both-item">1</div>
  <div class="both-item">2</div>
  <div class="both-item">3</div>
  <div class="both-item">4</div>
  <div class="both-item">5</div>
  <div class="both-item">6</div>
</div>
<p>justify-items: center, align-items: center - to'liq markazlash</p>
```

---

### 3. justify-content

Butun grid tracklarni (barcha ustunlarni) **gorizontal** konteyner ichida joylashtirish. Grid ustunlari konteynerdan kichik bo'lganda ishlaydi.

#### Qiymatlari:
- `start` (standart) - chap tomonda
- `end` - o'ng tomonda
- `center` - markazda
- `space-between` - ustunlar orasi teng, chetlarida bo'sh joy yo'q
- `space-around` - har bir ustun atrofida teng bo'shliq
- `space-evenly` - barcha bo'shliqlar teng

**Dastur 1 - justify-content qiymatlari**:
```html
<style>
  .content-demo {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 80px;
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 600px;
    height: 120px;
  }
  
  .track-item {
    background: lightgreen;
    padding: 20px;
    text-align: center;
    border: 1px solid green;
  }
</style>

<h4>justify-content: start</h4>
<div class="content-demo" style="justify-content: start;">
  <div class="track-item">1</div>
  <div class="track-item">2</div>
  <div class="track-item">3</div>
</div>

<h4>justify-content: center</h4>
<div class="content-demo" style="justify-content: center;">
  <div class="track-item">1</div>
  <div class="track-item">2</div>
  <div class="track-item">3</div>
</div>

<h4>justify-content: end</h4>
<div class="content-demo" style="justify-content: end;">
  <div class="track-item">1</div>
  <div class="track-item">2</div>
  <div class="track-item">3</div>
</div>

<h4>justify-content: space-between</h4>
<div class="content-demo" style="justify-content: space-between;">
  <div class="track-item">1</div>
  <div class="track-item">2</div>
  <div class="track-item">3</div>
</div>

<h4>justify-content: space-around</h4>
<div class="content-demo" style="justify-content: space-around;">
  <div class="track-item">1</div>
  <div class="track-item">2</div>
  <div class="track-item">3</div>
</div>

<h4>justify-content: space-evenly</h4>
<div class="content-demo" style="justify-content: space-evenly;">
  <div class="track-item">1</div>
  <div class="track-item">2</div>
  <div class="track-item">3</div>
</div>
```
Natija: 
- `start`: chapda
- `center`: markazda
- `end`: o'ngda
- `space-between`: 1 chap, 3 o'ng, 2 o'rtada
- `space-around`: har bir atrofida teng bo'shliq
- `space-evenly`: hamma bo'shliqlar teng

---

### 4. align-content

Butun grid tracklarni (barcha qatorlarni) **vertikal** konteyner ichida joylashtirish. Grid qatorlari konteynerdan kichik bo'lganda ishlaydi.

#### Qiymatlari:
- `start` (standart) - yuqori tomonda
- `end` - pastki tomonda
- `center` - markazda
- `space-between` - qatorlar orasi teng, chetlarida bo'sh joy yo'q
- `space-around` - har bir qator atrofida teng bo'shliq
- `space-evenly` - barcha bo'shliqlar teng

**Dastur 1 - align-content qiymatlari**:
```html
<style>
  .align-content-demo {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(2, 80px);
    gap: 10px;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 400px;
    height: 400px;
  }
  
  .content-cell {
    background: lightcoral;
    padding: 20px;
    text-align: center;
    border: 1px solid red;
  }
</style>

<h4>align-content: start (yuqori)</h4>
<div class="align-content-demo" style="align-content: start;">
  <div class="content-cell">1</div>
  <div class="content-cell">2</div>
  <div class="content-cell">3</div>
  <div class="content-cell">4</div>
  <div class="content-cell">5</div>
  <div class="content-cell">6</div>
</div>

<h4>align-content: center (o'rta)</h4>
<div class="align-content-demo" style="align-content: center;">
  <div class="content-cell">1</div>
  <div class="content-cell">2</div>
  <div class="content-cell">3</div>
  <div class="content-cell">4</div>
  <div class="content-cell">5</div>
  <div class="content-cell">6</div>
</div>

<h4>align-content: end (past)</h4>
<div class="align-content-demo" style="align-content: end;">
  <div class="content-cell">1</div>
  <div class="content-cell">2</div>
  <div class="content-cell">3</div>
  <div class="content-cell">4</div>
  <div class="content-cell">5</div>
  <div class="content-cell">6</div>
</div>

<h4>align-content: space-between</h4>
<div class="align-content-demo" style="align-content: space-between;">
  <div class="content-cell">1</div>
  <div class="content-cell">2</div>
  <div class="content-cell">3</div>
  <div class="content-cell">4</div>
  <div class="content-cell">5</div>
  <div class="content-cell">6</div>
</div>

<h4>align-content: space-around</h4>
<div class="align-content-demo" style="align-content: space-around;">
  <div class="content-cell">1</div>
  <div class="content-cell">2</div>
  <div class="content-cell">3</div>
  <div class="content-cell">4</div>
  <div class="content-cell">5</div>
  <div class="content-cell">6</div>
</div>
```
Natija: 
- `start`: qatorlar yuqorida
- `center`: o'rtada
- `end`: pastda
- `space-between`: 1-qator tepada, 2-qator pastda
- `space-around`: qatorlar atrofida teng bo'shliq

---

### Amaliy misollar

**Misol 1 - To'liq markazlash**:
```html
<style>
  .center-all {
    display: grid;
    grid-template-columns: 200px;
    grid-template-rows: 150px;
    justify-content: center;
    align-content: center;
    justify-items: center;
    align-items: center;
    background: #f0f0f0;
    border: 2px solid black;
    height: 400px;
    width: 400px;
  }
  
  .center-box {
    background: lightblue;
    padding: 20px;
    width: 100px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<div class="center-all">
  <div class="center-box">Markazda</div>
</div>
<p>Konteynerda ham, katakchada ham markazlash</p>
```

**Misol 2 - Kartochkalar gridi**:
```html
<style>
  .card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    background: #f0f0f0;
    padding: 20px;
    border: 2px solid black;
    min-height: 500px;
    align-content: center;
    justify-content: center;
  }
  
  .card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 250px;
  }
  
  .card img {
    width: 100px;
    height: 100px;
    background: #ddd;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  
  .card .title {
    font-weight: bold;
    margin-bottom: 10px;
  }
</style>

<div class="card-grid">
  <div class="card"><img src="#"><div class="title">Karta 1</div><p>Matn</p></div>
  <div class="card"><img src="#"><div class="title">Karta 2</div><p>Matn</p></div>
  <div class="card"><img src="#"><div class="title">Karta 3</div><p>Matn</p></div>
  <div class="card"><img src="#"><div class="title">Karta 4</div><p>Matn</p></div>
</div>
```

**Misol 3 - Dashboard widgetlari**:
```html
<style>
  .dashboard {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 20px;
    background: #f0f0f0;
    padding: 20px;
    border: 2px solid black;
    height: 500px;
    align-content: space-around;
    justify-content: space-evenly;
  }
  
  .widget {
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-items: start;
    align-items: start;
  }
  
  .widget-header {
    font-weight: bold;
    margin-bottom: 10px;
    align-self: center;
  }
  
  .widget-content {
    flex: 1;
    align-self: stretch;
    background: #f9f9f9;
    padding: 10px;
  }
</style>

<div class="dashboard">
  <div class="widget"><div class="widget-header">Soat</div><div class="widget-content">14:30</div></div>
  <div class="widget"><div class="widget-header">Ob-havo</div><div class="widget-content">Quyoshli</div></div>
  <div class="widget"><div class="widget-header">Statistika</div><div class="widget-content">75%</div></div>
  <div class="widget"><div class="widget-header">Xabarlar</div><div class="widget-content">3 ta</div></div>
  <div class="widget"><div class="widget-header">Kalendar</div><div class="widget-content">5-mart</div></div>
  <div class="widget"><div class="widget-header">Sozlamalar</div><div class="widget-content">...</div></div>
</div>
```

---

### Asosiy farqlar jadvali

| Xususiyat | O'q | Ta'sir doirasi | Qiymatlar |
|-----------|-----|----------------|-----------|
| `justify-items` | Gorizontal | Itemlar katak ichida | stretch, start, center, end |
| `align-items` | Vertikal | Itemlar katak ichida | stretch, start, center, end |
| `justify-content` | Gorizontal | Butun grid tracklar | start, end, center, space-between, space-around, space-evenly |
| `align-content` | Vertikal | Butun grid tracklar | start, end, center, space-between, space-around, space-evenly |

### Muhim eslatmalar:

1. **Items vs Content**:
   - `justify/align-items` - itemlarning o'z katakchalari ichida joylashishi
   - `justify/align-content` - butun gridning konteyner ichida joylashishi

2. **Content ishlashi** uchun grid tracklari konteynerdan kichik bo'lishi kerak.

3. **Items ishlashi** uchun itemlar katakchalardan kichik bo'lishi kerak.

4. **To'liq markazlash** uchun:
   ```css
   .container {
     display: grid;
     justify-content: center;
     align-content: center;
     justify-items: center;
     align-items: center;
   }
   ```

5. **Space-* qiymatlari** faqat `justify/align-content` da ishlaydi.

6. **Shorthand** yo'q - har bir xususiyat alohida yoziladi.