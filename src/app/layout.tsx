import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import LoadingScreen from '@/components/ui/loading-screen';
import ScrollToTop from '@/components/ui/scroll-to-top';

import { SITE_URL } from '@/lib/site-config';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Velki Agent List | এজেন্ট লিস্ট ও কাস্টমার সার্ভিস',
    template: '%s | Velki Agent List',
  },

  description:
    'মাস্টার এজেন্ট, সুপার এজেন্ট, সাব অ্যাডমিন লিস্ট এবং কাস্টমার সার্ভিস সম্পর্কিত তথ্য ও প্রয়োজনীয় গাইড।',

  applicationName: 'Velki Agent List',

  authors: [{ name: 'RAMIM MALIK', url: SITE_URL }],

  creator: 'RAMIM MALIK',
  publisher: 'Velki Agent List',

  // ✅ Canonical যোগ করা হলো
  alternates: {
    canonical: SITE_URL,
  },

  // ✅ Favicon ও অ্যাপ আইকন
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // ✅ কিছু প্রাসঙ্গিক কীওয়ার্ড
  keywords: [
    'এজেন্ট লিস্ট',
    'মাস্টার এজেন্ট',
    'সুপার এজেন্ট',
    'সাব অ্যাডমিন',
    'কাস্টমার সার্ভিস',
    'বাংলাদেশ এজেন্ট',
    'velki agent',
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    siteName: 'Velki Agent List',
    title: 'Velki Agent List | এজেন্ট লিস্ট ও কাস্টমার সার্ভিস',
    description: 'এজেন্ট ডিরেক্টরি, প্রয়োজনীয় তথ্য এবং কাস্টমার সার্ভিস।',
    url: SITE_URL,
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Velki Agent List | এজেন্ট লিস্ট ও কাস্টমার সার্ভিস',
    description: 'এজেন্ট ডিরেক্টরি, প্রয়োজনীয় তথ্য এবং কাস্টমার সার্ভিস।',
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
      <body suppressHydrationWarning>
        <LoadingScreen />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
