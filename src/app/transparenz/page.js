import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const principles = [
  ['Standardversionen', 'Jede Zertifizierung soll eindeutig auf die zugrunde liegende Standardfassung verweisen. Änderungen am Regelwerk bleiben dadurch zeitlich nachvollziehbar.'],
  ['Prüfnachweise', 'Die Bewertung eines Produkts soll auf dokumentierten Informationen und nachvollziehbaren Prüfunterlagen beruhen.'],
  ['Review und Entscheidung', 'Prüfung, fachliches Review und Zertifizierungsentscheidung sollen mit klaren Zuständigkeiten dokumentiert werden.'],
  ['Statusänderungen', 'Aktiv, ausgesetzt, abgelaufen oder widerrufen: Änderungen am Zertifizierungsstatus sollen im öffentlichen Register nachvollziehbar bleiben.'],
  ['Markennutzung', 'Die Nutzung des Zeichens soll an Zertifizierungsumfang, Status und öffentliche Verifizierbarkeit gebunden sein.'],
  ['Beschwerden und Einsprüche', 'Beschwerden, Einsprüche gegen Entscheidungen und Zeichenmissbrauch werden als getrennte Verfahren dokumentiert.'],
];

const roles = [
  ['Scheme-Inhaber', 'verantwortet Standard, Marke, Register und die Regeln des Zertifizierungssystems.'],
  ['Prüfung', 'bewertet Herstellungsprozess und Nachweise gegen die festgelegten Anforderungen.'],
  ['Review', 'prüft die fachliche Plausibilität und Vollständigkeit des dokumentierten Prüfergebnisses.'],
  ['Zertifizierungsentscheidung', 'überführt das geprüfte Ergebnis in eine dokumentierte Entscheidung zum Zertifizierungsstatus.'],
  ['Public Register', 'veröffentlicht die für Käufer und Geschäftspartner relevanten Zertifizierungsinformationen.'],
];

export default function TransparencyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">TRANSPARENZ & GOVERNANCE</div>
        <h1>Regeln für Standard, Prüfung und Markennutzung.</h1>
        <p className="lead">
          Die Glaubwürdigkeit der Kennzeichnung hängt nicht allein vom sichtbaren Zeichen ab,
          sondern von nachvollziehbaren Regeln für Prüfung, Entscheidung, Statusverwaltung und öffentliche Verifizierung.
        </p>
      </section>

      <section className="statusPanel shell">
        <div>
          <span>AKTUELLER PROJEKTSTATUS</span>
          <strong>Standard und Registermodell in Validierung</strong>
        </div>
        <p>
          Die öffentliche kommerzielle Zertifikatsvergabe ist noch nicht gestartet.
          Rechtsrahmen, Governance-Struktur und endgültiger Prüfprozess werden vor dem Start festgelegt.
        </p>
      </section>

      <section className="shell transparencySection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">GRUNDSÄTZE</div>
            <h2>Was das Zertifizierungssystem nachvollziehbar machen muss.</h2>
          </div>
        </div>

        <div className="transparencyGrid">
          {principles.map(([title, copy]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rolesSection">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">ZIELSTRUKTUR</div>
              <h2>Klare Rollen im Zertifizierungssystem.</h2>
            </div>
            <p>
              Die endgültige rechtliche und organisatorische Ausgestaltung wird vor dem kommerziellen Start festgelegt.
              Das System soll jedoch so aufgebaut sein, dass Standardverantwortung, Prüfung, Review und Entscheidung klar unterscheidbar sind.
            </p>
          </div>

          <div className="rolesGrid">
            {roles.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="governanceDocuments">
        <div className="shell governanceDocumentsGrid">
          <Link href="/dokumente/certification-scheme-0-1">
            <span>CERTIFICATION SCHEME</span>
            <strong>Rollen, Review, Entscheidung und Statusverwaltung</strong>
            <small>Scheme 0.1 öffnen →</small>
          </Link>
          <Link href="/markennutzung">
            <span>MARK USE</span>
            <strong>Grundsätze zur Nutzung des Zertifizierungszeichens</strong>
            <small>Markennutzung öffnen →</small>
          </Link>
          <Link href="/verfahren">
            <span>GOVERNANCE</span>
            <strong>Beschwerden, Einsprüche und Zeichenmissbrauch</strong>
            <small>Verfahren öffnen →</small>
          </Link>
        </div>
      </section>

      <section className="shell transparencyIntegrity">
        <strong>Keine vorgetäuschte Unabhängigkeit</strong>
        <p>
          Die endgültige organisatorische und rechtliche Governance-Struktur ist noch nicht eingerichtet.
          Made by Humans behauptet deshalb derzeit weder Akkreditierung noch eine bereits bestehende unabhängige externe Entscheidungsinstanz.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
