import "../experience.css";

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
  diretivo: "Tende a decidir com rapidez, estabelecer direção clara e cobrar execução. O ponto de atenção é equilibrar velocidade com escuta e participação da equipe.",
  modelador: "Eleva o padrão por meio do exemplo e da exigência por desempenho. Funciona bem com times maduros; deve cuidar para não transformar excelência em pressão excessiva.",
  participativo: "Valoriza escuta, construção conjunta e compromisso do grupo. Gera engajamento, mas precisa preservar agilidade quando a situação exige decisão rápida.",
  agregador: "Prioriza vínculo, confiança e clima de equipe. É forte na reconstrução de relações; deve combinar acolhimento com conversas firmes sobre desempenho.",
  coaching: "Desenvolve pessoas, estimula aprendizagem e amplia autonomia. O desafio é calibrar o tempo de desenvolvimento com as demandas imediatas da operação.",
  visionario: "Mobiliza por propósito, futuro e direção estratégica. O potencial aumenta quando a visão é traduzida em prioridades, responsabilidades e acompanhamento concreto.",
};

const discNotes: Record<string, string> = {
  dominancia: "Perfil orientado a desafio, resultado e velocidade. Pode contribuir muito em cenários de pressão, desde que mantenha escuta, diplomacia e análise de impacto.",
  influencia: "Perfil comunicativo, persuasivo e mobilizador. Tende a criar energia no grupo; ganha consistência quando combina entusiasmo com disciplina e acompanhamento.",
  estabilidade: "Perfil paciente, cooperativo e constante. Favorece segurança e coesão; precisa cuidar para não adiar conflitos ou mudanças necessárias.",
  conformidade: "Perfil analítico, criterioso e orientado a padrões. Aumenta qualidade e controle; deve evitar excesso de cautela quando a decisão precisa ser rápida.",
};

async function fetchResults<T>(table: string): Promise<T[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!baseUrl || !anonKey) return [];

  const url = new URL(`${baseUrl}/rest/v1/${table}`);
  url.searchParams.set("select", "*");
  url.searchParams.set("session_code", `eq.${SESSION_CODE}`);
  url.searchParams.set("order", "created_at.asc");

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

