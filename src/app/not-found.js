import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="pageHero shell">
        <div className="eyebrow">404 · SEITE NICHT GEFUNDEN</div>
        <h1>Diese Seite ist nicht verfügbar.</h1>
        <p className="lead">
          Der aufgerufene Inhalt wurde nicht gefunden. Über die Startseite, den Standard oder das öffentliche Register
          gelangen Sie direkt zu den zentralen Bereichen von Made by Human.
        </p>
        <div className="actions">
          <Link className="button primary" href="/">Zur Startseite</Link>
          <Link className="button secondary" href="/register">Öffentliches Register</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
