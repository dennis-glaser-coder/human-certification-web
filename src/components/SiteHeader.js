import Link from 'next/link';
import MobileNav from './MobileNav';

export default function SiteHeader() {
  return (
    <header className="siteHeader premiumSiteHeader">
      <div className="shell headerInner premiumHeaderInner">
        <Link className="brandLockup premiumBrandLockup" href="/" aria-label="Made by Humans Startseite">
          <span className="brandTextStack">
            <span className="brandName">MADE BY HUMANS</span>
            <span className="brandDescriptor">Standard für menschliche Herstellung</span>
          </span>
        </Link>

        <nav className="mainNav premiumMainNav" aria-label="Hauptnavigation">
          <Link href="/standard">Standard</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link href="/register">Register</Link>
          <Link href="/dokumente">Dokumente</Link>
          <Link href="/ueber-uns">Über uns</Link>
          <Link className="navVerify" href="/pruefen">Zertifizierung prüfen</Link>
        </nav>

        <div className="mobileHeaderActions premiumMobileHeaderActions">
          <Link className="mobileVerify" href="/pruefen">Prüfen</Link>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
