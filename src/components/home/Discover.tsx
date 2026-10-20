import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Monogram } from '@/components/ui/Monogram';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { IMAGES } from '@/content/assets';
import { ROUTES } from '@/content/site';
import styles from './Discover.module.css';

const cover = IMAGES.systemDesignCover;

export function Discover() {
  return (
    <section id="discover" aria-labelledby="disc" className={`kw-dark ${styles.section}`}>
      <div className={`kn-container ${styles.layout}`}>
        <SectionIntro
          tone="ink"
          loose
          eyebrow="Discover"
          titleId="disc"
          title={<>More than conversations. <span className={styles.accent}>Real opportunities.</span></>}
          body="Events, internships, jobs, scholarships, hackathons and learning resources shared by communities and organisers, each shaped so you can tell them apart at a glance."
          bodyMax={460}
        >
          <ul className={styles.leads}>
            <li><span className={styles.leadDate} aria-hidden="true">24</span>Events lead with the date</li>
            <li><Monogram text="B" tone="sky" className={styles.leadOrg} />Jobs and internships lead with who&apos;s hiring and the deadline</li>
            <li><span className={styles.leadRange} aria-hidden="true" />Scholarships and hackathons lead with the dates that matter</li>
            <li><Image src={cover.src} width={cover.width} height={cover.height} alt="" sizes="28px" className={styles.leadCover} />Resources lead with the cover and how long they take</li>
          </ul>
          <Button href={ROUTES.discoverApp} variant="light" size={52} arrow className={styles.cta}>Explore Discover</Button>
        </SectionIntro>

        <div className={styles.board}>
          <p className={styles.boardHead}><b>EXAMPLE LISTINGS</b><span>Shown for illustration, not live opportunities</span></p>
          <div className={styles.tiles}>
            <article className={`${styles.tile} ${styles.dark}`}>
              <div className={styles.eventTop}>
                <span className={styles.stack}>
                  <span className={styles.label}>Sat · Oct</span>
                  <b className={styles.bigDay}>24</b>
                </span>
                <Image src={IMAGES.lagosSkyline.src} width={IMAGES.lagosSkyline.width} height={IMAGES.lagosSkyline.height} alt="" sizes="66px" className={styles.thumb} />
              </div>
              <div className={styles.info}>
                <span className={styles.label}>Event</span>
                <h3 className={styles.tileTitle}>Lagos Tech Meetup</h3>
                <span className={styles.meta}>Victoria Island · hosted by Tech Creators</span>
              </div>
            </article>

            <article className={`${styles.tile} ${styles.light}`}>
              <Monogram text="B" tone="sky" className={styles.orgMono} />
              <div className={styles.info}>
                <span className={styles.label}>Internship · Remote · Closes 15 Nov</span>
                <h3 className={styles.tileTitle}>Frontend Developer (Internship)</h3>
                <span className={styles.meta}>Brivent Global Innovations</span>
              </div>
            </article>

            <article className={`${styles.tile} ${styles.sky}`}>
              <span className={styles.stack}>
                <span className={styles.label}>48 hours · Online</span>
                <b className={styles.range}>14–16 Nov</b>
              </span>
              <div className={styles.info}>
                <span className={styles.label}>Hackathon · Teams of 2–4</span>
                <h3 className={styles.tileTitle}>Fintech Build Weekend</h3>
                <span className={styles.meta}>Builders Lagos</span>
              </div>
            </article>

            <article className={`${styles.tile} ${styles.dark} ${styles.guide}`}>
              <Image src={cover.src} width={cover.width} height={cover.height} alt="" sizes="84px" className={styles.cover} />
              <div className={styles.info}>
                <span className={styles.label}>Guide · 12 min read</span>
                <h3 className={styles.tileTitle}>System Design Roadmap</h3>
                <span className={styles.meta}>by TechWithTobi</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
