import type { Metadata } from 'next';
import { SiteShell } from '@/components/site/SiteShell';
import {
  AboutClosing,
  AboutHero,
  BiggerPicture,
  BuiltByBrivent,
  KinnocExperience,
  WhatKinnocStandsFor,
  WhoKinnocIsFor,
  WhyKinnoc,
} from '@/components/about/AboutSections';

export const metadata: Metadata = {
  title: { absolute: 'About Kinnoc' },
  description:
    "Kinnoc is a home for students, creators and professionals to connect with people who share their interests, exchange ideas and discover what's next. Built by Brivent Global Innovations Limited.",
  alternates: { canonical: '/about' },
};

/** Kinnoc's purpose → the people it serves → the experience → the possibilities → Brivent. */
export default function AboutPage() {
  return (
    <SiteShell>
      <AboutHero />
      <WhyKinnoc />
      <WhatKinnocStandsFor />
      <WhoKinnocIsFor />
      <KinnocExperience />
      <BiggerPicture />
      <BuiltByBrivent />
      <AboutClosing />
    </SiteShell>
  );
}
