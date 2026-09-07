import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Zertifizierungsschema 0.1',
  description: 'Regelwerk für Rollen, Prüfprozess, Zertifizierungsentscheidung, Statusänderungen, öffentliches Register und Verfahrensregeln bei Made by Human.',
  alternates: { canonical: canonical('/dokumente/certification-scheme-0-1') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Made by Human',
    title: 'Zertifizierungsschema 0.1 | Made by Human',
    description: 'Regelwerk für Rollen, Prüfprozess, Zertifizierungsentscheidung, Statusänderungen, öffentliches Register und Verfahrensregeln bei Made by Human.',
    url: canonical('/dokumente/certification-scheme-0-1'),
    images: [SOCIAL_IMAGE],
  },
};

const roles = [
  ['Systeminhaber', 'verantwortet Standard, Marke, Dokumente, Register und die Regeln des Zertifizierungssystems.'],
  ['Prüfung', 'prüft Produkt und Herstellungsprozess anhand der geltenden Anforderungen und hält die Belege fest.'],
  ['Fachprüfung', 'prüft, ob das Prüfergebnis vollständig und fachlich schlüssig ist, und klärt offene Punkte.'],
  ['Zertifizierungsentscheidung', 'trifft auf Grundlage des geprüften Ergebnisses die Entscheidung über Freigabe, Ablehnung, Aussetzung, Erneuerung oder Widerruf.'],
  ['Öffentliches Register', 'veröffentlicht die Informationen, die Käufer und Geschäftspartner zur Zertifizierung prüfen können, sowie den aktuellen Status.'],
];

const steps = [
  ['Was wird zertifiziert?', 'Produkt, Produktfamilie und Produktionsorte festlegen.'],
  ['Herstellung erfassen', 'Die wichtigen Herstellungsschritte und externe Fertigung erfassen.'],
  ['Nachweise', 'Unterlagen und Informationen zur tatsächlichen Herstellung prüfen.'],
  ['Prüfung', 'Herstellungsprozess anhand der Kriterien des Standards bewerten.'],
  ['Fachprüfung', 'Prüfergebnis fachlich kontrollieren und offene Punkte klären.'],
  ['Entscheidung', 'Über die Zertifizierung entscheiden und bei Freigabe den Status registrieren.'],
];

export default function SchemeDocumentPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main>
      <SiteHeader />

      <article className="shell controlledDocument">
        <header className="controlledDocumentHeader">
          <div>
            <span>ZERTIFIZIERUNGSSCHEMA · MBH-SCH-0.1</span>
            <h1>Zertifizierungsschema 0.1</h1>
            <p>Regelwerk für die Funktionsweise des Zertifizierungssystems.</p>
          </div>
          <dl>
            <div><dt>Version</dt><dd>0.1</dd></div>
            <div><dt>Stand</dt><dd>04.09.2026</dd></div>
            <div><dt>Bezug</dt><dd>Standard 0.1</dd></div>
          </dl>
        </header>

        <div className="controlledDocumentActions">
          <a className="button primary" href={assetBase + '/documents/made-by-human-certification-scheme-0-1.pdf'}>PDF herunterladen</a>
          <Link className="button secondary" href="/dokumente">Dokumentenregister</Link>
        </div>

        <section>
          <h2>Zweck</h2>
          <p>
            Der Produktstandard legt die Kriterien fest. Das Zertifizierungsschema beschreibt,
            wie Antrag, Prüfung, fachliche Kontrolle, Entscheidung, Register, Statusänderungen und Markennutzung ablaufen.
          </p>
        </section>

        <section>
          <h2>Rollen</h2>
          <div className="schemeRoleGrid">
            {roles.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}
          </div>
          <div className="documentNotice">
            Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung sind getrennte Rollen.
            Von Akkreditierung oder externer Unabhängigkeit sprechen wir nur, wenn sie tatsächlich besteht und belegt werden kann.
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
            <div><strong>Widerrufen</strong><p>Zertifizierung beendet; das Zeichen darf für das betroffene Produkt nicht weiter genutzt werden.</p></div>
          </div>
        </section>

        <section>
          <h2>Weitere Regeln</h2>
          <p>
            Für Markennutzung, Beschwerden, Einsprüche, Zeichenmissbrauch und mögliche Interessenkonflikte gibt es eigene Regeln mit festen Zuständigkeiten und Versionsstand.
          </p>
          <div className="inlineDocLinks">
            <Link href="/markennutzung">Markennutzungsgrundsätze →</Link>
            <Link href="/verfahren">Beschwerden, Einsprüche & Zeichenmissbrauch →</Link>
            <Link href="/transparenz">Transparenz & Integrität →</Link>
          </div>
        </section>

        <section>
          <h2>Versionen & Änderungen</h2>
          <p>
            Dokument-ID, Version und Datum zeigen, welche Fassung gilt. Änderungen an Rollen, Prüfablauf, Status oder Verfahrensregeln werden in einer neuen Version festgehalten.
          </p>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
