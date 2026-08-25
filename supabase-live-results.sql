-- RESULTADOS AO VIVO — Jornada de Liderança Grupo WD
-- Execute uma única vez no SQL Editor do Supabase.

create extension if not exists pgcrypto;

create table if not exists public.leadership_results (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_code text not null default 'grupo-wd-2026-08-29',
  diretivo int not null check (diretivo between 0 and 100),
  modelador int not null check (modelador between 0 and 100),
  participativo int not null check (participativo between 0 and 100),
  agregador int not null check (agregador between 0 and 100),
  coaching int not null check (coaching between 0 and 100),
  visionario int not null check (visionario between 0 and 100),
  top text not null,
  second text not null,
  lowest text not null
);

create table if not exists public.disc_results (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_code text not null default 'grupo-wd-2026-08-29',
  nome text,
  email text,
  dominancia int not null check (dominancia between 0 and 100),
  influencia int not null check (influencia between 0 and 100),
  estabilidade int not null check (estabilidade between 0 and 100),
  conformidade int not null check (conformidade between 0 and 100),
  top text not null,
  second text not null,
  lowest text not null
);

alter table public.leadership_results add column if not exists session_code text not null default 'grupo-wd-2026-08-29';
alter table public.disc_results add column if not exists session_code text not null default 'grupo-wd-2026-08-29';

create index if not exists leadership_results_session_idx on public.leadership_results(session_code, created_at);
create index if not exists disc_results_session_idx on public.disc_results(session_code, created_at);

alter table public.leadership_results enable row level security;
alter table public.disc_results enable row level security;

drop policy if exists "Inserir resultados lideranca" on public.leadership_results;
drop policy if exists "Ler resultados lideranca" on public.leadership_results;
drop policy if exists "Inserir resultados disc" on public.disc_results;
drop policy if exists "Ler resultados disc" on public.disc_results;

create policy "Inserir resultados lideranca" on public.leadership_results for insert to anon with check (session_code <> '');
create policy "Ler resultados lideranca" on public.leadership_results for select to anon using (session_code <> '');
create policy "Inserir resultados disc" on public.disc_results for insert to anon with check (session_code <> '');
create policy "Ler resultados disc" on public.disc_results for select to anon using (session_code <> '');

grant usage on schema public to anon;
grant select, insert on public.leadership_results to anon;
grant select, insert on public.disc_results to anon;
