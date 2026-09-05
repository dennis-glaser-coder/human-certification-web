alter table public.certifications
  add column if not exists certification_scope text,
  add column if not exists production_locations text[] not null default '{}'::text[];

comment on column public.certifications.certification_scope is
  'Public product or product-family scope covered by this certification record.';

comment on column public.certifications.production_locations is
  'Public production locations relevant to the certified scope.';

alter policy "Public certifications are readable"
on public.certifications
using (status in ('under_review','active','suspended','expired','revoked'));

alter policy "Manufacturers with public certifications are readable"
on public.manufacturers
using (
  exists (
    select 1
    from public.products p
    join public.certifications c on c.product_id = p.id
    where p.manufacturer_id = manufacturers.id
      and c.status in ('under_review','active','suspended','expired','revoked')
  )
);

alter policy "Products with public certifications are readable"
on public.products
using (
  exists (
    select 1
    from public.certifications c
    where c.product_id = products.id
      and c.status in ('under_review','active','suspended','expired','revoked')
  )
);

alter policy "Public certification history is readable"
on public.certification_events
using (
  is_public = true
  and exists (
    select 1
    from public.certifications c
    where c.id = certification_events.certification_id
      and c.status in ('under_review','active','suspended','expired','revoked')
  )
);

update public.certifications
set certification_scope = coalesce(certification_scope, 'Demo Produkt · technischer Beispielumfang'),
    production_locations = case
      when cardinality(production_locations) = 0 then array['Deutschland · Demo-Standort']
      else production_locations
    end
where public_id = 'HC-DEMO-0001';
