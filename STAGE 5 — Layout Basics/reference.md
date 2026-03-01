
# **STAGE 5 — Layout Basics**

## Display Property

CSS-dagi `display` xususiyati elementning qanday joylashishini va uning atrofidagi elementlar bilan munosabatini belgilaydi. Quyida asosiy `display` qiymatlari tushuntirilgan:

### 1. `block`
- **Ta’rifi**: Element butun enini (width) egallaydi va yangi qatordan boshlanadi.
- **Xususiyatlari**: Balandlik (height) va kenglik (width) berish mumkin. Yonma-yon boshqa elementlar joylashmaydi.
- **Misol**: `<div>`, `<p>`, `<h1>` teglari standart `block` elementlardir.

**Dastur**:
```html
<style>
  .block-example {
    display: block;
    width: 200px;
    height: 100px;
    background: lightblue;
    margin-bottom: 10px;
  }
</style>
<div class="block-example">Block 1</div>
<div class="block-example">Block 2</div>
```
Natija: Har bir `div` yangi qatordan boshlanadi va 200px enni egallaydi.

### 2. `inline`
- **Ta’rifi**: Element faqat o‘z ichidagi kontent hajmida joy oladi va qator davom etadi.
- **Xususiyatlari**: `width` va `height` ta’sir qilmaydi, faqat gorizontal chekkalar (margin/padding) ishlaydi.
- **Misol**: `<span>`, `<a>`, `<strong>` teglari standart `inline` elementlardir.

**Dastur**:
```html
<style>
  .inline-example {
    display: inline;
    background: lightgreen;
    padding: 5px;
  }
</style>
<span class="inline-example">Inline 1</span>
<span class="inline-example">Inline 2</span>
<span class="inline-example">Inline 3</span>
```
Natija: Barcha `span` elementlar yonma-yon joylashadi.

### 3. `inline-block`
- **Ta’rifi**: Element `inline` kabi qatorda joylashadi, lekin `block` kabi `width` va `height` berish mumkin.
- **Xususiyatlari**: Qatorda yonma-yon turadi, lekin o‘lchamlarini o‘zgartirish mumkin.

**Dastur**:
```html
<style>
  .inline-block-example {
    display: inline-block;
    width: 100px;
    height: 50px;
    background: lightcoral;
    margin: 5px;
    text-align: center;
  }
</style>
<div class="inline-block-example">A</div>
<div class="inline-block-example">B</div>
<div class="inline-block-example">C</div>
```
Natija: Uchta element yonma-yon, lekin 100x50 o‘lchamda joylashadi.

### 4. `none`
- **Ta’rifi**: Element butunlay yashiriladi va sahifa joylashuvida (layout) o‘rin egallamaydi.
- **Xususiyatlari**: Element ko‘rinmaydi va uning o‘rni bo‘sh qolmaydi.

**Dastur**:
```html
<style>
  .none-example {
    display: none;
  }
  .visible-example {
    background: lightgray;
    padding: 10px;
  }
</style>
<div class="visible-example">Men ko‘rinaman</div>
<div class="none-example">Men yashirinman</div>
<div class="visible-example">Men ham ko‘rinaman</div>
```
Natija: Ikkinchi `div` butunlay yo‘qoladi va uning o‘rni bo‘sh qolmaydi.

### 5. `visibility: hidden`
- **Ta’rifi**: Element yashiriladi, lekin egallagan joyi saqlanib qoladi.
- **Xususiyatlari**: `display: none` dan farqli, element ko‘rinmasa ham uning joylashuvi bo‘sh joy sifatida qoladi.

**Dastur**:
```html
<style>
  .hidden-example {
    visibility: hidden;
  }
  .box {
    display: inline-block;
    width: 100px;
    height: 50px;
    background: orange;
    margin: 5px;
  }
</style>
<div class="box">1</div>
<div class="box hidden-example">2 (yashirin)</div>
<div class="box">3</div>
```
Natija: 2-element ko‘rinmaydi, lekin uning o‘rnida bo‘sh joy qoladi (1 va 3 orasida bo‘shliq bor).

---

### Asosiy farqlar jadvali
| Qiymat          | Qatorda joylashish | O‘lcham berish | Joy egallash |
|-----------------|--------------------|----------------|--------------|
| `block`         | Yangi qator        | Ha             | Ha           |
| `inline`        | Yonma-yon          | Yo‘q           | Faqat kontent |
| `inline-block`  | Yonma-yon          | Ha             | Ha           |
| `none`          | -                  | -              | Yo‘q         |
| `visibility: hidden` | O‘z joyida    | -              | Ha (bo‘sh)   |

