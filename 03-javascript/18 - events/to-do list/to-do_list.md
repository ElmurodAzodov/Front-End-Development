# JavaScript To-Do List — To'liq O'quv Qo'llanmasi

Ushbu qo'llanmada biz nolldan boshlab, to'liq funksional **To-Do List (Vazifalar ro'yxati)** ilovasini bosqichma-bosqich quramiz. Har bir bosqichda nima uchun shunday yozilayotgani tushuntiriladi, shunda o'quvchi nafaqat kod ko'chirib yozadi, balki mantiqni ham tushunadi.

## Mundarija

1. Loyiha haqida umumiy tushuncha
2. HTML tuzilishi
3. CSS (asosiy ko'rinish)
4. DOM elementlarini tanlash
5. Ma'lumotlar tuzilishi (State)
6. LocalStorage bilan ishlash
7. Vazifalarni ekranga chiqarish (render)
8. Yangi vazifa qo'shish
9. Vazifani bajarilgan deb belgilash
10. Vazifani o'chirish
11. Vazifani tahrirlash (edit)
12. Filterlash: Barchasi / Faol / Bajarilgan
13. Qolgan vazifalar sonini ko'rsatish
14. Bajarilgan vazifalarni tozalash
15. Event Delegation nima va nima uchun kerak
16. To'liq tayyor kod (HTML + CSS + JS)
17. O'quvchilar uchun qo'shimcha mashqlar

---

## 1. Loyiha haqida umumiy tushuncha

To-Do List — bu JavaScript o'rganuvchilar uchun eng foydali amaliy loyihalardan biri, chunki u quyidagi mavzularning barchasini bitta joyda birlashtiradi:

- DOM bilan ishlash (`document.querySelector`, `createElement`, `appendChild`)
- Hodisalar (Events): `click`, `submit`, `keydown`
- Massivlar bilan ishlash: `push`, `filter`, `map`, `find`, `findIndex`
- `localStorage` orqali ma'lumotni saqlab qolish
- Shart operatorlari va funksiyalar

**Loyiha imkoniyatlari (funksiyalar ro'yxati):**

| #   | Funksiya                   | Tavsif                                           |
| --- | -------------------------- | ------------------------------------------------ |
| 1   | Vazifa qo'shish            | Input orqali yangi vazifa kiritish               |
| 2   | Vazifani bajarilgan qilish | Checkbox orqali belgilash                        |
| 3   | Vazifani o'chirish         | Bitta vazifani ro'yxatdan olib tashlash          |
| 4   | Vazifani tahrirlash        | Matnni qayta yozish (edit)                       |
| 5   | Filterlash                 | Barchasi / Faol / Bajarilgan bo'yicha ko'rsatish |
| 6   | Qolgan sonini ko'rsatish   | "3 ta vazifa qoldi" kabi hisoblagich             |
| 7   | Bajarilganlarni tozalash   | "Clear completed" tugmasi                        |
| 8   | LocalStorage               | Sahifa yangilansa ham ma'lumot yo'qolmasligi     |

---

## 2. HTML tuzilishi

Avval sahifaning skeletini (asosiy tuzilmasini) yozamiz. Har bir elementga aniq `id` yoki `class` beramiz, chunki JavaScript ularni aynan shu nomlar orqali topadi.

```html
<!DOCTYPE html>
<html lang="uz">
  <head>
    <meta charset="UTF-8" />
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="app">
      <h1>Vazifalar ro'yxati</h1>

      <!-- Yangi vazifa qo'shish formasi -->
      <form id="todo-form">
        <input
          type="text"
          id="todo-input"
          placeholder="Yangi vazifa kiriting..."
          autocomplete="off"
        />
        <button type="submit">Qo'shish</button>
      </form>

      <!-- Filter tugmalari -->
      <div class="filters">
        <button class="filter-btn active" data-filter="all">Barchasi</button>
        <button class="filter-btn" data-filter="active">Faol</button>
        <button class="filter-btn" data-filter="completed">Bajarilgan</button>
      </div>

      <!-- Vazifalar ro'yxati shu yerga chiqariladi -->
      <ul id="todo-list"></ul>

      <!-- Pastki panel: qolgan sonini ko'rsatish va tozalash -->
      <div class="footer">
        <span id="items-left">0 ta vazifa qoldi</span>
        <button id="clear-completed">Bajarilganlarni tozalash</button>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

**Diqqat:** `<form>` ishlatishimizning sababi — foydalanuvchi Enter tugmasini bossa ham, "Qo'shish" tugmasini bossa ham, bir xil `submit` hodisasi ishga tushadi. Bu ikkita alohida hodisa (click va keydown) yozishdan qutqaradi.

---

## 3. CSS (asosiy ko'rinish)

Bu qo'llanmaning markazi JavaScript bo'lgani uchun, CSS'ni qisqa va sodda qilib beramiz — shunchaki ko'rinishli bo'lishi uchun.

```css
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #f4f4f9;
  display: flex;
  justify-content: center;
  padding-top: 40px;
}

.app {
  background: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

#todo-form {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}

#todo-input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.filters {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
}

.filter-btn {
  border: none;
  background: #eee;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.filter-btn.active {
  background: #4a90e2;
  color: white;
}

#todo-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

#todo-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

#todo-list li.completed span {
  text-decoration: line-through;
  color: #999;
}

#todo-list li span {
  flex: 1;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}
