import "../globals.css";
import "../modulo-1/experience.css";

export const dynamic = "force-dynamic";

const SESSION_CODE = "grupo-wd-2026-08-29";

type LeadershipRow = {
  id: string;
  created_at: string;
  nome?: string | null;
  email?: string | null;
  top: string;
  second: string;
  lowest: string;
  diretivo: number;
  modelador: number;
  participativo: number;
  agregador: number;
  coaching: number;
  visionario: number;
};

type DiscRow = {
  id: string;
  created_at: string;
  nome?: string | null;
  email?: string | null;
  top: string;
  second: string;
  lowest: string;
  dominancia: number;
  influencia: number;
  estabilidade: number;
  conformidade: number;
};

type Participant = {
  nome: string;
  email?: string | null;
  leadership?: LeadershipRow;
  disc?: DiscRow;
};

const leadershipLabels: Record<string, string> = {
  diretivo: "Diretivo",
  modelador: "Modelador",
  participativo: "Participativo",
  agregador: "Agregador",
  coaching: "Coaching",
  visionario: "Visionário",
};

const discLabels: Record<string, string> = {
  dominancia: "D · Dominância",
  influencia: "I · Influência",
  estabilidade: "S · Estabilidade",
  conformidade: "C · Conformidade",
};

const leadershipNotes: Record<string, string> = {
  diretivo: "Decide com rapidez, estabelece direção clara e tende a cobrar execução. O desenvolvimento está em equilibrar velocidade com escuta e participação.",
  modelador: "Eleva o padrão por meio do exemplo, da intensidade e da exigência por desempenho. Deve calibrar a pressão para preservar sustentabilidade e aprendizagem.",
  participativo: "Valoriza escuta, construção conjunta e compromisso do grupo. O ponto de atenção é manter agilidade quando a situação exige decisão rápida.",
  agregador: "Prioriza vínculo, confiança e clima de equipe. Tem força na coesão e deve combinar acolhimento com conversas firmes sobre desempenho.",
  coaching: "Desenvolve pessoas, estimula aprendizagem e autonomia. Precisa equilibrar o tempo de desenvolvimento com as urgências da operação.",
  visionario: "Mobiliza por propósito, futuro e direção estratégica. Ganha potência quando traduz a visão em prioridades, responsáveis e acompanhamento concreto.",
};

const discNotes: Record<string, string> = {
  dominancia: "Orientado a desafio, resultado e velocidade. Em cenários de pressão, tende a avançar rapidamente; deve preservar escuta, diplomacia e análise de impacto.",
  influencia: "Comunicativo, persuasivo e mobilizador. Cria energia no grupo e ganha consistência quando combina entusiasmo com disciplina e acompanhamento.",
  estabilidade: "Paciente, cooperativo e constante. Favorece segurança e coesão; precisa cuidar para não adiar conflitos ou mudanças necessárias.",
  conformidade: "Analítico, criterioso e orientado a padrões. Aumenta qualidade e controle; deve evitar cautela excessiva quando a decisão precisa ser rápida.",
};

async function fetchResults<T>(table: string): Promise<T[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!baseUrl || !anonKey) return [];

  const url = new URL(`${baseUrl}/rest/v1/${table}`);
  url.searchParams.set("select", "*");
  url.searchParams.set("session_code", `eq.${SESSION_CODE}`);
  url.searchParams.set("order", "created_at.desc");

  try {
    const response = await fetch(url, {
      headers: {
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
      },
      cache: "no-store",
    });
    if (!response.ok) return [];
    return (await response.json()) as T[];
  } catch {
    return [];
  }
}

function maskedEmail(email?: string | null) {
  if (!email || !email.includes("@")) return "—";
  const [user, domain] = email.split("@");
  const visible = user.slice(0, Math.min(3, user.length));
  return `${visible}${"•".repeat(Math.max(2, user.length - visible.length))}@${domain}`;
}

