let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".close-shopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".list-card");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    image: "food.png",
    price: 11000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    image: "food1.png",
    price: 12000,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    image: "food2.png",
    price: 13000,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    image: "food.png",
    price: 14000,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    image: "food1.png",
    price: 15000,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    image: "food2.png",
    price: 16000,
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="./assets/img/${value.image}" />
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add to Card</button>
    `;
    list.appendChild(newDiv);
  });
}

initApp();
