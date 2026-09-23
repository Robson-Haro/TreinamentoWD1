"use client";

import { useState } from "react";
import "../../modulo-1/experience.css";

export default function VideoEuOucoEReajo() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <main className="module-two-screen module-two-video-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/eu-ouco-e-reajo">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 4</span>
        </div>
      </nav>

      <section className="module-two-video-content">
        <header className="module-two-video-heading module-two-glass-panel">
          <div>
            <span>Descontração também é aprender</span>
            <h1>Eu ouço e reajo</h1>
            <p>Assista com atenção. A escuta é o primeiro movimento da reação.</p>
          </div>
          <div className="influence-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="module-two-video-frame">
          <video
            controls
            playsInline
            preload="metadata"
            src="/videos/eu-ouco-e-reajo.mp4"
            onCanPlay={() => setVideoReady(true)}
            aria-label="Vídeo da dinâmica Eu ouço e reajo"
          >
            Seu navegador não oferece suporte à reprodução de vídeo.
          </video>

          {!videoReady && (
            <div className="module-two-video-placeholder">
              <div className="video-placeholder-icon" aria-hidden="true">
                <span>▶</span>
              </div>
              <strong>Espaço preparado para o vídeo</strong>
              <p>O conteúdo será exibido aqui assim que o arquivo MP4 for adicionado.</p>
              <small>Arquivo esperado: eu-ouco-e-reajo.mp4</small>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
