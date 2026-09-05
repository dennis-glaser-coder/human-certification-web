'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { getSupabaseBrowserClient } from '../../lib/supabase';

const labels = {
  under_review: 'In Prüfung',
  active: 'Aktiv',
  suspended: 'Ausgesetzt',
  expired: 'Abgelaufen',
  revoked: 'Widerrufen',
};

function formatDate(value) {
  if (!value) return '—';
  return new Date(value).toLocaleDateString('de-DE');
}

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
        .select('public_id,status,issued_at,valid_until,public_note,created_at,certification_scope,production_locations,products(name,manufacturers(name)),standard_versions(version,title)')
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
      record.certification_scope,
      ...(record.production_locations ?? []),
    ].filter(Boolean).some((value) => value.toLowerCase().includes(needle)));
  }, [query, records]);

  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell registerHero">
        <div className="eyebrow">ÖFFENTLICHES REGISTER</div>
        <h1>Zertifizierungen öffentlich prüfen.</h1>
        <p className="lead">
          Das Register macht Zertifizierungs-ID, Hersteller, Produkt, Zertifizierungsumfang, relevante Produktionsstandorte, Standardfassung, Gültigkeit und aktuellen Status eines veröffentlichten Datensatzes nachvollziehbar.
        </p>
      </section>

      <section className="shell registerSection">
        <div className="registerTrustBar" aria-label="Inhalte eines Registereintrags">
          <div><span>01</span><strong>Zertifizierungs-ID</strong><p>Eindeutige Zuordnung des Datensatzes.</p></div>
          <div><span>02</span><strong>Produkt & Umfang</strong><p>Hersteller, Produkt und veröffentlichter Zertifizierungsumfang.</p></div>
          <div><span>03</span><strong>Produktion & Standard</strong><p>Relevante Produktionsstandorte und angewendetes Regelwerk.</p></div>
          <div><span>04</span><strong>Status & Gültigkeit</strong><p>Aktueller Zertifizierungsstatus und Laufzeit.</p></div>
        </div>

        <div className="registerToolbar">
          <div>
            <span className="sectionNo">REGISTER</span>
            <strong>{records.length} Datensatz{records.length === 1 ? '' : 'e'}</strong>
          </div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ID, Hersteller, Produkt oder Standort suchen" aria-label="Register durchsuchen" />
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
                {record.production_locations?.length > 0 && <em className="registerSubline">{record.production_locations.join(' · ')}</em>}
              </div>
              <div>
                <small>PRODUKT</small>
                <strong>{record.products?.name ?? '—'}</strong>
                {record.certification_scope && <em className="registerSubline">{record.certification_scope}</em>}
              </div>
              <div>
                <small>STANDARD</small>
                <strong>{record.standard_versions?.version ?? record.standard_versions?.title ?? '—'}</strong>
              </div>
              <div className="registerStatusCell">
                <small>STATUS / GÜLTIG BIS</small>
                <span className={'statusBadge status-' + record.status + (record.status === 'active' ? ' active' : '')}>{labels[record.status] ?? record.status}</span>
                <em>{formatDate(record.valid_until)}</em>
              </div>
              <Link href={'/c/' + encodeURIComponent(record.public_id)} aria-label={record.public_id + ' öffnen'}>Datensatz →</Link>
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