```

---

## 4. DOM elementlarini tanlash

JavaScript faylimiz (`script.js`) boshida, ishlatadigan barcha HTML elementlarni o'zgaruvchilarga saqlab olamiz. Bu keyinchalik har safar `document.querySelector` yozishdan qutqaradi va kodni tozaroq qiladi.

```javascript
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll(".filter-btn");
const itemsLeftText = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");
```

---

## 5. Ma'lumotlar tuzilishi (State)

Bu qismning eng muhim tushunchasi shu: **ekranda ko'rinayotgan narsa emas, balki JavaScript massivi (array) — bu bizning "haqiqat manbamiz" (source of truth)**.

Ya'ni, foydalanuvchi vazifa qo'shganda, biz to'g'ridan-to'g'ri HTML'ga element qo'shmaymiz. Avval massivga qo'shamiz, keyin butun ro'yxatni massiv asosida qayta chizamiz (render qilamiz).

Har bir vazifa (task) — bu obyekt bo'lib, quyidagi maydonlarga ega bo'ladi:

```javascript
// Har bir vazifaning namunasi:
{
  id: 1691234567890,     // noyob identifikator (timestamp asosida)
  text: "JavaScript o'rganish",  // vazifa matni
  completed: false        // bajarilgan yoki yo'qligi
}
```

Barcha vazifalarni saqlaydigan asosiy massiv:

```javascript
let todos = []; // barcha vazifalar shu yerda saqlanadi
let currentFilter = "all"; // hozirgi tanlangan filter: all | active | completed
```

**Nima uchun `id` kerak?** Chunki ro'yxatda ikkita bir xil matnli vazifa bo'lishi mumkin (masalan, ikkita "Non olish"). Agar biz vazifani matn orqali qidirsak, ikkalasi ham o'chib ketishi mumkin. Shuning uchun har bir vazifaga noyob raqam (`id`) beramiz va barcha amallarni (o'chirish, tahrirlash) shu `id` orqali bajaramiz.

---

## 6. LocalStorage bilan ishlash

`localStorage` — bu brauzerning o'ziga xos "xotirasi" bo'lib, sahifa yopilib qayta ochilsa ham ma'lumot saqlanib qoladi. Lekin u faqat **matn (string)** saqlaydi, shuning uchun massivni saqlashdan oldin uni matnga aylantirish (`JSON.stringify`), o'qishda esa qayta massivga aylantirish (`JSON.parse`) kerak bo'ladi.

```javascript
// Vazifalarni localStorage'ga saqlash
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Vazifalarni localStorage'dan yuklab olish
function loadTodos() {
  const saved = localStorage.getItem("todos");
  todos = saved ? JSON.parse(saved) : [];
}
```

`saveTodos()` funksiyasini biz massiv o'zgargan **har bir joyda** chaqiramiz (qo'shilganda, o'chirilganda, tahrirlanganda, bajarilgan deb belgilanganda). Shunda ma'lumot doim yangilanib turadi.

---

## 7. Vazifalarni ekranga chiqarish (render)

Bu — loyihaning "yuragi". `render()` funksiyasi har safar chaqirilganda, avval eski ro'yxatni tozalaydi, so'ngra `todos` massivi (filterlangan holda) asosida yangi ro'yxatni chizadi.

```javascript
function renderTodos() {
  // 1-qadam: ro'yxatni tozalash
  todoList.innerHTML = "";

  // 2-qadam: joriy filterga mos vazifalarni tanlash
  const filteredTodos = getFilteredTodos();

  // 3-qadam: agar ro'yxat bo'sh bo'lsa, xabar ko'rsatish
  if (filteredTodos.length === 0) {
    todoList.innerHTML =
      '<li style="color:#999; text-align:center;">Vazifalar yo\'q</li>';
  }

  // 4-qadam: har bir vazifa uchun <li> yaratish
  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = todo.id; // id'ni HTML elementga bog'lab qo'yamiz
    if (todo.completed) {
      li.classList.add("completed");
    }

    li.innerHTML = `
      <input type="checkbox" class="toggle-checkbox" ${todo.completed ? "checked" : ""}>
      <span>${todo.text}</span>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    `;

    todoList.appendChild(li);
  });

  // 5-qadam: qolgan vazifalar sonini yangilash
  updateItemsLeft();
}
```

**Muhim tushuncha — nima uchun har safar to'liq qayta chizamiz?**

Boshlang'ich bosqichda eng oson va tushunarli usul — massiv o'zgarganda butun ro'yxatni tozalab, qaytadan chizish. Bu React kabi kutubxonalarning ishlash mantig'iga ham juda o'xshaydi (ular ham "state o'zgardi → UI qayta chiziladi" tamoyiliga asoslangan). Katta loyihalarda faqat o'zgargan qismni yangilash (optimizatsiya) qilinadi, lekin o'rganish bosqichida bu shart emas.

---

## 8. Yangi vazifa qo'shish

Formaning `submit` hodisasini tinglaymiz. `event.preventDefault()` chaqirish shart, aks holda sahifa avtomatik yangilanib ketadi (forma standart xatti-harakati).

```javascript
todoForm.addEventListener("submit", function (event) {
  event.preventDefault(); // sahifa qayta yuklanishining oldini olamiz

  const text = todoInput.value.trim(); // bo'sh joylarni olib tashlaymiz

  // Bo'sh matn kiritilsa, hech narsa qo'shmaymiz
  if (text === "") {
    return;
  }

  const newTodo = {
    id: Date.now(), // hozirgi vaqt millisekundlarda — noyob id sifatida
    text: text,
    completed: false,
  };

  todos.push(newTodo); // massivga qo'shamiz
  saveTodos(); // localStorage'ga saqlaymiz
  renderTodos(); // ekranni yangilaymiz

  todoInput.value = ""; // inputni tozalaymiz
  todoInput.focus(); // kursorni qayta inputga qo'yamiz
});
```

**Nima uchun `Date.now()` ishlatildi?** U hozirgi vaqtni millisekundlarda qaytaradi (masalan, `1691234567890`). Ikkita vazifa bir xil millisekundda qo'shilishi deyarli mumkin emas, shuning uchun bu oddiy va ishonchli noyob `id` yaratish usuli.

---

## 9. Vazifani bajarilgan deb belgilash

Checkbox bosilganda, mos vazifaning `completed` qiymatini teskarisiga o'zgartiramiz (`true` ↔ `false`). Buni **Event Delegation** orqali amalga oshiramiz — bu haqda 15-bo'limda batafsil tushuntiriladi.

```javascript
function toggleComplete(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}
```

`Array.prototype.find()` — massiv ichidan shartga mos **birinchi** elementni qaytaradi. Bizning holatda — `id` mos keladigan vazifani topadi.

---

## 10. Vazifani o'chirish

O'chirish uchun `filter()` metodidan foydalanamiz — u berilgan shartga mos **kelmagan** elementlarni yangi massivga yig'ib beradi. Ya'ni, "o'chirmoqchi bo'lgan vazifadan boshqa hammasini olib qol" deb ko'rsatamiz.

```javascript
function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  renderTodos();
}
```

---

## 11. Vazifani tahrirlash (edit)

Tahrirlash biroz murakkabroq, chunki foydalanuvchiga matnni qayta yozish imkoniyatini berish kerak. Eng sodda usul — `prompt()` oynasidan foydalanish (o'quv maqsadida qulay). Ilg'orroq versiyada `<span>` o'rniga `<input>` chiqarish mumkin.

```javascript
function editTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  const newText = prompt("Vazifani tahrirlang:", todo.text);

  // Foydalanuvchi "Bekor qilish" bossa yoki bo'sh matn kiritsa, o'zgartirmaymiz
  if (newText === null || newText.trim() === "") {
    return;
  }

  todo.text = newText.trim();
  saveTodos();
  renderTodos();
}
```

**Qo'shimcha (murakkabroq) variant — inline edit:** Agar `prompt()` o'rniga chiroyliroq usul kerak bo'lsa, `<span>` bosilganda uni `<input>`ga almashtirib, `blur` yoki `Enter` bosilganda qayta `<span>`ga qaytarish mumkin. Bu — o'quvchilar uchun keyingi bosqich sifatida taklif qilinadi (17-bo'limga qarang).

---

## 12. Filterlash: Barchasi / Faol / Bajarilgan

Filter tugmalari bosilganda, `currentFilter` o'zgaruvchisini yangilaymiz va `renderTodos()` ni qayta chaqiramiz.

```javascript
filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Barcha tugmalardan "active" klassini olib tashlaymiz
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Bosilgan tugmaga "active" klassini qo'shamiz
    button.classList.add("active");

    currentFilter = button.dataset.filter; // "all" | "active" | "completed"
    renderTodos();
  });
});
```

Vazifalarni filterlash uchun alohida funksiya yozamiz — bu funksiyani biz `renderTodos()` ichida chaqirgan edik (7-bo'limga qarang):

```javascript
function getFilteredTodos() {
  if (currentFilter === "active") {
    return todos.filter((t) => !t.completed);
  }
  if (currentFilter === "completed") {
    return todos.filter((t) => t.completed);
  }
  return todos; // 'all' holati — barcha vazifalar
}
```

---

## 13. Qolgan vazifalar sonini ko'rsatish

Har safar `renderTodos()` chaqirilganda, bajarilmagan vazifalar sonini hisoblab, pastki qismga chiqaramiz.

```javascript
function updateItemsLeft() {
  const activeCount = todos.filter((t) => !t.completed).length;
  const word = activeCount === 1 ? "ta vazifa" : "ta vazifa";
  itemsLeftText.textContent = `${activeCount} ${word} qoldi`;
}
```

---

## 14. Bajarilgan vazifalarni tozalash

"Clear completed" tugmasi bosilganda, `completed: true` bo'lgan barcha vazifalarni massivdan olib tashlaymiz.

```javascript
clearCompletedBtn.addEventListener("click", function () {
  todos = todos.filter((t) => !t.completed);
  saveTodos();
  renderTodos();
});
```

---

## 15. Event Delegation nima va nima uchun kerak

Bu — loyihaning eng muhim texnik tushunchalaridan biri. Muammo shundaki: biz har bir `<li>` ni **dinamik ravishda** (`renderTodos()` ichida) yaratamiz. Agar checkbox, edit va delete tugmalariga alohida-alohida `addEventListener` qo'ysak, ular faqat o'sha paytda mavjud bo'lgan elementlarga bog'lanadi. Vazifa o'chirilib, ro'yxat qayta chizilganda, yangi yaratilgan elementlarga hodisa **bog'lanmagan** bo'ladi.

**Yechim — Event Delegation:** Hodisa tinglovchisini alohida elementlarga emas, balki ularning **doimiy ota-elementiga** (`todoList`, ya'ni `<ul>`) qo'yamiz. Chunki hodisalar "bubble" (pufakcha kabi yuqoriga ko'tarilish) tamoyiliga ko'ra ishlaydi — bolaga bosilgan click, avtomatik ravishda ota-elementga ham "eshitiladi".

```javascript
todoList.addEventListener("click", function (event) {
  const li = event.target.closest("li"); // bosilgan joydan eng yaqin <li>ni topamiz
  if (!li) return; // agar <li> tashqarisiga bosilgan bo'lsa, chiqamiz

  const id = Number(li.dataset.id); // dataset'dan id'ni olib, raqamga aylantiramiz

  if (event.target.classList.contains("toggle-checkbox")) {
    toggleComplete(id);
  }

  if (event.target.classList.contains("delete-btn")) {
    deleteTodo(id);
  }

  if (event.target.classList.contains("edit-btn")) {
    editTodo(id);
  }
});
```

**Bu yerda ishlatilgan muhim metodlar:**

- `event.target` — aynan qaysi elementga bosilganini ko'rsatadi (checkbox, tugma yoki span bo'lishi mumkin).
- `closest('li')` — bosilgan elementdan boshlab, yuqoriga qarab eng yaqin `<li>` ota-elementini topadi. Bu bizga qaysi vazifaga tegishli ekanini aniqlashga yordam beradi.
- `dataset.id` — HTML'dagi `data-id` atributiga mos keladi (bizning holatda `li.dataset.id = todo.id` orqali `renderTodos()`da o'rnatilgan edi).

**Xulosa:** Event Delegation tufayli bizga har bir yangi `<li>` uchun alohida `addEventListener` yozish shart emas — bitta tinglovchi butun ro'yxat uchun ishlaydi, ro'yxat qanchalik o'zgarmasin.

---

## 16. To'liq tayyor kod (HTML + CSS + JS)

Quyida barcha bo'limlar birlashtirilgan, ishga tayyor `script.js` fayli keltirilgan (HTML va CSS yuqoridagi 2- va 3-bo'limlardagidek qoladi):

```javascript
// ==== DOM elementlarni tanlash ====
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterButtons = document.querySelectorAll(".filter-btn");
const itemsLeftText = document.getElementById("items-left");
const clearCompletedBtn = document.getElementById("clear-completed");

