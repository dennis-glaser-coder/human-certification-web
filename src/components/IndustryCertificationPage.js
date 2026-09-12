import Link from 'next/link';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { canonical } from '../lib/seo';

export default function IndustryCertificationPage({
  slug,
  eyebrow,
  title,
  lead,
  industryName,
  processSteps,
  proofPoints,
  faq,
}) {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Made by Human', item: canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Zertifizierung', item: canonical('/zertifizierung') },
      { '@type': 'ListItem', position: 3, name: industryName, item: canonical(`/zertifizierung/${slug}`) },
    ],
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  return (
    <main className="whyPage">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="whyHero">
        <div className="shell whyHeroGrid">
          <div className="whyHeroCopy">
            <p className="premiumEyebrow">{eyebrow}</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>{title}</h1>
            <p className="whyHeroLead">{lead}</p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
              <Link className="salesSecondary" href="/zertifizierung">Weitere Produktarten</Link>
            </div>
          </div>

          <div className="whyHeroVisual">
            <figure>
              <img
                src={assetBase + '/photography/why-human-production.webp'}
                width="1800"
                height="1200"
                fetchPriority="high"
                decoding="async"
                alt={`Menschliche Herstellung im Bereich ${industryName}`}
              />
              <figcaption>Geprüft wird der konkrete Herstellungsprozess.</figcaption>
            </figure>
            <div className="whySealTag">
              <img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="Made by Human Prüfzeichen" width="96" height="96" />
              <div>
                <span>PRODUKTBEZOGENE ZERTIFIZIERUNG</span>
                <strong>{industryName} · Herstellung · Nachweise · Register</strong>
                <p>Klare Abgrenzung statt pauschaler Unternehmensauszeichnung.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyManufacturers">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">WORAUF ES ANKOMMT</p>
              <h2>Welche Arbeitsschritte prägen das fertige Produkt?</h2>
            </div>
            <p>Made by Human bewertet nicht nur die Produktbezeichnung. Entscheidend ist, wie das konkrete Produkt tatsächlich entsteht und welche wesentlichen Schritte von Menschen ausgeführt werden.</p>
          </div>
          <div className="whyBenefitGrid">
            {processSteps.map(([title, copy]) => (
              <article key={title}><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="whyCustomers">
        <div className="shell whyCustomersGrid">
          <div className="whyCustomersIntro">
            <p className="premiumSectionLabel premiumSectionLabelLight">NACHWEISE & PRÜFUNG</p>
            <h2>Nachvollziehbar statt nur „handgemacht“.</h2>
            <p>Produktionsorte, wesentliche Arbeitsschritte, externe Fertigung und der Einsatz von Maschinen werden für den festgelegten Zertifizierungsumfang nachvollziehbar dokumentiert.</p>
          </div>
          <div className="whyCustomerList">
            {proofPoints.map(([number, title, copy]) => (
              <article key={number}><span>{number}</span><div><strong>{title}</strong><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="whyComparison">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">HÄUFIGE FRAGEN</p>
              <h2>{industryName} zertifizieren lassen.</h2>
            </div>
            <p>Die genaue Prüfung richtet sich immer nach Produkt, Herstellungsprozess und Zertifizierungsumfang.</p>
          </div>
          <div className="whyBenefitGrid">
            {faq.map(([question, answer]) => (
              <article key={question}><strong>{question}</strong><p>{answer}</p></article>
            ))}
          </div>
          <Link className="desireTextLink" href="/handarbeit-zertifizieren">So läuft die Zertifizierung ab →</Link>
        </div>
      </section>

      <section className="salesFinalCta whyFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">ERSTE EINSCHÄTZUNG</p>
            <h2>Passt Ihr Produkt zum Made-by-Human-Standard?</h2>
          </div>
          <div>
            <p>Beschreiben Sie uns Produkt, Herstellungsprozess und Produktionsorte. Wir klären, was konkret zertifiziert werden kann und welche Nachweise dafür benötigt werden.</p>
            <Link className="salesFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="salesFinalText" href="/standard">Standard ansehen →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
