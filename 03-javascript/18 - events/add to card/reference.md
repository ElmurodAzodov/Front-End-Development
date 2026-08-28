# 🛒 **add to card**

## 📌 1. Loyiha tuzilishi
```

project/
├── index.html # HTML tuzilma
├── style.css # Barcha stillar (ichki yoki tashqi)
└── script.js # JavaScript logika

````

---

## 📄 2. HTML tuzilma (index.html)

```html
<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Savatcha</title>
    <!-- Font Awesome ikonkalar -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- HEADER: Sarlavha va savat tugmasi -->
    <header class="header">
        <h1><i class="fas fa-store"></i> Mahsulotlar</h1>
        <button class="cart-btn" id="openCartBtn">
            <i class="fas fa-shopping-bag"></i>
            <span>Savat</span>
            <span class="cart-badge" id="cartCounter">0</span>
        </button>
    </header>

    <!-- MAHSULOTLAR GRID -->
    <div class="products-grid" id="productsGrid"></div>

    <!-- MODAL (savat oynasi) -->
    <div class="cart-modal-overlay" id="cartOverlay"></div>
    <div class="cart-modal" id="cartModal">
        <div class="cart-modal-header">
            <h2><i class="fas fa-shopping-bag"></i> Savatcha</h2>
            <button class="close-modal-btn" id="closeCartBtn">&times;</button>
        </div>

        <div class="cart-items-container" id="cartItemsContainer">
            <div class="empty-cart-msg" id="emptyCartMsg">
                <i class="fas fa-box-open"></i>
                <p>Savat hozircha bo'sh</p>
            </div>
        </div>

        <div class="cart-footer">
            <div class="cart-total">
                <span>Jami:</span>
                <span id="cartTotalPrice">0 so‘m</span>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
````

---

## 🎨 3. CSS stillar (style.css)

```css
/* ---------- GLOBAL ---------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}
body {
  background: #f4f7fc;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ---------- HEADER ---------- */
.header {
  width: 100%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
}
.header h1 {
  color: #1e293b;
}
.cart-btn {
  background: white;
  border: 1px solid #e2e8f0;
  padding: 0.75rem 1.8rem;
  border-radius: 60px;
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: 0.2s;
}
.cart-btn:hover {
  background: #f8fafc;
  transform: scale(1.02);
}
.cart-badge {
  background: #3b82f6;
  color: white;
  border-radius: 40px;
  padding: 0.15rem 0.7rem;
  min-width: 28px;
  text-align: center;
}

/* ---------- MAHSULOTLAR ---------- */
.products-grid {
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
}
.product-card {
  background: white;
  border-radius: 24px;
  padding: 1.2rem 1rem 1.5rem;
  border: 1px solid #eef2f6;
  text-align: center;
  transition: 0.2s;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.04);
}
.product-emoji {
  font-size: 4rem;
}
.product-name {
  font-weight: 600;
  color: #0f172a;
}
.product-price {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2563eb;
  margin: 6px 0 14px;
}
.add-to-cart-btn {
  background: #2563eb;
  color: white;
  border: none;
  padding: 0.6rem 1.8rem;
  border-radius: 60px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s;
}
.add-to-cart-btn:hover {
  background: #1d4ed8;
  transform: scale(1.02);
}

/* ---------- MODAL (savat) ---------- */
.cart-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: 0.25s;
}
.cart-modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.cart-modal {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  background: white;
  z-index: 1000;
  transform: translateX(110%);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  display: flex;
  flex-direction: column;
}
.cart-modal.open {
  transform: translateX(0);
}

.cart-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #eef2f6;
}
.close-modal-btn {
  background: #f1f5f9;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
}
.close-modal-btn:hover {
  background: #e2e8f0;
}

.cart-items-container {
  flex: 1;
  overflow-y: auto;
  padding: 1.2rem;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 0;
  border-bottom: 1px solid #f1f5f9;
}
.cart-item-info {
  flex: 2;
}
.cart-item-name {
  font-weight: 600;
}
.cart-item-price {
  color: #2563eb;
  font-weight: 600;
}

.cart-item-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.qty-btn {
  background: #f1f5f9;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: 700;
  cursor: pointer;
}
.qty-btn:hover {
  background: #e2e8f0;
}
.remove-item {
  background: transparent;
  color: #94a3b8;
}
.remove-item:hover {
  color: #dc2626;
  background: #fee2e2;
}
.item-qty {
  min-width: 24px;
  text-align: center;
  font-weight: 600;
}

.cart-footer {
  border-top: 1px solid #eef2f6;
  padding: 1.2rem 1.5rem;
  background: #fafcff;
}
.cart-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 700;
}
.cart-total span:last-child {
  color: #2563eb;
}

.empty-cart-msg {
  text-align: center;
  color: #94a3b8;
  padding: 3rem 0;
}
.empty-cart-msg i {
  font-size: 3rem;
  display: block;
  margin-bottom: 12px;
}
```

