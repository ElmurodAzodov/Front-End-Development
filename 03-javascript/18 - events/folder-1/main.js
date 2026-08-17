
const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    
    if (document.body.classList.contains("dark")) {
        btn.style.fontSize = "46px"
        btn.textContent = "🌑"
    } else {
        btn.style.fontSize = "46px"
        btn.textContent = "☀️"
    }
})

