# Document Object Model (DOM) va Events — To'liq Qo'llanma

---

# 1-QISM: DOM (Document Object Model)

## 🌳 1.1 DOM Tree Structure (DOM Daraxt Tuzilishi)

DOM — bu HTML hujjatning brauzer xotirasidagi obyektlar daraxti ko'rinishidagi tasviri. JavaScript shu daraxt orqali HTML elementlarini o'qiy, o'zgartira va boshqara oladi.

```
document
 └── html
      ├── head
      │    ├── title
      │    └── meta
      └── body
           ├── header
           ├── main
           │    ├── div.card
           │    └── div.card
           └── footer
```

- **Document** — butun HTML sahifaning ildiz obyekti (`document`)
- **Element node** — HTML teglar (`<div>`, `<p>`, `<a>` va h.k.)
- **Text node** — elementlar ichidagi matn
- **Comment node** — HTML izohlar (`<!-- ... -->`)

### 🔹 Node turlari va xususiyatlari

Har bir DOM elementi "node" (tugun) hisoblanadi va quyidagi umumiy xususiyatlarga ega:

```javascript
const el = document.querySelector("div");

el.nodeType;   // Node turi (raqam ko'rinishida)
el.nodeName;   // Element nomi: "DIV", "#text", "#comment"
el.nodeValue;  // Faqat text/comment node uchun qiymat qaytaradi
```

**Asosiy nodeType qiymatlari:**

| Konstanta | Qiymat | Tavsif |
|---|---|---|
| `Node.ELEMENT_NODE` | 1 | HTML element (`<div>`, `<p>` va h.k.) |
| `Node.TEXT_NODE` | 3 | Matn tuguni |
| `Node.COMMENT_NODE` | 8 | Izoh (`<!-- -->`) |
| `Node.DOCUMENT_NODE` | 9 | `document` obyektining o'zi |

```javascript
if (el.nodeType === Node.ELEMENT_NODE) {
  console.log("Bu HTML element");
}
```

### 🔹 Document obyektining asosiy xususiyatlari

```javascript
document.documentElement;  // <html> elementi
document.head;              // <head> elementi
document.body;               // <body> elementi
document.title;              // Sahifa sarlavhasi (o'qish/yozish mumkin)
document.URL;                 // Joriy sahifa manzili
document.domain;             // Domen nomi
document.readyState;        // "loading" | "interactive" | "complete"
```

---

## 🔍 1.2 Elementlarni Tanlash (Selecting Elements)

### `getElementById()`

Faqat bitta elementni, uning `id` atributi bo'yicha qaytaradi.

```javascript
const container = document.getElementById("container");
```

- Eng tez ishlaydigan metod (browser ichki optimallashtirilgan)
- Qiymat topilmasa `null` qaytaradi
- `#` belgisiz, faqat id nomini yozish kerak

### `getElementsByClassName()`, `getElementsByTagName()` — Live Collections

```javascript
const items = document.getElementsByClassName("item");   // HTMLCollection
const paragraphs = document.getElementsByTagName("p");    // HTMLCollection
```

⚠️ **Muhim:** Bu metodlar **live (jonli) HTMLCollection** qaytaradi — ya'ni DOM o'zgarsa, collection ham avtomatik yangilanadi.

```javascript
const items = document.getElementsByClassName("item");
console.log(items.length); // masalan, 3

document.body.appendChild(document.createElement("div")).className = "item";
console.log(items.length); // avtomatik 4 ga o'zgaradi!
```

### `querySelector()` — Birinchi mosini topadi

CSS selector sintaksisidan foydalanadi, birinchi topilgan elementni qaytaradi.

```javascript
document.querySelector(".card");           // klass bo'yicha
document.querySelector("#header");          // id bo'yicha
document.querySelector("div > p.text");     // murakkab selector
document.querySelector("[data-id='5']");    // atribut bo'yicha
```

### `querySelectorAll()` — Barcha moslarni topadi (Static NodeList)

```javascript
const cards = document.querySelectorAll(".card");
cards.forEach(card => console.log(card)); // to'g'ridan-to'g'ri forEach ishlaydi
```

