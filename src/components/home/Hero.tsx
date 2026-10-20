import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { CompanyLink } from '@/components/ui/CompanyLink';
import { LOGO } from '@/content/assets';
import { ROUTES, SITE } from '@/content/site';
import { HeroMosaic } from './HeroMosaic';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className={`kn-container ${styles.hero}`}>
      <div className={styles.head}>
        <span className="kn-eyebrow kw-rise">Communities · Conversations · Opportunities</span>
        <h1 id="hero-title" className={`kw-rise kw-d1 ${styles.title}`}>
          <span>Find your people.</span>
          <span>Join the conversation.</span>
          <span className={styles.accent}>Discover what&apos;s next.</span>
        </h1>
      </div>

      <div className={styles.copy}>
        <p className={`kn-lead kw-rise kw-d2 ${styles.lead}`}>
          A home for students, creators and professionals to connect, share ideas, find opportunities and grow together.
        </p>
        <div className={`kw-rise kw-d3 ${styles.ctas}`}>
          <Button href={ROUTES.join} arrow fullOnMobile>Join Kinnoc</Button>
          <Button href={ROUTES.communities} variant="quiet" fullOnMobile>Explore communities</Button>
        </div>
        <span className={`kw-rise kw-d4 ${styles.note}`}>
          <Image src={LOGO.symbolBlue.src} width={LOGO.symbolBlue.width} height={LOGO.symbolBlue.height} alt="" sizes="28px" className={styles.symbol} />
          <span>Built by <CompanyLink /></span>
        </span>
      </div>

      <HeroMosaic />
    </section>
  );
}
