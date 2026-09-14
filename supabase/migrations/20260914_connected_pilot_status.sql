alter table public.certifications
  drop constraint if exists certifications_status_check;

alter table public.certifications
  add constraint certifications_status_check
  check (status in ('draft','under_review','pilot','active','suspended','expired','revoked'));

alter table public.certifications
  drop constraint if exists certifications_context_status_check;

alter table public.certifications
  add constraint certifications_context_status_check
  check (
    (certification_context = 'connected_pilot' and status in ('draft','under_review','pilot'))
    or
    (certification_context = 'standard' and status <> 'pilot')
  );

alter table public.certification_events
  drop constraint if exists certification_events_status_after_check;

alter table public.certification_events
  add constraint certification_events_status_after_check
  check (status_after is null or status_after in ('draft','under_review','pilot','active','suspended','expired','revoked'));

alter policy "Public certifications are readable"
on public.certifications
using (status in ('under_review','pilot','active','suspended','expired','revoked'));

alter policy "Manufacturers with public certifications are readable"
on public.manufacturers
using (
  exists (
    select 1
    from public.products p
    join public.certifications c on c.product_id = p.id
    where p.manufacturer_id = manufacturers.id
      and c.status in ('under_review','pilot','active','suspended','expired','revoked')
  )
);

alter policy "Products with public certifications are readable"
on public.products
using (
  exists (
    select 1
    from public.certifications c
    where c.product_id = products.id
      and c.status in ('under_review','pilot','active','suspended','expired','revoked')
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
      and c.status in ('under_review','pilot','active','suspended','expired','revoked')
  )
);
