(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) reveals.forEach((item) => item.classList.add('is-visible'));
  else { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .12 }); reveals.forEach((item) => observer.observe(item)); }
  if (!reduced) document.querySelectorAll('[data-glow]').forEach((card) => card.addEventListener('pointermove', (event) => { const rect = card.getBoundingClientRect(); card.style.setProperty('--glow-x', `${event.clientX - rect.left}px`); card.style.setProperty('--glow-y', `${event.clientY - rect.top}px`); }));
})();
