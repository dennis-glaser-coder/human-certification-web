import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const valuePoints = [
  ['Differenzierung', 'Machen Sie einen realen Unterschied zur weitgehend automatisierten Herstellung sichtbar.'],
  ['Wert erklären', 'Zeigen Sie nachvollziehbar, warum menschliche Arbeit ein wesentlicher Teil Ihres Produktes ist.'],
  ['Vertrauen schaffen', 'Verweisen Sie auf eine dokumentierte Zertifizierung statt nur auf eine Eigenangabe.'],
];

const auditFacts = [
  ['Herstellung nachvollziehen', 'Die reale Produktion wird dort betrachtet, wo die relevanten Arbeitsschritte stattfinden.'],
  ['Maschineneinsatz bewerten', 'Geprüft wird, wo Technik unterstützt und wo menschliche Arbeit wesentlich bleibt.'],
  ['Umfang eindeutig halten', 'Produkt, relevante Standorte und Fremdfertigung werden klar zugeordnet.'],
];

const proofFlow = [
  ['Produkt einordnen', 'Zertifizierungsumfang, Standorte und relevante Fremdfertigung festlegen.'],
  ['Vor Ort prüfen', 'Tatsächliche Herstellung und menschliche Arbeit beim Hersteller nachvollziehen.'],
  ['Freigeben & verifizieren', 'Entscheidung dokumentieren und den freigegebenen Umfang öffentlich prüfbar machen.'],
];

