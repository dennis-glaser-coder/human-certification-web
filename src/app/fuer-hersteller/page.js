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
  product_name: '',
  product_category: '',
  production_locations: '',
  external_manufacturing: '',
  evidence_note: '',
  message: '',
  company_website: '',
};

const certificationValue = [
  ['Produktbezogener Umfang', 'Zertifiziert wird ein eindeutig abgegrenztes Produkt oder eine klar definierte Produktfamilie.'],
  ['Dokumentierte Prüfung', 'Herstellungsprozess, relevante Standorte und geeignete Nachweise werden gegen den Standard bewertet.'],
  ['Eindeutige Zertifizierungs-ID', 'Eine freigegebene Zertifizierung wird einem eindeutigen öffentlichen Datensatz zugeordnet.'],
  ['Öffentliche Verifizierung', 'Standardfassung, Produktbezug, Status und Gültigkeit bleiben über das Register nachvollziehbar.'],
];

const suitable = [
  ['Physisches Produkt', 'Das zu prüfende Endprodukt oder die Produktfamilie lässt sich eindeutig beschreiben und abgrenzen.'],
  ['Menschliche Herstellung', 'Wesentliche produktprägende Herstellungsschritte werden tatsächlich durch Menschen ausgeführt.'],
  ['Nachvollziehbare Standorte', 'Produktionsorte und relevante Fremdfertigung können dem Produkt zugeordnet werden.'],
  ['Geeignete Nachweise', 'Der Herstellungsprozess kann durch Unterlagen, Prozessinformationen oder andere geeignete Belege nachvollzogen werden.'],
];

const evidence = [
  ['Prozessbeschreibung', 'Übersicht der wesentlichen Herstellungsschritte vom Material oder Bauteil bis zum verkaufsfertigen Produkt.'],
  ['Produktionsorte', 'Standorte, an denen wesentliche produktprägende Arbeitsschritte stattfinden.'],
  ['Fremdfertigung', 'Angaben zu extern ausgeführten wesentlichen Arbeitsschritten, soweit diese zum Zertifizierungsumfang gehören.'],
  ['Nachweise', 'Geeignete Unterlagen oder Informationen, die die tatsächliche Ausführung des beschriebenen Herstellungsprozesses belegen.'],
];