function formatDate(value?: string) {
  if (!value) return "—";
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  }).format(new Date(value));
}

function prevalence(rows: Array<{ top: string }>, labels: Record<string, string>) {
  const counts = rows.reduce<Record<string, number>>((acc, row) => {
    acc[row.top] = (acc[row.top] ?? 0) + 1;
    return acc;
  }, {});
  const first = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  if (!first) return "—";
  return `${labels[first[0]] ?? first[0]} · ${Math.round((first[1] / rows.length) * 100)}%`;
}

function scoreBar(label: string, value: number) {
  return (
    <div key={label} style={{ marginBottom: 11 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, fontSize: 13, marginBottom: 6 }}>
        <span>{label}</span><strong>{value}%</strong>
      </div>
      <div style={{ height: 7, borderRadius: 999, overflow: "hidden", background: "rgba(255,255,255,.08)" }}>
        <div style={{ width: `${Math.max(0, Math.min(100, value))}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg,#81714f,#d9ba6b)" }} />
      </div>
    </div>
  );
}

function combinedOpinion(person: Participant) {
  if (!person.leadership && !person.disc) return "Sem dados suficientes para gerar parecer.";
  if (!person.leadership) return `O DISC indica ${discLabels[person.disc!.top] ?? person.disc!.top}. O parecer combinado será concluído quando o teste de liderança for respondido.`;
  if (!person.disc) return `O estilo de liderança predominante é ${leadershipLabels[person.leadership.top] ?? person.leadership.top}. O parecer combinado será concluído quando o DISC for respondido.`;
  const lead = leadershipLabels[person.leadership.top] ?? person.leadership.top;
  const disc = discLabels[person.disc.top] ?? person.disc.top;
  return `A combinação de ${lead} com ${disc} sugere uma forma de liderar em que o estilo de condução e o padrão comportamental se reforçam. Para desenvolvimento, vale observar principalmente o equilíbrio entre o eixo mais forte e o menos ativado em cada instrumento, evitando que uma força natural se transforme em excesso sob pressão.`;
}

export default async function Administrador({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; status?: string }>;
}) {
  const params = await searchParams;
  const query = (params.q ?? "").trim().toLowerCase();
  const status = params.status ?? "todos";

  const [leadership, disc] = await Promise.all([
    fetchResults<LeadershipRow>("leadership_results"),
    fetchResults<DiscRow>("disc_results"),
  ]);

  const participants = new Map<string, Participant>();

  leadership.forEach((row) => {
    const key = row.email?.trim().toLowerCase() || `leadership-${row.id}`;
    const current = participants.get(key);
    participants.set(key, {
      nome: row.nome || current?.nome || "Participante sem identificação",
      email: row.email || current?.email,
      leadership: row,
      disc: current?.disc,
    });
  });

  disc.forEach((row) => {
    const key = row.email?.trim().toLowerCase() || `disc-${row.id}`;
    const current = participants.get(key);
    participants.set(key, {
      nome: row.nome || current?.nome || "Participante sem identificação",
      email: row.email || current?.email,
      leadership: current?.leadership,
      disc: row,
    });
  });

  const allParticipants = Array.from(participants.values()).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
  const complete = allParticipants.filter((p) => p.leadership && p.disc).length;
  const partial = allParticipants.length - complete;

  const filtered = allParticipants.filter((person) => {
    const matchesQuery = !query || person.nome.toLowerCase().includes(query) || (person.email ?? "").toLowerCase().includes(query);
    const matchesStatus = status === "todos" || (status === "completo" && person.leadership && person.disc) || (status === "parcial" && (!person.leadership || !person.disc));
    return matchesQuery && matchesStatus;
  });

  return (
    <main className="module-screen dashboard-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar" aria-label="Área administrativa">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/relatorio-testes">Relatório dos testes</a>
          <a className="back-link" href="/modulo-1/dashboard">Dashboard Liderança</a>
          <a className="back-link" href="/modulo-1/disc/dashboard">Dashboard DISC</a>
          <a className="back-link" href="/administrador">↻ Atualizar</a>
        </div>
      </nav>

      <section className="dashboard-lesson">
        <header className="lesson-heading dashboard-heading">
          <div>
            <span className="eyebrow">Área do Administrador · Grupo WD</span>
            <h1>Resultados individuais dos participantes</h1>
            <p>Acompanhamento nominal dos dois testes, status de conclusão, pontuações por dimensão e parecer individual combinado.</p>
          </div>
          <div className="lesson-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="admin-stats-grid" style={{ display: "grid", gap: 14, marginBottom: 22 }}>
          {[
            ["Participantes", allParticipants.length],
            ["Completaram os 2", complete],
            ["Pendentes / parciais", partial],
            ["Predom. Liderança", prevalence(leadership, leadershipLabels)],
            ["Predom. DISC", prevalence(disc, discLabels)],
          ].map(([label, value]) => (
            <div className="admin-card admin-stat-card" key={String(label)} style={{ padding: 20 }}>
              <span className="eyebrow">{label}</span>
              <strong style={{ display: "block", fontSize: typeof value === "number" ? 34 : 20, marginTop: 5 }}>{value}</strong>
            </div>
          ))}
        </div>

        <form method="get" className="admin-card admin-filter-card" style={{ padding: 18, display: "grid", gridTemplateColumns: "minmax(220px,1fr) 190px auto", gap: 12, marginBottom: 24, alignItems: "end" }}>
          <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em" }}>Buscar participante</span>
            <input name="q" defaultValue={params.q ?? ""} placeholder="Nome ou e-mail" style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,.14)", background: "rgba(255,255,255,.06)", color: "white" }} />
          </label>
          <label style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <span style={{ fontSize: 12, textTransform: "uppercase", letterSpacing: ".08em" }}>Status</span>
            <select name="status" defaultValue={status} style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,.14)", background: "#161719", color: "white" }}>
              <option value="todos">Todos</option>
              <option value="completo">Completo</option>
              <option value="parcial">Parcial</option>
            </select>
          </label>
          <button className="gold-button test-open" type="submit" style={{ border: 0, cursor: "pointer", minHeight: 44 }}><span>Filtrar</span></button>
        </form>

        <section className="admin-card admin-table-card" style={{ padding: 22, marginBottom: 26 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 14, alignItems: "end", marginBottom: 14, flexWrap: "wrap" }}>
            <div>
              <span className="eyebrow">Controle individual</span>
              <h2>{filtered.length} participante(s) exibido(s)</h2>
            </div>
            <p style={{ fontSize: 12 }}>E-mails permanecem mascarados nesta visão.</p>
          </div>
          <div className="admin-table-scroll">
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 860 }}>
            <thead>
              <tr>
                {['Participante','E-mail','Liderança','DISC','Última resposta','Status'].map((title) => (
                  <th key={title} style={{ textAlign: "left", padding: "12px 10px", borderBottom: "1px solid rgba(255,255,255,.14)", fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em" }}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((person, index) => {
                const lastDate = [person.leadership?.created_at, person.disc?.created_at].filter(Boolean).sort().reverse()[0];
                return (
                  <tr key={`${person.email ?? person.nome}-${index}`}>
                    <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}><strong>{person.nome}</strong></td>
                    <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>{maskedEmail(person.email)}</td>
                    <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>{person.leadership ? leadershipLabels[person.leadership.top] ?? person.leadership.top : "Pendente"}</td>
                    <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>{person.disc ? discLabels[person.disc.top] ?? person.disc.top : "Pendente"}</td>
                    <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>{formatDate(lastDate)}</td>
                    <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}><strong>{person.leadership && person.disc ? "Completo" : "Parcial"}</strong></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
          {!filtered.length ? <p style={{ marginTop: 16 }}>Nenhum participante encontrado para esse filtro.</p> : null}
        </section>

        <section>
          <div style={{ marginBottom: 16 }}>
            <span className="eyebrow">Prontuário de resultados</span>
            <h2>Abra cada participante para ver o resultado completo</h2>
          </div>

          <div className="admin-people-grid" style={{ display: "grid", gap: 14 }}>
            {filtered.map((person, index) => (
              <details className="admin-card admin-person-card" key={`detail-${person.email ?? person.nome}-${index}`} style={{ padding: 22 }}>
                <summary style={{ cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <div>
                    <strong style={{ fontSize: 19 }}>{person.nome}</strong>
                    <p style={{ marginTop: 4, fontSize: 12 }}>{maskedEmail(person.email)}</p>
                  </div>
                  <span style={{ border: "1px solid rgba(217,186,107,.45)", borderRadius: 999, padding: "7px 12px", fontSize: 12 }}>{person.leadership && person.disc ? "2/2 testes completos" : `${person.leadership ? 1 : 0 + (person.disc ? 1 : 0)}/2 testes`}</span>
                </summary>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))", gap: 18, marginTop: 22 }}>
                  <div style={{ padding: 20, border: "1px solid rgba(255,255,255,.09)", borderRadius: 14 }}>
                    <span className="eyebrow">Que tipo de líder você é?</span>
                    {person.leadership ? <>
                      <h3 style={{ fontSize: 21, marginBottom: 6 }}>{leadershipLabels[person.leadership.top] ?? person.leadership.top}</h3>
                      <p style={{ marginBottom: 18 }}>{leadershipNotes[person.leadership.top]}</p>
                      {scoreBar("Diretivo", person.leadership.diretivo)}
                      {scoreBar("Modelador", person.leadership.modelador)}
                      {scoreBar("Participativo", person.leadership.participativo)}
                      {scoreBar("Agregador", person.leadership.agregador)}
                      {scoreBar("Coaching", person.leadership.coaching)}
                      {scoreBar("Visionário", person.leadership.visionario)}
                      <p style={{ marginTop: 14, fontSize: 12 }}>2º estilo: <strong>{leadershipLabels[person.leadership.second] ?? person.leadership.second}</strong> · Menos ativado: <strong>{leadershipLabels[person.leadership.lowest] ?? person.leadership.lowest}</strong></p>
                    </> : <p>Teste ainda não respondido ou não vinculado a esta identificação.</p>}
                  </div>

                  <div style={{ padding: 20, border: "1px solid rgba(255,255,255,.09)", borderRadius: 14 }}>
                    <span className="eyebrow">DISC</span>
                    {person.disc ? <>
                      <h3 style={{ fontSize: 21, marginBottom: 6 }}>{discLabels[person.disc.top] ?? person.disc.top}</h3>
                      <p style={{ marginBottom: 18 }}>{discNotes[person.disc.top]}</p>
                      {scoreBar("Dominância", person.disc.dominancia)}
                      {scoreBar("Influência", person.disc.influencia)}
                      {scoreBar("Estabilidade", person.disc.estabilidade)}
                      {scoreBar("Conformidade", person.disc.conformidade)}
                      <p style={{ marginTop: 14, fontSize: 12 }}>2º fator: <strong>{discLabels[person.disc.second] ?? person.disc.second}</strong> · Menos ativado: <strong>{discLabels[person.disc.lowest] ?? person.disc.lowest}</strong></p>
                    </> : <p>DISC ainda não respondido ou não vinculado a esta identificação.</p>}
                  </div>
                </div>

                <div style={{ marginTop: 18, padding: 20, border: "1px solid rgba(217,186,107,.28)", borderRadius: 14, background: "rgba(217,186,107,.05)" }}>
                  <span className="eyebrow">Parecer combinado</span>
                  <p style={{ fontSize: 15, lineHeight: 1.7 }}>{combinedOpinion(person)}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
