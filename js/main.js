// Marcos R. Andrade — Portfólio

// Ano automático no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();

// Sombra no cabeçalho ao rolar
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Animação de entrada das seções
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Destaca o item do menu da seção visível
const links = [...nav.querySelectorAll('a[href^="#"]')];
const spy = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => spy.observe(s));

// Visualizador das pranchas do projeto elétrico
const lb = document.getElementById('lightbox');
const lbImg = lb.querySelector('img');
const thumbs = [...document.querySelectorAll('.thumb')];
let current = 0;

const show = i => {
  current = (i + thumbs.length) % thumbs.length;
  lbImg.src = thumbs[current].dataset.full;
};
const openLb = i => { show(i); lb.hidden = false; document.body.style.overflow = 'hidden'; };
const closeLb = () => { lb.hidden = true; document.body.style.overflow = ''; };

thumbs.forEach((t, i) => t.addEventListener('click', () => openLb(i)));
lb.querySelector('.lb-close').addEventListener('click', closeLb);
lb.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
lb.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
document.addEventListener('keydown', e => {
  if (lb.hidden) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});
