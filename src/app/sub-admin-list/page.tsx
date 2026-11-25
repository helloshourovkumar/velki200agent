import { ArrowRight, MessageCircle, UserRound } from 'lucide-react';
import { Metadata } from 'next'; // মেটাডেটার জন্য ইমপোর্ট
import Link from 'next/link';

import SiteHeader from '@/components/layout/site-header';

import {
  FOOTER_LINKS,
  getSubAdminWhatsAppLink,
  SITE_COPYRIGHT_YEAR,
  SITE_NAME,
  SUB_ADMIN_WHATSAPP_NUMBERS,
} from '@/lib/site-config';
import { SUB_ADMINS } from '@/lib/sub-admins';

// ১. ক্যানোনিক্যাল লিংক এবং SEO মেটাডেটা
export const metadata: Metadata = {
  title: 'Velki Sub Admin Agent List Bangladesh 2026 | Velki200Agent',
  description: 'Explore the updated Velki Sub Admin Agent List in Bangladesh. Review agent identification details, contact information, and verification steps.',
  alternates: {
    canonical: 'https://velki200agent.com/sub-admin-list',
  },
};

// SEO FAQ Data for Sub Admin Page (All 14 Questions)
const subAdminFaqs = [
  {
    question: 'What is the Velki Sub Admin Agent List?',
    answer: 'The Velki Sub Admin Agent List is a directory category containing available information about records described as Sub Admin agents. Visitors can review the details supplied with each record and independently confirm important information.',
  },
  {
    question: 'Where can I find a Velki Sub Admin Agent List in Bangladesh?',
    answer: 'You can explore the Sub Admin category on Velki200Agent. Review the available listing information, identification details and contact records where provided.',
  },
  {
    question: 'What is a Velki Sub Admin Agent?',
    answer: 'It is a category term used in Velki-related agent directories. The exact role, responsibilities and authorization of an individual should be confirmed through reliable information from the relevant service provider.',
  },
  {
    question: 'How can I find a Velki Sub Admin number?',
    answer: 'Check the contact information associated with the relevant directory listing, if available. Confirm that the number belongs to the intended person through an appropriate independent source.',
  },
  {
    question: 'How do I verify a Velki Sub Admin?',
    answer: 'Review available identification details, compare contact information, check the last-reviewed date and seek independent confirmation of identity and authorization.',
  },
  {
    question: 'What is the difference between a Sub Admin and a Master Agent?',
    answer: 'They are separate category terms. Their precise responsibilities and authority should be confirmed through reliable information rather than assumed from their names.',
  },
  {
    question: 'What is the difference between a Sub Admin and a Super Agent?',
    answer: 'Both are separate directory categories. Visitors should review the information supplied for each category and confirm the actual role through an appropriate source.',
  },
  {
    question: 'Are all Sub Admin listings officially verified?',
    answer: 'A directory listing should not automatically be considered officially verified. Check the verification information provided for the individual record and independently confirm important details.',
  },
  {
    question: 'Does Velki200Agent officially represent Velki?',
    answer: 'Velki200Agent is an independent information directory. Unless documented authorization is available, it should not be described as an official Velki representative or endorsed service.',
  },
  {
    question: 'How often is the Sub Admin Agent List updated?',
    answer: 'Directory information may change over time. Check the actual last-reviewed date displayed with a record, where available. Do not assume every listing has been recently reviewed.',
  },
  {
    question: 'What should I do if a Sub Admin contact number is incorrect?',
    answer: 'Use the website\'s contact channel, if available, to report the relevant listing URL and explain the suspected error. Provide supporting information where possible.',
  },
  {
    question: 'Can I rely on a Sub Admin listing as proof of authorization?',
    answer: 'No. A directory listing alone does not establish identity, official authorization or service quality. Independent confirmation is important before relying on any listing.',
  },
  {
    question: 'How can I report an outdated Sub Admin record?',
    answer: 'Send the page URL or listing reference through the website\'s available correction channel. Explain which details may be outdated and provide a supporting source if possible.',
  },
  {
    question: 'How can I protect my privacy when reviewing agent information?',
    answer: 'Avoid sharing passwords, authentication codes, financial credentials or unnecessary personal documents. Review the website\'s Privacy Policy before submitting personal information.',
  },
];

