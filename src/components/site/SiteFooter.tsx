import Image from 'next/image';
import { LOGO } from '@/content/assets';
import { CompanyLink } from '@/components/ui/CompanyLink';
import { SmartLink } from '@/components/ui/SmartLink';
import { FOOTER_NAV, SITE } from '@/content/site';
import styles from './SiteFooter.module.css';

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`kn-container ${styles.grid}`}>
        <div className={styles.brand}>
          <Image src={LOGO.lockupBlue.src} width={LOGO.lockupBlue.width} height={LOGO.lockupBlue.height} alt="Kinnoc" className={styles.logo} sizes="140px" />
          <p className={styles.blurb}>A home for students, creators and professionals to connect, share ideas and find what&apos;s next.</p>
        </div>
        {FOOTER_NAV.map((group) => (
          <nav key={group.title} aria-label={group.title} className={styles.col}>
            <b className={styles.heading}>{group.title}</b>
            {group.links.map((l) => (
              <SmartLink key={l.label} href={l.href} className={`kw-link kw-under ${styles.link}`}>{l.label}</SmartLink>
            ))}
          </nav>
        ))}
        <div className={styles.bottom}>
          <span>© {SITE.year} Kinnoc. Built by <CompanyLink />.</span>
          <span>{SITE.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
