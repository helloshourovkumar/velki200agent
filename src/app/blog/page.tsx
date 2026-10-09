import { BookOpen, Search, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import StaticPage from '@/components/layout/static-page';

export const metadata: Metadata = {
  title: 'ব্লগ ও গাইড',
  description: 'তথ্য যাচাই, অনলাইন গোপনীয়তা এবং নিরাপদ ওয়েবসাইট ব্যবহারের সাধারণ গাইড।',
};

const articles = [
  {
    id: 'verify-information',
    category: 'তথ্য যাচাই',
    title: 'অনলাইনে তথ্য যাচাই করার উপায়',
    description: 'কোনো তথ্যের ওপর নির্ভর করার আগে উৎস, তারিখ ও প্রাসঙ্গিকতা কীভাবে যাচাই করবেন।',
    icon: Search,
  },
  {
    id: 'protect-privacy',
    category: 'গোপনীয়তা',
    title: 'অনলাইনে ব্যক্তিগত তথ্য সুরক্ষিত রাখুন',
    description: 'ব্যক্তিগত তথ্য শেয়ার করার সময় কী কী বিষয়ে সতর্ক থাকা প্রয়োজন।',
    icon: ShieldCheck,
  },
  {
    id: 'read-site-policies',
    category: 'ব্যবহারিক গাইড',
    title: 'Privacy Policy ও Disclaimer পড়ার গুরুত্ব',
    description: 'কোনো ওয়েবসাইট ব্যবহারের আগে তার নীতিমালা থেকে কী জানা যায়।',
    icon: BookOpen,
  },
];

export default function BlogPage() {
  return (
    <StaticPage
      eyebrow="BLOG & GUIDES"
      title="ব্লগ ও গাইড"
      description="তথ্য যাচাই, গোপনীয়তা এবং সচেতনভাবে ওয়েবসাইট ব্যবহারের সাধারণ নির্দেশনা।"
    >
      <div className="blog-grid">
        {articles.map(article => {
          const Icon = article.icon;

          return (
            <article className="blog-card" key={article.id}>
              <div className="directory-icon">
                <Icon size={21} />
              </div>

              <span className="blog-card-label">{article.category}</span>

              <h3>{article.title}</h3>

              <p>{article.description}</p>

              <Link href={`#${article.id}`} className="card-link">
                আর্টিকেল পড়ুন →
              </Link>
            </article>
          );
        })}
      </div>

      <div className="blog-article-list">
        <section id="verify-information">
          <h3>অনলাইনে তথ্য যাচাই করার উপায়</h3>
          <p>
            তথ্যের মূল উৎস দেখুন, প্রকাশের তারিখ পরীক্ষা করুন, স্বাধীন উৎসের সঙ্গে মিলিয়ে নিন এবং
            অস্বাভাবিক দাবি দেখলে সতর্ক থাকুন।
          </p>
        </section>

        <section id="protect-privacy">
          <h3>অনলাইনে ব্যক্তিগত তথ্য সুরক্ষিত রাখুন</h3>
          <p>
            প্রয়োজন না হলে ব্যক্তিগত নথি বা পরিচয়সংক্রান্ত তথ্য শেয়ার করবেন না। কোনো যোগাযোগের
            ঠিকানা ব্যবহার করার আগে সেটি সত্যিই সংশ্লিষ্ট পক্ষের কি না যাচাই করুন।
          </p>
        </section>

        <section id="read-site-policies">
          <h3>Privacy Policy ও Disclaimer পড়ার গুরুত্ব</h3>
          <p>
            তথ্য কীভাবে সংগ্রহ করা হয়, কোন তৃতীয় পক্ষ যুক্ত আছে এবং ওয়েবসাইটের তথ্যের সীমাবদ্ধতা
            কী—সেগুলো বুঝতে সংশ্লিষ্ট নীতিমালা পড়া প্রয়োজন।
          </p>
        </section>
      </div>
    </StaticPage>
  );
}
