import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Manufaktur-Siegel für Produkte',
  description: 'Manufaktur-Siegel für konkrete Produkte: Made by Human prüft menschlich geprägte Herstellung, Produktionsorte, Nachweise und Zertifizierungsumfang.',
  alternates: { canonical: canonical('/manufaktur-siegel') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Made by Human',
    title: 'Manufaktur-Siegel für handgefertigte Produkte | Made by Human',
    description: 'Produktbezogene Zertifizierung für Manufaktur-Produkte mit nachvollziehbar menschlich geprägter Herstellung.',
    url: canonical('/manufaktur-siegel'),
    images: [SOCIAL_IMAGE],
  },
};

const criteria = [
  ['Produkt klar abgrenzen', 'Zertifiziert wird ein konkret benanntes Produkt oder eine nachvollziehbar einheitliche Produktfamilie.'],
  ['Prägende Arbeitsschritte erfassen', 'Dokumentiert wird, welche Arbeitsschritte Form, Funktion, Oberfläche oder Charakter des fertigen Produkts wesentlich bestimmen.'],
  ['Mensch und Maschine bewerten', 'Maschinen dürfen unterstützen. Entscheidend ist, ob Menschen die wesentlichen produktprägenden Schritte tatsächlich ausführen oder konkret bestimmen.'],
  ['Produktionsorte nachvollziehen', 'Eigene Werkstatt, weitere Standorte und relevante externe Fertigung werden dem Zertifizierungsumfang eindeutig zugeordnet.'],
];

const faq = [
  ['Kann eine Manufaktur als Unternehmen zertifiziert werden?', 'Made by Human vergibt keine pauschale Zertifizierung für das gesamte Unternehmen. Zertifiziert wird ein klar bezeichnetes Produkt oder eine abgegrenzte Produktfamilie mit den dazugehörigen Herstellungsprozessen und Produktionsorten.'],
  ['Ist das Siegel nur für kleine Betriebe?', 'Nein. Entscheidend ist nicht die Unternehmensgröße, sondern der konkrete Herstellungsprozess des Produkts. Auch größere Hersteller können geeignete Produktlinien oder Produktfamilien prüfen lassen.'],
  ['Muss eine Manufaktur ausschließlich mit Handwerkzeugen arbeiten?', 'Nein. Maschinen und technische Hilfsmittel dürfen eingesetzt werden. Relevant ist, ob die wesentlichen produktprägenden Schritte weiterhin nachvollziehbar durch Menschen ausgeführt oder konkret bestimmt werden.'],
  ['Was ist mit ausgelagerten Arbeitsschritten?', 'Externe Fertigung schließt eine Zertifizierung nicht automatisch aus. Wesentliche externe Schritte und Produktionsorte müssen transparent angegeben und dem Zertifizierungsumfang zugeordnet werden.'],
  ['Ist Made by Human ein Made-in-Germany-Siegel?', 'Nein. Made by Human bestätigt keine bestimmte nationale Herkunft. Die Zertifizierung bewertet, ob die wesentlichen Herstellungsschritte des konkreten Produkts nachvollziehbar menschlich geprägt sind.'],
  ['Welche Manufaktur-Produkte eignen sich besonders?', 'Typische Beispiele sind Schmuck, Möbel und Holzprodukte, Textilien, Lederwaren, Keramik und weitere physische Produkte, bei denen menschliche Arbeit die Herstellung wesentlich prägt.'],
];

