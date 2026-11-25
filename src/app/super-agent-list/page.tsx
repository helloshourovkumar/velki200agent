'use client';

import { MessageCircle, UserRound } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import SiteHeader from '@/components/layout/site-header';

import {
  FOOTER_LINKS,
  getSuperAgentWhatsAppLink,
  SITE_COPYRIGHT_YEAR,
  SITE_NAME,
  SUPER_AGENT_WHATSAPP_NUMBERS,
} from '@/lib/site-config';
import { SUPER_AGENTS } from '@/lib/super-agents';

// SEO FAQ Data for Super Agent Page
const superFaqs = [
  {
    question: 'What is the Velki Super Agent List?',
    answer: 'The Velki Super Agent List is a directory category containing available information about records described as Super Agents. Visitors can review the information supplied with each listing and independently confirm important details.',
  },
  {
    question: 'Where can I find a Velki Super Agent List in Bangladesh?',
    answer: 'You can explore the Super Agent category on Velki200Agent. Browse the available records, review their identification and contact details, and check any published update information.',
  },
  {
    question: 'What is a Velki Super Agent?',
    answer: 'It is a category term used in Velki-related agent directories. The exact role and authorization of an individual should be confirmed through appropriate reliable sources.',
  },
  {
    question: 'How can I find a Velki Super Agent number?',
    answer: 'Check the contact information displayed with the relevant directory record, if available. Confirm that the number belongs to the intended person through an appropriate independent source.',
  },
  {
    question: 'How do I verify a Velki Super Agent?',
    answer: 'Review the available identification details, check contact information for consistency, look for a genuine update date and seek independent confirmation of identity and authorization.',
  },
  {
    question: 'What is the difference between a Master Agent and a Super Agent?',
    answer: 'They are separate agent category terms. Their precise responsibilities and authority should be confirmed through reliable information rather than assumed from the names.',
  },
  {
    question: 'Does Velki200Agent officially represent Velki?',
    answer: 'Velki200Agent is an independent information directory. Unless documented authorization is available, it should not be described as an official Velki representative or endorsed service.',
  },
  {
    question: 'Are all Super Agent listings verified?',
    answer: 'A directory listing should not automatically be treated as independently verified. Visitors should check the verification information provided for each record and confirm important details through an appropriate source.',
  },
  {
    question: 'How often is the Velki Super Agent List updated?',
    answer: 'Information may change over time. Check the actual last-reviewed date displayed with a listing, where available. Do not assume that every record has been recently reviewed.',
  },
  {
    question: 'What should I do if a Super Agent contact number is incorrect?',
    answer: 'Use the website\'s contact channel, if available, to report the listing URL and explain the suspected error. Provide supporting information where possible and avoid sharing sensitive personal details.',
  },
  {
    question: 'Can I rely on a directory listing as proof of authorization?',
    answer: 'No. A directory listing alone does not establish official authorization, identity or service quality. Independent confirmation is important before relying on any agent information.',
  },
  {
    question: 'Does Velki200Agent collect personal information?',
    answer: 'Review the website\'s Privacy Policy to understand what information is collected, why it is collected and how it is handled. Do not submit sensitive information unless necessary and appropriate.',
  },
];

