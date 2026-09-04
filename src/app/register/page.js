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
        <div className="eyebrow">PUBLIC REGISTER · PROTOTYP</div>
        <h1>Öffentlich überprüfbar. <em>Nicht nur behauptet.</em></h1>
        <p className="lead">Der Register-Prototyp zeigt, wie spätere Zertifizierungen öffentlich überprüfbar werden sollen. Aktuell ist ausschließlich ein technischer Beispieldatensatz hinterlegt.</p>
      </section>

      <section className="shell registerSection">
        <div className="registerToolbar">
          <div>
            <span className="sectionNo">BEISPIEL-DATENSÄTZE</span>
            <strong>{records.length} öffentlicher Datensatz{records.length === 1 ? '' : 'e'}</strong>
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ID, Hersteller oder Produkt suchen" aria-label="Register durchsuchen" />
        </div>

        {message && <div className="registerMessage">{message}</div>}

        <div className="registerList">
          {filtered.map((record) => (
            <article className="registerRow" key={record.public_id}>
              <div className="registerId">
                <small>CERTIFICATION ID</small>
                <strong>{record.public_id}</strong>
              </div>
              <div>
                <small>MANUFACTURER</small>
                <strong>{record.products?.manufacturers?.name ?? '—'}</strong>
              </div>
              <div>
                <small>PRODUCT</small>
                <strong>{record.products?.name ?? '—'}</strong>
              </div>
              <div>
                <small>STATUS</small>
                <span className={`statusBadge ${record.status === 'active' ? 'active' : ''}`}>{labels[record.status] ?? record.status}</span>
              </div>
              <Link href={`/c/${encodeURIComponent(record.public_id)}`} aria-label={`${record.public_id} öffnen`}>→</Link>
            </article>
          ))}
        </div>

        {!message && filtered.length === 0 && <div className="registerMessage">Keine passenden Beispieldatensätze gefunden.</div>}

        <p className="demoDisclosure"><strong>HC-DEMO-0001</strong> dient ausschließlich zur technischen Demonstration des Registermodells. Es handelt sich nicht um eine reale Zertifizierung.</p>
      </section>

      <SiteFooter />
    </main>
  );
}
