---
name: miller-bulletin-theme
description: Use when building or restyling UI for the Miller Lab website (Next.js + Tailwind v4). Applies the "Bulletin Board" design language — paper + ink + Kelly Green, Archivo Black / Space Grotesk / IBM Plex Mono, tactile pinned/taped/stamped components. Covers tokens, component recipes, page patterns, and what to delete from the old design.
---

# Miller Lab — Bulletin Board theme

A department-bulletin-board aesthetic: bold flyer typography on warm paper, index cards held down with tape, rubber stamps, dashed cut-here rules. The goal is a site that feels **human and easy to understand** — like something a real lab pinned up in a hallway — not an AI-generated startup template.

The design reference this skill encodes was approved as a high-fidelity HTML mock (`reference.html` in this folder shows every component). Recreate it in the codebase's existing stack (Next.js App Router + Tailwind v4); don't ship the reference HTML.

## Design philosophy

- **Paper + ink + one green.** Warm paper background, near-black ink, Kelly Green as the ONLY accent. The old navy palette is retired everywhere.
- **Tactile, not decorated.** Depth comes from physical metaphors — tape, pins, stamps, hard offset shadows, slight rotations — never from gradients, blurs, or glows.
- **Human copy.** Plain, direct sentences ("We turn data into cures."). Mono-type captions in lowercase are welcome ("where the questions come from"). Ban corporate filler: leverage, cutting-edge, unlock, empower, seamless.
- **Legibility first.** Rotation and irregularity are seasoning on small elements (badges, cards, photos) — never rotate paragraphs or whole sections. Body text stays large, dark, and straight.

## Kill list (remove from the old design)

Delete these components/patterns entirely — they are what made the site feel AI-generated:

- `GradientBlob` (all uses) and the multi-radial-gradient body background in `globals.css`
- `.bg-grain` noise overlay, `.glow-pulse`, `.float-y`, `.blob-drift`
- `.slant-b` / `.slant-t` / `.slant-tb` clip-path section edges → use a 2px dashed ink rule instead
- Dark navy hero/footer gradients (`from-navy-900 via-navy-950 to-black`) → header/footer become flat ink bars; page sections sit on paper
- `AnimatedStat` count-up animation → static numbers in stat badges
- `rounded-xl`/`rounded-2xl` soft cards with hover-lift + colored shadow → 2.5px ink-bordered cards, radius ≤ 3px
- Icon-in-circle treatments (`rounded-full bg-navy-900 text-green-400`)
- All navy color tokens (`--color-navy-*`)

Keep: the logo (`public/logo.png`, invert it on dark bars), the Kelly Green scale, the real content in `src/lib/content.ts`, `FaqAccordion` behavior (restyle it), and the helix motif if wanted as small ink line-art.

## Tokens

### Color

```css
/* paper & ink */
--color-paper:      #f2efe6;  /* page background */
--color-paper-dim:  #e9e5da;  /* subtle alt / nav text on ink */
--color-card:       #ffffff;  /* card faces */
--color-ink:        #161613;  /* text, borders, header/footer bars */
--color-ink-soft:   #3c3a34;  /* body copy */
--color-ink-mute:   #5c5952;  /* secondary copy, captions */
--color-ink-faint:  #8a857a;  /* metadata, index numbers */

/* Kelly Green — keep the existing scale from globals.css. Key uses: */
--color-green-600:  #00b140;  /* fills only (buttons, chips, tape) w/ dark text */
--color-green-700:  #00963a;  /* green TEXT on paper/white (contrast-safe) */
--color-green-400:  #3adb70;  /* hover fill; link hover on dark bars */
--color-green-ink:  #0c1b10;  /* text on green fills */
```

Rules: green text on light backgrounds is always `#00963a` (700), never `#00b140`. `#00b140` is a fill color and always pairs with `#0c1b10` text. Tape is `rgba(0,177,64,0.5)` over photos, `rgba(0,177,64,0.85)` on white cards.

