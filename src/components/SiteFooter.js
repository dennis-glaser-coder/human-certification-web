import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="siteFooter compactFooter">
      <div className="shell compactFooterMain">
        <div className="compactFooterBrand">
          <strong>MADE BY HUMANS</strong>
          <span>Human-Made Product Standard</span>
        </div>

        <nav className="compactFooterNav" aria-label="Footer Navigation">
          <Link href="/standard">Standard</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link href="/register">Public Register</Link>
          <Link href="/pruefen">Zertifizierung prüfen</Link>
        </nav>
      </div>

      <div className="shell compactFooterMeta">
        <span>Standard · Audit · Traceability · Public Register</span>
        <span>Finales Zertifizierungszeichen in Entwicklung.</span>
      </div>
    </footer>
  );
}