---
<br> <br> <br> <br> <br>

## Position Property

CSS-dagi `position` xususiyati elementning hujjat ichida qanday joylashishini belgilaydi. Quyida barcha qiymatlar va `z-index` haqida to'liq ma'lumot:

### 1. `static`
- **Ta'rifi**: Barcha elementlarning standart qiymati. Element hujjatning normal oqimi (normal flow) bo'yicha joylashadi.
- **Xususiyatlari**: `top`, `right`, `bottom`, `left`, `z-index` kabi xususiyatlar ta'sir qilmaydi.
- **Misol**: Oddiy HTML hujjatidagi barcha elementlar `static` holatida joylashadi.

**Dastur**:
```html
<style>
  .static-example {
    position: static;
    background: lightgray;
    padding: 10px;
    margin: 5px;
    /* top: 20px; - bu ta'sir qilmaydi */
  }
</style>
<div class="static-example">Static element</div>
<div class="static-example">Yana bir static element</div>
```
Natija: Elementlar oddiy ketma-ketlikda joylashadi.

### 2. `relative`
- **Ta'rifi**: Element o'zining normal joylashuviga nisbatan siljiydi. Asl egallagan joyi saqlanib qoladi.
- **Xususiyatlari**: `top`, `right`, `bottom`, `left` yordamida siljitish mumkin.

**Dastur**:
```html
<style>
  .container {
    background: #f0f0f0;
    padding: 20px;
  }
  .relative-example {
    position: relative;
    top: 20px;
    left: 30px;
    background: lightblue;
    padding: 10px;
    border: 1px solid blue;
  }
  .normal {
    background: lightgray;
    padding: 10px;
  }
</style>
<div class="container">
  <div class="normal">Oddiy element</div>
  <div class="relative-example">Relative (20px past, 30px o'ng)</div>
  <div class="normal">Yana bir oddiy element</div>
</div>
```
Natija: Relative element 20px pastga va 30px o'ngga siljiydi, lekin uning asl joyida bo'sh joy qoladi.

### 3. `absolute`
- **Ta'rifi**: Element normal oqimdan chiqariladi va eng yaqin `relative`/`absolute`/`fixed` pozitsiyalangan ota-elementiga nisbatan joylashadi. Agar bunday ota-element bo'lmasa, `<html>` ga nisbatan joylashadi.
- **Xususiyatlari**: Boshqa elementlar uning o'rnini egallaydi.

**Dastur**:
```html
<style>
  .parent {
    position: relative;
    width: 300px;
    height: 200px;
    background: #e0e0e0;
    margin: 50px;
  }
  .absolute-example {
    position: absolute;
    top: 50px;
    right: 20px;
    background: lightcoral;
    padding: 10px;
    border: 1px solid red;
  }
  .child {
    background: lightgreen;
    padding: 10px;
  }
</style>
<div class="parent">
  <div class="child">Oddiy bola element</div>
  <div class="absolute-example">Absolute (50px past, 20px o'ngdan)</div>
  <div class="child">Yana bir bola element</div>
</div>
```
Natija: Absolute element ota-element (parent) ichida 50px past va 20px o'ngda joylashadi.

### 4. `fixed`
- **Ta'rifi**: Element viewport (brauzer oynasi) ga nisbatan joylashadi va sahifa aylantirilganda ham o'z joyida qoladi.
- **Xususiyatlari**: Normal oqimdan chiqariladi va doimiy joylashadi.

**Dastur**:
```html
<style>
  .fixed-example {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: darkblue;
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 1000;
  }
  .content {
    height: 1500px;
    background: linear-gradient(white, lightgray);
    padding: 20px;
  }
</style>
<div class="content">
  <p>Sahifani aylantiring...</p>
  <p>Fixed tugma pastki o'ng burchakda qoladi.</p>
</div>
<div class="fixed-example">Doimiy tugma</div>
```
Natija: Tugma sahifa aylantirilganda ham pastki o'ng burchakda qoladi.

