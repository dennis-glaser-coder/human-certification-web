'use client';

import { useState } from 'react';
import Link from 'next/link';
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
  ['Für ein bestimmtes Produkt', 'Die Zertifizierung gilt für ein klar benanntes Produkt oder eine klar benannte Produktfamilie.'],
  ['Prüfung nach festen Kriterien', 'Wir prüfen Herstellungsprozess, Produktionsorte und Belege anhand des Standards.'],
  ['Eigene Zertifizierungs-ID', 'Nach positiver Entscheidung erhält die Zertifizierung eine eindeutige ID und einen öffentlichen Registereintrag.'],
  ['Öffentlich prüfbar', 'Im Register sind Produkt, Standard, Status und Gültigkeit öffentlich einsehbar.'],
];

const suitable = [
  ['Physisches Produkt', 'Das zu prüfende Endprodukt oder die Produktfamilie lässt sich eindeutig beschreiben und abgrenzen.'],
  ['Menschliche Herstellung', 'Die Arbeitsschritte, die das Produkt wesentlich prägen, werden tatsächlich von Menschen ausgeführt.'],
  ['Klare Produktionsorte', 'Es muss erkennbar sein, wo das Produkt hergestellt wird und welche wichtigen Schritte andere Betriebe übernehmen.'],
  ['Belege zur Herstellung', 'Unterlagen, Prozessinformationen oder andere Belege müssen zeigen können, wie das Produkt tatsächlich hergestellt wird.'],
];

const evidence = [
  ['Prozessbeschreibung', 'Eine verständliche Übersicht der wichtigsten Herstellungsschritte – vom Material oder Bauteil bis zum fertigen Produkt.'],
  ['Produktionsorte', 'Orte, an denen die wichtigen Arbeitsschritte für das Produkt stattfinden.'],
  ['Externe Fertigung', 'Angaben zu wichtigen Arbeitsschritten, die außerhalb des eigenen Betriebs ausgeführt werden.'],
  ['Nachweise', 'Unterlagen oder Informationen, die zeigen, dass der beschriebene Herstellungsprozess tatsächlich so stattfindet.'],
];

const certificationProcess = [
  ['Anfrage', 'Wir schauen uns Produkt, Hersteller und Herstellungsprozess für eine erste Einschätzung an.'],
  ['Was wird zertifiziert?', 'Wir legen fest, welches Produkt oder welche Produktfamilie, welche Produktionsorte und welche externen Arbeitsschritte zur Zertifizierung gehören.'],
  ['Vor-Ort-Prüfung', 'Wir prüfen beim Hersteller, welche Arbeitsschritte Menschen ausführen, welche Maschinen eingesetzt werden und wo die wichtigen Schritte stattfinden.'],
  ['Bewertung & Entscheidung', 'Wir gleichen die Ergebnisse und Belege mit dem Standard ab, klären offene Punkte und halten die Entscheidung fest.'],
  ['Register & Zeichen', 'Nach positiver Entscheidung vergeben wir eine ID, veröffentlichen den Status und geben die Nutzung des Zeichens frei.'],
];

const markUseBenefits = [
  ['Zertifizierungszeichen', 'Zeichen für das zertifizierte Produkt.'],
  ['QR & Registerlink', 'Direkter Weg zum öffentlichen Registereintrag.'],
  ['Verpackung & Digital', 'Freigegebene Anwendungen für Verpackung, Produktseiten, Kataloge und Verkaufsunterlagen.'],
  ['Für Kunden & Geschäftspartner', 'Klare Formulierungen mit Verweis auf Produkt, Status und Standard.'],
];

