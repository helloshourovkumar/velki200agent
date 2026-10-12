import { Mail, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';

import StaticPage from '@/components/layout/static-page';
import { getWhatsAppLink } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'কাস্টমার সার্ভিস',
  description:
    'ওয়েবসাইট ব্যবহার, প্রকাশিত তথ্য এবং তথ্য সংশোধন সম্পর্কে সহায়তা।',
};

const supportItems = [


  {
    icon: Mail,
    title: 'সাধারণ যোগাযোগ',
    description:
      'যোগাযোগের পদ্ধতি ও প্রকৃত সাপোর্ট তথ্য জানতে যোগাযোগ পেজ দেখুন।',
    link: { href: '/contact', label: 'যোগাযোগ পেজ দেখুন' },
  },
];

export default function CustomerServicesPage() {
  return (
    <StaticPage
      eyebrow="CUSTOMER SERVICES"
      title="কাস্টমার সার্ভিস"
      description="ওয়েবসাইট ব্যবহার ও প্রকাশিত তথ্য সম্পর্কে প্রয়োজনীয় নির্দেশনা।"
    >


      {/* Limitations */}
      <section className="support-section">
        <h3>সহায়তার সীমাবদ্ধতা</h3>
        <p>
          কোনো তৃতীয় পক্ষের পরিচয়, দাবি বা যোগাযোগের তথ্য স্বাধীনভাবে যাচাই না
          করে সেটিকে নির্ভরযোগ্য বলে ধরে নেওয়া উচিত নয়।
        </p>
      </section>

      {/* Direct Contact CTA */}
      <section className="support-section">
        <h3>সরাসরি সহায়তা প্রয়োজন?</h3>
        <p>
          যেকোনো সমস্যা বা প্রশ্নে আমাদের সাপোর্ট টিমের সাথে সাথে সাথে যোগাযোগ
          করতে পারেন।
        </p>

        <div className="support-actions">
          <a
            href={getWhatsAppLink('কাস্টমার সার্ভিস সম্পর্কে জানতে চাই।')}
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            <MessageCircle size={18} />
            WhatsApp যোগাযোগ
          </a>

          <Link href="/contact" className="button button-secondary">
            যোগাযোগ পেজ
          </Link>
        </div>
      </section>
    </StaticPage>
  );
}
