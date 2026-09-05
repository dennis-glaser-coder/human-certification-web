import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { canonical } from '../../lib/seo';

export const metadata = {
  title: 'Über Made by Humans',
  description: 'Zweck, Abgrenzung und Entwicklungsstand des Made by Humans Standards für nachweisbar menschlich gefertigte physische Produkte.',
  alternates: { canonical: canonical('/ueber-uns') },
};

const principles = [
  ['Enger Prüfgegenstand', 'Bewertet wird die definierte Eigenschaft menschlich geprägter Herstellung – nicht pauschal die Qualität oder Moral eines Unternehmens.'],
  ['Öffentliche Verifizierung', 'Eine Kennzeichnung ist über eine eindeutige ID mit einem öffentlichen Zertifizierungsdatensatz verbunden.'],
  ['Versionierter Standard', 'Zertifizierungsentscheidungen lassen sich auf eine eindeutig bezeichnete Standardfassung zurückführen.'],
  ['Nachvollziehbare Zuständigkeiten', 'Prüfung, fachliche Kontrolle, Zertifizierungsentscheidung und Markennutzung werden mit klaren Rollen dokumentiert.'],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">ÜBER MADE BY HUMANS</div>
        <h1>Ein Zertifizierungssystem für eine klar definierte Produkteigenschaft.</h1>
        <p className="lead">
          Made by Humans ist ein branchenübergreifender Standard für physische Produkte,
          deren wesentliche Herstellungsschritte nachweislich von Menschen ausgeführt werden.
        </p>
      </section>

      <section className="aboutPurpose">
        <div className="shell aboutPurposeGrid">
          <div>
            <div className="sectionNo">ZWECK</div>
            <h2>Eine Herstellungsangabe soll überprüfbar werden.</h2>
          </div>
          <div>
            <p>
              Begriffe wie handgefertigt oder menschlich gefertigt werden heute unterschiedlich verwendet.
              Made by Humans bewertet deshalb nicht, ob eine Formulierung sympathisch klingt, sondern ob die zugrunde liegende
              Herstellungsrealität anhand definierter Kriterien und Nachweise überprüft werden kann.
            </p>
            <p>
              Das sichtbare Zeichen ist nur die Kennzeichnung. Der eigentliche Vertrauensmechanismus besteht aus Standard,
              Prüfung, Rückverfolgbarkeit und öffentlichem Register.
            </p>
          </div>
        </div>
      </section>

      <section className="shell aboutPrinciples">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">GRUNDSÄTZE</div>
            <h2>Worauf das System aufgebaut wird.</h2>
          </div>
        </div>
        <div className="aboutPrinciplesGrid">
          {principles.map(([title, copy]) => (
            <article key={title}><strong>{title}</strong><p>{copy}</p></article>
          ))}
        </div>
      </section>

      <section className="aboutStatus">
        <div className="shell aboutStatusGrid">
          <div>
            <div className="sectionNo light">SYSTEMARCHITEKTUR</div>
            <h2>Standard, Prüfung, Register und Markennutzung greifen ineinander.</h2>
          </div>
          <div>
            <p>
              Die Aussage am Produkt ist nur so belastbar wie das System dahinter. Deshalb werden Kriterien,
              Nachweise, Zertifizierungsentscheidung, Statusverwaltung und öffentliche Verifizierung miteinander verknüpft.
            </p>
            <div className="aboutStatusLinks">
              <Link className="textLink lightTextLink" href="/dokumente">Dokumente ansehen →</Link>
              <Link className="textLink lightTextLink" href="/transparenz">Transparenz & Integrität →</Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
