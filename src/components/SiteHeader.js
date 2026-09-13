import Link from 'next/link';
import MobileNav from './MobileNav';
import DesktopOrganizationNav from './DesktopOrganizationNav';
import LanguageSwitch from './LanguageSwitch';

export default function SiteHeader({ lang = 'de' }) {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';
  const isEn = lang === 'en';

  return (
    <>
      <a className="skipLink" href="#content-start">{isEn ? 'Skip to main content' : 'Zum Hauptinhalt springen'}</a>
      <header className="siteHeader premiumSiteHeader" data-header-version="2026-09-13-i18n-v1">
      <div className="shell headerInner premiumHeaderInner">
        <a className="brandLockup premiumBrandLockup" href={assetBase + (isEn ? '/en#top' : '/#top')} aria-label={isEn ? 'Made by Human home – back to top' : 'Made by Human Startseite – nach oben'}>
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

        <nav className="mainNav premiumMainNav" aria-label={isEn ? 'Main navigation' : 'Hauptnavigation'}>
          <Link href={isEn ? '/en/why-made-by-human' : '/warum-made-by-human'}>{isEn ? 'Why Made by Human' : 'Warum Made by Human'}</Link>
          <Link href={isEn ? '/en/for-manufacturers' : '/fuer-hersteller'}>{isEn ? 'For manufacturers' : 'Für Hersteller'}</Link>
          <Link href={isEn ? '/en/for-buyers' : '/fuer-kaeufer'}>{isEn ? 'For buyers' : 'Für Käufer'}</Link>
          <Link href={isEn ? '/en/register' : '/register'}>{isEn ? 'Register' : 'Register'}</Link>
          <Link href={isEn ? '/en/standard' : '/standard'}>{isEn ? 'Standard' : 'Standard'}</Link>

          <DesktopOrganizationNav lang={lang} />
          <LanguageSwitch lang={lang} />

          <Link className="navVerify" href={isEn ? '/en/for-manufacturers#certification-request' : '/fuer-hersteller#zertifizierungsanfrage'}>{isEn ? 'Request certification' : 'Zertifizierung anfragen'}</Link>
        </nav>

        <div className="mobileHeaderActions premiumMobileHeaderActions">
          <LanguageSwitch lang={lang} />
          <Link className="mobileVerify" href={isEn ? '/en/for-manufacturers#certification-request' : '/fuer-hersteller#zertifizierungsanfrage'}>{isEn ? 'Request' : 'Anfragen'}</Link>
          <MobileNav lang={lang} />
        </div>
      </div>
      </header>
      <span id="content-start" className="contentStart" tabIndex="-1" aria-hidden="true"></span>
    </>
  );
}
