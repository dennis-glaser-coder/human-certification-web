'use client';

const CONSENT_KEY = 'mbh_analytics_consent';
const NOTIFY_URL = 'https://zcyarfpybsjzkgdvktci.supabase.co/functions/v1/notify-certification-request';
const NOTIFY_TOKEN = 'b90af87e-31f2-4720-9cfa-38b57a8309f5';

function readField(name) {
  const field = document.querySelector(`[name="${name}"]`);
  return field && 'value' in field ? String(field.value || '').trim() : '';
}

function sendCertificationNotification() {
  const productReference = [readField('product_name'), readField('product_category')]
    .filter(Boolean)
    .join(' · ');

  const structuredMessage = [
    readField('production_locations') && `Produktionsorte: ${readField('production_locations')}`,
    readField('external_manufacturing') && `Fremdfertigung: ${readField('external_manufacturing')}`,
    readField('evidence_note') && `Vorhandene Nachweise: ${readField('evidence_note')}`,
    readField('message') && `Herstellungsprozess: ${readField('message')}`,
  ].filter(Boolean).join('\n\n');

  const payload = {
    company_name: readField('company_name'),
    contact_name: readField('contact_name'),
    email: readField('email'),
    website: readField('website') || null,
    product_category: productReference || null,
    message: structuredMessage || null,
  };

  void fetch(NOTIFY_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-mbh-hook-token': NOTIFY_TOKEN,
    },
    body: JSON.stringify(payload),
  }).catch((error) => {
    console.error('Certification notification failed', error);
  });
}

export function trackCertificationLead(language = 'de') {
  if (typeof window === 'undefined') return;

  sendCertificationNotification();

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
