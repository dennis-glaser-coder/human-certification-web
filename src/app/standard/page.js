import Link from 'next/link';

export default function StandardPage() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/"><span className="mark">H</span><span>PROJECT HUMAN</span></Link>
        <Link href="/">← Startseite</Link>
      </header>
      <section className="textPage shell">
        <div className="eyebrow">DER STANDARD</div>
        <h1>Nachvollziehbare Kriterien statt Marketingversprechen.</h1>
        <p className="lead small">Hier veröffentlichen wir später Kriterien, Geltungsbereich, Prüfverfahren, Ausschlüsse und die jeweils gültige Standardversion. Die technische Struktur für versionierte Standards ist bereits vorbereitet.</p>
      </section>
    </main>
  );
}
