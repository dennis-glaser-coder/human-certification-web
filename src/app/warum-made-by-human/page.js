import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Warum Made by Human?',
  description: 'Warum Made by Human menschliche Herstellung sichtbar macht – für Hersteller, Marken und Käufer.',
  alternates: { canonical: canonical('/warum-made-by-human') },
  openGraph: {
    title: 'Warum Made by Human? | Made by Human',
    description: 'Warum menschliche Herstellung sichtbar und überprüfbar sein sollte.',
    url: canonical('/warum-made-by-human'),
  },
};

const manufacturerBenefits = [
  ['Den Unterschied sichtbar machen', 'Wenn menschliche Arbeit Ihr Produkt prägt, sollen Kunden diesen Unterschied auch erkennen können.'],
  ['Nicht nur behaupten. Belegen.', 'Statt nur mit Begriffen wie „handgemacht“ oder „manufakturgefertigt“ zu werben, können Sie auf eine konkrete Prüfung verweisen.'],
  ['Die Arbeit dahinter zeigen', 'Auf Verpackung, Produktseite und im Verkauf können Sie zeigen, welche menschliche Arbeit in Ihrem Produkt steckt.'],
  ['Vertrauen im Verkauf stärken', 'Zertifizierungs-ID und Register geben Kunden und Geschäftspartnern die Möglichkeit, die Aussage selbst zu prüfen.'],
];

const customerBenefits = [
  ['Schnell verstehen', 'Käufer erkennen, dass menschliche Arbeit dieses Produkt wesentlich prägt.'],
  ['Öffentlich prüfen', 'Zertifizierungs-ID und QR-Code führen zum öffentlichen Datensatz mit Produktbezug und aktuellem Status.'],
  ['Sehen, wofür die Zertifizierung gilt', 'Der Registereintrag zeigt, welches Produkt oder welche Produktfamilie tatsächlich zertifiziert ist.'],
];

const claimComparison = [
  ['„Handgemacht“', 'Eigene Angabe des Herstellers', 'Kann unterschiedlich verstanden werden', 'Nicht öffentlich prüfbar'],
  ['Made by Human', 'Klare Aussage für ein bestimmtes Produkt', 'Vor-Ort-Prüfung und dokumentierte Entscheidung', 'ID, QR und öffentlicher Registereintrag'],
];


