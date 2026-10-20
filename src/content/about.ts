/**
 * About page copy, Kinnoc first and Brivent second. This is proposed website copy: it makes no
 * claims about research, user numbers, outcomes or features beyond the product shown on the homepage.
 */
import type { IconName } from '@ds/components/Icon';
import { AUDIENCES, type AudienceItem } from './home';

export const IN_ONE_PLACE = [
  'Discover communities for your school, interests and goals',
  'Take part in conversations with people who get it',
  'Share ideas and work in progress',
  'Find events, opportunities and resources that fit where you are heading',
];

export const VALUES: { icon: IconName; title: string; text: string }[] = [
  { icon: 'profile', title: 'Connection', text: 'Finding people who share your interests and ambitions, whether they sit in the same lecture hall or work in the same field.' },
  { icon: 'communities', title: 'Community', text: 'Spaces where you can take part, not just watch: ask questions, swap ideas and learn from the people around you.' },
  { icon: 'discover', title: 'Discovery', text: 'Coming across the events, resources and opportunities that could help you take your next step, shared by people who have been there.' },
  { icon: 'arrow-up', title: 'Growth', text: 'Learning from others, adding your own perspective, and getting better alongside a community that is growing too.' },
];

const pick = (title: string) => AUDIENCES.find((a) => a.title === title)!;

/** Same approved imagery as the homepage audience rows, with About-page wording. */
export const PEOPLE_FOR: AudienceItem[] = [
  { ...pick('Students'), text: 'Looking to connect with classmates and peers, learn from each other and discover opportunities beyond the classroom.' },
  { ...pick('Creators'), text: 'Looking to exchange ideas, share what they are making and find the communities that get their work.' },
  { ...pick('Early-career professionals'), title: 'Professionals', text: 'Looking to connect with others in their field and discover relevant resources, events and opportunities.' },
];

export const BIGGER_PICTURE = [
  { title: 'New perspectives', text: 'A meaningful connection can introduce you to ways of thinking you would not have found on your own.' },
  { title: 'Learning together', text: 'Communities are where people learn from one another: by asking, answering and sharing what worked.' },
  { title: 'New possibilities', text: 'The right event, role or resource, found at the right time, can open a door you did not know was there.' },
];
