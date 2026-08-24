/**
 * app.js
 * ---------------------------------------------------------------------------
 * index.html (login / register) sahifasining boshqaruv logikasi.
 * ---------------------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  // Agar foydalanuvchi allaqachon kirgan bo'lsa — to'g'ridan-to'g'ri dashboard'ga
  if (AuthService.isAuthenticated()) {
    window.location.href = "dashboard.html";
    return;
  }

  // ------------------------------------------------------------------
  // Tab almashtirish (Kirish / Ro'yxatdan o'tish)
  // ------------------------------------------------------------------
  const tabs = document.querySelectorAll(".tab");
  const forms = document.querySelectorAll(".form");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      forms.forEach((f) => f.classList.remove("active"));

      tab.classList.add("active");
      document.getElementById(`${tab.dataset.tab}-form`).classList.add("active");
    });
  });

  // ------------------------------------------------------------------
  // Ro'yxatdan o'tish formasi
  // ------------------------------------------------------------------
  const registerForm = document.getElementById("register-form");
  const registerMessage = document.getElementById("register-message");

  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    registerMessage.textContent = "";
    registerMessage.className = "message";

    const fullName = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value;

    const result = await AuthService.register({ fullName, email, password });

    registerMessage.textContent = result.message;
    registerMessage.classList.add(result.ok ? "success" : "error");

    if (result.ok) {
      registerForm.reset();
      // Muvaffaqiyatli ro'yxatdan o'tgach, "Kirish" tabiga o'tkazamiz
      setTimeout(() => {
        document.querySelector('.tab[data-tab="login"]').click();
      }, 900);
    }
  });

  // ------------------------------------------------------------------
  // Kirish formasi
  // ------------------------------------------------------------------
  const loginForm = document.getElementById("login-form");
  const loginMessage = document.getElementById("login-message");

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginMessage.textContent = "";
    loginMessage.className = "message";

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value;
    const remember = document.getElementById("login-remember").checked;

    const result = await AuthService.login({ email, password, remember });

    loginMessage.textContent = result.message;
    loginMessage.classList.add(result.ok ? "success" : "error");

    if (result.ok) {
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 500);
    }
  });
});
