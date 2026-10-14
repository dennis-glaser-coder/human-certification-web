'use client';

import { CONSENT_SETTINGS_EVENT } from './AnalyticsConsent';

export default function ConsentSettingsLink({ lang = 'de' }) {
  return (
    <button
      type="button"
      className="footerConsentLink"
      onClick={() => window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT))}
    >
      {lang === 'en' ? 'Privacy settings' : 'Datenschutz-Einstellungen'}
    </button>
  );
}
