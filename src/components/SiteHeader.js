import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="siteHeader shell">
      <Link className="brandLockup" href="/" aria-label="Startseite">
        <span className="brandSeal" aria-hidden="true"><span>H</span></span>
        <span className="brandWords">
          <strong>HUMAN CERTIFICATION</strong>
          <small>WORKING TITLE · STANDARD PROJECT</small>
        </span>
      </Link>
      <nav className="mainNav" aria-label="Hauptnavigation">
        <Link href="/standard">Standard</Link>
        <Link href="/register">Register</Link>
        <Link href="/fuer-hersteller">Für Hersteller</Link>
        <Link className="navVerify" href="/pruefen">Siegel prüfen</Link>
      </nav>
    </header>
  );
}
