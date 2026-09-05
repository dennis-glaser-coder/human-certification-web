import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Standard 0.1',
  description: 'Version 0.1 des Made by Humans Standards für nachweisbar menschlich gefertigte physische Produkte.',
  alternates: { canonical: canonical('/dokumente/standard-0-1') },
};

const criteria = [
  ['Produktentstehung', 'Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'],
  ['Menschliche Ausführung', 'Die wesentlichen produktprägenden Herstellungsschritte werden tatsächlich unmittelbar durch Menschen ausgeführt.'],
  ['Fachliche Prägung', 'Relevante Schritte erfordern Erfahrung, Fähigkeit oder bewusste menschliche Entscheidungen.'],
  ['Automatisierungsgrenze', 'Technik kann unterstützen. Eine weitgehend autonome Produktentstehung erfüllt das Kriterium nicht.'],
  ['Rückverfolgbarkeit', 'Relevante Produktionsorte, Zulieferer und wesentliche Fremdfertigung müssen nachvollziehbar zugeordnet werden können.'],
  ['Nachweisbarkeit', 'Die Angaben zum Herstellungsprozess müssen durch geeignete Informationen und Unterlagen prüfbar sein.'],
];

export default function StandardDocumentPage() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main className="standardDocumentPage">
      <SiteHeader />

      <article className="shell standardDocument">
        <div className="controlledDocumentActions">
          <a className="button primary" href={assetBase + '/documents/made-by-humans-standard-0-1.pdf'}>PDF herunterladen</a>
          <Link className="button secondary" href="/dokumente">Dokumentenregister</Link>
        </div>

        <header className="standardDocumentHeader">
          <div>
            <span>MADE BY HUMANS · STANDARD</span>
            <h1>Standard 0.1</h1>
          </div>
          <dl>
            <div><dt>Dokument-ID</dt><dd>MBH-STD-0.1</dd></div>
            <div><dt>Version</dt><dd>0.1</dd></div>
            <div><dt>Stand</dt><dd>04.09.2026</dd></div>
            <div><dt>Geltungsbereich</dt><dd>Physische Produkte</dd></div>
          </dl>
        </header>

        <section>
          <h2>Zweck</h2>
          <p>
            Der Standard beschreibt, wann die menschliche Herstellung eines physischen Produkts so wesentlich,
            nachvollziehbar und belegbar ist, dass diese Eigenschaft zertifiziert kommuniziert werden kann.
          </p>
        </section>

        <section>
          <h2>Geltungsbereich</h2>
          <p>
            Bewertet wird ein definiertes physisches Produkt oder eine klar abgegrenzte Produktfamilie und der zugehörige Herstellungsprozess.
            Nicht Gegenstand dieser Fassung sind Herkunftsland, Nachhaltigkeit, Bio- oder Fairtrade-Eigenschaften und Unternehmensgröße.
          </p>
        </section>

        <section>
          <h2>Prüfkriterien</h2>
          <div className="standardDocumentCriteria">
            {criteria.map(([title, copy]) => (
              <div key={title}><strong>{title}</strong><p>{copy}</p></div>
            ))}
          </div>
        </section>

        <section>
          <h2>Entscheidungsregel</h2>
          <blockquote>
            Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?
          </blockquote>
        </section>

        <section>
          <h2>Nachweise</h2>
          <p>
            Art und Umfang der Nachweise richten sich nach Produkt, Prozess und Risikoprofil.
            Relevante Informationen können unter anderem Prozessbeschreibungen, Produktionsunterlagen,
            Angaben zu Standorten und Fremdfertigung sowie geeignete Belege zur tatsächlichen Ausführung umfassen.
          </p>
        </section>

        <section>
          <h2>Dokumentenlenkung</h2>
          <p>
            Standardversion, Dokument-ID und Stand werden kontrolliert geführt. Änderungen an Kriterien,
            Nachweisanforderungen oder Entscheidungsregeln werden in einer neuen Version nachvollziehbar dokumentiert.
          </p>
          <Link className="textLink" href="/dokumente">Zur Dokumentenübersicht →</Link>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
