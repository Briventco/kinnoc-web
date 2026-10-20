import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { SiteShell } from '@/components/site/SiteShell';
import { PRIVACY } from '@/content/legal/privacy';

export const metadata: Metadata = {
  title: PRIVACY.title,
  description: PRIVACY.description,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <SiteShell>
      <LegalPageLayout doc={PRIVACY} />
    </SiteShell>
  );
}
