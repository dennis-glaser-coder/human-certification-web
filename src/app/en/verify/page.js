'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import EnglishFooter from '../../../components/EnglishFooter';
import BrandTrace from '../../../components/BrandTrace';
import { getSupabaseBrowserClient } from '../../../lib/supabase';

const statusText = {
  under_review: 'Under review',
  active: 'Active',
  suspended: 'Suspended',
  expired: 'Expired',
  revoked: 'Revoked',
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
      setState({ loading: false, record: null, message: 'Verification is currently unavailable.' });
      return;
    }

    setState({ loading: true, record: null, message: '' });

    const { data, error } = await supabase
      .from('certifications')
      .select('public_id,status,issued_at,valid_until,last_verified_at,public_note,certification_scope,production_locations,products(name,manufacturers(name)),standard_versions(version,title)')
      .eq('public_id', publicId)
      .maybeSingle();

    if (error) {
      setState({ loading: false, record: null, message: 'Verification is temporarily unavailable. Please try again later.' });
      return;
    }

    if (!data) {
      setState({ loading: false, record: null, message: 'No public record was found for this ID.' });
      return;
    }

    setState({ loading: false, record: data, message: '' });
  }

  function verify(event) {
    event.preventDefault();
    verifyId(value);
  }

  const formatDate = (value) => value ? new Date(value).toLocaleDateString('en-GB') : '—';

  return (
    <main lang="en">
      <SiteHeader lang="en" />

      <section className="verifyPage shell">
        <div className="verifyPageIntro">
          <div className="eyebrow">VERIFY CERTIFICATION</div>
          <BrandTrace compact />
          <h1>Verify a certification by ID.</h1>
          <p>A certification ID leads to the corresponding public record, where you can see the product, standard and current status.</p>
        </div>

        <div className="verifyTrustStrip" aria-label="Verification information">
          <div><strong>Status</strong><p>Shows whether the certification is under review, active, suspended, expired or revoked.</p></div>
          <div><strong>Applies to</strong><p>Manufacturer, product and the certification scope.</p></div>
          <div><strong>Production & standard</strong><p>Declared production locations and the applicable standard.</p></div>
          <div><strong>Validity</strong><p>When the certification was issued and how long it remains valid.</p></div>
        </div>

        <form onSubmit={verify} className="verifySearch">
          <label htmlFor="certificate-id">Certification ID</label>
          <div>
            <input id="certificate-id" value={value} onChange={(e) => setValue(e.target.value)} placeholder="HC-DEMO-0001" />
            <button className="button primary" disabled={state.loading}>{state.loading ? 'Checking …' : 'Verify'}</button>
          </div>
          <button type="button" className="demoButton" onClick={() => { setValue('HC-DEMO-0001'); verifyId('HC-DEMO-0001'); }}>Try demo record HC-DEMO-0001</button>
        </form>

        {state.message && <div className="verificationEmpty" role="status" aria-live="polite">{state.message}</div>}

        {state.record && (
          <article className={'verificationRecord status-' + state.record.status}>
            <div className="verificationTop">
              <div><small>VERIFICATION RESULT</small><strong>Public record found</strong></div>
              <span className={'statusBadge status-' + state.record.status + (state.record.status === 'active' ? ' active' : '')}>{state.record.public_id?.startsWith('HC-DEMO-') ? 'Demo · not a real certification' : (statusText[state.record.status] ?? state.record.status)}</span>
            </div>

            <div className="verificationIdentity">
              <div><small>CERTIFICATION ID</small><h2>{state.record.public_id}</h2></div>
              <Link className="recordOpenLink" href={'/en/register'}>Open public register →</Link>
            </div>

            <dl className="verificationDetails">
              <div><dt>Manufacturer</dt><dd>{state.record.products?.manufacturers?.name ?? '—'}</dd></div>
              <div><dt>Product</dt><dd>{state.record.products?.name ?? '—'}</dd></div>
              <div><dt>Applies to</dt><dd>{state.record.certification_scope ?? '—'}</dd></div>
              <div><dt>Production locations</dt><dd>{state.record.production_locations?.length ? state.record.production_locations.join(' · ') : '—'}</dd></div>
              <div><dt>Standard</dt><dd>{state.record.standard_versions?.title ?? state.record.standard_versions?.version ?? '—'}</dd></div>
              <div><dt>Issued</dt><dd>{formatDate(state.record.issued_at)}</dd></div>
              <div><dt>Valid until</dt><dd>{formatDate(state.record.valid_until)}</dd></div>
              <div><dt>Last verified</dt><dd>{formatDate(state.record.last_verified_at)}</dd></div>
            </dl>

            {state.record.public_note && <div className="publicNote"><strong>NOTE</strong><p>{state.record.public_note}</p></div>}
          </article>
        )}
      </section>

      <EnglishFooter />
    </main>
  );
}
