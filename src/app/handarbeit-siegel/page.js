import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Handarbeit-Siegel für handgemachte Produkte',
  description: 'Made by Human ist ein Prüfzeichen für Produkte, deren wesentliche Herstellungsschritte nachweislich von Menschen ausgeführt werden. Informationen für Hersteller zu Prüfung, Nachweisen und Zertifizierung.',
  alternates: { canonical: canonical('/handarbeit-siegel') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Made by Human',
    title: 'Handarbeit-Siegel für handgemachte Produkte | Made by Human',
    description: 'Ein Prüfzeichen für nachweisbar menschliche Herstellung – mit klaren Kriterien, Prüfung und öffentlichem Register.',
    url: canonical('/handarbeit-siegel'),
    images: [SOCIAL_IMAGE],
  },
};

const benefits = [
  ['Klare Kriterien statt Werbeaussage', 'Entscheidend ist nicht das Wort „handgemacht“, sondern welche wesentlichen Herstellungsschritte tatsächlich von Menschen ausgeführt werden.'],
  ['Nachweise zur Herstellung', 'Produktionsorte, Herstellungsprozess und geeignete Belege werden dem konkret zertifizierten Produkt oder der Produktfamilie zugeordnet.'],
  ['Öffentlich überprüfbar', 'Eine freigegebene Zertifizierung erhält eine eindeutige ID und einen Registereintrag, über den Status und Zertifizierungsumfang geprüft werden können.'],
];

const steps = [
  ['01', 'Produkt abgrenzen', 'Wir legen fest, welches Produkt oder welche Produktfamilie geprüft werden soll und welche Produktionsorte dazugehören.'],
  ['02', 'Herstellung erfassen', 'Die wesentlichen menschlichen Arbeitsschritte, eingesetzte Maschinen und mögliche externe Fertigung werden dokumentiert.'],
  ['03', 'Nachweise prüfen', 'Unterlagen und Informationen zur tatsächlichen Herstellung werden geprüft und offene Punkte geklärt.'],
  ['04', 'Vor Ort bewerten', 'Wo es für die belastbare Beurteilung erforderlich ist, wird die Herstellung vor Ort geprüft.'],
  ['05', 'Entscheidung dokumentieren', 'Das Prüfergebnis wird fachlich bewertet. Bei Freigabe werden Zertifizierungsumfang und Status registriert.'],
];

const faq = [
  ['Was ist ein Handarbeit-Siegel?', 'Ein Handarbeit-Siegel soll sichtbar machen, dass bestimmte Anforderungen an die Herstellung eines Produkts erfüllt sind. Made by Human konzentriert sich dabei auf die Frage, ob die wesentlichen produktprägenden Herstellungsschritte tatsächlich von Menschen ausgeführt werden und nachvollziehbar belegt sind.'],
  ['Ist Made by Human nur für komplett handgefertigte Produkte?', 'Nein. Maschinen dürfen die Arbeit unterstützen. Entscheidend ist, dass die wesentlichen produktprägenden Schritte weiterhin unmittelbar durch Menschen ausgeführt werden und das Produkt nicht weitgehend autonom entsteht.'],
  ['Was wird zertifiziert – das Unternehmen oder das Produkt?', 'Die Zertifizierung bezieht sich auf ein klar bezeichnetes Produkt oder eine klar abgegrenzte Produktfamilie mit den dazugehörigen Herstellungsprozessen und Produktionsorten. Sie ist kein pauschales Unternehmenssiegel.'],
  ['Welche Nachweise werden für handgemachte Produkte benötigt?', 'Das hängt vom Produkt und vom Herstellungsprozess ab. Möglich sind zum Beispiel Prozessbeschreibungen, Produktionsunterlagen, Fotos oder Videos sowie Angaben zu Standorten und externer Fertigung.'],
  ['Für welche Branchen ist das Siegel gedacht?', 'Made by Human richtet sich an Hersteller physischer Produkte, bei denen menschliche Arbeit die Herstellung wesentlich prägt – zum Beispiel Schmuck, Lederwaren, Textilien, Möbel, Holzprodukte, Keramik und weitere handwerklich oder manuell geprägte Produkte.'],
  ['Wie kann ich mein Produkt zertifizieren lassen?', 'Hersteller können zunächst eine Zertifizierungsanfrage stellen. Wir prüfen den vorgesehenen Zertifizierungsumfang und klären, welche Informationen und Nachweise für das konkrete Produkt benötigt werden.'],
];

