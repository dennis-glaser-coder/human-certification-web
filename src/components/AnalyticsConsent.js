'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';

const CONSENT_KEY = 'mbh_analytics_consent';
const MEASUREMENT_ID = 'G-NHR0W4Z7GR';

const styles = {
  settings: {
    position: 'fixed', bottom: 14, left: 14, zIndex: 9997,
    border: '1px solid rgba(17,24,32,.18)', background: '#F3F0E8', color: '#111820',
    borderRadius: 999, padding: '8px 12px', font: '500 12px/1.2 var(--font-sans)', cursor: 'pointer'
  },
  backdrop: {
    position: 'fixed', inset: 0, zIndex: 9998, background: 'rgba(17,24,32,.38)',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'center', padding: 18
  },
  panel: {
    width: 'min(760px, 100%)', background: '#F3F0E8', color: '#111820',
    border: '1px solid rgba(17,24,32,.16)', borderRadius: 18, padding: '24px',
    boxShadow: '0 22px 70px rgba(17,24,32,.22)'
  },
  eyebrow: { margin: '0 0 8px', font: '600 11px/1.2 var(--font-sans)', letterSpacing: '.12em' },
  title: { margin: '0 0 10px', font: '500 clamp(24px,4vw,34px)/1.08 var(--font-serif)' },
  copy: { margin: '0 0 16px', font: '400 14px/1.55 var(--font-sans)', maxWidth: 650 },
  actions: { display: 'flex', gap: 10, flexWrap: 'wrap' },
  accept: {
    border: 0, borderRadius: 999, padding: '11px 16px', background: '#294C77', color: '#fff',
    font: '600 13px/1.2 var(--font-sans)', cursor: 'pointer'
  },
  reject: {
    border: '1px solid rgba(17,24,32,.26)', borderRadius: 999, padding: '10px 16px',
    background: 'transparent', color: '#111820', font: '600 13px/1.2 var(--font-sans)', cursor: 'pointer'
  },
  link: { color: '#294C77', textDecoration: 'underline', textUnderlineOffset: 3 }
};

export default function AnalyticsConsent() {
  const [consent, setConsent] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    setConsent(saved);
    setOpen(!saved);
  }, []);

  function save(value) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    setOpen(false);
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script async src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="mbh-ga4" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${MEASUREMENT_ID}', { anonymize_ip: true });
          `}</Script>
        </>
      )}

      {!open && consent && (
        <button type="button" style={styles.settings} onClick={() => setOpen(true)}>
          Datenschutz-Einstellungen
        </button>
      )}

      {open && (
        <div style={styles.backdrop}>
          <section style={styles.panel} role="dialog" aria-modal="true" aria-labelledby="mbh-consent-title">
            <p style={styles.eyebrow}>DATENSCHUTZ</p>
            <h2 id="mbh-consent-title" style={styles.title}>Dürfen wir anonyme Nutzungsstatistiken erfassen?</h2>
            <p style={styles.copy}>
              Mit Google Analytics möchten wir verstehen, wie unsere Website genutzt wird und über welche Kanäle Besucher zu uns kommen. Das Tracking wird erst nach Ihrer Zustimmung geladen. Mehr dazu in unserer{' '}
              <Link href="/datenschutz" style={styles.link}>Datenschutzerklärung</Link>.
            </p>
            <div style={styles.actions}>
              <button type="button" style={styles.accept} onClick={() => save('accepted')}>Statistik erlauben</button>
              <button type="button" style={styles.reject} onClick={() => save('rejected')}>Nur notwendige</button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
