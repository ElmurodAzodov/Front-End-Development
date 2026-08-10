# 🌳 **DOM — Document Object Model**

## 1. DOM nima?

**DOM (Document Object Model)** — brauzer HTML hujjatini JavaScript orqali boshqarish imkonini beradigan model.

Masalan, bizda:

```html
<body>
  <h1>Salom</h1>
  <p>JavaScript</p>
</body>
```

Brauzer HTML'ni o‘qib, uni daraxt ko‘rinishida tasavvur qiladi:

```text
Document
└── html
    ├── head
    └── body
        ├── h1
        │   └── "Salom"
        └── p
            └── "JavaScript"
```

Bu **DOM Tree** deyiladi.

JavaScript orqali biz:

- elementni topamiz;
- matnini o‘zgartiramiz;
- CSS class qo‘shamiz;
- atributlarini o‘zgartiramiz;
- yangi element yaratamiz;
- elementni o‘chiramiz;
- hodisalar (`click`, `input`...) bilan ishlaymiz.

---

# 2. 🔍 Elementlarni topish

DOM bilan ishlashning birinchi qadami — kerakli elementni **topib olish**.

## `getElementById()`

ID orqali **bitta element**ni oladi.

```html
<h1 id="title">Salom</h1>
```

```javascript
const title = document.getElementById("title");

console.log(title);
```

Natija:

```text
<h1 id="title">Salom</h1>
```

Keyin:

```javascript
title.textContent = "Salom, JavaScript!";
```

### Esda tuting:

```javascript
document.getElementById("title");
```

→ **bitta element**.

---

# 3. `querySelector()`

Eng ko‘p ishlatiladigan metodlardan biri.

CSS selector orqali elementni topadi.

```javascript
const title = document.querySelector("#title");
```

Class:

```javascript
const box = document.querySelector(".box");
```

Tag:

```javascript
const paragraph = document.querySelector("p");
```

Ichma-ich:

```javascript
const button = document.querySelector(".card button");
```

### Muhim:

`querySelector()` **birinchi mos kelgan elementni** qaytaradi.

```html
<p class="text">1</p>
<p class="text">2</p>
<p class="text">3</p>
```

```javascript
const text = document.querySelector(".text");

console.log(text);
```

Faqat:

```html
<p class="text">1</p>
```

olinadi.

---

# 4. `querySelectorAll()`

Barcha mos keladigan elementlarni oladi.

```javascript
const texts = document.querySelectorAll(".text");

console.log(texts);
```

Natija:

```text
NodeList(3)
```

U bilan:

```javascript
texts.forEach((text) => {
  console.log(text);
});
```

### Juda muhim farq:

```javascript
querySelector();
```

→ birinchi element

```javascript
querySelectorAll();
```

→ barcha elementlar

---

# 5. `getElementsByClassName()` va `getElementsByTagName()`

Bular ham bir nechta elementlarni oladi:

```javascript
document.getElementsByClassName("text");
```

```javascript
document.getElementsByTagName("p");
```

Ularning muhim xususiyati — **live collection**.

Ya'ni DOM o‘zgarsa, collection ham avtomatik yangilanadi.

Boshlang‘ich bosqichda o‘quvchiga shuni bilish kifoya:

> `getElementsByClassName()` va `getElementsByTagName()` → **HTMLCollection** qaytaradi va u live collection.

Amaliyotda esa ko‘pincha:

```javascript
querySelector();
querySelectorAll();
```

ishlatish qulayroq.

---

# 6. 🔄 DOM bo‘ylab yurish — Traversing

Elementni topganimizdan keyin uning:

- parent;
- child;
- sibling

elementlariga o'tishimiz mumkin.

Masalan:

```html
<div class="parent">
  <h2>Title</h2>
  <p>Text</p>
</div>
```

---

## Parent

```javascript
const title = document.querySelector("h2");

console.log(title.parentElement);
```

Natija:

```html
<div class="parent"></div>
```

### `parentElement`

Elementning ota elementini beradi.

---

## Children

```javascript
const parent = document.querySelector(".parent");

console.log(parent.children);
```

Natija:

```text
HTMLCollection(2)
```

Unda:

```html
<h2>Title</h2>
<p>Text</p>
```

bo‘ladi.

### `children`

→ faqat **HTML elementlar**ni beradi.

---

## `childNodes`

