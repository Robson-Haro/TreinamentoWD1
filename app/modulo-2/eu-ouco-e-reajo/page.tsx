import "../../modulo-1/experience.css";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";

export default function EuOucoEReajo() {
  return (
    <main className={`module-two-screen listen-react-screen ${styles.screen}`}>
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className="screen-nav">
          <Link className="back-link" href="/modulo-2/influencia">← Tela anterior</Link>
          <span className="module-two-step">Módulo 2 · Tela 3</span>
        </div>
      </nav>

      <section className="listen-react-stage" aria-labelledby="listen-react-title">
        <div className="listen-react-copy module-two-glass-panel">
          <span className="listen-react-kicker">Descontração também é aprender</span>
          <h1 id="listen-react-title">Eu ouço <strong>e reajo</strong></h1>
          <p>
            Atenção, escuta e reação em uma experiência leve para aprender em movimento.
          </p>
          <div className="listen-react-badges" aria-label="Competências da dinâmica">
            <span>Escuta ativa</span>
            <span>Atenção</span>
            <span>Reação</span>
          </div>
          <Link className="module-two-button listen-react-next" href="/modulo-2/video-eu-ouco-e-reajo">
            <span>Ir para o vídeo</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>

        <div className="sound-glass" aria-hidden="true">
          <div className="sound-icon">
            <span>◖</span>
            <i /><i /><i />
          </div>
          <div className="sound-wave">
            {Array.from({ length: 21 }, (_, index) => (
              <i key={index} style={{ "--wave-index": index } as CSSProperties} />
            ))}
          </div>
          <p>Ouça · Perceba · Reaja</p>
        </div>

        <div className="listen-react-partnership" aria-label="Grupo WD e Ramos Consultoria">
          <Image src="/grupo-wd.png" alt="Grupo WD" width={48} height={48} />
          <span>×</span>
          <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={48} height={48} />
        </div>
      </section>
    </main>
  );
}
