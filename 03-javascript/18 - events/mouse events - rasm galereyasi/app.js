const cards = document.querySelectorAll(".image-card");
const cursorPos = document.getElementById("cursorPos");
const lastEvent = document.getElementById("lastEvent");

// Mouse hodisalari
cards.forEach((card, index) => {
  // Mouse ustiga kelganda
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.1)";
    card.style.boxShadow = "0 15px 40px rgba(233, 69, 96, 0.5)";
    lastEvent.textContent = `Mouse #${index + 1} ustiga keldi`;
  });

  // Mouse chiqib ketganda
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "none";
    lastEvent.textContent = `Mouse #${index + 1} dan chiqdi`;
  });

  // Bosilganda
  card.addEventListener("click", (e) => {
    lastEvent.textContent = `#${index + 1} bosildi! 🎯`;
    card.style.backgroundColor = "#e94560";

    // 500ms dan keyin asl holatga qaytish
    setTimeout(() => {
      card.style.backgroundColor = "";
    }, 500);
  });

  // O'ng tugma bosilganda
  card.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    lastEvent.textContent = `#${index + 1} o'ng tugma bosildi!`;
    alert(`Rasm ${index + 1} uchun menyu ochildi`);
  });
});

// Mouse harakati
document.addEventListener("mousemove", (e) => {
  cursorPos.textContent = `(${e.clientX}, ${e.clientY})`;
});

// Double click
cards.forEach((card, index) => {
  card.addEventListener("dblclick", () => {
    lastEvent.textContent = `#${index + 1} ikki marta bosildi! ⭐`;
    card.style.transform = "rotate(5deg)";
    setTimeout(() => {
      card.style.transform = "rotate(0deg)";
    }, 300);
  });
});
