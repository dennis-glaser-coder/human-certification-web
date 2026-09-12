import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Handarbeit zertifizieren lassen | Made by Human',
  description: 'Handgemachte und menschlich hergestellte Produkte zertifizieren lassen: Made by Human prüft Herstellungsprozess, Nachweise und Zertifizierungsumfang nach klaren Kriterien.',
  alternates: { canonical: canonical('/handarbeit-zertifizieren') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Made by Human',
    title: 'Handarbeit zertifizieren lassen | Made by Human',
    description: 'So läuft die Zertifizierung handgemachter und menschlich hergestellter Produkte ab – von der Anfrage bis zum Registereintrag.',
    url: canonical('/handarbeit-zertifizieren'),
    images: [SOCIAL_IMAGE],
  },
};

const suitable = [
  ['Schmuck & Accessoires', 'Produkte, bei denen Formgebung, Montage, Fassung, Finish oder vergleichbare prägende Schritte von Menschen ausgeführt werden.'],
  ['Textilien & Mode', 'Produkte, deren wesentliche Fertigungs-, Näh-, Strick-, Veredelungs- oder Montageprozesse nachvollziehbar menschlich geprägt sind.'],
  ['Möbel & Holzprodukte', 'Produkte mit menschlich ausgeführten Arbeitsschritten wie Zuschnitt, Bearbeitung, Verbindung, Schleifen, Montage oder Oberflächenbehandlung.'],
  ['Keramik & Dekoration', 'Produkte, bei denen Formgebung, Bearbeitung, Dekoration, Montage oder andere wesentliche Schritte tatsächlich durch Menschen erfolgen.'],
];

const certificationSteps = [
  ['01', 'Anfrage stellen', 'Sie beschreiben Produkt, Herstellung, Produktionsorte und gegebenenfalls externe Fertigung.'],
  ['02', 'Zertifizierungsumfang festlegen', 'Wir grenzen eindeutig ab, welches Produkt oder welche Produktfamilie geprüft werden soll.'],
  ['03', 'Nachweise einreichen', 'Je nach Herstellungsprozess werden geeignete Unterlagen, Prozessbeschreibungen, Fotos, Videos oder weitere Belege benötigt.'],
  ['04', 'Herstellung prüfen', 'Wir bewerten die wesentlichen Arbeitsschritte und klären, welche Rolle Menschen, Maschinen und automatisierte Prozesse tatsächlich spielen.'],
  ['05', 'Entscheidung & Register', 'Bei erfolgreicher Prüfung wird die Zertifizierung dokumentiert und das konkrete Produkt mit Status und Zertifizierungs-ID im Register geführt.'],
];

const faq = [
  ['Kann ich handgemachte Produkte zertifizieren lassen?', 'Ja, wenn sich der Herstellungsprozess klar abgrenzen und nachvollziehbar belegen lässt. Entscheidend ist nicht allein die Bezeichnung „handgemacht“, sondern wie das konkrete Produkt tatsächlich hergestellt wird.'],
  ['Muss ein Produkt komplett ohne Maschinen hergestellt werden?', 'Nein. Maschinen dürfen unterstützen. Entscheidend ist, ob die wesentlichen produktprägenden Herstellungsschritte tatsächlich durch Menschen ausgeführt werden und das Produkt nicht weitgehend autonom entsteht.'],
  ['Kann eine ganze Manufaktur zertifiziert werden?', 'Made by Human zertifiziert nicht pauschal das gesamte Unternehmen. Die Zertifizierung bezieht sich auf ein konkret bezeichnetes Produkt oder eine klar abgegrenzte Produktfamilie und den dazugehörigen Herstellungsprozess.'],
  ['Welche Unterlagen brauche ich für die Zertifizierung?', 'Das hängt vom Produkt ab. Typisch sind Angaben zu Herstellungsprozess, Produktionsorten, externen Fertigungsschritten und geeignete Nachweise wie Prozessunterlagen, Fotos oder Videos.'],
  ['Wie lange dauert eine Zertifizierung?', 'Die Dauer hängt von Produkt, Herstellungsprozess, vorhandenen Nachweisen und möglichem Prüfaufwand ab. Nach der ersten Anfrage lässt sich der notwendige Umfang konkreter einschätzen.'],
  ['Ist Made by Human ein staatliches Siegel?', 'Nein. Made by Human ist ein privat entwickeltes Prüf- und Zertifizierungssystem mit eigenem Standard, dokumentierten Kriterien und öffentlichem Register.'],
];

