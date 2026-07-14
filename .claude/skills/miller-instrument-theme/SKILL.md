---
name: miller-instrument-theme
description: Use when building or restyling UI for the Miller Lab website (Next.js App Router + Tailwind v4). Applies the "Instrument" design language — a precision scientific-console aesthetic with sharp Kelly Green accents, DM Serif Display × JetBrains Mono, live instrument readouts, hairline journal matrices, and one orchestrated staggered page-load. Ships as a dual light/dark theme: a pristine chalk-white "Blueprint" mode (default) and a deep-graphite "Console" mode, with a persisted user toggle. Covers theme tokens for both modes, next/font setup, the toggle, component recipes, page patterns, the old→new component map, and a kill-list of the AI-slop patterns to delete.
---

# Miller Lab — "Instrument" theme (light + dark)

A precision-instrument aesthetic: an elite scientific-journal editorial voice fused with the readout of laboratory equipment. Massive DM Serif Display thesis statements sit against ultra-fine JetBrains Mono labels; a single sharp Kelly Green drives every marker, cursor, and active rule; the whole page boots up in one orchestrated staggered reveal.

It ships in **two modes that differ only in palette**:

- **Blueprint (light) — DEFAULT.** Pristine chalk-white ground with a fine graph-paper grid. Clinical, bright, legible. This is what the lab picked.
- **Console (dark).** Deep-graphite ground, the same layout as a lit instrument panel. Offered via a toggle.

A header toggle flips modes and persists the choice to `localStorage("miller-theme")`; first visit falls back to the OS `prefers-color-scheme`, then to light. The goal is a site that feels **expensive, human-designed, and authentically scientific** — not an AI-generated startup template.

`reference.html` in this folder is the approved, self-contained baseline (Tailwind CDN + Google Fonts + CSS variables + working toggle) — open it and click the toggle to see both modes. **Recreate it in the codebase's real stack (Next.js App Router + Tailwind v4 + next/font); do not ship the reference HTML or the Tailwind CDN.**

## Design philosophy

- **Paper/graphite + ink + one green.** Two grounds (chalk-white `#f4f4ef` / graphite `#0c100e`), a cool near-black or off-white ink, and a sharp Kelly Green (`#4cbb17`) as the ONLY accent. The old navy palette is fully retired.
- **Instrument, not decoration.** Depth comes from precision-equipment metaphors — technical/graph-paper grid lines, corner alignment marks, coordinate readouts, hairline dividers, a live data trace, a blinking cursor — never from soft blur or glow-for-glow's-sake. The one legitimate glow is the Kelly-Green status LED (kept subtle in light mode).
- **Extreme typographic contrast.** A display serif at 80px+ against 200–300-weight ledes and 700–800-weight micro-labels. Big scale jumps (7×+ from label to thesis) are the point.
- **Editorial + terminal hierarchy.** Every structural device maps to information: side labels, field codes, coordinate markers, `//` section tags. Nothing is ornamental filler.
- **Human, grounded copy.** Plain declaratives. Real lab content only — never invented stats or fake publication titles.

## Kill list (delete from the current design)

These are what made the old site feel AI-generated. Remove entirely:

- `GradientBlob` (all uses) + the multi-radial-gradient body background in `globals.css` → replaced by the fixed grid + (dark-only) vignette + grain overlays
- `.bg-grain` (old), `.glow-pulse`, `.float-y`, `.blob-drift`, any `animate-*` drift/float
- `.slant-b` / `.slant-t` / `.slant-tb` clip-path section edges → replaced by 1px hairline rules
- Navy hero/footer gradients (`from-navy-900 via-navy-950 to-black`) → each mode is one continuous ground; sections are divided only by hairlines
- `AnimatedStat` count-up → the repo's impact numbers are still placeholders; **do not ship fabricated stats.** Omit the stat band until real numbers exist, then render them as static mono figures.
- `rounded-xl` / `rounded-2xl` soft cards + hover-lift + colored shadow → square-cornered hairline panels (radius 0)
- Icon-in-circle treatments (`rounded-full bg-navy-900 text-green-400`)
- Decorative `01 / 02 / 03` numbering on research areas (they are 5 *parallel* programs, not a sequence) → use field codes `AI / SIM / BPX / DRG / BIO`
- All navy tokens (`--color-navy-*`)

Keep: the real content in `src/lib/content.ts`, the logo, `FaqAccordion` behavior (restyle it), and the current approved headline **"We turn data into insight."** (not the earlier "cures" test line).

## Theme tokens

