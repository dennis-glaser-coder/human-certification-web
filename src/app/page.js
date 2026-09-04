import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const principles = [
  {
    no: '01',
    title: 'Menschlicher Anteil muss belegbar sein.',
    copy: 'Nicht die Geschichte rund um ein Produkt zählt, sondern nachvollziehbare Arbeitsschritte, Verantwortlichkeiten und Nachweise.',
  },
  {
    no: '02',
    title: 'Der Standard muss prüfbar bleiben.',
    copy: 'Kriterien, Standardversion und Zertifizierungsstatus werden so strukturiert, dass Entscheidungen später nachvollzogen werden können.',
  },
  {
    no: '03',
    title: 'Das Siegel braucht ein öffentliches Gegenstück.',
    copy: 'Jede freigegebene Zertifizierung erhält eine eindeutige ID und einen öffentlichen Registereintrag.',
  },
];

const process = [
  ['Antrag', 'Hersteller beschreibt Produkt, Fertigung und relevante menschliche Arbeitsschritte.'],
  ['Nachweise', 'Belege und Prozessinformationen werden strukturiert eingereicht und auf Vollständigkeit geprüft.'],
  ['Prüfung', 'Die Anforderungen der jeweils gültigen Standardversion werden gegen das Produkt bewertet.'],
  ['Register', 'Freigegebene Produkte erhalten Status, Zertifizierungs-ID und einen öffentlich prüfbaren Eintrag.'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell">
        <div className="heroGrid">
          <div>
            <div className="eyebrow">UNABHÄNGIGER ZERTIFIZIERUNGSSTANDARD · ARBEITSVERSION</div>
            <h1>Menschliche Arbeit.<br /><em>Sichtbar gemacht.</em></h1>
            <p className="lead">Ein überprüfbares System für physische Produkte, bei denen menschliche Fertigung nicht nur behauptet, sondern nachvollziehbar dokumentiert wird.</p>
            <div className="actions">
              <Link className="button primary" href="/pruefen">Zertifizierung prüfen</Link>
              <Link className="button secondary" href="/fuer-hersteller">Für Hersteller</Link>
            </div>
          </div>

          <aside className="heroSealPanel" aria-label="Prinzip des Siegels">
            <div className="sealSpecimen">
              <div className="sealRing">
                <span className="sealKicker">HUMAN</span>
                <strong>H</strong>
                <span className="sealBottom">VERIFIED</span>
              </div>
            </div>
            <div className="specimenMeta">
              <span>DESIGN PLACEHOLDER</span>
              <span>NOT A FINAL MARK</span>
            </div>
          </aside>
        </div>

        <div className="heroIndex">
          <div><span>01</span><b>Standard</b><small>klare Anforderungen</small></div>
          <div><span>02</span><b>Prüfung</b><small>dokumentierte Nachweise</small></div>
          <div><span>03</span><b>Register</b><small>öffentlicher Status</small></div>
        </div>
      </section>

      <section className="darkBand">
        <div className="shell manifesto">
          <div className="sectionNo light">WARUM DAS SYSTEM EXISTIERT</div>
          <p className="manifestoQuote">Ein glaubwürdiges Siegel ist kein Logo. Es ist ein <em>Versprechen mit Belegen.</em></p>
          <p className="manifestoCopy">Deshalb bauen wir Standard, Prüfung und öffentliches Register als ein zusammenhängendes System. Die Marke kann sich noch ändern. Die Glaubwürdigkeitslogik dahinter nicht.</p>
        </div>
      </section>

      <section className="shell principlesSection">
        <div className="sectionHeading">
          <div className="sectionNo">GRUNDPRINZIPIEN</div>
          <h2>Woran sich der Standard messen lassen muss.</h2>
        </div>
        <div className="principleList">
          {principles.map((item) => (
            <article className="principleRow" key={item.no}>
              <span>{item.no}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="processSection">
        <div className="shell">
          <div className="sectionHeading split">
            <div>
              <div className="sectionNo">VOM PRODUKT ZUR ZERTIFIZIERUNG</div>
              <h2>Ein klarer Weg statt Blackbox.</h2>
            </div>
            <p>Der genaue Auditstandard wird noch finalisiert. Die Plattform ist aber bereits auf einen nachvollziehbaren, versionierten Prüfprozess ausgelegt.</p>
          </div>
          <div className="processGrid">
            {process.map(([title, copy], index) => (
              <article key={title}>
                <span className="processNo">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="registryShowcase shell">
        <div className="registryIntro">
          <div className="sectionNo">ÖFFENTLICHES REGISTER</div>
          <h2>Das Zeichen auf dem Produkt bekommt einen überprüfbaren Datensatz.</h2>
          <p>Die Zertifizierungs-ID verbindet das physische Siegel mit Hersteller, Produkt, Standardversion, Gültigkeit und aktuellem Status.</p>
          <div className="actions">
            <Link className="button primary" href="/register">Register ansehen</Link>
            <Link className="textLink" href="/pruefen">ID direkt prüfen →</Link>
          </div>
        </div>

        <div className="recordCard">
          <div className="recordHeader">
            <div>
              <small>CERTIFICATION RECORD</small>
              <strong>HC-DEMO-0001</strong>
            </div>
            <span className="statusBadge active">● AKTIV · DEMO</span>
          </div>
          <div className="recordSeal"><span>H</span></div>
          <dl>
            <div><dt>Hersteller</dt><dd>Demo Manufaktur GmbH</dd></div>
            <div><dt>Produkt</dt><dd>Demo Produkt</dd></div>
            <div><dt>Standard</dt><dd>0.1-DEMO</dd></div>
            <div><dt>Hinweis</dt><dd>Keine echte Zertifizierung</dd></div>
          </dl>
          <Link href="/c/HC-DEMO-0001">Demodatensatz prüfen →</Link>
        </div>
      </section>

      <section className="manufacturerCta">
        <div className="shell manufacturerCtaGrid">
          <div>
            <div className="sectionNo light">FÜR HERSTELLER</div>
            <h2>Sie fertigen Produkte mit echtem menschlichem Anteil?</h2>
          </div>
          <div>
            <p>Für die Pilotphase suchen wir Unternehmen, an deren realen Produkten wir Standard, Nachweise und Auditprozess praktisch validieren können.</p>
            <Link className="button lightButton" href="/fuer-hersteller">Interesse vormerken</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
