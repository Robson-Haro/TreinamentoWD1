"use client";

import { useState } from "react";

export default function Home() {
  const [activated, setActivated] = useState(false);

  const handleEntry = () => {
    setActivated(true);
    window.setTimeout(
      () => document.getElementById("modulos")?.scrollIntoView({ behavior: "smooth" }),
      180,
    );
  };

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar" aria-label="Navegação principal">
        <a className="brand-mark" href="#inicio" aria-label="Voltar ao início">
          WD <span>×</span> RC
        </a>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a className="entry-link" href="/administrador" style={{ textDecoration: "none" }}>
            <span>Administrador</span>
          </a>
          <button
            className={`entry-link ${activated ? "is-active" : ""}`}
            onClick={handleEntry}
          >
            <span>Ingressar</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </nav>

      <section id="inicio" className="hero">
        <div className="partnership-line">
          <span />
          <p>Parceria do Grupo WD e Ramos Consultoria</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="chapter">Liderança · Desenvolvimento · Excelência</p>
            <h1>
              Jornada de aprimoramento e qualificação da liderança do{" "}
              <strong>Grupo WD.</strong>
            </h1>
            <p className="intro">
              Uma experiência criada para transformar conhecimento em presença,
              decisões em resultados e liderança em legado.
            </p>
            <p className="today-module">
              <span>Módulo de hoje</span>
              <strong>Conhecendo a liderança da WD</strong>
            </p>
            <button
              className={`gold-button ${activated ? "is-active" : ""}`}
              onClick={handleEntry}
            >
              <span>Ingressar na jornada</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div className="logos-stage" aria-label="Grupo WD e Ramos Consultoria">
            <div className="gold-orbit" aria-hidden="true" />
            <div className="logo-glass logo-ramos">
              <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
            </div>
            <div className="logo-glass logo-wd">
              <img src="/grupo-wd.png" alt="Grupo WD" />
            </div>
          </div>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span />
          Explore
        </div>
      </section>

      <section id="modulos" className="modules-preview" aria-label="Módulos da jornada">
        <div className="glass-card modules-card">
          <span className="eyebrow">Módulo 1</span>
          <h2>Se conhecendo para liderar</h2>
          <p>Uma jornada sobre exemplo, desenvolvimento, estratégia e organização.</p>
          <a className="gold-button module-entry" href="/modulo-1/video">
            <span>Iniciar o módulo</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}