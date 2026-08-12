const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

btn.addEventListener("click", () => {
  console.log("Siz tugmani bosdingiz!");
});

btn1.addEventListener("dblclick", () => {
  console.log("Siz ikki marta bosdingiz!");
});

div1.addEventListener("mouseenter", () => {
  div1.style.backgroundColor = "green";
  div1.style.width = "400px";
  div1.style.height = "100px";
});

div2.addEventListener("mouseleave", () => {
  div2.style.backgroundColor = "green";
  div2.style.width = "400px";
  div2.style.height = "100px";
});

div3.addEventListener("mousemove", (event) => {
  console.log(`Koordinata: ${event.clientX}, ${event.clientY}`);
  div3.style.backgroundColor = "yellow";
});

div4.addEventListener("contextmenu", (event) => {
  event.preventDefault(); // brauzerning standart kontekst menyusini bloklash
  console.log("O'ng tugma bosildi - o'z menyumizni ko'rsatamiz");
  div4.style.backgroundColor = "green";
  div4.style.transform = "scale(1.5)";
});
