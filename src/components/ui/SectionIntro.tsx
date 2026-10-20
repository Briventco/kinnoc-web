import type { ReactNode } from 'react';
import styles from './SectionIntro.module.css';

type SectionIntroProps = {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
  body?: ReactNode;
  /** Max width of the body copy in px (design: 440 to 480). */
  bodyMax?: number;
  tone?: 'paper' | 'ink';
  /** Gap 18 instead of 16 (Discover, Communities). */
  loose?: boolean;
  className?: string;
  children?: ReactNode;
};

export function SectionIntro({ eyebrow, title, titleId, body, bodyMax, tone = 'paper', loose, className, children }: SectionIntroProps) {
  const cls = [styles.intro, loose && styles.loose, tone === 'ink' && styles.dark, className].filter(Boolean).join(' ');
  return (
    <div className={cls}>
      <span className={`kn-eyebrow ${styles.eyebrow}`}>{eyebrow}</span>
      <h2 id={titleId} className="kn-h2">{title}</h2>
      {body && (
        <p className={`kn-body ${styles.body}`} style={bodyMax ? { maxWidth: bodyMax } : undefined}>
          {body}
        </p>
      )}
      {children}
    </div>
  );
}
