import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerTop footerTopV2">
        <div>
          <div className="footerBrand">MADE BY HUMANS</div>
          <p className="footerClaim">Ein unabhängiger Zertifizierungsstandard für nachvollziehbare menschliche Wertschöpfung.</p>
        </div>

        <div className="footerNavV2">
          <div>
            <strong>INFORMATION</strong>
            <Link href="/standard">Standard</Link>
            <Link href="/fuer-hersteller">Für Hersteller</Link>
          </div>
          <div>
            <strong>VERIFIZIERUNG</strong>
            <Link href="/register">Public Register</Link>
            <Link href="/pruefen">Zertifizierung prüfen</Link>
          </div>
        </div>
      </div>

      <div className="shell footerBottom">
        <div className="footerMeta footerMetaV2">
          <span>Independent · Transparent · Verifiable</span>
          <span>Finales Zertifizierungszeichen in Entwicklung.</span>
        </div>
      </div>
    </footer>
  );
}
