'use client';

import { ArrowRight, ArrowUpRight, MessageCircle, Search, UserRound } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

import SiteHeader from '@/components/layout/site-header';
import type { AgentRecord } from '@/data/agents';
import { FOOTER_LINKS, SITE_NAME, getWhatsAppLink } from '@/lib/site-config';

type Props = {
  title: string;
  description: string;
  agents: AgentRecord[];
};

export default function AgentDirectory({ title, description, agents }: Props) {
  const [search, setSearch] = useState('');

  const filteredAgents = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return agents;

    return agents.filter(agent =>
      [agent.name, agent.code, agent.category, agent.area].some(value =>
        value.toLowerCase().includes(query),
      ),
    );
  }, [agents, search]);

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

            <p className="section-eyebrow">DIRECTORY</p>

            <h1 className="section-title">{title}</h1>

            <p className="section-description">{description}</p>
          </div>
        </section>

        <section className="section directory-page-section">
          <div className="container">
            <div className="directory-toolbar">
              <label className="directory-search">
                <Search size={19} aria-hidden="true" />

                <input
                  type="search"
                  placeholder="নাম, কোড অথবা এলাকা দিয়ে খুঁজুন..."
                  value={search}
                  onChange={event => setSearch(event.target.value)}
                  aria-label="ডিরেক্টরিতে খুঁজুন"
                />
              </label>

              <p className="directory-result-count" aria-live="polite">
                মোট {filteredAgents.length}টি ফলাফল
              </p>
            </div>

            <div className="directory-demo-notice">
              এই তালিকার নাম ও বিবরণ ডেমো তথ্য। প্রকাশের আগে প্রকৃত তথ্য, অনুমতি এবং প্রাসঙ্গিকতা
              যাচাই করুন।
            </div>

            {filteredAgents.length > 0 ? (
              <div className="agent-grid">
                {filteredAgents.map(agent => (
                  <article className="agent-card" key={agent.id}>
                    <div className="agent-avatar">
                      <UserRound size={22} />
                    </div>

                    <span className="agent-code">{agent.code}</span>

                    <h2>{agent.name}</h2>

                    <p>
                      ক্যাটাগরি: {agent.category}
                      <br />
                      এলাকা: {agent.area}
                    </p>

                    <p className="agent-updated">{agent.updatedAt}</p>

                    <a
                      href={getWhatsAppLink(`আমি ${agent.code} সম্পর্কে তথ্য জানতে চাই।`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="agent-card-action"
                    >
                      <MessageCircle size={15} />
                      যোগাযোগ করুন
                      <ArrowUpRight size={15} />
                    </a>
                  </article>
                ))}
              </div>
            ) : (
              <div className="directory-empty">
                <Search size={30} />

                <h2>কোনো তথ্য পাওয়া যায়নি</h2>

                <p>অন্য কোনো নাম, কোড অথবা এলাকা দিয়ে আবার খুঁজে দেখুন।</p>

                <button
                  type="button"
                  className="button button-secondary"
                  onClick={() => setSearch('')}
                >
                  সব তথ্য দেখুন
                  <ArrowRight size={16} />
                </button>
              </div>
            )}
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
              ডিরেক্টরির তথ্য প্রকাশের আগে সঠিকতা ও অনুমোদন যাচাই করুন।
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
      </footer>
    </>
  );
}
