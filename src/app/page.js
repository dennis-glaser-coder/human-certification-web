import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const principles = [
  {
    term: 'Geltungsbereich',
    text: 'Die Zertifizierung bezieht sich auf ein eindeutig definiertes physisches Produkt oder eine klar abgegrenzte Produktfamilie.'
  },
  {
    term: 'Menschliche Ausführung',
    text: 'Geprüft wird, ob die wesentlichen produktprägenden Herstellungsschritte tatsächlich durch Menschen ausgeführt werden.'
  },
  {
    term: 'Nachweise',
    text: 'Herstellungsorte, relevante Fremdfertigung und geeignete Unterlagen müssen dem geprüften Produkt nachvollziehbar zugeordnet werden können.'
  },
  {
    term: 'Entscheidung & Status',
    text: 'Prüfergebnis, angewendete Standardfassung und Zertifizierungsstatus werden dokumentiert und öffentlich verifizierbar gemacht.'
  }
];

const process = [
  ['01', 'Produkt abgrenzen', 'Produkt oder Produktfamilie und relevante Herstellungsorte eindeutig festlegen.'],
  ['02', 'Herstellung dokumentieren', 'Wesentliche Arbeitsschritte, Standorte und relevante Fremdfertigung erfassen.'],
  ['03', 'Nachweise prüfen', 'Unterlagen und Informationen zur tatsächlichen Ausführung bewerten.'],
  ['04', 'Entscheidung dokumentieren', 'Prüfergebnis fachlich nachvollziehbar festhalten und den Zertifizierungsstatus bestimmen.'],
  ['05', 'Status veröffentlichen', 'Freigegebene Zertifizierungen erhalten eine eindeutige ID und einen öffentlich prüfbaren Datensatz.']
];

