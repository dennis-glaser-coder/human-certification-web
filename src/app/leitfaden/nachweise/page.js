import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Leitfaden für Prüfnachweise',
  description: 'Welche Unterlagen und Informationen die Prüfung menschlicher Herstellung nachvollziehbar machen können.',
  alternates: { canonical: canonical('/leitfaden/nachweise') },
};

const evidenceTypes = [
  ['Prozessbeschreibung', 'Eine verständliche Übersicht der wesentlichen Herstellungsschritte – vom Material oder Bauteil bis zum verkaufsfertigen Produkt.'],
  ['Produktionsstandorte', 'Angaben zu den Orten, an denen wesentliche produktprägende Arbeitsschritte tatsächlich stattfinden.'],
  ['Fremdfertigung', 'Informationen zu extern ausgeführten Schritten, wenn diese zum Zertifizierungsumfang gehören.'],
  ['Bild- und Videonachweise', 'Aufnahmen können die tatsächliche menschliche Ausführung einzelner Herstellungsschritte unterstützen.'],
  ['Fertigungsunterlagen', 'Geeignete Arbeits-, Prozess-, Auftrags- oder Produktionsunterlagen können den beschriebenen Ablauf belegen.'],
  ['Änderungsnachweise', 'Relevante Änderungen an Verfahren, Standorten oder Fremdfertigung müssen dem bestehenden Zertifizierungsumfang zugeordnet werden können.'],
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
        <h1>Nachweise müssen den Herstellungsprozess nachvollziehbar machen.</h1>
        <p className="lead">
          Es gibt nicht den einen vorgeschriebenen Beleg für jedes Produkt. Entscheidend ist,
          dass die Kombination der vorliegenden Informationen die wesentlichen Herstellungsschritte,
          ihre tatsächliche Ausführung und die relevanten Produktionsorte nachvollziehbar macht.
        </p>
      </section>

      <section className="guideMetaBand">
        <div className="shell guideMetaGrid">
          <div><span>01</span><strong>Produktbezogen</strong><p>Nachweise müssen zum konkreten Zertifizierungsumfang passen.</p></div>
          <div><span>02</span><strong>Prozessbezogen</strong><p>Entscheidend ist die tatsächliche Herstellung, nicht nur das Endprodukt.</p></div>
          <div><span>03</span><strong>Kombinierbar</strong><p>Mehrere unterschiedliche Belege können gemeinsam ein belastbares Bild ergeben.</p></div>
          <div><span>04</span><strong>Nachvollziehbar</strong><p>Unterlagen müssen der Prüfung eindeutig zugeordnet werden können.</p></div>
        </div>
      </section>

      <section className="shell guideSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">GEEIGNETE NACHWEISE</div>
            <h2>Sechs typische Nachweisarten.</h2>
          </div>
          <p>
            Welche Kombination sinnvoll ist, hängt vom Produkt, der Produktionsstruktur,
            dem Automatisierungsgrad und der Fremdfertigung ab.
          </p>
        </div>

        <div className="guideEvidenceGrid">
          {evidenceTypes.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
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
            <h2>Eine Behauptung ist noch kein Nachweis.</h2>
          </div>
          <div className="guideChecklist">
            {weakEvidence.map((item, index) => (
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
          <div className="sectionNo">NÄCHSTER SCHRITT</div>
          <h2>Produkt und Nachweise gemeinsam einordnen.</h2>
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
