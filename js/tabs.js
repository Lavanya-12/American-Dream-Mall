/* ═══════════════════════════════════════
   tabs.js — Entertainment Tabs
═══════════════════════════════════════ */

export function initTabs() {
  const tabNav = document.querySelector('.ent-tab-nav');
  if (!tabNav) return;

  const buttons = Array.from(tabNav.querySelectorAll('.ent-tab-btn'));
  const panels  = Array.from(document.querySelectorAll('.ent-panel'));

  if (!buttons.length || !panels.length) return;

  function activateTab(btn) {
    const target = btn.dataset.tab;

    // Update button states
    buttons.forEach(b => b.classList.toggle('active', b === btn));

    // Deactivate all panels first (remove active + visible)
    panels.forEach(panel => {
      panel.classList.remove('active', 'visible');
    });

    // Activate target panel — two-frame trick to trigger CSS transition
    const targetPanel = document.getElementById(`tab-${target}`);
    if (!targetPanel) return;

    targetPanel.classList.add('active');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        targetPanel.classList.add('visible');
      });
    });
  }

  // Click listeners
  buttons.forEach(btn => {
    btn.addEventListener('click', () => activateTab(btn));
  });

  // Activate first tab on init
  activateTab(buttons[0]);
}
