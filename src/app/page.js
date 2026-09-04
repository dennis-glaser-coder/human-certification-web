import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const system = [
  ['STANDARD', 'Klare Kriterien', 'Definiert, welche Anforderungen ein Produkt erfüllen muss.'],
  ['AUDIT', 'Unabhängige Prüfung', 'Bewertet Produkt, Prozess und Nachweise gegen den Standard.'],
  ['TRACEABILITY', 'Dokumentierte Herkunft', 'Macht relevante Wertschöpfungsschritte nachvollziehbar.'],
  ['PUBLIC REGISTER', 'Öffentlich überprüfbar', 'Zeigt Status, Gültigkeit und Zertifizierungshistorie.'],
];

const humanScope = [
  'Manufaktur',
  'Produktion',
  'Maschinenbedienung',
  'Verarbeitung',
  'Montage',
  'Qualitätskontrolle',
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="heroV2 shell">
        <div className="heroV2Grid">
          <div className="heroV2Copy">
            <div className="eyebrow">UNABHÄNGIGER ZERTIFIZIERUNGSSTANDARD</div>
            <h1>Menschliche Wertschöpfung. <em>Nachweisbar.</em></h1>
            <p className="lead">
              Made by Humans zertifiziert physische Produkte, bei denen menschliche Arbeit ein wesentlicher Teil der Wertschöpfung ist – anhand klarer Kriterien, dokumentierter Nachweise, unabhängiger Prüfung und eines öffentlichen Registers.
            </p>
            <div className="actions">
              <Link className="button primary" href="/standard">Standard ansehen</Link>
              <Link className="button secondary" href="/pruefen">Zertifizierung prüfen</Link>
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
            <div className="sectionNo light">WORUM ES GEHT</div>
            <p className="credibilityKicker">Kein Marketing-Badge.</p>
          </div>
          <div>
            <h2>Was auf einem Produkt steht, muss sich belegen lassen.</h2>
            <p>
              Made by Humans macht menschliche Wertschöpfung nicht zum Werbeversprechen, sondern zu einer überprüfbaren Aussage. Zertifiziert wird ein konkretes Produkt auf Basis definierter Kriterien, dokumentierter Nachweise und einer nachvollziehbaren Prüfentscheidung.
            </p>
            <div className="credibilityFacts">
              <span>Produktbezogen</span>
              <span>Standardgebunden</span>
              <span>Öffentlich verifizierbar</span>
            </div>
          </div>
        </div>
      </section>

      <section className="systemJourney shell">
        <div className="sectionHeading split">
          <div>
            <div className="sectionNo">DAS ZERTIFIZIERUNGSSYSTEM</div>
            <h2>Vom Nachweis zur öffentlichen Zertifizierung.</h2>
          </div>
          <p>
            Glaubwürdigkeit entsteht nicht durch ein Zeichen allein. Sie entsteht durch einen klaren Standard, eine unabhängige Prüfung, nachvollziehbare Herkunft und einen öffentlich überprüfbaren Status.
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

      <section className="humanScopeSection">
        <div className="shell humanScopeGrid">
          <div>
            <div className="sectionNo">HUMAN VALUE CREATION</div>
            <h2>Menschliche Wertschöpfung ist mehr als Handarbeit.</h2>
          </div>

          <div className="humanScopeCopy">
            <p className="valueLead">Von der Manufaktur bis zur industriellen Produktion.</p>
            <p>
              Der Standard soll dort greifen, wo Menschen für Ausführung, Qualität, Steuerung oder relevante Prozessentscheidungen verantwortlich sind. Maschinen schließen menschliche Wertschöpfung nicht automatisch aus.
            </p>

            <div className="humanScopeList">
              {humanScope.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="registerProof">
        <div className="shell registerProofGrid">
          <div className="registerProofCopy">
            <div className="sectionNo">PUBLIC REGISTER</div>
            <h2>Eine Zertifizierung endet nicht beim Zeichen auf dem Produkt.</h2>
            <p>
              Jede freigegebene Zertifizierung erhält einen öffentlichen Datensatz. Käufer, Handelspartner und Hersteller können jederzeit prüfen, ob ein Produkt aktuell zertifiziert ist und nach welchem Standard die Entscheidung getroffen wurde.
            </p>
            <div className="actions">
              <Link className="button primary" href="/register">Public Register öffnen</Link>
              <Link className="textLink" href="/pruefen">ID direkt prüfen →</Link>
            </div>
          </div>

          <article className="publicRecord refinedRecord">
            <div className="publicRecordTop">
              <span>ÖFFENTLICHER ZERTIFIKATSDATENSATZ</span>
              <span className="statusBadge active">AKTIV · DEMO</span>
            </div>

            <div className="recordId">HC-DEMO-0001</div>

            <dl>
              <div><dt>Hersteller</dt><dd>Demo Manufaktur GmbH</dd></div>
              <div><dt>Produkt</dt><dd>Demo Produkt</dd></div>
              <div><dt>Standard</dt><dd>Demo-Standard</dd></div>
              <div><dt>Status</dt><dd>Technischer Demodatensatz</dd></div>
            </dl>

            <Link href="/c/HC-DEMO-0001">Öffentlichen Datensatz ansehen →</Link>
          </article>
        </div>
      </section>

      <section className="manufacturerCtaV2">
        <div className="shell manufacturerCtaV2Grid">
          <div>
            <div className="sectionNo">FÜR HERSTELLER</div>
            <h2>Sie wollen menschliche Wertschöpfung glaubwürdig belegen?</h2>
          </div>
          <div>
            <p>
              Für die Pilotphase suchen wir Unternehmen, mit denen wir Standard, Nachweise und Auditprozess an realen Produkten und Produktionsabläufen validieren.
            </p>
            <Link className="button primary" href="/fuer-hersteller">Pilotphase ansehen</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
