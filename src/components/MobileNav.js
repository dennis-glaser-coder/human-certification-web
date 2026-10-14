'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

function placeBelowHeader() {
  const header = document.querySelector('.premiumSiteHeader');
  if (!header) return;
  const bottom = Math.max(0, Math.round(header.getBoundingClientRect().bottom));
  document.documentElement.style.setProperty('--mobile-menu-top', bottom + 'px');
}

export default function MobileNav({ lang = 'de' }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const close = () => setOpen(false);
  const isEn = lang === 'en';

  useEffect(() => {
    if (!open) return undefined;
    const root = document.documentElement;
    placeBelowHeader();
    root.classList.add('menu-open');

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false);
        window.requestAnimationFrame(() => toggleRef.current?.focus());
      }
    }

    function onResize() {
      if (window.innerWidth > 1200) setOpen(false);
      else placeBelowHeader();
    }

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      root.classList.remove('menu-open');
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <div className="mobileNavControl">
      <button
        ref={toggleRef}
        className="mobileMenuToggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        aria-label={open ? (isEn ? 'Close menu' : 'Menü schließen') : (isEn ? 'Open menu' : 'Menü öffnen')}
        onClick={() => setOpen((current) => !current)}
      >
        <span></span>
        <span></span>
      </button>

      <button
        className="mobileMenuBackdrop"
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        data-open={open}
        onClick={close}
      ></button>

      {/* Stays mounted so it can slide open and closed; inert keeps it out of reach while closed. */}
      <nav id="mobile-site-menu" className="mobileMenuPanel premiumMobileMenu" aria-label={isEn ? 'Mobile navigation' : 'Mobile Navigation'} data-open={open} inert={!open}>
        <Link href={isEn ? '/en/why-made-by-human' : '/warum-made-by-human'} onClick={close}>{isEn ? 'Why Made by Human' : 'Warum Made by Human'}</Link>
        <Link href={isEn ? '/en/for-manufacturers' : '/fuer-hersteller'} onClick={close}>{isEn ? 'For manufacturers' : 'Für Hersteller'}</Link>
        <Link href={isEn ? '/en/for-buyers' : '/fuer-kaeufer'} onClick={close}>{isEn ? 'For buyers' : 'Für Käufer'}</Link>
        <Link href={isEn ? '/en/register' : '/register'} onClick={close}>Register</Link>
        <Link href={isEn ? '/en/standard' : '/standard'} onClick={close}>Standard</Link>
        <Link href={isEn ? '/en/verify' : '/pruefen'} onClick={close}>{isEn ? 'Verify certification ID' : 'Zertifizierungs-ID prüfen'}</Link>
        <Link href={isEn ? '/en/about' : '/ueber-uns'} onClick={close}>{isEn ? 'About us' : 'Über uns'}</Link>
        {!isEn && <Link href="/dokumente" onClick={close}>Dokumente</Link>}
        {!isEn && <Link href="/transparenz" onClick={close}>Transparenz & Integrität</Link>}
        {isEn && <Link href="/impressum" onClick={close}>Legal notice</Link>}
        <Link className="mobileMenuVerify" href={isEn ? '/en/for-manufacturers#certification-request' : '/fuer-hersteller#zertifizierungsanfrage'} onClick={close}>{isEn ? 'Request certification' : 'Zertifizierung anfragen'}</Link>
      </nav>
    </div>
  );
}
