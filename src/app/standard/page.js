import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const blocks = [
  ['01', 'Scope', 'Der Standard ist für physische Produkte gedacht. Entscheidend ist nicht eine pauschale Handarbeitsbehauptung, sondern welche relevanten menschlichen Tätigkeiten tatsächlich Teil der Wertschöpfung sind.'],
  ['02', 'Evidence', 'Aussagen sollen auf strukturierten Prozessinformationen, geeigneten Nachweisen und einer dokumentierten Prüfentscheidung beruhen.'],
  ['03', 'Auditability', 'Jede Zertifizierungsentscheidung muss gegen eine konkrete, veröffentlichte Standardversion nachvollzogen werden können.'],
  ['04', 'Public Status', 'Aktiv, ausgesetzt, abgelaufen oder widerrufen: Der aktuelle Status einer Zertifizierung soll öffentlich unterscheidbar bleiben.'],
];

export default function StandardPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">STANDARD · WORKING VERSION 0.1</div>
        <h1>Klare Kriterien. <em>Nachvollziehbare Entscheidungen.</em></h1>
        <p className="lead">Der Standard definiert, wann menschliche Wertschöpfung an einem physischen Produkt so wesentlich und belegbar ist, dass sie zertifiziert kommuniziert werden kann.</p>
        <div className="draftNotice">
          <strong>ENTWICKLUNGSSTAND 0.1</strong>
          <p>Die Kriterien sind noch nicht final veröffentlicht. Diese Seite zeigt Struktur, Prüfprinzip und geplanten Geltungsbereich des Standards.</p>
        </div>
      </section>

      <section className="shell standardBlocks">
        {blocks.map(([no, title, copy]) => (
          <article key={no} className="standardBlock">
            <span>{no}</span>
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="standardStatement">
        <div className="shell">
          <div className="sectionNo light">CORE QUESTION</div>
          <p>Ist der menschliche Anteil am Produkt <em>wesentlich, dokumentiert und überprüfbar</em> genug, um die Aussage gegenüber dem Käufer zu tragen?</p>
        </div>
      </section>

      <section className="shell scopeGrid">
        <div>
          <div className="sectionNo">AUDIT DIMENSIONS</div>
          <h2>Was im Audit betrachtet werden soll.</h2>
        </div>
        <div className="scopeList">
          <p><span>01</span>Produkt und Produktionsschritte</p>
          <p><span>02</span>Menschliche Tätigkeiten und Verantwortlichkeiten</p>
          <p><span>03</span>Automatisierungs- und Maschinenanteile</p>
          <p><span>04</span>Nachweise und Plausibilität</p>
          <p><span>05</span>Traceability relevanter Wertschöpfungsschritte</p>
          <p><span>06</span>Status, Verlängerung, Aussetzung und Widerruf</p>
        </div>
      </section>

      <section className="systemReminder">
        <div className="shell systemReminderGrid">
          <div><strong>STANDARD</strong><span>definiert die Anforderungen</span></div>
          <div><strong>AUDIT</strong><span>prüft die Erfüllung</span></div>
          <div><strong>TRACEABILITY</strong><span>dokumentiert die Herkunft</span></div>
          <div><strong>PUBLIC REGISTER</strong><span>macht den Status überprüfbar</span></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
