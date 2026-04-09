// Scroll-reveal animation
const revealEls = document.querySelectorAll(
  '.about p, .card, .visit-list li, .visit-quote blockquote, .section h2'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

revealEls.forEach(el => observer.observe(el));

// Smooth active-link highlight in nav
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('nav ul a');

const sectionObserver = new IntersectionObserver(
  entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + e.target.id ? '#d4a017' : '';
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach(s => sectionObserver.observe(s));
