const progress = document.getElementById("progress");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

menuBtn?.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : "0%";
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

contactForm?.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:smounica656@gmail.com?subject=${subject}&body=${body}`;
  formNote.textContent = "Your email client should open with the message prepared.";
});

document.getElementById("year").textContent = new Date().getFullYear();
