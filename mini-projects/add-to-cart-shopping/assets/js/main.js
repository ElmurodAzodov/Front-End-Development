let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".close-shopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".list-card");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let clearAllBtn = document.querySelector(".clear-all");

// Overlay yaratish (tashqariga bosganda yopish uchun)
let overlay = document.createElement("div");
overlay.classList.add("overlay");
body.appendChild(overlay);

let products = [
  {
    id: 1,
    name: "Margherita Pizza",
    image: "food.png",
    price: 11000,
  },
  {
    id: 2,
    name: "Cheeseburger",
    image: "food1.png",
    price: 12000,
  },
  {
    id: 3,
    name: "Caesar Salad",
    image: "food2.png",
    price: 13000,
  },
  {
    id: 4,
    name: "Spaghetti",
    image: "food.png",
    price: 14000,
  },
  {
    id: 5,
    name: "Sushi Roll",
    image: "food1.png",
    price: 15000,
  },
  {
    id: 6,
    name: "Ice Cream",
    image: "food2.png",
    price: 16000,
  },
];

let listCards = [];

// Panellarni ochish/yopish
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

// Overlay (tashqariga bosganda yopish)
overlay.addEventListener("click", () => {
  body.classList.remove("active");
});

// Escape tugmasi bilan yopish
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && body.classList.contains("active")) {
    body.classList.remove("active");
  }
});

// Barcha mahsulotlarni o'chirish
clearAllBtn.addEventListener("click", () => {
  if (confirm("Are you sure you want to clear all items?")) {
    listCards = [];
    reloadCard();
  }
});

function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="./assets/img/${value.image}" alt="${value.name}" />
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()} so'm</div>
      <button onclick="addToCard(${key})">Add to Cart</button>
    `;
    list.appendChild(newDiv);
  });
}

initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = { ...products[key], quantity: 1 };
  } else {
    listCards[key].quantity += 1;
  }
  reloadCard();

  // Animatsiya uchun
  let cartIcon = document.querySelector(".shopping");
  cartIcon.style.transform = "scale(1.2)";
  setTimeout(() => {
    cartIcon.style.transform = "scale(1)";
  }, 200);
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  let hasItems = false;

  listCards.forEach((value, key) => {
    if (value != null && value.quantity > 0) {
      hasItems = true;
      totalPrice += value.price * value.quantity;
      count += value.quantity;

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="./assets/img/${value.image}" alt="${value.name}" /></div>
        <div>${value.name}</div>
        <div>${(value.price * value.quantity).toLocaleString()} so'm</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})"> - </button>
          <span class="count">${value.quantity}</span>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})"> + </button>
        </div>
        <div>
          <button class="remove-item" onclick="removeItem(${key})">🗑️</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
  });

  // Bo'sh kart uchun xabar
  if (!hasItems) {
    let emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty-cart");
    emptyDiv.innerHTML = "🛒 Your cart is empty<br>Add some items!";
    listCard.appendChild(emptyDiv);
  }

  total.innerText = totalPrice.toLocaleString() + " so'm";
  quantity.innerText = count;

  // localStorage ga saqlash
  saveToLocalStorage();
}

function changeQuantity(key, newQuantity) {
  if (newQuantity <= 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = newQuantity;
  }
  reloadCard();
}

// Bir mahsulotni o'chirish
function removeItem(key) {
  if (confirm(`Remove "${listCards[key].name}" from cart?`)) {
    delete listCards[key];
    reloadCard();
  }
}

// LocalStorage funksiyalari
function saveToLocalStorage() {
  let cartData = listCards.filter((item) => item != null && item.quantity > 0);
  localStorage.setItem("shoppingCart", JSON.stringify(cartData));
}

function loadFromLocalStorage() {
  let savedCart = localStorage.getItem("shoppingCart");
  if (savedCart) {
    let cartData = JSON.parse(savedCart);
    listCards = [];
    cartData.forEach((item) => {
      let productIndex = products.findIndex((p) => p.id === item.id);
      if (productIndex !== -1) {
        listCards[productIndex] = { ...item };
      }
    });
    reloadCard();
  }
}

// Chekout (umumiy narxni ko'rsatish)
function checkout() {
  let totalPrice = 0;
  listCards.forEach((value) => {
    if (value != null && value.quantity > 0) {
      totalPrice += value.price * value.quantity;
    }
  });

  if (totalPrice > 0) {
    alert(
      `Total amount: ${totalPrice.toLocaleString()} so'm\nThank you for shopping!`,
    );
    listCards = [];
    reloadCard();
    body.classList.remove("active");
  } else {
    alert("Your cart is empty!");
  }
}

// Total div ga checkout funksiyasini qo'shish
document
  .querySelector(".checkout div:first-child")
  .addEventListener("click", checkout);

// Sahifa yuklanganda localStorage dan yuklash
loadFromLocalStorage();

// Konsolga xatoliklarni ko'rish uchun
console.log("App loaded successfully!");