// ==== State (holat) ====
let todos = [];
let currentFilter = "all";

// ==== LocalStorage funksiyalari ====
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  const saved = localStorage.getItem("todos");
  todos = saved ? JSON.parse(saved) : [];
}

// ==== Filterlash ====
function getFilteredTodos() {
  if (currentFilter === "active") return todos.filter((t) => !t.completed);
  if (currentFilter === "completed") return todos.filter((t) => t.completed);
  return todos;
}

// ==== Render ====
function renderTodos() {
  todoList.innerHTML = "";
  const filteredTodos = getFilteredTodos();

  if (filteredTodos.length === 0) {
    todoList.innerHTML =
      '<li style="color:#999; text-align:center;">Vazifalar yo\'q</li>';
  }

  filteredTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    if (todo.completed) li.classList.add("completed");

    li.innerHTML = `
      <input type="checkbox" class="toggle-checkbox" ${todo.completed ? "checked" : ""}>
      <span>${todo.text}</span>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    `;

    todoList.appendChild(li);
  });

  updateItemsLeft();
}

function updateItemsLeft() {
  const activeCount = todos.filter((t) => !t.completed).length;
  itemsLeftText.textContent = `${activeCount} ta vazifa qoldi`;
}

// ==== CRUD funksiyalari ====
function addTodo(text) {
  todos.push({ id: Date.now(), text: text, completed: false });
  saveTodos();
  renderTodos();
}