⚠️ **Muhim:** `querySelectorAll` **static (statik) NodeList** qaytaradi — DOM o'zgarsa ham, natija o'zgarmaydi (yangi elementlar avtomatik qo'shilmaydi).

### 📊 Taqqoslash jadvali

| Metod | Qaytaradigan tur | Live/Static | forEach ishlaydimi |
|---|---|---|---|
| `getElementById` | Element yoki `null` | — | — |
| `getElementsByClassName` | HTMLCollection | Live | Yo'q (Array.from kerak) |
| `getElementsByTagName` | HTMLCollection | Live | Yo'q |
| `querySelector` | Element yoki `null` | — | — |
| `querySelectorAll` | NodeList | Static | Ha |

---

## 🔄 1.3 DOM bo'ylab Harakatlanish (Traversing DOM)

### Ota-element (Parent)

```javascript
element.parentElement;  // Ota HTML elementi (yoki null)
element.parentNode;     // Ota node (element, document va h.k. bo'lishi mumkin)
```

### Bola-elementlar (Children)

```javascript
element.children;       // Faqat HTML elementlar (HTMLCollection)
element.childNodes;     // Barcha node turlari, jumladan text va comment (NodeList)
```

```javascript
const div = document.querySelector("div");
console.log(div.children.length);    // faqat elementlar soni
console.log(div.childNodes.length);  // matn tugunlari bilan birga
```

### Qo'shni elementlar (Siblings)

```javascript
element.nextElementSibling;      // Keyingi element
element.previousElementSibling;  // Oldingi element
element.nextSibling;              // Keyingi node (text bo'lishi mumkin)
element.previousSibling;          // Oldingi node
```

### Birinchi/oxirgi bola

```javascript
element.firstElementChild;   // Birinchi HTML bola-element
element.lastElementChild;    // Oxirgi HTML bola-element
element.firstChild;           // Birinchi node (text bo'lishi mumkin)
element.lastChild;            // Oxirgi node
```

### `closest()` — Yuqoriga qarab qidirish

Elementdan boshlab, ota-elementlar zanjiri bo'ylab yuqoriga qarab, berilgan selectorga mos keluvchi birinchi elementni topadi (o'zini ham tekshiradi).

```javascript
// HTML: <div class="card"><button class="btn">Bosing</button></div>

const btn = document.querySelector(".btn");
const card = btn.closest(".card"); // eng yaqin .card ota-elementini topadi
```

Bu ayniqsa **event delegation**da juda qo'l keladi.

### `matches()` — Selectorga mosligini tekshirish

```javascript
if (element.matches(".active")) {
  console.log("Element .active klassiga ega");
}
```

### `contains()` — Ichida bor-yo'qligini tekshirish

```javascript
const parent = document.querySelector(".container");
const child = document.querySelector(".item");

parent.contains(child); // true yoki false
```

---

## 📝 1.4 Kontentni O'zgartirish (Manipulating Content)

### `textContent` — Xavfsiz va tez

Elementning **barcha** matnini (yashirin elementlar ichidagisini ham) qaytaradi/o'rnatadi. HTML teglarni tahlil qilmaydi (xavfsiz).

```javascript
element.textContent = "Yangi matn";
console.log(element.textContent);
```

### `innerHTML` — Foydalanuvchi kiritgan ma'lumot bo'lsa xavfli

HTML kodini matn sifatida o'rnatadi va brauzer uni tahlil qilib render qiladi.

```javascript
element.innerHTML = "<strong>Qalin matn</strong>";
```

⚠️ **XSS xavfsizligi:** Agar foydalanuvchi kiritgan ma'lumotni to'g'ridan-to'g'ri `innerHTML` orqali qo'ysangiz, zararli skript kiritish (XSS hujumi) mumkin bo'ladi.

```javascript
// XAVFLI — hech qachon shunday qilmang:
element.innerHTML = userInput; // agar userInput = "<img src=x onerror=alert(1)>"

// XAVFSIZ:
element.textContent = userInput;
```

### `innerText` — Stilni hisobga oladi

`display: none` bilan yashirilgan matnni qaytarmaydi, CSS stillarni (masalan, `text-transform`) hisobga oladi. `textContent`ga qaraganda sekinroq, chunki layout hisoblashni talab qiladi (reflow).

### 📊 Taqqoslash jadvali

| Xususiyat | HTML tahlil qiladi | Yashirin matn | Tezlik | Xavfsizlik |
|---|---|---|---|---|
| `textContent` | Yo'q | Ko'rsatadi | Tez | Xavfsiz |
| `innerHTML` | Ha | Ko'rsatadi | O'rtacha | Xavfli (XSS) |
| `innerText` | Yo'q | Ko'rsatmaydi | Sekin | Xavfsiz |

### `outerHTML`

Elementning o'zini ham (o'z tegi bilan birga) HTML matn ko'rinishida qaytaradi/o'rnatadi.

