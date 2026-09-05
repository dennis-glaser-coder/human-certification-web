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
  ['Öffentliche Verifizierung', 'Eine Kennzeichnung soll über eine eindeutige ID mit einem öffentlichen Zertifizierungsdatensatz verbunden sein.'],
  ['Versionierter Standard', 'Zertifizierungsentscheidungen sollen immer auf eine eindeutig bezeichnete Standardfassung zurückgeführt werden können.'],
  ['Nachvollziehbare Zuständigkeiten', 'Prüfung, fachliche Kontrolle, Zertifizierungsentscheidung und Markennutzung sollen mit klaren Rollen dokumentiert werden.'],
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">ÜBER MADE BY HUMANS</div>
        <h1>Ein Zertifizierungssystem für eine klar definierte Produkteigenschaft.</h1>
        <p className="lead">
          Made by Humans wird als branchenübergreifender Standard für physische Produkte entwickelt,
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
              Made by Humans soll deshalb nicht bewerten, ob eine Formulierung sympathisch klingt, sondern ob die zugrunde liegende
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
            <div className="sectionNo light">AKTUELLER STAND</div>
            <h2>Standard, Prüfprozess und Registermodell werden derzeit validiert.</h2>
          </div>
          <div>
            <p>
              Eine öffentliche kommerzielle Zertifikatsvergabe ist noch nicht gestartet.
              Vor dem Start werden Rechtsrahmen, Organisations- und Integritätsstruktur, Markennutzungsregeln und Prüfverantwortlichkeiten final festgelegt und veröffentlicht.
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
