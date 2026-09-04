import Link from 'next/link';

export default function SiteHeader() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <header className="siteHeader shell">
      <Link className="brandLockup brandLockupWithSeal" href="/" aria-label="Made by Humans Startseite">
        <img
          className="brandSealTemporary"
          src={`${assetBase}/brand/made-by-humans-seal.png`}
          alt=""
          aria-hidden="true"
        />
        <span className="brandTextStack">
          <span className="brandName">MADE BY HUMANS</span>
          <span className="brandDescriptor">Human-Made Product Standard</span>
        </span>
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
