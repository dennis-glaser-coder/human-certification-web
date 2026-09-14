'use client';

const CONSENT_KEY = 'mbh_analytics_consent';

export function trackCertificationLead(language = 'de') {
  if (typeof window === 'undefined') return;
  if (window.localStorage.getItem(CONSENT_KEY) !== 'accepted') return;
  if (typeof window.gtag !== 'function') return;

  window.gtag('event', 'generate_lead', {
    form_name: 'certification_request',
    form_language: language,
  });
}

export default function FormSubmissionNotifier() {
  return null;
}
