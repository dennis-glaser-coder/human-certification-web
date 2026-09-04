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
  ['Maschine als Werkzeug', 'Maschinen dürfen unterstützen. Sie dürfen die produktprägende menschliche Herstellung nicht vollständig ersetzen.'],
];

const doesNotQualify = [
  'Ein fertiges Produkt wird lediglich importiert, etikettiert oder neu verpackt.',
  'Eine automatisierte Linie erzeugt das fertige Produkt; Menschen überwachen oder verpacken nur.',
  'Eine minimale manuelle Veredelung soll ein ansonsten fertiges Industrieprodukt zum „Human Made“-Produkt machen.',
];

const notAssessed = [
  'Herkunftsland',
  'Bio oder Fairtrade',
  'pauschale Nachhaltigkeit',
  'Unternehmensgröße',
  'Verzicht auf Maschinen',
  'moralische Bewertung von Technologie',
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
              Made by Humans entwickelt einen Standard für physische Produkte, deren wesentliche Herstellungsschritte nachweislich durch Menschen ausgeführt werden. Maschinen können Teil des Prozesses sein – entscheidend ist, ob menschliche Arbeit das Endprodukt tatsächlich prägt.
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
            <p className="credibilityKicker">Ein einfaches Zeichen. Eine klare Aussage.</p>
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
            <h2>Nicht ohne Maschinen. Aber auch nicht nur danebenstehen.</h2>
          </div>
          <p>
            Der Standard bewertet nicht, ob ein Produkt vollständig von Hand entsteht. Er prüft, ob Menschen die wesentlichen, produktprägenden Herstellungsschritte tatsächlich ausführen.
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
              Made by Humans ist kein Herkunfts-, Nachhaltigkeits- oder Anti-Technologie-Siegel.
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
            <h2>Das Zeichen auf dem Produkt braucht einen überprüfbaren Gegenpart.</h2>
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
            <div className="sectionNo light">PILOTPHASE</div>
            <h2>Erst beweisen. Dann skalieren.</h2>
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
