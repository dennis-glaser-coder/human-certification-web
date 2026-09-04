'use client';

import { useState } from 'react';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';
import { getSupabaseBrowserClient } from '../../lib/supabase';

const initialForm = {
  company_name: '',
  contact_name: '',
  email: '',
  website: '',
  product_category: '',
  message: '',
  company_website: '',
};

export default function ManufacturerPage() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({ loading: false, success: false, message: '' });

  function change(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();

    if (form.company_website) {
      setState({ loading: false, success: true, message: 'Vielen Dank. Ihre Anfrage wurde vorgemerkt.' });
      return;
    }

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setState({ loading: false, success: false, message: 'Die Formularanbindung ist in dieser Vorschau noch nicht konfiguriert.' });
      return;
    }

    setState({ loading: true, success: false, message: '' });

    const { error } = await supabase.from('manufacturer_interests').insert({
      company_name: form.company_name.trim(),
      contact_name: form.contact_name.trim(),
      email: form.email.trim(),
      website: form.website.trim() || null,
      product_category: form.product_category.trim() || null,
      message: form.message.trim() || null,
    });

    if (error) {
      setState({ loading: false, success: false, message: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.' });
      return;
    }

    setForm(initialForm);
    setState({ loading: false, success: true, message: 'Vielen Dank. Wir haben Ihr Interesse an der Pilotphase vorgemerkt.' });
  }

  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell manufacturerHero">
        <div className="eyebrow">PILOTPHASE · FÜR HERSTELLER</div>
        <h1>Gute Fertigung verdient <em>mehr als eine Behauptung.</em></h1>
        <p className="lead">Wir suchen erste Unternehmen, mit denen wir Standard, Nachweise und Prüfprozess an realen Produkten validieren können.</p>
      </section>

      <section className="shell pilotGrid">
        <div className="pilotInfo">
          <div className="sectionNo">WAS DIE PILOTPHASE LEISTEN SOLL</div>
          <h2>Gemeinsam prüfen, ob der Standard in der Praxis trägt.</h2>
          <div className="pilotPoints">
            <p><span>01</span>Produkt und Fertigungsprozess verstehen</p>
            <p><span>02</span>notwendige Nachweise realistisch definieren</p>
            <p><span>03</span>Auditablauf an echten Fällen testen</p>
            <p><span>04</span>öffentliche Darstellung im Register validieren</p>
          </div>
          <div className="pilotNote">
            <strong>Wichtig:</strong>
            <p>Eine Vormerkung ist noch kein Zertifizierungsantrag und keine Zusage. Sie hilft uns, geeignete Pilotfälle auszuwählen.</p>
          </div>
        </div>

        <form className="interestForm" onSubmit={submit}>
          <div className="formTop">
            <span>PILOT INTEREST</span>
            <strong>Interesse vormerken</strong>
          </div>

          <label>
            Unternehmen *
            <input required minLength="2" maxLength="180" name="company_name" value={form.company_name} onChange={change} placeholder="Unternehmensname" />
          </label>

          <div className="formTwo">
            <label>
              Ansprechpartner *
              <input required minLength="2" maxLength="180" name="contact_name" value={form.contact_name} onChange={change} placeholder="Vor- und Nachname" />
            </label>
            <label>
              E-Mail *
              <input required type="email" maxLength="320" name="email" value={form.email} onChange={change} placeholder="name@unternehmen.de" />
            </label>
          </div>

          <div className="formTwo">
            <label>
              Website
              <input name="website" value={form.website} onChange={change} placeholder="https://…" />
            </label>
            <label>
              Produkt / Kategorie
              <input name="product_category" value={form.product_category} onChange={change} placeholder="z. B. Möbel, Textil, Keramik" />
            </label>
          </div>

          <label>
            Kurz zum Produkt oder Fertigungsprozess
            <textarea name="message" value={form.message} onChange={change} rows="5" placeholder="Was wird hergestellt und welche Arbeitsschritte werden durch Menschen ausgeführt?" />
          </label>

          <label className="honeypot" aria-hidden="true">
            Firmenwebsite bestätigen
            <input tabIndex="-1" autoComplete="off" name="company_website" value={form.company_website} onChange={change} />
          </label>

          <button className="button primary formButton" disabled={state.loading}>
            {state.loading ? 'Wird gesendet …' : 'Unverbindlich vormerken'}
          </button>

          {state.message && <p className={state.success ? 'formMessage success' : 'formMessage'}>{state.message}</p>}
          <small className="formLegal">Die Angaben werden ausschließlich zur Kontaktaufnahme im Rahmen der Pilotphase gespeichert. Eine verbindliche Zertifizierung entsteht dadurch nicht.</small>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
