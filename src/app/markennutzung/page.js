import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Regeln zur Markennutzung',
  description: 'Regeln für die zulässige Nutzung des Made by Humans Zertifizierungszeichens auf Produkten, Verpackungen und in produktbezogener Kommunikation.',
  alternates: { canonical: canonical('/markennutzung') },
};

const rules = [
  ['Nur zertifizierter Umfang', 'Das Zeichen darf nur für Produkte oder Produktfamilien verwendet werden, die vom veröffentlichten Zertifizierungsumfang erfasst sind.'],
  ['Kein Unternehmens-Siegel', 'Die Verwendung darf nicht den Eindruck erwecken, das gesamte Unternehmen oder nicht erfasste Produkte seien zertifiziert.'],
  ['Aussage nicht erweitern', 'Die zertifizierte Aussage darf nicht mit zusätzlichen ungeprüften Eigenschaften vermischt oder inhaltlich erweitert werden.'],
  ['Registerbezug erhalten', 'Zertifizierungs-ID und öffentlicher Registerbezug müssen der Kennzeichnung eindeutig zugeordnet bleiben.'],
  ['Status ist bindend', 'Bei Aussetzung, Ablauf oder Widerruf endet oder ruht die Berechtigung zur Zeichennutzung für den betroffenen Zertifizierungsumfang.'],
  ['Werbung bleibt produktbezogen', 'In Webshop, Produktseiten, Anzeigen und Verkaufsunterlagen muss klar erkennbar sein, welches konkrete Produkt zertifiziert ist.'],
];

const useCases = [
  ['Produkt', 'Zeichen direkt am zertifizierten Produkt, sofern Gestaltung und Produktbezug eindeutig bleiben.'],
  ['Verpackung', 'Kennzeichnung auf der Verpackung des zertifizierten Produkts mit eindeutigem Bezug zum Registerdatensatz.'],
  ['Produktseite', 'Verwendung in Webshop oder Produktdetailseite, wenn das zertifizierte Produkt klar bezeichnet ist.'],
  ['Verkaufsunterlagen', 'Nutzung in Datenblättern, Katalogen oder Präsentationen ausschließlich für den zertifizierten Produktumfang.'],
];

const prohibited = [
  ['Unternehmensweite Aussage', 'Keine pauschale Darstellung, nach der ein gesamtes Unternehmen oder Sortiment zertifiziert sei.'],
  ['Nicht zertifizierte Produkte', 'Keine Übertragung des Zeichens auf Produkte außerhalb des freigegebenen Zertifizierungsumfangs.'],
  ['Abgelaufener Status', 'Keine fortgesetzte Nutzung, wenn die Zertifizierung abgelaufen, ausgesetzt oder widerrufen ist.'],
  ['Ungeprüfte Zusatzclaims', 'Keine Verbindung des Zeichens mit Aussagen zu Nachhaltigkeit, Herkunft, Qualität oder anderen ungeprüften Eigenschaften.'],
];

export default function MarkUsePage() {
  return (
    <main className="markUseInstitution">
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">MARKENNUTZUNG · MBH-MARK-0.1</div>
        <h1>Das Zeichen bleibt an Produkt, Status und Register gebunden.</h1>
        <p className="lead">
          Das Made by Humans Zertifizierungszeichen ist kein frei verwendbares Marketingelement.
          Seine Nutzung ist an einen definierten Zertifizierungsumfang, einen gültigen Status
          und einen eindeutig zugeordneten öffentlichen Registereintrag gebunden.
        </p>
      </section>

      <section className="markUseMetaBand" aria-label="Grundlagen der Markennutzung">
        <div className="shell markUseMetaGrid">
          <div><span>01</span><strong>Produktfokus</strong><p>Zeichen nur für den zertifizierten Umfang.</p></div>
          <div><span>02</span><strong>Statusgebunden</strong><p>Nutzung nur bei gültigem Zertifizierungsstatus.</p></div>
          <div><span>03</span><strong>Registerbezug</strong><p>ID und öffentlicher Datensatz bleiben zugeordnet.</p></div>
          <div><span>04</span><strong>Aussageklarheit</strong><p>Keine Erweiterung um ungeprüfte Eigenschaften.</p></div>
        </div>
      </section>

      <section className="shell markUseRules">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">GRUNDREGELN</div>
            <h2>Sechs Regeln schützen die Aussage des Zeichens.</h2>
          </div>
          <p>
            Die Kennzeichnung darf nur so verwendet werden, dass für Käufer und Geschäftspartner
            jederzeit erkennbar bleibt, welches Produkt mit welcher Aussage zertifiziert wurde.
          </p>
        </div>

        <div className="markUseRuleGrid">
          {rules.map(([title, copy], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="markUseApplications">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">ZULÄSSIGE ANWENDUNG</div>
              <h2>Vier typische Einsatzbereiche.</h2>
            </div>
            <p>
              Entscheidend ist nicht das Medium, sondern der eindeutige Bezug zum zertifizierten Produkt
              und zum veröffentlichten Zertifizierungsdatensatz.
            </p>
          </div>

          <div className="markUseApplicationGrid">
            {useCases.map(([title, copy]) => (
              <article key={title}><strong>{title}</strong><p>{copy}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="markUseProhibited">
        <div className="shell markUseProhibitedGrid">
          <div>
            <div className="sectionNo light">NICHT ZULÄSSIG</div>
            <h2>Das Zeichen darf keine weitergehende Zertifizierung vortäuschen.</h2>
          </div>
          <div className="markUseProhibitedList">
            {prohibited.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><strong>{title}</strong><p>{copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell standardClose">
        <p>
          Die Markennutzungsregeln werden versioniert geführt und mit dem jeweils freigegebenen Zertifizierungszeichen verknüpft.
        </p>
        <div className="standardCloseLinks">
          <Link className="textLink" href="/dokumente">Dokumentenregister →</Link>
          <Link className="textLink" href="/verfahren">Verfahren bei Zeichenmissbrauch →</Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
