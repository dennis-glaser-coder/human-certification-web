import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';
import { CERTIFIED_STATEMENT } from '../../lib/brand';

export const metadata = {
  title: 'Für Käufer – Was bedeutet Made by Humans?',
  description: 'Made by Humans einfach erklärt: Was das Zeichen über menschliche Herstellung aussagt, wie geprüft wird und wie sich eine Zertifizierung per QR oder ID verifizieren lässt.',
  alternates: { canonical: canonical('/fuer-kaeufer') },
  openGraph: {
    title: 'Für Käufer | Made by Humans',
    description: 'Was das Made by Humans Zeichen bedeutet – einfach erklärt und öffentlich verifizierbar.',
    url: canonical('/fuer-kaeufer'),
  },
};

const says = [
  ['Menschliche Herstellung', CERTIFIED_STATEMENT],
  ['Vor-Ort-Prüfung', 'Die tatsächliche Herstellung wird beim Hersteller vor Ort nachvollzogen.'],
  ['Klarer Produktbezug', 'Die Aussage gilt nur für den veröffentlichten Zertifizierungsumfang.'],
  ['Öffentliche Verifizierung', 'Status, Produktbezug, Standardfassung und relevante Produktionsstandorte können über ID oder QR geprüft werden.'],
];

const doesNotSay = [
  'keine automatische Aussage über Nachhaltigkeit',
  'keine automatische Aussage über Bio- oder Fairtrade-Eigenschaften',
  'keine automatische Aussage über das Herkunftsland',
  'keine allgemeine Qualitätsklasse',
];

const faq = [
  ['Dürfen Maschinen eingesetzt werden?', 'Ja. Maschinen können menschliche Arbeit unterstützen. Entscheidend ist, ob die wesentlichen produktprägenden Herstellungsschritte weiterhin tatsächlich durch Menschen ausgeführt werden.'],
  ['Ist jedes handgemachte Produkt automatisch zertifiziert?', 'Nein. Die Kennzeichnung darf nur für einen konkret geprüften und freigegebenen Produktumfang verwendet werden.'],
  ['Kann ich die Zertifizierung selbst prüfen?', 'Ja. Zertifizierungs-ID und QR führen zum öffentlichen Datensatz mit aktuellem Status und Produktbezug.'],
  ['Was passiert, wenn sich die Produktion ändert?', 'Wesentliche Änderungen am Herstellungsprozess, an relevanten Standorten oder an Fremdfertigung können eine erneute Bewertung des Zertifizierungsumfangs erforderlich machen.'],
];

