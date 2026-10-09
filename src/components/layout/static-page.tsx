import Link from 'next/link';
import type { ReactNode } from 'react';

import SiteHeader from '@/components/layout/site-header';
import { FOOTER_LINKS, SITE_COPYRIGHT_YEAR, SITE_NAME } from '@/lib/site-config';

type StaticPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function StaticPage({ eyebrow, title, description, children }: StaticPageProps) {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="directory-page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">হোম</Link>
              <span aria-hidden="true">/</span>
              <span>{title}</span>
            </nav>

            <p className="section-eyebrow">{eyebrow}</p>

            <h1 className="section-title">{title}</h1>

            <p className="section-description">{description}</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <article className="content-panel static-page-content">{children}</article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <Link href="/" className="footer-brand">
              {SITE_NAME}
            </Link>

            <p className="footer-description">
              প্রকাশিত তথ্যের যথার্থতা ও প্রাসঙ্গিকতা যাচাই করুন।
            </p>
          </div>

          <nav className="footer-links" aria-label="ফুটার নেভিগেশন">
            {FOOTER_LINKS.map(item => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="container footer-bottom">
          © {SITE_COPYRIGHT_YEAR} {SITE_NAME}. সর্বস্বত্ব সংরক্ষিত।
        </div>
      </footer>
    </>
  );
}
