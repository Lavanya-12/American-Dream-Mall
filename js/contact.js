/* ═══════════════════════════════════════
   contact.js — Contact Form + Intent Tabs
═══════════════════════════════════════ */

export function initContact() {
  /* ── Intent tabs ── */
  const tabs = document.querySelectorAll('.intent-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update placeholder text based on intent
      const msg = document.getElementById('cf-message');
      if (!msg) return;
      const intent = tab.dataset.intent;
      const placeholders = {
        leasing:     "Tell us about your brand, preferred location type, and approximate size requirements...",
        sponsorship: "Tell us about your brand, campaign goals, and the kind of partnership you're envisioning...",
        events:      "Tell us about your event — type, expected attendance, preferred dates, and any technical requirements...",
      };
      msg.placeholder = placeholders[intent] || "Tell us about your opportunity...";
    });
  });

  /* ── Submit ── */
  const submitBtn = document.getElementById('contact-submit');
  const confirm   = document.getElementById('contact-confirm');

  submitBtn?.addEventListener('click', () => {
    const name    = document.getElementById('cf-name')?.value.trim();
    const email   = document.getElementById('cf-email')?.value.trim();
    const company = document.getElementById('cf-company')?.value.trim();

    if (!name || !email) {
      // Simple validation shake
      const form = submitBtn.closest('.contact-form-wrap');
      form?.classList.add('shake');
      setTimeout(() => form?.classList.remove('shake'), 500);
      return;
    }

    // Show confirmation
    submitBtn.style.display = 'none';
    if (confirm) confirm.classList.add('show');
  });
}
