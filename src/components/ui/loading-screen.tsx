'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 900);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="loading-screen" role="status" aria-label="লোড হচ্ছে">
      <div className="loading-brand">
        <div className="loading-logo">
          <Image
            src="/logo.svg"
            alt="Velki 200 Agent"
            width={400}
            height={400}
            priority
          />
        </div>

        <p className="loading-message">লোডিং হচ্ছে...</p>

        <div className="loading-track">
          <span />
        </div>
      </div>
    </div>
  );
}
