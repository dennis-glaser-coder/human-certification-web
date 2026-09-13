import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import EnglishFooter from '../../../components/EnglishFooter';
import BrandTrace from '../../../components/BrandTrace';
import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Standard',
  description: 'The Made by Human standard defines when human work materially shapes a physical product and how that can be verified.',
  alternates: {
    canonical: canonical('/en/standard'),
    languages: { 'de-DE': canonical('/standard'), en: canonical('/en/standard') },
  },
};

const criteria = [
  ['Product creation', 'Human work turns materials or components into the finished product offered for sale.'],
  ['Human execution', 'The defining production steps are actually carried out directly by people.'],
  ['Skilled human contribution', 'Relevant steps require experience, skill or deliberate human decisions.'],
  ['Automation boundary', 'Technology may support the process; largely autonomous product creation does not meet the criterion.'],
  ['Traceability', 'Production locations, suppliers and important external manufacturing must be clearly attributable to the product.'],
  ['Verifiability', 'Statements about the production process must be checkable through suitable information and evidence.'],
];

const cases = [
  ['Leather bag: cutting and production by people', 'Generally certifiable', 'Human production materially shapes the finished product.'],
  ['Leather bag: digital cutting, manual assembly and finishing', 'Potentially eligible – case-by-case review', 'The digital subprocess does not replace the other defining production steps.'],
  ['Finished imported bag with own label added', 'Not certifiable', 'The finished product already exists before the company’s own step.'],
  ['Table: CNC cutting, manual adjustment, assembly and finishing', 'Generally eligible', 'Automated cutting is one subprocess; other defining steps are performed by people.'],
  ['Table produced largely automatically, only hand-finished', 'Not certifiable', 'The remaining human activity is no longer material to product creation.'],
];

const exclusions = ['Country of origin', 'Sustainability', 'Organic or Fairtrade attributes', 'Company size'];

export default function StandardPage() {
  return (
    <main lang="en">
      <SiteHeader lang="en" />

      <section className="pageHero shell">
        <div className="eyebrow">STANDARD</div>
        <BrandTrace compact />
        <h1>The standard for verifiably human production.</h1>
        <p className="lead">The standard defines when human work materially shapes a physical product, what the certification covers and what evidence is needed for verification.</p>
      </section>

      <section className="standardMetaBand" aria-label="Standard metadata">
        <div className="shell standardMetaBar">
          <div><span>STANDARD VERSION</span><strong>0.1</strong></div>
          <div><span>SCOPE</span><strong>Physical products</strong></div>
          <div><span>ASSESSMENT AREAS</span><strong>6 criteria areas</strong></div>
          <div><span>DOCUMENTATION</span><strong>Versioned & public</strong></div>
        </div>
      </section>

      <section className="shell standardCriteriaSection">
        <div className="sectionIntro compact"><div><div className="sectionNo">ASSESSMENT AREAS</div><h2>Six areas define what we look at.</h2></div><p>Certification is only possible when the actual production process meets the criteria and can be sufficiently evidenced.</p></div>
        <div className="criteriaGrid">{criteria.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div>
      </section>

      <section className="auditProcessSection">
        <div className="shell">
          <div className="sectionIntro compact"><div><div className="sectionNo">VERIFICATION PROCESS</div><h2>From product definition to public register.</h2></div><p>The decision is not based on self-declaration alone. We document the production process, review evidence, assess the case and record the decision.</p></div>
          <div className="auditProcessGrid">
            <article><strong>Define the certification scope</strong><p>Specify the product or product family and the relevant production locations.</p></article>
            <article><strong>Map production</strong><p>Document the important production steps and external manufacturing.</p></article>
            <article><strong>Evidence</strong><p>Check whether documents and information match the actual production process.</p></article>
            <article><strong>Assessment</strong><p>Evaluate the production process against the standard criteria.</p></article>
            <article><strong>Technical review</strong><p>Review the assessment result and resolve open questions.</p></article>
            <article><strong>Decision</strong><p>Decide on certification and publish the status in the register if approved.</p></article>
          </div>
        </div>
      </section>

      <section className="decisionRule"><div className="shell decisionRuleInner"><div className="sectionNo">DECISION RULE</div><p>Without the human production steps, would essentially the same sale-ready product already exist?</p></div></section>

      <section className="shell caseSection">
        <div className="sectionIntro compact"><div><div className="sectionNo">BORDERLINE CASES</div><h2>Examples of how cases may be classified.</h2></div><p>The examples are guidance only. The actual production process of the specific product is always decisive.</p></div>
        <div className="caseTable">
          <div className="caseTableHead"><span>CASE</span><span>CLASSIFICATION</span><span>REASON</span></div>
          {cases.map(([item, result, reason]) => <article className="caseRow" key={item}><strong>{item}</strong><span>{result}</span><p>{reason}</p></article>)}
        </div>
      </section>

      <section className="scopeExclusionSection"><div className="shell scopeExclusionGrid"><div><div className="sectionNo">OUTSIDE THE STANDARD</div><h2>Made by Human deliberately remains limited to human production.</h2></div><div className="exclusionList">{exclusions.map((item) => <span key={item}>{item}</span>)}</div></div></section>

      <section className="standardClose shell"><div><p>Each version of the standard has its own version number. The current public German standard document remains the normative reference until an approved English normative version is published.</p></div><div className="standardCloseLinks"><Link className="textLink" href="/dokumente/standard-0-1">Open Standard 0.1 (German) →</Link><Link className="textLink" href="/en/about">About the system →</Link></div></section>

      <EnglishFooter />
    </main>
  );
}
