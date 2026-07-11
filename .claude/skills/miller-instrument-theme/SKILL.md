---
name: miller-instrument-theme
description: Use when building or restyling UI for the Miller Lab website (Next.js App Router + Tailwind v4). Applies the "Instrument" design language — a deep-graphite scientific console with sharp Kelly Green accents, DM Serif Display × JetBrains Mono, live instrument readouts, hairline journal matrices, and one orchestrated staggered page-load. Covers theme tokens, next/font setup, component recipes, page patterns, the old→new component map, and a kill-list of the AI-slop patterns to delete.
---

# Miller Lab — "Instrument" theme

A deep-graphite laboratory-console aesthetic: an elite scientific-journal editorial voice fused with the readout of a precision instrument. Massive DM Serif Display thesis statements sit against ultra-fine JetBrains Mono labels; a single sharp Kelly Green drives every marker, cursor, and active rule; the whole page boots up in one orchestrated staggered reveal.

The goal is a site that feels **expensive, human-designed, and authentically scientific** — not an AI-generated startup template.

`reference.html` in this folder is the approved, self-contained design baseline (Tailwind CDN + Google Fonts + CSS variables) — open it to see every component rendered and interactive. **Recreate it in the codebase's real stack (Next.js App Router + Tailwind v4 + next/font); do not ship the reference HTML or the Tailwind CDN.**

## Design philosophy

- **Graphite + ink + one green.** A near-black graphite ground, cool off-white ink, and a sharp Kelly Green (`#4cbb17`) as the ONLY accent. The old navy palette is fully retired.
- **Instrument, not decoration.** Depth comes from precision-equipment metaphors — technical grid lines, corner alignment marks, coordinate readouts, hairline dividers, live data traces, blinking cursors — never from soft gradients, blur, or glow-for-glow's-sake. (The one legitimate glow is the Kelly-Green status LED and CTA halo.)
- **Extreme typographic contrast.** A display serif at 80px+ against 200–300-weight subheads and 700–800-weight micro-labels. Big scale jumps (7×+ from label to thesis) are the point.
- **Editorial + terminal hierarchy.** Every structural device maps to information: side labels, field codes, coordinate markers, "// SECTION" tags. Nothing is ornamental filler.
- **Human, grounded copy.** Plain declaratives. Real lab content only — never invented stats or fake publication titles.

## Kill list (delete from the current design)

These are what made the old site feel AI-generated. Remove entirely:

- `GradientBlob` (all uses) + the multi-radial-gradient body background in `globals.css` → replaced by the fixed technical-grid + vignette + grain overlays
- `.bg-grain` (old), `.glow-pulse`, `.float-y`, `.blob-drift`, any `animate-*` drift/float
- `.slant-b` / `.slant-t` / `.slant-tb` clip-path section edges → replaced by 1px hairline `--hair` rules
- Navy hero/footer gradients (`from-navy-900 via-navy-950 to-black`) → the whole site is one continuous graphite ground; sections are divided only by hairlines
- `AnimatedStat` count-up → the repo's impact numbers are still placeholders; **do not ship fabricated stats.** Omit the stat band until real numbers exist, then render them as static mono figures.
- `rounded-xl` / `rounded-2xl` soft cards + hover-lift + colored shadow → square-cornered hairline panels (radius 0; the theme is deliberately un-rounded)
- Icon-in-circle treatments (`rounded-full bg-navy-900 text-green-400`)
- Decorative `01 / 02 / 03` numbering on the research areas (they are 5 *parallel* programs, not a sequence) → use field codes `AI / SIM / BPX / DRG / BIO` instead
- All navy tokens (`--color-navy-*`)

Keep: the real content in `src/lib/content.ts`, the logo, `FaqAccordion` behavior (restyle it), and the current approved headline **"We turn data into insight."** (not the earlier "cures" test line).

## Theme tokens

### Tailwind v4 (`globals.css`)

Define the palette once with `@theme` so utilities like `text-green`, `bg-graphite`, `border-hair` exist across the app:

```css
@import "tailwindcss";

@theme {
  --color-graphite:    #0c100e;  /* page ground */
  --color-graphite-2:  #0f1512;  /* raised panel base */
  --color-ink-bright:  #f3f7f2;  /* display headings */
  --color-ink:         #e9efe9;  /* primary text */
  --color-ink-2:       #8a978f;  /* secondary / body */
  --color-ink-3:       #5c675e;  /* labels, metadata */
  --color-ink-4:       #4a554c;  /* faint side labels */
  --color-green:       #4cbb17;  /* THE accent — markers, cursors, CTAs, active rules */
  --color-green-bright:#6fd83f;  /* hover only */

  --font-serif: "DM Serif Display", Georgia, serif;
  --font-mono:  "JetBrains Mono", ui-monospace, monospace;
}

/* hairlines & atmosphere (not Tailwind color utilities — raw vars) */
:root{
  --hair:        rgba(160,180,168,.16);
  --hair-strong: rgba(160,180,168,.28);
  --hair-faint:  rgba(160,180,168,.08);
  --grid:        rgba(130,160,140,.05);
  --green-glow:  rgba(76,187,23,.30);
  --green-dim:   rgba(76,187,23,.40);
}

body{
  background:
    radial-gradient(120% 80% at 78% -10%, var(--green-glow), transparent 55%),
    var(--color-graphite);
  color: var(--color-ink);
  font-family: var(--font-mono);
  -webkit-font-smoothing: antialiased;
}
```

