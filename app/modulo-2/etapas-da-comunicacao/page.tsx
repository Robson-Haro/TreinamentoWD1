import "../../modulo-1/experience.css";
import type { CSSProperties } from "react";

const receiverSteps = [
  ["01", "Captar", "Os sentidos registram o estímulo: som, imagem, gesto ou texto."],
  ["02", "Perceber e decodificar", "O cérebro reconhece os sinais e identifica palavras, símbolos e padrões."],
  ["03", "Atribuir significado", "A mensagem ganha sentido por meio da linguagem e da memória semântica."],
  ["04", "Integrar", "Contexto, conhecimentos prévios, emoção e memória de trabalho se combinam."],
  ["05", "Avaliar e raciocinar", "O receptor compara, interpreta intenções, faz inferências e decide."],
  ["06", "Responder", "A resposta produz feedback e reinicia o ciclo da comunicação."],
];

export default function EtapasDaComunicacao() {
  return (
    <main className="module-two-screen communication-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/video-eu-ouco-e-reajo">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 5</span>
        </div>
      </nav>

      <section className="communication-content">
        <header className="communication-heading module-two-glass-panel">
          <div>
            <span>Comunicação em movimento</span>
            <h1>Da intenção ao <strong>entendimento</strong></h1>
            <p>Uma mensagem só completa o ciclo quando gera significado, resposta e feedback.</p>
          </div>
          <div className="influence-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="communication-3d-stage" aria-label="Fluxo animado da comunicação">
          <div className="communication-grid-floor" aria-hidden="true" />

          <article className="comm-node comm-sender">
            <span className="comm-node-icon">EM</span>
            <small>Origem</small>
            <h2>Emissor</h2>
            <p>Tem uma intenção e transforma o que pensa em mensagem.</p>
          </article>

          <div className="comm-transfer comm-transfer-one" aria-hidden="true">
            <i /><i /><i /><b>Codificação</b>
          </div>

          <article className="comm-node comm-code">
            <span className="comm-node-icon">&lt;/&gt;</span>
            <small>Forma compartilhada</small>
            <h2>Código</h2>
            <p>Palavras, sinais, gestos, imagens, tom e símbolos.</p>
          </article>

          <div className="comm-transfer comm-transfer-two" aria-hidden="true">
            <i /><i /><i /><b>Canal + mensagem</b>
          </div>

          <article className="comm-node comm-receiver">
            <span className="comm-node-icon">RC</span>
            <small>Destino ativo</small>
            <h2>Receptor</h2>
            <p>Não apenas recebe: percebe, interpreta, integra e responde.</p>
          </article>

          <div className="comm-noise" aria-label="Ruídos podem interferir em qualquer etapa">
            <b>Ruídos</b>
            <span>Ambiente · linguagem · emoção · atenção · pressupostos</span>
          </div>
        </div>

        <div className="brain-process">
          <div className="brain-visual module-two-glass-panel" aria-hidden="true">
            <div className="brain-shell">
              <i className="brain-path brain-path-one" />
              <i className="brain-path brain-path-two" />
              <i className="brain-path brain-path-three" />
              <span className="brain-pulse brain-pulse-one" />
              <span className="brain-pulse brain-pulse-two" />
              <span className="brain-pulse brain-pulse-three" />
              <strong>Processamento</strong>
            </div>
            <div className="brain-feedback">Feedback ↺</div>
          </div>

          <div className="receiver-steps">
            {receiverSteps.map(([number, title, description], index) => (
              <article
                className="receiver-step"
                key={number}
                style={{ "--step-delay": (index * 0.16) + "s" } as CSSProperties}
              >
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="communication-note">
          <strong>Importante:</strong>
          <p>Essas etapas se sobrepõem e interagem. O cérebro interpreta a mensagem continuamente, usando contexto, memória e previsões enquanto escuta.</p>
        </aside>

        <div className="module-two-next-row">
          <a className="module-two-button" href="/modulo-2/frases-de-comunicacao">
            <span>Frases sobre comunicação</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </main>
  );
}
