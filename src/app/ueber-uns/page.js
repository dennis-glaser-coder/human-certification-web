import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Über Made by Human',
  description: 'Warum Made by Human entstanden ist und wie wir menschliche Herstellung sichtbar und überprüfbar machen.',
  alternates: { canonical: canonical('/ueber-uns') },
};

const principles = [
  ['Klare Grenze', 'Wir prüfen die menschliche Herstellung eines Produkts – nicht pauschal die Qualität oder Haltung eines Unternehmens.'],
  ['Produktbezug', 'Die zertifizierte Aussage bezieht sich auf ein eindeutig abgegrenztes Produkt oder eine klar definierte Produktfamilie.'],
  ['Fester Standard', 'Jede Entscheidung bezieht sich auf die Standardfassung, nach der geprüft wurde.'],
  ['Öffentlich prüfbar', 'Über eine eindeutige ID führt das Zeichen zum passenden öffentlichen Registereintrag.'],
];

const architecture = [
  ['01', 'Standard', 'Definiert Geltungsbereich, Kriterien, Nachweise und Entscheidungsregeln.'],
  ['02', 'Prüfung', 'Bewertet den konkreten Herstellungsprozess gegen die anwendbaren Anforderungen.'],
  ['03', 'Entscheidung', 'Dokumentiert das Prüfergebnis und den daraus folgenden Zertifizierungsstatus.'],
  ['04', 'Register', 'Macht Produktbezug, Standardfassung, Status und Gültigkeit öffentlich nachvollziehbar.'],
  ['05', 'Markennutzung', 'Bindet das Zeichen an freigegebenen Zertifizierungsumfang und gültigen Status.'],
];

export default function AboutPage() {
  return (
    <main className="aboutInstitution">
      <SiteHeader />

      <section className="pageHero shell aboutStoryHero">
        <div className="eyebrow">ÜBER MADE BY HUMAN</div>
        <BrandTrace compact />
        <h1>Menschliche Arbeit verdient einen überprüfbaren Nachweis.</h1>
        <p className="lead">
          Wir haben Made by Human aus einer einfachen Beobachtung heraus entwickelt: Je stärker Produktion,
          Gestaltung und Vermarktung automatisiert werden, desto schwerer wird von außen erkennbar,
          wo Menschen ein Produkt tatsächlich noch wesentlich prägen.
        </p>
      </section>

      <section className="aboutOrigin">
        <div className="shell aboutOriginGrid">
          <div className="aboutOriginStatement">
            <div className="sectionNo light">DIE IDEE</div>
            <h2>Menschliche Arbeit ist ein Unterschied – aber nur, wenn er nachvollziehbar ist.</h2>
          </div>

          <div className="aboutOriginStory">
            <p>
              Automatisierung, moderne Maschinen und künstliche Intelligenz verändern, wie Produkte entstehen.
              Das ist kein Widerspruch zu Made by Human: Technologie kann sinnvoll unterstützen.
              Gleichzeitig wird für Käufer schwerer erkennbar, wo menschliche Arbeit ein Produkt tatsächlich wesentlich prägt.
            </p>
            <p>
              Begriffe wie „handgemacht“ oder „manufakturgefertigt“ schaffen zwar ein bestimmtes Bild,
              sagen aber oft wenig darüber aus, wie ein Produkt wirklich hergestellt wurde.
              Genau diese Lücke wollen wir schließen: Aus einer Behauptung wird ein nachvollziehbarer, geprüfter Produktbezug.
            </p>

            <div className="aboutOriginThesis compact">
              <span>NICHT GEGEN TECHNOLOGIE.</span>
              <strong>Für Sichtbarkeit dort, wo menschliche Arbeit wesentlich ist.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutMetaBand" aria-label="Grundprinzipien von Made by Human">
        <div className="shell aboutMetaGrid">
          <div><strong>Produktfokus</strong><p>Geprüft wird ein klar abgegrenztes physisches Produkt.</p></div>
          <div><strong>Klare Aussage</strong><p>Bewertet wird ausschließlich die menschliche Herstellung.</p></div>
          <div><strong>Nachweise</strong><p>Die Herstellung muss sich mit geeigneten Informationen und Belegen prüfen lassen.</p></div>
          <div><strong>Verifizierung</strong><p>Zertifizierungsstatus und Standardfassung bleiben nachvollziehbar.</p></div>
        </div>
      </section>

      <section className="aboutPurpose">
        <div className="shell aboutPurposeGrid">
          <div>
            <div className="sectionNo">VON DER BEHAUPTUNG ZUM BELEG</div>
            <h2>Eine glaubwürdige Aussage beginnt bei der tatsächlichen Herstellung.</h2>
          </div>
          <div>
            <p>
              Wir setzen deshalb nicht bei einer Werbeformulierung an, sondern bei der realen Produktion:
              Welche wesentlichen, produktprägenden Schritte werden tatsächlich durch Menschen ausgeführt,
              welche Technik unterstützt dabei und wie lässt sich das nachvollziehbar belegen?
            </p>
            <p>
              Das sichtbare Zeichen ist nur die Kennzeichnung. Der Vertrauensmechanismus dahinter besteht aus
              Standard, Prüfung, dokumentierter Entscheidung, öffentlichem Register und geregelter Markennutzung.
            </p>
          </div>
        </div>
      </section>

      <section className="shell aboutPrinciples">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">GRUNDSÄTZE</div>
            <h2>Was wir bewusst leisten – und was nicht.</h2>
          </div>
          <p>
            Die Aussage bleibt bewusst eng. Sie soll für Käufer, Hersteller und Geschäftspartner verständlich,
            überprüfbar und auf den tatsächlichen Zertifizierungsumfang begrenzt sein.
          </p>
        </div>

        <div className="aboutPrinciplesGrid">
          {principles.map(([title, copy]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="aboutArchitecture">
        <div className="shell">
          <div className="sectionIntro compact aboutArchitectureIntro">
            <div>
              <div className="sectionNo light">SO FUNKTIONIERT DAS SYSTEM</div>
              <h2>Fünf Bausteine gehören zusammen.</h2>
            </div>
            <p>
              Glaubwürdigkeit entsteht nicht durch das Zeichen allein, sondern dadurch,
              dass Kriterien, Prüfung, Entscheidung und öffentlicher Status miteinander verbunden bleiben.
            </p>
          </div>

          <div className="aboutArchitectureGrid">
            {architecture.map(([, title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <div className="aboutArchitectureLinks">
            <Link href="/standard">Standard ansehen →</Link>
            <Link href="/dokumente">Dokumente öffnen →</Link>
            <Link href="/transparenz">Transparenz & Integrität →</Link>
          </div>
        </div>
      </section>

      <section className="aboutBoundaries">
        <div className="shell aboutBoundariesGrid">
          <div>
            <div className="sectionNo">ABGRENZUNG</div>
            <h2>Made by Human ersetzt keine anderen Produktaussagen.</h2>
          </div>
          <p>
            Wir treffen keine Aussage zu Herkunftsland, Nachhaltigkeit, Bio-, Fairtrade-,
            Qualitäts- oder Sicherheitsmerkmalen, sofern diese nicht ausdrücklich Gegenstand eines anderen Nachweises sind.
            Die Zertifizierung bleibt auf die definierte Aussage zur menschlichen Herstellung begrenzt.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
