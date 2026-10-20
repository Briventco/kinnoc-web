import { Icon } from '@ds/components/Icon';
import { Button } from '@/components/ui/Button';
import { SmartLink } from '@/components/ui/SmartLink';
import { LEGAL_STATUS, type LegalDocument, type LegalSection } from '@/content/legal/types';
import { ROUTES, SITE } from '@/content/site';
import s from './Legal.module.css';

function LegalTableOfContents({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className={s.tocList}>
      {sections.map((sec, i) => (
        <li key={sec.id}>
          <a href={`#${sec.id}`} className={`kw-link ${s.tocLink}`}>
            <span className={s.tocNum}>{i + 1}.</span>
            {sec.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

function LegalSectionBlock({ section, index }: { section: LegalSection; index: number }) {
  const headingId = `${section.id}-title`;
  return (
    <section id={section.id} aria-labelledby={headingId} className={s.section}>
      <h2 id={headingId} className={s.sectionTitle}>
        <span className={s.sectionNum}>{index + 1}.</span>
        <span>
          {section.title}
          <a href={`#${section.id}`} className={s.anchor} aria-label={`Link to section ${index + 1}, ${section.title}`}>#</a>
        </span>
      </h2>
      <div className={s.prose}>{section.content}</div>
      {LEGAL_STATUS.showReviewNotes && section.review && (
        <aside className={s.review} aria-label="Review note">
          <b>For review</b>
          {section.review}
        </aside>
      )}
    </section>
  );
}

export function LegalPageLayout({ doc }: { doc: LegalDocument }) {
  return (
    <>
      <header className={`kn-container ${s.header}`}>
        <SmartLink href={ROUTES.home} className={`kw-link ${s.back}`}>
          <Icon name="chevron-left" size={18} strokeWidth={2} />
          Back to Kinnoc
        </SmartLink>
        <span className="kn-eyebrow">Legal</span>
        <h1 className={s.title}>{doc.title}</h1>
        <div className={`kn-lead ${s.intro}`}>{doc.intro}</div>
        <dl className={s.meta}>
          <div><dt>Provided by</dt><dd>{SITE.company}</dd></div>
          <div><dt>Applies to</dt><dd>Kinnoc website and app</dd></div>
          <div><dt>Effective date</dt><dd>{LEGAL_STATUS.effectiveDate ?? 'To be set on publication'}</dd></div>
          <div><dt>Last updated</dt><dd>{LEGAL_STATUS.lastUpdated ?? 'To be set on publication'}</dd></div>
        </dl>
        {LEGAL_STATUS.showReviewNotes && (
          <p className={s.notice} role="note">
            <b>Draft for review.</b> This document has not yet been reviewed by a lawyer or approved by {SITE.company}. Notes marked &ldquo;For review&rdquo; show where facts or legal choices still need confirmation.
          </p>
        )}
      </header>

      <div className={`kn-container ${s.body}`}>
        <details className={s.tocMobile}>
          <summary>Contents</summary>
          <LegalTableOfContents sections={doc.sections} />
        </details>
        <nav aria-label={`${doc.title} contents`} className={s.tocDesktop}>
          <p className={s.tocHeading}>Contents</p>
          <LegalTableOfContents sections={doc.sections} />
        </nav>

        <article className={s.doc} aria-label={doc.title}>
          {doc.sections.map((sec, i) => <LegalSectionBlock key={sec.id} section={sec} index={i} />)}
          <div className={s.end}>
            <Button href={ROUTES.home} variant="quiet" size={48}>Back to Kinnoc</Button>
            <Button href={doc.related.href} variant="quiet" size={48} arrow>{doc.related.label}</Button>
          </div>
        </article>
      </div>
    </>
  );
}