const manufacturerFaq = [
  ['Dürfen Maschinen eingesetzt werden?', 'Ja. Maschinen dürfen die Arbeit unterstützen. Entscheidend ist, dass die Herstellungsschritte, die das Produkt wesentlich prägen, weiterhin tatsächlich von Menschen ausgeführt werden.'],
  ['Können mehrere Produktvarianten gemeinsam zertifiziert werden?', 'Ja, wenn die Varianten weitgehend gleich hergestellt werden und sinnvoll zu einer Produktfamilie zusammengefasst werden können.'],
  ['Was gilt bei mehreren Standorten oder externer Fertigung?', 'Alle Produktionsorte und externen Betriebe, die wichtige Herstellungsschritte übernehmen, müssen angegeben und dem Produkt zugeordnet werden.'],
  ['Welche Unterlagen werden benötigt?', 'Wir brauchen Informationen dazu, wie und wo das Produkt hergestellt wird und welche wichtigen Schritte andere Betriebe übernehmen. Welche Belege im Einzelfall nötig sind, klären wir in der Vorbereitung.'],
  ['Was passiert bei Änderungen an Produkt oder Produktion?', 'Wenn sich wichtige Herstellungsschritte, Produktionsorte oder externe Fertigung ändern, kann eine erneute Prüfung nötig werden.'],
  ['Woraus setzen sich die Kosten zusammen?', 'Zu unserem Modell gehören die Erstprüfung und eine jährliche Lizenz zur Markennutzung. Zusätzliche Produktfamilien und weitere Standorte können den Umfang verändern. Konkrete Preise veröffentlichen wir erst, wenn sie verbindlich festgelegt sind.'],
];