```javascript
parent.childNodes;
```

Bu esa:

- element;
- text;
- comment

kabi node'larni ham hisobga oladi.

Boshlang‘ich dars uchun asosiy qoida:

```javascript
children;
```

→ HTML elementlar.

```javascript
childNodes;
```

→ barcha node'lar.

---

# 7. Sibling elementlar

Bir xil parent ichidagi elementlar **sibling** deyiladi.

```html
<div>
  <h2>Title</h2>
  <p>Text</p>
  <button>Click</button>
</div>
```

`h2`ning keyingi elementi:

```javascript
h2.nextElementSibling;
```

→ `<p>`

`p`ning keyingi elementi:

```javascript
p.nextElementSibling;
```

→ `<button>`

Oldingi:

```javascript
button.previousElementSibling;
```

→ `<p>`

---

# 8. Birinchi va oxirgi child

```javascript
parent.firstElementChild;
```

→ birinchi HTML element.

```javascript
parent.lastElementChild;
```

→ oxirgi HTML element.

Masalan:

```html
<div>
  <h2>Title</h2>
  <p>Text</p>
  <button>Click</button>
</div>
```

```javascript
parent.firstElementChild;
```

→ `<h2>`

```javascript
parent.lastElementChild;
```

→ `<button>`

---

# 9. 📝 Element ichidagi matnni o‘zgartirish

DOM bilan ishlashda juda muhim mavzu.

## `textContent`

```javascript
const title = document.querySelector("h1");

title.textContent = "Yangi sarlavha";
```

HTML:

```html
<h1>Yangi sarlavha</h1>
```

### Nega `textContent` muhim?

U HTML kodini HTML sifatida ishlatmaydi.

```javascript
title.textContent = "<b>Salom</b>";
```

Brauzer buni matn sifatida ko‘rsatadi:

```text
<b>Salom</b>
```

Shuning uchun foydalanuvchi ma'lumotlari bilan ishlaganda **xavfsizroq**.

---

# 10. `innerHTML`

HTML ichiga HTML yozish imkonini beradi.

```javascript
title.innerHTML = "<strong>Salom</strong>";
```

Natija:

```html
<h1>
  <strong>Salom</strong>
</h1>
```

Bu juda qulay.

Lekin:

> ⚠️ Ishonchsiz foydalanuvchi ma'lumotlarini `innerHTML` orqali to‘g‘ridan-to‘g‘ri joylashtirish xavfli.

Masalan:

```javascript
element.innerHTML = userInput;
```

bunday koddan ehtiyot bo‘lish kerak.

---

# 11. `innerText`

```javascript
element.innerText;
```

Matnni foydalanuvchi ekranda qanday ko‘rayotganiga yaqin tarzda boshqaradi va CSS ko‘rinishiga ta'sirchan.

Boshlang‘ich darajada:

| Property      | Vazifasi                        |
| ------------- | ------------------------------- |
| `textContent` | Matn bilan ishlash              |
| `innerHTML`   | HTML bilan ishlash              |
| `innerText`   | Ko‘rinadigan matn bilan ishlash |

### O‘quvchiga asosiy tavsiya:

> Oddiy matn → `textContent`
> HTML yaratish → `innerHTML`
> `innerText`ni esa alohida xususiyat sifatida bilib qo‘yish.

---

# 12. 🎨 Attribute bilan ishlash

HTML:

```html
<img id="image" src="old.jpg" alt="Rasm" />
```

Atributni olish:

```javascript
image.getAttribute("src");
```

Natija:

```text
old.jpg
```

---

## `setAttribute()`

```javascript
image.setAttribute("src", "new.jpg");
```

HTML:

```html
<img src="new.jpg" />
```

---

## `removeAttribute()`

```javascript
image.removeAttribute("alt");
```

---

## `hasAttribute()`

Atribut mavjudligini tekshiradi:

```javascript
image.hasAttribute("src");
```

Natija:

```text
true
```

---

# 13. 🎭 `classList`

JavaScript orqali CSS classlarni boshqarishning eng muhim usullaridan biri.

```html
<div class="box"></div>
```

## `add()`

```javascript
box.classList.add("active");
```

Natija:

```html
<div class="box active"></div>
```

---

## `remove()`

```javascript
box.classList.remove("active");
```

---

## `toggle()`

Bor bo‘lsa olib tashlaydi, yo‘q bo‘lsa qo‘shadi.

