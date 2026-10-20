# Kinnoc website design system

Extracted from the approved Kinnoc homepage design (Claude Design canvas, `references/design-source/Home.dc.html`). That file is the source of truth: every value below was read from it. Where this document and the design source disagree, the design source wins; please report the difference.

Machine-readable values live in `design-tokens.json` and `styles/tokens.css`. Icons in `components/icon-map.json`. Asset placement in `components/asset-map.json`.

Direction in one line: **white paper, navy ink, one blue pulse.** Lists rather than cards, hairlines rather than shadows, one strong accent.

---

## 1. Colour

| Token | Hex | Role |
|---|---|---|
| `paper` | `#FFFFFF` | Page, cards, text on ink/navy/blue |
| `ink` | `#0E1B3D` | Primary text and headings, the Discover section, selected underlines, step rules |
| `ink-2` | `#4D5B75` | Leads, descriptions, inactive desktop nav links |
| `ink-3` | `#5E6A82` | Eyebrows, meta, timestamps, inactive tabs |
| `navy` | `#1E3A8A` | Outgoing chat bubbles, event tiles, monograms, featured event card |
| `action` | `#0068D6` | Primary buttons, link hover, active states, the blue headline line, focus ring |
| `action-pressed` | `#0057B8` | Primary button hover and pressed |
| `logo-blue` | `#0086FF` | The logo colour. Lives inside the logo files only; never UI text on white (3.6:1) |
| `mist` | `#F4F6FA` | Quiet buttons, preview stages, closing CTA band, inputs |
| `mist-2` | `#E9EDF4` | Quiet button hover, neutral monograms |
| `sky` | `#E8F1FF` | Pale blue tiles and monograms, own reaction, mention badge |
| `sky-ring` | `#AFC3E8` | 1px inset ring on a selected sky chip |
| `line` | `#E7EBF2` | Hairlines and section dividers |
| `chip-border` | `#DFE4ED` | Inset border on interest chips and white monograms |
| `bubble-in` | `#EEF1F6` | Incoming bubbles, chat snippet tile, image placeholder fill |
| `on-navy` | `#C9D8F2` | Body text on ink and navy |
| `amber` | `#B45309` | Deadline warnings only ("CLOSES IN 3 DAYS") |
| `dark-tile` | `#1A2B55` | Listing tiles in the dark Discover section |
| `dark-label` | `#9FB3D9` | Eyebrows and labels in the dark section |
| `dark-accent` | `#7FB8FF` | Accent words and focus ring in the dark section |
| `dark-tile-ring` | `#3D5BA8` | Ring and secondary label on navy tiles in the dark section |
| `numeral` | `#E3E9F3` | Oversized destination number behind the showcase phone |

Rules:
- **No red, anywhere.** Not as an accent, an error colour, a badge or a heart. Likes are blue.
- **Amber is a deadline label, nothing else.**
- Blue on white for text is `action` (`#0068D6`, 5.0:1), never `logo-blue`.
- The header background is `rgba(255,255,255,.94)` with `backdrop-filter: saturate(1.4) blur(12px)`.
- Every text pair in the design passes WCAG AA. Keep the pairs; do not lighten `ink-3` or `on-navy`.
- Use the CSS variables (`var(--kn-color-ink)`), never raw hex in components.

## 2. Typography

| Role | Family | Weight | Notes |
|---|---|---|---|
| Display headings, step and tile titles, destination names, monograms, dates, numerals | **Bricolage Grotesque** | 600 headings, 700 monograms/dates/numbers | Optical size (opsz) follows font size automatically; leave `font-optical-sizing: auto` |
| Everything else: body, UI, buttons, labels | **Figtree** | 400 body, 500 to 700 UI | |

Both fonts are SIL OFL 1.1 and ship in `assets/fonts/`.

Scale. Responsive values are desktop / tablet / mobile (≥1024 / 640 to 1023 / <640), px.

