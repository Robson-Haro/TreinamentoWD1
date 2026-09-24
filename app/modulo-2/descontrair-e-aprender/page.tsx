import "../../modulo-1/experience.css";

const moments = [
  { label: "Interagir", className: "relax-chip-one" },
  { label: "Sorrir", className: "relax-chip-two" },
  { label: "Conectar", className: "relax-chip-three" },
  { label: "Aprender", className: "relax-chip-four" },
];

export default function DescontrairEAprender() {
  return (
    <main className="module-two-screen relax-learn-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/leitura-dos-sentimentos">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 8</span>
        </div>
      </nav>

      <section className="relax-learn-stage">
        <article className="relax-learn-copy module-two-glass-panel">
          <span className="relax-learn-kicker">Momento de conexão</span>
          <h1>
            Descontrair
            <strong>é aprender.</strong>
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
        <a className="module-two-button" href="/modulo-2/operacao-em-alerta">
          <span>Iniciar estudo de caso</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <footer className="relax-learn-footer">
        <span>Comunicação e Excelência</span>
        <span>Módulo 2</span>
      </footer>
    </main>
  );
}
