import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Transparenz & Integrität',
  description: 'Rollen, Prüfnachweise, Statusverwaltung, Markennutzung, Beschwerden und Integritätsregeln des Made by Humans Zertifizierungssystems.',
  alternates: { canonical: canonical('/transparenz') },
  openGraph: {
    title: 'Transparenz & Integrität | Made by Humans',
    description: 'Nachvollziehbare Regeln für Prüfung, Zertifizierungsentscheidung, Register und Markennutzung.',
    url: canonical('/transparenz'),
  },
};

const principles = [
  ['Standardversionen', 'Jede Zertifizierung verweist eindeutig auf die zugrunde liegende Standardfassung. Änderungen am Regelwerk bleiben zeitlich nachvollziehbar.'],
  ['Prüfnachweise', 'Die Bewertung eines Produkts beruht auf dokumentierten Informationen und nachvollziehbaren Prüfunterlagen.'],
  ['Fachprüfung & Entscheidung', 'Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung werden mit klar unterscheidbaren Zuständigkeiten dokumentiert.'],
  ['Statusänderungen', 'Aktiv, ausgesetzt, abgelaufen oder widerrufen: Änderungen am Zertifizierungsstatus bleiben im öffentlichen Register nachvollziehbar.'],
  ['Markennutzung', 'Die Nutzung des Zeichens ist an Zertifizierungsumfang, Status und öffentliche Verifizierbarkeit gebunden.'],
  ['Beschwerden & Einsprüche', 'Beschwerden, Einsprüche gegen Entscheidungen und Zeichenmissbrauch werden als getrennte Verfahren behandelt.'],
];

const roles = [
  ['01', 'Systeminhaber', 'verantwortet Standard, Marke, Dokumentenlenkung, Register und die Regeln des Zertifizierungssystems.'],
  ['02', 'Prüfung', 'bewertet Herstellungsprozess und Nachweise gegen die festgelegten Anforderungen.'],
  ['03', 'Fachprüfung', 'prüft Plausibilität, Vollständigkeit und offene Punkte des dokumentierten Prüfergebnisses.'],
  ['04', 'Zertifizierungsentscheidung', 'überführt das geprüfte Ergebnis in eine dokumentierte Entscheidung zum Zertifizierungsstatus.'],
  ['05', 'Öffentliches Register', 'veröffentlicht die für Käufer und Geschäftspartner relevanten Zertifizierungsinformationen.'],
];

export default function TransparencyPage() {
  return (
    <main className="transparencyInstitution">
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">TRANSPARENZ & INTEGRITÄT</div>
        <h1>Vertrauen braucht nachvollziehbare Regeln.</h1>
        <p className="lead">
          Die Glaubwürdigkeit der Kennzeichnung entsteht durch klare Standardversionen,
          dokumentierte Prüfungen, definierte Zuständigkeiten und einen öffentlich nachvollziehbaren Zertifizierungsstatus.
        </p>
      </section>

      <section className="integrityMetaBand" aria-label="Integritätsprinzipien">
        <div className="shell integrityMetaGrid">
          <div><strong>Versioniert</strong><p>Regelwerke und Entscheidungen bleiben referenzierbar.</p></div>
          <div><strong>Dokumentiert</strong><p>Prüfnachweise und Entscheidungen sind nachvollziehbar.</p></div>
          <div><strong>Rollenklar</strong><p>Prüfung, Fachprüfung und Entscheidung sind unterscheidbar.</p></div>
          <div><strong>Öffentlich prüfbar</strong><p>Status und Produktbezug werden über das Register verifiziert.</p></div>
        </div>
      </section>

      <section className="shell transparencySection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">INTEGRITÄTSPRINZIPIEN</div>
            <h2>Sechs Regeln sichern die Nachvollziehbarkeit.</h2>
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
              <h2>Klare Funktionen statt unscharfer Zuständigkeiten.</h2>
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
              <div className="sectionNo">KONTROLLIERTE REGELWERKE</div>
              <h2>Integrität wird in Dokumenten festgehalten.</h2>
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
            <div className="sectionNo">NACHWEISBARE AUSSAGEN</div>
            <h2>Keine weitergehende Behauptung ohne belastbaren Nachweis.</h2>
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
