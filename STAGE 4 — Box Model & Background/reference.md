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
## Gradients

Gradientlar - ikki yoki undan ortiq ranglar orasidagi silliq o'tishlar. CSS da gradientlar `background-image` yoki `background` orqali qo'llaniladi.

### 1. Linear Gradients (Chiziqli gradient)

Ranglar to'g'ri chiziq bo'ylab o'tadi.

#### Asosiy sintaksis:
```css
background: linear-gradient(yo'nalish, rang1, rang2, ...);
```

**Dastur 1 - Yo'nalishlar**:
```html
<style>
  .gradient-box {
    width: 300px;
    height: 100px;
    margin: 10px;
    border: 2px solid black;
  }
  
  .to-right { background: linear-gradient(to right, red, blue); }
  .to-left { background: linear-gradient(to left, red, blue); }
  .to-bottom { background: linear-gradient(to bottom, red, blue); }
  .to-top { background: linear-gradient(to top, red, blue); }
  .to-bottom-right { background: linear-gradient(to bottom right, red, blue); }
  .to-top-left { background: linear-gradient(to top left, red, blue); }
</style>

<div class="gradient-box to-right">to right (chapdan o'ngga)</div>
<div class="gradient-box to-left">to left (o'ngdan chapga)</div>
<div class="gradient-box to-bottom">to bottom (yuqoridan pastga)</div>
<div class="gradient-box to-top">to top (pastdan yuqoriga)</div>
<div class="gradient-box to-bottom-right">to bottom right</div>
<div class="gradient-box to-top-left">to top left</div>
```

**Dastur 2 - Burchak graduslari**:
```html
<style>
  .angle-box {
    width: 300px;
    height: 100px;
    margin: 10px;
    border: 2px solid black;
  }
  
  .deg0 { background: linear-gradient(0deg, red, blue); }        /* yuqoriga */
  .deg45 { background: linear-gradient(45deg, red, blue); }     /* diagonal */
  .deg90 { background: linear-gradient(90deg, red, blue); }     /* o'ngga */
  .deg135 { background: linear-gradient(135deg, red, blue); }   /* diagonal */
  .deg180 { background: linear-gradient(180deg, red, blue); }   /* pastga */
  .deg225 { background: linear-gradient(225deg, red, blue); }   /* diagonal */
  .deg270 { background: linear-gradient(270deg, red, blue); }   /* chapga */
  .deg360 { background: linear-gradient(360deg, red, blue); }   /* 0deg bilan bir xil */
</style>

<div class="angle-box deg0">0° (yuqoriga)</div>
<div class="angle-box deg45">45°</div>
<div class="angle-box deg90">90° (o'ngga)</div>
<div class="angle-box deg135">135°</div>
<div class="angle-box deg180">180° (pastga)</div>
<div class="angle-box deg225">225°</div>
<div class="angle-box deg270">270° (chapga)</div>
<div class="angle-box deg360">360°</div>
```

**Dastur 3 - Bir nechta ranglar**:
```html
<style>
  .multi-color {
    width: 400px;
    height: 100px;
    margin: 10px;
    border: 2px solid black;
  }
  
  .three-colors { background: linear-gradient(to right, red, yellow, blue); }
  .four-colors { background: linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet); }
  .rainbow { background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet); }
</style>

<div class="multi-color three-colors">Uch rang: qizil, sariq, ko'k</div>
<div class="multi-color four-colors">Kamalak ranglari</div>
<div class="multi-color rainbow">45° kamalak</div>
```

**Dastur 4 - Rang to'xtash nuqtalari (color stops)**:
```html
<style>
  .stops-box {
    width: 400px;
    height: 100px;
    margin: 10px;
    border: 2px solid black;
  }
  
  .stops-1 { background: linear-gradient(to right, red 0%, blue 100%); }
  .stops-2 { background: linear-gradient(to right, red 0%, yellow 50%, blue 100%); }
  .stops-3 { background: linear-gradient(to right, red 20%, blue 80%); }
  .stops-4 { background: linear-gradient(to right, red 30%, yellow 30%, blue 60%); }
  .stops-5 { background: linear-gradient(to right, red 0%, red 50%, blue 50%, blue 100%); }
</style>

<div class="stops-box stops-1">red 0% - blue 100%</div>
<div class="stops-box stops-2">red 0%, yellow 50%, blue 100%</div>
<div class="stops-box stops-3">red 20% dan blue 80% gacha</div>
<div class="stops-box stops-4">red 30% gacha, keyin yellow 30% dan blue 60% gacha</div>
<div class="stops-box stops-5">red 0-50%, blue 50-100% (keskin o'tish)</div>
```

