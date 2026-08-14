const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const html = document.querySelector("html")

// html.addEventListener("contextmenu", (event) => {
//   event.preventDefault(); // brauzerning standart kontekst menyusini bloklash
//   console.log("O'ng tugma bosildi - o'z menyumizni ko'rsatamiz");
// });


btn1.addEventListener("click", () => {
  console.log("chap tomonini bir marta");
  btn1.style.backgroundColor = "green";
});

// btn2.addEventListener("dblclick", () => {
//     console.log("ikki marta bosildi")
// })

// btn2.addEventListener("mouseenter", () => {
//   console.log("Sichqoncha kirdi");
// });

// btn2.addEventListener("mouseleave", () => {
//   console.log("Sichqoncha chiqdi");
//   btn2.style.width = "200px";
//   btn2.style.backgroundColor = "red";
// });


// btn2.addEventListener("mousemove", (event) => {
//   console.log(`Koordinata: ${event.clientX}, ${event.clientY}`);
// });


// btn2.addEventListener("contextmenu", (event) => {
//   event.preventDefault(); // brauzerning standart kontekst menyusini bloklash
//   console.log("O'ng tugma bosildi - o'z menyumizni ko'rsatamiz");
// });

// keydown - tugma BOSILGANDA (bosilib turilsa, TAKRORLANIB ishga tushadi)
// document.addEventListener("keydown", (event) => {
//   console.log(`Bosilgan tugma: ${event.key}, kod: ${event.code}`);
// });

// keyup - tugma QO'YIB YUBORILGANDA (bir marta)
// document.addEventListener("keyup", (event) => {
//   console.log(`Qo'yib yuborilgan tugma: ${event.key}`);
// });


// document.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     console.log("Enter bosildi");
//   }
//   if (event.ctrlKey && event.key === "s") {
//     // Ctrl+S kombinatsiyasi
//     event.preventDefault(); // brauzerning "Save Page" oynasini bloklash
//     console.log("Ctrl+S ushlandi");
//   }
// });



