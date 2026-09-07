import Link from 'next/link';
import MobileNav from './MobileNav';

export default function SiteHeader() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <header className="siteHeader premiumSiteHeader">
      <div className="shell headerInner premiumHeaderInner">
        <Link className="brandLockup premiumBrandLockup" href="/#top" aria-label="Made by Human Startseite – nach oben">
          <span className="brandTextStack">
            <img className="brandWordmarkAsset" src={assetBase + '/brand/made-by-human-wordmark.png'} alt="Made by Human" />
            <span className="brandDescriptor">Zertifizierung für menschliche Herstellung</span>
          </span>
        </Link>

        <nav className="mainNav premiumMainNav" aria-label="Hauptnavigation">
          <Link href="/warum-made-by-human">Warum Made by Human</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link href="/fuer-kaeufer">Für Käufer</Link>
          <Link href="/register">Register</Link>
          <Link href="/standard">Standard</Link>

          <details className="desktopNavDropdown">
            <summary>Organisation</summary>
            <div className="desktopNavDropdownPanel">
              <Link href="/ueber-uns">Über uns</Link>
              <Link href="/dokumente">Dokumente</Link>
              <Link href="/transparenz">Transparenz & Integrität</Link>
              <Link href="/verfahren">Beschwerden & Einsprüche</Link>
            </div>
          </details>

          <Link className="navVerify" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
        </nav>

        <div className="mobileHeaderActions premiumMobileHeaderActions">
          <Link className="mobileVerify" href="/fuer-hersteller#zertifizierungsanfrage">Anfragen</Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