### Type

| Role | Font | Notes |
|---|---|---|
| Display / headlines | **Archivo Black** | Always uppercase, `line-height: 0.96`, `letter-spacing: -0.01em`. h1 72–96px, h2 30–36px, card titles 14–22px. Highlight ONE word per headline in green-700. |
| Body / UI | **Space Grotesk** 400–700 | Body 16–19px / 1.6. Nav & buttons: 600–700, uppercase, `letter-spacing: 0.05–0.07em`, 13–15px. |
| Labels / captions / numbers | **IBM Plex Mono** 400–600 | Kickers: 12–13px, uppercase, `letter-spacing: 0.14–0.16em`, green-700. Captions: 11–12px, lowercase, ink-mute. |
| Marginalia (sparing) | **Caveat** 600–700 | Optional handwritten notes/annotations, 16–22px, rotate −4 to +4°. Max ~1 per screen. |

next/font swap in `src/app/layout.tsx`:

```tsx
import { Archivo_Black, Space_Grotesk, IBM_Plex_Mono, Caveat } from "next/font/google";
const fontDisplay = Archivo_Black({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const fontSans    = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], weight: ["400","500","600","700"] });
const fontMono    = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400","500","600"] });
const fontHand    = Caveat({ variable: "--font-hand", subsets: ["latin"], weight: ["600","700"] });
```

### Borders, shadows, radius, rotation

- Card/badge/button border: `2.5px solid #161613` (2px acceptable on small elements)
- Radius: 2–3px max (chips/buttons); cards are square-cornered; stamp circles are `border-radius: 50%`
- Primary button shadow: `box-shadow: 3px 3px 0 #161613` (hard offset, no blur); on hover/active reduce to `1px 1px 0` + `translate(2px,2px)` for a "pressed" feel
- Photo shadow (the one soft shadow allowed): `0 10px 24px rgba(22,22,19,0.2)`
- Rotations: −2° to +2° on cards/photos/badges, up to ±9° on stamps/tape. Alternate directions across a row so it reads pinned, not broken.
- Section dividers: `border-top: 2px dashed #161613`

## Component recipes

Exact values; see `reference.html` for all of these rendered.

**Header** — flat ink bar (`#161613`), height 64px, sticky. Logo img with `filter: brightness(0) invert(1)` + wordmark in Archivo Black 17px white. Nav links: Space Grotesk 600, 13px, uppercase, ls 0.07em, `#e9e5da`, hover `#3adb70`. Donate = green chip: bg `#00b140`, text `#0c1b10`, padding 8px 16px, radius 2px.

**Kicker (eyebrow)** — IBM Plex Mono 600, 12–13px, uppercase, ls 0.14–0.16em, `#00963a`. Sits above every headline.

**Stamp button (primary CTA)** — bg `#00b140`, text `#0c1b10`, Space Grotesk 700 uppercase 14–15px ls 0.05em, padding 14–16px 24–28px, border 2.5px ink, radius 3px, `box-shadow: 3px 3px 0 #161613`, `transform: rotate(-1deg)`. Hover: bg `#3adb70`, shadow `1px 1px 0`, translate(2px,2px).

**Text CTA** — Space Grotesk 700 uppercase 13–14px, ink text, `border-bottom: 2.5px solid #00963a`, arrow "→" suffix.

**Circle stamp** — 100–110px circle, 2.5px ink border, paper bg, mono uppercase 11px centered 2–3 line text (e.g. "Posted / Jul 2026 / — Loyola —"), rotate 8–9°. Use one per page max, overlapping a corner of hero or photo.

**Stat badge** — white bg, 2.5px ink border, irregular radius (e.g. `border-radius: 44% 56% 52% 48%` — vary per badge), padding 18px 26px, rotate ±2° alternating. Number: Archivo Black 30px ink. Label: mono 11px uppercase ls 0.05em `#5c5952`. Numbers are static (no count-up).

