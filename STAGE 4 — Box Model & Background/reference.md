# **STAGE 4 — Box Model & Background**

## Box Model

Har bir HTML elementi to'rt qatlamdan iborat "quti" (box) sifatida modellashtirilgan.

### Box Model komponentlari

```
┌─────────────────────────────────────┐
│         Margin (tashqi joy)         │
│  ┌───────────────────────────────┐  │
│  │        Border (chegara)       │  │
│  │  ┌─────────────────────────┐  │  │
│  │  │      Padding (ichki)    │  │  │
│  │  │  ┌───────────────────┐  │  │  │
│  │  │  │     Content       │  │  │  │
│  │  │  │    (kontent)      │  │  │  │
│  │  │  └───────────────────┘  │  │  │
│  │  └─────────────────────────┘  │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
```

#### 1. Content (Kontent)
- **Ta'rifi**: Matn, rasm yoki boshqa elementlar joylashadigan asosiy qism.
- **Xususiyati**: `width` va `height` orqali o'lcham beriladi.

#### 2. Padding (Ichki joy)
- **Ta'rifi**: Content va border orasidagi bo'shliq.
- **Xususiyati**: Element fon rangigacha cho'ziladi.

#### 3. Border (Chegara)
- **Ta'rifi**: Padding va margin orasidagi chiziq.
- **Xususiyati**: Qalinligi, uslubi va rangi belgilanadi.

#### 4. Margin (Tashqi joy)
- **Ta'rifi**: Elementdan tashqaridagi bo'shliq.
- **Xususiyati**: Boshqa elementlar bilan oraliqni belgilaydi.

---

### Box Model komponentlari amaliy

**Dastur 1 - Asosiy box model**:
```html
<style>
  .box-model-demo {
    width: 300px;              /* Content kengligi */
    padding: 20px;             /* Ichki bo'shliq */
    border: 5px solid blue;    /* Chegara */
    margin: 30px;              /* Tashqi bo'shliq */
    background-color: lightblue;
  }
</style>

<div class="box-model-demo">
  Bu element box model komponentlarini ko'rsatadi:
  width: 300px,
  padding: 20px,
  border: 5px,
  margin: 30px
</div>
<div class="box-model-demo">
  Ikkinchi element margin tufayli birinchidan 60px uzoqlikda
</div>
```
Natija: Element umumiy eni = 300 + 40(padding) + 10(border) = 350px. Ikki element orasi 60px.

**Dastur 2 - Har bir tomonni alohida**:
```html
<style>
  .box-detail {
    width: 200px;
    height: 150px;
    
    /* Padding har tomonda har xil */
    padding-top: 10px;
    padding-right: 20px;
    padding-bottom: 30px;
    padding-left: 40px;
    
    /* Border har xil */
    border-top: 2px solid red;
    border-right: 4px dashed green;
    border-bottom: 6px dotted blue;
    border-left: 8px double orange;
    
    /* Margin har xil */
    margin-top: 5px;
    margin-right: 15px;
    margin-bottom: 25px;
    margin-left: 35px;
    
    background-color: lightyellow;
  }
</style>

<div class="box-detail">
  Har bir tomonda har xil padding, border va margin
</div>
```
Natija: Elementning har tomonida turlicha qiymatlar.

