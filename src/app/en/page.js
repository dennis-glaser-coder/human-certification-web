import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import EnglishFooter from '../../components/EnglishFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Certification for human production',
  description: 'Made by Human verifies on site whether the defining production steps of a physical product are actually carried out by people.',
  alternates: {
    canonical: canonical('/en'),
    languages: { 'de-DE': canonical('/'), en: canonical('/en') },
  },
  openGraph: {
    title: 'Made by Human | Certification for human production',
    description: 'On-site verification, a clear standard and a public register for products shaped by human work.',
    url: canonical('/en'),
    images: [SOCIAL_IMAGE],
  },
};

const auditFacts = [
  ['Review the production steps', 'We look at the steps that genuinely shape the product during production.'],
  ['Put machinery in context', 'We assess where technology supports the process and where human work remains decisive.'],
  ['Define the exact scope', 'We match the product, production locations and relevant external manufacturing against the declared scope.'],
];

export default function EnglishHome() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main id="top" className="desireHome compactHome" lang="en">
      <SiteHeader lang="en" />

      <section className="desireHero">
        <div className="shell desireHeroGrid">
          <div className="desireHeroCopy">
            <p className="premiumEyebrow">CERTIFICATION FOR PHYSICAL PRODUCTS</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Made by people.<br />Verified on site.</h1>
            <p className="desireHeroLead">
              We verify on site whether the defining production steps of a product are actually carried out by people.
              After successful certification, the mark, certification ID and public register make that evidence visible.
            </p>
            <div className="desireHeroActions">
              <Link className="desirePrimary" href="/en/for-manufacturers#certification-request">Request certification</Link>
              <Link className="desireSecondary" href="/en/why-made-by-human">Why Made by Human?</Link>
            </div>
          </div>

          <div className="desireHeroVisual">
            <img
              src={assetBase + '/photography/home-hero-woodworking.webp'}
              width="1800"
              height="1202"
              fetchPriority="high"
              decoding="async"
              alt="Woodworker manually shaping a workpiece"
            />
          </div>
        </div>
      </section>

      <section className="sealApplications compactApplications">
        <div className="shell">
          <div className="desireSectionHead">
            <div>
              <p className="premiumSectionLabel">THE MARK IN USE</p>
              <h2>Show customers what stands behind your product.</h2>
            </div>
            <p>
              After certification, the Made by Human mark can identify the certified product on packaging, on the product itself and online. A QR code can lead customers directly to the public certification record.
            </p>
          </div>

          <div className="sealApplicationGrid compactApplicationGrid">
            <article className="sealApplicationCard applicationPackage realApplicationCard">
              <div className="applicationStage applicationStagePhoto realApplicationStage">
                <img
                  className="applicationPhoto realApplicationPhoto"
                  src={assetBase + '/brand/IMG_1047_mbh.webp?v=20260912-spacing'}
                  alt="Example of the Made by Human mark used with a textile product and packaging"
                  loading="lazy"
                />
              </div>
              <div className="applicationCopy">
                <strong>Directly on the product</strong>
                <p>As a tag or on the packaging: one way the mark can appear with a certified product.</p>
              </div>
            </article>

            <article className="sealApplicationCard applicationDigital">
              <div className="applicationStage applicationDigitalStage applicationProofStage">
                <div className="applicationProofPanel">
                  <div className="applicationProofTop">
                    <span>VERIFIABLE ONLINE</span>
                    <img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="" aria-hidden="true" />
                  </div>
                  <div className="applicationProofStatement">
                    <small>EVIDENCE FOR THIS PRODUCT</small>
                    <strong>Made by Human</strong>
                    <p>The mark links to the public certification record for this specific product.</p>
                  </div>
                  <div className="applicationProofMeta" aria-label="Elements of the digital certification record">
                    <span>Scope</span>
                    <span>Status</span>
                    <span>Standard version</span>
                  </div>
                  <Link className="applicationProofAction" href="/en/verify?id=HC-DEMO-0001">
                    <span>View demo record →</span>
                    <small>Demonstration only – not a real certification</small>
                  </Link>
                </div>
              </div>
              <div className="applicationCopy"><strong>Digital evidence</strong><p>The mark, product and public record remain clearly connected online.</p></div>
            </article>
          </div>

          <div className="compactApplicationFooter">
            <span>For a defined product · valid status required · publicly verifiable</span>
            <span className="applicationSwipeHint">Swipe for another use →</span>
            <Link href="/en/standard">See the rules →</Link>
          </div>
        </div>
      </section>

      <section className="desireAudit compactAudit">
        <div className="shell desireAuditGrid">
          <figure>
            <img
              src={assetBase + '/brand/IMG_1053.webp'}
              alt="On-site verification during a defining human production step"
              loading="lazy"
            />
          </figure>
          <div className="desireAuditCopy">
            <p className="premiumSectionLabel">ON-SITE VERIFICATION</p>
            <h2>On site, it becomes clear how a product is really made.</h2>
            <p className="desireAuditLead">
              We review production at the manufacturer and document the steps that materially shape the product.
            </p>
            <div className="desireAuditFacts">
              {auditFacts.map(([title, copy]) => <div key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="homeConsumerVerify">
        <div className="shell homeConsumerVerifyGrid">
          <div className="homeConsumerCopy">
            <p className="premiumSectionLabel premiumSectionLabelLight">FOR BUYERS</p>
            <h2>A mark is only as credible as the evidence behind it.</h2>
            <blockquote>
              The defining production steps of the certified product are demonstrably carried out by people.
            </blockquote>
          </div>
          <div className="homeVerifyCompact">
            <span>HAVE A CERTIFICATION ID OR QR CODE?</span>
            <strong>Verify the record directly.</strong>
            <p>See the product, manufacturer, scope, status and applicable standard version in the public record.</p>
            <div>
              <Link className="homeVerifyPrimary" href="/en/verify">Verify certification</Link>
              <Link className="homeVerifySecondary" href="/en/for-buyers">What the mark means →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="homeFinalCompact">
        <div className="shell">
          <div className="homeStandardLine" style={{ marginTop: 0 }}>
            <span>Current standard version: 0.1 · published 4 September 2026</span>
            <Link href="/en/standard">View standard →</Link>
          </div>

          <div className="homeFinalCta">
            <div>
              <p className="premiumSectionLabel premiumSectionLabelLight">FOR MANUFACTURERS</p>
              <h2>Could your product qualify for Made by Human?</h2>
            </div>
            <div>
              <p>In the initial assessment, we clarify which product you want to certify, how it is made and what the certification scope should include.</p>
              <Link className="desireFinalButton" href="/en/for-manufacturers#certification-request">Request certification</Link>
            </div>
          </div>
        </div>
      </section>

      <EnglishFooter />
    </main>
  );
}
