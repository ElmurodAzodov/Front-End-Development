# **CSS grid layout**

### 🎯 Grid Container Properties (Konteyner Xususiyatlari)

Grid tizimini ishga tushirish uchun asosiy qadam konteynerga `display: grid` berishdir. Bu ichki elementlarni **Grid Item** ga aylantiradi.

---

#### 1. 🚀 `display: grid` va `display: inline-grid`

- **`display: grid;`** : Konteyner o'zi **Block** element kabi harakat qiladi (kengligi to'liq qatorni egallaydi).
- **`display: inline-grid;`** : Konteyner o'zi **Inline** element kabi harakat qiladi (kengligi ichidagi kontentga qarab o'zgaradi).

```css
.grid-block {
  display: grid;
  background: #f0f0f0;
}

.grid-inline {
  display: inline-grid;
  background: #e0f7fa;
}
```

_Natija:_ `inline-grid` berilgan konteynerlar yonma-yon tura oladi.

---

#### 2. 📐 `grid-template-columns` (Ustunlar Shabloni)

Grid tizimining **yuragi**. Bu xususiyat konteyner nechta ustundan iborat bo'lishini va har bir ustunning kengligi qancha bo'lishini belgilaydi.

| Sintaksis Misoli                                | Tushuntirish                                  | Vizual Natija (Ikon) |
| :---------------------------------------------- | :-------------------------------------------- | :------------------: |
| **`grid-template-columns: 100px 200px 100px;`** | 3 ta ustun, qat'iy pikselli.                  | `[100] [200] [100]`  |
| **`grid-template-columns: 1fr 2fr 1fr;`**       | 3 ta ustun, bo'sh joy proporsional bo'linadi. |    `[¼] [½] [¼]`     |
| **`grid-template-columns: repeat(4, 1fr);`**    | 4 ta teng ustun.                              |  `[🧩][🧩][🧩][🧩]`  |
| **`grid-template-columns: 200px auto 200px;`**  | Yonlari qattiq, o'rtasi moslashuvchan.        |    `[🔒][↔️][🔒]`    |

```css
.grid-3-col {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr; /* O'rta ustun yonlaridan 3 barobar keng */
  gap: 20px;
}
```

---

#### 3. 📏 `grid-template-rows` (Qatorlar Shabloni)

Ustunlar kabi, bu xususiyat ham qatorlarning balandligini belgilaydi.

