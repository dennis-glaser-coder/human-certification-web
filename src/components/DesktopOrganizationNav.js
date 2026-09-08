'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function DesktopOrganizationNav() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);

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
        <span>Mehr</span>
        <span className="desktopNavChevron" aria-hidden="true"></span>
      </button>

      {open && (
        <div className="desktopNavMenuPanel" role="menu">
          <Link href="/ueber-uns" role="menuitem" onClick={close}>Über uns</Link>
          <Link href="/dokumente" role="menuitem" onClick={close}>Dokumente</Link>
          <Link href="/transparenz" role="menuitem" onClick={close}>Transparenz & Integrität</Link>
          <Link href="/verfahren" role="menuitem" onClick={close}>Beschwerden & Einsprüche</Link>
        </div>
      )}
    </div>
  );
}
