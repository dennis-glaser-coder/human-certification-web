'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import BrandTrace from '../../components/BrandTrace';
import { getSupabaseBrowserClient } from '../../lib/supabase';

const labels = { under_review: 'In Prüfung', active: 'Aktiv', suspended: 'Ausgesetzt', expired: 'Abgelaufen', revoked: 'Widerrufen' };

function formatDate(value) {
  if (!value) return '—';
  return new Date(value).toLocaleDateString('de-DE');
}

export default function RegisterPage() {
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('Register wird geladen …');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) { setMessage('Das Register ist derzeit nicht erreichbar.'); setLoading(false); return; }
      const { data, error } = await supabase
        .from('certifications')
        .select('public_id,status,issued_at,valid_until,public_note,created_at,certification_scope,production_locations,certification_context,relationship_disclosure,products(name,manufacturers(name,legal_name)),standard_versions(version,title)')
        .order('created_at', { ascending: false });
      if (error) { setMessage('Das Register konnte gerade nicht geladen werden.'); setLoading(false); return; }
      setRecords(data ?? []); setMessage(''); setLoading(false);
    }
    load();
  }, []);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return records;
    return records.filter((record) => [record.public_id, record.products?.name, record.products?.manufacturers?.name, record.products?.manufacturers?.legal_name, record.certification_scope, ...(record.production_locations ?? [])].filter(Boolean).some((value) => value.toLowerCase().includes(needle)));
  }, [query, records]);

  return (
    <main>
      <SiteHeader />
      <section className="pageHero shell registerHero"><div className="eyebrow">ÖFFENTLICHES REGISTER</div><BrandTrace compact /><h1>Zertifizierungen öffentlich prüfen.</h1><p className="lead">Jeder Eintrag zeigt Zertifizierungs-ID, Hersteller bzw. Marke, rechtlichen Betreiber soweit abweichend, Produkt, Zertifizierungsumfang, Produktionsorte, Standard, Gültigkeit und aktuellen Status. Bei verbundenen Pilotfällen wird die Verbindung zum Systeminhaber offengelegt.</p></section>

      <section className="shell registerSection">
        <div className="registerTrustBar"><div><strong>Zertifizierungs-ID</strong><p>Eindeutige ID für diesen Eintrag.</p></div><div><strong>Produkt & Betreiber</strong><p>Marke, rechtlicher Betreiber und zertifizierter Umfang.</p></div><div><strong>Produktion & Standard</strong><p>Produktionsorte und angewendete Standardfassung.</p></div><div><strong>Status & Gültigkeit</strong><p>Aktueller Status und Gültigkeitszeitraum.</p></div></div>

        <div className="registerToolbar"><div><span className="sectionNo">REGISTER</span><strong aria-live="polite">{loading ? 'Einträge werden geladen …' : (records.length === 1 ? '1 Eintrag' : records.length + ' Einträge')}</strong></div><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="ID, Hersteller, Betreiber, Produkt oder Standort suchen" aria-label="Register durchsuchen" /></div>
        {message && <div className="registerMessage" role="status" aria-live="polite">{message}</div>}

        <div className="registerList">{filtered.map((record) => {
          const manufacturer = record.products?.manufacturers;
          return (
            <article className="registerRow" key={record.public_id}>
              <div className="registerId"><small>ZERTIFIZIERUNGS-ID</small><strong>{record.public_id}</strong></div>
              <div><small>HERSTELLER / MARKE</small><strong>{manufacturer?.name ?? '—'}</strong>{manufacturer?.legal_name && manufacturer.legal_name !== manufacturer.name && <em className="registerSubline">Betreiber: {manufacturer.legal_name}</em>}{record.production_locations?.length > 0 && <em className="registerSubline">{record.production_locations.join(' · ')}</em>}</div>
              <div><small>PRODUKT</small><strong>{record.products?.name ?? '—'}</strong>{record.certification_scope && <em className="registerSubline">{record.certification_scope}</em>}</div>
              <div><small>STANDARD</small><strong>{record.standard_versions?.version ?? record.standard_versions?.title ?? '—'}</strong>{record.certification_context === 'connected_pilot' && <em className="registerSubline">Verbundener Pilotbetrieb · Hinweis im Eintrag</em>}</div>
              <div className="registerStatusCell"><small>STATUS / GÜLTIG BIS</small><span className={'statusBadge status-' + record.status + (record.status === 'active' ? ' active' : '')}>{record.public_id?.startsWith('HC-DEMO-') ? 'Demo · keine reale Zertifizierung' : (labels[record.status] ?? record.status)}</span><em>{formatDate(record.valid_until)}</em></div>
              <Link href={'/zertifikat/?id=' + encodeURIComponent(record.public_id)} aria-label={record.public_id + ' öffnen'}>Eintrag →</Link>
            </article>
          );
        })}</div>

        {!message && filtered.length === 0 && <div className="registerMessage">Keine passenden Einträge gefunden.</div>}
        <div className="registerDisclosure"><strong>Beispieldatensatz</strong><p>HC-DEMO-0001 ist nur ein Beispiel dafür, wie ein Registereintrag aussieht. Es handelt sich nicht um eine reale Zertifizierung.</p></div>
      </section>
      <SiteFooter />
    </main>
  );
}
