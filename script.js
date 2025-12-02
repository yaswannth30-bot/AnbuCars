// app.js — interactions for AnbuCars site

// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Close nav when link clicked on mobile
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("open");
      }
    });
  });
}

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Contact constants
const PHONE = "+918015155872";
const WHATSAPP_URL = "https://wa.me/918015155872";

// Header buttons
const callTopBtn = document.getElementById("callTop");
const whatsappTopBtn = document.getElementById("whatsappTop");

if (callTopBtn) {
  callTopBtn.addEventListener("click", () => {
    window.location.href = "tel:" + PHONE;
  });
}

if (whatsappTopBtn) {
  whatsappTopBtn.addEventListener("click", () => {
    window.open(WHATSAPP_URL, "_blank");
  });
}

// Hero buttons
const heroBookBtn = document.getElementById("heroBook");
const heroWhatsAppBtn = document.getElementById("heroWhatsApp");

if (heroBookBtn) {
  heroBookBtn.addEventListener("click", () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

if (heroWhatsAppBtn) {
  heroWhatsAppBtn.addEventListener("click", () => {
    window.open(WHATSAPP_URL, "_blank");
  });
}

// Quick contact buttons
const callQuickBtn = document.getElementById("callQuick");
const whatsappQuickBtn = document.getElementById("whatsappQuick");

if (callQuickBtn) {
  callQuickBtn.addEventListener("click", () => {
    window.location.href = "tel:" + PHONE;
  });
}

if (whatsappQuickBtn) {
  whatsappQuickBtn.addEventListener("click", () => {
    window.open(WHATSAPP_URL, "_blank");
  });
}