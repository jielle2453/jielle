# Jielle Lu — Portfolio

Editorial-journal-style portfolio prototype.

## Run

```bash
cd site
npm install
npm run dev
```

Open http://localhost:4321

## Stack

- **Astro 5** — static-first, content-driven
- **Tailwind CSS 3.4** — utility styling with custom tokens
- **Svelte 5** — interactive islands (scramble text, cursor warmth)
- **Google Fonts** — Fraunces / Bricolage Grotesque / JetBrains Mono / Caveat

## Design tokens

| Token | Value |
|---|---|
| `paper` | `#F3EEE3` (warm off-white) |
| `ink` | `#1A1814` |
| `rust` | `#C04A1E` (signature accent, one color only) |
| Display font | Fraunces (variable, SOFT/WONK/opsz axes) |
| Body font | Bricolage Grotesque |
| Mono font | JetBrains Mono |
| Hand font | Caveat (marginalia only) |

## Components

| File | Role |
|---|---|
| `Base.astro` | Layout + global font loading + overlays |
| `GrainOverlay.astro` | SVG paper-grain, fixed, multiply blend |
| `CursorWarmth.svelte` | Radial warmth glow following cursor |
| `ScrambleText.svelte` | Role-cycling scramble animation |
| `Masthead.astro` | Journal-style top header with TOC |
| `Marginalia.astro` | Right-column handwritten annotations |
| `FeaturedSection.astro` | Frosted-glass case study card over data pattern |
| `Colophon.astro` | Footer / contact |

## Adding a case study

Next step: add `src/content/projects/linepay.mdx` with Astro Content Collections.
Convert the existing `../linepay-case-study.md` into MDX and build the project template.

## Notes

- Scramble cycles through `UX Designer · UX Researcher · Learning Scientist · Budding PM` — edit in `src/pages/index.astro`.
- Frosted glass works because the data-bar decoration sits behind it. Blur needs something worth blurring.
- The one "unforgettable" detail: **marginalia**. Handwritten-feel annotations in the right column. Nobody else does this.
