// src/app/sitemap.ts

import { SITE_URL } from '@/lib/site-config';
import type { MetadataRoute } from 'next';

type RouteConfig = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

const routes: RouteConfig[] = [
  // Homepage — highest priority
  { path: '/', changeFrequency: 'daily', priority: 1 },

  // Directory pages — main content, high priority
  { path: '/master-agent-list', changeFrequency: 'daily', priority: 0.9 },
  { path: '/super-agent-list', changeFrequency: 'daily', priority: 0.9 },
  { path: '/sub-admin-list', changeFrequency: 'daily', priority: 0.9 },

  // Customer service & blog — regularly updated
  { path: '/customer-services', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },

  // Info pages — rarely change
  { path: '/about', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.5 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/disclaimer', changeFrequency: 'yearly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Strip trailing slash from SITE_URL to avoid double slashes
  const baseUrl = SITE_URL.replace(/\/$/, '');

  return routes.map(route => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
