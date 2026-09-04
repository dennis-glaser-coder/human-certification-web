import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Dokumente & Standardversionen',
  description: 'Öffentliche Arbeitsfassungen, Versionsstand und Dokumentation des Made by Humans Zertifizierungssystems.',
  alternates: { canonical: canonical('/dokumente') },
};

const documents = [
  {
    type: 'STANDARD',
    title: 'Arbeitsstandard 0.1',
    status: 'In Validierung',
    date: '04.09.2026',
    copy: 'Öffentliche Arbeitsfassung mit Geltungsbereich, Prüfkriterien, Abgrenzungen und Nachweisanforderungen.',
    href: '/dokumente/standard-0-1',
  },
  {
    type: 'GOVERNANCE',
    title: 'Transparenz & Governance',
    status: 'Fortlaufend dokumentiert',
    date: '04.09.2026',
    copy: 'Grundsätze für Standardversionen, Prüfrollen, Statusänderungen, Markennutzung, Beschwerden und Einsprüche.',
    href: '/transparenz',
  },
];

export default function DocumentsPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">DOKUMENTE</div>
        <h1>Öffentliche Arbeitsfassungen und Versionsstand.</h1>
        <p className="lead">
          Regeln und Änderungen sollen versioniert nachvollziehbar bleiben.
          Diese Seite bildet den öffentlichen Dokumentationsstand des Systems ab.
        </p>
      </section>

      <section className="shell documentsSection">
        <div className="documentList">
          <div className="documentListHead">
            <span>DOKUMENT</span><span>STATUS</span><span>STAND</span><span></span>
          </div>
          {documents.map((doc) => (
            <article className="documentRow" key={doc.title}>
              <div><small>{doc.type}</small><strong>{doc.title}</strong><p>{doc.copy}</p></div>
              <span>{doc.status}</span>
              <time>{doc.date}</time>
              <Link href={doc.href}>Öffnen →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="versionPolicy">
        <div className="shell versionPolicyGrid">
          <div>
            <div className="sectionNo">VERSIONIERUNG</div>
            <h2>Eine Zertifizierung muss auf die angewendete Regelversion zurückführbar sein.</h2>
          </div>
          <p>
            Änderungen am Standard sollen mit Versionsnummer, Datum und Änderungsgrund dokumentiert werden.
            Öffentliche Zertifizierungsdatensätze verweisen auf die jeweils zugrunde liegende Standardfassung.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
