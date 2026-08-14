const btn = document.getElementById("btn");
const sound = document.getElementById("successSound");

btn.addEventListener("click", () => {
  // Agar allaqachon bosilgan bo'lsa, qayta ishlamasin
  if (btn.disabled) return;

  console.log("To'lov amalga oshirildi");

  btn.innerHTML = "✅ To'lov qilindi";
  btn.style.backgroundColor = "#005f00";
  btn.disabled = true; // qayta bosish oldini olish
  btn.style.cursor = "default";

  // Ovozni ijro etish
  sound.play()
});