Rules: Kelly Green is `#4cbb17` everywhere it is the accent; `--color-green-bright` (`#6fd83f`) is **hover-only**. Green as text always sits on graphite (contrast ≈ 6:1). Never introduce a second accent hue.

### Fonts — `next/font/google` in `src/app/layout.tsx`

```tsx
import { DM_Serif_Display, JetBrains_Mono } from "next/font/google";

const fontSerif = DM_Serif_Display({
  variable: "--font-serif", subsets: ["latin"], weight: "400",
});
const fontMono = JetBrains_Mono({
  variable: "--font-mono", subsets: ["latin"],
  weight: ["200","300","400","500","600","700","800"],
});
// add both variables to <body className={`${fontSerif.variable} ${fontMono.variable}`}>
```

BANNED fonts: Inter, Roboto, Arial, system-ui/`font-sans`, Space Grotesk. Only DM Serif Display (display/headings) and JetBrains Mono (everything else — labels, nav, body, data) appear on the site.

### Type scale & weight

| Role | Font | Spec |
|---|---|---|
| Thesis / hero | DM Serif Display 400 | 80–96px, `line-height:.9`, `letter-spacing:-.01em`. Italicize + green ONE word ("insight"). |
| Section heading | DM Serif Display 400 | 30–34px. |
| Card / field title | DM Serif Display 400 | 19–22px. |
| Lede (light) | JetBrains Mono **300** | 18px / 1.55, color `--color-ink-2`/`#aab6ac`. The deliberate light-weight foil to the serif. |
| Body / data | JetBrains Mono 400 | 11.5–13px / 1.7. |
| Kicker | JetBrains Mono 500 | 12px, `letter-spacing:.22em`, green, prefixed `//`. |
| Micro-label / nav / role | JetBrains Mono 500–**800** | 9.5–11px, `letter-spacing:.14–.18em`, UPPERCASE, `--color-ink-3`. |

Extreme contrast is mandatory: pair 300-weight ledes directly beside 700–800-weight micro-labels.

### Structure

- Dividers: `1px solid var(--hair)` — **never** a slanted clip-path. Section-top rule is the only separator between sectors.
- Panels/cards: `1px solid var(--hair-strong)`, background `rgba(255,255,255,.025)`, **radius 0**.
- Corner marks: 12–15px L-brackets in green on panels and at the four viewport corners (precision-equipment framing).
- Grid overlay: fixed, `46px` cell, `--grid` lines, `z-index:0`, `pointer-events:none`; plus a radial vignette and a faint SVG-noise grain layer.
- Container: `max-width:1280px`, side padding 34px.
- Layout is asymmetric: hero `1.12fr / .88fr`, mission `.4fr / 1fr`. Avoid centered symmetric blocks.

## Component recipes

Exact values live in `reference.html`; the essentials:

**Status ribbon** — top strip, mono 10px `.18em` `--color-ink-3`: live green LED + "SYSTEM ONLINE", real Chicago coords `41.9948°N · 87.6556°W`, "COMPUTATIONAL BIOMEDICINE", "LOYOLA UNIVERSITY CHICAGO". Sets the instrument tone immediately.

**Header** — logo mark + `MILLER LAB` wordmark (JetBrains Mono 800, `.16em`). Nav links mono 11px `.14em` `--color-ink-2`, hover `--color-green-bright`. Donate = green chip (graphite text, green bg, green glow).

**Kicker** — `// SECTION NAME` in mono green, `.22em`, above every heading.

**Hero** — asymmetric grid. Left: kicker → giant serif thesis (one green italic word) → 300-weight lede → mono detail paragraph → CTAs. Right: the instrument readout panel. A vertically-rotated `MILLER LAB — EST. LOYOLA` side label pins the left gutter.

**Instrument readout panel** — hairline panel with green corner brackets, a header (`SIG // BINDING-ENERGY CONVERGENCE` + `MD · ILLUSTRATIVE`), an inline SVG line-plot with faint gridlines, a green trace that draws in on load (`stroke-dasharray` + `draw` keyframe), a glowing end marker, and axis labels with a blinking green cursor. Label it **ILLUSTRATIVE** — it is a designed motif, not a claim of specific results. When real figures exist, swap in a genuine plot.

**Primary CTA** — `▸ EXPLORE THE RESEARCH`: green bg, graphite text, mono 700 `.14em`, green glow; hover → `--color-green-bright`. **Secondary CTA** — mono text with a 1px green bottom-border, `→` suffix.

