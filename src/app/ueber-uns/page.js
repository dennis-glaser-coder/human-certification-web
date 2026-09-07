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
  ['Für ein bestimmtes Produkt', 'Die Zertifizierung gilt für ein klar benanntes Produkt oder eine klar benannte Produktfamilie.'],
  ['Fester Standard', 'Jede Entscheidung bezieht sich auf die Standardfassung, nach der geprüft wurde.'],
  ['Öffentlich prüfbar', 'Über eine eindeutige ID führt das Zeichen zum passenden öffentlichen Registereintrag.'],
];

const architecture = [
  ['01', 'Standard', 'Legt fest, was geprüft wird und welche Kriterien gelten.'],
  ['02', 'Prüfung', 'Prüft den konkreten Herstellungsprozess anhand der geltenden Anforderungen.'],
  ['03', 'Entscheidung', 'Hält das Prüfergebnis und die Entscheidung über den Status fest.'],
  ['04', 'Register', 'Zeigt öffentlich, für welches Produkt die Zertifizierung gilt, nach welchem Standard geprüft wurde und welchen Status sie hat.'],
  ['05', 'Markennutzung', 'Regelt, für welches zertifizierte Produkt und bei welchem Status das Zeichen genutzt werden darf.'],
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
          Immer mehr Schritte in Herstellung und Gestaltung werden automatisiert.
          Dadurch wird schwerer zu erkennen, wo Menschen ein Produkt wirklich prägen.
          Genau dafür gibt es Made by Human.
        </p>
      </section>

      <section className="aboutOrigin">
        <div className="shell aboutOriginGrid">
          <div className="aboutOriginStatement">
            <div className="sectionNo light">DIE IDEE</div>
            <h2>Menschliche Arbeit ist ein Unterschied – wenn man ihn sehen und belegen kann.</h2>
          </div>

          <div className="aboutOriginStory">
            <p>
              Automatisierung, moderne Maschinen und künstliche Intelligenz verändern, wie Produkte entstehen. Das widerspricht Made by Human nicht: Technik darf unterstützen. Entscheidend ist, ob menschliche Arbeit das Produkt weiterhin wesentlich prägt.
            </p>
            <p>
              Begriffe wie „handgemacht“ oder „manufakturgefertigt“ schaffen zwar ein bestimmtes Bild,
              sagen aber oft wenig darüber aus, wie ein Produkt wirklich hergestellt wurde.
              Genau hier setzt Made by Human an: Wir prüfen, was tatsächlich von Menschen gemacht wird, und machen das Ergebnis sichtbar.
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
          <div><strong>Konkretes Produkt</strong><p>Geprüft wird ein klar benanntes physisches Produkt.</p></div>
          <div><strong>Klare Aussage</strong><p>Bewertet wird ausschließlich die menschliche Herstellung.</p></div>
          <div><strong>Nachweise</strong><p>Die Herstellung muss sich mit geeigneten Informationen und Belegen prüfen lassen.</p></div>
          <div><strong>Öffentlich prüfbar</strong><p>Status und Standardfassung können im Register geprüft werden.</p></div>
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
              wo Technik unterstützt und wie sich die menschliche Arbeit belegen lässt?
            </p>
            <p>
              Das Zeichen allein schafft noch kein Vertrauen. Dahinter stehen ein klarer Standard, die Prüfung vor Ort, eine festgehaltene Entscheidung, das öffentliche Register und klare Regeln für die Nutzung.
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
            überprüfbar und auf das tatsächlich zertifizierte Produkt begrenzt sein.
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
            Unsere Zertifizierung bleibt auf die menschliche Herstellung begrenzt.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
