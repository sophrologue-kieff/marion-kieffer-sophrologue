const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const form = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

menuToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent(`Demande de contact de ${data.get('name')}`);
  const body = encodeURIComponent(`Nom : ${data.get('name')}\nE-mail : ${data.get('email')}\n\n${data.get('message')}`);
  window.location.href = `mailto:contact@neuroreflex.fr?subject=${subject}&body=${body}`;
  formStatus.textContent = 'Votre messagerie va s’ouvrir pour finaliser l’envoi.';
});

document.querySelector('#year').textContent = new Date().getFullYear();