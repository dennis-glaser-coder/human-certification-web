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
        setMessage('Das Register ist derzeit nicht erreichbar.');
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
        <div className="eyebrow">ÖFFENTLICHES REGISTER</div>
        <h1>Zertifizierungen öffentlich prüfen.</h1>
        <p className="lead">
          Über das Register lassen sich Zertifizierungs-ID, Hersteller, Produkt, zugrunde liegende Standardfassung
          und aktueller Status eines veröffentlichten Datensatzes nachvollziehen.
        </p>
      </section>

      <section className="shell registerSection">
        <div className="registerToolbar">
          <div>
            <span className="sectionNo">REGISTER</span>
            <strong>{records.length} Datensatz{records.length === 1 ? '' : 'e'}</strong>
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
                <span className={'statusBadge ' + (record.status === 'active' ? 'active' : '')}>{labels[record.status] ?? record.status}</span>
              </div>
              <Link href={'/c/' + encodeURIComponent(record.public_id)} aria-label={record.public_id + ' öffnen'}>Öffnen →</Link>
            </article>
          ))}
        </div>

        {!message && filtered.length === 0 && <div className="registerMessage">Keine passenden Datensätze gefunden.</div>}

        <div className="registerDisclosure">
          <strong>Beispieldatensatz</strong>
          <p>HC-DEMO-0001 dient ausschließlich zur technischen Demonstration des Registermodells und ist keine reale Zertifizierung.</p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
