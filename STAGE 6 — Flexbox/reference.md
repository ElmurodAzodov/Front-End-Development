# **STAGE 6 — Flexbox**

## Flex Container

Flexbox - bir o'lchovli layout modeli bo'lib, elementlarni moslashuvchan qator yoki ustun shaklida joylashtirish imkonini beradi.

### display: flex

Flex konteyner yaratish uchun ota-elementga `display: flex` beriladi. Shu bilan ichidagi barcha to'g'ridan-to'g'ri bolalar **flex item**ga aylanadi.

**Dastur**:
```html
<style>
  .container {
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
</style>

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Itemlar yonma-yon (qator bo'ylab) joylashadi.

---

### flex-direction

Asosiy o'q (main axis) yo'nalishini belgilaydi.

#### 1. `row` (standart)
- **Ta'rifi**: Elementlar chapdan o'ngga qator bo'ylab joylashadi.
- **Asosiy o'q**: Gorizontal (chap -> o'ng)
- **Ko'ndalang o'q**: Vertikal (yuqori -> past)

**Dastur**:
```html
<style>
  .row-container {
    display: flex;
    flex-direction: row;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightcoral;
    padding: 20px;
    margin: 5px;
  }
</style>

<div class="row-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: 1, 2, 3 chapdan o'ngga yonma-yon.

