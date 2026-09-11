import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical, SOCIAL_IMAGE } from '../../lib/seo';

export const metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterangaben von Made by Human.',
  alternates: { canonical: canonical('/impressum') },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    siteName: 'Made by Human',
    title: 'Impressum | Made by Human',
    description: 'Impressum und Anbieterangaben von Made by Human.',
    url: canonical('/impressum'),
    images: [SOCIAL_IMAGE],
  },
};

export default function ImpressumPage() {
  return (
    <main className="legalPage">
      <SiteHeader />

      <section className="pageHero shell legalHero">
        <div className="eyebrow">IMPRESSUM</div>
        <h1>Anbieterangaben.</h1>
        <p className="lead">Angaben gemäß § 5 DDG.</p>
      </section>

      <section className="shell legalContent">
        <article className="legalPrimary">
          <span>ANBIETER</span>
          <h2>D&G Handels GmbH</h2>
          <address>
            Hohenloher Weg 44<br />
            33102 Paderborn<br />
            Deutschland
          </address>
        </article>

        <div className="legalGrid">
          <article>
            <span>HANDELSREGISTER</span>
            <dl>
              <div><dt>Registergericht</dt><dd>Amtsgericht Paderborn</dd></div>
              <div><dt>Registernummer</dt><dd>HRB 14807</dd></div>
            </dl>
          </article>

          <article>
            <span>GESCHÄFTSFÜHRER</span>
            <p>
              Nikita Dohrenkamp<br />
              Stephan Gehle
            </p>
          </article>

          <article>
            <span>UMSATZSTEUER-ID</span>
            <p>DE335791582</p>
          </article>

          <article>
            <span>KONTAKT</span>
            <dl>
              <div><dt>E-Mail</dt><dd><a href="mailto:info@madebyhuman.org">info@madebyhuman.org</a></dd></div>
              <div><dt>Telefon</dt><dd><a href="tel:+49525154491922">05251 / 54491922</a></dd></div>
            </dl>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}