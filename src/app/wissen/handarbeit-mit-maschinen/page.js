import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Handarbeit mit Maschinen – geht das? | Made by Human',
  description: 'Maschinen schließen Handarbeit nicht automatisch aus. Entscheidend ist, welche produktprägenden Schritte Menschen tatsächlich ausführen.',
  alternates: { canonical: canonical('/wissen/handarbeit-mit-maschinen') },
  openGraph: { title: 'Handarbeit mit Maschinen – geht das? | Made by Human', description: 'Wie Made by Human die Rolle von Mensch und Maschine in der Herstellung bewertet.', url: canonical('/wissen/handarbeit-mit-maschinen'), images: [SOCIAL_IMAGE] },
};

export default function Page() {
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Handarbeit mit Maschinen – geht das?', mainEntityOfPage: canonical('/wissen/handarbeit-mit-maschinen'), publisher: { '@id': canonical('/') + '#organization' }, inLanguage: 'de-DE' };
  return (
    <main className="whyPage">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <section className="whyHero"><div className="shell whyHeroGrid"><div className="whyHeroCopy"><p className="premiumEyebrow">WISSEN · MENSCH & MASCHINE</p><div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div><h1>Darf bei Handarbeit eine Maschine eingesetzt werden?</h1><p className="whyHeroLead">Ja. Für Made by Human ist nicht entscheidend, ob überhaupt Maschinen eingesetzt werden. Entscheidend ist, ob Menschen die wesentlichen produktprägenden Herstellungsschritte tatsächlich ausführen.</p></div></div></section>
      <section className="whyManufacturers"><div className="shell"><div className="whySectionHead"><div><p className="premiumSectionLabel">UNTERSTÜTZUNG ODER AUTOMATION?</p><h2>Die Rolle der Maschine macht den Unterschied.</h2></div><p>Eine Nähmaschine, Bandsäge, Drehbank oder Poliermaschine kann menschliche Arbeit unterstützen. Kritisch wird es dort, wo ein Produkt in den wesentlichen Schritten weitgehend autonom entsteht und Menschen nur noch einen automatisierten Ablauf überwachen.</p></div><div className="whyBenefitGrid"><article><strong>Mensch führt den Schritt aus</strong><p>Der Mensch positioniert, führt, bearbeitet oder steuert das Werkstück unmittelbar und beeinflusst das Ergebnis während des Prozesses.</p></article><article><strong>Mensch trifft Entscheidungen</strong><p>Erfahrung, Beurteilung und Entscheidungen wirken sich auf Form, Oberfläche, Verbindung oder andere wesentliche Eigenschaften aus.</p></article><article><strong>Automation wird abgegrenzt</strong><p>Wir dokumentieren, welche Schritte automatisiert ablaufen und ob sie für das fertige Produkt wesentlich sind.</p></article></div></div></section>
      <section className="whyCustomers"><div className="shell whyCustomersGrid"><div className="whyCustomersIntro"><p className="premiumSectionLabel premiumSectionLabelLight">BEISPIELE</p><h2>Maschineneinsatz ist nicht automatisch ein Ausschluss.</h2></div><div className="whyCustomerList"><article><span>01</span><div><strong>Nähen</strong><p>Eine Person führt Material und Naht aktiv an der Maschine und bestimmt den Arbeitsschritt unmittelbar.</p></div></article><article><span>02</span><div><strong>Holzbearbeitung</strong><p>Maschinen unterstützen Zuschnitt oder Bearbeitung, während Menschen Werkstück, Ablauf und Ergebnis aktiv führen.</p></div></article><article><span>03</span><div><strong>Weitgehende Automation</strong><p>Wenn wesentliche Schritte selbsttätig ablaufen und menschliche Tätigkeit sich auf Starten oder Überwachen beschränkt, muss der Zertifizierungsumfang besonders kritisch geprüft werden.</p></div></article></div></div></section>
      <section className="salesFinalCta whyFinalCta"><div className="shell salesFinalCtaGrid"><div><p className="premiumSectionLabel premiumSectionLabelLight">STANDARD</p><h2>Entscheidend ist immer der konkrete Prozess.</h2></div><div><p>Die Bewertung erfolgt produktbezogen und berücksichtigt die wesentlichen Herstellungsschritte.</p><Link className="salesFinalButton" href="/standard">Standard ansehen</Link><Link className="salesFinalText" href="/handarbeit-zertifizieren">Zertifizierung kennenlernen →</Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