export default function SubAdminListPage() {
  // যেহেতু সার্চ অপশন বন্ধ, তাই সরাসরি SUB_ADMINS ব্যবহার করা হলো
  const filteredAdmins = SUB_ADMINS;

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

            {/* ২. শুধুমাত্র একটি H1 ট্যাগ */}
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
                {filteredAdmins.map((admin, index) => {
                  const phoneNumber = SUB_ADMIN_WHATSAPP_NUMBERS[index % SUB_ADMIN_WHATSAPP_NUMBERS.length];
                  const adminId = phoneNumber.replace(/\D/g, '').slice(-3);

                  return (
                    <article className="agent-card" key={admin.id}>
                      <div className="agent-avatar">
                        <UserRound size={22} />
                      </div>

                      <span className="agent-code">ID: {adminId}</span>
                      <h3>{admin.name}</h3>

                      <a
                        href={getSubAdminWhatsAppLink(index, `আমি ইউজার একাউন্ট খুলতে চাই।`)}
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

        {/* ৩. FULL SEO CONTENT SECTION (WITH EXTENSIVE INTERNAL LINKS) */}
        <section className="section" id="seo-content">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">INFORMATION & GUIDES</p>
              <h2 className="section-title">Velki Sub Admin Agent List Bangladesh – Updated Sub Admin Information 2026</h2>
            </div>

            <article className="content-panel">
              <h3>Welcome to the Velki Sub Admin Directory</h3>
              <p>
                Welcome to <Link href="/" className="text-teal-400 font-medium hover:underline">Velki200Agent</Link>, an independent online directory designed to organize Velki-related agent information in Bangladesh. This page focuses on the Velki Sub Admin Agent List, helping visitors understand the Sub Admin category, explore available listing details and review relevant contact information where provided.
              </p>
              <p>
                When searching for Sub Admin information, it is important to look beyond a name or phone number. Visitors should understand the category, review available identification details and check whether the information is complete and current.
              </p>
              <p>
                Velki200Agent aims to make this information easier to navigate through organized directory categories, descriptive listings and helpful information guides. Whether you are researching a Sub Admin listing or comparing different agent categories, this page provides a structured starting point.
              </p>

              <h3>Explore the Velki Sub Admin Agent List</h3>
              <p>
                The Velki Sub Admin Agent List is a dedicated directory category for records described as Sub Admin agents. It helps visitors locate relevant information without confusing this category with <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Master Agent</Link>, <Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Super Agent</Link> or other listing types.
              </p>
              <p>
                A useful directory should clearly explain what each listing contains, identify missing information and distinguish between submitted details and independently confirmed information.
              </p>

              <h3>What Is a Velki Sub Admin Agent?</h3>
              <p>
                A Velki Sub Admin Agent is a category term used in Velki-related <Link href="/" className="text-teal-400 font-medium hover:underline">agent information directories</Link>. The exact responsibilities, authority and relationship of a Sub Admin to a service provider should be confirmed through reliable information from the relevant organization.
              </p>
              <p>
                The category name alone does not prove that an individual has official authorization or a particular administrative role. Visitors should review the available information and seek independent confirmation before relying on a listing. You can also read our <Link href="/disclaimer" className="text-teal-400 font-medium hover:underline">Disclaimer</Link> for more clarity.
              </p>

              <h3>Browse Available Sub Admin Listings</h3>
              <p>Visitors can explore the available Sub Admin records on this page. Depending on the information provided for each entry, a listing may contain:</p>
              <ul>
                <li>Sub Admin name or listing label</li>
                <li>Available identification or reference number</li>
                <li>Contact number, where provided</li>
                <li>Agent category</li>
                <li>Relevant information notes</li>
                <li>Last-reviewed date, if recorded</li>
                <li>Listing status, where supported by documented information</li>
              </ul>
              <p><em>Not every listing will contain all these details. Missing information should be marked as unavailable rather than assumed.</em></p>

              <h3>Why a Separate Sub Admin Category Matters</h3>
              <p>
                A separate Sub Admin category makes the directory easier to navigate. It helps visitors distinguish between different agent labels and find information relevant to their search.
              </p>
              <p>
                It also creates space for category-specific explanations, identification details, contact information and verification guidance.
              </p>

              <h3>Velki Sub Admin Information and Listing Details</h3>
              <p>
                A directory listing should be easy to read and understand. Visitors need to know what each information field means and whether the details are current. The Velki Sub Admin directory may include several types of information, depending on the available records.
              </p>

              <h4>Sub Admin Name and Identification</h4>
              <p>
                The name or listing identifier helps distinguish one directory record from another. If a reference number is provided, visitors should understand whether it is simply a directory ID or an identifier recognized by an external service. Do not assume that an ID displayed on a directory page proves official registration or authorization.
              </p>

              <h4>Sub Admin Contact Information</h4>
              <p>
                A contact number may be displayed when it has been supplied for a listing and there is an appropriate basis to publish it. Visitors should check that the number corresponds to the intended record. If no contact details are available, the directory should not display an invented or unrelated number.
              </p>

              <h4>Listing Category and Status</h4>
              <p>
                Each record should clearly identify its category as Sub Admin. If a status label is displayed, the website should explain what that label means and how it is determined. Avoid interpreting words such as active, current or verified as official status unless supporting evidence exists.
              </p>

              <h4>Last Updated Information</h4>
              <p>
                A genuine last-reviewed date helps visitors understand how recent the displayed information may be. If no review date is available, visitors should treat the information as potentially outdated and seek confirmation.
              </p>

              <h3>Velki Sub Admin Number and Contact Details</h3>
              <p>
                Visitors may search for a Velki Sub Admin number when trying to identify a particular directory listing. Contact information should be displayed clearly and associated with the correct record.
              </p>

              <h4>How to Find a Sub Admin Contact Number</h4>
              <p>
                Start by locating the relevant Sub Admin listing. Review the contact section and check whether the number is complete and clearly associated with the listed person or record. If a number is not provided, do not assume that another number found elsewhere belongs to the same individual.
              </p>

              <h4>What to Check Before Contacting a Sub Admin</h4>
              <p>Before relying on a listed contact detail, consider these points:</p>
              <ul>
                <li>Check that the number belongs to the intended listing.</li>
                <li>Compare the contact information with an appropriate independent source.</li>
                <li>Look for differences in names, numbers or identification details.</li>
                <li>Be cautious about old directory records and undated contact information.</li>
                <li>Never share passwords, one-time verification codes or unnecessary sensitive information.</li>
              </ul>
              <p>A contact number is not proof of identity or official authority. Independent confirmation remains important.</p>

              <h3>Protect Your Personal Information</h3>
              <p>
                Personal information should be handled carefully when communicating with anyone found through an online directory. Do not disclose account passwords, private authentication codes, financial credentials or other sensitive information simply because a contact appears in a listing.
              </p>
              <p>
                Read the relevant privacy information before submitting personal details through a website or contact form. You can read our <Link href="/privacy-policy" className="text-teal-400 font-medium hover:underline">Privacy Policy</Link> for more details.
              </p>

              <h3>How to Verify Velki Sub Admin Information</h3>
              <p>
                Checking Sub Admin information is an important part of using an online directory. A professional-looking profile or a familiar contact number does not automatically establish that a listing is genuine or authorized. Use the following steps when reviewing a Velki Sub Admin record.
              </p>
              <ol>
                <li>
                  <strong>Review Available Identification Details:</strong> Check the displayed name, reference number and other available identification information. Look for incomplete fields, unusual changes or inconsistent details. Where an official identification process exists, confirm the information through the appropriate source.
                </li>
                <li>
                  <strong>Check Contact Information Consistency:</strong> Compare the contact number and other details with information from an appropriate independent source. If different sources show conflicting numbers or names, do not assume that the records belong to the same person. Seek clarification before relying on the information.
                </li>
                <li>
                  <strong>Check the Listing Update Date:</strong> Agent-related information can change. Look for an actual last-reviewed date and consider whether the record may be outdated. An old or undated listing should not automatically be treated as current.
                </li>
                <li>
                  <strong>Identify Incomplete or Conflicting Records:</strong> Pay attention to missing contact details, unclear category labels, inconsistent identification information and unsupported status claims. A transparent directory should explain which information is available, which details have been supplied by third parties and which details have not been independently confirmed.
                </li>
                <li>
                  <strong>Seek Independent Confirmation:</strong> Where possible, confirm identity and authorization through an appropriate official channel. Velki200Agent is an independent information directory. A published record does not guarantee the identity, authorization or service quality of the individual described.
                </li>
              </ol>

              <h3>Sub Admin vs Master Agent vs Super Agent</h3>
              <p>
                Visitors searching for a Velki Sub Admin Agent List may also encounter Master Agent and Super Agent categories. Understanding the directory structure can make navigation easier. These terms represent separate category labels. Their precise responsibilities, authority and relationship to a service provider should not be assumed from their names.
              </p>
              <ul>
                <li><strong>Sub Admin:</strong> A category label used for Sub Admin-related directory records.</li>
                <li><strong>Master Agent:</strong> A separate category for records described as Master Agents.</li>
                <li><strong>Super Agent:</strong> A separate category for records described as Super Agents.</li>
              </ul>
              <p>
                The exact differences between these roles should be confirmed through reliable information from the relevant service provider. A directory classification is not proof of official rank or authorization. You can explore the related categories through the <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Velki Master Agent List</Link> and <Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Velki Super Agent List</Link> pages.
              </p>

              <h3>How to Review and Compare Sub Admin Listings</h3>
              <p>
                When comparing available Sub Admin records, focus on information quality rather than promotional descriptions or unsupported claims. Consider the following factors:
              </p>
              <ul>
                <li><strong>Identification clarity:</strong> Are the available names and reference details understandable?</li>
                <li><strong>Contact consistency:</strong> Do the contact details match the intended listing?</li>
                <li><strong>Information freshness:</strong> Is an actual last-reviewed date available?</li>
                <li><strong>Category accuracy:</strong> Is the record clearly identified as a Sub Admin listing?</li>
                <li><strong>Source transparency:</strong> Is it clear where the information came from?</li>
                <li><strong>Privacy awareness:</strong> Does the communication process avoid requesting unnecessary sensitive information?</li>
              </ul>
              <p>
                These checks help visitors evaluate the quality of directory information. They do not guarantee an individual's identity, authority or reliability.
              </p>

              <h3>Why Explore Velki200Agent?</h3>
              <p>
                Velki200Agent aims to organize agent-related information in a straightforward and accessible directory format. Its category-based structure helps visitors navigate different listing types and explore relevant information resources.
              </p>
              <ul>
                <li><strong>Organized Agent Categories:</strong> Separate Sub Admin, Master Agent and Super Agent pages help visitors find category-specific information without mixing different listing types.</li>
                <li><strong>Clear Information Structure:</strong> Descriptive headings and consistent listing fields make it easier to understand what information is available for each record.</li>
                <li><strong>Helpful Verification Guides:</strong> Educational resources about identification details, contact consistency and information accuracy help visitors review directory records more carefully. Visit our <Link href="/blog" className="text-teal-400 font-medium hover:underline">Blog</Link> for more guides.</li>
                <li><strong>Listing Updates and Corrections:</strong> Directory records may change over time. Where a correction process is available, visitors can contact the website to report outdated or incomplete information.</li>
                <li><strong>Accessible Website Navigation:</strong> Clear page sections, relevant internal links and a mobile-friendly layout can make the directory easier to use across different devices. Go back to <Link href="/" className="text-teal-400 font-medium hover:underline">Home</Link>.</li>
              </ul>

              <h3>Reporting Incorrect or Outdated Sub Admin Information</h3>
              <p>
                Accurate directory information requires a process for reviewing corrections. If you notice an incorrect name, outdated contact number or incomplete Sub Admin listing, use the website's contact channel where available.
              </p>
              <p>When reporting a listing issue, provide:</p>
              <ul>
                <li>The relevant page URL or listing reference.</li>
                <li>A short explanation of the suspected issue.</li>
                <li>The specific information that may need correction.</li>
                <li>A reliable supporting source, if available.</li>
              </ul>
              <p>
                Do not include passwords, private verification codes or unnecessary personal documents. Submitted corrections should be reviewed before a directory record is changed. Reporting an issue does not automatically establish that the information is incorrect or that a replacement detail is accurate. You can reach out via our <Link href="/contact" className="text-teal-400 font-medium hover:underline">Contact Page</Link>.
              </p>

              <h3>Velki Agent Guides and Helpful Resources</h3>
              <p>Visitors researching the Velki Sub Admin Agent List may also find these resources useful:</p>
              <ul>
                <li><strong><Link href="/" className="text-teal-400 font-medium hover:underline">Velki Agent List Bangladesh</Link>:</strong> Explore the main agent directory and available categories.</li>
                <li><strong><Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Velki Master Agent List</Link>:</strong> Review Master Agent category information.</li>
                <li><strong><Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Velki Super Agent List</Link>:</strong> Explore the Super Agent category.</li>
                <li><strong>How to Verify a Velki Agent:</strong> Learn how to review identification and contact information.</li>
                <li><strong>Velki Agent Information Guide:</strong> Understand common agent directory terms.</li>
                <li><strong>Online Privacy Guide:</strong> Learn practical ways to protect personal information.</li>
                <li><strong><Link href="/about" className="text-teal-400 font-medium hover:underline">About Velki200Agent</Link>:</strong> Understand the purpose and scope of the directory.</li>
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
                <Link href="/super-agent-list" className="text-teal-400 hover:text-teal-300 hover:underline flex items-center gap-2">
                  <ArrowRight size={16} /> Super Agent List
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
              <h2 className="section-title">Frequently Asked Questions About Velki Sub Admin Agent List</h2>
            </div>

            <div className="faq-list">
              {subAdminFaqs.map(faq => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CONCLUSION & DISCLAIMER */}
        <section className="section" id="conclusion">
          <div className="container">
            <div className="content-panel text-center">
              <h3>Explore the Velki Sub Admin Agent List on Velki200Agent</h3>
              <p>
                Finding useful Sub Admin information starts with organized categories, clear listing details and careful information review. Velki200Agent provides a dedicated resource for exploring the <Link href="/" className="text-teal-400 font-medium hover:underline">Velki Sub Admin Agent List Bangladesh</Link>, understanding available contact records and learning how to review directory information.
              </p>
              <p>
                Browse the available Sub Admin records, check the details carefully and independently confirm important information before relying on any listing.
              </p>
              <p>
                You can also explore the <Link href="/master-agent-list" className="text-teal-400 font-medium hover:underline">Velki Master Agent List</Link>, <Link href="/super-agent-list" className="text-teal-400 font-medium hover:underline">Velki Super Agent List</Link> and main <Link href="/" className="text-teal-400 font-medium hover:underline">Velki Agent Directory</Link> for related category information.
              </p>
              <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-700 text-sm text-gray-400 text-left">
                <strong>Disclaimer:</strong> Velki200Agent is an independent information directory. It does not claim official affiliation, authorization or endorsement by Velki unless supported by documented evidence. Published listings do not guarantee identity, authorization, service quality or financial safety. Visitors should independently confirm important information and follow applicable laws and regulations.
              </div>
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
