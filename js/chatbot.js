/* ═══════════════════════════════════════════════════
   chatbot.js — Zero-API Smart Bot
   American Dream Interactive Sales Deck
   No external API. No cost. Fully offline-capable.
   Pattern-matching engine with rich knowledge base.
═══════════════════════════════════════════════════ */

/* ════════════════════════════════════════════════
   KNOWLEDGE BASE
   Every fact about the property, structured by topic
════════════════════════════════════════════════ */
const KB = {
  overview: {
    short: `<strong>American Dream</strong> is America's largest mixed-use destination — 3 million sq ft combining retail, dining, entertainment, luxury, and live events under one roof in East Rutherford, NJ.`,
    full: `<strong>American Dream</strong> is the most ambitious destination property in North America:<br><br>
<ul>
  <li><strong>3 million sq ft</strong> total property</li>
  <li><strong>55 million+</strong> annual visitors</li>
  <li><strong>450+</strong> brands and concepts</li>
  <li><strong>8 minutes</strong> from Manhattan via NJ Transit rail</li>
  <li><strong>$3.4 billion</strong> total annual visitor spend</li>
  <li>Open <strong>365 days/year</strong>, weather-independent</li>
</ul>
It combines a theme park, indoor ski slope, water park, aquarium, 100+ dining concepts, luxury wing, performing arts venues, and the largest retail footprint in New Jersey — all under one roof.`,
  },

  location: {
    short: `Located at 1 American Dream Way, East Rutherford, NJ — <strong>8 minutes from Manhattan</strong> via direct NJ Transit rail, adjacent to MetLife Stadium.`,
    full: `<strong>Location & Access:</strong><br><br>
<ul>
  <li>1 American Dream Way, East Rutherford, NJ 07073</li>
  <li><strong>8 minutes</strong> from Midtown Manhattan via NJ Transit Meadowlands rail</li>
  <li>Adjacent to <strong>MetLife Stadium</strong> (Giants & Jets)</li>
  <li><strong>26,000+</strong> on-site parking spaces</li>
  <li><strong>20 million</strong> people within a 30-mile radius</li>
  <li>#1 most-visited destination in New Jersey</li>
</ul>
The NYC proximity means every major media outlet, agency, influencer, and press contact is essentially local — critical for launches and activations.`,
  },

  demographics: {
    short: `55M+ annual visitors. Average HHI $95K+. 40% international. 3.4 hour average dwell time. The highest-value consumer audience in the Northeast.`,
    full: `<strong>Visitor Demographics:</strong><br><br>
<ul>
  <li><strong>55 million+</strong> annual visitors</li>
  <li>Average household income: <strong>$95,000+</strong></li>
  <li><strong>72%</strong> aged 18–54</li>
  <li><strong>65%</strong> household income $75,000+</li>
  <li><strong>40%</strong> international visitors</li>
  <li><strong>85%</strong> are repeat visitors annually</li>
  <li><strong>58%</strong> female primary shoppers</li>
  <li>Average dwell time: <strong>3.4 hours</strong> per visit</li>
  <li>Total annual visitor spend: <strong>$3.4 billion</strong></li>
</ul>
No other retail property in the Northeast concentrates this level of purchasing power in one place.`,
  },

  retail: {
    short: `1.5 million sq ft of retail space. 450+ brands. Four leasing tiers: Flagship (10K–80K sq ft), Boutique (1.5K–10K sq ft), Pop-Up (7-day min), and F&B concepts.`,
    full: `<strong>Retail Opportunities — 1.5M sq ft, 450+ brands:</strong><br><br>
<strong>Flagship Stores</strong><br>
10,000–80,000 sq ft · Up to 200 linear ft frontage · 1–3 level builds · 15,000+ daily adjacency traffic · 5–15 year lease terms<br><br>
<strong>Boutique & Mid-Tier</strong><br>
1,500–10,000 sq ft · Category-cluster corridors · 8,000–12,000 daily adjacency · 3–10 year lease terms<br><br>
<strong>Pop-Up & Activation</strong><br>
200–5,000 sq ft · Minimum 7 days · 365 days/year · Full build-out service available · Turn-key furnished options<br><br>
<strong>Food & Beverage</strong><br>
100+ active concepts · 8M meals/year · $42 avg F&B spend · 3 food hall environments · Full liquor licenses available`,
  },

  flagship: {
    short: `Flagship stores range from <strong>10,000–80,000 sq ft</strong> with up to 200 linear ft of frontage. 15,000+ daily adjacency traffic. Lease terms 5–15 years.`,
    full: `<strong>Flagship Store Leasing:</strong><br><br>
<ul>
  <li>Size: <strong>10,000 – 80,000 sq ft</strong></li>
  <li>Frontage: up to <strong>200 linear ft</strong></li>
  <li>1–3 level configurations available</li>
  <li><strong>15,000+</strong> daily adjacency foot traffic</li>
  <li>Lease terms: <strong>5–15 years</strong></li>
  <li>Select availability — enquire for current list</li>
</ul>
These are anchor-level positions designed for brands that want maximum impact in the most trafficked destination in the Northeast.<br><br>
<button class="chat-cta" data-goto="contact">Request Flagship Details →</button>`,
  },

  boutique: {
    short: `Boutique spaces run <strong>1,500–10,000 sq ft</strong>, positioned within category-specific corridors with 8,000–12,000 daily foot traffic. Lease terms 3–10 years.`,
    full: `<strong>Boutique & Mid-Tier Leasing:</strong><br><br>
<ul>
  <li>Size: <strong>1,500 – 10,000 sq ft</strong></li>
  <li>Positioning within category-cluster corridors</li>
  <li><strong>8,000–12,000</strong> daily adjacency traffic</li>
  <li>Lease terms: <strong>3–10 years</strong></li>
  <li>Back-of-house storage available</li>
  <li>Fit-out support via approved vendors</li>
</ul>
Boutique spaces give growing brands precision positioning next to anchor tenants in their category — the sight lines and daily footfall that justify the investment.<br><br>
<button class="chat-cta" data-goto="contact">Request Boutique Details →</button>`,
  },

  popup: {
    short: `Pop-ups start at <strong>7 days minimum</strong>, 200–5,000 sq ft. Turn-key options available. Perfect for product launches, seasonal campaigns, or market testing — no long-term commitment.`,
    full: `<strong>Pop-Up & Activation Spaces:</strong><br><br>
<ul>
  <li>Minimum term: <strong>7 days</strong></li>
  <li>Size: <strong>200 – 5,000 sq ft</strong></li>
  <li>Available <strong>365 days/year</strong></li>
  <li>Full build-out service available</li>
  <li>Turn-key furnished & branded spaces</li>
  <li>In-house digital screens & PA systems</li>
</ul>
Test the market, launch a product, or run a seasonal campaign — 55 million annual visitors with zero long-term commitment.<br><br>
<button class="chat-cta" data-goto="contact">Check Pop-Up Availability →</button>`,
  },

  fnb: {
    short: `100+ dining concepts, 8 million meals/year, $42 average F&B spend per visitor. Three distinct food hall environments plus fine dining, QSR, and café zones.`,
    full: `<strong>Food & Beverage Opportunities:</strong><br><br>
<ul>
  <li><strong>100+</strong> active dining concepts</li>
  <li><strong>8 million+</strong> meals served annually</li>
  <li><strong>$42</strong> average F&B spend per visit</li>
  <li>3 distinct food hall environments</li>
  <li>Full liquor licenses available in select spaces</li>
  <li>Indoor and outdoor seating zones</li>
</ul>
From celebrity-chef fine dining to QSR, from rooftop bars to artisan coffee — food is a primary traffic driver here, not a mall amenity. Our F&B program generates its own destination visits.<br><br>
<button class="chat-cta" data-goto="contact">Explore F&B Placement →</button>`,
  },

  luxury: {
    short: `The Luxury Wing is a gallery-like corridor with <strong>$150K+ average HHI visitors</strong>, 60% international, and 2.1× longer dwell time. Invitation-based leasing process.`,
    full: `<strong>The Luxury Wing:</strong><br><br>
<ul>
  <li>Average shopper HHI: <strong>$150,000+</strong></li>
  <li><strong>60%</strong> international visitors</li>
  <li><strong>2.1×</strong> dwell time vs standard wing</li>
  <li>Gallery-like corridor — no non-luxury adjacencies</li>
  <li>Custom fit-out required, design approval process</li>
  <li>By-invitation leasing process</li>
</ul>
<strong>Current & prospective partners include:</strong><br>
Louis Vuitton, Gucci, Hermès, Burberry, Tiffany & Co., Saint Laurent, Balenciaga, Prada, Valentino, Bottega Veneta<br><br>
<button class="chat-cta" data-goto="contact">Request Luxury Consultation →</button>`,
  },

  dining: {
    short: `100+ dining concepts, 8M+ meals/year, $42 average spend. Three food halls, fine dining, QSR, rooftop bars, and artisan cafés. Average 3.4 hour dwell time keeps diners in longer.`,
    full: `<strong>Dining & Lifestyle at American Dream:</strong><br><br>
<ul>
  <li><strong>100+</strong> dining concepts</li>
  <li><strong>8 million+</strong> meals served annually</li>
  <li><strong>$42</strong> average F&B spend per visitor</li>
  <li>3 distinct food hall environments</li>
  <li>Celebrity chef fine dining with full liquor</li>
  <li>Global cuisine concepts (matched to 40% intl visitor base)</li>
  <li>Rooftop terraces and indoor bar environments</li>
  <li>QSR and fast casual in high-volume corridors</li>
</ul>
Food at American Dream is a destination in its own right — it drives visits independently of retail, and the 3.4-hour dwell time means guests spend substantially more across all categories.`,
  },

  entertainment: {
    short: `Six major entertainment anchors: Nickelodeon Universe (theme park), DreamWorks Water Park, Big SNOW (indoor ski), SEA LIFE Aquarium, Meadowlands Golf, and Performing Arts venues.`,
    full: `<strong>Entertainment Anchors — what makes American Dream different:</strong><br><br>
<ul>
  <li>🎢 <strong>Nickelodeon Universe</strong> — 165K sq ft, 35 rides, world's largest indoor Nick theme park</li>
  <li>🌊 <strong>DreamWorks Water Park</strong> — largest indoor water park in the US, open 364 days/year</li>
  <li>⛷ <strong>Big SNOW</strong> — America's ONLY indoor real-snow ski slope, 180K sq ft, open year-round</li>
  <li>🐠 <strong>SEA LIFE Aquarium</strong> — 25K+ sq ft, 5,000+ creatures, strong weekday traffic driver</li>
  <li>⛳ <strong>Meadowlands Golf</strong> — premium indoor golf, corporate entertainment flagship</li>
  <li>🎭 <strong>Performing Arts & Events</strong> — 500 to 5,000 capacity, 365 available days</li>
</ul>
No other property on earth combines this lineup. It's why American Dream drives 55M visits/year regardless of season, weather, or retail cycles.`,
  },

  nickelodeon: {
    short: `Nickelodeon Universe is the world's largest indoor Nickelodeon theme park — 165,000 sq ft, 35 rides, 3M+ annual riders. Core family demographic ages 4–14.`,
    full: `<strong>Nickelodeon Universe® Theme Park:</strong><br><br>
<ul>
  <li><strong>165,000 sq ft</strong> — world's largest indoor Nickelodeon park</li>
  <li><strong>35 rides and attractions</strong></li>
  <li><strong>3 million+</strong> annual riders</li>
  <li>Core demographic: families with children aged 4–14</li>
  <li>Premium ticket pricing model</li>
  <li>Drives multi-day visitation and hotel stays</li>
</ul>
Brands positioned adjacent to this zone speak to a captive family audience in full entertainment mode — the highest receptivity of any retail environment.`,
  },

  bigsnow: {
    short: `Big SNOW is <strong>America's only indoor real-snow ski slope</strong> — 180,000 sq ft, 5 slopes, open 365 days a year. Ski in July. Real snow, every day.`,
    full: `<strong>Big SNOW American Dream:</strong><br><br>
<ul>
  <li><strong>180,000 sq ft</strong> indoor ski and snow park</li>
  <li>America's <strong>ONLY</strong> indoor real-snow ski slope</li>
  <li><strong>Real snow</strong> every single day of the year</li>
  <li>5 slopes + terrain park</li>
  <li>Year-round operations</li>
  <li>Premium brand partnership opportunities</li>
</ul>
A guest who just paid $85 to ski in July is the exact consumer active lifestyle brands (REI, Patagonia, Burton, Salomon) need to be in front of. Unmatched contextual commerce.`,
  },

  waterpark: {
    short: `DreamWorks Water Park is the <strong>largest indoor water park in the United States</strong> — 40+ attractions, open 364 days/year, 100% weather-independent traffic.`,
    full: `<strong>DreamWorks Water Park:</strong><br><br>
<ul>
  <li>Largest indoor water park in the <strong>United States</strong></li>
  <li><strong>40+</strong> water slides and attractions</li>
  <li>Open <strong>364 days/year</strong></li>
  <li>Completely weather-independent traffic</li>
  <li>Hotel package integration drives overnight stays</li>
</ul>
When it blizzards in December or rains in July, 5,000 people are still inside this building. That's what year-round, weather-proof traffic actually looks like.`,
  },

  events: {
    short: `500+ events annually. Up to 5,000 capacity. 500,000+ sq ft of configurable space. Live concerts, brand activations, product launches, conventions, corporate events — all available 365 days/year.`,
    full: `<strong>Events & Platform at American Dream:</strong><br><br>
<ul>
  <li><strong>500+</strong> events hosted annually</li>
  <li>Venue capacity: <strong>500 to 5,000</strong> seats</li>
  <li><strong>500,000+ sq ft</strong> configurable event space</li>
  <li>Convention-center-grade loading docks</li>
  <li>Full in-house AV and production team</li>
  <li>Catering coordination service</li>
  <li>26,000+ on-site parking spaces</li>
</ul>
<strong>Event types we host:</strong> Live concerts · Corporate events · Product launches · Brand activations · Trade shows · Fan expos · Fashion shows · Celebrity appearances<br><br>
8 minutes to Manhattan = every major media outlet and press contact is essentially local.<br><br>
<button class="chat-cta" data-goto="contact">Submit an Event Inquiry →</button>`,
  },

  concerts: {
    short: `Live music venues from 500 to 5,000 capacity. Professional rigging, full PA, green rooms, dedicated artist load-in. Available 365 days/year. Full venue buyout available.`,
    full: `<strong>Live Music & Concert Bookings:</strong><br><br>
<ul>
  <li>Max capacity: <strong>5,000</strong> (arena format)</li>
  <li>Intimate venue: <strong>500 seats</strong></li>
  <li>Available <strong>365 days/year</strong></li>
  <li>Professional rigging grid</li>
  <li>Full PA and sound systems</li>
  <li>Green rooms and production offices</li>
  <li>Dedicated artist vehicle load-in</li>
  <li>Full venue buyout available</li>
</ul>
<button class="chat-cta" data-goto="contact">Submit a Concert Inquiry →</button>`,
  },

  convention: {
    short: `500,000+ sq ft of configurable expo space. 200,000 sq ft contiguous main floor. Convention-center spec loading docks. 26,000 parking spaces. Direct NJ Transit rail access.`,
    full: `<strong>Convention & Exposition Bookings:</strong><br><br>
<ul>
  <li>Main floor: <strong>200,000 sq ft</strong> contiguous</li>
  <li>Total expo space: <strong>500,000+ sq ft</strong> (multi-hall)</li>
  <li>Convention-center spec loading docks</li>
  <li>Dedicated registration lobby infrastructure</li>
  <li><strong>26,000+</strong> on-site parking spaces</li>
  <li>Direct NJ Transit rail from NYC</li>
</ul>
The difference from a standard convention center: attendees are already inside an entertainment destination they want to be at. Show attendance naturally increases.<br><br>
<button class="chat-cta" data-goto="contact">Submit a Convention Inquiry →</button>`,
  },

  sponsorship: {
    short: `Three partnership tiers: <strong>Founding Partner</strong> (category exclusivity + naming rights), <strong>Premier Partner</strong> (30M impressions/yr + activation zone), and <strong>Brand Partner</strong> (flexible entry point).`,
    full: `<strong>Sponsorship & Brand Partnership Tiers:</strong><br><br>
<strong>Founding Partner</strong> — deepest integration<br>
Category exclusivity · Naming rights for venues/zones · Unlimited co-branded events · Permanent digital screens · VIP hospitality suite · Multi-year exclusivity<br><br>
<strong>Premier Partner</strong> — most popular<br>
30M+ branded impressions/yr · 2,000 sq ft dedicated activation zone · 12 co-branded events/yr · Full digital screen network · Monthly co-produced social content · 2–5 year terms<br><br>
<strong>Brand Partner</strong> — flexible entry<br>
Pop-up activation spaces · Seasonal campaigns (2×/yr) · Event participation rights · Digital integration · 1-year minimum · Upgradeable to Premier<br><br>
<button class="chat-cta" data-goto="events">View Sponsorship Details →</button>`,
  },

  contact: {
    short: `Fill out the contact form and our commercial team responds within <strong>24 hours</strong> with a customized availability report, full demographic data package, and a dedicated account manager.`,
    full: `<strong>Getting Started — What Happens Next:</strong><br><br>
<ul>
  <li>Submit the contact form on this page</li>
  <li><strong>Response within 24 hours</strong></li>
  <li>You receive a customized availability report</li>
  <li>Full demographics & traffic data package</li>
  <li>Dedicated commercial account manager assigned</li>
  <li>Site visit coordination available</li>
</ul>
Whether you're evaluating a lease, a sponsorship, or an event booking — the first step is the same: a short conversation.<br><br>
<button class="chat-cta" data-goto="contact">Go to Contact Form →</button>`,
  },

  parking: {
    short: `American Dream has <strong>26,000+ on-site parking spaces</strong> — the largest single-property parking infrastructure in New Jersey.`,
    full: `American Dream has <strong>26,000+ on-site parking spaces</strong>, making it the most accessible large-scale destination in the Northeast. Combined with direct NJ Transit Meadowlands rail service from Penn Station (8 minutes), the property is reachable by both car and public transit from the entire tristate area.`,
  },

  hotel: {
    short: `American Dream includes a hotel component integrated into the property, with room packages tied to water park and entertainment admissions — driving multi-day stays.`,
    full: `American Dream's integrated hotel offering creates a multi-day destination stay model. Hotel packages tied to DreamWorks Water Park and Nickelodeon Universe admissions drive overnight visits, increasing total spend per visitor group and supporting weekday traffic that pure-retail destinations can't sustain.`,
  },

  price: {
    short: `Specific lease rates and sponsorship pricing are provided in customized packages after initial contact — rates vary by size, location, term, and category. Our team responds within 24 hours.`,
    full: `Lease rates, sponsorship fees, and event pricing are customized based on:<br><br>
<ul>
  <li>Space size and specific location within the property</li>
  <li>Lease term length</li>
  <li>Category and adjacency requirements</li>
  <li>Build-out scope and timeline</li>
  <li>Exclusivity requirements</li>
</ul>
All of this is covered in the customized proposal our commercial team sends within 24 hours of your inquiry.<br><br>
<button class="chat-cta" data-goto="contact">Request a Custom Proposal →</button>`,
  },

  hours: {
    short: `American Dream is open <strong>365 days/year</strong>. Retail hours vary by tenant. Entertainment attractions have individual operating schedules. The property never closes for weather.`,
    full: `American Dream operates <strong>365 days/year</strong> — one of the key commercial advantages of an enclosed mixed-use destination. Unlike outdoor centers or traditional malls, operations are never disrupted by weather.<br><br>
Individual tenant and attraction hours vary. The entertainment anchors (Big SNOW, DreamWorks Water Park, Nickelodeon Universe) maintain their own operating schedules, most running daily with extended weekend hours.`,
  },

  why: {
    short: `American Dream is different because of scale + entertainment + location. No other property combines a theme park, indoor ski slope, water park, and 55M annual visitors with 8-minute Manhattan access.`,
    full: `<strong>Why American Dream is different from every other retail property:</strong><br><br>
<ul>
  <li><strong>Year-round traffic</strong> — not driven by retail seasons, but by 6 entertainment anchors that operate 365 days/year regardless of weather</li>
  <li><strong>Dwell time</strong> — 3.4 hours average vs 45 minutes at a standard mall</li>
  <li><strong>Captive audience</strong> — visitors come for entertainment and stay for retail, not the other way around</li>
  <li><strong>Location</strong> — 8 minutes from the world's most valuable media market</li>
  <li><strong>Demographics</strong> — $95K+ HHI average, 40% international, 55M visits/year</li>
  <li><strong>Scale</strong> — 3M sq ft, the largest mixed-use destination in North America</li>
</ul>
For a brand, sponsor, or event producer, this isn't just a location. It's a platform.`,
  },

  fallback: [
    `Great question. I can tell you about <strong>retail leasing</strong>, <strong>sponsorships</strong>, <strong>event bookings</strong>, <strong>entertainment attractions</strong>, <strong>visitor demographics</strong>, or <strong>getting in touch with our commercial team</strong>. What are you most interested in?`,
    `I want to make sure I give you the right information. Are you primarily interested in <strong>leasing space</strong>, <strong>brand partnerships</strong>, <strong>hosting an event</strong>, or just exploring the property? That'll help me point you in the right direction.`,
    `Happy to help with that. Our commercial team can give you the most accurate answer on specifics. In the meantime, I can cover <strong>leasing options</strong>, <strong>visitor data</strong>, <strong>entertainment anchors</strong>, or <strong>sponsorship tiers</strong> — what's most useful?`,
    `Let me make sure I give you what you need. The most common things people ask about are: retail leasing, pop-up spaces, sponsorship packages, event bookings, and visitor demographics. Which of those fits what you're exploring?`,
  ],
};