function prevalence(rows: Array<{ top: string }>, labels: Record<string, string>) {
  const counts = rows.reduce<Record<string, number>>((acc, row) => {
    acc[row.top] = (acc[row.top] ?? 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts)
    .map(([key, count]) => ({ key, label: labels[key] ?? key, count, percentage: rows.length ? Math.round((count / rows.length) * 100) : 0 }))
    .sort((a, b) => b.count - a.count);
}

function maskedEmail(email?: string | null) {
  if (!email || !email.includes("@")) return "—";
  const [user, domain] = email.split("@");
  const visible = user.slice(0, Math.min(3, user.length));
  return `${visible}${"•".repeat(Math.max(2, user.length - visible.length))}@${domain}`;
}

export default async function ResultadosIndividuais() {
  const [leadership, disc] = await Promise.all([
    fetchResults<LeadershipRow>("leadership_results"),
    fetchResults<DiscRow>("disc_results"),
  ]);

  const leadershipPrevalence = prevalence(leadership, leadershipLabels);
  const discPrevalence = prevalence(disc, discLabels);

  const participants = new Map<string, { nome: string; email?: string | null; leadership?: LeadershipRow; disc?: DiscRow }>();

  leadership.forEach((row) => {
    const key = row.email?.trim().toLowerCase() || `leadership-${row.id}`;
    participants.set(key, {
      ...(participants.get(key) ?? { nome: row.nome || "Participante sem identificação" }),
      nome: row.nome || participants.get(key)?.nome || "Participante sem identificação",
      email: row.email,
      leadership: row,
    });
  });

  disc.forEach((row) => {
    const key = row.email?.trim().toLowerCase() || `disc-${row.id}`;
    participants.set(key, {
      ...(participants.get(key) ?? { nome: row.nome || "Participante sem identificação" }),
      nome: row.nome || participants.get(key)?.nome || "Participante sem identificação",
      email: row.email,
      disc: row,
    });
  });

  const participantList = Array.from(participants.values()).sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));

  return (
    <main className="module-screen dashboard-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/dashboard">← Liderança</a>
          <a className="back-link" href="/modulo-1/disc/dashboard">DISC →</a>
        </div>
      </nav>

      <section className="dashboard-lesson">
        <header className="lesson-heading dashboard-heading">
          <div>
            <span className="eyebrow">Painel do facilitador · sessão {SESSION_CODE}</span>
            <h1>Resultados consolidados e individuais</h1>
            <p>Visão do grupo, predominâncias e rastreabilidade de cada participante nos testes de Liderança e DISC.</p>
          </div>
          <div className="lesson-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 18, marginBottom: 24 }}>
          <section className="qr-card" style={{ padding: 24 }}>
            <span className="eyebrow">Que tipo de líder você é?</span>
            <h2 style={{ marginBottom: 10 }}>{leadership.length} respostas</h2>
            <p><strong>Predominância:</strong> {leadershipPrevalence[0]?.label ?? "Aguardando respostas"}{leadershipPrevalence[0] ? ` · ${leadershipPrevalence[0].percentage}%` : ""}</p>
            {leadershipPrevalence[0] ? <p style={{ marginTop: 10 }}>{leadershipNotes[leadershipPrevalence[0].key]}</p> : null}
          </section>

          <section className="qr-card" style={{ padding: 24 }}>
            <span className="eyebrow">DISC</span>
            <h2 style={{ marginBottom: 10 }}>{disc.length} respostas</h2>
            <p><strong>Predominância:</strong> {discPrevalence[0]?.label ?? "Aguardando respostas"}{discPrevalence[0] ? ` · ${discPrevalence[0].percentage}%` : ""}</p>
            {discPrevalence[0] ? <p style={{ marginTop: 10 }}>{discNotes[discPrevalence[0].key]}</p> : null}
          </section>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginBottom: 30 }}>
          <section className="qr-card" style={{ padding: 24 }}>
            <h2 style={{ marginBottom: 14 }}>Distribuição dos estilos de liderança</h2>
            {leadershipPrevalence.length ? leadershipPrevalence.map((item) => (
              <div key={item.key} style={{ display: "flex", justifyContent: "space-between", gap: 14, padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                <span>{item.label}</span><strong>{item.count} · {item.percentage}%</strong>
              </div>
            )) : <p>Sem respostas registradas nesta sessão.</p>}
          </section>

          <section className="qr-card" style={{ padding: 24 }}>
            <h2 style={{ marginBottom: 14 }}>Distribuição DISC</h2>
            {discPrevalence.length ? discPrevalence.map((item) => (
              <div key={item.key} style={{ display: "flex", justifyContent: "space-between", gap: 14, padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                <span>{item.label}</span><strong>{item.count} · {item.percentage}%</strong>
              </div>
            )) : <p>Sem respostas registradas nesta sessão.</p>}
          </section>
        </div>

        <section className="qr-card" style={{ padding: 24, overflowX: "auto", marginBottom: 30 }}>
          <div style={{ marginBottom: 16 }}>
            <span className="eyebrow">Rastreabilidade</span>
            <h2>Resultado separado de cada participante</h2>
            <p>O e-mail aparece mascarado nesta visão para reduzir exposição de dados pessoais.</p>
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 780 }}>
            <thead>
              <tr>
                {['Participante','E-mail','Liderança','DISC','Status'].map((title) => (
                  <th key={title} style={{ textAlign: "left", padding: "12px 10px", borderBottom: "1px solid rgba(255,255,255,.14)", fontSize: 12, textTransform: "uppercase", letterSpacing: ".06em" }}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {participantList.map((person, index) => (
                <tr key={`${person.email ?? person.nome}-${index}`}>
                  <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}><strong>{person.nome}</strong></td>
                  <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>{maskedEmail(person.email)}</td>
                  <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>{person.leadership ? leadershipLabels[person.leadership.top] ?? person.leadership.top : "Pendente"}</td>
                  <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>{person.disc ? discLabels[person.disc.top] ?? person.disc.top : "Pendente"}</td>
                  <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(255,255,255,.07)" }}>{person.leadership && person.disc ? "Completo" : "Parcial"}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {!participantList.length ? <p style={{ marginTop: 14 }}>Nenhum resultado recebido ainda.</p> : null}
        </section>

        <section>
          <div style={{ marginBottom: 16 }}>
            <span className="eyebrow">Parecer individual</span>
            <h2>Leitura combinada Liderança + DISC</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 18 }}>
            {participantList.map((person, index) => (
              <article className="qr-card" key={`parecer-${person.email ?? person.nome}-${index}`} style={{ padding: 24 }}>
                <h2 style={{ fontSize: 20, marginBottom: 4 }}>{person.nome}</h2>
                <p style={{ fontSize: 12, marginBottom: 16 }}>{maskedEmail(person.email)}</p>
                {person.leadership ? (
                  <div style={{ marginBottom: 16 }}>
                    <strong>Liderança · {leadershipLabels[person.leadership.top] ?? person.leadership.top}</strong>
                    <p style={{ marginTop: 6 }}>{leadershipNotes[person.leadership.top] ?? "Perfil registrado no teste de liderança."}</p>
                  </div>
                ) : <p style={{ marginBottom: 16 }}>Teste de liderança ainda não localizado para este participante.</p>}
                {person.disc ? (
                  <div>
                    <strong>DISC · {discLabels[person.disc.top] ?? person.disc.top}</strong>
                    <p style={{ marginTop: 6 }}>{discNotes[person.disc.top] ?? "Perfil registrado no DISC."}</p>
                  </div>
                ) : <p>DISC ainda não localizado para este participante.</p>}
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