**Dastur 5 - Shaffof gradientlar**:
```html
<style>
  .transparent-box {
    width: 300px;
    height: 150px;
    margin: 10px;
    border: 2px solid black;
    background-image: repeating-linear-gradient(45deg, #ccc 0px, #ccc 10px, #eee 10px, #eee 20px);
    position: relative;
  }
  
  .transparent-box div {
    width: 100%;
    height: 100%;
  }
  
  .fade-top { background: linear-gradient(to bottom, transparent, rgba(0,0,0,0.8)); }
  .fade-left { background: linear-gradient(to right, transparent, rgba(255,0,0,0.5)); }
  .fade-multi { background: linear-gradient(45deg, transparent 30%, rgba(0,0,255,0.7) 70%); }
</style>

<div class="transparent-box">
  <div class="fade-top"></div>
</div>
<p>Yuqoridan pastga shaffoflash</p>

<div class="transparent-box">
  <div class="fade-left"></div>
</div>
<p>Chapdan o'ngga qizil shaffof</p>

<div class="transparent-box">
  <div class="fade-multi"></div>
</div>
<p>Diagonal ko'k shaffof</p>
```

---

### 2. Radial Gradients (Doiraviy gradient)

Ranglar markazdan tashqariga doira yoki ellips shaklida tarqaladi.

#### Asosiy sintaksis:
```css
background: radial-gradient(shakl o'lcham at pozitsiya, rang1, rang2, ...);
```

**Dastur 1 - Asosiy radial gradient**:
```html
<style>
  .radial-box {
    width: 250px;
    height: 250px;
    margin: 10px;
    border: 2px solid black;
    display: inline-block;
  }
  
  .circle-default { background: radial-gradient(red, blue); }
  .circle-center { background: radial-gradient(circle at center, red, yellow, blue); }
  .ellipse { background: radial-gradient(ellipse at center, red, yellow, blue); }
  .circle-top-left { background: radial-gradient(circle at top left, red, blue); }
  .circle-bottom-right { background: radial-gradient(circle at bottom right, red, blue); }
</style>

<div class="radial-box circle-default">circle default</div>
<div class="radial-box circle-center">circle at center</div>
<div class="radial-box ellipse">ellipse</div>
<div class="radial-box circle-top-left">circle at top left</div>
<div class="radial-box circle-bottom-right">circle at bottom right</div>
```

**Dastur 2 - Radial o'lchamlar**:
```html
<style>
  .size-box {
    width: 250px;
    height: 250px;
    margin: 10px;
    border: 2px solid black;
    display: inline-block;
  }
  
  .closest-side { background: radial-gradient(circle closest-side at 30% 30%, red, blue); }
  .farthest-side { background: radial-gradient(circle farthest-side at 30% 30%, red, blue); }
  .closest-corner { background: radial-gradient(circle closest-corner at 30% 30%, red, blue); }
  .farthest-corner { background: radial-gradient(circle farthest-corner at 30% 30%, red, blue); }
  .contain { background: radial-gradient(circle contain at 30% 30%, red, blue); }
  .cover { background: radial-gradient(circle cover at 30% 30%, red, blue); }
</style>

<div class="size-box closest-side">closest-side</div>
<div class="size-box farthest-side">farthest-side</div>
<div class="size-box closest-corner">closest-corner</div>
<div class="size-box farthest-corner">farthest-corner</div>
<div class="size-box contain">contain</div>
<div class="size-box cover">cover</div>
```

