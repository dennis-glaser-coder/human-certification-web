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

const benefits = [
  ['Produktbezogenes Zeichen', 'Die Kennzeichnung bezieht sich auf ein klar abgegrenztes geprüftes Produkt oder eine Produktfamilie.'],
  ['Eindeutige ID', 'Eine Zertifizierungs-ID verbindet die Kennzeichnung mit dem zugehörigen öffentlichen Datensatz.'],
  ['QR-Verifizierung', 'Der öffentliche Nachweis kann direkt von Verpackung, Produktseite oder Verkaufsunterlagen erreichbar gemacht werden.'],
  ['Public Register', 'Hersteller, Produkt, Standardversion und aktueller Status werden nachvollziehbar zugeordnet.'],
  ['Freigegebene Kommunikation', 'Regeln legen fest, wie die geprüfte Aussage auf Produkt, Verpackung und in produktbezogener Werbung verwendet werden darf.'],
];

const suitable = [
  'physisches Produkt mit klar beschreibbarem Herstellungsprozess',
  'wesentliche menschliche Herstellungsschritte sind nachvollziehbar',
  'Produktionsorte und relevante Fremdfertigung können offengelegt werden',
  'geeignete Informationen oder Unterlagen zum Herstellungsprozess sind vorhanden',
];

const process = [
  ['Einordnung', 'Produkt, Produktfamilie und Herstellungsprozess werden zunächst abgegrenzt.'],
  ['Prozessaufnahme', 'Wesentliche Arbeitsschritte, Standorte und relevante Fremdfertigung werden erfasst.'],
  ['Nachweise', 'Die zum Herstellungsprozess vorliegenden Informationen und Unterlagen werden geprüft.'],
  ['Prüfung', 'Der konkrete Produktionsfall wird gegen die Kriterien des Standards bewertet.'],
  ['Auswertung', 'Ergebnis, offene Punkte und Erkenntnisse für die weitere Standardentwicklung werden dokumentiert.'],
];

export default function ManufacturerPage() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState({ loading: false, success: false, message: '' });

  function change(event) {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  async function submit(event) {
    event.preventDefault();

    if (form.company_website) {
      setState({ loading: false, success: true, message: 'Vielen Dank. Ihre Anfrage wurde erhalten.' });
      return;
    }

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setState({ loading: false, success: false, message: 'Das Formular ist derzeit nicht erreichbar.' });
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
    setState({ loading: false, success: true, message: 'Vielen Dank. Wir haben Ihre Anfrage erhalten.' });
  }

  return (
    <main>
      <SiteHeader />

      <section className="pageHero shell">
        <div className="eyebrow">FÜR HERSTELLER</div>
        <h1>Ein überprüfbarer Produktclaim für menschliche Herstellung.</h1>
        <p className="lead">
          Das Made by Humans System ist darauf ausgelegt, eine erfolgreiche Produktprüfung mit Kennzeichnung,
          eindeutiger Zertifizierungs-ID, öffentlichem Registereintrag und klaren Markennutzungsregeln zu verbinden.
        </p>
      </section>

      <section className="manufacturerBenefits">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">WAS DAS SYSTEM BEREITSTELLEN SOLL</div>
              <h2>Die Prüfung soll am Produkt sichtbar und überprüfbar werden.</h2>
            </div>
            <p>
              Die Zertifizierung ist nicht als internes Audit-Endprodukt gedacht.
              Ihr Wert entsteht erst, wenn die geprüfte Aussage eindeutig kommuniziert und öffentlich verifiziert werden kann.
            </p>
          </div>

          <div className="manufacturerBenefitGrid">
            {benefits.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell manufacturerFit">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">AKTUELLE VALIDIERUNG</div>
            <h2>Gesucht werden reale Produkte mit nachvollziehbaren Herstellungsprozessen.</h2>
          </div>
          <p>
            Ausgewählte Produktionsfälle werden genutzt, um Kriterien, Nachweisanforderungen und Prüfablauf
            unter realen Bedingungen zu testen und vor einer kommerziellen Zertifikatsvergabe zu schärfen.
          </p>
        </div>

        <div className="fitGrid">
          {suitable.map((item) => <div key={item}>{item}</div>)}
        </div>
        <p className="fitNote">
          Lebensmittel, Medizinprodukte und andere stark regulierte Kategorien sind für die erste Validierung nicht vorgesehen.
        </p>
      </section>

      <section className="processSection">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">ABLAUF</div>
              <h2>So wird ein Produktionsfall derzeit geprüft.</h2>
            </div>
          </div>

          <div className="processGrid">
            {process.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell interestSection">
        <div className="interestIntro">
          <div className="sectionNo">PRODUKT VORSTELLEN</div>
          <h2>Produkt zur Validierung einreichen.</h2>
          <p>
            Die Anfrage ist unverbindlich. Sie ist kein Zertifizierungsantrag und enthält keine Zusage
            zur späteren Nutzung des Zeichens.
          </p>
        </div>

        <form className="interestForm" onSubmit={submit}>
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
              <input name="product_category" value={form.product_category} onChange={change} placeholder="z. B. Lederwaren, Möbel, Keramik" />
            </label>
          </div>

          <label>
            Produkt und Herstellung kurz beschreiben
            <textarea name="message" value={form.message} onChange={change} rows="6" placeholder="Was wird hergestellt? Welche wesentlichen Herstellungsschritte erfolgen durch Menschen? Wo findet die Fertigung statt?" />
          </label>

          <label className="honeypot" aria-hidden="true">
            Firmenwebsite bestätigen
            <input tabIndex="-1" autoComplete="off" name="company_website" value={form.company_website} onChange={change} />
          </label>

          <button className="button primary formButton" disabled={state.loading}>
            {state.loading ? 'Wird gesendet …' : 'Produkt zur Validierung vorstellen'}
          </button>

          {state.message && <p className={state.success ? 'formMessage success' : 'formMessage'}>{state.message}</p>}
          <small className="formLegal">Die Angaben werden ausschließlich zur Kontaktaufnahme im Rahmen der Validierung gespeichert.</small>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
