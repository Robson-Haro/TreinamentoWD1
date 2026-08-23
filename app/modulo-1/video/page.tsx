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
            <h1>Se conhecendo para liderar</h1>
          </div>
          <div className="lesson-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="video-glass">
          <div className="video-gold-line" aria-hidden="true" />
          <video controls preload="metadata" playsInline poster="/favicon.svg">
            <source src="/videos/modulo-1-lideranca.mp4" type="video/mp4" />
            Seu navegador não consegue reproduzir este vídeo.
          </video>
        </div>

        <div className="lesson-topics" aria-label="Temas do vídeo">
          <span>Liderar pelo exemplo</span>
          <span>Liderar é treinar</span>
          <span>Estratégia e previsão</span>
          <span>Organização</span>
        </div>
      </section>
    </main>
  );
}
