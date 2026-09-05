import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const manufacturerBenefits = [
  ['Differenzierung', 'Machen Sie einen realen Unterschied zur weitgehend automatisierten Herstellung sichtbar.'],
  ['Wert erklären', 'Zeigen Sie nachvollziehbar, warum menschliche Arbeit ein wesentlicher Teil Ihres Produktes ist.'],
  ['Vertrauen schaffen', 'Verweisen Sie nicht nur auf eine Eigenangabe, sondern auf eine dokumentierte Zertifizierung.'],
  ['Vertrieb unterstützen', 'Nutzen Sie den Nachweis auf Produkt, Verpackung, Produktseite, POS und in B2B-Unterlagen.'],
];

const auditFacts = [
  ['Herstellung nachvollziehen', 'Die reale Produktion wird dort betrachtet, wo die relevanten Arbeitsschritte stattfinden.'],
  ['Maschineneinsatz bewerten', 'Geprüft wird, wo Technik unterstützt und wo menschliche Arbeit für die Produktentstehung wesentlich bleibt.'],
  ['Umfang eindeutig halten', 'Produkt, relevante Standorte und Fremdfertigung werden dem Zertifizierungsumfang klar zugeordnet.'],
];

const brandKit = [
  ['Zertifizierungszeichen', 'für den freigegebenen Produktumfang'],
  ['QR & Registerlink', 'für die direkte öffentliche Verifizierung'],
  ['Verpackungs-Lockup', 'für eine klare Erklärung direkt am Produkt'],
  ['Digitales Badge', 'für Produktseiten und digitale Verkaufsunterlagen'],
  ['Zulässige Claims', 'für konsistente und nachvollziehbare Kommunikation'],
  ['B2B-Erklärung', 'für Handel, Datenblätter und Vertriebsunterlagen'],
];

