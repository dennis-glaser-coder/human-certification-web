create table public.certification_events (
  id uuid primary key default gen_random_uuid(),
  certification_id uuid not null references public.certifications(id) on delete cascade,
  event_type text not null check (
    event_type in ('issued','renewed','status_changed','suspended','reinstated','expired','revoked','note')
  ),
  status_after text check (
    status_after is null or status_after in ('draft','under_review','active','suspended','expired','revoked')
  ),
  title text not null,
  public_note text,
  is_public boolean not null default true,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

create index certification_events_certification_id_idx
  on public.certification_events(certification_id, occurred_at desc);

alter table public.certification_events enable row level security;

revoke all on public.certification_events from anon, authenticated;
grant select on public.certification_events to anon, authenticated;

create policy "Public certification history is readable"
on public.certification_events
for select
to anon, authenticated
using (
  is_public = true
  and exists (
    select 1
    from public.certifications c
    where c.id = certification_events.certification_id
      and c.status in ('active','suspended','expired','revoked')
  )
);

insert into public.certification_events (
  certification_id,
  event_type,
  status_after,
  title,
  public_note,
  occurred_at
)
select
  c.id,
  'issued',
  'active',
  'Zertifizierung ausgestellt',
  'Technischer Demoeintrag. Keine echte Zertifizierung.',
  coalesce(c.issued_at, c.created_at)
from public.certifications c
where c.public_id = 'HC-DEMO-0001'
  and not exists (
    select 1
    from public.certification_events e
    where e.certification_id = c.id
      and e.event_type = 'issued'
  );
