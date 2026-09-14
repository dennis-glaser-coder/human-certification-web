insert into public.standard_versions (version, title, description, published, published_at)
values (
  '1.0',
  'Made by Human Standard 1.0',
  'Erste verbindliche Fassung für reale Made by Human Zertifizierungen.',
  true,
  '2026-09-14 00:00:00+02'
)
on conflict (version) do update
set title = excluded.title,
    description = excluded.description,
    published = excluded.published,
    published_at = excluded.published_at;

alter table public.manufacturers
  add column if not exists legal_name text;

comment on column public.manufacturers.legal_name is
  'Legal entity operating the publicly displayed manufacturer or brand name, when different from manufacturers.name.';

alter table public.certifications
  add column if not exists certification_context text not null default 'standard'
    check (certification_context in ('standard','connected_pilot')),
  add column if not exists relationship_disclosure text;

comment on column public.certifications.certification_context is
  'Public context of the certification. connected_pilot identifies a certification where the applicant is connected to the scheme owner.';

comment on column public.certifications.relationship_disclosure is
  'Public disclosure of a relevant legal, economic or personal relationship to the Made by Human scheme owner.';

alter table public.certifications
  drop constraint if exists certifications_connected_pilot_disclosure_check;

alter table public.certifications
  add constraint certifications_connected_pilot_disclosure_check
  check (
    certification_context <> 'connected_pilot'
    or nullif(trim(relationship_disclosure), '') is not null
  );
