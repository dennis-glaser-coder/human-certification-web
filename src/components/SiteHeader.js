import Link from 'next/link';

export default function SiteHeader() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <header className="siteHeader">
      <div className="shell headerInner">
        <Link className="brandLockup" href="/" aria-label="Made by Humans Startseite">
          <img
            className="brandSealTemporary"
            src={`${assetBase}/brand/made-by-humans-seal.png`}
            alt=""
            aria-hidden="true"
          />
          <span className="brandTextStack">
            <span className="brandName">MADE BY HUMANS</span>
            <span className="brandDescriptor">Standard für menschliche Herstellung</span>
          </span>
        </Link>

        <nav className="mainNav" aria-label="Hauptnavigation">
          <Link href="/standard">Standard</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link href="/register">Register</Link>
          <Link href="/transparenz">Transparenz</Link>
          <Link className="navVerify" href="/pruefen">ID prüfen</Link>
        </nav>
      </div>
    </header>
  );
}