- **Muhim farq:** Agar siz `grid-template-rows` ni aniq belgilamasangiz, Grid **avtomatik ravishda** har bir yangi qatorni ichidagi kontent balandligiga qarab yaratadi. Bu **implicit grid** (yashirin to'r) deyiladi.
- **`grid-auto-rows`** : Aniq belgilanmagan qatorlarning balandligini boshqarish uchun ishlatiladi.

| Misol                                       | Tushuntirish                                                                                 |
| :------------------------------------------ | :------------------------------------------------------------------------------------------- |
| **`grid-template-rows: 100px 200px;`**      | Birinchi qator 100px, ikkinchi qator 200px. Qolgan qatorlar kontentga qarab balandlik oladi. |
| **`grid-template-rows: repeat(3, 150px);`** | Dastlabki 3 ta qator aniq 150px dan bo'ladi.                                                 |
| **`grid-auto-rows: 80px;`**                 | Qo'lda balandligi berilmagan **barcha qatorlar** 80px bo'ladi.                               |

```css
.grid-rows-example {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 80px 200px; /* Faqat 1 va 2-qator belgilangan */
  grid-auto-rows: 120px; /* 3, 4, 5... qatorlar uchun balandlik */
}
```

---

#### 4. 🗺️ `grid-template-areas` (Nomlangan Hududlar)

Bu Grid'ning **eng vizual va eng kuchli** xususiyatlaridan biridir. Siz CSS faylning o'zida ASCII san'at yaratgandek, sahifa maketini chizib berasiz.

**Ishlash tartibi:**

1. Har bir elementga `grid-area: nom;` beriladi.
2. Konteynerga `grid-template-areas` orqali kataklarning joylashuvi yoziladi.

| Sintaksis (ASCII Chizma) | Natija                                    |
| :----------------------- | :---------------------------------------- |
| `"header header header"` | Header 3 ta ustunni birlashtiradi         |
| `"sidebar main main"`    | Sidebar 1 ta, Main 2 ta ustunni egallaydi |
| `"footer footer footer"` | Footer pastda to'liq kenglikda            |

```css
.grid-page {
  display: grid;
  grid-template-columns: 250px 1fr 1fr;
  grid-template-areas:
    "header header header" /* 1-qator */
    "sidebar main main" /* 2-qator */
    "sidebar extra extra" /* 3-qator */
    "footer footer footer"; /* 4-qator */
  gap: 15px;
}

.header {
  grid-area: header;
  background: #333;
  color: white;
}
.sidebar {
  grid-area: sidebar;
  background: #f0f0f0;
}
.main {
  grid-area: main;
  background: #fff;
}
.extra {
  grid-area: extra;
  background: #e0e0e0;
}
.footer {
  grid-area: footer;
  background: #555;
  color: white;
}
```

**Muhim Eslatma:** Nuqta (`.`) belgisi **bo'sh katak** yaratish uchun ishlatiladi. Masalan: `"header . header"` o'rtadagi katakni bo'sh qoldiradi.

---

#### 5. 🕳️ `gap`, `row-gap`, `column-gap` (Oraliq Masofalar)

Flexbox'dagi kabi ishlaydi, lekin Grid kontekstida. Bu xususiyat kataklar **orasidagi** masofani boshqaradi. Tashqi chegaralarga ta'sir qilmaydi.

- **`gap: 20px;`** : Ham qatorlar, ham ustunlar orasi 20px.
- **`row-gap: 30px;`** : Faqat qatorlar orasi (vertikal) 30px.
- **`column-gap: 10px;`** : Faqat ustunlar orasi (gorizontal) 10px.

**Eski sintaksisga izoh:**
Ilgari bu xususiyatlar `grid-gap`, `grid-row-gap`, `grid-column-gap` deb yozilar edi. Hozirda `grid-` prefiksini tashlab yozish **standart** hisoblanadi (`gap`, `row-gap`, `column-gap`). Ikkala yozuv ham ishlaydi, lekin prefikssiz yozuv zamonaviy va Flexbox bilan ham bir xil ishlatiladi.

```css
.grid-gap-example {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 40px; /* row-gap: 20px; column-gap: 40px; */
}
```

_Natija:_ Kataklar orasi aniq ochiq, lekin konteynerning chetida bo'shliq bo'lmaydi (margin emasligi uchun).

---

<br>
<br>
<br>
<br>
<br>

### 📏 Grid Units and Functions (O'lchov Birliklari va Funksiyalar)

Grid konteyner yaratishda (`grid-template-columns`, `grid-template-rows`) oddiy `px` yoki `%` dan tashqari maxsus birliklar va funksiyalar mavjud.

---

#### 1. 🔹 `fr` (Fraction Unit — Ulush Birligi)

**Vazifasi:** Konteyner ichidagi **bo'sh joyni** proporsional ravishda bo'lib beradi. Bu Grid'ning eng muhim ixtirosidir.

- **Flexbox'dagi `flex-grow` ga o'xshaydi**, lekin ancha bashorat qilinadigan va hisoblash oson.
- **Mantiq:** Avval qat'iy o'lchamlar (`px`, `%`, `auto`) hisobdan chiqariladi. Qolgan **sof bo'sh joy** `fr` lar yig'indisiga bo'linadi.

| Misol               | Tushuntirish                                                                      | Vizual Proporsiya |
| :------------------ | :-------------------------------------------------------------------------------- | :---------------: |
| **`1fr 1fr 1fr`**   | Bo'sh joy teng 3 ga bo'linadi.                                                    |    `[⅓][⅓][⅓]`    |
| **`2fr 1fr 1fr`**   | Bo'sh joy 4 ga bo'linadi. Birinchi ustun 2/4, qolganlari 1/4 dan oladi.           |    `[½][¼][¼]`    |
| **`200px 1fr 2fr`** | 200px qat'iy olinadi. Qolgan joy 3 ga bo'linib, 1/3 o'rtaga, 2/3 o'ngga beriladi. | `[200px][≈][≈≈]`  |

```css
.fr-example {
  display: grid;
  grid-template-columns: 100px 1fr 2fr;
  /* 100px olindi, qolgan bo'sh joy (100% - 100px) 3 bo'lakka ajratiladi */
  /* 2-ustun 1 bo'lak, 3-ustun 2 bo'lak oladi */
}
```

**Muhim Eslatma:** `fr` **hech qachon** ichidagi kontentdan kichik bo'lmaydi. Agar kontent katta bo'lsa, ustun minimal kontent kengligigacha kengayadi (agar `min-width: 0` berilmasa).

---

#### 2. 🔸 `minmax()` (Minimal va Maksimal Chegara)

**Vazifasi:** Ustun yoki qatorga **eng kichik** va **eng katta** o'lcham chegarasini qo'yish. Responsive dizayn uchun juda muhim.

**Sintaksis:** `minmax(<min>, <max>)`

| Misol                            | Tushuntirish                                                                                       | Amaliy Foydasi                                                              |
| :------------------------------- | :------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------- |
| **`minmax(200px, 1fr)`**         | Ustun hech qachon 200px dan kichik bo'lmaydi, lekin joy bo'lsa o'sib, qolgan bo'shliqni egallaydi. | Yon panel torayganda 200px dan kichrayib o'qilmay qolishining oldini oladi. |
| **`minmax(auto, 300px)`**        | Ustun kontentiga qarab o'lcham oladi, lekin 300px dan oshib ketmaydi.                              | Rasm galereyasida rasm juda katta bo'lib ketishini cheklaydi.               |
| **`minmax(100px, max-content)`** | Minimal 100px, maksimal esa ichidagi eng katta kontent kengligida bo'ladi.                         | Tugma yorlig'i sig'ishi uchun kerakli joyni beradi.                         |

```css
.minmax-example {
  display: grid;
  grid-template-columns: minmax(150px, 25%) 1fr;
  /* Chap ustun: Ekran toraysa 150px dan kichik bo'lmaydi. */
  /* Ekran kengaysa 25% dan oshib ketmaydi. */
}
```

---

#### 3. 🔹 `repeat()` (Takrorlash Funksiyasi)

**Vazifasi:** Bir xil o'lchamli ustunlar yoki qatorlarni qisqa va toza yozish.

**Sintaksis:** `repeat(<soni>, <o'lcham>)` yoki `repeat(<auto-...>, <o'lcham>)`

| To'liq Yozuv                                  | `repeat()` bilan Qisqa Yozuv                                            |
| :-------------------------------------------- | :---------------------------------------------------------------------- |
| `grid-template-columns: 1fr 1fr 1fr 1fr;`     | `grid-template-columns: repeat(4, 1fr);`                                |
| `grid-template-columns: 200px 1fr 200px 1fr;` | `grid-template-columns: repeat(2, 200px 1fr);` _(Pattern takrorlanadi)_ |

```css
.repeat-example {
  display: grid;
  /* 12 ta ustunli tizim yaratish uchun ideal */
  grid-template-columns: repeat(12, 1fr);

  /* Qatorlar uchun: birinchi 2 qator 100px, keyingi 3 qator avtomatik */
  grid-template-rows: repeat(2, 100px) repeat(3, auto);
}
```

---

#### 4. 🔸 `auto-fill` va `auto-fit` (Moslashuvchan Takrorlash)

Bu ikkisi `repeat()` funksiyasi ichida ishlatiladi va **Media Query yozmasdan** responsive grid yaratish imkonini beradi. Bu zamonaviy CSS'ning eng kuchli jihatlaridan biridir.

**Farqi juda muhim:**

| Xususiyat       | Harakati                                                                                                                                                     | Qachon Ishlatiladi?                                                                                      |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------- |
| **`auto-fill`** | Mavjud joyga **iloji boricha ko'proq** ustun (yoki qator) sig'diradi. **Bo'sh ustunlar** ham yaratadi.                                                       | Kataklar soni aniq bo'lmaganda, bo'sh joy bo'lsa ham kataklar uchun "o'rin" band qilish kerak bo'lganda. |
| **`auto-fit`**  | Mavjud joyga ustunlarni sig'diradi, lekin **bo'sh ustunlarni yashiradi (0 ga tenglashtiradi)**. Mavjud elementlar qolgan bo'shliqni `fr` bilan bo'lib oladi. | Elementlar soni kam, lekin ular ekran bo'ylab cho'zilib, chiroyli ko'rinishi kerak bo'lganda.            |

**Amaliy Misol (Eng Ommabop Responsive Grid Kodi):**

```css
/* AUTO-FILL: Kataklar kengligi 250px bo'lib, qatorga sig'gancha katak qo'shadi. 
   Agar 1200px ekranda 4 ta element bo'lsa, 5-ustun uchun "bo'sh joy" ajratadi */
.grid-auto-fill {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* Tushuntirish: Har bir ustun kamida 250px, ko'pi bilan 1fr. 
       Ekran torayganda ustunlar soni avtomatik kamayadi. */
}

/* AUTO-FIT: Xuddi shunday, lekin mavjud elementlar (masalan, 3 ta) 
   butun ekran bo'ylab cho'zilib ketadi. */
.grid-auto-fit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

**Vizual Farq (3 ta element, 1200px ekran):**

- **`auto-fill`**: `[🧩250px] [🧩250px] [🧩250px] [⬜bo'sh joy⬜]`
- **`auto-fit`**: `[🧩400px] [🧩400px] [🧩400px]` (Elementlar bo'shliqni teng bo'lib, kattalashgan)

---

#### 5. 🔹 `fit-content()` (Kontentga Moslash)

**Vazifasi:** Element o'lchamini **ichidagi kontentga** moslashtiradi, lekin berilgan maksimal qiymatdan oshib ketmaydi.

**Sintaksis:** `fit-content(<maksimal_qiymat>)`

**Formula:** `min(maksimal_qiymat, max(minimal_qiymat, kontent_kengligi))`

- Ya'ni: Kontent qancha joy xohlasa, shuncha joy ber, lekin `<maksimal_qiymat>` dan katta bo'lib ketmasin.

| Misol                    | Natija                                                                                                                                         |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| **`fit-content(300px)`** | Agar kontent "Salom" bo'lsa, ustun 50px bo'ladi. Agar kontent "Bu juda uzun gap bolib ketdi" bo'lsa, 300px da to'xtab, pastga qator tashlaydi. |

```css
.fit-content-example {
  display: grid;
  grid-template-columns: fit-content(200px) 1fr;
  /* Chap ustun: Sarlavha "Qisqa" bo'lsa tor, "Uzun sarlavha namunasi" bo'lsa 200px gacha kengayadi. */
}
```

---

<br>
<br>
<br>
<br>
<br>

### 📦 Grid Item Placement (Elementlarni Joylashtirish)

Bu xususiyatlar **konteyner ichidagi bolalarga** (`.item` larga) qo‘llaniladi. Ular elementning Grid ichidagi aniq o‘rnini belgilaydi.

**Muhim Tushuncha: Grid Chiziqlari (Grid Lines)**

- Agar sizda 3 ta ustun bo‘lsa, **4 ta vertikal chiziq** mavjud bo‘ladi.
- Chapdan o‘ngga: 1-chiziq, 2-chiziq, 3-chiziq, 4-chiziq.
- Element shu chiziqlar orasiga joylashtiriladi.

```
Vertikal Chiziqlar:   |  1  |  2  |  3  |  4  |
                      |     |     |     |     |
Kataklar:             [ 1-ustun ][ 2-ustun ][ 3-ustun ]
```

---

#### 1. 🔢 `grid-column-start` va `grid-column-end`

Elementning **gorizontal** o‘qda qaysi vertikal chiziqdan boshlanib, qaysi vertikal chiziqda tugashini belgilaydi.

| Xususiyat               | Vazifasi                                               | Qiymat Misoli      |
| :---------------------- | :----------------------------------------------------- | :----------------- |
| **`grid-column-start`** | Element chap tomondan nechanchi chiziqdan boshlanishi. | `1`, `2`, `span 2` |
| **`grid-column-end`**   | Element chap tomondan nechanchi chiziqda tugashi.      | `3`, `4`, `-1`     |

**Misol:**

```css
.item-wide {
  /* 1-chiziqdan boshlanib, 4-chiziqda tugaydi (3 ta katakni egallaydi) */
  grid-column-start: 1;
  grid-column-end: 4;
}

.item-specific {
  /* 2-chiziqdan boshlanib, 3-chiziqda tugaydi (faqat 2-ustunni egallaydi) */
  grid-column-start: 2;
  grid-column-end: 3;
}
```

| Kod                  |  Vizual Natija (3 ustunli grid)  |
| :------------------- | :------------------------------: |
| `start: 1; end: 3;`  |          `[🧩🧩] [⬜]`           |
| `start: 2; end: 4;`  |          `[⬜] [🧩🧩]`           |
| `start: 1; end: -1;` | `[🧩🧩🧩]` (Boshidan oxirigacha) |

---

#### 2. 🔢 `grid-row-start` va `grid-row-end`

Yuqoridagi mantiqning **vertikal** versiyasi. Element qaysi gorizontal chiziqdan boshlanib, qaysi gorizontal chiziqda tugashini belgilaydi.

**Misol:**

```css
.item-tall {
  /* 1-qator chizig'idan boshlanib, 3-qator chizig'ida tugaydi (2 qatorni egallaydi) */
  grid-row-start: 1;
  grid-row-end: 3;
}
```

_Natija:_ Element baland bo‘lib, ikkita katakni vertikal birlashtiradi.

---

#### 3. 🔹 `span` Kalit So‘zi (Qamrab Olish)

Aniq chiziq raqamini bilmasangiz, `span` ishlatishingiz mumkin. Bu **"shuncha katakni egalla"** degani.

| To‘liq Yozuv                                | `span` bilan Yozuv                               | Ma'nosi                                      |
| :------------------------------------------ | :----------------------------------------------- | :------------------------------------------- |
| `grid-column-start: 2; grid-column-end: 4;` | `grid-column-start: 2; grid-column-end: span 2;` | 2-chiziqdan boshlab, 2 ta katak egalla.      |
| `grid-column-end: 4;` (start berilmagan)    | `grid-column-end: span 2;`                       | Avtomatik joylashuvdan keyin 2 katak egalla. |

```css
.item-span {
  /* 2-ustundan boshlanib, 2 ta ustunni egallasin */
  grid-column: 2 / span 2;
}
```

---

#### 4. ✍️ `grid-column` va `grid-row` (Qisqa Yozuv / Shorthand)

Boshlanish va tugash chiziqlarini **slash (`/`)** belgisi bilan ajratib, bir qatorda yozish imkonini beradi.

**Sintaksis:** `<start> / <end>`

| Alohida Yozuv                                           | Qisqa Yozuv (`grid-column`) |
| :------------------------------------------------------ | :-------------------------- |
| `grid-column-start: 1;` <br> `grid-column-end: 3;`      | `grid-column: 1 / 3;`       |
| `grid-column-start: 2;` <br> `grid-column-end: span 2;` | `grid-column: 2 / span 2;`  |
| `grid-row-start: 1;` <br> `grid-row-end: -1;`           | `grid-row: 1 / -1;`         |

```css
.item-shorthand {
  /* 1-ustundan boshlab, 3 ta ustunni egallaydi */
  grid-column: 1 / span 3;

  /* 2-qatordan boshlab, oxirgi qatorgacha cho'ziladi */
  grid-row: 2 / -1;
}
```

_Vizual:_ Element Grid'ning o‘ng pastki qismidagi katta blokni egallaydi.

---

#### 5. 🗺️ `grid-area` (Hudud Bo‘yicha Joylashuv)

Bu xususiyat **ikki xil vazifada** ishlatiladi:

**Vazifa A: To‘rtta qiymat bilan aniq joylashuv (Qisqa Yozuv)**
`grid-row-start`, `grid-column-start`, `grid-row-end`, `grid-column-end` larni **bitta qatorda** yozish uchun.

**Sintaksis:** `grid-area: <row-start> / <col-start> / <row-end> / <col-end>;`

| Alohida Yozuv                                                                                        | `grid-area` bilan Yozuv     |
| :--------------------------------------------------------------------------------------------------- | :-------------------------- |
| `grid-row-start: 1;` <br> `grid-column-start: 2;` <br> `grid-row-end: 3;` <br> `grid-column-end: 4;` | `grid-area: 1 / 2 / 3 / 4;` |

```css
.item-precise {
  /* 1-qator, 2-ustundan boshlanib, 3-qator, 4-ustunda tugaydi */
  grid-area: 1 / 2 / 3 / 4;
}
```

**Eslab qolish tartibi:** `row-start` → `col-start` → `row-end` → `col-end`
_Mnemonika:_ **R**ustam **C**hoy **R**osa **C**huchmal (Row/Col/Row/Col)

**Vazifa B: `grid-template-areas` bilan nomlash**
Oldingi bo‘limda ko‘rganimizdek, elementga nom berish uchun.

```css
.header {
  /* Bu elementni "header" deb nomlaymiz */
  grid-area: header;
}
```

---

### 📊 Vizual Xulosa (Element Placement)

| Siz nima demoqchisiz?                                   | CSS Kodi                    | Ma'nosi                                     |
| :------------------------------------------------------ | :-------------------------- | :------------------------------------------ |
| **"Meni 2-ustunga qo‘y"**                               | `grid-column: 2 / 3;`       | 2-chiziqdan 3-chiziqgacha (1 katak).        |
| **"Meni 2 ta ustun qilib cho‘z"**                       | `grid-column: span 2;`      | Avtomatik joylash, lekin 2 katak kenglikda. |
| **"Meni chapdan boshla, o‘nggacha cho‘z"**              | `grid-column: 1 / -1;`      | To‘liq kenglik.                             |
| **"Meni 2-qator va 3-ustunning kesishgan joyiga qo‘y"** | `grid-area: 2 / 3 / 3 / 4;` | Aniq katak manzili.                         |

---

### 🧩 Amaliy Misol: Bitta elementni butunlay boshqa joyga surish

Grid'ning eng kuchli tomoni shundaki, siz HTML'da 5-element bo‘lgan narsani CSS orqali 1-o‘ringa, katta qilib qo‘yishingiz mumkin.

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.featured-item {
  /* Bu element birinchi qatorda, ikkita ustunni egallasin */
  grid-column: 1 / span 2;
  grid-row: 1;

  /* HTML'da bu element qayerda turishidan qat'i nazar, 
       u Grid'ning eng yuqori chap qismida turadi. */
}
```

---

<br>
<br>
<br>
<br>
<br>

### 🎯 Alignment in Grid (Grid'da Tekislash)

Grid'da tekislash xususiyatlari ikki o'q bo'ylab ishlaydi:

- **Inline (Gorizontal) o'q:** `justify-*` xususiyatlari
- **Block (Vertikal) o'q:** `align-*` xususiyatlari
- **Ikkala o'q bir vaqtda:** `place-*` xususiyatlari

---

## I. Konteyner Ichidagi Elementlarni Tekislash (Item Alignment)

Bu xususiyatlar **Grid konteyneriga** qo'llaniladi va **barcha ichki elementlarning** o'z katagi ichida qanday joylashishini belgilaydi.

---

#### 1. 🔹 `justify-items` (Gorizontal Tekislash)

Elementlarni **o'z katagining ichida** gorizontal (chap-o'ng) bo'ylab tekislaydi.

| Qiymat                  | Vazifasi                            | Vizual Natija (Katak Ichida) |
| :---------------------- | :---------------------------------- | :--------------------------: |
| **`stretch`** (Default) | Elementni katak kengligiga cho'zish |        `[====🧩====]`        |
| **`start`**             | Katakning chap tomoniga yopishish   |        `[🧩________]`        |
| **`end`**               | Katakning o'ng tomoniga yopishish   |        `[________🧩]`        |
| **`center`**            | Gorizontal markazga joylashish      |        `[___🧩____]`         |

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; /* Barcha elementlar o'z katagida markazda turadi */
}
```

---

#### 2. 🔹 `align-items` (Vertikal Tekislash)

Elementlarni **o'z katagining ichida** vertikal (yuqori-past) bo'ylab tekislaydi.

| Qiymat                  | Vazifasi                              | Vizual Natija (Katak Ichida) |
| :---------------------- | :------------------------------------ | :--------------------------: |
| **`stretch`** (Default) | Elementni katak balandligiga cho'zish |           `[‖🧩‖]`           |
| **`start`**             | Katakning yuqori qismiga yopishish    |       `[🧩]` **\_\_**        |
| **`end`**               | Katakning pastki qismiga yopishish    |       **\_\_** `[🧩]`        |
| **`center`**            | Vertikal markazga joylashish          |           `[_🧩_]`           |

```css
.grid-container {
  display: grid;
  grid-template-rows: 150px 150px;
  align-items: end; /* Barcha elementlar katak pastida turadi */
}
```

---

#### 3. 🔹 `place-items` (Qisqa Yozuv — Ikkala O'q)

`align-items` va `justify-items` ni bir qatorda yozish uchun.

**Sintaksis:** `place-items: <align-items> <justify-items>;`

| To'liq Yozuv                                           | `place-items` bilan Qisqa Yozuv                   |
| :----------------------------------------------------- | :------------------------------------------------ |
| `align-items: center;` <br> `justify-items: start;`    | `place-items: center start;`                      |
| `align-items: stretch;` <br> `justify-items: stretch;` | `place-items: stretch;` (Bir qiymat ikkalaga ham) |

```css
.grid-container {
  display: grid;
  place-items: center; /* Ham gorizontal, ham vertikal markazlash */
  /* Bu Perfect Centering uchun Grid versiyasi! */
}
```

_Natija:_ Har bir katak ichidagi element mukammal markazda turadi.

---

## II. Konteynerning O'zini Ichidagi To'rga Nisbatan Tekislash (Content Alignment)

Bu xususiyatlar faqat **Grid konteynerining o'lchami**, ichidagi **barcha kataklar umumiy o'lchamidan katta bo'lganda** ishlaydi. Ya'ni konteynerda **ortiqcha bo'sh joy** mavjud bo'lsa.

---

#### 4. 🔸 `justify-content` (To'rni Gorizontal Tekislash)

Butun Grid to'rini konteyner ichida gorizontal (chap-o'ng) bo'ylab tekislaydi.

| Qiymat                | Vazifasi                                                       | Vizual Natija (Konteyner Ichida) |
| :-------------------- | :------------------------------------------------------------- | :------------------------------: |
| **`start`** (Default) | To'rni chapga yopishish                                        |        `[🧩🧩🧩]________`        |
| **`end`**             | To'rni o'ngga yopishish                                        |        `________[🧩🧩🧩]`        |
| **`center`**          | To'rni markazga joylash                                        |         `___[🧩🧩🧩]___`         |
| **`stretch`**         | Ustunlarni cho'zish (faqat ustunlar qat'iy o'lchamda bo'lmasa) |          `[🧩__🧩__🧩]`          |
| **`space-between`**   | Ustunlar orasidagi bo'shliq teng, chetlarda bo'shliq yo'q      |       `[🧩]___[🧩]___[🧩]`       |
| **`space-around`**    | Har bir ustunning ikki tomoniga teng yarim bo'shliq            |       `_[🧩]__[🧩]__[🧩]_`       |
| **`space-evenly`**    | Barcha bo'shliqlar (chetlar va oraliqlar) bir xil              |      `__[🧩]__[🧩]__[🧩]__`      |