**Dastur 3 - Shorthand yozuvlar**:
```html
<style>
  .shorthand-box {
    width: 250px;
    height: 150px;
    
    /* Padding: yuqori o'ng pastki chap */
    padding: 10px 20px 30px 40px;
    
    /* Border: qalinlik uslub rang */
    border: 3px solid purple;
    
    /* Margin: yuqori o'ng pastki chap */
    margin: 5px 15px 25px 35px;
    
    background-color: lightgreen;
  }
  
  .shorthand-2 {
    width: 200px;
    
    /* Padding: yuqori/pastki chap/o'ng */
    padding: 20px 40px;
    
    /* Margin: yuqori/pastki chap/o'ng */
    margin: 10px 30px;
    
    border: 2px solid brown;
    background-color: lightcoral;
  }
  
  .shorthand-3 {
    width: 200px;
    
    /* Padding: hamma tomon bir xil */
    padding: 25px;
    
    /* Margin: hamma tomon bir xil */
    margin: 15px;
    
    border: 2px solid darkblue;
    background-color: lightpink;
  }
</style>

<div class="shorthand-box">4 ta qiymatli shorthand</div>
<div class="shorthand-2">2 ta qiymatli shorthand</div>
<div class="shorthand-3">1 ta qiymatli shorthand</div>
```
Natija: 
- 4 ta qiymat: yuqori, o'ng, pastki, chap
- 2 ta qiymat: birinchi yuqori/pastki, ikkinchi chap/o'ng
- 1 ta qiymat: hamma tomon bir xil

**Dastur 4 - Margin avtomatik**:
```html
<style>
  .auto-margin {
    width: 200px;
    height: 100px;
    background-color: lightblue;
    border: 2px solid blue;
    
    /* Chap va o'ng margin auto - elementni markazlashtiradi */
    margin-left: auto;
    margin-right: auto;
  }
  
  .margin-auto-left {
    width: 150px;
    background-color: lightcoral;
    border: 2px solid red;
    margin-right: auto;  /* Chapga surish */
  }
  
  .margin-auto-right {
    width: 150px;
    background-color: lightgreen;
    border: 2px solid green;
    margin-left: auto;   /* O'ngga surish */
  }
</style>

<div class="auto-margin">margin: 0 auto (markazda)</div>
<div class="margin-auto-left">margin-right: auto (chapda)</div>
<div class="margin-auto-right">margin-left: auto (o'ngda)</div>
```
Natija: `margin: 0 auto` elementni gorizontal markazlashtiradi.

---

### Box Sizing

`box-sizing` xususiyati elementning umumiy eni va balandligi qanday hisoblanishini belgilaydi.

#### 1. `content-box` (standart)
- **Ta'rifi**: `width` va `height` faqat contentga taalluqli.
- **Formula**: Umumiy eni = width + padding-left + padding-right + border-left + border-right