export default function SuperAgentListPage() {
  const [query] = useState('');

  const filteredAgents = SUPER_AGENTS.filter(agent => {
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
              <span>সুপার এজেন্ট লিস্ট</span>
            </nav>

            <h1 className="page-title text-3xl">সুপার এজেন্ট লিস্ট বাংলাদেশ ২০২৬</h1>
          </div>
        </section>

        {/* AGENT GRID */}
        <section className="section" id="super-agents-list">
          <div className="container">
            {filteredAgents.length === 0 ? (
              <div className="empty-state">
                <UserRound size={40} />
                <p>কোনো এজেন্ট পাওয়া যায়নি।</p>
              </div>
            ) : (
              <div className="agent-grid">
                {filteredAgents.map((agent, index) => {
                  const phoneNumber = SUPER_AGENT_WHATSAPP_NUMBERS[index % SUPER_AGENT_WHATSAPP_NUMBERS.length];
                  const agentId = phoneNumber.replace(/\D/g, '').slice(-3);

                  return (
                    <article className="agent-card" key={agent.id}>
                      <div className="agent-avatar">
                        <UserRound size={22} />
                      </div>

                      <span className="agent-code">ID: {agentId}</span>
                      <h3>{agent.name}</h3>

                      <a
                        href={getSuperAgentWhatsAppLink(index, `আমি ইউজার একাউন্ট খুলতে চাই।`)}
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
              <h2 className="section-title">Velki Super Agent List Bangladesh – 2026</h2>
            </div>

            <article className="content-panel">
              <h3>Welcome to the Velki Super Agent Directory</h3>
              <p>
                Welcome to Velki200Agent, an online directory for exploring Velki Super Agent information in Bangladesh. This page is designed to help visitors understand the Super Agent category, review available listing details and find relevant contact information where provided.
              </p>
              <p>
                Searching for a Velki Super Agent List should involve more than finding a name or phone number. Visitors also need clear identification details, understandable listing categories and information about how to review a contact record before relying on it. Our Super Agent directory page brings related information together in an organized format.
              </p>

              <h3>What Is a Velki Super Agent?</h3>
              <p>
                A Velki Super Agent is a category term used in Velki-related agent directories. The exact responsibilities, authority and relationship of an individual to a service provider should be confirmed through appropriate reliable sources. A directory label alone does not prove that a person is officially appointed, authorized or currently active. Visitors should distinguish between a category description and independently confirmed information.
              </p>

              <h3>Explore the Velki Super Agent List</h3>
              <p>
                The Velki Super Agent List is a dedicated category for information about listings described as Super Agents. It helps visitors distinguish this category from other agent listing types and locate relevant records without searching through unrelated content. A useful agent directory should make its information easy to understand. Each listing should provide the details actually available, identify missing information clearly and avoid presenting unconfirmed claims as established facts.
              </p>

              <h4>Velki Super Agent Information and Listing Details</h4>
              <p>A Super Agent listing may include the following details:</p>
              <ul>
                <li><strong>Agent name:</strong> The name or label associated with the listing.</li>
                <li><strong>Agent identification:</strong> An available ID or reference number, if supplied.</li>
                <li><strong>Contact number:</strong> A phone number or other contact detail, when available.</li>
                <li><strong>Category:</strong> The listing type, such as Super Agent.</li>
                <li><strong>Last updated date:</strong> The date the listing information was last reviewed, if recorded.</li>
              </ul>
              <p><em>Not every record will contain all these fields. Missing details should be identified as unavailable instead of being filled with assumptions.</em></p>

              <h3>How to Verify a Velki Super Agent</h3>
              <p>
                Velki Super Agent verification is an important part of reviewing directory information. A professional profile, familiar name or frequently shared contact number does not automatically establish identity or authorization. Use the following steps to review a listing more carefully:
              </p>
              <ul>
                <li><strong>Check Agent Identification Details:</strong> Review the name, reference number and other available identification information. Look for incomplete fields or conflicting details.</li>
                <li><strong>Confirm Contact Information Consistency:</strong> Compare the displayed contact details with information from an appropriate independent source. If the number or name differs, do not assume that the records refer to the same person.</li>
                <li><strong>Review the Last Updated Date:</strong> Contact details and directory records can change. An old or undated record should not automatically be treated as current.</li>
                <li><strong>Seek Independent Confirmation:</strong> Where possible, confirm identity and authorization directly through an appropriate official channel.</li>
              </ul>

              <h3>Master Agent vs Super Agent: What Is the Difference?</h3>
              <p>
                Master Agent and Super Agent are separate category terms used in agent directories. Visitors searching for the Velki Super Agent List should understand that a category label does not necessarily explain the full responsibilities or authority of an individual. The exact distinction between these categories should be confirmed through reliable information from the relevant service provider.
              </p>

              <h3>Why Explore Velki200Agent?</h3>
              <p>
                Velki200Agent aims to organize agent-related information in a clear and accessible directory format. The website provides category-based navigation and informational resources for visitors researching Velki agent listings.
              </p>
              <ul>
                <li><strong>Organized Super Agent Category:</strong> A dedicated Super Agent page keeps category information separate from Master Agent records.</li>
                <li><strong>Clear Listing Information:</strong> Descriptive fields and structured records help visitors understand what information is available.</li>
                <li><strong>Helpful Verification Resources:</strong> Guides about agent identification, contact consistency and information accuracy.</li>
                <li><strong>Information Updates and Corrections:</strong> Directory information may change over time. Visitors can contact the website to report an incomplete or outdated listing.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">FAQ</p>
              <h2 className="section-title">Frequently Asked Questions About Velki Super Agent List</h2>
            </div>

            <div className="faq-list">
              {superFaqs.map(faq => (
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