| Style | Size | Line height | Tracking | Weight | Used for |
|---|---|---|---|---|---|
| Display | 86 / 64 / 42 | 86 / 66 / 44 | -3 / -2 / -1.3 | 600 | Hero headline (three lines, each a block; third line `action`) |
| CTA heading | 64 / 54 / 40 | 66 / 56 / 42 | -3 / -2 / -1.3 | 600 | "Your next community starts here." |
| H2 | 50 / 42 / 34 | 54 / 46 / 38 | -1 | 600 | Section headings, `text-wrap: balance` |
| H3 | 26 | 30 | -0.5 | 600 | Step titles, desktop showcase items |
| Audience title | 26 / 24 / 21 | 1.15 | -0.4 | 600 | Who it is for rows |
| Tile title | 22 | 27 | 0 | 600 | Discover listing tiles |
| Lead | 20 / 19 / 17 | 30 / 28 / 26 | 0 | 400 Figtree, `ink-2` | Hero and CTA lead |
| Body | 17 / 17 / 16 | 27 / 26 / 25 | 0 | 400 Figtree, `ink-2` | Section intros |
| UI | 15 to 16 | 22 | 0 | 600 | Nav links, buttons (16; header 15), rows |
| Eyebrow | 12 | 16 | 1 | 700, uppercase, `ink-3` | Section labels |
| Small label | 10 to 11 | 13 to 14 | 0.8 to 1 | 700, uppercase | Listing kinds, community kinds |
| Meta | 13 | 18 | 0 | 400, `ink-3` | Notes, "Built by" line |

Body text is antialiased (`-webkit-font-smoothing: antialiased`). Nothing on the page is smaller than 10px, and only inside the phone preview.

## 3. Layout

- **Breakpoints:** mobile `<640`, tablet `640 to 1023`, desktop `≥1024`. The design measures the page container; in the site, use viewport media queries at the same widths.
- **Container:** `max-width: 1296px; margin: 0 auto; padding-inline: 48 / 32 / 20`.
- **Section rhythm:** vertical padding `120 / 96 / 72`. Column gap `72 / 48 / 36`. Heading-to-content gap `56 / 44 / 32`.
- **Header:** sticky, height `76 / 68 / 60`, logo height `40 / 36 / 34`, 1px `line` bottom border.

Section order (do not change it): Header, Hero, Who it is for, Product showcase (`#product`), How it works, Discover (`#discover`), Communities (`#communities`), Closing CTA (`#join`), Footer (`#about`).

Section transitions: sections sit flush. White sections are separated by a 1px `line` top border (Who it is for, How it works). Discover is a full-bleed `ink` band. The closing CTA is a full-bleed `mist` band. The footer has a 1px top border. No gradients, waves, shadows or images between sections.

## 4. Sections

**Header.** Desktop: logo, centred links (Product, Communities, Discover, About: 15/600 `ink-2`, 44 tall, padding 0 14), Sign in (15/600 `ink`), Join Kinnoc (primary, 44 tall, padding 0 18, radius 12). Below 1024: Join Kinnoc compact (40 tall, padding 0 14, radius 10, 14px) and a 44px menu button (`menu` / `close` icons, 24px, stroke 1.9). The menu panel drops below the bar: links 52 tall in Bricolage 22/600 with `line` dividers, then a 48px quiet Sign in button.

**Hero.** Padding top `88 / 64 / 40`, bottom `104 / 88 / 64`. Eyebrow "COMMUNITIES · CONVERSATIONS · OPPORTUNITIES". Headline spans the full width. Below it, desktop: lead and CTAs left, mosaic right-aligned; tablet and mobile: stacked, mosaic left-aligned. Lead max-width 520. CTAs 56 tall, radius 12: primary "Join Kinnoc" + `arrow-right` 18px/2.2, quiet "Explore communities". On mobile both buttons are full width. Then the "Built by Brivent Global Innovations Limited" line (13px `ink-3`, blue symbol 14 × 18). Entrance: eyebrow, headline, lead, buttons, note rise 14px in sequence (0, 60, 140, 220, 300 ms).

