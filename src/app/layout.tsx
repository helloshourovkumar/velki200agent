import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import LoadingScreen from '@/components/ui/loading-screen';
import ScrollToTop from '@/components/ui/scroll-to-top';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://velki200agent.com'),

  title: {
    default: 'Velki200 Agent | এজেন্ট লিস্ট ও কাস্টমার সার্ভিস',
    template: '%s | Velki200 Agent',
  },

  description:
    'মাস্টার এজেন্ট, সুপার এজেন্ট, সাব অ্যাডমিন লিস্ট এবং কাস্টমার সার্ভিস সম্পর্কিত তথ্য ও প্রয়োজনীয় গাইড।',

  applicationName: 'velki200agent.com',

  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    siteName: 'velki200agent.com',
    title: 'Velki200 Agent',
    description: 'এজেন্ট ডিরেক্টরি, প্রয়োজনীয় তথ্য এবং কাস্টমার সার্ভিস।',
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#081321',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="bn">
      <body>
        <LoadingScreen />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
