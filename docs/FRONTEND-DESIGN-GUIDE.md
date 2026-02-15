# Frontend Design Guidelines

**Source:** Anthropic official frontend-design skill (anthropics/claude-code)
**Purpose:** Produce distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics.

---

## Design Thinking — Before Writing Any Code

Before coding, understand the context and commit to a BOLD aesthetic direction:

- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick a clear direction: brutally minimal, maximalist, retro-futuristic, organic/natural, luxury/refined, playful, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian. Commit fully.
- **Constraints**: Technical requirements (framework, performance, accessibility).
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

---

## Aesthetics Guidelines

### Typography
Choose fonts that are beautiful, unique, and interesting. **NEVER use**: Arial, Inter, Roboto, system-ui, or any default AI font. Opt for distinctive choices that elevate the design — unexpected, characterful font choices. Pair a distinctive display font with a refined body font.

### Color & Theme
Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.

### Motion
Use animations for effects and micro-interactions. Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.

### Spatial Composition
Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.

### Backgrounds & Visual Details
Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic:
- Gradient meshes
- Noise textures
- Geometric patterns
- Layered transparencies
- Dramatic shadows
- Decorative borders
- Grain overlays

---

## What to NEVER Do

NEVER use generic AI-generated aesthetics:
- Overused font families (Inter, Roboto, Arial, system fonts)
- Cliched color schemes (particularly purple gradients on white backgrounds)
- Predictable layouts and component patterns
- Cookie-cutter design that lacks context-specific character

Interpret creatively and make unexpected choices that feel genuinely designed for the context. No two designs should look the same.

**Match implementation complexity to the aesthetic vision.** Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.

---

## For Wholesale Machine Context

Our audience is **distressed homeowners** — people facing foreclosure, divorce, inherited properties, or financial hardship. The design must:

1. **Build instant trust** — This is not a startup SaaS landing page. It's a lifeline for someone in crisis.
2. **Feel professional and established** — Like a real company, not a template.
3. **Be warm, not cold** — Approachable. Human. Not corporate or sterile.
4. **Convert on mobile** — 70%+ of traffic is mobile. Every element must work thumb-first.
5. **Load fast** — Sub-2-second load time. Static site, CDN-served.

**Recommended aesthetic direction**: Clean, warm, professional with a touch of authority. Think modern financial services or premium real estate — not generic contractor site. Green/earth tones for trust, amber/orange CTAs for action (Von Restorff isolation effect).