export default function Home() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main className="premiumHome">
      <SiteHeader />

      <section className="premiumHero">
        <div className="shell premiumHeroGrid">
          <div className="premiumHeroCopy">
            <p className="premiumEyebrow">STANDARD FÜR NACHWEISBAR MENSCHLICHE HERSTELLUNG</p>
            <h1>Menschliche Arbeit. Sichtbar. Nachweisbar.</h1>
            <p className="premiumLead">
              Made by Humans definiert, wann ein physisches Produkt in seinen wesentlichen Herstellungsschritten
              durch Menschen gefertigt wurde – und wie diese Aussage dokumentiert, geprüft und öffentlich verifiziert werden kann.
            </p>
            <div className="premiumHeroLinks">
              <Link href="/standard">Standard ansehen</Link>
              <Link href="/fuer-hersteller">Produkt einordnen</Link>
            </div>
            <div className="premiumHeroProof" aria-label="Grundprinzipien des Standards">
              <span>Definierte Kriterien</span>
              <span>Dokumentierte Nachweise</span>
              <span>Öffentliche Verifizierung</span>
            </div>
          </div>

          <div className="premiumSealField" aria-label="Made by Humans Zertifizierungszeichen">
            <div className="premiumSealRule">
              <span>ZERTIFIZIERUNGSZEICHEN</span>
              <span>PRODUKTBEZOGEN</span>
            </div>
            <img
              src={assetBase + '/brand/made-by-humans-seal.png'}
              alt="Made by Humans Zertifizierungszeichen"
              width="360"
              height="360"
            />
            <p>
              Das Zeichen ist an ein konkret geprüftes Produkt, eine Standardfassung
              und einen überprüfbaren Zertifizierungsstatus gebunden.
            </p>
          </div>
        </div>
      </section>

      <section className="premiumClaim">
        <div className="shell premiumClaimGrid">
          <p className="premiumSectionLabel">WAS DAS ZEICHEN AUSSAGT</p>
          <div>
            <blockquote>
              Dieses Produkt wurde in seinen wesentlichen Herstellungsschritten
              nachweislich durch Menschen gefertigt.
            </blockquote>
            <p>
              Die Aussage gilt ausschließlich für den zertifizierten Produktumfang.
              Sie trifft keine Aussage zu Herkunftsland, Nachhaltigkeit, Bio-, Fairtrade- oder anderen Produkteigenschaften.
            </p>
          </div>
        </div>
      </section>


      <section className="premiumEditorial" aria-label="Menschliche Arbeit im Herstellungsprozess">
        <div className="shell premiumEditorialGrid">
          <figure className="premiumEditorialImage">
            <img
              src="https://images.unsplash.com/photo-1774282557812-6182cc59f638?auto=format&fit=crop&w=1800&q=84"
              alt="Facharbeiter bei der manuellen Metallbearbeitung in einer Werkstatt"
              loading="lazy"
            />
            <figcaption>Produktionsaufnahme · Maksim Shiriagin / Unsplash</figcaption>
          </figure>
          <div className="premiumEditorialCopy">
            <p className="premiumSectionLabel">MENSCHLICHE ARBEIT IM PROZESS</p>
            <h2>Nicht „handgemacht“ als Stil. Sondern menschliche Herstellung als überprüfbare Tatsache.</h2>
            <p>
              Entscheidend ist nicht, ob ein Produkt handwerklich aussieht. Entscheidend ist,
              welche wesentlichen Herstellungsschritte tatsächlich durch Menschen ausgeführt werden
              und ob sich diese Arbeit nachvollziehbar belegen lässt.
            </p>
          </div>
        </div>
      </section>

      <section className="premiumStandard">
        <div className="shell premiumStandardGrid">
          <div className="premiumStandardIntro">
            <p className="premiumSectionLabel">DER STANDARD</p>
            <h2>Eine klare Aussage braucht klare Grenzen.</h2>
            <p>
              Der Standard legt fest, was geprüft wird, welche menschlichen Herstellungsschritte wesentlich sind,
              welche Nachweise erforderlich sind und wie eine Entscheidung dokumentiert wird.
            </p>
          </div>

          <div className="premiumPrinciples">
            {principles.map((item) => (
              <div className="premiumPrinciple" key={item.term}>
                <span>{item.term}</span>
                <p>{item.text}</p>
              </div>
            ))}
            <Link className="premiumInlineLink" href="/standard">Standard und Kriterien ansehen</Link>
          </div>
        </div>
      </section>

      <section className="premiumProcess">
        <div className="shell">
          <div className="premiumProcessHead">
            <div>
              <p className="premiumSectionLabel">ZERTIFIZIERUNGSWEG</p>
              <h2>Vom Produkt zum überprüfbaren Status.</h2>
            </div>
            <p>
              Der Zertifizierungsweg ist so aufgebaut, dass Produktumfang, Herstellungsprozess,
              Nachweise, Entscheidung und öffentlicher Status voneinander nachvollziehbar bleiben.
            </p>
          </div>

          <div className="premiumProcessSteps">
            {process.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="premiumRegister">
        <div className="shell premiumRegisterGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">ÖFFENTLICHES REGISTER</p>
            <h2>Zertifizierungsstatus öffentlich prüfen.</h2>
            <p className="premiumRegisterIntro">
              Jede veröffentlichte Zertifizierung wird über eine eindeutige ID dem Hersteller,
              dem geprüften Produkt, der angewendeten Standardfassung und dem aktuellen Status zugeordnet.
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
            <h2>Passt Ihr Produkt zum Standard?</h2>
          </div>
          <div>
            <p>
              Hersteller können ihr Produkt und den zugehörigen Herstellungsprozess zunächst einordnen lassen.
              Entscheidend sind ein klar abgrenzbares physisches Produkt, nachvollziehbare Arbeitsschritte und geeignete Nachweise.
            </p>
            <p>
              Die Anfrage dient der ersten fachlichen Einordnung und ist noch kein formeller Zertifizierungsantrag.
            </p>
            <Link className="premiumInlineLink" href="/fuer-hersteller">Produkt einordnen</Link>
          </div>
        </div>
      </section>

      <section className="premiumClosingLinks">
        <div className="shell">
          <Link href="/dokumente">Dokumente</Link>
          <Link href="/transparenz">Transparenz & Integrität</Link>
          <Link href="/ueber-uns">Über Made by Humans</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
