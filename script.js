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

// Efeito de "máquina de escrever" estilo caixa de diálogo de RPG
const typewriterEl = document.getElementById('typewriter');
const fullText = 'Crio sprites, animações e interfaces com alma de jogo — do rascunho ao pixel final.';
let i = 0;

function typeWriter() {
  if (i <= fullText.length) {
    typewriterEl.textContent = fullText.slice(0, i);
    i++;
    setTimeout(typeWriter, 28);
  }
}

// Respeita usuários que preferem menos animação
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  typewriterEl.textContent = fullText;
} else {
  typeWriter();
}

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
