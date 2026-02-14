# DESIGN-BRIEF.md — Wholesale Template Design Direction

## Drop This File Into Your Claude Code Project Root

This file tells Claude Code exactly what you want the site to look like and why. It combines the best visual elements from three prototypes with the conversion architecture that works for motivated sellers.

---

## The Vision: Premium SaaS Aesthetic + Wholesaling Conversion Engine

The site should feel like a **legitimate local business** — not a "we buy houses" squeeze page. Think Notion's marketing site meets a high-end real estate firm. Sellers arriving at 11pm on their phone after googling "sell my house fast" should feel: "these people are real, professional, and won't scam me."

### Design DNA (What Makes This Site Different)

**From notiontry.html (the visual foundation):**
- Full-bleed hero image with dark gradient overlay (real house photo, not stock)
- Transparent nav that transitions to solid white with blur on scroll
- Generous whitespace — let the content breathe
- Scroll-reveal animations on sections (IntersectionObserver, staggered delays)
- Benefit cards with icon boxes (rounded corners, subtle shadows, hover lift)
- Trust bar as a clean horizontal band after hero (big bold numbers)
- Green primary color with restraint — not everything green
- Mobile click-to-call bar at top
- 92vh hero height on desktop (near-fullscreen impact)

**From v5 (the conversion architecture):**
- Multi-step form as the hero's right column (4 steps: address → situation → timeline → contact)
- Auto-advance on situation/timeline selection (fewer clicks = fewer dropoffs)
- Objection crusher bar (❌ No lowball games. ❌ No repairs. ❌ No agent contracts. ❌ No strangers touring your home.)
- Math comparison section: Agent Sale vs Cash Sale side-by-side with real numbers
- Micro-testimonial next to form in hero (social proof at point of decision)
- "Active Now" pulse badge (green dot + "Actively buying in {city}")
- Smart sticky bar that changes context when form is visible
- "See My Cash Offer" submit button with breathing animation
- Point-of-action trust line below form: "Join 200+ {city} homeowners..."
- Form timer: "⏱ About 60 seconds" next to form title

**From v4 (structural elements):**
- Config-driven architecture (every text element from JSON)
- CONFIG comments in HTML showing what's dynamic
- Clean footer with 4-column grid (Company, Situations, Contact, Legal)
- Situation cards grid linking to inner pages

---

## Typography

```
Headings: 'Barlow Condensed', weight 600-800, UPPERCASE, tight letter-spacing
Body: 'Inter' or 'DM Sans', weight 400-600, normal case
```

Barlow Condensed gives bold, confident headlines without being aggressive. It reads as "professional and decisive" which is exactly the energy sellers need.

**Do NOT use:** Playfair Display (too formal/luxury), system fonts (too cheap), or any serif (wrong tone for this market).

---

## Color System

```css
:root {
  /* Primary — Green (money, safety, growth) */
  --green: #16a34a;
  --green-dark: #15803d;
  --green-light: #f0fdf4;
  
  /* CTA — Amber/Orange (Von Restorff isolation, stands out against green) */
  --amber: #D97706;
  --amber-light: #F59E0B;
  --amber-glow: rgba(217, 119, 6, 0.35);
  
  /* Neutrals */
  --black: #0a0a0a;
  --dark: #111827;
  --gray-50: #f9fafb;
  --gray-100: #f3f4f6;
  --gray-200: #e5e7eb;
  --gray-400: #9ca3af;
  --gray-500: #6b7280;
  --gray-600: #4b5563;
  --gray-800: #1f2937;
  --white: #ffffff;
  
  /* Semantic */
  --red: #ef4444;
  --amber-bg: #FFFBEB;
}
```

**Rule:** Green for trust elements, navigation, checkmarks, badges. Amber for ALL call-to-action buttons. Dark backgrounds for hero, objection crusher, final CTA. White/gray-50 for content sections.

CTAs MUST be amber on green/dark backgrounds (Von Restorff isolation effect — the amber pops because nothing else on the page is amber).

---

## Page Sections (Top to Bottom)

### 1. Mobile Call Bar (mobile only)
- Green background, white text
- "📞 Call now for a free offer: (904) 555-0147"
- Fixed at top above nav, always visible on mobile

### 2. Navigation
- Transparent on load, transitions to white with backdrop-blur on scroll
- Logo left (company name, Barlow Condensed, bold)
- Phone number middle-right (hidden on mobile)
- "Get My Offer" CTA button right (green, small)
- Nav text starts white, transitions to dark on scroll

### 3. Hero (full-bleed image + form)
- Background: local property photo or neighborhood shot, center/cover
- Dark gradient overlay: `linear-gradient(135deg, rgba(10,10,10,.82), rgba(10,10,10,.55), rgba(10,10,10,.35))`
- Min-height: 92vh on desktop, auto on mobile
- Left column:
  - "Active Now" pulse badge: green dot + "Actively buying in {city}"
  - H1: "Your {City} Home Deserves a Fair Cash Offer" (Barlow Condensed, huge, white, green span on "Cash Offer")
  - Subtitle: 20px, white at 75% opacity, max-width 480px
  - Checkmarks list (green circle icons): No repairs, Close in 7 days, Zero obligation, etc.
  - Large CTA button (amber, pulse animation): "Get My Cash Offer →"
  - Sub-text: "Free. No obligation. Takes 60 seconds."
- Right column:
  - White form card with border-radius 16px, heavy shadow
  - "Free — No Obligation" badge floating above card
  - Multi-step form (see Form section below)
- Mobile: stacks vertically, headline + CTA first, then form

### 4. Trust Bar
- Gray-50 background, border-bottom
- 4 items centered with generous gap:
  - "{homes_purchased}" Homes Purchased
  - "{google_rating}" ★ Google Rating
  - "{avg_close_days}" Avg. Days to Close
  - "$0" Fees to You
