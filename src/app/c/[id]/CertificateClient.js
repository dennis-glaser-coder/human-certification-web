'use client';

import { CERTIFIED_STATEMENT } from '../../../lib/brand';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import CertificationQr from '../../../components/CertificationQr';
import { getSupabaseBrowserClient } from '../../../lib/supabase';

const statusLabels = {
  under_review: 'In Prüfung',
  active: 'Aktiv',
  suspended: 'Ausgesetzt',
  expired: 'Abgelaufen',
  revoked: 'Widerrufen',
};

export default function CertificateClient({ id }) {
  const assetBase = process.env.GITHUB_PAGES === 'true' ? '/human-certification-web' : '';
  const [state, setState] = useState({
    loading: true,
    record: null,
    events: [],
    message: '',
  });

  useEffect(() => {
    async function load() {
      if (!id) {
        setState({ loading: false, record: null, events: [], message: 'Keine Zertifizierungs-ID angegeben.' });
        return;
      }

      const supabase = getSupabaseBrowserClient();
      if (!supabase) {
        setState({ loading: false, record: null, events: [], message: 'Das Register ist derzeit nicht erreichbar.' });
        return;
      }

      const { data: record, error } = await supabase
        .from('certifications')
        .select('id,public_id,status,issued_at,valid_until,last_verified_at,public_note,certification_scope,production_locations,products(name,manufacturers(name)),standard_versions(version,title)')
        .eq('public_id', id)
        .maybeSingle();

      if (error || !record) {
        setState({ loading: false, record: null, events: [], message: 'Zu dieser ID wurde kein öffentlicher Datensatz gefunden.' });
        return;
      }

      const { data: events } = await supabase
        .from('certification_events')
        .select('id,event_type,status_after,title,public_note,occurred_at')
        .eq('certification_id', record.id)
        .order('occurred_at', { ascending: false });

      setState({ loading: false, record, events: events ?? [], message: '' });
    }

    load();
  }, [id]);

  return (
    <main>
      <SiteHeader />

      <section className="certificatePage shell">
        <div className="certificateBar">
          <span>ÖFFENTLICHES REGISTER</span>
          <Link href="/register">Zur Registersuche →</Link>
        </div>

        {state.loading && <div className="certificateMessage">Datensatz wird geladen …</div>}
        {state.message && <div className="certificateMessage">{state.message}</div>}

        {state.record && (
          <>
            <section className={`certificateSummary status-${state.record.status}`}>
              <div className="certificateAuthorityLine">
                <span>ÖFFENTLICHER ZERTIFIZIERUNGSDATENSATZ</span>
                <span>STANDARDGEBUNDEN · STATUSVERFOLGBAR</span>
              </div>
              <div className="certificateHeader">
                <div className="certificateBrand">
                  <img src={`${assetBase}/brand/made-by-humans-seal.png`} alt="" aria-hidden="true" />
                  <div>
                    <small>ZERTIFIZIERUNGS-ID</small>
                    <h1>{state.record.public_id}</h1>
                  </div>
                </div>
                <span className={`statusBadge status-${state.record.status} ${state.record.status === 'active' ? 'active' : ''}`}>
                  {statusLabels[state.record.status] ?? state.record.status}
                </span>
              </div>

              <div className={`certificateClaim ${state.record.status === 'under_review' ? 'certificateClaimReview' : ''}`}>
                <span>{state.record.status === 'under_review' ? 'PRÜFSTATUS' : 'ZERTIFIZIERTE AUSSAGE'}</span>
                <p>
                  {state.record.status === 'under_review'
                    ? 'Dieser Datensatz befindet sich in Prüfung. Eine Zertifizierungsentscheidung wurde noch nicht erteilt.'
                    : CERTIFIED_STATEMENT}
                </p>
              </div>

              <dl className="certificateFacts">
                <div><dt>Hersteller</dt><dd>{state.record.products?.manufacturers?.name ?? '—'}</dd></div>
                <div><dt>Produkt</dt><dd>{state.record.products?.name ?? '—'}</dd></div>
                <div><dt>Zertifizierungsumfang</dt><dd>{state.record.certification_scope ?? '—'}</dd></div>
                <div><dt>Produktionsstandorte</dt><dd>{state.record.production_locations?.length ? state.record.production_locations.join(' · ') : '—'}</dd></div>
                <div><dt>Standard</dt><dd>{state.record.standard_versions?.title ?? state.record.standard_versions?.version ?? '—'}</dd></div>
                <div><dt>Ausgestellt</dt><dd>{state.record.issued_at ? new Date(state.record.issued_at).toLocaleDateString('de-DE') : '—'}</dd></div>
                <div><dt>Gültig bis</dt><dd>{state.record.valid_until ? new Date(state.record.valid_until).toLocaleDateString('de-DE') : '—'}</dd></div>
                <div><dt>Zuletzt verifiziert</dt><dd>{state.record.last_verified_at ? new Date(state.record.last_verified_at).toLocaleDateString('de-DE') : '—'}</dd></div>
              </dl>

              <CertificationQr publicId={state.record.public_id} />

              {state.record.public_note && (
                <div className="certificatePublicNote">
                  <small>HINWEIS ZUM DATENSATZ</small>
                  <p>{state.record.public_note}</p>
                </div>
              )}
            </section>

            <section className="certificateHistory">
              <div className="certificateHistoryIntro">
                <div className="sectionNo">STATUSVERLAUF</div>
                <h2>Öffentliche Änderungen am Zertifizierungsstatus.</h2>
                <p>
                  Statusänderungen bleiben im Datensatz sichtbar. Damit kann auch nachträglich geprüft werden,
                  ob eine Zertifizierung ausgesetzt, erneuert oder widerrufen wurde.
                </p>
              </div>

              <div className="certificateTimeline">
                {state.events.length === 0 && (
                  <div className="timelineEmpty">Für diesen Datensatz sind keine öffentlichen Ereignisse hinterlegt.</div>
                )}

                {state.events.map((event) => (
                  <article className="timelineEvent" key={event.id}>
                    <time>{new Date(event.occurred_at).toLocaleDateString('de-DE')}</time>
                    <div>
                      <strong>{event.title}</strong>
                      {event.status_after && <span>{statusLabels[event.status_after] ?? event.status_after}</span>}
                      {event.public_note && <p>{event.public_note}</p>}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <div className="certificateActions">
              <Link className="button primary" href="/pruefen">Andere ID prüfen</Link>
              <Link className="button secondary" href="/standard">Standard ansehen</Link>
            </div>
          </>
        )}
      </section>

      <SiteFooter />
    </main>
  );
}
