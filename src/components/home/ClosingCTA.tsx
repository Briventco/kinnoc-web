import type { ReactNode } from 'react';
import { Button } from '@/components/ui/Button';
import { Monogram } from '@/components/ui/Monogram';
import { PersonPhoto } from '@/components/ui/PersonPhoto';
import { CTA_GRID } from '@/content/home';
import { ROUTES } from '@/content/site';
import styles from './ClosingCTA.module.css';

type ClosingCTAProps = { id?: string; title?: ReactNode; body?: string; href?: string };

export function ClosingCTA({
  id = 'join',
  title = <>Your next community <span className={styles.accent}>starts here.</span></>,
  body = 'Connect with people who share your interests, learn from each other and see what you can build together.',
  href = ROUTES.joinStart,
}: ClosingCTAProps) {
  return (
    <section id={id} aria-labelledby={`${id}-cta`} className={styles.section}>
      <div className={`kn-container ${styles.layout}`}>
        <div className={styles.copy}>
          <h2 id={`${id}-cta`} className={styles.title}>{title}</h2>
          <p className={`kn-lead ${styles.lead}`}>{body}</p>
          <div className={styles.ctas}>
            <Button href={href} arrow fullOnMobile>Join Kinnoc</Button>
          </div>
        </div>
        <div className={styles.grid} aria-hidden="true">
          {CTA_GRID.map((c, i) =>
            c.kind === 'face' ? (
              <PersonPhoto key={i} photo={c.photo} className={styles.cell} style={{ height: 'auto' }} />
            ) : (
              <Monogram key={i} text={c.text} tone={c.tone} className={`${styles.cell} ${styles.mono}`} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

/** Accent span for custom titles, so callers don't need the CSS module. */
export const ctaAccent = styles.accent;
