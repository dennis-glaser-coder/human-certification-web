import Link from 'next/link';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/madebyhuman.verify/',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.4" cy="6.7" r="1.05" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/made-by-human-org/',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="8" cy="8.25" r="1.2" fill="currentColor" />
        <path d="M7 10.7h2v6.3H7zM11 10.7h1.95v.87c.8-.78 1.63-1.12 2.66-1.12 2.05 0 3.39 1.34 3.39 3.86V17h-2.04v-2.46c0-1.49-.51-2.2-1.58-2.2-1.17 0-1.78.79-1.78 2.38V17H11z" fill="currentColor" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <footer className="siteFooter premiumFooter">
      <div className="shell premiumFooterTop">
        <div className="premiumFooterBrand">
          <div className="footerLogoField">
            <img className="footerMasterLogoAsset" src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} width="1001" height="1023" loading="lazy" alt="Made by Human – Verified Human Production" />
          </div>
          <p>Zertifizierung für nachweisbar menschliche Herstellung.</p>
          <div
            aria-label="Made by Human auf Social Media"
            style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '16px' }}
          >
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Made by Human auf ${label}`}
                title={label}
                style={{
                  width: '36px',
                  height: '36px',
                  border: '1px solid rgba(243,240,232,.28)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#F3F0E8',
                  textDecoration: 'none',
                  borderRadius: '50%',
                }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <nav className="premiumFooterNav premiumFooterNavDesktop" aria-label="Footer Navigation">
          <div>
            <span>STANDARD</span>
            <Link href="/standard">Kriterien</Link>
            <Link href="/wissen">Wissen & Ratgeber</Link>
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
            <Link href="/handarbeit-siegel">Handarbeit-Siegel</Link>
            <Link href="/handarbeit-zertifizieren">Handarbeit zertifizieren</Link>
            <Link href="/zertifizierung">Zertifizierung nach Produktart</Link>
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
              <Link href="/wissen">Wissen & Ratgeber</Link>
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
              <Link href="/handarbeit-siegel">Handarbeit-Siegel</Link>
              <Link href="/handarbeit-zertifizieren">Handarbeit zertifizieren</Link>
              <Link href="/zertifizierung">Zertifizierung nach Produktart</Link>
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
