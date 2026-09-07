/* ============================================
   1. STICKY HEADER — skroll paytida ko'rinishini o'zgartirish
   ============================================ */
const header = document.getElementById("site-header");
function handleHeaderScroll() {
  if (window.scrollY > 12) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleHeaderScroll);
handleHeaderScroll();

/* ============================================
   2. BURGER MENYU (mobil navigatsiya)
   ============================================ */
const burgerBtn = document.getElementById("burger-btn");
const mainNav = document.getElementById("main-nav");
const navScrim = document.getElementById("nav-scrim");

function toggleMenu(open) {
  const shouldOpen = open ?? !mainNav.classList.contains("open");
  mainNav.classList.toggle("open", shouldOpen);
  burgerBtn.classList.toggle("active", shouldOpen);
  navScrim.classList.toggle("show", shouldOpen);
  burgerBtn.setAttribute("aria-expanded", String(shouldOpen));
  document.body.style.overflow = shouldOpen ? "hidden" : "";
}

burgerBtn.addEventListener("click", () => toggleMenu());
navScrim.addEventListener("click", () => toggleMenu(false));

// Havola bosilganda menyuni yopish (mobil)
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

/* ============================================
   3. SKROLLDA PAYDO BO'LISH ANIMATSIYASI (Intersection Observer)
   ============================================ */
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
revealEls.forEach((el) => revealObserver.observe(el));

/* ============================================
   4. KO'NIKMALAR — progress-barlarni ko'rinishga kirganda to'ldirish
   ============================================ */
const skillBars = document.querySelectorAll(".skill-fill");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bars = entry.target.querySelectorAll(".skill-fill");
        bars.forEach((bar) => {
          bar.style.width = bar.dataset.percent + "%";
        });
        skillObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);
const skillContainer = document.getElementById("skill-bars");
if (skillContainer) skillObserver.observe(skillContainer);

/* ============================================
   5. HERO'DAGI "TYPING" ANIMATSIYASI
   ============================================ */
const typedLine = document.getElementById("typed-line");
const typedText = "status: 'ready to build'";
let typeIndex = 0;
function typeWriter() {
  if (!typedLine) return;
  if (typeIndex <= typedText.length) {
    typedLine.textContent = typedText.slice(0, typeIndex);
    typeIndex++;
    setTimeout(typeWriter, 45);
  }
}
window.addEventListener("load", () => setTimeout(typeWriter, 500));

/* ============================================
   6. ALOQA FORMASI — VALIDATSIYA
   ============================================ */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

function setFieldValid(fieldId, isValid) {
  const field = document.getElementById(fieldId);
  field.classList.toggle("invalid", !isValid);
  return isValid;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameVal = document.getElementById("name").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const subjectVal = document.getElementById("subject").value.trim();
  const messageVal = document.getElementById("message").value.trim();

  // Har bir maydonni tekshirish
  const nameOk = setFieldValid("field-name", nameVal.length >= 2);
  const emailOk = setFieldValid("field-email", isValidEmail(emailVal));
  const subjectOk = setFieldValid("field-subject", subjectVal.length >= 2);
  const messageOk = setFieldValid("field-message", messageVal.length >= 10);

  const allValid = nameOk && emailOk && subjectOk && messageOk;

  formStatus.classList.remove("ok", "fail");

  if (!allValid) {
    formStatus.textContent = "Iltimos, formadagi xatoliklarni to'g'rilang.";
    formStatus.classList.add("show", "fail");
    return;
  }

  // Bu yerda haqiqiy loyihada backend/API'ga so'rov yuboriladi.
  // Hozircha muvaffaqiyatli yuborilgani haqida xabar ko'rsatamiz.
  formStatus.textContent = "Xabaringiz uchun rahmat! Tez orada javob beraman.";
  formStatus.classList.add("show", "ok");
  contactForm.reset();

  setTimeout(() => {
    formStatus.classList.remove("show");
  }, 5000);
});

/* ============================================
   7. FOOTER — joriy yilni avtomatik ko'rsatish
   ============================================ */
document.getElementById("year").textContent = new Date().getFullYear();
