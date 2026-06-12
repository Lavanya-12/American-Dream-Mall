/* ═══════════════════════════════════════
   main.js — App Initialization
   American Dream Interactive Sales Deck
═══════════════════════════════════════ */

import { initLoader }  from './loader.js';
import { initNav }     from './nav.js';
import { initScroll }  from './scroll.js';
import { initHero }    from './hero.js';
import { initTabs }    from './tabs.js';
import { initReel }    from './reel.js';
import { initRings }   from './rings.js';
import { initModal }   from './modal.js';
import { initContact } from './contact.js';
import { initVideos }  from './videos.js';

document.addEventListener('DOMContentLoaded', () => {
  initLoader(() => {
    initNav();
    initScroll();
    initHero();
    initTabs();
    initReel();
    initRings();
    initModal();
    initContact();
    initVideos();
    initSmoothGoto();
    initCursorGlow();
  });
});

/* ── Smooth scroll-to by data-goto ── */
function initSmoothGoto() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-goto]');
    if (!btn) return;

    // Don't intercept if it's also a data-modal trigger
    if (btn.dataset.modal) return;

    const id = btn.dataset.goto;
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Close mobile nav
    document.getElementById('nav-overlay')?.classList.remove('open');
    document.getElementById('nav-hamburger')?.classList.remove('open');
    document.body.style.overflow = '';
  });
}

/* ── Cursor glow (pointer device only) ── */
function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let cx = mx, cy = my;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  function lerp(a, b, t) { return a + (b - a) * t; }

  (function loop() {
    cx = lerp(cx, mx, 0.07);
    cy = lerp(cy, my, 0.07);
    glow.style.left = `${cx}px`;
    glow.style.top  = `${cy}px`;
    requestAnimationFrame(loop);
  })();
}
