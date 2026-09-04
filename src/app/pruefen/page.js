'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getSupabaseBrowserClient } from '../../lib/supabase';

export default function VerifyPage() {
  const [value, setValue] = useState('');
  const [state, setState] = useState({ loading: false, record: null, message: '' });

  async function verify(event) {
    event.preventDefault();
    const publicId = value.trim().toUpperCase();
    if (!publicId) return;

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setState({ loading: false, record: null, message: 'Die Datenbankverbindung wird gerade eingerichtet.' });
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

  return (
    <main className="verifyPage">
      <header className="nav shell">
        <Link className="brand" href="/"><span className="mark">H</span><span>PROJECT HUMAN</span></Link>
        <Link href="/">← Startseite</Link>
      </header>
      <section className="verify shell">
        <div className="eyebrow">ÖFFENTLICHES REGISTER</div>
        <h1>Zertifizierung prüfen.</h1>
        <p className="lead small">Gib die Zertifizierungs-ID ein, die auf Produkt, Verpackung oder QR-Zielseite angegeben ist.</p>
        <form onSubmit={verify} className="verifyForm">
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="z. B. HC-2026-000001" aria-label="Zertifizierungs-ID" />
          <button className="button primary" disabled={state.loading}>{state.loading ? 'Prüfe …' : 'Jetzt prüfen'}</button>
        </form>

        {state.message && <div className="result neutral">{state.message}</div>}

        {state.record && (
          <div className={`result ${state.record.status === 'active' ? 'valid' : 'neutral'}`}>
            <div className="resultStatus">{state.record.status === 'active' ? '✓ Zertifizierung aktiv' : `Status: ${state.record.status}`}</div>
            <strong>{state.record.public_id}</strong>
            <dl>
              <div><dt>Hersteller</dt><dd>{state.record.products?.manufacturers?.name ?? '—'}</dd></div>
              <div><dt>Produkt</dt><dd>{state.record.products?.name ?? '—'}</dd></div>
              <div><dt>Standard</dt><dd>{state.record.standard_versions?.version ?? '—'}</dd></div>
              <div><dt>Gültig bis</dt><dd>{state.record.valid_until ? new Date(state.record.valid_until).toLocaleDateString('de-DE') : '—'}</dd></div>
            </dl>
          </div>
        )}
      </section>
    </main>
  );
}