function toggleComplete(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    renderTodos();
  }
}

function deleteTodo(id) {
  todos = todos.filter((t) => t.id !== id);
  saveTodos();
  renderTodos();
}

function editTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (!todo) return;

  const newText = prompt("Vazifani tahrirlang:", todo.text);
  if (newText === null || newText.trim() === "") return;

  todo.text = newText.trim();
  saveTodos();
  renderTodos();
}

// ==== Event listenerlar ====
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const text = todoInput.value.trim();
  if (text === "") return;

  addTodo(text);
  todoInput.value = "";
  todoInput.focus();
});

todoList.addEventListener("click", function (event) {
  const li = event.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);

  if (event.target.classList.contains("toggle-checkbox")) toggleComplete(id);
  if (event.target.classList.contains("delete-btn")) deleteTodo(id);
  if (event.target.classList.contains("edit-btn")) editTodo(id);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", function () {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderTodos();
  });
});

clearCompletedBtn.addEventListener("click", function () {
  todos = todos.filter((t) => !t.completed);
  saveTodos();
  renderTodos();
});

// ==== Ilovani ishga tushirish ====
loadTodos();
renderTodos();
```

**Diqqat qiling:** eng oxirida `loadTodos()` va `renderTodos()` chaqirilyapti — bu sahifa birinchi ochilganda, avval saqlangan vazifalarni yuklab, ularni ekranga chiqarib beradi.

---

## 17. O'quvchilar uchun qo'shimcha mashqlar

Ushbu asosiy loyiha tayyor bo'lgach, o'quvchilarga mustaqil bajarish uchun quyidagi qo'shimcha vazifalarni berish mumkin — bu ularga mavzuni chuqurroq mustahkamlashga yordam beradi:

1. **Inline edit** — `prompt()` o'rniga, span bosilganda uni to'g'ridan-to'g'ri `<input>` ga aylantirib tahrirlash.
2. **Drag & Drop bilan tartiblash** — vazifalarni sichqoncha bilan sudrab, tartibini o'zgartirish (`dragstart`, `dragover`, `drop` hodisalari).
3. **Muddat (deadline) qo'shish** — har bir vazifaga sana/vaqt biriktirish va muddati o'tganlarni qizil rangda ko'rsatish.
4. **Ustuvorlik darajasi** — vazifalarga "Past / O'rta / Yuqori" darajasini belgilash va shu bo'yicha saralash.
5. **Qidiruv paneli** — inputga yozilgan matn asosida ro'yxatni real vaqtda filterlash (`input` hodisasi orqali).
6. **Bir nechta vazifani belgilash** — "Barchasini bajarilgan deb belgilash" tugmasi qo'shish.
7. **Animatsiya** — vazifa qo'shilganda yoki o'chirilganda CSS `transition` orqali yumshoq effekt qo'shish.
8. **Xatolarni tekshirish (validatsiya)** — bir xil matnli vazifa qayta qo'shilishini oldini olish.

---

## Xulosa

Ushbu loyiha orqali o'quvchilar quyidagi asosiy tushunchalarni amalda mustahkamlaydilar:

- **State (holat) — UI'dan ustun turadi**: har doim avval massivni o'zgartiramiz, keyin ekranni shunga moslab qayta chizamiz.
- **Massiv metodlari**: `push`, `filter`, `find` — bu metodlarsiz zamonaviy JavaScript loyihasini tasavvur qilib bo'lmaydi.
- **Event Delegation** — dinamik yaratilgan elementlar bilan ishlashning to'g'ri va samarali usuli.
- **LocalStorage** — foydalanuvchi ma'lumotlarini brauzerda saqlab qolishning eng sodda yo'li.

Bu loyiha — React, Vue kabi freymvorklarni o'rganishdan oldin juda yaxshi tayyorgarlik bosqichi hisoblanadi, chunki "state o'zgardi → UI qayta chizildi" mantig'i aynan shu freymvorklarning asosiy tamoyilidir.
