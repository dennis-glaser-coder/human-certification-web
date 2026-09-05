import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Beschwerden, Einsprüche & Zeichenmissbrauch',
  description: 'Verfahrensregeln für Beschwerden, Einsprüche gegen Zertifizierungsentscheidungen und Zeichenmissbrauch bei Made by Humans.',
  alternates: { canonical: canonical('/verfahren') },
};

const procedures = [
  {
    code: '01',
    type: 'BESCHWERDE',
    title: 'Beschwerde über System, Prüfung oder Kommunikation',
    copy: 'Eine Beschwerde betrifft Durchführung, Kommunikation oder Funktionsweise des Zertifizierungssystems und ist nicht automatisch ein Einspruch gegen eine konkrete Zertifizierungsentscheidung.',
    steps: ['Eingang dokumentieren', 'Zuständigkeit und mögliche Interessenkonflikte prüfen', 'Sachverhalt bewerten', 'Maßnahme und Abschluss dokumentieren'],
  },
  {
    code: '02',
    type: 'EINSPRUCH',
    title: 'Einspruch gegen eine Zertifizierungsentscheidung',
    copy: 'Ein Einspruch richtet sich gegen eine konkrete Entscheidung, zum Beispiel Ablehnung, Aussetzung oder Widerruf. Angefochtene Entscheidung, erneute Bewertung und Begründung werden getrennt nachvollziehbar dokumentiert.',
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
  ['Sachverhalt', 'Gegenstand, betroffene Zertifizierung und relevante Belege'],
  ['Zuständigkeit', 'Bearbeitende Rolle und Prüfung möglicher Interessenkonflikte'],
  ['Entscheidung', 'Bewertung, Begründung und gegebenenfalls erforderliche Maßnahmen'],
  ['Abschluss', 'Dokumentierter Verfahrensabschluss und relevante Statusänderungen'],
];

export default function ProceduresPage() {
  return (
    <main className="procedureInstitution">
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">VERFAHRENSREGELN · MBH-GOV-0.1</div>
        <h1>Beschwerden, Einsprüche und Zeichenmissbrauch klar trennen.</h1>
        <p className="lead">
          Unterschiedliche Vorgänge brauchen unterschiedliche Verfahren. Made by Humans trennt
          Beschwerde, Einspruch gegen eine Entscheidung und unberechtigte Zeichennutzung
          nach Zweck, Zuständigkeit, Prüfung und dokumentiertem Abschluss.
        </p>
      </section>

      <section className="procedureMetaBand" aria-label="Verfahrensgrundsätze">
        <div className="shell procedureMetaGrid">
          <div><span>01</span><strong>Kategorisiert</strong><p>Jeder Vorgang wird eindeutig eingeordnet.</p></div>
          <div><span>02</span><strong>Dokumentiert</strong><p>Sachverhalt, Belege und Bewertung bleiben nachvollziehbar.</p></div>
          <div><span>03</span><strong>Zuständigkeitsklar</strong><p>Bearbeitende Rollen werden dem Vorgang zugeordnet.</p></div>
          <div><span>04</span><strong>Abschlussfähig</strong><p>Entscheidung und Maßnahmen werden dokumentiert.</p></div>
        </div>
      </section>

      <section className="shell procedureSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">DREI VERFAHREN</div>
            <h2>Jeder Fall folgt einer eigenen Logik.</h2>
          </div>
          <p>
            Eine klare Trennung verhindert, dass unterschiedliche Anliegen in einem unscharfen
            Sammelprozess vermischt werden.
          </p>
        </div>

        <div className="procedureGrid">
          {procedures.map((procedure) => (
            <article key={procedure.type}>
              <span>{procedure.code} · {procedure.type}</span>
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
            <h2>Zuständigkeiten müssen nachvollziehbar bleiben.</h2>
          </div>
          <div>
            <p>
              Mögliche Interessenkonflikte werden im jeweiligen Vorgang berücksichtigt und dokumentiert.
              Eine externe oder unabhängige Entscheidung wird nur dann als solche bezeichnet,
              wenn diese organisatorische Eigenschaft tatsächlich besteht und nachweisbar ist.
            </p>
          </div>
        </div>
      </section>

      <section className="procedureRecord">
        <div className="shell procedureRecordGrid">
          <div>
            <div className="sectionNo">VERFAHRENSAKTE</div>
            <h2>Fünf Angaben machen einen Vorgang nachvollziehbar.</h2>
          </div>
          <div className="procedureRecordList">
            {recordFields.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{title}</strong><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell standardClose">
        <p>Die Verfahrensregeln werden versioniert geführt; Änderungen bleiben nachvollziehbar dokumentiert.</p>
        <div className="standardCloseLinks">
          <Link className="textLink" href="/dokumente">Dokumentenregister →</Link>
          <Link className="textLink" href="/transparenz">Transparenz & Integrität →</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
