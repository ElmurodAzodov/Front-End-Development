# **Responsive dizaynni qaysi ekrandan boshlash**

Bu juda muhim, responsive dizaynning “qaysi ekrandan boshlash” tartibi professional darajada farq qiladi. Asosan 2 ta usul bor:

---

# 📌 1. Mobile-first (TAVSIYA QILINADIGAN USUL) ⭐

👉 Avval kichik ekran (telefon), keyin katta ekranlarga moslash

### 🧠 Ketma-ketlik:

1. 📱 Telefon (320px – 480px)
2. 📟 Tablet (768px)
3. 💻 Laptop (1024px)
4. 🖥 Desktop (1200px+)

---

## 🧾 Qanday ishlaydi?

Avval **oddiy CSS yozasan (mobil uchun)**:

```css
body {
  font-size: 14px;
}

.container {
  display: block;
}
```

Keyin katta ekranlar uchun qo‘shasan:

```css
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }

  .container {
    display: flex;
  }
}
```

---

## ✅ Afzalliklari:

- Mobil foydalanuvchi birinchi o‘rinda (hozir 70%+ trafik)
- Kod toza va yengil bo‘ladi
- Kengaytirish oson

---

# 📌 2. Desktop-first (eski usul)

👉 Avval katta ekran, keyin kichik ekranlarga moslash

### 🧠 Ketma-ketlik:

1. 🖥 Desktop (1200px+)
2. 💻 Laptop
3. 📟 Tablet
4. 📱 Mobile

---

## 🧾 Qanday ishlaydi?

Avval katta ekran:

```css
.container {
  display: flex;
}
```

Keyin kichraytirib borasan:

```css
@media (max-width: 768px) {
  .container {
    display: block;
  }
}
```

---

## ❌ Kamchiligi:

- Mobilga moslash qiyinroq
- Kod ko‘payib ketadi
- Zamonaviy trend emas

---

# 📌 QOIDA (ENG MUHIM)

## 🔥 1. Mobile-first ishlat

👉 hozirgi standart shu

---

## 🔥 2. Breakpointlar (odatda ishlatiladi)

```text
📱 320px – small phones
📱 480px – phones
📟 768px – tablets
💻 1024px – laptops
🖥 1200px+ desktop
```

---

## 🔥 3. Media query tartibi (mobile-first uchun)

Ketma-ketlik:

```css
/* 1. default — mobile */

/* 2. tablet */
@media (min-width: 768px) {
}

/* 3. laptop */
@media (min-width: 1024px) {
}

/* 4. desktop */
@media (min-width: 1200px) {
}
```

---

## 🔥 4. Flex va Grid bilan ishlash qoidasi

- Layoutni Flex/Grid bilan qurasan
- Media query faqat “o‘zgartirish” uchun ishlatiladi

❌ noto‘g‘ri:

```css
@media (...) {
  display: flex;
}
```

✅ to‘g‘ri:

```css
.container {
  display: flex;
  flex-direction: column;
}
```

---
