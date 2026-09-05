-- ============================================================
-- Que tipo de líder você é? — Schema do Supabase
-- Pode ser executado novamente para atualizar a tabela sem apagar resultados.
-- ============================================================

create table if not exists public.leadership_results (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  session_code text not null default 'grupo-wd-2026-08-29',
  nome text,
  email text,
  answers jsonb not null default '{}'::jsonb,
  question_order jsonb not null default '[]'::jsonb,
  diretivo int not null,
  modelador int not null,
  participativo int not null,
  agregador int not null,
  coaching int not null,
  visionario int not null,
  top text not null,
  second text not null,
  lowest text not null
);

alter table public.leadership_results add column if not exists session_code text not null default 'grupo-wd-2026-08-29';
alter table public.leadership_results add column if not exists nome text;
alter table public.leadership_results add column if not exists email text;
alter table public.leadership_results add column if not exists answers jsonb not null default '{}'::jsonb;
alter table public.leadership_results add column if not exists question_order jsonb not null default '[]'::jsonb;

alter table public.leadership_results drop constraint if exists leadership_new_submission_complete;
alter table public.leadership_results add constraint leadership_new_submission_complete check (
  created_at < timestamptz '2026-09-05 00:00:00+00'
  or (
    length(btrim(nome)) >= 3
    and email ~* '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
    and jsonb_typeof(answers) = 'object'
    and answers ?& array['d1','d2','d3','d4','m1','m2','m3','m4','p1','p2','p3','p4','a1','a2','a3','a4','c1','c2','c3','c4','v1','v2','v3','v4']
    and jsonb_typeof(question_order) = 'array'
    and jsonb_array_length(question_order) = 24
  )
);

create index if not exists leadership_results_session_idx on public.leadership_results(session_code, created_at);
create index if not exists leadership_results_email_idx on public.leadership_results(session_code, email);
create index if not exists leadership_results_named_latest_idx on public.leadership_results(session_code, lower(email), created_at desc) where email is not null;

alter table public.leadership_results enable row level security;

drop policy if exists "Permitir insercao publica" on public.leadership_results;
drop policy if exists "Permitir leitura publica" on public.leadership_results;
drop policy if exists "Inserir resultados lideranca" on public.leadership_results;
drop policy if exists "Ler resultados lideranca" on public.leadership_results;

create policy "Inserir resultados lideranca"
  on public.leadership_results for insert to anon with check (
    session_code <> ''
    and length(btrim(nome)) >= 3
    and email ~* '^[^[:space:]@]+@[^[:space:]@]+[.][^[:space:]@]+$'
    and jsonb_typeof(answers) = 'object'
    and answers ?& array['d1','d2','d3','d4','m1','m2','m3','m4','p1','p2','p3','p4','a1','a2','a3','a4','c1','c2','c3','c4','v1','v2','v3','v4']
    and jsonb_typeof(question_order) = 'array'
    and jsonb_array_length(question_order) = 24
  );
create policy "Ler resultados lideranca"
  on public.leadership_results for select to anon using (session_code <> '');

grant usage on schema public to anon;
grant select, insert on public.leadership_results to anon;
