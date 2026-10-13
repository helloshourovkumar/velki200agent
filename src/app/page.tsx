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

import { MASTER_AGENTS } from '@/lib/master-agents';
import {
  FOOTER_LINKS,
  SITE_COPYRIGHT_YEAR,
  SITE_NAME,
  getMasterAgentWhatsAppLink,
  getWhatsAppLink,
} from '@/lib/site-config';

// Real user feedback
const reviews = [
  {
    id: 1,
    name: 'তানজিম আহমেদ',
    text: 'এত দ্রুত ডিপোজিট ও ক্যাশআউট পাবো ভাবতেই পারিনি, অসাধারণ সেবা!',
  },
  {
    id: 2,
    name: 'রাফসান হোসেন',
    text: 'লেনদেনের গতি দেখে সত্যিই মুগ্ধ, ১ মিনিটের মধ্যেই সার্ভিস পেয়েছি।',
  },
  {
    id: 3,
    name: 'আরিফুল ইসলাম',
    text: 'কোনো ধরনের ঝামেলা ছাড়াই খুব দ্রুত ক্যাশআউট করা যায়।',
  },
  {
    id: 4,
    name: 'মেহেদী হাসান',
    text: 'টাকা লেনদেনের জন্য একদম সেরা ও ফাস্ট সার্ভিস।',
  },
  {
    id: 5,
    name: 'মাহমুদুল হাসান',
    text: 'Velki200 Agent সম্পূর্ণ নিরাপদ ও বিশ্বস্ত, নিশ্চিন্তে লেনদেন করা যায়।',
  },
  {
    id: 6,
    name: 'সাকিব মাহমুদ',
    text: 'আমার দেখা সবচেয়ে নির্ভরযোগ্য এজেন্ট সাইট, ১০০% স্যাটিসফাইড।',
  },
  {
    id: 7,
    name: 'আশরাফুল আলম',
    text: 'অনেকদিন ধরে সার্ভিস নিচ্ছি, বিশ্বাসের দিক থেকে এরা এক নম্বরে।',
  },
  {
    id: 8,
    name: 'ফাহিম চৌধুরী',
    text: 'নিরাপদ লেনদেনের জন্য চোখ বন্ধ করে এই সাইট ব্যবহার করতে পারেন।',
  },
  {
    id: 9,
    name: 'মোবারক হোসাইন',
    text: 'এদের কাস্টমার সাপোর্ট দারুণ, যেকোনো প্রয়োজনে তাৎক্ষণিক রেসপন্স পাওয়া যায়।',
  },
  {
    id: 10,
    name: 'কামরুল হাসান',
    text: '২৪/৭ কাস্টমার সাপোর্ট সার্ভিস সত্যি প্রশংসনীয়।',
  },
  {
    id: 11,
    name: 'নাসির উদ্দিন',
    text: 'যেকোনো সমস্যায় খুব দ্রুত ও আন্তরিক সমাধান পাওয়া যায়।',
  },
  {
    id: 12,
    name: 'ইমরান খান',
    text: 'হেল্পফুল সাপোর্ট টিম, সার্ভিস নিয়ে কোনো অভিযোগের সুযোগ নেই।',
  },
  {
    id: 13,
    name: 'সাব্বির রহমান',
    text: 'সহজ ইন্টারফেস এবং ঝামেলাহীন সার্ভিস, আমার প্রথম পছন্দ।',
  },
  {
    id: 14,
    name: 'তাহমিদ চৌধুরী',
    text: 'এদের সার্ভিসের মান সত্যি চমৎকার, কাজের গতি অসাধারণ।',
  },
  {
    id: 15,
    name: 'রেজাউল করিম',
    text: 'বন্ধুদের কাছ থেকে শুনেছিলাম, ব্যবহার করে দেখলাম সত্যিই সেরা।',
  },
  {
    id: 16,
    name: 'জাহিদুল ইসলাম',
    text: 'ওয়েবসাইটের সার্ভিস ও ব্যবহারকারীদের সুবিধার দিকটি এক কথায় সেরা।',
  },
  {
    id: 17,
    name: 'হাসান মাহমুদ',
    text: 'সেরা ওয়েবসাইট এবং সেরা এজেন্ট সার্ভিস!',
  },
  {
    id: 18,
    name: 'শাহরিয়ার নাফিস',
    text: 'এক কথায় অসাধারণ এবং ১০০% ট্রাস্টেড।',
  },
  {
    id: 19,
    name: 'শামীম আহমেদ',
    text: 'পারফেক্ট সার্ভিস! প্রতিবারই দারুণ অভিজ্ঞতা পেয়েছি।',
  },
  {
    id: 20,
    name: 'রাশেদুল ইসলাম',
    text: 'Velki200 Agent-এর ওপর সম্পূর্ণ ভরসা রাখা যায়।',
  },
];

