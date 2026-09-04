import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const blocks = [
  ['Geltungsbereich', 'Der Standard richtet sich an physische Produkte. Entscheidend ist nicht eine pauschale Handarbeitsbehauptung, sondern ob relevante menschliche Tätigkeiten tatsächlich ein wesentlicher Teil der Wertschöpfung sind.'],
  ['Nachweise', 'Aussagen müssen auf strukturierten Prozessinformationen, geeigneten Belegen und einer dokumentierten Prüfentscheidung beruhen.'],
  ['Prüfbarkeit', 'Jede Zertifizierungsentscheidung muss gegen die jeweils gültige Standardversion nachvollzogen werden können.'],
  ['Öffentlicher Status', 'Aktiv, ausgesetzt, abgelaufen oder widerrufen: Der Status einer Zertifizierung bleibt öffentlich unterscheidbar.'],
];

const dimensions = [
  'Produkt und Produktionsschritte',
  'Menschliche Tätigkeiten und Verantwortlichkeiten',
  'Automatisierungs- und Maschinenanteile',
  'Nachweise und Plausibilität',
  'Traceability relevanter Wertschöpfungsschritte',
  'Status, Verlängerung, Aussetzung und Widerruf',
];

export default function StandardPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">STANDARD</div>
        <h1>Klare Kriterien. <em>Nachvollziehbare Entscheidungen.</em></h1>
        <p className="lead">
          Der Standard definiert, wann menschliche Wertschöpfung an einem physischen Produkt so wesentlich, dokumentiert und überprüfbar ist, dass sie zertifiziert kommuniziert werden kann.
        </p>

        <div className="draftNotice">
          <strong>STANDARD IN ENTWICKLUNG</strong>
          <p>Die Kriterien werden derzeit mit Blick auf reale Produkte und Produktionsprozesse validiert. Die Struktur und das Prüfprinzip stehen bereits fest.</p>
        </div>
      </section>

      <section className="shell standardBlocks">
        {blocks.map(([title, copy]) => (
          <article key={title} className="standardBlock standardBlockV2">
            <div>
              <h2>{title}</h2>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="standardStatement">
        <div className="shell">
          <div className="sectionNo light">DIE ZENTRALE FRAGE</div>
          <p>Ist der menschliche Anteil am Produkt <em>wesentlich, dokumentiert und überprüfbar</em> genug, um die Aussage gegenüber dem Käufer zu tragen?</p>
        </div>
      </section>

      <section className="shell scopeGrid">
        <div>
          <div className="sectionNo">PRÜFDIMENSIONEN</div>
          <h2>Was im Audit betrachtet werden soll.</h2>
        </div>

        <div className="scopeList scopeListV2">
          {dimensions.map((item) => <p key={item}>{item}</p>)}
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
