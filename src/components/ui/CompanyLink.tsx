import { SITE } from '@/content/site';
import styles from './CompanyLink.module.css';

/** The company name, linked to Brivent's website. Inherits the surrounding text colour. */
export function CompanyLink() {
  return (
    <a href={SITE.companyUrl} className={`kw-link kw-under ${styles.link}`}>
      {SITE.company}
    </a>
  );
}
