import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="shell footerGrid">
        <div>
          <div className="footerMark">H</div>
          <p className="footerClaim">Ein Standardprojekt für überprüfbar menschlich gefertigte physische Produkte.</p>
        </div>
        <div className="footerLinks">
          <Link href="/standard">Standard</Link>
          <Link href="/register">Register</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link href="/pruefen">Zertifizierung prüfen</Link>
        </div>
        <div className="footerMeta">
          <p>Arbeitsversion 0.1</p>
          <p>Markenname & finales Siegel noch offen.</p>
        </div>
      </div>
    </footer>
  );
}
