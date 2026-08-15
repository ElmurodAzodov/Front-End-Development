// 1-QADAM: tugmani DOM'dan topib olamiz
const button = document.getElementById("myButton");

// 2-QADAM: tugma bosilganda ishlaydigan funksiya yozamiz
button.addEventListener("click", function () {
  // 3-QADAM: body'da "dark" klassi bor-yo'qligini tekshiramiz
  // classList.toggle() — klass bo'lsa o'chiradi, bo'lmasa qo'shadi
  document.body.classList.toggle("dark");

  // 4-QADAM: hozir dark mode yoqilganmi, tekshiramiz
  if (document.body.classList.contains("dark")) {
    button.textContent = "🌙"; // dark mode bo'lsa — oy
  } else {
    button.textContent = "☀️"; // light mode bo'lsa — quyosh
  }
});