export default function WhyPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main className="whyPage">
      <SiteHeader />

      <section className="whyHero">
        <div className="shell whyHeroGrid">
          <div className="whyHeroCopy">
            <p className="premiumEyebrow">WARUM MADE BY HUMAN?</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Wenn Menschen den Unterschied machen, sollte man ihn sehen können.</h1>
            <p className="whyHeroLead">
              Wenn Menschen ein Produkt wesentlich prägen, sollte diese Leistung nicht in einer allgemeinen
              Werbeaussage verschwinden. Wir machen den Unterschied sichtbar, prüfbar und verständlich –
              für Hersteller, Handel und Käufer.
            </p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
              <a className="salesSecondary" href="#hersteller">Vorteile ansehen</a>
            </div>
          </div>

          <div className="whyHeroVisual">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1771523350488-32af5ba560e6?auto=format&fit=crop&w=1800&q=84"
                alt="Hände bei der Formgebung eines keramischen Produktes"
              />
              <figcaption>Produktionsaufnahme · Maksim Shiriagin / Unsplash</figcaption>
            </figure>
            <div className="whySealTag">
              <img
                src={assetBase + '/brand/made-by-human-logo.png'}
                alt="Made by Human Zertifizierungszeichen"
                width="96"
                height="96"
              />
              <div>
                <span>AM PRODUKT SICHTBAR</span>
                <strong>Geprüfte Herstellung. Öffentlich verifizierbar.</strong>
                <p>Für dieses Produkt · Zertifizierungs-ID · QR · Register</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyThesis">
        <div className="shell whyThesisGrid">
          <p className="premiumSectionLabel">DER KERN</p>
          <div>
            <h2>Menschliche Arbeit wird wertvoller, wenn man sie belegen kann.</h2>
            <p>
              Viele Marken investieren bewusst in eigene Fertigung, Facharbeit und handwerkliche Prozesse.
              Von außen ist davon oft wenig zu erkennen. Made by Human zeigt, welche menschliche Arbeit
              ein Produkt tatsächlich prägt – und macht das Ergebnis öffentlich prüfbar.
            </p>
            <div className="whyThesisSignature">
              <span>NICHT GEGEN TECHNOLOGIE.</span>
              <strong>Für Sichtbarkeit dort, wo Menschen den Unterschied machen.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="whyManufacturers" id="hersteller">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">VORTEILE FÜR HERSTELLER</p>
              <h2>Geprüfte menschliche Herstellung macht den Unterschied sichtbar.</h2>
            </div>
            <p>
              Die Zertifizierung ersetzt weder eine gute Marke noch ein gutes Produkt.
              Sie zeigt aber glaubwürdig, was Ihr Produkt in der Herstellung unterscheidet –
              und gibt Kunden einen Nachweis, den sie selbst prüfen können.
            </p>
          </div>

          <div className="whyBenefitGrid">
            {manufacturerBenefits.map(([title, copy]) => (
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
            <p className="premiumSectionLabel premiumSectionLabelLight">VORTEILE FÜR KÄUFER</p>
            <h2>Käufer sehen, was das Zeichen wirklich bedeutet.</h2>
            <p>
              Käufer müssen nicht verstehen, wie jede Fertigungsstufe technisch funktioniert.
              Sie sollen verstehen, was die Kennzeichnung bedeutet – und selbst prüfen können, ob sie für das konkrete Produkt gilt.
            </p>
          </div>

          <div>
            <div className="whyCustomerList">
              {customerBenefits.map(([title, copy]) => (
                <article key={title}>
                  <div>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <Link className="desireTextLink desireTextLinkLight" href="/fuer-kaeufer">Was das Zeichen für Käufer bedeutet →</Link>
          </div>
        </div>
      </section>

      <section className="whyComparison">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">WARUM NICHT EINFACH „HANDGEMACHT“?</p>
              <h2>Eine geprüfte Aussage ist klarer als eine eigene Werbeaussage.</h2>
            </div>
            <p>
              Begriffe wie „handgemacht“, „handcrafted“ oder „manufakturgefertigt“ können sinnvoll sein,
              bleiben aber häufig Eigenangaben. Wir definieren die Aussage zur menschlichen Herstellung enger
              und machen das Ergebnis über Prüfung und Register sichtbar.
            </p>
          </div>

          <div className="whyComparisonTable" role="table" aria-label="Vergleich Herstellerangabe und Made by Human">
            <div className="whyComparisonHead" role="row">
              <span role="columnheader">AUSSAGE</span>
              <span role="columnheader">GRUNDLAGE</span>
              <span role="columnheader">PRÜFUNG</span>
              <span role="columnheader">ÖFFENTLICH PRÜFBAR</span>
            </div>
            {claimComparison.map(([claim, basis, check, verification]) => (
              <div className="whyComparisonRow" role="row" key={claim}>
                <strong role="cell">{claim}</strong>
                <span role="cell">{basis}</span>
                <span role="cell">{check}</span>
                <span role="cell">{verification}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="whyProof">
        <div className="shell whyProofGrid">
          <div>
            <p className="premiumSectionLabel">WAS HINTER DEM ZEICHEN STEHT</p>
            <h2>Der Wert des Zeichens entsteht durch die Prüfung dahinter.</h2>
          </div>
          <div className="whyProofList">
            <div><strong>Fester Standard</strong></div>
            <div><strong>Vor-Ort-Audit beim Hersteller</strong></div>
            <div><strong>Festgehaltene Entscheidung</strong></div>
            <div><strong>Klar benanntes Produkt</strong></div>
            <div><strong>ID, QR-Code und öffentliches Register</strong></div>
          </div>
        </div>
      </section>

      <section className="salesFinalCta whyFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
            <h2>Prüfen Sie, ob Ihr Produkt zum Standard passt.</h2>
          </div>
          <div>
            <p>
              In der ersten Einschätzung klären wir, ob Ihr Produkt grundsätzlich zum Standard passt und was genau zertifiziert werden soll.
            </p>
            <Link className="salesFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="salesFinalText" href="/fuer-hersteller">Ablauf der Zertifizierung ansehen →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