#### 2. `column`
- **Ta'rifi**: Elementlar yuqoridan pastga ustun bo'ylab joylashadi.
- **Asosiy o'q**: Vertikal (yuqori -> past)
- **Ko'ndalang o'q**: Gorizontal (chap -> o'ng)

**Dastur**:
```html
<style>
  .column-container {
    display: flex;
    flex-direction: column;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    height: 300px;
  }
  
  .item {
    background: lightgreen;
    padding: 20px;
    margin: 5px;
  }
</style>

<div class="column-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: 1, 2, 3 yuqoridan pastga ustun shaklida.

#### 3. `row-reverse`
- **Ta'rifi**: Elementlar o'ngdan chapga qator bo'ylab joylashadi.

**Dastur**:
```html
<style>
  .row-reverse-container {
    display: flex;
    flex-direction: row-reverse;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
  }
</style>

<div class="row-reverse-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: 3, 2, 1 o'ngdan chapga yonma-yon.

#### 4. `column-reverse`
- **Ta'rifi**: Elementlar pastdan yuqoriga ustun bo'ylab joylashadi.

**Dastur**:
```html
<style>
  .column-reverse-container {
    display: flex;
    flex-direction: column-reverse;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    height: 300px;
  }
  
  .item {
    background: lightcoral;
    padding: 20px;
    margin: 5px;
  }
</style>

<div class="column-reverse-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: 3, 2, 1 pastdan yuqoriga.

---

### flex-wrap

Itemlarning konteynerga sig'masa qanday joylashishini belgilaydi.

#### 1. `nowrap` (standart)
- **Ta'rifi**: Barcha itemlar bir qatorga sig'diriladi (sig'masa kichrayadi).
- **Xususiyati**: Itemlar konteynerdan chiqib ketishi mumkin.

**Dastur**:
```html
<style>
  .nowrap-container {
    display: flex;
    flex-wrap: nowrap;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 300px;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
    width: 100px;
  }
</style>

<div class="nowrap-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```
Natija: To'rtta 100px li item 300px konteynerga sig'maydi, kichrayadi yoki chiqib ketadi.

#### 2. `wrap`
- **Ta'rifi**: Itemlar konteynerga sig'masa keyingi qatorga o'tadi.
- **Xususiyati**: Ko'p qatorli flex layout yaratish.

**Dastur**:
```html
<style>
  .wrap-container {
    display: flex;
    flex-wrap: wrap;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 350px;
  }
  
  .item {
    background: lightgreen;
    padding: 20px;
    margin: 5px;
    width: 100px;
  }
</style>

<div class="wrap-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Birinchi qatorda 3 ta item, ikkinchi qatorda 3 ta item joylashadi.

#### 3. `wrap-reverse`
- **Ta'rifi**: Itemlar konteynerga sig'masa keyingi qatorga o'tadi, lekin qatorlar teskari tartibda joylashadi.

**Dastur**:
```html
<style>
  .wrap-reverse-container {
    display: flex;
    flex-wrap: wrap-reverse;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 350px;
  }
  
  .item {
    background: lightcoral;
    padding: 20px;
    margin: 5px;
    width: 100px;
  }
</style>

<div class="wrap-reverse-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Ikkinchi qator tepada, birinchi qator pastda joylashadi.

---

### justify-content

Asosiy o'q (main axis) bo'ylab itemlarning joylashishini belgilaydi.

#### 1. `flex-start` (standart)
- **Ta'rifi**: Itemlar boshidan boshlab joylashadi.

**Dastur**:
```html
<style>
  .start-container {
    display: flex;
    justify-content: flex-start;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 500px;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
  }
</style>

<div class="start-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Itemlar chap tomonda joylashadi.

#### 2. `flex-end`
- **Ta'rifi**: Itemlar oxiridan boshlab joylashadi.

**Dastur**:
```html
<div style="display: flex; justify-content: flex-end; background: #f0f0f0; padding: 10px; width: 500px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Itemlar o'ng tomonda joylashadi.

#### 3. `center`
- **Ta'rifi**: Itemlar markazda joylashadi.

**Dastur**:
```html
<div style="display: flex; justify-content: center; background: #f0f0f0; padding: 10px; width: 500px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Itemlar o'rtada joylashadi.

#### 4. `space-between`
- **Ta'rifi**: Itemlar orasidagi bo'shliq teng, birinchi item boshida, oxirgi item oxirida.

**Dastur**:
```html
<div style="display: flex; justify-content: space-between; background: #f0f0f0; padding: 10px; width: 500px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: 1 chapda, 3 o'ngda, 2 o'rtada.

#### 5. `space-around`
- **Ta'rifi**: Har bir item atrofida teng bo'shliq.

**Dastur**:
```html
<div style="display: flex; justify-content: space-around; background: #f0f0f0; padding: 10px; width: 500px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Har bir itemning chap va o'ngida teng bo'shliq.

#### 6. `space-evenly`
- **Ta'rifi**: Barcha bo'shliqlar (itemlar orasi, bosh va oxir) teng.

**Dastur**:
```html
<div style="display: flex; justify-content: space-evenly; background: #f0f0f0; padding: 10px; width: 500px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Barcha bo'shliqlar bir xil.

---

### align-items

Ko'ndalang o'q (cross axis) bo'ylab itemlarning joylashishini belgilaydi.

#### 1. `stretch` (standart)
- **Ta'rifi**: Itemlar konteyner balandligini to'ldiradi.

**Dastur**:
```html
<style>
  .stretch-container {
    display: flex;
    align-items: stretch;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    height: 200px;
  }
  
  .stretch-item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
</style>

<div class="stretch-container">
  <div class="stretch-item">1</div>
  <div class="stretch-item">2 (uzun matn)</div>
  <div class="stretch-item">3</div>
</div>
```
Natija: Barcha itemlar 200px balandlikni to'ldiradi.

#### 2. `flex-start`
- **Ta'rifi**: Itemlar yuqori tomonda joylashadi.

**Dastur**:
```html
<div style="display: flex; align-items: flex-start; background: #f0f0f0; padding: 10px; height: 200px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Itemlar tepada joylashadi.

#### 3. `flex-end`
- **Ta'rifi**: Itemlar pastki tomonda joylashadi.

**Dastur**:
```html
<div style="display: flex; align-items: flex-end; background: #f0f0f0; padding: 10px; height: 200px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Itemlar pastda joylashadi.

#### 4. `center`
- **Ta'rifi**: Itemlar o'rtada joylashadi.

**Dastur**:
```html
<div style="display: flex; align-items: center; background: #f0f0f0; padding: 10px; height: 200px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```
Natija: Itemlar vertikal o'rtada joylashadi.

#### 5. `baseline`
- **Ta'rifi**: Itemlar matn asos chizig'i bo'ylab joylashadi.

**Dastur**:
```html
<style>
  .baseline-container {
    display: flex;
    align-items: baseline;
    background: #f0f0f0;
    padding: 10px;
    height: 200px;
  }
  
  .item1 { font-size: 20px; background: lightblue; padding: 15px; }
  .item2 { font-size: 30px; background: lightgreen; padding: 25px; }
  .item3 { font-size: 15px; background: lightcoral; padding: 10px; }
</style>

<div class="baseline-container">
  <div class="item1">Matn 1</div>
  <div class="item2">Matn 2</div>
  <div class="item3">Matn 3</div>
</div>
```
Natija: Matnlar bir chiziqda joylashadi.

---

### align-content

Ko'p qatorli flex konteynerlarda qatorlar orasidagi bo'shliqni belgilaydi. Faqat `flex-wrap: wrap` bo'lganda ishlaydi.

#### 1. `stretch` (standart)
- **Ta'rifi**: Qatorlar bo'shliqni teng taqsimlaydi.

**Dastur**:
```html
<style>
  .content-container {
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    height: 400px;
    width: 300px;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
    width: 80px;
  }
</style>

<div class="content-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Qatorlar bo'ylab teng taqsimlanadi.

#### 2. `flex-start`
- **Ta'rifi**: Qatorlar yuqorida joylashadi.

**Dastur**:
```html
<div style="display: flex; flex-wrap: wrap; align-content: flex-start; background: #f0f0f0; padding: 10px; height: 400px; width: 300px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Qatorlar yuqorida, pastda bo'sh joy qoladi.

#### 3. `flex-end`
- **Ta'rifi**: Qatorlar pastda joylashadi.

**Dastur**:
```html
<div style="display: flex; flex-wrap: wrap; align-content: flex-end; background: #f0f0f0; padding: 10px; height: 400px; width: 300px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Qatorlar pastda, tepada bo'sh joy qoladi.

#### 4. `center`
- **Ta'rifi**: Qatorlar o'rtada joylashadi.

**Dastur**:
```html
<div style="display: flex; flex-wrap: wrap; align-content: center; background: #f0f0f0; padding: 10px; height: 400px; width: 300px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Qatorlar o'rtada, tepa va pastda teng bo'sh joy.

#### 5. `space-between`
- **Ta'rifi**: Qatorlar orasidagi bo'shliq teng, birinchi qator tepada, oxirgi qator pastda.

**Dastur**:
```html
<div style="display: flex; flex-wrap: wrap; align-content: space-between; background: #f0f0f0; padding: 10px; height: 400px; width: 300px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Qatorlar orasida teng bo'shliq, tepa va pastda bo'sh joy yo'q.

#### 6. `space-around`
- **Ta'rifi**: Har bir qator atrofida teng bo'shliq.

**Dastur**:
```html
<div style="display: flex; flex-wrap: wrap; align-content: space-around; background: #f0f0f0; padding: 10px; height: 400px; width: 300px;">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```
Natija: Har bir qator tepa va pastida teng bo'shliq.

---

### Asosiy farqlar jadvali

| Xususiyat | Vazifasi | Asosiy qiymatlar |
|-----------|----------|------------------|
| `display: flex` | Flex konteyner yaratish | flex, inline-flex |
| `flex-direction` | Asosiy o'q yo'nalishi | row, column, row-reverse, column-reverse |
| `flex-wrap` | Ko'p qatorli bo'lish | nowrap, wrap, wrap-reverse |
| `justify-content` | Asosiy o'q bo'ylab joylashish | flex-start, flex-end, center, space-between, space-around, space-evenly |
| `align-items` | Ko'ndalang o'q bo'ylab joylashish | stretch, flex-start, flex-end, center, baseline |
| `align-content` | Ko'p qatorlarni joylashish | stretch, flex-start, flex-end, center, space-between, space-around |

### Muhim eslatmalar:
1. Flex konteyner faqat to'g'ridan-to'g'ri bolalarga ta'sir qiladi.
2. `justify-content` va `align-items` birgalikda to'liq markazlash uchun ishlatiladi.
3. `align-content` faqat `flex-wrap: wrap` bo'lganda va bir necha qator bo'lganda ishlaydi.
4. `flex-direction` o'zgarganda asosiy va ko'ndalang o'q ham o'zgaradi.

---
<br>
<br>
<br>
<br>
<br>

## Flex Items

Flex itemlar - flex konteyner ichidagi to'g'ridan-to'g'ri bolalar. Ularga quyidagi xususiyatlarni berish mumkin:

### 1. order

Itemlarning tartib raqamini belgilaydi. Kichik qiymat oldinroq joylashadi.

- **Ta'rifi**: Standart tartibni o'zgartirish uchun ishlatiladi.
- **Standart qiymat**: `0`
- **Xususiyati**: Manfiy qiymatlar ham ishlatish mumkin.

**Dastur**:
```html
<style>
  .container {
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
  }
  
  .item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
  
  .item1 { order: 3; background: lightcoral; }
  .item2 { order: 1; background: lightgreen; }
  .item3 { order: 2; background: lightyellow; }
</style>

<div class="container">
  <div class="item item1">1 (order: 3)</div>
  <div class="item item2">2 (order: 1)</div>
  <div class="item item3">3 (order: 2)</div>
  <div class="item">4 (order: 0)</div>
</div>
```
Natija: Tartib: 2 (order:1), 3 (order:2), 4 (order:0), 1 (order:3)

**Muhim**: HTML strukturasini o'zgartirmasdan vizual tartibni o'zgartirish imkonini beradi.

---

### 2. flex-grow

Itemning bo'sh joyni o'zlashtirish nisbatini belgilaydi.

- **Ta'rifi**: Qolgan bo'sh joyni itemlar orasida qanday taqsimlashni belgilaydi.
- **Standart qiymat**: `0` (o'smaydi)
- **Xususiyati**: Musbat sonlar. Katta qiymat ko'proq joy oladi.

**Dastur 1 - Teng taqsimlash**:
```html
<style>
  .grow-container {
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 600px;
  }
  
  .grow-item {
    background: lightblue;
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
  
  .grow1 { flex-grow: 1; }
  .grow2 { flex-grow: 1; }
  .grow3 { flex-grow: 1; }
</style>

<div class="grow-container">
  <div class="grow-item grow1">grow:1</div>
  <div class="grow-item grow2">grow:1</div>
  <div class="grow-item grow3">grow:1</div>
</div>
```
Natija: Har bir item teng kenglikda (qolgan joy teng taqsimlanadi).

**Dastur 2 - Turli nisbatlar**:
```html
<style>
  .ratio-container {
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 600px;
  }
  
  .ratio-item {
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
  
  .ratio1 { flex-grow: 1; background: lightcoral; }
  .ratio2 { flex-grow: 2; background: lightgreen; }
  .ratio3 { flex-grow: 3; background: lightblue; }
</style>

<div class="ratio-container">
  <div class="ratio-item ratio1">grow:1</div>
  <div class="ratio-item ratio2">grow:2</div>
  <div class="ratio-item ratio3">grow:3</div>
</div>
```
Natija: Bo'sh joy 1:2:3 nisbatda taqsimlanadi (3-item eng keng).

**Dastur 3 - Grow 0 vs Grow 1**:
```html
<div style="display: flex; width: 600px; background: #f0f0f0; padding: 10px;">
  <div style="flex-grow: 0; background: lightcoral; padding: 20px;">grow:0</div>
  <div style="flex-grow: 1; background: lightgreen; padding: 20px;">grow:1</div>
  <div style="flex-grow: 0; background: lightblue; padding: 20px;">grow:0</div>
</div>
```
Natija: Faqat grow:1 bo'lgan item kengayadi, qolganlar o'z hajmida qoladi.

---

### 3. flex-shrink

Itemning qisqarish nisbatini belgilaydi.

- **Ta'rifi**: Konteynerga sig'may qolganda itemlar qanday qisqarishini belgilaydi.
- **Standart qiymat**: `1` (qisqarishi mumkin)
- **Xususiyati**: `0` berilsa qisqarmaydi. Katta qiymat ko'proq qisqaradi.

**Dastur 1 - Standart qisqarish**:
```html
<style>
  .shrink-container {
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 400px;
  }
  
  .shrink-item {
    width: 200px;
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
  
  .shrink1 { flex-shrink: 1; background: lightcoral; }
  .shrink2 { flex-shrink: 2; background: lightgreen; }
  .shrink3 { flex-shrink: 3; background: lightblue; }
</style>

<div class="shrink-container">
  <div class="shrink-item shrink1">shrink:1</div>
  <div class="shrink-item shrink2">shrink:2</div>
  <div class="shrink-item shrink3">shrink:3</div>
</div>
```
Natija: Barcha itemlar 200px, konteyner 400px. 200px sig'maydi, shrink:3 eng ko'p qisqaradi.

**Dastur 2 - Qisqarmaslik**:
```html
<div style="display: flex; width: 400px; background: #f0f0f0; padding: 10px;">
  <div style="width: 200px; flex-shrink: 0; background: lightcoral; padding: 20px;">shrink:0</div>
  <div style="width: 200px; flex-shrink: 1; background: lightgreen; padding: 20px;">shrink:1</div>
  <div style="width: 200px; flex-shrink: 1; background: lightblue; padding: 20px;">shrink:1</div>
</div>
```
Natija: shrink:0 bo'lgan item qisqarmaydi (konteynerdan chiqib ketadi), qolganlar qisqaradi.

---

### 4. flex-basis

Itemning boshlang'ich o'lchamini belgilaydi.

- **Ta'rifi**: `width` ga o'xshaydi, lekin flex o'qiga moslashadi.
- **Standart qiymat**: `auto`
- **Xususiyati**: So'zlar (auto, content) yoki o'lcham (px, %, em)

**Dastur 1 - Turli basis qiymatlari**:
```html
<style>
  .basis-container {
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    width: 600px;
  }
  
  .basis-item {
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
  
  .basis1 { flex-basis: 100px; background: lightcoral; }
  .basis2 { flex-basis: 200px; background: lightgreen; }
  .basis3 { flex-basis: 300px; background: lightblue; }
</style>

<div class="basis-container">
  <div class="basis-item basis1">basis:100px</div>
  <div class="basis-item basis2">basis:200px</div>
  <div class="basis-item basis3">basis:300px</div>
</div>
```
Natija: Itemlar berilgan o'lchamlarda boshlanadi.

**Dastur 2 - Basis vs Width**:
```html
<div style="display: flex; background: #f0f0f0; padding: 10px; width: 500px;">
  <div style="flex-basis: 150px; background: lightcoral; padding: 20px;">basis:150px</div>
  <div style="width: 150px; background: lightgreen; padding: 20px;">width:150px</div>
  <div style="flex-basis: auto; background: lightblue; padding: 20px;">basis:auto</div>
</div>
```
Natija: `flex-basis` flex o'qida, `width` esa gorizontal o'qda ishlaydi.

**Dastur 3 - Basis column da**:
```html
<div style="display: flex; flex-direction: column; background: #f0f0f0; padding: 10px; height: 400px;">
  <div style="flex-basis: 50px; background: lightcoral; padding: 10px;">basis:50px</div>
  <div style="flex-basis: 100px; background: lightgreen; padding: 10px;">basis:100px</div>
  <div style="flex-basis: 150px; background: lightblue; padding: 10px;">basis:150px</div>
</div>
```
Natija: `flex-direction: column` bo'lganda basis balandlikni belgilaydi.

---

### 5. align-self

Alohida item uchun `align-items` ni bekor qiladi.

- **Ta'rifi**: Bitta itemning ko'ndalang o'qdagi joylashishini o'zgartirish.
- **Standart qiymat**: `auto` (ota-elementning `align-items` qiymatini oladi)
- **Xususiyati**: `align-items` bilan bir xil qiymatlar

**Dastur 1 - Har xil joylashish**:
```html
<style>
  .self-container {
    display: flex;
    align-items: center; /* Ota-element qiymati */
    background: #f0f0f0;
    padding: 10px;
    border: 2px solid black;
    height: 200px;
    width: 500px;
  }
  
  .self-item {
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
    background: lightblue;
  }
  
  .self-start { align-self: flex-start; background: lightcoral; }
  .self-end { align-self: flex-end; background: lightgreen; }
  .self-center { align-self: center; background: lightyellow; }
  .self-stretch { align-self: stretch; background: lightpink; }
  .self-auto { align-self: auto; background: lightgray; } /* otasidan center oladi */
</style>

<div class="self-container">
  <div class="self-item self-start">start</div>
  <div class="self-item self-end">end</div>
  <div class="self-item self-center">center</div>
  <div class="self-item self-stretch">stretch</div>
  <div class="self-item self-auto">auto</div>
</div>
```
Natija: Har bir item o'zining `align-self` qiymati bo'yicha joylashadi.

**Dastur 2 - Baseline**:
```html
<style>
  .baseline-self-container {
    display: flex;
    align-items: center;
    background: #f0f0f0;
    padding: 10px;
    height: 200px;
  }
  
  .baseline-item {
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
  
  .item-baseline { 
    align-self: baseline; 
    background: lightcoral; 
    font-size: 30px;
    padding: 30px;
  }
  .item-normal { 
    background: lightgreen; 
    font-size: 15px;
    padding: 15px;
  }
</style>

<div class="baseline-self-container">
  <div class="baseline-item item-baseline">Katta matn</div>
  <div class="baseline-item item-normal">Kichik matn</div>
  <div class="baseline-item item-normal">Oddiy matn</div>
</div>
```
Natija: `baseline` qiymati matn asos chizig'ini moslashtiradi.

---

### Flex (shorthand)

`flex` - `flex-grow`, `flex-shrink`, `flex-basis` uchun qisqa yozuv.

**Dastur**:
```html
<style>
  .flex-shorthand {
    display: flex;
    background: #f0f0f0;
    padding: 10px;
    width: 600px;
  }
  
  .short-item {
    padding: 20px;
    margin: 5px;
    border: 1px solid blue;
  }
  
  .item1 { flex: 1; background: lightcoral; } /* flex: 1 1 0% */
  .item2 { flex: 2; background: lightgreen; } /* flex: 2 1 0% */
  .item3 { flex: 1 200px; background: lightblue; } /* flex: 1 1 200px */
  .item4 { flex: 0 0 150px; background: lightyellow; } /* o'smaydi, qisqarmaydi, 150px */
</style>

<div class="flex-shorthand">
  <div class="short-item item1">flex:1</div>
  <div class="short-item item2">flex:2</div>
  <div class="short-item item3">flex:1 200px</div>
  <div class="short-item item4">flex:0 0 150px</div>
</div>
```

**Flex shorthand qiymatlari**:
- `flex: 1` → `flex: 1 1 0%`
- `flex: auto` → `flex: 1 1 auto`
- `flex: initial` → `flex: 0 1 auto` (standart)
- `flex: none` → `flex: 0 0 auto`

---

### Amaliy misol - Navbar

```html
<style>
  .navbar {
    display: flex;
    background: #333;
    padding: 10px;
    color: white;
  }
  
  .logo {
    flex: 0 0 100px;
    background: red;
    padding: 10px;
  }
  
  .nav-links {
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 20px;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
    padding: 10px;
  }
  
  .user {
    flex: 0 0 150px;
    background: blue;
    padding: 10px;
    text-align: right;
  }
  
  .special {
    align-self: flex-end;
    background: green;
  }
</style>

<div class="navbar">
  <div class="logo">Logo</div>
  <div class="nav-links">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#" class="special">Services</a>
    <a href="#">Contact</a>
  </div>
  <div class="user">Username</div>
</div>
```
Natija: Logo chapda (100px), linklar o'rtada (flex:1), user o'ngda (150px), "Services" pastroqda (align-self).

---

### Asosiy farqlar jadvali

| Xususiyat | Vazifasi | Standart | Qiymatlar |
|-----------|----------|----------|-----------|
| `order` | Tartib raqami | 0 | Butun sonlar (manfiy mumkin) |
| `flex-grow` | Kengayish nisbati | 0 | Musbat sonlar |
| `flex-shrink` | Qisqarish nisbati | 1 | Musbat sonlar (0 qisqarmaydi) |
| `flex-basis` | Boshlang'ich o'lcham | auto | o'lcham (px, %, em) |
| `align-self` | Alohida joylashish | auto | auto, flex-start, flex-end, center, baseline, stretch |

### Muhim eslatmalar:
1. `order` HTML strukturani o'zgartirmaydi, faqat vizual tartibni o'zgartiradi.
2. `flex-grow` va `flex-shrink` nisbatlar asosida ishlaydi.
3. `flex-basis` va `width` birgalikda ishlatilsa, `flex-basis` ustun keladi.
4. `align-self` faqat bitta item uchun `align-items` ni bekor qiladi.
5. `flex` shorthandini ishlatish kodni qisqartiradi va tushunarli qiladi.