**Dastur 3 - Radial rang to'xtashlari**:
```html
<style>
  .radial-stops {
    width: 300px;
    height: 300px;
    margin: 10px;
    border: 2px solid black;
    display: inline-block;
  }
  
  .stops-1 { background: radial-gradient(red 10%, yellow 30%, blue 60%); }
  .stops-2 { background: radial-gradient(circle, red, yellow, blue); }
  .stops-3 { background: radial-gradient(circle at 30% 30%, red 0%, red 20%, yellow 20%, yellow 40%, blue 40%, blue 100%); }
  .stops-4 { background: radial-gradient(ellipse at center, red 0%, transparent 50%); }
</style>

<div class="radial-stops stops-1">red 10%, yellow 30%, blue 60%</div>
<div class="radial-stops stops-2">teng taqsimlangan</div>
<div class="radial-stops stops-3">keskin o'tishlar</div>
<div class="radial-stops stops-4">shaffof</div>
```

**Dastur 4 - Radial gradient misollari**:
```html
<style>
  .radial-examples {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .example {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid black;
  }
  
  .sun { background: radial-gradient(circle, yellow, orange, red); }
  .target { background: radial-gradient(circle, red 10%, white 10%, white 20%, red 20%, red 30%, white 30%, white 40%, red 40%); }
  .spotlight { background: radial-gradient(circle at 30% 30%, white, #333); }
  .metallic { background: radial-gradient(circle at 30% 30%, #fff, #aaa, #333); }
</style>

<div class="radial-examples">
  <div class="example sun"></div>
  <div class="example target"></div>
  <div class="example spotlight"></div>
  <div class="example metallic"></div>
</div>
```

---

### 3. Conic Gradients (Konus gradient)

Ranglar markaz atrofida aylana bo'ylab tarqaladi.

#### Asosiy sintaksis:
```css
background: conic-gradient(rang1, rang2, ...);
```

**Dastur 1 - Asosiy conic gradient**:
```html
<style>
  .conic-box {
    width: 250px;
    height: 250px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 50%;
    display: inline-block;
  }
  
  .conic-default { background: conic-gradient(red, yellow, blue); }
  .conic-rainbow { background: conic-gradient(red, orange, yellow, green, blue, indigo, violet); }
  .conic-start { background: conic-gradient(from 90deg, red, yellow, blue); }
  .conic-position { background: conic-gradient(at 30% 30%, red, yellow, blue); }
  .conic-start-position { background: conic-gradient(from 45deg at 30% 30%, red, yellow, blue); }
</style>

<div class="conic-box conic-default">default</div>
<div class="conic-box conic-rainbow">kamalak</div>
<div class="conic-box conic-start">from 90deg</div>
<div class="conic-box conic-position">at 30% 30%</div>
<div class="conic-box conic-start-position">from 45deg at 30% 30%</div>
```

**Dastur 2 - Conic rang to'xtashlari**:
```html
<style>
  .conic-stops {
    width: 250px;
    height: 250px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 50%;
    display: inline-block;
  }
  
  .pie-1 { background: conic-gradient(red 0deg 90deg, blue 90deg 180deg, green 180deg 270deg, yellow 270deg 360deg); }
  .pie-2 { background: conic-gradient(red 0deg, red 90deg, blue 90deg, blue 180deg, green 180deg, green 270deg, yellow 270deg, yellow 360deg); }
  .pie-3 { background: conic-gradient(red 0deg 120deg, blue 120deg 240deg, green 240deg 360deg); }
  .pie-4 { background: conic-gradient(from 90deg, red 0deg 90deg, blue 90deg 180deg, green 180deg 270deg, yellow 270deg 360deg); }
</style>

<div class="conic-stops pie-1">to'rt qism</div>
<div class="conic-stops pie-2">keskin o'tishlar</div>
<div class="conic-stops pie-3">uch qism</div>
<div class="conic-stops pie-4">from 90° bilan</div>
```

