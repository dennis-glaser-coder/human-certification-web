'use client';

import { useState } from 'react';
import Link from 'next/link';
import SiteHeader from '../../../components/SiteHeader';
import EnglishFooter from '../../../components/EnglishFooter';
import { getSupabaseBrowserClient } from '../../../lib/supabase';

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
  ['For a defined product', 'Certification applies to a clearly named product or product family.'],
  ['Verification against clear criteria', 'We assess the production process, locations and evidence against the standard.'],
  ['Unique certification ID', 'After a positive decision, the certification receives a unique ID and a public register record.'],
  ['Publicly verifiable', 'Product, standard, status and validity can be checked in the public register.'],
];

const suitable = [
  ['Physical product', 'The finished product or product family can be clearly described and delimited.'],
  ['Human production', 'The production steps that materially shape the product are actually carried out by people.'],
  ['Clear production locations', 'It must be clear where the product is made and which important steps are performed externally.'],
  ['Evidence of production', 'Information or documentation must make the actual production process verifiable.'],
];

const certificationProcess = [
  ['Initial request', 'We review the product, manufacturer and production process for an initial assessment.'],
  ['Define the scope', 'We define the product or product family, production locations and relevant external production steps.'],
  ['On-site verification', 'We review which steps are performed by people, which machinery is used and where the important steps take place.'],
  ['Assessment & decision', 'We compare the findings and evidence with the standard, resolve open points and record the decision.'],
  ['Register & mark', 'After a positive decision, we issue an ID, publish the status and approve use of the mark.'],
];

