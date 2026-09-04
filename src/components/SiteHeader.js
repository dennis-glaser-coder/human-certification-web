import Link from 'next/link';

const systems = [
  ['STANDARD', 'klare Kriterien'],
  ['AUDIT', 'unabhängige Prüfung'],
  ['TRACEABILITY', 'dokumentierte Herkunft'],
  ['PUBLIC REGISTER', 'öffentlich überprüfbar'],
];

export default function SiteHeader() {
  return (
    <>
      <header className="siteHeader shell">
        <Link className="brandLockup" href="/" aria-label="Made by Humans Startseite">
          <span className="brandName">MADE BY HUMANS</span>
          <span className="brandDescriptor">Independent Certification Standard</span>
        </Link>
        <nav className="mainNav" aria-label="Hauptnavigation">
          <Link href="/standard">Standard</Link>
          <Link href="/register">Public Register</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link className="navVerify" href="/pruefen">Zertifizierung prüfen</Link>
        </nav>
      </header>
      <div className="systemRail">
        <div className="shell systemRailGrid">
          {systems.map(([term, copy]) => (
            <div key={term}>
              <strong>{term}</strong>
              <span>{copy}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
