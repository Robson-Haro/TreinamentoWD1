-- ============================================================
-- Teste DISC — Schema do Supabase
-- Pode ser executado novamente para atualizar a tabela sem apagar resultados.
-- ============================================================

create table if not exists public.disc_results (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  session_code text not null default 'grupo-wd-2026-08-29',
  nome text,
  email text,
  dominancia int not null,
  influencia int not null,
  estabilidade int not null,
  conformidade int not null,
  top text not null,
  second text not null,
  lowest text not null
);

alter table public.disc_results add column if not exists session_code text not null default 'grupo-wd-2026-08-29';
alter table public.disc_results add column if not exists nome text;
alter table public.disc_results add column if not exists email text;

create index if not exists disc_results_session_idx on public.disc_results(session_code, created_at);
create index if not exists disc_results_email_idx on public.disc_results(session_code, email);

alter table public.disc_results enable row level security;

drop policy if exists "Permitir insercao publica" on public.disc_results;
drop policy if exists "Permitir leitura publica" on public.disc_results;
drop policy if exists "Inserir resultados disc" on public.disc_results;
drop policy if exists "Ler resultados disc" on public.disc_results;

create policy "Inserir resultados disc"
  on public.disc_results for insert to anon with check (session_code <> '');
create policy "Ler resultados disc"
  on public.disc_results for select to anon using (session_code <> '');

grant usage on schema public to anon;
grant select, insert on public.disc_results to anon;
