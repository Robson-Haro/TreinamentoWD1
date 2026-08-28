import VideoPlayer from "./VideoPlayer";

export default function VideoModuloUm() {
  return (
    <main className="module-screen">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <nav className="topbar module-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <a className="back-link" href="/">← Voltar para Home</a>
      </nav>
      <section className="video-lesson">
        <header className="lesson-heading">
          <div>
            <span className="eyebrow">Módulo 1 · Tela 2</span>
            <h1>Desafio de atenção e foco</h1>
          </div>
          <div className="lesson-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>
        <div className="video-glass">
          <div className="video-gold-line" aria-hidden="true" />
          <VideoPlayer />
        </div>
        <div className="lesson-topics" aria-label="Etapas do exercício">
          <span>30 estímulos</span>
          <span>10 telas · 3 segundos</span>
          <span>10 telas · 2 segundos</span>
          <span>10 telas · 1 segundo</span>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
          <a className="gold-button module-entry" href="/modulo-1/video-lideranca">
            <span>Continuar para os vídeos</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>
    </main>
  );
}
