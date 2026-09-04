'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { getSupabaseBrowserClient } from '../../lib/supabase';

const labels = {
  active: 'Aktiv',
  suspended: 'Ausgesetzt',
  expired: 'Abgelaufen',
  revoked: 'Widerrufen',
};

export default function RegisterPage() {
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('Register wird geladen …');

  useEffect(() => {
    async function load() {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setMessage('Die Registeranbindung ist in dieser Vorschau noch nicht konfiguriert.');
        return;
      }

      const { data, error } = await supabase
        .from('certifications')
        .select('public_id,status,issued_at,valid_until,public_note,created_at,products(name,manufacturers(name)),standard_versions(version,title)')
        .order('created_at', { ascending: false });

      if (error) {
        setMessage('Das Register konnte gerade nicht geladen werden.');
        return;
      }

      setRecords(data ?? []);
      setMessage('');
    }

    load();
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return records;
    return records.filter((record) => [
      record.public_id,
      record.products?.name,
      record.products?.manufacturers?.name,
    ].filter(Boolean).some((value) => value.toLowerCase().includes(needle)));
  }, [query, records]);

  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell registerHero">
        <div className="eyebrow">ÖFFENTLICHES ZERTIFIZIERUNGSREGISTER</div>
        <h1>Prüfbar.<br /><em>Auch nach dem Kauf.</em></h1>
        <p className="lead">Das Register macht sichtbar, welches Produkt nach welcher Standardversion zertifiziert wurde und welchen Status die Zertifizierung aktuell hat.</p>
      </section>

      <section className="shell registerSection">
        <div className="registerToolbar">
          <div>
            <span className="sectionNo">REGISTER</span>
            <strong>{records.length} öffentlicher Datensatz{records.length === 1 ? '' : 'e'}</strong>
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ID, Hersteller oder Produkt suchen" aria-label="Register durchsuchen" />
        </div>

        {message && <div className="registerMessage">{message}</div>}

        <div className="registerList">
          {filtered.map((record) => (
            <article className="registerRow" key={record.public_id}>
              <div className="registerId">
                <small>ZERTIFIZIERUNGS-ID</small>
                <strong>{record.public_id}</strong>
              </div>
              <div>
                <small>HERSTELLER</small>
                <strong>{record.products?.manufacturers?.name ?? '—'}</strong>
              </div>
              <div>
                <small>PRODUKT</small>
                <strong>{record.products?.name ?? '—'}</strong>
              </div>
              <div>
                <small>STATUS</small>
                <span className={`statusBadge ${record.status === 'active' ? 'active' : ''}`}>{labels[record.status] ?? record.status}</span>
              </div>
              <Link href={`/pruefen?id=${encodeURIComponent(record.public_id)}`} aria-label={`${record.public_id} prüfen`}>→</Link>
            </article>
          ))}
        </div>

        {!message && filtered.length === 0 && <div className="registerMessage">Keine passenden öffentlichen Zertifizierungen gefunden.</div>}

        <p className="demoDisclosure">Hinweis: <strong>HC-DEMO-0001</strong> ist ausdrücklich ein technischer Demodatensatz und keine echte Zertifizierung.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
