import Link from 'next/link';
import MobileNav from './MobileNav';

export default function SiteHeader() {
  return (
    <header className="siteHeader premiumSiteHeader">
      <div className="shell headerInner premiumHeaderInner">
        <Link className="brandLockup premiumBrandLockup" href="/" aria-label="Made by Humans Startseite">
          <span className="brandTextStack">
            <span className="brandName">MADE BY HUMANS</span>
            <span className="brandDescriptor">Zertifizierung für menschliche Herstellung</span>
          </span>
        </Link>

        <nav className="mainNav premiumMainNav" aria-label="Hauptnavigation">
          <Link href="/warum-made-by-humans">Warum Made by Humans</Link>
          <Link href="/fuer-hersteller">Zertifizierung</Link>
          <Link href="/fuer-kaeufer">Für Käufer</Link>
          <Link href="/register">Register</Link>
          <Link href="/standard">Standard</Link>
          <Link href="/ueber-uns">Über uns</Link>
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
