import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Handmade oder handgefertigt? | Made by Human',
  description: 'Handmade, handgemacht und handgefertigt werden oft ähnlich verwendet. Für eine Zertifizierung ist der tatsächliche Herstellungsprozess entscheidender als der Begriff.',
  alternates: { canonical: canonical('/wissen/handmade-vs-handgefertigt') },
  openGraph: { title: 'Handmade oder handgefertigt? | Made by Human', description: 'Warum der Herstellungsprozess wichtiger ist als das Wort auf dem Etikett.', url: canonical('/wissen/handmade-vs-handgefertigt'), images: [SOCIAL_IMAGE] },
};

export default function Page() {
  const articleJsonLd = { '@context': 'https://schema.org', '@type': 'Article', headline: 'Handmade oder handgefertigt?', mainEntityOfPage: canonical('/wissen/handmade-vs-handgefertigt'), publisher: { '@id': canonical('/') + '#organization' }, inLanguage: 'de-DE' };
  return (
    <main className="whyPage">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <section className="whyHero"><div className="shell whyHeroGrid"><div className="whyHeroCopy"><p className="premiumEyebrow">WISSEN · HANDMADE</p><div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div><h1>Handmade, handgemacht oder handgefertigt?</h1><p className="whyHeroLead">Die Begriffe werden im Alltag häufig ähnlich verwendet. Sie vermitteln menschliche Arbeit, sagen aber für sich allein noch nicht, welche Schritte tatsächlich von Menschen ausgeführt wurden.</p></div></div></section>
      <section className="whyManufacturers"><div className="shell"><div className="whySectionHead"><div><p className="premiumSectionLabel">BEGRIFFE</p><h2>Drei Wörter – aber keine Prozessbeschreibung.</h2></div><p>Ob auf einem Produkt „Handmade“, „handgemacht“ oder „handgefertigt“ steht, beantwortet noch nicht, wie der konkrete Herstellungsprozess aufgebaut ist.</p></div><div className="whyBenefitGrid"><article><strong>Handmade</strong><p>Die englische Bezeichnung wird häufig international und im Onlinehandel verwendet.</p></article><article><strong>Handgemacht</strong><p>Der deutsche Begriff betont ebenfalls die Beteiligung menschlicher Arbeit, ohne den Umfang automatisch festzulegen.</p></article><article><strong>Handgefertigt</strong><p>Auch dieser Begriff beschreibt eine menschlich geprägte Herstellung, ersetzt aber keine nachvollziehbare Dokumentation des Prozesses.</p></article></div></div></section>
      <section className="whyCustomers"><div className="shell whyCustomersGrid"><div className="whyCustomersIntro"><p className="premiumSectionLabel premiumSectionLabelLight">FÜR MADE BY HUMAN</p><h2>Der Begriff ist zweitrangig. Der Prozess ist entscheidend.</h2></div><div className="whyCustomerList"><article><span>01</span><div><strong>Was wird zertifiziert?</strong><p>Ein konkretes Produkt oder eine klar abgegrenzte Produktfamilie.</p></div></article><article><span>02</span><div><strong>Was wird betrachtet?</strong><p>Die wesentlichen produktprägenden Herstellungsschritte und die Rolle von Mensch und Maschine.</p></div></article><article><span>03</span><div><strong>Was macht es nachvollziehbar?</strong><p>Produktionsorte, Prozessinformationen, geeignete Nachweise und ein öffentlicher Registereintrag.</p></div></article></div></div></section>
      <section className="salesFinalCta whyFinalCta"><div className="shell salesFinalCtaGrid"><div><p className="premiumSectionLabel premiumSectionLabelLight">MEHR ERFAHREN</p><h2>Von der Aussage zum nachvollziehbaren Nachweis.</h2></div><div><p>Made by Human verbindet die Aussage über menschliche Herstellung mit einem definierten Zertifizierungsumfang.</p><Link className="salesFinalButton" href="/handarbeit-siegel">Handarbeit-Siegel ansehen</Link><Link className="salesFinalText" href="/wissen/was-bedeutet-handgemacht">Was bedeutet handgemacht? →</Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
