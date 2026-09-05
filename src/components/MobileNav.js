'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="mobileNavControl">
      <button
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
          <Link href="/warum-made-by-humans" onClick={close}>Warum Made by Humans</Link>
          <Link href="/fuer-hersteller" onClick={close}>Zertifizierung</Link>
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
