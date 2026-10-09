import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Headset,
  MessageCircle,
  ShieldCheck,
  UserRound,
  Users,
} from 'lucide-react';
import Link from 'next/link';

import SiteHeader from '@/components/layout/site-header';

import { FOOTER_LINKS, SITE_COPYRIGHT_YEAR, SITE_NAME, getWhatsAppLink } from '@/lib/site-config';

// Demo content: replace with accurate, authorised information
// before publishing the website.
const masterAgents = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  code: `MA-${String(index + 1).padStart(2, '0')}`,
  name: `মাস্টার এজেন্ট ${String(index + 1).padStart(2, '0')}`,
}));

// These are placeholders for the review design, not genuine testimonials.
// Publish only authentic reviews with permission.
const reviews = [
  {
    id: 1,
    title: 'ব্যবহারের অভিজ্ঞতা',
    text: 'এখানে যাচাইকৃত ব্যবহারকারীর প্রকৃত মতামত যুক্ত করুন।',
  },
  {
    id: 2,
    title: 'তথ্য খুঁজে পাওয়ার অভিজ্ঞতা',
    text: 'বাস্তব feedback থেকে এই অংশের বক্তব্য তৈরি করুন।',
  },
  {
    id: 3,
    title: 'যোগাযোগের অভিজ্ঞতা',
    text: 'প্রকাশের আগে অনুমতি নেওয়া গ্রাহকের মতামত যোগ করুন।',
  },
  {
    id: 4,
    title: 'ওয়েবসাইট ব্যবহারের সুবিধা',
    text: 'এই placeholder-টি বাস্তব ও প্রাসঙ্গিক review দিয়ে বদলান।',
  },
  {
    id: 5,
    title: 'সেবা সম্পর্কিত মতামত',
    text: 'অনুমোদিত feedback ছাড়া কোনো rating বা testimonial প্রকাশ করবেন না।',
  },
];