```javascript
box.classList.toggle("active");
```

Bu ayniqsa:

- menu;
- modal;
- dark mode;
- accordion

kabi narsalarda juda ko‘p ishlatiladi.

---

## `contains()`

Class borligini tekshiradi:

```javascript
box.classList.contains("active");
```

→ `true` yoki `false`.

---

## `replace()`

```javascript
box.classList.replace("old", "new");
```

---

# 14. `data-*` va `dataset`

HTML'da o‘zimizga kerakli ma'lumotni saqlashimiz mumkin.

```html
<button data-id="25" data-name="phone">Sotib olish</button>
```

JavaScript:

```javascript
const button = document.querySelector("button");

console.log(button.dataset.id);
```

Natija:

```text
25
```

```javascript
console.log(button.dataset.name);
```

Natija:

```text
phone
```

### Qoida:

```html
data-product-id
```

JavaScript'da:

```javascript
element.dataset.productId;
```

Bu katta loyihalarda juda foydali.

---

# 15. 🎨 Style bilan ishlash

Elementning inline CSS'ini JavaScript orqali o‘zgartirish:

```javascript
box.style.color = "red";
box.style.backgroundColor = "black";
box.style.fontSize = "20px";
```

HTML'da:

```html
<div style="color: red; background-color: black;"></div>
```

### Muhim:

JavaScript'da CSS:

```css
background-color
```

emas:

```javascript
backgroundColor;
```

bo‘ladi.

---

# 16. `getComputedStyle()`

Elementga **haqiqatan qanday CSS qo‘llanganini** olish uchun ishlatiladi.

```javascript
const styles = getComputedStyle(box);

console.log(styles.color);
console.log(styles.width);
```

Bu `style`dan farq qiladi.

```javascript
box.style.color;
```

→ inline style.

```javascript
getComputedStyle(box).color;
```

→ brauzer hisoblab chiqqan yakuniy CSS qiymati.

---

# 17. CSS Custom Properties

CSS:

```css
:root {
  --main-color: blue;
}
```

JavaScript:

```javascript
document.documentElement.style.setProperty("--main-color", "red");
```

Bu:

- theme;
- dark/light mode;
- dynamic colors

uchun juda foydali.

---

# 18. 🏗️ Yangi element yaratish

Eng muhim metod:

```javascript
document.createElement();
```

Masalan:

```javascript
const p = document.createElement("p");
```

Endi `p` yaratildi, lekin hali sahifaga qo‘shilmadi.

Matn beramiz:

```javascript
p.textContent = "Salom JavaScript!";
```

Keyin sahifaga qo‘shamiz:

```javascript
document.body.append(p);
```

---

# 19. `append()`

```javascript
parent.append(child);
```

Masalan:

```javascript
const li = document.createElement("li");

li.textContent = "JavaScript";

list.append(li);
```

---

# 20. `prepend()`

Elementni parentning **boshiga** qo‘shadi.

```javascript
list.prepend(li);
```

---

# 21. `append()` va `appendChild()`

Ikkalasi o‘xshash.

```javascript
parent.append(child);
```

```javascript
parent.appendChild(child);
```

`append()` zamonaviyroq va qulayroq.

Masalan, `append()` bilan text ham qo‘shish mumkin:

```javascript
parent.append("Salom");
```

---

# 22. Elementni o‘chirish

Eng oson usul:

```javascript
element.remove();
```

Masalan:

```javascript
const button = document.querySelector("button");

button.remove();
```

Element DOM'dan olib tashlanadi.

---

# 23. `insertAdjacentHTML()`

HTML'ni mavjud elementning ma'lum joyiga qo‘shadi.

```javascript
element.insertAdjacentHTML("beforeend", "<p>Salom</p>");
```

Asosiy pozitsiyalar:

```text
beforebegin
afterbegin
beforeend
afterend
```

Eng ko‘p ishlatiladigani:

```javascript
"beforeend";
```

Bu elementning ichiga, oxiriga qo‘shadi.

---

# 24. `innerHTML` vs `insertAdjacentHTML`

Masalan:

```javascript
list.innerHTML += "<li>JavaScript</li>";
```

va:

```javascript
list.insertAdjacentHTML("beforeend", "<li>JavaScript</li>");
```

Ikkinchi usul mavjud DOM elementlarini qayta yaratib yubormasdan HTML qo‘shish uchun qulayroq.

