import { SITE_URL } from '@/lib/site-config';
import type { MetadataRoute } from 'next';

const routes = [
  '/',
  '/master-agent-list',
  '/super-agent-list',
  '/sub-admin-list',
  '/customer-services',
  '/blog',
  '/about',
  '/contact',
  '/privacy-policy',
  '/disclaimer',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
