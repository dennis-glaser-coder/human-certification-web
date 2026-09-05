import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const principles = [
  {
    title: 'Produktbezogen',
    text: 'Geprüft wird ein konkret definiertes physisches Produkt oder eine klar abgegrenzte Produktfamilie.'
  },
  {
    title: 'Herstellungsbezogen',
    text: 'Im Mittelpunkt stehen die wesentlichen Arbeitsschritte, durch die das verkaufsfertige Produkt entsteht.'
  },
  {
    title: 'Nachweisbar',
    text: 'Herstellungsorte, relevante Fremdfertigung und geeignete Nachweise müssen nachvollziehbar zugeordnet werden können.'
  }
];

export default function Home() {
  return (
    <main className="resetHome">
      <SiteHeader />

      <section className="resetHero">
        <div className="shell resetHeroInner">
          <p className="resetOverline">MADE BY HUMANS</p>
          <h1>Standard für nachweisbar menschliche Herstellung.</h1>
          <p className="resetLead">
            Made by Humans definiert, wann die wesentlichen Herstellungsschritte eines physischen Produkts
            tatsächlich durch Menschen ausgeführt werden und wie diese Eigenschaft geprüft werden kann.
          </p>

          <div className="resetPrimaryLinks">
            <Link href="/standard">Standard lesen</Link>
            <Link href="/fuer-hersteller">Für Hersteller</Link>
            <Link href="/pruefen">Zertifizierungs-ID prüfen</Link>
          </div>
        </div>
      </section>

      <section className="resetStatement">
        <div className="shell resetStatementGrid">
          <p className="resetSectionLabel">AUSSAGE</p>
          <div>
            <p className="resetQuote">
              „Dieses Produkt wurde in seinen wesentlichen Herstellungsschritten
              nachweislich durch Menschen gefertigt.“
            </p>
            <p className="resetSmall">
              Das ist die Aussage, die Made by Humans für ein geprüftes Produkt eindeutig und überprüfbar machen soll.
            </p>
          </div>
        </div>
      </section>

      <section className="resetSection">
        <div className="shell resetTwoColumn">
          <div>
            <p className="resetSectionLabel">WORUM ES GEHT</p>
            <h2>Eine enge Aussage statt eines allgemeinen Qualitätssiegels.</h2>
          </div>
          <div className="resetBody">
            <p>
              Made by Humans bewertet nicht pauschal ein Unternehmen und macht keine Aussage zu Herkunft,
              Nachhaltigkeit, Bio- oder Fairtrade-Eigenschaften.
            </p>
            <p>
              Geprüft wird ausschließlich, ob menschliche Arbeit für die tatsächliche Herstellung
              des definierten Endprodukts wesentlich ist und diese Herstellungsrealität ausreichend belegt werden kann.
            </p>
          </div>
        </div>
      </section>

      <section className="resetSection resetSectionWhite">
        <div className="shell">
          <div className="resetSectionHead">
            <p className="resetSectionLabel">GRUNDLAGE DER PRÜFUNG</p>
            <h2>Was der Standard festlegt.</h2>
          </div>

          <div className="resetPrinciples">
            {principles.map((item) => (
              <div className="resetPrincipleRow" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <Link className="resetTextLink" href="/standard">Kriterien und Abgrenzungen ansehen</Link>
        </div>
      </section>

      <section className="resetRegister">
        <div className="shell resetRegisterGrid">
          <div>
            <p className="resetSectionLabel resetSectionLabelLight">PUBLIC REGISTER</p>
            <h2>Eine Kennzeichnung muss überprüfbar bleiben.</h2>
          </div>
          <div>
            <p>
              Ein öffentlicher Registereintrag soll die Zertifizierungs-ID dem Hersteller,
              dem geprüften Produkt, der angewendeten Standardfassung und dem aktuellen Status zuordnen.
            </p>
            <div className="resetRegisterLinks">
              <Link href="/register">Public Register</Link>
              <Link href="/pruefen">ID prüfen</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="resetSection">
        <div className="shell resetTwoColumn">
          <div>
            <p className="resetSectionLabel">FÜR HERSTELLER</p>
            <h2>Produktionsprozesse zur Validierung vorstellen.</h2>
          </div>
          <div className="resetBody">
            <p>
              Für die aktuelle Validierung werden physische Produkte gesucht, deren wesentliche
              Herstellungsschritte klar beschrieben und praktisch geprüft werden können.
            </p>
            <p>
              Eine Vorstellung ist unverbindlich und noch kein Zertifizierungsantrag.
            </p>
            <Link className="resetTextLink" href="/fuer-hersteller">Produkt vorstellen</Link>
          </div>
        </div>
      </section>

      <section className="resetLinks">
        <div className="shell resetLinksInner">
          <Link href="/dokumente">Dokumente</Link>
          <Link href="/transparenz">Transparenz & Governance</Link>
          <Link href="/ueber-uns">Über Made by Humans</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
