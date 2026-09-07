import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { CERTIFIED_STATEMENT } from '../lib/brand';

const homeStory = [
  ['Differenzierung', 'Ein realer Herstellungsunterschied wird für Käufer und Geschäftspartner klar erkennbar.'],
  ['Glaubwürdigkeit', 'Die Produktaussage bleibt an einen dokumentierten Zertifizierungsstatus gebunden.'],
  ['Anschlussfähigkeit', 'Kennzeichnung, QR und Registerlink lassen sich im Verkauf und im B2B-Kontext einsetzen.'],
];

const auditFacts = [
  ['Arbeitsschritte beobachten', 'Wesentliche produktprägende Schritte werden in der realen Produktion betrachtet.'],
  ['Maschineneinsatz einordnen', 'Geprüft wird, wo Technik unterstützt und wo menschliche Arbeit wesentlich bleibt.'],
  ['Produktumfang abgleichen', 'Produkt, relevante Standorte und Fremdfertigung werden mit den Angaben abgeglichen.'],
];

export default function Home() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main id="top" className="desireHome compactHome">
      <SiteHeader />

      <section className="desireHero">
        <div className="shell desireHeroGrid">
          <div className="desireHeroCopy">
            <p className="premiumEyebrow">ZERTIFIZIERUNG FÜR PHYSISCHE PRODUKTE</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Von Menschen gemacht.<br />Vor Ort geprüft.</h1>
            <p className="desireHeroLead">
              Made by Humans zertifiziert physische Produkte, deren wesentliche Herstellungsschritte
              nachweislich durch Menschen ausgeführt werden. Wir prüfen die tatsächliche Herstellung vor Ort
              und machen den Zertifizierungsstatus öffentlich überprüfbar.
            </p>
            <div className="desireHeroActions">
              <Link className="desirePrimary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
              <Link className="desireSecondary" href="/warum-made-by-humans">Warum Made by Humans?</Link>
            </div>
            <div className="desireProofLine">
              <span>Vor-Ort-Audit</span>
              <span>Produktfokus</span>
              <span>QR & Register</span>
            </div>
          </div>

          <div className="desireHeroVisual">
            <img
              src="https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?auto=format&fit=crop&w=1800&q=86"
              alt="Holzhandwerker bei der manuellen Bearbeitung eines Werkstücks"
            />
          </div>
        </div>
      </section>

      <section className="brandAuthorityRail" aria-label="Made by Humans Markenversprechen">
        <div className="shell brandAuthorityRailInner">
          <div className="brandAuthorityWordmark">
            <span>MADE BY HUMANS</span>
            <small>VERIFIED</small>
          </div>
          <div className="brandAuthorityPillars">
            <span>STANDARD</span>
            <span>VOR-ORT-AUDIT</span>
            <span>ÖFFENTLICHES REGISTER</span>
          </div>
        </div>
      </section>

      <section className="desireManifesto compactManifesto">
        <div className="shell desireManifestoGrid">
          <p className="premiumSectionLabel">WARUM ES DAS ZEICHEN GIBT</p>
          <div>
            <h2>Handmade ist schnell gesagt. Wir machen es überprüfbar.</h2>
            <p>
              Begriffe wie „handmade“, „handcrafted“ oder „manufakturgefertigt“ sagen allein wenig darüber aus,
              wie ein Produkt tatsächlich entsteht. Made by Humans prüft die wesentlichen Herstellungsschritte
              vor Ort und macht das Ergebnis über Zertifizierungs-ID und Register nachvollziehbar.
            </p>
            <figure className="manifestoMaterial">
              <img
                src={assetBase + '/brand/IMG_1040.png'}
                alt="Menschliche Holzbearbeitung beim manuellen Schleifen eines Produktes"
                loading="lazy"
              />
              <figcaption>Material · Können · Ausführung · Nachweis</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="sealApplications compactApplications">
        <div className="shell">
          <div className="desireSectionHead">
            <div>
              <p className="premiumSectionLabel">DAS ZEICHEN IM EINSATZ</p>
              <h2>Der Nachweis wird dort sichtbar, wo die Kaufentscheidung fällt.</h2>
            </div>
            <p>
              Das Zeichen ergänzt die Herstellermarke und verweist immer auf den konkret zertifizierten Produktumfang.
            </p>
          </div>

          <div className="sealApplicationGrid compactApplicationGrid">
            <article className="sealApplicationCard applicationPackage realApplicationCard">
              <div className="applicationStage applicationStagePhoto realApplicationStage">
                <img
                  className="applicationPhoto realApplicationPhoto"
                  src={assetBase + '/brand/IMG_1047.png'}
                  alt="Beispielhafte Made by Humans Kennzeichnung an einem textilen Produkt mit Verpackung"
                  loading="lazy"
                />
              </div>
              <div className="applicationCopy">
                <strong>Verpackung & Produkt</strong>
                <p>Das Zertifizierungszeichen kann dezent am Produkt und auf der Verpackung eingesetzt werden.</p>
              </div>
            </article>

            <article className="sealApplicationCard applicationDigital">
              <div className="applicationStage applicationDigitalStage applicationProofStage">
                <div className="applicationProofPanel">
                  <div className="applicationProofTop">
                    <span>DIGITALE VERIFIZIERUNG</span>
                    <img src={assetBase + '/brand/made-by-humans-seal.png'} alt="" aria-hidden="true" />
                  </div>
                  <div className="applicationProofStatement">
                    <small>PRODUKTBEZOGENER NACHWEIS</small>
                    <strong>Made by Humans</strong>
                    <p>Die Kennzeichnung führt zum öffentlichen Zertifizierungsdatensatz des konkret erfassten Produkts.</p>
                  </div>
                  <div className="applicationProofMeta" aria-label="Bestandteile des digitalen Nachweises">
                    <span>Produktumfang</span>
                    <span>Status</span>
                    <span>Standardfassung</span>
                  </div>
                  <div className="applicationProofAction">Öffentlichen Datensatz prüfen →</div>
                </div>
              </div>
              <div className="applicationCopy"><strong>Digitaler Nachweis</strong><p>Zeichen, Registerbezug und Verifizierung bleiben auch online eindeutig miteinander verbunden.</p></div>
            </article>
          </div>

          <div className="compactApplicationFooter">
            <span>Produktfokus · statusgebunden · öffentlich verifizierbar</span>
            <span className="applicationSwipeHint">Wischen für weitere Anwendung →</span>
            <Link href="/markennutzung">Markennutzung im Detail →</Link>
          </div>
        </div>
      </section>

      <section className="homeValueProof">
        <div className="shell homeValueStory">
          <div className="homeValueStoryHead">
            <p className="premiumSectionLabel premiumSectionLabelLight">WERT & VERTRAUEN</p>
            <h2>Aus einem Herstellungsmerkmal wird ein belegbares Unterscheidungsmerkmal.</h2>
            <p>
              Made by Humans macht menschliche Herstellung strukturiert kommunizierbar – klar begrenzt auf den tatsächlich zertifizierten Produktumfang.
            </p>
          </div>
          <div className="homeStoryRows">
            {homeStory.map(([title, copy]) => (
              <article key={title}><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
          <div className="homeStoryLinks">
            <Link href="/warum-made-by-humans">Vorteile ansehen →</Link>
            <Link href="/fuer-hersteller#ablauf">Zertifizierungsverfahren →</Link>
          </div>
        </div>
      </section>

      <section className="desireAudit compactAudit">
        <div className="shell desireAuditGrid">
          <figure>
            <img
              src={assetBase + '/brand/IMG_1053.png'}
              alt="Vor-Ort-Audit während eines produktprägenden menschlichen Herstellungsschritts"
              loading="lazy"
            />
          </figure>
          <div className="desireAuditCopy">
            <p className="premiumSectionLabel">VOR-ORT-AUDIT</p>
            <h2>Wir prüfen dort, wo das Produkt tatsächlich entsteht.</h2>
            <p className="desireAuditLead">
              Kein reines Online-Formular und keine bloße Selbstauskunft: Die tatsächliche Herstellung wird
              beim Hersteller vor Ort nachvollzogen.
            </p>
            <div className="desireAuditFacts">
              {auditFacts.map(([title, copy]) => <div key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="homeConsumerVerify">
        <div className="shell homeConsumerVerifyGrid">
          <div className="homeConsumerCopy">
            <p className="premiumSectionLabel premiumSectionLabelLight">FÜR KÄUFER</p>
            <h2>Vertrauen endet nicht beim Zeichen. Es lässt sich prüfen.</h2>
            <blockquote>
              {CERTIFIED_STATEMENT}
            </blockquote>
          </div>
          <div className="homeVerifyCompact">
            <span>ZERTIFIZIERUNGS-ID ODER QR VORHANDEN?</span>
            <strong>Nachweis direkt prüfen.</strong>
            <p>Produkt, Hersteller, Umfang, Status und Standardfassung im öffentlichen Datensatz ansehen.</p>
            <div>
              <Link className="homeVerifyPrimary" href="/pruefen">Zertifizierung prüfen</Link>
              <Link className="homeVerifySecondary" href="/fuer-kaeufer">Was das Zeichen bedeutet →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="homeFinalCompact">
        <div className="shell">
          <div className="homeFinalTop">
            <div>
              <p className="premiumSectionLabel">NACH POSITIVER ZERTIFIZIERUNG</p>
              <h2>Ein starkes Zeichen braucht klare Grenzen.</h2>
            </div>
            <div className="homeFinalSummary">
              <p>Freigegebene Kennzeichnung · QR & Registerlink · gültiger Zertifizierungsstatus · geregelte Produktaussagen</p>
              <Link href="/markennutzung">Markennutzung ansehen →</Link>
            </div>
          </div>

          <div className="homeStandardLine">
            <span>Aktuelle Standardfassung: 0.1 · veröffentlicht am 04.09.2026</span>
            <Link href="/standard">Standard ansehen →</Link>
          </div>

          <div className="homeFinalCta">
            <div>
              <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
              <h2>Prüfen Sie, ob Ihr Produkt zum Standard passt.</h2>
            </div>
            <div>
              <p>In der fachlichen Vorprüfung grenzen wir Produkt, Herstellungsprozess und den sinnvollen Zertifizierungsumfang gemeinsam ein.</p>
              <Link className="desireFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
