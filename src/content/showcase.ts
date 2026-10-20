/**
 * Product showcase data. Everything inside the phone is sample content, transcribed from
 * the approved design (Home.dc.html renderVals) and ShowcaseSpec.dc.html.
 */
import type { Tone } from '@/components/ui/Monogram';
import { IMAGES, PEOPLE, type Asset } from './assets';

export type Feature = 'feed' | 'communities' | 'discover' | 'profile';

export const DESTINATIONS: { id: Feature; num: string; name: string; sub: string; desc: string; feats: string[]; hint: string }[] = [
  {
    id: 'feed', num: '01', name: 'Feed', sub: 'Stay in the conversation',
    desc: 'Share updates, ideas, photos and video with your communities. Like, comment and keep up with what the people you follow are building.',
    feats: ['For you, Following and Communities in one feed', 'Every post shows its community or organisation', 'Community updates and events sit in line'],
    hint: 'Try it: like or save the post, switch feeds, scroll.',
  },
  {
    id: 'communities', num: '02', name: 'Communities', sub: 'Find your people',
    desc: 'Join communities for your school, interests, profession and goals. Each one has a single group conversation, as familiar as the chats you already use.',
    feats: ['One group conversation per community', 'Unread messages and mentions at a glance', 'Messages, photos and reactions, nothing to set up'],
    hint: 'Try it: open Tech Creators and send a message.',
  },
  {
    id: 'discover', num: '03', name: 'Discover', sub: "Find what's next",
    desc: 'Events, internships, scholarships, jobs, hackathons and learning resources, gathered in one place and easy to tell apart.',
    feats: ['Events lead with the date', 'Opportunities lead with who and the deadline', 'Save anything to come back to later'],
    hint: 'Try it: switch filters or save a listing.',
  },
  {
    id: 'profile', num: '04', name: 'Profile', sub: 'Make your presence count',
    desc: "Show who you are, what you're interested in, what you've worked on and the communities you're part of.",
    feats: ['Your interests and communities', 'Your posts in one place', 'Everything you saved from Discover'],
    hint: 'Try it: open Saved, then save something in Discover.',
  },
];

/* ---------- Feed ---------- */

export type PostDef = {
  id: string;
  name: string;
  ctx: string;
  time: string;
  text: string;
  avatar: { photo: Asset } | { mono: string; tone: Tone };
  media?: { image: Asset; alt: string };
  likes: number;
  comments: number;
};

export const POSTS: Record<'p1' | 'p2', PostDef> = {
  p1: {
    id: 'p1', name: 'Caleb Abisoye', ctx: 'Brivent Global Innovations', time: '3h',
    text: "Had the opportunity to pitch Kinnoc, Brivent's community and opportunity platform, at HultPrize UNIOSUN. Proud to support platforms empowering young innovators to share ideas, build solutions, and create impact.",
    avatar: { photo: PEOPLE.p3 },
    media: { image: IMAGES.hultPrizeEvent, alt: 'A speaker on stage at HultPrize UNIOSUN' },
    likes: 127, comments: 24,
  },
  p2: {
    id: 'p2', name: 'Esther', ctx: 'Design Hub', time: '6h',
    text: "Sharing the onboarding flow we critiqued on Thursday. Feedback welcome before Friday's review.",
    avatar: { mono: 'E', tone: 'sky' },
    likes: 33, comments: 9,
  },
};

export type UpdateDef = { id: string; name: string; kind: string; time: string; title: string; meta: string; identity: { photo: Asset } | { mono: string; tone: Tone } };

export const UPDATES: Record<'u1' | 'u2', UpdateDef> = {
  u1: { id: 'u1', name: 'UNIOSUN Community', kind: 'Update', time: '5h', title: 'Orientation for new students', meta: 'Fri, 23 Oct · 10:00 AM · Main Auditorium', identity: { mono: 'U', tone: 'navy' } },
  u2: { id: 'u2', name: 'Tech Creators', kind: 'Event', time: '1d', title: 'Lagos Tech Meetup', meta: 'Sat, 24 Oct · 2:00 PM · Victoria Island', identity: { photo: IMAGES.techCreators } },
};

export type FeedTab = 'foryou' | 'following' | 'communities';
export const FEED_TABS: { id: FeedTab; label: string }[] = [
  { id: 'foryou', label: 'For you' },
  { id: 'following', label: 'Following' },
  { id: 'communities', label: 'Communities' },
];
export const FEED_LISTS: Record<FeedTab, string[]> = {
  foryou: ['p1', 'u1', 'p2', 'u2'],
  following: ['p1', 'p2'],
  communities: ['u1', 'u2', 'p2'],
};

/* ---------- Communities ---------- */

export type InboxRow = {
  id: string;
  name: string;
  identity: { photo: Asset } | { mono: string; tone: Tone };
  who?: string;
  msg?: string;
  typer?: string;
  time: string;
  unread: boolean;
  badge?: string;
  mention?: boolean;
};

