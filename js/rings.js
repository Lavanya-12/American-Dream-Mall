/* ═══════════════════════════════════════
   rings.js — SVG Ring Chart Animations
═══════════════════════════════════════ */

export function initRings() {
  const rings = document.querySelectorAll('.demo-ring');
  if (!rings.length) return;

  const circumference = 226; // 2 * π * r (r=36)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const ring = entry.target;
        const pct  = parseFloat(ring.dataset.pct || 0);
        animateRing(ring, pct, circumference);
        observer.unobserve(ring);
      });
    },
    { threshold: 0.5 }
  );

  rings.forEach(ring => observer.observe(ring));
}

function animateRing(ring, pct, circumference) {
  const fill     = ring.querySelector('.ring-fill');
  if (!fill) return;

  const targetOffset = circumference - (pct / 100) * circumference;
  const duration     = 1400;
  const startOffset  = circumference;
  const start        = performance.now();

  function ease(t) {
    // easeOutCubic
    return 1 - Math.pow(1 - t, 3);
  }

  function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const current  = startOffset + (targetOffset - startOffset) * ease(progress);
    fill.style.strokeDashoffset = current;

    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}
