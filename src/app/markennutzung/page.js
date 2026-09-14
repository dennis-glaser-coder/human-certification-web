import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Regeln zur Markennutzung',
  description: 'Regeln dafür, wie das Made by Human Zeichen auf Produkten, Verpackungen und in der Kommunikation verwendet werden darf.',
  alternates: { canonical: canonical('/markennutzung') },
  openGraph: { type: 'website', locale: 'de_DE', siteName: 'Made by Human', title: 'Regeln zur Markennutzung | Made by Human', description: 'Regeln dafür, wie das Made by Human Zeichen auf Produkten, Verpackungen und in der Kommunikation verwendet werden darf.', url: canonical('/markennutzung'), images: [SOCIAL_IMAGE] },
};

const rules = [
  ['Nur für zertifizierte Produkte', 'Das Zeichen darf nur für Produkte oder Produktfamilien verwendet werden, die im Register tatsächlich als aktiv zertifiziert geführt werden.'],
  ['Kein Unternehmens-Siegel', 'Die Verwendung darf nicht den Eindruck erwecken, das gesamte Unternehmen oder nicht erfasste Produkte seien zertifiziert.'],
  ['Aussage nicht erweitern', 'Die zertifizierte Aussage darf nicht mit zusätzlichen ungeprüften Eigenschaften vermischt oder inhaltlich erweitert werden.'],
  ['ID und Register gehören dazu', 'Zertifizierungs-ID und Registereintrag müssen eindeutig zur Kennzeichnung gehören.'],
  ['Nur bei aktivem Status', 'Ist die Zertifizierung ausgesetzt, abgelaufen oder widerrufen, darf das Zeichen für das betroffene Produkt nicht weiter genutzt werden.'],
  ['Nur das zertifizierte Produkt bewerben', 'In Webshop, Anzeigen und Verkaufsunterlagen muss klar sein, welches Produkt tatsächlich zertifiziert ist.'],
];

const useCases = [
  ['Produkt', 'Zeichen direkt am zertifizierten Produkt, wenn die Zuordnung eindeutig bleibt.'],
  ['Verpackung', 'Kennzeichnung auf der Verpackung des zertifizierten Produkts mit eindeutigem Bezug zum Registerdatensatz.'],
  ['Produktseite', 'Verwendung in Webshop oder Produktdetailseite, wenn das zertifizierte Produkt klar bezeichnet ist.'],
  ['Verkaufsunterlagen', 'Nutzung in Datenblättern, Katalogen oder Präsentationen ausschließlich für zertifizierte Produkte.'],
];

const prohibited = [
  ['Unternehmensweite Aussage', 'Keine pauschale Darstellung, nach der ein gesamtes Unternehmen oder Sortiment zertifiziert sei.'],
  ['Nicht zertifizierte Produkte', 'Das Zeichen darf nicht auf Produkte übertragen werden, die nicht zertifiziert sind.'],
  ['Nicht aktiver Status', 'Keine Nutzung bei ausgesetzter, abgelaufener oder widerrufener Zertifizierung.'],
  ['Keine ungeprüften Zusatzversprechen', 'Das Zeichen darf nicht mit Aussagen zu Nachhaltigkeit, Herkunft, Qualität oder anderen ungeprüften Eigenschaften verbunden werden.'],
];

export default function MarkUsePage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';
  return (
    <main className="markUseInstitution">
      <SiteHeader />
      <section className="pageHero shell"><div className="eyebrow">MARKENNUTZUNG · MBH-MARK-1.0</div><BrandTrace compact /><h1>Das Zeichen bleibt an Produkt, Status und Register gebunden.</h1><p className="lead">Das Made by Human Zeichen darf nicht frei für Marketing genutzt werden. Es gehört immer zu einem konkret zertifizierten Produkt, einem aktiven Status und dem passenden Registereintrag.</p><div className="markUseMasterLogo"><img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="Made by Human Logo" /></div></section>

      <section className="markUseMetaBand"><div className="shell markUseMetaGrid"><div><strong>Konkretes Produkt</strong><p>Das Zeichen gilt nur für den zertifizierten Umfang.</p></div><div><strong>Aktiver Status</strong><p>Das Zeichen darf nur bei aktiver Zertifizierung genutzt werden.</p></div><div><strong>Mit Registereintrag</strong><p>ID und öffentlicher Eintrag gehören zur Kennzeichnung.</p></div><div><strong>Klare Aussage</strong><p>Keine zusätzlichen Eigenschaften behaupten, die nicht geprüft wurden.</p></div></div></section>

      <section className="markUseRealExample"><div className="shell markUseRealExampleGrid"><figure><img src={assetBase + '/brand/IMG_1037_mbh.webp?v=20260912-spacing'} alt="Beispielhafte Made by Human Kennzeichnung an einem Lederprodukt" loading="lazy" /><figcaption>Beispielhafte Produktkennzeichnung · Visualisierung der Markennutzung</figcaption></figure><div className="markUseRealExampleCopy"><div className="sectionNo">AM PRODUKT</div><h2>Das Zeichen ergänzt die Produktmarke, ohne sie zu ersetzen.</h2><p>Produkt und Herstellermarke bleiben im Vordergrund. Die Kennzeichnung muss eindeutig zum zertifizierten Produkt gehören.</p></div></div></section>

      <section className="shell markUseRules"><div className="sectionIntro compact"><div><div className="sectionNo">GRUNDREGELN</div><h2>Sechs Regeln sorgen dafür, dass das Zeichen eindeutig bleibt.</h2></div><p>Für Käufer und Geschäftspartner muss immer klar bleiben, welches Produkt zertifiziert ist und wofür die Zertifizierung steht.</p></div><div className="markUseRuleGrid">{rules.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div></section>

      <section className="markUseApplications"><div className="shell"><div className="sectionIntro compact"><div><div className="sectionNo">ZULÄSSIGE ANWENDUNG</div><h2>Vier typische Einsatzbereiche.</h2></div><p>Ob Verpackung, Webshop oder Katalog: Entscheidend ist die eindeutige Zuordnung zum zertifizierten Produkt und Registereintrag.</p></div><div className="markUseApplicationGrid">{useCases.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div></div></section>

      <section className="markUseProhibited"><div className="shell markUseProhibitedGrid"><div><div className="sectionNo light">NICHT ZULÄSSIG</div><h2>Das Zeichen darf keine weitergehende Zertifizierung vortäuschen.</h2></div><div className="markUseProhibitedList">{prohibited.map(([title, copy]) => <article key={title}><div><strong>{title}</strong><p>{copy}</p></div></article>)}</div></div></section>

      <section className="shell standardClose"><p>Markennutzungsregeln Version 1.0 · Stand 14.09.2026. Sie gelten zusammen mit dem zertifizierten Umfang, dem öffentlichen Registereintrag und dem aktuellen Zertifizierungsstatus.</p><div className="standardCloseLinks"><Link className="textLink" href="/dokumente">Dokumentenregister →</Link><Link className="textLink" href="/verfahren">Verfahren bei Zeichenmissbrauch →</Link></div></section>
      <SiteFooter />
    </main>
  );
}