---

## ⚙️ 4. JavaScript logika (script.js)

```javascript
// ============================================
// 1. MAHSULOTLAR MA'LUMOTLARI (hard)
// ============================================
const products = [
  { id: 1, name: "Noutbuk", emoji: "💻", price: 4200000 },
  { id: 2, name: "Smartfon", emoji: "📱", price: 2800000 },
  { id: 3, name: "Naushniklar", emoji: "🎧", price: 450000 },
  { id: 4, name: "Soat", emoji: "⌚", price: 890000 },
  { id: 5, name: "Kamera", emoji: "📷", price: 3100000 },
  { id: 6, name: "Planshet", emoji: "📟", price: 2200000 },
];

// ============================================
// 2. SAVAT HOLATI (state)
// ============================================
let cart = {}; // { productId: quantity }

// ============================================
// 3. DOM ELEMENTLARI
// ============================================
const productsGrid = document.getElementById("productsGrid");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotalPriceEl = document.getElementById("cartTotalPrice");
const cartCounter = document.getElementById("cartCounter");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const cartModal = document.getElementById("cartModal");

// ============================================
// 4. YORDAMCHI FUNKSIYALAR
// ============================================
function formatPrice(price) {
  return new Intl.NumberFormat("uz-UZ").format(price) + " so‘m";
}

function getTotalItems() {
  let total = 0;
  for (let id in cart) total += cart[id];
  return total;
}

function getTotalPrice() {
  let total = 0;
  for (let id in cart) {
    const product = products.find((p) => p.id === Number(id));
    if (product) total += product.price * cart[id];
  }
  return total;
}

// ============================================
// 5. MAHSULOTLARNI RENDER QILISH
// ============================================
function renderProducts() {
  productsGrid.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <div class="product-emoji">${product.emoji}</div>
            <div class="product-name">${product.name}</div>
            <div class="product-price">${formatPrice(product.price)}</div>
            <button class="add-to-cart-btn" data-id="${product.id}">
                <i class="fas fa-plus-circle"></i> Savatga
            </button>
        `;
    productsGrid.appendChild(card);
  });

  // Savatga qo'shish tugmalariga event
  document.querySelectorAll(".add-to-cart-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      addToCart(Number(btn.dataset.id));
    });
  });
}

// ============================================
// 6. SAVAT BILAN ISHLASH
// ============================================
function addToCart(productId) {
  cart[productId] = cart[productId] ? cart[productId] + 1 : 1;
  updateCartUI();
}

function updateItemQuantity(productId, delta) {
  if (!cart[productId]) return;
  const newQty = cart[productId] + delta;
  if (newQty <= 0) {
    delete cart[productId];
  } else {
    cart[productId] = newQty;
  }
  updateCartUI();
}

function removeItem(productId) {
  delete cart[productId];
  updateCartUI();
}

