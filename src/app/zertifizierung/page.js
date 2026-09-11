import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Zertifizierung für handgemachte Produkte | Made by Human',
  description: 'Made by Human zertifiziert nachweisbar menschlich hergestellte Produkte. Informationen und branchenspezifische Hinweise für Schmuck, Holz, Möbel, Textilien, Lederwaren und Keramik.',
  alternates: { canonical: canonical('/zertifizierung') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Made by Human',
    title: 'Zertifizierung für handgemachte Produkte | Made by Human',
    description: 'Produktbezogene Zertifizierung für menschlich geprägte Herstellung – mit klaren Kriterien und öffentlichem Register.',
    url: canonical('/zertifizierung'),
    images: [SOCIAL_IMAGE],
  },
};

const industries = [
  ['Schmuck', '/zertifizierung/schmuck', 'Zertifizierung für Schmuck, Goldschmiedearbeiten, handgefertigte Accessoires und vergleichbare Produkte.'],
  ['Holz & Möbel', '/zertifizierung/holz-moebel', 'Für Möbel, Holzprodukte, Tischlerarbeiten und Produkte mit wesentlichen menschlichen Bearbeitungsschritten.'],
  ['Textilien', '/zertifizierung/textilien', 'Für Bekleidung, textile Produkte und Fertigung mit menschlich ausgeführten Näh-, Strick-, Montage- oder Veredelungsschritten.'],
  ['Lederwaren', '/zertifizierung/lederwaren', 'Für Taschen, Kleinlederwaren und andere Produkte mit menschlich geprägtem Zuschnitt, Nähen, Fügen und Finish.'],
  ['Keramik', '/zertifizierung/keramik', 'Für Keramik, Gefäße, Dekorationsprodukte und weitere Waren mit menschlicher Formgebung und Bearbeitung.'],
];

export default function CertificationHubPage() {
  return (
    <main className="whyPage">
      <SiteHeader />

      <section className="whyHero">
        <div className="shell whyHeroGrid">
          <div className="whyHeroCopy">
            <p className="premiumEyebrow">ZERTIFIZIERUNG NACH PRODUKTART</p>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Menschliche Herstellung produktbezogen zertifizieren.</h1>
            <p className="whyHeroLead">Made by Human richtet sich an Hersteller physischer Produkte, bei denen menschliche Arbeit die wesentlichen Herstellungsschritte prägt. Die Prüfung wird immer auf das konkrete Produkt oder eine klar abgegrenzte Produktfamilie bezogen.</p>
            <div className="whyHeroActions">
              <Link className="salesPrimary" href="/fuer-hersteller#zertifizierungsanfrage">Zertifizierung anfragen</Link>
              <Link className="salesSecondary" href="/handarbeit-zertifizieren">Ablauf ansehen</Link>
            </div>
          </div>
          <div className="whyHeroVisual">
            <div className="whySealTag" style={{ position: 'relative', inset: 'auto', maxWidth: '100%' }}>
              <div>
                <span>PRODUKTARTEN</span>
                <strong>Schmuck · Holz · Möbel · Textilien · Leder · Keramik</strong>
                <p>Weitere Produktgruppen können nach Herstellungsprozess geprüft werden.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="whyManufacturers">
        <div className="shell">
          <div className="whySectionHead">
            <div>
              <p className="premiumSectionLabel">BRANCHEN & PRODUKTGRUPPEN</p>
              <h2>Welche Herstellung möchten Sie sichtbar machen?</h2>
            </div>
            <p>Die folgenden Seiten erklären branchenspezifisch, welche Arbeitsschritte und Nachweise bei der Prüfung typischerweise relevant sind.</p>
          </div>
          <div className="whyBenefitGrid">
            {industries.map(([name, href, copy]) => (
              <article key={name}>
                <strong>{name}</strong>
                <p>{copy}</p>
                <Link className="desireTextLink" href={href}>Mehr zu {name} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="whyCustomers">
        <div className="shell whyCustomersGrid">
          <div className="whyCustomersIntro">
            <p className="premiumSectionLabel premiumSectionLabelLight">GRUNDSATZ</p>
            <h2>Nicht die Branche entscheidet, sondern der tatsächliche Prozess.</h2>
          </div>
          <div className="whyCustomerList">
            <article><span>01</span><div><strong>Produkt klar abgrenzen</strong><p>Festgelegt wird, welches Produkt oder welche Produktfamilie Gegenstand der Zertifizierung ist.</p></div></article>
            <article><span>02</span><div><strong>Wesentliche Schritte bestimmen</strong><p>Geprüft wird, welche Arbeitsschritte Form, Funktion, Oberfläche oder Charakter des Produkts prägen.</p></div></article>
            <article><span>03</span><div><strong>Herstellung belegen</strong><p>Produktionsorte, externe Fertigung und geeignete Nachweise werden nachvollziehbar dokumentiert.</p></div></article>
          </div>
        </div>
      </section>

      <section className="salesFinalCta whyFinalCta">
        <div className="shell salesFinalCtaGrid">
          <div><p className="premiumSectionLabel premiumSectionLabelLight">IHR PRODUKT FEHLT?</p><h2>Auch andere physische Produkte können zum Standard passen.</h2></div>
          <div><p>Entscheidend ist, dass die wesentlichen Herstellungsschritte nachvollziehbar menschlich geprägt sind. In der ersten Einschätzung klären wir den möglichen Zertifizierungsumfang.</p><Link className="salesFinalButton" href="/fuer-hersteller#zertifizierungsanfrage">Produkt anfragen</Link></div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
