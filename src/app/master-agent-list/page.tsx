import { ArrowRight, MessageCircle, UserRound } from 'lucide-react';
import { Metadata } from 'next';
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

// Canonical URL এবং SEO মেটাডেটা
export const metadata: Metadata = {
  title: 'Velki Master Agent List Bangladesh 2026 | Velki200Agent',
  description: 'Explore the updated Velki Master Agent List in Bangladesh. Review agent identification details, contact information, and verification steps.',
  alternates: {
    canonical: 'https://velki200agent.com/master-agent-list',
  },
};

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
  // যেহেতু সার্চ বন্ধ, তাই সরাসরি MASTER_AGENTS ব্যবহার করা হলো
  const filteredAgents = MASTER_AGENTS;

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

            {/* একমাত্র H1 ট্যাগ */}
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

        {/* FULL SEO CONTENT SECTION (WITH EXTENSIVE INTERNAL LINKS) */}
        <section className="section" id="seo-content">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">INFORMATION & GUIDES</p>
              <h2 className="section-title">Velki Master Agent List Bangladesh – Updated Master Agent Information 2026</h2>
            </div>

            <article className="content-panel">
              <h3>Welcome to Velki200Agent</h3>
              <p>
                Welcome to <Link href="/" className="text-teal-400 font-medium hover:underline">Velki200Agent</Link>, an online information directory designed to help visitors explore the Velki Master Agent List in Bangladesh. This page brings together master agent category information in an organized format so visitors can understand available listings, review identification details and find relevant contact information where provided.
              </p>
              <p>
                Finding information about a master agent should involve more than simply looking at a name or phone number. Visitors should also consider whether the listing is complete, whether its contact details are consistent and whether the information can be independently confirmed.
              </p>
              <p>
                Our goal is to make agent-related information easier to navigate through clear categories, helpful guides and accessible <Link href="/" className="text-teal-400 font-medium hover:underline">directory resources</Link>.
              </p>

              <h3>What Is a Velki Master Agent?</h3>
              <p>
                A <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Velki Master Agent</Link> is a term used in the agent category structure associated with <Link href="/" className="text-teal-400 font-medium hover:underline">Velki-related services</Link>. The role, responsibilities and authorization of any individual should not be assumed from a directory label alone.
              </p>
              <p>
                Before relying on information about a particular master agent, visitors should check the available identification details and seek confirmation through an appropriate independent source. You can also read our <Link href="/disclaimer" className="text-teal-400 font-medium hover:underline">Disclaimer</Link> for more clarity.
              </p>

              <h3>Explore the Velki Master Agent List</h3>
              <p>
                The Velki Master Agent List is a category of agent-related information for visitors looking for master agent listings. Instead of searching through unrelated pages, visitors can use a dedicated directory page to explore available records and review the information provided for each listing.
              </p>
              <p>
                A well-organized directory can make it easier to compare listing details and identify information that may need further confirmation.
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

              <h3>Browse Master Agent Listings</h3>
              <p>
                Use the directory to review the available Velki Master Agent information. Read each listing carefully and compare the details provided before making contact. You can also explore our <Link href="/sub-admin-list" className="text-teal-400 font-medium hover:underline">Sub Admin List</Link> and <Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Super Agent List</Link>.
              </p>

              <h3>Velki Master Agent Number and Contact Information</h3>
              <p>
                Visitors often search for a Velki Master Agent number or contact details when trying to identify a particular listing. Contact information should be presented clearly and should be checked for accuracy.
              </p>
              <p>When reviewing a listed number, consider the following:</p>
              <ul>
                <li>Check whether the number is displayed consistently across the relevant information sources.</li>
                <li>Confirm that the contact belongs to the person or organization described in the listing.</li>
                <li>Be careful with numbers copied from outdated posts or unrelated websites.</li>
                <li>Avoid sharing passwords, verification codes or sensitive account information. Read our <Link href="/privacy-policy" className="text-teal-400 font-medium hover:underline">Privacy Policy</Link>.</li>
                <li>Do not rely on a phone number as the only evidence of an agent's identity.</li>
              </ul>
              <p>
                If a listing does not provide a contact number, do not assume one or use an unrelated number as a replacement.
              </p>

              <h3>How to Verify Velki Master Agent Information</h3>
              <p>
                Information verification is an important step when using any online agent directory. A professional-looking profile or a frequently shared phone number does not automatically establish that a listing is genuine or authorized.
              </p>
              <p>Use these checks when reviewing a Velki Master Agent listing.</p>
              <ol>
                <li>
                  <strong>Review Identification Details:</strong> Check the name, listing identifier and other available details. Look for missing information, inconsistent spelling or details that do not match the source where the information is supposed to originate.
                </li>
                <li>
                  <strong>Check Contact Information Consistency:</strong> Compare the listed contact details with information from an appropriate independent source. If different sources show different numbers or names, pause and seek clarification before relying on the listing.
                </li>
                <li>
                  <strong>Identify Outdated or Incomplete Listings:</strong> An old listing may contain information that is no longer current. Look for a genuine last updated date, and do not interpret an undated page as recently reviewed.
                </li>
                <li>
                  <strong>Seek Independent Confirmation:</strong> Where possible, confirm the identity and authorization of an agent directly through an appropriate official channel. Velki200Agent is an independent information directory and does not independently guarantee the identity or authorization of every listed person.
                </li>
              </ol>

              <h3>Master Agent vs Super Agent: Understanding the Categories</h3>
              <p>
                <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Master Agent</Link> and <Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Super Agent</Link> are separate category terms used in agent directories. Visitors should review the category label and the information supplied with each listing rather than assuming that the two terms describe identical roles.
              </p>
              <p>
                If you are looking for the other category, visit the <Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Velki Super Agent List page</Link> to explore its available information.
              </p>
              <p>
                Understanding the category structure can help visitors navigate the directory more efficiently and locate the type of information they are looking for. For support, visit our <Link href="/customer-services" className="text-teal-400 font-medium hover:underline">Customer Services</Link> page.
              </p>

              <h3>Why Explore Velki200Agent?</h3>
              <p>
                Velki200Agent aims to organize agent-related information in a straightforward directory format. The website is intended to help visitors navigate available categories and access relevant informational resources.
              </p>
              <ul>
                <li>
                  <strong>Organized Agent Categories:</strong> Separate category pages make it easier to browse <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">master agent</Link> and <Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">super agent</Link> information without mixing different listing types.
                </li>
                <li>
                  <strong>Easy Navigation:</strong> Clear headings, category links and descriptive information help visitors move between relevant directory pages. Go back to <Link href="/" className="text-teal-400 font-medium hover:underline">Home</Link>.
                </li>
                <li>
                  <strong>Helpful Information Guides:</strong> Visitors can explore educational resources about agent identification, contact details, information accuracy and online privacy on our <Link href="/blog" className="text-teal-400 font-medium hover:underline">Blog</Link>.
                </li>
                <li>
                  <strong>Listing Updates and Corrections:</strong> Directory information can change over time. Where an update or correction process is available, visitors should use the <Link href="/contact" className="text-teal-400 font-medium hover:underline">website's contact channel</Link> to report incomplete or potentially outdated information.
                </li>
              </ul>

              <h3>Helpful Velki Agent Information Resources</h3>
              <p>The following resources can help visitors understand the directory and review agent-related information:</p>
              <ul>
                <li><strong><Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Velki Super Agent List</Link>:</strong> Explore the separate super agent category.</li>
                <li><strong><Link href="/sub-admin-list" className="text-teal-400 font-medium hover:underline">Velki Sub Admin List</Link>:</strong> Explore the sub admin category.</li>
                <li><strong>Velki Agent Verification Guide:</strong> Learn how to review identification and contact details.</li>
                <li><strong>Velki Agent Information Guide:</strong> Understand directory terminology and listing information.</li>
                <li><strong><Link href="/contact" className="text-teal-400 font-medium hover:underline">Contact Page</Link>:</strong> Find the appropriate way to send a question or report a listing correction.</li>
                <li><strong><Link href="/about" className="text-teal-400 font-medium hover:underline">About Page</Link>:</strong> Learn more about the purpose and scope of Velki200Agent.</li>
              </ul>
            </article>

            {/* INTERNAL LINKS SECTION */}
            <div className="mt-12 p-6 bg-[#0f172a] rounded-xl border border-gray-800">
              <h4 className="text-xl font-semibold text-white mb-4">Explore Other Directory Categories</h4>
              <div className="flex flex-wrap gap-6">
                <Link href="/" className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-2">
                  <ArrowRight size={16} /> Home - Velki Agent List
                </Link>
                <Link href="/super-agent-list" className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-2">
                  <ArrowRight size={16} /> Super Agent List
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

        {/* FINAL CONCLUSION */}
        <section className="section" id="conclusion">
          <div className="container">
            <div className="content-panel text-center">
              <h3>Explore the Velki Master Agent List on Velki200Agent</h3>
              <p>
                Finding useful agent information starts with clear listings, understandable categories and careful review. Velki200Agent provides a dedicated place to explore the <Link href="/" className="text-teal-400 font-medium hover:underline">Velki Agent List Bangladesh</Link>, understand available contact records and access helpful information resources.
              </p>
              <p>
                Browse the available master agent listings, review the details carefully and independently confirm important information before relying on any listing. You can also check the <Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Super Agent List</Link> and <Link href="/sub-admin-list" className="text-teal-400 font-medium hover:underline">Sub Admin List</Link>.
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
