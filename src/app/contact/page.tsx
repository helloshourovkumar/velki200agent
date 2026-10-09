import { Mail } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import StaticPage from '@/components/layout/static-page';

export const metadata: Metadata = {
  title: 'যোগাযোগ',
  description: 'ওয়েবসাইট, প্রকাশিত তথ্য এবং সংশোধনের অনুরোধ সম্পর্কে যোগাযোগের তথ্য।',
};

export default function ContactPage() {
  return (
    <StaticPage
      eyebrow="CONTACT"
      title="যোগাযোগ করুন"
      description="ওয়েবসাইট সম্পর্কে প্রশ্ন, feedback অথবা তথ্য সংশোধনের অনুরোধ জানান।"
    >
      <h3>ইমেইলের মাধ্যমে যোগাযোগ</h3>
      <p>
        এখানে ওয়েবসাইট পরিচালনাকারীর সক্রিয় ও অনুমোদিত support email প্রকাশ করো। প্রকাশের আগে নিচের
        placeholder-টি নিজের প্রকৃত ইমেইল ঠিকানা দিয়ে পরিবর্তন করতে হবে।
      </p>

      <div className="contact-method">
        <span className="contact-method-icon">
          <Mail size={21} />
        </span>

        <div>
          <strong>ইমেইল সাপোর্ট</strong>
          <p>contact@your-domain.com — এটি একটি placeholder।</p>
          <a href="mailto:contact@your-domain.com">ইমেইল লিখুন</a>
        </div>
      </div>

      <h3>তথ্য সংশোধনের অনুরোধ</h3>
      <p>
        অনুরোধে সংশ্লিষ্ট পেজের ঠিকানা এবং কী তথ্য সংশোধন করা প্রয়োজন তা উল্লেখ করা যেতে পারে।
        ব্যক্তিগত বা সংবেদনশীল তথ্য অপ্রয়োজনে পাঠাবেন না।
      </p>

      <h3>অন্যান্য পেজ</h3>
      <p>
        <Link href="/privacy-policy">Privacy Policy</Link> এবং{' '}
        <Link href="/disclaimer">Disclaimer</Link> পেজে ওয়েবসাইটের নীতি সম্পর্কে আরও তথ্য পাওয়া
        যাবে।
      </p>
    </StaticPage>
  );
}
