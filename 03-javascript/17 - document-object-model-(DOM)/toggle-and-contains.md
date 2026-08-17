# **.toggle() and .contains()**
## 1. `.toggle()` nima?

`.toggle()` — **classni qo‘shish yoki olib tashlashni avtomatik boshqaradi**.

Masalan:

```js
menu.classList.toggle("active");
```

Bu kod:

- `active` class **yo‘q bo‘lsa → qo‘shadi**
- `active` class **bor bo‘lsa → olib tashlaydi**

### Misol

HTML:

```html
<button id="btn">Menu</button>

<div id="menu">Salom</div>
```

CSS:

```css
#menu {
  display: none;
}

#menu.active {
  display: block;
}
```

JS:

```js
const btn = document.querySelector("#btn");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
```

Har bosganda:

```text
1-bosish → active qo‘shiladi → menu ko‘rinadi
2-bosish → active olib tashlanadi → menu yashiriladi
3-bosish → active qo‘shiladi → menu ko‘rinadi
```

### Juda muhim

Bu:

```js
menu.classList.toggle("active");
```

**"active classini yo‘qot"** degani emas.

Ma'nosi:

> **Agar bor bo‘lsa olib tashla, yo‘q bo‘lsa qo‘sh.**

Shuning uchun `toggle()` hamburger menu, dark mode, modal, accordion kabi narsalarda juda ko‘p ishlatiladi.

---

# 2. `.contains()` nima?

`contains()` esa **biror narsa ichida boshqa element yoki qiymat bor-yo‘qligini tekshiradi**.

DOM'da:

```js
element.contains(otherElement);
```

natijasi:

```js
true;
```

yoki

```js
false;
```

bo‘ladi.

### Misol

HTML:

```html
<div id="box">
  <button id="btn">Click</button>
</div>
```

JS:

```js
const box = document.querySelector("#box");
const btn = document.querySelector("#btn");

console.log(box.contains(btn));
```

Natija:

```js
true;
```

Chunki:

```text
box
 └── button
```

`button` — `box` ichida.

---

### Agar aksincha tekshirsak:

```js
console.log(btn.contains(box));
```

Natija:

```js
false;
```

Chunki `box` buttonning ichida emas.

---

# 3. `contains()` class bilan ham ishlaydi

`classList.contains()` juda ko‘p ishlatiladi:

```js
element.classList.contains("active");
```

Bu:

> Ushbu elementda `active` class bormi?

deb tekshiradi.

Masalan:

```js
if (menu.classList.contains("active")) {
  console.log("Menu ochiq");
}
```

Agar HTML:

```html
<div class="menu active"></div>
```

bo‘lsa:

```js
menu.classList.contains("active");
```

→ `true`

Agar:

```html
<div class="menu"></div>
```

bo‘lsa:

```js
menu.classList.contains("active");
```

→ `false`

---

# 4. `toggle()` va `contains()` farqi

Eng oson qilib eslab qol:

| Method       | Vazifasi                      |
| ------------ | ----------------------------- |
| `toggle()`   | **Qo‘shadi ↔ olib tashlaydi** |
| `contains()` | **Bormi ↔ yo‘qmi tekshiradi** |

Masalan:

```js
menu.classList.toggle("active");
```

👉 `active`ni o‘zgartiradi.

```js
menu.classList.contains("active");
```

👉 `active` borligini tekshiradi.

---

## 5. Ikkalasini birga ishlatish

Masalan:

```js
menu.classList.toggle("active");

if (menu.classList.contains("active")) {
  console.log("Menu ochildi");
} else {
  console.log("Menu yopildi");
}
```

Bu yerda:

```js
toggle();
```

→ holatni o‘zgartiryapti.

```js
contains();
```

→ hozirgi holatni tekshiryapti.