-- Banco compartilhado dos testes do Módulo 1
-- Execute este arquivo uma única vez no SQL Editor do Supabase.

create table if not exists leadership_results (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
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

create table if not exists disc_results (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
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

alter table leadership_results enable row level security;
alter table disc_results enable row level security;

drop policy if exists "Permitir insercao publica" on leadership_results;
drop policy if exists "Permitir leitura publica" on leadership_results;
drop policy if exists "Permitir insercao publica" on disc_results;
drop policy if exists "Permitir leitura publica" on disc_results;

create policy "Permitir insercao publica"
  on leadership_results for insert to anon with check (true);
create policy "Permitir leitura publica"
  on leadership_results for select to anon using (true);
create policy "Permitir insercao publica"
  on disc_results for insert to anon with check (true);
create policy "Permitir leitura publica"
  on disc_results for select to anon using (true);

-- Os testes não coletam dados obrigatórios. Nome e e-mail no DISC são opcionais.
