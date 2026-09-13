import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import EnglishFooter from '../../../components/EnglishFooter';
import BrandTrace from '../../../components/BrandTrace';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'What the mark means for buyers',
  description: 'Made by Human explained: what the mark means, how verification works and how buyers can check a certification by QR code or ID.',
  alternates: {
    canonical: canonical('/en/for-buyers'),
    languages: { 'de-DE': canonical('/fuer-kaeufer'), en: canonical('/en/for-buyers') },
  },
  openGraph: {
    title: 'What the mark means for buyers | Made by Human',
    description: 'What the Made by Human mark means – explained clearly and publicly verifiable.',
    url: canonical('/en/for-buyers'),
    images: [SOCIAL_IMAGE],
  },
};

const says = [
  ['Human production', 'The defining production steps of the certified product are demonstrably carried out by people.'],
  ['On-site verification', 'We review the actual production process at the manufacturer.'],
  ['Applies to a specific product', 'Certification only applies to the product or product family named in the public register.'],
  ['Publicly verifiable', 'Using the ID or QR code, buyers can see the product, status, standard and declared production locations.'],
];

const doesNotSay = [
  'no automatic claim about sustainability',
  'no automatic claim about organic or Fairtrade attributes',
  'no automatic claim about country of origin',
  'no general quality grade',
];

const faq = [
  ['Can machines be used?', 'Yes. Machines may support the process. What matters is that the production steps that materially shape the product are still carried out by people.'],
  ['Is every handmade product automatically certified?', 'No. The mark may only be used for products that have actually been verified and certified.'],
  ['Can I check a certification myself?', 'Yes. The certification ID and QR code lead to the public record with the product and current status.'],
  ['What happens if production changes?', 'If important production steps, locations or external manufacturing change, a new verification may be required.'],
];

export default function BuyerPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main className="buyerPage" lang="en">
      <SiteHeader lang="en" />

      <section className="buyerHero">
        <div className="shell buyerHeroGrid">
          <div>
            <p className="premiumEyebrow">FOR BUYERS</p>
            <BrandTrace compact />
            <h1>What does Made by Human mean?</h1>
            <p className="buyerHeroLead">The mark means that we have verified whether the defining production steps of this product are actually carried out by people.</p>
            <div className="buyerHeroActions"><Link className="desirePrimary" href="/en/verify">Verify certification</Link><a className="desireSecondary" href="#meaning">See what it means</a></div>
          </div>

          <div className="buyerHeroCard">
            <div className="buyerHeroLogoField"><img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="Made by Human – Verified Human Production" /></div>
            <strong>Made by people.<br />Verified on site.</strong>
            <p>For this product · certification ID · publicly verifiable</p>
          </div>
        </div>
      </section>

      <section className="buyerMeaning" id="meaning">
        <div className="shell">
          <div className="buyerMeaningLead"><p className="premiumSectionLabel">WHAT THE MARK SAYS</p><h2>What the certification actually confirms.</h2></div>
          <div className="buyerMeaningGrid">{says.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="buyerVerify">
        <div className="shell buyerVerifyGrid">
          <div className="buyerVerifyVisual">
            <div className="buyerProofSpecimen">
              <div className="buyerProofAuthority"><span>PUBLIC CERTIFICATION RECORD</span><small>DEMO · NOT A REAL CERTIFICATION</small></div>
              <div className="buyerProofIdentity"><div><small>CERTIFICATION ID</small><strong>HC-DEMO-0001</strong></div><span className="statusBadge status-demo">DEMO · NOT A REAL CERTIFICATION</span></div>
              <dl className="buyerProofFacts"><div><dt>Product</dt><dd>Demo Product</dd></div><div><dt>Manufacturer</dt><dd>Demo Manufacturer</dd></div><div><dt>Production location</dt><dd>Germany · Demo location</dd></div><div><dt>Standard</dt><dd>0.1-DEMO</dd></div></dl>
              <div className="buyerProofFoot">For this product · current status · publicly verifiable</div>
            </div>
          </div>
          <div className="buyerVerifyCopy">
            <p className="premiumSectionLabel premiumSectionLabelLight">QR & CERTIFICATION ID</p>
            <h2>The product and current status can be checked publicly.</h2>
            <p>Using the QR code or certification ID, buyers can open the public register and see which product is covered and whether the certification is currently valid.</p>
            <div className="buyerVerifyChecks"><span>Product & manufacturer</span><span>Certification scope</span><span>Declared production locations</span><span>Status & validity</span><span>Applicable standard version</span></div>
            <Link className="desireTextLink desireTextLinkLight" href="/en/verify">Verify certification ID →</Link>
          </div>
        </div>
      </section>

      <section className="buyerBoundary">
        <div className="shell buyerBoundaryGrid">
          <div><p className="premiumSectionLabel">CLEARLY LIMITED BY DESIGN</p><h2>What the mark does not automatically claim.</h2><p>Made by Human verifies human production. Claims about sustainability, origin, organic status, Fairtrade or quality require their own evidence.</p></div>
          <div className="buyerBoundaryList">{doesNotSay.map((item) => <div key={item}>{item}</div>)}</div>
        </div>
      </section>

      <section className="buyerAudit">
        <div className="shell buyerAuditGrid">
          <figure><img src={assetBase + '/photography/buyer-production.webp'} alt="Human work in a production workshop" loading="lazy" /></figure>
          <div><p className="premiumSectionLabel">HOW DO WE VERIFY?</p><h2>Verification happens where the product is made.</h2><p>On site, we review which steps are carried out by people, which machines are used, where production takes place and whether important steps are performed by external manufacturers.</p><Link className="desireTextLink" href="/en/standard">See the criteria →</Link></div>
        </div>
      </section>

      <section className="buyerFaq">
        <div className="shell buyerFaqGrid">
          <div><p className="premiumSectionLabel">FREQUENT QUESTIONS</p><h2>Common questions about the mark.</h2></div>
          <div className="buyerFaqList">{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="buyerFinal">
        <div className="shell buyerFinalGrid"><div><p className="premiumSectionLabel premiumSectionLabelLight">VERIFY PUBLICLY</p><h2>Check a certification by ID or QR code.</h2></div><div><p>Use the certification ID or QR code to open the public record.</p><Link className="desireFinalButton" href="/en/verify">Verify certification</Link></div></div>
      </section>

      <EnglishFooter />
    </main>
  );
}
