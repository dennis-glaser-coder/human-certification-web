import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';

export default function StandardDocumentPage() {
  return (
    <main>
      <SiteHeader />
      <article className="shell standardDocument">
        <header className="standardDocumentHeader">
          <div><span>MADE BY HUMAN · STANDARD</span><h1>Standard 1.0</h1></div>
        </header>
        <section><h2>Freigabefassung</h2><p>Erste verbindliche Fassung für reale Zertifizierungen.</p></section>
        <Link href="/dokumente">Zur Dokumentenübersicht →</Link>
      </article>
      <SiteFooter />
    </main>
  );
}
