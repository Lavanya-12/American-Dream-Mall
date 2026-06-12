/* ═══════════════════════════════════════
   loader.js — Loading Screen
═══════════════════════════════════════ */

export function initLoader(onComplete) {
  const loader = document.getElementById('loader');
  if (!loader) { onComplete(); return; }

  // Wait for fill animation + small buffer
  const delay = 2400;

  setTimeout(() => {
    loader.classList.add('done');
    onComplete();

    // Remove from DOM after transition
    loader.addEventListener('transitionend', () => {
      loader.remove();
    }, { once: true });
  }, delay);
}
