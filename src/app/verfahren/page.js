import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Beschwerden, Einsprüche & Zeichenmissbrauch',
  description: 'Verfahrensregeln für Beschwerden, Einsprüche gegen Zertifizierungsentscheidungen und Zeichenmissbrauch bei Made by Human.',
  alternates: { canonical: canonical('/verfahren') },
};

const procedures = [
  {
    code: '01',
    type: 'BESCHWERDE',
    title: 'Beschwerde über System, Prüfung oder Kommunikation',
    copy: 'Eine Beschwerde betrifft zum Beispiel die Durchführung, Kommunikation oder Funktionsweise des Zertifizierungssystems. Sie ist nicht automatisch ein Einspruch gegen eine konkrete Entscheidung.',
    steps: ['Eingang dokumentieren', 'Zuständigkeit und mögliche Interessenkonflikte prüfen', 'Sachverhalt bewerten', 'Maßnahme und Abschluss dokumentieren'],
  },
  {
    code: '02',
    type: 'EINSPRUCH',
    title: 'Einspruch gegen eine Zertifizierungsentscheidung',
    copy: 'Ein Einspruch richtet sich gegen eine konkrete Entscheidung, zum Beispiel eine Ablehnung, Aussetzung oder einen Widerruf. Die Entscheidung wird erneut geprüft und das Ergebnis mit Begründung festgehalten.',
    steps: ['Entscheidung und Begründung erfassen', 'Beteiligte Rollen und mögliche Interessenkonflikte prüfen', 'Entscheidungsgrundlage erneut bewerten', 'Ergebnis und Begründung dokumentieren'],
  },
  {
    code: '03',
    type: 'ZEICHENMISSBRAUCH',
    title: 'Unberechtigte oder irreführende Zeichennutzung',
    copy: 'Zeichenmissbrauch umfasst Nutzung ohne Berechtigung, Nutzung für nicht erfasste Produkte, Weiterverwendung nach Statusverlust oder eine irreführende Erweiterung der zertifizierten Aussage.',
    steps: ['Meldung und Belege sichern', 'Register- und Nutzungsstatus prüfen', 'Korrektur oder Entfernung verlangen', 'Erforderliche Folgemaßnahmen dokumentieren'],
  },
];

const recordFields = [
  ['Vorgangsart', 'Beschwerde, Einspruch oder Zeichenmissbrauch'],
  ['Sachverhalt', 'Worum es geht, welche Zertifizierung betroffen ist und welche Belege vorliegen'],
  ['Zuständigkeit', 'Bearbeitende Rolle und Prüfung möglicher Interessenkonflikte'],
  ['Entscheidung', 'Bewertung, Begründung und gegebenenfalls erforderliche Maßnahmen'],
  ['Abschluss', 'Ergebnis des Verfahrens und mögliche Änderungen am Status'],
];

export default function ProceduresPage() {
  return (
    <main className="procedureInstitution">
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">VERFAHRENSREGELN · MBH-GOV-0.1</div>
        <h1>Beschwerden, Einsprüche und Zeichenmissbrauch klar trennen.</h1>
        <p className="lead">
          Nicht jedes Anliegen ist dasselbe. Deshalb unterscheiden wir zwischen
          Beschwerden, Einsprüchen gegen eine Entscheidung und unberechtigter Zeichennutzung
          und bearbeiten jeden Fall nach dem passenden Verfahren.
        </p>
      </section>

      <section className="procedureMetaBand" aria-label="Verfahrensgrundsätze">
        <div className="shell procedureMetaGrid">
          <div><strong>Richtig eingeordnet</strong><p>Wir klären zuerst, um welche Art von Anliegen es geht.</p></div>
          <div><strong>Festgehalten</strong><p>Sachverhalt, Belege und Bewertung werden dokumentiert.</p></div>
          <div><strong>Klare Zuständigkeit</strong><p>Es ist festgelegt, wer den Vorgang bearbeitet.</p></div>
          <div><strong>Mit klarem Abschluss</strong><p>Entscheidung und mögliche Maßnahmen werden festgehalten.</p></div>
        </div>
      </section>

      <section className="shell procedureSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">DREI VERFAHREN</div>
            <h2>Je nach Anliegen gilt ein anderes Verfahren.</h2>
          </div>
          <p>
            So verhindern wir, dass Beschwerden, Einsprüche und Zeichenmissbrauch
            in einem einzigen unklaren Verfahren vermischt werden.
          </p>
        </div>

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
            <h2>Zuständigkeiten müssen klar sein.</h2>
          </div>
          <div>
            <p>
              Mögliche Interessenkonflikte halten wir im jeweiligen Vorgang fest.
              Von einer externen oder unabhängigen Entscheidung sprechen wir nur,
              wenn diese Unabhängigkeit tatsächlich besteht und belegt werden kann.
            </p>
          </div>
        </div>
      </section>

      <section className="procedureRecord">
        <div className="shell procedureRecordGrid">
          <div>
            <div className="sectionNo">DOKUMENTATION</div>
            <h2>Diese fünf Punkte halten wir zu jedem Vorgang fest.</h2>
          </div>
          <div className="procedureRecordList">
            {recordFields.map(([title, copy]) => (
              <article key={title}>
                <div><strong>{title}</strong><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell standardClose">
        <p>Die Verfahrensregeln haben einen festen Versionsstand. Änderungen werden mit einer neuen Fassung dokumentiert.</p>
        <div className="standardCloseLinks">
          <Link className="textLink" href="/dokumente">Dokumentenregister →</Link>
          <Link className="textLink" href="/transparenz">Transparenz & Integrität →</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