```javascript
const div = document.querySelector("div");
console.log(div.outerHTML); // "<div class="box">Matn</div>"

div.outerHTML = "<section>Yangi element</section>"; // divni butunlay almashtiradi
```

---

## 🎨 1.5 Atributlarni Boshqarish (Manipulating Attributes)

### Umumiy atribut metodlari

```javascript
element.getAttribute("href");            // qiymatni olish
element.setAttribute("href", "/home");   // qiymat o'rnatish
element.removeAttribute("disabled");     // atributni o'chirish
element.hasAttribute("required");        // bor-yo'qligini tekshirish (true/false)
```

### `classList` — Klasslar bilan ishlash

```javascript
element.classList.add("active");             // klass qo'shish
element.classList.remove("hidden");           // klassni o'chirish
element.classList.toggle("open");              // bor bo'lsa o'chiradi, yo'q bo'lsa qo'shadi
element.classList.contains("active");         // bor-yo'qligini tekshirish
element.classList.replace("old", "new");      // bir klassni boshqasiga almashtirish
```

```javascript
// toggle() ikkinchi argument bilan — shart asosida qo'shish/o'chirish
element.classList.toggle("active", isLoggedIn); // isLoggedIn true bo'lsa qo'shadi, false bo'lsa o'chiradi
```

### Dataset — `data-*` atributlar

HTML dagi `data-*` atributlar JavaScriptda `element.dataset` orqali kirish mumkin (camelCase formatida).

```html
<div id="card" data-user-id="42" data-role="admin"></div>
```

```javascript
const card = document.getElementById("card");

console.log(card.dataset.userId); // "42"
console.log(card.dataset.role);   // "admin"

card.dataset.status = "active";   // yangi data-status="active" atributi qo'shiladi
```

---

## 🎭 1.6 Stillarni Boshqarish (Manipulating Styles)

### `style` property — Inline stillar

```javascript
element.style.color = "red";
element.style.backgroundColor = "black";  // CSS: background-color → camelCase
element.style.display = "none";
```

⚠️ Bu faqat **inline style** (`style=""` atributi) bilan ishlaydi, CSS fayldagi yoki `<style>` tegidagi qoidalarni ko'rsatmaydi.

### `getComputedStyle()` — Haqiqiy hisoblangan stilni olish

CSS fayldan, brauzer standart stillaridan va inline stildan kelib chiqib, elementning **haqiqiy qo'llanilayotgan** qiymatini qaytaradi.

```javascript
const styles = window.getComputedStyle(element);
console.log(styles.color);        // masalan, "rgb(255, 0, 0)"
console.log(styles.fontSize);     // masalan, "16px"
```

### CSS Custom Properties (`--o'zgaruvchilar`) bilan ishlash

```javascript
// O'rnatish
element.style.setProperty("--main-color", "blue");

// O'qish
const value = getComputedStyle(element).getPropertyValue("--main-color");
```

```css
.box {
  background-color: var(--main-color);
}
```

---

## 🏗️ 1.7 Elementlarni Yaratish va O'chirish

### Yaratish

```javascript
const div = document.createElement("div");     // yangi element yaratish
const text = document.createTextNode("Salom"); // matn tuguni yaratish

div.appendChild(text);
```

### Qo'shish metodlari

```javascript
parent.append(child);         // oxiriga qo'shadi, bir nechta node/matn qabul qiladi
parent.appendChild(child);    // oxiriga qo'shadi, faqat bitta Node obyekti
parent.prepend(child);        // boshiga qo'shadi
```

```javascript
parent.insertBefore(newNode, referenceNode); // referenceNode oldiga qo'yadi

element.insertAdjacentElement("beforebegin", newEl); // element oldidan
element.insertAdjacentElement("afterbegin", newEl);  // element ichi, boshidan
element.insertAdjacentElement("beforeend", newEl);   // element ichi, oxiridan
element.insertAdjacentElement("afterend", newEl);    // elementdan keyin

element.insertAdjacentHTML("beforeend", "<p>Yangi paragraf</p>"); // HTML matn sifatida qo'shish
```

**`insertAdjacentElement`/`insertAdjacentHTML` pozitsiyalari sxemasi:**

```
<!-- beforebegin -->
<div>
  <!-- afterbegin -->
  Mavjud kontent
  <!-- beforeend -->
</div>
<!-- afterend -->
```

### Almashtirish

```javascript
parent.replaceChild(newChild, oldChild);   // eski bolani yangisiga almashtirish
parent.replaceChildren(newChild1, newChild2); // barcha bolalarni yangilari bilan almashtirish
```

