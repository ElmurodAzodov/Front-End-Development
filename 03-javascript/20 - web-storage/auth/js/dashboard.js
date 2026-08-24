/**
 * dashboard.js
 * ---------------------------------------------------------------------------
 * Himoyalangan (protected) sahifa logikasi.
 *  - Sessiya yo'q bo'lsa -> index.html'ga qaytaradi (route guard)
 *  - Boshqa tabda logout bo'lsa -> shu sahifa ham avtomatik chiqadi
 * ---------------------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", () => {
  const session = AuthService.getCurrentSession();

  // ---- ROUTE GUARD: sessiya yo'q bo'lsa, login sahifasiga qaytarish ----
  if (!session) {
    window.location.href = "index.html";
    return;
  }

  // ---- Foydalanuvchi ma'lumotlarini ekranga chiqarish ----
  document.getElementById("user-name").textContent = session.fullName;
  document.getElementById("stat-email").textContent = session.email;
  document.getElementById("stat-login-time").textContent = new Date(
    session.loginAt,
  ).toLocaleString("uz-UZ");
  document.getElementById("stat-token").textContent =
    session.token.slice(0, 16) + "…";
  document.getElementById("stat-cookie").textContent =
    AuthService._getCookie("auth_last_login") || "—";

  // ---- Chiqish tugmasi ----
  document.getElementById("logout-btn").addEventListener("click", () => {
    AuthService.logout();
    window.location.href = "index.html";
  });

  // ---- Tablararo sinxronizatsiya: boshqa tabda "Chiqish" bosilsa ----
  AuthService.watchLogoutAcrossTabs(() => {
    alert("Siz boshqa oynada tizimdan chiqdingiz.");
    window.location.href = "index.html";
  });
});