// ============================================
// 7. UI NI YANGILASH
// ============================================
function updateCartUI() {
  const items = Object.keys(cart);
  cartItemsContainer.innerHTML = "";

  if (items.length === 0) {
    cartItemsContainer.innerHTML = `
            <div class="empty-cart-msg">
                <i class="fas fa-box-open"></i>
                <p>Savat hozircha bo'sh</p>
            </div>
        `;
  } else {
    items.forEach((id) => {
      const product = products.find((p) => p.id === Number(id));
      if (!product) return;
      const qty = cart[id];

      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-name">${product.emoji} ${product.name}</span>
                    <span class="cart-item-price">${formatPrice(product.price)}</span>
                </div>
                <div class="cart-item-actions">
                    <button class="qty-btn dec-btn" data-id="${product.id}">−</button>
                    <span class="item-qty">${qty}</span>
                    <button class="qty-btn inc-btn" data-id="${product.id}">+</button>
                    <button class="qty-btn remove-item" data-id="${product.id}">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            `;
      cartItemsContainer.appendChild(itemDiv);
    });

    // Eventlar: +, -, o'chirish
    document.querySelectorAll(".inc-btn").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateItemQuantity(Number(btn.dataset.id), 1),
      );
    });
    document.querySelectorAll(".dec-btn").forEach((btn) => {
      btn.addEventListener("click", () =>
        updateItemQuantity(Number(btn.dataset.id), -1),
      );
    });
    document.querySelectorAll(".remove-item").forEach((btn) => {
      btn.addEventListener("click", () => removeItem(Number(btn.dataset.id)));
    });
  }

  // Jami summa va badge
  cartTotalPriceEl.textContent = formatPrice(getTotalPrice());
  cartCounter.textContent = getTotalItems();
}

// ============================================
// 8. MODALNI OCHISH / YOPISH
// ============================================
function openCartModal() {
  cartModal.classList.add("open");
  cartOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartModal() {
  cartModal.classList.remove("open");
  cartOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

openCartBtn.addEventListener("click", openCartModal);
closeCartBtn.addEventListener("click", closeCartModal);
cartOverlay.addEventListener("click", closeCartModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeCartModal();
});

// ============================================
// 9. ISHGA TUSHIRISH
// ============================================
renderProducts();
updateCartUI();
```

---

## 🧠 5. Ishlash mantiqi (tushuntirish)

### 5.1. Ma'lumotlar strukturası

- **products**: massiv, har bir mahsulot `{ id, name, emoji, price }`
- **cart**: obyekt, kalit - mahsulot ID, qiymat - miqdor

### 5.2. Asosiy jarayonlar

1. **Mahsulotlarni ko'rsatish**: `renderProducts()` DOMga kartochkalar yaratadi
2. **Savatga qo'shish**: `addToCart()` → cart obyektini yangilaydi → UI yangilanadi
3. **Miqdorni o'zgartirish**: `updateItemQuantity(id, delta)`
   - `delta = 1` qo'shadi, `delta = -1` ayiradi
   - Agar 0 ga tushsa, mahsulot o'chiriladi
4. **O'chirish**: `removeItem(id)` → cart dan butunlay olib tashlaydi

### 5.3. UI yangilash (updateCartUI)

- Savatdagi mahsulotlar ro'yxatini qayta chizadi
- Jami summani hisoblaydi
- Badge (savatdagi umumiy son) ni yangilaydi

### 5.4. Modal oyna

- **Ochish**: `.open` klass qo'shiladi → `transform: translateX(0)` animatsiya
- **Yopish**: `.open` klass o'chiriladi → `translateX(110%)` (o'ngga chiqib ketadi)
- Orqa fon (overlay) va ESC tugmasi orqali yopish

---

## 📝 6. O'quvchilar uchun amaliy topshiriqlar

### 6.1. Mahsulot qo'shish

```javascript
// products massiviga yangi mahsulot qo'shing
{ id: 7, name: 'Klaviatura', emoji: '⌨️', price: 350000 }
```

### 6.2. Savatga mahsulot qo'shganda animatsiya qo'shish

```css
/* Mahsulot kartasiga qisqa animatsiya */
.add-to-cart-btn:active {
  transform: scale(0.9);
}
```

### 6.3. Savatdagi mahsulotlar sonini localStorage da saqlash

```javascript
// Saqlash
localStorage.setItem("cart", JSON.stringify(cart));

// Yuklash
const savedCart = JSON.parse(localStorage.getItem("cart"));
if (savedCart) cart = savedCart;
```

### 6.4. Savatdagi mahsulotning umumiy og'irligini hisoblash

```javascript
// products ga weight qo'shing
{ id: 1, name: 'Noutbuk', emoji: '💻', price: 4200000, weight: 2.5 }

// Hisoblash
function getTotalWeight() {
    let total = 0;
    for (let id in cart) {
        const product = products.find(p => p.id === Number(id));
        if (product) total += product.weight * cart[id];
    }
    return total;
}
```

### 6.5. Chegirma kodi qo'shish

```javascript
let discountCode = "SAVE10";
let discountPercent = 0;

function applyDiscount(code) {
  if (code === "SAVE10") discountPercent = 10;
  updateCartUI();
}

// Jami summani hisoblashda
function getTotalPrice() {
  let total = 0;
  // ... hisoblash
  if (discountPercent > 0) {
    total = total - (total * discountPercent) / 100;
  }
  return total;
}
```

---

## ✅ 7. Tez-tez uchraydigan xatolar

| Xato                     | Sababi                         | Yechimi                                    |
| ------------------------ | ------------------------------ | ------------------------------------------ |
| Mahsulot qo'shilmayapti  | `data-id` noto'g'ri olinyapti  | `Number(btn.dataset.id)`                   |
| Savat ochilmayapti       | Modal klasslari noto'g'ri      | `.open` va `.active` klasslarni tekshiring |
| Badge yangilanmayapti    | `updateCartUI()` chaqirilmagan | Har bir o'zgarishda chaqiring              |
| Mahsulot o'chirilmayapti | `delete cart[id]` ishlamayapti | `delete` operatorini tekshiring            |
| Summa noto'g'ri          | `price` string bo'lib qolgan   | `Number` ga o'tkazish                      |

---

## 🚀 8. Mustaqil ishlash uchun maslahatlar

1. **Kodni bosqichma-bosqich yozing**:
   - Avval HTML + CSS
   - Keyin products massivi
   - Keyin renderProducts()
   - Keyin addToCart() va updateCartUI()
   - Eng oxirida modal

2. **Har bir qadamda console.log** ishlating:

   ```javascript
   console.log("cart:", cart);
   console.log("total items:", getTotalItems());
   ```

3. **Browser Developer Tools** dan foydalaning:
   - Elements (HTML/CSS)
   - Console (JS xatolar)
   - Network (agar API bo'lsa)

4. **GitHub** da saqlang va har bir muhim o'zgarishni commit qiling

---

## 📚 9. Qo'shimcha resurslar

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/uz/docs/Web/JavaScript)
- [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Font Awesome ikonkalar](https://fontawesome.com/icons)
- [JavaScript.info - Object](https://javascript.info/object)

---

## 🎯 10. Yakuniy tekshiruv ro'yxati

- [ ] Mahsulotlar gridda ko'rinadi
- [ ] Savatga qo'shish tugmasi ishlaydi
- [ ] Savatdagi mahsulotlar soni badge da ko'rinadi
- [ ] Modal o'ng tomondan silliq ochiladi
- [ ] Savatda mahsulotlar ro'yxati ko'rinadi
- [ ] - tugmasi miqdorni oshiradi
- [ ] - tugmasi miqdorni kamaytiradi
- [ ] 0 ga tushganda mahsulot o'chadi
- [ ] O'chirish tugmasi mahsulotni butunlay o'chiradi
- [ ] Jami summa to'g'ri hisoblanadi
- [ ] Modal orqa fon bosganda yopiladi
- [ ] ESC tugmasi modalni yopadi
- [ ] Barcha stillar to'g'ri ishlaydi

---