**Dastur 3 - Conic gradient misollari**:
```html
<style>
  .conic-demos {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .demo {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid black;
  }
  
  .color-wheel { background: conic-gradient(red, magenta, blue, cyan, green, yellow, red); }
  .pie-chart { background: conic-gradient(gold 0% 25%, silver 25% 50%, bronze 50% 75%, #333 75% 100%); }
  .checkerboard { background: conic-gradient(#fff 0deg 90deg, #000 90deg 180deg, #fff 180deg 270deg, #000 270deg 360deg); background-size: 100px 100px; }
  .sunburst { background: conic-gradient(yellow 0deg 10deg, orange 10deg 20deg, yellow 20deg 30deg, orange 30deg 40deg, yellow 40deg 50deg, orange 50deg 60deg, yellow 60deg 70deg, orange 70deg 80deg, yellow 80deg 90deg); }
</style>

<div class="conic-demos">
  <div class="demo color-wheel"></div>
  <div class="demo pie-chart"></div>
  <div class="demo checkerboard"></div>
  <div class="demo sunburst"></div>
</div>
```

**Dastur 4 - Conic gradient bilan soat**:
```html
<style>
  .clock {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: conic-gradient(
      red 0deg 30deg,
      orange 30deg 60deg,
      yellow 60deg 90deg,
      green 90deg 120deg,
      blue 120deg 150deg,
      indigo 150deg 180deg,
      violet 180deg 210deg,
      red 210deg 240deg,
      orange 240deg 270deg,
      yellow 270deg 300deg,
      green 300deg 330deg,
      blue 330deg 360deg
    );
    border: 5px solid black;
    position: relative;
    margin: 20px;
  }
  
  .clock::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid black;
  }
  
  .clock::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 120px;
    background: black;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%) rotate(0deg);
    transform-origin: bottom;
    animation: rotate 60s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: translate(-50%, -100%) rotate(0deg); }
    to { transform: translate(-50%, -100%) rotate(360deg); }
  }
</style>

<div class="clock"></div>
<p>12 soatlik rangli soat</p>
```

---

### 4. Repeating Gradients

Gradientlarni takrorlash.

#### Repeating-linear-gradient
```css
background: repeating-linear-gradient(parametrlar);
```

**Dastur 1 - Repeating-linear-gradient**:
```html
<style>
  .repeat-box {
    width: 400px;
    height: 100px;
    margin: 10px;
    border: 2px solid black;
  }
  
  .repeat-stripes { background: repeating-linear-gradient(45deg, red 0px, red 10px, blue 10px, blue 20px); }
  .repeat-horizontal { background: repeating-linear-gradient(to right, red 0px, red 20px, white 20px, white 40px); }
  .repeat-vertical { background: repeating-linear-gradient(to bottom, red 0px, red 15px, blue 15px, blue 30px); }
  .repeat-rainbow { background: repeating-linear-gradient(90deg, red 0px, red 20px, orange 20px, orange 40px, yellow 40px, yellow 60px, green 60px, green 80px, blue 80px, blue 100px); }
</style>

<div class="repeat-box repeat-stripes">45° chiziqlar</div>
<div class="repeat-box repeat-horizontal">gorizontal chiziqlar</div>
<div class="repeat-box repeat-vertical">vertikal chiziqlar</div>
<div class="repeat-box repeat-rainbow">kamalak chiziqlari</div>
```

#### Repeating-radial-gradient
```css
background: repeating-radial-gradient(parametrlar);
```

**Dastur 2 - Repeating-radial-gradient**:
```html
<style>
  .repeat-radial {
    width: 250px;
    height: 250px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 50%;
    display: inline-block;
  }
  
  .radial-target { background: repeating-radial-gradient(circle, red 0px, red 10px, white 10px, white 20px); }
  .radial-rings { background: repeating-radial-gradient(circle, blue 0px, blue 15px, lightblue 15px, lightblue 30px); }
  .radial-burst { background: repeating-radial-gradient(circle at 30% 30%, yellow 0px, yellow 10px, orange 10px, orange 20px, red 20px, red 30px); }
  .radial-ellipse { background: repeating-radial-gradient(ellipse, red 0px, red 20px, blue 20px, blue 40px); }
</style>

<div class="repeat-radial radial-target"></div>
<div class="repeat-radial radial-rings"></div>
<div class="repeat-radial radial-burst"></div>
<div class="repeat-radial radial-ellipse"></div>
```

