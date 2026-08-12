const btn = document.getElementById("btn");
const sound = document.getElementById("successSound");

btn.addEventListener("click", () => {
  console.log("Ishladi");
  btn.innerHTML = "✅ To'lov qilindi";
  btn.style.backgroundColor = "green";
  sound.play();
});
