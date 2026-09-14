import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';

export default function ArchivedMarkUsePage() {
  return (
    <main>
      <SiteHeader />
      <article className="shell controlledDocument">
        <header className="controlledDocumentHeader">
          <div><span>ARCHIV · MBH-MARK-0.1</span><h1>Markennutzungsregeln 0.1</h1><p>Historische Fassung vom 04.09.2026. Ersetzt durch Version 1.0.</p></div>
        </header>
        <section><h2>Archivstatus</h2><p>Diese frühere Fassung regelte die produktbezogene Nutzung des Zeichens, die Zuordnung zu Zertifizierungs-ID und Register sowie die Beendigung der Nutzung bei nicht gültigem Status.</p></section>
        <section><h2>Aktuelle Fassung</h2><p>Für neue Zertifizierungen gelten die aktuellen Markennutzungsregeln 1.0.</p><Link className="textLink" href="/markennutzung">Aktuelle Fassung öffnen →</Link></section>
      </article>
      <SiteFooter />
    </main>
  );
}
