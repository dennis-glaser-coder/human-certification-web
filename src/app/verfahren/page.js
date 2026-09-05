import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Beschwerden, Einsprüche & Zeichenmissbrauch',
  description: 'Verfahrensgrundsätze für Beschwerden, Einsprüche gegen Zertifizierungsentscheidungen und Zeichenmissbrauch bei Made by Humans.',
  alternates: { canonical: canonical('/verfahren') },
};

const procedures = [
  {
    type: 'BESCHWERDE',
    title: 'Beschwerde über System, Prüfung oder Kommunikation',
    copy: 'Eine Beschwerde betrifft die Durchführung, Kommunikation oder Funktionsweise des Zertifizierungssystems und ist nicht automatisch ein Einspruch gegen eine konkrete Zertifizierungsentscheidung.',
    steps: ['Eingang dokumentieren', 'Zuständigkeit und möglichen Interessenkonflikt prüfen', 'Sachverhalt bewerten', 'Maßnahme und Abschluss dokumentieren'],
  },
  {
    type: 'EINSPRUCH',
    title: 'Einspruch gegen eine Zertifizierungsentscheidung',
    copy: 'Ein Einspruch richtet sich gegen eine konkrete Entscheidung, zum Beispiel Ablehnung, Aussetzung oder Widerruf. Die Überprüfung soll nicht allein durch dieselbe Person erfolgen, die die angefochtene Entscheidung getroffen hat.',
    steps: ['Entscheidung und Begründung erfassen', 'Beteiligte Rollen und Interessenkonflikte prüfen', 'Entscheidungsgrundlage erneut bewerten', 'Ergebnis und Begründung dokumentieren'],
  },
  {
    type: 'ZEICHENMISSBRAUCH',
    title: 'Unberechtigte oder irreführende Zeichennutzung',
    copy: 'Zeichenmissbrauch umfasst insbesondere Nutzung ohne Berechtigung, Nutzung für nicht erfasste Produkte, Weiterverwendung nach Statusverlust oder eine irreführende Erweiterung der zertifizierten Aussage.',
    steps: ['Meldung und Belege sichern', 'Register- und Nutzungsstatus prüfen', 'Korrektur oder Entfernung verlangen', 'bei Bedarf Aussetzung, Widerruf oder weitere Schritte dokumentieren'],
  },
];

export default function ProceduresPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">VERFAHRENSREGELN · MBH-GOV-0.1</div>
        <h1>Drei unterschiedliche Fälle. Drei klar getrennte Verfahren.</h1>
        <p className="lead">
          Beschwerden, Einsprüche und Zeichenmissbrauch dürfen nicht in einem unscharfen Sammelprozess verschwinden.
          Jede Kategorie braucht einen eigenen Zweck, eine dokumentierte Prüfung und einen nachvollziehbaren Abschluss.
        </p>
      </section>

      <section className="shell procedureSection">
        <div className="procedureGrid">
          {procedures.map((procedure) => (
            <article key={procedure.type}>
              <span>{procedure.type}</span>
              <h2>{procedure.title}</h2>
              <p>{procedure.copy}</p>
              <ol>
                {procedure.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <section className="procedureIntegrity">
        <div className="shell procedureIntegrityGrid">
          <div>
            <div className="sectionNo light">INTERESSENKONFLIKTE</div>
            <h2>Keine Unabhängigkeit behaupten, bevor sie organisatorisch besteht.</h2>
          </div>
          <div>
            <p>
              Solange die endgültige Organisations- und Integritätsstruktur nicht eingerichtet ist, behauptet Made by Humans nicht,
              dass Beschwerden oder Einsprüche bereits durch eine unabhängige externe Instanz entschieden werden.
              Für den kommerziellen Betrieb werden Zuständigkeiten und Regeln zur Vermeidung von Interessenkonflikten vorab veröffentlicht.
            </p>
          </div>
        </div>
      </section>

      <section className="shell procedureChannel">
        <div>
          <div className="sectionNo">MELDEKANAL</div>
          <h2>Der öffentliche Einreichungsweg wird vor dem kommerziellen Start veröffentlicht.</h2>
        </div>
        <p>
          Bis dahin dient diese Seite der transparenten Dokumentation der vorgesehenen Verfahrenslogik.
          Es wird kein bereits operativer Beschwerde- oder Einspruchsdienst vorgetäuscht.
        </p>
      </section>

      <section className="shell standardClose">
        <p>Die Verfahrensgrundsätze werden versioniert geführt und vor dem kommerziellen Start in eine verbindliche Fassung überführt.</p>
        <div className="standardCloseLinks">
          <Link className="textLink" href="/dokumente">Dokumentenregister →</Link>
          <Link className="textLink" href="/transparenz">Transparenz & Integrität →</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
