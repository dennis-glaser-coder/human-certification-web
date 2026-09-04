import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const system = [
  ['STANDARD', 'Klare Kriterien', 'Definiert, welche menschlich geprägten Herstellungsschritte für die Zertifizierung erforderlich sind.'],
  ['AUDIT', 'Unabhängige Prüfung', 'Prüft Prozess, Nachweise und Abgrenzung gegen den jeweils gültigen Standard.'],
  ['TRACEABILITY', 'Dokumentierte Herkunft', 'Macht relevante Produktionsorte, Fremdfertigung und Wertschöpfungsschritte nachvollziehbar.'],
  ['PUBLIC REGISTER', 'Öffentlich überprüfbar', 'Zeigt Zertifizierungsstatus, Gültigkeit und öffentliche Historie.'],
];

const qualifies = [
  ['Transformation', 'Das Endprodukt entsteht erst durch wesentliche menschliche Arbeit an Materialien oder Komponenten.'],
  ['Fähigkeit', 'Produktprägende Schritte erfordern Erfahrung, Können oder bewusste menschliche Entscheidungen.'],
  ['Ausführung', 'Menschen führen die relevanten Herstellungsschritte tatsächlich selbst aus.'],
  ['Nachweisbarkeit', 'Die relevanten Herstellungsschritte müssen durch geeignete Unterlagen und Informationen nachvollziehbar belegt werden können.'],
];

const doesNotQualify = [
  'Ein fertiges Produkt wird lediglich importiert, etikettiert oder neu verpackt.',
  'Wesentliche menschliche Herstellungsschritte können nicht nachvollziehbar belegt werden.',
  'Eine minimale manuelle Veredelung soll ein ansonsten fertiges Industrieprodukt zum „Human Made“-Produkt machen.',
];

