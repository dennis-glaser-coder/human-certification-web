import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const criteria = [
  ['Produktentstehung', 'Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'],
  ['Menschliche Ausführung', 'Die wesentlichen produktprägenden Herstellungsschritte werden tatsächlich unmittelbar durch Menschen ausgeführt.'],
  ['Fachliche Prägung', 'Relevante Schritte erfordern Erfahrung, Fähigkeit oder bewusste menschliche Entscheidungen.'],
  ['Automatisierungsgrenze', 'Technik kann unterstützen; eine weitgehend autonome Produktentstehung erfüllt das Kriterium nicht.'],
  ['Rückverfolgbarkeit', 'Relevante Produktionsorte, Zulieferer und wesentliche Fremdfertigung müssen nachvollziehbar zugeordnet werden können.'],
  ['Nachweisbarkeit', 'Die Angaben zum Herstellungsprozess müssen durch geeignete Informationen und Unterlagen prüfbar sein.'],
];

const cases = [
  ['Ledertasche: Zuschnitt und Fertigung durch Menschen', 'Grundsätzlich ja', 'Die menschliche Herstellung prägt die Entstehung des Endprodukts.'],
  ['Ledertasche: digitaler Zuschnitt, manuelle Montage und Finish', 'Einzelfall grundsätzlich ja', 'Der digitale Teilprozess ersetzt nicht die wesentlichen weiteren Herstellungsschritte.'],
  ['Fertige Importtasche mit eigenem Label', 'Nein', 'Das verkaufsfertige Produkt existiert bereits vor dem eigenen Arbeitsschritt.'],
  ['Tisch: CNC-Zuschnitt, manuelle Anpassung, Montage und Finish', 'Grundsätzlich ja', 'Der automatisierte Zuschnitt ist ein Teilprozess; weitere wesentliche Herstellungsschritte erfolgen durch Menschen.'],
  ['Tisch weitgehend automatisch gefertigt, nur Finish von Hand', 'Nein', 'Die verbleibende menschliche Tätigkeit ist für die Produktentstehung nicht mehr wesentlich.'],
];

const exclusions = [
  'Herkunftsland',
  'Nachhaltigkeit',
  'Bio- oder Fairtrade-Eigenschaften',
  'Unternehmensgröße',
];

export default function StandardPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">STANDARD</div>
        <h1>Kriterien für nachweisbar menschlich gefertigte Produkte.</h1>
        <p className="lead">
          Der Standard grenzt ab, wann menschliche Arbeit für die Herstellung eines physischen Endprodukts
          wesentlich ist und welche Nachweise für eine Prüfung erforderlich sind.
        </p>
      </section>

      <section className="shell standardCriteriaSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">PRÜFBEREICHE</div>
            <h2>Sechs Bereiche bilden die Grundlage der Prüfung.</h2>
          </div>
          <p>
            Eine Zertifizierung setzt voraus, dass die Kriterien für den konkreten Herstellungsprozess
            nachvollziehbar erfüllt und ausreichend belegt werden.
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

      <section className="decisionRule">
        <div className="shell decisionRuleInner">
          <div className="sectionNo">ENTSCHEIDUNGSREGEL</div>
          <p>Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?</p>
        </div>
      </section>

      <section className="shell caseSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">GRENZFÄLLE</div>
            <h2>Beispiele für die Einordnung.</h2>
          </div>
          <p>
            Die Beispiele dienen der Abgrenzung. Die endgültige Entscheidung bezieht sich immer auf
            den konkreten Produkt- und Herstellungsprozess.
          </p>
        </div>

        <div className="caseTable">
          <div className="caseTableHead">
            <span>FALL</span>
            <span>EINORDNUNG</span>
            <span>BEGRÜNDUNG</span>
          </div>
          {cases.map(([item, result, reason]) => (
            <article className="caseRow" key={item}>
              <strong>{item}</strong>
              <span>{result}</span>
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scopeExclusionSection">
        <div className="shell scopeExclusionGrid">
          <div>
            <div className="sectionNo">NICHT GEGENSTAND DES STANDARDS</div>
            <h2>Die zertifizierte Aussage bleibt bewusst eng gefasst.</h2>
          </div>
          <div className="exclusionList">
            {exclusions.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="standardClose shell">
        <p>
          Regeln zu Standardversionen, Prüfrollen, Statusänderungen und Markennutzung werden unter Transparenz & Governance dokumentiert.
        </p>
        <Link className="textLink" href="/transparenz">Transparenz & Governance ansehen →</Link>
      </section>

      <SiteFooter />
    </main>
  );
}
