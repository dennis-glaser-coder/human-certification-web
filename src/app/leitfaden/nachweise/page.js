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
  ['Prozessbeschreibung', 'Eine verständliche Übersicht der wesentlichen Herstellungsschritte – vom Material oder Bauteil bis zum verkaufsfertigen Produkt.'],
  ['Produktionsstandorte', 'Angaben zu den Orten, an denen wesentliche produktprägende Arbeitsschritte tatsächlich stattfinden.'],
  ['Fremdfertigung', 'Informationen zu extern ausgeführten Schritten, wenn diese zum Zertifizierungsumfang gehören.'],
  ['Bild- und Videonachweise', 'Fotos oder Videos können zeigen, wie einzelne Arbeitsschritte tatsächlich von Menschen ausgeführt werden.'],
  ['Fertigungsunterlagen', 'Arbeits-, Prozess-, Auftrags- oder Produktionsunterlagen können den beschriebenen Ablauf belegen.'],
  ['Änderungsnachweise', 'Änderungen an Herstellungsverfahren, Produktionsorten oder externer Fertigung müssen der bestehenden Zertifizierung zugeordnet werden können.'],
];

const weakEvidence = [
  'Eine reine Marketingaussage wie „handgemacht“ oder „manufakturgefertigt“.',
  'Nur ein Foto des fertigen Produkts ohne Bezug zum Herstellungsprozess.',
  'Eine allgemeine Unternehmensdarstellung ohne produktbezogene Prozessinformationen.',
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
          Es gibt nicht den einen vorgeschriebenen Beleg für jedes Produkt. Entscheidend ist,
          dass die Kombination der vorliegenden Informationen die wesentlichen Herstellungsschritte,
          ihre tatsächliche Ausführung und die relevanten Produktionsorte nachvollziehbar macht.
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
            Welche Kombination sinnvoll ist, hängt vom Produkt, der Produktionsstruktur,
            dem Automatisierungsgrad und der Fremdfertigung ab.
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
            Für die erste fachliche Vorprüfung müssen nicht alle Unterlagen bereits vollständig aufbereitet sein.
            Wichtig ist, dass der Herstellungsprozess belastbar beschrieben werden kann und geeignete Nachweise verfügbar sind.
          </p>
          <div className="guideLinks">
            <Link className="button primary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="textLink" href="/leitfaden/zertifizierungsumfang">Zertifizierungsumfang verstehen →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
