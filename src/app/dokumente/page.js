import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Dokumentenregister',
  description: 'Versionierte öffentliche Arbeitsfassungen und Regelwerke des Made by Humans Zertifizierungssystems.',
  alternates: { canonical: canonical('/dokumente') },
};

const documents = [
  {
    id: 'MBH-STD-0.1',
    type: 'STANDARD',
    title: 'Arbeitsstandard 0.1',
    version: '0.1',
    status: 'Arbeitsfassung · in Validierung',
    date: '04.09.2026',
    copy: 'Geltungsbereich, Prüfkriterien, Abgrenzungen, Nachweise und Entscheidungsregel für physische Produkte.',
    href: '/dokumente/standard-0-1',
    pdf: '/documents/made-by-humans-standard-0-1.pdf',
  },
  {
    id: 'MBH-SCH-0.1',
    type: 'CERTIFICATION SCHEME',
    title: 'Certification Scheme 0.1',
    version: '0.1',
    status: 'Arbeitsfassung · Zielstruktur',
    date: '04.09.2026',
    copy: 'Rollen, Prüfprozess, Review, Zertifizierungsentscheidung, Statusverwaltung, Register und Governance.',
    href: '/dokumente/certification-scheme-0-1',
    pdf: '/documents/made-by-humans-certification-scheme-0-1.pdf',
  },
  {
    id: 'MBH-MARK-0.1',
    type: 'MARK USE',
    title: 'Grundsätze zur Markennutzung',
    version: '0.1',
    status: 'Arbeitsgrundsätze',
    date: '04.09.2026',
    copy: 'Regeln für Scope, Kennzeichnung, Produktbezug, Statusänderungen und zulässige Kommunikation.',
    href: '/markennutzung',
  },
  {
    id: 'MBH-GOV-0.1',
    type: 'GOVERNANCE',
    title: 'Beschwerden, Einsprüche & Zeichenmissbrauch',
    version: '0.1',
    status: 'Verfahrensgrundsätze',
    date: '04.09.2026',
    copy: 'Getrennte Verfahrenslogik für Beschwerden, Einsprüche gegen Entscheidungen und unberechtigte Zeichennutzung.',
    href: '/verfahren',
  },
];

export default function DocumentsPage() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">DOKUMENTENREGISTER</div>
        <h1>Versionierte Regeln statt unverbindlicher Aussagen.</h1>
        <p className="lead">
          Standard, Certification Scheme, Markennutzungsregeln und Governance-Verfahren werden als kontrollierte Dokumente geführt.
          Jede Fassung erhält Dokument-ID, Version, Status und Datum.
        </p>
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
            <div className="sectionNo">DOKUMENTENLENKUNG</div>
            <h2>Alte Fassungen sollen nachvollziehbar bleiben.</h2>
          </div>
          <p>
            Änderungen werden mit Versionsnummer, Datum, Status und Änderungsgrund dokumentiert.
            Sobald eine Fassung ersetzt wird, bleibt sie als ersetzte Version referenzierbar.
            Öffentliche Zertifizierungsdatensätze sollen auf die tatsächlich angewendete Standardversion verweisen.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
