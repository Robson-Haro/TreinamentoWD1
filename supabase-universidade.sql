-- ============================================================
-- Universidade Corporativa Grupo WD
-- Jornada do Conhecimento — backend canônico
-- Execute este script no mesmo Supabase utilizado pelo TreinamentoWD1.
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists public.uc_participants (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  nome text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
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
  issued_at timestamptz not null default now()
);

create index if not exists uc_progress_email_idx
  on public.uc_progress(email, journey, updated_at desc);
create index if not exists uc_attempts_email_idx
  on public.uc_assessment_attempts(email, journey, module_id, created_at desc);
create index if not exists uc_certificates_email_idx
  on public.uc_certificates(email, issued_at desc);

alter table public.uc_participants enable row level security;
alter table public.uc_progress enable row level security;
alter table public.uc_assessment_attempts enable row level security;
alter table public.uc_certificates enable row level security;

-- As rotas /api/universidade usam SUPABASE_SERVICE_ROLE_KEY no servidor.
-- Nenhuma tabela da Universidade precisa ficar aberta ao navegador.
revoke all on public.uc_participants from anon;
revoke all on public.uc_progress from anon;
revoke all on public.uc_assessment_attempts from anon;
revoke all on public.uc_certificates from anon;

-- Jornada inicial já prevista:
-- lideranca / modulo-1 / "Se conhecendo para liderar"
-- lideranca / modulo-2 / "Comunicação e Excelência"
-- Aprovação mínima: 70% por módulo
-- Certificado: liberado após ambos os módulos com status "passed".
