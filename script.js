// Ano automático no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Menu mobile
const shell = document.querySelector('.shell');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  shell.classList.toggle('is-open');
});

document.querySelectorAll('.shell__links a').forEach(link => {
  link.addEventListener('click', () => shell.classList.remove('is-open'));
});

// D-pad funcional: sobe/desce uma seção por clique
const sections = Array.from(document.querySelectorAll('main.screen > section'));

function currentSectionIndex() {
  const scrollPos = window.scrollY + window.innerHeight / 3;
  let idx = 0;
  sections.forEach((sec, i) => {
    if (sec.offsetTop <= scrollPos) idx = i;
  });
  return idx;
}

document.querySelectorAll('.dpad__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const dir = btn.dataset.dir;
    const idx = currentSectionIndex();
    const targetIdx = dir === 'up' ? Math.max(0, idx - 1) : Math.min(sections.length - 1, idx + 1);
    sections[targetIdx].scrollIntoView({ behavior: 'smooth' });
  });
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