### 5. `sticky`
- **Ta'rifi**: Element `relative` va `fixed` aralashmasi. Oddiy oqimda harakatlanadi, lekin berilgan chegagacha yetganda `fixed` kabi yopishib qoladi.
- **Xususiyatlari**: Ota-element ichida harakat qiladi va undan tashqariga chiqmaydi.

**Dastur**:
```html
<style>
  .sticky-container {
    height: 400px;
    overflow-y: scroll;
    border: 2px solid black;
    padding: 10px;
  }
  .sticky-header {
    position: sticky;
    top: 0;
    background: darkgreen;
    color: white;
    padding: 10px;
    font-weight: bold;
  }
  .content {
    height: 300px;
    background: lightyellow;
    margin: 5px 0;
    padding: 10px;
  }
</style>
<div class="sticky-container">
  <div class="sticky-header">Yopishuvchi sarlavha</div>
  <div class="content">1-bo'lim matni...</div>
  <div class="content">2-bo'lim matni...</div>
  <div class="content">3-bo'lim matni...</div>
</div>
```
Natija: Sarlavha yuqoriga yetganda yopishib qoladi va konteyner ichida harakatlanadi.

### 6. `z-index`
- **Ta'rifi**: Elementlarning bir-biri ustida qanday joylashishini (stack order) belgilaydi. Faqat `position` qiymati `static` bo'lmagan elementlarda ishlaydi.
- **Xususiyatlari**: Kattaroq qiymat yuqoriroq qatlamda joylashadi. Manfiy qiymatlar ham ishlatilishi mumkin.

**Dastur**:
```html
<style>
  .box {
    position: absolute;
    width: 200px;
    height: 100px;
    padding: 10px;
    color: white;
  }
  .box1 {
    background: red;
    top: 50px;
    left: 50px;
    z-index: 1;
  }
  .box2 {
    background: blue;
    top: 80px;
    left: 80px;
    z-index: 2;
  }
  .box3 {
    background: green;
    top: 110px;
    left: 110px;
    z-index: 3;
  }
</style>
<div class="box box1">z-index: 1 (pastki)</div>
<div class="box box2">z-index: 2 (o'rta)</div>
<div class="box box3">z-index: 3 (yuqori)</div>
```
Natija: Yashil (3) eng yuqorida, qizil (1) eng pastda joylashadi.

### Asosiy farqlar jadvali

| Qiymat   | Joylashish nuqtasi | Oqimdan chiqishi | Harakatlanishi       |
|----------|-------------------|------------------|----------------------|
| static   | Oddiy oqim        | Yo'q             | Normal               |
| relative | O'z joyiga nisbatan | Yo'q           | Siljishi mumkin      |
| absolute | Ota-elementga nisbatan | Ha          | Erkin joylashadi     |
| fixed    | Viewportga nisbatan | Ha             | Doimiy               |
| sticky   | Oqim+viewportga nisbatan | Qisman    | Chegaragacha normal, keyin yopishadi |

### Muhim eslatmalar:
- `z-index` faqat pozitsiyalangan elementlarda (`relative`, `absolute`, `fixed`, `sticky`) ishlaydi.
- `sticky` brauzerlarda to'liq qo'llab-quvvatlanadi, lekin ota-elementda `overflow: hidden` bo'lsa ishlamasligi mumkin.
- `absolute` joylashganda, uning ota-elementi `position: relative` bo'lishi tavsiya etiladi.

---
<br> <br> <br> <br> <br>
## Overflow

