import Link from 'next/link';
import MobileNav from './MobileNav';
import DesktopOrganizationNav from './DesktopOrganizationNav';

export default function SiteHeader() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <>
      <a className="skipLink" href="#content-start">Zum Hauptinhalt springen</a>
      <header className="siteHeader premiumSiteHeader" data-header-version="2026-09-09-logo-v4">
      <div className="shell headerInner premiumHeaderInner">
        <a className="brandLockup premiumBrandLockup" href={assetBase + '/#top'} aria-label="Made by Human Startseite – nach oben">
          <span className="brandHeaderLogoCrop" aria-hidden="true">
            <img
              className="brandHeaderLogoAsset"
              src={assetBase + '/brand/header-logo-final.png?v=20260912-spacing'}
              width="2172"
              height="724"
              alt=""
            />
          </span>
        </a>

        <nav className="mainNav premiumMainNav" aria-label="Hauptnavigation">
          <Link href="/warum-made-by-human">Warum Made by Human</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link href="/fuer-kaeufer">Für Käufer</Link>
          <Link href="/register">Register</Link>
          <Link href="/standard">Standard</Link>

          <DesktopOrganizationNav />

          <Link className="navVerify" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
        </nav>

        <div className="mobileHeaderActions premiumMobileHeaderActions">
          <Link className="mobileVerify" href="/fuer-hersteller#zertifizierungsanfrage">Anfragen</Link>
          <MobileNav />
        </div>
      </div>
      </header>
      <span id="content-start" className="contentStart" tabIndex="-1" aria-hidden="true"></span>
    </>
  );
}
