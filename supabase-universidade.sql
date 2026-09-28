-- ============================================================
-- Universidade Corporativa Grupo WD
-- Jornada do Conhecimento — backend canônico
-- Executar no projeto Supabase TreinamentoWD1.
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists public.uc_participants (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  nome text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.uc_question_bank (
  journey text not null,
  module_id text not null,
  question_id text not null,
  prompt text not null,
  options jsonb not null,
  correct_option int not null,
  explanation text not null,
  sort_order int not null,
  primary key (journey, module_id, question_id)
);

create table if not exists public.uc_progress (
  id uuid primary key default gen_random_uuid(),
  email text not null references public.uc_participants(email) on update cascade on delete cascade,
  journey text not null default 'lideranca',
  module_id text not null,
  status text not null check (status in ('not_started','in_progress','attempted','passed','completed')),
  score int check (score between 0 and 100),
  updated_at timestamptz not null default now(),
  unique(email, journey, module_id)
);

create table if not exists public.uc_assessment_attempts (
  id uuid primary key default gen_random_uuid(),
  email text not null references public.uc_participants(email) on update cascade on delete cascade,
  journey text not null default 'lideranca',
  module_id text not null,
  score int not null check (score between 0 and 100),
  passed boolean not null,
  answers jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.uc_certificates (
  id uuid primary key default gen_random_uuid(),
  email text not null references public.uc_participants(email) on update cascade on delete cascade,
  journey text not null default 'lideranca',
  certificate_code text not null unique,
  module_1_score int not null check (module_1_score between 0 and 100),
  module_2_score int not null check (module_2_score between 0 and 100),
  issued_at timestamptz not null default now(),
  unique(email, journey)
);

create index if not exists uc_progress_email_idx
  on public.uc_progress(email, journey, updated_at desc);
create index if not exists uc_attempts_email_idx
  on public.uc_assessment_attempts(email, journey, module_id, created_at desc);
create index if not exists uc_certificates_email_idx
  on public.uc_certificates(email, issued_at desc);
create index if not exists uc_question_bank_module_idx
  on public.uc_question_bank(journey, module_id, sort_order);

insert into public.uc_question_bank
(journey,module_id,question_id,prompt,options,correct_option,explanation,sort_order)
values
('lideranca','modulo-1','m1q1','Qual comportamento melhor representa liderança pelo exemplo?',
 '["Cobrar padrões que o líder não precisa seguir","Demonstrar na prática o comportamento e o padrão que espera da equipe","Evitar decisões difíceis para preservar o clima","Delegar toda responsabilidade sobre resultados"]'::jsonb,
 1,'O exemplo do líder transforma o padrão esperado em comportamento observável.',1),
('lideranca','modulo-1','m1q2','No DISC, a letra D representa principalmente:',
 '["Dominância","Disciplina","Desenvolvimento","Delegação"]'::jsonb,
 0,'D corresponde a Dominância; I a Influência; S a Estabilidade; C a Conformidade.',2),
('lideranca','modulo-1','m1q3','Diante de uma decisão difícil, o líder deve:',
 '["Buscar agradar a todos antes de decidir","Evitar o desconforto e adiar a escolha","Ouvir, explicar critérios e assumir a responsabilidade pela decisão","Transferir a decisão para a equipe em qualquer situação"]'::jsonb,
 2,'Liderar inclui decidir com responsabilidade, transparência e respeito, mesmo quando a escolha não agrada a todos.',3),
('lideranca','modulo-1','m1q4','Qual prática ajuda a melhorar atenção e foco?',
 '["Tratar todas as demandas como igualmente urgentes","Definir prioridade, reduzir distrações e observar sinais relevantes","Executar várias tarefas simultaneamente sem critério","Evitar pausas de reflexão"]'::jsonb,
 1,'Foco exige seleção consciente do que merece atenção e redução de ruído.',4),
('lideranca','modulo-1','m1q5','Autoconhecimento é útil para a liderança porque ajuda a:',
 '["Eliminar completamente pontos fracos","Reconhecer padrões próprios e ajustar o comportamento ao contexto","Usar um único estilo de liderança em qualquer cenário","Evitar feedback da equipe"]'::jsonb,
 1,'Autoconhecimento amplia escolha comportamental e reduz respostas automáticas.',5),
('lideranca','modulo-1','m1q6','Em uma leitura de cenário, o líder precisa observar:',
 '["Somente o resultado final","Pessoas, riscos, contexto, prioridades e consequências","Apenas a opinião da pessoa mais experiente","Somente o que já aconteceu no passado"]'::jsonb,
 1,'Boa decisão exige uma visão ampla do sistema e das consequências.',6),
('lideranca','modulo-1','m1q7','Qual frase está mais alinhada à responsabilidade do líder?',
 '["Meu papel é evitar qualquer conflito","Meu papel é tomar decisões com critérios claros e acompanhar seus efeitos","Meu papel é agradar a equipe para manter engajamento","Meu papel é decidir sozinho sempre"]'::jsonb,
 1,'Responsabilidade envolve critérios, decisão, comunicação e acompanhamento.',7),
('lideranca','modulo-1','m1q8','Uma força comportamental pode virar excesso quando:',
 '["É usada com consciência e adaptada ao contexto","É repetida automaticamente mesmo quando a situação pede outra resposta","Recebe feedback","É combinada com outras competências"]'::jsonb,
 1,'Toda força precisa de calibragem; em excesso, pode produzir efeitos opostos ao desejado.',8),

('lideranca','modulo-2','m2q1','Comunicar bem significa:',
 '["Apenas transmitir a informação","Falar mais alto para garantir atenção","Garantir que a mensagem foi compreendida e que responsabilidades ficaram claras","Usar sempre o mesmo canal"]'::jsonb,
 2,'A comunicação só se completa quando existe entendimento compartilhado.',1),
('lideranca','modulo-2','m2q2','Qual pergunta verifica entendimento de forma mais eficaz?',
 '["Entendeu?","Você concorda comigo?","Me conta como você entendeu o que combinamos","Posso considerar resolvido?"]'::jsonb,
 2,'Pedir que a pessoa explique com as próprias palavras reduz falsa concordância.',2),
('lideranca','modulo-2','m2q3','Na Liderança Situacional, um profissional com pouca experiência tende a precisar de:',
 '["Mais orientação e clareza","Delegação total e pouca comunicação","Somente reconhecimento público","Nenhuma definição de expectativa"]'::jsonb,
 0,'Quanto menor o domínio da tarefa, maior a necessidade de direção clara.',3),
('lideranca','modulo-2','m2q4','Segurança psicológica significa que a equipe:',
 '["Nunca é cobrada","Pode falar, perguntar, admitir dúvidas e erros sem medo de humilhação","Evita discordar da liderança","Recebe apenas feedback positivo"]'::jsonb,
 1,'Segurança psicológica permite participação franca sem retirar responsabilidade por desempenho.',4),
('lideranca','modulo-2','m2q5','Uma expectativa bem comunicada deve deixar claro:',
 '["Somente o prazo","Somente o responsável","O que, por que, resultado esperado, prazo e responsáveis","Apenas o que deu errado antes"]'::jsonb,
 2,'Clareza reduz interpretação e aumenta a chance de execução correta.',5),
('lideranca','modulo-2','m2q6','Em excelência operacional, resultados sustentáveis são consequência de:',
 '["Comportamentos consistentes que fortalecem processos","Esforços isolados de última hora","Perfeccionismo em todos os detalhes","Aumento permanente de cobrança"]'::jsonb,
 0,'Comportamentos moldam processos, e processos consistentes sustentam resultados.',6),
('lideranca','modulo-2','m2q7','Normalização do desvio ocorre quando:',
 '["Um padrão é melhorado formalmente","Pequenas exceções passam a ser aceitas como normais","A equipe reporta um risco imediatamente","Um processo é documentado"]'::jsonb,
 1,'Quando desvios deixam de gerar alerta, o risco cresce silenciosamente.',7),
('lideranca','modulo-2','m2q8','Qualidade na origem significa:',
 '["Inspecionar tudo apenas no final","Detectar, entender e corrigir o problema o mais cedo possível","Aceitar retrabalho como parte normal da operação","Transferir a falha para outra área"]'::jsonb,
 1,'Quanto mais cedo a anomalia é tratada, menor o custo e a propagação do erro.',8),
('lideranca','modulo-2','m2q9','Uma reunião eficaz começa com:',
 '["Uma pauta aberta sem objetivo","Um objetivo claro e o resultado esperado da conversa","Uma apresentação longa","Uma lista de problemas sem responsáveis"]'::jsonb,
 1,'Objetivo e resultado esperado orientam tempo, participação e decisão.',9),
('lideranca','modulo-2','m2q10','Reconhecer publicamente e corrigir em particular ajuda a:',
 '["Evitar qualquer cobrança","Preservar dignidade, reforçar bons comportamentos e manter responsabilidade","Substituir feedback específico","Reduzir a autonomia da equipe"]'::jsonb,
 1,'A forma do feedback influencia confiança, aprendizagem e qualidade da relação.',10)
on conflict (journey,module_id,question_id) do update set
  prompt = excluded.prompt,
  options = excluded.options,
  correct_option = excluded.correct_option,
  explanation = excluded.explanation,
  sort_order = excluded.sort_order;

alter table public.uc_participants enable row level security;
alter table public.uc_question_bank enable row level security;
alter table public.uc_progress enable row level security;
alter table public.uc_assessment_attempts enable row level security;
alter table public.uc_certificates enable row level security;

revoke all on public.uc_participants from anon, authenticated;
revoke all on public.uc_question_bank from anon, authenticated;
revoke all on public.uc_progress from anon, authenticated;
revoke all on public.uc_assessment_attempts from anon, authenticated;
revoke all on public.uc_certificates from anon, authenticated;

create or replace function public.uc_get_questionnaire(
  p_journey text,
  p_module_id text
)
returns table (
  question_id text,
  prompt text,
  options jsonb,
  sort_order int
)
language sql
stable
security definer
set search_path = public
as $$
  select q.question_id, q.prompt, q.options, q.sort_order
  from public.uc_question_bank q
  where q.journey = p_journey
    and q.module_id = p_module_id
  order by q.sort_order;
$$;

create or replace function public.uc_submit_assessment(
  p_email text,
  p_nome text,
  p_journey text,
  p_module_id text,
  p_answers jsonb
)
returns table (
  score int,
  passed boolean
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_email text := lower(trim(p_email));
  v_nome text := trim(p_nome);
  v_total int;
  v_correct int;
  v_score int;
  v_passed boolean;
begin
  if length(v_nome) < 3 or position('@' in v_email) < 2 then
    raise exception 'Participante inválido';
  end if;

  select count(*),
         count(*) filter (
           where coalesce(p_answers ->> q.question_id, '') ~ '^[0-9]+$'
             and (p_answers ->> q.question_id)::int = q.correct_option
         )
    into v_total, v_correct
  from public.uc_question_bank q
  where q.journey = p_journey
    and q.module_id = p_module_id;

  if v_total = 0 then
    raise exception 'Questionário não encontrado';
  end if;

  v_score := round((v_correct::numeric / v_total::numeric) * 100)::int;
  v_passed := v_score >= 70;

  insert into public.uc_participants(email, nome, updated_at)
  values (v_email, v_nome, now())
  on conflict (email) do update
    set nome = excluded.nome,
        updated_at = now();

  insert into public.uc_assessment_attempts(
    email, journey, module_id, score, passed, answers
  )
  values (
    v_email, p_journey, p_module_id, v_score, v_passed, p_answers
  );

  insert into public.uc_progress(
    email, journey, module_id, status, score, updated_at
  )
  values (
    v_email,
    p_journey,
    p_module_id,
    case when v_passed then 'passed' else 'attempted' end,
    v_score,
    now()
  )
  on conflict (email, journey, module_id) do update set
    status = case
      when public.uc_progress.status = 'passed' or excluded.status = 'passed' then 'passed'
      else excluded.status
    end,
    score = greatest(coalesce(public.uc_progress.score, 0), excluded.score),
    updated_at = now();

  return query select v_score, v_passed;
end;
$$;

create or replace function public.uc_issue_certificate(
  p_email text,
  p_nome text,
  p_journey text default 'lideranca'
)
returns table (
  certificate_code text,
  issued_at timestamptz,
  module_1_score int,
  module_2_score int
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_email text := lower(trim(p_email));
  v_nome text := trim(p_nome);
  v_m1 int;
  v_m2 int;
  v_code text;
  v_issued timestamptz;
begin
  if length(v_nome) < 3 or position('@' in v_email) < 2 then
    raise exception 'Participante inválido';
  end if;

  select p.score into v_m1
  from public.uc_progress p
  where p.email = v_email
    and p.journey = p_journey
    and p.module_id = 'modulo-1'
    and p.status = 'passed'
  limit 1;

  select p.score into v_m2
  from public.uc_progress p
  where p.email = v_email
    and p.journey = p_journey
    and p.module_id = 'modulo-2'
    and p.status = 'passed'
  limit 1;

  if coalesce(v_m1, 0) < 70 or coalesce(v_m2, 0) < 70 then
    raise exception 'Requisitos de certificação ainda não atendidos';
  end if;

  select c.certificate_code, c.issued_at
    into v_code, v_issued
  from public.uc_certificates c
  where c.email = v_email and c.journey = p_journey
  limit 1;

  if v_code is null then
    v_code := 'WD-LID-' || to_char(now(), 'YYYY') || '-' ||
      upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 8));
    v_issued := now();

    insert into public.uc_certificates(
      email, journey, certificate_code, module_1_score, module_2_score, issued_at
    )
    values(v_email, p_journey, v_code, v_m1, v_m2, v_issued);
  end if;

  return query select v_code, v_issued, v_m1, v_m2;
end;
$$;

create or replace function public.uc_get_progress(
  p_email text
)
returns jsonb
language sql
stable
security definer
set search_path = public
as $$
  select jsonb_build_object(
    'progress',
    coalesce((
      select jsonb_agg(
        jsonb_build_object(
          'journey', p.journey,
          'module_id', p.module_id,
          'status', p.status,
          'score', p.score,
          'updated_at', p.updated_at
        ) order by p.updated_at
      )
      from public.uc_progress p
      where p.email = lower(trim(p_email))
    ), '[]'::jsonb),
    'certificates',
    coalesce((
      select jsonb_agg(
        jsonb_build_object(
          'journey', c.journey,
          'certificate_code', c.certificate_code,
          'issued_at', c.issued_at,
          'module_1_score', c.module_1_score,
          'module_2_score', c.module_2_score
        ) order by c.issued_at desc
      )
      from public.uc_certificates c
      where c.email = lower(trim(p_email))
    ), '[]'::jsonb)
  );
$$;

revoke all on function public.uc_get_questionnaire(text,text) from public;
revoke all on function public.uc_submit_assessment(text,text,text,text,jsonb) from public;
revoke all on function public.uc_issue_certificate(text,text,text) from public;
revoke all on function public.uc_get_progress(text) from public;

grant execute on function public.uc_get_questionnaire(text,text) to anon, authenticated;
grant execute on function public.uc_submit_assessment(text,text,text,text,jsonb) to anon, authenticated;
grant execute on function public.uc_issue_certificate(text,text,text) to anon, authenticated;
grant execute on function public.uc_get_progress(text) to anon, authenticated;

-- Regras iniciais:
-- Jornada: lideranca
-- Módulo 1: "Se conhecendo para liderar"
-- Módulo 2: "Comunicação e Excelência"
-- Nota mínima por módulo: 70%
-- Certificado: liberado somente após os dois módulos aprovados.
