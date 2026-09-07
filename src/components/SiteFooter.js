import Link from 'next/link';

export default function SiteFooter() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <footer className="siteFooter premiumFooter">
      <div className="shell premiumFooterTop">
        <div className="premiumFooterBrand">
          <div className="footerLogoField"><img className="footerMasterLogoAsset" src={assetBase + '/brand/made-by-human-logo.png'} alt="Made by Human – Verified Human Production" /></div>
          <p>Zertifizierung für nachweisbar menschliche Herstellung.</p>
        </div>

        <nav className="premiumFooterNav" aria-label="Footer Navigation">
          <div>
            <span>STANDARD</span>
            <Link href="/standard">Kriterien</Link>
            <Link href="/dokumente">Dokumente</Link>
            <Link href="/markennutzung">Markennutzung</Link>
            <Link href="/leitfaden/nachweise">Prüfnachweise</Link>
            <Link href="/leitfaden/zertifizierungsumfang">Zertifizierungsumfang</Link>
          </div>
          <div>
            <span>VERIFIZIERUNG</span>
            <Link href="/register">Öffentliches Register</Link>
            <Link href="/pruefen">Zertifizierungs-ID prüfen</Link>
            <Link href="/fuer-kaeufer">Für Käufer</Link>
            <Link href="/fuer-hersteller">Für Hersteller</Link>
            <Link href="/warum-made-by-human">Warum Made by Human?</Link>
          </div>
          <div>
            <span>ORGANISATION</span>
            <Link href="/ueber-uns">Über Made by Human</Link>
            <Link href="/transparenz">Transparenz & Integrität</Link>
            <Link href="/verfahren">Beschwerden & Einsprüche</Link>
          </div>
        </nav>
      </div>

      <div className="shell premiumFooterBottom">
        <span>STANDARD · PRÜFUNG · NACHVOLLZIEHBARKEIT · ÖFFENTLICHES REGISTER</span>
        <span>Made by Human</span>
      </div>
    </footer>
  );
}
