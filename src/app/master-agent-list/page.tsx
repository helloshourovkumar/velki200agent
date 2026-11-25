'use client';

import { MessageCircle, UserRound } from 'lucide-react';
import Link from 'next/link';

import SiteHeader from '@/components/layout/site-header';

import { MASTER_AGENTS } from '@/lib/master-agents';
import {
  FOOTER_LINKS,
  getMasterAgentWhatsAppLink,
  MASTER_AGENT_WHATSAPP_NUMBERS,
  SITE_COPYRIGHT_YEAR,
  SITE_NAME,
} from '@/lib/site-config';

// SEO FAQ Data for Master Agent Page
const masterFaqs = [
  {
    question: 'What is the Velki Master Agent List?',
    answer: 'The Velki Master Agent List is a directory category containing available information about listings described as master agents. Visitors can review the details provided for each listing and seek independent confirmation where necessary.',
  },
  {
    question: 'Where can I find a Velki Master Agent List in Bangladesh?',
    answer: 'You can explore the master agent category on Velki200Agent. Review the available listing information and check the details before relying on any contact record.',
  },
  {
    question: 'How can I find a Velki Master Agent number?',
    answer: 'Check the contact information displayed with the relevant listing, if available. Confirm that the number belongs to the intended person through an appropriate independent source.',
  },
  {
    question: 'How do I verify a Velki Master Agent?',
    answer: 'Review the available identification details, compare contact information and seek independent confirmation of identity and authorization. A directory listing alone is not proof of authorization.',
  },
  {
    question: 'What is the difference between a Master Agent and a Super Agent?',
    answer: 'They are separate category terms in agent directories. Their specific roles should be confirmed through reliable information rather than inferred from the category names.',
  },
  {
    question: 'Does Velki200Agent officially represent Velki?',
    answer: 'Velki200Agent is presented as an independent information directory. Unless documented authorization is available, the website should not be considered an official Velki representative or endorsed service.',
  },
  {
    question: 'How often is the Master Agent List updated?',
    answer: 'Listing information may change. Check the actual update date displayed on an individual record, where available. Do not assume that every listing has been recently reviewed.',
  },
  {
    question: 'What should I do if I find incorrect agent information?',
    answer: 'Use the website\'s contact channel, if available, to report the listing and provide the relevant details. A correction should be reviewed before the directory record is changed.',
  },
];

export default function MasterAgentListPage() {
  // search বন্ধ থাকায় setQuery ব্যবহার না করে শুধু query রাখা হলো (লিন্ট ওয়ার্নিং ফিক্স)
  const query = '';

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

            <h1 className="page-title text-3xl text-bold">মাস্টার এজেন্ট লিস্ট বাংলাদেশ ২০২৬</h1>
          </div>
        </section>

        {/* SEARCH + LIST */}
        <section className="section" id="master-agents-list">
          <div className="container">
            {/* Search toolbar */}
            <div className="list-toolbar">
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
                {filteredAgents.map((agent, index) => {
                  const phoneNumber = MASTER_AGENT_WHATSAPP_NUMBERS[index % MASTER_AGENT_WHATSAPP_NUMBERS.length];
                  const agentId = phoneNumber.replace(/\D/g, '').slice(-3);

                  return (
                    <article className="agent-card" key={agent.id}>
                      <div className="agent-avatar">
                        <UserRound size={22} />
                      </div>

                      <span className="agent-code">ID: {agentId}</span>
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
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* SEO CONTENT SECTION */}
        <section className="section" id="seo-content">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">INFORMATION & GUIDES</p>
              <h2 className="section-title">Velki Master Agent List Bangladesh – 2026</h2>
            </div>

            <article className="content-panel">
              <h3>Welcome to the Velki Master Agent Directory</h3>
              <p>
                Welcome to Velki200Agent, an online information directory designed to help visitors explore the Velki Master Agent List in Bangladesh. This page brings together master agent category information in an organized format so visitors can understand available listings, review identification details and find relevant contact information where provided.
              </p>
              <p>
                Finding information about a master agent should involve more than simply looking at a name or phone number. Visitors should also consider whether the listing is complete, whether its contact details are consistent and whether the information can be independently confirmed. Our goal is to make agent-related information easier to navigate through clear categories, helpful guides and accessible directory resources.
              </p>

              <h3>What Is a Velki Master Agent?</h3>
              <p>
                A Velki Master Agent is a term used in the agent category structure associated with Velki-related services. The role, responsibilities and authorization of any individual should not be assumed from a directory label alone. Before relying on information about a particular master agent, visitors should check the available identification details and seek confirmation through an appropriate independent source.
              </p>

              <h3>Explore the Velki Master Agent List</h3>
              <p>
                The Velki Master Agent List is a category of agent-related information for visitors looking for master agent listings. Instead of searching through unrelated pages, visitors can use a dedicated directory page to explore available records and review the information provided for each listing. A well-organized directory can make it easier to compare listing details and identify information that may need further confirmation.
              </p>

              <h4>What Information Can You Find?</h4>
              <p>Depending on the information supplied and available for each listing, a master agent directory may include:</p>
              <ul>
                <li>Agent name or listing identifier</li>
                <li>Available contact number</li>
                <li>Agent category or listing type</li>
                <li>Relevant identification details</li>
                <li>Listing status or information notes</li>
                <li>Last updated date, when recorded</li>
              </ul>
              <p><em>Not every listing will contain every detail. Missing information should be treated as unavailable rather than assumed to be correct.</em></p>

              <h3>How to Verify Velki Master Agent Information</h3>
              <p>
                Information verification is an important step when using any online agent directory. A professional-looking profile or a frequently shared phone number does not automatically establish that a listing is genuine or authorized. Use these checks when reviewing a Velki Master Agent listing:
              </p>
              <ul>
                <li><strong>Review Identification Details:</strong> Check the name, listing identifier and other available details. Look for missing information or details that do not match the source.</li>
                <li><strong>Check Contact Information Consistency:</strong> Compare the listed contact details with information from an appropriate independent source. If different sources show different numbers, pause and seek clarification.</li>
                <li><strong>Identify Outdated or Incomplete Listings:</strong> An old listing may contain information that is no longer current. Look for a genuine last updated date.</li>
                <li><strong>Seek Independent Confirmation:</strong> Where possible, confirm the identity and authorization of an agent directly through an appropriate official channel.</li>
              </ul>

              <h3>Master Agent vs Super Agent</h3>
              <p>
                Master Agent and Super Agent are separate category terms used in agent directories. Visitors should review the category label and the information supplied with each listing rather than assuming that the two terms describe identical roles. If you are looking for the other category, visit the Velki Super Agent List page to explore its available information.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">FAQ</p>
              <h2 className="section-title">Frequently Asked Questions About Velki Master Agent List</h2>
            </div>

            <div className="faq-list">
              {masterFaqs.map(faq => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
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
