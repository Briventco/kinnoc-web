# Kinnoc design system package

Real assets and exact design values for the Kinnoc marketing website (`kinnoc-web`, Next.js + TypeScript). It was extracted from the approved Claude Design homepage so the site can be rebuilt without guessing.

**Claude Code: read this file, then `HANDOFF.md`, then `DESIGN_SYSTEM.md`.** Use `components/asset-map.json` and `components/icon-map.json` as lookup tables while you build.

## What is in here

```text
kinnoc-design-system/
├── README.md                  this file: setup and rules
├── HANDOFF.md                 what to fix in the site, in order
├── DESIGN_SYSTEM.md           colours, type, layout, sections, states, motion
├── ASSET_MANIFEST.md          every file: use, size, origin, licence
├── design-tokens.json         all tokens, machine readable
├── package.json               only for `npm run verify`
├── scripts/verify-assets.mjs  checks every path and map (no dependencies)
├── styles/
│   ├── tokens.css             CSS variables (--kn-*), responsive values via media queries
│   ├── fonts.css              @font-face for plain CSS use
│   └── interactions.css       hover, focus, motion classes used by the design
├── components/
│   ├── Icon.tsx               all icons as one React component, no dependencies
│   ├── icon-map.json          icon files, Lucide equivalents, every usage with size and stroke
│   └── asset-map.json         every site component -> exact asset paths and display sizes
├── assets/
│   ├── logos/                 web-ready lockups and symbols (+ favicon/, source/ 4500px masters)
│   ├── icons/                 navigation/, features/, social/, interface/ (SVG)
│   ├── images/                people/, communities/, feed/, opportunities/, resources/ (WebP)
│   ├── illustrations/device/  phone status bar SVGs
│   └── fonts/                 Bricolage Grotesque and Figtree variable WOFF2 + OFL licences
└── references/
    ├── asset-preview.png      visual sheet of the package
    ├── design-hero-desktop-1440.png
    └── design-source/         the approved design files and a blob-to-file map
```

## Install into kinnoc-web

1. Put this folder next to the app, or inside it at `design-system/`.
2. Copy the assets the site serves into `public/`:
   ```bash
   mkdir -p public/kinnoc && cp -R design-system/assets/{logos,images,illustrations} public/kinnoc/
   cp design-system/assets/logos/favicon/favicon.ico app/favicon.ico
   ```
   A path like `assets/images/people/person-1-480.webp` in the maps becomes `/kinnoc/images/people/person-1-480.webp`.
3. Fonts with `next/font/local` (no network at build, exact files from this package). Copy `assets/fonts/` to `app/fonts/`, then in `app/layout.tsx`:
   ```tsx
   import localFont from 'next/font/local';

   const display = localFont({
     src: [
       { path: './fonts/bricolage-grotesque/bricolage-grotesque-variable-latin.woff2', weight: '200 800', style: 'normal' },
       { path: './fonts/bricolage-grotesque/bricolage-grotesque-variable-latin-ext.woff2', weight: '200 800', style: 'normal' },
     ],
     variable: '--kn-font-display-face',
     display: 'swap',
   });
   const body = localFont({
     src: [
       { path: './fonts/figtree/figtree-variable-latin.woff2', weight: '300 900', style: 'normal' },
       { path: './fonts/figtree/figtree-variable-latin-ext.woff2', weight: '300 900', style: 'normal' },
     ],
     variable: '--kn-font-body-face',
     display: 'swap',
   });
   // <html className={`${display.variable} ${body.variable}`}>
   ```
   `tokens.css` reads these (`--kn-font-display` and `--kn-font-body` resolve to them), so components only ever use `var(--kn-font-display)` / `var(--kn-font-body)`. Do not also import `styles/fonts.css` (that file is for non-Next use).
4. Import the styles once, in this order, in `app/layout.tsx` or `app/globals.css`:
   ```css
   @import '../design-system/styles/tokens.css';
   @import '../design-system/styles/interactions.css';
   ```
   Put `className="kw"` on the page root (the interaction classes are scoped to it) and `kw-dark` on the Discover section.
5. Copy `components/Icon.tsx` to `components/ui/Icon.tsx` and use `<Icon name="search" size={22} strokeWidth={1.9} />`.
6. Use `next/image` for every photo with explicit `width`/`height` from `asset-map.json`. WebP is already optimised; keep `sizes` small (the largest person image displays at 104px).

**No new packages are needed.** Optional: `lucide-react` if you would rather import icons than use `Icon.tsx`; `icon-map.json` lists the nearest export for each. Two icons are Kinnoc-specific (`menu` has two lines; `communities` has a shorter second line), so `Icon.tsx` is the faithful choice.

## Rules

- Colours, sizes and radii come from `var(--kn-*)` tokens. No raw hex in components; no second definition of a token.
- One asset per job. If `asset-map.json` names a file for a component, use that file; do not import a second copy or a similar image.
- Logo on white, mist or sky: `kinnoc-lockup-blue.png`. On ink, navy or action blue: `kinnoc-lockup-white.png`. Never recolour or redraw the logo; there is no SVG master yet.
- No red. Amber only for deadline labels. No emoji as interface icons.
- People photos: circles, cover, no filters. Never attach a name, title, school or community to Persons 1, 2 and 4 until Caleb confirms it; Person 3 is Caleb Abisoye.
- Anything named `*-placeholder.*` is a stand-in. It may ship in staging, not in production.

## Check the package

```bash
cd design-system && npm run verify
```
Fails if any manifest file is missing, any asset is unlisted, any map points at a missing file, `Icon.tsx` drifts from the SVG files, or a token is missing from `tokens.css`.

## Licences

- Kinnoc logos and the Kinnoc people photos: owned by Brivent Global Innovations Limited or supplied by Caleb for this site. Not for reuse elsewhere.
- Fonts: SIL Open Font License 1.1 (licence files in `assets/fonts/*/OFL.txt`).
- Icons: paths derived from Lucide (lucide.dev), ISC licence.
- Placeholder images: AI-generated stand-ins from earlier mockups; production licence not established. Replace.
