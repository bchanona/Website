/* ── CUSTOM CURSOR ─────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let fx = 0, fy = 0, cx = 0, cy = 0;

document.addEventListener('mousemove', e => {
  cx = e.clientX;
  cy = e.clientY;
  cursor.style.left = cx + 'px';
  cursor.style.top  = cy + 'px';
});

(function animateFollower() {
  fx += (cx - fx) * 0.14;
  fy += (cy - fy) * 0.14;
  follower.style.left = fx + 'px';
  follower.style.top  = fy + 'px';
  requestAnimationFrame(animateFollower);
})();

document.querySelectorAll('a, button, .tech-card, .project-card, .blog-card, .skill-group').forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
});

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
  '.reveal, .tech-card, .project-card, .exp-item, .skill-group, .blog-card'
).forEach(el => revealObserver.observe(el));
