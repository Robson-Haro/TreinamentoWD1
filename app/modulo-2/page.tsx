import Image from "next/image";
import Link from "next/link";
import "../modulo-1/experience.css";
import styles from "./abertura.module.css";

export default function ModuloDois() {
  return (
    <main className={`module-two-screen ${styles.opening}`}>
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${styles.navLinks}`}>
          <Link className="back-link" href="/modulo-1/conclusao">← Conclusão do Módulo 1</Link>
          <Link className="back-link module-two-nav-link" href="/">Voltar ao início</Link>
        </div>
      </nav>

      <section className={styles.stage} aria-labelledby="module-two-title">
        <div className={`module-two-glass-panel ${styles.panel}`}>
          <header className={styles.heading}>
            <span className={styles.eyebrow}>Jornada de aprimoramento e qualificação da liderança</span>
            <p className={styles.badge}>Módulo 2</p>
            <h1 id="module-two-title">Comunicação <strong>e Excelência</strong></h1>
          </header>
          <p className={styles.intro}>
            Uma nova etapa para transformar intenção em clareza, presença em conexão
            e conversas em resultados de excelência.
          </p>
          <div className={styles.partnership}>
            <div className={styles.logoCard}>
              <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={160} height={160} priority />
            </div>
            <Link className={`module-two-button ${styles.start}`} href="/modulo-2/influencia">
              <span>Iniciar Módulo 2</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <div className={styles.logoCard}>
              <Image src="/grupo-wd.png" alt="Grupo WD" width={160} height={160} priority />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