export default function HandarbeitZertifizierenPage() {
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
      { '@type': 'ListItem', position: 2, name: 'Handarbeit zertifizieren', item: canonical('/handarbeit-zertifizieren') },
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
            <p className="premiumEyebrow">HANDARBEIT ZERTIFIZIEREN</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Handgemachte Produkte nachvollziehbar zertifizieren lassen.</h1>
            <p className="whyHeroLead">
              Wenn menschliche Arbeit ein Produkt wesentlich prägt, sollte diese Aussage belegbar sein.
              Made by Human prüft den konkreten Herstellungsprozess nach festgelegten Kriterien und macht
              eine erfolgreiche Zertifizierung über eine eindeutige ID und das öffentliche Register nachvollziehbar.
            </p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
              <Link className="salesSecondary" href="/handarbeit-siegel">Was das Handarbeit-Siegel bedeutet</Link>
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
                alt="Menschliche Handarbeit bei der Herstellung eines Produkts"
              />
              <figcaption>Herstellung im Fokus · geprüft wird der konkrete Prozess</figcaption>
            </figure>
            <div className="whySealTag">
              <img
                src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'}
                alt="Made by Human Prüfzeichen"
                width="96"
                height="96"
              />
              <div>
                <span>NACHVOLLZIEHBAR ZERTIFIZIERT</span>
                <strong>Produkt · Herstellungsprozess · Nachweise · Register</strong>
                <p>Kein pauschales Unternehmenssiegel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyManufacturers">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">FÜR WELCHE PRODUKTE?</p>
              <h2>Geeignet für Produkte, bei denen Menschen die Herstellung wesentlich prägen.</h2>
            </div>
            <p>
              Entscheidend ist nicht die Branche allein, sondern welche Schritte das fertige Produkt prägen
              und wie diese tatsächlich ausgeführt werden.
            </p>
          </div>

          <div className="whyBenefitGrid">
            {suitable.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="whyCustomers">
        <div className="shell whyCustomersGrid">
          <div className="whyCustomersIntro">
            <p className="premiumSectionLabel premiumSectionLabelLight">ABLAUF</p>
            <h2>Von der Anfrage bis zur Zertifizierungs-ID.</h2>
            <p>
              Der Umfang richtet sich nach Produkt und Herstellungsprozess. Die wesentlichen Schritte bleiben aber gleich.
            </p>
          </div>

          <div className="whyCustomerList">
            {certificationSteps.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="whyComparison">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">WAS WIRD GEPRÜFT?</p>
              <h2>Nicht das Etikett „handgemacht“, sondern die tatsächliche Herstellung.</h2>
            </div>
            <p>
              Wir betrachten den definierten Zertifizierungsumfang, die wesentlichen produktprägenden Schritte,
              Produktionsorte, externe Fertigung und die Rolle von Maschinen oder automatisierten Prozessen.
            </p>
          </div>

          <div className="whyBenefitGrid">
            <article>
              <strong>Herstellungsschritte</strong>
              <p>Welche Arbeitsschritte bestimmen Form, Funktion, Oberfläche oder Charakter des Produkts?</p>
            </article>
            <article>
              <strong>Mensch & Maschine</strong>
              <p>Unterstützt Technik die menschliche Arbeit oder entsteht das Produkt weitgehend autonom?</p>
            </article>
            <article>
              <strong>Rückverfolgbarkeit</strong>
              <p>Welche Produktionsorte und externen Fertigungsschritte gehören zum zertifizierten Produkt?</p>
            </article>
          </div>

          <div className="whyHeroActions">
            <Link className="salesSecondary" href="/standard">Standard ansehen</Link>
            <Link className="salesSecondary" href="/leitfaden/nachweise">Nachweise ansehen</Link>
          </div>
        </div>
      </section>

      <section className="whyManufacturers">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">HÄUFIGE FRAGEN</p>
              <h2>Handarbeit und Handmade-Zertifizierung verständlich erklärt.</h2>
            </div>
          </div>

          <div className="whyBenefitGrid">
            {faq.map(([question, answer]) => (
              <article key={question}>
                <strong>{question}</strong>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="salesFinalCta whyFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">ZERTIFIZIERUNG STARTEN</p>
            <h2>Passt Ihr Produkt zum Made-by-Human-Standard?</h2>
          </div>
          <div>
            <p>
              Schildern Sie uns Produkt und Herstellung. In der ersten Einschätzung klären wir,
              was konkret zertifiziert werden soll und welche Nachweise dafür benötigt werden.
            </p>
            <Link className="salesFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="salesFinalText" href="/handarbeit-siegel">Mehr zum Handarbeit-Siegel →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
