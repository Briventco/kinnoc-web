import Image from 'next/image';
import { Monogram } from '@/components/ui/Monogram';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { AUDIENCES, type AudienceItem } from '@/content/home';
import styles from './Audience.module.css';

/** Audience rows: photo, title, sentence and, optionally, an example community chip. */
export function AudienceRows({ items, showCommunity = true, footnote }: { items: AudienceItem[]; showCommunity?: boolean; footnote?: string }) {
  return (
    <div>
      <ul className={styles.list}>
        {items.map((a) => {
          const chip = (cls: string) =>
            showCommunity && (
              <span className={`${styles.chip} ${cls}`}>
                <Monogram text={a.community.mono} tone={a.community.tone} className={styles.mono} />
                {a.community.name}
              </span>
            );
          return (
            <li key={a.title} className={`kw-row ${styles.row}`}>
              <Image src={a.image.src} width={a.image.width} height={a.image.height} alt={a.alt} sizes="128px" className={styles.image} />
              <div className={styles.text}>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.sentence}>{a.text}</p>
                {chip(styles.chipInline)}
              </div>
              {chip(styles.chipSide)}
            </li>
          );
        })}
      </ul>
      {footnote && <p className={styles.footnote}>{footnote}</p>}
    </div>
  );
}

export function Audience() {
  return (
    <section aria-labelledby="who" className={styles.section}>
      <div className={`kn-container ${styles.layout}`}>
        <SectionIntro
          eyebrow="Who it's for"
          titleId="who"
          title="A place for every kind of builder."
          body="Whether you're finding your campus community, sharing work in progress or looking for your next opportunity, Kinnoc puts the right people and conversations within reach."
          bodyMax={440}
        />
        <AudienceRows items={AUDIENCES} footnote="Community names are examples of what you could join." />
      </div>
    </section>
  );
}
