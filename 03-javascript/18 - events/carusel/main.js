const track = document.getElementById("track");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

const cardWidth = 210;

nextBtn.addEventListener("click", () => {
  if (currentIndex < 3) {
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
