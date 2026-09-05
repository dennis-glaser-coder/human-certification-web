import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="siteFooter premiumFooter">
      <div className="shell premiumFooterTop">
        <div className="premiumFooterBrand">
          <strong>MADE BY HUMANS</strong>
          <p>Standard für nachweisbar menschliche Herstellung.</p>
        </div>

        <nav className="premiumFooterNav" aria-label="Footer Navigation">
          <div>
            <span>STANDARD</span>
            <Link href="/standard">Kriterien</Link>
            <Link href="/dokumente">Dokumente</Link>
            <Link href="/markennutzung">Markennutzung</Link>
          </div>
          <div>
            <span>VERIFIZIERUNG</span>
            <Link href="/register">Öffentliches Register</Link>
            <Link href="/pruefen">Zertifizierungs-ID prüfen</Link>
            <Link href="/fuer-hersteller">Für Hersteller</Link>
          </div>
          <div>
            <span>ORGANISATION</span>
            <Link href="/ueber-uns">Über Made by Humans</Link>
            <Link href="/transparenz">Transparenz & Integrität</Link>
            <Link href="/verfahren">Beschwerden & Einsprüche</Link>
          </div>
        </nav>
      </div>

      <div className="shell premiumFooterBottom">
        <span>STANDARD · PRÜFUNG · NACHVOLLZIEHBARKEIT · ÖFFENTLICHES REGISTER</span>
        <span>Made by Humans</span>
      </div>
    </footer>
  );
}
