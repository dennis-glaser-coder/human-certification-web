import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Leitfaden für Prüfnachweise',
  description: 'Welche Unterlagen und Informationen zeigen können, wie ein Produkt tatsächlich hergestellt wird.',
  alternates: { canonical: canonical('/leitfaden/nachweise') },
};

const evidenceTypes = [
  ['Prozessbeschreibung', 'Eine verständliche Übersicht der wichtigsten Herstellungsschritte – vom Material oder Bauteil bis zum fertigen Produkt.'],
  ['Produktionsstandorte', 'Angaben zu den Orten, an denen die wichtigen Arbeitsschritte tatsächlich stattfinden.'],
  ['Fremdfertigung', 'Informationen zu wichtigen Schritten, die außerhalb des eigenen Betriebs ausgeführt werden.'],
  ['Bild- und Videonachweise', 'Fotos oder Videos können zeigen, wie einzelne Arbeitsschritte tatsächlich von Menschen ausgeführt werden.'],
  ['Fertigungsunterlagen', 'Arbeits-, Prozess-, Auftrags- oder Produktionsunterlagen können den beschriebenen Ablauf belegen.'],
  ['Änderungsnachweise', 'Änderungen an Herstellungsverfahren, Produktionsorten oder externer Fertigung müssen der bestehenden Zertifizierung zugeordnet werden können.'],
];

const weakEvidence = [
  'Eine reine Marketingaussage wie „handgemacht“ oder „manufakturgefertigt“.',
  'Nur ein Foto des fertigen Produkts ohne Bezug zum Herstellungsprozess.',
  'Eine allgemeine Unternehmensdarstellung ohne Informationen dazu, wie das konkrete Produkt hergestellt wird.',
  'Herkunfts- oder Lieferantenangaben, wenn daraus die tatsächliche menschliche Herstellung nicht hervorgeht.',
];

export default function EvidenceGuidePage() {
  return (
    <main className="guidePage">
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">LEITFADEN · PRÜFNACHWEISE</div>
        <h1>Belege müssen zeigen, wie das Produkt hergestellt wird.</h1>
        <p className="lead">
          Es gibt nicht für jedes Produkt denselben vorgeschriebenen Beleg. Entscheidend ist,
          dass die vorhandenen Informationen zusammen zeigen, welche wichtigen Herstellungsschritte stattfinden,
          wie sie ausgeführt werden und wo produziert wird.
        </p>
      </section>

      <section className="guideMetaBand">
        <div className="shell guideMetaGrid">
          <div><strong>Zum Produkt passend</strong><p>Die Belege müssen zu dem Produkt passen, das zertifiziert werden soll.</p></div>
          <div><strong>Zur Herstellung passend</strong><p>Entscheidend ist, wie das Produkt entsteht – nicht nur, wie es am Ende aussieht.</p></div>
          <div><strong>Mehrere Belege möglich</strong><p>Verschiedene Unterlagen können zusammen zeigen, wie das Produkt hergestellt wird.</p></div>
          <div><strong>Eindeutig zuordenbar</strong><p>Die Unterlagen müssen klar zum Produkt und zur Herstellung gehören.</p></div>
        </div>
      </section>

      <section className="shell guideSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">GEEIGNETE NACHWEISE</div>
            <h2>Sechs typische Arten von Belegen.</h2>
          </div>
          <p>
            Welche Belege sinnvoll sind, hängt vom Produkt, der Produktion, dem Einsatz von Maschinen und möglicher externer Fertigung ab.
          </p>
        </div>

        <div className="guideEvidenceGrid">
          {evidenceTypes.map(([title, copy]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="guideDark">
        <div className="shell guideDarkGrid">
          <div>
            <div className="sectionNo light">NICHT AUSREICHEND</div>
            <h2>Eine Behauptung allein ist noch kein Beleg.</h2>
          </div>
          <div className="guideChecklist">
            {weakEvidence.map((item) => (
              <article key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell guideClose">
        <div>
          <div className="sectionNo">NÄCHSTER SCHRITT</div>
          <h2>Produkt und Belege gemeinsam ansehen.</h2>
        </div>
        <div>
          <p>
            Für die erste Einschätzung müssen noch nicht alle Unterlagen vollständig aufbereitet sein. Wichtig ist, dass Sie erklären können, wie das Produkt hergestellt wird, und passende Belege verfügbar sind.
          </p>
          <div className="guideLinks">
            <Link className="button primary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="textLink" href="/leitfaden/zertifizierungsumfang">Was genau zertifiziert wird →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
