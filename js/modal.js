/* ═══════════════════════════════════════
   modal.js — Modal System
=══════════════════════════════════════ */

const MODAL_CONTENT = {
  flagship: {
    tag: 'Retail Leasing · Flagship',
    title: 'Flagship Store Opportunities',
    body: `American Dream's flagship positions are the most high-visibility retail placements in the New York Metro area. Purpose-designed for brands that demand maximum impact — with 55 million annual visitors and the highest sustained dwell time of any retail property in New Jersey.`,
    specs: [
      ['Size Range',             '10,000 – 80,000 sq ft'],
      ['Frontage',               'Up to 200 linear ft'],
      ['Floor Configuration',    '1–3 levels available'],
      ['Daily Adjacency Traffic','15,000+ visitors/day'],
      ['Lease Term',             '5–15 years'],
      ['Current Availability',   'Select slots — enquire for list'],
    ],
    cta: 'Request Flagship Details',
    ctaGoto: 'contact',
  },
  boutique: {
    tag: 'Retail Leasing · Boutique',
    title: 'Boutique & Mid-Tier Spaces',
    body: `Curated placement within high-traffic corridors. Boutique spaces are positioned within category-specific clusters — adjacent to anchor tenants in your sector, with sight lines and daily footfall that justify premium investment.`,
    specs: [
      ['Size Range',      '1,500 – 10,000 sq ft'],
      ['Positioning',     'Category-cluster corridors'],
      ['Foot Traffic',    '8,000–12,000 daily adjacency'],
      ['Lease Term',      '3–10 years'],
      ['Fit-Out Support', 'Available via approved vendors'],
      ['Storage',         'Back-of-house available'],
    ],
    cta: 'Request Boutique Details',
    ctaGoto: 'contact',
  },
  popup: {
    tag: 'Retail Leasing · Pop-Up',
    title: 'Pop-Up & Activation Spaces',
    body: `Test the market before committing to permanent space. Our pop-up program puts your brand in front of 55 million visitors with terms as short as 7 days. Perfect for product launches, seasonal campaigns, or market entry. No long-term commitment — all the reach.`,
    specs: [
      ['Minimum Term',   '7 days'],
      ['Size Range',     '200 – 5,000 sq ft'],
      ['Availability',   '365 days/year'],
      ['Setup Support',  'Full build-out service available'],
      ['Turn-Key Option','Furnished & branded spaces'],
      ['Media',          'In-house digital screens & PA'],
    ],
    cta: 'Check Pop-Up Availability',
    ctaGoto: 'contact',
  },
  fnb: {
    tag: 'Retail Leasing · Food & Beverage',
    title: 'F&B Concept Opportunities',
    body: `8 million dining visits annually. American Dream's food & beverage program is a destination in its own right — not a mall amenity. With 100+ concepts across three food halls, QSR corridors, and fine dining environments, food is a primary traffic driver that benefits every adjacent tenant.`,
    specs: [
      ['Annual F&B Visits', '8 million+'],
      ['Avg Spend/Visit',   '$42'],
      ['Active Concepts',   '100+'],
      ['Food Hall Zones',   '3 distinct environments'],
      ['License Types',     'Full liquor (select spaces)'],
      ['Outdoor Seating',   'Available in select zones'],
    ],
    cta: 'Explore F&B Placement',
    ctaGoto: 'contact',
  },
  luxury: {
    tag: 'Luxury Wing · Private Enquiry',
    title: 'Luxury Wing Placement',
    body: `The Luxury Wing is a gallery-like retail environment with no adjacency conflicts, dedicated clienteling infrastructure, and a visitor profile that concentrates the highest household incomes in the Northeast. Our team works directly with brand leadership to evaluate fit, placement, and commercial structure.`,
    specs: [
      ['Visitor HHI',         '$150,000+ average'],
      ['International Ratio', '60% of luxury wing traffic'],
      ['Dwell Premium',       '2.1× vs standard wing avg'],
      ['Design Standards',    'Custom fit-out required'],
      ['Adjacency',           'Luxury-only curated corridor'],
      ['Enquiry Type',        'By invitation / consultation'],
    ],
    cta: 'Request Luxury Consultation',
    ctaGoto: 'contact',
    gold: true,
  },
  'sponsor-founding': {
    tag: 'Sponsorship · Founding Partner',
    title: 'Founding Partner Program',
    body: `Founding Partners receive the deepest integration at American Dream. This is a multi-year, category-exclusive relationship that positions your brand as a permanent fixture — not just a logo in a lobby. Includes naming rights opportunities for key venues and zones.`,
    specs: [
      ['Category Exclusivity', 'Full property-wide'],
      ['Naming Rights',        'Available for venues & zones'],
      ['Annual Impressions',   '55M branded touchpoints'],
      ['Activation Space',     'Dedicated permanent zone'],
      ['Event Co-Branding',    'Unlimited annual events'],
      ['Term',                 'Multi-year, negotiated directly'],
    ],
    cta: 'Begin Founding Partner Conversation',
    ctaGoto: 'contact',
  },
  'sponsor-premier': {
    tag: 'Sponsorship · Premier Partner',
    title: 'Premier Partnership Program',
    body: `Premier Partners receive category exclusivity, dedicated activation zones, digital integration across the full property network, and co-branding on up to 12 major annual events. Built for brands that need sustained presence and measurable attribution.`,
    specs: [
      ['Annual Impressions',  '30M+ branded touchpoints'],
      ['Activation Zone',     'Dedicated 2,000 sq ft'],
      ['Annual Events',       '12 co-branded events'],
      ['Digital Network',     'Full property screen integration'],
      ['Social Package',      'Monthly co-produced content'],
      ['Term',                '2–5 year agreements'],
    ],
    cta: 'Begin Premier Conversation',
    ctaGoto: 'contact',
  },
  'sponsor-brand': {
    tag: 'Sponsorship · Brand Partner',
    title: 'Brand Partnership Program',
    body: `The entry point for brands on the American Dream platform. Brand Partners access pop-up activation spaces, seasonal campaign integration, event participation, and digital presence — with full flexibility to scale the relationship over time.`,
    specs: [
      ['Activation',      'Pop-up zone access'],
      ['Digital',         'Seasonal screen integration'],
      ['Events',          'Participation in select events'],
      ['Campaigns',       'Seasonal × 2/year'],
      ['Term',            '1-year minimum, renewable'],
      ['Upgrade Path',    'Scalable to Premier tier'],
    ],
    cta: 'Start a Brand Partnership',
    ctaGoto: 'contact',
  },
  'event-concerts': {
    tag: 'Events · Live Music',
    title: 'Live Music & Concert Bookings',
    body: `American Dream hosts multiple indoor music venues, from intimate 500-seat rooms to a 5,000-capacity arena-format space. Every venue includes professional rigging, full PA systems, green rooms, and dedicated artist load-in infrastructure. Available 365 days a year.`,
    specs: [
      ['Max Capacity',  '5,000 (arena format)'],
      ['Intimate Room', '500 seats'],
      ['Days Available','365/year'],
      ['Rigging',       'Full professional grid'],
      ['Artist Load-In','Dedicated vehicle access'],
      ['Exclusivity',   'Full venue buyout available'],
    ],
    cta: 'Submit a Concert Inquiry',
    ctaGoto: 'contact',
  },
  'event-corporate': {
    tag: 'Events · Corporate & Brand',
    title: 'Corporate Events & Product Launches',
    body: `From intimate product launches to full-scale multi-day conferences, American Dream provides one of the most flexible event environments on the East Coast — with 500,000+ sq ft of configurable space, full AV infrastructure, catering coordination, and 8-minute proximity to Manhattan media.`,
    specs: [
      ['Total Event Space', '500,000+ sq ft'],
      ['Private Rooms',     'From 20 pax'],
      ['Catering',          'Full coordination service'],
      ['AV & Production',   'In-house team available'],
      ['Brand Takeover',    'Full property options'],
      ['Media Proximity',   '8 min to NYC press market'],
    ],
    cta: 'Submit a Corporate Event Inquiry',
    ctaGoto: 'contact',
  },
  'event-convention': {
    tag: 'Events · Conventions & Expos',
    title: 'Convention & Exposition Bookings',
    body: `American Dream's expo infrastructure provides a genuine alternative to traditional convention centers — with the added draw of being inside an entertainment destination attendees actually want to visit. Consumer shows, trade expos, fan conventions: all benefit from the built-in foot traffic.`,
    specs: [
      ['Main Floor',       '200,000 sq ft contiguous'],
      ['Total Expo Space', '500,000+ sq ft (multi-hall)'],
      ['Loading Docks',    'Convention-center spec'],
      ['Registration',     'Dedicated lobby infra'],
      ['Parking',          '26,000+ on-site spaces'],
      ['Transit',          'Direct NJ Transit rail'],
    ],
    cta: 'Submit a Convention Inquiry',
    ctaGoto: 'contact',
  },
};

