import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { CERTIFIED_STATEMENT } from '../lib/brand';

const auditFacts = [
  ['Arbeitsschritte ansehen', 'Wir sehen uns die Schritte an, die das Produkt in der Herstellung wirklich prägen.'],
  ['Maschinen richtig einordnen', 'Wir prüfen, wo Technik unterstützt und wo die Arbeit des Menschen entscheidend bleibt.'],
  ['Produkt genau zuordnen', 'Wir gleichen das Produkt, die Produktionsorte und mögliche externe Fertigung mit Ihren Angaben ab.'],
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
            <h1>Von Menschen gemacht.<br />Vor Ort geprüft.</h1>
            <p className="desireHeroLead">
              Wir prüfen vor Ort, ob die entscheidenden Herstellungsschritte eines Produkts tatsächlich von Menschen
              ausgeführt werden. Nach erfolgreicher Zertifizierung machen Zeichen, Zertifizierungs-ID
              und öffentliches Register diesen Nachweis sichtbar.
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

      <section className="sealApplications compactApplications">
        <div className="shell">
          <div className="desireSectionHead">
            <div>
              <p className="premiumSectionLabel">DAS ZEICHEN IM EINSATZ</p>
              <h2>Zeigen Sie Ihren Kunden, was hinter Ihrem Produkt steckt.</h2>
            </div>
            <p>
              Nach der Zertifizierung können Sie Ihr Produkt mit dem Made by Human Siegel kennzeichnen – auf der Verpackung, am Produkt und in Ihrem Onlineshop. Über den QR-Code können Kunden die Zertifizierung prüfen.
            </p>
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
                <p>Als Anhänger oder auf der Verpackung: So könnte das Siegel an Ihrem Produkt aussehen.</p>
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
              <div className="applicationCopy"><strong>Digitaler Nachweis</strong><p>Auch online bleiben Zeichen, Produkt und Registereintrag eindeutig miteinander verbunden.</p></div>
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
            <p className="premiumSectionLabel">VOR-ORT-AUDIT</p>
            <h2>Vor Ort zeigt sich, wie ein Produkt wirklich entsteht.</h2>
            <p className="desireAuditLead">
              Wir sehen uns die Herstellung beim Hersteller an und dokumentieren die Arbeitsschritte, die das Produkt wesentlich prägen.
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
            <h2>Ein Zeichen ist nur so glaubwürdig wie der Nachweis dahinter.</h2>
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
          <div className="homeStandardLine" style={{ marginTop: 0 }}>
            <span>Aktuelle Standardfassung: 0.1 · veröffentlicht am 04.09.2026</span>
            <Link href="/standard">Standard ansehen →</Link>
          </div>

          <div className="homeFinalCta">
            <div>
              <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
              <h2>Passt Ihr Produkt zu Made by Human?</h2>
            </div>
            <div>
              <p>In der ersten Einschätzung klären wir gemeinsam, welches Produkt Sie zertifizieren möchten, wie es hergestellt wird und was genau geprüft werden soll.</p>
              <Link className="desireFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
