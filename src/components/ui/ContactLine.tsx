import { CONTACT } from '@/content/site';
import styles from './ContactLine.module.css';

/** Shows a confirmed contact address, or an honest "to be confirmed" line when none has been supplied. */
export function ContactLine({ kind, className }: { kind: keyof typeof CONTACT; className?: string }) {
  const email = CONTACT[kind] ?? CONTACT.general;
  if (email) {
    return <a href={`mailto:${email}`} className={`kw-link kw-under ${styles.email} ${className ?? ''}`}>{email}</a>;
  }
  return <span className={`${styles.pending} ${className ?? ''}`}>Contact details to be confirmed</span>;
}
