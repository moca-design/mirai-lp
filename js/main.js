// ===== モバイルメニュー =====
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach((l) => l.addEventListener("click", () => {
    nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
  }));
}

// ===== スクロールでヘッダーに背景 =====
const header = document.querySelector(".site-header");
const onScroll = () => { if (window.scrollY > 40) header.classList.add("scrolled"); else header.classList.remove("scrolled"); };
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ===== スクロール・リビール =====
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// ===== フッター年号 =====
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();
