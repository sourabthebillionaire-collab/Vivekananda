document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burgerBtn');
  const mnav = document.getElementById('mobileNav');
  if (burger) burger.addEventListener('click', () => mnav.classList.toggle('open'));
  const close = document.getElementById('mnavClose');
  if (close) close.addEventListener('click', () => mnav.classList.remove('open'));
  document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => mnav.classList.remove('open')));

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Gallery filter (only present on gallery.html)
  const filterBtns = document.querySelectorAll('.gal-filter button');
  const galItems = document.querySelectorAll('.gal-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      galItems.forEach(item => {
        item.style.display = (f === 'all' || item.dataset.cat === f) ? '' : 'none';
      });
    });
  });

  // Forms (static demo — no backend wired up yet)
  document.querySelectorAll('form.demo-form').forEach(f => {
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks! This is a demo form — connect it to email or a form service (e.g. Formspree) to receive real enquiries.');
      f.reset();
    });
  });
});
