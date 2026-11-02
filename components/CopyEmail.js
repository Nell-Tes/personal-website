'use client';

import { useState } from 'react';

// Copies the email address to the clipboard and briefly confirms it.
export default function CopyEmail({ email, className = '', label = 'Copy', copiedLabel = 'Copied', icon = null }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button type="button" onClick={copy} className={className} aria-live="polite" data-copy-email={email}>
      {icon}
      <span>{copied ? copiedLabel : label}</span>
    </button>
  );
}
