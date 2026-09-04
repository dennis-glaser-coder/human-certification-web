import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const system = [
  ['STANDARD', 'definiert die Anforderungen an die zertifizierte Eigenschaft.'],
  ['AUDIT', 'prüft Herstellungsprozess und Nachweise gegen den Standard.'],
  ['TRACEABILITY', 'ordnet relevante Produktionsschritte, Standorte und Fremdfertigung zu.'],
  ['PUBLIC REGISTER', 'verknüpft Kennzeichnung, Zertifizierungs-ID und öffentlichen Status.'],
];

const scope = [
  ['Produktbezug', 'Die Zertifizierung bezieht sich auf ein definiertes physisches Produkt oder eine klar abgegrenzte Produktfamilie.'],
  ['Herstellungsbezug', 'Geprüft werden die wesentlichen Schritte, durch die aus Materialien und Komponenten das Endprodukt entsteht.'],
  ['Nachweisbarkeit', 'Die Angaben zum Herstellungsprozess müssen durch geeignete Unterlagen und Informationen nachvollziehbar belegt werden.'],
];

const focus = [
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
            <div className="eyebrow">STANDARD FÜR MENSCHLICHE HERSTELLUNG</div>
            <h1>Ein Standard für nachweisbar menschlich gefertigte Produkte.</h1>
            <p className="lead">
              Made by Humans definiert, wann die wesentlichen Herstellungsschritte eines physischen Produkts
              tatsächlich durch Menschen ausgeführt wurden – und wie diese Eigenschaft geprüft und öffentlich verifiziert wird.
            </p>
            <div className="actions">
              <Link className="button primary" href="/standard">Standard ansehen</Link>
              <Link className="button secondary" href="/fuer-hersteller">Für Hersteller</Link>
            </div>
          </div>

          <aside className="markPanel">
            <div className="markPanelLabel">AUSSAGE DES ZEICHENS</div>
            <div className="markPanelBody">
              <img
                className="heroSeal"
                src={assetBase + '/brand/made-by-humans-seal.png'}
                alt="Made by Humans Zertifizierungszeichen"
                width="188"
                height="188"
              />
              <blockquote>
                Dieses Produkt wurde in seinen wesentlichen Herstellungsschritten nachweislich durch Menschen gefertigt.
              </blockquote>
            </div>
            <div className="markPanelMeta">
              <span>Eindeutige Zertifizierungs-ID</span>
              <span>Öffentlicher Registereintrag</span>
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

      <section className="documentarySection">
        <div className="shell documentaryIntro">
          <div>
            <div className="sectionNo">REALE HERSTELLUNG</div>
            <h2>Der Prüfgegenstand ist ein tatsächlicher Produktionsprozess.</h2>
          </div>
          <p>
            Die Bildwelt zeigt reale Arbeit in realen Produktionsumgebungen. Sie dient der sachlichen Einordnung
            von Herstellung und Qualitätskontrolle und wird später durch dokumentierte Aufnahmen aus eigenen Validierungsfällen ersetzt.
          </p>
        </div>

        <div className="shell documentaryGrid">
          <figure className="documentaryFigure documentaryWide">
            <img
              src="https://images.unsplash.com/photo-1745571479548-7e8c708c4eb0?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800"
              alt="Mitarbeiter prüft ein Metallteil mit einem Messschieber"
              loading="lazy"
            />
            <figcaption>
              Qualitätsprüfung in einem realen Produktionsprozess · Foto: Maxim Tolchinskiy / Unsplash · keine Aussage über einen Zertifizierungsstatus
            </figcaption>
          </figure>

          <figure className="documentaryFigure">
            <img
              src="https://images.unsplash.com/photo-1770196009760-bead9eb10514?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400"
              alt="Mitarbeiterin kontrolliert Textilien in einer Fabrik"
              loading="lazy"
            />
            <figcaption>
              Textilkontrolle in realer Produktion · Foto: Shanjir H / Unsplash · keine Aussage über einen Zertifizierungsstatus
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="homeSection shell">
        <div className="sectionIntro">
          <div>
            <div className="sectionNo">WAS GEPRÜFT WIRD</div>
            <h2>Geprüft wird eine klar abgegrenzte Eigenschaft des Produkts.</h2>
          </div>
          <p>
            Die Kennzeichnung ist keine allgemeine Aussage über ein Unternehmen. Sie bezieht sich darauf,
            ob die menschliche Arbeit für die tatsächliche Herstellung des Endprodukts wesentlich und belegbar ist.
          </p>
        </div>

        <div className="scopeGrid">
          {scope.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <Link className="textLink sectionLink" href="/standard">Kriterien und Abgrenzungen ansehen →</Link>
      </section>

      <section className="proofSection">
        <div className="shell proofGrid">
          <div className="proofCopy">
            <div className="sectionNo light">PUBLIC REGISTER</div>
            <h2>Jede Kennzeichnung muss öffentlich verifizierbar sein.</h2>
            <p>
              Der Registereintrag ordnet die Zertifizierungs-ID einem Hersteller, einem Produkt,
              der zugrunde liegenden Standardfassung und dem aktuellen Status zu.
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
            <div className="sectionNo">FÜR HERSTELLER</div>
            <h2>Für Hersteller mit nachvollziehbaren Produktionsprozessen.</h2>
            <p>
              Produkte können zur Validierung des Standards vorgestellt werden, wenn wesentliche Herstellungsschritte
              nachvollziehbar beschrieben und durch geeignete Informationen belegt werden können.
            </p>
            <Link className="button primary" href="/fuer-hersteller">Produkt vorstellen</Link>
          </div>

          <div className="focusList">
            <span className="focusLabel">STARTFOKUS</span>
            {focus.map((item) => <span className="focusItem" key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="institutionalSection">
        <div className="shell institutionalGrid">
          <Link href="/dokumente">
            <span>DOKUMENTE</span>
            <strong>Standardversionen und öffentliche Arbeitsfassungen</strong>
            <small>Dokumentation öffnen →</small>
          </Link>
          <Link href="/transparenz">
            <span>TRANSPARENZ</span>
            <strong>Prüfrollen, Statusverwaltung und Markennutzung</strong>
            <small>Governance ansehen →</small>
          </Link>
          <Link href="/ueber-uns">
            <span>ÜBER MADE BY HUMANS</span>
            <strong>Zweck, Abgrenzung und aktueller Entwicklungsstand</strong>
            <small>Mehr erfahren →</small>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