#### Repeating-conic-gradient
```css
background: repeating-conic-gradient(parametrlar);
```

**Dastur 3 - Repeating-conic-gradient**:
```html
<style>
  .repeat-conic {
    width: 250px;
    height: 250px;
    margin: 10px;
    border: 2px solid black;
    border-radius: 50%;
    display: inline-block;
  }
  
  .conic-stripes { background: repeating-conic-gradient(red 0deg 10deg, blue 10deg 20deg); }
  .conic-pie { background: repeating-conic-gradient(from 0deg, red 0deg 30deg, yellow 30deg 60deg, green 60deg 90deg); }
  .conic-pinwheel { background: repeating-conic-gradient(from 45deg, #fff 0deg 15deg, #333 15deg 30deg); }
  .conic-colorful { background: repeating-conic-gradient(red 0deg 20deg, orange 20deg 40deg, yellow 40deg 60deg, green 60deg 80deg, blue 80deg 100deg); }
</style>

<div class="repeat-conic conic-stripes"></div>
<div class="repeat-conic conic-pie"></div>
<div class="repeat-conic conic-pinwheel"></div>
<div class="repeat-conic conic-colorful"></div>
```

---

### Amaliy misollar

**Misol 1 - Gradient buttonlar**:
```html
<style>
  .gradient-buttons {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    margin: 20px;
  }
  
  .btn {
    padding: 15px 30px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  .btn-1 { background: linear-gradient(to right, #ff416c, #ff4b2b); }
  .btn-2 { background: linear-gradient(45deg, #11998e, #38ef7d); }
  .btn-3 { background: radial-gradient(circle at 30% 30%, #4568DC, #B06AB3); }
  .btn-4 { background: conic-gradient(from 90deg, #ff6b6b, #4ecdc4, #ff6b6b); }
  .btn-5 { background: repeating-linear-gradient(45deg, #ff6b6b 0px, #ff6b6b 5px, #4ecdc4 5px, #4ecdc4 10px); }
  
  .btn:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
  }
</style>

<div class="gradient-buttons">
  <button class="btn btn-1">Linear 1</button>
  <button class="btn btn-2">Linear 2</button>
  <button class="btn btn-3">Radial</button>
  <button class="btn btn-4">Conic</button>
  <button class="btn btn-5">Repeating</button>
</div>
```

**Misol 2 - Progress bar**:
```html
<style>
  .progress-container {
    width: 400px;
    background: #f0f0f0;
    border-radius: 10px;
    margin: 20px;
  }
  
  .progress-bar {
    height: 30px;
    border-radius: 10px;
    background: linear-gradient(90deg, #4ecdc4, #556270);
    background-size: 200% 100%;
    animation: progress 2s infinite alternate;
    width: 75%;
  }
  
  @keyframes progress {
    0% { background-position: 0% 50%; }
    100% { background-position: 100% 50%; }
  }
  
  .striped-progress {
    height: 30px;
    border-radius: 10px;
    background: repeating-linear-gradient(45deg, #4ecdc4 0px, #4ecdc4 10px, #2c7a78 10px, #2c7a78 20px);
    width: 60%;
  }
</style>

<div class="progress-container">
  <div class="progress-bar"></div>
</div>
<div class="progress-container">
  <div class="striped-progress"></div>
</div>
```

**Misol 3 - Gradient card**:
```html
<style>
  .gradient-card {
    width: 300px;
    padding: 30px;
    border-radius: 15px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    margin: 20px;
  }
  
  .card-title {
    font-size: 24px;
    margin-bottom: 15px;
  }
  
  .card-content {
    background: rgba(255,255,255,0.1);
    padding: 15px;
    border-radius: 10px;
    backdrop-filter: blur(5px);
  }
  
  .glass-card {
    width: 300px;
    padding: 30px;
    border-radius: 15px;
    background: radial-gradient(circle at top left, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.5);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    margin: 20px;
  }
</style>

<div class="gradient-card">
  <div class="card-title">Gradient Card</div>
  <div class="card-content">
    Bu kartochka linear gradient bilan yaratilgan
  </div>
</div>

<div class="glass-card">
  <div class="card-title">Glassmorphism</div>
  <div class="card-content">
    Shisha effekti - radial gradient va blur
  </div>
</div>
```

