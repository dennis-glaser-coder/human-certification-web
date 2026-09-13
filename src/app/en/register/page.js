'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import EnglishFooter from '../../../components/EnglishFooter';
import BrandTrace from '../../../components/BrandTrace';
import { getSupabaseBrowserClient } from '../../../lib/supabase';

const labels = {
  under_review: 'Under review',
  active: 'Active',
  suspended: 'Suspended',
  expired: 'Expired',
  revoked: 'Revoked',
};

function formatDate(value) {
  if (!value) return '—';
  return new Date(value).toLocaleDateString('en-GB');
}

export default function RegisterPage() {
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('Loading register …');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setMessage('The register is currently unavailable.');
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('certifications')
        .select('public_id,status,issued_at,valid_until,public_note,created_at,certification_scope,production_locations,products(name,manufacturers(name)),standard_versions(version,title)')
        .order('created_at', { ascending: false });

      if (error) {
        setMessage('The register could not be loaded.');
        setLoading(false);
        return;
      }

      setRecords(data ?? []);
      setMessage('');
      setLoading(false);
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
    <main lang="en">
      <SiteHeader lang="en" />

      <section className="pageHero shell registerHero">
        <div className="eyebrow">PUBLIC REGISTER</div>
        <BrandTrace compact />
        <h1>Check certifications publicly.</h1>
        <p className="lead">Each record shows the certification ID, manufacturer, product, certification scope, declared production locations, standard, validity and current status.</p>
      </section>

      <section className="shell registerSection">
        <div className="registerTrustBar" aria-label="Contents of a certification record">
          <div><strong>Certification ID</strong><p>Unique ID for the record.</p></div>
          <div><strong>Product & scope</strong><p>Manufacturer, product and what the certification covers.</p></div>
          <div><strong>Production & standard</strong><p>Declared production locations and the applicable standard.</p></div>
          <div><strong>Status & validity</strong><p>Current status and validity period.</p></div>
        </div>

        <div className="registerToolbar">
          <div><span className="sectionNo">REGISTER</span><strong aria-live="polite">{loading ? 'Loading records …' : (records.length === 1 ? '1 record' : records.length + ' records')}</strong></div>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search ID, manufacturer, product or location" aria-label="Search register" />
        </div>

        {message && <div className="registerMessage" role="status" aria-live="polite">{message}</div>}

        <div className="registerList">
          {filtered.map((record) => (
            <article className="registerRow" key={record.public_id}>
              <div className="registerId"><small>CERTIFICATION ID</small><strong>{record.public_id}</strong></div>
              <div><small>MANUFACTURER</small><strong>{record.products?.manufacturers?.name ?? '—'}</strong>{record.production_locations?.length > 0 && <em className="registerSubline">{record.production_locations.join(' · ')}</em>}</div>
              <div><small>PRODUCT</small><strong>{record.products?.name ?? '—'}</strong>{record.certification_scope && <em className="registerSubline">{record.certification_scope}</em>}</div>
              <div><small>STANDARD</small><strong>{record.standard_versions?.version ?? record.standard_versions?.title ?? '—'}</strong></div>
              <div className="registerStatusCell"><small>STATUS / VALID UNTIL</small><span className={'statusBadge status-' + record.status + (record.status === 'active' ? ' active' : '')}>{record.public_id?.startsWith('HC-DEMO-') ? 'Demo · not a real certification' : (labels[record.status] ?? record.status)}</span><em>{formatDate(record.valid_until)}</em></div>
              <Link href={'/en/verify?id=' + encodeURIComponent(record.public_id)} aria-label={'Open ' + record.public_id}>Record →</Link>
            </article>
          ))}
        </div>

        {!message && filtered.length === 0 && <div className="registerMessage">No matching records found.</div>}

        <div className="registerDisclosure"><strong>Demo record</strong><p>HC-DEMO-0001 only demonstrates how a public record looks. It is not a real certification.</p></div>
      </section>

      <EnglishFooter />
    </main>
  );
}
