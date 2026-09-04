import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerTop">
        <div>
          <div className="footerBrand">MADE BY HUMANS</div>
          <p className="footerClaim">Ein moderner Zertifizierungsstandard für nachvollziehbare menschliche Wertschöpfung.</p>
        </div>
        <div className="footerSystem">
          <div><strong>STANDARD</strong><span>klare Kriterien</span></div>
          <div><strong>AUDIT</strong><span>unabhängige Prüfung</span></div>
          <div><strong>TRACEABILITY</strong><span>dokumentierte Herkunft</span></div>
          <div><strong>PUBLIC REGISTER</strong><span>öffentlich überprüfbar</span></div>
        </div>
      </div>
      <div className="shell footerBottom">
        <div className="footerLinks">
          <Link href="/standard">Standard</Link>
          <Link href="/register">Public Register</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link href="/pruefen">Zertifizierung prüfen</Link>
        </div>
        <div className="footerMeta">
          <span>Arbeitsversion 0.1</span>
          <span>Finales Zertifizierungszeichen noch offen.</span>
        </div>
      </div>
    </footer>
  );
}