export default function BuyerPage() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main className="buyerPage">
      <SiteHeader />

      <section className="buyerHero">
        <div className="shell buyerHeroGrid">
          <div>
            <p className="premiumEyebrow">FÜR KÄUFER</p>
            <h1>Was bedeutet Made by Humans?</h1>
            <p className="buyerHeroLead">
              Das Zeichen steht für eine klar abgegrenzte Aussage: Bei diesem Produkt wurden die wesentlichen
              Herstellungsschritte darauf geprüft, ob sie nachweislich durch Menschen ausgeführt werden.
            </p>
            <div className="buyerHeroActions">
              <Link className="desirePrimary" href="/pruefen">Zertifizierung prüfen</Link>
              <a className="desireSecondary" href="#bedeutung">Bedeutung ansehen</a>
            </div>
          </div>

          <div className="buyerHeroCard">
            <img src={assetBase + '/brand/made-by-humans-seal.png'} alt="Made by Humans Zertifizierungszeichen" />
            <span>MADE BY HUMANS</span>
            <strong>Von Menschen gemacht.<br />Vor Ort geprüft.</strong>
            <p>Produktfokus · Zertifizierungs-ID · öffentlich verifizierbar</p>
          </div>
        </div>
      </section>

      <section className="buyerMeaning" id="bedeutung">
        <div className="shell">
          <div className="buyerMeaningLead">
            <p className="premiumSectionLabel">WAS DAS ZEICHEN AUSSAGT</p>
            <h2>Was die Zertifizierung konkret aussagt.</h2>
          </div>
          <div className="buyerMeaningGrid">
            {says.map(([title, copy]) => (
              <article key={title}><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="buyerVerify">
        <div className="shell buyerVerifyGrid">
          <div className="buyerVerifyVisual">
            <div className="buyerPhone">
              <div className="buyerPhoneTop"></div>
              <span>ZERTIFIZIERUNG</span>
              <strong>HC-DEMO-0001</strong>
              <div className="buyerStatus">AKTIV · DEMO</div>
              <dl>
                <div><dt>Produkt</dt><dd>Demo Produkt</dd></div>
                <div><dt>Hersteller</dt><dd>Demo Hersteller</dd></div>
                <div><dt>Produktionsort</dt><dd>Deutschland · Demo-Standort</dd></div>
                <div><dt>Standard</dt><dd>0.1</dd></div>
              </dl>
              <small>Beispieldarstellung · keine reale Zertifizierung</small>
            </div>
          </div>
          <div className="buyerVerifyCopy">
            <p className="premiumSectionLabel premiumSectionLabelLight">QR & ZERTIFIZIERUNGS-ID</p>
            <h2>Zertifizierungsstatus und Produktbezug lassen sich öffentlich prüfen.</h2>
            <p>
              Eine veröffentlichte Zertifizierung lässt sich über QR-Code oder Zertifizierungs-ID prüfen.
              Der öffentliche Datensatz zeigt, für welches Produkt die Aussage gilt und welchen aktuellen Status sie hat.
            </p>
            <div className="buyerVerifyChecks">
              <span>Produkt & Hersteller</span>
              <span>Zertifizierungsumfang</span>
              <span>relevante Produktionsstandorte</span>
              <span>Status & Gültigkeit</span>
              <span>angewendete Standardfassung</span>
            </div>
            <Link className="desireTextLink desireTextLinkLight" href="/pruefen">Zertifizierungs-ID prüfen →</Link>
          </div>
        </div>
      </section>

      <section className="buyerBoundary">
        <div className="shell buyerBoundaryGrid">
          <div>
            <p className="premiumSectionLabel">BEWUSST KLAR BEGRENZT</p>
            <h2>Was das Zeichen nicht automatisch aussagt.</h2>
            <p>
              Made by Humans konzentriert sich auf menschliche Herstellung. Andere Eigenschaften eines Produktes
              benötigen eigene Nachweise und dürfen nicht aus der Zertifizierung abgeleitet werden.
            </p>
          </div>
          <div className="buyerBoundaryList">
            {doesNotSay.map((item) => <div key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="buyerAudit">
        <div className="shell buyerAuditGrid">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1774282557812-6182cc59f638?auto=format&fit=crop&w=1600&q=84"
              alt="Menschliche Arbeit in einer Produktionswerkstatt"
              loading="lazy"
            />
          </figure>
          <div>
            <p className="premiumSectionLabel">WIE WIRD GEPRÜFT?</p>
            <h2>Die Prüfung findet dort statt, wo das Produkt entsteht.</h2>
            <p>
              Beim Vor-Ort-Audit wird nachvollzogen, welche Arbeitsschritte Menschen ausführen,
              welche Maschinen eingesetzt werden, welche Produktionsorte relevant sind und ob Fremdfertigung
              zum Zertifizierungsumfang gehört.
            </p>
            <Link className="desireTextLink" href="/standard">Prüfkriterien ansehen →</Link>
          </div>
        </div>
      </section>

      <section className="buyerFaq">
        <div className="shell buyerFaqGrid">
          <div>
            <p className="premiumSectionLabel">HÄUFIGE FRAGEN</p>
            <h2>Häufige Fragen zur Kennzeichnung.</h2>
          </div>
          <div className="buyerFaqList">
            {faq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="buyerFinal">
        <div className="shell buyerFinalGrid">
          <div><p className="premiumSectionLabel premiumSectionLabelLight">VERIFIZIERUNG</p><h2>Zertifizierung über ID oder QR prüfen.</h2></div>
          <div><p>Prüfen Sie die Zertifizierungs-ID oder den QR-Code gegen den öffentlichen Datensatz.</p><Link className="desireFinalButton" href="/pruefen">Zertifizierung prüfen</Link></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
