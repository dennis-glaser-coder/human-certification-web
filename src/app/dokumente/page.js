import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Dokumentenregister',
  description: 'Öffentliche Regeln und Dokumente des Made by Human Zertifizierungssystems – mit Versionsstand und Datum.',
  alternates: { canonical: canonical('/dokumente') },
  openGraph: { type: 'website', locale: 'de_DE', siteName: 'Made by Human', title: 'Dokumentenregister | Made by Human', description: 'Öffentliche Regeln und Dokumente des Made by Human Zertifizierungssystems – mit Versionsstand und Datum.', url: canonical('/dokumente'), images: [SOCIAL_IMAGE] },
};

const documents = [
  { id: 'MBH-STD-1.0', type: 'STANDARD', title: 'Standard 1.0', version: '1.0', status: 'Aktuell · veröffentlicht', date: '14.09.2026', copy: 'Verbindliche Kriterien, Bestehensregel, Nachweise, Gültigkeit, Änderungen und Aussagegrenzen.', href: '/dokumente/standard-1-0', pdf: '/documents/made-by-human-standard-1-0.pdf' },
  { id: 'MBH-SCH-1.0', type: 'ZERTIFIZIERUNGSSCHEMA', title: 'Zertifizierungsschema 1.0', version: '1.0', status: 'Aktuell · veröffentlicht', date: '14.09.2026', copy: 'Antrag, Rollen, Vor-Ort-Prüfung, Entscheidung, Gültigkeit, Überwachung, Register und Interessenkonflikte.', href: '/dokumente/certification-scheme-1-0', pdf: '/documents/made-by-human-certification-scheme-1-0.pdf' },
  { id: 'MBH-MARK-1.0', type: 'MARKENNUTZUNG', title: 'Regeln zur Markennutzung', version: '1.0', status: 'Aktuell · veröffentlicht', date: '14.09.2026', copy: 'Regeln für Produktbezug, aktiven Status, Registerzuordnung und zulässige Verwendung des Zeichens.', href: '/markennutzung' },
  { id: 'MBH-GOV-1.0', type: 'VERFAHRENSREGELN', title: 'Beschwerden, Einsprüche & Zeichenmissbrauch', version: '1.0', status: 'Aktuell · veröffentlicht', date: '14.09.2026', copy: 'Verfahren, Dokumentationspflichten, Zuständigkeiten und Umgang mit möglichen Interessenkonflikten.', href: '/verfahren' },
  { id: 'MBH-STD-0.1', type: 'ARCHIV · STANDARD', title: 'Standard 0.1', version: '0.1', status: 'Ersetzt durch 1.0', date: '04.09.2026', copy: 'Historische Vorabfassung vor der ersten verbindlichen Zertifizierungsfassung.', href: '/dokumente/standard-0-1', pdf: '/documents/made-by-human-standard-0-1.pdf' },
  { id: 'MBH-SCH-0.1', type: 'ARCHIV · ZERTIFIZIERUNGSSCHEMA', title: 'Zertifizierungsschema 0.1', version: '0.1', status: 'Ersetzt durch 1.0', date: '04.09.2026', copy: 'Historische Vorabfassung des Zertifizierungsschemas.', href: '/dokumente/certification-scheme-0-1', pdf: '/documents/made-by-human-certification-scheme-0-1.pdf' },
  { id: 'MBH-MARK-0.1', type: 'ARCHIV · MARKENNUTZUNG', title: 'Markennutzungsregeln 0.1', version: '0.1', status: 'Ersetzt durch 1.0', date: '04.09.2026', copy: 'Historische Vorabfassung der Regeln zur Zeichennutzung.', href: '/dokumente/markennutzung-0-1' },
  { id: 'MBH-GOV-0.1', type: 'ARCHIV · VERFAHRENSREGELN', title: 'Verfahrensregeln 0.1', version: '0.1', status: 'Ersetzt durch 1.0', date: '04.09.2026', copy: 'Historische Vorabfassung für Beschwerden, Einsprüche und Zeichenmissbrauch.', href: '/dokumente/verfahren-0-1' },
];

export default function DocumentsPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';
  return (
    <main>
      <SiteHeader />
      <section className="pageHero shell"><div className="eyebrow">DOKUMENTENREGISTER</div><BrandTrace compact /><h1>Regeln und Versionen öffentlich einsehbar.</h1><p className="lead">Standard, Zertifizierungsschema, Markennutzungsregeln und Verfahrensregeln werden mit Dokument-ID, Version, Status und Datum veröffentlicht. Ersetzte Fassungen bleiben als Archiv nachvollziehbar.</p></section>
      <section className="documentProofBand" aria-label="Dokumentenprinzipien"><div className="shell documentProofGrid"><div><strong>Dokument-ID</strong><p>Eindeutige Kennung für jedes Dokument.</p></div><div><strong>Version</strong><p>Änderungen bleiben über die Versionen sichtbar.</p></div><div><strong>Stand</strong><p>Veröffentlichungsdatum jeder Fassung.</p></div><div><strong>Web & PDF</strong><p>Die zentralen Regelwerke sind direkt online und als PDF einsehbar.</p></div></div></section>
      <section className="shell documentsSection"><div className="documentRegistry"><div className="documentRegistryHead"><span>DOKUMENT</span><span>VERSION</span><span>STATUS</span><span>STAND</span><span></span></div>{documents.map((doc) => <article className="documentRegistryRow" key={doc.id}><div><small>{doc.type} · {doc.id}</small><strong>{doc.title}</strong><p>{doc.copy}</p></div><span>{doc.version}</span><span>{doc.status}</span><time>{doc.date}</time><div className="documentActions"><Link href={doc.href}>Webfassung →</Link>{doc.pdf && <a href={assetBase + doc.pdf}>PDF ↓</a>}</div></article>)}</div></section>
      <section className="versionPolicy"><div className="shell versionPolicyGrid"><div><div className="sectionNo">VERSIONEN & ÄNDERUNGEN</div><h2>Alte Fassungen bleiben auffindbar.</h2></div><p>Änderungen werden mit Versionsnummer, Datum und Status festgehalten. Registereinträge zeigen, nach welcher Standardversion geprüft wurde. Eine neue Fassung ändert nicht rückwirkend, nach welchem Regelstand eine frühere Entscheidung getroffen wurde.</p></div></section>
      <SiteFooter />
    </main>
  );
}
