# **Box model**

# 📦 CSS Box Model

---

## 📦 Box Model Components

Har bir HTML element brauzarda to'rtburchak "quti" sifatida ko'rsatiladi. Bu quti 4 qatlamdan iborat:

```
+---------------------------+
|         MARGIN            |  ← Tashqi bo'shliq
|  +---------------------+  |
|  |      BORDER         |  |  ← Chegara/ramka
|  |  +---------------+  |  |
|  |  |    PADDING    |  |  |  ← Ichki bo'shliq
|  |  |  +---------+  |  |  |
|  |  |  | CONTENT |  |  |  |  ← Asosiy kontent
|  |  |  +---------+  |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+
```

| Qatlam      | Vazifasi                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------- |
| **Content** | Matn, rasm yoki boshqa kontent joylashadigan joy. `width` va `height` shu qatlamga tegishli |
| **Padding** | Content va Border orasidagi ichki bo'shliq. Element fon rangi bu yerda ham ko'rinadi        |
| **Border**  | Padding va Margin orasidagi chiziq/ramka                                                    |
| **Margin**  | Elementning boshqa elementlardan uzoqligi, tashqi bo'shliq. Shaffof bo'ladi                 |

---

## 📐 Padding Properties

### Individual sides — har bir tomoni alohida

```css
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

### Shorthand — qisqacha yozuv

**4 qiymat:** `padding: top right bottom left` (soat yo'nalishi)

```css
.box {
  padding: 10px 20px 10px 20px;
}
/*              top  right bottom left  */
```

**3 qiymat:** `padding: top  (right+left)  bottom`

```css
.box {
  padding: 10px 20px 5px;
}
/*              top  right&left  bottom */
```

**2 qiymat:** `padding: (top+bottom)  (right+left)`

```css
.box {
  padding: 10px 20px;
}
/*              top&bottom  right&left */
```

**1 qiymat:** to'rt tomon ham teng

```css
.box {
  padding: 10px;
} /* hamma tomon 10px */
```

---

## 🖼️ Border Properties

### `border-width`, `border-style`, `border-color`

Bu uchta xususiyat borderning asosini tashkil qiladi:

```css
.box {
  border-width: 2px;
  border-style: solid;
  border-color: #333;
}

/* Yoki shorthand bilan bir qatorda: */
.box {
  border: 2px solid #333;
  /*      width style color */
}
```

**`border-style` qiymatlari:**

```css
border-style: solid; /* To'liq chiziq ——————— */
border-style: dashed; /* Uzuq-uzuq - - - - - - */
border-style: dotted; /* Nuqtali  ............. */
border-style: double; /* Ikki chiziq ══════════ */
border-style: none; /* Yo'q */
border-style: hidden; /* Yashiringan */
```

### Individual borders — har bir tomon alohida

```css
.box {
  border-top: 2px solid red;
  border-right: 1px dashed blue;
  border-bottom: 3px dotted green;
  border-left: none;
}
```

Yoki yanada aniqroq:

```css
.box {
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: red;
}
```

### `border-radius` — burchaklarni yumaloqlash

```css
/* To'rt burchak teng */
.box {
  border-radius: 10px;
}

/* Har bir burchak alohida: top-left  top-right  bottom-right  bottom-left */
.box {
  border-radius: 5px 10px 15px 20px;
}

/* To'liq doira qilish */
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* Elliptical (oval) — gorizontal / vertikal radius */
.oval {
  border-radius: 50% / 25%;
  /*             x-radius  y-radius */
}

/* Faqat yuqori burchaklarni yumaloqlash */
.card {
  border-radius: 12px 12px 0 0;
}
```

### `border-image` — border sifatida rasm ishlatish

```css
.box {
  border: 10px solid transparent; /* border bo'lishi shart */
  border-image-source: url("border.png");
  border-image-slice: 30; /* rasmni qanday kesish */
  border-image-repeat: round; /* stretch | repeat | round */
}

/* Shorthand */
.box {
  border-image: url("border.png") 30 round;
}

/* Gradient bilan */
.box {
  border: 4px solid transparent;
  border-image: linear-gradient(to right, red, blue) 1;
}
```

### `outline` va `outline-offset`

`outline` vizual jihatdan `border`ga o'xshaydi, lekin bir qancha farqlari bor:

```css
.box {
  outline: 2px solid blue;
  outline-offset: 5px; /* outline va element orasidagi masofa */
}
```

**Border va Outline farqi:**

|                     | `border`         | `outline`          |
| ------------------- | ---------------- | ------------------ |
| Layout ta'siri      | ✅ Joy egallaydi | ❌ Joy egallaMaydi |
| Box model qismi     | ✅ Ha            | ❌ Yo'q            |
| Individual tomonlar | ✅ Mumkin        | ❌ Mumkin emas     |
| Asosiy ishlatilishi | Dizayn uchun     | Focus holati uchun |

```css
/* Brauzerdagi default focus outline o'rniga custom qilish */
button:focus {
  outline: 3px solid orange;
  outline-offset: 2px;
}

