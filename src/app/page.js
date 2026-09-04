import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const principles = [
  ['01', 'Kriterien vor Kommunikation.', 'Eine Zertifizierung beginnt nicht mit einem Zeichen, sondern mit klar definierten Anforderungen an Produkt, Prozess und Nachweise.'],
  ['02', 'Prüfung vor Freigabe.', 'Die Aussage gegenüber dem Markt muss auf einer dokumentierten, nachvollziehbaren Prüfentscheidung beruhen.'],
  ['03', 'Transparenz nach Freigabe.', 'Jede veröffentlichte Zertifizierung erhält einen öffentlichen Datensatz mit Status, Standardversion und Gültigkeit.'],
];

const process = [
  ['STANDARD', 'Klare Kriterien', 'Der Standard definiert, welche menschlichen Arbeitsschritte und Nachweise für die Zertifizierung relevant sind.'],
  ['AUDIT', 'Unabhängige Prüfung', 'Produkt, Prozess und Belege werden gegen die jeweils gültige Standardversion geprüft.'],
  ['TRACEABILITY', 'Dokumentierte Herkunft', 'Relevante Fertigungs- und Verantwortungsinformationen bleiben strukturiert nachvollziehbar.'],
  ['PUBLIC REGISTER', 'Öffentlich überprüfbar', 'Der Zertifizierungsstatus kann über ID oder später direkt über den QR-Code geprüft werden.'],
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero shell">
        <div className="heroEditorialGrid">
          <div className="heroCopy">
            <div className="eyebrow">INDEPENDENT CERTIFICATION FOR HUMAN VALUE CREATION</div>
            <h1>Kein Marketing-Badge. <em>Ein überprüfbarer Standard.</em></h1>
            <p className="lead">Für physische Produkte, deren menschliche Wertschöpfung nach klaren Kriterien dokumentiert, unabhängig geprüft und öffentlich verifiziert werden kann.</p>
            <div className="actions">
              <Link className="button primary" href="/pruefen">Zertifizierung prüfen</Link>
              <Link className="button secondary" href="/standard">Standard verstehen</Link>
            </div>
          </div>

          <aside className="frameworkPanel" aria-label="Zertifizierungssystem">
            <div className="frameworkTop">
              <span>CERTIFICATION FRAMEWORK</span>
              <span>WORKING STANDARD · 0.1</span>
            </div>
            {process.map(([term, title], index) => (
              <div className="frameworkRow" key={term}>
                <span>0{index + 1}</span>
                <div>
                  <strong>{term}</strong>
                  <small>{title}</small>
                </div>
              </div>
            ))}
            <div className="frameworkBottom">A standard is only credible when its result can be checked.</div>
          </aside>
        </div>
      </section>

      <section className="statementBand">
        <div className="shell statementGrid">
          <div className="sectionNo light">THE HUMAN STANDARD</div>
          <p>Made by Humans soll sichtbar machen, wo menschliche Arbeit <em>wesentlich, dokumentiert und überprüfbar</em> Teil eines physischen Produkts ist.</p>
        </div>
      </section>

      <section className="shell editorialSection">
        <div className="sectionHeading split">
          <div>
            <div className="sectionNo">GRUNDPRINZIPIEN</div>
            <h2>Vertrauen entsteht durch Systematik, nicht durch Gestaltung.</h2>
          </div>
          <p>Die visuelle Marke macht den Standard sichtbar. Glaubwürdigkeit entsteht aber erst durch Kriterien, Audit, nachvollziehbare Herkunft und ein öffentliches Register.</p>
        </div>

        <div className="principleList">
          {principles.map(([no, title, copy]) => (
            <article className="principleRow" key={no}>
              <span>{no}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="valueSection">
        <div className="shell valueGrid">
          <div>
            <div className="sectionNo">HUMAN VALUE CREATION</div>
            <h2>Von Manufaktur bis Industrie.</h2>
          </div>
          <div>
            <p className="valueLead">Menschliche Wertschöpfung endet nicht dort, wo Maschinen beginnen.</p>
            <p>Der Standard soll relevante menschliche Tätigkeiten entlang realer Produktionsprozesse abbilden: Fertigung, Maschinenbedienung, Verarbeitung, Montage, Qualitätskontrolle und verantwortliche Prozessentscheidungen.</p>
          </div>
        </div>
        <div className="shell valueIndex">
          {['MANUFAKTUR', 'PRODUKTION', 'MASCHINENBEDIENUNG', 'VERARBEITUNG', 'MONTAGE', 'QUALITÄTSKONTROLLE'].map((item, index) => (
            <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="shell systemSection">
        <div className="sectionHeading">
          <div className="sectionNo">CERTIFICATION SYSTEM</div>
          <h2>Vier Bausteine. Ein überprüfbares Ergebnis.</h2>
        </div>
        <div className="systemCards">
          {process.map(([term, title, copy], index) => (
            <article key={term}>
              <span className="systemNo">0{index + 1}</span>
              <strong>{term}</strong>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="registerFeature">
        <div className="shell registerFeatureGrid">
          <div className="registerFeatureCopy">
            <div className="sectionNo light">PUBLIC REGISTER</div>
            <h2>Eine Zertifizierung muss auch nach dem Kauf überprüfbar bleiben.</h2>
            <p>Die öffentliche Zertifikatsseite verbindet Hersteller, Produkt, Standardversion, Gültigkeit und Status mit einer eindeutigen ID.</p>
            <div className="actions">
              <Link className="button lightButton" href="/register">Public Register öffnen</Link>
              <Link className="textLink lightLink" href="/pruefen">ID direkt prüfen →</Link>
            </div>
          </div>

          <div className="publicRecord">
            <div className="publicRecordTop">
              <span>PUBLIC CERTIFICATION RECORD</span>
              <span className="statusBadge active">ACTIVE · DEMO</span>
            </div>
            <div className="recordId">HC-DEMO-0001</div>
            <dl>
              <div><dt>Manufacturer</dt><dd>Demo Manufaktur GmbH</dd></div>
              <div><dt>Product</dt><dd>Demo Produkt</dd></div>
              <div><dt>Standard</dt><dd>0.1-DEMO</dd></div>
              <div><dt>Status</dt><dd>Technischer Demodatensatz</dd></div>
            </dl>
            <Link href="/c/HC-DEMO-0001">Öffentlichen Datensatz ansehen →</Link>
          </div>
        </div>
      </section>

      <section className="manufacturerCta">
        <div className="shell manufacturerCtaGrid">
          <div>
            <div className="sectionNo light">PILOT PROGRAM</div>
            <h2>Reale Produkte. Reale Prozesse. Reale Nachweise.</h2>
          </div>
          <div>
            <p>Für die Pilotphase suchen wir Unternehmen, mit denen Standard, Nachweise und Auditprozess an echten Produktionsabläufen validiert werden können.</p>
            <Link className="button lightButton" href="/fuer-hersteller">Interesse vormerken</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
