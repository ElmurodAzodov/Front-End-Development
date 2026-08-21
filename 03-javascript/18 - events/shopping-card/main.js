// ===============================
// ELEMENTLARNI OLISH
// ===============================

const addButtons = document.querySelectorAll(".add-btn");

const cartBtn = document.getElementById("cartBtn");

const closeCart = document.getElementById("closeCart");

const cartOverlay = document.getElementById("cartOverlay");

const cartItems = document.getElementById("cartItems");

const cartCount = document.getElementById("cartCount");

const totalPrice = document.getElementById("totalPrice");

// ===============================
// SAVAT
// ===============================

let cart = [];

// ===============================
// MAHSULOTNI SAVATGA QO'SHISH
// ===============================

addButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const id = Number(button.dataset.id);

    const name = button.dataset.name;

    const price = Number(button.dataset.price);

    // Mahsulot savatda bor-yo'qligini tekshiramiz

    const existingProduct = cart.find(function (product) {
      return product.id === id;
    });

    // Agar mahsulot savatda bo'lmasa

    if (!existingProduct) {
      cart.push({
        id: id,
        name: name,
        price: price,
      });
    }

    // Savatni yangilaymiz

    renderCart();
  });
});

// ===============================
// SAVATNI EKRANGA CHIQARISH
// ===============================

function renderCart() {
  // Avval savatni tozalaymiz

  cartItems.innerHTML = "";

  // Agar savat bo'sh bo'lsa

  if (cart.length === 0) {
    cartItems.innerHTML = `
            <p class="empty-cart">
                Savat hozircha bo'sh
            </p>
        `;

    cartCount.textContent = 0;

    totalPrice.textContent = "0 so'm";

    return;
  }

  // Har bir mahsulotni chiqaramiz

  cart.forEach(function (product) {
    const cartItem = document.createElement("div");

    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
            <div class="cart-item-info">

                <h4>${product.name}</h4>

                <p>
                    ${formatPrice(product.price)} so'm
                </p>

            </div>

            <button
                class="delete-btn"
                data-id="${product.id}"
            >
                O'chirish
            </button>
        `;

    // O'chirish tugmasi

    const deleteButton = cartItem.querySelector(".delete-btn");

    deleteButton.addEventListener("click", function () {
      removeFromCart(product.id);
    });

    cartItems.appendChild(cartItem);
  });

  // Savatdagi mahsulotlar soni

  cartCount.textContent = cart.length;

  // Jami narx

  calculateTotal();
}

// ===============================
// SAVATDAN O'CHIRISH
// ===============================

function removeFromCart(id) {
  cart = cart.filter(function (product) {
    return product.id !== id;
  });

  renderCart();
}

// ===============================
// JAMI NARXNI HISOBLASH
// ===============================

function calculateTotal() {
  let total = 0;

  cart.forEach(function (product) {
    total += product.price;
  });

  totalPrice.textContent = formatPrice(total) + " so'm";
}

// ===============================
// NARXNI CHIROYLI KO'RINISHGA KELTIRISH
// ===============================

function formatPrice(price) {
  return price.toLocaleString("uz-UZ");
}

// ===============================
// SAVATNI OCHISH
// ===============================

cartBtn.addEventListener("click", function () {
  cartOverlay.classList.add("active");
});

// ===============================
// SAVATNI YOPISH
// ===============================

closeCart.addEventListener("click", function () {
  cartOverlay.classList.remove("active");
});

// ===============================
// TASHQARISINI BOSGANDA YOPISH
// ===============================

cartOverlay.addEventListener("click", function (event) {
  if (event.target === cartOverlay) {
    cartOverlay.classList.remove("active");
  }
});
