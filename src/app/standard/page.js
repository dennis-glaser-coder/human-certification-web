import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const criteria = [
  ['Transformation', 'Durch menschliche Arbeit entsteht aus Materialien oder Komponenten erst das verkaufsfertige Endprodukt.'],
  ['Human Skill', 'Wesentliche Herstellungsschritte erfordern Erfahrung, Fähigkeit oder bewusste menschliche Entscheidungen.'],
  ['Human Execution', 'Die produktprägenden Schritte werden tatsächlich unmittelbar von Menschen ausgeführt.'],
  ['Automation Limit', 'Maschinen dürfen unterstützen. Sie dürfen die produktprägende menschliche Herstellung nicht vollständig ersetzen.'],
  ['Traceability', 'Relevante Produktionsorte, Zulieferer und wesentliche Fremdfertigung müssen nachvollziehbar sein.'],
  ['Verification', 'Die Angaben müssen durch geeignete Evidenz objektiv prüfbar und dokumentierbar sein.'],
];

const exclusions = [
  'fertige Ware wird nur etikettiert oder neu verpackt',
  'Menschen überwachen lediglich eine vollautomatische Produktentstehung',
  'eine minimale manuelle Veredelung soll ein fertiges Produkt nachträglich „human made“ machen',
];

export default function StandardPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">STANDARD IN ENTWICKLUNG</div>
        <h1>Klare Kriterien. <em>Keine wohlwollende Auslegung.</em></h1>
        <p className="lead">
          Der Standard soll prüfen, ob ein physisches Produkt in seinen wesentlichen, produktprägenden Herstellungsschritten tatsächlich durch menschliche Arbeit, Fähigkeiten und Entscheidungen entsteht.
        </p>

        <div className="draftNotice">
          <strong>PILOTSTATUS</strong>
          <p>Die Kriterien werden derzeit an realen Produktionsfällen validiert. Vor einer öffentlichen kommerziellen Siegelvergabe werden Standard, Rechtsrahmen und Governance-Struktur final geprüft.</p>
        </div>
      </section>

      <section className="shell criteriaSection">
        <div className="sectionHeading split">
          <div>
            <div className="sectionNo">ARBEITSSTANDARD</div>
            <h2>Sechs Fragen entscheiden über die grundsätzliche Zertifizierbarkeit.</h2>
          </div>
          <p>
            Die Kriterien sollen Grenzfälle nicht weichzeichnen. Fehlt belastbare Evidenz oder ersetzt Automation die produktprägende menschliche Herstellung, soll keine Zertifizierung erfolgen.
          </p>
        </div>

        <div className="criteriaGrid">
          {criteria.map(([title, copy]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="standardStatement">
        <div className="shell">
          <div className="sectionNo light">PRAXISTEST</div>
          <p>Wenn sämtliche menschlichen Arbeitsschritte entfernt werden: Existiert danach bereits im Wesentlichen dasselbe verkaufsfertige Produkt?</p>
        </div>
      </section>

      <section className="shell exclusionSection">
        <div>
          <div className="sectionNo">TYPISCHE ABLEHNUNGSGRÜNDE</div>
          <h2>Ein manueller Restschritt reicht nicht.</h2>
        </div>
        <div className="exclusionList">
          {exclusions.map((item) => <p key={item}>{item}</p>)}
        </div>
      </section>

      <section className="governanceSection">
        <div className="shell governanceGrid">
          <div>
            <div className="sectionNo">UNABHÄNGIGKEIT & GOVERNANCE</div>
            <h2>Die Prüfentscheidung darf nicht vom Verkauf des Siegels abhängen.</h2>
          </div>
          <div>
            <p>
              Für den kommerziellen Start ist eine rechtlich und wirtschaftlich saubere Trennung der Rollen vorgesehen. Audit, Review, Zertifizierungsentscheidung und Markennutzung sollen so organisiert werden, dass Interessenkonflikte vermieden und Entscheidungen nachvollziehbar bleiben.
            </p>
            <p>
              Langfristig ist das Modell darauf ausgelegt, Marke, Standard und Register als Scheme zu führen und Prüfungen auch durch zugelassene unabhängige Stellen durchführen zu lassen.
            </p>
          </div>
        </div>
      </section>

      <section className="systemReminder">
        <div className="shell systemReminderGrid">
          <div><strong>STANDARD</strong><span>definiert die Anforderungen</span></div>
          <div><strong>AUDIT</strong><span>prüft Prozess und Evidenz</span></div>
          <div><strong>TRACEABILITY</strong><span>macht Herstellung nachvollziehbar</span></div>
          <div><strong>PUBLIC REGISTER</strong><span>macht den Status überprüfbar</span></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
