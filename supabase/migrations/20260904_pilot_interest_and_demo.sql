create table if not exists public.manufacturer_interests (
  id uuid primary key default gen_random_uuid(),
  company_name text not null check (char_length(company_name) between 2 and 180),
  contact_name text not null check (char_length(contact_name) between 2 and 180),
  email text not null check (char_length(email) between 5 and 320),
  website text,
  product_category text,
  message text,
  created_at timestamptz not null default now(),
  status text not null default 'new' check (status in ('new','contacted','qualified','closed'))
);

alter table public.manufacturer_interests enable row level security;
revoke all on public.manufacturer_interests from anon, authenticated;
grant insert on public.manufacturer_interests to anon, authenticated;

create policy "Public can submit manufacturer interest"
on public.manufacturer_interests
for insert
to anon, authenticated
with check (
  status = 'new'
  and char_length(company_name) between 2 and 180
  and char_length(contact_name) between 2 and 180
  and char_length(email) between 5 and 320
);

insert into public.standard_versions (version, title, description, published, published_at)
values ('0.1-DEMO', 'Demo-Standard', 'Nicht produktiver Demodatensatz zur technischen Darstellung der Registerfunktion.', true, now())
on conflict (version) do nothing;

insert into public.manufacturers (name, slug, website, country_code, description)
values ('Demo Manufaktur GmbH', 'demo-manufaktur', 'https://example.com', 'DE', 'Demodatensatz – keine echte zertifizierte Organisation.')
on conflict (slug) do nothing;

insert into public.products (manufacturer_id, name, slug, description)
select m.id, 'Demo Produkt', 'demo-produkt', 'Demodatensatz – keine echte Zertifizierung.'
from public.manufacturers m
where m.slug = 'demo-manufaktur'
on conflict (manufacturer_id, slug) do nothing;

insert into public.certifications (
  public_id, product_id, standard_version_id, status, issued_at, valid_until, last_verified_at, public_note
)
select
  'HC-DEMO-0001',
  p.id,
  s.id,
  'active',
  now(),
  now() + interval '365 days',
  now(),
  'Demodatensatz zur Vorschau der öffentlichen Registerfunktion. Keine echte Zertifizierung.'
from public.products p
join public.manufacturers m on m.id = p.manufacturer_id
join public.standard_versions s on s.version = '0.1-DEMO'
where m.slug = 'demo-manufaktur' and p.slug = 'demo-produkt'
on conflict (public_id) do nothing;
