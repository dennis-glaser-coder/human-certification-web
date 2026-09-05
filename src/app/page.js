import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const principles = [
  {
    term: 'Produktbezogen',
    text: 'Die Zertifizierung bezieht sich auf ein eindeutig definiertes physisches Produkt oder eine klar abgegrenzte Produktfamilie.'
  },
  {
    term: 'Herstellungsbezogen',
    text: 'Geprüft werden die wesentlichen Arbeitsschritte, durch die aus Materialien und Komponenten das Endprodukt entsteht.'
  },
  {
    term: 'Nachweisbar',
    text: 'Herstellungsorte, relevante Fremdfertigung und geeignete Nachweise müssen dem geprüften Produkt nachvollziehbar zugeordnet werden können.'
  }
];

export default function Home() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main className="premiumHome">
      <SiteHeader />

      <section className="premiumHero">
        <div className="shell premiumHeroGrid">
          <div className="premiumHeroCopy">
            <p className="premiumEyebrow">STANDARD FÜR MENSCHLICHE HERSTELLUNG</p>
            <h1>Menschliche Herstellung, überprüfbar am Produkt.</h1>
            <p className="premiumLead">
              Made by Humans entwickelt einen branchenübergreifenden Standard für physische Produkte,
              deren wesentliche Herstellungsschritte nachweislich durch Menschen ausgeführt werden.
            </p>
            <div className="premiumHeroLinks">
              <Link href="/standard">Standard ansehen</Link>
              <Link href="/fuer-hersteller">Produkt vorstellen</Link>
            </div>
          </div>

          <div className="premiumSealField" aria-label="Made by Humans Zertifizierungszeichen">
            <div className="premiumSealRule">
              <span>ZERTIFIZIERUNGSZEICHEN</span>
              <span>MADE BY HUMANS</span>
            </div>
            <img
              src={assetBase + '/brand/made-by-humans-seal.png'}
              alt="Made by Humans Zertifizierungszeichen"
              width="360"
              height="360"
            />
            <p>Für Produkte, deren wesentliche Herstellungsschritte nach dem Standard geprüft wurden.</p>
          </div>
        </div>
      </section>

      <section className="premiumClaim">
        <div className="shell premiumClaimGrid">
          <p className="premiumSectionLabel">AUSSAGE DES ZEICHENS</p>
          <div>
            <blockquote>
              Dieses Produkt wurde in seinen wesentlichen Herstellungsschritten
              nachweislich durch Menschen gefertigt.
            </blockquote>
            <p>
              Die Aussage ist produktbezogen. Sie soll nicht auf Selbstauskunft beruhen,
              sondern auf definierten Kriterien, prüfbaren Nachweisen und einer nachvollziehbaren Entscheidung.
            </p>
          </div>
        </div>
      </section>

      <section className="premiumStandard">
        <div className="shell premiumStandardGrid">
          <div className="premiumStandardIntro">
            <p className="premiumSectionLabel">DER STANDARD</p>
            <h2>Ein klar abgegrenzter Prüfgegenstand.</h2>
            <p>
              Made by Humans bewertet nicht pauschal ein Unternehmen und ersetzt keine Herkunfts-,
              Nachhaltigkeits-, Bio- oder Fairtrade-Kennzeichnung.
            </p>
          </div>

          <div className="premiumPrinciples">
            {principles.map((item) => (
              <div className="premiumPrinciple" key={item.term}>
                <span>{item.term}</span>
                <p>{item.text}</p>
              </div>
            ))}
            <Link className="premiumInlineLink" href="/standard">Kriterien und Abgrenzungen</Link>
          </div>
        </div>
      </section>

      <section className="premiumRegister">
        <div className="shell premiumRegisterGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">PUBLIC REGISTER</p>
            <h2>Eine Kennzeichnung muss überprüfbar bleiben.</h2>
            <p className="premiumRegisterIntro">
              Der öffentliche Datensatz ordnet eine Zertifizierungs-ID dem Hersteller, dem geprüften Produkt,
              der angewendeten Standardfassung und dem aktuellen Status zu.
            </p>
          </div>

          <div className="premiumVerify">
            <HeroVerify />
          </div>
        </div>
      </section>

      <section className="premiumManufacturer">
        <div className="shell premiumManufacturerGrid">
          <div>
            <p className="premiumSectionLabel">FÜR HERSTELLER</p>
            <h2>Produkte und Herstellungsprozesse zur Validierung vorstellen.</h2>
          </div>
          <div>
            <p>
              Für die aktuelle Validierung werden physische Produkte gesucht, deren wesentliche Herstellungsschritte
              klar beschrieben und praktisch geprüft werden können.
            </p>
            <p>
              Die Vorstellung ist unverbindlich und noch kein Zertifizierungsantrag.
            </p>
            <Link className="premiumInlineLink" href="/fuer-hersteller">Produkt vorstellen</Link>
          </div>
        </div>
      </section>

      <section className="premiumClosingLinks">
        <div className="shell">
          <Link href="/dokumente">Dokumente</Link>
          <Link href="/transparenz">Transparenz & Governance</Link>
          <Link href="/ueber-uns">Über Made by Humans</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
