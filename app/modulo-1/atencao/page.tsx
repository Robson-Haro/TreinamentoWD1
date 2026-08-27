import StroopExercise from "./StroopExercise";
import styles from "./stroop.module.css";

export default function DesafioDeAtencao() {
  return (
    <main className={styles.screen}>
      <div className={styles.ambientOne} aria-hidden="true" />
      <div className={styles.ambientTwo} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />

      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <a className="back-link" href="/">← Voltar para Home</a>
      </nav>

      <section className={styles.lesson}>
        <header className={styles.heading}>
          <div>
            <span className="eyebrow">Módulo 1 · Tela 2</span>
            <h1>O cérebro no <strong>piloto automático</strong></h1>
            <p>Um exercício rápido sobre atenção, interferência e tomada de decisão.</p>
          </div>
          <div className={styles.logos} aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <span>×</span>
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>
        <StroopExercise />
      </section>
    </main>
  );
}
