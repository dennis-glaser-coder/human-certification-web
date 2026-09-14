'use client';

import { useEffect, useState } from 'react';

const CONSENT_KEY = 'mbh_analytics_consent';

export default function AnalyticsConsent() {
  const [choice, setChoice] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY);
    setChoice(saved);
    setOpen(!saved);
  }, []);

  const saveChoice = (value) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setChoice(value);
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="analyticsConsentBackdrop">
      <section className="analyticsConsent" role="dialog" aria-modal="true" aria-labelledby="analytics-consent-title">
        <p className="analyticsConsentEyebrow">DATENSCHUTZ</p>
        <h2 id="analytics-consent-title">Dürfen wir Nutzungsdaten erfassen?</h2>
        <p>
          Wir möchten verstehen, wie unsere Website genutzt wird und über welche Kanäle Besucher zu uns kommen. Statistik wird erst nach Ihrer Zustimmung aktiviert.
        </p>
        <div className="analyticsConsentActions">
          <button type="button" className="analyticsConsentAccept" onClick={() => saveChoice('accepted')}>Statistik erlauben</button>
          <button type="button" className="analyticsConsentReject" onClick={() => saveChoice('rejected')}>Nur notwendige</button>
        </div>
      </section>
    </div>
  );
}
