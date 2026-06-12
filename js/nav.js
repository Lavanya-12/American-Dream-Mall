/* ═══════════════════════════════════════
   nav.js — Navigation Behavior
═══════════════════════════════════════ */

export function initNav() {
  const nav       = document.getElementById('main-nav');
  const hamburger = document.getElementById('nav-hamburger');
  const overlay   = document.getElementById('nav-overlay');
  const progress  = nav?.querySelector('.nav-progress');
  const navLinks  = document.querySelectorAll('.nav-link[data-goto]');

  if (!nav) return;

  const SECTION_IDS = ['hero','why','retail','luxury','dining','entertainment','events','contact'];

  /* ── Scroll handler ── */
  let ticking = false;

  function handleScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      // Scrolled class
      nav.classList.toggle('scrolled', scrollY > 60);

      // Progress bar
      if (progress) {
        const docH = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.width = docH > 0 ? `${(scrollY / docH) * 100}%` : '0%';
      }

      // Active link
      updateActiveLink();
      ticking = false;
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ── Active section detection ── */
  function updateActiveLink() {
    const mid = window.innerHeight * 0.4; // trigger at 40% from top
    let current = SECTION_IDS[0];

    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= mid) current = id;
    }

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.goto === current);
    });
  }

  /* ── Mobile hamburger ── */
  function closeOverlay() {
    overlay?.classList.remove('open');
    hamburger?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', () => {
    const isOpen = !overlay?.classList.contains('open');
    overlay?.classList.toggle('open', isOpen);
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  overlay?.querySelectorAll('[data-goto]').forEach(link => {
    link.addEventListener('click', closeOverlay);
  });

  overlay?.addEventListener('click', e => {
    if (e.target === overlay) closeOverlay();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeOverlay();
  });
}
