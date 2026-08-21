# 📚 **Modal Window — bosqichma-bosqich**

## 1-qadam. Modal Window nima?

Avval o‘quvchiga tushuntiramiz:

> **Modal Window** — foydalanuvchi biror tugmani bosganda ekranning ustida paydo bo‘ladigan kichik oyna.

Masalan, saytda:

```text
[ Modalni ochish ]
```

tugmasini bosamiz.

Ekranda:

```text
┌─────────────────────────┐
│                         │
│       Salom!            │
│                         │
│  Bu modal oynadir.      │
│                         │
│       [ Yopish ]        │
│                         │
└─────────────────────────┘
```

paydo bo‘ladi.

---

# 2-qadam. Avval HTMLni yozamiz

Birinchi navbatda modalni JavaScript bilan emas, **oddiy HTML bilan yaratamiz**.

```html
<button class="open-btn">Modalni ochish</button>

<div class="modal">
  <div class="modal-content">
    <h2>Salom!</h2>

    <p>Bu mening modal oynacham.</p>

    <button class="close-btn">Yopish</button>
  </div>
</div>
```

Endi har bir qismini ko‘ramiz.

---

## 3-qadam. Modalni ochadigan tugma

```html
<button class="open-btn">Modalni ochish</button>
```

Bu oddiy tugma.

Uning vazifasi:

> Foydalanuvchi shu tugmani bosadi va modal ochiladi.

`class="open-btn"` esa JavaScriptda shu tugmani topishimiz uchun kerak.

---

# 4-qadam. Modalning asosiy qismi

```html
<div class="modal"></div>
```

Bu modalning tashqi qismi.

Hozircha ichida hech narsa yo‘q.

Biz unga keyin CSS orqali:

- butun ekranni egallash
- orqa fonni qoraytirish
- o‘rtaga joylashtirish

kabi xususiyatlarni beramiz.

---

# 5-qadam. Modalning ichki oynasi

Modalning ichiga yana bitta `div` yozamiz:

```html
<div class="modal">
  <div class="modal-content"></div>
</div>
```

Bu yerda:

```text
.modal
   ↓
ekran ustidagi katta qism

.modal-content
   ↓
ekranning o‘rtasidagi kichik oyna
```

---

# 6-qadam. Modal ichiga ma'lumot qo‘shamiz

```html
<div class="modal-content">
  <h2>Salom!</h2>

  <p>Bu mening modal oynacham.</p>

  <button class="close-btn">Yopish</button>
</div>
```

Bu yerda:

### `h2`

```html
<h2>Salom!</h2>
```

Modalning sarlavhasi.

### `p`

```html
<p>Bu mening modal oynacham.</p>
```

Modal ichidagi matn.

### `close-btn`

```html
<button class="close-btn">Yopish</button>
```

Modalni yopadigan tugma.

---

# 7-qadam. Endi CSS yozamiz

HTML tayyor.

Lekin modal hozir oddiy `div` bo‘lib turibdi.

Endi CSS orqali uni chiroyli qilamiz.

Avval:

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Bu brauzerning standart `margin` va `padding`larini olib tashlaydi.

---

# 8-qadam. Body'ni sozlaymiz

```css
body {
  font-family: Arial, sans-serif;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}
```

Bu nima qiladi?

```css
display: flex;
```

elementlarni Flexbox orqali joylashtiradi.

```css
justify-content: center;
```

gorizontal markazga olib keladi.

```css
align-items: center;
```

vertikal markazga olib keladi.

Natijada:

```text
        [ Modalni ochish ]
```

tugmasi ekranning o‘rtasida turadi.

---

# 9-qadam. Modalni dastlab yashiramiz

Mana **eng muhim qism**:

```css
.modal {
  display: none;
}
```

Bu degani:

> Modal hozircha ko‘rinmasin.

Demak sayt ochilganda modal chiqmaydi.

Foydalanuvchi faqat:

```text
[ Modalni ochish ]
```

tugmasini ko‘radi.

---

# 10-qadam. Modalga fon beramiz

Endi:

```css
.modal {
  background-color: rgba(0, 0, 0, 0.5);
}
```

