# **Flexbox**

### 🎯 Flex Container Properties (Konteyner Xususiyatlari)

Flexbox modelini faollashtirish uchun asosiy qadam elementga `display: flex` yoki `display: inline-flex` berishdir. Bu konteyner ichidagi to'g'ridan-to'g'ri bolalar (child) **Flex Item** ga aylanadi.

---

#### 1. 🚀 `display: flex` va `display: inline-flex`

- **`display: flex;`** : Konteyner o'zi **Block** element kabi harakat qiladi (kengligi to'liq qatorni egallaydi).
- **`display: inline-flex;`** : Konteyner o'zi **Inline** element kabi harakat qiladi (kengligi ichidagi kontentga qarab o'zgaradi, yonma-yon tura oladi).

```css
/* Block darajasida */
.container-block {
  display: flex;
  background: #f0f0f0;
}

/* Inline darajasida */
.container-inline {
  display: inline-flex;
  background: #e0f7fa;
}
```

---

#### 2. 🧭 `flex-direction` (Asosiy O'q Yo'nalishi)

Bu xususiyat elementlarning qaysi yo'nalishda joylashishini belgilaydi. Flexbox'da ikkita o'q mavjud:

- **Main Axis (Asosiy o'q):** Elementlar ketma-ket joylashadigan o'q.
- **Cross Axis (Ko'ndalang o'q):** Asosiy o'qqa perpendikulyar o'q.

| Qiymat               | Asosiy O'q Yo'nalishi | Ko'rinishi (Ikon) |
| :------------------- | :-------------------- | :---------------: |
| **`row`** (Default)  | Chapdan o'ngga (→)    |        ➡️         |
| **`row-reverse`**    | O'ngdan chapga (←)    |        ⬅️         |
| **`column`**         | Yuqoridan pastga (↓)  |        ⬇️         |
| **`column-reverse`** | Pastdan yuqoriga (↑)  |        ⬆️         |

**Nazariy eslatma:** `column` yoki `column-reverse` ishlatilganda, **Main Axis** vertikal bo'ladi, **Cross Axis** esa gorizontal bo'lib qoladi. `justify-content` va `align-items` ning vazifalari o'qlarga qarab almashadi.

```css
.direction-row {
  display: flex;
  flex-direction: row; /* 1️⃣ 2️⃣ 3️⃣ */
}
.direction-column {
  display: flex;
  flex-direction: column; /* 1️⃣ */
  /* 2️⃣ */
  /* 3️⃣ */
}
```

---

#### 3. 📦 `flex-wrap` (O'ramlash / Ko'p Qatorlilik)

Konteyner kengligi torayib ketganda, elementlar siqilib o'lchami kichrayish o'rniga yangi qatorga o'tishini ta'minlaydi.

| Qiymat                 | Vazifasi                                                                     | Ikon |
| :--------------------- | :--------------------------------------------------------------------------- | :--: |
| **`nowrap`** (Default) | Barcha elementlar bir qatorga siqadi (to'lib ketishi mumkin).                | ↔️➡️ |
| **`wrap`**             | Element sig'masa, keyingi qatorga o'tadi.                                    |  🔽  |
| **`wrap-reverse`**     | Element sig'masa, **yuqoridagi** qatorga o'tadi (teskari tartibda o'raladi). |  🔼  |

```css
.flex-wrap-example {
  display: flex;
  flex-wrap: wrap; /* Elementlar sig'masa pastga tushadi */
  width: 300px; /* Konteyner tor bo'lsin deb cheklaymiz */
}
```

---

#### 4. 📝 `flex-flow` (Qisqa Yozuv / Shorthand)

Bu `flex-direction` va `flex-wrap` ni bir qatorda yozish uchun qisqartma.

**Sintaksis:** `flex-flow: <flex-direction> <flex-wrap>;`

```css
/* To'liq yozuv */
.container {
  flex-direction: row;
  flex-wrap: wrap;
}

/* Qisqa yozuv (Shorthand) */
.container {
  flex-flow: row wrap; /* ➡️ + 🔽 */
}
```

---

#### 5. ⚖️ `justify-content` (Asosiy O'q bo'ylab tekislash)

Elementlarni **Main Axis (Asosiy o'q)** bo'ylab qanday taqsimlashni boshqaradi.

| Qiymat              | Vazifasi                                                                                     | Vizual Holat (Konteyner ichida)          |
| :------------------ | :------------------------------------------------------------------------------------------- | :--------------------------------------- |
| **`flex-start`**    | Boshiga to'plash (Default)                                                                   | **[🧩🧩🧩]** ******\_\_******            |
| **`flex-end`**      | Oxiriga to'plash                                                                             | ******\_\_****** **[🧩🧩🧩]**            |
| **`center`**        | Markazga to'plash                                                                            | **\_\_** **[🧩🧩🧩]** **\_\_**           |
| **`space-between`** | Birinchi element boshda, oxirgi element oxirda, qolgani teng interval.                       | **[🧩]** **\_** **[🧩]** **\_** **[🧩]** |
| **`space-around`**  | Har bir elementning ikki tomoniga teng yarim bo'shliq (Tashqi chegaralar yarim hisoblanadi). | _[🧩]_ **\_ _[🧩]_ \_** _[🧩]_           |
| **`space-evenly`**  | Barcha bo'shliqlar (elementlar orasi va chegaralar) bir xil.                                 | **[🧩]**[🧩]**[🧩]**                     |

---

#### 6. 📏 `align-items` (Ko'ndalang O'q bo'ylab tekislash)

Elementlarni **Cross Axis (Ko'ndalang o'q)** bo'ylab qanday tekislashni boshqaradi. **Bir qatorli konteynerlar** uchun asosiy vosita.

| Qiymat           | Vazifasi                                                              | Vizual Holat (Agar balandlik katta bo'lsa) |
| :--------------- | :-------------------------------------------------------------------- | :----------------------------------------- |
| **`stretch`**    | Elementlarni cho'zib, konteyner balandligiga moslashtirish (Default). | `[====🧩====]`                             |
| **`flex-start`** | Ko'ndalang o'q boshiga tekislash (Yuqori yoki Chap).                  | `[🧩]` ****\_****                          |
| **`flex-end`**   | Ko'ndalang o'q oxiriga tekislash (Past yoki O'ng).                    | ****\_**** `[🧩]`                          |
| **`center`**     | Markazga tekislash.                                                   | **_ `[🧩]` _**                             |
| **`baseline`**   | Elementlarning matn asosiy chizig'i bo'yicha tekislash.               | `[🧩]` `[🧩🧩]` (Bir chiziqda)             |

---

#### 7. 🧵 `align-content` (Ko'p Qatorli Konteynerlar uchun)

**MUHIM:** Bu xususiyat faqat konteynerda **`flex-wrap: wrap`** yoki **`flex-wrap: wrap-reverse`** bo'lganda va **bir nechta qator** mavjud bo'lganda ishlaydi. Qatorlarning umumiy balandligi konteyner balandligidan kichik bo'lsa, qatorlar orasidagi masofani boshqaradi.

| Qiymat                  | Vazifasi (`justify-content` ning qatorlararo versiyasi)                    |
| :---------------------- | :------------------------------------------------------------------------- |
| **`flex-start`**        | Qatorlarni konteyner boshiga to'plash.                                     |
| **`flex-end`**          | Qatorlarni konteyner oxiriga to'plash.                                     |
| **`center`**            | Qatorlarni vertikal markazga to'plash.                                     |
| **`space-between`**     | Birinchi qator tepada, oxirgi qator pastda, qolgan qatorlar teng interval. |
| **`space-around`**      | Har bir qatorning ikki tomoniga teng yarim bo'shliq.                       |
| **`stretch`** (Default) | Qatorlarni cho'zib, mavjud bo'shliqni to'ldirish (balandliklari oshadi).   |

```css
.wrapped-container {
  display: flex;
  flex-wrap: wrap;
  height: 400px;
  align-content: space-between; /* Qatorlar bir-biridan uzoqlashadi */
}
```

---

#### 8. 🕳️ `gap`, `row-gap`, `column-gap` (Oraliq Masofalar)

Elementlar orasidagi masofani (bo'shliqni) belgilashning **eng zamonaviy va to'g'ri usuli**. Margin ishlatishdan ko'ra ancha qulay.

- **`gap`** : Ham qator, ham ustun orasidagi umumiy masofa.
- **`row-gap`** : Faqat qatorlar orasidagi vertikal masofa.
- **`column-gap`** : Faqat ustunlar orasidagi gorizontal masofa.

```css
.gap-example {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Barcha elementlar orasi 20px */
  /* Yoki alohida: */
  row-gap: 30px;
  column-gap: 10px;
}
```

**Eslatma:** `gap` xususiyati `margin` dan farqli o'laroq, konteynerning tashqi chetlarida (birinchi elementdan oldin va oxirgi elementdan keyin) qo'shimcha bo'shliq yaratmaydi. Faqat elementlar **orasida** bo'shliq paydo qiladi. Bu ancha aniq hisob-kitob qilish imkonini beradi.

---

<br>
<br>
<br>
<br>
<br>

---

### 📦 Flex Item Properties (Element Xususiyatlari)

Bu xususiyatlar konteyner emas, balki **konteyner ichidagi har bir alohida element** uchun yoziladi. Ular elementlarning o‘lchami, o‘sish koeffitsienti va joylashuv tartibini boshqaradi.

---

#### 1. 🔢 `order` (Tartib Raqami)

Elementlarning ko‘rinish tartibini HTML strukturasini o‘zgartirmasdan boshqarish imkonini beradi.

- **Default qiymat:** `0`
- **Mantiq:** Barcha elementlar dastlab `0` tartibda turadi. Kimning `order` qiymati kichik bo‘lsa, u **oldinroq** ko‘rinadi. Manfiy qiymatlar ham ishlatilishi mumkin (masalan, `-1`).

| Holat                                    | CSS Kodi                          | Vizual Natija |
| :--------------------------------------- | :-------------------------------- | :------------ |
| **Default**                              | `order: 0;` (hammasi uchun)       | 1️⃣ 2️⃣ 3️⃣      |
| **Oxirgi elementni boshga chiqarish**    | `.item:last-child { order: -1; }` | 3️⃣ 1️⃣ 2️⃣      |
| **Birinchi elementni oxiriga o‘tkazish** | `.item:first-child { order: 1; }` | 2️⃣ 3️⃣ 1️⃣      |

```css
.item-special {
  order: -1; /* Bu element hammadan oldin turadi */
}
```

---

#### 2. 🌱 `flex-grow` (O‘sish Koeffitsienti)

Elementning konteyner ichidagi **ortiqcha bo‘sh joyni** qancha tezlikda egallashini belgilaydi.

- **Default qiymat:** `0` (O‘smaydi, o‘zining asl kengligida qoladi).
- **Mantiq:** Bu foiz emas, **proporsiya (ulush)** ko‘rsatkichidir.
- **Misol:** Agar 3 ta elementdan biriga `flex-grow: 2`, qolgan ikkitasiga `flex-grow: 1` bersak, bo‘sh joy **4 qismga** bo‘linadi (2+1+1=4). Birinchi element 2 qismini, qolganlari 1 qismdan oladi.

| Vizual Holat           | CSS Izohi                                                  |
| :--------------------- | :--------------------------------------------------------- |
| **[🧩] [🧩] [🧩🧩🧩]** | 1-element `grow:1`, 2-element `grow:1`, 3-element `grow:3` |

```css
/* Bo'sh joy bo'lsa, uni teng ikkiga bo'lib oladi */
.item-grow {
  flex-grow: 1;
}
```

---

#### 3. 🥀 `flex-shrink` (Siqilish Koeffitsienti)

Konteyner kengligi torayib, elementlar **sig‘may qolganda**, elementning qanchalik tez kichrayishini belgilaydi.

- **Default qiymat:** `1` (Hamma element teng siqiladi).
- **Mantiq:** Agar siz biror elementning siqilishini xohlamasangiz, unga `flex-shrink: 0` berasiz.

| Qiymat               | Natija                                                                                                                                     |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| **`flex-shrink: 0`** | Element **hech qachon** siqilmaydi, o‘z asl kengligini saqlab qoladi. Agar joy yetmasa, konteynerdan chiqib ketadi (scroll paydo bo‘ladi). |
| **`flex-shrink: 2`** | Boshqa elementlarga (`shrink: 1`) nisbatan **2 barobar tezroq** kichrayadi.                                                                |

```css
/* Bu element boshqalar siqilganda ham o'z o'lchamini berkitmaydi */
.item-no-shrink {
  flex-shrink: 0;
}
```

---

#### 4. 📏 `flex-basis` (Boshlang‘ich Asosiy O‘lcham)

Elementning **Asosiy O'q bo'ylab** (Main Axis) dastlabki, taqsimlashdan oldingi o‘lchamini belgilaydi.

- **Default qiymat:** `auto` (Elementning o‘z `width` yoki `height` qiymatini oladi).
- **Muhim Farq:** `width` o‘rniga `flex-basis` ishlatish tavsiya etiladi.
  - **`width: 200px`** qat'iy buyruq beradi.
  - **`flex-basis: 200px`** esa: "Men boshlanishda 200px bo‘laman, lekin **flex-grow** bo‘lsa o‘sam bo‘ladi, **flex-shrink** bo‘lsa kichraysam bo‘ladi" degan moslashuvchanlikni beradi.

| Asosiy O'q            | `flex-basis` nimani bildiradi?              |
| :-------------------- | :------------------------------------------ |
| **Row (Gorizontal)**  | Elementning minimal **kengligi (Width)**    |
| **Column (Vertikal)** | Elementning minimal **balandligi (Height)** |

```css
.item-basis {
  flex-basis: 250px; /* Boshlanish nuqtasi 250px */
  flex-grow: 1; /* Bo'sh joy bo'lsa o'sadi */
}
```

---

#### 5. ✍️ `flex` (Qisqa Yozuv / Shorthand - **Eng Muhimi**)

Yuqoridagi uchta xususiyatni (`grow`, `shrink`, `basis`) bitta qatorda yozish imkonini beradi. **CSS yozishda eng ko‘p ishlatiladigan flex xususiyatidir.**

**Sintaksis:** `flex: <flex-grow> <flex-shrink> <flex-basis>;`

| Qiymat (Shortcut) | To‘liq Ekvivalenti | Ishlatilish O‘rni (Tavsif)                              |
| :---------------- | :----------------- | :------------------------------------------------------ |
| **`flex: 1;`**    | `flex: 1 1 0%;`    | **Eng ommabop**. Barcha elementlar teng bo‘linib oladi. |
| **`flex: auto;`** | `flex: 1 1 auto;`  | Kontentga qarab o‘lcham oladi, lekin o‘sa oladi.        |
| **`flex: none;`** | `flex: 0 0 auto;`  | **Qotib qolgan**. O‘smaydi ham, siqilmaydi ham.         |
| **`flex: 2;`**    | `flex: 2 1 0%;`    | Boshqalardan 2 barobar tezroq o‘sadi.                   |

```css
/* Amaliy misol: Chap va O'ng menyu qattiq o'lchamda, O'rta esa moslashuvchan */
.sidebar {
  flex: 0 0 250px; /* Qotib qolgan 250px */
}
.content {
  flex: 1; /* Qolgan barcha joyni egallasin */
}
```

---

#### 6. 📌 `align-self` (Individual Tekislash)

Bu xususiyat **konteynerning `align-items` sozlamasini faqat bitta element uchun bekor qiladi**.

- **Vazifasi:** Bitta kartani yuqoriga, boshqasini markazga yoki pastga tortish kerak bo‘lganda ishlatiladi.
- **Qiymatlar:** `auto` | `flex-start` | `flex-end` | `center` | `baseline` | `stretch`

| Holat                               | CSS Kodi                                        | Natija              |
| :---------------------------------- | :---------------------------------------------- | :------------------ |
| **Umumiy balandlik markazda**       | `align-items: center;`                          | `[--🧩--] [--🧩--]` |
| **Lekin 1-element yuqorida tursin** | `.item:first-child { align-self: flex-start; }` | `[🧩----] [--🧩--]` |

```css
.container {
  display: flex;
  align-items: center; /* Hammani markazga tekisla */
  height: 200px;
}
.special-item {
  align-self: flex-end; /* Faqat shu element pastga yopishib tursin */
}
```

---