```css
.grid-content-example {
  display: grid;
  grid-template-columns: 200px 200px 200px; /* Jami 600px */
  width: 1000px; /* Konteyner kengroq (400px bo'sh joy) */
  justify-content: space-between; /* Ustunlar orasidagi bo'shliq teng taqsimlanadi */
}
```

---

#### 5. 🔸 `align-content` (To'rni Vertikal Tekislash)

Butun Grid to'rini konteyner ichida vertikal (yuqori-past) bo'ylab tekislaydi.

| Qiymat              | Vazifasi                                         |
| :------------------ | :----------------------------------------------- |
| **`start`**         | To'rni yuqoriga yopishish                        |
| **`end`**           | To'rni pastga yopishish                          |
| **`center`**        | To'rni vertikal markazga joylash                 |
| **`stretch`**       | Qatorlarni cho'zish                              |
| **`space-between`** | Qatorlar orasidagi bo'shliq teng, chetlarda yo'q |
| **`space-around`**  | Qatorlar atrofiga teng yarim bo'shliq            |
| **`space-evenly`**  | Barcha bo'shliqlar teng                          |

```css
.grid-fullscreen {
  display: grid;
  grid-template-rows: 100px 100px 100px; /* Jami 300px */
  height: 600px; /* Konteyner balandroq (300px bo'sh joy) */
  align-content: center; /* To'r vertikal markazda turadi */
}
```

