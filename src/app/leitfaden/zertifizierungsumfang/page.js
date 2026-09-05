import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Leitfaden zum Zertifizierungsumfang',
  description: 'Wie Produkt, Produktfamilie, Varianten, Produktionsorte und relevante Änderungen für eine Made by Humans Zertifizierung abgegrenzt werden.',
  alternates: { canonical: canonical('/leitfaden/zertifizierungsumfang') },
};

const scopeRules = [
  ['Eindeutiges Produkt', 'Der Umfang muss klar erkennen lassen, welches physische Produkt oder welche definierte Produktfamilie geprüft wird.'],
  ['Gleicher Herstellungsprozess', 'Produkte können gemeinsam betrachtet werden, wenn die wesentlichen produktprägenden Herstellungsschritte vergleichbar sind.'],
  ['Gleiche relevante Standorte', 'Produktionsorte, an denen wesentliche Schritte stattfinden, müssen zum veröffentlichten Umfang passen.'],
  ['Fremdfertigung einbeziehen', 'Extern ausgeführte wesentliche Schritte gehören in den Umfang, wenn sie für die zertifizierte Aussage relevant sind.'],
];

const examples = [
  ['Farbvariante derselben Tasche', 'Kann im selben Umfang liegen, wenn Material- und Herstellungsprozess im Wesentlichen unverändert bleiben.', 'Typischerweise gemeinsam prüfbar'],
  ['Neue Größe mit gleichem Verfahren', 'Kann derselben Produktfamilie zugeordnet werden, wenn die produktprägenden Schritte gleich bleiben.', 'Einzelfall prüfen'],
  ['Neues Produkt mit anderem Fertigungsverfahren', 'Erfordert in der Regel eine neue oder erweiterte Bewertung des Zertifizierungsumfangs.', 'Neue Bewertung'],
  ['Zusätzlicher Produktionsstandort', 'Muss bewertet werden, wenn dort wesentliche produktprägende Schritte ausgeführt werden.', 'Änderung prüfen'],
];

const changeTriggers = [
  'Wesentliche produktprägende Arbeitsschritte werden neu automatisiert.',
  'Ein wesentlicher Herstellungsschritt wird erstmals ausgelagert oder zu einem anderen Partner verlagert.',
  'Ein neuer relevanter Produktionsstandort kommt hinzu.',
  'Das Produkt oder die Produktfamilie wird so verändert, dass der bisher geprüfte Herstellungsprozess nicht mehr eindeutig passt.',
];

export default function ScopeGuidePage() {
  return (
    <main className="guidePage">
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">LEITFADEN · ZERTIFIZIERUNGSUMFANG</div>
        <h1>So wird festgelegt, was eine Zertifizierung tatsächlich umfasst.</h1>
        <p className="lead">
          Zertifiziert wird nicht pauschal ein Unternehmen. Der öffentliche Datensatz beschreibt
          ein konkretes Produkt oder eine klar abgegrenzte Produktfamilie und verbindet diesen Umfang
          mit Herstellungsprozess, relevanten Produktionsstandorten und Standardfassung.
        </p>
      </section>

      <section className="guideMetaBand">
        <div className="shell guideMetaGrid">
          <div><span>01</span><strong>Produkt</strong><p>Konkreter Gegenstand der Zertifizierung.</p></div>
          <div><span>02</span><strong>Produktfamilie</strong><p>Zusammenfassung vergleichbarer Varianten nur bei passendem Prozess.</p></div>
          <div><span>03</span><strong>Standorte</strong><p>Relevante Produktionsorte gehören zum Umfang.</p></div>
          <div><span>04</span><strong>Änderungen</strong><p>Wesentliche Prozessänderungen können eine Neubewertung auslösen.</p></div>
        </div>
      </section>

      <section className="shell guideSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">ABGRENZUNG</div>
            <h2>Vier Fragen definieren den Umfang.</h2>
          </div>
          <p>
            Der Umfang muss so konkret sein, dass später eindeutig geprüft werden kann,
            ob ein beworbenes Produkt vom veröffentlichten Datensatz erfasst ist.
          </p>
        </div>

        <div className="guideRuleGrid">
          {scopeRules.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="guideExamples">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">BEISPIELE</div>
              <h2>Nicht jede Variante braucht automatisch eine neue Zertifizierung.</h2>
            </div>
            <p>
              Entscheidend ist, ob sich die für die Aussage relevanten Herstellungsschritte,
              Produktionsorte oder die produktprägende menschliche Arbeit verändern.
            </p>
          </div>

          <div className="guideExampleTable">
            {examples.map(([caseName, explanation, result]) => (
              <article key={caseName}>
                <strong>{caseName}</strong>
                <p>{explanation}</p>
                <span>{result}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guideDark">
        <div className="shell guideDarkGrid">
          <div>
            <div className="sectionNo light">ÄNDERUNGSMELDUNG</div>
            <h2>Wann der bestehende Umfang neu geprüft werden sollte.</h2>
          </div>
          <div className="guideChecklist">
            {changeTriggers.map((item, index) => (
              <article key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell guideClose">
        <div>
          <div className="sectionNo">VORBEREITUNG</div>
          <h2>Den richtigen Umfang vor der Prüfung festlegen.</h2>
        </div>
        <div>
          <p>
            In der fachlichen Vorprüfung wird gemeinsam eingegrenzt, welches Produkt oder welche Produktfamilie
            sinnvoll in einem Zertifizierungsumfang zusammengefasst werden kann.
          </p>
          <div className="guideLinks">
            <Link className="button primary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="textLink" href="/leitfaden/nachweise">Nachweise verstehen →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
