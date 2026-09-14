import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Standard 1.0',
  description: 'Version 1.0 des Made by Human Standards für nachweisbar menschliche Herstellung physischer Produkte.',
  alternates: { canonical: canonical('/dokumente/standard-1-0') },
  openGraph: {
    type: 'website', locale: 'de_DE', siteName: 'Made by Human',
    title: 'Standard 1.0 | Made by Human',
    description: 'Version 1.0 des Made by Human Standards für nachweisbar menschliche Herstellung physischer Produkte.',
    url: canonical('/dokumente/standard-1-0'), images: [SOCIAL_IMAGE],
  },
};

const criteria = [
  ['Produktentstehung', 'Durch menschliche Arbeit entsteht aus Materialien oder Komponenten das verkaufsfertige Endprodukt.'],
  ['Menschliche Ausführung', 'Die wesentlichen produktprägenden Herstellungsschritte werden tatsächlich unmittelbar durch Menschen ausgeführt oder in ihrer konkreten Ausführung durch menschliche Entscheidungen bestimmt.'],
  ['Menschliche Prägung', 'Bei den wesentlichen Schritten beeinflussen unmittelbare menschliche Ausführung, Können oder Urteil das Ergebnis. Bloßes Starten, Überwachen oder Entnehmen aus einem ansonsten autonomen Prozess genügt nicht.'],
  ['Automatisierungsgrenze', 'Technik und Maschinen dürfen unterstützen. Eine weitgehend autonome Produktentstehung erfüllt den Standard nicht.'],
  ['Rückverfolgbarkeit', 'Produktionsorte, Zulieferer und wichtige externe Fertigung müssen eindeutig zum zertifizierten Umfang zugeordnet werden können.'],
  ['Nachweisbarkeit', 'Die Angaben zum Herstellungsprozess müssen durch geeignete Informationen, Unterlagen und die Vor-Ort-Prüfung ausreichend belegt sein.'],
];