---

#### 6. 🔸 `place-content` (Qisqa Yozuv — Ikkala O'q)

`align-content` va `justify-content` ni bir qatorda yozish.

**Sintaksis:** `place-content: <align-content> <justify-content>;`

```css
.grid-centered-grid {
  display: grid;
  width: 1000px;
  height: 600px;
  place-content: center; /* To'r ham gorizontal, ham vertikal markazda */
}
```

---

## III. Individual Elementni Tekislash (Self Alignment)

Bu xususiyatlar **Grid elementiga** (`.item` ga) qo'llaniladi va faqat **o'sha bitta elementning** katak ichidagi joylashuvini boshqaradi. Konteynerning `justify-items` yoki `align-items` sozlamalarini **bekor qiladi**.

---

#### 7. 🔹 `justify-self` (Individual Gorizontal Tekislash)

Bitta elementni o'z katagi ichida gorizontal tekislaydi.

```css
.item-special-h {
  justify-self: end; /* Bu element o'ngga yopishsin, qolganlar markazda qolaversin */
}
```

---

#### 8. 🔹 `align-self` (Individual Vertikal Tekislash)

Bitta elementni o'z katagi ichida vertikal tekislaydi.

```css
.item-special-v {
  align-self: start; /* Bu element yuqoriga yopishsin, qolganlar pastda qolaversin */
}
```

