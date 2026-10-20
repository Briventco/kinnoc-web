import Image from 'next/image';
import { Monogram } from '@/components/ui/Monogram';
import { PersonPhoto } from '@/components/ui/PersonPhoto';
import { PEOPLE } from '@/content/assets';
import { MOSAIC_NARROW, MOSAIC_WIDE, type MosaicTile } from '@/content/home';
import { WHO } from '@/content/site';
import styles from './HeroMosaic.module.css';

function Tile({ tile, index }: { tile: MosaicTile; index: number }) {
  const [row, col, rowSpan = 1, colSpan = 1] = tile.area;
  const style = {
    gridArea: `${row} / ${col} / span ${rowSpan} / span ${colSpan}`,
    animationDelay: `${(0.12 + index * 0.04).toFixed(2)}s`,
  };

  let body: React.ReactNode = null;
  switch (tile.kind) {
    case 'face':
      body = <PersonPhoto photo={tile.photo} className={styles.face} priority />;
      break;
    case 'photo':
      body = <Image src={tile.photo.src} width={tile.photo.width} height={tile.photo.height} alt="" sizes="116px" className={styles.photo} />;
      break;
    case 'mono':
      body = <Monogram text={tile.text} tone={tile.tone} className={styles.mono} />;
      break;
    case 'chat':
      body = (
        <div className={`${styles.snippet} ${styles.chat}`}>
          <PersonPhoto photo={PEOPLE.p3} size={36} />
          <span className={styles.snippetText}>
            <span className={styles.chatMeta}><b>{WHO.p3}</b> in Tech Creators</span>
            <span className={styles.chatText}>Who&apos;s going to the hackathon this weekend?</span>
          </span>
        </div>
      );
      break;
    case 'opp':
      body = (
        <div className={`${styles.snippet} ${styles.opp}`}>
          <Monogram text="B" tone="sky" className={styles.oppMono} />
          <span className={styles.snippetText}>
            <span className={styles.kind}>INTERNSHIP · REMOTE</span>
            <span className={styles.oppTitle}>Frontend Developer (Internship)</span>
          </span>
        </div>
      );
      break;
    case 'event':
      body = (
        <div className={`${styles.snippet} ${styles.event}`}>
          <span className={styles.date}>
            <span className={styles.month}>OCT</span>
            <span className={styles.day}>24</span>
          </span>
          <span className={styles.eventTitle}>Lagos Tech Meetup</span>
        </div>
      );
      break;
  }

  return (
    <div className={`kw-tile ${styles.tile}`} style={style} aria-hidden="true">
      {body}
    </div>
  );
}

/** Decorative identity mosaic: one labelled image for assistive tech, tiles hidden. */
export function HeroMosaic() {
  return (
    <div className={styles.wrap} role="img" aria-label="A preview of people, communities and opportunities on Kinnoc">
      <div className={`${styles.grid} ${styles.wide}`}>
        {MOSAIC_WIDE.map((t, i) => <Tile key={i} tile={t} index={i} />)}
      </div>
      <div className={`${styles.grid} ${styles.narrow}`}>
        {MOSAIC_NARROW.map((t, i) => <Tile key={i} tile={t} index={i} />)}
      </div>
    </div>
  );
}
