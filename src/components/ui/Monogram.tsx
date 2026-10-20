import type { CSSProperties } from 'react';
import styles from './Monogram.module.css';

/** Colour pairs used by community and person monograms in the design, as tokens. */
export type Tone = 'navy' | 'ink' | 'sky' | 'mist' | 'action' | 'paper';

type MonogramProps = {
  text: string;
  tone: Tone;
  className?: string;
  style?: CSSProperties;
  /** Accessible name; omit when the name is shown next to it. */
  label?: string;
};

export function Monogram({ text, tone, className, style, label }: MonogramProps) {
  return (
    <span
      className={[styles.mono, styles[tone], className].filter(Boolean).join(' ')}
      style={style}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {text}
    </span>
  );
}