export default function StandardDocumentPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';

  return (
    <main className="standardDocumentPage">
      <SiteHeader />
      <article className="shell standardDocument">
        <header className="standardDocumentHeader">
          <div><span>MADE BY HUMAN · STANDARD</span><h1>Standard 1.0</h1></div>
          <dl>
            <div><dt>Dokument-ID</dt><dd>MBH-STD-1.0</dd></div>
            <div><dt>Version</dt><dd>1.0</dd></div>
            <div><dt>Stand</dt><dd>14.09.2026</dd></div>
            <div><dt>Geltungsbereich</dt><dd>Aufgenommene physische Produkte</dd></div>
          </dl>
        </header>

        <div className="controlledDocumentActions">
          <a className="button primary" href={assetBase + '/documents/made-by-human-standard-1-0.pdf'}>PDF herunterladen</a>
          <Link className="button secondary" href="/dokumente">Dokumentenregister</Link>
        </div>

        <section><h2>Zweck und Aussagegrenze</h2><p>Der Standard beschreibt, wann menschliche Arbeit ein physisches Produkt so wesentlich prägt und ausreichend belegt ist, dass es mit Made by Human zertifiziert werden kann. Die Zertifizierung bezieht sich ausschließlich auf die menschliche Herstellung innerhalb des festgelegten Zertifizierungsumfangs. Sie ist keine Aussage zu Herkunftsland, Nachhaltigkeit, Bio- oder Fairtrade-Eigenschaften, allgemeiner Produktqualität, Produktsicherheit, gesetzlicher Konformität oder Unternehmensgröße.</p></section>

        <section><h2>Geltungsbereich</h2><p>Geprüft wird ein klar benanntes physisches Produkt oder eine klar benannte Produktfamilie mit den dazugehörigen wesentlichen Herstellungsprozessen, Produktionsorten und relevanter Fremdfertigung. Lebensmittel, Arzneimittel und Medizinprodukte werden in Version 1.0 nicht aufgenommen. Weitere Produktkategorien können vor Annahme eines Antrags ausgeschlossen werden, wenn eine Verwechslungsgefahr mit gesetzlich vorgeschriebenen Sicherheits- oder Konformitätsprüfungen besteht.</p></section>

        <section><h2>Produktfamilien</h2><p>Mehrere Varianten dürfen nur dann in einem Zertifizierungsumfang zusammengefasst werden, wenn ihre wesentlichen produktprägenden Herstellungsschritte, der Automatisierungsgrad, die maßgeblichen Produktionsorte und die relevante Fremdfertigung im Wesentlichen übereinstimmen. Abweichende Herstellungswege müssen gesondert bewertet werden.</p></section>

        <section><h2>Was bedeutet produktprägend?</h2><p>Produktprägend sind Herstellungsschritte, die Form, Konstruktion, Funktion, Oberfläche, individuelle Ausführung oder eine andere wesentliche Eigenschaft des verkaufsfertigen Produkts erzeugen oder wesentlich verändern. Reines Verpacken, Etikettieren, Kommissionieren, Kontrollieren oder ein nur geringfügiges Finish reicht allein nicht aus.</p></section>

        <section><h2>Prüfkriterien</h2><div className="standardDocumentCriteria">{criteria.map(([title, copy]) => <div key={title}><strong>{title}</strong><p>{copy}</p></div>)}</div></section>

        <section><h2>Bestehensregel</h2><p>Eine Zertifizierung wird nur erteilt, wenn alle für den konkreten Zertifizierungsumfang anwendbaren Muss-Kriterien erfüllt sind und keine Ausschlussbedingung vorliegt. Sind die menschlichen Tätigkeiten für die Entstehung des verkaufsfertigen Produkts nur untergeordnet, erfüllt das Produkt den Standard nicht.</p></section>

        <section><h2>Entscheidungsregel</h2><blockquote>Würde ohne die menschlichen Herstellungsschritte bereits im Wesentlichen dasselbe verkaufsfertige Produkt vorliegen?</blockquote><p>Wird diese Frage mit Ja beantwortet und fehlt eine andere wesentliche menschliche Prägung der Produktentstehung, erfüllt das Produkt den Standard nicht.</p></section>

        <section><h2>Nachweise und Vor-Ort-Prüfung</h2><p>Eine reine Selbstauskunft reicht nicht aus. Geeignete Belege können Prozessbeschreibungen, Produktionsunterlagen, Angaben zu Standorten und Fremdfertigung, Bild- und Videonachweise sowie weitere geeignete Unterlagen sein. Die Angaben werden mit einer Vor-Ort-Prüfung des maßgeblichen Herstellungsprozesses abgeglichen. Wesentliche ausgelagerte Schritte werden in die Bewertung einbezogen; bei Bedarf sind zusätzliche Nachweise oder eine Prüfung am externen Produktionsort erforderlich.</p></section>

        <section><h2>Gültigkeit und Verlängerung</h2><p>Eine positive Zertifizierung gilt grundsätzlich zwölf Monate ab Ausstellungsdatum. Vor einer Verlängerung erfolgt eine erneute Bewertung. Art und Umfang richten sich nach Änderungen am Produkt oder Herstellungsprozess, dem bisherigen Prüfverlauf und offenen Feststellungen. Ein vollständiges Vor-Ort-Audit ist nicht automatisch jährlich erforderlich, kann aber verlangt werden.</p></section>

        <section><h2>Änderungen während der Gültigkeit</h2><p>Wesentliche Änderungen an Herstellungsschritten, Automatisierungsgrad, Produktionsorten, Fremdfertigung oder Zertifizierungsumfang müssen Made by Human unverzüglich gemeldet werden. Made by Human entscheidet, ob die Zertifizierung unverändert fortbestehen kann, eine Nachprüfung oder Erweiterung erforderlich ist oder der Status bis zur Klärung ausgesetzt werden muss.</p></section>

        <section><h2>Reguläre Zertifizierung und verbundene Pilotprüfung</h2><p>Eine reguläre Made by Human Zertifizierung wird nicht für Produkte erteilt, deren Anbieter mit dem Systeminhaber identisch ist oder unter gemeinsamer rechtlicher oder wirtschaftlicher Kontrolle steht. In solchen Fällen kann der Standard zu Test- und Validierungszwecken als verbundene Pilotprüfung angewendet werden. Die Verbindung wird öffentlich benannt. Eine Pilotprüfung ist keine reguläre Zertifizierung, wird nicht als unabhängige Drittprüfung dargestellt und berechtigt nicht zur Nutzung des Zertifizierungszeichens.</p></section>

        <section><h2>Status und Markennutzung</h2><p>Nur eine aktive reguläre Zertifizierung berechtigt zur Nutzung des Made by Human Zeichens für den ausdrücklich zertifizierten Umfang. Eine verbundene Pilotprüfung sowie eine ausgesetzte, abgelaufene oder widerrufene Zertifizierung berechtigen nicht zur Zeichennutzung.</p></section>

        <section><h2>Versionen & Änderungen</h2><p>Standardversion, Dokument-ID und Datum werden festgehalten. Änderungen an Geltungsbereich, Kriterien, Beleganforderungen oder Entscheidungsregeln werden versioniert. Version 1.0 ist die erste verbindliche Fassung für reale Zertifizierungen.</p><div className="inlineDocLinks"><Link className="textLink" href="/dokumente">Zur Dokumentenübersicht →</Link><Link className="textLink" href="/dokumente/standard-0-1">Frühere Fassung 0.1 →</Link></div></section>
      </article>
      <SiteFooter />
    </main>
  );
}
