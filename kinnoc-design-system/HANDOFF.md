# Handoff: repairing the Kinnoc website

For Claude Code, working in `kinnoc-web`. The current build drifted from the design. The design files in `references/design-source/` are the target; this package supplies the real assets and values.

## How to work

1. Run `npm run verify` in this folder. It must pass before you start.
2. Install fonts, tokens, interaction CSS, `Icon.tsx` and assets as described in `README.md`.
3. Rebuild section by section, in page order. For each section:
   - read its paragraph in `DESIGN_SYSTEM.md` §4,
   - read its markup and the `L` / `F` values in `references/design-source/Home.dc.html`,
   - take assets from `components/asset-map.json` and icons from `components/icon-map.json` (usage key gives size and stroke),
   - check it at 1440, 768 and 390.
4. Replace every hard-coded colour, font size and spacing value in the existing code with a `var(--kn-*)` token. Delete any duplicate token, theme or colour file the old build created.
5. Delete images and icon packs the old build added that are not in `ASSET_MANIFEST.md`.

## Components to build

`SiteHeader` (with mobile menu), `Button` (primary, quiet, light), `SectionIntro` (eyebrow, H2, body), `HeroMosaic` (data-driven from `asset-map.json` → `Hero.mosaic`), `AudienceRow`, `ProductShowcase` (tabs, detail, stage, `PhoneFrame`, four app screens: see `ShowcaseSpec.dc.html`), `StepList`, `ListingTile`, `ConversationPreview`, `CommunityKindRow`, `ClosingCTA` (identity grid), `SiteFooter`, `Icon`, `Monogram` (community 30% radius / person circle).

## Responsive differences that matter

| | Desktop ≥1024 | Tablet 640 to 1023 | Mobile <640 |
|---|---|---|---|
| Header | inline links, Sign in, Join | Join + menu button | Join + menu button |
| Hero | headline full width; text left, mosaic right | stacked, mosaic 5 × 4 | stacked, mosaic 4 × 5, full-width buttons |
| Two-column sections | 5 : 7 or 7 : 5 | one column | one column |
| Communities | conversation left | text first, conversation after | text first |
| Showcase | numbered list + stage | underline tabs + full-width stage | underline tabs, phone scaled to width, no stage fill |
| Steps | 3 columns | 3 columns | 1 column |
| Discover tiles | 2 × 2 | 2 × 2 | 1 column |
| Footer | 4 columns | 4 columns | 2 columns |

## Missing assets: decisions needed from Caleb

| What | Now | Needed |
|---|---|---|
| Audience row photos (5) | AI placeholders, 250 × 178 | Real, consented photos, 4:3, at least 512 × 368, and who represents which audience |
| Tech Creators community photo | AI placeholder, 128 px | Real square photo, at least 256 px |
| HultPrize UNIOSUN post photo | Cropped from an app screenshot, 760 × 428 | Original at 1200 px+, and permission for the people and names visible in it |
| Names for Persons 1, 2, 4 | "Person 1/2/4" labels in the design | Names and consent to appear on the site |
| Profile username, bio, interests | Placeholders ("@calebabisoye") | Caleb's real details |
| SVG logo | Not supplied | Vector master from the logo designer (do not trace) |
| Favicon and app icons | Derived from the blue symbol in this package | Approval |
| Real routes | `#join`, `#join-start`, `#sign-in`, `#discover-app`, `#communities-app`, `#about-page`, `#contact`, `#privacy`, `#terms` | Destinations |
| Event and resource images | Placeholders, adequate at their small sizes | Only if listings become real |

Build with the placeholders so the layout can be checked; list them in the PR as not ready for production.

## Do not

- Add a hero photo, stock illustrations, gradients, extra shadows, a third font, or red.
- Turn the lists into card grids.
- Replace the phone previews with screenshots.
- Present sample listings or chats as live: keep the "Sample content" and "Shown for illustration" lines.
- Invent names, counts, testimonials or partner logos.

## Done means

- `npm run verify` passes here, and the site builds with no missing-image warnings.
- Every colour, size and radius in the site comes from a token.
- Desktop, tablet and mobile match `Home.dc.html` section by section.
- Keyboard focus is visible everywhere, and reduced motion turns animation off.
