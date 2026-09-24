"use client";

import { useEffect, useState } from "react";
import "../../modulo-1/experience.css";

const examples = [
  {
    emotion: "Alegria",
    reason: "O sorriso alcança os olhos, as bochechas se elevam e a postura está aberta e relaxada.",
  },
  {
    emotion: "Tristeza",
    reason: "O olhar está baixo, os ombros caem e o corpo demonstra redução de energia e recolhimento.",
  },
  {
    emotion: "Raiva",
    reason: "As sobrancelhas se aproximam, a mandíbula e os ombros ficam tensos e as mãos se fecham.",
  },
  {
    emotion: "Medo",
    reason: "Os olhos se ampliam, as sobrancelhas sobem e o corpo recua com as mãos em proteção.",
  },
  {
    emotion: "Surpresa",
    reason: "Sobrancelhas elevadas, olhos e boca abertos e mãos interrompidas no meio do movimento.",
  },
  {
    emotion: "Nojo",
    reason: "O nariz se enruga, o lábio superior se eleva e a cabeça se afasta do estímulo.",
  },
  {
    emotion: "Ansiedade ou preocupação",
    reason: "A testa está tensa, a postura se fecha e a mão próxima à boca funciona como gesto de autorregulação.",
  },
  {
    emotion: "Vergonha ou constrangimento",
    reason: "O olhar se desvia, a cabeça baixa e o corpo se recolhe enquanto a mão cobre parte do rosto.",
  },
  {
    emotion: "Orgulho ou confiança",
    reason: "O tronco está ereto, o peito aberto, o olhar firme e o sorriso é pequeno e controlado.",
  },
  {
    emotion: "Confusão ou dúvida",
    reason: "A cabeça se inclina, uma sobrancelha sobe e a mão aberta reforça uma pergunta não verbal.",
  },
];

export default function LeituraDosSentimentos() {
  const [current, setCurrent] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (revealed || seconds <= 0) return;
    const timer = window.setInterval(() => setSeconds((value) => value - 1), 1000);
    return () => window.clearInterval(timer);
  }, [revealed, seconds]);

  const changeExample = (next: number) => {
    setCurrent(next);
    setRevealed(false);
    setSeconds(10);
  };

  const imagePosition = {
    backgroundPosition: `${(current % 5) * 25}% ${current < 5 ? 0 : 100}%`,
  };

  return (
    <main className="module-two-screen feelings-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/frases-de-comunicacao">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 7</span>
        </div>
      </nav>

      <section className="feelings-content">
        <header className="feelings-heading module-two-glass-panel">
          <div>
            <span>O corpo também comunica</span>
            <h1>Qual sentimento você percebe?</h1>
            <p>Observe o rosto, as mãos, os ombros e a postura antes de revelar a resposta.</p>
          </div>
          <div className="feelings-progress">
            <strong>{String(current + 1).padStart(2, "0")}</strong>
            <span>de 10</span>
          </div>
        </header>

        <div className="feelings-stage">
          <div className="feelings-photo-card module-two-glass-panel">
            <div
              className="feelings-photo"
              style={imagePosition}
              role="img"
              aria-label={`Pessoa do exemplo ${current + 1}; observe sua expressão e postura`}
            />
            {!revealed && (
              <div className="feelings-countdown">
                <span>Tempo de observação</span>
                <strong>{seconds > 0 ? seconds : "Agora"}</strong>
              </div>
            )}
          </div>

          <aside className={`feelings-answer module-two-glass-panel ${revealed ? "is-visible" : ""}`}>
            {revealed ? (
              <>
                <span>Sentimento provável</span>
                <h2>{examples[current].emotion}</h2>
                <p>{examples[current].reason}</p>
                <div className="feelings-caution">
                  <strong>Atenção:</strong>
                  <p>São indícios, não uma certeza. Contexto, cultura e características individuais também influenciam a expressão.</p>
                </div>
              </>
            ) : (
              <div className="feelings-question">
                <span>?</span>
                <h2>Leia o conjunto</h2>
                <p>O que o rosto e o corpo parecem comunicar?</p>
              </div>
            )}
          </aside>
        </div>

        <div className="feelings-controls">
          <button
            type="button"
            className="feelings-secondary"
            disabled={current === 0}
            onClick={() => changeExample(current - 1)}
          >
            ← Anterior
          </button>
          <button type="button" className="module-two-button feelings-reveal" onClick={() => setRevealed(true)}>
            Revelar sentimento
          </button>
          <button
            type="button"
            className="feelings-secondary"
            disabled={current === examples.length - 1}
            onClick={() => changeExample(current + 1)}
          >
            Próximo →
          </button>
        </div>

        {current === examples.length - 1 && revealed && (
          <div className="module-two-next-row feelings-next-screen">
            <a className="module-two-button" href="/modulo-2/descontrair-e-aprender">
              <span>Descontrair é aprender</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        )}
      </section>
    </main>
  );
}
