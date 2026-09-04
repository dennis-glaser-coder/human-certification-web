import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const criteria = [
  ['Transformation', 'Aus Materialien oder Komponenten entsteht durch menschliche Arbeit das verkaufsfertige Endprodukt.'],
  ['Human Skill', 'Wesentliche Schritte erfordern Erfahrung, handwerkliche Fähigkeit oder bewusste menschliche Entscheidungen.'],
  ['Human Execution', 'Die produktprägenden Schritte werden tatsächlich unmittelbar von Menschen ausgeführt.'],
  ['Automation Limit', 'Technik kann unterstützen; eine weitgehend autonome Produktentstehung erfüllt das Kriterium nicht.'],
  ['Traceability', 'Relevante Produktionsorte, Zulieferer und wesentliche Fremdfertigung müssen offengelegt werden.'],
  ['Verification', 'Die Angaben zum Herstellungsprozess müssen durch geeignete Nachweise prüfbar sein.'],
];

const cases = [
  ['Ledertasche: handgeschnitten + Nähmaschine', 'Grundsätzlich ja', 'Menschliche Transformation und Fertigung prägen das Endprodukt.'],
  ['Ledertasche: Laserzuschnitt + manuelle Montage/Finish', 'Einzelfall grundsätzlich ja', 'Das digitale Werkzeug übernimmt einen Teilprozess; das Endprodukt entsteht weiterhin durch wesentliche menschliche Arbeit.'],
  ['Fertige Importtasche + eigenes Label', 'Nein', 'Das verkaufsfertige Produkt existiert bereits vor dem eigenen Arbeitsschritt.'],
  ['Tisch: CNC-Zuschnitt + manuelle Anpassung/Montage/Finish', 'Grundsätzlich ja', 'CNC ist Teil des Prozesses; wesentliche produktprägende Schritte werden weiterhin durch Menschen ausgeführt.'],
  ['Tisch weitgehend automatisch gefertigt, Mensch ölt nur', 'Nein', 'Die menschliche Tätigkeit ist für die Produktentstehung nicht mehr wesentlich.'],
  ['Keramik manuell geformt oder gegossen, glasiert und gebrannt', 'Grundsätzlich ja', 'Die Herstellung des Endprodukts wird wesentlich durch menschliche Arbeit geprägt.'],
];

export default function StandardPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">ARBEITSSTANDARD</div>
        <h1>Wann gilt ein Produkt als nachweisbar menschlich gefertigt?</h1>
        <p className="lead">
          Der Arbeitsstandard legt fest, welche menschlichen Herstellungsschritte wesentlich sein müssen
          und welche Informationen für eine spätere Zertifizierung nachgewiesen werden sollen.
        </p>
      </section>

      <section className="statusPanel shell">
        <div>
          <span>AKTUELLER STAND</span>
          <strong>Validierung an realen Produktionsfällen</strong>
        </div>
        <p>
          Vor einer öffentlichen kommerziellen Vergabe werden Kriterien, Prüfablauf, Rechtsrahmen
          und Governance-Struktur abschließend geprüft.
        </p>
      </section>

      <section className="shell standardCriteriaSection">
        <div className="sectionIntro compact">
          <div className="sectionNo">PRÜFBEREICHE</div>
          <h2>Sechs Bereiche bilden den Arbeitsstandard.</h2>
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

      <section className="practiceTest">
        <div className="shell practiceTestGrid">
          <div className="sectionNo light">PRAXISTEST</div>
          <p>
            Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?
          </p>
        </div>
      </section>

      <section className="shell caseSection">
        <div className="sectionIntro compact">
          <div className="sectionNo">GRENZFÄLLE</div>
          <h2>Beispiele aus dem Arbeitsstandard.</h2>
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

      <section className="governanceCallout">
        <div className="shell governanceCalloutGrid">
          <div>
            <div className="sectionNo light">GOVERNANCE</div>
            <h2>Prüfung und Markennutzung brauchen klare Zuständigkeiten.</h2>
          </div>
          <div>
            <p>
              Für den kommerziellen Start wird festgelegt, wie Audit, Review, Zertifizierungsentscheidung
              und Markennutzung organisatorisch getrennt und dokumentiert werden.
            </p>
            <Link className="textLink lightTextLink" href="/transparenz">Transparenz & Governance ansehen →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
