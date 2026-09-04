import Link from 'next/link';

export default function SiteFooter() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <footer className="siteFooter">
      <div className="shell footerMain">
        <div className="footerBrand">
          <img
            className="footerSealTemporary"
            src={assetBase + '/brand/made-by-humans-seal.png'}
            alt=""
            aria-hidden="true"
            width="46"
            height="46"
          />
          <div>
            <strong>MADE BY HUMANS</strong>
            <span>Standard für menschliche Herstellung</span>
          </div>
        </div>

        <div className="footerNav">
          <div>
            <strong>STANDARD</strong>
            <Link href="/standard">Kriterien</Link>
            <Link href="/dokumente">Dokumentenregister</Link>
          </div>
          <div>
            <strong>ORGANISATION</strong>
            <Link href="/ueber-uns">Über Made by Humans</Link>
            <Link href="/transparenz">Transparenz & Governance</Link>
            <Link href="/markennutzung">Markennutzung</Link>
            <Link href="/verfahren">Beschwerden & Einsprüche</Link>
          </div>
          <div>
            <strong>HERSTELLER</strong>
            <Link href="/fuer-hersteller">Für Hersteller</Link>
          </div>
          <div>
            <strong>VERIFIZIERUNG</strong>
            <Link href="/register">Public Register</Link>
            <Link href="/pruefen">Zertifizierungs-ID prüfen</Link>
          </div>
        </div>
      </div>

      <div className="shell footerMeta">
        <span>STANDARD · AUDIT · TRACEABILITY · PUBLIC REGISTER</span>
      </div>
    </footer>
  );
}