### O'chirish

```javascript
element.remove();                  // elementning o'zi o'chadi (zamonaviy, tavsiya etiladi)
parent.removeChild(childElement);  // eski uslub, ota-elementdan chaqiriladi
```

### Nusxa olish

```javascript
const clone = element.cloneNode(false); // faqat elementning o'zi, bolalarsiz
const deepClone = element.cloneNode(true); // element + barcha ichki bolalari
```

---

## 📦 1.8 DocumentFragment — Ko'p Operatsiyalar uchun Optimallashtirish

Ko'p sonli elementlarni birma-bir DOMga qo'shish har safar "reflow/repaint" ni ishga tushiradi va sekinlashtiradi. `DocumentFragment` — bu vaqtinchalik, ko'rinmas konteyner: elementlarni avval unga qo'shib, keyin **bir marta** haqiqiy DOMga joylashtirish mumkin.

```javascript
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `Element ${i}`;
  fragment.appendChild(li); // DOMga emas, fragmentga qo'shiladi
}

document.querySelector("ul").appendChild(fragment); // faqat bitta marta DOM yangilanadi
```

✅ Natija: 1000 marta DOM yangilanish o'rniga — **1 marta**. Katta ro'yxatlar, jadval qatorlari yasashda foydali.

---

## 🌐 1.9 `innerHTML` vs `insertAdjacentHTML` vs `DocumentFragment`

| Usul | Butun kontentni qayta chizadimi | Tezlik | Xavfsizlik |
|---|---|---|---|
| `innerHTML +=` | Ha, hammasini qayta render qiladi (sekin) | Sekin (katta hajmda) | Xavfli (XSS) |
| `insertAdjacentHTML` | Yo'q, faqat yangi qismni qo'shadi | Tezroq | Xavfli (XSS) |
| `DocumentFragment` | Yo'q | Eng tez | Xavfsiz (createElement bilan) |

⚠️ `element.innerHTML += "<li>Yangi</li>"` katta xato hisoblanadi, chunki bu butun ichki kontentni yo'q qilib, qaytadan yaratadi — bu vaqt va xotira sarflaydi, hamda mavjud event listenerlarni yo'qotadi.

---

## 📐 1.10 O'lcham va Pozitsiyani Aniqlash

### `getBoundingClientRect()`

Elementning brauzer oynasiga nisbatan pozitsiyasi va o'lchamlarini qaytaradi.

```javascript
const rect = element.getBoundingClientRect();

console.log(rect.top, rect.left, rect.right, rect.bottom);
console.log(rect.width, rect.height);
```

Ko'p ishlatiladi: scroll-animatsiyalar, tooltip pozitsiyasini hisoblash, elementning ekranda ko'rinib-ko'rinmasligini tekshirish uchun.

### Kenglik/balandlik va scroll xususiyatlari

```javascript
element.offsetWidth;   // element kengligi + padding + border (ko'rinadigan)
element.offsetHeight;  // element balandligi + padding + border

element.clientWidth;    // element kengligi + padding (border va scrollbar'siz)
element.clientHeight;   // element balandligi + padding

element.scrollWidth;    // butun kontentning kengligi (overflow bilan birga)
element.scrollHeight;   // butun kontentning balandligi
```

### Scroll qilish metodlari

```javascript
element.scrollIntoView();                         // elementga scroll qilib boradi
element.scrollIntoView({ behavior: "smooth" });    // silliq animatsiya bilan

window.scrollTo(0, 500);                            // aniq koordinataga scroll
window.scrollTo({ top: 500, behavior: "smooth" });

window.scrollBy(0, 100); // joriy pozitsiyadan nisbiy scroll
```

---

## 👁️ 1.11 Zamonaviy Observer API'lar

### `MutationObserver` — DOM o'zgarishlarini kuzatish

DOM daraxtida biror element, atribut yoki matn o'zgarganda avtomatik xabar beradi.

```javascript
const target = document.querySelector("#container");

const observer = new MutationObserver((mutations) => {
  mutations.forEach(mutation => {
    console.log("O'zgarish turi:", mutation.type); // "childList", "attributes", "characterData"
  });
});

observer.observe(target, {
  childList: true,   // bolalar qo'shilishi/o'chirilishini kuzatish
  attributes: true,  // atribut o'zgarishini kuzatish
  subtree: true      // ichki barcha darajalarni kuzatish
});

// Kuzatishni to'xtatish
observer.disconnect();
```

