import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import HeroVerify from '../components/HeroVerify';

const valuePoints = [
  ['Glaubwürdiger als ein Eigenclaim', 'Nicht nur „handgemacht“ behaupten: Die relevanten Herstellungsschritte werden geprüft und nachvollziehbar dokumentiert.'],
  ['Direkt am Produkt sichtbar', 'Das Zertifizierungszeichen macht menschliche Herstellung auf Produkt, Verpackung und Produktseite erkennbar.'],
  ['Öffentlich verifizierbar', 'Zertifizierungs-ID, Umfang, Standardfassung, Status und relevante Produktionsstandorte bleiben im Register prüfbar.'],
];

const auditChecks = [
  ['Menschliche Arbeit', 'Welche wesentlichen produktprägenden Schritte tatsächlich durch Menschen ausgeführt werden.'],
  ['Maschinen & Automatisierung', 'Welche Maschinen unterstützen – und wo automatisierte Prozesse die menschliche Herstellung ersetzen.'],
  ['Produktionsorte', 'Wo die relevanten Arbeitsschritte stattfinden und wie sie dem geprüften Produkt zugeordnet sind.'],
  ['Fremdfertigung', 'Welche wesentlichen Schritte extern ausgeführt werden und ob sie zum Zertifizierungsumfang gehören.'],
];

const certificationSteps = [
  ['Anfrage & Vorprüfung', 'Produkt und Herstellungsprozess werden eingeordnet und der mögliche Zertifizierungsumfang abgegrenzt.'],
  ['Vorbereitung', 'Relevante Produktionsinformationen, Standorte und vorhandene Nachweise werden für die Prüfung zusammengestellt.'],
  ['Vor-Ort-Audit', 'Die tatsächliche Herstellung wird beim Hersteller vor Ort geprüft – dort, wo das Produkt entsteht.'],
  ['Bewertung & Entscheidung', 'Auditfeststellungen und Nachweise werden gegen den Standard bewertet und die Entscheidung dokumentiert.'],
  ['Zeichen & Register', 'Bei positiver Entscheidung erhält das Produkt eine Zertifizierungs-ID, QR-Verifizierung und einen öffentlichen Registerdatensatz.'],
];

const communicationPoints = [
  ['Auf dem Produkt', 'Kennzeichnung direkt am zertifizierten Produkt, wenn der Produktbezug eindeutig bleibt.'],
  ['Auf der Verpackung', 'Sichtbarer Nachweis menschlicher Herstellung am Point of Sale.'],
  ['Online & B2B', 'Verifizierbare Aussage auf Produktseiten, in Datenblättern, Katalogen und Verkaufsunterlagen.'],
];