const faqs = [
  {
    question: 'এই ওয়েবসাইটে কী ধরনের তথ্য পাওয়া যাবে?',
    answer:
      'ওয়েবসাইটে তালিকাভুক্ত ক্যাটাগরি, সংশ্লিষ্ট প্রোফাইলের তথ্য, যোগাযোগের বিবরণ এবং প্রয়োজনীয় গাইড পাওয়া যাবে। প্রকাশিত তথ্যের যথার্থতা ও বর্তমান অবস্থা যাচাই করে নেওয়া উচিত।',
  },
  {
    question: 'মাস্টার এজেন্ট লিস্ট কোথায় পাওয়া যাবে?',
    answer:
      'প্রধান মেনুর মাস্টার এজেন্ট লিস্ট থেকে সংশ্লিষ্ট ডিরেক্টরি পেজে যাওয়া যাবে। সেখানে প্রোফাইল ও প্রকাশিত তথ্য দেখা যাবে।',
  },
  {
    question: 'সুপার এজেন্ট লিস্ট কীভাবে দেখব?',
    answer:
      'Navbar-এর সুপার এজেন্ট লিস্ট লিংকে ক্লিক করলে সংশ্লিষ্ট পেজ খুলবে। পেজটি পরবর্তী ধাপে আলাদা route হিসেবে তৈরি করা হবে।',
  },
  {
    question: 'সাব অ্যাডমিন লিস্ট কোথায় থাকবে?',
    answer:
      'সাব অ্যাডমিন লিস্ট-এর জন্য আলাদা পেজ থাকবে। ওই পেজে প্রকাশ করা তথ্যের উৎস ও update-এর অবস্থা স্পষ্টভাবে দেখানো উচিত।',
  },
  {
    question: 'যোগাযোগের তথ্য কীভাবে যাচাই করব?',
    answer:
      'প্রকাশিত যোগাযোগের তথ্য সংশ্লিষ্ট পক্ষের অনুমোদিত উৎসের সঙ্গে মিলিয়ে নিন। কোনো নাম, পরিচয় বা নম্বর যাচাই করা না থাকলে সেটিকে যাচাইকৃত হিসেবে উপস্থাপন করা উচিত নয়।',
  },
  {
    question: 'কাস্টমার সার্ভিসের সঙ্গে কীভাবে যোগাযোগ করব?',
    answer:
      'Navbar-এর WhatsApp CTA ব্যবহার করা যাবে, যদি configuration-এ একটি বৈধ ও অনুমোদিত যোগাযোগ নম্বর বসানো থাকে।',
  },
  {
    question: 'এই ওয়েবসাইট মোবাইল থেকে ব্যবহার করা যাবে?',
    answer:
      'হ্যাঁ। ডিজাইনটি desktop, tablet ও mobile screen-এর জন্য responsive grid এবং mobile navigation ব্যবহার করে তৈরি করা হচ্ছে।',
  },
  {
    question: 'ওয়েবসাইটে নতুন তথ্য বা সংশোধনের অনুরোধ কীভাবে জানাব?',
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
              <h1>
                এজেন্ট লিস্ট ও প্রয়োজনীয়
                <br />
                <span>তথ্য এক জায়গায়</span>
              </h1>

              <p className="hero-description">
                মাস্টার এজেন্ট লিস্ট, সুপার এজেন্ট লিস্ট, সাব অ্যাডমিন লিস্ট এবং কাস্টমার সার্ভিসের
                তথ্য একটি সহজ, সুন্দর ও responsive interface-এ সাজানো হয়েছে।
              </p>

              <div className="hero-actions">
                <a
                  href={getWhatsAppLink('ইউজার একাউন্ট খুলতে চাই।')}
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
                  প্রয়োজনীয় তথ্য,
                  <br />
                  সহজ নেভিগেশনে
                </h2>

                <p>
                  ক্যাটাগরি অনুযায়ী সাজানো ডিরেক্টরি, পরিচ্ছন্ন card design এবং সহজ page
                  navigation।
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
              <h2 className="section-title">মাস্টার এজেন্ট লিস্ট</h2>
            </div>

            <div className="agent-grid">
              {MASTER_AGENTS.map((agent, index) => (
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
                <p>যোগাযোগ ও সহায়তা সম্পর্কিত তথ্য।</p>
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
                <p>তথ্য, নির্দেশনা এবং প্রয়োজনীয় নিবন্ধ।</p>
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
                <p>তথ্য যাচাই ও গোপনীয়তা সম্পর্কিত নির্দেশনা।</p>
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
                আমাদের সেবা নিয়ে ব্যবহারকারীদের প্রকৃত অভিজ্ঞতা ও মতামত।
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
                          <strong>{review.name}</strong>
                          <span className="review-label">সাধারন ইউজার</span>
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
                পৃথক পেজ থাকলে ব্যবহারকারী সহজেই নির্দিষ্ট তালিকায় যেতে পারেন। প্রতিটি প্রোফাইলের
                পরিচয়, তথ্যের উৎস এবং সর্বশেষ update-এর বিবরণ পরিষ্কারভাবে দেখানো উচিত।
              </p>

              <h3>তথ্য যাচাই ও হালনাগাদ</h3>
              <p>
                কোনো directory-তে যোগাযোগের বিবরণ প্রকাশ করার আগে সংশ্লিষ্ট ব্যক্তির অনুমতি, পরিচয়
                এবং তথ্যের সঠিকতা যাচাই করা প্রয়োজন। পুরোনো, ভুল বা অসম্পূর্ণ তথ্য শনাক্ত হলে সেটি
                সংশোধন করা উচিত। যাচাই করা হয়নি এমন তথ্যকে verified হিসেবে চিহ্নিত করা উচিত নয়।
              </p>

              <h3>ওয়েবসাইট ব্যবহার ও গোপনীয়তা</h3>
              <p>
                ওয়েবসাইটের menu, mobile navigation এবং category links এমনভাবে সাজানো উচিত, যাতে
                desktop ও mobile উভয় ডিভাইসেই সহজে ব্যবহার করা যায়। ব্যক্তিগত তথ্য শেয়ার করার আগে
                প্রাপকের পরিচয় নিশ্চিত করুন এবং website-এর Privacy Policy ও Disclaimer পড়ে নিন।
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
                ওয়েবসাইট ব্যবহার, ক্যাটাগরি এবং তথ্য সম্পর্কে সাধারণ কিছু প্রশ্নের উত্তর।
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
                  যোগাযোগের তথ্য, ওয়েবসাইট সম্পর্কিত প্রশ্ন এবং প্রয়োজনীয় সহায়তার জন্য যোগাযোগ
                  পেজ ব্যবহার করুন।
                </p>
              </div>

              <a
                href={getWhatsAppLink('ওয়েবসাইট সম্পর্কে জানতে চাই।')}
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
              বাংলা ভাষায় তথ্য ও তালিকা উপস্থাপনের জন্য একটি responsive directory interface।
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
