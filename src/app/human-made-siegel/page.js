import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Human Made Siegel für menschliche Herstellung',
  description: 'Human Made Siegel für physische Produkte: Made by Human prüft produktprägende menschliche Herstellungsschritte, Nachweise und Zertifizierungsumfang.',
  alternates: { canonical: canonical('/human-made-siegel') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Made by Human',
    title: 'Human Made Siegel für menschliche Herstellung | Made by Human',
    description: 'Produktbezogene Zertifizierung für nachvollziehbar menschliche Herstellung – mit Prüfung, Nachweisen und öffentlichem Register.',
    url: canonical('/human-made-siegel'),
    images: [SOCIAL_IMAGE],
  },
};

const benefits = [
  ['Produktbezogen statt pauschal', 'Zertifiziert wird ein klar bezeichnetes physisches Produkt oder eine abgegrenzte Produktfamilie – nicht pauschal das gesamte Unternehmen.'],
  ['Herstellungsprozess im Mittelpunkt', 'Geprüft wird, welche Arbeitsschritte das fertige Produkt wesentlich prägen und welche Rolle Menschen, Maschinen und externe Fertigung dabei spielen.'],
  ['Öffentlich nachvollziehbar', 'Nach erfolgreicher Zertifizierung werden Status und Zertifizierungsumfang über eine eindeutige ID im öffentlichen Register prüfbar.'],
];

const faq = [
  ['Was bedeutet Human Made bei Made by Human?', 'Human Made bedeutet hier, dass die wesentlichen produktprägenden Herstellungsschritte eines konkret zertifizierten physischen Produkts nachvollziehbar durch Menschen ausgeführt werden. Maßgeblich ist der festgelegte Standard und der geprüfte Zertifizierungsumfang.'],
  ['Ist Made by Human ein KI-Siegel?', 'Nein. Made by Human ist kein allgemeines Label für KI-freie Texte, Bilder, Software oder Dienstleistungen. Die Zertifizierung richtet sich an physische Produkte und deren tatsächlichen Herstellungsprozess.'],
  ['Muss ein Human-Made-Produkt vollständig ohne Maschinen entstehen?', 'Nein. Maschinen und Werkzeuge dürfen unterstützen. Entscheidend ist, ob Menschen die wesentlichen produktprägenden Schritte tatsächlich ausführen oder durch konkrete Entscheidungen prägen und das Produkt nicht weitgehend autonom entsteht.'],
  ['Was ist der Unterschied zu einem Herkunftssiegel?', 'Made by Human bestätigt keine bestimmte nationale Herkunft wie Made in Germany. Produktionsorte werden zwar dokumentiert, bewertet wird aber die nachvollziehbar menschliche Prägung des Herstellungsprozesses.'],
  ['Welche Produkte können ein Human Made Siegel erhalten?', 'Grundsätzlich kommen physische Produkte infrage, deren wesentliche Herstellungsschritte klar abgegrenzt und nachvollziehbar belegt werden können – zum Beispiel Schmuck, Möbel und Holzprodukte, Textilien, Lederwaren oder Keramik.'],
  ['Wie beantrage ich die Zertifizierung?', 'Hersteller stellen eine Zertifizierungsanfrage mit Angaben zu Produkt, Produktionsorten und Herstellungsprozess. Danach wird der mögliche Zertifizierungsumfang geklärt und festgelegt, welche Nachweise und Prüfungen erforderlich sind.'],
];

