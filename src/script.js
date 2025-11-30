// EDITABLE: no framework needed—tweak messages/behavior below if desired.
const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.site-nav a');
const yearEl = document.getElementById('year');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    header.classList.toggle('open');
  });

  navLinks.forEach((link) =>
    link.addEventListener('click', () => {
      header.classList.remove('open');
    })
  );
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    // EDITABLE: Replace alert copy or hook up to a backend service.
    alert(`Thanks ${name}! I will respond to ${email} soon.`);
    contactForm.reset();
  });
}
