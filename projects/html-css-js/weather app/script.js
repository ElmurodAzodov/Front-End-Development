/* =========================================================
   🌤️ OB-HAVO ILOVASI — OpenWeather API
   =========================================================
   ⚠️ OGOHLANTIRISH:
   Haqiqiy loyihada API kalitni backend orqali yashirish kerak!
   Bu kod faqat o'quv maqsadida.
   ========================================================= */

// ===== SOZLAMALAR =====
const API_KEY = "ca3612605a90c5ac92edf62321b36a5f";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Zaxira shahar (geolokatsiya ishlamasa)
const FALLBACK_CITY = "Tashkent";

// ===== HTML ELEMENTLAR =====
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locationBtn = document.getElementById("locationBtn");

const weatherCard = document.getElementById("weatherResult");
const cityNameEl = document.getElementById("cityName");
const tempEl = document.getElementById("temperature");
const descEl = document.getElementById("description");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const feelsLikeEl = document.getElementById("feelsLike");
const iconEl = document.getElementById("weatherIcon");

const errorEl = document.getElementById("errorMsg");
const loadingEl = document.getElementById("loadingMsg");

// Holat bayrog'i — ikki marta so'rov yubormaslik uchun
let isFetching = false;

/* =========================================================
   1️⃣ JOYLASHUVNI ANIQLASH
   ========================================================= */
function getUserLocation() {
  // Brauzer geolokatsiyani qo'llab-quvvatlaydimi?
  if (!navigator.geolocation) {
    showError(
      "Brauzeringiz geolokatsiyani qo'llab-quvvatlamaydi. " +
        "Shahar nomini qo'lda kiriting.",
    );
    return;
  }

  showLoading("📍 Joylashuvingiz aniqlanmoqda...");
  setButtonsDisabled(true);

  navigator.geolocation.getCurrentPosition(onLocationSuccess, onLocationError, {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000, // 1 daqiqalik eski ma'lumot bo'lsa ham bo'ladi
  });
}

/* ✅ Joylashuv olindi */
function onLocationSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log("📍 Koordinatalar:", lat, lon);
  showLoading("⏳ Ob-havo olinmoqda...");

  getWeatherByCoords(lat, lon);
}

/* ❌ Joylashuvda xato */
function onLocationError(error) {
  let message = "";

  switch (error.code) {
    case 1:
      message =
        "Siz joylashuvga ruxsat bermadingiz. " +
        "Brauzer manzil qatoridagi 🔒 belgisidan ruxsat bering.";
      break;
    case 2:
      message = "Joylashuv aniqlanmadi. Internet yoki GPS ni tekshiring.";
      break;
    case 3:
      message = "Vaqt tugadi. Qaytadan urinib ko'ring.";
      break;
    default:
      message = "Joylashuvda noma'lum xatolik yuz berdi.";
  }

  showError(message);
  setButtonsDisabled(false);

  // 🔁 Fallback: avtomatik Toshkentni ko'rsatamiz
  console.log("Fallback shahar ishlatilmoqda:", FALLBACK_CITY);
  setTimeout(() => getWeatherByCity(FALLBACK_CITY), 1200);
}

/* =========================================================
   2️⃣ KOORDINATA BO'YICHA OB-HAVO OLISH
   ========================================================= */
async function getWeatherByCoords(lat, lon) {
  if (isFetching) return;
  isFetching = true;

  try {
    const url =
      `${BASE_URL}?lat=${lat}&lon=${lon}` +
      `&appid=${API_KEY}&units=metric&lang=uz`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Ob-havo ma'lumotini olishda xatolik yuz berdi.");
    }

    const data = await response.json();
    console.log("✅ API javobi:", data);
    displayWeather(data);
  } catch (error) {
    console.error("Xato:", error);
    showError("Internet aloqasini tekshiring yoki keyinroq urinib ko'ring.");
  } finally {
    isFetching = false;
    setButtonsDisabled(false);
  }
}

/* =========================================================
   3️⃣ SHAHAR NOMI BO'YICHA OB-HAVO OLISH
   ========================================================= */
