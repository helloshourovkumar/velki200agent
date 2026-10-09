export const SITE_NAME = 'velki200agent.com';

export const SITE_URL = 'https://velki200agent.com';

// Replace with the actual WhatsApp number before launch.
// Use country code and digits only. Do not include "+" or spaces.
export const WHATSAPP_NUMBER = '8801XXXXXXXXX';

export function getWhatsAppLink(message?: string): string {
  const number = WHATSAPP_NUMBER;

  const url = `https://wa.me/${number}`;

  if (!message) {
    return url;
  }

  return `${url}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  {
    label: 'মাস্টার এজেন্ট লিস্ট',
    href: '/master-agent-list',
  },
  {
    label: 'সুপার এজেন্ট লিস্ট',
    href: '/super-agent-list',
  },
  {
    label: 'সাব অ্যাডমিন লিস্ট',
    href: '/sub-admin-list',
  },
  {
    label: 'কাস্টমার সার্ভিস',
    href: '/customer-services',
  },
  {
    label: 'ব্লগ',
    href: '/blog',
  },
] as const;

export const FOOTER_LINKS = [
  { label: 'হোম', href: '/' },
  { label: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'যোগাযোগ', href: '/contact' },
  { label: 'প্রাইভেসি পলিসি', href: '/privacy-policy' },
  { label: 'ডিসক্লেইমার', href: '/disclaimer' },
] as const;

export const SITE_COPYRIGHT_YEAR = 2026;
