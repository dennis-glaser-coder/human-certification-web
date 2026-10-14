alter table public.certifications
  drop constraint certifications_certification_context_check;

alter table public.certifications
  add constraint certifications_certification_context_check
  check (certification_context in ('standard', 'connected_standard', 'connected_pilot'));

alter table public.certifications
  drop constraint certifications_connected_pilot_disclosure_check;

alter table public.certifications
  add constraint certifications_connected_relationship_disclosure_check
  check (
    certification_context not in ('connected_standard', 'connected_pilot')
    or nullif(trim(relationship_disclosure), '') is not null
  );

alter table public.certifications
  drop constraint certifications_context_status_check;

alter table public.certifications
  add constraint certifications_context_status_check
  check (
    certification_context <> 'connected_pilot'
    or status in ('draft', 'under_review', 'pilot')
  );

comment on column public.certifications.certification_context is
  'standard: regular assessment; connected_standard: regular assessment of a related company with public relationship disclosure; connected_pilot: legacy related pilot assessment without permission to use the mark. A pilot status represents process testing, not company ownership.';

insert into public.standard_versions (version, title, description, published, published_at)
values (
  '1.1',
  'Made by Human Standard 1.1',
  'Reguläre Zertifizierung verbundener Unternehmen bei gleichen Prüfanforderungen und öffentlicher Offenlegung; Pilotprüfungen bleiben gesondert.',
  true,
  '2026-10-14 00:00:00+02'
)
on conflict (version) do update
set title = excluded.title,
    description = excluded.description,
    published = excluded.published,
    published_at = excluded.published_at;
