/* ═══════════════════════════════════════
   reel.js — Dining Scroll Reel
═══════════════════════════════════════ */

export function initReel() {
  const viewport = document.querySelector('.dining-reel-viewport');
  const track    = document.querySelector('.dining-reel-track');
  const prevBtn  = document.querySelector('.reel-btn-prev');
  const nextBtn  = document.querySelector('.reel-btn-next');

  if (!track || !viewport) return;

  let index   = 0;
  const cards = Array.from(track.querySelectorAll('.dining-card'));
  const total = cards.length;

  /* Card width = element width + CSS gap (24px from sections.css) */
  function getCardWidth() {
    if (!cards[0]) return 0;
    // Use gap between first two cards if available, else fallback to 24px
    const gap = cards[1]
      ? cards[1].getBoundingClientRect().left - cards[0].getBoundingClientRect().right
      : 24;
    return cards[0].getBoundingClientRect().width + gap;
  }

  function slideTo(i) {
    index = Math.max(0, Math.min(i, total - 1));
    track.style.transform = `translateX(${-(index * getCardWidth())}px)`;
    // Update button states
    if (prevBtn) prevBtn.style.opacity = index === 0 ? '0.35' : '1';
    if (nextBtn) nextBtn.style.opacity = index >= total - 1 ? '0.35' : '1';
  }

  // Initial state
  slideTo(0);

  prevBtn?.addEventListener('click', () => slideTo(index - 1));
  nextBtn?.addEventListener('click', () => slideTo(index + 1));

  /* ── Touch / mouse drag ── */
  let startX     = 0;
  let isDragging = false;

  function onDragStart(x) {
    startX     = x;
    isDragging = true;
    track.style.transition = 'none';
  }

  function onDragEnd(x) {
    if (!isDragging) return;
    isDragging             = false;
    track.style.transition = '';
    const diff             = startX - x;
    if (Math.abs(diff) > 50) slideTo(diff > 0 ? index + 1 : index - 1);
    else slideTo(index); // snap back
  }

  track.addEventListener('mousedown',  e => onDragStart(e.clientX));
  document.addEventListener('mouseup', e => onDragEnd(e.clientX));

  track.addEventListener('touchstart', e => onDragStart(e.touches[0].clientX),       { passive: true });
  track.addEventListener('touchend',   e => onDragEnd(e.changedTouches[0].clientX),   { passive: true });

  /* ── Auto-advance every 5s ── */
  let timer = setInterval(() => slideTo(index + 1 >= total ? 0 : index + 1), 5000);

  const pause = () => clearInterval(timer);
  const resume = () => {
    clearInterval(timer);
    timer = setInterval(() => slideTo(index + 1 >= total ? 0 : index + 1), 5000);
  };

  viewport.addEventListener('mouseenter', pause);
  viewport.addEventListener('mouseleave', resume);

  /* Recalculate on resize */
  window.addEventListener('resize', () => slideTo(index), { passive: true });
}