export default function Home() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main className="desireHome">
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

      <section className="desireManifesto">
        <div className="shell desireManifestoGrid">
          <p className="premiumSectionLabel">WARUM ES DAS ZEICHEN GIBT</p>
          <div>
            <h2>Menschliche Arbeit sollte nicht unsichtbar bleiben.</h2>
            <p>
              Technologie und Automatisierung gehören zur modernen Produktion. Doch dort, wo Erfahrung,
              Können und tatsächliche menschliche Arbeit ein Produkt wesentlich prägen, entsteht ein Unterschied,
              der für Käufer häufig nicht mehr erkennbar ist. Made by Humans macht genau diesen Unterschied
              sichtbar – ohne mehr zu behaupten, als tatsächlich geprüft wurde.
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

      <section className="sealApplications">
        <div className="shell">
          <div className="desireSectionHead">
            <div>
              <p className="premiumSectionLabel">DAS ZEICHEN IM EINSATZ</p>
              <h2>Ein Nachweis. Dort sichtbar, wo Entscheidungen fallen.</h2>
            </div>
            <p>
              Die folgenden Darstellungen zeigen neutrale Anwendungsbeispiele. Das Zeichen bleibt immer
              dem konkret zertifizierten Produktumfang und dem öffentlichen Datensatz zugeordnet.
            </p>
          </div>

          <div className="sealApplicationGrid">
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
              <div className="applicationCopy"><strong>Verpackung</strong><p>Der Nachweis wird direkt am Produkt sichtbar, ohne die Herstellermarke zu verdrängen.</p></div>
            </article>

            <article className="sealApplicationCard applicationTag">
              <div className="applicationStage applicationStagePhoto">
                <img className="applicationPhoto" src="https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?auto=format&fit=crop&w=1400&q=82" alt="" aria-hidden="true" />
                <div className="applicationPhotoShade"></div>
                <div className="mockTag">
                  <div className="mockTagHole"></div>
                  <img src={assetBase + '/brand/made-by-humans-seal.png'} alt="" aria-hidden="true" />
                  <strong>MADE BY HUMANS</strong>
                  <span>Geprüfte menschliche Herstellung</span>
                </div>
              </div>
              <div className="applicationCopy"><strong>Produkt & Hangtag</strong><p>Für Produkte, bei denen ein Etikett, Anhänger oder eine kleine Kennzeichnung sinnvoll ist.</p></div>
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
              <div className="applicationCopy"><strong>Produktseite</strong><p>Ein digitales Badge verbindet die Produktaussage direkt mit Register und Zertifizierungs-ID.</p></div>
            </article>

            <article className="sealApplicationCard applicationPos">
              <div className="applicationStage applicationStagePhoto applicationPosStage">
                <img className="applicationPhoto" src="https://images.unsplash.com/photo-1774282557812-6182cc59f638?auto=format&fit=crop&w=1400&q=82" alt="" aria-hidden="true" />
                <div className="applicationPhotoShade dark"></div>
                <div className="mockPos">
                  <img src={assetBase + '/brand/made-by-humans-seal.png'} alt="" aria-hidden="true" />
                  <strong>Von Menschen gemacht.</strong>
                  <span>Vor Ort geprüft.</span>
                  <div className="mockQr"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                  <small>Zertifizierung prüfen</small>
                </div>
              </div>
              <div className="applicationCopy"><strong>Handel & POS</strong><p>Eine kurze Erklärung und QR-Verifizierung machen die Aussage auch am Verkaufsort verständlich.</p></div>
            </article>
          </div>

          <div className="sealApplicationPromise">
            <span>Immer dieselbe Aussage.</span>
            <span>Immer derselbe geprüfte Produktumfang.</span>
            <span>Immer öffentlich verifizierbar.</span>
          </div>
        </div>
      </section>

      <section className="manufacturerDesire">
        <div className="shell">
          <div className="desireSectionHead">
            <div>
              <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
              <h2>Machen Sie sichtbar, was Ihr Produkt besonders macht.</h2>
            </div>
            <p>
              Die Zertifizierung ersetzt keine starke Marke. Sie ergänzt sie um einen nachvollziehbaren
              Beleg für einen Herstellungsunterschied, der sonst leicht unsichtbar bleibt.
            </p>
          </div>
          <div className="manufacturerDesireGrid">
            {manufacturerBenefits.map(([title, copy]) => (
              <article key={title}><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
          <Link className="desireTextLink desireTextLinkLight" href="/warum-made-by-humans">Alle Vorteile für Hersteller und Käufer →</Link>
        </div>
      </section>

      <section className="earnedProof">
        <div className="shell earnedProofGrid">
          <div>
            <p className="premiumSectionLabel">DIE ZERTIFIZIERUNG</p>
            <h2>Ein Zeichen, das nicht einfach vergeben wird.</h2>
            <p>
              Vor einer Markennutzung steht ein dokumentiertes Zertifizierungsverfahren. Produktumfang,
              reale Herstellung und Nachweise werden geprüft, bevor eine Zertifizierungsentscheidung getroffen wird.
            </p>
          </div>
          <div className="earnedFlow" aria-label="Zertifizierungsablauf">
            <div><strong>Anfrage & Vorprüfung</strong><span>Produkt und grundsätzliche Eignung klären</span></div>
            <div><strong>Zertifizierungsumfang</strong><span>Produkt, Standorte und Fremdfertigung abgrenzen</span></div>
            <div><strong>Vor-Ort-Audit</strong><span>Tatsächliche Herstellung beim Hersteller prüfen</span></div>
            <div><strong>Bewertung & Entscheidung</strong><span>Feststellungen gegen den Standard bewerten</span></div>
            <div><strong>Zeichen & Register</strong><span>Freigegebenen Produktumfang öffentlich verifizierbar machen</span></div>
          </div>
        </div>
      </section>

      <section className="desireAudit">
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
              beim Hersteller vor Ort nachvollzogen und mit den vorliegenden Informationen abgeglichen.
            </p>
            <div className="desireAuditFacts">
              {auditFacts.map(([title, copy]) => <div key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
            <Link className="desireTextLink" href="/fuer-hersteller#ablauf">Zertifizierungsverfahren ansehen →</Link>
          </div>
        </div>
      </section>

      <section className="consumerPromise">
        <div className="shell consumerPromiseGrid">
          <div>
            <p className="premiumSectionLabel">FÜR KÄUFER</p>
            <h2>Was bedeutet das Zeichen für mich?</h2>
          </div>
          <div className="consumerPromiseBody">
            <blockquote>
              Dieses Produkt wurde darauf geprüft, ob seine wesentlichen Herstellungsschritte
              nachweislich durch Menschen ausgeführt werden.
            </blockquote>
            <div className="consumerPromiseFacts">
              <span>Vor Ort geprüft</span>
              <span>Produktfokus</span>
              <span>Per QR verifizierbar</span>
            </div>
            <Link className="desireTextLink" href="/fuer-kaeufer">Das Zeichen einfach erklärt →</Link>
          </div>
        </div>
      </section>

      <section className="desireVerify">
        <div className="shell desireVerifyGrid">
          <div className="desireVerifyCopy">
            <p className="premiumSectionLabel premiumSectionLabelLight">ÖFFENTLICHE VERIFIZIERUNG</p>
            <h2>Nicht nur glauben. Nachsehen.</h2>
            <p>
              Zertifizierungs-ID, Produkt, Hersteller, Umfang, relevante Produktionsstandorte,
              Standardfassung, Status und Gültigkeit werden dem öffentlichen Datensatz zugeordnet.
            </p>
            <Link className="desireTextLink desireTextLinkLight" href="/register">Öffentliches Register öffnen →</Link>
          </div>
          <div className="desireVerifyTool"><HeroVerify /></div>
        </div>
      </section>

      <section className="brandKitSection">
        <div className="shell">
          <div className="desireSectionHead">
            <div>
              <p className="premiumSectionLabel">NACH POSITIVER ZERTIFIZIERUNG</p>
              <h2>Mehr als ein Zertifikat.</h2>
            </div>
            <p>
              Die Markennutzung verbindet den geprüften Produktumfang mit klaren Kommunikationsmitteln.
              So lässt sich die Zertifizierung konsistent am Produkt, digital und im Vertrieb einsetzen.
            </p>
          </div>
          <div className="brandKitEditorial">
            <div className="brandKitFolio" aria-label="Beispielhafte Markennutzungsunterlagen">
              <div className="folioSheet folioBack"><span>REGISTER</span></div>
              <div className="folioSheet folioMid"><span>DIGITAL BADGE</span></div>
              <div className="folioSheet folioFront">
                <img src={assetBase + '/brand/made-by-humans-seal.png'} alt="Made by Humans Zertifizierungszeichen" />
                <small>MARKENNUTZUNG</small>
                <strong>Von Menschen gemacht.<br />Vor Ort geprüft.</strong>
                <span>Zertifizierungs-ID · QR · Produktbezug</span>
              </div>
            </div>
            <div className="brandKitList">
              {brandKit.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="desireStandard">
        <div className="shell desireStandardGrid">
          <div>
            <p className="premiumSectionLabel">DIE SUBSTANZ DAHINTER</p>
            <h2>Das Zeichen ist sichtbar. Die Regeln dahinter sind öffentlich.</h2>
          </div>
          <div>
            <p>
              Standard, Zertifizierungsschema, Markennutzung, Verfahrensregeln und öffentliche Verifizierung
              sind versioniert dokumentiert. Die zertifizierte Aussage bleibt bewusst auf menschliche Herstellung begrenzt.
            </p>
            <div className="desireStandardLinks">
              <Link href="/standard">Standard ansehen →</Link>
              <Link href="/dokumente">Dokumente →</Link>
              <Link href="/transparenz">Transparenz & Integrität →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="desireFinal">
        <div className="shell desireFinalGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
            <h2>Ist menschliche Arbeit ein wesentlicher Teil Ihres Produktes?</h2>
          </div>
          <div>
            <p>
              In der fachlichen Vorprüfung klären wir, ob Ihr Produkt grundsätzlich zum Standard passt
              und welcher Zertifizierungsumfang sinnvoll ist.
            </p>
            <Link className="desireFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="desireFinalLink" href="/fuer-hersteller">Ablauf und Voraussetzungen ansehen →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