CSS-dagi `overflow` xususiyati elementning kontenti uning chegarasidan (blok o'lchamidan) chiqib ketganda qanday ishlashini belgilaydi.

### Asosiy tushuncha
- **Ta'rifi**: Elementning belgilangan balandligi (height) yoki kengligidan (width) katta bo'lgan kontentni boshqarish.
- **Ishlatilishi**: Har qanday blok elementda ishlaydi.

### 1. `visible`
- **Ta'rifi**: Standart qiymat. Kontent chegaradan chiqib ketganda ham to'liq ko'rinadi.
- **Xususiyatlari**: Elementdan tashqariga chiqib ketgan kontent boshqa elementlar ustiga chiqib ketishi mumkin.

**Dastur**:
```html
<style>
  .visible-box {
    width: 200px;
    height: 80px;
    background: lightblue;
    overflow: visible;
    border: 2px solid blue;
    margin-bottom: 50px; /* Chiqib ketgan kontent uchun joy */
  }
</style>
<div class="visible-box">
  Bu juda uzun matn. Overflow visible bo'lgani uchun bu matn chegaradan chiqib ketadi va blokdan tashqarida ham ko'rinadi. Bu boshqa elementlar ustiga chiqib ketishi mumkin.
</div>
<p>Pastdagi paragraf</p>
```
Natija: Matn ko'k blokdan chiqib ketadi va pastdagi paragraf ustiga chiqishi mumkin.

### 2. `hidden`
- **Ta'rifi**: Chegaradan chiqib ketgan kontent kesiladi (yashiriladi) va ko'rinmaydi.
- **Xususiyatlari**: Foydalanuvchi yashirin kontentni ko'ra olmaydi.

**Dastur**:
```html
<style>
  .hidden-box {
    width: 200px;
    height: 80px;
    background: lightcoral;
    overflow: hidden;
    border: 2px solid red;
    margin-bottom: 20px;
  }
</style>
<div class="hidden-box">
  Bu juda uzun matn. Overflow hidden bo'lgani uchun faqat blok ichidagi qism ko'rinadi. Qolgan qism kesiladi va foydalanuvchi uni ko'ra olmaydi.
</div>
<p>Bu matn normal joylashgan</p>
```
Natija: Matnning faqat 80px balandlikdagi qismi ko'rinadi, qolgani kesiladi.

### 3. `scroll`
- **Ta'rifi**: Kontent chegaradan chiqmasa ham aylantirish paneli (scrollbar) qo'shiladi.
- **Xususiyatlari**: Gorizontal va vertikal scroll barlari doimo ko'rinadi.

**Dastur**:
```html
<style>
  .scroll-box {
    width: 200px;
    height: 80px;
    background: lightgreen;
    overflow: scroll;
    border: 2px solid green;
    margin-bottom: 20px;
  }
  
  .scroll-box-small {
    width: 200px;
    height: 80px;
    background: lightyellow;
    overflow: scroll;
    border: 2px solid orange;
  }
</style>

<div class="scroll-box">
  Bu juda uzun matn. Overflow scroll bo'lgani uchun scroll bar doimo ko'rinadi. Matn sig'masa ham sig'masa ham scroll bar mavjud.
</div>

<div class="scroll-box-small">
  Qisqa matn.
</div>
```
Natija: Ikkala qutida ham scroll barlari ko'rinadi (kontent sig'sa ham).

### 4. `auto`
- **Ta'rifi**: Brauzer kontentga qarab qaror qiladi. Agar kontent sig'masa, scroll bar qo'shiladi; sig'sa, scroll bar ko'rinmaydi.
- **Xususiyatlari**: Eng ko'p ishlatiladigan va amaliy qiymat.

**Dastur**:
```html
<style>
  .auto-box-long {
    width: 200px;
    height: 80px;
    background: lightpink;
    overflow: auto;
    border: 2px solid purple;
    margin-bottom: 20px;
  }
  
  .auto-box-short {
    width: 200px;
    height: 80px;
    background: lightgray;
    overflow: auto;
    border: 2px solid gray;
  }
</style>

<div class="auto-box-long">
  Bu juda uzun matn. Overflow auto bo'lgani uchun matn sig'magani uchun avtomatik scroll bar paydo bo'ladi. Bu eng amaliy variant hisoblanadi.
</div>

<div class="auto-box-short">
  Qisqa matn - scroll bar yo'q.
</div>
```
Natija: Birinchi qutida scroll bar bor, ikkinchisida yo'q.

### Qo'shimcha: Gorizontal va vertikal overflow
`overflow-x` va `overflow-y` xususiyatlari bilan gorizontal va vertikal yo'nalishlarni alohida boshqarish mumkin.

**Dastur**:
```html
<style>
  .overflow-xy-box {
    width: 200px;
    height: 80px;
    background: lavender;
    overflow-x: scroll;
    overflow-y: hidden;
    border: 2px solid blue;
    white-space: nowrap; /* Matnni bir qatorga sig'dirish */
  }
</style>

<div class="overflow-xy-box">
  Bu juda uzun matn. Gorizontal scroll bor, vertikal scroll yo'q. Bu matn bir qatorda ketadi.
</div>
```
Natija: Faqat gorizontal scroll bar ko'rinadi, vertikal yo'q.

### Asosiy farqlar jadvali

