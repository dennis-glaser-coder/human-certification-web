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

function QrMock() {
  return (
    <svg className="qrMock" viewBox="0 0 76 76" aria-label="QR-Code Muster" role="img">
      <rect width="76" height="76" fill="white" />
      <g fill="currentColor">
        <path d="M4 4h22v22H4zM8 8v14h14V8zM12 12h6v6h-6z" fillRule="evenodd"/>
        <path d="M50 4h22v22H50zM54 8v14h14V8zM58 12h6v6h-6z" fillRule="evenodd"/>
        <path d="M4 50h22v22H4zM8 54v14h14V54zM12 58h6v6h-6z" fillRule="evenodd"/>
        <rect x="32" y="4" width="6" height="6"/><rect x="40" y="4" width="6" height="6"/>
        <rect x="32" y="12" width="6" height="14"/><rect x="40" y="18" width="6" height="8"/>
        <rect x="28" y="30" width="8" height="8"/><rect x="40" y="30" width="8" height="8"/>
        <rect x="52" y="30" width="8" height="8"/><rect x="64" y="30" width="8" height="8"/>
        <rect x="30" y="42" width="8" height="8"/><rect x="42" y="42" width="8" height="8"/>
        <rect x="54" y="42" width="18" height="6"/><rect x="30" y="54" width="6" height="18"/>
        <rect x="40" y="54" width="8" height="8"/><rect x="52" y="52" width="8" height="8"/>
        <rect x="64" y="52" width="8" height="20"/><rect x="42" y="66" width="18" height="6"/>
      </g>
    </svg>
  );
}

export default function Home() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main>
      <SiteHeader />

      <section className="homeHero">
        <div className="shell homeHeroGrid">
          <div className="homeHeroCopy">
            <div className="eyebrow">STANDARD FÜR MENSCHLICHE HERSTELLUNG</div>
            <h1>Menschliche Herstellung. Nachweisbar am Produkt.</h1>
            <p className="lead">
              Made by Humans prüft, ob die wesentlichen Herstellungsschritte eines physischen Produkts tatsächlich
              durch Menschen ausgeführt werden. Eine eindeutige ID verbindet das Zeichen mit dem öffentlichen Register.
            </p>
            <div className="actions">
              <Link className="button primary" href="/standard">Standard ansehen</Link>
              <Link className="button secondary" href="/fuer-hersteller">Produkt vorstellen</Link>
            </div>
          </div>

          <aside className="productMarkPreview">
            <div className="productMarkKicker">KENNZEICHNUNG · MUSTER</div>
            <div className="productMarkMain">
              <img
                className="heroSeal"
                src={assetBase + '/brand/made-by-humans-seal.png'}
                alt="Made by Humans Zertifizierungszeichen"
                width="176"
                height="176"
              />
              <div className="productMarkCopy">
                <span>ZERTIFIZIERTE AUSSAGE</span>
                <blockquote>
                  Dieses Produkt wurde in seinen wesentlichen Herstellungsschritten nachweislich durch Menschen gefertigt.
                </blockquote>
              </div>
            </div>
            <div className="productMarkVerify">
              <div>
                <small>ZERTIFIZIERUNGS-ID</small>
                <strong>MBH-XXXX-XXXX</strong>
                <span>Öffentlichen Nachweis prüfen</span>
              </div>
              <QrMock />
            </div>
            <div className="productMarkNote">Beispielhafte Darstellung · kein Zertifikat</div>
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
            <div className="sectionNo">TATSÄCHLICHE HERSTELLUNG</div>
            <h2>Geprüft wird der reale Produktionsprozess.</h2>
          </div>
          <p>
            Entscheidend ist, welche Arbeitsschritte für die Entstehung des Produkts wesentlich sind,
            wo sie stattfinden und wie sie tatsächlich ausgeführt werden.
          </p>
        </div>

        <div className="shell documentaryGrid">
          <figure className="documentaryFigure documentaryWide">
            <img
              src="https://images.unsplash.com/photo-1772442126046-29faff1ad234?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1800"
              alt="Goldschmiedin arbeitet an einem Schmuckstück am Werktisch"
              loading="lazy"
            />
            <figcaption>
              Schmuckfertigung am Werktisch · Foto: Johanna / Unsplash · keine Aussage über einen Zertifizierungsstatus
            </figcaption>
          </figure>

          <figure className="documentaryFigure">
            <img
              src="https://images.unsplash.com/photo-1773511237767-0e324389922a?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=1400"
              alt="Hände führen Stoff an einer Nähmaschine"
              loading="lazy"
            />
            <figcaption>
              Textile Fertigung an der Nähmaschine · Foto: Phil Hearing / Unsplash · keine Aussage über einen Zertifizierungsstatus
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="homeSection shell">
        <div className="sectionIntro">
          <div>
            <div className="sectionNo">WAS GEPRÜFT WIRD</div>
            <h2>Eine klar abgegrenzte Eigenschaft des Produkts.</h2>
          </div>
          <p>
            Die Kennzeichnung ist keine allgemeine Aussage über das Unternehmen.
            Sie bezieht sich auf die tatsächliche Herstellung des geprüften Produkts.
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
              der angewendeten Standardfassung und dem aktuellen Status zu.
            </p>
            <HeroVerify />
          </div>

          <article className="recordPreview">
            <div className="recordPreviewHead">
              <span>REGISTERSTRUKTUR</span>
              <span className="statusBadge demo">MUSTER</span>
            </div>
            <div className="recordPreviewId">MBH-XXXX-XXXX</div>
            <dl>
              <div><dt>Hersteller</dt><dd>Name des Herstellers</dd></div>
              <div><dt>Produkt</dt><dd>Produkt / Produktfamilie</dd></div>
              <div><dt>Standard</dt><dd>angewendete Version</dd></div>
              <div><dt>Status</dt><dd>aktuell öffentlich ausgewiesen</dd></div>
            </dl>
            <span className="recordPreviewNote">Schematische Darstellung · kein Zertifikat</span>
          </article>
        </div>
      </section>

      <section className="manufacturerSection shell">
        <div className="manufacturerGrid">
          <div>
            <div className="sectionNo">FÜR HERSTELLER</div>
            <h2>Menschliche Herstellung überprüfbar am Produkt ausweisen.</h2>
            <p>
              Das System ist darauf ausgelegt, eine erfolgreiche Prüfung mit Produktkennzeichnung,
              eindeutiger ID und öffentlichem Nachweis zu verbinden.
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
