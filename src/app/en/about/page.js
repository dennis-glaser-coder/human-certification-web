import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import EnglishFooter from '../../../components/EnglishFooter';
import BrandTrace from '../../../components/BrandTrace';
import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'About us',
  description: 'Why Made by Human exists and how we make human production visible and verifiable.',
  alternates: {
    canonical: canonical('/en/about'),
    languages: { 'de-DE': canonical('/ueber-uns'), en: canonical('/en/about') },
  },
};

const principles = [
  ['Defined product', 'Certification applies to a clearly named product or product family.'],
  ['Clear claim', 'We assess human production rather than making a general statement about the company.'],
  ['Fixed standard', 'Every certification decision refers to the standard version used for the assessment.'],
  ['Public record', 'A unique ID connects the certification to a public register entry.'],
];

export default function AboutPage() {
  return (
    <main className="aboutInstitution" lang="en">
      <SiteHeader lang="en" />

      <section className="pageHero shell aboutStoryHero">
        <div className="eyebrow">ABOUT MADE BY HUMAN</div>
        <BrandTrace compact />
        <h1>Human work deserves verifiable evidence.</h1>
        <p className="lead">As production becomes more automated, it becomes harder to see where people genuinely shape a product. Made by Human makes that difference visible and checkable.</p>
      </section>

      <section className="aboutOrigin">
        <div className="shell aboutOriginGrid">
          <div className="aboutOriginStatement"><div className="sectionNo light">THE IDEA</div><h2>Human work is a real difference when it can be seen and evidenced.</h2></div>
          <div className="aboutOriginStory">
            <p>Modern machinery and digital tools can support production. What matters for Made by Human is whether human work still materially shapes the product.</p>
            <p>We start with the actual production process rather than a marketing phrase: what do people really do, where does technology support them, and how can that work be verified?</p>
            <div className="aboutOriginThesis compact"><span>TECHNOLOGY MAY SUPPORT.</span><strong>The defining human contribution must remain real and verifiable.</strong></div>
          </div>
        </div>
      </section>

      <section className="aboutMetaBand" aria-label="Made by Human principles">
        <div className="shell aboutMetaGrid">
          <div><strong>Defined product</strong><p>A clearly named physical product is assessed.</p></div>
          <div><strong>Clear scope</strong><p>The certification is limited to human production.</p></div>
          <div><strong>Evidence</strong><p>The production process must be verifiable.</p></div>
          <div><strong>Publicly checkable</strong><p>Status and standard version can be checked in the register.</p></div>
        </div>
      </section>

      <section className="shell aboutPrinciples">
        <div className="sectionIntro compact"><div><div className="sectionNo">PRINCIPLES</div><h2>A narrow claim, backed by a clear system.</h2></div><p>The mark is supported by a standard, on-site verification, a documented decision and a public register.</p></div>
        <div className="aboutPrinciplesGrid">{principles.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div>
      </section>

      <section className="aboutArchitecture">
        <div className="shell">
          <div className="sectionIntro compact aboutArchitectureIntro"><div><div className="sectionNo light">HOW THE SYSTEM WORKS</div><h2>Standard, verification, decision and register remain connected.</h2></div><p>Trust comes from the evidence behind the mark, not from the mark alone.</p></div>
          <div className="aboutArchitectureLinks"><Link href="/en/standard">View standard →</Link><Link href="/en/register">Open register →</Link><Link href="/en/verify">Verify a certification →</Link></div>
        </div>
      </section>

      <EnglishFooter />
    </main>
  );
}
