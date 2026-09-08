'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DesktopOrganizationNav() {
  const detailsRef = useRef(null);
  const summaryRef = useRef(null);

  function close() {
    if (detailsRef.current) detailsRef.current.open = false;
  }

  useEffect(() => {
    function onPointerDown(event) {
      const details = detailsRef.current;
      if (details?.open && !details.contains(event.target)) {
        details.open = false;
      }
    }

    function onKeyDown(event) {
      if (event.key === 'Escape' && detailsRef.current?.open) {
        detailsRef.current.open = false;
        summaryRef.current?.focus();
      }
    }

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <details ref={detailsRef} className="desktopNavDropdown">
      <summary ref={summaryRef}>Organisation</summary>
      <div className="desktopNavDropdownPanel">
        <Link href="/ueber-uns" onClick={close}>Über uns</Link>
        <Link href="/dokumente" onClick={close}>Dokumente</Link>
        <Link href="/transparenz" onClick={close}>Transparenz & Integrität</Link>
        <Link href="/verfahren" onClick={close}>Beschwerden & Einsprüche</Link>
      </div>
    </details>
  );
}
