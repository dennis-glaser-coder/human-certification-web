import Link from 'next/link';
import MobileNav from './MobileNav';
import DesktopOrganizationNav from './DesktopOrganizationNav';

export default function SiteHeader() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <>
      <a className="skipLink" href="#content-start">Zum Hauptinhalt springen</a>
      <header className="siteHeader premiumSiteHeader">
      <div className="shell headerInner premiumHeaderInner">
        <Link className="brandLockup premiumBrandLockup" href="/#top" aria-label="Made by Human Startseite – nach oben">
          <span className="brandTextStack">
            <img className="brandMasterLogoAsset" src={assetBase + '/brand/made-by-human-logo.webp'} width="1085" height="819" alt="Made by Human – Verified Human Production" />
            <span className="brandDescriptor">Zertifizierung für menschliche Herstellung</span>
          </span>
        </Link>

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
