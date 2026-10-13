// lib/schema.ts

import { SITE_NAME, SITE_URL } from './site-config';

// ──────────────────────────────────────────────────────────
// 1. Organization Schema
// ──────────────────────────────────────────────────────────
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Velki Agent List',
    alternateName: 'Velki Agent List | এজেন্ট লিস্ট ও কাস্টমার সার্ভিস',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description:
      'মাস্টার এজেন্ট, সুপার এজেন্ট, সাব অ্যাডমিন লিস্ট এবং কাস্টমার সার্ভিস সম্পর্কিত তথ্য ও প্রয়োজনীয় গাইড।',
    founder: {
      '@type': 'Person',
      name: 'RAMIM MALIK',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Bengali', 'English'],
    },
    sameAs: [
      // ভবিষ্যতে সোশ্যাল লিংক যোগ করুন
      // 'https://facebook.com/velki200agent',
      // 'https://t.me/velki200agent',
    ],
  };
}

// ──────────────────────────────────────────────────────────
// 2. WebSite Schema (with SearchAction)
// ──────────────────────────────────────────────────────────
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'bn-BD',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
  };
}

// ──────────────────────────────────────────────────────────
// 3. BreadcrumbList Schema
// ──────────────────────────────────────────────────────────
export function getBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ──────────────────────────────────────────────────────────
// 4. FAQPage Schema
// ──────────────────────────────────────────────────────────
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// ──────────────────────────────────────────────────────────
// 5. ItemList Schema (for agent lists)
// ──────────────────────────────────────────────────────────
export function getAgentListSchema(
  agents: { id: number; name: string; code: string }[],
  listName: string,
  pageUrl: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: listName,
    url: pageUrl,
    numberOfItems: agents.length,
    itemListElement: agents.map((agent, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: agent.name,
        identifier: agent.code,
        jobTitle: listName,
      },
    })),
  };
}

// ──────────────────────────────────────────────────────────
// 6. ContactPage Schema
// ──────────────────────────────────────────────────────────
export function getContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'যোগাযোগ',
    url: `${SITE_URL}/contact`,
    description: 'Velki Agent List এর সাথে যোগাযোগ করুন।',
    mainEntity: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

// ──────────────────────────────────────────────────────────
// 7. WebPage Schema (generic — for any page)
// ──────────────────────────────────────────────────────────
export function getWebPageSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    inLanguage: 'bn-BD',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
