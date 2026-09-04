import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header className="siteHeader shell">
      <Link className="brandLockup" href="/" aria-label="Made by Humans Startseite">
        <span className="brandName">MADE BY HUMANS</span>
        <span className="brandDescriptor">Human-Made Product Standard</span>
      </Link>

      <nav className="mainNav" aria-label="Hauptnavigation">
        <Link href="/standard">Standard</Link>
        <Link href="/register">Public Register</Link>
        <Link href="/fuer-hersteller">Für Hersteller</Link>
        <Link className="navVerify" href="/pruefen">Zertifizierung prüfen</Link>
      </nav>
    </header>
  );
}
