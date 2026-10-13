'use client';

import { MessageCircle, UserRound } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import SiteHeader from '@/components/layout/site-header';

import { MASTER_AGENTS } from '@/lib/master-agents';
import {
  FOOTER_LINKS,
  SITE_COPYRIGHT_YEAR,
  SITE_NAME,
  getMasterAgentWhatsAppLink,
} from '@/lib/site-config';

export default function MasterAgentListPage() {
  const [query, setQuery] = useState('');

  const filteredAgents = MASTER_AGENTS.filter(agent => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      agent.name.toLowerCase().includes(q) ||
      agent.code.toLowerCase().includes(q)
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
              <span>মাস্টার এজেন্ট লিস্ট</span>
            </nav>

            {/* <p className="section-eyebrow">DIRECTORY</p> */}
            <h1 className="page-title text-3xl text-bold">মাস্টার এজেন্ট লিস্ট বাংলাদেশ ২০২৬</h1>
          </div>
        </section>

        {/* SEARCH + LIST */}
        <section className="section" id="master-agents-list">
          <div className="container">
            {/* Search toolbar */}
            <div className="list-toolbar">
              {/* <div className="search-input-wrap">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="নাম, কোড অথবা লিংকা দিয়ে খুঁজুন..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="search-input"
                />
              </div> */}

              <div className="results-count">মোট {filteredAgents.length} টি ফলাফল</div>
            </div>

            {/* Agent grid */}
            {filteredAgents.length === 0 ? (
              <div className="empty-state">
                <UserRound size={40} />
                <p>কোনো এজেন্ট পাওয়া যায়নি।</p>
              </div>
            ) : (
              <div className="agent-grid">
                {filteredAgents.map((agent, index) => (
                  <article className="agent-card" key={agent.id}>
                    <div className="agent-avatar">
                      <UserRound size={22} />
                    </div>

                    <span className="agent-code">{agent.code}</span>
                    <h3>{agent.name}</h3>

                    <a
                      href={getMasterAgentWhatsAppLink(index, `আমি ইউজার একাউন্ট খুলতে চাই।`)}
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
