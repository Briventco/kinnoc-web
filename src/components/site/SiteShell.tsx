import type { ReactNode } from 'react';
import { SiteFooter } from './SiteFooter';
import { SiteHeader } from './SiteHeader';

/** Page frame shared by every route: skip link, sticky header, main, footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="kw">
      <a href="#main" className="kn-skip">Skip to content</a>
      <SiteHeader />
      <main id="main">{children}</main>
      <SiteFooter />
    </div>
  );
}
