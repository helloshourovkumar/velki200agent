'use client';

import { MessageCircle, UserRound } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import SiteHeader from '@/components/layout/site-header';

import {
  FOOTER_LINKS,
  getSubAdminWhatsAppLink,
  SITE_COPYRIGHT_YEAR,
  SITE_NAME,
  SUB_ADMIN_WHATSAPP_NUMBERS,
} from '@/lib/site-config';
import { SUB_ADMINS } from '@/lib/sub-admins';

// SEO FAQ Data for Sub Admin Page
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
    question: 'Are all Sub Admin listings officially verified?',
    answer: 'A directory listing should not automatically be considered officially verified. Check the verification information provided for the individual record and independently confirm important details.',
  },
  {
    question: 'Does Velki200Agent officially represent Velki?',
    answer: 'Velki200Agent is an independent information directory. Unless documented authorization is available, it should not be described as an official Velki representative or endorsed service.',
  },
  {
    question: 'What should I do if a Sub Admin contact number is incorrect?',
    answer: 'Use the website\'s contact channel, if available, to report the relevant listing URL and explain the suspected error. Provide supporting information where possible.',
  },
  {
    question: 'Can I rely on a Sub Admin listing as proof of authorization?',
    answer: 'No. A directory listing alone does not establish identity, official authorization or service quality. Independent confirmation is important before relying on any listing.',
  },
];

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

        {/* SEO CONTENT SECTION */}
        <section className="section" id="seo-content">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">INFORMATION & GUIDES</p>
              <h2 className="section-title">Velki Sub Admin Agent List Bangladesh – 2026</h2>
            </div>

            <article className="content-panel">
              <h3>Welcome to the Velki Sub Admin Directory</h3>
              <p>
                Welcome to Velki200Agent, an independent online directory designed to organize Velki-related agent information in Bangladesh. This page focuses on the Velki Sub Admin Agent List, helping visitors understand the Sub Admin category, explore available listing details and review relevant contact information where provided.
              </p>
              <p>
                When searching for Sub Admin information, it is important to look beyond a name or phone number. Visitors should understand the category, review available identification details and check whether the information is complete and current.
              </p>

              <h3>What Is a Velki Sub Admin Agent?</h3>
              <p>
                A Velki Sub Admin Agent is a category term used in Velki-related agent information directories. The exact responsibilities, authority and relationship of a Sub Admin to a service provider should be confirmed through reliable information from the relevant organization. The category name alone does not prove that an individual has official authorization or a particular administrative role.
              </p>

              <h3>Explore the Velki Sub Admin Agent List</h3>
              <p>
                The Velki Sub Admin Agent List is a dedicated directory category for records described as Sub Admin agents. It helps visitors locate relevant information without confusing this category with Master Agent, Super Agent or other listing types. A useful directory should clearly explain what each listing contains, identify missing information and distinguish between submitted details and independently confirmed information.
              </p>

              <h4>Velki Sub Admin Information and Listing Details</h4>
              <p>Depending on the available records, a Sub Admin listing may contain:</p>
              <ul>
                <li><strong>Sub Admin name or listing label</strong></li>
                <li><strong>Available identification or reference number</strong></li>
                <li><strong>Contact number, where provided</strong></li>
                <li><strong>Agent category</strong></li>
                <li><strong>Last-reviewed date, if recorded</strong></li>
              </ul>
              <p><em>Not every listing will contain all these details. Missing information should be marked as unavailable rather than assumed.</em></p>

              <h3>How to Verify Velki Sub Admin Information</h3>
              <p>
                Checking Sub Admin information is an important part of using an online directory. Use the following steps when reviewing a Velki Sub Admin record:
              </p>
              <ul>
                <li><strong>Review Available Identification Details:</strong> Check the displayed name, reference number and other available identification information. Look for incomplete fields or inconsistent details.</li>
                <li><strong>Check Contact Information Consistency:</strong> Compare the contact number and other details with information from an appropriate independent source. If different sources show conflicting numbers, seek clarification.</li>
                <li><strong>Check the Listing Update Date:</strong> Agent-related information can change. An old or undated listing should not automatically be treated as current.</li>
                <li><strong>Seek Independent Confirmation:</strong> Where possible, confirm identity and authorization through an appropriate official channel.</li>
              </ul>

              <h3>Sub Admin vs Master Agent vs Super Agent</h3>
              <p>
                Visitors searching for a Velki Sub Admin Agent List may also encounter Master Agent and Super Agent categories. These terms represent separate category labels. Their precise responsibilities, authority and relationship to a service provider should not be assumed from their names. The exact differences between these roles should be confirmed through reliable information from the relevant service provider.
              </p>

              <h3>Why Explore Velki200Agent?</h3>
              <p>
                Velki200Agent aims to organize agent-related information in a straightforward and accessible directory format. Its category-based structure helps visitors navigate different listing types and explore relevant information resources.
              </p>
              <ul>
                <li><strong>Organized Agent Categories:</strong> Separate Sub Admin, Master Agent and Super Agent pages help visitors find category-specific information.</li>
                <li><strong>Clear Information Structure:</strong> Descriptive headings and consistent listing fields make it easier to understand what information is available.</li>
                <li><strong>Helpful Verification Guides:</strong> Educational resources about identification details and information accuracy.</li>
                <li><strong>Listing Updates and Corrections:</strong> Visitors can contact the website to report outdated or incomplete information.</li>
              </ul>
            </article>
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
