import "../globals.css";
import "../modulo-1/experience.css";
import ReportClient, { DiscRow, LeadershipRow } from "./ReportClient";

export const dynamic = "force-dynamic";
export const metadata = { title: "Relatório dos testes | Grupo WD", robots: { index: false, follow: false } };
const SESSION_CODE = "grupo-wd-2026-08-29";

async function fetchResults<T>(table: string): Promise<T[]> {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
  if (!baseUrl || !anonKey) return [];
  const url = new URL(`${baseUrl}/rest/v1/${table}`);
  url.searchParams.set("select", "*"); url.searchParams.set("session_code", `eq.${SESSION_CODE}`); url.searchParams.set("order", "created_at.asc");
  try { const response = await fetch(url, { headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` }, cache: "no-store" }); return response.ok ? await response.json() as T[] : []; } catch { return []; }
}

export default async function RelatorioTestes() {
  const [disc, leadership] = await Promise.all([fetchResults<DiscRow>("disc_results"), fetchResults<LeadershipRow>("leadership_results")]);
  const namedDisc = disc.filter((row) => row.nome?.trim()).sort((a, b) => (a.nome || "").localeCompare(b.nome || "", "pt-BR"));
  return <main className="module-screen report-screen"><div className="ambient ambient-one" aria-hidden="true"/><div className="noise" aria-hidden="true"/>
    <nav className="topbar module-topbar"><a className="brand-mark" href="/">WD <span>×</span> RC</a><div className="screen-nav"><a className="back-link" href="/administrador">← Área do Administrador</a></div></nav>
    <section className="report-shell"><header className="lesson-heading dashboard-heading"><div><span className="eyebrow">Grupo WD · Ramos Consultoria</span><h1>Relatório dos testes</h1><p>Resultados individuais apresentados de forma simples, acolhedora e voltada ao desenvolvimento.</p></div><div className="lesson-logos"><img src="/grupo-wd.png" alt="Grupo WD"/><img src="/ramos-consultoria.png" alt="Ramos Consultoria"/></div></header>
      <ReportClient disc={namedDisc} leadership={leadership}/>
    </section>
  </main>;
}
