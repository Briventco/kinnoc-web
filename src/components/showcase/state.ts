import type { DiscoverTab, Feature, FeedTab } from '@/content/showcase';

/** Per-destination demo state; each destination remembers it while the visitor moves around. */
export type Demo = {
  feature: Feature;
  fTab: FeedTab;
  liked: Record<string, boolean>;
  kept: Record<string, boolean>;
  cTab: 'all' | 'unread';
  chatOpen: boolean;
  tcRead: boolean;
  sent: string[];
  draft: string;
  reacted: boolean;
  dTab: DiscoverTab;
  saved: Record<string, boolean>;
  pTab: 'posts' | 'saved';
  note: boolean;
};

export const INITIAL_DEMO: Demo = {
  feature: 'feed',
  fTab: 'foryou',
  liked: { p1: true },
  kept: {},
  cTab: 'all',
  chatOpen: false,
  tcRead: false,
  sent: [],
  draft: '',
  reacted: false,
  dTab: 'all',
  saved: { meetup: true, roadmap: true },
  pTab: 'posts',
  note: false,
};

export type Patch = (patch: Partial<Demo> | ((d: Demo) => Partial<Demo>)) => void;

export type ScreenProps = { demo: Demo; set: Patch };
