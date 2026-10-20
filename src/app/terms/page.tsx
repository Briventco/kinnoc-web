import type { Metadata } from 'next';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';
import { SiteShell } from '@/components/site/SiteShell';
import { TERMS } from '@/content/legal/terms';

export const metadata: Metadata = {
  title: TERMS.title,
  description: TERMS.description,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <SiteShell>
      <LegalPageLayout doc={TERMS} />
    </SiteShell>
  );
}
