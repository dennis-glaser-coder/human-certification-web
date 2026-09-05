import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Grundsätze zur Markennutzung',
  description: 'Arbeitsgrundsätze für die zulässige Nutzung des Made by Humans Zertifizierungszeichens auf Produkten, Verpackungen und in der Kommunikation.',
  alternates: { canonical: canonical('/markennutzung') },
};

const rules = [
  ['Nur zertifizierter Umfang', 'Das Zeichen darf nur für Produkte oder Produktfamilien verwendet werden, die vom veröffentlichten Zertifizierungsumfang erfasst sind.'],
  ['Kein Unternehmens-Siegel', 'Die Verwendung darf nicht den Eindruck erwecken, das gesamte Unternehmen oder nicht erfasste Produkte seien zertifiziert.'],
  ['Aussage nicht verändern', 'Die zertifizierte Aussage darf nicht erweitert, relativiert oder mit zusätzlichen ungeprüften Eigenschaften vermischt werden.'],
  ['Registerbezug erhalten', 'Zertifizierungs-ID und öffentlicher Registerbezug müssen der Kennzeichnung eindeutig zugeordnet bleiben.'],
  ['Status ist bindend', 'Bei Aussetzung, Ablauf oder Widerruf endet oder ruht die Berechtigung zur Zeichennutzung für den betroffenen Zertifizierungsumfang.'],
  ['Werbung muss eindeutig bleiben', 'In Webshop, Produktseiten, Anzeigen und Verkaufsunterlagen muss klar erkennbar sein, welches konkrete Produkt zertifiziert ist.'],
];

export default function MarkUsePage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">MARKENNUTZUNG · MBH-MARK-0.1</div>
        <h1>Grundsätze zur Nutzung des Zertifizierungszeichens.</h1>
        <p className="lead">
          Das Zeichen ist kein frei verwendbares Marketingelement. Seine Nutzung ist an einen definierten Zertifizierungsumfang,
          einen gültigen Status und einen öffentlichen Registereintrag gebunden sein.
        </p>
      </section>

            <section className="shell markUseSection">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">GRUNDREGELN</div>
            <h2>Die Kennzeichnung bleibt an Produkt, Zertifizierungsumfang und Status gebunden.</h2>
          </div>
        </div>

        <div className="markUseGrid">
          {rules.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="markUseContexts">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">ZULÄSSIGE KONTEXTE</div>
              <h2>Produkt, Verpackung und produktbezogene Kommunikation.</h2>
            </div>
            <p>
              Die konkrete Freigabe bezieht sich immer auf den jeweiligen Zertifizierungsumfang.
              Eine Nutzung auf allgemeinen Unternehmensmaterialien darf nicht zu einer weitergehenden Zertifizierungsaussage führen.
            </p>
          </div>
          <div className="contextList">
            <span>Produktkennzeichnung</span>
            <span>Produktverpackung</span>
            <span>Produktseite / Webshop</span>
            <span>produktbezogene Verkaufsunterlagen</span>
          </div>
        </div>
      </section>

      <section className="shell standardClose">
        <p>
          Die Markennutzungsgrundsätze werden versioniert geführt und mit dem jeweils freigegebenen Zertifizierungszeichen verknüpft.
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
