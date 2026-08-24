-- ============================================================
-- Qual líder você é? — Schema do Supabase
-- Execute este script inteiro no SQL Editor do seu projeto Supabase
-- (Painel do Supabase → SQL Editor → New query → colar → Run)
-- ============================================================

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

-- Ativa a segurança em nível de linha (obrigatório no Supabase)
alter table leadership_results enable row level security;

-- Permite que qualquer participante (chave anon) grave seu resultado
create policy "Permitir insercao publica"
  on leadership_results
  for insert
  to anon
  with check (true);

-- Permite que o painel do gestor leia os resultados agregados
-- (leitura pública com a chave anon — adequado para uso interno da equipe;
--  se quiser restringir, troque "to anon" por "to authenticated" e ative
--  o login do Supabase Auth antes de liberar o painel do gestor)
create policy "Permitir leitura publica"
  on leadership_results
  for select
  to anon
  using (true);
