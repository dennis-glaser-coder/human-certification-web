import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../../lib/seo';

export const metadata = {
  title: 'Was bedeutet handgemacht? | Made by Human',
  description: 'Was „handgemacht“ über ein Produkt aussagt – und warum für eine nachvollziehbare Zertifizierung der tatsächliche Herstellungsprozess entscheidend ist.',
  alternates: { canonical: canonical('/wissen/was-bedeutet-handgemacht') },
  openGraph: { title: 'Was bedeutet handgemacht? | Made by Human', description: 'Handgemacht verständlich erklärt: Begriff, Herstellungsprozess und Nachweis.', url: canonical('/wissen/was-bedeutet-handgemacht'), images: [SOCIAL_IMAGE] },
};

export default function Page() {
  const articleJsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'Was bedeutet handgemacht?',
    mainEntityOfPage: canonical('/wissen/was-bedeutet-handgemacht'),
    publisher: { '@id': canonical('/') + '#organization' },
    inLanguage: 'de-DE',
  };
  return (
    <main className="whyPage">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <section className="whyHero"><div className="shell whyHeroGrid"><div className="whyHeroCopy"><p className="premiumEyebrow">WISSEN · HANDGEMACHT</p><div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div><h1>Was bedeutet „handgemacht“?</h1><p className="whyHeroLead">Der Begriff vermittelt, dass Menschen an der Herstellung beteiligt waren. Wie groß dieser Anteil tatsächlich ist, lässt sich aus dem Wort allein aber nicht ablesen. Für Made by Human zählt deshalb der konkrete Herstellungsprozess.</p></div></div></section>
      <section className="whyManufacturers"><div className="shell"><div className="whySectionHead"><div><p className="premiumSectionLabel">DER ENTSCHEIDENDE UNTERSCHIED</p><h2>Nicht das Etikett, sondern die Herstellung.</h2></div><p>Ein Produkt kann als handgemacht beschrieben werden, obwohl einzelne Schritte maschinell unterstützt werden. Umgekehrt sagt eine rein maschinelle Oberfläche wenig darüber aus, wie viel menschliche Arbeit tatsächlich im Produkt steckt.</p></div><div className="whyBenefitGrid"><article><strong>Produktprägende Schritte</strong><p>Relevant ist, welche Arbeitsschritte Form, Funktion, Oberfläche oder Charakter des fertigen Produkts wesentlich bestimmen.</p></article><article><strong>Rolle des Menschen</strong><p>Wir betrachten, ob Menschen diese wesentlichen Schritte tatsächlich ausführen, steuern und Entscheidungen im Prozess treffen.</p></article><article><strong>Nachvollziehbarkeit</strong><p>Produktionsorte, externe Fertigung und geeignete Nachweise machen die Aussage zur Herstellung überprüfbar.</p></article></div></div></section>
      <section className="whyCustomers"><div className="shell whyCustomersGrid"><div className="whyCustomersIntro"><p className="premiumSectionLabel premiumSectionLabelLight">MADE BY HUMAN</p><h2>„Handgemacht“ wird bei uns nicht einfach übernommen.</h2></div><div className="whyCustomerList"><article><span>01</span><div><strong>Produkt festlegen</strong><p>Wir bestimmen, welches konkrete Produkt oder welche Produktfamilie geprüft wird.</p></div></article><article><span>02</span><div><strong>Herstellung verstehen</strong><p>Die wesentlichen menschlichen und maschinellen Arbeitsschritte werden erfasst.</p></div></article><article><span>03</span><div><strong>Nachweise prüfen</strong><p>Die Aussage wird mit geeigneten Informationen und Belegen zum tatsächlichen Prozess verbunden.</p></div></article></div></div></section>
      <section className="salesFinalCta whyFinalCta"><div className="shell salesFinalCtaGrid"><div><p className="premiumSectionLabel premiumSectionLabelLight">WEITERLESEN</p><h2>Wie viel Maschine ist bei Handarbeit möglich?</h2></div><div><p>Maschinen schließen menschliche Herstellung nicht automatisch aus. Entscheidend ist ihre Rolle im Prozess.</p><Link className="salesFinalButton" href="/wissen/handarbeit-mit-maschinen">Maschinen & Handarbeit</Link><Link className="salesFinalText" href="/handarbeit-siegel">Mehr zum Handarbeit-Siegel →</Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
