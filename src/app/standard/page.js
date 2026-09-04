import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const blocks = [
  ['01', 'Geltungsbereich', 'Der Standard ist für physische Produkte gedacht. Entscheidend ist nicht eine pauschale Handarbeitsbehauptung, sondern welche relevanten Fertigungsschritte durch Menschen ausgeführt und belegt werden.'],
  ['02', 'Nachweisprinzip', 'Aussagen sollen auf überprüfbaren Prozessinformationen, geeigneten Nachweisen und einer dokumentierten Prüfentscheidung beruhen.'],
  ['03', 'Standardversionen', 'Jede Zertifizierung verweist auf eine konkrete Version des Standards. Änderungen am Regelwerk bleiben dadurch zeitlich nachvollziehbar.'],
  ['04', 'Status & Gültigkeit', 'Zertifizierungen sind nicht einfach dauerhaft „ja“. Aktiv, ausgesetzt, abgelaufen oder widerrufen sollen öffentlich unterscheidbar bleiben.'],
];

export default function StandardPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">STANDARD · ARBEITSVERSION</div>
        <h1>Klare Regeln.<br /><em>Nachvollziehbare Entscheidungen.</em></h1>
        <p className="lead">Der Standard soll definieren, wann ein Produkt glaubwürdig als nachweisbar menschlich gefertigt gekennzeichnet werden kann — und wo die Grenze verläuft.</p>
        <div className="draftNotice">
          <strong>Entwicklungsstand 0.1</strong>
          <p>Die Kriterien sind noch nicht final veröffentlicht. Diese Seite zeigt die Struktur und Leitprinzipien, nach denen der Standard aufgebaut wird.</p>
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

      <section className="darkBand standardQuestion">
        <div className="shell">
          <div className="sectionNo light">DIE ZENTRALE FRAGE</div>
          <p>Ist der menschliche Anteil am Produkt <em>wesentlich, belegbar und für die Aussage gegenüber dem Käufer relevant?</em></p>
        </div>
      </section>

      <section className="shell scopeGrid">
        <div>
          <div className="sectionNo">GEPLANTE PRÜFDIMENSIONEN</div>
          <h2>Was später im Audit betrachtet werden soll.</h2>
        </div>
        <div className="scopeList">
          <p><span>01</span>Produkt und Produktionsschritte</p>
          <p><span>02</span>Menschliche Tätigkeiten und Verantwortlichkeiten</p>
          <p><span>03</span>Automatisierungs- und Maschinenanteile</p>
          <p><span>04</span>Nachweise und Plausibilität</p>
          <p><span>05</span>Verwendung des Siegels und Produktaussage</p>
          <p><span>06</span>Änderungen, Verlängerung und Widerruf</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
