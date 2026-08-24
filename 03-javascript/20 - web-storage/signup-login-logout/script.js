// ============================
// ELEMENTLARNI OLISH
// ============================

const signupBox = document.querySelector("#signupBox");
const loginBox = document.querySelector("#loginBox");
const homeBox = document.querySelector("#homeBox");

const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");

const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

const signupBtn = document.querySelector("#signupBtn");
const loginBtn = document.querySelector("#loginBtn");

const showLogin = document.querySelector("#showLogin");
const showSignup = document.querySelector("#showSignup");

const logoutBtn = document.querySelector("#logoutBtn");

const userName = document.querySelector("#userName");

// ============================
// SIGN UP
// ============================

signupBtn.addEventListener("click", function () {
  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();

  if (!name || !email || !password) {
    alert("Barcha maydonlarni to'ldiring!");
    return;
  }

  const user = {
    name,
    email,
    password,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Ro'yxatdan o'tish muvaffaqiyatli!");

  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";

  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

// ============================
// SIGN UP → LOGIN
// ============================

showLogin.addEventListener("click", function () {
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

// ============================
// LOGIN → SIGN UP
// ============================

showSignup.addEventListener("click", function () {
  loginBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
});

// ============================
// LOGIN
// ============================

loginBtn.addEventListener("click", function () {
  const email = loginEmail.value.trim();
  const password = loginPassword.value.trim();

  const userData = localStorage.getItem("user");

  if (!userData) {
    alert("Bunday foydalanuvchi mavjud emas!");
    return;
  }

  const user = JSON.parse(userData);

  if (email === user.email && password === user.password) {
    // Session yaratish
    sessionStorage.setItem("isLoggedIn", "true");

    // Login oynasini yopamiz
    loginBox.classList.add("hidden");

    // Home oynasini ochamiz
    homeBox.classList.remove("hidden");

    // User ismini chiqaramiz
    userName.textContent = user.name;

    alert("Login muvaffaqiyatli!");
  } else {
    alert("Email yoki parol noto'g'ri!");
  }
});

// ============================
// LOGOUT
// ============================

logoutBtn.addEventListener("click", function () {
  // Sessionni o'chiramiz
  sessionStorage.removeItem("isLoggedIn");

  // Home'ni yopamiz
  homeBox.classList.add("hidden");

  // Login'ni ochamiz
  loginBox.classList.remove("hidden");

  // Inputlarni tozalaymiz
  loginEmail.value = "";
  loginPassword.value = "";
});

// ============================
// PAGE LOAD
// ============================

const isLoggedIn = sessionStorage.getItem("isLoggedIn");

if (isLoggedIn === "true") {
  const userData = localStorage.getItem("user");

  if (userData) {
    const user = JSON.parse(userData);

    signupBox.classList.add("hidden");
    loginBox.classList.add("hidden");
    homeBox.classList.remove("hidden");

    userName.textContent = user.name;
  }
}
