'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { getSupabaseBrowserClient } from '../../../lib/supabase';

const statusLabels = {
  active: 'Aktiv',
  suspended: 'Ausgesetzt',
  expired: 'Abgelaufen',
  revoked: 'Widerrufen',
};

export default function CertificateClient({ id }) {
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
        setState({ loading: false, record: null, events: [], message: 'Die Registeranbindung ist in dieser Vorschau noch nicht konfiguriert.' });
        return;
      }

      const { data: record, error } = await supabase
        .from('certifications')
        .select('id,public_id,status,issued_at,valid_until,last_verified_at,public_note,products(name,manufacturers(name)),standard_versions(version,title)')
        .eq('public_id', id)
        .maybeSingle();

      if (error || !record) {
        setState({ loading: false, record: null, events: [], message: 'Zu dieser ID wurde keine öffentliche Zertifizierung gefunden.' });
        return;
      }

      const { data: events } = await supabase
        .from('certification_events')
        .select('id,event_type,status_after,title,public_note,occurred_at')
        .eq('certification_id', record.id)
        .order('occurred_at', { ascending: false });

      setState({
        loading: false,
        record,
        events: events ?? [],
        message: '',
      });
    }

    load();
  }, [id]);

  return (
    <main>
      <SiteHeader />

      <section className="certificatePage shell">
        <div className="certificateEyebrow">
          <span>PUBLIC CERTIFICATION RECORD</span>
          <Link href="/register">Public Register →</Link>
        </div>

        {state.loading && <div className="certificateMessage">Zertifikat wird geladen …</div>}
        {state.message && <div className="certificateMessage">{state.message}</div>}

        {state.record && (
          <>
            <section className={`certificateSummary status-${state.record.status}`}>
              <div className="certificateSummaryTop">
                <div>
                  <small>CERTIFICATION ID</small>
                  <h1>{state.record.public_id}</h1>
                </div>
                <span className={`statusBadge ${state.record.status === 'active' ? 'active' : ''}`}>
                  {statusLabels[state.record.status] ?? state.record.status}
                </span>
              </div>

              <div className="certificateMainGrid">
                <div className="certificateMetaPanel">
                  <span>MADE BY HUMANS</span>
                  <strong>PUBLIC RECORD</strong>
                  <p>Dieser Datensatz ist das öffentliche Gegenstück zur Zertifizierungskennzeichnung auf dem Produkt.</p>
                </div>

                <dl className="certificateFacts">
                  <div><dt>Hersteller</dt><dd>{state.record.products?.manufacturers?.name ?? '—'}</dd></div>
                  <div><dt>Produkt</dt><dd>{state.record.products?.name ?? '—'}</dd></div>
                  <div><dt>Standardversion</dt><dd>{state.record.standard_versions?.version ?? '—'}</dd></div>
                  <div><dt>Ausgestellt</dt><dd>{state.record.issued_at ? new Date(state.record.issued_at).toLocaleDateString('de-DE') : '—'}</dd></div>
                  <div><dt>Gültig bis</dt><dd>{state.record.valid_until ? new Date(state.record.valid_until).toLocaleDateString('de-DE') : '—'}</dd></div>
                  <div><dt>Zuletzt verifiziert</dt><dd>{state.record.last_verified_at ? new Date(state.record.last_verified_at).toLocaleDateString('de-DE') : '—'}</dd></div>
                </dl>
              </div>

              {state.record.public_note && (
                <div className="certificatePublicNote">
                  <small>PUBLIC NOTE</small>
                  <p>{state.record.public_note}</p>
                </div>
              )}
            </section>

            <section className="certificateHistory">
              <div className="certificateHistoryIntro">
                <div className="sectionNo">TRACEABILITY · STATUS HISTORY</div>
                <h2>Die Zertifizierung bleibt über ihren gesamten Lebenszyklus nachvollziehbar.</h2>
                <p>Öffentliche Statusänderungen werden dokumentiert. So ist nicht nur der aktuelle Zustand, sondern auch die Entwicklung der Zertifizierung überprüfbar.</p>
              </div>

              <div className="certificateTimeline">
                {state.events.length === 0 && (
                  <div className="timelineEmpty">Für diesen Datensatz sind noch keine öffentlichen Ereignisse hinterlegt.</div>
                )}

                {state.events.map((event) => (
                  <article className="timelineEvent" key={event.id}>
                    <div className="timelineDate">{new Date(event.occurred_at).toLocaleDateString('de-DE')}</div>
                    <div className="timelineRule" aria-hidden="true"></div>
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