**Misol 4 - Gradient background patterns**:
```html
<style>
  .pattern-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;
  }
  
  .pattern {
    height: 150px;
    border-radius: 10px;
    border: 2px solid black;
  }
  
  .pattern-1 { background: repeating-linear-gradient(45deg, #ff6b6b 0px, #ff6b6b 10px, #4ecdc4 10px, #4ecdc4 20px); }
  .pattern-2 { background: repeating-radial-gradient(circle, #ffd93d 0px, #ffd93d 10px, #ff6b6b 10px, #ff6b6b 20px); }
  .pattern-3 { background: repeating-conic-gradient(from 0deg, #95E1D3 0deg 10deg, #EAFFD0 10deg 20deg); }
  .pattern-4 { background: linear-gradient(45deg, #f9ca24 25%, #f0932b 25%, #f0932b 50%, #f9ca24 50%, #f9ca24 75%, #f0932b 75%); background-size: 50px 50px; }
  .pattern-5 { background: radial-gradient(circle at 30% 30%, #fff, #aaa); }
  .pattern-6 { background: conic-gradient(from 90deg, #ff6b6b 0deg 90deg, #4ecdc4 90deg 180deg, #ffd93d 180deg 270deg, #95E1D3 270deg 360deg); }
</style>

<div class="pattern-grid">
  <div class="pattern pattern-1"></div>
  <div class="pattern pattern-2"></div>
  <div class="pattern pattern-3"></div>
  <div class="pattern pattern-4"></div>
  <div class="pattern pattern-5"></div>
  <div class="pattern pattern-6"></div>
</div>
```

---

### Gradient xususiyatlari jadvali

| Gradient turi | Sintaksis | Asosiy parametrlar | Misol |
|--------------|-----------|-------------------|-------|
| Linear | `linear-gradient()` | yo'nalish, ranglar | `linear-gradient(to right, red, blue)` |
| Radial | `radial-gradient()` | shakl, o'lcham, pozitsiya, ranglar | `radial-gradient(circle at center, red, blue)` |
| Conic | `conic-gradient()` | boshlang'ich burchak, pozitsiya, ranglar | `conic-gradient(from 90deg, red, blue)` |
| Repeating-linear | `repeating-linear-gradient()` | yo'nalish, ranglar (takrorlanuvchi) | `repeating-linear-gradient(45deg, red 0px 10px, blue 10px 20px)` |
| Repeating-radial | `repeating-radial-gradient()` | shakl, ranglar (takrorlanuvchi) | `repeating-radial-gradient(circle, red 0px 10px, blue 10px 20px)` |
| Repeating-conic | `repeating-conic-gradient()` | burchaklar (takrorlanuvchi) | `repeating-conic-gradient(red 0deg 10deg, blue 10deg 20deg)` |

### Muhim eslatmalar:

1. **Gradientlar rasm hisoblanadi** - `background-image` yoki `background` orqali qo'llaniladi
2. **Yo'nalishlar**:
   - `to right`, `to bottom`, `45deg` (linear)
   - `circle at center`, `ellipse at top left` (radial)
   - `from 90deg`, `at 30% 30%` (conic)

3. **Rang to'xtash nuqtalari**:
   - `red 0% 50%` - 0% dan 50% gacha qizil
   - `yellow 50%` - 50% dan keyin sariq

4. **Repeating gradientlar** aniq o'lchamlar bilan ishlaydi (px, deg)

5. **Multiple gradients** bir elementda ishlatish mumkin:
   ```css
   background: linear-gradient(...), radial-gradient(...);
   ```

6. **Shaffoflik** uchun rgba() yoki transparent ishlatiladi

7. **Performance** - gradientlar rasmga qaraganda tezroq yuklanadi

---
<br>
<br>
<br>
<br>
<br>
