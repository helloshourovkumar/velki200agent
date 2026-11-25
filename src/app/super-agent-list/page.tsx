'use client';

import { ArrowRight, MessageCircle, UserRound } from 'lucide-react';
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

// SEO FAQ Data for Super Agent Page (All 12 Questions)
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

        {/* FULL SEO CONTENT SECTION (WITH INTERNAL LINKS) */}
        <section className="section" id="seo-content">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">INFORMATION & GUIDES</p>
              <h2 className="section-title">Velki Super Agent List Bangladesh – Updated Super Agent Information 2026</h2>
            </div>

            <article className="content-panel">
              <h3>Welcome to the Velki Super Agent Directory</h3>
              <p>
                Welcome to Velki200Agent, an online directory for exploring Velki Super Agent information in Bangladesh. This page is designed to help visitors understand the Super Agent category, review available listing details and find relevant contact information where provided.
              </p>
              <p>
                Searching for a Velki Super Agent List should involve more than finding a name or phone number. Visitors also need clear identification details, understandable listing categories and information about how to review a contact record before relying on it.
              </p>
              <p>
                Our Super Agent directory page brings related information together in an organized format. You can explore available listings, understand the terminology used in agent directories and learn practical ways to check whether information is complete, consistent and current. Whether you are researching the Velki Super Agent category or comparing different directory records, this guide provides a starting point for navigating the available information.
              </p>

              <h3>What Is a Velki Super Agent?</h3>
              <p>
                A Velki Super Agent is a category term used in Velki-related agent directories. The exact responsibilities, authority and relationship of an individual to a service provider should be confirmed through appropriate reliable sources.
              </p>
              <p>
                A directory label alone does not prove that a person is officially appointed, authorized or currently active. Visitors should distinguish between a category description and independently confirmed information.
              </p>

              <h3>Explore the Velki Super Agent List</h3>
              <p>
                The Velki Super Agent List is a dedicated category for information about listings described as Super Agents. It helps visitors distinguish this category from other agent listing types and locate relevant records without searching through unrelated content.
              </p>
              <p>
                A useful agent directory should make its information easy to understand. Each listing should provide the details actually available, identify missing information clearly and avoid presenting unconfirmed claims as established facts.
              </p>

              <h3>Browse Available Super Agent Listings</h3>
              <p>
                Visitors can use this page to explore the available Velki Super Agent information. When reviewing a listing, pay attention to its category, identification details, contact information and any published update date.
              </p>
              <p>
                If the website provides a directory search or category filter, use it to narrow the available records. If a search feature is not available, browse the published listings manually.
              </p>

              <h3>Why Use a Dedicated Super Agent Page?</h3>
              <p>
                A separate category page makes directory navigation more straightforward. Instead of mixing <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Master Agent</Link> and Super Agent records, visitors can focus on the information relevant to the Super Agent category.
              </p>
              <p>
                It also provides space for category-specific explanations, contact information, verification guidance and frequently asked questions.
              </p>

              <h3>Velki Super Agent Information and Listing Details</h3>
              <p>
                A directory listing is most useful when visitors can understand what each field represents. The information available may differ between records, depending on what has been provided and what can be supported.
              </p>
              <p>A Super Agent listing may include the following details:</p>
              <ul>
                <li><strong>Agent name:</strong> The name or label associated with the listing.</li>
                <li><strong>Agent identification:</strong> An available ID or reference number, if supplied.</li>
                <li><strong>Contact number:</strong> A phone number or other contact detail, when available.</li>
                <li><strong>Category:</strong> The listing type, such as Super Agent.</li>
                <li><strong>Information notes:</strong> Relevant details that help visitors understand the record.</li>
                <li><strong>Last updated date:</strong> The date the listing information was last reviewed, if recorded.</li>
                <li><strong>Listing status:</strong> A status only where the website has a clear and documented basis for displaying it.</li>
              </ul>
              <p><em>Not every record will contain all these fields. Missing details should be identified as unavailable instead of being filled with assumptions.</em></p>

              <h3>How to Read a Super Agent Listing</h3>
              <p>
                Start by checking the agent name and category. Then review the available identification and contact details. Look for inconsistencies, incomplete information or an update date that is missing or unclear.
              </p>
              <p>
                If a listing includes a reference ID, treat it as a directory identifier unless its meaning and validity have been confirmed by an appropriate source. Do not interpret the presence of a name, number or ID as proof of official authorization.
              </p>

              <h3>Velki Super Agent Number and Contact Information</h3>
              <p>
                Many visitors search for a Velki Super Agent number because they want to locate contact information associated with a particular listing. Contact details should be presented clearly and should be checked before being relied upon.
              </p>

              <h4>How to Find a Listed Super Agent Contact</h4>
              <p>
                Review the contact section of the relevant directory record, if one is available. Check that the number is displayed completely and is associated with the correct listing.
              </p>
              <p>
                If the directory does not provide a contact number, do not assume one or substitute a number from an unrelated source.
              </p>

              <h4>What to Check Before Using a Contact Number</h4>
              <p>Consider these points when reviewing a listed contact:</p>
              <ul>
                <li>Check whether the contact number is connected to the intended listing.</li>
                <li>Compare the details with an appropriate independent information source.</li>
                <li>Look for outdated phone numbers or inconsistent names.</li>
                <li>Be cautious if different pages display conflicting contact information.</li>
                <li>Avoid sharing passwords, one-time verification codes or sensitive account details.</li>
              </ul>
              <p>
                A phone number is a contact method, not proof of identity. Confirm important details independently before making decisions based on a listing.
              </p>

              <h3>Protect Your Personal Information</h3>
              <p>
                Never share account passwords, private authentication codes or unnecessary personal information with someone simply because their details appear in an online directory.
              </p>
              <p>
                Read privacy information before submitting personal details through a website or contact form. Use secure communication practices and avoid sending sensitive documents unless there is a clear, legitimate reason. You can read our <Link href="/privacy-policy" className="text-teal-400 font-medium hover:underline">Privacy Policy</Link> for more details.
              </p>

              <h3>How to Verify a Velki Super Agent</h3>
              <p>
                Velki Super Agent verification is an important part of reviewing directory information. A professional profile, familiar name or frequently shared contact number does not automatically establish identity or authorization.
              </p>
              <p>Use the following steps to review a listing more carefully.</p>
              <ol>
                <li>
                  <strong>Check Agent Identification Details:</strong> Review the name, reference number and other available identification information. Look for incomplete fields, unusual changes or conflicting details. Where an official identification method exists, confirm the information through the appropriate source rather than relying only on a directory page.
                </li>
                <li>
                  <strong>Confirm Contact Information Consistency:</strong> Compare the displayed contact details with information from an appropriate independent source. If the number, name or other details differ, do not assume that the records refer to the same person.
                </li>
                <li>
                  <strong>Review the Last Updated Date:</strong> Contact details and directory records can change. Check whether a genuine last-reviewed date is displayed. An old or undated record should not automatically be treated as current. If the information appears outdated, seek clarification before relying on it.
                </li>
                <li>
                  <strong>Look for Incomplete or Conflicting Information:</strong> Be cautious when a listing has missing identification details, inconsistent contact records or unclear category information. A reliable directory should distinguish between confirmed information, information supplied by a third party and details that have not been independently confirmed.
                </li>
                <li>
                  <strong>Seek Independent Confirmation:</strong> Where possible, confirm identity and authorization directly through an appropriate official channel. Velki200Agent is an independent information directory and does not guarantee the identity, authorization or service quality of every person described in a listing.
                </li>
              </ol>

              <h3>Master Agent vs Super Agent: What Is the Difference?</h3>
              <p>
                Master Agent and Super Agent are separate category terms used in agent directories. Visitors searching for the Velki Super Agent List should understand that a category label does not necessarily explain the full responsibilities or authority of an individual.
              </p>
              <p>
                The exact distinction between these categories should be confirmed through reliable information from the relevant service provider. If you are researching the other category, visit the <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Velki Master Agent List page</Link> to explore its available information.
              </p>
              <p>
                Keeping the two categories separate helps visitors navigate the directory and reduces confusion between different types of agent records.
              </p>

              <h3>How to Choose Which Super Agent Information to Review</h3>
              <p>
                When comparing directory records, avoid choosing solely on the basis of a name, phone number or promotional statement. Instead, review the quality and completeness of the information.
              </p>
              <p>Consider these factors:</p>
              <ul>
                <li><strong>Identification clarity:</strong> Are the available identification details understandable?</li>
                <li><strong>Contact consistency:</strong> Do the contact details match the information associated with the listing?</li>
                <li><strong>Information freshness:</strong> Is an actual last-reviewed date displayed?</li>
                <li><strong>Category accuracy:</strong> Is the listing clearly identified as a Super Agent record?</li>
                <li><strong>Source transparency:</strong> Is it clear where the information came from?</li>
                <li><strong>Privacy awareness:</strong> Does the contact or listing process avoid requesting unnecessary sensitive information?</li>
              </ul>
              <p>
                These checks can help visitors assess the quality of directory information. They do not guarantee an individual's identity, authorization or reliability.
              </p>

              <h3>Why Explore Velki200Agent?</h3>
              <p>
                Velki200Agent aims to organize agent-related information in a clear and accessible directory format. The website provides category-based navigation and informational resources for visitors researching Velki agent listings.
              </p>
              <ul>
                <li><strong>Organized Super Agent Category:</strong> A dedicated Super Agent page keeps category information separate from Master Agent records and makes it easier to browse relevant listings.</li>
                <li><strong>Clear Listing Information:</strong> Descriptive fields and structured records help visitors understand what information is available and what still needs confirmation.</li>
                <li><strong>Helpful Verification Resources:</strong> Guides about agent identification, contact consistency and information accuracy can help visitors review directory records more carefully.</li>
                <li><strong>Information Updates and Corrections:</strong> Directory information may change over time. Where a correction process is available, visitors can contact the website to report an incomplete, outdated or potentially incorrect listing.</li>
                <li><strong>Easy Navigation:</strong> Clear headings, relevant internal links and mobile-friendly page design can make the directory easier to use across different devices.</li>
              </ul>

              <h3>Reporting Incorrect or Outdated Super Agent Information</h3>
              <p>
                Keeping directory information accurate requires a clear process for handling corrections. If you notice a missing detail, incorrect contact number or outdated listing, use the website's contact channel where available.
              </p>
              <p>When reporting an issue, provide:</p>
              <ul>
                <li>The page URL or listing reference.</li>
                <li>A short explanation of the information that appears incorrect.</li>
                <li>The specific field that may need review.</li>
                <li>A reliable supporting source, if available.</li>
              </ul>
              <p>
                Avoid submitting passwords, private verification codes or unnecessary personal documents. A submitted correction should be reviewed before the directory record is changed. A report does not automatically mean that the information is incorrect or that a replacement detail has been verified.
              </p>

              <h3>Velki Agent Guides and Helpful Resources</h3>
              <p>Visitors researching the Velki Super Agent List may also find these related resources useful:</p>
              <ul>
                <li><strong><Link href="/" className="text-teal-400 font-medium hover:underline">Velki Agent List Bangladesh</Link>:</strong> Explore the main agent directory and available categories.</li>
                <li><strong><Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Velki Master Agent List</Link>:</strong> Review the separate Master Agent category.</li>
                <li><strong>How to Verify a Velki Agent:</strong> Learn how to review identification and contact information.</li>
                <li><strong>Velki Agent Information Guide:</strong> Understand common directory terms and listing details.</li>
                <li><strong>Online Privacy Guide:</strong> Learn practical ways to protect personal information.</li>
                <li><strong><Link href="/about" className="text-teal-400 font-medium hover:underline">About Velki200Agent</Link>:</strong> Understand the purpose and scope of this independent directory.</li>
                <li><strong><Link href="/contact" className="text-teal-400 font-medium hover:underline">Contact Page</Link>:</strong> Find the appropriate channel for questions or listing corrections.</li>
              </ul>
            </article>

            {/* INTERNAL LINKS SECTION */}
            <div className="mt-12 p-6 bg-[#0f172a] rounded-xl border border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-4">Explore Other Directory Categories</h4>
              <div className="flex flex-wrap gap-6">
                <Link href="/" className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-2">
                  <ArrowRight size={16} /> Home - Velki Agent List
                </Link>
                <Link href="/master-agent-list" className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-2">
                  <ArrowRight size={16} /> Master Agent List
                </Link>
                <Link href="/sub-admin-list" className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-2">
                  <ArrowRight size={16} /> Sub Admin List
                </Link>
                <Link href="/customer-services" className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-2">
                  <ArrowRight size={16} /> Customer Services
                </Link>
              </div>
            </div>
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

        {/* FINAL CONCLUSION */}
        <section className="section" id="conclusion">
          <div className="container">
            <div className="content-panel text-center">
              <h3>Explore the Latest Velki Super Agent List on Velki200Agent</h3>
              <p>
                Finding relevant agent information starts with clear categories, understandable records and careful review. Velki200Agent provides a dedicated resource for exploring the <Link href="/" className="text-teal-400 font-medium hover:underline">Velki Super Agent List Bangladesh</Link>, reviewing available contact information and learning how to assess directory records.
              </p>
              <p>
                Browse the available Super Agent information, compare the details carefully and independently confirm important information before relying on a listing.
              </p>
              <p>
                For additional category information, you can also explore the <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Velki Master Agent List</Link> and the main <Link href="/" className="text-teal-400 font-medium hover:underline">Velki Agent Directory</Link>.
              </p>
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
