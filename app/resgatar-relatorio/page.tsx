import type { Metadata } from 'next';
import ReportPortal from './ReportPortal';
import styles from './resgatar.module.css';
export const metadata: Metadata = {
  title: 'Resgatar Relatório | Jornada de Liderança',
  robots: { index: false, follow: false },
  referrer: 'no-referrer',
};
export default function ResgatarRelatorio() {
  return <main className={styles.page}>
    <nav className={styles.nav} aria-label="Navegação principal">
      <a className="brand-mark" href="/" aria-label="Página inicial">WD <span>×</span> RC</a>
      <a className={styles.back} href="/">← Voltar para a página inicial</a>
    </nav>
    <div className={styles.content}>
      <header className={styles.heading}>
        <div><p className={styles.partnership}>Grupo WD · Ramos Consultoria</p><h1>Seu próximo passo <span>começa aqui.</span></h1><p>Resgate seu relatório e encontre caminhos para desenvolver sua liderança.</p></div>
        <div className={styles.logos}><img src="/grupo-wd.png" alt="Grupo WD" width="72" height="72"/><img src="/ramos-consultoria.png" alt="Ramos Consultoria" width="72" height="72"/></div>
      </header>
      <ReportPortal/>
    </div>
  </main>;
}
