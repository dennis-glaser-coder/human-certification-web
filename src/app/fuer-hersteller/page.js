import Link from 'next/link';

export default function ManufacturerPage() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/"><span className="mark">H</span><span>PROJECT HUMAN</span></Link>
        <Link href="/">← Startseite</Link>
      </header>
      <section className="textPage shell">
        <div className="eyebrow">FÜR HERSTELLER</div>
        <h1>Aus Handarbeit wird ein belegbarer Qualitätsfaktor.</h1>
        <p className="lead small">Die erste Version wird interessierte Hersteller erfassen. Danach folgen Antrag, Nachweise, Auditstatus und Zertifikatsverwaltung in einem geschützten Bereich.</p>
      </section>
    </main>
  );
}