| Qiymat    | Kontent sig'masa | Kontent sig'sa | Scroll bar holati          |
|-----------|------------------|----------------|----------------------------|
| visible   | To'liq ko'rinadi | To'liq ko'rinadi | Hech qachon ko'rinmaydi    |
| hidden    | Kesiladi         | To'liq ko'rinadi | Hech qachon ko'rinmaydi    |
| scroll    | Scroll bilan     | Scroll bilan   | Doimo ko'rinadi            |
| auto      | Scroll bilan     | To'liq ko'rinadi | Kerak bo'lganda ko'rinadi  |

### Muhim eslatmalar:
1. `overflow` ishlashi uchun elementda cheklangan `height` yoki `width` bo'lishi kerak.
2. `visible` qiymatidan tashqari barcha qiymatlar yangi blok formatlash kontekstini (BFC) yaratadi.
3. `overflow: hidden` animatsiyalar va effektlar uchun foydali (masalan, hover effektlarida).
4. `scroll` qiymati mobil qurilmalarda foydalanuvchi tajribasini yomonlashtirishi mumkin, `auto` tavsiya etiladi.

---
<br> <br> <br> <br> <br>
## Float & Clear

CSS-dagi `float` va `clear` xususiyatlari elementlarning bir-biri atrofida oqib o'tishini va joylashishini boshqaradi.

### Float

`float` xususiyati elementni konteynerining chap yoki o'ng tomoniga surib, undan keyingi elementlarning uning atrofida oqib o'tishini ta'minlaydi.

### 1. `float: left`
- **Ta'rifi**: Elementni chap tomonga suradi. Keyingi elementlar uning o'ng tomonidan oqib o'tadi.
- **Xususiyatlari**: Element normal oqimdan chiqariladi, lekin kontent uning atrofida joylashadi.

**Dastur**:
```html
<style>
  .float-left-box {
    float: left;
    width: 150px;
    height: 100px;
    background: lightblue;
    margin: 10px;
    text-align: center;
    border: 2px solid blue;
  }
  
  .container {
    background: #f0f0f0;
    padding: 15px;
    width: 500px;
  }
  
  .text {
    background: lightgray;
    padding: 10px;
  }
</style>

<div class="container">
  <div class="float-left-box">Chapga float</div>
  <div class="float-left-box">Chapga float 2</div>
  <p class="text">
    Bu matn float qilingan elementlar atrofida oqib o'tadi. Float elementlar chap tomonda joylashgan va matn ularning o'ng tomonidan davom etadi. Float elementlar normal oqimdan chiqarilgan, lekin matn ularni hisobga oladi.
  </p>
</div>
```
Natija: Ikkala `div` chap tomonda yonma-yon joylashadi, matn ularning o'ng tomonidan oqib o'tadi.

### 2. `float: right`
- **Ta'rifi**: Elementni o'ng tomonga suradi. Keyingi elementlar uning chap tomonidan oqib o'tadi.
- **Xususiyatlari**: `float: left` bilan bir xil, faqat yo'nalishi farq qiladi.

**Dastur**:
```html
<style>
  .float-right-box {
    float: right;
    width: 150px;
    height: 100px;
    background: lightcoral;
    margin: 10px;
    text-align: center;
    border: 2px solid red;
  }
  
  .container {
    background: #f0f0f0;
    padding: 15px;
    width: 500px;
  }
  
  .clear-text {
    background: lightgray;
    padding: 10px;
  }
</style>

<div class="container">
  <div class="float-right-box">O'ngga float</div>
  <div class="float-right-box">O'ngga float 2</div>
  <p class="clear-text">
    Bu matn float qilingan elementlar atrofida oqib o'tadi. Float elementlar o'ng tomonda joylashgan va matn ularning chap tomonidan davom etadi. Float elementlar o'ng tomonda yonma-yon joylashadi.
  </p>
</div>
```
Natija: Ikkala `div` o'ng tomonda joylashadi, matn ularning chap tomonidan oqib o'tadi.

### 3. Float bilan galereya yaratish
Float elementlarni yonma-yon joylashtirish uchun ishlatish mumkin.