**Dastur**:
```html
<style>
  .content-box-example {
    width: 300px;
    height: 100px;
    padding: 20px;
    border: 5px solid red;
    margin: 10px;
    background-color: lightcoral;
    box-sizing: content-box; /* Standart */
  }
  
  .border-box-example {
    width: 300px;
    height: 100px;
    padding: 20px;
    border: 5px solid blue;
    margin: 10px;
    background-color: lightblue;
    box-sizing: border-box;
  }
</style>

<h4>content-box (standart):</h4>
<div class="content-box-example">
  width: 300px + padding:40px + border:10px = 350px (umumiy)
</div>

<h4>border-box:</h4>
<div class="border-box-example">
  width: 300px (padding va border ichida) = 300px (umumiy)
</div>

<p>Ikkala element ham width:300px, lekin content-box kattaroq joy egallaydi</p>
```
Natija: 
- `content-box`: umumiy eni 350px (300 + 40 + 10)
- `border-box`: umumiy eni 300px (padding va border width ichiga sig'dirilgan)

#### 2. `border-box`
- **Ta'rifi**: `width` va `height` content + padding + border ni o'z ichiga oladi.
- **Formula**: Umumiy eni = width (padding va border shu qiymat ichida)

**Dastur - Universal border-box**:
```html
<style>
  /* Universal selector - barcha elementlarga qo'llash */
  * {
    box-sizing: border-box;
  }
  
  .container {
    width: 500px;
    background-color: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .column {
    float: left;
    width: 50%;
    padding: 20px;
    border: 2px solid green;
    background-color: lightgreen;
  }
  
  .clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
</style>

<div class="container clearfix">
  <div class="column">Chap ustun (50% = 250px, padding va border bilan birga)</div>
  <div class="column">O'ng ustun (50% = 250px)</div>
</div>

<p>border-box bilan 50%+50%=100% to'liq sig'adi</p>
```
Natija: Ikki ustun yonma-yon to'liq sig'adi. Agar content-box bo'lganda, padding va border tufayli sig'may ketgan bo'lardi.

**Dastur 3 - Box sizing solishtirish**:
```html
<style>
  .compare-box {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
  }
  
  .content-box-demo {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid red;
    background-color: lightcoral;
  }
  
  .border-box-demo {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid blue;
    background-color: lightblue;
  }
  
  .measure {
    background-color: #f0f0f0;
    padding: 5px;
    font-size: 14px;
    margin-top: 5px;
  }
</style>

<div class="compare-box">
  <div>
    <div class="content-box-demo">content-box</div>
    <div class="measure">Umumiy eni: 200px + 40px + 10px = 250px</div>
  </div>
  <div>
    <div class="border-box-demo">border-box</div>
    <div class="measure">Umumiy eni: 200px (padding va border ichida)</div>
  </div>
</div>

<div style="background: #f0f0f0; padding: 10px; width: 250px; border: 1px dashed black;">
  250px li konteyner - content-box sig'maydi, border-box sig'adi
</div>
```

---

### Amaliy misollar

**Misol 1 - Kartochka yaratish**:
```html
<style>
  * {
    box-sizing: border-box;
  }
  
  .card {
    width: 300px;
    padding: 25px;
    border: 2px solid #ddd;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background: white;
  }
  
  .card-image {
    width: 100%;
    height: 150px;
    background: #f0f0f0;
    margin-bottom: 15px;
    border-radius: 5px;
  }
  
  .card-title {
    margin: 0 0 10px 0;
    font-size: 20px;
    border-bottom: 2px solid #333;
    padding-bottom: 5px;
  }
  
  .card-text {
    margin: 0 0 15px 0;
    line-height: 1.5;
  }
  
  .card-button {
    display: inline-block;
    padding: 10px 20px;
    background: blue;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-right: 10px;
  }
</style>

<div class="card">
  <div class="card-image"></div>
  <h3 class="card-title">Kartochka sarlavhasi</h3>
  <p class="card-text">Bu kartochka box modeldan foydalanadi: padding, border, margin, border-radius.</p>
  <a href="#" class="card-button">Batafsil</a>
  <a href="#" class="card-button">Saqlash</a>
</div>
```

**Misol 2 - Margin collapsing**:
```html
<style>
  .collapse-demo {
    background: #f0f0f0;
    padding: 1px;
  }
  
  .box1 {
    width: 200px;
    height: 100px;
    background: lightblue;
    margin-bottom: 30px;
  }
  
  .box2 {
    width: 200px;
    height: 100px;
    background: lightcoral;
    margin-top: 20px;
  }
  
  .box3 {
    width: 200px;
    height: 100px;
    background: lightgreen;
    margin-bottom: 30px;
  }
  
  .parent {
    background: lightgray;
    margin-top: 30px;
    padding: 1px; /* Bu collapsingni oldini oladi */
  }
  
  .child {
    width: 150px;
    height: 50px;
    background: lightyellow;
    margin-top: 20px;
  }
</style>

<h4>Margin collapsing (vertikal marginlar qo'shilmaydi):</h4>
<div class="collapse-demo">
  <div class="box1">margin-bottom:30px</div>
  <div class="box2">margin-top:20px</div>
  <p>Ikkala margin orasidagi masofa 50px emas, 30px (kattasi)</p>
</div>

<h4>Parent-child margin collapsing:</h4>
<div class="parent">
  <div class="child">child margin-top:20px</div>
</div>
<p>Parentda padding bo'lmasa, child margin parentdan tashqariga chiqadi</p>
```

**Misol 3 - Responsive box**:
```html
<style>
  * {
    box-sizing: border-box;
  }
  
  .responsive-box {
    width: 90%;
    max-width: 600px;
    min-width: 300px;
    margin: 20px auto;
    padding: 5%;
    border: 3px solid #333;
    background: #f9f9f9;
  }
  
  .inner-box {
    width: 100%;
    padding: 15px;
    border: 2px dashed blue;
    background: white;
    margin-top: 20px;
  }
  
  .box-padding-example {
    display: inline-block;
    width: calc(33.33% - 10px);
    padding: 20px 10px;
    margin: 5px;
    background: lightblue;
    border: 1px solid blue;
    text-align: center;
  }
</style>

<div class="responsive-box">
  <h3>Responsive Box</h3>
  <p>Width: 90%, max-width:600px, padding:5%</p>
  
  <div class="inner-box">
    Inner box - padding va border bilan
  </div>
  
  <div style="margin-top: 20px;">
    <span class="box-padding-example">1</span>
    <span class="box-padding-example">2</span>
    <span class="box-padding-example">3</span>
  </div>
</div>
```

---

### Box Model xususiyatlari jadvali

| Xususiyat | Vazifasi | Shorthand | Misol |
|-----------|----------|-----------|-------|
| `width` | Content kengligi | - | `width: 300px;` |
| `height` | Content balandligi | - | `height: 200px;` |
| `padding` | Ichki bo'shliq | `padding: top right bottom left;` | `padding: 10px 20px;` |
| `border` | Chegara | `border: width style color;` | `border: 2px solid red;` |
| `margin` | Tashqi bo'shliq | `margin: top right bottom left;` | `margin: 5px auto;` |
| `box-sizing` | Hisoblash usuli | - | `box-sizing: border-box;` |

---
<br>
<br>
<br>
<br>
<br>

## Background

CSS da fon (background) xususiyatlari elementga rang, rasm va gradient qo'shish imkonini beradi.

### 1. background-color

Element fon rangini belgilaydi.

**Dastur 1 - Asosiy ranglar**:
```html
<style>
  .color-box {
    width: 200px;
    height: 100px;
    margin: 10px;
    padding: 20px;
    text-align: center;
    color: white;
  }
  
  .red { background-color: red; }
  .blue { background-color: #0000ff; }
  .green { background-color: rgb(0, 255, 0); color: black; }
  .rgba { background-color: rgba(255, 0, 0, 0.5); color: black; }
  .hsl { background-color: hsl(200, 100%, 50%); }
</style>

<div class="color-box red">red</div>
<div class="color-box blue">#0000ff</div>
<div class="color-box green">rgb(0,255,0)</div>
<div class="color-box rgba">rgba(255,0,0,0.5)</div>
<div class="color-box hsl">hsl(200,100%,50%)</div>
```
Natija: Har xil rang formatlari bilan fon ranglari.

**Dastur 2 - Transparent**:
```html
<style>
  .parent {
    background-color: lightblue;
    padding: 20px;
    width: 300px;
  }
  
  .transparent {
    background-color: transparent;
    padding: 15px;
    border: 2px solid black;
    margin-bottom: 10px;
  }
  
  .semi-transparent {
    background-color: rgba(255, 0, 0, 0.3);
    padding: 15px;
    border: 2px solid red;
  }
</style>

<div class="parent">
  <div class="transparent">transparent (ota fon ko'rinadi)</div>
  <div class="semi-transparent">rgba(255,0,0,0.3) - yarim shaffof</div>
</div>
```

---

### 2. background-image

Elementga rasm qo'yish.

**Dastur 1 - Asosiy rasm**:
```html
<style>
  .image-bg {
    width: 400px;
    height: 200px;
    background-image: url('https://via.placeholder.com/400x200');
    border: 2px solid black;
    margin-bottom: 10px;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
  
  .image-bg-linear {
    width: 400px;
    height: 200px;
    background-image: linear-gradient(to right, red, blue);
    border: 2px solid black;
  }
</style>

<div class="image-bg">Fon rasmi</div>
<div class="image-bg-linear">Linear gradient (ham rasm hisoblanadi)</div>
```

**Dastur 2 - Rasm va rang birgalikda**:
```html
<style>
  .image-color {
    width: 400px;
    height: 200px;
    background-image: url('https://via.placeholder.com/400x200/ff0000/ffffff?text=Placeholder');
    background-color: lightblue; /* rasm yuklanmasa ko'rinadi */
    border: 2px solid black;
    margin-bottom: 10px;
  }
  
  .image-overlay {
    width: 400px;
    height: 200px;
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                      url('https://via.placeholder.com/400x200');
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
</style>

<div class="image-color">Rasm + rang (zaxira)</div>
<div class="image-overlay">Rasm ustida qora qatlam</div>
```

---

### 3. background-repeat

Rasmni takrorlash usulini belgilaydi.

**Dastur 1 - Repeat qiymatlari**:
```html
<style>
  .repeat-demo {
    width: 300px;
    height: 150px;
    background-image: url('https://via.placeholder.com/50x50/ff0000/ffffff?text=.');
    border: 2px solid black;
    margin-bottom: 20px;
  }
  
  .repeat { background-repeat: repeat; }
  .repeat-x { background-repeat: repeat-x; }
  .repeat-y { background-repeat: repeat-y; }
  .no-repeat { background-repeat: no-repeat; }
  .space { background-repeat: space; }
  .round { background-repeat: round; }
</style>

<h4>repeat (standart):</h4>
<div class="repeat-demo repeat"></div>

<h4>repeat-x (faqat gorizontal):</h4>
<div class="repeat-demo repeat-x"></div>

<h4>repeat-y (faqat vertikal):</h4>
<div class="repeat-demo repeat-y"></div>

<h4>no-repeat (takrorlanmaydi):</h4>
<div class="repeat-demo no-repeat"></div>

<h4>space (teng oraliq):</h4>
<div class="repeat-demo space"></div>

<h4>round (butun son sig'dirib):</h4>
<div class="repeat-demo round"></div>
```

**Dastur 2 - Repeat kombinatsiyalari**:
```html
<style>
  .pattern-box {
    width: 400px;
    height: 200px;
    background-image: url('https://via.placeholder.com/40x40/blue/white?text=*');
    background-repeat: repeat;
    border: 2px solid black;
    margin-bottom: 10px;
  }
  
  .pattern-border {
    width: 400px;
    height: 200px;
    background-image: url('https://via.placeholder.com/20x20/red/white?text=.');
    background-repeat: repeat-x;
    background-position: bottom;
    border: 2px solid black;
  }
</style>

<div class="pattern-box">To'liq takrorlanuvchi pattern</div>
<div class="pattern-border">Faqat pastki chekkada pattern</div>
```

---

### 4. background-position

Rasmning joylashuvini belgilaydi.

**Dastur 1 - Pozitsiya qiymatlari**:
```html
<style>
  .position-demo {
    width: 400px;
    height: 200px;
    background-image: url('https://via.placeholder.com/100x100/ff0000/ffffff?text=IMG');
    background-repeat: no-repeat;
    border: 2px solid black;
    margin-bottom: 10px;
    background-color: #f0f0f0;
  }
  
  .top-left { background-position: top left; }
  .top-center { background-position: top center; }
  .top-right { background-position: top right; }
  .center-left { background-position: center left; }
  .center-center { background-position: center center; }
  .center-right { background-position: center right; }
  .bottom-left { background-position: bottom left; }
  .bottom-center { background-position: bottom center; }
  .bottom-right { background-position: bottom right; }
</style>

<div class="position-demo top-left">top left</div>
<div class="position-demo top-center">top center</div>
<div class="position-demo top-right">top right</div>
<div class="position-demo center-left">center left</div>
<div class="position-demo center-center">center center</div>
<div class="position-demo center-right">center right</div>
<div class="position-demo bottom-left">bottom left</div>
<div class="position-demo bottom-center">bottom center</div>
<div class="position-demo bottom-right">bottom right</div>
```

**Dastur 2 - Piksel va foiz pozitsiyalari**:
```html
<style>
  .pixel-pos {
    width: 400px;
    height: 200px;
    background-image: url('https://via.placeholder.com/50x50/blue/white?text=.');
    background-repeat: no-repeat;
    background-color: #f0f0f0;
    border: 2px solid black;
    margin-bottom: 10px;
  }
  
  .pixel { background-position: 50px 30px; }
  .percent { background-position: 25% 75%; }
  .mixed { background-position: 20px 80%; }
</style>

<div class="pixel-pos pixel">50px 30px</div>
<div class="pixel-pos percent">25% 75%</div>
<div class="pixel-pos mixed">20px 80%</div>
```

---

### 5. background-size

Rasm o'lchamini belgilaydi.

**Dastur 1 - Size qiymatlari**:
```html
<style>
  .size-demo {
    width: 400px;
    height: 200px;
    background-image: url('https://via.placeholder.com/600x300');
    background-repeat: no-repeat;
    border: 2px solid black;
    margin-bottom: 10px;
    background-color: #f0f0f0;
  }
  
  .auto { background-size: auto; }
  .cover { background-size: cover; }
  .contain { background-size: contain; }
  .percent { background-size: 50% 50%; }
  .pixel { background-size: 100px 150px; }
</style>

<h4>auto (asl o'lcham):</h4>
<div class="size-demo auto"></div>

<h4>cover (to'liq qoplaydi, qirqilishi mumkin):</h4>
<div class="size-demo cover"></div>

<h4>contain (to'liq sig'adi, bo'sh joy qoladi):</h4>
<div class="size-demo contain"></div>

<h4>50% 50%:</h4>
<div class="size-demo percent"></div>

<h4>100px 150px:</h4>
<div class="size-demo pixel"></div>
```

**Dastur 2 - Cover vs Contain**:
```html
<style>
  .compare {
    display: flex;
    gap: 20px;
  }
  
  .cover-box, .contain-box {
    width: 300px;
    height: 200px;
    background-image: url('https://via.placeholder.com/500x300/ff0000/ffffff?text=Rasm');
    background-repeat: no-repeat;
    border: 2px solid black;
    background-color: lightgray;
  }
  
  .cover-box { background-size: cover; }
  .contain-box { background-size: contain; }
</style>

<div class="compare">
  <div>
    <div class="cover-box"></div>
    <p>cover: to'liq qoplaydi (qirqiladi)</p>
  </div>
  <div>
    <div class="contain-box"></div>
    <p>contain: to'liq sig'adi (bo'sh joy)</p>
  </div>
</div>
```

---

### 6. background-attachment

Fonning aylantirish (scroll) bilan harakatini belgilaydi.

**Dastur 1 - Attachment qiymatlari**:
```html
<style>
  .attachment-demo {
    width: 400px;
    height: 150px;
    background-image: url('https://via.placeholder.com/400x150/blue/white?text=Fon');
    background-repeat: no-repeat;
    background-size: cover;
    border: 2px solid black;
    margin-bottom: 20px;
    overflow: auto;
    padding: 10px;
    color: white;
  }
  
  .scroll { background-attachment: scroll; }
  .fixed { background-attachment: fixed; }
  .local { background-attachment: local; }
</style>

<h4>scroll (standart - sahifa bilan birga):</h4>
<div class="attachment-demo scroll">
  <p style="height: 100px;">Bu matn aylantirilganda fon ham aylanadi</p>
  <p style="height: 100px;">Fon elementi bilan birga harakat qiladi</p>
</div>

<h4>fixed (viewportga nisbatan qotib qoladi):</h4>
<div class="attachment-demo fixed">
  <p style="height: 100px;">Fon qotib qolgan, matn aylanadi</p>
  <p style="height: 100px;">Fon orqada qimirlamaydi</p>
</div>

<h4>local (ichki scroll bilan):</h4>
<div class="attachment-demo local">
  <p style="height: 100px;">Element ichida aylantirilganda fon ham aylanadi</p>
  <p style="height: 100px;">Content bilan birga harakat qiladi</p>
</div>
```

---

### 7. background shorthand

Barcha background xususiyatlarini bir qatorda yozish.

**Dastur 1 - Shorthand misollari**:
```html
<style>
  .shorthand-box {
    width: 400px;
    height: 150px;
    border: 2px solid black;
    margin-bottom: 20px;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
  
  .sh1 {
    background: red;
  }
  
  .sh2 {
    background: blue url('https://via.placeholder.com/100x100') no-repeat center;
  }
  
  .sh3 {
    background: lightgreen url('https://via.placeholder.com/50x50') repeat-x bottom / contain;
  }
  
  .sh4 {
    background: linear-gradient(to right, red, blue);
  }
  
  .sh5 {
    background: rgba(0,0,0,0.7) url('https://via.placeholder.com/400x150') no-repeat center/cover fixed;
  }
</style>

<div class="shorthand-box sh1">background: red;</div>
<div class="shorthand-box sh2">background: blue url(...) no-repeat center;</div>
<div class="shorthand-box sh3">background: lightgreen url(...) repeat-x bottom / contain;</div>
<div class="shorthand-box sh4">background: linear-gradient(to right, red, blue);</div>
<div class="shorthand-box sh5">background: rgba(0,0,0,0.7) url(...) no-repeat center/cover fixed;</div>
```

**Dastur 2 - Shorthand tartibi**:
```html
<style>
  .order-demo {
    width: 400px;
    height: 150px;
    background: #f0f0f0 url('https://via.placeholder.com/50x50/ff0000') no-repeat center/50px border-box content-box fixed;
    border: 2px solid black;
  }
</style>

<div class="order-demo">
  Shorthand tartibi:<br>
  color image repeat position/size attachment
</div>
```

---

### 8. Multiple backgrounds

Bir nechta fon rasmlarini bir elementga qo'yish.

**Dastur 1 - Ikki fon**:
```html
<style>
  .multi-bg {
    width: 400px;
    height: 200px;
    background-image: 
      url('https://via.placeholder.com/100x100/ff0000/ffffff?text=1'),
      url('https://via.placeholder.com/100x100/0000ff/ffffff?text=2');
    background-repeat: no-repeat, no-repeat;
    background-position: top left, bottom right;
    background-size: 100px, 100px;
    border: 2px solid black;
    background-color: #f0f0f0;
  }
</style>

<div class="multi-bg"></div>
```

**Dastur 2 - Uch fon**:
```html
<style>
  .three-bg {
    width: 400px;
    height: 200px;
    background-image: 
      url('https://via.placeholder.com/80x80/ff0000/ffffff?text=A'),
      url('https://via.placeholder.com/60x60/00ff00/ffffff?text=B'),
      url('https://via.placeholder.com/40x40/0000ff/ffffff?text=C');
    background-repeat: no-repeat;
    background-position: left top, center center, right bottom;
    background-size: 80px, 60px, 40px;
    border: 2px solid black;
    background-color: #f0f0f0;
  }
</style>

<div class="three-bg"></div>
```

**Dastur 3 - Pattern va rasm**:
```html
<style>
  .pattern-overlay {
    width: 400px;
    height: 200px;
    background-image: 
      linear-gradient(rgba(0,0,255,0.3), rgba(255,0,0,0.3)),
      url('https://via.placeholder.com/50x50/cccccc/ffffff?text=.');
    background-repeat: no-repeat, repeat;
    background-position: center, left top;
    border: 2px solid black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
</style>

<div class="pattern-overlay">
  Gradient + Pattern
</div>
```

**Dastur 4 - Multiple shorthand**:
```html
<style>
  .multi-shorthand {
    width: 400px;
    height: 200px;
    background: 
      url('https://via.placeholder.com/80x80/ff0000/ffffff?text=1') no-repeat left top / 80px,
      url('https://via.placeholder.com/80x80/00ff00/ffffff?text=2') no-repeat center / 80px,
      url('https://via.placeholder.com/80x80/0000ff/ffffff?text=3') no-repeat right bottom / 80px,
      linear-gradient(45deg, #f0f0f0, #ddd);
    border: 2px solid black;
  }
</style>

<div class="multi-shorthand"></div>
```

---

### Amaliy misollar

**Misol 1 - Hero section**:
```html
<style>
  .hero {
    width: 100%;
    height: 400px;
    background: 
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),
      url('https://via.placeholder.com/1200x400/333333/ffffff?text=Hero+Image') no-repeat center/cover;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 48px;
    text-align: center;
    margin-bottom: 20px;
  }
</style>

<div class="hero">
  Saytga xush kelibsiz
</div>
```

**Misol 2 - Kartochka fonlari**:
```html
<style>
  .card-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .card-bg {
    width: 250px;
    height: 300px;
    border-radius: 10px;
    padding: 20px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  
  .card1 {
    background: 
      linear-gradient(to top, rgba(0,0,0,0.8), transparent),
      url('https://via.placeholder.com/250x300/ff6b6b/ffffff?text=Card+1') no-repeat center/cover;
  }
  
  .card2 {
    background: 
      linear-gradient(135deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5)),
      url('https://via.placeholder.com/250x300/4ecdc4/ffffff?text=Card+2') no-repeat center/cover;
  }
  
  .card3 {
    background: 
      repeating-linear-gradient(45deg, #ff6b6b 0px, #ff6b6b 10px, #ff8e8e 10px, #ff8e8e 20px);
  }
  
  .card4 {
    background: 
      radial-gradient(circle at top left, #ffd93d, #ff6b6b);
  }
</style>

<div class="card-container">
  <div class="card-bg card1">
    <h3>Tabiat kartasi</h3>
    <p>Gradient + rasm</p>
  </div>
  <div class="card-bg card2">
    <h3>Shahar kartasi</h3>
    <p>Rangli qatlam + rasm</p>
  </div>
  <div class="card-bg card3">
    <h3>Pattern kartasi</h3>
    <p>Takrorlanuvchi gradient</p>
  </div>
  <div class="card-bg card4">
    <h3>Radial kartasi</h3>
    <p>Radial gradient</p>
  </div>
</div>
```

**Misol 3 - Fon animatsiyasi**:
```html
<style>
  .animated-bg {
    width: 400px;
    height: 200px;
    background: linear-gradient(90deg, red, blue, red);
    background-size: 200% 100%;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    animation: move 3s infinite alternate;
  }
  
  @keyframes move {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
</style>

<div class="animated-bg">
  Animatsion gradient
</div>
```

---

### Background xususiyatlari jadvali

| Xususiyat | Vazifasi | Qiymatlar | Misol |
|-----------|----------|-----------|-------|
| `background-color` | Fon rangi | rgb, rgba, hex, hsl, transparent | `background-color: red;` |
| `background-image` | Fon rasmi | url(), gradient, none | `background-image: url('img.jpg');` |
| `background-repeat` | Takrorlash | repeat, no-repeat, repeat-x, repeat-y, space, round | `background-repeat: no-repeat;` |
| `background-position` | Joylashuv | top, center, bottom, left, right, px, % | `background-position: center;` |
| `background-size` | O'lcham | auto, cover, contain, px, % | `background-size: cover;` |
| `background-attachment` | Harakat | scroll, fixed, local | `background-attachment: fixed;` |
| `background` | Shorthand | color image repeat position/size attachment | `background: red url(img.jpg) no-repeat center/cover;` |

---
<br>
<br>
<br>
<br>
<br>