### `IntersectionObserver` — Ko'rinishni kuzatish

Element ekranda (yoki boshqa konteynerda) ko'rinib-ko'rinmasligini samarali tarzda kuzatadi. **Lazy loading** va **infinite scroll** uchun eng zamonaviy va samarali yechim.

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log("Element ko'rinmoqda!");
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.5 // element 50% ko'ringanda ishga tushadi
});

document.querySelectorAll(".lazy-image").forEach(img => observer.observe(img));
```

### `ResizeObserver` — O'lcham o'zgarishini kuzatish

```javascript
const resizeObserver = new ResizeObserver(entries => {
  entries.forEach(entry => {
    console.log("Yangi o'lcham:", entry.contentRect.width, entry.contentRect.height);
  });
});

resizeObserver.observe(document.querySelector(".box"));
```

---

## 📋 1.12 Formalar bilan ishlash

```javascript
const form = document.querySelector("form");

console.log(form.elements);          // formadagi barcha input elementlar
console.log(form.elements.username); // name="username" bo'lgan inputga to'g'ridan-to'g'ri kirish

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  console.log(formData.get("username"));

  for (const [key, value] of formData.entries()) {
    console.log(key, value);
  }
});
```

---

## 🧩 1.13 `<template>` elementi

`<template>` ichidagi kontent brauzer tomonidan render qilinmaydi, faqat JavaScript orqali nusxalab ishlatish uchun saqlanadi.

```html
<template id="card-template">
  <div class="card">
    <h3 class="title"></h3>
  </div>
</template>
```

```javascript
const template = document.getElementById("card-template");
const clone = template.content.cloneNode(true);
clone.querySelector(".title").textContent = "Yangi karta";
document.body.appendChild(clone);
```

---

# 2-QISM: Events (Hodisalar)

## 🖱️ 2.1 Event Turlari

### Mouse (sichqoncha) hodisalari

```javascript
element.addEventListener("click", handler);        // bosish
element.addEventListener("dblclick", handler);     // ikki marta bosish
element.addEventListener("mouseenter", handler);   // sichqoncha kirganda (bubbling yo'q)
element.addEventListener("mouseleave", handler);   // sichqoncha chiqqanda (bubbling yo'q)
element.addEventListener("mousemove", handler);    // sichqoncha harakatlanganda
element.addEventListener("contextmenu", handler);  // o'ng tugma bosilganda
```

### Klaviatura hodisalari

```javascript
element.addEventListener("keydown", handler); // tugma bosilganda (ushlab turilsa qayta-qayta)
element.addEventListener("keyup", handler);    // tugma qo'yib yuborilganda
```

### Forma hodisalari

```javascript
form.addEventListener("submit", handler);   // forma yuborilganda
input.addEventListener("change", handler);  // qiymat o'zgarib, fokusdan chiqqanda
input.addEventListener("input", handler);   // har bir belgi kiritilganda (real vaqtda)
input.addEventListener("focus", handler);   // elementga fokus tushganda
input.addEventListener("blur", handler);    // elementdan fokus ketganda
form.addEventListener("reset", handler);    // forma tozalanganda
```

### Window (oyna) hodisalari

```javascript
window.addEventListener("load", handler);              // barcha resurslar (rasm, css) yuklangach
document.addEventListener("DOMContentLoaded", handler); // faqat HTML yuklanib bo'lgach (tezroq)
window.addEventListener("resize", handler);              // oyna o'lchami o'zgarganda
window.addEventListener("scroll", handler);               // sahifa scroll qilinganda
window.addEventListener("beforeunload", handler);        // sahifa yopilishidan oldin
```

### Touch (teginish) hodisalari

```javascript
element.addEventListener("touchstart", handler);
element.addEventListener("touchmove", handler);
element.addEventListener("touchend", handler);
```

### Drag & Drop hodisalari

```javascript
element.addEventListener("dragstart", handler);
element.addEventListener("drag", handler);
element.addEventListener("dragend", handler);
dropZone.addEventListener("dragover", (e) => e.preventDefault()); // majburiy!
dropZone.addEventListener("drop", handler);
```

### Clipboard (buferga olish) hodisalari

```javascript
element.addEventListener("copy", handler);
element.addEventListener("cut", handler);
element.addEventListener("paste", handler);
```

### Pointer Events — Zamonaviy universal standart

Mouse va touch hodisalarini birlashtirgan zamonaviy standart. Turli qurilmalar (sichqoncha, barmoq, stilus) uchun bitta API.

```javascript
element.addEventListener("pointerdown", handler);
element.addEventListener("pointerup", handler);
element.addEventListener("pointermove", handler);
```

### Boshqa foydali hodisalar

```javascript
element.addEventListener("transitionend", handler); // CSS transition tugaganda
element.addEventListener("animationend", handler);  // CSS animation tugaganda

