// lib/site-config.ts

export const SITE_NAME = 'Velki Agent List';
export const SITE_URL = 'https://velki200agent.com';

// Default WhatsApp number (used in header, footer, CTA sections)
export const WHATSAPP_NUMBER = '17602865079';

export function getWhatsAppLink(message?: string): string {
  const number = WHATSAPP_NUMBER;
  const url = `https://wa.me/${number}`;
  if (!message) return url;
  return `${url}?text=${encodeURIComponent(message)}`;
}

// ──────────────────────────────────────────────────────────
// Master Agent WhatsApp numbers
// ──────────────────────────────────────────────────────────
export const MASTER_AGENT_WHATSAPP_NUMBERS = [
  '19125030483',
  '17602865079',
  '601174272363',
] as const;

export function getMasterAgentWhatsAppLink(
  index: number,
  message?: string,
): string {
  const number =
    MASTER_AGENT_WHATSAPP_NUMBERS[
      index % MASTER_AGENT_WHATSAPP_NUMBERS.length
    ];
  const url = `https://wa.me/${number}`;
  if (!message) return url;
  return `${url}?text=${encodeURIComponent(message)}`;
}

// ──────────────────────────────────────────────────────────
// Super Agent WhatsApp numbers
// ──────────────────────────────────────────────────────────
export const SUPER_AGENT_WHATSAPP_NUMBERS = [
  '19125030483',
  '17602865079',
  '601174272363',
] as const;

export function getSuperAgentWhatsAppLink(
  index: number,
  message?: string,
): string {
  const number =
    SUPER_AGENT_WHATSAPP_NUMBERS[
      index % SUPER_AGENT_WHATSAPP_NUMBERS.length
    ];
  const url = `https://wa.me/${number}`;
  if (!message) return url;
  return `${url}?text=${encodeURIComponent(message)}`;
}

// ──────────────────────────────────────────────────────────
// Sub Admin WhatsApp numbers
// ──────────────────────────────────────────────────────────
export const SUB_ADMIN_WHATSAPP_NUMBERS = ['17602865079'] as const;

export function getSubAdminWhatsAppLink(
  index: number,
  message?: string,
): string {
  const number =
    SUB_ADMIN_WHATSAPP_NUMBERS[
      index % SUB_ADMIN_WHATSAPP_NUMBERS.length
    ];
  const url = `https://wa.me/${number}`;
  if (!message) return url;
  return `${url}?text=${encodeURIComponent(message)}`;
}

// ──────────────────────────────────────────────────────────
// Navigation & footer
// ──────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { label: 'মাস্টার এজেন্ট লিস্ট', href: '/master-agent-list' },
  { label: 'সুপার এজেন্ট লিস্ট', href: '/super-agent-list' },
  { label: 'সাব অ্যাডমিন লিস্ট', href: '/sub-admin-list' },
  { label: 'কাস্টমার সার্ভিস', href: '/customer-services' },
  { label: 'ব্লগ', href: '/blog' },
] as const;

export const FOOTER_LINKS = [
  { label: 'হোম', href: '/' },
  { label: 'আমাদের সম্পর্কে', href: '/about' },
  { label: 'যোগাযোগ', href: '/contact' },
  { label: 'প্রাইভেসি পলিসি', href: '/privacy-policy' },
  { label: 'ডিসক্লেইমার', href: '/disclaimer' },
] as const;

export const SITE_COPYRIGHT_YEAR = 2026;