**Dastur**:
```html
<style>
  .gallery {
    width: 600px;
    background: #f9f9f9;
    padding: 20px;
    overflow: auto; /* Floatlarni tozalash uchun */
  }
  
  .gallery-item {
    float: left;
    width: 180px;
    height: 150px;
    margin: 10px;
    background: lightgreen;
    border: 2px solid green;
    text-align: center;
    line-height: 150px;
  }
</style>

<div class="gallery">
  <div class="gallery-item">1-rasm</div>
  <div class="gallery-item">2-rasm</div>
  <div class="gallery-item">3-rasm</div>
  <div class="gallery-item">4-rasm</div>
  <div class="gallery-item">5-rasm</div>
  <div class="gallery-item">6-rasm</div>
</div>
```
Natija: Barcha `gallery-item` elementlar chap tomonda yonma-yon joylashadi.

---

### Clear

`clear` xususiyati float qilingan elementlarning yonida joylashishni taqiqlaydi va elementni float elementlardan pastga tushiradi.

### 1. `clear: left`
- **Ta'rifi**: Chap tomonda float qilingan elementlar bo'lmasligini talab qiladi. Agar chapda float bo'lsa, element pastga tushadi.
- **Xususiyatlari**: Faqat chap tomondagi floatlarga ta'sir qiladi.

**Dastur**:
```html
<style>
  .float-left {
    float: left;
    width: 150px;
    height: 80px;
    background: lightblue;
    margin: 5px;
    border: 2px solid blue;
  }
  
  .clear-left {
    clear: left;
    background: lightcoral;
    padding: 10px;
    border: 2px solid red;
  }
  
  .container {
    width: 500px;
    background: #f0f0f0;
    padding: 15px;
  }
</style>

<div class="container">
  <div class="float-left">Float left</div>
  <div class="float-left">Float left</div>
  <div class="float-left">Float left</div>
  
  <div class="clear-left">
    Bu element clear: left qilingan. Chapdagi float elementlardan keyin pastga tushadi.
  </div>
  
  <div class="float-left">Float left 4</div>
  <p>Bu matn float element atrofida oqadi.</p>
</div>
```
Natija: `clear-left` elementi barcha chap floatlardan pastda joylashadi.

### 2. `clear: right`
- **Ta'rifi**: O'ng tomonda float qilingan elementlar bo'lmasligini talab qiladi.
- **Xususiyatlari**: Faqat o'ng tomondagi floatlarga ta'sir qiladi.

**Dastur**:
```html
<style>
  .float-right {
    float: right;
    width: 150px;
    height: 80px;
    background: lightgreen;
    margin: 5px;
    border: 2px solid green;
  }
  
  .clear-right {
    clear: right;
    background: lightyellow;
    padding: 10px;
    border: 2px solid orange;
  }
  
  .container {
    width: 500px;
    background: #f0f0f0;
    padding: 15px;
  }
</style>

<div class="container">
  <div class="float-right">Float right</div>
  <div class="float-right">Float right</div>
  
  <div class="clear-right">
    Bu element clear: right qilingan. O'ngdagi float elementlardan keyin pastga tushadi.
  </div>
  
  <div class="float-right">Float right 3</div>
  <p>Bu matn float element atrofida oqadi.</p>
</div>
```
Natija: `clear-right` elementi o'ng floatlardan pastda joylashadi.

### 3. `clear: both`
- **Ta'rifi**: Chap va o'ng tomonda float qilingan elementlar bo'lmasligini talab qiladi.
- **Xususiyatlari**: Eng ko'p ishlatiladigan qiymat. Ikkala tomondagi floatlarni tozalaydi.

**Dastur**:
```html
<style>
  .float-left-sm {
    float: left;
    width: 120px;
    height: 60px;
    background: lightblue;
    margin: 5px;
    border: 2px solid blue;
  }
  
  .float-right-sm {
    float: right;
    width: 120px;
    height: 60px;
    background: lightgreen;
    margin: 5px;
    border: 2px solid green;
  }
  
  .clear-both {
    clear: both;
    background: lightcoral;
    padding: 15px;
    margin-top: 10px;
    border: 2px solid red;
  }
  
  .container {
    width: 550px;
    background: #f0f0f0;
    padding: 15px;
  }
</style>

<div class="container">
  <div class="float-left-sm">Chap float</div>
  <div class="float-left-sm">Chap float</div>
  <div class="float-right-sm">O'ng float</div>
  <div class="float-right-sm">O'ng float</div>
  
  <div class="clear-both">
    Bu element clear: both qilingan. Chap va o'ngdagi barcha floatlardan keyin pastga tushadi.
  </div>
  
  <p>Bu matn float elementlardan keyin normal joylashadi.</p>
</div>
```
Natija: `clear-both` elementi chap va o'ngdagi barcha float elementlardan pastda joylashadi.

