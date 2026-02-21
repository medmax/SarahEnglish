// ── Copyright year (toutes les pages)
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// ── Année de mise à jour (politique-confidentialite.html)
const updateYear = document.getElementById('update-year');
if (updateYear) updateYear.textContent = new Date().getFullYear();

// ── Nav scroll (index.html)
const nav = document.getElementById('mainnav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ── Hamburger menu (index.html)
const hamburger = document.getElementById('hamburger');
const navlinks   = document.getElementById('navlinks');
if (hamburger && navlinks) {
  hamburger.addEventListener('click', () => {
    const open = navlinks.classList.toggle('open');
    hamburger.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
  });
  navlinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navlinks.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Fade-in on scroll (index.html)
const fadeEls = document.querySelectorAll('.fade-in');
if (fadeEls.length > 0) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  fadeEls.forEach(el => io.observe(el));
}