Bu modalning orqa qismini qoraytiradi.

`rgba`dagi oxirgi:

```text
0.5
```

shaffoflikni bildiradi.

Natijada modal ochilganda taxminan:

```text
██████████████████████
██████████████████████
████  ┌──────────┐ ███
████  │  Salom!  │ ███
████  │          │ ███
████  └──────────┘ ███
██████████████████████
```

ko‘rinishida bo‘ladi.

---

# 11-qadam. Modalni butun ekranga yoyamiz

```css
.modal {
  position: fixed;
  inset: 0;
}
```

`position: fixed` — modalni ekranga bog‘laydi.

`inset: 0` esa:

```text
top: 0
right: 0
bottom: 0
left: 0
```

degan ma'noni anglatadi.

Shuning uchun modal butun ekranni egallaydi.

---

# 12-qadam. Modal ichidagi oynani markazga olib kelamiz

```css
.modal {
  display: none;

  justify-content: center;
  align-items: center;
}
```

Modal ochilganda:

```css
display: flex;
```

bo‘lsa, `justify-content` va `align-items` sababli ichki oyna markazga keladi.

---

# 13-qadam. Modalning ichki oynasini chiroyli qilamiz

```css
.modal-content {
  width: 350px;
  padding: 30px;

  background-color: white;
  border-radius: 10px;

  text-align: center;
}
```

Bu yerda:

```css
width: 350px;
```

→ oyna kengligi.

```css
padding: 30px;
```

→ ichki bo‘sh joy.

```css
background-color: white;
```

→ oq fon.

```css
border-radius: 10px;
```

→ burchaklarni yumaloq qiladi.

```css
text-align: center;
```

→ matnni markazga joylashtiradi.

---

# 14-qadam. Endi JavaScriptga o'tamiz

HTML va CSS tayyor.

Endi modalni **boshqarish** kerak.

Buning uchun JavaScript ishlatamiz.

Avval HTML elementlarini JavaScriptga olib kelamiz:

```javascript
const openBtn = document.querySelector(".open-btn");

const closeBtn = document.querySelector(".close-btn");

const modal = document.querySelector(".modal");
```

---

# 15-qadam. `querySelector` nima?

Masalan:

```javascript
document.querySelector(".open-btn");
```

degani:

> HTML ichidan `.open-btn` classiga ega elementni top.

Shuning uchun:

```javascript
const openBtn = document.querySelector(".open-btn");
```

deganimizda JavaScript:

```html
<button class="open-btn"></button>
```

tugmasini topadi.

Xuddi shunday:

```javascript
const closeBtn = document.querySelector(".close-btn");
```

`Yopish` tugmasini topadi.

```javascript
const modal = document.querySelector(".modal");
```

modalning o‘zini topadi.

---

# 16-qadam. Modalni ochamiz

Endi:

```javascript
openBtn.addEventListener("click", function () {
  modal.classList.add("active");
});
```

Buni juda oddiy tushuntiramiz:

> `openBtn`ga bosilganda `.modal`ga `active` class qo‘sh.

Bu yerda:

```javascript
addEventListener("click", ...)
```

→ tugma bosilishini kutadi.

---

# 17-qadam. `classList.add()` nima?

Mana:

```javascript
modal.classList.add("active");
```

JavaScript HTMLni:

```html
<div class="modal"></div>
```

dan:

```html
<div class="modal active"></div>
```

ga o‘zgartiradi.

Mana shu **eng muhim joy**.

---

# 18-qadam. CSS'da `active` yozamiz

Endi CSSga:

```css
.modal.active {
  display: flex;
}
```

deb yozamiz.

Demak:

```text
modal
 ↓
display: none
 ↓
yashirin
```

Lekin:

```text
modal active
 ↓
display: flex
 ↓
ko‘rinadi
```

---

# 19-qadam. Demak modal qanday ochilyapti?

To‘liq jarayon:

```text
[Modalni ochish] tugmasi
          ↓
       click
          ↓
     JavaScript
          ↓
classList.add("active")
          ↓
<div class="modal active">
          ↓
CSS ishlaydi
          ↓
display: flex
          ↓
       MODAL OCHILDI
```

