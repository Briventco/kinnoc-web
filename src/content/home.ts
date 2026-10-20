/**
 * Homepage content. Values are transcribed from the approved design
 * (kinnoc-design-system/references/design-source/Home.dc.html, renderVals()).
 * Community names, listings and messages are illustrative samples.
 */
import type { Tone } from '@/components/ui/Monogram';
import { AUDIENCE_IMAGES, IMAGES, PEOPLE, type Asset } from './assets';

/* ---------- Hero mosaic ---------- */

/** [row, column, rowSpan, colSpan] in the mosaic grid. */
type Area = [number, number, number?, number?];

export type MosaicTile =
  | { kind: 'face'; area: Area; photo: Asset }
  | { kind: 'photo'; area: Area; photo: Asset }
  | { kind: 'mono'; area: Area; text: string; tone: Tone }
  | { kind: 'chat' | 'opp' | 'event'; area: Area };

/** Desktop and tablet: 5 columns × 4 rows. Row 1, column 3 is intentionally empty. */
export const MOSAIC_WIDE: MosaicTile[] = [
  { kind: 'face', area: [1, 1], photo: PEOPLE.p2 },
  { kind: 'mono', area: [1, 2], text: 'U', tone: 'navy' },
  { kind: 'face', area: [1, 4], photo: PEOPLE.p4 },
  { kind: 'photo', area: [1, 5], photo: IMAGES.techCreators },
  { kind: 'chat', area: [2, 1, 1, 3] },
  { kind: 'mono', area: [2, 4], text: 'LD', tone: 'ink' },
  { kind: 'mono', area: [2, 5], text: 'DH', tone: 'sky' },
  { kind: 'mono', area: [3, 1], text: 'CG', tone: 'ink' },
  { kind: 'face', area: [3, 2], photo: PEOPLE.p1 },
  { kind: 'opp', area: [3, 3, 1, 3] },
  { kind: 'event', area: [4, 1, 1, 2] },
  { kind: 'mono', area: [4, 3], text: 'SF', tone: 'action' },
  { kind: 'mono', area: [4, 4], text: 'PB', tone: 'mist' },
  { kind: 'face', area: [4, 5], photo: PEOPLE.p3 },
];

/** Mobile: 4 columns × 5 rows. */
export const MOSAIC_NARROW: MosaicTile[] = [
  { kind: 'face', area: [1, 1], photo: PEOPLE.p2 },
  { kind: 'mono', area: [1, 2], text: 'U', tone: 'navy' },
  { kind: 'face', area: [1, 3], photo: PEOPLE.p4 },
  { kind: 'photo', area: [1, 4], photo: IMAGES.techCreators },
  { kind: 'chat', area: [2, 1, 1, 4] },
  { kind: 'face', area: [3, 1], photo: PEOPLE.p1 },
  { kind: 'mono', area: [3, 2], text: 'DH', tone: 'sky' },
  { kind: 'face', area: [3, 3], photo: PEOPLE.p3 },
  { kind: 'mono', area: [3, 4], text: 'CG', tone: 'ink' },
  { kind: 'opp', area: [4, 1, 1, 4] },
  { kind: 'event', area: [5, 1, 1, 2] },
  { kind: 'mono', area: [5, 3], text: 'SF', tone: 'action' },
  { kind: 'mono', area: [5, 4], text: 'PB', tone: 'mist' },
];

/* ---------- Who it's for ---------- */

export type AudienceItem = { title: string; text: string; image: Asset; alt: string; community: { mono: string; name: string; tone: Tone } };

export const AUDIENCES: AudienceItem[] = [
  { title: 'Students', text: 'Find your campus, your department and the people in your course.', image: AUDIENCE_IMAGES.students, alt: 'A student holding notebooks outdoors', community: { mono: 'U', name: 'UNIOSUN Community', tone: 'navy' } },
  { title: 'Developers and designers', text: 'Share work in progress, get feedback and build with others.', image: AUDIENCE_IMAGES.developers, alt: 'A developer with headphones', community: { mono: 'DH', name: 'Design Hub', tone: 'sky' } },
  { title: 'Creators', text: 'Grow alongside people who make things too, and learn from their process.', image: AUDIENCE_IMAGES.creators, alt: 'A creator holding a camera', community: { mono: 'CC', name: 'Creators Circle', tone: 'mist' } },
  { title: 'Early-career professionals', text: 'Stay close to roles, mentors and events in your field.', image: AUDIENCE_IMAGES.earlyCareer, alt: 'A young professional at a desk', community: { mono: 'CG', name: 'Career Growth', tone: 'ink' } },
  { title: 'Builders and entrepreneurs', text: 'Meet co-founders, early users and people who have done it before.', image: AUDIENCE_IMAGES.builders, alt: 'An entrepreneur smiling in a workspace', community: { mono: 'SF', name: 'Student Founders NG', tone: 'action' } },
];

/* ---------- Communities section ---------- */

export const COMMUNITY_KINDS: { kind: string; mono: string; name: string; tone: Tone }[] = [
  { kind: 'School', mono: 'U', name: 'UNIOSUN Community', tone: 'navy' },
  { kind: 'Interest', mono: 'DH', name: 'Design Hub', tone: 'sky' },
  { kind: 'Career', mono: 'LD', name: 'Lagos Devs', tone: 'ink' },
  { kind: 'Goal', mono: 'SF', name: 'Student Founders NG', tone: 'mist' },
];

/* ---------- Closing CTA identity grid ---------- */

export const CTA_GRID: ({ kind: 'face'; photo: Asset } | { kind: 'mono'; text: string; tone: Tone })[] = [
  { kind: 'face', photo: PEOPLE.p4 },
  { kind: 'mono', text: 'U', tone: 'navy' },
  { kind: 'face', photo: PEOPLE.p1 },
  { kind: 'mono', text: 'DH', tone: 'paper' },
  { kind: 'face', photo: PEOPLE.p2 },
  { kind: 'mono', text: 'CG', tone: 'action' },
];