export default function HandarbeitSiegelPage() {
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
      { '@type': 'ListItem', position: 2, name: 'Handarbeit-Siegel', item: canonical('/handarbeit-siegel') },
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
            <p className="premiumEyebrow">HANDARBEIT · HANDGEMACHT · ZERTIFIZIERUNG</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Ein Handarbeit-Siegel für nachweisbar menschliche Herstellung.</h1>
            <p className="whyHeroLead">
              „Handgemacht“ ist schnell gesagt. Made by Human macht sichtbar, welche wesentlichen
              Herstellungsschritte eines Produkts tatsächlich von Menschen ausgeführt werden –
              mit klaren Kriterien, dokumentierter Prüfung und öffentlichem Register.
            </p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Handarbeit zertifizieren lassen</Link>
              <Link className="salesSecondary" href="/standard">Kriterien ansehen</Link>
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
                alt="Menschliche Handarbeit bei der Herstellung eines Produktes"
              />
              <figcaption>Herstellung im Mittelpunkt · Made by Human</figcaption>
            </figure>
            <div className="whySealTag">
              <img
                src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'}
                alt="Made by Human Prüfzeichen für menschliche Herstellung"
                width="96"
                height="96"
              />
              <div>
                <span>NACHWEIS STATT NUR AUSSAGE</span>
                <strong>Menschliche Herstellung nachvollziehbar machen.</strong>
                <p>Produkt · Herstellung · Nachweise · Register</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyManufacturers" id="handarbeit-siegel">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">WAS EIN HANDARBEIT-SIEGEL LEISTEN SOLLTE</p>
              <h2>Nicht das Etikett zählt, sondern die tatsächliche Herstellung.</h2>
            </div>
            <p>
              Made by Human bewertet keine romantische Vorstellung von Handarbeit. Entscheidend ist,
              welche Arbeitsschritte das fertige Produkt wesentlich prägen und wer diese Schritte tatsächlich ausführt.
            </p>
          </div>

          <div className="whyBenefitGrid">
            {benefits.map(([title, copy]) => (
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
            <p className="premiumSectionLabel premiumSectionLabelLight">HANDARBEIT MIT MASCHINEN?</p>
            <h2>Maschinen schließen menschliche Herstellung nicht aus.</h2>
          </div>
          <div>
            <p>
              Handwerk und moderne Fertigung funktionieren oft nicht ohne Werkzeuge oder Maschinen.
              Deshalb verlangt Made by Human keine rein manuelle Herstellung. Technik darf unterstützen.
              Nicht passend ist dagegen eine Produktion, bei der das verkaufsfertige Produkt im Wesentlichen
              autonom entsteht und der Mensch nur überwacht, startet oder entnimmt.
            </p>
            <Link className="desireTextLink desireTextLinkLight" href="/standard">Zum Made by Human Standard →</Link>
          </div>
        </div>
      </section>

      <section className="whyComparison">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">HANDARBEIT ZERTIFIZIEREN LASSEN</p>
              <h2>So wird aus einer Aussage ein nachvollziehbarer Nachweis.</h2>
            </div>
            <p>
              Der genaue Prüfaufwand hängt vom Produkt ab. Der Grundablauf bleibt jedoch transparent und nachvollziehbar.
            </p>
          </div>

          <div className="whyBenefitGrid">
            {steps.map(([number, title, copy]) => (
              <article key={number}>
                <span className="sectionNo">{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <Link className="desireTextLink" href="/fuer-hersteller">Zertifizierungsablauf für Hersteller →</Link>
        </div>
      </section>

      <section className="manufacturerFaq">
        <div className="shell manufacturerFaqGrid">
          <div>
            <div className="sectionNo">HÄUFIGE FRAGEN</div>
            <h2>Handarbeit, Handmade und Zertifizierung.</h2>
            <p>
              Die wichtigsten Fragen für Hersteller, die ihre menschlich geprägte Herstellung nachvollziehbar belegen möchten.
            </p>
          </div>
          <div className="manufacturerFaqList">
            {faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="salesFinalCta whyFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
            <h2>Sie möchten Ihre Handarbeit zertifizieren lassen?</h2>
          </div>
          <div>
            <p>
              Senden Sie uns Produkt, Produktionsorte und eine kurze Beschreibung Ihrer Herstellung.
              Wir klären im ersten Schritt, ob das Produkt grundsätzlich zum Made by Human Standard passt.
            </p>
            <Link className="salesFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="salesFinalText" href="/leitfaden/nachweise">Welche Nachweise werden benötigt? →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
