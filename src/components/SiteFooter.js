import Link from 'next/link';

export default function SiteFooter() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <footer className="siteFooter premiumFooter">
      <div className="shell premiumFooterTop">
        <div className="premiumFooterBrand">
          <div className="footerLogoField">
            {/* Reuse the exact master artwork, adding 45 source pixels (~5px on desktop)
                only in the empty band between the wordmark and the seal. */}
            <svg className="footerMasterLogoAsset" viewBox="0 0 1001 1023" width="1001" height="1023" role="img" aria-label="Made by Human – Verified Human Production">
              <defs>
                <clipPath id="footerWordmarkClip"><rect width="1001" height="127" /></clipPath>
                <clipPath id="footerSealClip"><rect y="172" width="1001" height="851" /></clipPath>
              </defs>
              <image href={assetBase + '/brand/made-by-human-logo.webp'} width="1001" height="978" clipPath="url(#footerWordmarkClip)" />
              <image href={assetBase + '/brand/made-by-human-logo.webp'} y="45" width="1001" height="978" clipPath="url(#footerSealClip)" />
            </svg>
          </div>
          <p>Zertifizierung für nachweisbar menschliche Herstellung.</p>
        </div>

        <nav className="premiumFooterNav premiumFooterNavDesktop" aria-label="Footer Navigation">
          <div>
            <span>STANDARD</span>
            <Link href="/standard">Kriterien</Link>
            <Link href="/dokumente">Dokumente</Link>
            <Link href="/markennutzung">Markennutzung</Link>
            <Link href="/leitfaden/nachweise">Prüfnachweise</Link>
            <Link href="/leitfaden/zertifizierungsumfang">Was wird zertifiziert?</Link>
          </div>
          <div>
            <span>PRÜFEN</span>
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
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </nav>

        <nav className="premiumFooterNavMobile" aria-label="Footer Navigation mobil">
          <details>
            <summary>Standard</summary>
            <div>
              <Link href="/standard">Kriterien</Link>
              <Link href="/dokumente">Dokumente</Link>
              <Link href="/markennutzung">Markennutzung</Link>
              <Link href="/leitfaden/nachweise">Prüfnachweise</Link>
              <Link href="/leitfaden/zertifizierungsumfang">Was wird zertifiziert?</Link>
            </div>
          </details>
          <details>
            <summary>Prüfen</summary>
            <div>
              <Link href="/register">Öffentliches Register</Link>
              <Link href="/pruefen">Zertifizierungs-ID prüfen</Link>
              <Link href="/fuer-kaeufer">Für Käufer</Link>
              <Link href="/fuer-hersteller">Für Hersteller</Link>
              <Link href="/warum-made-by-human">Warum Made by Human?</Link>
            </div>
          </details>
          <details>
            <summary>Organisation</summary>
            <div>
              <Link href="/ueber-uns">Über Made by Human</Link>
              <Link href="/transparenz">Transparenz & Integrität</Link>
              <Link href="/verfahren">Beschwerden & Einsprüche</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </details>
        </nav>
      </div>

      <div className="shell premiumFooterBottom">
        <span>STANDARD · PRÜFUNG · KLARE REGELN · ÖFFENTLICHES REGISTER</span>
        <div className="footerLegalMeta">
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <span>Made by Human</span>
        </div>
      </div>
    </footer>
  );
}
