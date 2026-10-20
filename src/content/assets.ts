/**
 * Every image the site uses, mapped from kinnoc-design-system/components/asset-map.json.
 * Files are copied into public/kinnoc/ by `npm run assets:sync`.
 * Anything with `placeholder: true` is a stand-in that must be replaced before production.
 */

export type Asset = { src: string; width: number; height: number; placeholder?: boolean };

const base = '/kinnoc';

export const LOGO = {
  lockupBlue: { src: `${base}/logos/kinnoc-lockup-blue.png`, width: 900, height: 435 },
  /** On ink, navy and action-blue backgrounds only. */
  lockupWhite: { src: `${base}/logos/kinnoc-lockup-white.png`, width: 900, height: 435 },
  symbolBlue: { src: `${base}/logos/kinnoc-symbol-blue.png`, width: 464, height: 600 },
} satisfies Record<string, Asset>;

/** The four supplied portraits. Always rendered as circles, cover, no filters. */
export const PEOPLE = {
  p1: { src: `${base}/images/people/person-1-480.webp`, width: 480, height: 480 },
  p2: { src: `${base}/images/people/person-2-480.webp`, width: 480, height: 480 },
  p3: { src: `${base}/images/people/person-3-caleb-abisoye-480.webp`, width: 480, height: 480 },
  p4: { src: `${base}/images/people/person-4-480.webp`, width: 480, height: 480 },
} satisfies Record<string, Asset>;

export const AUDIENCE_IMAGES = {
  students: { src: `${base}/images/people/placeholders/audience-students-placeholder.webp`, width: 250, height: 178, placeholder: true },
  developers: { src: `${base}/images/people/placeholders/audience-developers-designers-placeholder.webp`, width: 250, height: 178, placeholder: true },
  creators: { src: `${base}/images/people/placeholders/audience-creators-placeholder.webp`, width: 250, height: 178, placeholder: true },
  earlyCareer: { src: `${base}/images/people/placeholders/audience-early-career-placeholder.webp`, width: 250, height: 178, placeholder: true },
  builders: { src: `${base}/images/people/placeholders/audience-builders-entrepreneurs-placeholder.webp`, width: 250, height: 178, placeholder: true },
} satisfies Record<string, Asset>;

export const IMAGES = {
  techCreators: { src: `${base}/images/communities/tech-creators-avatar-placeholder.webp`, width: 128, height: 128, placeholder: true },
  hultPrizeEvent: { src: `${base}/images/feed/hultprize-uniosun-event.webp`, width: 760, height: 428 },
  lagosSkyline: { src: `${base}/images/opportunities/lagos-tech-meetup-skyline-placeholder.webp`, width: 132, height: 120, placeholder: true },
  systemDesignCover: { src: `${base}/images/resources/system-design-roadmap-cover-placeholder.webp`, width: 148, height: 192, placeholder: true },
} satisfies Record<string, Asset>;
