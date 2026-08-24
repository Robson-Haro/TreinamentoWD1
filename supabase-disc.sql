-- ============================================================
-- Teste DISC — Schema do Supabase
-- Execute este script inteiro no SQL Editor do seu projeto Supabase
-- (Painel do Supabase → SQL Editor → New query → colar → Run)
-- ============================================================

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

-- Caso a tabela já existisse de uma versão anterior deste teste,
-- estas duas linhas adicionam as colunas de nome/e-mail sem apagar dados:
alter table disc_results add column if not exists nome text;
alter table disc_results add column if not exists email text;

-- Ativa a segurança em nível de linha (obrigatório no Supabase)
alter table disc_results enable row level security;

-- Permite que qualquer participante (chave anon) grave seu resultado
create policy "Permitir insercao publica"
  on disc_results
  for insert
  to anon
  with check (true);

-- Permite que o painel do gestor leia os resultados agregados
-- (leitura pública com a chave anon — adequado para uso interno da equipe;
--  se quiser restringir, troque "to anon" por "to authenticated" e ative
--  o login do Supabase Auth antes de liberar o painel do gestor)
create policy "Permitir leitura publica"
  on disc_results
  for select
  to anon
  using (true);
