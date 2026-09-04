'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { getSupabaseBrowserClient } from '../../lib/supabase';

const statusText = {
  active: 'Zertifizierung aktiv',
  suspended: 'Zertifizierung ausgesetzt',
  expired: 'Zertifizierung abgelaufen',
  revoked: 'Zertifizierung widerrufen',
};

export default function VerifyPage() {
  const [value, setValue] = useState('');
  const [state, setState] = useState({ loading: false, record: null, message: '' });

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) {
      setValue(id.toUpperCase());
      verifyId(id);
    }
  }, []);

  async function verifyId(rawValue) {
    const publicId = rawValue.trim().toUpperCase();
    if (!publicId) return;

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setState({ loading: false, record: null, message: 'Die Datenbankverbindung ist in dieser Vorschau noch nicht konfiguriert.' });
      return;
    }

    setState({ loading: true, record: null, message: '' });

    const { data, error } = await supabase
      .from('certifications')
      .select('public_id,status,issued_at,valid_until,last_verified_at,public_note,products(name,manufacturers(name)),standard_versions(version,title)')
      .eq('public_id', publicId)
      .maybeSingle();

    if (error || !data) {
      setState({ loading: false, record: null, message: 'Zu dieser ID wurde keine öffentliche Zertifizierung gefunden.' });
      return;
    }

    setState({ loading: false, record: data, message: '' });
  }

  function verify(event) {
    event.preventDefault();
    verifyId(value);
  }

  return (
    <main className="verifyPage">
      <SiteHeader />

      <section className="pageHero shell verifyHero">
        <div className="eyebrow">VERIFY CERTIFICATION</div>
        <h1>Ein Zertifizierungszeichen ist nur so glaubwürdig wie <em>sein öffentlicher Nachweis.</em></h1>
        <p className="lead">Zertifizierungs-ID eingeben und Hersteller, Produkt, Standardversion, Status und Gültigkeit direkt prüfen.</p>
      </section>

      <section className="shell verifyWorkspace">
        <form onSubmit={verify} className="verifyForm">
          <label htmlFor="certificate-id">CERTIFICATION ID</label>
          <div>
            <input id="certificate-id" value={value} onChange={(e) => setValue(e.target.value)} placeholder="z. B. HC-DEMO-0001" />
            <button className="button primary" disabled={state.loading}>{state.loading ? 'Prüfe …' : 'Jetzt prüfen'}</button>
          </div>
          <button type="button" className="demoButton" onClick={() => { setValue('HC-DEMO-0001'); verifyId('HC-DEMO-0001'); }}>Demo-ID testen: HC-DEMO-0001</button>
        </form>

        {state.message && <div className="verificationEmpty">{state.message}</div>}

        {state.record && (
          <article className={`verificationRecord status-${state.record.status}`}>
            <div className="verificationTop">
              <div>
                <small>STATUS</small>
                <strong>{statusText[state.record.status] ?? state.record.status}</strong>
              </div>
              <span className={`statusBadge ${state.record.status === 'active' ? 'active' : ''}`}>{state.record.status.toUpperCase()}</span>
            </div>

            <div className="verificationIdentity">
              <div>
                <small>CERTIFICATION ID</small>
                <h2>{state.record.public_id}</h2>
              </div>
              <Link className="recordOpenLink" href={`/c/${encodeURIComponent(state.record.public_id)}`}>Öffentlichen Datensatz öffnen →</Link>
            </div>

            <dl className="verificationDetails">
              <div><dt>Hersteller</dt><dd>{state.record.products?.manufacturers?.name ?? '—'}</dd></div>
              <div><dt>Produkt</dt><dd>{state.record.products?.name ?? '—'}</dd></div>
              <div><dt>Standardversion</dt><dd>{state.record.standard_versions?.version ?? '—'}</dd></div>
              <div><dt>Ausgestellt</dt><dd>{state.record.issued_at ? new Date(state.record.issued_at).toLocaleDateString('de-DE') : '—'}</dd></div>
              <div><dt>Gültig bis</dt><dd>{state.record.valid_until ? new Date(state.record.valid_until).toLocaleDateString('de-DE') : '—'}</dd></div>
            </dl>

            {state.record.public_note && <div className="publicNote"><strong>PUBLIC NOTE</strong><p>{state.record.public_note}</p></div>}
          </article>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