**Fields-of-inquiry matrix** — heading + a bracketed mono note `[ 05 PARALLEL PROGRAMS · ONE PIPELINE: DATA → INSIGHT ]`. Five equal columns separated by vertical hairlines; each: field code with a 6px green square (`AI / SIM / BPX / DRG / BIO`) → serif title → mono description. Hover tints the column `rgba(255,255,255,.025)`. No ordinal numbers.

**Mission** — `.4fr / 1fr`: a `// MISSION` label beside a large serif italic pull-quote (green on "data" and "insight") + a mono supporting paragraph.

**Team** — two columns. Left: `// PRINCIPAL INVESTIGATOR`, serif name (`Whelton Miller, PhD`), mono bio, text CTA. Right (hairline-separated): a `ROSTER · 8 RESEARCHERS` header then divided rows `Name … GRAD/UGRAD`, followed by green outline chips `RNA EDITING / CANCER BIOLOGY / INFECTIOUS DISEASE`. All 8 people are real — keep them in sync with `src/lib/content.ts`.

**FAQ accordion** — keep open/close behavior; restyle: rows split by 1px `--hair`, question in serif 18px, toggle a 24px square (radius 0) with a green `+` that rotates 45° on open.

**Footer** — hairline top rule, mono 10px `.14em` `--color-ink-3`, email in green, department line, `© 2026 MILLER LAB`. No gradient, no blob.

## Component mapping (old → new)

- `GradientBlob`, old `.bg-grain`, `.slant-*` → fixed grid + vignette + grain overlays; hairline rules
- `SectionHeader` → `//`-prefixed mono kicker + DM Serif Display heading, with a bracketed mono note on the baseline
- `FramedPanel` (offset border) → instrument panel with green corner brackets
- `AnimatedStat` → omit until real numbers; then static mono figures (no count-up)
- `ResearcherCard` → a `roster-row` (name + GRAD/UGRAD), or serif name block for the PI
- `ResearchAreaList` → the 5-column hairline field matrix with field codes
- `DisciplineWeb` → optional: reinterpret as a hairline node graph (green nodes, 1px links) or drop in favor of the instrument plot
- `ComputeGrid` → recolor to graphite cells with green active markers, framed as an instrument panel
- `HelixRibbon` / `HelixThread` → keep only as thin green line-art if it earns its place; otherwise cut
- `Reveal` → keep, but as the single orchestrated load sequence (opacity+translateY, staggered `animation-delay`), not per-scroll drift

## Page patterns

Shared: status ribbon + header + footer on every page; one continuous graphite ground; hairline dividers between sectors.

- **Home**: ribbon → hero (thesis + instrument panel) → fields-of-inquiry matrix → mission → team teaser → footer. (Add the impact band only once real numbers exist.)
- **About**: `// ABOUT` kicker + serif H1 + 300-weight lede; mission expanded; approach as a hairline-separated methodology list; PI bio.
- **Research**: field matrix expanded to full sections, each a hairline block: field code + serif title + description + (when available) a real plot/figure in an instrument panel.
- **Team**: PI feature block + full roster grid (grad/undergrad) as `roster-row`s; alumni as a plain divided mono list with programs.
- **FAQ**: restyled accordion, `max-width` ~760px.

## Motion (one orchestrated boot-up)

- Single page-load sequence: each top-level sector gets `.reveal` (opacity 0 → 1, `translateY(18px)` → 0) with a staggered `animation-delay` cascading ~0.04s → 0.34s down the hero, then sections follow.
- The instrument trace draws once (`stroke-dasharray:900` + `draw` 2.2s ease-out).
- Persistent-but-quiet: status LED pulse, blinking cursor. Micro-interactions (nav, field hover, buttons) are ≤0.15s — sharp, never bouncy.
- Wrap everything in `@media (prefers-reduced-motion: reduce)`: disable all animation, force `.reveal` opacity to 1, set `scroll-behavior:auto`.

## Copy voice & content honesty

- Short declaratives, first-person plural. Headline is canonical: **"We turn data into insight."** with "insight" green + italic.
- Use ONLY real lab content from `src/lib/content.ts`: the five research areas, the mission ("close the gap between biological data and clinically relevant insight"), and the real 8-person roster.
- **Never fabricate**: no invented impact stats, no fake publication titles. If a "publications matrix" is wanted, build the structure but populate it only from real BibTeX/citations the lab provides; until then, omit it or show the research themes instead.

## Accessibility

- Contrast: ink on graphite ≈ 14:1; green `#4cbb17` on graphite ≈ 6:1 (safe for text, labels, and large type). Never place graphite text on graphite; green-on-graphite for small text is fine.
- Keep visible focus states: `outline: 2px solid var(--color-green); outline-offset: 2px`.
- All motion gated behind `prefers-reduced-motion`. Rotated side labels and the drawn trace are decorative — never the only source of any information.
- Maintain semantic landmarks (`header`/`nav`/`main`/`section`/`footer`) and heading order when porting to components.
