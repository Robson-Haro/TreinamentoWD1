import Link from "next/link";
import "../../modulo-1/experience.css";
import styles from "./layout.module.css";

const moments = [
  { label: "Interagir", className: "relax-chip-one" },
  { label: "Sorrir", className: "relax-chip-two" },
  { label: "Conectar", className: "relax-chip-three" },
  { label: "Aprender", className: "relax-chip-four" },
];

export default function DescontrairEAprender() {
  return (
    <main className={`module-two-screen relax-learn-screen ${styles.screen}`}>
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className="screen-nav">
          <Link className="back-link" href="/modulo-2/leitura-dos-sentimentos">← Tela anterior</Link>
          <span className="module-two-step">Módulo 2 · Tela 10</span>
        </div>
      </nav>

      <section className="relax-learn-stage">
        <article className="relax-learn-copy module-two-glass-panel">
          <span className="relax-learn-kicker">Momento de conexão</span>
          <h1>
            Dinâmica{" "}
            <strong>da história.</strong>
          </h1>
          <p>
            Uma pausa leve para ativar a atenção, fortalecer vínculos
            e abrir espaço para novas aprendizagens.
          </p>

          <div className="relax-learn-prompt">
            <span>Respire.</span>
            <span>Interaja.</span>
            <span>Divirta-se.</span>
          </div>
        </article>

        <div className="relax-learn-visual" aria-label="Palavras que representam aprendizagem e conexão">
          <div className="relax-orbit relax-orbit-outer" aria-hidden="true" />
          <div className="relax-orbit relax-orbit-inner" aria-hidden="true" />
          <div className="relax-core" aria-hidden="true">
            <span>WD</span>
            <small>×</small>
            <span>RC</span>
          </div>
          {moments.map((moment) => (
            <div className={`relax-chip ${moment.className}`} key={moment.label}>
              {moment.label}
            </div>
          ))}
        </div>
      </section>

      <div className="module-two-next-row relax-learn-next">
        <Link className="module-two-button" href="/modulo-2/pausa-para-o-cafe">
          <span>Hora do café</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <footer className="relax-learn-footer">
        <span>Comunicação e Excelência</span>
        <span>Módulo 2</span>
      </footer>
    </main>
  );
}
