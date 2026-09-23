import "../../modulo-1/experience.css";

export default function EuOucoEReajo() {
  return (
    <main className="module-two-screen listen-react-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/influencia">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 3</span>
        </div>
      </nav>

      <section className="listen-react-stage">
        <div className="listen-react-copy module-two-glass-panel">
          <span className="listen-react-kicker">Descontração também é aprender</span>
          <h1>Eu ouço <strong>e reajo</strong></h1>
          <p>
            Atenção, escuta e reação em uma experiência leve para aprender em movimento.
          </p>
          <div className="listen-react-badges" aria-label="Competências da dinâmica">
            <span>Escuta ativa</span>
            <span>Atenção</span>
            <span>Reação</span>
          </div>
        </div>

        <div className="sound-glass" aria-hidden="true">
          <div className="sound-icon">
            <span>◖</span>
            <i /><i /><i />
          </div>
          <div className="sound-wave">
            {Array.from({ length: 21 }, (_, index) => (
              <i key={index} style={{ "--wave-index": index } as React.CSSProperties} />
            ))}
          </div>
          <p>Ouça · Perceba · Reaja</p>
        </div>

        <div className="listen-react-partnership" aria-label="Grupo WD e Ramos Consultoria">
          <img src="/grupo-wd.png" alt="Grupo WD" />
          <span>×</span>
          <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
        </div>
      </section>
    </main>
  );
}
