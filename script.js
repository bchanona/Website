/* ── NAVBAR SCROLL ─────────────────────────────────────── */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30);
});

/* ── HAMBURGER MENU ────────────────────────────────────── */
const ham  = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');

ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  menu.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    ham.classList.remove('open');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── INTERSECTION OBSERVER (reveal animations) ─────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.reveal, .tech-card, .project-card, .exp-item, .skill-group'
).forEach(el => revealObserver.observe(el));