- Numbers are large (Barlow Condensed, 22px, black), labels are small gray

### 5. Objection Crusher
- Dark background (#111827)
- 4 items in a row: ❌ No lowball games | ❌ No repairs needed | ❌ No agent contracts | ❌ No strangers touring your home
- Red X + white text, compact

### 6. Benefits Cards
- 3 cards in a grid (1 column on mobile)
- Each: icon box (green-light bg, rounded, emoji), h3, paragraph
- Cards: "Sell As-Is", "You Pick the Date", "Certainty of Close"
- Hover: translateY(-4px) + larger shadow
- Scroll reveal with staggered delays

### 7. How It Works (4 steps)
- Centered section header with "PROCESS" tag
- 4 steps with numbered circles connected by horizontal lines
- Green numbered circles, Barlow Condensed titles
- Lines hidden on mobile, grid collapses to 2-col then 1-col

### 8. Mid-Page CTA
- Full-width green gradient background
- "See What Your Home Is Worth in Cash"
- White CTA button (inverted) with pulse
- Sub-text below

### 9. Math Comparison: Agent Sale vs Cash Sale
- 2-column comparison with real numbers from market config
- Agent column: white bg, gray border — shows commissions, closing costs, repairs, timeline
- Cash column: green-light bg, green border, "BETTER DEAL" badge — shows $0 across the board
- Bottom line: net proceeds comparison showing cash wins
- From v5 — this is the most powerful conversion section for overcoming the "lowball" objection

### 10. About Section
- Photo placeholder (Joel's real photo required) + bio text
- Trust line: "Local {city} home buyer since {year}"
- Local presence emphasis — address, close at local title company

### 11. Testimonials
- 2-3 cards with stars, quote, name, situation, timeframe badge
- Avatar circles with initials (no stock photos)
- Scroll reveal

### 12. Situations Grid
- "We Buy Houses in Any Situation"
- Cards linking to situation inner pages (foreclosure, inherited, divorce, etc.)
- Hover: border-color change + lift

### 13. FAQ Accordion
- Clean accordion with + / − toggle
- First item expanded by default
- FAQPage schema auto-generated

### 14. Final CTA
- Dark background
- Large headline, phone number, form button
- Two options: call or fill out form

### 15. Footer
- Dark background, 4-column grid
- Company info, quick links, situation links, contact

### 16. Smart Sticky Bar (mobile)
- Fixed bottom, two buttons: Call Now + Get Cash Offer
- Changes to "Finish Your Request" when form is visible

---

## The Multi-Step Form (Conversion Engine)

This is the single most important component. It lives in the hero section.

### Visual Design
- White card, border-radius 16px, box-shadow xl
- "Free — No Obligation" badge floating above (green pill)
- Title: "Request Your Offer" (Barlow Condensed)
- Subtitle: "Start with the address. Takes about 60 seconds."
- Thin green progress bar below title
- Step indicator: "STEP 1 OF 4"

### Step 0: Property Address
- Google Places Autocomplete input
- Helper: "Exact address helps us avoid lowball estimates."
- Amber "Next" button (disabled until 6+ chars)

### Step 1: Situation (auto-advance)
- "What's going on with the property?"
- 2-column grid of tappable option buttons (min 48px height)
- Options: Foreclosure risk, Inherited property, Going through divorce, Behind on payments, Relocating, Needs major repairs, Code violations, Tired landlord, Other
- Tapping auto-advances to Step 2 (280ms delay for visual feedback)

### Step 2: Timeline (auto-advance)
- "How quickly do you need to sell?"
- Stacked buttons (single column):
  - **ASAP — need to sell immediately** (visually emphasized with amber border)
  - Within 30 days
  - 1–3 months
  - Just exploring options
  - Not sure
- Auto-advance on selection

### Step 3: Contact
- "Where should we send your offer? Discreetly."
- Phone number first (tel input with mask), helper: "We only use this to send your offer."
- Full name
- Email (hidden behind "Add email (optional)" toggle)
- SMS consent checkbox (UNCHECKED by default — legally required)
- Submit: "See My Cash Offer →" (amber, full-width, breathing animation)
- Below: "Join 200+ {city} homeowners who got a fair offer"
- Lock icon + "Your info is protected and never shared"

### After Submit
- Form card transitions to green gradient thank-you card
- Check circle animation
- "We're Preparing Your Cash Offer"
- "Expect a call within 2 hours" in a highlight box
- Shows the address they entered for confirmation
- "Can't wait? Call us now" with phone link

---

## Responsive Breakpoints

- Desktop: 1120px max-width
- Tablet: 768px — hero stacks, grids go to 2-col
- Mobile: 640px — everything single column, phone nav hides, call bar shows
- Small mobile: 480px — step grid goes 1-col

---

## Performance Requirements

- Zero JavaScript frameworks in the main bundle (vanilla JS only, or Astro islands)
- Google Fonts loaded with preconnect + display=swap
- Images lazy-loaded below the fold
- Hero image: WebP format, max 200KB, serve responsive sizes
- Target: < 1s LCP, < 100ms FID, 90+ PageSpeed score
- No animation libraries — CSS transitions/keyframes only

---

## What Must Come From Market Config (Not Hardcoded)

Every one of these must be a variable that changes per market:
- City name, state, metro area
- Company name, phone, address
- All SEO meta tags
- Hero headline (with city)
- Testimonials (names, locations, stories)
- FAQ answers (with city-specific details)
- Neighborhood/area names and descriptions
- Situation page content
- Market data numbers (homes purchased, rating, DOM, close days)
- Schema.org data (address, phone, area served)
- Form submission endpoint URL
