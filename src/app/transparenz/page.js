import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const principles = [
  ['Standardversionen', 'Jede Zertifizierung soll eindeutig auf die zugrunde liegende Standardfassung verweisen. Änderungen am Regelwerk bleiben dadurch zeitlich nachvollziehbar.'],
  ['Prüfnachweise', 'Die Bewertung eines Produkts soll auf dokumentierten Informationen und nachvollziehbaren Prüfunterlagen beruhen.'],
  ['Review und Entscheidung', 'Prüfung, fachliches Review und Zertifizierungsentscheidung sollen mit klaren Zuständigkeiten dokumentiert werden.'],
  ['Statusänderungen', 'Aktiv, ausgesetzt, abgelaufen oder widerrufen: Änderungen am Zertifizierungsstatus sollen im öffentlichen Register nachvollziehbar bleiben.'],
  ['Markennutzung', 'Für die Nutzung des Zeichens werden verbindliche Regeln vorgesehen. Veränderungen des Zeichens oder irreführende Aussagen sollen unzulässig sein.'],
  ['Beschwerden und Einsprüche', 'Für den kommerziellen Betrieb werden dokumentierte Verfahren für Beschwerden, Einsprüche und möglichen Zeichenmissbrauch vorgesehen.'],
];

const roles = [
  ['Scheme-Inhaber', 'verantwortet Standard, Marke, Register und die Regeln des Zertifizierungssystems.'],
  ['Prüfung', 'bewertet Herstellungsprozess und Nachweise gegen die festgelegten Anforderungen.'],
  ['Zertifizierungsentscheidung', 'überführt die Prüfergebnisse in eine dokumentierte Entscheidung zum Zertifizierungsstatus.'],
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
              Das System soll jedoch so aufgebaut sein, dass Standardverantwortung und Prüfrollen klar voneinander unterscheidbar sind.
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

      <SiteFooter />
    </main>
  );
}
