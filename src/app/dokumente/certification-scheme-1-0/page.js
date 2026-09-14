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
  ['Zertifizierungsentscheidung', 'entscheidet über Freigabe, Ablehnung, Aussetzung, Verlängerung oder Widerruf und wird bei regulären Zertifizierungen nicht von der Person getroffen, die die maßgebliche Vor-Ort-Prüfung durchgeführt hat.'],
  ['Öffentliches Register', 'veröffentlicht Zertifizierungsumfang, Standardversion, Gültigkeit und aktuellen Status.'],
];

const steps = [
  ['Anfrage & Umfang', 'Produkt oder Produktfamilie, Produktionsorte und wesentliche Fremdfertigung festlegen.'],
  ['Herstellung erfassen', 'Wesentliche Herstellungsschritte und Automatisierungsgrad erfassen.'],
  ['Nachweise & Vor-Ort-Prüfung', 'Unterlagen und Angaben mit der tatsächlichen Produktion abgleichen.'],
  ['Bewertung', 'Alle anwendbaren Muss-Kriterien des Standards bewerten.'],
  ['Fachprüfung', 'Prüfergebnis kontrollieren und offene Punkte klären.'],
  ['Entscheidung & Register', 'Entscheidung dokumentieren und bei Freigabe einer regulären Zertifizierung den aktiven Status veröffentlichen.'],
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

        <section><h2>Rollen und Trennung der Entscheidung</h2><div className="schemeRoleGrid">{roles.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div><div className="documentNotice">Prüfung, fachliche Kontrolle und Zertifizierungsentscheidung sind getrennte Rollen. Bei einer regulären Zertifizierung trifft die Person, die die maßgebliche Vor-Ort-Prüfung durchgeführt hat, nicht allein die Zertifizierungsentscheidung. Von Akkreditierung sprechen wir nur, wenn sie tatsächlich besteht und belegt werden kann.</div></section>

        <section><h2>Kompetenz der beteiligten Personen</h2><p>Prüfung, Fachprüfung und Entscheidung werden Personen zugewiesen, deren Kenntnisse und Erfahrung für den jeweiligen Produkt- und Herstellungsprozess ausreichend sind. Wenn für einen Fall spezielles Fachwissen erforderlich ist, wird zusätzliche interne oder externe Fachkompetenz einbezogen und dokumentiert.</p></section>

        <section><h2>Prüf- und Entscheidungsprozess</h2><div className="schemeProcessGrid">{steps.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div></section>

        <section><h2>Bestehensregel</h2><p>Eine positive Zertifizierungsentscheidung ist nur möglich, wenn der Zertifizierungsumfang eindeutig festgelegt ist, alle für diesen Umfang anwendbaren Muss-Kriterien des Standards erfüllt sind, keine Ausschlussbedingung vorliegt und die Bewertung ausreichend belegt ist.</p></section>

        <section><h2>Gültigkeit und Verlängerung</h2><p>Eine positive Zertifizierung gilt grundsätzlich zwölf Monate ab Ausstellungsdatum. Vor einer Verlängerung erfolgt eine erneute Bewertung. Art und Umfang richten sich nach Änderungen, dem bisherigen Prüfverlauf und offenen Feststellungen. Ein vollständiges Vor-Ort-Audit ist nicht automatisch jährlich erforderlich, kann aber verlangt werden.</p></section>

        <section><h2>Änderungen und Überwachung</h2><p>Wesentliche Änderungen an Produkt, Herstellungsschritten, Automatisierungsgrad, Produktionsorten, Fremdfertigung oder Zertifizierungsumfang müssen unverzüglich gemeldet werden. Made by Human bewertet die Auswirkungen und entscheidet über Fortbestand, Nachprüfung, Erweiterung oder Aussetzung.</p></section>

        <section><h2>Status regulärer Zertifizierungen</h2><div className="controlledDefinitionList"><div><strong>Aktiv</strong><p>innerhalb des veröffentlichten Umfangs und Zeitraums gültig.</p></div><div><strong>Ausgesetzt</strong><p>Zeichennutzung bis zur Klärung vorübergehend nicht zulässig.</p></div><div><strong>Abgelaufen</strong><p>Gültigkeitszeitraum beendet und nicht verlängert.</p></div><div><strong>Widerrufen</strong><p>Zertifizierung beendet; Zeichennutzung für den betroffenen Umfang nicht mehr zulässig.</p></div></div></section>

        <section><h2>Verbundene Pilotprüfungen</h2><p>Ist der Anbieter eines Produkts mit dem Systeminhaber identisch oder steht er unter gemeinsamer rechtlicher oder wirtschaftlicher Kontrolle, wird keine reguläre Made by Human Zertifizierung erteilt. Der Standard kann in diesem Fall als Pilotprüfung zur Erprobung und Validierung des Prüfprozesses angewendet werden. Ein solcher Registereintrag erhält den Status „Pilotprüfung“, legt die Verbindung offen, ist keine unabhängige Drittprüfung und berechtigt nicht zur Nutzung des Zertifizierungszeichens.</p></section>

        <section><h2>Öffentliches Register und Markennutzung</h2><p>Bei regulären Zertifizierungen zeigt der Registereintrag mindestens Zertifizierungs-ID, Hersteller, Produkt oder Produktfamilie, Standardversion, Status, Gültigkeit und den festgelegten Umfang. Pilotprüfungen werden eindeutig als solche gekennzeichnet. Das Zertifizierungszeichen darf nur bei aktivem Status einer regulären Zertifizierung und ausschließlich für den zertifizierten Umfang verwendet werden.</p></section>

        <section><h2>Beschwerden, Einsprüche und Zeichenmissbrauch</h2><p>Beschwerden, Einsprüche gegen Zertifizierungsentscheidungen und unberechtigte Zeichennutzung werden getrennt erfasst, auf mögliche Interessenkonflikte geprüft, bewertet und mit Ergebnis dokumentiert. Ein Einspruch gegen eine Zertifizierungsentscheidung wird nicht allein von der Person abschließend beurteilt, die die angefochtene Entscheidung getroffen hat.</p><div className="inlineDocLinks"><Link href="/markennutzung">Markennutzungsregeln →</Link><Link href="/verfahren">Verfahrensregeln →</Link><Link href="/transparenz">Transparenz & Integrität →</Link></div></section>

        <section><h2>Versionen</h2><p>Version 1.0 ist die erste verbindliche Fassung für reale Zertifizierungen. Die frühere Fassung 0.1 bleibt als historische Vorabfassung öffentlich auffindbar.</p></section>
      </article>
      <SiteFooter />
    </main>
  );
}
