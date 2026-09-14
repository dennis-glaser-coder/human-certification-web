import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Beschwerden, Einsprüche & Zeichenmissbrauch',
  description: 'Verfahrensregeln für Beschwerden, Einsprüche gegen Zertifizierungsentscheidungen und Zeichenmissbrauch bei Made by Human.',
  alternates: { canonical: canonical('/verfahren') },
  openGraph: { type: 'website', locale: 'de_DE', siteName: 'Made by Human', title: 'Beschwerden, Einsprüche & Zeichenmissbrauch | Made by Human', description: 'Verfahrensregeln für Beschwerden, Einsprüche gegen Zertifizierungsentscheidungen und Zeichenmissbrauch bei Made by Human.', url: canonical('/verfahren'), images: [SOCIAL_IMAGE] },
};

const procedures = [
  { type: 'BESCHWERDE', title: 'Beschwerde über System, Prüfung oder Kommunikation', copy: 'Eine Beschwerde betrifft zum Beispiel Durchführung, Kommunikation oder Funktionsweise des Zertifizierungssystems.', steps: ['Eingang dokumentieren', 'Zuständigkeit und mögliche Interessenkonflikte prüfen', 'Sachverhalt und Belege bewerten', 'Maßnahme und Abschluss dokumentieren'] },
  { type: 'EINSPRUCH', title: 'Einspruch gegen eine Zertifizierungsentscheidung', copy: 'Ein Einspruch richtet sich gegen eine konkrete Entscheidung, zum Beispiel Ablehnung, Aussetzung oder Widerruf.', steps: ['Entscheidung und Begründung erfassen', 'Beteiligte Rollen und mögliche Interessenkonflikte prüfen', 'Entscheidungsgrundlage erneut bewerten', 'Ergebnis und Begründung dokumentieren'] },
  { type: 'ZEICHENMISSBRAUCH', title: 'Unberechtigte oder irreführende Zeichennutzung', copy: 'Zeichenmissbrauch liegt vor, wenn das Zeichen ohne Berechtigung, für nicht zertifizierte Produkte, bei nicht aktivem Status oder mit einer weitergehenden Aussage genutzt wird.', steps: ['Meldung und Belege sichern', 'Register- und Nutzungsstatus prüfen', 'Korrektur oder Entfernung verlangen', 'Erforderliche Folgemaßnahmen dokumentieren'] },
];

const recordFields = [
  ['Vorgangsart', 'Beschwerde, Einspruch oder Zeichenmissbrauch'],
  ['Sachverhalt', 'Betroffene Zertifizierung, Vorwurf oder Anliegen und vorhandene Belege'],
  ['Zuständigkeit', 'Bearbeitende Person oder Funktion und festgestellte Interessenkonflikte'],
  ['Entscheidung', 'Ergebnis, Begründung und gegebenenfalls erforderliche Maßnahmen'],
  ['Abschluss', 'Abschluss des Verfahrens und mögliche Auswirkungen auf Zertifizierungsstatus oder Zeichennutzung'],
];

export default function ProceduresPage() {
  return (
    <main className="procedureInstitution">
      <SiteHeader />
      <section className="pageHero shell"><div className="eyebrow">VERFAHRENSREGELN · MBH-GOV-1.0</div><h1>Beschwerden, Einsprüche und Zeichenmissbrauch klar trennen.</h1><p className="lead">Jedes Anliegen wird dem passenden Verfahren zugeordnet, dokumentiert, auf mögliche Interessenkonflikte geprüft und mit einem nachvollziehbaren Ergebnis abgeschlossen.</p></section>

      <section className="procedureMetaBand"><div className="shell procedureMetaGrid"><div><strong>Richtig eingeordnet</strong><p>Zuerst wird geklärt, um welche Art von Anliegen es geht.</p></div><div><strong>Festgehalten</strong><p>Sachverhalt, Belege und Bewertung werden dokumentiert.</p></div><div><strong>Klare Zuständigkeit</strong><p>Es wird festgehalten, wer den Vorgang bearbeitet.</p></div><div><strong>Mit Abschluss</strong><p>Ergebnis und mögliche Maßnahmen werden festgehalten.</p></div></div></section>

      <section className="shell procedureSection"><div className="sectionIntro compact"><div><div className="sectionNo">DREI VERFAHREN</div><h2>Je nach Anliegen gilt ein anderes Verfahren.</h2></div><p>Beschwerden, Einsprüche und Zeichenmissbrauch werden nicht in einem einzigen unklaren Verfahren vermischt.</p></div><div className="procedureGrid">{procedures.map((procedure) => <article key={procedure.type}><span>{procedure.type}</span><h2>{procedure.title}</h2><p>{procedure.copy}</p><ol>{procedure.steps.map((step) => <li key={step}>{step}</li>)}</ol></article>)}</div></section>

      <section className="procedureIntegrity"><div className="shell procedureIntegrityGrid"><div><div className="sectionNo light">INTERESSENKONFLIKTE</div><h2>Zuständigkeiten müssen nachvollziehbar bleiben.</h2></div><div><p>Mögliche wirtschaftliche, personelle oder gesellschaftsrechtliche Verbindungen werden im jeweiligen Vorgang dokumentiert. Von einer externen oder unabhängigen Entscheidung sprechen wir nur, wenn diese Unabhängigkeit tatsächlich besteht und belegt werden kann.</p></div></div></section>

      <section className="procedureRecord"><div className="shell procedureRecordGrid"><div><div className="sectionNo">DOKUMENTATION</div><h2>Diese fünf Punkte halten wir zu jedem Vorgang fest.</h2></div><div className="procedureRecordList">{recordFields.map(([title, copy]) => <article key={title}><div><strong>{title}</strong><p>{copy}</p></div></article>)}</div></div></section>

      <section className="shell standardClose"><p>Verfahrensregeln Version 1.0 · Stand 14.09.2026. Änderungen werden mit einer neuen Fassung dokumentiert.</p><div className="standardCloseLinks"><Link className="textLink" href="/dokumente">Dokumentenregister →</Link><Link className="textLink" href="/dokumente/certification-scheme-1-0">Zertifizierungsschema 1.0 →</Link></div></section>
      <SiteFooter />
    </main>
  );
}
