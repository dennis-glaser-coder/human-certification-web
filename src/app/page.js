import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const auditFacts = [
  ['Arbeitsschritte', 'Welche Schritte prägen das Produkt?'],
  ['Maschinen', 'Wo unterstützt Technik – und wo bleibt menschliche Arbeit entscheidend?'],
  ['Produktionsumfang', 'Produkt, Standorte und externe Fertigung werden eindeutig zugeordnet.'],
];

const processSteps = [
  ['01', 'Produkt festlegen', 'Wir klären, was genau zertifiziert werden soll.'],
  ['02', 'Unterlagen prüfen', 'Sie beschreiben Herstellung, Standorte und relevante externe Fertigung.'],
  ['03', 'Vor Ort prüfen', 'Wir sehen uns die prägenden Herstellungsschritte am Produktionsort an.'],
  ['04', 'Entscheiden', 'Die Ergebnisse werden gegen den geltenden Standard bewertet.'],
  ['05', 'Nachweis veröffentlichen', 'Bei erfolgreicher Zertifizierung folgen Zeichen, ID, QR-Code und Registereintrag.'],
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
              <Link className="desireSecondary" href="/warum-made-by-human">Warum Made by Human?</Link>
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

      <section className="homeBenefitBand" aria-labelledby="home-benefit-title">
        <div className="shell">
          <div className="homeBenefitBandHead">
            <p className="premiumSectionLabel">NACH ERFOLGREICHER ZERTIFIZIERUNG</p>
            <h2 id="home-benefit-title">Das erhalten Sie für Ihr Produkt.</h2>
          </div>
          <div className="homeBenefitGrid">
            <article>
              <strong>Zertifizierungszeichen</strong>
              <p>Für das konkret zertifizierte Produkt – am Produkt, auf der Verpackung oder im Onlineshop.</p>
            </article>
            <article>
              <strong>Öffentlicher Nachweis</strong>
              <p>Produkt, Hersteller, zertifizierter Umfang und aktueller Status bleiben nachvollziehbar.</p>
            </article>
            <article>
              <strong>ID &amp; QR-Code</strong>
              <p>Die individuelle Zertifizierungs-ID und der QR-Code führen direkt zum öffentlichen Eintrag.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="homeProblemBand">
        <div className="shell homeProblemGrid">
          <p className="premiumSectionLabel">WARUM DAS WICHTIG IST</p>
          <div>
            <h2>Der Herstellungsunterschied ist oft unsichtbar.</h2>
            <p>Made by Human macht sichtbar und überprüfbar, welche prägenden Schritte Menschen ausführen.</p>
          </div>
        </div>
      </section>

      <section className="sealApplications compactApplications">
        <div className="shell">
          <div className="desireSectionHead">
            <div>
              <p className="premiumSectionLabel">DER NACHWEIS IM EINSATZ</p>
              <h2>So wird der Nachweis sichtbar.</h2>
            </div>
            <p>Zeichen, ID und QR-Code verbinden Ihr Produkt direkt mit dem öffentlichen Nachweis.</p>
          </div>

          <div className="sealApplicationGrid compactApplicationGrid">
            <article className="sealApplicationCard applicationPackage realApplicationCard">
              <div className="applicationStage applicationStagePhoto realApplicationStage">
                <img
                  className="applicationPhoto realApplicationPhoto"
                  src={assetBase + '/brand/IMG_1047_mbh.webp?v=20260912-spacing'}
                  alt="Beispielhafte Made by Human Kennzeichnung an einem textilen Produkt mit Verpackung"
                  loading="lazy"
                />
              </div>
              <div className="applicationCopy">
                <strong>Direkt am Produkt</strong>
                <p>Als Zeichen am Produkt, auf der Verpackung oder im Onlineshop.</p>
              </div>
            </article>

            <article className="sealApplicationCard applicationDigital">
              <div className="applicationStage applicationDigitalStage applicationProofStage">
                <div className="applicationProofPanel">
                  <div className="applicationProofTop">
                    <span>ONLINE PRÜFBAR</span>
                    <img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="" aria-hidden="true" />
                  </div>
                  <div className="applicationProofStatement">
                    <small>NACHWEIS FÜR DIESES PRODUKT</small>
                    <strong>Made by Human</strong>
                    <p>Die Kennzeichnung führt zum öffentlichen Eintrag für genau dieses Produkt.</p>
                  </div>
                  <div className="applicationProofMeta" aria-label="Bestandteile des digitalen Nachweises">
                    <span>Produktumfang</span>
                    <span>Status</span>
                    <span>Standardfassung</span>
                  </div>
                  <Link className="applicationProofAction" href="/zertifikat/?id=HC-DEMO-0001">
                    <span>Beispieldatensatz ansehen →</span>
                    <small>Demonstration – keine reale Zertifizierung</small>
                  </Link>
                </div>
              </div>
              <div className="applicationCopy">
                <strong>Digitaler Nachweis</strong>
                <p>ID und QR-Code führen direkt zum öffentlichen Eintrag.</p>
              </div>
            </article>
          </div>

          <div className="compactApplicationFooter">
            <span>Für ein konkretes Produkt · nur bei gültigem Status · öffentlich prüfbar</span>
            <span className="applicationSwipeHint">Wischen für weitere Anwendung →</span>
            <Link href="/markennutzung">Markennutzung im Detail →</Link>
          </div>
        </div>
      </section>

      <section className="desireAudit compactAudit">
        <div className="shell desireAuditGrid">
          <figure>
            <img
              src={assetBase + '/brand/IMG_1053.webp'}
              alt="Vor-Ort-Audit während eines produktprägenden menschlichen Herstellungsschritts"
              loading="lazy"
            />
          </figure>
          <div className="desireAuditCopy">
            <p className="premiumSectionLabel">VOR-ORT-PRÜFUNG</p>
            <h2>Geprüft wird vor Ort.</h2>
            <p className="desireAuditLead">Wir prüfen die prägenden Herstellungsschritte direkt am Produktionsort.</p>
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
            <h2>Jeder Nachweis ist öffentlich.</h2>
            <p>Produkt, Hersteller, zertifizierter Umfang, Produktionsorte, Standard und Status bleiben nachvollziehbar.</p>
          </div>
          <div className="homeVerifyCompact">
            <span>ZERTIFIZIERUNGS-ID ODER QR VORHANDEN?</span>
            <strong>Zertifizierung prüfen.</strong>
            <p>ID eingeben oder QR-Code scannen und den öffentlichen Datensatz aufrufen.</p>
            <div>
              <Link className="homeVerifyPrimary" href="/pruefen">Zertifizierung prüfen</Link>
              <Link className="homeVerifySecondary" href="/register">Register öffnen →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="homeProcessBand" aria-labelledby="home-process-title">
        <div className="shell">
          <div className="homeProcessHead">
            <p className="premiumSectionLabel">DER WEG ZUR ZERTIFIZIERUNG</p>
            <h2 id="home-process-title">In fünf Schritten zur Zertifizierung.</h2>
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
          <div className="homeProcessAction">
            <p>Die erste Einschätzung klärt, ob Produkt und Herstellungsprozess grundsätzlich zum Standard passen.</p>
            <Link href="/fuer-hersteller#zertifizierungsanfrage">Erste Einschätzung anfragen →</Link>
          </div>
        </div>
      </section>

      <section className="homeFinalCompact">
        <div className="shell">
          <div className="homeStandardLine" style={{ marginTop: 0 }}>
            <span>Aktuelle Standardfassung: 1.0 · veröffentlicht am 14.09.2026</span>
            <Link href="/standard">Standard ansehen →</Link>
          </div>
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
