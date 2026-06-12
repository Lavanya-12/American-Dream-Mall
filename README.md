# American Dream — Interactive Sales Deck

> A fully interactive, browser-based sales platform for America's largest shopping and entertainment destination. Built as a high-stakes commercial tool for retail leasing, brand sponsorship, and event booking conversations.

**Live Demo:** [Deploy to Vercel/Netlify — see instructions below]  
**Subject Property:** American Dream Mall, East Rutherford, NJ

---

## What This Is

This is not a website. It is a purpose-built interactive sales deck — a cross between a luxury brand pitch, a Digideck-style presentation tool, and an immersive destination experience. A salesperson can screen-share it on a live call or send it as a standalone link. It works both ways.

**Primary audiences:**
- Retail tenant prospects (luxury flagships → pop-up shops)
- Corporate sponsors & brand partners
- Event promoters, producers, and bookers

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Vanilla HTML/CSS/JS | Zero dependencies, instant load, full control |
| Fonts | Cormorant Garamond + Barlow Condensed | Luxury serif paired with utility condensed — premium feel without the clichés |
| Video | HTML5 `<video>` with autoplay + scroll-trigger | Native performance, no library overhead |
| Animations | CSS keyframes + Intersection Observer API | 60fps, no jank, no library needed |
| Charts | SVG + CSS | Inline, styleable, no Chart.js weight |
| Icons | Inline SVG | No font-icon latency |
| Deployment | Vercel / GitHub Pages / Netlify (zero config) | Static, edge-cached, instant |

**No build step. No npm install. Open `index.html` and it works.**

---

## Repository Structure

```
american-dream/
├── index.html              # Main entry — complete single-page app
├── css/
│   ├── tokens.css          # Design tokens (colors, type, spacing)
│   ├── base.css            # Reset, typography, utility classes
│   ├── nav.css             # Navigation + mobile overlay
│   ├── loader.css          # Loading screen animation
│   ├── hero.css            # Cinematic hero section
│   ├── sections.css        # All content sections
│   ├── modules.css         # Leasing cards, sponsorship tiers, modals
│   └── animations.css      # Scroll-reveal, micro-interactions
├── js/
│   ├── main.js             # App init, router, event delegation
│   ├── nav.js              # Navigation scroll behavior
│   ├── loader.js           # Loading screen logic
│   ├── scroll.js           # Intersection Observer reveal system
│   ├── hero.js             # Hero counter animations
│   ├── tabs.js             # Entertainment tabs
│   ├── reel.js             # Dining scroll reel
│   ├── rings.js            # SVG demographic ring charts
│   ├── modal.js            # Modal open/close system
│   └── contact.js          # Contact form + intent tabs
├── assets/
│   └── icons/              # Inline SVG icon set
└── README.md
```

---

## Setup & Deployment

### Local Development
```bash
# Clone
git clone https://github.com/YOUR_USERNAME/american-dream-deck.git
cd american-dream-deck

# Open directly — no build step
open index.html

# Or serve locally for video autoplay
npx serve .
# → http://localhost:3000
```

### Deploy to Vercel (Recommended)
```bash
npm i -g vercel
vercel
# Follow prompts → live URL in ~30 seconds
```

### Deploy to Netlify
```bash
# Drag the folder to https://app.netlify.com/drop
# Or:
npm i -g netlify-cli
netlify deploy --prod --dir .
```

### Deploy to GitHub Pages
```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/YOUR_USERNAME/american-dream-deck.git
git push -u origin main
# Enable GitHub Pages → Settings → Pages → Branch: main → / (root)
```

---

## Design Decisions

### Aesthetic Direction: "Dark Luxury Cinematic"
The brief called for luxury brand polish (Apple, Hermès, Tesla) combined with entertainment energy (Disney, Universal). The design resolves this tension with:

- **Near-black backgrounds** (`#080808`) — creates depth, makes content pop
- **Gold accent system** (`#c9a96e`) — signals luxury without being garish
- **Cormorant Garamond** for display — a serif with genuine editorial character
- **Barlow Condensed** for labels/CTAs — functional, modern, high information density
- **Cinematic video as the hero medium** — not decoration, not background wallpaper

### Non-Linear Navigation
Every section is independently accessible from the persistent top nav. Users can jump anywhere. The deck tells a logical story top-to-bottom, but respects that a prospect reviewing it alone may already know why the location matters and wants to jump straight to entertainment or leasing.

### Performance Philosophy
- No JavaScript framework — Vanilla JS with modern APIs (IntersectionObserver, CSS custom properties)
- All images use `loading="lazy"` and explicit width/height
- Video uses `preload="none"` outside viewport, autoplay only when in view
- CSS animations use `transform` and `opacity` only (no layout-triggering properties)
- Fonts loaded with `display=swap` to prevent FOIT

### Expandability
Every module is a self-contained section with its own CSS block. Adding a new section = add one `<section>` to HTML, one block to `sections.css`. The modal system, tab system, and reel system all accept data-attributes — no JavaScript changes needed to add new modals or tabs.

---

## AI Tools Used

| Tool | Usage |
|---|---|
| Claude (Anthropic) | copywriting, bug fixing |
| Midjourney / DALL-E | Supplemental property imagery where stock is insufficient |
| Unsplash | Base photography for retail, dining, entertainment sections |
| ChatGPT | Demographic data copywriting and CTA refinement |

---

## What I Would Improve With More Time

1. **Real video assets** — Source official American Dream property videos from their press kit; the current implementation uses placeholder video URLs that fall back gracefully to poster images
2. **CMS integration** — Wire the leasing cards and sponsorship tiers to a headless CMS (Contentful or Sanity) so the sales team can update availability without touching code
3. **Analytics layer** — Add Plausible or PostHog to track which sections hold attention longest and which CTAs convert — critical signal for a sales deck
4. **AI chatbot overlay** — A Claude-powered assistant that a prospect can ask "what retail spaces are available under 5,000 sq ft?" directly within the deck
5. **Personalization** — URL-param driven content (`?prospect=nike&category=flagship`) that customizes the deck copy for specific prospects before a call

---

## Content Sources

- American Dream official website: americandream.com
- DreamWorks Water Park press materials
- Nickelodeon Universe press kit
- Big SNOW American Dream official site
- NJ Transit Meadowlands rail information
- US Census Bureau (demographic data)
- American Dream annual traffic figures (public press releases)
