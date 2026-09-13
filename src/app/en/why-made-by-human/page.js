import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import EnglishFooter from '../../../components/EnglishFooter';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Why Made by Human?',
  description: 'Why Made by Human makes human production visible and verifiable for manufacturers, brands and buyers.',
  alternates: {
    canonical: canonical('/en/why-made-by-human'),
    languages: { 'de-DE': canonical('/warum-made-by-human'), en: canonical('/en/why-made-by-human') },
  },
  openGraph: {
    title: 'Why Made by Human? | Made by Human',
    description: 'Why human production should be visible and verifiable.',
    url: canonical('/en/why-made-by-human'),
    images: [SOCIAL_IMAGE],
  },
};

const manufacturerBenefits = [
  ['Point to independent verification', 'Support a production claim with certification for the specific product.'],
  ['Use the evidence in sales', 'The mark and public register link can be used on packaging, product pages and sales materials.'],
];

const customerBenefits = [
  ['Understand the claim', 'The mark means the defining production steps of the product are demonstrably carried out by people.'],
  ['Check the scope', 'Using the certification ID or QR code, buyers can see which product is covered and whether the certification is valid.'],
];

const claimComparison = [
  ['“Handmade” without additional evidence', 'Manufacturer’s own claim', 'No independent verification is evident from the claim alone', 'No public register record follows from the claim alone'],
  ['Made by Human', 'Defined claim for a specific product', 'On-site verification and a documented decision', 'ID, QR code and public register record'],
];

export default function WhyPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main className="whyPage" lang="en">
      <SiteHeader lang="en" />

      <section className="whyHero">
        <div className="shell whyHeroGrid">
          <div className="whyHeroCopy">
            <p className="premiumEyebrow">WHY MADE BY HUMAN?</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>When people make the difference, that difference should be visible.</h1>
            <p className="whyHeroLead">
              Many manufacturers deliberately invest in skilled work and hands-on production. Little of that may be visible in the finished product. Made by Human makes this production verifiable through certification.
            </p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/en/for-manufacturers#certification-request">Request certification</Link>
              <a className="salesSecondary" href="#manufacturers">See the benefits</a>
            </div>
          </div>

          <div className="whyHeroVisual">
            <figure>
              <img src={assetBase + '/photography/why-human-production.webp'} width="1800" height="1200" fetchPriority="high" decoding="async" alt="Hands shaping a ceramic product" />
              <figcaption>Production image · Maksim Shiriagin / Unsplash</figcaption>
            </figure>
            <div className="whySealTag">
              <img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="Made by Human certification mark" width="96" height="96" />
              <div>
                <span>VISIBLE ON THE PRODUCT</span>
                <strong>Verified production. Publicly checkable.</strong>
                <p>For this product · certification ID · QR · register</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyManufacturers" id="manufacturers">
        <div className="shell">
          <div className="whySectionHead">
            <div><p className="premiumSectionLabel">BENEFITS FOR MANUFACTURERS</p><h2>Evidence for how your product is made.</h2></div>
            <p>The certification complements your brand. It applies to the named product or product family, not automatically to the entire company.</p>
          </div>
          <div className="whyBenefitGrid">
            {manufacturerBenefits.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="whyCustomers">
        <div className="shell whyCustomersGrid">
          <div className="whyCustomersIntro"><p className="premiumSectionLabel premiumSectionLabelLight">BENEFITS FOR BUYERS</p><h2>Buyers can see what the mark actually means.</h2></div>
          <div>
            <div className="whyCustomerList">
              {customerBenefits.map(([title, copy]) => <article key={title}><div><strong>{title}</strong><p>{copy}</p></div></article>)}
            </div>
            <Link className="desireTextLink desireTextLinkLight" href="/en/for-buyers">What the mark means for buyers →</Link>
          </div>
        </div>
      </section>

      <section className="whyComparison">
        <div className="shell">
          <div className="whySectionHead">
            <div><p className="premiumSectionLabel">WHY NOT JUST SAY “HANDMADE”?</p><h2>A verified claim is clearer than a self-declared marketing claim.</h2></div>
            <p>The comparison shows the difference between a manufacturer’s own statement and evidence under our standard.</p>
          </div>
          <div className="whyComparisonTable" role="table" aria-label="Comparison between an unverified manufacturer claim and Made by Human">
            <div className="whyComparisonHead" role="row"><span role="columnheader">CLAIM</span><span role="columnheader">BASIS</span><span role="columnheader">VERIFICATION</span><span role="columnheader">PUBLICLY CHECKABLE</span></div>
            {claimComparison.map(([claim, basis, check, verification]) => <div className="whyComparisonRow" role="row" key={claim}><strong role="cell">{claim}</strong><span role="cell">{basis}</span><span role="cell">{check}</span><span role="cell">{verification}</span></div>)}
          </div>
          <Link className="desireTextLink" href="/en/standard">Criteria and boundaries of the standard →</Link>
        </div>
      </section>

      <section className="salesFinalCta whyFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div><p className="premiumSectionLabel premiumSectionLabelLight">FOR MANUFACTURERS</p><h2>See whether your product could fit the standard.</h2></div>
          <div><p>In an initial assessment, we clarify whether the product is broadly suitable and what exactly should be certified.</p><Link className="salesFinalButton" href="/en/for-manufacturers#certification-request">Request certification</Link><Link className="salesFinalText" href="/en/for-manufacturers">See the certification process →</Link></div>
        </div>
      </section>

      <EnglishFooter />
    </main>
  );
}
