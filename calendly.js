// ── Intégration Calendly — popup au clic ──
var CALENDLY_URL = 'https://calendly.com/nicitanthony/new-meeting';

function openCalendlyPopup(e) {
  e.preventDefault();
  e.stopPropagation();

  if (typeof Calendly !== 'undefined') {
    Calendly.showPopupWidget(CALENDLY_URL);
  } else {
    // Fallback si le widget Calendly n'est pas chargé
    window.open(CALENDLY_URL, '_blank');
  }

  // Ferme le menu mobile si ouvert
  var navlinks = document.getElementById('navlinks');
  var hamburger = document.getElementById('hamburger');
  if (navlinks && navlinks.classList.contains('open')) {
    navlinks.classList.remove('open');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
  }
}

document.querySelectorAll('[data-calendly-popup]').forEach(function (btn) {
  btn.addEventListener('click', openCalendlyPopup);
});
