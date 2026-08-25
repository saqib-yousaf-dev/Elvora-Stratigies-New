# Elvora Strategies — Design Brief

## Brand Assets

- **Logo (transparent):** https://files.manuscdn.com/user_upload_by_module/session_file/310519663707500603/nWvnbEvpVcgieAOD.png
- **Logo (white bg):** https://files.manuscdn.com/user_upload_by_module/session_file/310519663707500603/ostcUUGAbuTHpFPA.png

## Three Approaches Considered

### Option A — Corporate Luminance (p: 0.04)

Crisp white backgrounds, charcoal type, amber/blue accents. Feels like a top-tier management consultancy.

### Option B — Precision Dark (p: 0.03)

Deep slate backgrounds with amber glow accents. Moody, premium, like a Bloomberg terminal reimagined.

### Option C — Elite White-Space Luxury ✅ CHOSEN (p: 0.07)

Vast white space, editorial typography, sky blue and mango amber as signature colors. The feeling of walking into a luxury financial firm's lobby — calm authority, zero clutter, every element earns its place.

---

## Chosen Design: Elite White-Space Luxury

### Design Movement

Contemporary Luxury Editorial — inspired by high-end financial consultancies (McKinsey, Oliver Wyman) and elite AI product companies (Palantir, Anthropic).

### Core Principles

1. **White space as a power statement** — generous padding signals confidence, not emptiness
2. **Typography-first hierarchy** — headlines do the heavy lifting, not decoration
3. **Color used sparingly** — mango amber (#F5A623) and sky blue (#4AABF0) appear as precise accents, never floods
4. **Motion that informs** — subtle entrance animations and scroll reveals, never gratuitous

### Color Philosophy

- **Background:** Pure white (#FFFFFF) and near-white (#F8F9FA) — clean, clinical, trustworthy
- **Primary text:** Near-black (#0D0D0D) — authoritative, readable
- **Signature amber:** #F5A623 — warmth, energy, CTAs, highlights
- **Sky blue:** #4AABF0 — intelligence, technology, secondary accents
- **Subtle grey:** #6B7280 — supporting text, captions

### Layout Paradigm

Asymmetric editorial grid — hero sections break the grid with oversized type on the left and visual on the right. Sections alternate between full-bleed and contained layouts. No centered-everything monotony.

### Signature Elements

1. **Amber underline accents** on key headlines — a single amber line beneath a word or phrase
2. **Thin horizontal rule dividers** in sky blue between major sections
3. **Floating stat cards** with amber left-border — used in hero and results sections

### Interaction Philosophy

Interactions feel deliberate and premium. Hover states reveal depth (subtle shadow lift on cards). CTAs pulse gently. No aggressive animations.

### Animation

- Entrance: elements fade up from y+20px, opacity 0→1, 400ms ease-out, staggered 60ms
- Hover on cards: translateY(-4px) + shadow deepens, 200ms ease-out
- CTA button: scale(0.97) on active, 160ms ease-out
- Nav: bg transitions to white/90 + backdrop-blur on scroll
- Ticker: smooth infinite horizontal scroll

### Typography System

- **Display/Headlines:** Playfair Display (serif) — weight 700, for H1 and section titles. Conveys authority and legacy.
- **Body/UI:** DM Sans — weight 400/500/600. Clean, modern, highly legible.
- **Accent labels:** DM Sans 600, letter-spacing 0.1em, uppercase — for section labels and tags

### Brand Essence

**Elvora Strategies** — The AI receptionist for businesses that can't afford to miss a lead. For ambitious SMEs. Because your front desk should never sleep.
Personality: **Authoritative. Precise. Quietly impressive.**

### Brand Voice

Headlines sound like a senior partner speaking: direct, confident, no fluff.

- "Your AI receptionist. Always on. Always converting."
- "Stop losing leads at 2am. Start with Elvora."
  Ban: "Welcome to our website", "Get started today", "We are passionate about..."

### Signature Brand Color

**Mango Amber #F5A623** — unmistakably Elvora's.

## Style Decisions

- Hero uses full-width background video with dark overlay for text legibility
- Services section uses asymmetric card layout, not uniform grid
- Stats/results use amber left-border floating cards
- Nav is transparent over hero, transitions to white on scroll

## GPTMate Reference Adaptation

The user supplied **gptmate.ai** as the new design reference. We will adapt its clear, product-first narrative and conversion flow, not copy its content, logo, magenta palette, black background, or visual assets.

### Reference Patterns to Adapt

1. A compact navigation and a narrow value strip that makes the product’s promise immediately clear.
2. A direct, problem-led hero with one decisive call to action.
3. An early, in-page product demonstration so visitors can experience Pulse rather than only read about it.
4. Modular benefit sections with concise copy, generous whitespace and repeated conversion opportunities.
5. A product-led page flow that supports immediate action without feeling like a traditional agency brochure.

### Selected Redesign Direction — Pulse Signal

**Core approach.** Translate GPTMate’s focused software-product structure into Elvora’s existing white, pale-blue, sky-blue and mango-amber system. The new page should highlight the operational cost of delayed replies, introduce Pulse early, and move visitors to either try Pulse or book a conversation.

**Layout paradigm.** Use a narrow value strip below the header, an expansive split hero, a dedicated Pulse demonstration surface, followed by alternating light product sections. Avoid a black hero or magenta gradients; retain the live ROI calculator with its open numeric inputs.

**Signature elements.** Include a compact “Pulse is live” indicator, a clear in-page “Try Pulse” action that opens the real assistant, and thin sky-blue/mango-amber rules between major sections.

**Copy direction.** Use direct, realistic outcomes rather than guarantees. Example: “Every visitor deserves a first response.” Example: “Pulse handles the opening conversation. Your team takes it from there.”

**Continuity rules.** Keep all existing routes, package pages, policy pages, footer contact actions, and current logo. Preserve the sky-blue, white and mango-amber palette and the Playfair Display plus DM Sans typography system.

### Style Decisions

- Large section fields stay white or near-white; saturated sky blue is limited to product demonstration surfaces, thin rules and intelligence signals.
- Every major section carries a recognizable Pulse cue: a live dot, transcript logic, blue/amber rule or result-style accent.
- CTA wording is product-specific: “Try Pulse”, “Meet Pulse”, “See Pulse in action”, and “Ask Pulse about this plan.”
