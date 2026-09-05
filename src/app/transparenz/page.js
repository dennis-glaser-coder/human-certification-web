import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const principles = [
  ['Standardversionen', 'Jede Zertifizierung soll eindeutig auf die zugrunde liegende Standardfassung verweisen. Änderungen am Regelwerk bleiben dadurch zeitlich nachvollziehbar.'],
  ['Prüfnachweise', 'Die Bewertung eines Produkts soll auf dokumentierten Informationen und nachvollziehbaren Prüfunterlagen beruhen.'],
  ['Fachprüfung und Entscheidung', 'Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung sollen mit klaren Zuständigkeiten dokumentiert werden.'],
  ['Statusänderungen', 'Aktiv, ausgesetzt, abgelaufen oder widerrufen: Änderungen am Zertifizierungsstatus sollen im öffentlichen Register nachvollziehbar bleiben.'],
  ['Markennutzung', 'Die Nutzung des Zeichens soll an Zertifizierungsumfang, Status und öffentliche Verifizierbarkeit gebunden sein.'],
  ['Beschwerden und Einsprüche', 'Beschwerden, Einsprüche gegen Entscheidungen und Zeichenmissbrauch werden als getrennte Verfahren dokumentiert.'],
];

const roles = [
  ['Systeminhaber', 'verantwortet Standard, Marke, Register und die Regeln des Zertifizierungssystems.'],
  ['Prüfung', 'bewertet Herstellungsprozess und Nachweise gegen die festgelegten Anforderungen.'],
  ['Fachprüfung', 'prüft die fachliche Plausibilität und Vollständigkeit des dokumentierten Prüfergebnisses.'],
  ['Zertifizierungsentscheidung', 'überführt das geprüfte Ergebnis in eine dokumentierte Entscheidung zum Zertifizierungsstatus.'],
  ['Öffentliches Register', 'veröffentlicht die für Käufer und Geschäftspartner relevanten Zertifizierungsinformationen.'],
];

export default function TransparencyPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">TRANSPARENZ & INTEGRITÄT</div>
        <h1>Regeln für Standard, Prüfung und Markennutzung.</h1>
        <p className="lead">
          Die Glaubwürdigkeit der Kennzeichnung hängt nicht allein vom sichtbaren Zeichen ab,
          sondern von nachvollziehbaren Regeln für Prüfung, Entscheidung, Statusverwaltung und öffentliche Verifizierung.
        </p>
      </section>

      <section className="statusPanel shell">
        <div>
          <span>STATUS DES ZERTIFIZIERUNGSSYSTEMS</span>
          <strong>Standard 0.1 und Registerstruktur im Aufbau</strong>
        </div>
        <p>
          Die öffentliche kommerzielle Zertifikatsvergabe ist noch nicht gestartet.
          Dieser Status wird hier bewusst transparent ausgewiesen; Rechtsrahmen, Rollen und endgültiger Prüfprozess werden vor dem Start festgelegt.
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
              <div className="sectionNo">VORGESEHENE ROLLENTRENNUNG</div>
              <h2>Klare Verantwortlichkeiten im Zertifizierungssystem.</h2>
            </div>
            <p>
              Die endgültige rechtliche und organisatorische Ausgestaltung wird vor dem kommerziellen Start festgelegt.
              Das System ist so konzipiert, dass Standardverantwortung, Prüfung, fachliche Kontrolle und Entscheidung klar unterscheidbar sind.
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
            <span>ZERTIFIZIERUNGSSCHEMA</span>
            <strong>Rollen, Fachprüfung, Entscheidung und Statusverwaltung</strong>
            <small>Schema 0.1 öffnen →</small>
          </Link>
          <Link href="/markennutzung">
            <span>MARKENNUTZUNG</span>
            <strong>Grundsätze zur Nutzung des Zertifizierungszeichens</strong>
            <small>Markennutzung öffnen →</small>
          </Link>
          <Link href="/verfahren">
            <span>BESCHWERDEN & EINSPRÜCHE</span>
            <strong>Verfahren für Beschwerden, Einsprüche und Zeichenmissbrauch</strong>
            <small>Verfahren öffnen →</small>
          </Link>
        </div>
      </section>

      <section className="shell transparencyIntegrity">
        <strong>Unabhängigkeit nur dort behaupten, wo sie organisatorisch besteht.</strong>
        <p>
          Die endgültige organisatorische und rechtliche Struktur ist noch nicht eingerichtet.
          Made by Humans behauptet deshalb derzeit weder Akkreditierung noch eine bereits bestehende unabhängige externe Entscheidungsinstanz.
        </p>
      </section>

      <SiteFooter />
    </main>
  );
}