export default function Home() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main className="salesHome">
      <SiteHeader />

      <section className="salesHero">
        <div className="shell salesHeroGrid">
          <div className="salesHeroCopy">
            <p className="premiumEyebrow">ZERTIFIZIERUNG FÜR NACHWEISBAR MENSCHLICHE HERSTELLUNG</p>
            <h1>Zeigen Sie, was an Ihrem Produkt wirklich menschliche Arbeit ist.</h1>
            <p className="salesHeroLead">
              Made by Humans prüft Ihre Produktion vor Ort, bewertet die wesentlichen Herstellungsschritte
              nach einem definierten Standard und macht das Ergebnis über Zertifizierungszeichen,
              ID und öffentliches Register überprüfbar.
            </p>

            <div className="salesHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
              <a className="salesSecondary" href="#vor-ort-audit">So läuft die Prüfung ab</a>
            </div>

            <div className="salesHeroSignals" aria-label="Kernelemente der Zertifizierung">
              <span>Vor-Ort-Audit beim Hersteller</span>
              <span>Produktbezogene Prüfung</span>
              <span>Öffentliche Verifizierung</span>
            </div>
          </div>

          <div className="salesHeroVisual">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1748347084012-075796185d56?auto=format&fit=crop&w=1800&q=84"
                alt="Prüfung von Produktionsanlagen in einer modernen Fertigung"
              />
              <figcaption>Produktionsprüfung · TECNIC Bioprocess Solutions / Unsplash</figcaption>
            </figure>

            <div className="salesHeroSeal">
              <img
                src={assetBase + '/brand/made-by-humans-seal.png'}
                alt="Made by Humans Zertifizierungszeichen"
                width="178"
                height="178"
              />
              <div>
                <span>DAS ERGEBNIS</span>
                <strong>Eine überprüfbare Aussage am Produkt.</strong>
                <p>Zertifizierungszeichen · ID · QR · öffentliches Register</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="salesValue">
        <div className="shell">
          <div className="salesValueHead">
            <p className="premiumSectionLabel">WARUM MADE BY HUMANS</p>
            <h2>Menschliche Herstellung ist ein Unterschied. Machen Sie ihn belegbar.</h2>
            <p>
              Wenn menschliche Arbeit ein wesentlicher Teil Ihres Produktes ist, sollte diese Leistung
              nicht nur in einer Werbeaussage stecken. Die Zertifizierung übersetzt sie in einen
              definierten, prüfbaren und öffentlich nachvollziehbaren Nachweis.
            </p>
          </div>

          <div className="salesValueGrid">
            {valuePoints.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
          <div className="salesValueMore">
            <Link href="/warum-made-by-humans">Alle Vorteile für Hersteller und Käufer ansehen →</Link>
          </div>
        </div>
      </section>

      <section className="onsiteAudit" id="vor-ort-audit">
        <div className="shell onsiteAuditGrid">
          <figure className="onsiteAuditImage">
            <img
              src="https://images.unsplash.com/photo-1774282557812-6182cc59f638?auto=format&fit=crop&w=1800&q=84"
              alt="Facharbeiter bei der manuellen Metallbearbeitung in einer Werkstatt"
              loading="lazy"
            />
            <figcaption>Produktionsaufnahme · Maksim Shiriagin / Unsplash</figcaption>
          </figure>

          <div className="onsiteAuditCopy">
            <p className="premiumSectionLabel">VOR-ORT-AUDIT</p>
            <h2>Wir prüfen dort, wo Ihr Produkt tatsächlich entsteht.</h2>
            <p className="onsiteAuditLead">
              Der Kern der Zertifizierung ist kein Online-Fragebogen. Beim Audit vor Ort wird nachvollzogen,
              wie Ihr Produkt hergestellt wird, welche Arbeitsschritte Menschen ausführen, welche Maschinen
              eingesetzt werden und wo relevante Fremdfertigung stattfindet.
            </p>

            <div className="onsiteAuditFacts">
              <div><strong>Produktion ansehen</strong><p>Reale Abläufe statt bloßer Selbstauskunft.</p></div>
              <div><strong>Nachweise abgleichen</strong><p>Unterlagen und tatsächliche Fertigung werden zusammen bewertet.</p></div>
              <div><strong>Umfang festlegen</strong><p>Das Zertifikat bleibt auf das tatsächlich geprüfte Produkt begrenzt.</p></div>
            </div>

            <Link className="premiumInlineLink" href="/fuer-hersteller">Zertifizierungsverfahren im Detail</Link>
          </div>
        </div>
      </section>

      <section className="auditScope">
        <div className="shell">
          <div className="auditScopeHead">
            <div>
              <p className="premiumSectionLabel premiumSectionLabelLight">WAS WIR PRÜFEN</p>
              <h2>Nicht ob ein Produkt handwerklich aussieht. Sondern wie es hergestellt wird.</h2>
            </div>
            <p>
              Der Standard konzentriert sich bewusst auf die konkrete Aussage zur menschlichen Herstellung.
              Qualität, Nachhaltigkeit, Herkunft oder andere Produktmerkmale werden dadurch nicht automatisch mitbewertet.
            </p>
          </div>

          <div className="auditScopeGrid">
            {auditChecks.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="salesProcess">
        <div className="shell">
          <div className="salesProcessHead">
            <div>
              <p className="premiumSectionLabel">DER WEG ZUR ZERTIFIZIERUNG</p>
              <h2>Vom ersten Produktgespräch bis zum sichtbaren Nachweis.</h2>
            </div>
            <p>
              Der Prozess ist so aufgebaut, dass Sie früh wissen, was geprüft wird,
              welche Informationen benötigt werden und wie aus dem Vor-Ort-Audit
              eine nachvollziehbare Zertifizierungsentscheidung entsteht.
            </p>
          </div>

          <div className="salesProcessGrid">
            {certificationSteps.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sealOutcome">
        <div className="shell sealOutcomeGrid">
          <div className="sealOutcomeMark">
            <img
              src={assetBase + '/brand/made-by-humans-seal.png'}
              alt="Made by Humans Zertifizierungszeichen"
              width="300"
              height="300"
            />
            <span>PRODUKTBEZOGEN · STATUSGEBUNDEN · VERIFIZIERBAR</span>
          </div>

          <div className="sealOutcomeCopy">
            <p className="premiumSectionLabel">NACH POSITIVER ENTSCHEIDUNG</p>
            <h2>Ein Zeichen, das auf einen echten Nachweis verweist.</h2>
            <blockquote>
              Dieses Produkt wurde in seinen wesentlichen Herstellungsschritten
              nachweislich durch Menschen gefertigt.
            </blockquote>
            <p>
              Die Aussage gilt ausschließlich für den zertifizierten Produktumfang.
              Über Zertifizierungs-ID und QR-Code lässt sich der aktuelle Datensatz öffentlich prüfen.
            </p>

            <div className="sealOutcomeGridSmall">
              {communicationPoints.map(([title, copy]) => (
                <div key={title}><strong>{title}</strong><p>{copy}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="premiumRegister salesRegister">
        <div className="shell premiumRegisterGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">ÖFFENTLICHES REGISTER</p>
            <h2>Jede veröffentlichte Zertifizierung bleibt überprüfbar.</h2>
            <p className="premiumRegisterIntro">
              Hersteller, Produkt, Zertifizierungsumfang, relevante Produktionsstandorte,
              Standardfassung, Status und Gültigkeit werden dem öffentlichen Datensatz zugeordnet.
            </p>
            <Link className="salesRegisterLink" href="/register">Öffentliches Register öffnen →</Link>
          </div>

          <div className="premiumVerify">
            <HeroVerify />
          </div>
        </div>
      </section>

      <section className="salesStandard">
        <div className="shell salesStandardGrid">
          <div>
            <p className="premiumSectionLabel">DER STANDARD DAHINTER</p>
            <h2>Das Siegel ist sichtbar. Die Regeln dahinter sind öffentlich.</h2>
          </div>
          <div>
            <p>
              Made by Humans definiert Geltungsbereich, Prüfkriterien, Nachweisanforderungen,
              Zertifizierungsumfang, Markennutzung und öffentliche Verifizierung in versionierten Regelwerken.
            </p>
            <div className="salesStandardLinks">
              <Link href="/standard">Standard ansehen →</Link>
              <Link href="/dokumente">Dokumente öffnen →</Link>
              <Link href="/transparenz">Transparenz & Integrität →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="salesFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div>
            <p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p>
            <h2>Ist menschliche Arbeit ein wesentlicher Teil Ihres Produktes?</h2>
          </div>
          <div>
            <p>
              Dann prüfen wir im ersten Schritt, ob Ihr Produkt grundsätzlich in den Standard passt
              und welcher Zertifizierungsumfang sinnvoll ist.
            </p>
            <Link className="salesFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
            <Link className="salesFinalText" href="/leitfaden/nachweise">Welche Nachweise werden benötigt? →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
