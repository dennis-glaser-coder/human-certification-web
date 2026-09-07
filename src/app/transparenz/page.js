import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';

const principles = [
  ['Feste Standardfassung', 'Jede Zertifizierung zeigt, nach welcher Fassung des Standards geprüft wurde. Änderungen bleiben mit Datum und Version sichtbar.'],
  ['Belege zur Prüfung', 'Unsere Bewertung stützt sich auf Informationen und Unterlagen, die zur tatsächlichen Herstellung passen.'],
  ['Prüfung & Entscheidung', 'Wir halten fest, wer geprüft, wer fachlich kontrolliert und wer die Zertifizierungsentscheidung getroffen hat.'],
  ['Statusänderungen', 'Ob aktiv, ausgesetzt, abgelaufen oder widerrufen: Änderungen bleiben im öffentlichen Register sichtbar.'],
  ['Markennutzung', 'Das Zeichen darf nur für das zertifizierte Produkt und nur bei gültigem Status verwendet werden.'],
  ['Beschwerden & Einsprüche', 'Beschwerden, Einsprüche und Zeichenmissbrauch behandeln wir getrennt, weil es unterschiedliche Anliegen sind.'],
];

const roles = [
  ['01', 'Systeminhaber', 'verantwortet Standard, Marke, Dokumente, Register und die Regeln des Zertifizierungssystems.'],
  ['02', 'Prüfung', 'prüft den Herstellungsprozess und die Belege anhand der festgelegten Anforderungen.'],
  ['03', 'Fachprüfung', 'prüft, ob das Prüfergebnis vollständig und fachlich schlüssig ist und ob noch Fragen offen sind.'],
  ['04', 'Zertifizierungsentscheidung', 'trifft auf Grundlage des geprüften Ergebnisses die Entscheidung über den Zertifizierungsstatus.'],
  ['05', 'Öffentliches Register', 'zeigt öffentlich die Informationen, die Käufer und Geschäftspartner zur Zertifizierung prüfen können.'],
];

export default function TransparencyPage() {
  return (
    <main className="transparencyInstitution">
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">TRANSPARENZ & INTEGRITÄT</div>
        <BrandTrace compact />
        <h1>Vertrauen braucht klare Regeln.</h1>
        <p className="lead">
          Glaubwürdigkeit entsteht nicht durch das Zeichen allein. Sie entsteht durch versionierte Regeln,
          dokumentierte Prüfungen, definierte Zuständigkeiten und einen öffentlich nachvollziehbaren Zertifizierungsstatus.
        </p>
      </section>

      <section className="integrityMetaBand" aria-label="Integritätsprinzipien">
        <div className="shell integrityMetaGrid">
          <div><strong>Mit Versionsstand</strong><p>Regeln und Entscheidungen lassen sich einer bestimmten Fassung zuordnen.</p></div>
          <div><strong>Belegt</strong><p>Prüfung und Entscheidung werden festgehalten.</p></div>
          <div><strong>Klare Rollen</strong><p>Es ist erkennbar, wer prüft, wer kontrolliert und wer entscheidet.</p></div>
          <div><strong>Öffentlich prüfbar</strong><p>Status und Produktbezug werden über das Register verifiziert.</p></div>
        </div>
      </section>

      <section className="shell transparencySection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">SO SICHERN WIR DIE PRÜFUNG AB</div>
            <h2>Sechs Regeln zeigen, wie wir arbeiten.</h2>
          </div>
          <p>
            Integrität bedeutet hier vor allem, dass eine Zertifizierung nicht nur ausgesprochen,
            sondern anhand von Regelwerk, Nachweisen, Zuständigkeiten und Status nachvollzogen werden kann.
          </p>
        </div>

        <div className="transparencyPrinciplesGrid">
          {principles.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="integrityRoles">
        <div className="shell">
          <div className="sectionIntro compact integrityRolesIntro">
            <div>
              <div className="sectionNo light">ROLLEN & VERANTWORTUNG</div>
              <h2>Wer prüft, wer kontrolliert, wer entscheidet.</h2>
            </div>
            <p>
              Die Rollen im Zertifizierungssystem werden getrennt beschrieben, damit Prüfung,
              fachliche Kontrolle, Entscheidung und öffentliche Verifizierung voneinander nachvollziehbar bleiben.
            </p>
          </div>

          <div className="integrityRolesGrid">
            {roles.map(([, title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="governanceDocuments">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">ÖFFENTLICHE REGELN</div>
              <h2>Unsere Regeln sind dokumentiert und öffentlich einsehbar.</h2>
            </div>
            <p>
              Die Regeln zu Zertifizierungsverfahren, Markennutzung, Beschwerden und Einsprüchen
              werden versioniert geführt und sind öffentlich einsehbar.
            </p>
          </div>

          <div className="governanceDocumentsGrid">
            <Link href="/dokumente/certification-scheme-0-1">
              <span>ZERTIFIZIERUNGSSCHEMA</span>
              <strong>Rollen, Fachprüfung, Entscheidung und Statusverwaltung</strong>
              <small>Schema 0.1 öffnen →</small>
            </Link>
            <Link href="/markennutzung">
              <span>MARKENNUTZUNG</span>
              <strong>Regeln für Produktbezug, Status und Verwendung des Zeichens</strong>
              <small>Markennutzung öffnen →</small>
            </Link>
            <Link href="/verfahren">
              <span>BESCHWERDEN & EINSPRÜCHE</span>
              <strong>Verfahren für Beschwerden, Einsprüche und Zeichenmissbrauch</strong>
              <small>Verfahren öffnen →</small>
            </Link>
          </div>
        </div>
      </section>

      <section className="integrityClaimBoundary">
        <div className="shell integrityClaimBoundaryGrid">
          <div>
            <div className="sectionNo">NUR WAS WIR BELEGEN KÖNNEN</div>
            <h2>Wir behaupten nur, was wir belegen können.</h2>
          </div>
          <div>
            <p>
              Begriffe wie Akkreditierung, externe Unabhängigkeit oder unabhängige Zertifizierungsentscheidung
              werden ausschließlich verwendet, wenn die jeweilige Eigenschaft organisatorisch besteht und nachweisbar belegt werden kann.
            </p>
            <Link className="textLink" href="/dokumente">Dokumentenregister ansehen →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
