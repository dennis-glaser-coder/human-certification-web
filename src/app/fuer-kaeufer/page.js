import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';
import { canonical } from '../../lib/seo';
import { CERTIFIED_STATEMENT } from '../../lib/brand';

export const metadata = {
  title: 'Für Käufer – Was bedeutet Made by Human?',
  description: 'Made by Human einfach erklärt: Was das Zeichen bedeutet, wie wir prüfen und wie Käufer eine Zertifizierung über QR oder ID selbst prüfen können.',
  alternates: { canonical: canonical('/fuer-kaeufer') },
  openGraph: {
    title: 'Für Käufer | Made by Human',
    description: 'Was das Made by Human Zeichen bedeutet – einfach erklärt und öffentlich prüfbar.',
    url: canonical('/fuer-kaeufer'),
  },
};

const says = [
  ['Menschliche Herstellung', CERTIFIED_STATEMENT],
  ['Vor-Ort-Prüfung', 'Wir prüfen die tatsächliche Herstellung beim Hersteller vor Ort.'],
  ['Gilt für ein bestimmtes Produkt', 'Die Zertifizierung gilt nur für das Produkt oder die Produktfamilie, die im Register genannt ist.'],
  ['Öffentlich prüfbar', 'Über ID oder QR sehen Käufer Produkt, Status, Standard und die angegebenen Produktionsorte.'],
];

const doesNotSay = [
  'keine automatische Aussage über Nachhaltigkeit',
  'keine automatische Aussage über Bio- oder Fairtrade-Eigenschaften',
  'keine automatische Aussage über das Herkunftsland',
  'keine allgemeine Qualitätsklasse',
];

const faq = [
  ['Dürfen Maschinen eingesetzt werden?', 'Ja. Maschinen dürfen unterstützen. Entscheidend ist, dass die Arbeitsschritte, die das Produkt wesentlich prägen, weiterhin von Menschen ausgeführt werden.'],
  ['Ist jedes handgemachte Produkt automatisch zertifiziert?', 'Nein. Das Zeichen darf nur für Produkte genutzt werden, die tatsächlich geprüft und zertifiziert wurden.'],
  ['Kann ich die Zertifizierung selbst prüfen?', 'Ja. Zertifizierungs-ID und QR führen zum Registereintrag mit Produkt und aktuellem Status.'],
  ['Was passiert, wenn sich die Produktion ändert?', 'Wenn sich wichtige Herstellungsschritte, Produktionsorte oder externe Fertigung ändern, kann eine neue Prüfung nötig werden.'],
];

export default function BuyerPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main className="buyerPage">
      <SiteHeader />

      <section className="buyerHero">
        <div className="shell buyerHeroGrid">
          <div>
            <p className="premiumEyebrow">FÜR KÄUFER</p>
            <BrandTrace compact />
            <h1>Was bedeutet Made by Human?</h1>
            <p className="buyerHeroLead">
              Das Zeichen bedeutet: Wir haben bei diesem Produkt geprüft, ob die entscheidenden Herstellungsschritte tatsächlich von Menschen ausgeführt werden.
            </p>
            <div className="buyerHeroActions">
              <Link className="desirePrimary" href="/pruefen">Zertifizierung prüfen</Link>
              <a className="desireSecondary" href="#bedeutung">Bedeutung ansehen</a>
            </div>
          </div>

          <div className="buyerHeroCard">
            <div className="buyerHeroLogoField">
              <img src={assetBase + '/brand/made-by-human-logo.webp'} alt="Made by Human – Verified Human Production" />
            </div>
            <strong>Von Menschen gemacht.<br />Vor Ort geprüft.</strong>
            <p>Für dieses Produkt · Zertifizierungs-ID · öffentlich prüfbar</p>
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
            <div className="buyerProofSpecimen">
              <div className="buyerProofAuthority">
                <span>ÖFFENTLICHER ZERTIFIZIERUNGSDATENSATZ</span>
                <small>BEISPIEL · KEINE REALE ZERTIFIZIERUNG</small>
              </div>
              <div className="buyerProofIdentity">
                <div>
                  <small>ZERTIFIZIERUNGS-ID</small>
                  <strong>HC-DEMO-0001</strong>
                </div>
                <span className="statusBadge status-demo">DEMO · KEINE REALE ZERTIFIZIERUNG</span>
              </div>
              <dl className="buyerProofFacts">
                <div><dt>Produkt</dt><dd>Demo Produkt</dd></div>
                <div><dt>Hersteller</dt><dd>Demo Hersteller</dd></div>
                <div><dt>Produktionsort</dt><dd>Deutschland · Demo-Standort</dd></div>
                <div><dt>Standard</dt><dd>0.1-DEMO</dd></div>
              </dl>
              <div className="buyerProofFoot">Für dieses Produkt · aktueller Status · öffentlich prüfbar</div>
            </div>
          </div>
          <div className="buyerVerifyCopy">
            <p className="premiumSectionLabel premiumSectionLabelLight">QR & ZERTIFIZIERUNGS-ID</p>
            <h2>Produkt und aktueller Status lassen sich öffentlich prüfen.</h2>
            <p>
              Über QR-Code oder Zertifizierungs-ID gelangen Käufer direkt zum Register.
              Dort sehen sie, für welches Produkt die Zertifizierung gilt und ob sie aktuell gültig ist.
            </p>
            <div className="buyerVerifyChecks">
              <span>Produkt & Hersteller</span>
              <span>Gilt für</span>
              <span>angegebene Produktionsstandorte</span>
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
              Made by Human prüft die menschliche Herstellung.
              Aussagen zu Nachhaltigkeit, Herkunft, Bio, Fairtrade oder Qualität brauchen eigene Nachweise.
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
              src={assetBase + '/photography/buyer-production.webp'}
              alt="Menschliche Arbeit in einer Produktionswerkstatt"
              loading="lazy"
            />
          </figure>
          <div>
            <p className="premiumSectionLabel">WIE WIRD GEPRÜFT?</p>
            <h2>Die Prüfung findet dort statt, wo das Produkt entsteht.</h2>
            <p>
              Vor Ort prüfen wir, welche Arbeitsschritte Menschen ausführen, welche Maschinen eingesetzt werden, wo produziert wird und ob wichtige Schritte von anderen Betrieben übernommen werden.
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
          <div><p className="premiumSectionLabel premiumSectionLabelLight">ÖFFENTLICH PRÜFEN</p><h2>Zertifizierung über ID oder QR prüfen.</h2></div>
          <div><p>Prüfen Sie die Zertifizierungs-ID oder den QR-Code im öffentlichen Register.</p><Link className="desireFinalButton" href="/pruefen">Zertifizierung prüfen</Link></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
