import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const system = [
  ['STANDARD', 'legt die Anforderungen an die menschlich geprägte Herstellung fest.'],
  ['AUDIT', 'prüft Herstellungsprozess und Nachweise gegen den Standard.'],
  ['TRACEABILITY', 'macht relevante Produktionsschritte und Fremdfertigung nachvollziehbar.'],
  ['PUBLIC REGISTER', 'verknüpft Kennzeichnung, Zertifizierungs-ID und aktuellen Status.'],
];

const examples = [
  {
    title: 'Ledertasche',
    process: 'Zuschnitt, Nähen, Formgebung, Montage und Finish werden durch Menschen ausgeführt.',
    result: 'Grundsätzlich zertifizierbar',
    positive: true,
  },
  {
    title: 'Tisch mit CNC-Zuschnitt',
    process: 'Zuschnitt digital; Anpassung, Verbindung, Montage, Schleifen und Finish erfolgen durch Menschen.',
    result: 'Grundsätzlich zertifizierbar',
    positive: true,
  },
  {
    title: 'Fertig importiertes Produkt',
    process: 'Das verkaufsfertige Produkt wird nur noch etikettiert, verpackt oder mit einem eigenen Logo versehen.',
    result: 'Nicht zertifizierbar',
    positive: false,
  },
];

const pilotSegments = [
  'Taschen & Lederwaren',
  'Schmuck',
  'Möbel & Holz',
  'Keramik & Glas',
  'Mode & Textil',
  'Wohnaccessoires',
];

export default function Home() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main>
      <SiteHeader />

      <section className="homeHero">
        <div className="shell homeHeroGrid">
          <div className="homeHeroCopy">
            <div className="eyebrow">PILOTPHASE · STANDARD IN ENTWICKLUNG</div>
            <h1>Menschliche Herstellung sichtbar und überprüfbar machen.</h1>
            <p className="lead">
              Made by Humans entwickelt einen branchenübergreifenden Standard für physische Produkte,
              deren wesentliche Herstellungsschritte nachweislich von Menschen ausgeführt werden.
            </p>
            <div className="actions">
              <Link className="button primary" href="/standard">Standard ansehen</Link>
              <Link className="button secondary" href="/fuer-hersteller">Für Hersteller</Link>
            </div>
          </div>

          <aside className="markPanel">
            <div className="markPanelLabel">AUSSAGE DES ZEICHENS</div>
            <img
              className="heroSeal"
              src={`${assetBase}/brand/made-by-humans-seal.png`}
              alt="Temporäres Made by Humans Zertifizierungszeichen"
            />
            <blockquote>
              Dieses Produkt wurde in seinen wesentlichen Herstellungsschritten nachweislich durch Menschen gefertigt.
            </blockquote>
            <div className="markPanelMeta">
              <span>Zertifizierungs-ID</span>
              <span>Öffentlicher Nachweis</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="systemBand">
        <div className="shell systemBandGrid">
          {system.map(([term, copy]) => (
            <article key={term}>
              <strong>{term}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="homeSection shell">
        <div className="sectionIntro">
          <div className="sectionNo">PRÜFGEGENSTAND</div>
          <h2>Zertifiziert wird ein konkretes Produkt und sein Herstellungsprozess.</h2>
          <p>
            Entscheidend ist, ob menschliche Arbeit für die Entstehung des Endprodukts wesentlich ist,
            tatsächlich ausgeführt wird und durch belastbare Informationen nachgewiesen werden kann.
          </p>
        </div>

        <div className="exampleTable">
          <div className="exampleTableHead">
            <span>BEISPIEL</span>
            <span>HERSTELLUNG</span>
            <span>EINORDNUNG</span>
          </div>
          {examples.map((example) => (
            <article className="exampleRow" key={example.title}>
              <strong>{example.title}</strong>
              <p>{example.process}</p>
              <span className={example.positive ? 'decision yes' : 'decision no'}>{example.result}</span>
            </article>
          ))}
        </div>

        <Link className="textLink sectionLink" href="/standard">Prüfkriterien und weitere Grenzfälle ansehen →</Link>
      </section>

      <section className="proofSection">
        <div className="shell proofGrid">
          <div className="proofCopy">
            <div className="sectionNo light">PUBLIC REGISTER</div>
            <h2>Die Kennzeichnung ist mit einem öffentlichen Datensatz verknüpft.</h2>
            <p>
              Der öffentliche Nachweis soll zeigen, welches Produkt geprüft wurde, welcher Standard zugrunde lag,
              wie lange die Zertifizierung gültig ist und ob sich ihr Status geändert hat.
            </p>
            <HeroVerify />
          </div>

          <article className="recordPreview">
            <div className="recordPreviewHead">
              <span>BEISPIEL-DATENSATZ</span>
              <span className="statusBadge demo">DEMO</span>
            </div>
            <div className="recordPreviewId">HC-DEMO-0001</div>
            <dl>
              <div><dt>Hersteller</dt><dd>Demo Manufaktur GmbH</dd></div>
              <div><dt>Produkt</dt><dd>Demo Produkt</dd></div>
              <div><dt>Standard</dt><dd>Demo-Standard</dd></div>
              <div><dt>Status</dt><dd>Technischer Beispieldatensatz</dd></div>
            </dl>
            <Link href="/c/HC-DEMO-0001">Datensatz öffnen →</Link>
          </article>
        </div>
      </section>

      <section className="manufacturerSection shell">
        <div className="manufacturerGrid">
          <div>
            <div className="sectionNo">PILOTUNTERNEHMEN</div>
            <h2>Gesucht werden reale Produkte und nachvollziehbare Herstellungsprozesse.</h2>
            <p>
              Die erste Validierung konzentriert sich auf Produktkategorien, in denen menschliche Herstellung
              klar abgrenzbar und für Käufer relevant ist.
            </p>
            <Link className="button primary" href="/fuer-hersteller">Pilotphase für Hersteller</Link>
          </div>

          <div className="segmentList">
            {pilotSegments.map((segment) => <span key={segment}>{segment}</span>)}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
