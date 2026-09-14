import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Zertifizierungsschema 1.0',
  description: 'Regelwerk für Antrag, Prüfung, Entscheidung, Gültigkeit, Überwachung, Register und Markennutzung bei Made by Human.',
  alternates: { canonical: canonical('/dokumente/certification-scheme-1-0') },
  openGraph: { type: 'website', locale: 'de_DE', siteName: 'Made by Human', title: 'Zertifizierungsschema 1.0 | Made by Human', description: 'Regelwerk für Antrag, Prüfung, Entscheidung, Gültigkeit, Überwachung, Register und Markennutzung.', url: canonical('/dokumente/certification-scheme-1-0'), images: [SOCIAL_IMAGE] },
};

const roles = [
  ['Systeminhaber', 'verantwortet Standard, Marke, Dokumente, Register und die Regeln des Zertifizierungssystems.'],
  ['Prüfung', 'prüft Produkt und Herstellungsprozess anhand der geltenden Anforderungen und hält Feststellungen und Belege fest.'],
  ['Fachprüfung', 'kontrolliert Vollständigkeit und fachliche Schlüssigkeit des Prüfergebnisses und klärt offene Punkte.'],
  ['Zertifizierungsentscheidung', 'entscheidet über Freigabe, Ablehnung, Aussetzung, Verlängerung oder Widerruf.'],
  ['Öffentliches Register', 'veröffentlicht Zertifizierungsumfang, Standardversion, Gültigkeit und aktuellen Status.'],
];

const steps = [
  ['Anfrage & Umfang', 'Produkt oder Produktfamilie, Produktionsorte und wesentliche Fremdfertigung festlegen.'],
  ['Herstellung erfassen', 'Wesentliche Herstellungsschritte und Automatisierungsgrad erfassen.'],
  ['Nachweise & Vor-Ort-Prüfung', 'Unterlagen und Angaben mit der tatsächlichen Produktion abgleichen.'],
  ['Bewertung', 'Alle anwendbaren Muss-Kriterien des Standards bewerten.'],
  ['Fachprüfung', 'Prüfergebnis kontrollieren und offene Punkte klären.'],
  ['Entscheidung & Register', 'Entscheidung dokumentieren und bei Freigabe den aktiven Status veröffentlichen.'],
];

