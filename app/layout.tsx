import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnaltytics from './GoogleAnaltytics';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://bryanonyen.vercel.app'),
  title: 'Bryan Temple – Accessibility Specialist & Frontend Developer',
  description:
    'CPACC certified Accessibility Specialist and Frontend Developer. WCAG 2.2 AA. Accessible Shopify themes and components. Based in Nigeria, working globally. Building for the 1 in 5.',
  keywords: [
    'accessibility specialist',
    'WCAG 2.2',
    'CPACC certified',
    'Shopify accessibility',
    'frontend developer',
    'screen reader',
    'inclusive design',
    'axe DevTools',
    'PDF/UA',
    'ARIA',
  ],
  authors: [{ name: 'Bryan Temple Onyenghan' }],
  openGraph: {
    title: 'Bryan Temple – Accessibility Specialist & Frontend Developer',
    description:
      'CPACC certified. WCAG 2.2 AA. Accessible Shopify themes. Building for the 1 in 5 people your site currently locks out.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary',
    title: 'Bryan Temple – Accessibility Specialist',
    description: 'CPACC certified. WCAG 2.2 AA. Accessible Shopify builds.',
  },
  icons: { icon: '/Braylogo.ico', shortcut: '/Braylogo.ico', apple: '/Braylogo.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <head>
        <link rel="preload" href="/bryantemple.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inclusive+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <Toaster />
        <SpeedInsights />
        <Analytics />
        <GoogleAnaltytics />
      </body>
    </html>
  );
}