**Hero mosaic.** Desktop and tablet: 5 columns × 4 rows; mobile 4 × 5. Cell 96 on desktop; tablet and mobile fit the width (tablet max 116). Gap 14 (10 on mobile). People are circles; communities are rounded squares at 30% radius (photo or monogram, monogram text 30% of the cell, Bricolage 700). Three snippet tiles: chat (`bubble-in`, radius 18, avatar 36, "Caleb A. in Tech Creators"), opportunity (white, `opportunity-snippet` shadow, "B" sky tile, "INTERNSHIP · REMOTE", "Frontend Developer (Internship)"), event (`navy`, "OCT 24 Lagos Tech Meetup"). Exact placement per breakpoint: `components/asset-map.json` → `Hero.mosaic`. One cell on the desktop top row is intentionally empty.

**Who it is for.** 1px top border. Desktop 5fr / 7fr: intro left, five rows right. Each row: image (128 × 92 / 120 × 86 / 88 × 72, radius 14), title + sentence, and on desktop a community chip at the right (32px monogram, radius 10); below 1024 the chip sits under the sentence (24px, radius 7). Rows have 18px vertical padding, a `line` top border and a `#F8F9FC` hover. Footnote: "Community names are examples of what you could join."

**Product showcase.** See `references/design-source/ShowcaseSpec.dc.html` for the full component and interaction spec. Desktop 5fr / 7fr: heading, copy and four numbered items on the left; a `mist` stage (radius 28, padding 56 / 40) with the phone (380 × 780, navy bezel 10px, radius 58; screen 360 × 760, radius 48) and a 200px `numeral` behind it on the right. Tablet: underline tabs in a row, detail, full-width stage (radius 24, padding 44 / 24, numeral 150). Mobile: same tabs, stage has no fill, the phone scales to the content width. The phone screens are real UI built from components, never screenshots.

**How it works.** 1px top border. Three columns on tablet and desktop, one on mobile (gap 40 / 24 / 44). Each step: 3px `ink` rule on top (inset box-shadow), "Step N" Bricolage 15/700 `ink-3`, H3, 16/24 `ink-2` text, then a `mist` panel (radius 16, padding 18, min-height 132) with a tiny illustration: profile card, two chat bubbles, two saved listings.

**Discover.** Full-bleed `ink`, class `kw-dark` (focus ring turns `dark-accent`). Desktop 5fr / 7fr. Eyebrow `dark-label`, H2 white with "Real opportunities." in `dark-accent`, body `on-navy`, four "leads with" lines, then a white "Explore Discover" button (52 tall, hover `sky`). Right: "EXAMPLE LISTINGS" + "Shown for illustration, not live opportunities", then a 2 × 2 grid of tiles (1 column on mobile), radius 20, padding 22, min-height `248 / 232 / 200`: event (`dark-tile`, 64px date), internship (white), hackathon (`sky`), guide (`dark-tile` with cover).

**Communities.** Desktop 7fr / 5fr with the conversation on the left; below 1024 the text comes first. The conversation sits on a `mist` stage (radius 28 / 24 / 20, padding 48 / 40 / 16) in a white card (radius 20, `preview-card` shadow). Then a list of four community kinds and a quiet "Explore communities" button.

**Closing CTA.** Full-bleed `mist`. Desktop 7fr / 5fr. CTA heading with "starts here." in `action`, lead, primary button. Right: 3 × 2 identity grid (cells `104 / 96 / fit`, gap 12) mixing three people and three monograms, right-aligned on desktop.

**Footer.** Desktop 4fr 2fr 2fr 2fr; tablet 2fr 1fr 1fr 1fr; mobile two columns with the brand spanning both. Logo (34 tall, 70 wide box, contain, left), one-line description, then PRODUCT / COMPANY / LEGAL columns (headings 12/700 `ink-3`, links 15px `ink`, underline on hover). Bottom row with a top hairline: "© 2026 Kinnoc. Built by Brivent Global Innovations Limited." and the tagline.

## 5. Components and states

| Component | Default | Hover | Active | Focus |
|---|---|---|---|---|
| Primary button | `action` bg, white 16/600, radius 12, 56 tall (44 header, 40 compact) | `action-pressed` | moves down 1px | 2px `action` ring, 3px offset |
| Quiet button | `mist` bg, `ink` text | `mist-2` | moves down 1px | ring |
| Light button (on ink) | white bg, `ink` text, 52 tall | `sky` | moves down 1px | `dark-accent` ring |
| Nav link | 15/600 `ink-2` | `action` | | ring |
| Footer link | 15 `ink` | `action` + underline (offset 4, 1.5px) | | ring |
| Showcase item, desktop | transparent, number `ink-3`, title `ink-2` | `mist` fill | selected: `mist` fill, number `action`, title `ink`, detail opens | ring |
| Showcase tab, tablet/mobile | 16/500 `ink-3`, 44 tall | `ink` text | selected: 700 `ink` + 2px `ink` underline | ring |
| Audience row | | `#F8F9FC` | | |
| Interest chip | 26 to 28 tall, radius 8, 1px `chip-border` inset | | selected: `ink` fill, white text | |

