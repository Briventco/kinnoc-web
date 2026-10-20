import type { ReactNode, MouseEventHandler } from 'react';
import { Icon } from '@ds/components/Icon';
import { SmartLink } from './SmartLink';
import styles from './Button.module.css';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'quiet' | 'light';
  size?: 56 | 52 | 48 | 44 | 40;
  arrow?: boolean;
  fullOnMobile?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

/** Link styled as a button. Every CTA on the site navigates, so it is always a link. */
export function Button({ href, children, variant = 'primary', size = 56, arrow, fullOnMobile, className, onClick }: ButtonProps) {
  const cls = [
    styles.button,
    styles[variant],
    styles[`s${size}`],
    `kw-${variant}`,
    fullOnMobile && styles.fullOnMobile,
    className,
  ]
    .filter(Boolean)
    .join(' ');
  return (
    <SmartLink className={cls} href={href} onClick={onClick}>
      {children}
      {arrow && <Icon name="arrow-right" size={18} strokeWidth={2.2} />}
    </SmartLink>
  );
}
