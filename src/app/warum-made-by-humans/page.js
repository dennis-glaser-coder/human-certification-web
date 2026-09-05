import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Warum Made by Humans?',
  description: 'Welche Vorteile die Made by Humans Zertifizierung Herstellern und Käufern bietet – von glaubwürdiger Differenzierung bis zur öffentlichen Verifizierung.',
  alternates: { canonical: canonical('/warum-made-by-humans') },
  openGraph: {
    title: 'Warum Made by Humans? | Made by Humans',
    description: 'Warum eine geprüfte Aussage zur menschlichen Herstellung für Hersteller, Marken und Käufer relevant sein kann.',
    url: canonical('/warum-made-by-humans'),
  },
};

const manufacturerBenefits = [
  ['Differenzierung sichtbar machen', 'Wenn menschliche Arbeit Ihr Produkt prägt, wird dieser Unterschied am Produkt sichtbar und überprüfbar.'],
  ['Eigenclaim durch Nachweis ersetzen', 'Statt ausschließlich selbst mit Begriffen wie „handgemacht“ oder „manufakturgefertigt“ zu werben, können Sie auf eine definierte Prüfung verweisen.'],
  ['Wertigkeit erklären', 'Die Zertifizierung schafft einen konkreten Bezug, um den Herstellungsprozess auf Verpackung, Produktseite und im Vertrieb verständlich zu erklären.'],
  ['Vertrieb und Vertrauen unterstützen', 'Zertifizierungs-ID, Register und klar geregelte Markennutzung machen die Aussage im B2C- und B2B-Kontext nachvollziehbar.'],
];

const customerBenefits = [
  ['Schnell verstehen', 'Käufer erkennen, dass menschliche Arbeit ein wesentlicher Bestandteil der Herstellung des konkret gekennzeichneten Produktes ist.'],
  ['Öffentlich prüfen', 'Zertifizierungs-ID und QR-Code führen zum öffentlichen Datensatz mit Produktbezug und aktuellem Status.'],
  ['Umfang einordnen', 'Der Datensatz zeigt, welches Produkt oder welche Produktfamilie tatsächlich von der Zertifizierung erfasst ist.'],
];

const claimComparison = [
  ['„Handgemacht“', 'Eigenangabe des Herstellers', 'Bedeutung kann unterschiedlich ausgelegt werden', 'Keine öffentliche Statusprüfung'],
  ['Made by Humans', 'Definierte produktbezogene Aussage', 'Vor-Ort-Audit und dokumentierte Bewertung', 'ID, QR und öffentlicher Registerdatensatz'],
];


export default function WhyPage() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main className="whyPage">
      <SiteHeader />

      <section className="whyHero">
        <div className="shell whyHeroGrid">
          <div className="whyHeroCopy">
            <p className="premiumEyebrow">WARUM MADE BY HUMANS?</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Menschliche Herstellung sichtbar und überprüfbar machen.</h1>
            <p className="whyHeroLead">
              Wenn Menschen ein Produkt wesentlich prägen, sollte diese Leistung nicht in einer allgemeinen
              Werbeaussage verschwinden. Made by Humans macht den Unterschied sichtbar, prüfbar und verständlich –
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
                src={assetBase + '/brand/made-by-humans-seal.png'}
                alt="Made by Humans Zertifizierungszeichen"
                width="96"
                height="96"
              />
              <div>
                <span>AM PRODUKT SICHTBAR</span>
                <strong>Geprüfte Herstellung. Öffentlich verifizierbar.</strong>
                <p>Produktfokus · Zertifizierungs-ID · QR · Register</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyThesis">
        <div className="shell whyThesisGrid">
          <p className="premiumSectionLabel">DER KERN</p>
          <div>
            <h2>Menschliche Herstellung gewinnt an Wert, wenn sie nachvollziehbar belegt ist.</h2>
            <p>
              Viele Marken investieren bewusst in eigene Fertigung, Facharbeit, handwerkliche Prozesse
              oder menschlich geprägte Produktion. Nach außen bleibt davon oft nur ein unscharfer Begriff.
              Made by Humans übersetzt diesen Herstellungsunterschied in eine klar definierte,
              produktbezogene und öffentlich überprüfbare Aussage.
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
              <h2>Geprüfte menschliche Herstellung schafft ein belastbares Differenzierungsmerkmal.</h2>
            </div>
            <p>
              Die Zertifizierung ersetzt keine gute Marke und kein gutes Produkt.
              Sie kann aber einen realen Herstellungsunterschied glaubwürdiger sichtbar machen
              und dadurch Kommunikation, Vertrieb und Positionierung unterstützen.
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
            <h2>Für Käufer entsteht eine klar überprüfbare Information.</h2>
            <p>
              Käufer müssen nicht verstehen, wie jede Fertigungsstufe technisch funktioniert.
              Sie sollen aber nachvollziehen können, was die Kennzeichnung bedeutet –
              und selbst prüfen können, ob sie für das konkrete Produkt gilt.
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
              bleiben aber häufig Eigenangaben. Made by Humans soll die Aussage zur menschlichen Herstellung
              enger definieren und über Prüfung und Register nachvollziehbar machen.
            </p>
          </div>

          <div className="whyComparisonTable" role="table" aria-label="Vergleich Eigenclaim und Made by Humans">
            <div className="whyComparisonHead" role="row">
              <span role="columnheader">AUSSAGE</span>
              <span role="columnheader">GRUNDLAGE</span>
              <span role="columnheader">PRÜFUNG</span>
              <span role="columnheader">VERIFIZIERUNG</span>
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

      <section className="whyBrandValue">
        <div className="shell whyBrandValueGrid">
          <div className="whyBrandValueVisual">
            <img
              src="https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?auto=format&fit=crop&w=1400&q=84"
              alt="Handwerkliche Bearbeitung eines Werkstücks in einer Werkstatt"
              loading="lazy"
            />
            <div className="whyBrandSeal">
              <img
                src={assetBase + '/brand/made-by-humans-seal.png'}
                alt=""
                aria-hidden="true"
                width="78"
                height="78"
              />
              <span>Nachweis direkt mit der Produktkommunikation verbinden</span>
            </div>
          </div>
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">FÜR DIE MARKE</p>
            <h2>Das Zeichen ergänzt die Herstellermarke um einen überprüfbaren Nachweis.</h2>
            <p>
              Eine starke Marke erzählt, wofür ein Produkt steht. Made by Humans ergänzt diese Geschichte
              um einen überprüfbaren Beleg für einen klar abgegrenzten Teil der Herstellung.
              Gerade dort, wo menschliche Arbeit ein wesentlicher Teil der Positionierung ist,
              kann das Zeichen diese Aussage konsistenter und belastbarer machen.
            </p>
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
            <div><strong>Definierter Standard</strong></div>
            <div><strong>Vor-Ort-Audit beim Hersteller</strong></div>
            <div><strong>Dokumentierte Zertifizierungsentscheidung</strong></div>
            <div><strong>Produktbezogener Zertifizierungsumfang</strong></div>
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
              In der fachlichen Vorprüfung klären wir, ob Ihr Produkt grundsätzlich zum Standard passt
              und welcher Zertifizierungsumfang sinnvoll ist.
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
