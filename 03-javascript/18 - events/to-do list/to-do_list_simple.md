# JavaScript To-Do List — Oddiy Versiya (O'quv Qo'llanma)

Ushbu qo'llanmada oddiy va tushunarli **To-Do List** loyihasini bosqichma-bosqich tahlil qilamiz. Bu versiya murakkab tushunchalar (localStorage, filterlash, event delegation)dan xoli — shuning uchun JavaScript'ni endi o'rganayotgan o'quvchilar uchun juda mos.

## Mundarija

1. Loyiha haqida umumiy tushuncha
2. HTML tuzilishi
3. CSS (ko'rinish)
4. DOM elementlarini tanlash
5. Vazifa qo'shish tugmasi — asosiy mantiq
6. Yangi `<li>` elementini yaratish
7. Vazifani bajarilgan deb belgilash
8. O'chirish tugmasi
9. Tahrirlash tugmasi
10. `event.stopPropagation()` nima uchun kerak?
11. Enter tugmasi bilan qo'shish
12. Vazifalar sonini hisoblash
13. Barchasini o'chirish
14. To'liq kod
15. O'quvchilar uchun savol va mashqlar

---

## 1. Loyiha haqida umumiy tushuncha

Bu loyihada foydalanuvchi:

- Input orqali yangi vazifa yozadi va **"Qo'shish"** tugmasi yoki **Enter** orqali qo'shadi
- Vazifaga **bosib**, uni bajarilgan deb belgilaydi (chizib qo'yiladi)
- **"O'chirish"** tugmasi orqali bitta vazifani o'chiradi
- **"Tahrirlash"** tugmasi orqali vazifa matnini o'zgartiradi
- Pastda nechta vazifa borligini ko'radi
- **"Barchasini o'chirish"** tugmasi orqali ro'yxatni tozalaydi

Bu versiyaning murakkab (masalan, massiv asosida ishlaydigan) versiyalardan farqi shundaki, bu yerda ma'lumotlar alohida massivda saqlanmaydi — to'g'ridan-to'g'ri HTML elementlar (`<li>`) bilan ishlaymiz. Bu — boshlang'ich daraja uchun eng tushunarli yondashuv.

---

## 2. HTML tuzilishi

```html
<div class="todo">
  <h1>To-Do List</h1>

  <input id="input" type="text" placeholder="Vazifa yozing" />
  <button id="addBtn">Qo'shish</button>

  <p>Vazifalar soni: <span id="count">0</span></p>

  <ul id="list"></ul>

  <button id="deleteAll">Barchasini o'chirish</button>
</div>
```

E'tibor bering: `<ul id="list"></ul>` boshida **bo'sh**. Vazifalar unga JavaScript orqali, dinamik ravishda qo'shiladi. Bu — deyarli barcha interaktiv veb-ilovalarning asosiy tamoyili: HTML faqat "qobiq" (skelet) beradi, ichini JavaScript to'ldiradi.

---

## 3. CSS (ko'rinish)

CSS'ning vazifasi shunchaki chiroyli ko'rinish berish. Diqqat qilinishi kerak bo'lgan bitta joy — `.completed` klassi:

```css
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
```

Bu klass vazifaga **qo'shilganda** — matn chizib qo'yiladi va xiralashadi (bajarilgan ko'rinish beradi). Bu klassni qo'shish/olib tashlash ishini JavaScript bajaradi (7-bo'limga qarang).

Shuningdek `.delete` va `.edit` klasslari `float: right` orqali tugmalarni o'ngga suradi, shunda ular vazifa matnining yonida chiroyli joylashadi.

---

## 4. DOM elementlarini tanlash

Skriptning boshida, ishlatiladigan barcha HTML elementlarni o'zgaruvchilarga saqlab olamiz:

```javascript
let input = document.querySelector("#input");
let addBtn = document.querySelector("#addBtn");
let list = document.querySelector("#list");
let count = document.querySelector("#count");
let deleteAll = document.querySelector("#deleteAll");
```

Bu — deyarli har bir JavaScript loyihasining birinchi qadami: kerakli elementlarni "ushlab olish", shunda keyinchalik ularga osongina murojaat qilish mumkin bo'ladi.

---

## 5. Vazifa qo'shish tugmasi — asosiy mantiq

"Qo'shish" tugmasiga bosilganda ishlaydigan funksiya — bu loyihaning markazi. Avval umumiy ko'rinishini ko'ramiz:

```javascript
addBtn.addEventListener("click", function () {
  let text = input.value;

  if (text === "") {
    return;
  }

  // ... bu yerda <li> yaratiladi (keyingi bo'limlarda)
});
```

**Qadamlar:**

1. `input.value` — foydalanuvchi inputga yozgan matnni oladi.
2. Agar matn bo'sh bo'lsa (`""`), funksiya `return` orqali to'xtaydi — bo'sh vazifa qo'shilmaydi.
3. Aks holda, davom etib, yangi `<li>` yaratishga o'tamiz.

---

## 6. Yangi `<li>` elementini yaratish

```javascript
let li = document.createElement("li");
li.textContent = text;
```

`document.createElement("li")` — xotirada yangi, hali hech qayerga bog'lanmagan `<li>` elementini yaratadi. `li.textContent = text` esa uning ichiga foydalanuvchi kiritgan matnni joylaydi.

Bu bosqichda `<li>` hali sahifada ko'rinmaydi — u faqat "xotirada" mavjud. Uni ko'rinadigan qilish uchun oxirida `list.appendChild(li)` chaqiriladi (bu haqda pastda).

---

## 7. Vazifani bajarilgan deb belgilash

Vazifaning o'ziga (ya'ni butun `<li>` ga) bosilganda, `completed` klassi **qo'shiladi yoki olib tashlanadi**:

```javascript
li.addEventListener("click", function () {
  li.classList.toggle("completed");
});
```

`classList.toggle("completed")` — juda foydali metod: agar `li` da `completed` klassi **bo'lmasa**, uni qo'shadi; agar **bo'lsa**, olib tashlaydi. Shuning uchun bir marta bosilganda vazifa "bajarilgan" bo'ladi, yana bosilsa — qayta "faol" holatga qaytadi.

---

## 8. O'chirish tugmasi

Har bir vazifa uchun alohida "O'chirish" tugmasi yaratiladi va shu `<li>` ichiga joylashtiriladi:

```javascript
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "O'chirish";
deleteBtn.classList.add("delete");

deleteBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  li.remove();
  updateCount();
});
```

**Qadamlar:**

1. Yangi `<button>` yaratiladi va unga matn (`"O'chirish"`) va CSS klassi (`delete`) beriladi.
2. Tugmaga bosilganda: `li.remove()` — aynan shu vazifani sahifadan butunlay olib tashlaydi.
3. `updateCount()` — vazifalar sonini yangilash uchun chaqiriladi (12-bo'limga qarang).

**`event.stopPropagation()` nima uchun kerakligi** — bu haqda alohida 10-bo'limda batafsil tushuntiriladi, chunki bu boshlang'ich o'quvchilar ko'pincha tushunmaydigan joy.

---

## 9. Tahrirlash tugmasi

"Tahrirlash" tugmasi bosilganda, brauzerning o'rnatilgan `prompt()` oynasi ochiladi — u orqali foydalanuvchi yangi matn kiritadi:

```javascript
let editBtn = document.createElement("button");
editBtn.textContent = "Tahrirlash";
editBtn.classList.add("edit");

editBtn.addEventListener("click", function (event) {
  event.stopPropagation();

  let newText = prompt("Yangi vazifani yozing:", li.firstChild.textContent);

  if (newText !== null && newText !== "") {
    li.firstChild.textContent = newText;
  }
});
```

**Diqqat qilinishi kerak bo'lgan joy — `li.firstChild.textContent`:**

`<li>` ichida bir nechta "farzand" (child) elementlar bor: matn qismi va ikkita tugma (`delete`, `edit`). `li.firstChild` — ularning **birinchisi**, ya'ni matn qismini bildiradi (chunki `li.textContent = text` orqali matn eng birinchi bo'lib qo'shilgan edi, tugmalar esa keyinroq `appendChild` orqali qo'shiladi).

`prompt()` funksiyasi ikkita parametr oladi: ko'rsatiladigan savol va inputning boshlang'ich qiymati (bu yerda — hozirgi vazifa matni). Foydalanuvchi:

- **"OK"** bossa va matn kiritsa → `newText` shu matnga teng bo'ladi
- **"Bekor qilish"** bossa → `newText` qiymati `null` bo'ladi
- Bo'sh joy qoldirib "OK" bossa → `newText` bo'sh satr (`""`) bo'ladi

Shuning uchun `if (newText !== null && newText !== "")` sharti — faqat foydalanuvchi haqiqatan ham biror matn kiritgan holdagina o'zgartirish amalga oshirilishini ta'minlaydi.

---

## 10. `event.stopPropagation()` nima uchun kerak?

Bu — kodning eng muhim va ko'pincha chalkash tuyuladigan qismi. Eslab qoling: **7-bo'limda** biz butun `<li>` elementiga `click` hodisasini bog'lagan edik — unga bosilganda vazifa "bajarilgan" deb belgilanadi.

Lekin "O'chirish" va "Tahrirlash" tugmalari ham xuddi shu `<li>` ning **ichida** joylashgan! Demak, agar foydalanuvchi "O'chirish" tugmasiga bossa, nima bo'ladi?

Brauzerda hodisalar **"bubbling" (pufakcha kabi yuqoriga ko'tarilish)** tamoyili bo'yicha ishlaydi: tugmaga bosilgan `click` hodisasi, avval tugmaning o'zida ishlaydi, so'ngra "yuqoriga ko'tarilib", uning ota-elementida (`<li>`) ham ishga tushadi. Agar biz `stopPropagation()` chaqirmasak, quyidagi holat yuz beradi:

1. "O'chirish" tugmasiga bosiladi → `deleteBtn`ning `click` funksiyasi ishlaydi (vazifa o'chadi)
2. Hodisa yuqoriga ko'tariladi → `li`ning `click` funksiyasi **ham** ishlaydi (`completed` klassi qo'shiladi)

Amalda vazifa allaqachon o'chirilgan bo'lgani uchun bu aniq xato ko'rinmasligi mumkin, lekin **"Tahrirlash"** tugmasida muammo yaqqol seziladi: tugmaga bosilganda `prompt()` oynasi ochiladi, lekin shu bilan birga `<li>`ning `click` hodisasi ham ishga tushib, vazifa istalmagan holda "bajarilgan" deb belgilanib qoladi.

**Yechim:**

```javascript
event.stopPropagation();
```

Bu qator — hodisaning yuqoriga (ota-elementga) "ko'tarilishini" to'xtatadi. Natijada, tugmaga bosilganda faqat o'sha tugmaning funksiyasi ishlaydi, `<li>`ning `click` funksiyasi esa ishga tushmaydi.

**Xulosa qoida:** Agar bir elementning ichida yana bosiladigan (interaktiv) elementlar bo'lsa va ularning xatti-harakati bir-biriga ta'sir qilmasligi kerak bo'lsa — ichkarida joylashgan elementning hodisasida `event.stopPropagation()` chaqiring.

---

## 11. Enter tugmasi bilan qo'shish

Foydalanuvchiga har safar sichqoncha bilan tugmani bosish shart bo'lmasligi uchun, `input`ga `keydown` hodisasi qo'shiladi:

```javascript
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
```

`event.key === "Enter"` — bosilgan tugma aynan **Enter** ekanligini tekshiradi. Agar shart to'g'ri bo'lsa, `addBtn.click()` chaqiriladi — bu esa xuddi foydalanuvchi "Qo'shish" tugmasini sichqoncha bilan bosgandek ishlaydi (5-bo'limdagi funksiya ishga tushadi).

**Muhim tushuncha:** bu yerda vazifa qo'shish mantig'i **ikki marta yozilmagan** — Enter bosilganda shunchaki mavjud tugmaning `click()` metodi "sun'iy ravishda" chaqirilyapti. Bu kodni takrorlamaslikning (DRY — _Don't Repeat Yourself_) yaxshi namunasi.

---

## 12. Vazifalar sonini hisoblash

```javascript
function updateCount() {
  count.textContent = list.children.length;
}
```

`list.children` — `<ul id="list">` ichidagi barcha to'g'ridan-to'g'ri farzand elementlarni (ya'ni barcha `<li>` larni) qaytaradi. `.length` esa ularning sonini beradi.

Bu funksiya quyidagi holatlarda chaqiriladi:

- Yangi vazifa qo'shilganda (5-bo'lim oxirida)
- Vazifa o'chirilganda (8-bo'lim)
- Barchasi o'chirilganda (13-bo'lim)

**Diqqat:** bu funksiya faqat vazifalar **sonini** hisoblaydi — bajarilgan yoki bajarilmaganligidan qat'iy nazar, barcha `<li>` lar sanaladi.

---

## 13. Barchasini o'chirish

```javascript
deleteAll.addEventListener("click", function () {
  list.innerHTML = "";
  updateCount();
});
```

`list.innerHTML = ""` — `<ul>` ichidagi **barcha** HTML kontentni (ya'ni barcha `<li>` elementlarni, ular ichidagi tugmalar bilan birga) bir zumda tozalaydi. Bu — bir nechta elementni birma-bir o'chirishdan ko'ra ancha qisqa va tezkor usul.

---

## 14. To'liq kod

Quyida yuqorida tahlil qilingan barcha qismlar birlashtirilgan, to'liq ishlaydigan kod keltirilgan:

```html
<!doctype html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To-Do List</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f2f2f2;
      }

      .todo {
        width: 400px;
        margin: 100px auto;
        padding: 20px;
        background: white;
        border-radius: 10px;
      }

      input {
        width: 65%;
        padding: 10px;
      }

      button {
        padding: 10px;
        cursor: pointer;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin-top: 10px;
        padding: 10px;
        background: #eee;
      }

      .completed {
        text-decoration: line-through;
        opacity: 0.5;
      }

      .delete {
        float: right;
      }

      .edit {
        float: right;
        margin-right: 5px;
      }
    </style>
  </head>
  <body>
    <div class="todo">
      <h1>To-Do List</h1>

      <input id="input" type="text" placeholder="Vazifa yozing" />

      <button id="addBtn">Qo'shish</button>

      <p>Vazifalar soni: <span id="count">0</span></p>

      <ul id="list"></ul>

      <button id="deleteAll">Barchasini o'chirish</button>
    </div>

    <script>
      let input = document.querySelector("#input");
      let addBtn = document.querySelector("#addBtn");
      let list = document.querySelector("#list");
      let count = document.querySelector("#count");
      let deleteAll = document.querySelector("#deleteAll");

      // VAZIFA QO'SHISH
      addBtn.addEventListener("click", function () {
        let text = input.value;

        if (text === "") {
          return;
        }

        let li = document.createElement("li");

        li.textContent = text;

        // BAJARILGAN QILISH
        li.addEventListener("click", function () {
          li.classList.toggle("completed");
        });

        // O'CHIRISH TUGMASI
        let deleteBtn = document.createElement("button");

        deleteBtn.textContent = "O'chirish";

        deleteBtn.classList.add("delete");

        deleteBtn.addEventListener("click", function (event) {
          event.stopPropagation();

          li.remove();

          updateCount();
        });

        // TAHRIRLASH TUGMASI
        let editBtn = document.createElement("button");

        editBtn.textContent = "Tahrirlash";

        editBtn.classList.add("edit");

        editBtn.addEventListener("click", function (event) {
          event.stopPropagation();

          let newText = prompt(
            "Yangi vazifani yozing:",
            li.firstChild.textContent,
          );

          if (newText !== null && newText !== "") {
            li.firstChild.textContent = newText;
          }
        });

        li.appendChild(deleteBtn);
        li.appendChild(editBtn);

        list.appendChild(li);

        input.value = "";

        updateCount();
      });

      // ENTER BOSILGANDA QO'SHISH
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          addBtn.click();
        }
      });

      // VAZIFALAR SONINI YANGILASH
      function updateCount() {
        count.textContent = list.children.length;
      }

      // BARCHASINI O'CHIRISH
      deleteAll.addEventListener("click", function () {
        list.innerHTML = "";

        updateCount();
      });
    </script>
  </body>
</html>
```

---

## 15. O'quvchilar uchun savol va mashqlar

Darsni mustahkamlash uchun o'quvchilarga quyidagi savol va vazifalarni berish mumkin:

**Tushunishni tekshirish savollari:**

1. Agar `event.stopPropagation()` qatorlarini olib tashlasak, aynan qanday xato yuz beradi? Nega?
2. `li.firstChild.textContent` o'rniga nima uchun `li.textContent` ishlatib bo'lmaydi? (Maslahat: bu holda nima bo'ladi?)
3. `list.children.length` bilan `list.querySelectorAll('li').length` orasida qanday farq bor deb o'ylaysiz?

**Amaliy mashqlar:**

1. Faqat **bajarilgan** vazifalar sonini alohida ko'rsatuvchi hisoblagich qo'shing (masalan: "3 tadan 2 tasi bajarilgan").
2. Bo'sh vazifa qo'shilganda inputni qizil ramka bilan belgilab, foydalanuvchini ogohlantiring.
3. Vazifa qo'shilganda sahifa localStorage'ga saqlansin, sahifa yangilanganda ham vazifalar yo'qolmasin (bu — keyingi mavzu, lekin qiziquvchilar uchun oldindan sinab ko'rish yaxshi mashq).
4. `deleteAll` tugmasi bosilganda, foydalanuvchidan `confirm()` orqali tasdiqlash so'ralsin ("Rostdan ham barchasini o'chirmoqchimisiz?").
5. Bitta vazifa matni bo'yicha (masalan, input orqali) qidiruv qilib, mos kelmaganlarini vaqtincha yashiring.

---

## Xulosa

Bu oddiy versiya JavaScript'ning eng muhim asoslarini o'z ichiga oladi: `createElement`, `appendChild`, `classList`, hodisalar (`click`, `keydown`) va **event bubbling / stopPropagation** tushunchasi. Bu — DOM bilan ishlashning eng tabiiy va boshlang'ich usuli bo'lib, undan keyin murakkabroq mavzular (massiv asosida state boshqarish, localStorage, event delegation) ga o'tish ancha osonlashadi.
