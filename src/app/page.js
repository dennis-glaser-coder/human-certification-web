import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const homeStory = [
  ['Sichtbar machen', 'Menschliche Herstellung wird zu einem klaren, produktbezogenen Unterschied.'],
  ['Vor Ort prüfen', 'Die tatsächliche Herstellung wird beim Hersteller nachvollzogen.'],
  ['Öffentlich verifizieren', 'Zertifizierungs-ID, Status und Produktbezug bleiben überprüfbar.'],
];

const auditFacts = [
  ['Herstellung nachvollziehen', 'Die reale Produktion wird dort betrachtet, wo die relevanten Arbeitsschritte stattfinden.'],
  ['Maschineneinsatz bewerten', 'Geprüft wird, wo Technik unterstützt und wo menschliche Arbeit wesentlich bleibt.'],
  ['Umfang eindeutig halten', 'Produkt, relevante Standorte und Fremdfertigung werden klar zugeordnet.'],
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
            <span className="applicationSwipeHint">Wischen für weitere Anwendung →</span>
            <Link href="/markennutzung">Markennutzung im Detail →</Link>
          </div>
        </div>
      </section>

      <section className="homeValueProof">
        <div className="shell homeValueStory">
          <div className="homeValueStoryHead">
            <p className="premiumSectionLabel premiumSectionLabelLight">WERT & VERTRAUEN</p>
            <h2>Ein Unterschied, den man sehen – und prüfen – kann.</h2>
            <p>
              Made by Humans verbindet den Nutzen für Hersteller mit einem nachvollziehbaren Prüf- und Verifizierungssystem.
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
              Geprüfte menschliche Herstellung – klar einem Produkt zugeordnet und öffentlich verifizierbar.
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
              <h2>Mehr als ein Zertifikat.</h2>
            </div>
            <div className="homeFinalSummary">
              <p>Zertifizierungszeichen · QR & Registerlink · Verpackungs- und Digitalanwendung · geregelte Claims</p>
              <Link href="/markennutzung">Markennutzung ansehen →</Link>
            </div>
          </div>

          <div className="homeStandardLine">
            <span>Veröffentlicht. Versioniert. Öffentlich nachvollziehbar.</span>
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
