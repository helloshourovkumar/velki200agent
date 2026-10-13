'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { NAV_ITEMS, SITE_NAME, getWhatsAppLink } from '@/lib/site-config';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  // Keep the page behind the mobile menu from scrolling while it is open.
  useEffect(() => {
    if (!menuOpen || !window.matchMedia('(max-width: 780px)').matches) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          href="/"
          className="brand"
          onClick={closeMenu}
          aria-label={`${SITE_NAME} হোম`}
        >
          <Image
            src="/velki.png"
            alt="Velki 200"
            width={160}
            height={50}
            priority
            className="brand-logo"
          />
        </Link>

        <nav
          id="primary-navigation"
          className={`main-nav${menuOpen ? ' is-open' : ''}`}
          aria-label="প্রধান নেভিগেশন"
        >
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <a
            href={getWhatsAppLink('কাস্টমার সার্ভিস সম্পর্কে জানতে চাই।')}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu-cta"
            onClick={closeMenu}
          >
            WhatsApp যোগাযোগ
            <ArrowUpRight size={17} />
          </a>
        </nav>

        <a
          href={getWhatsAppLink('কাস্টমার সার্ভিস সম্পর্কে জানতে চাই।')}
          target="_blank"
          rel="noopener noreferrer"
          className="button button-primary header-action"
        >
          WhatsApp যোগাযোগ
          <ArrowUpRight size={17} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen(open => !open)}
          aria-label={menuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
