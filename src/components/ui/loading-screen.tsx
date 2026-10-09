'use client';

import { Layers3 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 450);

    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="loading-screen" role="status" aria-label="লোড হচ্ছে">
      <div className="loading-brand">
        <div className="loading-logo">
          <Layers3 size={30} strokeWidth={1.8} />
        </div>

        <p className="loading-name">velki200agent.com</p>

        <p className="loading-message">আপনার জন্য প্রস্তুত হচ্ছে</p>

        <div className="loading-track">
          <span />
        </div>
      </div>
    </div>
  );
}
