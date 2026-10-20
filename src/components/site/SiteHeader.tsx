'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Icon } from '@ds/components/Icon';
import { Button } from '@/components/ui/Button';
import { SmartLink } from '@/components/ui/SmartLink';
import { LOGO } from '@/content/assets';
import { NAV_LINKS, ROUTES } from '@/content/site';
import styles from './SiteHeader.module.css';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Close the panel on Escape and when the viewport grows to the desktop layout.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const mq = window.matchMedia('(min-width: 1024px)');
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onMq);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onMq);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`kn-container ${styles.bar}`}>
        <SmartLink href={ROUTES.home} aria-label="Kinnoc home" className={styles.logoLink}>
          <Image src={LOGO.lockupBlue.src} width={LOGO.lockupBlue.width} height={LOGO.lockupBlue.height} alt="Kinnoc" priority className={styles.logo} />
        </SmartLink>

        <nav aria-label="Main" className={styles.links}>
          {NAV_LINKS.map((l) => (
            <SmartLink key={l.href} href={l.href} className={`kw-link ${styles.navLink}`}>{l.label}</SmartLink>
          ))}
        </nav>
        <a href={ROUTES.signIn} className={`kw-link ${styles.navLink} ${styles.signIn}`}>Sign in</a>
        <Button href={ROUTES.join} size={44} className={styles.joinWide}>Join Kinnoc</Button>

        <span className={styles.spacer} />
        <Button href={ROUTES.join} size={40} className={styles.joinCompact}>Join Kinnoc</Button>
        <button
          type="button"
          className={styles.menuButton}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="kn-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={24} strokeWidth={1.9} />
        </button>
      </div>

      <nav id="kn-menu" aria-label="Main" className={`kw-swap ${styles.panel}`} hidden={!open}>
        {NAV_LINKS.map((l) => (
          <SmartLink key={l.href} href={l.href} onClick={close} className={styles.panelLink}>{l.label}</SmartLink>
        ))}
        <Button href={ROUTES.signIn} variant="quiet" size={48} onClick={close} className={styles.panelSignIn}>Sign in</Button>
      </nav>
    </header>
  );
}