export default function SchemeDocumentPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';
  return (
    <main>
      <SiteHeader />
      <article className="shell controlledDocument">
        <header className="controlledDocumentHeader">
          <div><span>ZERTIFIZIERUNGSSCHEMA · MBH-SCH-1.0</span><h1>Zertifizierungsschema 1.0</h1><p>Regelwerk für die Anwendung von Made by Human Standard 1.0.</p></div>
          <dl><div><dt>Version</dt><dd>1.0</dd></div><div><dt>Stand</dt><dd>14.09.2026</dd></div><div><dt>Bezug</dt><dd>Standard 1.0</dd></div></dl>
        </header>

        <div className="controlledDocumentActions"><a className="button primary" href={assetBase + '/documents/made-by-human-certification-scheme-1-0.pdf'}>PDF herunterladen</a><Link className="button secondary" href="/dokumente">Dokumentenregister</Link></div>

        <section><h2>Zweck</h2><p>Der Produktstandard legt die Anforderungen an die menschliche Herstellung fest. Dieses Zertifizierungsschema beschreibt, wie Antrag, Festlegung des Zertifizierungsumfangs, Prüfung, fachliche Kontrolle, Entscheidung, Gültigkeit, Änderungen, Verlängerung, Register und Zeichennutzung ablaufen.</p></section>

        <section><h2>Rollen</h2><div className="schemeRoleGrid">{roles.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div><div className="documentNotice">Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung sind getrennte Rollen. Von Akkreditierung oder externer Unabhängigkeit sprechen wir nur, wenn diese Eigenschaft tatsächlich besteht und belegt werden kann.</div></section>

        <section><h2>Prüf- und Entscheidungsprozess</h2><div className="schemeProcessGrid">{steps.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div></section>

        <section><h2>Bestehensregel</h2><p>Eine positive Zertifizierungsentscheidung ist nur möglich, wenn der Zertifizierungsumfang eindeutig festgelegt ist, alle für diesen Umfang anwendbaren Muss-Kriterien des Standards erfüllt sind, keine Ausschlussbedingung vorliegt und die Bewertung ausreichend belegt ist.</p></section>

        <section><h2>Gültigkeit und Verlängerung</h2><p>Eine positive Zertifizierung gilt grundsätzlich zwölf Monate ab Ausstellungsdatum. Vor einer Verlängerung erfolgt eine erneute Bewertung. Art und Umfang richten sich nach Änderungen, dem bisherigen Prüfverlauf und offenen Feststellungen. Ein vollständiges Vor-Ort-Audit ist nicht automatisch jährlich erforderlich, kann aber verlangt werden.</p></section>

        <section><h2>Änderungen und Überwachung</h2><p>Wesentliche Änderungen an Produkt, Herstellungsschritten, Automatisierungsgrad, Produktionsorten, Fremdfertigung oder Zertifizierungsumfang müssen unverzüglich gemeldet werden. Made by Human bewertet die Auswirkungen und entscheidet über Fortbestand, Nachprüfung, Erweiterung oder Aussetzung.</p></section>

        <section><h2>Zertifizierungsstatus</h2><div className="controlledDefinitionList"><div><strong>Aktiv</strong><p>innerhalb des veröffentlichten Umfangs und Zeitraums gültig.</p></div><div><strong>Ausgesetzt</strong><p>Zeichennutzung bis zur Klärung vorübergehend nicht zulässig.</p></div><div><strong>Abgelaufen</strong><p>Gültigkeitszeitraum beendet und nicht verlängert.</p></div><div><strong>Widerrufen</strong><p>Zertifizierung beendet; Zeichennutzung für den betroffenen Umfang nicht mehr zulässig.</p></div></div></section>

        <section><h2>Verbundene Unternehmen und Interessenkonflikte</h2><p>Gesellschaftsrechtliche, wirtschaftliche oder personelle Verbindungen zwischen Systeminhaber, beteiligten Personen und Antragsteller werden dokumentiert. Besteht eine Verbindung zum Systeminhaber, wird sie im öffentlichen Zertifizierungsdatensatz offengelegt. Solche Fälle werden nicht als unabhängige Drittzertifizierung oder als „unabhängig zertifiziert“ bezeichnet. Soweit organisatorisch möglich, werden Prüfung, fachliche Kontrolle und Entscheidung personell getrennt.</p></section>

        <section><h2>Öffentliches Register und Markennutzung</h2><p>Der Registereintrag zeigt mindestens Zertifizierungs-ID, Hersteller, Produkt oder Produktfamilie, Standardversion, Status, Gültigkeit und den festgelegten Umfang. Das Zeichen darf nur bei aktivem Status und ausschließlich für diesen Umfang verwendet werden.</p></section>

        <section><h2>Beschwerden, Einsprüche und Zeichenmissbrauch</h2><p>Beschwerden, Einsprüche gegen Zertifizierungsentscheidungen und unberechtigte Zeichennutzung werden getrennt erfasst, auf mögliche Interessenkonflikte geprüft, bewertet und mit Ergebnis dokumentiert.</p><div className="inlineDocLinks"><Link href="/markennutzung">Markennutzungsregeln →</Link><Link href="/verfahren">Verfahrensregeln →</Link><Link href="/transparenz">Transparenz & Integrität →</Link></div></section>

        <section><h2>Versionen</h2><p>Version 1.0 ist die erste verbindliche Fassung für reale Zertifizierungen. Die frühere Fassung 0.1 bleibt als historische Vorabfassung öffentlich auffindbar.</p></section>
      </article>
      <SiteFooter />
    </main>
  );
}
