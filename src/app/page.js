import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import CertificationQr from '../components/CertificationQr';

const auditFacts = [
  ['Arbeitsschritte', 'Was Menschen tatsächlich ausführen.'],
  ['Maschinen', 'Wo Technik unterstützt.'],
  ['Produktionsumfang', 'Was zur Zertifizierung gehört.'],
];

const processSteps = [
  ['01', 'Produkt festlegen', 'Was soll zertifiziert werden?'],
  ['02', 'Unterlagen prüfen', 'Herstellung und Standorte einordnen.'],
  ['03', 'Vor Ort prüfen', 'Herstellung am Produktionsort ansehen.'],
  ['04', 'Bewerten', 'Ergebnis mit dem Standard abgleichen.'],
  ['05', 'Zertifizieren', 'Zeichen, ID und Registereintrag erhalten.'],
];

export default function Home() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main id="top" className="desireHome compactHome">
      <SiteHeader />

      <section className="desireHero">
        <div className="shell desireHeroGrid">
          <div className="desireHeroCopy">
            <p className="premiumEyebrow">ZERTIFIZIERUNG FÜR PHYSISCHE PRODUKTE</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1 className="homeBenefitHeroTitle">Geben Sie Kunden einen Grund, sich für Ihr Produkt zu entscheiden.</h1>
            <p className="desireHeroLead">
              Zeigen Sie nachvollziehbar, dass die prägenden Herstellungsschritte tatsächlich von Menschen ausgeführt werden.
              Made by Human prüft vor Ort und macht diesen Unterschied für Ihre Kunden sichtbar und überprüfbar.
            </p>
            <div className="desireHeroActions">
              <Link className="desirePrimary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            </div>
          </div>

          <div className="desireHeroVisual">
            <img
              src={assetBase + '/photography/home-hero-woodworking.webp'}
              width="1800"
              height="1202"
              fetchPriority="high"
              decoding="async"
              alt="Holzhandwerker bei der manuellen Bearbeitung eines Werkstücks"
            />
          </div>
        </div>
      </section>

      <section className="homeProblemBand">
        <div className="shell homeProblemCompact">
          <div>
            <p className="premiumSectionLabel">WARUM MADE BY HUMAN</p>
            <h2>Der Herstellungsunterschied ist oft unsichtbar.</h2>
          </div>
          <p className="homeProblemStatement">
            Am fertigen Produkt ist oft nicht erkennbar, welche prägenden Schritte Menschen ausgeführt haben.
            Made by Human macht genau das nachvollziehbar.
          </p>
        </div>
      </section>

      <section className="sealApplications compactApplications homeProofUse">
        <div className="shell">
          <div className="desireSectionHead">
            <div>
              <p className="premiumSectionLabel">ZERTIFIZIERUNG IM EINSATZ</p>
              <h2>Am Produkt sichtbar. Online prüfbar.</h2>
            </div>
          </div>

          <div className="homeProofUseGrid">
            <article className="homeProofPhysical">
              <div className="homeProofObjectStage">
                <div className="homeProofHangtag" aria-label="Beispiel für eine optionale Produktkennzeichnung">
                  <span className="homeProofCord" aria-hidden="true"></span>
                  <span className="homeProofEyelet" aria-hidden="true"></span>
                  <span className="homeProofSealCrop">
                    <img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="Made by Human Zertifizierungszeichen" />
                  </span>
                  <strong className="homeProofTagWordmark">MADE BY HUMAN</strong>
                  <small className="homeProofTagLabel">ZERTIFIZIERTES PRODUKT</small>
                </div>
              </div>
              <div className="homeProofUseCopy">
                <span>OPTIONALE KENNZEICHNUNG</span>
                <h3>Das Zeichen am Produkt.</h3>
                <p>Das Zertifizierungszeichen kann am Produkt, auf der Verpackung oder als Anhänger eingesetzt werden.</p>
                <Link href="/markennutzung">Markennutzung ansehen →</Link>
              </div>
            </article>

            <article className="homeProofDigital">
              <div className="homeDigitalProofCard">
                <div className="homeDigitalProofHead">
                  <span>ONLINE PRÜFBAR</span>
                  <img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="" aria-hidden="true" />
                </div>
                <div className="homeDigitalProofBody">
                  <div className="homeDigitalProofData">
                    <small>DEMONSTRATION – KEINE REALE ZERTIFIZIERUNG</small>
                    <h3>Demo-Produkt</h3>
                    <dl>
                      <div><dt>Hersteller</dt><dd>Demo Manufaktur</dd></div>
                      <div><dt>Zertifizierungs-ID</dt><dd>HC-DEMO-0001</dd></div>
                      <div><dt>Standard</dt><dd>0.1-DEMO</dd></div>
                    </dl>
                    <Link href="/zertifikat/?id=HC-DEMO-0001">Öffentlichen Datensatz ansehen →</Link>
                  </div>
                  <CertificationQr publicId="HC-DEMO-0001" />
                </div>
              </div>
              <div className="homeProofUseCopy">
                <span>DIGITALER NACHWEIS</span>
                <h3>ID und QR-Code führen zum Datensatz.</h3>
                <p>Kunden können den öffentlichen Nachweis des zertifizierten Produkts direkt aufrufen.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="desireAudit compactAudit">
        <div className="shell desireAuditGrid">
          <figure>
            <img
              src={assetBase + '/brand/IMG_1053.webp'}
              alt="Beispielhafte Darstellung einer Prüfung in einer Produktionsumgebung"
              loading="lazy"
            />
            <figcaption>Beispielhafte Darstellung</figcaption>
          </figure>
          <div className="desireAuditCopy">
            <p className="premiumSectionLabel">VOR-ORT-PRÜFUNG</p>
            <h2>Geprüft wird vor Ort.</h2>
            <p className="desireAuditLead">Wir prüfen die Herstellung dort, wo das Produkt entsteht.</p>
            <div className="desireAuditFacts">
              {auditFacts.map(([title, copy]) => <div key={title}><strong>{title}</strong><p>{copy}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="homeConsumerVerify">
        <div className="shell homeConsumerVerifyGrid">
          <div className="homeConsumerCopy">
            <p className="premiumSectionLabel premiumSectionLabelLight">ÖFFENTLICH PRÜFBAR</p>
            <h2>Prüfen Sie selbst, was zertifiziert wurde.</h2>
            <p>Produkt, Hersteller, zertifizierter Umfang, Produktionsorte, Standard und Status sind öffentlich einsehbar.</p>
          </div>
          <div className="homeVerifyCompact">
            <span>ID ODER QR-CODE VORHANDEN?</span>
            <strong>Nachweis prüfen.</strong>
            <p>Zertifizierungs-ID eingeben oder QR-Code scannen.</p>
            <div className="homeVerifyActions">
              <Link className="homeVerifyPrimary" href="/pruefen">Zertifizierung prüfen</Link>
              <Link className="homeVerifyRegisterLink" href="/register">Register durchsuchen →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="homeProcessBand" aria-labelledby="home-process-title">
        <div className="shell">
          <div className="homeProcessHead">
            <h2 id="home-process-title">So läuft die Zertifizierung ab.</h2>
          </div>
          <div className="homeProcessGrid">
            {processSteps.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="homeFinalCompact">
        <div className="shell">
          <div className="homeFinalCta">
            <div>
              <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
              <h2>Passt Ihr Produkt zu Made by Human?</h2>
            </div>
            <div>
              <p>Wir klären zuerst, was Sie zertifizieren möchten und wie Ihr Produkt hergestellt wird.</p>
              <Link className="desireFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