window.addEventListener("hashchange", handler);  // URL hash (#...) o'zgarganda
window.addEventListener("popstate", handler);    // brauzer tarixida orqaga/oldinga o'tilganda

document.addEventListener("visibilitychange", handler); // tab faol/nofaol bo'lganda

window.addEventListener("online", handler);   // internet ulanish tiklanganda
window.addEventListener("offline", handler);  // internet uzilganda
```

---

## 📝 2.2 Event Handlerlarni Belgilash Usullari

### 1. Inline HTML (tavsiya etilmaydi)

```html
<button onclick="handleClick()">Bosing</button>
```

❌ Kamchiliklari: HTML va JS aralashib ketadi, faqat bitta handler, xavfsizlik muammolari.

### 2. DOM property (bitta handler)

```javascript
element.onclick = function() {
  console.log("Bosildi");
};
```

⚠️ Muammo: bir xil eventga ikkinchi marta `onclick` yozsangiz, birinchisi **almashtiriladi** (faqat bitta funksiya saqlanadi).

### 3. `addEventListener()` — Tavsiya etiladi

```javascript
element.addEventListener("click", function() {
  console.log("Birinchi handler");
});

element.addEventListener("click", function() {
  console.log("Ikkinchi handler"); // ikkalasi ham ishlaydi!
});
```

✅ Afzalliklari: bitta eventga bir nechta handler qo'shish mumkin, `removeEventListener` bilan olib tashlash mumkin, options (`capture`, `once`, `passive`) qo'llab-quvvatlaydi.

### `removeEventListener()`

Faqat **aynan bir xil funksiya referensi** bilan chaqirilgandagina ishlaydi.

```javascript
function handleClick() {
  console.log("Bosildi");
}

element.addEventListener("click", handleClick);
element.removeEventListener("click", handleClick); // ishlaydi

// ANONIM FUNKSIYA BILAN ISHLAMAYDI:
element.addEventListener("click", () => console.log("Salom"));
element.removeEventListener("click", () => console.log("Salom")); // ISHLAMAYDI! (boshqa funksiya)
```

### `addEventListener()` uchun options obyekti

```javascript
element.addEventListener("click", handler, { once: true });    // faqat bir marta ishlaydi, keyin avtomatik o'chadi
element.addEventListener("scroll", handler, { passive: true }); // preventDefault chaqirilmasligini brauzerga aytadi (scroll tezligi oshadi)
element.addEventListener("click", handler, { capture: true });  // capturing bosqichida ishga tushadi
```

`{ passive: true }` — ayniqsa `scroll` va `touchmove` kabi tez-tez ishga tushuvchi hodisalarda sahifa tezligini sezilarli oshiradi, chunki brauzer `preventDefault()` chaqirilishini kutib o'tirmaydi.

---

## 🎯 2.3 Event Obyekti

Har bir handler funksiyaga avtomatik ravishda `event` obyekti uzatiladi.

```javascript
element.addEventListener("click", function(event) {
  console.log(event.type);          // "click"
  console.log(event.target);        // aslida bosilgan element
  console.log(event.currentTarget); // listener o'rnatilgan element
});
```

### `target` vs `currentTarget`

```html
<ul id="list">
  <li>1-band</li>
  <li>2-band</li>
</ul>
```

```javascript
document.getElementById("list").addEventListener("click", function(e) {
  console.log(e.target);        // <li> — aynan bosilgan element
  console.log(e.currentTarget); // <ul> — listener o'rnatilgan element
});
```

### `preventDefault()` — Standart harakatni to'xtatish

```javascript
form.addEventListener("submit", function(e) {
  e.preventDefault(); // sahifa qayta yuklanishining oldini oladi
});

link.addEventListener("click", function(e) {
  e.preventDefault(); // havolaga o'tishni to'xtatadi
});
```

### `stopPropagation()` va `stopImmediatePropagation()`

```javascript
child.addEventListener("click", function(e) {
  e.stopPropagation(); // eventning ota-elementlarga "ko'tarilishini" (bubbling) to'xtatadi
});
```

```javascript
element.addEventListener("click", function(e) {
  e.stopImmediatePropagation(); // shu elementdagi qolgan boshqa handlerlarni ham to'xtatadi
  console.log("Birinchi");
});

