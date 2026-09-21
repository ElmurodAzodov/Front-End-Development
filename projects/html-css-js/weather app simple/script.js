// API kalit
const API_KEY = "ca3612605a90c5ac92edf62321b36a5f";

// Elementlarni olish
const cityInput = document.getElementById("city");
const searchBtn = document.getElementById("search");
const locationBtn = document.getElementById("myLocation");
const message = document.getElementById("message");
const result = document.getElementById("result");

// ============================================
// 1. SHAHAR NOMI BO'YICHA OB-HAVO
// ============================================
async function getByCity(city) {
  if (city === "") {
    message.textContent = "Shahar nomini yozing!";
    return;
  }

  message.textContent = "⏳ Yuklanmoqda...";
  result.classList.add("hidden");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=uz`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      message.textContent = "Shahar topilmadi!";
      return;
    }

    const data = await response.json();
    showWeather(data);
  } catch (error) {
    message.textContent = "Xatolik yuz berdi!";
  }
}

// ============================================
// 2. JOYLASHUV BO'YICHA OB-HAVO
// ============================================
function getByLocation() {
  message.textContent = "📍 Joylashuv aniqlanmoqda...";

  navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getByCoords(lat, lon);
    },
    () => {
      message.textContent = "Joylashuv olinmadi!";
    },
  );
}

async function getByCoords(lat, lon) {
  message.textContent = "⏳ Yuklanmoqda...";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=uz`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    showWeather(data);
  } catch (error) {
    message.textContent = "Xatolik yuz berdi!";
  }
}

// ============================================
// 3. EKRANGA CHIQARISH
// ============================================
function showWeather(data) {
  message.textContent = "";

  document.getElementById("name").textContent = data.name;
  document.getElementById("temp").textContent =
    Math.round(data.main.temp) + "°C";
  document.getElementById("desc").textContent = data.weather[0].description;

  // Ob-havoga qarab emoji
  const holat = data.weather[0].main;
  let emoji = "🌡️";

  if (holat === "Clear") emoji = "☀️";
  if (holat === "Clouds") emoji = "☁️";
  if (holat === "Rain") emoji = "🌧️";
  if (holat === "Snow") emoji = "❄️";

  document.getElementById("icon").textContent = emoji;

  result.classList.remove("hidden");
}

// ============================================
// 4. TUGMALAR
// ============================================
searchBtn.addEventListener("click", () => {
  getByCity(cityInput.value.trim());
});

locationBtn.addEventListener("click", getByLocation);

// Enter bosilganda
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getByCity(cityInput.value.trim());
  }
});

// Sahifa ochilganda — joylashuvni aniqlash
window.addEventListener("load", getByLocation);
