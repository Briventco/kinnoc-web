/** Site-wide settings, routes and names. Every link on the page reads from here. */

export const SITE = {
  name: 'Kinnoc',
  company: 'Brivent Global Innovations Limited',
  companyUrl: 'https://www.brivent.co',
  tagline: "Find your people. Join the conversation. Discover what's next.",
  title: "Kinnoc · Find your people, join the conversation, discover what's next",
  description:
    'A home for students, creators and professionals to connect, share ideas, find opportunities and grow together. Built by Brivent Global Innovations Limited.',
  url: 'https://kinnoc.com',
  year: 2026,
} as const;

/**
 * Homepage sections are addressed as "/#section" so links work from every page.
 * The remaining "#..." entries are the placeholder routes listed in
 * kinnoc-design-system/HANDOFF.md ("Real routes"); swap them here when destinations exist.
 */
export const ROUTES = {
  home: '/',
  product: '/#product',
  communities: '/#communities',
  discover: '/#discover',
  join: '/#join',
  about: '/about',
  contact: '/about#contact',
  privacy: '/privacy',
  terms: '/terms',
  // Pending destinations (product decisions still open)
  joinStart: '#join-start',
  signIn: '#sign-in',
  discoverApp: '#discover-app',
  communitiesApp: '#communities-app',
} as const;

export const NAV_LINKS = [
  { label: 'Product', href: ROUTES.product },
  { label: 'Communities', href: ROUTES.communities },
  { label: 'Discover', href: ROUTES.discover },
  { label: 'About', href: ROUTES.about },
] as const;

export const FOOTER_NAV = [
  {
    title: 'Product',
    links: [
      { label: 'Feed', href: ROUTES.product },
      { label: 'Communities', href: ROUTES.communities },
      { label: 'Discover', href: ROUTES.discover },
      { label: 'Profile', href: ROUTES.product },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: ROUTES.about },
      { label: 'Contact', href: ROUTES.contact },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: ROUTES.privacy },
      { label: 'Terms of Service', href: ROUTES.terms },
    ],
  },
] as const;

/**
 * Contact details. None have been supplied yet, so none are shown; pages render a
 * "to be confirmed" line instead. Fill these in once Brivent confirms them.
 */
export const CONTACT: { general?: string; privacy?: string; legal?: string } = {};

/**
 * Display names for the four supplied portraits. Person 3 is Caleb Abisoye; the others stay
 * unnamed until Caleb confirms names and consent (ASSET_MANIFEST.md). One line each to change.
 */
export const WHO = {
  p1: 'Person 1',
  p2: 'Person 2',
  p3: 'Caleb A.',
  p4: 'Person 4',
} as const;