async function getWeatherByCity(city) {
  // Bo'sh yoki faqat probel bo'lsa
  if (!city || !city.trim()) {
    showError("Iltimos, shahar nomini kiriting!");
    return;
  }

  if (isFetching) return;
  isFetching = true;

  showLoading("⏳ Qidirilmoqda...");
  setButtonsDisabled(true);

  try {
    const url =
      `${BASE_URL}?q=${encodeURIComponent(city.trim())}` +
      `&appid=${API_KEY}&units=metric&lang=uz`;

    const response = await fetch(url);

    if (response.status === 404) {
      throw new Error(
        "Shahar topilmadi. Nomini inglizcha yozing " +
          "(masalan: Tashkent, Samarkand, London).",
      );
    }
    if (response.status === 401) {
      throw new Error("API kalit noto'g'ri. Administratorga murojaat qiling.");
    }
    if (!response.ok) {
      throw new Error("Ma'lumot olishda xatolik. Keyinroq urinib ko'ring.");
    }

    const data = await response.json();
    console.log("✅ API javobi:", data);
    displayWeather(data);
  } catch (error) {
    console.error("Xato:", error);
    showError(error.message);
  } finally {
    isFetching = false;
    setButtonsDisabled(false);
  }
}

/* =========================================================
   4️⃣ EKRANGA CHIQARISH
   ========================================================= */
function displayWeather(data) {
  // Xavfsiz tekshiruvlar (agar API to'liq bo'lmasa)
  if (!data || !data.main || !data.weather || !data.weather[0]) {
    showError("Ma'lumot to'liq emas. Qaytadan urinib ko'ring.");
    return;
  }

  const country = data.sys && data.sys.country ? `, ${data.sys.country}` : "";

  cityNameEl.textContent = `${data.name}${country}`;
  tempEl.textContent = `${Math.round(data.main.temp)}°C`;
  descEl.textContent = data.weather[0].description || "—";
  humidityEl.textContent = `${data.main.humidity}%`;
  windEl.textContent = `${data.wind ? data.wind.speed : "—"} m/s`;
  feelsLikeEl.textContent =
    data.main.feels_like !== undefined
      ? `${Math.round(data.main.feels_like)}°C`
      : "—";
  iconEl.textContent = getWeatherEmoji(data.weather[0].main);

  // Natijani ko'rsatamiz, qolganlarini yashiramiz
  weatherCard.classList.remove("hidden");
  errorEl.classList.add("hidden");
  loadingEl.classList.add("hidden");
}

/* =========================================================
   5️⃣ EMOJI TANLASH
   ========================================================= */
function getWeatherEmoji(condition) {
  const emojis = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Fog: "🌫️",
    Haze: "🌫️",
    Smoke: "💨",
    Dust: "🌪️",
    Sand: "🌪️",
    Ash: "🌋",
    Squall: "💨",
    Tornado: "🌪️",
  };
  return emojis[condition] || "🌡️";
}

/* =========================================================
   6️⃣ YORDAMCHI FUNKSIYALAR
   ========================================================= */
function showError(message) {
  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
  loadingEl.classList.add("hidden");
  weatherCard.classList.add("hidden");
}

function showLoading(message) {
  loadingEl.textContent = message;
  loadingEl.classList.remove("hidden");
  errorEl.classList.add("hidden");
  weatherCard.classList.add("hidden");
}

function setButtonsDisabled(state) {
  locationBtn.disabled = state;
  searchBtn.disabled = state;
}

/* =========================================================
   7️⃣ HODISALAR (EVENT LISTENERS)
   ========================================================= */

// 📍 Joylashuv tugmasi
locationBtn.addEventListener("click", getUserLocation);

// 🔍 Qidirish tugmasi
searchBtn.addEventListener("click", () => {
  getWeatherByCity(cityInput.value);
});

// ⌨️ Enter tugmasi
cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeatherByCity(cityInput.value);
  }
});

// 🚀 Sahifa ochilganda — avtomatik joylashuvni aniqlash
window.addEventListener("load", () => {
  getUserLocation();
});