---

#### 9. 🔹 `place-self` (Individual Qisqa Yozuv)

`align-self` va `justify-self` ni bir qatorda yozish.

**Sintaksis:** `place-self: <align-self> <justify-self>;`

```css
.item-special-both {
  place-self: center end; /* Vertikal markazda, Gorizontal o'ngda */
}
```

---

### 📊 To'liq Xulosa Jadvali (Grid Alignment)

| Daraja                     | Gorizontal (`justify-`) | Vertikal (`align-`) | Ikkalasi (`place-`) | Qachon Ishlaydi?                   |
| :------------------------- | :---------------------- | :------------------ | :------------------ | :--------------------------------- |
| **Konteyner → Elementlar** | `justify-items`         | `align-items`       | `place-items`       | Element katagidan kichik bo'lganda |
| **Konteyner → To'r**       | `justify-content`       | `align-content`     | `place-content`     | To'r konteynerdan kichik bo'lganda |
| **Element → O'zi**         | `justify-self`          | `align-self`        | `place-self`        | Bitta element alohida holatda      |

---

### 🎯 Amaliy Hiyla: Grid bilan Mukammal Markazlash

```css
.perfect-center-grid {
  display: grid;
  place-items: center; /* Har bir element o'z katagida markazda */
  place-content: center; /* Agar kerak bo'lsa, butun to'r ham markazda */
  min-height: 100vh;
}

/* Yoki bitta element uchun: */
.single-centered-item {
  display: grid;
  place-items: center;
  height: 400px;
}
```

---
