// DESAFIO 3 — Animação de entrada dos projetos
// O seletor abaixo contém um erro. Corrija-o usando a classe presente nos <article>
// de projetos. Com isso, os projetos surgirão de baixo para cima ao rolar a página.
const projects = document.querySelectorAll('.projeto');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.15});
projects.forEach((project) => observer.observe(project));