export default function HumanMadeSealPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Made by Human', item: canonical('/') },
      { '@type': 'ListItem', position: 2, name: 'Human Made Siegel', item: canonical('/human-made-siegel') },
    ],
  };

  return (
    <main className="whyPage">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="whyHero">
        <div className="shell whyHeroGrid">
          <div className="whyHeroCopy">
            <p className="premiumEyebrow">HUMAN MADE · MENSCHLICHE HERSTELLUNG · ZERTIFIZIERUNG</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Ein Human Made Siegel für nachvollziehbar menschliche Herstellung.</h1>
            <p className="whyHeroLead">
              Made by Human macht bei physischen Produkten sichtbar, wenn Menschen die wesentlichen
              Herstellungsschritte tatsächlich prägen. Zertifiziert wird nicht nur eine Aussage, sondern
              ein klar abgegrenztes Produkt mit dokumentiertem Herstellungsprozess, Nachweisen und öffentlichem Status.
            </p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Human Made Zertifizierung anfragen</Link>
              <Link className="salesSecondary" href="/standard">Standard ansehen</Link>
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
                alt="Menschliche Herstellung eines physischen Produkts"
              />
              <figcaption>Der konkrete Herstellungsprozess steht im Mittelpunkt.</figcaption>
            </figure>
            <div className="whySealTag">
              <img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="Made by Human Zertifizierungszeichen" width="96" height="96" />
              <div>
                <span>HUMAN MADE</span>
                <strong>Produkt · Herstellung · Nachweise · Register</strong>
                <p>Ein prüfbarer Nachweis statt einer pauschalen Werbeaussage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyManufacturers">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">WAS DAS SIEGEL AUSSAGT</p>
              <h2>Human Made wird am tatsächlichen Herstellungsprozess geprüft.</h2>
            </div>
            <p>
              Begriffe wie „human made“, „handmade“ oder „von Menschen gemacht“ können unterschiedlich verwendet werden.
              Made by Human verbindet die Aussage deshalb mit einem definierten Zertifizierungsumfang und einem festen Standard.
            </p>
          </div>
          <div className="whyBenefitGrid">
            {benefits.map(([title, copy]) => (
              <article key={title}><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="whyCustomers">
        <div className="shell whyCustomersGrid">
          <div className="whyCustomersIntro">
            <p className="premiumSectionLabel premiumSectionLabelLight">NICHT MIT ANDEREN LABELS VERWECHSELN</p>
            <h2>Physische Herstellung statt allgemeiner KI-Kennzeichnung.</h2>
          </div>
          <div className="whyCustomerList">
            <article><span>01</span><div><strong>Kein allgemeines KI-Label</strong><p>Made by Human bestätigt nicht, dass Texte, Bilder, Software oder Dienstleistungen ohne künstliche Intelligenz entstanden sind.</p></div></article>
            <article><span>02</span><div><strong>Kein Herkunftssiegel</strong><p>Die Zertifizierung steht nicht automatisch für „Made in Germany“ oder eine bestimmte nationale Herkunft.</p></div></article>
            <article><span>03</span><div><strong>Produktbezogene Aussage</strong><p>Entscheidend ist das konkret bezeichnete physische Produkt, sein Herstellungsprozess und der dokumentierte Zertifizierungsumfang.</p></div></article>
          </div>
        </div>
      </section>

      <section className="whyComparison">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">FÜR WELCHE PRODUKTE?</p>
              <h2>Human Made kann viele handwerklich geprägte Produktarten betreffen.</h2>
            </div>
            <p>Ob ein Produkt geeignet ist, hängt nicht allein von der Branche ab. Entscheidend sind die tatsächlichen produktprägenden Arbeitsschritte.</p>
          </div>
          <div className="whyBenefitGrid">
            <article><strong>Schmuck & Accessoires</strong><p>Formgebung, Fassen, Löten, Montieren, Gravieren und Finish können wesentliche menschliche Schritte sein.</p><Link className="desireTextLink" href="/zertifizierung/schmuck">Schmuck zertifizieren →</Link></article>
            <article><strong>Möbel & Holzprodukte</strong><p>Zuschnitt, Verbindung, Montage, Schleifen und Oberflächenbearbeitung können die menschliche Prägung bestimmen.</p><Link className="desireTextLink" href="/zertifizierung/holz-moebel">Holz & Möbel zertifizieren →</Link></article>
            <article><strong>Textilien & Lederwaren</strong><p>Zuschnitt, Nähen, Fügen, Veredelung und Finish können für den Zertifizierungsumfang entscheidend sein.</p><Link className="desireTextLink" href="/zertifizierung">Weitere Produktarten →</Link></article>
          </div>
        </div>
      </section>

      <section className="manufacturerFaq">
        <div className="shell manufacturerFaqGrid">
          <div>
            <div className="sectionNo">HÄUFIGE FRAGEN</div>
            <h2>Human Made Siegel verständlich erklärt.</h2>
            <p>Die wichtigsten Abgrenzungen für Hersteller und Käufer.</p>
          </div>
          <div className="manufacturerFaqList">
            {faq.map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </div>
        </div>
      </section>

      <section className="salesFinalCta whyFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div><p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p><h2>Human Made als nachvollziehbares Produktmerkmal belegen.</h2></div>
          <div>
            <p>Beschreiben Sie Produkt, Produktionsorte und wesentliche Herstellungsschritte. Wir klären, ob und in welchem Umfang eine Zertifizierung möglich ist.</p>
            <Link className="salesFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="salesFinalText" href="/handarbeit-siegel">Mehr zum Handarbeit-Siegel →</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
