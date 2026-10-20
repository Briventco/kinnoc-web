import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '@ds/styles/tokens.css';
import '@ds/styles/interactions.css';
import './globals.css';
import { SITE } from '@/content/site';

// Fonts ship in the design-system package (SIL OFL 1.1). tokens.css reads these variables.
const display = localFont({
  src: [
    { path: '../../kinnoc-design-system/assets/fonts/bricolage-grotesque/bricolage-grotesque-variable-latin.woff2', weight: '200 800', style: 'normal' },
    { path: '../../kinnoc-design-system/assets/fonts/bricolage-grotesque/bricolage-grotesque-variable-latin-ext.woff2', weight: '200 800', style: 'normal' },
  ],
  variable: '--kn-font-display-face',
  display: 'swap',
});

const body = localFont({
  src: [
    { path: '../../kinnoc-design-system/assets/fonts/figtree/figtree-variable-latin.woff2', weight: '300 900', style: 'normal' },
    { path: '../../kinnoc-design-system/assets/fonts/figtree/figtree-variable-latin-ext.woff2', weight: '300 900', style: 'normal' },
  ],
  variable: '--kn-font-body-face',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: '%s · Kinnoc' },
  description: SITE.description,
  authors: [{ name: SITE.company }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/kinnoc/logos/favicon/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/kinnoc/logos/favicon/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/kinnoc/logos/favicon/apple-touch-icon-180.png',
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    type: 'website',
    locale: 'en_NG',
    siteName: SITE.name,
  },
  twitter: {
    card: 'summary',
    title: SITE.title,
    description: SITE.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