export default function ManufacturerPage() {
  const assetBase = process.env.NEXT_PUBLIC_ASSET_BASE || '';
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

      <section className="manufacturerHeroArt">
        <div className="shell manufacturerHeroArtGrid">
          <div className="manufacturerHeroArtCopy">
            <div className="eyebrow">ZERTIFIZIERUNG FÜR HERSTELLER</div>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Menschliche Herstellung. Als Produktmerkmal zertifiziert.</h1>
            <p className="lead">
              Wir prüfen vor Ort, welche menschliche Arbeit Ihr Produkt prägt. Wenn die Kriterien erfüllt sind,
              erhält die Zertifizierung eine eindeutige ID und einen öffentlichen Registereintrag.
            </p>
            <div className="manufacturerHeroActions">
              <a className="button primary" href="#zertifizierungsanfrage">Zertifizierung anfragen</a>
              <a className="button secondary" href="#ablauf">Ablauf ansehen</a>
            </div>
          </div>
          <div className="manufacturerHeroArtVisual">
            <img
              src={assetBase + '/brand/IMG_1039.webp'}
              alt="Menschliche Holzbearbeitung an einer Bandsäge in einer Werkstatt"
            />
            <div className="manufacturerHeroCredential">
              <img src={assetBase + '/brand/made-by-human-logo.png'} alt="Made by Human – Verified Human Production" />
              <div>
                <span>NACH POSITIVER ENTSCHEIDUNG</span>
                <strong>Ein sichtbarer Nachweis für einen realen Herstellungsunterschied.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manufacturerMetaBand" aria-label="Kernbestandteile der Zertifizierung">
        <div className="shell manufacturerMetaGrid">
          <div><strong>Für ein bestimmtes Produkt</strong><p>Die Zertifizierung gilt nur für das benannte Produkt oder die Produktfamilie.</p></div>
          <div><strong>Vor Ort geprüft</strong><p>Wir prüfen die tatsächliche Herstellung beim Hersteller.</p></div>
          <div><strong>Mit fester Standardfassung</strong><p>Die Entscheidung bezieht sich immer auf eine bestimmte Fassung des Standards.</p></div>
          <div><strong>Öffentlich prüfbar</strong><p>Im Register kann jeder sehen, für welches Produkt die Zertifizierung gilt und welchen Status sie hat.</p></div>
        </div>
      </section>

      <section className="manufacturerBenefits">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">NUTZEN FÜR HERSTELLER</div>
              <h2>Zeigen Sie, wie Ihr Produkt entsteht.</h2>
            </div>
            <p>
              Nach positiver Zertifizierung können Sie auf Produktseite, Verpackung und im Verkauf zeigen,
              welche menschliche Arbeit hinter Ihrem Produkt steht. Über Zertifizierungs-ID und Register
              bleibt klar, für welches Produkt die Zertifizierung gilt.
            </p>
          </div>

          <div className="manufacturerBenefitGrid">
            {certificationValue.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>

          <div className="manufacturerMarkSummary">
            <div>
              <span>NACH POSITIVER ZERTIFIZIERUNG</span>
              <strong>So lässt sich der Nachweis nutzen.</strong>
            </div>
            <div className="manufacturerMarkSummaryItems">
              {markUseBenefits.map(([title, copy]) => (
                <div key={title}><strong>{title}</strong><p>{copy}</p></div>
              ))}
            </div>
            <Link href="/markennutzung">Regeln zur Markennutzung →</Link>
          </div>
        </div>
      </section>

      <section className="shell manufacturerFit">
        <div className="sectionIntro compact">
          <div>
            <div className="sectionNo">EIGNUNG FÜR DEN STANDARD</div>
            <h2>Wann ein Produkt grundsätzlich für die Prüfung geeignet ist.</h2>
          </div>
          <p>
            Entscheidend ist nicht, ob ein Produkt handwerklich aussieht. Entscheidend ist,
            ob menschliche Arbeit einen wesentlichen Teil der Herstellung ausmacht und sich belegen lässt.
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
          <span>DERZEIT NICHT AUFGENOMMEN</span>
          <p>Lebensmittel, Medizinprodukte und andere stark regulierte Kategorien nehmen wir derzeit nicht auf.</p>
        </div>

      </section>

      <section className="manufacturerEvidence">
        <div className="shell manufacturerEvidenceGrid">
          <div>
            <div className="sectionNo">VORBEREITUNG</div>
            <h2>Diese Informationen sollten für die Prüfung vorliegen.</h2>
            <p>
              Für die erste Anfrage müssen noch nicht alle Unterlagen vollständig vorliegen.
              Die Angaben helfen uns, die Vor-Ort-Prüfung vorzubereiten. Dort gleichen wir sie mit der tatsächlichen Produktion ab.
            </p>
            <figure className="manufacturerEvidencePhoto">
              <img
                src="https://images.unsplash.com/photo-1781389005078-d9e413d89c94?auto=format&fit=crop&w=1400&q=82"
                alt="Hände bei der manuellen Formgebung eines Produktes"
                loading="lazy"
              />
              <figcaption>Tatsächliche Herstellung statt bloßer Selbstauskunft</figcaption>
            </figure>
          </div>

          <div>
            <div className="manufacturerEvidenceList">
              {evidence.map(([title, copy]) => (
                <article key={title}>
                  <div>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="manufacturerGuideLinks">
              <Link href="/leitfaden/nachweise">Leitfaden Prüfnachweise →</Link>
              <Link href="/leitfaden/zertifizierungsumfang">Was genau zertifiziert wird →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="manufacturerProcess" id="ablauf">
        <div className="shell">
          <div className="sectionIntro compact">
            <div>
              <div className="sectionNo">ZERTIFIZIERUNGSVERFAHREN</div>
              <h2>So läuft die Zertifizierung ab.</h2>
            </div>
            <p>
              Die Schritte bauen aufeinander auf: Erst klären wir das Produkt, dann prüfen wir die Herstellung,
              treffen eine Entscheidung und veröffentlichen bei erfolgreicher Zertifizierung den Status.
            </p>
          </div>

          <div className="manufacturerProcessGrid">
            {certificationProcess.map(([title, copy]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="manufacturerFaq">
        <div className="shell manufacturerFaqGrid">
          <div>
            <div className="sectionNo">VOR DER ANFRAGE</div>
            <h2>Was Hersteller vor einer Zertifizierung wissen sollten.</h2>
            <p>
              Die Prüfung hängt vom Produkt und seiner Herstellung ab. Hier beantworten wir die Fragen,
              die Hersteller vor einer Anfrage am häufigsten haben.
            </p>
          </div>
          <div className="manufacturerFaqList">
            {manufacturerFaq.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="manufacturerApplication" id="zertifizierungsanfrage">
        <div className="shell manufacturerApplicationGrid">
          <div className="manufacturerApplicationIntro">
            <div className="sectionNo">ZERTIFIZIERUNGSANFRAGE</div>
            <h2>Zertifizierungsanfrage stellen.</h2>
            <p>
              Mit diesen Angaben bekommen wir einen ersten Überblick über Ihr Produkt und seine Herstellung.
              So können wir einschätzen, ob es grundsätzlich zum Standard passt,
              welche Informationen noch fehlen und wie die Vor-Ort-Prüfung vorbereitet werden kann.
            </p>
            <div className="applicationReference">
              <span>WIR SCHAUEN AUF</span>
              <strong>Produkt · Herstellung · Standorte · externe Fertigung · Belege</strong>
            </div>
          </div>

          <form className="interestForm certificationRequestForm" onSubmit={submit}>
            <div className="formSectionLabel"><strong>Unternehmen & Kontakt</strong></div>

            <label>
              Unternehmen *
              <input required minLength="2" maxLength="180" name="company_name" autoComplete="organization" value={form.company_name} onChange={change} placeholder="Unternehmensname" />
            </label>

            <div className="formTwo">
              <label>
                Ansprechpartner *
                <input required minLength="2" maxLength="180" name="contact_name" autoComplete="name" value={form.contact_name} onChange={change} placeholder="Vor- und Nachname" />
              </label>
              <label>
                E-Mail *
                <input required type="email" maxLength="320" name="email" autoComplete="email" value={form.email} onChange={change} placeholder="name@unternehmen.de" />
              </label>
            </div>

            <div className="formSectionLabel"><strong>Produkt & Herstellung</strong></div>

            <label>
              Produkt / Produktfamilie *
              <input required name="product_name" value={form.product_name} onChange={change} placeholder="z. B. Ledertasche Modell X" />
            </label>

            <label>
              Produktionsorte *
              <input required name="production_locations" value={form.production_locations} onChange={change} placeholder="Stadt / Land der wichtigsten Herstellungsschritte" />
            </label>

            <label>
              Herstellungsprozess kurz beschreiben *
              <textarea required name="message" value={form.message} onChange={change} rows="6" placeholder="Welche wichtigen Herstellungsschritte führen Menschen aus? Welche Maschinen oder automatisierten Schritte werden eingesetzt?" />
            </label>

            <details className="optionalFormDetails">
              <summary>Weitere Angaben – optional</summary>
              <div className="optionalFormFields">
                <label>
                  Website
                  <input type="url" autoComplete="url" name="website" value={form.website} onChange={change} placeholder="https://…" />
                </label>

                <label>
                  Produktkategorie
                  <input name="product_category" value={form.product_category} onChange={change} placeholder="z. B. Lederwaren" />
                </label>

                <label>
                  Externe Fertigung
                  <select name="external_manufacturing" value={form.external_manufacturing} onChange={change}>
                    <option value="">Bitte auswählen</option>
                    <option value="Keine relevante Fremdfertigung">Keine externe Fertigung</option>
                    <option value="Teilweise Fremdfertigung">Teilweise externe Fertigung</option>
                    <option value="Wesentliche Fremdfertigung">Wichtige Schritte extern gefertigt</option>
                    <option value="Noch zu klären">Noch zu klären</option>
                  </select>
                </label>

                <label>
                  Welche Belege sind bereits vorhanden?
                  <textarea name="evidence_note" value={form.evidence_note} onChange={change} rows="4" placeholder="z. B. Prozessdokumentation, Fertigungsunterlagen, Fotos/Videos, Lieferanten- oder Standortinformationen" />
                </label>
              </div>
            </details>

            <label className="honeypot" aria-hidden="true">
              Firmenwebsite bestätigen
              <input tabIndex="-1" autoComplete="off" name="company_website" value={form.company_website} onChange={change} />
            </label>

            <div className="applicationSubmit">
              <button type="submit" className="button primary formButton" disabled={state.loading} aria-busy={state.loading}>
                {state.loading ? 'Wird gesendet …' : 'Zertifizierungsanfrage senden'}
              </button>
              <small className="formLegal">
                Die Angaben werden zur Bearbeitung Ihrer Zertifizierungsanfrage verarbeitet.
                {' '}<Link href="/datenschutz">Datenschutzhinweise</Link>
              </small>
            </div>

            {state.message && <p role="status" aria-live="polite" className={state.success ? 'formMessage success' : 'formMessage'}>{state.message}</p>}
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