---

### Float bilan layout yaratish

Float yordamida oddiy layout yaratish:

**Dastur**:
```html
<style>
  * {
    box-sizing: border-box;
  }
  
  .header {
    background: lightblue;
    padding: 20px;
    text-align: center;
    border: 2px solid blue;
  }
  
  .sidebar {
    float: left;
    width: 30%;
    background: lightgreen;
    padding: 20px;
    height: 300px;
    border: 2px solid green;
  }
  
  .content {
    float: left;
    width: 70%;
    background: lightyellow;
    padding: 20px;
    height: 300px;
    border: 2px solid orange;
  }
  
  .footer {
    clear: both;
    background: lightcoral;
    padding: 20px;
    text-align: center;
    border: 2px solid red;
  }
  
  .container {
    width: 800px;
    margin: 0 auto;
  }
</style>

<div class="container">
  <div class="header">Sarlavha</div>
  <div class="sidebar">Yon panel (30%)</div>
  <div class="content">Asosiy kontent (70%)</div>
  <div class="footer">Altbilgi - clear: both bilan tozalangan</div>
</div>
```
Natija: Ikki ustunli layout: sidebar chapda 30%, content o'ngda 70%, footer ikkalasidan pastda.

---

### Float muammosi va yechimlari

Float qilingan elementlarning ota-elementi ularni o'z ichiga olmay qolishi mumkin:

**Muammo**:
```html
<style>
  .parent {
    background: #f0f0f0;
    border: 2px solid black;
    padding: 10px;
  }
  
  .child-float {
    float: left;
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 5px;
  }
</style>

<div class="parent">
  <div class="child-float">1</div>
  <div class="child-float">2</div>
  <div class="child-float">3</div>
</div>
<p>Ota-element balandligi 0 ga teng - floatlarni o'rab olmagan</p>
```
Natija: Ota-element (`parent`) floatlarni o'rab olmaydi, balandligi 0 bo'ladi.

**Yechim 1 - Clearfix**:
```html
<style>
  .parent-clearfix {
    background: #f0f0f0;
    border: 2px solid black;
    padding: 10px;
    overflow: auto; /* Yoki overflow: hidden */
  }
  
  .parent-clearfix::after {
    content: "";
    display: table;
    clear: both;
  }
  
  .child {
    float: left;
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 5px;
  }
</style>

<div class="parent-clearfix">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
</div>
<p>Ota-element endi floatlarni o'rab olgan</p>
```
Natija: Ota-element floatlarni to'g'ri o'rab oladi.

**Yechim 2 - Empty div bilan**:
```html
<style>
  .parent {
    background: #f0f0f0;
    border: 2px solid black;
    padding: 10px;
  }
  
  .child {
    float: left;
    width: 100px;
    height: 100px;
    background: lightblue;
    margin: 5px;
  }
  
  .clearfix {
    clear: both;
  }
</style>

<div class="parent">
  <div class="child">1</div>
  <div class="child">2</div>
  <div class="child">3</div>
  <div class="clearfix"></div>
</div>
```
Natija: Bo'sh `div` floatlarni tozalaydi va ota-element ularni o'rab oladi.

---

### Asosiy farqlar jadvali

| Xususiyat | Qiymat | Ta'siri |
|-----------|--------|---------|
| `float` | `left` | Elementni chapga suradi, kontent o'ngdan oqadi |
| `float` | `right` | Elementni o'ngga suradi, kontent chapdan oqadi |
| `clear` | `left` | Chap floatlardan pastga tushiradi |
| `clear` | `right` | O'ng floatlardan pastga tushiradi |
| `clear` | `both` | Barcha floatlardan pastga tushiradi |

### Muhim eslatmalar:
1. Float qilingan elementlar normal oqimdan chiqariladi.
2. Float asosan matn atrofida oqish, galereyalar va eski usulda layout yaratish uchun ishlatiladi.
3. Zamonaviy layoutlarda Flexbox va Grid afzal ko'riladi.
4. Float elementlardan keyin layout buzilmasligi uchun `clear` yoki clearfix ishlatish kerak.
5. Float qilingan elementlar blok element kabi ishlaydi (width berish mumkin).