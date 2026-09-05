import type { Metadata } from "next";
import styles from "./resgatar.module.css";

export const metadata: Metadata = {
  title: "Resgatar Relatório | Jornada de Liderança",
};

export default function ResgatarRelatorio() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a className="brand-mark" href="/" aria-label="Página inicial">WD <span>×</span> RC</a>
        <a className={styles.back} href="/">← Voltar para a página inicial</a>
      </nav>
      <div className={styles.content}>
        <header className={styles.heading}>
          <div>
            <p className={styles.partnership}>Parceria do Grupo WD e Ramos Consultoria</p>
            <h1>Resgatar <span>Relatório</span></h1>
            <p>Relatórios da sua jornada de desenvolvimento da liderança.</p>
          </div>
          <div className={styles.logos}>
            <img src="/grupo-wd.png" alt="Grupo WD" width="72" height="72" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" width="72" height="72" />
          </div>
        </header>
        <section className={styles.card} aria-labelledby="reports-title">
          <svg className={styles.icon} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M13 5h15l9 9v29H13zM28 5v10h9M19 23h12M19 29h12M19 35h8" />
          </svg>
          <p className={styles.badge}>Em breve</p>
          <h2 id="reports-title">Seus relatórios estarão aqui</h2>
          <p>Os relatórios serão disponibilizados nesta página após a conclusão das análises.</p>
          <a className={styles.button} href="/">Voltar para a página inicial <span aria-hidden="true">→</span></a>
        </section>
      </div>
    </main>
  );
}
