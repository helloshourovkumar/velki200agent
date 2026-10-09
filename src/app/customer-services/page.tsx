import { FileText, Mail, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import StaticPage from '@/components/layout/static-page';

export const metadata: Metadata = {
  title: 'কাস্টমার সার্ভিস',
  description: 'ওয়েবসাইট ব্যবহার, প্রকাশিত তথ্য এবং তথ্য সংশোধন সম্পর্কে সহায়তা।',
};

export default function CustomerServicesPage() {
  return (
    <StaticPage
      eyebrow="CUSTOMER SERVICES"
      title="কাস্টমার সার্ভিস"
      description="ওয়েবসাইট ব্যবহার ও প্রকাশিত তথ্য সম্পর্কে প্রয়োজনীয় নির্দেশনা।"
    >
      <div className="support-grid">
        <div className="support-card">
          <span className="contact-method-icon">
            <FileText size={22} />
          </span>
          <h3>তথ্য সম্পর্কে প্রশ্ন</h3>
          <p>
            কোনো পেজের তথ্য বুঝতে সমস্যা হলে সেই পেজের লিংকসহ যোগাযোগের মাধ্যমে প্রশ্ন জানাতে পারো।
          </p>
        </div>

        <div className="support-card">
          <span className="contact-method-icon">
            <ShieldCheck size={22} />
          </span>
          <h3>তথ্য সংশোধন</h3>
          <p>
            ভুল বা পুরোনো তথ্য শনাক্ত হলে তার উৎসসহ সংশোধনের অনুরোধ পাঠাও। সংশোধনের আগে তথ্য যাচাই
            করা প্রয়োজন।
          </p>
        </div>

        <div className="support-card">
          <span className="contact-method-icon">
            <Mail size={22} />
          </span>
          <h3>সাধারণ যোগাযোগ</h3>
          <p>যোগাযোগের পদ্ধতি ও প্রকৃত support details জানতে যোগাযোগ পেজটি দেখো।</p>
          <Link href="/contact">যোগাযোগ পেজ দেখুন →</Link>
        </div>
      </div>

      <h3>সহায়তার সীমাবদ্ধতা</h3>
      <p>
        কোনো তৃতীয় পক্ষের পরিচয়, দাবি বা যোগাযোগের তথ্য স্বাধীনভাবে যাচাই না করে সেটিকে নির্ভরযোগ্য
        বলে ধরে নেওয়া উচিত নয়।
      </p>
    </StaticPage>
  );
}
