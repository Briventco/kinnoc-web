# Design source

These are the approved design files exported from the Kinnoc Claude Design canvas. They are the reference for layout, spacing and copy. Do not ship them.

- `Home.dc.html`: the homepage. One responsive file: the `renderVals()` script at the bottom computes every size from the container width (`D` desktop ≥1024, `T` tablet 640 to 1023, `M` mobile <640) in the `L`, `F` and `ph` objects. Read those objects for exact values. Markup uses a small template language: `{{x.y}}` is a value, `<sc-if>` is a condition, `<sc-for>` is a loop.
- `ShowcaseSpec.dc.html`: the product showcase component and interaction spec, as a sheet.
- `WebSystem.dc.html`: the earlier website system and handoff sheet (breakpoints, type, components, placeholder routes).

Images in these files are referenced as `/_blob/<id>`. This table maps each one to the file in this package:

| Blob id | Package file |
|---|---|
| `10e1f593c83e03ff16c25d74d2c6504a` | `assets/logos/kinnoc-lockup-blue.png` |
| `e00526c9e1e43836a4f68866c19c38fa` | `assets/logos/kinnoc-symbol-blue.png` |
| `65808a0ff7af21fa969efbf886b5fc2d` | `assets/images/people/person-1-480.webp` |
| `d74090200f650cedaa9de3c5d899d211` | `assets/images/people/person-2-480.webp` |
| `430c0f09899bf1d66967a5f938945709` | `assets/images/people/person-3-caleb-abisoye-480.webp` |
| `3059bb958e048bf246c0ae398ac47016` | `assets/images/people/person-4-480.webp` |
| `2e57fe39723a689a73e461527851df62` | `assets/images/people/placeholders/audience-students-placeholder.webp` |
| `369df77ed322c901b5216d9fcab3396f` | `assets/images/people/placeholders/audience-developers-designers-placeholder.webp` |
| `c8ee31449b39ed87b51131404241afc5` | `assets/images/people/placeholders/audience-creators-placeholder.webp` |
| `8078a7f16f93d515733a30a4d4a193f3` | `assets/images/people/placeholders/audience-early-career-placeholder.webp` |
| `61a4dcdb095675ec6541cf8226cfd7e8` | `assets/images/people/placeholders/audience-builders-entrepreneurs-placeholder.webp` |
| `28bdda1057305c4ad397e945216f9f2f` | `assets/images/communities/tech-creators-avatar-placeholder.webp` |
| `8dda10db7331f109bfebcb09bfa583ea` | `assets/images/feed/hultprize-uniosun-event.webp` |
| `5d2c54945ece8b7cfdf1cea85edfa617` | `assets/images/opportunities/lagos-tech-meetup-skyline-placeholder.webp` |
| `2c78dd7865515ca7c3ab474ba9188d41` | `assets/images/resources/system-design-roadmap-cover-placeholder.webp` |
| `e627a548cbb6f8e4a753a3426929e53d` | `styles/interactions.css` |

Inline `<svg>` icons in `Home.dc.html` correspond one to one to `assets/icons/` (see `components/icon-map.json`). The three status-bar drawings are `assets/illustrations/device/`.
