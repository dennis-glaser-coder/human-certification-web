import Link from 'next/link';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/madebyhuman.verify/',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="instagramFooterGradient" x1="2" y1="22" x2="22" y2="2" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFDC80" />
            <stop offset="0.22" stopColor="#F77737" />
            <stop offset="0.46" stopColor="#FD1D1D" />
            <stop offset="0.68" stopColor="#C13584" />
            <stop offset="0.84" stopColor="#833AB4" />
            <stop offset="1" stopColor="#405DE6" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#instagramFooterGradient)" />
        <rect x="5.2" y="5.2" width="13.6" height="13.6" rx="4.3" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.3" fill="none" stroke="#FFFFFF" strokeWidth="1.8" />
        <circle cx="17.15" cy="6.9" r="1.05" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/made-by-human-org/',
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
        <rect x="1" y="1" width="22" height="22" rx="2.5" fill="#0A66C2" />
        <circle cx="7.15" cy="8" r="1.35" fill="#FFFFFF" />
        <path d="M5.95 10.25h2.4v7.65h-2.4z" fill="#FFFFFF" />
        <path d="M10.25 10.25h2.3v1.05h.03c.32-.61 1.1-1.25 2.27-1.25 2.43 0 2.88 1.6 2.88 3.68v4.17h-2.4v-3.7c0-.88-.02-2.02-1.23-2.02-1.23 0-1.42.96-1.42 1.95v3.77h-2.43z" fill="#FFFFFF" />
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
                  width: '40px',
                  height: '40px',
                  border: '1px solid rgba(243,240,232,.22)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