Lekin ikkalasida ham HTML string ishlatilgani uchun **ishonchsiz user input** bilan ehtiyot bo‘lish kerak.

---

# 25. `cloneNode()`

Elementdan nusxa olish:

```javascript
const copy = element.cloneNode(true);
```

`true` → ichidagi child elementlar ham ko‘chiriladi.

```javascript
const copy = element.cloneNode(false);
```

→ faqat elementning o‘zi.

---

# 26. 📦 DocumentFragment

Ko‘p element yaratishda foydali.

Masalan, 1000 ta `<li>` yaratmoqchimiz:

```javascript
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {
  const li = document.createElement("li");

  li.textContent = `Item ${i}`;

  fragment.append(li);
}

list.append(fragment);
```

Bu yerda:

```text
1000 ta element
      ↓
DocumentFragment
      ↓
DOM'ga bir marta qo'shish
```

Katta hajmdagi DOM operatsiyalarida performance uchun foydali.

---

# 27. `createTextNode()`

Oddiy text node yaratadi:

```javascript
const text = document.createTextNode("Salom!");

element.append(text);
```

Ammo kundalik kodda ko‘pincha:

```javascript
element.textContent = "Salom!";
```

yetarli bo‘ladi.

Shuning uchun bu metodni chuqur o‘rganish shart emas.

---

# 28. `insertBefore()`

Elementni ma'lum child'dan oldin qo‘shadi.

```javascript
parent.insertBefore(newElement, oldElement);
```

Masalan:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
```

JavaScript:

```javascript
list.insertBefore(newLi, list.children[1]);
```

Natija:

```html
<ul>
  <li>HTML</li>
  <li>JavaScript</li>
  <li>CSS</li>
</ul>
```

---

# 29. `replaceChildren()`

Parent ichidagi barcha child'larni almashtiradi.

```javascript
list.replaceChildren(newElement);
```

Eski childlar o‘chadi va yangi element qo‘yiladi.

---

# 30. `replaceChild()`

Eski child'ni yangi child bilan almashtiradi.

```javascript
parent.replaceChild(newElement, oldElement);
```

Bu metodni bilish foydali, lekin zamonaviy kodda ko‘pincha:

```javascript
oldElement.replaceWith(newElement);
```

kabi usullar qulayroq.

---

# 🎯 O‘quvchilar uchun eng muhimlari

Men bu mavzuni darsda **hammasini bir xil darajada bermas edim**.

### ⭐⭐⭐ Eng muhim:

```javascript
document.querySelector();
document.querySelectorAll();

element.parentElement;
element.children;
element.nextElementSibling;
element.previousElementSibling;

element.textContent;
element.innerHTML;

element.getAttribute();
element.setAttribute();

element.classList.add();
element.classList.remove();
element.classList.toggle();
element.classList.contains();

element.dataset;

element.style;

document.createElement();

parent.append();
parent.prepend();

element.remove();
```

### ⭐⭐ Keyingi bosqich:

```javascript
getElementById();

getElementsByClassName();
getElementsByTagName();

firstElementChild;
lastElementChild;

getComputedStyle();

insertAdjacentHTML();
insertAdjacentElement();

cloneNode();

replaceChildren();
```

### ⭐ Advanced / keyinroq:

```javascript
DocumentFragment;
createTextNode();
insertBefore();
replaceChild();
childNodes;
parentNode;
```

---

# 🧠 O‘quvchiga beriladigan asosiy mental model

DOM mavzusini shunday **5 bosqichli formula** sifatida yodlatish juda yaxshi:

```text
1. TOPISH
   ↓
querySelector()

2. O‘QISH / O‘ZGARTIRISH
   ↓
textContent
classList
style
attributes

3. YARATISH
   ↓
createElement()

4. SAHIFAGA QO‘SHISH
   ↓
append()
prepend()

5. O‘CHIRISH
   ↓
remove()
```

Masalan, oddiy Todo List:

```javascript
const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  const li = document.createElement("li");

  li.textContent = input.value;

  list.append(li);

  input.value = "";
});
```

Bu **DOM'ning asl mohiyatini** juda yaxshi ko‘rsatadi:

```text
HTML
 ↓
Elementni topish
 ↓
createElement()
 ↓
textContent
 ↓
append()
 ↓
DOM yangilandi
```