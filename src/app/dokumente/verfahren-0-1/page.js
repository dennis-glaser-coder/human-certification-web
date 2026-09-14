import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';

export default function ArchivedProcedurePage() {
  return (
    <main>
      <SiteHeader />
      <article className="shell controlledDocument">
        <header className="controlledDocumentHeader">
          <div><span>ARCHIV · MBH-GOV-0.1</span><h1>Verfahrensregeln 0.1</h1><p>Historische Fassung vom 04.09.2026. Ersetzt durch Version 1.0.</p></div>
        </header>
        <section><h2>Archivstatus</h2><p>Diese frühere Fassung unterschied Beschwerden, Einsprüche gegen Zertifizierungsentscheidungen und unberechtigte Zeichennutzung und verlangte eine dokumentierte Bearbeitung der jeweiligen Vorgänge.</p></section>
        <section><h2>Aktuelle Fassung</h2><p>Für aktuelle Vorgänge gelten die Verfahrensregeln 1.0.</p><Link className="textLink" href="/verfahren">Aktuelle Fassung öffnen →</Link></section>
      </article>
      <SiteFooter />
    </main>
  );
}
