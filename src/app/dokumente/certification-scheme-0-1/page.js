import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical } from '../../../lib/seo';

export const metadata = {
  title: 'Certification Scheme 0.1',
  description: 'Arbeitsfassung für Rollen, Prüfprozess, Zertifizierungsentscheidung, Statusverwaltung, Public Register und Governance bei Made by Humans.',
  alternates: { canonical: canonical('/dokumente/certification-scheme-0-1') },
};

const roles = [
  ['Scheme-Inhaber', 'verantwortet Standard, Marke, Dokumentenlenkung, Registermodell und Regeln des Zertifizierungssystems.'],
  ['Prüfung / Audit', 'bewertet Produkt und Herstellungsprozess gegen die anwendbaren Anforderungen und dokumentiert die Nachweise.'],
  ['Review', 'prüft Vollständigkeit und fachliche Plausibilität des Prüfergebnisses und dokumentiert offene Punkte.'],
  ['Zertifizierungsentscheidung', 'überführt das geprüfte Ergebnis in eine dokumentierte Entscheidung über Freigabe, Ablehnung, Aussetzung, Erneuerung oder Widerruf.'],
  ['Public Register', 'veröffentlicht die für Käufer und Geschäftspartner relevanten Zertifizierungsinformationen und den aktuellen Status.'],
];

const steps = [
  ['Scope', 'Produkt, Produktfamilie und Herstellungsorte abgrenzen.'],
  ['Prozessaufnahme', 'Wesentliche Herstellungsschritte und Fremdfertigung erfassen.'],
  ['Nachweise', 'Unterlagen und Informationen zur tatsächlichen Ausführung prüfen.'],
  ['Audit', 'Produktionsfall gegen die Kriterien des Standards bewerten.'],
  ['Review', 'Prüfergebnis fachlich kontrollieren und offene Punkte klären.'],
  ['Entscheidung', 'Zertifizierungsstatus dokumentiert festlegen und bei Freigabe registrieren.'],
];

export default function SchemeDocumentPage() {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';

  return (
    <main>
      <SiteHeader />

      <article className="shell controlledDocument">
        <header className="controlledDocumentHeader">
          <div>
            <span>CERTIFICATION SCHEME · MBH-SCH-0.1</span>
            <h1>Certification Scheme 0.1</h1>
            <p>Arbeitsfassung für die vorgesehene Funktionsweise des Zertifizierungssystems.</p>
          </div>
          <dl>
            <div><dt>Status</dt><dd>Arbeitsfassung · Zielstruktur</dd></div>
            <div><dt>Stand</dt><dd>04.09.2026</dd></div>
            <div><dt>Bezug</dt><dd>Arbeitsstandard 0.1</dd></div>
          </dl>
        </header>

        <div className="controlledDocumentActions">
          <a className="button primary" href={assetBase + '/documents/made-by-humans-certification-scheme-0-1.pdf'}>PDF herunterladen</a>
          <Link className="button secondary" href="/dokumente">Dokumentenregister</Link>
        </div>

        <section>
          <h2>Zweck</h2>
          <p>
            Der Produktstandard beschreibt, welche Eigenschaft erfüllt sein muss. Das Certification Scheme beschreibt getrennt davon,
            wie Antrag, Prüfung, Review, Entscheidung, Register, Statusänderungen und Markennutzung strukturiert werden sollen.
          </p>
        </section>

        <section>
          <h2>Rollen</h2>
          <div className="schemeRoleGrid">
            {roles.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}
          </div>
          <div className="documentNotice">
            Die konkrete organisatorische Trennung und rechtliche Verantwortlichkeit dieser Rollen ist noch nicht final festgelegt.
            Made by Humans behauptet derzeit weder Akkreditierung noch eine bereits eingerichtete unabhängige Zertifizierungsinstanz.
          </div>
        </section>

        <section>
          <h2>Prüf- und Entscheidungsprozess</h2>
          <div className="schemeProcessGrid">
            {steps.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}
          </div>
        </section>

        <section>
          <h2>Zertifizierungsstatus</h2>
          <div className="controlledDefinitionList">
            <div><strong>Aktiv</strong><p>innerhalb des festgelegten Umfangs und Zeitraums gültig.</p></div>
            <div><strong>Ausgesetzt</strong><p>Zeichennutzung vorübergehend eingeschränkt oder untersagt, bis die Ursache geklärt ist.</p></div>
            <div><strong>Abgelaufen</strong><p>Gültigkeitszeitraum beendet und nicht rechtzeitig erneuert.</p></div>
            <div><strong>Widerrufen</strong><p>Zertifizierung beendet; weitere Zeichennutzung für den betroffenen Scope unzulässig.</p></div>
          </div>
        </section>

        <section>
          <h2>Governance</h2>
          <p>
            Markennutzung, Beschwerden, Einsprüche, Zeichenmissbrauch und potenzielle Interessenkonflikte werden in separaten,
            versionierten Regelwerken geführt. Die endgültige organisatorische und rechtliche Ausgestaltung erfolgt vor dem kommerziellen Start.
          </p>
          <div className="inlineDocLinks">
            <Link href="/markennutzung">Markennutzungsgrundsätze →</Link>
            <Link href="/verfahren">Beschwerden, Einsprüche & Zeichenmissbrauch →</Link>
            <Link href="/transparenz">Transparenz & Governance →</Link>
          </div>
        </section>

        <section>
          <h2>Status dieser Fassung</h2>
          <p>
            Version 0.1 ist eine öffentliche Arbeitsfassung zur Strukturierung und Validierung des vorgesehenen Systems.
            Sie begründet keine Akkreditierung und keine öffentliche kommerzielle Zertifizierungsberechtigung.
          </p>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
