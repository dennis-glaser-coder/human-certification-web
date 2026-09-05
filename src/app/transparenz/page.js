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
  ['Standardversionen', 'Jede Zertifizierung verweist eindeutig auf die zugrunde liegende Standardfassung. Änderungen am Regelwerk bleiben dadurch zeitlich nachvollziehbar.'],
  ['Prüfnachweise', 'Die Bewertung eines Produkts beruht auf dokumentierten Informationen und nachvollziehbaren Prüfunterlagen.'],
  ['Fachprüfung und Entscheidung', 'Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung werden mit klaren Zuständigkeiten dokumentiert.'],
  ['Statusänderungen', 'Aktiv, ausgesetzt, abgelaufen oder widerrufen: Änderungen am Zertifizierungsstatus bleiben im öffentlichen Register nachvollziehbar.'],
  ['Markennutzung', 'Die Nutzung des Zeichens ist an Zertifizierungsumfang, Status und öffentliche Verifizierbarkeit gebunden.'],
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
              <div className="sectionNo">ROLLENTRENNUNG</div>
              <h2>Klare Verantwortlichkeiten im Zertifizierungssystem.</h2>
            </div>
            <p>
              Standardverantwortung, Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung sind als klar unterscheidbare Funktionen dokumentiert.
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