export default function Home() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main className="desireHome compactHome">
      <SiteHeader />

      <section className="desireHero">
        <div className="shell desireHeroGrid">
          <div className="desireHeroCopy">
            <p className="premiumEyebrow">ZERTIFIZIERUNG FÜR MENSCHLICHE HERSTELLUNG</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Von Menschen gemacht.<br />Vor Ort geprüft.</h1>
            <p className="desireHeroLead">
              Made by Humans zeichnet physische Produkte aus, deren wesentliche Herstellungsschritte
              nachweislich durch Menschen ausgeführt werden – mit Vor-Ort-Audit, klarer Produktzuordnung
              und öffentlicher Verifizierung.
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
            <div className="desireHeroOverlay">
              <img
                src={assetBase + '/brand/made-by-humans-seal.png'}
                alt="Made by Humans Zertifizierungszeichen"
                width="92"
                height="92"
              />
              <div>
                <span>MADE BY HUMANS</span>
                <strong>Geprüfte menschliche Herstellung.</strong>
                <p>Produktfokus · Zertifizierungs-ID · öffentlich verifizierbar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="desireManifesto compactManifesto">
        <div className="shell desireManifestoGrid">
          <p className="premiumSectionLabel">WARUM ES DAS ZEICHEN GIBT</p>
          <div>
            <h2>Menschliche Arbeit sollte nicht unsichtbar bleiben.</h2>
            <p>
              Wo Erfahrung, Können und tatsächliche menschliche Arbeit ein Produkt wesentlich prägen,
              entsteht ein Unterschied, der von außen oft nicht erkennbar ist. Made by Humans macht genau
              diesen Unterschied sichtbar – ohne mehr zu behaupten, als tatsächlich geprüft wurde.
            </p>
            <figure className="manifestoMaterial">
              <img
                src="https://images.unsplash.com/photo-1781389005078-d9e413d89c94?auto=format&fit=crop&w=1600&q=84"
                alt="Hände bei der manuellen Formgebung von Keramik"
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
              <h2>Ein Nachweis. Dort sichtbar, wo Entscheidungen fallen.</h2>
            </div>
            <p>
              Das Zeichen ergänzt die Herstellermarke und verweist immer auf den konkret zertifizierten Produktumfang.
            </p>
          </div>

          <div className="sealApplicationGrid compactApplicationGrid">
            <article className="sealApplicationCard applicationPackage">
              <div className="applicationStage applicationStagePhoto">
                <img className="applicationPhoto" src="https://images.unsplash.com/photo-1771523350488-32af5ba560e6?auto=format&fit=crop&w=1400&q=82" alt="" aria-hidden="true" />
                <div className="applicationPhotoShade"></div>
                <div className="mockPackage">
                  <span className="mockBrand">PRODUKT</span>
                  <span className="mockDescriptor">BEISPIELANWENDUNG</span>
                  <div className="mockSealLockup">
                    <img src={assetBase + '/brand/made-by-humans-seal.png'} alt="" aria-hidden="true" />
                    <span>Von Menschen gemacht.<br />Vor Ort geprüft.</span>
                  </div>
                </div>
              </div>
              <div className="applicationCopy"><strong>Verpackung & Produkt</strong><p>Der Nachweis wird dort sichtbar, wo das Produkt erlebt und gekauft wird.</p></div>
            </article>

            <article className="sealApplicationCard applicationDigital">
              <div className="applicationStage applicationDigitalStage">
                <div className="mockBrowser">
                  <div className="mockBrowserBar"><i></i><i></i><i></i></div>
                  <div className="mockProduct">
                    <div className="mockProductImage"></div>
                    <div className="mockProductInfo">
                      <span>PRODUKTDETAIL</span>
                      <strong>Produktname</strong>
                      <div className="mockDigitalBadge">
                        <img src={assetBase + '/brand/made-by-humans-seal.png'} alt="" aria-hidden="true" />
                        <div><b>Made by Humans</b><small>Zertifizierung prüfen →</small></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="applicationCopy"><strong>Online & B2B</strong><p>Digitales Badge, Registerlink und Produktnachweis bleiben direkt miteinander verbunden.</p></div>
            </article>
          </div>

          <div className="compactApplicationFooter">
            <span>Produktfokus · statusgebunden · öffentlich verifizierbar</span>
            <Link href="/markennutzung">Markennutzung im Detail →</Link>
          </div>
        </div>
      </section>

      <section className="homeValueProof">
        <div className="shell homeValueProofGrid">
          <div className="homeValueSide">
            <p className="premiumSectionLabel premiumSectionLabelLight">WARUM HERSTELLER ES NUTZEN</p>
            <h2>Ein Unterschied, der sichtbar wird.</h2>
            <div className="homeValueRows">
              {valuePoints.map(([title, copy]) => (
                <article key={title}><strong>{title}</strong><p>{copy}</p></article>
              ))}
            </div>
            <Link className="desireTextLink desireTextLinkLight" href="/warum-made-by-humans">Alle Vorteile ansehen →</Link>
          </div>

          <div className="homeProofSide">
            <p className="premiumSectionLabel premiumSectionLabelLight">WARUM MAN IHM VERTRAUEN KANN</p>
            <h2>Ein Zeichen, das nicht einfach vergeben wird.</h2>
            <div className="homeProofFlow">
              {proofFlow.map(([title, copy]) => (
                <article key={title}><strong>{title}</strong><p>{copy}</p></article>
              ))}
            </div>
            <Link className="desireTextLink desireTextLinkLight" href="/fuer-hersteller#ablauf">Zertifizierungsverfahren →</Link>
          </div>
        </div>
      </section>

      <section className="desireAudit compactAudit">
        <div className="shell desireAuditGrid">
          <figure>
            <img
              src="https://images.unsplash.com/photo-1748347084012-075796185d56?auto=format&fit=crop&w=1800&q=86"
              alt="Prüfung in einer modernen Produktionsumgebung"
              loading="lazy"
            />
            <figcaption>Produktionsprüfung · TECNIC Bioprocess Solutions / Unsplash</figcaption>
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
            <h2>Verständlich am Produkt. Überprüfbar im Register.</h2>
            <blockquote>
              Dieses Produkt wurde darauf geprüft, ob seine wesentlichen Herstellungsschritte
              nachweislich durch Menschen ausgeführt werden.
            </blockquote>
            <div className="homeConsumerLinks">
              <Link href="/fuer-kaeufer">Was das Zeichen bedeutet →</Link>
              <Link href="/register">Öffentliches Register →</Link>
            </div>
          </div>
          <div className="homeVerifyTool"><HeroVerify /></div>
        </div>
      </section>

      <section className="homeFinalCompact">
        <div className="shell">
          <div className="homeFinalTop">
            <div>
              <p className="premiumSectionLabel">NACH POSITIVER ZERTIFIZIERUNG</p>
              <h2>Mehr als ein Zertifikat.</h2>
            </div>
            <div className="homeFinalBenefits">
              <span>Zertifizierungszeichen</span>
              <span>QR & Registerlink</span>
              <span>Verpackung & Digitalbadge</span>
              <span>geregelte Claims</span>
            </div>
          </div>

          <div className="homeStandardLine">
            <span>Auf einem veröffentlichten, versionierten Standard aufgebaut.</span>
            <Link href="/standard">Standard ansehen →</Link>
          </div>

          <div className="homeFinalCta">
            <div>
              <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
              <h2>Ist menschliche Arbeit ein wesentlicher Teil Ihres Produktes?</h2>
            </div>
            <div>
              <p>Dann klären wir, ob Ihr Produkt grundsätzlich zum Standard passt und welcher Zertifizierungsumfang sinnvoll ist.</p>
              <Link className="desireFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