/* ════════════════════════════════════════════════
   INTENT RULES
   Each rule: { patterns: [regex...], topic, useShort? }
   First match wins — order matters (specific before generic)
════════════════════════════════════════════════ */
const RULES = [
  // Greetings
  { patterns: [/^(hi|hello|hey|howdy|good\s*(morning|afternoon|evening)|what'?s up|sup)\b/i], handler: 'greeting' },
  { patterns: [/thank(s| you)/i, /that'?s (great|helpful|good|perfect|amazing)/i], handler: 'thanks' },
  { patterns: [/bye|goodbye|see you|that'?s all|done/i], handler: 'bye' },

  // Location
  { patterns: [/where (is|are)|location|address|directions?|how (do i|to) get|transit|train|rail|parking|metro|subway|drive|far from|distance|nyc|new york|manhattan|commut/i], topic: 'location' },

  // Demographics / visitors
  { patterns: [/demographic|visitor|audience|traffic|who (comes|visits|shops)|customer|shopper|income|hhi|household|age|international|how many people/i], topic: 'demographics' },

  // Retail — specific types first
  { patterns: [/flagship/i], topic: 'flagship' },
  { patterns: [/boutique|mid.tier|medium/i], topic: 'boutique' },
  { patterns: [/pop.?up|short.?term|temporary|test (the )?market|quick|trial/i], topic: 'popup' },
  { patterns: [/food|dining|restaurant|f&b|f and b|drink|bar|cafe|coffee|cuisine|eat|meal|beverage|culinary/i], topic: 'fnb' },
  { patterns: [/retail|lease|leasing|rent|store|shop|space|sq ft|square feet|square foot|tenant|tenancy|available space/i], topic: 'retail' },

  // Luxury
  { patterns: [/luxury|high.?end|premium brand|prestige|vip|gucci|louis vuitton|hermes|hermès|prada|burberry|tiffany/i], topic: 'luxury' },

  // Entertainment — specific first
  { patterns: [/nickelodeon|theme park|ride|rollercoaster|nick/i], topic: 'nickelodeon' },
  { patterns: [/big snow|ski|skiing|snow|slope|snowboard/i], topic: 'bigsnow' },
  { patterns: [/water ?park|dreamworks|slide|splash|swim|pool/i], topic: 'waterpark' },
  { patterns: [/aquarium|sea life|sealife|fish|marine/i], handler: 'sealife' },
  { patterns: [/golf|meadowlands golf/i], handler: 'golf' },
  { patterns: [/entertain|attraction|anchor|activity|fun|things to do|what'?s here/i], topic: 'entertainment' },

  // Events — specific first
  { patterns: [/concert|music|live show|band|perform|artist|gig/i], topic: 'concerts' },
  { patterns: [/convention|expo|trade show|conference|congress/i], topic: 'convention' },
  { patterns: [/event|host|book a|venue|activation|launch|product launch|corporate|brand activation/i], topic: 'events' },

  // Sponsorship
  { patterns: [/sponsor|partnership|brand partner|partner with|collaborate|naming rights|founding/i], topic: 'sponsorship' },

  // Practical
  { patterns: [/hours?|open|close|when (is|are|does)|schedule|timing/i], topic: 'hours' },
  { patterns: [/park(ing)?|car|vehicle|spaces|lot/i], topic: 'parking' },
  { patterns: [/hotel|stay|overnight|accommodation|room/i], topic: 'hotel' },
  { patterns: [/price|cost|rate|how much|fee|pricing|afford|budget|investment/i], topic: 'price' },
  { patterns: [/contact|reach|talk to|speak|call|email|inquiry|enquir|get in touch|next step|how do i start/i], topic: 'contact' },

  // Why / overview
  { patterns: [/why (american dream|here|this property|choose|should|different|unique|special)/i], topic: 'why' },
  { patterns: [/tell me (more|about|everything)|what is (american dream|this|the property)|overview|all about|general|summary/i], topic: 'overview', useFull: true },
  { patterns: [/american dream|this (place|property|mall|destination)/i], topic: 'overview' },
];

/* ════════════════════════════════════════════════
   QUICK PROMPTS
════════════════════════════════════════════════ */
const QUICK_PROMPTS = [
  { label: 'Retail leasing',    text: 'What retail leasing options are available?' },
  { label: 'Sponsorships',      text: 'Tell me about sponsorship tiers.' },
  { label: 'Book an event',     text: 'What kind of events can I host here?' },
  { label: 'Luxury wing',       text: 'How do I get into the luxury wing?' },
  { label: 'Visitor data',      text: 'What does the visitor demographic look like?' },
  { label: 'Entertainment',     text: 'What entertainment attractions are here?' },
];

/* ════════════════════════════════════════════════
   WELCOME MESSAGE
════════════════════════════════════════════════ */
const WELCOME = `Welcome to <strong>American Dream</strong> — I'm your commercial advisor.<br><br>
I can answer anything about retail leasing, sponsorships, events, entertainment, visitor demographics, and more.<br><br>
What opportunity are you exploring?`;

/* ════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════ */
let fallbackIndex = 0;
let lastTopic     = null;
let messageCount  = 0;

/* ════════════════════════════════════════════════
   MAIN INIT
════════════════════════════════════════════════ */
export function initChatbot() {
  injectHTML();
  bindEvents();
  setTimeout(showBadge, 3500);
}

/* ════════════════════════════════════════════════
   INJECT HTML
════════════════════════════════════════════════ */
function injectHTML() {
  document.body.insertAdjacentHTML('beforeend', `
    <button class="chat-trigger" id="chat-trigger" aria-label="Open AI assistant">
      <span class="chat-trigger-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a1917" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </span>
      <span class="chat-trigger-close">✕</span>
      <span class="chat-badge" id="chat-badge">1</span>
    </button>

    <div class="chat-window" id="chat-window" role="dialog" aria-label="American Dream Assistant">
      <div class="chat-header">
        <div class="chat-header-avatar">AD</div>
        <div class="chat-header-info">
          <div class="chat-header-name">American Dream Advisor</div>
          <div class="chat-header-status">
            <div class="chat-status-dot"></div>
            <span class="chat-status-text">Online — Commercial Team</span>
          </div>
        </div>
        <button class="chat-header-close" id="chat-close" aria-label="Close">✕</button>
      </div>

      <div class="chat-prompts" id="chat-prompts">
        ${QUICK_PROMPTS.map(p => `<button class="chat-prompt-btn" data-text="${p.text}">${p.label}</button>`).join('')}
      </div>

      <div class="chat-messages" id="chat-messages"></div>

      <div class="chat-input-area">
        <div class="chat-input-row">
          <textarea class="chat-input" id="chat-input"
            placeholder="Ask about leasing, events, sponsorships..."
            rows="1" maxlength="400" aria-label="Message input"></textarea>
          <button class="chat-send" id="chat-send" disabled aria-label="Send">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <div class="chat-footer-note">No sign-up needed · Instant answers</div>
      </div>
    </div>
  `);
}

/* ════════════════════════════════════════════════
   BIND EVENTS
════════════════════════════════════════════════ */
function bindEvents() {
  const trigger = document.getElementById('chat-trigger');
  const closeBtn = document.getElementById('chat-close');
  const input   = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const prompts = document.getElementById('chat-prompts');

  trigger?.addEventListener('click', toggleChat);
  closeBtn?.addEventListener('click', closeChat);

  input?.addEventListener('input', () => {
    if (sendBtn) sendBtn.disabled = !input.value.trim();
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 100) + 'px';
  });

  input?.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!sendBtn?.disabled) handleSend();
    }
  });

  sendBtn?.addEventListener('click', handleSend);

  prompts?.addEventListener('click', e => {
    const btn = e.target.closest('.chat-prompt-btn');
    if (!btn) return;
    if (input) input.value = btn.dataset.text;
    prompts.style.display = 'none';
    handleSend();
  });

  // CTA buttons inside messages (delegated)
  document.addEventListener('click', e => {
    const cta = e.target.closest('.chat-cta[data-goto]');
    if (!cta) return;
    closeChat();
    const id = cta.dataset.goto;
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      const win = document.getElementById('chat-window');
      if (win?.classList.contains('open')) closeChat();
    }
  });
}

/* ════════════════════════════════════════════════
   OPEN / CLOSE
════════════════════════════════════════════════ */
function toggleChat() {
  const win = document.getElementById('chat-window');
  win?.classList.contains('open') ? closeChat() : openChat();
}

function openChat() {
  const win     = document.getElementById('chat-window');
  const trigger = document.getElementById('chat-trigger');
  const badge   = document.getElementById('chat-badge');
  const msgs    = document.getElementById('chat-messages');

  win?.classList.add('open');
  trigger?.classList.add('open');
  badge?.classList.remove('show');

  if (msgs && msgs.children.length === 0) {
    // Small delay so animation feels natural after window opens
    setTimeout(() => appendBotMessage(WELCOME), 300);
  }

  setTimeout(() => document.getElementById('chat-input')?.focus(), 400);
}

function closeChat() {
  document.getElementById('chat-window')?.classList.remove('open');
  document.getElementById('chat-trigger')?.classList.remove('open');
}

function showBadge() {
  const win = document.getElementById('chat-window');
  if (!win?.classList.contains('open')) {
    document.getElementById('chat-badge')?.classList.add('show');
  }
}

/* ════════════════════════════════════════════════
   SEND / RESPOND
════════════════════════════════════════════════ */
function handleSend() {
  const input   = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send');
  const text    = input?.value.trim();
  if (!text) return;

  // Clear input
  if (input) { input.value = ''; input.style.height = 'auto'; }
  if (sendBtn) sendBtn.disabled = true;

  // Hide prompts after first real message
  document.getElementById('chat-prompts').style.display = 'none';

  appendUserMessage(text);
  messageCount++;

  // Simulate thinking delay (feels natural, not robotic)
  const delay = 500 + Math.random() * 500;
  showTyping();

  setTimeout(() => {
    removeTyping();
    const reply = getResponse(text);
    appendBotMessage(reply);
  }, delay);
}

/* ════════════════════════════════════════════════
   RESPONSE ENGINE
════════════════════════════════════════════════ */
function getResponse(text) {
  const t = text.toLowerCase().trim();

  // ── Special handlers ──
  if (matchesAny(t, RULES.find(r => r.handler === 'greeting')?.patterns || [])) {
    return getGreeting();
  }
  if (matchesAny(t, RULES.find(r => r.handler === 'thanks')?.patterns || [])) {
    return getThanks();
  }
  if (matchesAny(t, RULES.find(r => r.handler === 'bye')?.patterns || [])) {
    return getBye();
  }

  // ── SEA LIFE / Golf (inline) ──
  if (/aquarium|sea life|sealife|fish|marine/i.test(t)) {
    return `<strong>SEA LIFE Aquarium</strong> is a 25,000+ sq ft aquarium housing 5,000+ marine creatures. It's one of the strongest weekday traffic drivers on the property — school groups and family visits maintain consistent foot traffic Monday–Friday throughout the year, benefiting all adjacent retail tenants.`;
  }
  if (/golf|meadowlands golf/i.test(t)) {
    return `<strong>Meadowlands Golf</strong> is a premium indoor golf and social entertainment venue inside the property. Average visitor HHI $100,000+. Corporate package bookings and private event hire are available — it's the ideal environment for high-value client entertainment without leaving the property.`;
  }

  // ── Follow-up context: "tell me more" / "more details" ──
  if (/more (detail|info|about)|tell me more|expand|elaborate|full|everything/i.test(t) && lastTopic) {
    const entry = KB[lastTopic];
    if (entry?.full) return entry.full;
  }

  // ── Multi-topic: retail + events combined ──
  if (/retail.*event|event.*retail|both|combination|everything/i.test(t)) {
    return `American Dream offers commercial opportunities across three main areas:<br><br>
<strong>1. Retail Leasing</strong> — Flagship (10K–80K sq ft), Boutique (1.5K–10K sq ft), Pop-up (7-day min), and F&B concepts across 1.5M sq ft.<br><br>
<strong>2. Events & Venue</strong> — 500+ events/year, venues up to 5,000 capacity, 500K+ sq ft configurable space.<br><br>
<strong>3. Sponsorship</strong> — Founding, Premier, and Brand Partner tiers with 30–55M annual impressions.<br><br>
Which of these would you like to dig into?`;
  }

  // ── Topic rules ──
  for (const rule of RULES) {
    if (!rule.patterns) continue;
    if (matchesAny(t, rule.patterns)) {
      if (rule.handler) continue; // already handled above
      const entry = KB[rule.topic];
      if (!entry) continue;
      lastTopic = rule.topic;
      const useFull = rule.useFull || /detail|full|more|tell me|everything|all/i.test(t);
      return useFull && entry.full ? entry.full : (entry.short || entry.full);
    }
  }

  // ── Nothing matched — rotate fallbacks ──
  const reply = KB.fallback[fallbackIndex % KB.fallback.length];
  fallbackIndex++;
  return reply;
}

function matchesAny(text, patterns) {
  return patterns.some(p => p.test(text));
}

/* ── Special response builders ── */
function getGreeting() {
  const greetings = [
    `Hi there! I'm the American Dream commercial advisor. I can tell you everything about <strong>retail leasing</strong>, <strong>sponsorships</strong>, <strong>events</strong>, <strong>entertainment</strong>, and <strong>visitor demographics</strong>.<br><br>What are you exploring?`,
    `Hello! Welcome to American Dream. Whether you're thinking about <strong>leasing space</strong>, <strong>a brand partnership</strong>, or <strong>hosting an event</strong> — I can walk you through all of it. What's on your mind?`,
    `Hey! Great to have you here. American Dream is a 3-million sq ft destination with 55 million annual visitors and a commercial opportunity unlike anything else in North America. How can I help you today?`,
  ];
  return greetings[Math.floor(Math.random() * greetings.length)];
}

function getThanks() {
  const replies = [
    `Of course! Is there anything else you'd like to know — leasing details, event capabilities, sponsorship tiers, or visitor data?`,
    `Happy to help. If you're ready to take the next step, our commercial team responds within 24 hours. <button class="chat-cta" data-goto="contact">Contact Us →</button>`,
    `Glad that was useful. Feel free to ask anything else about the property or opportunities here.`,
  ];
  return replies[Math.floor(Math.random() * replies.length)];
}

function getBye() {
  return `Thanks for stopping by. When you're ready to explore the opportunity further, our commercial team is available at the contact form below — response within 24 hours.<br><br><button class="chat-cta" data-goto="contact">Contact Form →</button>`;
}

/* ════════════════════════════════════════════════
   DOM HELPERS
════════════════════════════════════════════════ */
function appendUserMessage(text) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const time = getTime();
  const el = document.createElement('div');
  el.className = 'chat-msg chat-msg--user';
  el.innerHTML = `
    <div class="chat-msg-row">
      <div class="chat-bubble">${escHtml(text)}</div>
    </div>
    <div class="chat-msg-time">${time}</div>`;
  container.appendChild(el);
  scrollBottom(container);
}

function appendBotMessage(html) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  const time = getTime();
  const el = document.createElement('div');
  el.className = 'chat-msg chat-msg--ai';
  el.innerHTML = `
    <div class="chat-msg-row">
      <div class="chat-msg-avatar">AD</div>
      <div class="chat-bubble">${html}</div>
    </div>
    <div class="chat-msg-time">${time}</div>`;
  container.appendChild(el);
  scrollBottom(container);
}

let typingEl = null;

function showTyping() {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  typingEl = document.createElement('div');
  typingEl.className = 'chat-typing';
  typingEl.innerHTML = `
    <div class="chat-msg-avatar">AD</div>
    <div class="chat-typing-bubble">
      <div class="chat-typing-dot"></div>
      <div class="chat-typing-dot"></div>
      <div class="chat-typing-dot"></div>
    </div>`;
  container.appendChild(typingEl);
  scrollBottom(container);
}

function removeTyping() {
  typingEl?.remove();
  typingEl = null;
}

function scrollBottom(el) {
  requestAnimationFrame(() => { el.scrollTop = el.scrollHeight; });
}

function getTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
