import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Warum ein Siegel für menschliche Herstellung?',
  description: 'Warum Made by Human menschliche Herstellung sichtbar macht – für Hersteller, Marken und Käufer.',
  alternates: { canonical: canonical('/warum-made-by-human') },
  openGraph: {
    title: 'Warum ein Siegel für menschliche Herstellung? | Made by Human',
    description: 'Warum menschliche Herstellung sichtbar und überprüfbar sein sollte.',
    url: canonical('/warum-made-by-human'),
    images: [SOCIAL_IMAGE],
  },
};

const manufacturerBenefits = [
  ['Auf eine Prüfung verweisen', 'Sie können die Aussage über Ihre Herstellung mit einer Zertifizierung für das konkrete Produkt belegen.'],
  ['Den Nachweis im Verkauf nutzen', 'Zeichen und Registerlink lassen sich auf Verpackungen, Produktseiten und im Verkauf einsetzen.'],
];

const customerBenefits = [
  ['Die Aussage verstehen', 'Das Zeichen steht dafür, dass die wesentlichen Herstellungsschritte des Produkts nachweislich durch Menschen ausgeführt werden.'],
  ['Den Geltungsbereich prüfen', 'Über Zertifizierungs-ID oder QR-Code sehen Käufer im Register, für welches Produkt die Zertifizierung gilt und ob sie gültig ist.'],
];

const claimComparison = [
  ['„Handgemacht“ ohne zusätzlichen Nachweis', 'Eigene Angabe des Herstellers', 'Keine Prüfung aus der Angabe allein erkennbar', 'Kein Registereintrag aus der Angabe allein ableitbar'],
  ['Made by Human', 'Klare Aussage für ein bestimmtes Produkt', 'Vor-Ort-Prüfung und festgehaltene Entscheidung', 'ID, QR und öffentlicher Registereintrag'],
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
              Viele Hersteller investieren bewusst in Facharbeit und handwerkliche Prozesse.
              Am fertigen Produkt ist davon oft wenig zu erkennen. Made by Human macht diese
              Herstellung mit einer überprüfbaren Zertifizierung sichtbar.
            </p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
              <a className="salesSecondary" href="#hersteller">Vorteile ansehen</a>
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
                alt="Hände bei der Formgebung eines keramischen Produktes"
              />
              <figcaption>Produktionsaufnahme · Maksim Shiriagin / Unsplash</figcaption>
            </figure>
            <div className="whySealTag">
              <img
                src={assetBase + '/brand/made-by-human-logo.webp'}
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

      <section className="whyManufacturers" id="hersteller">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">VORTEILE FÜR HERSTELLER</p>
              <h2>Ein Nachweis für Ihre Herstellung.</h2>
            </div>
            <p>Die Zertifizierung ergänzt Ihre Marke. Sie bezieht sich auf das benannte Produkt oder die Produktfamilie, nicht pauschal auf das gesamte Unternehmen.</p>
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
              Der Vergleich zeigt den Unterschied zwischen einer reinen Herstellerangabe und dem Nachweis nach unserem Standard.
            </p>
          </div>

          <div className="whyComparisonTable" role="table" aria-label="Vergleich einer Herstellerangabe ohne zusätzlichen Nachweis mit Made by Human">
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
          <Link className="desireTextLink" href="/standard">Kriterien und Grenzen des Standards →</Link>
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
