import Link from 'next/link';

const socialLinks = [
  ['Instagram', 'https://www.instagram.com/madebyhuman.verify/'],
  ['LinkedIn', 'https://www.linkedin.com/company/made-by-human-org/'],
];

export default function EnglishFooter() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <footer className="siteFooter premiumFooter" lang="en">
      <div className="shell premiumFooterTop">
        <div className="premiumFooterBrand">
          <div className="footerLogoField">
            <img className="footerMasterLogoAsset" src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} width="1001" height="1023" loading="lazy" alt="Made by Human – Verified Human Production" />
          </div>
          <p>Certification for verifiably human production.</p>
          <div aria-label="Made by Human on social media" style={{ display: 'flex', alignItems: 'center', gap: '9px', marginTop: '16px' }}>
            {socialLinks.map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Made by Human on ${label}`} title={label} style={{ width: '40px', height: '40px', border: '1px solid rgba(243,240,232,.22)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', borderRadius: '50%', fontSize: '11px', fontWeight: 700 }}>
                {label === 'Instagram' ? 'IG' : 'in'}
              </a>
            ))}
          </div>
        </div>

        <nav className="premiumFooterNav premiumFooterNavDesktop" aria-label="Footer navigation">
          <div>
            <span>STANDARD</span>
            <Link href="/en/standard">Criteria</Link>
            <Link href="/en/why-made-by-human">Why Made by Human</Link>
            <Link href="/en/about">About us</Link>
          </div>
          <div>
            <span>VERIFY</span>
            <Link href="/en/register">Public register</Link>
            <Link href="/en/verify">Verify certification ID</Link>
            <Link href="/en/for-buyers">For buyers</Link>
            <Link href="/en/for-manufacturers">For manufacturers</Link>
          </div>
          <div>
            <span>LEGAL</span>
            <Link href="/impressum">Legal notice (German)</Link>
            <Link href="/datenschutz">Privacy policy (German)</Link>
          </div>
        </nav>

        <nav className="premiumFooterNavMobile" aria-label="Footer navigation mobile">
          <details>
            <summary>Standard</summary>
            <div>
              <Link href="/en/standard">Criteria</Link>
              <Link href="/en/why-made-by-human">Why Made by Human</Link>
              <Link href="/en/about">About us</Link>
            </div>
          </details>
          <details>
            <summary>Verify</summary>
            <div>
              <Link href="/en/register">Public register</Link>
              <Link href="/en/verify">Verify certification ID</Link>
              <Link href="/en/for-buyers">For buyers</Link>
              <Link href="/en/for-manufacturers">For manufacturers</Link>
            </div>
          </details>
          <details>
            <summary>Legal</summary>
            <div>
              <Link href="/impressum">Legal notice (German)</Link>
              <Link href="/datenschutz">Privacy policy (German)</Link>
            </div>
          </details>
        </nav>
      </div>

      <div className="shell premiumFooterBottom">
        <span>STANDARD · VERIFICATION · CLEAR RULES · PUBLIC REGISTER</span>
        <div className="footerLegalMeta">
          <Link href="/impressum">Legal notice</Link>
          <Link href="/datenschutz">Privacy</Link>
          <span>Made by Human</span>
        </div>
      </div>
    </footer>
  );
}