Colors are CSS variables keyed off `[data-theme]` on `<html>`. The palette is the ONLY thing that changes between modes — structure, type, spacing, and motion are shared. Kelly Green `#4cbb17` is the shared accent; on the light ground, green **text** darkens to `#2c6e10` (small) / `#3a9410` (large) for contrast, while the raw `#4cbb17` still drives markers, rules, and brackets.

### Tailwind v4 (`globals.css`)

```css
@import "tailwindcss";

/* fonts as Tailwind tokens */
@theme{
  --font-serif: "DM Serif Display", Georgia, serif;
  --font-mono:  "JetBrains Mono", ui-monospace, monospace;
  --color-green: #4cbb17;         /* shared accent */
}

/* shared, non-color */
:root{
  --fill:      rgba(76,187,23,.13);   /* plot area fill */
  --green-dim: rgba(76,187,23,.45);   /* chip borders */
}

/* LIGHT "Blueprint" — default */
:root[data-theme="light"]{
  --page-bg:     radial-gradient(120% 80% at 80% -12%, rgba(76,187,23,.10), transparent 52%), #f4f4ef;
  --vignette:    transparent;
  --grid:        rgba(30,50,30,.05);
  --grid-fine:   rgba(30,50,30,.028);
  --grain-op:    .04;
  --panel:       rgba(255,255,255,.70);
  --field-hover: rgba(20,30,20,.03);
  --ink-bright:#14170f; --ink:#1f241d; --ink-2:#4a544d; --ink-3:#6a746c; --ink-4:#8a938c; --ink-5:#aab1aa;
  --hair:rgba(20,30,20,.14); --hair-strong:rgba(20,30,20,.20); --hair-faint:rgba(20,30,20,.07);
  --green-text:#2c6e10;   /* small green text / labels on paper (~5:1) */
  --green-head:#3a9410;   /* large: headline italic word, pull-quote */
  --trace:#3a9410;
  --cta-bg:#2c6e10; --cta-ink:#f4f4ef; --cta-hover:#38891a;
}

/* DARK "Console" */
:root[data-theme="dark"]{
  --page-bg:     radial-gradient(120% 80% at 78% -10%, rgba(76,187,23,.14), transparent 55%), #0c100e;
  --vignette:    radial-gradient(130% 90% at 50% 0%, transparent 58%, rgba(0,0,0,.6));
  --grid:        rgba(130,160,140,.05);
  --grid-fine:   rgba(130,160,140,.028);
  --grain-op:    .05;
  --panel:       rgba(255,255,255,.025);
  --field-hover: rgba(255,255,255,.025);
  --ink-bright:#f3f7f2; --ink:#e9efe9; --ink-2:#aab6ac; --ink-3:#8a978f; --ink-4:#5c675e; --ink-5:#4a554c;
  --hair:rgba(160,180,168,.16); --hair-strong:rgba(160,180,168,.28); --hair-faint:rgba(160,180,168,.08);
  --green-text:#4cbb17; --green-head:#4cbb17; --trace:#4cbb17;
  --cta-bg:#4cbb17; --cta-ink:#0c100e; --cta-hover:#6fd83f;
}

body{
  background:var(--page-bg); background-attachment:fixed;
  color:var(--ink); font-family:var(--font-mono);
  -webkit-font-smoothing:antialiased;
  transition:background .4s ease, color .4s ease;
}
```

Use the vars everywhere (`color:var(--ink-2)`, `border-color:var(--hair)`, etc.) rather than Tailwind color utilities, so a single `data-theme` swap re-themes the whole tree. Never introduce a second accent hue; never place graphite text on graphite or use raw `#4cbb17` as small text on the light ground (use `--green-text`).

### The toggle

