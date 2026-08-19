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

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

cards.forEach(card => observer.observe(card));
