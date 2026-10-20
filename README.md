# kinnoc-web

The Kinnoc marketing website: *Find your people. Join the conversation. Discover what's next.*
Built by Brivent Global Innovations Limited. Next.js 14 (App Router) + TypeScript, CSS Modules, no UI dependencies.

## Source of truth

`kinnoc-design-system/` is the design package. The site imports from it directly rather than copying it:

| What | Where it comes from |
|---|---|
| Tokens (`--kn-*`) | `kinnoc-design-system/styles/tokens.css`, imported in `src/app/layout.tsx` |
| Hover, focus and motion (`.kw-*`) | `kinnoc-design-system/styles/interactions.css` |
| Icons | `@ds/components/Icon` (`kinnoc-design-system/components/Icon.tsx`) |
| Fonts | `next/font/local`, from `kinnoc-design-system/assets/fonts/` |
| Images and logos | copied to `public/kinnoc/` by `npm run assets:sync` |
| Layout and copy | `kinnoc-design-system/references/design-source/Home.dc.html` |

Do not redefine a token or add colours in components; use `var(--kn-*)`.

## Structure

```text
src/
├── app/                 layout (fonts, metadata, global CSS), / (homepage), /about, /privacy, /terms
├── content/             site.ts (routes, contact, names), assets.ts (every image), home.ts, showcase.ts, about.ts,
│                        legal/ (privacy.tsx, terms.tsx, types.ts with LEGAL_STATUS)
└── components/
    ├── ui/              Button, Monogram (token tones), PersonPhoto (always a circle), SectionIntro
    ├── site/            SiteShell, SiteHeader (mobile menu), SiteFooter
    ├── about/           About page sections
    ├── legal/           LegalPageLayout (contents, numbered sections, review notes)
    ├── home/            Hero + HeroMosaic, Audience, HowItWorks, Discover, Communities, ClosingCTA
    └── showcase/        ProductShowcase (tablist), PhoneFrame, Feed/Communities/Discover/Profile screens
```

Breakpoints are mobile-first at 640 and 1024, matching `tokens.css`.

## Commands

```bash
npm run dev            # local development
npm run build          # production build
npm run typecheck      # TypeScript
npm run assets:sync    # re-copy package assets into public/kinnoc/
npm run assets:verify  # check the design package is complete and consistent
```

## Open items before launch

- **Placeholder images.** These are AI stand-ins, listed with `placeholder: true` in `src/content/assets.ts`: the five audience photos, the Tech Creators picture, the Lagos skyline and the System Design cover.
- **Names.** Persons 1, 2 and 4 display as "Person N" until names and consent are confirmed (`WHO` in `src/content/site.ts`). The `@calebabisoye` handle is a placeholder.
- **HultPrize photo.** Permission is needed for the people and names visible in the photo, and a 1200 px original.
- **Routes.** `#join-start`, `#sign-in`, `#discover-app` and `#communities-app` are still placeholders (`ROUTES` in `src/content/site.ts`).
- **Contact details.** None have been supplied. Add them to `CONTACT` in `src/content/site.ts`; until then, pages show "Contact details to be confirmed".
- **Legal pages.** `/privacy` and `/terms` are drafts that have not been legally reviewed. Each "For review" note marks a fact or legal choice to confirm. Once the text is approved, set the dates and `showReviewNotes: false` in `src/content/legal/types.ts`.
- **Brand assets.** There is no SVG logo master yet, the favicon set needs approval, and there is no social share image.