element.addEventListener("click", function() {
  console.log("Bu ishlamaydi"); // yuqoridagi stopImmediatePropagation tufayli
});
```

### Keyboard event xususiyatlari

```javascript
document.addEventListener("keydown", function(e) {
  console.log(e.key);   // "Enter", "a", "ArrowUp" — o'qish uchun qulay nom
  console.log(e.code);  // "Enter", "KeyA", "ArrowUp" — fizik tugma kodi (klaviatura tartibiga bog'liq emas)

  console.log(e.ctrlKey);  // Ctrl bosilganmi
  console.log(e.shiftKey); // Shift bosilganmi
  console.log(e.altKey);   // Alt bosilganmi
  console.log(e.metaKey);  // Windows/Cmd tugmasi bosilganmi
});

// Misol: Ctrl+S kombinatsiyasini ushlash
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    console.log("Saqlash bosildi");
  }
});
```

### Mouse event xususiyatlari

```javascript
element.addEventListener("click", function(e) {
  console.log(e.clientX, e.clientY); // brauzer oynasiga nisbatan koordinata
  console.log(e.pageX, e.pageY);     // butun hujjatga nisbatan koordinata (scroll bilan)
  console.log(e.offsetX, e.offsetY); // bosilgan elementning o'ziga nisbatan koordinata
  console.log(e.button);              // 0 = chap, 1 = o'rta, 2 = o'ng tugma
});
```

---

## 🔄 2.4 Event Propagation (Hodisaning Tarqalishi)

Brauzer bir hodisani uchta bosqichda qayta ishlaydi:

```
1️⃣ Capturing Phase   (yuqoridan pastga: document → html → body → ... → target)
2️⃣ Target Phase      (aynan bosilgan elementning o'zi)
3️⃣ Bubbling Phase    (pastdan yuqoriga: target → ... → body → html → document)
```

### Vizual sxema

```
document
  ↓ (capturing)
 html
  ↓
 body
  ↓
 div.parent
  ↓
 button.target  ← Target Phase (shu yerda hodisa yuz beradi)
  ↑
 div.parent
  ↑
 body
  ↑ (bubbling)
 html
  ↓
document
```

### `useCapture` parametri

```javascript
element.addEventListener("click", handler, true);  // capturing bosqichida ishlaydi
element.addEventListener("click", handler, false); // bubbling bosqichida ishlaydi (standart)

// Zamonaviy yozuv (options obyekti orqali, aynan shu narsa):
element.addEventListener("click", handler, { capture: true });
```

**Misol — tartibni ko'rish:**

```javascript
document.body.addEventListener("click", () => console.log("BODY - capturing"), true);
document.body.addEventListener("click", () => console.log("BODY - bubbling"), false);

// Konsol chiqishi (button bosilganda):
// "BODY - capturing"  (avval, chunki yuqoridan pastga ketadi)
// "BODY - bubbling"   (keyin, chunki pastdan yuqoriga qaytadi)
```

---

## 🎭 2.5 Event Delegation (Hodisani Vakillashtirish)

Bir nechta bola-elementlarga alohida-alohida listener o'rnatish o'rniga, ularning **umumiy ota-elementiga** bitta listener o'rnatish va `event.target` orqali qaysi bola bosilganini aniqlash.

```html
<ul id="list">
  <li data-id="1">Birinchi</li>
  <li data-id="2">Ikkinchi</li>
  <li data-id="3">Uchinchi</li>
</ul>
```

```javascript
document.getElementById("list").addEventListener("click", function(e) {
  const li = e.target.closest("li"); // closest() bilan aniq <li>ni topamiz
  if (!li) return;

  console.log("Bosilgan element ID:", li.dataset.id);
});
```

✅ **Afzalliklari:**
- Har bir yangi qo'shilgan `<li>` uchun alohida listener yozish shart emas (dinamik elementlarda ham ishlaydi)
- Xotira tejaladi (100 ta elementga 100 ta listener o'rniga — bitta)
- Kod qisqaroq va boshqarish osonroq

---

## 🎨 2.6 Custom Events (Maxsus Hodisalar)

O'zingiz yaratgan, brauzer standart bo'lmagan hodisalarni chaqirish mumkin.

```javascript
const event = new CustomEvent("productAdded", {
  detail: { productId: 42, name: "Noutbuk" }, // qo'shimcha ma'lumot uzatish
  bubbles: true,      // hodisa yuqoriga tarqalishi kerakmi
  cancelable: true    // preventDefault() bilan bekor qilish mumkinmi
});

document.dispatchEvent(event); // hodisani ishga tushirish
```

```javascript
document.addEventListener("productAdded", function(e) {
  console.log("Yangi mahsulot qo'shildi:", e.detail.name);
  console.log("Mahsulot IDsi:", e.detail.productId);
});
```

### `event.composedPath()`

Hodisa qaysi elementlar zanjiri orqali o'tganini array ko'rinishida qaytaradi.

```javascript
element.addEventListener("click", function(e) {
  console.log(e.composedPath()); // [button, div, body, html, document, window]
});
```

---

## ⏱️ 2.7 Debouncing va Throttling (Performance)

Tez-tez ishga tushadigan hodisalarda (`scroll`, `resize`, `input`) funksiyani har safar chaqirish sahifani sekinlashtiradi. Shuning uchun ikki texnika qo'llaniladi.

### Debounce — Faqat oxirgi chaqiruvni bajarish

Funksiya faqat foydalanuvchi harakatni **to'xtatgandan** so'ng, belgilangan vaqtdan keyin bir marta ishga tushadi. Qidiruv maydonida (`input` eventida) so'rov yuborishdan oldin foydalaniladi.

```javascript
function debounce(func, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

const handleSearch = debounce(function(e) {
  console.log("Qidirilmoqda:", e.target.value);
}, 500);

searchInput.addEventListener("input", handleSearch);
```

### Throttle — Ma'lum vaqt oralig'ida bir marta bajarish

Funksiya belgilangan vaqt oralig'ida **faqat bir marta** ishga tushadi, harakat davomida qanchalik tez-tez chaqirilishidan qat'i nazar. `scroll` yoki `resize` hodisalarida foydalaniladi.

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const handleScroll = throttle(function() {
  console.log("Scroll pozitsiyasi:", window.scrollY);
}, 200);

window.addEventListener("scroll", handleScroll);
```

### 📊 Debounce vs Throttle taqqoslash

| Xususiyat | Debounce | Throttle |
|---|---|---|
| Qачон ishga tushadi | Harakat to'xtagandan keyin | Belgilangan vaqt oralig'ida muntazam |
| Qo'llanilishi | Qidiruv inputi, forma validatsiyasi | Scroll, resize, mousemove |
| Chaqiruvlar soni | Faqat oxirgisi | Vaqt oralig'ida bittadan |

---

## 🧠 2.8 `this` bog'lanishi Event Handlerlarda

Bu talabalar ko'p adashadigan mavzu — regular function va arrow function `this`ni turlicha bog'laydi.

```javascript
const button = document.querySelector("button");

// Regular function: `this` = listener o'rnatilgan element (currentTarget)
button.addEventListener("click", function() {
  console.log(this); // <button> elementining o'zi
});

// Arrow function: `this` — o'zining lexical konteksti (odatda window yoki tashqi obyekt)
button.addEventListener("click", () => {
  console.log(this); // <button> EMAS — tashqi kontekst (masalan, window)
});
```

**Xulosa:** Agar handler ichida `this` orqali elementga murojaat qilish kerak bo'lsa — **regular function** ishlating, yoki `event.currentTarget` dan foydalaning.

```javascript
button.addEventListener("click", (e) => {
  console.log(e.currentTarget); // arrow functionda ham ishonchli usul
});
```

---

## ✅ Yakuniy Xulosa

Ushbu qo'llanma DOM va Events mavzularini quyidagi tartibda to'liq qamrab oladi:

1. DOM daraxti tuzilishi va node turlari
2. Elementlarni tanlash (5 xil metod, live/static farqi)
3. DOM bo'ylab harakatlanish (`closest`, `matches`, `contains` bilan birga)
4. Kontent va atributlarni o'zgartirish (xavfsizlik nuqtai nazaridan)
5. Stillar bilan ishlash
6. Element yaratish/o'chirish va `DocumentFragment` orqali optimallashtirish
7. O'lcham/pozitsiya hisoblash va zamonaviy Observer API'lar
8. Formalar va `<template>` elementi
9. Barcha asosiy event turlari (mouse, keyboard, forma, window, touch, drag&drop, clipboard, pointer)
10. Event handler biriktirish usullari va `options` obyekti
11. Event obyekti xususiyatlari (`target`, `key`, `clientX/Y` va h.k.)
12. Event propagation (capturing/bubbling) va delegation
13. Custom Events
14. Debounce/Throttle orqali performance optimallashtirish
15. `this` bog'lanishi nuanslari