export default function ManufakturSealPage() {
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
      { '@type': 'ListItem', position: 2, name: 'Manufaktur-Siegel', item: canonical('/manufaktur-siegel') },
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
            <p className="premiumEyebrow">MANUFAKTUR · HANDWERK · PRODUKTZERTIFIZIERUNG</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Ein Manufaktur-Siegel für nachvollziehbar menschlich geprägte Produkte.</h1>
            <p className="whyHeroLead">
              Manufaktur steht für Herstellung mit Können, Entscheidungen und sichtbarer menschlicher Arbeit.
              Made by Human macht diese Aussage für konkrete Produkte prüfbar: über einen definierten
              Zertifizierungsumfang, dokumentierte Herstellungsprozesse und einen öffentlichen Registereintrag.
            </p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Manufaktur-Produkt anfragen</Link>
              <Link className="salesSecondary" href="/handarbeit-zertifizieren">Ablauf der Zertifizierung</Link>
            </div>
          </div>
          <div className="whyHeroVisual">
            <figure>
              <img
                src={assetBase + '/brand/IMG_1039.webp'}
                width="1536"
                height="1024"
                fetchPriority="high"
                decoding="async"
                alt="Menschliche Bearbeitung eines Produkts in einer Werkstatt"
              />
              <figcaption>Werkstatt, Prozess und Produkt werden konkret betrachtet.</figcaption>
            </figure>
            <div className="whySealTag">
              <img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="Made by Human Zertifizierungszeichen" width="96" height="96" />
              <div>
                <span>PRODUKTBEZOGEN</span>
                <strong>Manufaktur-Produkte nachvollziehbar zertifizieren.</strong>
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
              <p className="premiumSectionLabel">WAS WIRD GEPRÜFT?</p>
              <h2>Das konkrete Produkt zählt – nicht nur die Bezeichnung Manufaktur.</h2>
            </div>
            <p>
              Ein Manufakturbegriff allein sagt noch nicht, wie ein Produkt tatsächlich entsteht.
              Deshalb betrachtet Made by Human die Herstellungsschritte, Produktionsorte, eingesetzten Maschinen,
              externe Fertigung und geeignete Nachweise für das konkret bezeichnete Produkt.
            </p>
          </div>
          <div className="whyBenefitGrid">
            {criteria.map(([title, copy]) => (
              <article key={title}><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="whyCustomers">
        <div className="shell whyCustomersGrid">
          <div className="whyCustomersIntro">
            <p className="premiumSectionLabel premiumSectionLabelLight">MANUFAKTUR MIT MASCHINEN</p>
            <h2>Moderne Technik und menschliche Herstellung schließen sich nicht aus.</h2>
          </div>
          <div>
            <p>
              In Werkstätten und Manufakturen gehören Sägen, Fräsen, Nähmaschinen, Pressen, Öfen,
              Poliermaschinen oder andere technische Hilfsmittel oft selbstverständlich zur Produktion.
              Entscheidend ist nicht, ob Maschinen vorhanden sind, sondern welche Schritte das fertige Produkt
              wesentlich prägen und wie Menschen diese Arbeit tatsächlich ausführen oder konkret bestimmen.
            </p>
            <Link className="desireTextLink desireTextLinkLight" href="/wissen/handarbeit-mit-maschinen">Handarbeit mit Maschinen erklärt →</Link>
          </div>
        </div>
      </section>

      <section className="whyComparison">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">PRODUKTARTEN</p>
              <h2>Für viele klassische Manufaktur-Produkte geeignet.</h2>
            </div>
            <p>Die genaue Eignung wird immer anhand des konkreten Herstellungsprozesses geprüft.</p>
          </div>
          <div className="whyBenefitGrid">
            <article><strong>Schmuck</strong><p>Goldschmiede, Schmuckmanufakturen und Accessoire-Hersteller mit menschlich geprägter Formgebung, Montage oder Finish.</p><Link className="desireTextLink" href="/zertifizierung/schmuck">Schmuck zertifizieren →</Link></article>
            <article><strong>Möbel & Holz</strong><p>Tischlereien, Möbelmanufakturen und Holzwerkstätten mit nachvollziehbarer Bearbeitung, Verbindung, Montage und Oberfläche.</p><Link className="desireTextLink" href="/zertifizierung/holz-moebel">Holz & Möbel zertifizieren →</Link></article>
            <article><strong>Textilien, Leder & Keramik</strong><p>Produktgruppen mit menschlich geprägtem Zuschnitt, Nähen, Formgebung, Dekor, Montage oder Finish.</p><Link className="desireTextLink" href="/zertifizierung">Alle Produktarten ansehen →</Link></article>
          </div>
        </div>
      </section>

      <section className="manufacturerFaq">
        <div className="shell manufacturerFaqGrid">
          <div>
            <div className="sectionNo">HÄUFIGE FRAGEN</div>
            <h2>Manufaktur-Siegel und Produktzertifizierung.</h2>
            <p>Worauf Hersteller vor einer Anfrage achten sollten.</p>
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
          <div><p className="premiumSectionLabel premiumSectionLabelLight">ZERTIFIZIERUNGSANFRAGE</p><h2>Ihre Manufaktur stellt Produkte mit echter menschlicher Prägung her?</h2></div>
          <div>
            <p>Beschreiben Sie das konkrete Produkt, die wesentlichen Arbeitsschritte und Produktionsorte. Wir klären, welcher Zertifizierungsumfang sinnvoll ist.</p>
            <Link className="salesFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Produkt prüfen lassen</Link>
            <Link className="salesFinalText" href="/human-made-siegel">Human Made Siegel verstehen →</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