export const INBOX: InboxRow[] = [
  { id: 'tc', name: 'Tech Creators', identity: { photo: IMAGES.techCreators }, who: 'Esther: ', msg: "I'm in too. I'll handle the UI.", time: '10:15 AM', unread: true, badge: '2' },
  { id: 'u', name: 'UNIOSUN Community', identity: { mono: 'U', tone: 'navy' }, typer: 'Tunde', time: '10:21 AM', unread: true },
  { id: 'dh', name: 'Design Hub', identity: { mono: 'DH', tone: 'sky' }, who: 'Esther: ', msg: "@Caleb here's the onboarding flow", time: '8:45 AM', unread: true, mention: true },
  { id: 'pb', name: 'Product Builders', identity: { mono: 'PB', tone: 'mist' }, who: 'You: ', msg: "Let's pick this up tomorrow.", time: 'Yesterday', unread: false },
  { id: 'ld', name: 'Lagos Devs', identity: { mono: 'LD', tone: 'ink' }, who: 'Femi: ', msg: 'Slides from the meetup are up.', time: 'Sat', unread: false },
  { id: 'cg', name: 'Career Growth', identity: { mono: 'CG', tone: 'action' }, who: 'Ada: ', msg: 'CV review sessions start next week.', time: 'Fri', unread: false },
  { id: 'sf', name: 'Student Founders NG', identity: { mono: 'SF', tone: 'sky' }, who: 'Kemi: ', msg: 'Has anyone pitched to angel investors?', time: 'Thu', unread: false },
];

/* ---------- Discover ---------- */

export type Lead =
  | { type: 'feature' | 'date'; mon: string; day: string }
  | { type: 'org'; mono: string; tone: Tone }
  | { type: 'range'; range: string; mon: string }
  | { type: 'deadline'; day: string; mon: string }
  | { type: 'cover'; image: Asset }
  | { type: 'video' }
  | { type: 'doc' };

export type Listing = { id: string; lead: Lead; kind: string; warn?: string; title: string; meta: string };

export const LISTINGS: Record<string, Listing> = {
  meetup: { id: 'meetup', lead: { type: 'feature', mon: 'SAT · OCT', day: '24' }, kind: 'EVENT · VICTORIA ISLAND', title: 'Lagos Tech Meetup', meta: 'Hosted by Tech Creators · 2:00 PM' },
  workshop: { id: 'workshop', lead: { type: 'date', mon: 'OCT', day: '31' }, kind: 'EVENT · ONLINE', title: 'Product Design Workshop', meta: 'Design Hub · 4:00 PM' },
  campus: { id: 'campus', lead: { type: 'date', mon: 'NOV', day: '9' }, kind: 'EVENT · UNIOSUN', title: 'Campus Tech Week', meta: 'UNIOSUN Community · All week' },
  intern: { id: 'intern', lead: { type: 'org', mono: 'B', tone: 'sky' }, kind: 'INTERNSHIP · REMOTE', title: 'Frontend Developer (Internship)', meta: 'Brivent Global Innovations · Closes 15 Nov' },
  hack: { id: 'hack', lead: { type: 'range', range: '14–16', mon: 'NOV' }, kind: 'HACKATHON · ONLINE', title: 'Fintech Build Weekend', meta: 'Builders Lagos · Teams of 2 to 4' },
  schol: { id: 'schol', lead: { type: 'deadline', day: '30', mon: 'NOV' }, kind: 'SCHOLARSHIP · UNDERGRADUATE', title: 'Women in STEM Scholarship', meta: 'Northbridge Foundation · Closes 30 Nov' },
  job: { id: 'job', lead: { type: 'org', mono: 'LS', tone: 'ink' }, kind: 'JOB · ', warn: 'CLOSES IN 3 DAYS', title: 'Junior Product Designer', meta: 'Lumen Studio · Lagos' },
  roadmap: { id: 'roadmap', lead: { type: 'cover', image: IMAGES.systemDesignCover }, kind: 'GUIDE · 12 MIN READ', title: 'System Design Roadmap', meta: 'by TechWithTobi' },
  uxr: { id: 'uxr', lead: { type: 'video' }, kind: 'VIDEO · 18 MIN', title: 'Intro to UX Research', meta: 'Design Hub' },
  cv: { id: 'cv', lead: { type: 'doc' }, kind: 'GUIDE · 8 MIN READ', title: 'Writing a CV that gets read', meta: 'Career Growth' },
};

export type DiscoverTab = 'all' | 'events' | 'opps' | 'res';
export const DISCOVER_TABS: { id: DiscoverTab; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'events', label: 'Events' },
  { id: 'opps', label: 'Opportunities' },
  { id: 'res', label: 'Resources' },
];
/** Strings starting with "#" are section headings. */
export const DISCOVER_LISTS: Record<DiscoverTab, string[]> = {
  all: ['#This week', 'meetup', 'workshop', '#Opportunities', 'intern', 'hack', 'schol', 'job', '#Resources', 'roadmap', 'uxr'],
  events: ['meetup', 'workshop', 'campus'],
  opps: ['intern', 'hack', 'schol', 'job'],
  res: ['roadmap', 'uxr', 'cv'],
};

/* ---------- Profile ---------- */

export const PROFILE = {
  photo: PEOPLE.p3,
  name: 'Caleb Abisoye',
  handle: '@calebabisoye', // placeholder until Caleb confirms
  headline: 'Founder, Brivent Global Innovations',
  bio: 'Building Kinnoc, a home for communities and opportunities.',
  interests: ['Product design', 'Startups', 'Web development'],
  communities: [
    { name: 'Tech Creators', identity: { photo: IMAGES.techCreators } },
    { name: 'UNIOSUN Community', identity: { mono: 'U', tone: 'navy' } },
    { name: 'Product Builders', identity: { mono: 'PB', tone: 'mist' } },
    { name: 'Design Hub', identity: { mono: 'DH', tone: 'sky' } },
    { name: 'Lagos Devs', identity: { mono: 'LD', tone: 'ink' } },
  ] as { name: string; identity: { photo: Asset } | { mono: string; tone: Tone } }[],
};
