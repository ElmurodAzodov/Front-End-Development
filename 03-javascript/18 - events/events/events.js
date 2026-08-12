const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

div1.addEventListener("click", () => {
  console.log("Sichqonchani chap tarafini bir marta bosdingiz!");
  div1.style.backgroundColor = "red";
  div1.style.width = "600px"
  div1.style.height = "300px"
  div1.style.transition = "1s"
  div1.innerHTML = `<button style="width: 100px; height: 60px; border: none; background-color: green; color: snow;">Send</button>`
  
});

div2.addEventListener("dblclick", () => {
  console.log("Sichqonchani chap tarafini ikki marta bosdingiz!");
});
