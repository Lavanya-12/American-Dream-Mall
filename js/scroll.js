/* ═══════════════════════════════════════
   scroll.js — Intersection Observer Reveals
=══════════════════════════════════════ */

export function initScroll() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── If reduced motion: reveal everything immediately ── */
  if (reducedMotion) {
    document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('revealed'));
    return;
  }

  /* ── Reveal Observer ── */
  const revealEls = document.querySelectorAll('[data-reveal]');

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  revealEls.forEach(el => revealObserver.observe(el));

  /* ── Parallax ── */
  const parallaxWraps = document.querySelectorAll('.parallax-img');
  if (!parallaxWraps.length) return;

  let raf = null;

  function updateParallax() {
    parallaxWraps.forEach(wrap => {
      const rect = wrap.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const shift    = (progress - 0.5) * 50;
      const img      = wrap.querySelector('img, video');
      if (img) img.style.transform = `scale(1.1) translateY(${shift}px)`;
    });
    raf = null;
  }

  window.addEventListener('scroll', () => {
    if (!raf) raf = requestAnimationFrame(updateParallax);
  }, { passive: true });

  updateParallax();
}
