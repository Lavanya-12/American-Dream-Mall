/* ═══════════════════════════════════════
   videos.js — Scroll-triggered Video Autoplay
═══════════════════════════════════════ */

export function initVideos() {
  const videos = document.querySelectorAll('[data-autoplay-scroll]');
  if (!videos.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const v = entry.target;
        if (entry.isIntersecting) {
          // Only try to play if the video has a source
          if (v.src || v.querySelector('source[src]')) {
            v.play().catch(() => {
              // Autoplay blocked — poster image is shown as fallback
            });
          }
        } else {
          v.pause();
        }
      });
    },
    { threshold: 0.15 }
  );

  videos.forEach(v => {
    v.muted  = true;
    v.playsInline = true;
    observer.observe(v);
  });
}
