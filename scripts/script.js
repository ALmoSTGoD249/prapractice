const root = document.documentElement;
const toggleBtn = document.getElementById("themeToggle");

// ==========================
// THEME SETTER
// ==========================
function setTheme(theme){
  root.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  if (!toggleBtn) return;

  toggleBtn.innerHTML = theme === "dark"
    ? `<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
         <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/>
       </svg>`
    : `<svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2">
         <circle cx="12" cy="12" r="5"/>
         <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/>
       </svg>`;
}

// ==========================
// INIT (NO FLICKER)
// ==========================
(function(){
  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
})();

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
});

// ==========================
// TOGGLE
// ==========================
toggleBtn?.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  setTheme(current === "dark" ? "light" : "dark");
});

// ==========================
// APPLE-STYLE ENTRY ANIMATION
// ==========================
window.addEventListener("load", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "all 0.6s cubic-bezier(.2,.8,.2,1)";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 80);
  });
});

// ==========================
// SUBTLE HOVER GLOW (APPLE-LIKE)
// ==========================
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px,
      rgba(255,255,255,0.08),
      rgba(255,255,255,0.04) 40%)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "var(--glass)";
  });
});