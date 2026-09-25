import "../../modulo-1/experience.css";

export default function PausaParaOCafe() {
  return (
    <main className="module-two-screen module-two-coffee-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/dicas-comunicacao-lideres">← Dicas de comunicação</a>
          <span className="module-two-step">Módulo 2 · Tela 12</span>
        </div>
      </nav>

      <section className="module-two-coffee-stage">
        <div className="module-two-coffee-copy module-two-glass-panel">
          <span className="eyebrow">Pausa para conexão</span>
          <h1>Hora do <strong>café!</strong></h1>
          <p>Uma pausa para respirar, conversar e renovar as energias antes do próximo desafio.</p>
          <div className="module-two-coffee-message">
            <span aria-hidden="true">☕</span>
            <strong>Sirva-se. O café está pronto.</strong>
          </div>
        </div>

        <div className="module-two-coffee-runway" aria-label="Logos do Grupo WD e Ramos Consultoria caminhando com bandejas de café">
          <div className="coffee-walker coffee-walker-wd">
            <div className="coffee-logo-body">
              <img src="/grupo-wd.png" alt="Grupo WD" />
            </div>
            <div className="coffee-tray" aria-hidden="true">
              <i className="coffee-cup">☕</i><i className="coffee-cup">☕</i>
            </div>
            <i className="coffee-walker-leg leg-one" aria-hidden="true" />
            <i className="coffee-walker-leg leg-two" aria-hidden="true" />
          </div>

          <div className="coffee-walker coffee-walker-ramos">
            <div className="coffee-logo-body">
              <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
            </div>
            <div className="coffee-tray" aria-hidden="true">
              <i className="coffee-cup">☕</i><i className="coffee-cup">☕</i>
            </div>
            <i className="coffee-walker-leg leg-one" aria-hidden="true" />
            <i className="coffee-walker-leg leg-two" aria-hidden="true" />
          </div>
          <div className="coffee-runway-line" aria-hidden="true" />
        </div>
      </section>

      <div className="module-two-next-row module-two-coffee-next">
        <a className="module-two-button" href="/modulo-2/operacao-em-alerta">
          <span>Seguir para Operação em Alerta</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <footer className="module-two-coffee-footer">
        <span>Comunicação e Excelência</span>
        <span>Grupo WD × Ramos Consultoria</span>
      </footer>
    </main>
  );
}
