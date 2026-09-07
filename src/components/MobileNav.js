'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="mobileNavControl">
      <button
        ref={toggleRef}
        className="mobileMenuToggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        onClick={() => setOpen((current) => !current)}
      >
        <span></span>
        <span></span>
      </button>

      {open && (
        <nav id="mobile-site-menu" className="mobileMenuPanel premiumMobileMenu" aria-label="Mobile Navigation">
          <Link href="/warum-made-by-human" onClick={close}>Warum Made by Human</Link>
          <Link href="/fuer-hersteller" onClick={close}>Für Hersteller</Link>
          <Link href="/fuer-kaeufer" onClick={close}>Für Käufer</Link>
          <Link href="/register" onClick={close}>Register</Link>
          <Link href="/standard" onClick={close}>Standard</Link>
          <Link href="/pruefen" onClick={close}>Zertifizierungs-ID prüfen</Link>
          <Link href="/ueber-uns" onClick={close}>Über uns</Link>
          <Link href="/dokumente" onClick={close}>Dokumente</Link>
          <Link href="/transparenz" onClick={close}>Transparenz & Integrität</Link>
          <Link className="mobileMenuVerify" href="/fuer-hersteller#zertifizierungsanfrage" onClick={close}>Zertifizierung anfragen</Link>
        </nav>
      )}
    </div>
  );
}
