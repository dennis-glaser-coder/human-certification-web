import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';

const criteria = [
  ['Produktentstehung', 'Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'],
  ['Menschliche Ausführung', 'Wesentliche produktprägende Schritte werden tatsächlich durch Menschen ausgeführt oder konkret durch menschliche Entscheidungen bestimmt.'],
  ['Fachliche Prägung', 'Relevante Schritte erfordern Erfahrung, Fähigkeit oder bewusste menschliche Entscheidungen.'],
  ['Automatisierungsgrenze', 'Maschinen dürfen unterstützen; eine weitgehend autonome Produktentstehung erfüllt den Standard nicht.'],
  ['Rückverfolgbarkeit', 'Produktionsorte und wesentliche Fremdfertigung müssen eindeutig zum zertifizierten Umfang gehören.'],
  ['Nachweisbarkeit', 'Angaben zur Herstellung müssen durch geeignete Belege und die Vor-Ort-Prüfung ausreichend belegt sein.'],
];

export default function StandardPage() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero shell">
        <div className="eyebrow">STANDARD</div>
        <BrandTrace compact />
        <h1>Der Standard für nachweisbar menschliche Herstellung.</h1>
        <p className="lead">Version 1.0 legt verbindlich fest, wann menschliche Arbeit ein physisches Produkt wesentlich prägt und wie diese Herstellung geprüft wird.</p>
      </section>

      <section className="standardMetaBand"><div className="shell standardMetaBar">
        <div><span>STANDARDVERSION</span><strong>1.0</strong></div>
        <div><span>GELTUNGSBEREICH</span><strong>Aufgenommene physische Produkte</strong></div>
        <div><span>PRÜFBEREICHE</span><strong>6 Muss-Kriterien</strong></div>
        <div><span>GÜLTIGKEIT</span><strong>Grundsätzlich 12 Monate</strong></div>
      </div></section>

      <section className="shell standardCriteriaSection">
        <div className="sectionIntro compact"><div><div className="sectionNo">PRÜFBEREICHE</div><h2>Sechs Muss-Kriterien für die Entscheidung.</h2></div><p>Eine Zertifizierung wird nur erteilt, wenn alle für den konkreten Zertifizierungsumfang anwendbaren Muss-Kriterien erfüllt sind.</p></div>
        <div className="criteriaGrid">{criteria.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div>
      </section>

      <section className="auditProcessSection"><div className="shell"><div className="sectionIntro compact"><div><div className="sectionNo">PRODUKTPRÄGUNG</div><h2>Nicht jede Handarbeit reicht automatisch aus.</h2></div><p>Produktprägend sind Schritte, die Form, Konstruktion, Funktion, Oberfläche, individuelle Ausführung oder eine andere wesentliche Eigenschaft des verkaufsfertigen Produkts erzeugen oder wesentlich verändern. Verpacken, Etikettieren, reine Kontrolle oder geringfügiges Finish allein reichen nicht.</p></div></div></section>

      <section className="decisionRule"><div className="shell decisionRuleInner"><div className="sectionNo">ENTSCHEIDUNGSREGEL</div><p>Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?</p></div></section>

      <section className="scopeExclusionSection"><div className="shell scopeExclusionGrid"><div><div className="sectionNo">KLARE GRENZEN</div><h2>Was Version 1.0 zusätzlich verbindlich regelt.</h2></div><div className="exclusionList"><span>Vor-Ort-Prüfung</span><span>Änderungspflicht</span><span>12 Monate Gültigkeit</span><span>Verlängerungsprüfung</span><span>Interessenkonflikte</span><span>Aktiver Status für Zeichennutzung</span></div></div></section>

      <section className="standardClose shell"><div><p>Die vollständige Fassung enthält außerdem Regeln zu Fremdfertigung, Nachweisen, Änderungen, verbundenen Unternehmen, Aussagegrenzen und Markennutzung. Version 0.1 bleibt im Dokumentenregister archiviert.</p></div><div className="standardCloseLinks"><Link className="textLink" href="/dokumente/standard-1-0">Standard 1.0 vollständig öffnen →</Link><Link className="textLink" href="/dokumente">Dokumentenregister →</Link></div></section>
      <SiteFooter />
    </main>
  );
}
