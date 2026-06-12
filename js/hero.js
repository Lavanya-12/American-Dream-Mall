/* ═══════════════════════════════════════
   hero.js — Animated Stat Counters
═══════════════════════════════════════ */

export function initHero() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animated = new Set();

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || animated.has(entry.target)) return;
        animated.add(entry.target);
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );

  counters.forEach(el => observer.observe(el));
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function animateCounter(el) {
  const target     = parseFloat(el.dataset.count);
  const isDecimal  = !Number.isInteger(target);
  const duration   = 2200;
  const startTime  = performance.now();

  function tick(now) {
    const elapsed  = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value    = easeOutExpo(progress) * target;

    el.textContent = isDecimal
      ? value.toFixed(1)
      : Math.floor(value).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      el.textContent = isDecimal ? target.toFixed(1) : target.toLocaleString();
    }
  }

  requestAnimationFrame(tick);
}
