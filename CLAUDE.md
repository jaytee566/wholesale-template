# CLAUDE.md — Project Instructions for Claude Code

## What We're Building
A config-driven "sell my house fast" website template using Astro 5 + Tailwind CSS v4.
Each market gets its own deployment on Cloudflare Pages with a custom domain.
The template reads ALL content from a per-market JSON config file — nothing is hardcoded.

## Design Direction
Read DESIGN-BRIEF.md for complete visual specifications. Key summary:
- Full-bleed hero image with dark gradient overlay + multi-step lead capture form
- Transparent-to-solid navigation on scroll (white text → dark text, transparent → white+blur)
- Green primary (#16a34a) + Amber CTA buttons (#D97706) — Von Restorff isolation effect
- Barlow Condensed headlines (uppercase, bold, tight) + Inter body text
- Generous whitespace, scroll-reveal animations (IntersectionObserver)
- Premium "legitimate business" feel — NOT a typical "we buy houses" squeeze page

## Design Reference Files
- prototypes/notiontry.html — VISUAL AESTHETIC TARGET (hero layout, spacing, animations, card design, typography scale, scroll behavior)
- prototypes/v5.html — CONVERSION ARCHITECTURE TARGET (multi-step form, objection crusher, math comparison, smart sticky bar, micro-testimonial, breathing CTA)
- When building any component, cross-reference BOTH prototypes and merge the best elements

## Tech Stack
- Astro 5.x (latest stable)
- Tailwind CSS v4
- TypeScript (strict mode)
- Cloudflare Pages adapter (@astrojs/cloudflare)
- astro-seo package for meta tags
- @astrojs/sitemap for auto-sitemap
- Vanilla JS for interactivity (NO React, NO Vue in the main bundle)
- Google Fonts: Barlow Condensed (600,700,800) + Inter (400,500,600,700)

## Project Structure
```
src/
├── components/
│   ├── forms/          # Multi-step lead capture form (vanilla JS island)
│   ├── sections/       # Hero, TrustBar, ObjectionCrusher, Benefits, HowItWorks,
│   │                   # MathComparison, About, Testimonials, SituationsGrid,
│   │                   # FAQ, MidCTA, FinalCTA
│   ├── layout/         # Header, Footer, StickyCallBar
│   └── ui/             # CTAButton, Accordion, Card, Badge, ProgressBar
├── config/
│   ├── markets/        # Per-market JSON configs (jacksonville-fl.json, etc.)
│   └── defaults.ts     # Shared defaults all markets inherit
├── content/
│   ├── situations/     # MDX files for situation pages
│   ├── areas/          # MDX files for area/neighborhood pages
│   └── blog/           # MDX files for blog posts
├── layouts/
│   ├── BaseLayout.astro
│   ├── PageLayout.astro
│   └── BlogLayout.astro
├── pages/
│   ├── index.astro
│   ├── how-it-works.astro
│   ├── about.astro
│   ├── thank-you.astro
│   ├── privacy-policy.astro
│   ├── terms.astro
│   ├── situations/[...slug].astro
│   ├── areas/[...slug].astro
│   └── blog/
│       ├── index.astro
│       └── [...slug].astro
├── styles/
│   └── global.css
└── utils/
    ├── market-config.ts   # MarketConfig type + getMarketConfig() helper
    └── seo.ts             # SEO/schema helper functions
```

## Critical Rules

### Config-Driven (Most Important)
- EVERY piece of text on the site must come from the market config JSON or defaults.ts
- City name, company name, phone, testimonials, FAQ, neighborhoods — ALL from config
- If you can swap the city name and the content still makes sense, it's not local enough
- The getMarketConfig() helper loads the active market based on MARKET_ID env variable

### Legal/Compliance
- SMS consent checkbox MUST be UNCHECKED by default (FCC One-to-One Consent rule, Jan 2026)
- Consent text: "I agree to receive text messages about my cash offer. Message & data rates may apply. Reply STOP to opt out."
- Form must capture: consent_given (boolean), consent_timestamp (ISO), ip_address, page_url
- Privacy Policy must include SMS consent language and TCPA compliance

### Performance
- Zero JS frameworks in the main bundle — vanilla JS only, or Astro client:load islands
- Google Fonts loaded with preconnect + display=swap
- Images lazy-loaded below the fold
- Hero image: WebP, max 200KB, responsive srcset
- Target: < 1s LCP, < 100ms FID, 90+ PageSpeed Insights score
- No animation libraries — CSS transitions and @keyframes only

### SEO
- JSON-LD on every page: LocalBusiness (homepage), FAQPage (any page with FAQ), Article (blog), BreadcrumbList (inner pages), Service (situation pages)
- Unique title tag and meta description per page, all from config
- H1 unique per page and contains city name
- Canonical URL using config.domain
- Sitemap auto-generated with proper priority values
- Internal linking: every page links to 2-3 other pages minimum

### Internal Linking Rules
- Every situation page → 2-3 blog posts + form + How It Works
- Every area page → How It Works + About Us + 2-3 situation pages
- Every blog post → 2-3 situation/area pages + form
- Homepage → all situation pages + top 3 area pages + latest blog posts

### Form Behavior
- Multi-step: Address → Situation → Timeline → Contact
- Steps 1 and 2 auto-advance on option tap (280ms delay for visual feedback)
- Phone number input BEFORE name (distressed sellers type phone faster)
- Email hidden behind "Add email (optional)" toggle
- Submit button text: "See My Cash Offer →" with breathing animation
- On submit: POST to Cloudflare Worker endpoint (URL from env variable)
- Payload: address, situation, timeline, phone, name, email, sms_consent, consent_timestamp, page_url, utm_params
- On success: redirect to /thank-you
- Smart sticky bar changes text when form is in viewport

## Color System
```css
--green: #16a34a;        /* Primary — trust, money, safety */
--green-dark: #15803d;   /* Hover states */
--green-light: #f0fdf4;  /* Light backgrounds */
--amber: #D97706;        /* ALL CTA buttons */
--amber-light: #F59E0B;  /* CTA gradients */
--amber-glow: rgba(217, 119, 6, 0.35);  /* CTA shadows */
--black: #0a0a0a;        /* Hero overlay, dark sections */
--dark: #111827;          /* Objection crusher, footer */
--gray-50 through --gray-800  /* Content hierarchy */
--red: #ef4444;           /* Objection X marks, error states */
```

## Typography
```css
--headline: 'Barlow Condensed', 'Arial Narrow', sans-serif;  /* All headings, uppercase */
--body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;  /* All body text */
```

## Build & Deploy
- Build: `MARKET_ID=jacksonville-fl npm run build`
- Dev: `MARKET_ID=jacksonville-fl npm run dev`
- The astro.config.mjs reads MARKET_ID to select the correct config
- Deploy target: Cloudflare Pages (free tier)
- Each market = separate Cloudflare Pages project with custom domain
