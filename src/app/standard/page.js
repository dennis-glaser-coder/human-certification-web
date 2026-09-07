import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';

const criteria = [
  ['Produktentstehung', 'Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'],
  ['Menschliche Ausführung', 'Die wesentlichen produktprägenden Herstellungsschritte werden tatsächlich unmittelbar durch Menschen ausgeführt.'],
  ['Fachliche Prägung', 'Relevante Schritte erfordern Erfahrung, Fähigkeit oder bewusste menschliche Entscheidungen.'],
  ['Automatisierungsgrenze', 'Technik kann unterstützen; eine weitgehend autonome Produktentstehung erfüllt das Kriterium nicht.'],
  ['Rückverfolgbarkeit', 'Produktionsorte, Zulieferer und wichtige externe Fertigung müssen eindeutig zum Produkt zugeordnet werden können.'],
  ['Nachweisbarkeit', 'Die Angaben zum Herstellungsprozess müssen durch geeignete Informationen und Unterlagen prüfbar sein.'],
];

const cases = [
  ['Ledertasche: Zuschnitt und Fertigung durch Menschen', 'Grundsätzlich zertifizierbar', 'Die menschliche Herstellung prägt die Entstehung des Endprodukts.'],
  ['Ledertasche: digitaler Zuschnitt, manuelle Montage und Finish', 'Grundsätzlich möglich – im Einzelfall prüfen', 'Der digitale Teilprozess ersetzt nicht die wesentlichen weiteren Herstellungsschritte.'],
  ['Fertige Importtasche mit eigenem Label', 'Nicht zertifizierbar', 'Das verkaufsfertige Produkt existiert bereits vor dem eigenen Arbeitsschritt.'],
  ['Tisch: CNC-Zuschnitt, manuelle Anpassung, Montage und Finish', 'Grundsätzlich ja', 'Der automatisierte Zuschnitt ist ein Teilprozess; weitere wesentliche Herstellungsschritte erfolgen durch Menschen.'],
  ['Tisch weitgehend automatisch gefertigt, nur Finish von Hand', 'Nicht zertifizierbar', 'Die verbleibende menschliche Tätigkeit ist für die Produktentstehung nicht mehr wesentlich.'],
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
        <BrandTrace compact />
        <h1>Der Standard für nachweisbar menschliche Herstellung.</h1>
        <p className="lead">
          Der Standard legt fest, wann menschliche Arbeit ein physisches Produkt wesentlich prägt, was genau zur Zertifizierung gehört und welche Belege für die Prüfung nötig sind.
        </p>
      </section>

      <section className="standardMetaBand" aria-label="Metadaten zum Standard">
        <div className="shell standardMetaBar">
          <div><span>STANDARDVERSION</span><strong>0.1</strong></div>
          <div><span>GELTUNGSBEREICH</span><strong>Physische Produkte</strong></div>
          <div><span>PRÜFBEREICHE</span><strong>6 Kriterienbereiche</strong></div>
          <div><span>DOKUMENTATION</span><strong>Mit Versionsstand & öffentlich</strong></div>
        </div>
      </section>

      <section className="shell standardCriteriaSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">PRÜFBEREICHE</div>
            <h2>Sechs Bereiche zeigen, worauf wir bei der Prüfung achten.</h2>
          </div>
          <p>
            Eine Zertifizierung ist nur möglich, wenn der konkrete Herstellungsprozess die Kriterien erfüllt und sich das ausreichend belegen lässt.
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

      <section className="auditProcessSection">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">PRÜFPROZESS</div>
              <h2>Vom Produkt bis zum Registereintrag.</h2>
            </div>
            <p>
              Die Entscheidung stützt sich nicht auf eine Selbstauskunft. Wir erfassen den Herstellungsprozess, prüfen die Belege, bewerten den Fall und halten die Entscheidung fest.
            </p>
          </div>

          <div className="auditProcessGrid">
            <article><strong>Was wird zertifiziert?</strong><p>Produkt oder Produktfamilie und die wichtigen Produktionsorte festlegen.</p></article>
            <article><strong>Herstellung erfassen</strong><p>Die wichtigen Herstellungsschritte und externe Fertigung erfassen.</p></article>
            <article><strong>Belege</strong><p>Prüfen, ob Unterlagen und Informationen zur tatsächlichen Herstellung passen.</p></article>
            <article><strong>Prüfung</strong><p>Den Herstellungsprozess anhand der Kriterien des Standards bewerten.</p></article>
            <article><strong>Fachprüfung</strong><p>Prüfergebnis kontrollieren und offene Fragen klären.</p></article>
            <article><strong>Entscheidung</strong><p>Über die Zertifizierung entscheiden und bei Freigabe den Status im Register veröffentlichen.</p></article>
          </div>
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
            Die Beispiele helfen bei der Einordnung. Entscheidend ist immer,
            wie das konkrete Produkt tatsächlich hergestellt wird.
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
            <h2>Made by Human bleibt bewusst auf die menschliche Herstellung begrenzt.</h2>
          </div>
          <div className="exclusionList">
            {exclusions.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="standardClose shell">
        <div>
          <p>
            Jede Fassung des Standards hat eine eigene Version. Regeln zu Prüfrollen, Statusänderungen und Markennutzung stehen unter Transparenz & Integrität.
          </p>
        </div>
        <div className="standardCloseLinks">
          <Link className="textLink" href="/dokumente/standard-0-1">Standard 0.1 öffnen →</Link>
          <Link className="textLink" href="/transparenz">Transparenz & Integrität →</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
