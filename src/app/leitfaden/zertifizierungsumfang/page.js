import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Was genau wird zertifiziert?',
  description: 'Wie wir festlegen, welches Produkt, welche Varianten und welche Produktionsorte zu einer Made by Human Zertifizierung gehören.',
  alternates: { canonical: canonical('/leitfaden/zertifizierungsumfang') },
};

const scopeRules = [
  ['Klares Produkt', 'Es muss eindeutig sein, welches Produkt oder welche Produktfamilie geprüft wird.'],
  ['Ähnliche Herstellung', 'Produkte können gemeinsam geprüft werden, wenn die entscheidenden Herstellungsschritte weitgehend gleich sind.'],
  ['Passende Produktionsorte', 'Die Orte, an denen wichtige Herstellungsschritte stattfinden, müssen zur Zertifizierung passen.'],
  ['Externe Fertigung einbeziehen', 'Wichtige Arbeitsschritte bei anderen Betrieben gehören zur Zertifizierung, wenn sie das Produkt wesentlich prägen.'],
];

const examples = [
  ['Farbvariante derselben Tasche', 'Kann im selben Umfang liegen, wenn Material- und Herstellungsprozess im Wesentlichen unverändert bleiben.', 'Typischerweise gemeinsam prüfbar'],
  ['Neue Größe mit gleichem Verfahren', 'Kann derselben Produktfamilie zugeordnet werden, wenn die produktprägenden Schritte gleich bleiben.', 'Einzelfall prüfen'],
  ['Neues Produkt mit anderem Fertigungsverfahren', 'Erfordert in der Regel eine neue oder erweiterte Prüfung.', 'Neue Bewertung'],
  ['Zusätzlicher Produktionsstandort', 'Muss geprüft werden, wenn dort wichtige Herstellungsschritte stattfinden.', 'Änderung prüfen'],
];

const changeTriggers = [
  'Wichtige Arbeitsschritte werden neu automatisiert.',
  'Ein wichtiger Herstellungsschritt wird erstmals ausgelagert oder zu einem anderen Partner verlagert.',
  'Ein neuer Produktionsstandort für wichtige Arbeitsschritte kommt hinzu.',
  'Das Produkt oder die Produktfamilie wird so verändert, dass der bisher geprüfte Herstellungsprozess nicht mehr eindeutig passt.',
];

export default function ScopeGuidePage() {
  return (
    <main className="guidePage">
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">LEITFADEN · WAS WIRD ZERTIFIZIERT?</div>
        <h1>So legen wir fest, wofür eine Zertifizierung gilt.</h1>
        <p className="lead">
          Zertifiziert wird nicht pauschal ein Unternehmen. Der öffentliche Datensatz beschreibt
          ein konkretes Produkt oder eine klar abgegrenzte Produktfamilie und verbindet diesen Umfang
          mit Herstellungsprozess, relevanten Produktionsstandorten und Standardfassung.
        </p>
      </section>

      <section className="guideMetaBand">
        <div className="shell guideMetaGrid">
          <div><strong>Produkt</strong><p>Das konkrete Produkt, für das die Zertifizierung gilt.</p></div>
          <div><strong>Produktfamilie</strong><p>Vergleichbare Varianten können zusammengefasst werden, wenn sie weitgehend gleich hergestellt werden.</p></div>
          <div><strong>Standorte</strong><p>Wichtige Produktionsorte gehören zur Zertifizierung.</p></div>
          <div><strong>Änderungen</strong><p>Ändert sich die Herstellung wesentlich, kann eine neue Prüfung nötig werden.</p></div>
        </div>
      </section>

      <section className="shell guideSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">ABGRENZUNG</div>
            <h2>Vier Fragen klären, was zur Zertifizierung gehört.</h2>
          </div>
          <p>
            Die Zertifizierung muss so klar beschrieben sein, dass später jeder prüfen kann, ob ein beworbenes Produkt tatsächlich dazugehört.
          </p>
        </div>

        <div className="guideRuleGrid">
          {scopeRules.map(([title, copy]) => (
            <article key={title}>
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
              Entscheidend ist, ob sich wichtige Herstellungsschritte, Produktionsorte oder die menschliche Arbeit am Produkt verändern.
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
            <div className="sectionNo light">WENN SICH ETWAS ÄNDERT</div>
            <h2>Wann eine Zertifizierung neu geprüft werden sollte.</h2>
          </div>
          <div className="guideChecklist">
            {changeTriggers.map((item) => (
              <article key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell guideClose">
        <div>
          <div className="sectionNo">VORBEREITUNG</div>
          <h2>Vor der Prüfung festlegen, was zertifiziert werden soll.</h2>
        </div>
        <div>
          <p>
            In der ersten Einschätzung klären wir gemeinsam, welches Produkt oder welche Produktfamilie sinnvoll zusammen zertifiziert werden kann.
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
