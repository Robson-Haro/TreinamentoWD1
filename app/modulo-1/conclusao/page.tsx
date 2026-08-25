import "../experience.css";
import type { CSSProperties } from "react";

const balloons = [
  ["#ffcc4d", "6%", "0s", "12s"], ["#ff5f7e", "15%", "-5s", "14s"],
  ["#58d6ff", "26%", "-9s", "13s"], ["#9f7cff", "38%", "-2s", "15s"],
  ["#ff8b3d", "51%", "-11s", "14s"], ["#65e2a7", "63%", "-7s", "12s"],
  ["#f45dce", "76%", "-4s", "16s"], ["#ffd85a", "88%", "-10s", "13s"],
  ["#56b8ff", "95%", "-1s", "15s"],
];

const confetti = Array.from({ length: 72 }, (_, index) => ({
  left: `${(index * 37) % 100}%`,
  delay: `${-((index * 0.31) % 8)}s`,
  duration: `${4.8 + (index % 7) * 0.55}s`,
  color: ["#ffd85a", "#ff5f7e", "#54d7ff", "#7ce6a7", "#b38cff", "#ff914d"][index % 6],
  rotate: `${(index * 47) % 180}deg`,
}));

export default function ConclusaoModuloUm() {
  return (
    <main className="finale-screen">
      <div className="finale-night" aria-hidden="true" />
      <div className="finale-flash finale-flash-one" aria-hidden="true" />
      <div className="finale-flash finale-flash-two" aria-hidden="true" />

      <nav className="topbar module-topbar finale-topbar" aria-label="Navegação de conclusão">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-1/estudo-caso">← Tela anterior</a>
          <a className="back-link next-test-link" href="/">Voltar ao início →</a>
        </div>
      </nav>

      <div className="finale-balloons" aria-hidden="true">
        {balloons.map(([color, left, delay, duration], index) => (
          <i key={index} style={{ "--balloon": color, "--left": left, "--delay": delay, "--duration": duration } as CSSProperties} />
        ))}
      </div>

      <div className="finale-confetti" aria-hidden="true">
        {confetti.map((piece, index) => (
          <i key={index} style={{ left: piece.left, animationDelay: piece.delay, animationDuration: piece.duration, background: piece.color, transform: `rotate(${piece.rotate})` }} />
        ))}
      </div>

      <div className="show-lights" aria-hidden="true">
        <i className="beam beam-one" /><i className="beam beam-two" />
        <i className="beam beam-three" /><i className="beam beam-four" />
        <i className="beam beam-five" /><i className="beam beam-six" />
        <b className="stage-burst burst-one" /><b className="stage-burst burst-two" /><b className="stage-burst burst-three" />
      </div>

      <section className="finale-content">
        <span className="finale-kicker">Jornada de Qualificação da Liderança</span>
        <h1>Parabéns!</h1>
        <h2>Vocês concluíram o <strong>primeiro módulo</strong></h2>
        <p>Um passo importante de autoconhecimento, desenvolvimento e fortalecimento da liderança.</p>

        <div className="finale-partnership" aria-label="Parceria entre Grupo WD e Ramos Consultoria">
          <div><img src="/grupo-wd.png" alt="Logo oficial do Grupo WD" /><strong>GRUPO WD</strong></div>
          <span>×</span>
          <div><img src="/ramos-consultoria.png" alt="Logo oficial da Ramos Consultoria" /><strong>RAMOS CONSULTORIA</strong></div>
        </div>

        <div className="finale-message">Juntos, construindo lideranças que inspiram, cuidam e transformam.</div>
      </section>

      <div className="finale-stage" aria-hidden="true"><span /><span /><span /><span /><span /></div>
    </main>
  );
}