O‘quvchi aynan mana shu jarayonni tushunishi kerak.

---

# 20-qadam. Endi modalni yopamiz

Yopish tugmasiga event beramiz:

```javascript
closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
});
```

Bu yerda:

```javascript
closeBtn;
```

→ Yopish tugmasi.

```javascript
click;
```

→ bosilganda.

```javascript
classList.remove("active");
```

→ `active` classini olib tashlaydi.

---

# 21-qadam. `classList.remove()` nima qiladi?

Modal ochilganda:

```html
<div class="modal active"></div>
```

Yopish tugmasini bosgandan keyin:

```html
<div class="modal"></div>
```

bo‘ladi.

`active` yo‘qoldi.

CSS yana:

```css
.modal {
  display: none;
}
```

ni ishlatadi.

Shuning uchun modal yo‘qoladi.

---

# 22-qadam. Modalni yopish jarayoni

```text
[Yopish] tugmasi
       ↓
     click
       ↓
   JavaScript
       ↓
remove("active")
       ↓
<div class="modal">
       ↓
display: none
       ↓
MODAL YOPILDI
```

---

# 23-qadam. Endi butun kod

O‘quvchiga avval bosqichma-bosqich tushuntirib, keyin **bitta faylga** quyidagicha yozdirish mumkin:

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Modal Window</title>

    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: Arial, sans-serif;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
      }

      /* Modalni ochish tugmasi */

      .open-btn {
        padding: 12px 25px;

        border: none;
        border-radius: 8px;

        background-color: blue;
        color: white;

        font-size: 16px;

        cursor: pointer;
      }

      /* Modal */

      .modal {
        position: fixed;
        inset: 0;

        background-color: rgba(0, 0, 0, 0.5);

        display: none;

        justify-content: center;
        align-items: center;
      }

      /* Modal ochilganda */

      .modal.active {
        display: flex;
      }

      /* Modal ichidagi oyna */

      .modal-content {
        width: 350px;

        padding: 30px;

        background-color: white;

        border-radius: 10px;

        text-align: center;
      }

      .modal-content h2 {
        margin-bottom: 15px;
      }

      .modal-content p {
        margin-bottom: 20px;
      }

      /* Yopish tugmasi */

      .close-btn {
        padding: 8px 20px;

        border: none;
        border-radius: 6px;

        background-color: red;
        color: white;

        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <!-- Modalni ochish tugmasi -->

    <button class="open-btn">Modalni ochish</button>

    <!-- Modal -->

    <div class="modal">
      <div class="modal-content">
        <h2>Salom!</h2>

        <p>Bu mening modal oynacham.</p>

        <button class="close-btn">Yopish</button>
      </div>
    </div>

    <script>
      // HTML elementlarini topamiz

      const openBtn = document.querySelector(".open-btn");

      const closeBtn = document.querySelector(".close-btn");

      const modal = document.querySelector(".modal");

      // Modalni ochish

      openBtn.addEventListener("click", function () {
        modal.classList.add("active");
      });

      // Modalni yopish

      closeBtn.addEventListener("click", function () {
        modal.classList.remove("active");
      });
    </script>
  </body>
</html>
```

# 🎯 O‘quvchi nimani o‘rganadi?

Bu bitta kichik loyiha orqali o‘quvchi:

1. `querySelector()`
2. `addEventListener()`
3. `click`
4. `classList.add()`
5. `classList.remove()`
6. CSS `display`
7. CSS `position: fixed`
8. CSS `flex`
9. HTML va CSS'ni JavaScript bilan boshqarish

ni amalda o‘rganadi.

**Eng asosiy formula esa:**

```text
HTML
 ↓
Element yaratadi

CSS
 ↓
Elementni bezaydi va yashiradi

JavaScript
 ↓
Elementni boshqaradi
```

Modal Window uchun esa:

```text
CLICK
  ↓
classList.add("active")
  ↓
MODAL OCHILADI

CLICK
  ↓
classList.remove("active")
  ↓
MODAL YOPILADI
```