Put a small mono toggle in the header. Set the attribute **before first paint** to avoid a flash (inline script in `<head>` or Next's `beforeInteractive`):

```js
(function(){
  var r = document.documentElement;
  var saved = localStorage.getItem('miller-theme');
  var initial = saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  r.setAttribute('data-theme', initial);
})();
// toggle handler:
function toggleTheme(){
  var r = document.documentElement;
  var next = r.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  r.setAttribute('data-theme', next);
  localStorage.setItem('miller-theme', next);
}
```

In Next.js, run the pre-paint snippet via a `<Script id="theme-init" strategy="beforeInteractive">`, and make the toggle button a small client component. Toggle style: mono 10px `.14em`, 1px `--hair-strong` border, a green LED dot, label = current mode (`LIGHT` / `DARK`); hover tints green.

### Fonts — `next/font/google` in `src/app/layout.tsx`

```tsx
import { DM_Serif_Display, JetBrains_Mono } from "next/font/google";
const fontSerif = DM_Serif_Display({ variable:"--font-serif", subsets:["latin"], weight:"400" });
const fontMono  = JetBrains_Mono({ variable:"--font-mono", subsets:["latin"], weight:["200","300","400","500","600","700","800"] });
// <body className={`${fontSerif.variable} ${fontMono.variable}`}>
```

BANNED fonts: Inter, Roboto, Arial, system-ui/`font-sans`, Space Grotesk. Only DM Serif Display (display/headings) and JetBrains Mono (everything else — labels, nav, body, data) appear on the site.

### Type scale & weight

| Role | Font | Spec |
|---|---|---|
| Thesis / hero | DM Serif Display 400 | 80–96px, `line-height:.9`, `letter-spacing:-.01em`. Italicize + `--green-head` ONE word ("insight"). |
| Section heading | DM Serif Display 400 | 30–34px, `--ink-bright`. |
| Card / field title | DM Serif Display 400 | 19–22px, `--ink`. |
| Lede (light weight) | JetBrains Mono **300** | 18px / 1.55, `--ink-2`. The deliberate light-weight foil to the serif. |
| Body / data | JetBrains Mono 400 | 11.5–13px / 1.7, `--ink-3`. |
| Kicker | JetBrains Mono 500 | 12px, `.22em`, `--green-text`, prefixed `//`. |
| Micro-label / nav / role | JetBrains Mono 500–**800** | 9.5–11px, `.14–.18em`, UPPERCASE, `--ink-3/4`. |

Pair 300-weight ledes directly beside 700–800-weight micro-labels — the contrast is mandatory.

### Structure (shared)

- Dividers: `1px solid var(--hair)` — never a slanted clip-path.
- Panels/cards: `1px solid var(--hair-strong)`, background `var(--panel)`, **radius 0**.
- Corner marks: 12–15px green L-brackets on panels and at the four viewport corners.
- Grid overlay: fixed, `46px` primary + `9.2px` fine cell (graph-paper), `z-index:0`, `pointer-events:none`; plus (dark-only) radial vignette and a faint SVG-noise grain layer.
- Container: `max-width:1280px`, side padding 34px.
- Layout is asymmetric: hero `1.12fr / .88fr`, mission `.4fr / 1fr`. Avoid centered symmetric blocks.

## Component recipes

Exact values live in `reference.html`; the essentials:

**Status ribbon** — top strip, mono 10px `.18em` `--ink-3`: live green LED + "SYSTEM ONLINE", real Chicago coords `41.9948°N · 87.6556°W`, "COMPUTATIONAL BIOMEDICINE", "LOYOLA UNIVERSITY CHICAGO".

**Header** — logo mark + `MILLER LAB` wordmark (JetBrains Mono 800, `.16em`). Nav links mono 11px `.14em` `--ink-2`, hover `--green-text`. Then the theme toggle, then Donate (green CTA chip).

**Kicker** — `// SECTION NAME` in mono `--green-text`, `.22em`, above every heading.

**Hero** — asymmetric grid. Left: kicker → giant serif thesis (one `--green-head` italic word) → 300-weight lede → mono detail paragraph → CTAs. Right: the instrument readout panel. A vertically-rotated `MILLER LAB — EST. LOYOLA` side label pins the left gutter.

**Instrument readout panel** — hairline panel with green corner brackets, header (`SIG // BINDING-ENERGY CONVERGENCE` + `MD · ILLUSTRATIVE`), an inline SVG line-plot (gridlines `var(--hair)`, area `var(--fill)`, trace `var(--trace)` that draws in on load via `stroke-dasharray`, glowing green end marker), axis labels with a blinking green cursor. Label it **ILLUSTRATIVE** — it is a designed motif, not a results claim. Swap in a real plot when data exists.

**Primary CTA** — `▸ EXPLORE THE RESEARCH`: `--cta-bg` fill, `--cta-ink` text, mono 700 `.14em`; hover `--cta-hover`. **Secondary CTA** — mono text, 1.5px green bottom-border, `→` suffix.

**Fields-of-inquiry matrix** — heading + bracketed mono note `[ 05 PARALLEL PROGRAMS · ONE PIPELINE: DATA → INSIGHT ]`. Five equal columns split by vertical hairlines; each: field code with a 6px green square (`AI / SIM / BPX / DRG / BIO`) → serif title → mono description. Hover tints the column `var(--field-hover)`. No ordinal numbers.

**Mission** — `.4fr / 1fr`: `// MISSION` label beside a large serif italic pull-quote (`--green-head` on "data"/"insight") + a mono supporting paragraph.

**Team** — two columns. Left: `// PRINCIPAL INVESTIGATOR`, serif name (`Whelton Miller, PhD`), mono bio, text CTA. Right (hairline-separated): a `ROSTER · 8 RESEARCHERS` header then divided rows `Name … GRAD/UGRAD`, then green outline chips `RNA EDITING / CANCER BIOLOGY / INFECTIOUS DISEASE`. All 8 are real — keep in sync with `src/lib/content.ts`.

**FAQ accordion** — keep open/close behavior; restyle: rows split by 1px `--hair`, question in serif 18px, toggle a 24px square (radius 0) with a green `+` that rotates 45° on open.

**Footer** — hairline top rule, mono 10px `.14em` `--ink-3`, email in `--green-text`, department line, `© 2026 MILLER LAB`.

## Component mapping (old → new)

- `GradientBlob`, old `.bg-grain`, `.slant-*` → fixed grid + (dark) vignette + grain overlays; hairline rules
- `SectionHeader` → `//` mono kicker + DM Serif Display heading, with a bracketed mono note on the baseline
- `FramedPanel` → instrument panel with green corner brackets
- `AnimatedStat` → omit until real numbers; then static mono figures (no count-up)
- `ResearcherCard` → a `roster-row` (name + GRAD/UGRAD), or serif name block for the PI
- `ResearchAreaList` → the 5-column hairline field matrix with field codes
- `DisciplineWeb` → optional: reinterpret as a hairline node graph (green nodes, 1px links) or drop in favor of the instrument plot
- `ComputeGrid` → recolor to ground cells with green active markers, framed as an instrument panel
- `HelixRibbon` / `HelixThread` → keep only as thin green line-art if it earns its place; otherwise cut
- `Reveal` → keep, but as the single orchestrated load sequence (opacity + translateY, staggered `animation-delay`), not per-scroll drift

## Page patterns

Shared: status ribbon + header (with toggle) + footer on every page; one continuous ground per mode; hairline dividers between sectors.

- **Home**: ribbon → hero (thesis + instrument panel) → fields-of-inquiry matrix → mission → team teaser → footer. (Add the impact band only once real numbers exist.)
- **About**: `// ABOUT` kicker + serif H1 + 300-weight lede; mission expanded; approach as a hairline-separated methodology list; PI bio.
- **Research**: field matrix expanded to full sections, each a hairline block: field code + serif title + description + (when available) a real plot/figure in an instrument panel.
- **Team**: PI feature block + full roster grid (grad/undergrad) as `roster-row`s; alumni as a plain divided mono list with programs.
- **FAQ**: restyled accordion, `max-width` ~760px.

## Motion (one orchestrated boot-up)

- Single page-load sequence: each top-level sector gets `.reveal` (opacity 0 → 1, `translateY(18px)` → 0) with staggered `animation-delay` cascading ~0.04s → 0.34s down the hero, then sections follow.
- The instrument trace draws once (`stroke-dasharray:900` + `draw` 2.2s ease-out).
- Persistent-but-quiet: status LED pulse, blinking cursor. Micro-interactions (nav, field hover, buttons, toggle) ≤0.15s — sharp, never bouncy. Mode transition on `body` is a 0.4s color/background fade.
- Wrap everything in `@media (prefers-reduced-motion: reduce)`: disable animation, force `.reveal` opacity 1, `scroll-behavior:auto`, and drop the body color transition.

## Copy voice & content honesty

- Short declaratives, first-person plural. Canonical headline: **"We turn data into insight."** with "insight" green + italic.
- Use ONLY real lab content from `src/lib/content.ts`: the five research areas, the mission ("close the gap between biological data and clinically relevant insight"), and the real 8-person roster.
- **Never fabricate**: no invented impact stats, no fake publication titles. If a "publications matrix" is wanted, build the structure but populate it only from real citations the lab provides; until then, omit it.

## Accessibility

- Contrast — light: ink `#1f241d` on `#f4f4ef` ≈ 13:1; `--green-text` `#2c6e10` on paper ≈ 5:1 (safe for text/labels); use `--green-head` only for large type. Dark: ink on graphite ≈ 14:1; `#4cbb17` on graphite ≈ 6:1. Never raw `#4cbb17` as small text on the light ground.
- Keep visible focus states: `outline: 2px solid var(--green); outline-offset: 2px`.
- All motion gated behind `prefers-reduced-motion`. Rotated side label and the drawn trace are decorative — never the only source of information.
- Set `data-theme` before first paint (inline head script) so there's no flash; the toggle button needs an accessible label (`aria-label="Toggle light / dark mode"`).
- Maintain semantic landmarks (`header`/`nav`/`main`/`section`/`footer`) and heading order when porting to components.
