import "../globals.css";
import styles from "./relatorio.module.css";
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
  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Navegação dos relatórios"><a className={styles.brand} href="/">WD <span>×</span> RC</a><a className={styles.backLink} href="/administrador">← Área do Administrador</a></nav>
    <section className={styles.shell}><header className={styles.heading}><div><span className="eyebrow">Grupo WD · Ramos Consultoria</span><h1>Relatório dos testes</h1><p>Resultados individuais apresentados de forma simples, acolhedora e voltada ao desenvolvimento.</p></div><div className={styles.logos}><img src="/grupo-wd.png" alt="Grupo WD"/><img src="/ramos-consultoria.png" alt="Ramos Consultoria"/></div></header>
      <ReportClient disc={namedDisc} leadership={leadership}/>
    </section>
  </main>;
}
