// Ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const nav = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('is-open');
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('is-open'));
});

// Revela os cards de projeto ao rolar a página
const cards = document.querySelectorAll('.card');

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => cardObserver.observe(card));

// Galeria com lightbox (clique pra ampliar) — roda uma única vez, fora do observer
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('is-open');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
});

// ===== Toggle de idioma (PT / EN) =====
const LANG_KEY = 'site-lang';
const translatableEls = document.querySelectorAll('[data-en]');
const langButtons = document.querySelectorAll('.lang-toggle button');

function setLanguage(lang) {
  translatableEls.forEach(el => {
    // na primeira troca, guarda o texto original em português
    if (!el.dataset.pt) el.dataset.pt = el.textContent;
    el.textContent = lang === 'en' ? el.dataset.en : el.dataset.pt;
  });

  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

  langButtons.forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });

  localStorage.setItem(LANG_KEY, lang);
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// aplica o idioma salvo (ou português, na primeira visita)
setLanguage(localStorage.getItem(LANG_KEY) || 'pt');
