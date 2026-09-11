import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Wissen zu Handarbeit & menschlicher Herstellung',
  description: 'Ratgeber zu Handarbeit, Handmade, handgefertigten Produkten, Maschinen in der Herstellung und nachvollziehbarer Zertifizierung.',
  alternates: { canonical: canonical('/wissen') },
  openGraph: { title: 'Wissen zu Handarbeit & menschlicher Herstellung | Made by Human', description: 'Ratgeber rund um Handarbeit, Handmade und menschliche Herstellung.', url: canonical('/wissen'), images: [SOCIAL_IMAGE] },
};

const articles = [
  ['Was bedeutet „handgemacht“?', '/wissen/was-bedeutet-handgemacht', 'Warum die Bezeichnung allein wenig über den tatsächlichen Herstellungsprozess aussagt und worauf Made by Human stattdessen schaut.'],
  ['Handarbeit mit Maschinen – geht das?', '/wissen/handarbeit-mit-maschinen', 'Warum Maschinen menschliche Herstellung nicht automatisch ausschließen und wo für Made by Human die Grenze liegt.'],
  ['Handmade oder handgefertigt?', '/wissen/handmade-vs-handgefertigt', 'Was die Begriffe im Alltag bedeuten und warum für eine Zertifizierung der konkrete Prozess wichtiger ist als das Wort auf dem Etikett.'],
];

export default function WissenPage() {
  return (
    <main className="whyPage">
      <SiteHeader />
      <section className="whyHero">
        <div className="shell whyHeroGrid">
          <div className="whyHeroCopy">
            <p className="premiumEyebrow">WISSEN & RATGEBER</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Handarbeit und menschliche Herstellung verständlich erklärt.</h1>
            <p className="whyHeroLead">Was bedeutet eigentlich handgemacht? Wie viel Maschine ist erlaubt? Und wie lässt sich eine Aussage zur Herstellung nachvollziehbar belegen? Hier erklären wir die wichtigsten Fragen rund um menschlich geprägte Produktion.</p>
          </div>
        </div>
      </section>

      <section className="whyManufacturers">
        <div className="shell">
          <div className="whySectionHead"><div><p className="premiumSectionLabel">THEMEN</p><h2>Grundlagen rund um Handarbeit und Zertifizierung.</h2></div></div>
          <div className="whyBenefitGrid">
            {articles.map(([title, href, copy]) => (
              <article key={href}><strong>{title}</strong><p>{copy}</p><Link className="desireTextLink" href={href}>Artikel lesen →</Link></article>
            ))}
          </div>
        </div>
      </section>

      <section className="salesFinalCta whyFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div><p className="premiumSectionLabel premiumSectionLabelLight">FÜR HERSTELLER</p><h2>Sie möchten Ihre Herstellung nachvollziehbar belegen?</h2></div>
          <div><p>Made by Human prüft konkrete Produkte und Produktfamilien nach festgelegten Kriterien.</p><Link className="salesFinalButton" href="/handarbeit-zertifizieren">Zertifizierung kennenlernen</Link><Link className="salesFinalText" href="/zertifizierung">Produktarten ansehen →</Link></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
