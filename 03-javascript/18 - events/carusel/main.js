const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const card = document.querySelectorAll(".card")

const cardLength = card.length // kartalar uzunligi

let currentIndex = 0;

const cardWidth = 210;


nextBtn.addEventListener("click", () => {
  if (currentIndex < cardLength) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function updateCarousel() {
  // Yo'lakni chapga surish (minus qiymat)
  const moveAmount = -currentIndex * cardWidth;
  // CSS transform orqali harakatlantirish
  track.style.transform = `translateX(${moveAmount}px)`;
}
