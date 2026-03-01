
# **STAGE 5 — Layout Basics**

# Display Property — To'liq Ma'lumot

CSS-da `display` xususiyati elementning qanday ko'rinishda va qanday joylashuvda bo'lishini belgilaydi. Keling, har birini batafsil ko'rib chiqaylik.

---

## 1. **Block Elementlar**

### Ta'rifi:
`display: block` bo'lgan elementlar butun enni (width) egallaydi va har doim yangi qatordan boshlanadi.

### Xususiyatlari:
- To'liq enni egallaydi (default width: 100%)
- Yangi qatordan boshlanadi
- Height va width berish mumkin
- Padding va margin har tomondan ishlaydi

### Misol:
```html
<div style="display: block; background: lightblue;">
  Men block elementman
</div>
<span style="display: block; background: lightgreen;">
  Span ham block bo'ldi
</span>
```

### Tabiiy block elementlar:
- `<div>`
- `<p>`
- `<h1>`...`<h6>`
- `<section>`
- `<header>`
- `<footer>`
- `<ul>`, `<ol>`, `<li>`

---

## 2. **Inline Elementlar**

### Ta'rifi:
`display: inline` elementlar faqat o'z kontenti qancha joy egallasa, shuncha joy egallaydi va yonma-yon joylashadi.

### Xususiyatlari:
- Faqat kerakli enni egallaydi
- Bir qatorda yonma-yon joylashadi
- **Width va height berib bo'lmaydi** (ishlamaydi)
- Faqat gorizontal padding va margin ishlaydi
- Vertikal margin/padding boshqa elementlarga ta'sir qilmaydi

### Misol:
```html
<span style="display: inline; background: yellow; width: 500px;">
  Bu span (width ishlamaydi)
</span>
<span style="display: inline; background: orange;">
  Yonma-yon turadi
</span>
```

### Tabiiy inline elementlar:
- `<span>`
- `<a>`
- `<strong>`, `<em>`
- `<img>` (aslida inline-block kabi ishlaydi)
- `<label>`

---

## 3. **Inline-Block Elementlar**

### Ta'rifi:
`display: inline-block` - inline va block xususiyatlarining kombinatsiyasi.

### Xususiyatlari:
- Inline kabi yonma-yon joylashadi
- Block kabi width, height, margin, padding berish mumkin
- Eng yaxshi tomoni: ikkala dunyoning afzalliklarini oladi

### Misol:
```html
<style>
  .box {
    display: inline-block;
    width: 200px;
    height: 100px;
    margin: 10px;
    background: coral;
    color: white;
    text-align: center;
    line-height: 100px;
  }
</style>

<div class="box">1</div>
<div class="box">2</div>
<div class="box">3</div>
```

### Amaliy qo'llanilishi:
- Navigatsiya menyulari
- Kartochkalar (cards)
- Galereyalar
- Buttons

---

## 4. **None — Elementni Butunlay Yashirish**

### Ta'rifi:
`display: none` elementni butunlay yashiradi va uning joyi ham bo'shab qoladi.

### Xususiyatlari:
- Element ko'rinmaydi
- Element egallagan joy bo'shab qoladi
- Boshqa elementlar bo'sh joyni egallaydi
- HTMLda bor, lekin render qilinmaydi

### Misol:
```html
<div>Men ko'rinaman</div>
<div style="display: none">Men yashiringanman</div>
<div>Men ham ko'rinaman</div>
<!-- 2-div yo'qdek, 1 va 3-divlar yonma-yon yoki ketma-ket joylashadi -->
```

### Qo'llanilishi:
- JavaScript bilan dinamik yashirish/ko'rsatish
- Modal oynalar
- Dropdown menyular
- Tab kontentlari

---

## 5. **Visibility: Hidden — Elementni Ko'rinmas Qilish**

### Ta'rifi:
`visibility: hidden` elementni ko'rinmas qiladi, LEKIN uning joyi saqlanib qoladi.

### Xususiyatlari:
- Element ko'rinmaydi
- Element egallagan joy bo'sh bo'lib turadi (bo'sh joy)
- Boshqa elementlar joyni egallay olmaydi

### Misol:
```html
<div>Men ko'rinaman</div>
<div style="visibility: hidden">Men yashiringanman (joyim bor)</div>
<div>Men ham ko'rinaman</div>
<!-- 2-divning joyi bo'sh bo'lib turadi -->
```

---

## Muhim Farqlar: display: none vs visibility: hidden

| Xususiyat | display: none | visibility: hidden |
|-----------|---------------|-------------------|
| Ko'rinishi | Yo'q | Yo'q |
| Joy egallashi | Yo'q | Ha (bo'sh joy) |
| Boshqa elementlar | Joyni egallay oladi | Joyni egallay olmaydi |
| Rendering | Render qilinmaydi | Render qilinadi (ko'rinmaydi) |
| Transition | Ishlatib bo'lmaydi | Ishlatish mumkin |

---

## Amaliy Misollar

### 1. Navigatsiya menyusi (inline-block)
```html
<nav>
  <a href="#" style="display: inline-block; padding: 10px 20px; background: #333; color: white; text-decoration: none;">Home</a>
  <a href="#" style="display: inline-block; padding: 10px 20px; background: #333; color: white;">About</a>
  <a href="#" style="display: inline-block; padding: 10px 20px; background: #333; color: white;">Contact</a>
</nav>
```

### 2. Responsive menyu (display: none bilan)
```html
<style>
  .menu { display: block; }
  .menu-icon { display: none; }
  
  @media (max-width: 768px) {
    .menu { display: none; }
    .menu-icon { display: block; }
  }
</style>
```

### 3. Block vs Inline farqi
```html
<style>
  .block-example {
    display: block;
    background: red;
    width: 200px;
    height: 200px;
    margin: 10px 0;
  }
  
  .inline-example {
    display: inline;
    background: blue;
    width: 200px; /* ishlamaydi */
    height: 200px; /* ishlamaydi */
    padding: 10px; /* faqat gorizontal ishlaydi */
  }
</style>
```

---

## Xulosa

| Qiymat | Qator | Width/Height | Joylashuv |
|--------|-------|--------------|-----------|
| block | Yangi qator | Ha | To'liq en |
| inline | Bir qator | Yo'q | Kontent eni |
| inline-block | Bir qator | Ha | Kontent eni |
| none | - | - | Joy olmaydi |
| visibility: hidden | - | - | Joy oladi |

**Eng muhim qoida:**
- **Block** — katta qismlar, konteynerlar uchun
- **Inline** — matn ichidagi kichik qismlar uchun
- **Inline-block** — yonma-yon joylashadigan, lekin o'lcham beriladigan elementlar uchun
- **None** — butunlay yashirish uchun
- **Hidden** — ko'rinmas, lekin joy saqlash uchun
---
