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

const value = [
  ['HERSTELLER', 'Eine belegte Herstellungsangabe kann eindeutig einem Produkt zugeordnet und gegenüber ungeprüften Eigenclaims abgegrenzt werden.'],
  ['HANDEL', 'Eine definierte Produkteigenschaft kann über Zertifizierungs-ID, Standardversion und Status nachvollziehbar referenziert werden.'],
  ['KÄUFER', 'ID oder QR-Code führen zum öffentlichen Nachweis des konkreten Produkts und seines aktuellen Zertifizierungsstatus.'],
];

const journey = [
  ['Produkt definieren', 'Produkt oder Produktfamilie und relevante Herstellungsorte werden eindeutig abgegrenzt.'],
  ['Herstellung prüfen', 'Wesentliche Arbeitsschritte, menschliche Ausführung und Fremdfertigung werden bewertet.'],
  ['Entscheidung dokumentieren', 'Prüfergebnis, Scope und angewendete Standardversion werden nachvollziehbar festgehalten.'],
  ['Kennzeichnung zuordnen', 'Ein freigegebenes Produkt erhält Zeichen und eindeutige Zertifizierungs-ID.'],
  ['Öffentlich verifizieren', 'ID oder QR-Code führen zum Registereintrag und aktuellen Status.'],
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
            <h1>Menschliche Herstellung als überprüfbare Produkteigenschaft.</h1>
            <p className="lead">
              Made by Humans definiert, wann wesentliche Herstellungsschritte eines physischen Produkts
              tatsächlich durch Menschen ausgeführt wurden – und verbindet die geprüfte Aussage mit einer eindeutigen ID und einem öffentlichen Nachweis.
            </p>
            <div className="actions">
              <Link className="button primary" href="/standard">Standard ansehen</Link>
              <Link className="button secondary" href="/fuer-hersteller">Für Hersteller</Link>
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

      <section className="valueSection shell">
        <div className="sectionIntro">
          <div>
            <div className="sectionNo">WAS EINE ZERTIFIZIERUNG LEISTEN SOLL</div>
            <h2>Aus einer Herstellungsangabe wird ein überprüfbarer Produktclaim.</h2>
          </div>
          <p>
            Der Standard konzentriert sich bewusst auf eine eng definierte Aussage zur tatsächlichen Herstellung.
            Dadurch kann sie produktbezogen geprüft, kommuniziert und öffentlich verifiziert werden.
          </p>
        </div>

        <div className="valueGrid">
          {value.map(([title, copy]) => (
            <article key={title}>
              <span>{title}</span>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="journeySection">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">VOM PROZESS ZUR KENNZEICHNUNG</div>
              <h2>Ein klarer Weg vom Herstellungsprozess zum öffentlichen Nachweis.</h2>
            </div>
          </div>

          <div className="journeyGrid">
            {journey.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="documentarySection">
        <div className="shell documentaryIntro">
          <div>
            <div className="sectionNo">TATSÄCHLICHE HERSTELLUNG</div>
            <h2>Der Prüfgegenstand ist der reale Produktionsprozess.</h2>
          </div>
          <p>
            Entscheidend ist nicht die Darstellung eines Produkts, sondern welche Arbeitsschritte für seine Entstehung wesentlich sind,
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

      <section className="proofSection">
        <div className="shell proofGrid">
          <div className="proofCopy">
            <div className="sectionNo light">PUBLIC REGISTER</div>
            <h2>Eine Kennzeichnung endet nicht auf der Verpackung.</h2>
            <p>
              Der öffentliche Datensatz soll zeigen, welchem Hersteller und Produkt die Kennzeichnung zugeordnet ist,
              welche Standardfassung angewendet wurde und welchen aktuellen Status die Zertifizierung hat.
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
            <h2>Eine belegbare Herstellungsangabe direkt am Produkt nutzbar machen.</h2>
            <p>
              Das System ist darauf ausgelegt, erfolgreiche Prüfungen mit einer eindeutigen Produktkennzeichnung,
              einem öffentlichen Nachweis und klaren Regeln für die produktbezogene Kommunikation zu verbinden.
            </p>
            <Link className="button primary" href="/fuer-hersteller">Für Hersteller</Link>
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