/* HECH QACHON shunchaki o'chirib qo'ymang — accessibility buziladi */
button:focus {
  outline: none; /* ❌ Yomon amaliyot */
}
```

---

## 📏 Margin Properties

### Individual sides

```css
.box {
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
}
```

### Margin shorthand

Padding bilan bir xil qoida ishlaydi:

```css
.box {
  margin: 20px;
} /* hamma tomon */
.box {
  margin: 20px 10px;
} /* top&bottom | right&left */
.box {
  margin: 20px 10px 15px;
} /* top | right&left | bottom */
.box {
  margin: 20px 10px 15px 5px;
} /* top right bottom left */
```

**Elementni markazga olish:**

```css
.container {
  width: 800px;
  margin: 0 auto; /* top-bottom: 0, right-left: auto — gorizontal markaz */
}
```

### Margin Collapsing

Bu CSS-ning eng ko'p chalkashtiradigan xususiyatlaridan biri. **Qachon sodir bo'ladi:** vertikal marginlar (top/bottom) ba'zi holatlarda qo'shilmasdan, **ikkitasidan kattasi** ishlatiladi.

**Holat 1 — Qo'shni elementlar (siblings):**

```css
.block1 {
  margin-bottom: 30px;
}
.block2 {
  margin-top: 20px;
}

/*
  Kutilgan: 30px + 20px = 50px bo'shliq
  Haqiqat:  max(30px, 20px) = 30px bo'shliq ← collapse!
*/
```

**Holat 2 — Ota va birinchi/oxirgi farzand:**

```css
.parent {
  margin-top: 20px;
}
.child {
  margin-top: 40px;
}

/*
  Kutilgan: parent ichida child 40px pastga tushadi
  Haqiqat:  ikkisi birlashib, parent 40px margin oladi ← collapse!
*/
```

**Collapsing-ni oldini olish — ota elementga quyidagilardan biri qo'shiladi:**

```css
.parent {
  padding-top: 1px; /* ✅ padding qo'shish */
  /* YOKI */
  border-top: 1px solid transparent; /* ✅ border qo'shish */
  /* YOKI */
  overflow: hidden; /* ✅ */
  /* YOKI */
  display: flex; /* ✅ flex/grid collapsing bo'lmaydi */
}
```

**Collapsing faqat vertikal (top/bottom) bo'ladi, gorizontal (left/right) margin hech qachon collapse bo'lmaydi.**

---

<br>
<br>
<br>
<br>
<br>

## 📐 Box Sizing

`box-sizing` xususiyati brauzerga elementning `width` va `height`ni **qanday hisoblashini** aytadi.

---

### `content-box` — default

`width` va `height` faqat **content**ga tegishli. Padding va border **ustiga qo'shiladi.**

```css
.box {
  box-sizing: content-box; /* default, yozmasang ham shunday ishlaydi */
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}

/*
  Haqiqiy kenglik = 200 + 20 + 20 + 5 + 5 = 250px
                    width  p-l  p-r  b-l  b-r
*/
```

```
|←————————————— 250px —————————————→|
| border | padding | content | padding | border |
|  5px   |  20px   |  200px  |  20px   |  5px   |
```

Muammo: `width: 200px` desang, element ekranda 250px joy egallaydi. Bu kutilmagan layout buzilishlariga olib keladi.

---

### `border-box` — tavsiya etiladi

`width` va `height` ichiga **padding va border ham kiradi.** Content avtomatik kichrayadi.

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid black;
}

/*
  Haqiqiy kenglik = 200px (o'zgarmaydi)
  Content kenglik = 200 - 20 - 20 - 5 - 5 = 150px
*/
```

```
|←——————————— 200px ———————————→|
| border | padding | content | padding | border |
|  5px   |  20px   |  150px  |  20px   |  5px   |
```

`width: 200px` desang, element ekranda **aynan 200px** egallaydi. Hisob-kitob aniq va bashorat qilish oson.

---

### Ikkalasini solishtirish

```css
/* Ikkala box ham width: 200px berilgan */

.content-box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid red;
  /* Ekrandagi kenglik: 250px ← kattaroq! */
}

.border-box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid blue;
  /* Ekrandagi kenglik: 200px ← aynan shu */
}
```

---

### Global reset

Barcha elementlarga `border-box` berish — zamonaviy CSS-ning standart yondashuvi:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

`*::before` va `*::after` — pseudo-elementlar ham reset qilinadi, aks holda ular `content-box`da qoladi.

**Nima uchun global reset ishlatiladi:**

```css
/* Global reset bo'lmasa — muammo */
.container {
  width: 100%;
}
.container {
  padding: 20px;
} /* ← 100% + 40px = overflow! */

/* Global reset bo'lsa — muammo yo'q */
.container {
  width: 100%;
  padding: 20px;
} /* ← aynan 100% */
```

Layout tuzishda, ayniqsa `%` bilan ishlaganda, `border-box` bo'lmasa padding qo'shganda element o'z qatoridan chiqib ketadi. Global reset shu muammoni butunlay yo'q qiladi.

> ✅ Har doim yangi CSS faylingiz boshiga `* { box-sizing: border-box }` qo'ying — barcha professional proyektlarda shunday qilinadi.