const process = [
  ['01', 'Anfrage', 'Produkt, Hersteller und Herstellungsprozess werden für die fachliche Vorprüfung erfasst.'],
  ['02', 'Zertifizierungsumfang', 'Produkt oder Produktfamilie, Standorte und relevante Fremdfertigung werden eindeutig abgegrenzt.'],
  ['03', 'Nachweisprüfung', 'Herstellungsinformationen und geeignete Belege werden gegen die Anforderungen des Standards bewertet.'],
  ['04', 'Fachprüfung & Entscheidung', 'Prüfergebnis, offene Punkte und Zertifizierungsentscheidung werden nachvollziehbar dokumentiert.'],
  ['05', 'Register & Markennutzung', 'Freigegebene Zertifizierungen erhalten eine ID, öffentlichen Status und klar geregelte Zeichennutzung.'],
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

    const productReference = [form.product_name.trim(), form.product_category.trim()]
      .filter(Boolean)
      .join(' · ');

    const structuredMessage = [
      form.production_locations.trim() && `Produktionsorte: ${form.production_locations.trim()}`,
      form.external_manufacturing && `Fremdfertigung: ${form.external_manufacturing}`,
      form.evidence_note.trim() && `Vorhandene Nachweise: ${form.evidence_note.trim()}`,
      form.message.trim() && `Herstellungsprozess: ${form.message.trim()}`,
    ].filter(Boolean).join('\n\n');

    const { error } = await supabase.from('manufacturer_interests').insert({
      company_name: form.company_name.trim(),
      contact_name: form.contact_name.trim(),
      email: form.email.trim(),
      website: form.website.trim() || null,
      product_category: productReference || null,
      message: structuredMessage || null,
    });

    if (error) {
      setState({ loading: false, success: false, message: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut.' });
      return;
    }

    setForm(initialForm);
    setState({
      loading: false,
      success: true,
      message: 'Vielen Dank. Ihre Zertifizierungsanfrage wurde übermittelt.',
    });
  }

  return (
    <main className="manufacturerJourney">
      <SiteHeader />

      <section className="pageHero shell manufacturerHero">
        <div className="eyebrow">ZERTIFIZIERUNG FÜR HERSTELLER</div>
        <h1>Menschliche Herstellung nachvollziehbar zertifizieren.</h1>
        <p className="lead">
          Made by Humans prüft ein konkret abgegrenztes physisches Produkt und den zugehörigen Herstellungsprozess
          anhand definierter Kriterien, dokumentierter Nachweise und eines nachvollziehbaren Zertifizierungsverfahrens.
        </p>
        <div className="manufacturerHeroActions">
          <a className="button primary" href="#zertifizierungsanfrage">Zertifizierung anfragen</a>
          <a className="button secondary" href="#ablauf">Ablauf ansehen</a>
        </div>
      </section>

      <section className="manufacturerMetaBand" aria-label="Kernbestandteile der Zertifizierung">
        <div className="shell manufacturerMetaGrid">
          <div><span>01</span><strong>Produktbezogen</strong><p>Klar abgegrenzter Zertifizierungsumfang.</p></div>
          <div><span>02</span><strong>Nachweisbasiert</strong><p>Herstellungsprozess und Belege werden geprüft.</p></div>
          <div><span>03</span><strong>Versioniert</strong><p>Entscheidung ist an eine Standardfassung gebunden.</p></div>
          <div><span>04</span><strong>Verifizierbar</strong><p>Status und Produktbezug sind öffentlich prüfbar.</p></div>
        </div>
      </section>

      <section className="manufacturerBenefits">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">ZERTIFIZIERUNGSSYSTEM</div>
              <h2>Mehr als ein Zeichen auf dem Produkt.</h2>
            </div>
            <p>
              Die Kennzeichnung erhält ihren Wert durch die Verbindung von abgegrenztem Produktumfang,
              dokumentierter Prüfung, eindeutiger Zertifizierungs-ID und öffentlicher Verifizierung.
            </p>
          </div>

          <div className="manufacturerBenefitGrid">
            {certificationValue.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
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
            <div className="sectionNo">EIGNUNG FÜR DEN STANDARD</div>
            <h2>Vier Voraussetzungen für eine belastbare Prüfung.</h2>
          </div>
          <p>
            Entscheidend ist nicht, ob ein Produkt handwerklich aussieht. Entscheidend ist,
            ob die menschliche Herstellung wesentlich, klar abgrenzbar und nachvollziehbar belegbar ist.
          </p>
        </div>

        <div className="manufacturerFitGrid">
          {suitable.map(([title, copy]) => (
            <article key={title}>
              <strong>{title}</strong>
              <p>{copy}</p>
            </article>
          ))}
        </div>

        <div className="manufacturerScopeNote">
          <span>GELTUNGSBEREICH</span>
          <p>Lebensmittel, Medizinprodukte und andere stark regulierte Kategorien sind nicht Gegenstand des aktuellen Standards.</p>
        </div>
      </section>

      <section className="manufacturerEvidence">
        <div className="shell manufacturerEvidenceGrid">
          <div>
            <div className="sectionNo">VORBEREITUNG</div>
            <h2>Diese Informationen sollten für die Prüfung vorliegen.</h2>
            <p>
              Nicht jeder Nachweis muss bereits mit der ersten Anfrage vollständig eingereicht werden.
              Für eine belastbare Prüfung müssen die relevanten Produktionsinformationen jedoch nachvollziehbar verfügbar sein.
            </p>
          </div>

          <div className="manufacturerEvidenceList">
            {evidence.map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manufacturerProcess" id="ablauf">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">ZERTIFIZIERUNGSVERFAHREN</div>
              <h2>Vom Produkt zur öffentlichen Verifizierung.</h2>
            </div>
            <p>
              Jeder Schritt baut auf dem vorherigen auf. Dadurch bleiben Zertifizierungsumfang,
              Prüfung, Entscheidung und öffentlicher Status miteinander verknüpft.
            </p>
          </div>

          <div className="manufacturerProcessGrid">
            {process.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="manufacturerApplication" id="zertifizierungsanfrage">
        <div className="shell manufacturerApplicationGrid">
          <div className="manufacturerApplicationIntro">
            <div className="sectionNo">ZERTIFIZIERUNGSANFRAGE</div>
            <h2>Starten Sie mit der fachlichen Vorprüfung.</h2>
            <p>
              Mit den folgenden Angaben erfassen wir Produkt, Herstellungsprozess und die wesentlichen Rahmenbedingungen.
              Daraus lässt sich ableiten, ob das Produkt grundsätzlich in den Geltungsbereich des Standards fällt
              und welche Informationen für die weitere Prüfung benötigt werden.
            </p>
            <div className="applicationReference">
              <span>GEPRÜFT WERDEN</span>
              <strong>Produkt · Herstellung · Standorte · Fremdfertigung · Nachweise</strong>
            </div>
          </div>

          <form className="interestForm certificationRequestForm" onSubmit={submit}>
            <div className="formSectionLabel"><span>01</span><strong>Unternehmen & Kontakt</strong></div>

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

            <label>
              Website
              <input name="website" value={form.website} onChange={change} placeholder="https://…" />
            </label>

            <div className="formSectionLabel"><span>02</span><strong>Produkt</strong></div>

            <div className="formTwo">
              <label>
                Produkt / Produktfamilie *
                <input required name="product_name" value={form.product_name} onChange={change} placeholder="z. B. Ledertasche Modell X" />
              </label>
              <label>
                Produktkategorie
                <input name="product_category" value={form.product_category} onChange={change} placeholder="z. B. Lederwaren" />
              </label>
            </div>

            <div className="formSectionLabel"><span>03</span><strong>Herstellung</strong></div>

            <label>
              Produktionsorte *
              <input required name="production_locations" value={form.production_locations} onChange={change} placeholder="Stadt / Land der wesentlichen Herstellungsschritte" />
            </label>

            <label>
              Relevante Fremdfertigung
              <select name="external_manufacturing" value={form.external_manufacturing} onChange={change}>
                <option value="">Bitte auswählen</option>
                <option value="Keine relevante Fremdfertigung">Keine relevante Fremdfertigung</option>
                <option value="Teilweise Fremdfertigung">Teilweise Fremdfertigung</option>
                <option value="Wesentliche Fremdfertigung">Wesentliche Fremdfertigung</option>
                <option value="Noch zu klären">Noch zu klären</option>
              </select>
            </label>

            <label>
              Herstellungsprozess kurz beschreiben *
              <textarea required name="message" value={form.message} onChange={change} rows="6" placeholder="Welche wesentlichen Herstellungsschritte erfolgen durch Menschen? Welche Maschinen oder automatisierten Teilprozesse werden eingesetzt?" />
            </label>

            <div className="formSectionLabel"><span>04</span><strong>Nachweise</strong></div>

            <label>
              Welche Nachweise sind vorhanden?
              <textarea name="evidence_note" value={form.evidence_note} onChange={change} rows="4" placeholder="z. B. Prozessdokumentation, Fertigungsunterlagen, Fotos/Videos, Lieferanten- oder Standortinformationen" />
            </label>

            <label className="honeypot" aria-hidden="true">
              Firmenwebsite bestätigen
              <input tabIndex="-1" autoComplete="off" name="company_website" value={form.company_website} onChange={change} />
            </label>

            <div className="applicationSubmit">
              <button className="button primary formButton" disabled={state.loading}>
                {state.loading ? 'Wird gesendet …' : 'Zertifizierungsanfrage senden'}
              </button>
              <small className="formLegal">Die Angaben werden ausschließlich zur Bearbeitung Ihrer Zertifizierungsanfrage gespeichert.</small>
            </div>

            {state.message && <p className={state.success ? 'formMessage success' : 'formMessage'}>{state.message}</p>}
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