All state changes animate 180ms ease (background, colour, shadow, transform). Focus is `:focus-visible` only.
**Disabled:** the design has no disabled controls. If one is ever needed, use 45% opacity, no hover, `cursor: not-allowed`, and keep the label; this is a proposal, not part of the approved design.

## 6. Radii, borders, shadows

- Radii: 4, 8, 10, 12, 16, 20, 24, 28, 30% (communities), full (people, pills, badges). Buttons 12. Chips 8. Audience images 14. Snippet tiles 18. Preview cards and listing tiles 20. Stages 28 / 24.
- Borders are hairlines (`1px line`) or inset box-shadows. Selected underline `inset 0 -2px 0 ink`. Step rule `inset 0 3px 0 ink`.
- Shadows, the only three: `preview-card` (`0 24px 60px rgba(14,27,61,.14), 0 0 0 1px rgba(14,27,61,.05)`), `opportunity-snippet` (`0 12px 32px rgba(14,27,61,.10), 0 0 0 1px rgba(14,27,61,.06)`), `phone` (`0 50px 90px -30px rgba(14,27,61,.45)`). Everything else is flat.

## 7. Imagery

- **People:** circles, `object-fit: cover`, centred, natural colour. No filters, tints, overlays or duotones. Same 480px file at every size.
- **Communities:** rounded square, radius 30% of the box, cover. A community without a photo gets a monogram tile, never a stock image.
- **Ratios:** people 1:1; audience rows about 1.4:1 (128 × 92); feed media 1.8:1 (328 × 182); event thumbnail 1.1:1; resource covers 3:4 (roughly 78%).
- **Placeholders:** files named `*-placeholder.webp` are stand-ins (see `ASSET_MANIFEST.md`). Build with them, ship nothing named placeholder to production.
- Never pair a real person's photo with a name, role, school or community Caleb has not confirmed.

## 8. Icons

One family: Lucide-derived outlines on a 24px grid, `currentColor`, round caps and joins, stroke 1.8 by default (1.9 on header and menu icons, 2 to 2.2 on small arrows and checks). Filled states (liked heart, saved bookmark) fill with the stroke colour. Use `components/Icon.tsx`. No emoji as interface icons; the only emoji in the design is the 🙌 reaction inside a sample chat.

## 9. Motion

| Name | Spec | Where |
|---|---|---|
| State change | 180ms ease | Buttons, links, rows |
| Rise | 700ms `cubic-bezier(.2,.7,.2,1)`, 14px up, stagger 60 / 140 / 220 / 300ms | Hero text |
| Pop | 600ms same curve, scale .94 to 1, 40ms stagger from 120ms | Mosaic tiles |
| Swap | 280ms ease, 6px up | Showcase detail |
| Screen | 380ms ease-out, 8px up | Phone screen change |
| Push | 260ms ease-out, 16px from the right | Opening a conversation |
| Typing dots | 1.2s loop, 150ms stagger | Typing indicators |

`prefers-reduced-motion: reduce` removes all of it. The classes are in `styles/interactions.css`.

## 10. Do not change

- The section order, the hero headline and its three-line break, and the blue third line.
- The mosaic concept (people, community identities, three small UI snippets). No hero photo.
- People round, communities rounded-square at 30%. Never swap the shapes.
- One accent blue for UI (`#0068D6`); no extra accent colours; no red; amber only for deadlines.
- Lists with hairlines instead of cards; only the three shadows above.
- Bricolage for display, Figtree for everything else; no third font.
- "Sample" and "for illustration" labels on example listings and previews.
- The logo files as supplied: never recolour, redraw, stretch or add effects.