**Index card** (research areas, team members) — white bg, 2.5px ink border, square corners, padding 16px, rotate ±1.5° alternating, tape strip centered on top edge: absolutely positioned div `width:34–40px; height:12px; background:rgba(0,177,64,0.85); top:-8px`. Contents: mono index "01" `#8a857a` → Space Grotesk 700 title → 11.5–13px `#5c5952` blurb.

**Pinned photo (polaroid)** — white frame via padding `14px 14px 52px`, image `object-fit: cover`, rotate −2°, soft photo shadow, mono lowercase caption centered in the bottom margin, tape strip on top (`width:90px; height:26px; background:rgba(0,177,64,0.5); rotate(-3deg)`).

**Label-maker strip** — inline-block, bg ink, white mono uppercase 10px ls 0.06em, padding 3px 8px. Use for tiny section tags ("LED BY", "NOTICE").

**FAQ accordion** — keep open/close behavior; restyle: rows divided by 2px dashed ink, question in Space Grotesk 700 17–18px, toggle is a 28px square (not circle) with 2px ink border and a "+" that rotates 45° when open, green-700 on open.

**Footer** — flat ink bar, mono 10.5px uppercase `#e9e5da`/`#8a857a`, email in green-400 on hover. No gradient, no grain.

## Component mapping (old → new)

- `GradientBlob`, `.bg-grain`, `.slant-*` → delete (dashed rules replace slants)
- `SectionHeader` → kicker (mono green) + Archivo Black uppercase title + optional text CTA on the right baseline
- `FramedPanel` (offset border frame) → pinned photo or taped index card
- `AnimatedStat` → static stat badge
- `ResearcherCard` → index card with tape; initials avatar becomes a small circle stamp (2px ink border, mono initials)
- `ResearchAreaList` → row of taped index cards (or numbered list with mono numerals on About)
- `DisciplineWeb` → restyle: 2px ink lines, white nodes with 2px ink borders, green-700 icon strokes, hub as circle stamp
- `ComputeGrid` → optional: recolor to ink cells + green-600 actives on paper, framed like a taped-down printout; or replace with a real photo polaroid
- `Reveal` (scroll fade-in) → keep but subtle (opacity only, ≤0.3s) or remove; nothing should drift/float

## Page patterns

- **Home**: ink header → hero (kicker / huge Archivo Black headline with one green word / 1–2 sentence dek / stamp button + text CTA / circle stamp overlapping a pinned pipette photo) → stat badge row with a mono aside ("↑ the short version of what we've been up to") → dashed rule → "Five areas of work" as taped index cards → team teaser: polaroid + "LED BY" label strip + Dr. Miller blurb + text CTA → ink footer.
- **About / Research / Team / FAQ**: same header/footer; page heroes are flat paper (no dark band): kicker + Archivo Black h1 + short dek, then dashed rule. Team roster = index-card grid (grad/undergrad) + alumni as a plain divided list with mono programs. FAQ = restyled accordion, max-width ~720px.
- Content container: `max-width: 1160–1240px`, side padding 40–48px.

## Copy voice

Short declaratives. First person plural. Say what things are ("Five areas of work", "Who's in the lab"). Numbers stated plainly ("8 of us total"). Mono captions may be lowercase. One rewrite already approved: hero H1 = **"We turn data into cures."** with "data" in green-700.

## Accessibility

- Contrast: ink on paper ≈ 15:1; green-700 on paper ≈ 4.6:1 (fine for large/bold text and kickers); never green-600 as text on light.
- Wrap all rotation/pressed-shadow transitions in `@media (prefers-reduced-motion: no-preference)`.
- Rotated elements are decorative containers; their text stays ≥11px and high-contrast.
- Keep focus states: 2px solid `#00963a` outline with 2px offset suits the theme.
