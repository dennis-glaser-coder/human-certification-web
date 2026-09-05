import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Über Made by Humans',
  description: 'Warum Made by Humans entstanden ist: menschliche Herstellung sichtbar und überprüfbar machen – mit klarem Produktbezug, Vor-Ort-Prüfung und öffentlicher Verifizierung.',
  alternates: { canonical: canonical('/ueber-uns') },
};

const principles = [
  ['Enger Prüfgegenstand', 'Bewertet wird die definierte Eigenschaft menschlich geprägter Herstellung – nicht pauschal die Qualität oder Moral eines Unternehmens.'],
  ['Produktbezug', 'Die zertifizierte Aussage bezieht sich auf ein eindeutig abgegrenztes Produkt oder eine klar definierte Produktfamilie.'],
  ['Versionierter Standard', 'Jede Zertifizierungsentscheidung lässt sich auf die angewendete Standardfassung zurückführen.'],
  ['Öffentliche Verifizierung', 'Eine Kennzeichnung ist über eine eindeutige ID mit dem zugehörigen öffentlichen Zertifizierungsdatensatz verbunden.'],
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
        <div className="eyebrow">ÜBER MADE BY HUMANS</div>
        <h1>Warum menschliche Herstellung sichtbar werden muss.</h1>
        <p className="lead">
          Made by Humans ist aus einer einfachen Beobachtung entstanden: Je stärker Produktion,
          Gestaltung und Vermarktung automatisiert werden, desto schwerer wird von außen erkennbar,
          wo Menschen ein Produkt tatsächlich noch wesentlich prägen.
        </p>
      </section>

      <section className="aboutOrigin">
        <div className="shell aboutOriginGrid">
          <div className="aboutOriginStatement">
            <div className="sectionNo light">DIE IDEE</div>
            <h2>Je mehr automatisiert wird, desto wichtiger wird sichtbar, wo Menschen den Unterschied machen.</h2>
          </div>

          <div className="aboutOriginStory">
            <p>
              Automatisierung, moderne Maschinen und künstliche Intelligenz verändern, wie Produkte
              entwickelt, hergestellt und vermarktet werden. Das ist kein Widerspruch zu Made by Humans.
              Technologie kann sinnvoll unterstützen und Prozesse verbessern.
            </p>
            <p>
              Gleichzeitig entsteht eine neue Vertrauenslücke: Begriffe wie „handgemacht“,
              „handcrafted“ oder „manufakturgefertigt“ erzeugen ein bestimmtes Bild – wie viel
              tatsächliche menschliche Arbeit dahintersteht, bleibt für Käufer aber häufig unsichtbar.
            </p>
            <p>
              Genau hier setzt Made by Humans an. Wenn Erfahrung, Können und unmittelbare menschliche
              Arbeit wesentliche Bestandteile eines Produktes sind, soll dieser Unterschied nicht nur
              erzählt, sondern nachvollziehbar geprüft und öffentlich verifizierbar gemacht werden.
            </p>

            <div className="aboutOriginThesis">
              <span>NICHT GEGEN TECHNOLOGIE.</span>
              <strong>Für Sichtbarkeit dort, wo Menschen den Unterschied machen.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutMetaBand" aria-label="Grundprinzipien von Made by Humans">
        <div className="shell aboutMetaGrid">
          <div><strong>Produktfokus</strong><p>Geprüft wird ein klar abgegrenztes physisches Produkt.</p></div>
          <div><strong>Klare Aussage</strong><p>Bewertet wird ausschließlich die menschliche Herstellung.</p></div>
          <div><strong>Nachweise</strong><p>Die Aussage muss anhand geeigneter Informationen prüfbar sein.</p></div>
          <div><strong>Verifizierung</strong><p>Zertifizierungsstatus und Standardfassung bleiben nachvollziehbar.</p></div>
        </div>
      </section>

      <section className="aboutPurpose">
        <div className="shell aboutPurposeGrid">
          <div>
            <div className="sectionNo">VON DER BEHAUPTUNG ZUM NACHWEIS</div>
            <h2>Eine glaubwürdige Aussage beginnt bei der tatsächlichen Herstellung.</h2>
          </div>
          <div>
            <p>
              Made by Humans setzt deshalb nicht bei einer Werbeformulierung an, sondern bei der realen Produktion:
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
            <h2>Was Made by Humans bewusst leistet – und was nicht.</h2>
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
              <div className="sectionNo light">SYSTEMARCHITEKTUR</div>
              <h2>Fünf Bausteine greifen ineinander.</h2>
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
            <h2>Eine Zertifizierung ersetzt keine anderen Produktaussagen.</h2>
          </div>
          <p>
            Made by Humans trifft keine Aussage zu Herkunftsland, Nachhaltigkeit, Bio-, Fairtrade-,
            Qualitäts- oder Sicherheitsmerkmalen, sofern diese nicht ausdrücklich Gegenstand eines anderen Nachweises sind.
            Die Zertifizierung bleibt auf die definierte Aussage zur menschlichen Herstellung begrenzt.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