const faq = [
  ['Can machines be used?', 'Yes. Machinery may support production. The defining production steps must still actually be carried out by people.'],
  ['Can several product variants be certified together?', 'Yes, when the variants are produced in substantially the same way and can reasonably be grouped as a product family.'],
  ['What if production takes place at several locations?', 'All locations and external manufacturers responsible for important production steps must be declared and linked to the product.'],
  ['What evidence is required?', 'We need information about how and where the product is made and which important steps are performed externally. The exact evidence depends on the product.'],
  ['What if production changes later?', 'Important changes to production steps, locations or external manufacturing may require renewed verification.'],
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
      setState({ loading: false, success: true, message: 'Thank you. Your request has been received.' });
      return;
    }

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setState({ loading: false, success: false, message: 'The form is currently unavailable.' });
      return;
    }

    setState({ loading: true, success: false, message: '' });

    const productReference = [form.product_name.trim(), form.product_category.trim()].filter(Boolean).join(' · ');
    const structuredMessage = [
      form.production_locations.trim() && `Production locations: ${form.production_locations.trim()}`,
      form.external_manufacturing && `External manufacturing: ${form.external_manufacturing}`,
      form.evidence_note.trim() && `Available evidence: ${form.evidence_note.trim()}`,
      form.message.trim() && `Production process: ${form.message.trim()}`,
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
      setState({ loading: false, success: false, message: 'The request could not be sent. Please try again.' });
      return;
    }

    setForm(initialForm);
    setState({ loading: false, success: true, message: 'Thank you. Your certification request has been submitted.' });
  }

  return (
    <main className="manufacturerJourney" lang="en">
      <SiteHeader lang="en" />

      <section className="manufacturerHeroArt">
        <div className="shell manufacturerHeroArtGrid">
          <div className="manufacturerHeroArtCopy">
            <div className="eyebrow">CERTIFICATION FOR MANUFACTURERS</div>
            <div className="brandTrace" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
            <h1>Human production. Certified as a product attribute.</h1>
            <p className="lead">We verify on site which human work materially shapes your product. If the criteria are met, the certification receives a unique ID and a public register record.</p>
            <div className="manufacturerHeroActions"><a className="button primary" href="#certification-request">Request certification</a><a className="button secondary" href="#process">See the process</a></div>
          </div>
          <div className="manufacturerHeroArtVisual">
            <img src={assetBase + '/brand/IMG_1039.webp'} width="1536" height="1024" fetchPriority="high" decoding="async" alt="Human woodworking at a bandsaw in a workshop" />
            <div className="manufacturerHeroCredential"><img src={assetBase + '/brand/made-by-human-logo.webp?v=20260912-spacing'} alt="Made by Human – Verified Human Production" /><div><span>AFTER A POSITIVE DECISION</span><strong>Visible evidence for a real difference in how a product is made.</strong></div></div>
          </div>
        </div>
      </section>

      <section className="manufacturerMetaBand" aria-label="Core elements of certification">
        <div className="shell manufacturerMetaGrid">
          <div><strong>For a defined product</strong><p>Certification only applies to the named product or product family.</p></div>
          <div><strong>Verified on site</strong><p>We review the actual production process at the manufacturer.</p></div>
          <div><strong>Fixed standard version</strong><p>Every decision refers to a specific version of the standard.</p></div>
          <div><strong>Publicly verifiable</strong><p>The register shows which product is covered and its current status.</p></div>
        </div>
      </section>

      <section className="manufacturerBenefits">
        <div className="shell">
          <div className="sectionIntro compact"><div><div className="sectionNo">VALUE FOR MANUFACTURERS</div><h2>Show how your product is made.</h2></div><p>After successful certification, you can use the mark on the product page, packaging and in sales. The certification ID and register make the scope clear.</p></div>
          <div className="manufacturerBenefitGrid">{certificationValue.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="shell manufacturerFit">
        <div className="sectionIntro compact"><div><div className="sectionNo">FIT WITH THE STANDARD</div><h2>When a product may be suitable for verification.</h2></div><p>What matters is not whether a product looks handmade. What matters is whether human work makes a material contribution to production and can be evidenced.</p></div>
        <div className="manufacturerFitGrid">{suitable.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div>
        <div className="manufacturerScopeNote"><span>CURRENTLY OUT OF SCOPE</span><p>Food, medical devices and other heavily regulated categories are currently not accepted.</p></div>
      </section>

      <section className="manufacturerProcess" id="process">
        <div className="shell">
          <div className="sectionIntro compact"><div><div className="sectionNo">CERTIFICATION PROCESS</div><h2>How certification works.</h2></div><p>We first define the product and scope, then verify production, make a decision and publish the status after successful certification.</p></div>
          <div className="manufacturerProcessGrid">{certificationProcess.map(([title, copy]) => <article key={title}><strong>{title}</strong><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="manufacturerFaq">
        <div className="shell manufacturerFaqGrid">
          <div><div className="sectionNo">BEFORE YOU APPLY</div><h2>What manufacturers should know.</h2><p>The exact verification depends on the product and its production process.</p></div>
          <div className="manufacturerFaqList">{faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="manufacturerApplication" id="certification-request">
        <div className="shell manufacturerApplicationGrid">
          <div className="manufacturerApplicationIntro">
            <div className="sectionNo">CERTIFICATION REQUEST</div>
            <h2>Tell us about your product.</h2>
            <p>These details give us an initial overview of the product and how it is made. We can then assess whether it broadly fits the standard and what would need to be verified on site.</p>
            <div className="applicationReference"><span>WE LOOK AT</span><strong>Product · production · locations · external manufacturing · evidence</strong></div>
          </div>

          <form className="interestForm certificationRequestForm" onSubmit={submit}>
            <div className="formSectionLabel"><strong>Company & contact</strong></div>
            <label>Company *<input required minLength="2" maxLength="180" name="company_name" autoComplete="organization" value={form.company_name} onChange={change} placeholder="Company name" /></label>
            <div className="formTwo">
              <label>Contact person *<input required minLength="2" maxLength="180" name="contact_name" autoComplete="name" value={form.contact_name} onChange={change} placeholder="First and last name" /></label>
              <label>Email *<input required type="email" maxLength="320" name="email" autoComplete="email" value={form.email} onChange={change} placeholder="name@company.com" /></label>
            </div>

            <div className="formSectionLabel"><strong>Product & production</strong></div>
            <label>Product / product family *<input required name="product_name" value={form.product_name} onChange={change} placeholder="e.g. Leather bag model X" /></label>
            <label>Production locations *<input required name="production_locations" value={form.production_locations} onChange={change} placeholder="City / country of the main production steps" /></label>
            <label>Briefly describe the production process *<textarea required name="message" value={form.message} onChange={change} rows="6" placeholder="Which important production steps are carried out by people? Which machines or automated steps are used?" /></label>

            <details className="optionalFormDetails">
              <summary>Additional information – optional</summary>
              <div className="optionalFormFields">
                <label>Website<input type="url" autoComplete="url" name="website" value={form.website} onChange={change} placeholder="https://…" /></label>
                <label>Product category<input name="product_category" value={form.product_category} onChange={change} placeholder="e.g. Leather goods" /></label>
                <label>External manufacturing<select name="external_manufacturing" value={form.external_manufacturing} onChange={change}><option value="">Please select</option><option value="No relevant external manufacturing">No external manufacturing</option><option value="Partial external manufacturing">Partly external</option><option value="Material external manufacturing">Important steps external</option><option value="To be clarified">To be clarified</option></select></label>
                <label>What evidence is already available?<textarea name="evidence_note" value={form.evidence_note} onChange={change} rows="4" placeholder="e.g. process documentation, production records, photos/videos or location information" /></label>
              </div>
            </details>

            <label className="honeypot" aria-hidden="true">Confirm company website<input tabIndex="-1" autoComplete="off" name="company_website" value={form.company_website} onChange={change} /></label>

            <div className="applicationSubmit">
              <button type="submit" className="button primary formButton" disabled={state.loading} aria-busy={state.loading}>{state.loading ? 'Sending …' : 'Send certification request'}</button>
              <small className="formLegal">Your information is processed to handle the certification request. <Link href="/datenschutz">Privacy policy (German)</Link></small>
            </div>

            {state.message && <p role="status" aria-live="polite" className={state.success ? 'formMessage success' : 'formMessage'}>{state.message}</p>}
          </form>
        </div>
      </section>

      <EnglishFooter />
    </main>
  );
}
