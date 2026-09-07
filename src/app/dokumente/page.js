import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Dokumentenregister',
  description: 'Öffentliche Regeln und Dokumente des Made by Human Zertifizierungssystems – mit Versionsstand und Datum.',
  alternates: { canonical: canonical('/dokumente') },
};

const documents = [
  {
    id: 'MBH-STD-0.1',
    type: 'STANDARD',
    title: 'Standard 0.1',
    version: '0.1',
    status: 'Veröffentlicht',
    date: '04.09.2026',
    copy: 'Geltungsbereich, Prüfkriterien, Abgrenzungen, Nachweise und Entscheidungsregel für physische Produkte.',
    href: '/dokumente/standard-0-1',
    pdf: '/documents/made-by-human-standard-0-1.pdf',
  },
  {
    id: 'MBH-SCH-0.1',
    type: 'ZERTIFIZIERUNGSSCHEMA',
    title: 'Zertifizierungsschema 0.1',
    version: '0.1',
    status: 'Veröffentlicht',
    date: '04.09.2026',
    copy: 'Rollen, Prüfprozess, fachliche Kontrolle, Zertifizierungsentscheidung, Statusänderungen, Register und Verfahrensregeln.',
    href: '/dokumente/certification-scheme-0-1',
    pdf: '/documents/made-by-human-certification-scheme-0-1.pdf',
  },
  {
    id: 'MBH-MARK-0.1',
    type: 'MARKENNUTZUNG',
    title: 'Grundsätze zur Markennutzung',
    version: '0.1',
    status: 'Veröffentlicht',
    date: '04.09.2026',
    copy: 'Regeln für Zertifizierungsumfang, Kennzeichnung, Produktbezug, Statusänderungen und zulässige Kommunikation.',
    href: '/markennutzung',
  },
  {
    id: 'MBH-GOV-0.1',
    type: 'VERFAHRENSREGELN',
    title: 'Beschwerden, Einsprüche & Zeichenmissbrauch',
    version: '0.1',
    status: 'Veröffentlicht',
    date: '04.09.2026',
    copy: 'Getrennte Regeln für Beschwerden, Einsprüche gegen Entscheidungen und unberechtigte Zeichennutzung.',
    href: '/verfahren',
  },
];

export default function DocumentsPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">DOKUMENTENREGISTER</div>
        <BrandTrace compact />
        <h1>Regeln und Versionen öffentlich einsehbar.</h1>
        <p className="lead">
          Standard, Zertifizierungsschema, Markennutzungsregeln und Verfahrensregeln werden als kontrollierte Dokumente geführt.
          Dokument-ID, Version, Status und Stand machen jede veröffentlichte Fassung eindeutig referenzierbar.
        </p>
      </section>

      <section className="documentProofBand" aria-label="Dokumentenprinzipien">
        <div className="shell documentProofGrid">
          <div><strong>Dokument-ID</strong><p>Eindeutige Kennung für jedes Dokument.</p></div>
          <div><strong>Version</strong><p>Änderungen bleiben über die Versionen sichtbar.</p></div>
          <div><strong>Stand</strong><p>Veröffentlichungsdatum jeder Fassung.</p></div>
          <div><strong>Web & PDF</strong><p>Regelwerke sind direkt online und als PDF einsehbar.</p></div>
        </div>
      </section>

      <section className="shell documentsSection">
        <div className="documentRegistry">
          <div className="documentRegistryHead">
            <span>DOKUMENT</span><span>VERSION</span><span>STATUS</span><span>STAND</span><span></span>
          </div>

          {documents.map((doc) => (
            <article className="documentRegistryRow" key={doc.id}>
              <div>
                <small>{doc.type} · {doc.id}</small>
                <strong>{doc.title}</strong>
                <p>{doc.copy}</p>
              </div>
              <span>{doc.version}</span>
              <span>{doc.status}</span>
              <time>{doc.date}</time>
              <div className="documentActions">
                <Link href={doc.href}>Webfassung →</Link>
                {doc.pdf && <a href={assetBase + doc.pdf}>PDF ↓</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="versionPolicy">
        <div className="shell versionPolicyGrid">
          <div>
            <div className="sectionNo">VERSIONEN & ÄNDERUNGEN</div>
            <h2>Alte Fassungen bleiben auffindbar.</h2>
          </div>
          <p>
            Änderungen werden mit Versionsnummer, Datum, Status und Änderungsgrund dokumentiert.
            Sobald eine Fassung ersetzt wird, bleibt sie als ersetzte Version referenzierbar.
            Öffentliche Zertifizierungsdatensätze verweisen auf die tatsächlich angewendete Standardversion.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