const notAssessed = [
  'Herkunftsland',
  'Bio oder Fairtrade',
  'pauschale Nachhaltigkeit',
  'Unternehmensgröße',
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="heroV2 shell">
        <div className="heroV2Grid">
          <div className="heroV2Copy">
            <div className="eyebrow">STANDARD FÜR NACHWEISBAR MENSCHLICH GEPRÄGTE HERSTELLUNG</div>
            <h1>Menschliche Herstellung. <em>Überprüfbar.</em></h1>
            <p className="lead">
              Made by Humans entwickelt einen Standard für physische Produkte, deren wesentliche Herstellungsschritte nachweislich durch Menschen ausgeführt werden.
            </p>
            <div className="actions">
              <Link className="button primary" href="/standard">Standard ansehen</Link>
              <Link className="button secondary" href="/fuer-hersteller">Pilotphase für Hersteller</Link>
            </div>
          </div>

          <HeroVerify />
        </div>
      </section>

      <section className="systemStrip">
        <div className="shell systemStripGrid">
          {system.map(([term, title]) => (
            <div key={term}>
              <strong>{term}</strong>
              <span>{title}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="credibilityBand">
        <div className="shell credibilityGrid">
          <div>
            <div className="sectionNo light">DIE GRUNDIDEE</div>
            <p className="credibilityKicker">Die zertifizierte Eigenschaft</p>
          </div>
          <div>
            <h2>Dieses Produkt wurde in seinen wesentlichen Herstellungsschritten durch Menschen gefertigt.</h2>
            <p>
              Genau diese Aussage soll später überprüfbar sein. Nicht über Selbstauskunft oder eine Marketingformulierung, sondern über einen definierten Standard, dokumentierte Evidenz, einen Prüfprozess und einen öffentlichen Nachweis.
            </p>
            <div className="credibilityFacts">
              <span>Produktbezogen</span>
              <span>Nachweisbasiert</span>
              <span>Öffentlich verifizierbar</span>
            </div>
          </div>
        </div>
      </section>

      <section className="qualificationSection shell">
        <div className="sectionHeading split">
          <div>
            <div className="sectionNo">WAS „MENSCHLICH GEPRÄGT“ BEDEUTET</div>
            <h2>Wann menschliche Herstellung als prägend gilt.</h2>
          </div>
          <p>
            Der Standard prüft, ob menschliche Arbeit für die Entstehung des Endprodukts wesentlich ist, tatsächlich ausgeführt wird und durch geeignete Nachweise belegt werden kann.
          </p>
        </div>

        <div className="qualificationGrid">
          <div className="qualificationPositive">
            <div className="qualificationLabel">ENTSCHEIDEND FÜR DIE ZERTIFIZIERUNG</div>
            {qualifies.map(([title, copy]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <div className="qualificationNegative">
            <div className="qualificationLabel">NICHT AUSREICHEND</div>
            {doesNotQualify.map((copy) => (
              <p key={copy}>{copy}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="systemJourney shell">
        <div className="sectionHeading split">
          <div>
            <div className="sectionNo">DAS ZERTIFIZIERUNGSSYSTEM</div>
            <h2>Vom Herstellungsprozess zum öffentlichen Nachweis.</h2>
          </div>
          <p>
            Das sichtbare Zeichen ist nur die Oberfläche. Der eigentliche Wert entsteht aus Standard, Prüfung, nachvollziehbaren Produktionsinformationen und einem öffentlichen Zertifikatsbestand.
          </p>
        </div>

        <div className="systemJourneyGrid">
          {system.map(([term, title, copy]) => (
            <article key={term}>
              <strong>{term}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scopeBoundary">
        <div className="shell scopeBoundaryGrid">
          <div>
            <div className="sectionNo">KLARE ABGRENZUNG</div>
            <h2>Was der Standard bewusst nicht bewertet.</h2>
          </div>
          <div>
            <p className="scopeBoundaryLead">
              Made by Humans bewertet ausschließlich die definierte Eigenschaft menschlich geprägter Herstellung.
            </p>
            <div className="scopeBoundaryList">
              {notAssessed.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="registerProof">
        <div className="shell registerProofGrid">
          <div className="registerProofCopy">
            <div className="sectionNo">PUBLIC REGISTER</div>
            <h2>Jede Kennzeichnung muss auf einen überprüfbaren öffentlichen Datensatz verweisen.</h2>
            <p>
              Jede spätere freigegebene Zertifizierung soll eine eindeutige ID und einen öffentlichen Datensatz erhalten. Dort werden Produkt, Hersteller, Standard, Status, Gültigkeit und relevante Statusänderungen nachvollziehbar.
            </p>
            <div className="actions">
              <Link className="button primary" href="/register">Register-Prototyp öffnen</Link>
              <Link className="textLink" href="/pruefen">Beispiel-ID prüfen →</Link>
            </div>
          </div>

          <article className="publicRecord refinedRecord">
            <div className="publicRecordTop">
              <span>BEISPIEL EINES ÖFFENTLICHEN DATENSATZES</span>
              <span className="statusBadge active">DEMO</span>
            </div>

            <div className="recordId">HC-DEMO-0001</div>

            <dl>
              <div><dt>Hersteller</dt><dd>Demo Manufaktur GmbH</dd></div>
              <div><dt>Produkt</dt><dd>Demo Produkt</dd></div>
              <div><dt>Standard</dt><dd>Demo-Standard</dd></div>
              <div><dt>Status</dt><dd>Technischer Beispieldatensatz</dd></div>
            </dl>

            <Link href="/c/HC-DEMO-0001">Beispiel-Datensatz ansehen →</Link>
          </article>
        </div>
      </section>

      <section className="pilotRealitySection">
        <div className="shell pilotRealityGrid">
          <div>
            <div className="sectionNo light">AKTUELLER PROJEKTSTAND</div>
            <h2>Validierung mit realen Produktionsfällen.</h2>
          </div>
          <div>
            <p>
              Standard, Auditprozess und Register werden zunächst an realen Produkten validiert. Gesucht werden Hersteller, die ihre tatsächlichen Produktionsabläufe offenlegen und gemeinsam prüfen wollen, ob die Kriterien in der Praxis tragen.
            </p>
            <Link className="button lightButton" href="/fuer-hersteller">Pilotphase ansehen</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
