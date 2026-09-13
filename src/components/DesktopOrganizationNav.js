'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function DesktopOrganizationNav({ lang = 'de' }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const isEn = lang === 'en';

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    function onPointerDown(event) {
      if (open && wrapRef.current && !wrapRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function onKeyDown(event) {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        window.requestAnimationFrame(() => buttonRef.current?.focus());
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="desktopNavMenu">
      <button
        ref={buttonRef}
        className="desktopNavMenuTrigger"
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{isEn ? 'More' : 'Mehr'}</span>
        <span className="desktopNavChevron" aria-hidden="true"></span>
      </button>

      {open && (
        <div className="desktopNavMenuPanel" role="menu">
          <Link href={isEn ? '/en/about' : '/ueber-uns'} role="menuitem" onClick={close}>{isEn ? 'About us' : 'Über uns'}</Link>
          {isEn ? null : <Link href="/dokumente" role="menuitem" onClick={close}>Dokumente</Link>}
          {isEn ? null : <Link href="/transparenz" role="menuitem" onClick={close}>Transparenz & Integrität</Link>}
          {isEn ? null : <Link href="/verfahren" role="menuitem" onClick={close}>Beschwerden & Einsprüche</Link>}
          {isEn ? <Link href="/impressum" role="menuitem" onClick={close}>Legal notice</Link> : null}
        </div>
      )}
    </div>
  );
}