export function initModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const box      = document.getElementById('modal-box');
  const content  = document.getElementById('modal-content');

  if (!backdrop || !content) return;

  /* ── Open via data-modal ── */
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-modal]');
    if (!trigger) return;
    const key  = trigger.dataset.modal;
    const data = MODAL_CONTENT[key];
    if (!data) return;
    renderModal(data);
    openModal();
  });

  /* ── Close: backdrop click ── */
  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });

  /* ── Close: Escape key ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal();
  });

  /* ── data-goto-close: close + scroll ── */
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-goto-close]');
    if (!btn) return;
    const id = btn.dataset.gotoClose;
    closeModal();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  });

  /* ── Render modal HTML ── */
  function renderModal(data) {
    const specsHtml = (data.specs || []).map(([label, val]) => `
      <div class="modal-spec">
        <span class="modal-spec-label">${label}</span>
        <span class="modal-spec-val">${val}</span>
      </div>`).join('');

    content.innerHTML = `
      <div class="modal-header">
        <button class="modal-close" aria-label="Close">✕</button>
        <div class="modal-tag">${data.tag}</div>
        <h2>${data.title}</h2>
      </div>
      <div class="modal-body">
        <p>${data.body}</p>
        ${specsHtml ? `<div class="modal-specs">${specsHtml}</div>` : ''}
        ${data.cta ? `<button class="btn ${data.gold ? 'btn-gold' : 'btn-gold'}" data-goto-close="${data.ctaGoto || 'contact'}">${data.cta}</button>` : ''}
      </div>
    `;

    // Bind close on dynamically created button
    content.querySelector('.modal-close')?.addEventListener('click', closeModal);
  }

  function openModal() {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}
