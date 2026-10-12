'use client';

import { MessageCircle, UserRound } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import SiteHeader from '@/components/layout/site-header';

import {
  FOOTER_LINKS,
  SITE_COPYRIGHT_YEAR,
  SITE_NAME,
  getSubAdminWhatsAppLink,
} from '@/lib/site-config';
import { SUB_ADMINS } from '@/lib/sub-admins';

export default function SubAdminListPage() {
  const [query] = useState('');

  const filteredAdmins = SUB_ADMINS.filter(admin => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      admin.name.toLowerCase().includes(q) ||
      admin.code.toLowerCase().includes(q)
    );
  });

  return (
    <>
      <SiteHeader />

      <main>
        {/* PAGE HERO / BREADCRUMB */}
        <section className="page-hero">
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">হোম</Link>
              <span>/</span>
              <span>সাব অ্যাডমিন লিস্ট</span>
            </nav>

            <h1 className="page-title text-3xl">সাব অ্যাডমিন লিস্ট বাংলাদেশ ২০২৬</h1>
          </div>
        </section>

        {/* AGENT GRID */}
        <section className="section" id="sub-admins-list">
          <div className="container">
            {filteredAdmins.length === 0 ? (
              <div className="empty-state">
                <UserRound size={40} />
                <p>কোনো সাব অ্যাডমিন পাওয়া যায়নি।</p>
              </div>
            ) : (
              <div className="agent-grid">
                {filteredAdmins.map((admin, index) => (
                  <article className="agent-card" key={admin.id}>
                    <div className="agent-avatar">
                      <UserRound size={22} />
                    </div>

                    <span className="agent-code">{admin.code}</span>
                    <h3>{admin.name}</h3>

                    <a
                      href={getSubAdminWhatsAppLink(
                        index,
                        `আমি ${admin.code} সম্পর্কে তথ্য জানতে চাই।`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="agent-card-action"
                    >
                      <MessageCircle size={15} />
                      যোগাযোগ করুন
                    </a>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <Link href="/" className="footer-brand">
              {SITE_NAME}
            </Link>
            <p className="footer-description">
              ডিরেক্টরির তথ্য প্রকাশের আগে সঠিকতা ও অনুমোদন যাচাই করুন।
            </p>
          </div>

          <nav className="footer-links" aria-label="ফুটার নেভিগেশন">
            {FOOTER_LINKS.map(item => (
              <Link key={item.href} href={item.href}>
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
