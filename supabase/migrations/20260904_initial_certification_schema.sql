create table public.standard_versions (
  id uuid primary key default gen_random_uuid(),
  version text not null unique,
  title text not null,
  description text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.manufacturers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  website text,
  country_code text,
  description text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.products (
  id uuid primary key default gen_random_uuid(),
  manufacturer_id uuid not null references public.manufacturers(id) on delete cascade,
  name text not null,
  slug text not null,
  description text,
  product_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (manufacturer_id, slug)
);

create table public.certifications (
  id uuid primary key default gen_random_uuid(),
  public_id text not null unique,
  product_id uuid not null references public.products(id) on delete cascade,
  standard_version_id uuid references public.standard_versions(id) on delete restrict,
  status text not null default 'draft'
    check (status in ('draft','under_review','active','suspended','expired','revoked')),
  issued_at timestamptz,
  valid_until timestamptz,
  last_verified_at timestamptz,
  public_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (valid_until is null or issued_at is null or valid_until >= issued_at)
);

create index certifications_public_id_idx on public.certifications(public_id);
create index certifications_product_id_idx on public.certifications(product_id);
create index certifications_status_idx on public.certifications(status);
create index products_manufacturer_id_idx on public.products(manufacturer_id);

alter table public.standard_versions enable row level security;
alter table public.manufacturers enable row level security;
alter table public.products enable row level security;
alter table public.certifications enable row level security;

revoke all on public.standard_versions from anon, authenticated;
revoke all on public.manufacturers from anon, authenticated;
revoke all on public.products from anon, authenticated;
revoke all on public.certifications from anon, authenticated;

grant select on public.standard_versions to anon, authenticated;
grant select on public.manufacturers to anon, authenticated;
grant select on public.products to anon, authenticated;
grant select on public.certifications to anon, authenticated;

create policy "Published standards are public"
on public.standard_versions
for select
to anon, authenticated
using (published = true);

create policy "Public certifications are readable"
on public.certifications
for select
to anon, authenticated
using (status in ('active','suspended','expired','revoked'));

create policy "Manufacturers with public certifications are readable"
on public.manufacturers
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.products p
    join public.certifications c on c.product_id = p.id
    where p.manufacturer_id = manufacturers.id
      and c.status in ('active','suspended','expired','revoked')
  )
);

create policy "Products with public certifications are readable"
on public.products
for select
to anon, authenticated
using (
  exists (
    select 1
    from public.certifications c
    where c.product_id = products.id
      and c.status in ('active','suspended','expired','revoked')
  )
);
