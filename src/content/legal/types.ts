import type { ReactNode } from 'react';

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
  /** What must be confirmed by Brivent or legal review before this section is final. */
  review?: string;
};

export type LegalDocument = {
  title: string;
  description: string;
  intro: ReactNode;
  sections: LegalSection[];
  related: { label: string; href: string };
};

/**
 * Publication status shared by the Privacy Policy and Terms of Service.
 * Both are drafts that have not been legally reviewed. Set the dates and turn the review notes
 * off only once Brivent and its legal adviser have approved the final text.
 */
export const LEGAL_STATUS = {
  showReviewNotes: true,
  effectiveDate: undefined as string | undefined,
  lastUpdated: undefined as string | undefined,
};
