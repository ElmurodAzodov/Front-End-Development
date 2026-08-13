const colorBox = document.getElementById("colorBox");
const changeBtn = document.getElementById("changeColorBtn");
const resetBtn = document.getElementById("resetBtn");
const colorCode = document.getElementById("colorCode");

// Tasodifiy rang generatsiya qilish
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Rangni o'zgartirish
changeBtn.addEventListener("click", () => {
  const newColor = randomColor();
  colorBox.style.backgroundColor = newColor;
  colorCode.textContent = newColor;

  // Rang kodini nusxalash uchun
  colorCode.style.cursor = "pointer";
});

// Asl holatga qaytarish
resetBtn.addEventListener("click", () => {
  colorBox.style.backgroundColor = "#ffffff";
  colorCode.textContent = "#ffffff";
});

// Rang kodini bosganda nusxalash
colorCode.addEventListener("click", () => {
  navigator.clipboard
    .writeText(colorCode.textContent)
    .then(() => alert("Rang kodi nusxalandi!"))
    .catch(() => alert("Nusxalash amalga oshmadi"));
});
