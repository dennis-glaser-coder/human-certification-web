'use client';

import { useEffect, useRef } from 'react';

const FORM_SELECTOR = 'form.certificationRequestForm';
const FORM_SUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/info@madebyhuman.org';

function readForm(form) {
  const data = new FormData(form);
  return Object.fromEntries(data.entries());
}

function buildNotification(values) {
  return {
    _subject: 'Neue Zertifizierungsanfrage – Made by Human',
    _template: 'table',
    _url: 'https://madebyhuman.org/fuer-hersteller',
    name: values.contact_name || '',
    email: values.email || '',
    Unternehmen: values.company_name || '',
    Ansprechpartner: values.contact_name || '',
    'E-Mail': values.email || '',
    Website: values.website || '',
    'Produkt / Produktfamilie': values.product_name || '',
    Produktkategorie: values.product_category || '',
    Produktionsorte: values.production_locations || '',
    'Externe Fertigung': values.external_manufacturing || '',
    'Vorhandene Nachweise': values.evidence_note || '',
    Herstellungsprozess: values.message || '',
  };
}

export default function FormSubmissionNotifier() {
  const pendingRef = useRef(null);

  useEffect(() => {
    function onSubmit(event) {
      const form = event.target;
      if (!(form instanceof HTMLFormElement) || !form.matches(FORM_SELECTOR)) return;

      const values = readForm(form);
      if ((values.company_website || '').trim()) {
        pendingRef.current = null;
        return;
      }

      pendingRef.current = { form, values };
    }

    async function sendNotification(pending) {
      try {
        await fetch(FORM_SUBMIT_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(buildNotification(pending.values)),
        });
      } catch (error) {
        console.warn('Certification request email notification could not be sent.', error);
      }
    }

    const observer = new MutationObserver(() => {
      const pending = pendingRef.current;
      if (!pending) return;

      const successMessage = pending.form.querySelector('.formMessage.success');
      if (!successMessage) return;

      pendingRef.current = null;
      void sendNotification(pending);
    });

    document.addEventListener('submit', onSubmit, true);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('submit', onSubmit, true);
      observer.disconnect();
    };
  }, []);

  return null;
}
