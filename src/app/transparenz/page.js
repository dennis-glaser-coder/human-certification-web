import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const principles = [
  ['Standardversionen', 'Jede spätere Zertifizierung soll auf eine eindeutig bezeichnete Standardversion verweisen. Änderungen am Regelwerk bleiben damit zeitlich nachvollziehbar.'],
  ['Prüfung und Review', 'Für den kommerziellen Betrieb ist eine dokumentierte Prüfung mit klarer Verantwortlichkeit und Vier-Augen-Prinzip vorgesehen.'],
  ['Statusverwaltung', 'Aktiv, ausgesetzt, abgelaufen oder widerrufen: Änderungen am Zertifizierungsstatus sollen im öffentlichen Register nachvollziehbar bleiben.'],
  ['Produktionsänderungen', 'Wesentliche Änderungen am zertifizierten Herstellungsprozess sollen meldepflichtig sein und je nach Risiko eine erneute Prüfung auslösen.'],
  ['Missbrauch und Beschwerden', 'Für den kommerziellen Start sind ein nachvollziehbares Beschwerdeverfahren und Regeln zum Entzug der Markennutzung vorgesehen.'],
  ['Unabhängigkeit', 'Vor dem öffentlichen kommerziellen Start wird die rechtlich und wirtschaftlich geeignete Struktur für Scheme-Inhaber, Prüfung und Zertifizierungsentscheidung festgelegt.'],
];

export default function TransparencyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">TRANSPARENZ & GOVERNANCE</div>
        <h1>Vertrauen setzt nachvollziehbare Regeln voraus.</h1>
        <p className="lead">
          Die folgenden Grundsätze zeigen,
          wie Standard, Prüfung und öffentliche Nachweise für den späteren kommerziellen Betrieb aufgebaut werden sollen.
        </p>
      </section>

      <section className="statusPanel shell">
        <div>
          <span>AKTUELLER STATUS</span>
          <strong>Pilot- und Validierungsphase</strong>
        </div>
        <p>
          Der Arbeitsstandard, Probeaudits, Register und Verifizierungslogik werden derzeit validiert.
          Es findet noch keine öffentliche kommerzielle Zertifikatsvergabe statt.
        </p>
      </section>

      <section className="shell transparencySection">
        <div className="sectionIntro compact">
          <div className="sectionNo">GRUNDSÄTZE</div>
          <h2>Was vor dem kommerziellen Start festgelegt sein muss.</h2>
        </div>

        <div className="transparencyGrid">
          {principles.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="schemeSection">
        <div className="shell schemeGrid">
          <div>
            <div className="sectionNo light">LANGFRISTIGES MODELL</div>
            <h2>Standard und Marke sollen unabhängig von einzelnen Auditstunden skalierbar werden.</h2>
          </div>
          <div>
            <p>
              Langfristig ist ein Scheme-/Standard-Owner-Modell vorgesehen: Marke, Standard, Register und
              Zulassungssystem liegen beim Scheme-Inhaber; Prüfungen können durch qualifizierte und zugelassene Dritte erfolgen.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
