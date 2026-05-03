import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnaltytics from './GoogleAnaltytics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bryan Temple — Accessibility Specialist & Frontend Developer',
  description:
    'CPACC certified Accessibility Specialist and Frontend Developer. WCAG 2.2 AA. Accessible Shopify. Building the web for everyone.',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700&family=Inclusive+Sans:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <SpeedInsights />
        <Analytics />
        <GoogleAnaltytics />
      </body>
    </html>
  );
}