const faqs = [
  {
    question: 'এই ওয়েবসাইটে কী ধরনের তথ্য পাওয়া যাবে?',
    answer:
      'ওয়েবসাইটে তালিকাভুক্ত ক্যাটাগরি, সংশ্লিষ্ট প্রোফাইলের তথ্য, যোগাযোগের বিবরণ এবং প্রয়োজনীয় গাইড পাওয়া যাবে। প্রকাশিত তথ্যের যথার্থতা ও বর্তমান অবস্থা যাচাই করে নেওয়া উচিত।',
  },
  {
    question: 'মাস্টার এজেন্ট লিস্ট কোথায় পাওয়া যাবে?',
    answer:
      'প্রধান মেনুর মাস্টার এজেন্ট লিস্ট থেকে সংশ্লিষ্ট ডিরেক্টরি পেজে যাওয়া যাবে। সেখানে প্রোফাইল ও প্রকাশিত তথ্য দেখা যাবে।',
  },
  {
    question: 'সুপার এজেন্ট লিস্ট কীভাবে দেখব?',
    answer:
      'Navbar-এর সুপার এজেন্ট লিস্ট লিংকে ক্লিক করলে সংশ্লিষ্ট পেজ খুলবে। পেজটি পরবর্তী ধাপে আলাদা route হিসেবে তৈরি করা হবে।',
  },
  {
    question: 'সাব অ্যাডমিন লিস্ট কোথায় থাকবে?',
    answer:
      'সাব অ্যাডমিন লিস্ট-এর জন্য আলাদা পেজ থাকবে। ওই পেজে প্রকাশ করা তথ্যের উৎস ও update-এর অবস্থা স্পষ্টভাবে দেখানো উচিত।',
  },
  {
    question: 'যোগাযোগের তথ্য কীভাবে যাচাই করব?',
    answer:
      'প্রকাশিত যোগাযোগের তথ্য সংশ্লিষ্ট পক্ষের অনুমোদিত উৎসের সঙ্গে মিলিয়ে নিন। কোনো নাম, পরিচয় বা নম্বর যাচাই করা না থাকলে সেটিকে যাচাইকৃত হিসেবে উপস্থাপন করা উচিত নয়।',
  },
  {
    question: 'কাস্টমার সার্ভিসের সঙ্গে কীভাবে যোগাযোগ করব?',
    answer:
      'Navbar-এর WhatsApp CTA ব্যবহার করা যাবে, যদি configuration-এ একটি বৈধ ও অনুমোদিত যোগাযোগ নম্বর বসানো থাকে।',
  },
  {
    question: 'এই ওয়েবসাইট মোবাইল থেকে ব্যবহার করা যাবে?',
    answer:
      'হ্যাঁ। ডিজাইনটি desktop, tablet ও mobile screen-এর জন্য responsive grid এবং mobile navigation ব্যবহার করে তৈরি করা হচ্ছে।',
  },
  {
    question: 'ওয়েবসাইটে নতুন তথ্য বা সংশোধনের অনুরোধ কীভাবে জানাব?',
    answer:
      'যোগাযোগ পেজের মাধ্যমে সংশোধনের অনুরোধ জানানোর ব্যবস্থা রাখা যাবে। পরিবর্তন প্রকাশের আগে তথ্যের উৎস ও যথার্থতা যাচাই করা উচিত।',
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-dot" />
                Velki 200 Agent
              </div>

              <h1>
                এজেন্ট লিস্ট ও প্রয়োজনীয়
                <br />
                <span>তথ্য এক জায়গায়</span>
              </h1>

              <p className="hero-description">
                মাস্টার এজেন্ট লিস্ট, সুপার এজেন্ট লিস্ট, সাব অ্যাডমিন লিস্ট এবং কাস্টমার সার্ভিসের
                তথ্য একটি সহজ, সুন্দর ও responsive interface-এ সাজানো হয়েছে।
              </p>

              <div className="hero-actions">
                <a
                  href={getWhatsAppLink('ওয়েবসাইট সম্পর্কে জানতে চাই।')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-primary"
                >
                  <MessageCircle size={18} />
                  WhatsApp যোগাযোগ
                </a>

                <Link
                  href="/master-agent-list"
                  className="button button-secondary hero-agent-list-button"
                >
                  Agent List দেখুন
                  <ArrowDown size={17} />
                </Link>
              </div>
            </div>

            <div className="hero-visual" aria-hidden="true">
              <div className="hero-orb" />
              <div className="hero-orbit" />

              <div className="hero-panel">
                <div className="hero-panel-top">
                  <span className="hero-panel-icon">
                    <Users size={25} />
                  </span>

                  <span className="hero-panel-label">Directory preview</span>
                </div>

                <h2>
                  প্রয়োজনীয় তথ্য,
                  <br />
                  সহজ নেভিগেশনে
                </h2>

                <p>
                  ক্যাটাগরি অনুযায়ী সাজানো ডিরেক্টরি, পরিচ্ছন্ন card design এবং সহজ page navigation।
                </p>

                <div className="hero-panel-bottom">
                  <div className="hero-mini-card">
                    <strong>Directory</strong>
                    ক্যাটাগরি ও তালিকা
                  </div>

                  <div className="hero-mini-card">
                    <strong>Support</strong>
                    যোগাযোগের তথ্য
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MASTER AGENT PREVIEW */}
        <section className="section" id="master-agents">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">MASTER AGENT DIRECTORY</p>
              <h2 className="section-title">মাস্টার এজেন্ট লিস্ট</h2>
            </div>

            <div className="agent-grid">
              {masterAgents.map(agent => (
                <article className="agent-card" key={agent.id}>
                  <div className="agent-avatar">
                    <UserRound size={22} />
                  </div>

                  <span className="agent-code">{agent.code}</span>
                  <h3>{agent.name}</h3>
                  <p>প্রোফাইলের বিস্তারিত এবং অনুমোদিত যোগাযোগের তথ্য এখানে যুক্ত হবে।</p>

                  <a
                    href={getWhatsAppLink(`আমি ${agent.code} সম্পর্কে তথ্য জানতে চাই।`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="agent-card-action"
                  >
                    যোগাযোগ করুন
                    <MessageCircle size={15} />
                  </a>
                </article>
              ))}
            </div>

            <div className="section-action">
              <Link href="/master-agent-list" className="button button-secondary">
                সম্পূর্ণ মাস্টার এজেন্ট লিস্ট
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </section>

        {/* SECONDARY DIRECTORY CATEGORIES */}
        <section className="section" id="agent-categories">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">DIRECTORY CATEGORIES</p>
              <h2 className="section-title">অন্যান্য ক্যাটাগরি</h2>
              <p className="section-description">
                প্রতিটি ক্যাটাগরির জন্য আলাদা page ও navigation রাখা হবে, যাতে ব্যবহারকারী সহজেই
                প্রয়োজনীয় বিভাগ খুঁজে পান।
              </p>
            </div>

            <div className="agent-grid category-grid">
              <article className="agent-card category-master-mobile">
                <div className="agent-avatar">
                  <UserRound size={22} />
                </div>
                <h3>মাস্টার এজেন্ট লিস্ট</h3>
                <p>মাস্টার এজেন্ট ক্যাটাগরির তালিকা ও প্রকাশিত তথ্য।</p>
                <Link href="/master-agent-list" className="agent-card-action">
                  পেজ দেখুন
                  <ArrowRight size={15} />
                </Link>
              </article>

              <article className="agent-card">
                <div className="agent-avatar">
                  <Users size={22} />
                </div>
                <h3>সুপার এজেন্ট লিস্ট</h3>
                <p>সংশ্লিষ্ট প্রোফাইলের তথ্য ও তালিকা।</p>
                <Link href="/super-agent-list" className="agent-card-action">
                  পেজ দেখুন
                  <ArrowRight size={15} />
                </Link>
              </article>

              <article className="agent-card">
                <div className="agent-avatar">
                  <BadgeCheck size={22} />
                </div>
                <h3>সাব অ্যাডমিন লিস্ট</h3>
                <p>সংশ্লিষ্ট প্রোফাইলের তথ্য ও তালিকা।</p>
                <Link href="/sub-admin-list" className="agent-card-action">
                  পেজ দেখুন
                  <ArrowRight size={15} />
                </Link>
              </article>

              <article className="agent-card">
                <div className="agent-avatar">
                  <Headset size={22} />
                </div>
                <h3>কাস্টমার সার্ভিস</h3>
                <p>যোগাযোগ ও সহায়তা সম্পর্কিত তথ্য।</p>
                <Link href="/customer-services" className="agent-card-action">
                  পেজ দেখুন
                  <ArrowRight size={15} />
                </Link>
              </article>

              <article className="agent-card">
                <div className="agent-avatar">
                  <BookOpen size={22} />
                </div>
                <h3>ব্লগ ও গাইড</h3>
                <p>তথ্য, নির্দেশনা এবং প্রয়োজনীয় নিবন্ধ।</p>
                <Link href="/blog" className="agent-card-action">
                  ব্লগ দেখুন
                  <ArrowRight size={15} />
                </Link>
              </article>

              <article className="agent-card">
                <div className="agent-avatar">
                  <ShieldCheck size={22} />
                </div>
                <h3>তথ্য ও নিরাপত্তা</h3>
                <p>তথ্য যাচাই ও গোপনীয়তা সম্পর্কিত নির্দেশনা।</p>
                <Link href="/disclaimer" className="agent-card-action">
                  বিস্তারিত
                  <ArrowRight size={15} />
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* REVIEWS */}
        <section className="section" id="reviews">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">USER FEEDBACK</p>
              <h2 className="section-title">ব্যবহারকারীদের মতামত</h2>
              <p className="section-description">
                এই অংশে প্রকৃত এবং প্রকাশের অনুমতি পাওয়া ব্যবহারকারীদের মতামত দেখানো যাবে।
              </p>
            </div>
          </div>

          <div className="review-viewport">
            <div className="review-track">
              {[0, 1].map(group => (
                <div
                  className="review-group"
                  key={group}
                  aria-hidden={group === 1 ? true : undefined}
                >
                  {reviews.map(review => (
                    <article className="review-card" key={`${group}-${review.id}`}>
                      <div className="review-card-top">
                        <div className="review-avatar">
                          <MessageCircle size={19} />
                        </div>
                        <div>
                          <strong>{review.title}</strong>
                          <span className="review-label">নমুনা কনটেন্ট</span>
                        </div>
                      </div>
                      <p>{review.text}</p>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section className="section" id="seo-content">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">INFORMATION & GUIDES</p>
              <h2 className="section-title">এজেন্ট ডিরেক্টরি সম্পর্কে বিস্তারিত</h2>
            </div>

            <article className="content-panel">
              <h3>মাস্টার এজেন্ট ও সুপার এজেন্ট লিস্ট</h3>
              <p>
                একটি সুসংগঠিত agent directory-তে প্রতিটি ক্যাটাগরির তথ্য আলাদা করে উপস্থাপন করা
                গুরুত্বপূর্ণ। মাস্টার এজেন্ট লিস্ট, সুপার এজেন্ট লিস্ট এবং সাব অ্যাডমিন লিস্টের জন্য
                পৃথক পেজ থাকলে ব্যবহারকারী সহজেই নির্দিষ্ট তালিকায় যেতে পারেন। প্রতিটি প্রোফাইলের
                পরিচয়, তথ্যের উৎস এবং সর্বশেষ update-এর বিবরণ পরিষ্কারভাবে দেখানো উচিত।
              </p>

              <h3>তথ্য যাচাই ও হালনাগাদ</h3>
              <p>
                কোনো directory-তে যোগাযোগের বিবরণ প্রকাশ করার আগে সংশ্লিষ্ট ব্যক্তির অনুমতি, পরিচয়
                এবং তথ্যের সঠিকতা যাচাই করা প্রয়োজন। পুরোনো, ভুল বা অসম্পূর্ণ তথ্য শনাক্ত হলে সেটি
                সংশোধন করা উচিত। যাচাই করা হয়নি এমন তথ্যকে verified হিসেবে চিহ্নিত করা উচিত নয়।
              </p>

              <h3>ওয়েবসাইট ব্যবহার ও গোপনীয়তা</h3>
              <p>
                ওয়েবসাইটের menu, mobile navigation এবং category links এমনভাবে সাজানো উচিত, যাতে
                desktop ও mobile উভয় ডিভাইসেই সহজে ব্যবহার করা যায়। ব্যক্তিগত তথ্য শেয়ার করার আগে
                প্রাপকের পরিচয় নিশ্চিত করুন এবং website-এর Privacy Policy ও Disclaimer পড়ে নিন।
              </p>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">FAQ</p>
              <h2 className="section-title">সচরাচর জিজ্ঞাসিত প্রশ্ন</h2>
              <p className="section-description">
                ওয়েবসাইট ব্যবহার, ক্যাটাগরি এবং তথ্য সম্পর্কে সাধারণ কিছু প্রশ্নের উত্তর।
              </p>
            </div>

            <div className="faq-list">
              {faqs.map(faq => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}</summary>
                  <div className="faq-answer">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <p className="section-eyebrow">CUSTOMER SERVICES</p>
                <h2>{SITE_NAME}</h2>
                <p>
                  যোগাযোগের তথ্য, ওয়েবসাইট সম্পর্কিত প্রশ্ন এবং প্রয়োজনীয় সহায়তার জন্য যোগাযোগ পেজ
                  ব্যবহার করুন।
                </p>
              </div>

              <a
                href={getWhatsAppLink('ওয়েবসাইট সম্পর্কে জানতে চাই।')}
                target="_blank"
                rel="noopener noreferrer"
                className="button button-primary"
              >
                <MessageCircle size={18} />
                WhatsApp যোগাযোগ
              </a>
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
              বাংলা ভাষায় তথ্য ও তালিকা উপস্থাপনের জন্য একটি responsive directory interface।
              প্রকাশিত তথ্যের যথার্থতা স্বাধীনভাবে যাচাই করুন।
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
