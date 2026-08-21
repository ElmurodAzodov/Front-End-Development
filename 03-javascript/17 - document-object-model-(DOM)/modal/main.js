const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const confirmBtn = document.querySelector(".confirm-btn");

// Modalni ochish
openBtn.addEventListener("click", function () {
    modal.classList.add("active");
});

// X tugmasi orqali yopish
closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
});

// Tasdiqlash tugmasi orqali yopish
confirmBtn.addEventListener("click", function () {
    modal.classList.remove("active");
});

// Modalning tashqarisiga bosilganda yopish
modal.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.classList.remove("active");
    }
});

// Escape tugmasi orqali yopish
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        modal.classList.remove("active");
    }
});