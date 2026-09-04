import Link from 'next/link';

const points = [
  ['Prüfbar statt behauptet', 'Jede gültige Zertifizierung erhält eine eindeutige ID und kann öffentlich verifiziert werden.'],
  ['Klare Kriterien', 'Der Standard definiert nachvollziehbar, welche menschlichen Arbeitsschritte belegt werden müssen.'],
  ['Vertrauen für Käufer', 'Hersteller, Produkt, Status und Gültigkeit sind transparent miteinander verknüpft.'],
];

export default function Home() {
  return (
    <main>
      <header className="nav shell">
        <Link className="brand" href="/" aria-label="Startseite">
          <span className="mark">H</span><span>PROJECT HUMAN</span>
        </Link>
        <nav>
          <Link href="/standard">Standard</Link>
          <Link href="/fuer-hersteller">Für Hersteller</Link>
          <Link className="navCta" href="/pruefen">Siegel prüfen</Link>
        </nav>
      </header>

      <section className="hero shell">
        <div className="eyebrow">UNABHÄNGIGER PRODUKTSTANDARD · ARBEITSTITEL</div>
        <h1>Wenn „von Menschen gemacht“ wieder etwas bedeutet.</h1>
        <p className="lead">Ein überprüfbarer Standard für physische Produkte, bei denen menschliche Fertigung nicht nur Teil der Geschichte ist — sondern nachvollziehbar belegt wird.</p>
        <div className="actions">
          <Link className="button primary" href="/pruefen">Zertifizierung prüfen</Link>
          <Link className="button secondary" href="/fuer-hersteller">Als Hersteller vormerken</Link>
        </div>
        <div className="trustline"><span>STANDARD</span><i></i><span>PRÜFUNG</span><i></i><span>REGISTER</span><i></i><span>TRANSPARENZ</span></div>
      </section>

      <section className="statement">
        <div className="shell statementGrid">
          <div>
            <div className="sectionNo">01 / WARUM</div>
            <h2>Vertrauen braucht mehr als ein schönes Zeichen.</h2>
          </div>
          <p>Ein Siegel wird erst wertvoll, wenn dahinter ein belastbarer Standard, eine dokumentierte Prüfung und ein öffentlich nachvollziehbarer Status stehen. Genau darauf ist die Plattform von Anfang an ausgelegt.</p>
        </div>
      </section>

      <section className="shell featureSection">
        <div className="sectionNo">02 / DAS SYSTEM</div>
        <div className="cards">
          {points.map(([title, copy], idx) => (
            <article className="card" key={title}>
              <span>0{idx + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="registry shell">
        <div>
          <div className="sectionNo">03 / ÖFFENTLICHES REGISTER</div>
          <h2>Eine ID. Ein Produkt. Ein klarer Status.</h2>
          <p>QR-Code oder Zertifizierungs-ID führen direkt zur öffentlichen Prüfseite. Aktive, ausgesetzte, abgelaufene oder widerrufene Zertifizierungen bleiben nachvollziehbar.</p>
        </div>
        <div className="certificateMock">
          <div className="mockTop"><span>CERTIFICATION RECORD</span><b>● ACTIVE</b></div>
          <strong>HC-2026-000001</strong>
          <dl>
            <div><dt>Hersteller</dt><dd>Beispiel Manufaktur</dd></div>
            <div><dt>Produkt</dt><dd>Produktname</dd></div>
            <div><dt>Standard</dt><dd>Version 1.0</dd></div>
          </dl>
          <Link href="/pruefen">Register öffnen →</Link>
        </div>
      </section>

      <footer className="footer shell">
        <div className="brand"><span className="mark">H</span><span>PROJECT HUMAN</span></div>
        <p>Arbeitsversion · Markenname und finales Siegel noch offen.</p>
      </footer>
    </main>
  );
}
