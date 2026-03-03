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