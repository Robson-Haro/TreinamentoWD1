"use client";

import { useEffect, useState } from "react";

type Stage = "ready" | "countdown" | "running" | "done";

const challenges = [
  { word: "AZUL", bg: "#f2c94c", ink: "#e63946" },
  { word: "VERDE", bg: "#3455db", ink: "#ffffff" },
  { word: "AMARELO", bg: "#118c4f", ink: "#ff6b35" },
  { word: "ROXO", bg: "#f45b9a", ink: "#0c2444" },
  { word: "VERMELHO", bg: "#00a8cc", ink: "#f7d038" },
  { word: "BRANCO", bg: "#6c3fb5", ink: "#63e06f" },
  { word: "LARANJA", bg: "#e63946", ink: "#80d8ff" },
  { word: "PRETO", bg: "#f4d35e", ink: "#9b51e0" },
  { word: "ROSA", bg: "#1565c0", ink: "#ff7a00" },
  { word: "AZUL", bg: "#2e9d55", ink: "#f7f7f7" },
  { word: "VERDE", bg: "#eb5757", ink: "#56ccf2" },
  { word: "AMARELO", bg: "#8e44ad", ink: "#75e36d" },
  { word: "ROXO", bg: "#ff8c42", ink: "#173f8a" },
  { word: "VERMELHO", bg: "#29b6a6", ink: "#ffe45e" },
  { word: "BRANCO", bg: "#2447a8", ink: "#ff6f91" },
  { word: "LARANJA", bg: "#7b2cbf", ink: "#66f08c" },
  { word: "PRETO", bg: "#ef476f", ink: "#ffe66d" },
  { word: "ROSA", bg: "#00a896", ink: "#6c2bd9" },
  { word: "AZUL", bg: "#f6c945", ink: "#d71920" },
  { word: "VERDE", bg: "#e04f9a", ink: "#063970" },
  { word: "AMARELO", bg: "#3949ab", ink: "#ff8a00" },
];

const durationFor = (index: number) => index < 7 ? 3000 : index < 14 ? 2000 : 1000;
const phaseLabel = (index: number) => index < 7 ? "Aquecimento · 3 segundos" : index < 14 ? "Aceleração · 2 segundos" : "Desafio máximo · 1 segundo";

export default function VideoPlayer() {
  const [stage, setStage] = useState<Stage>("ready");
  const [countdown, setCountdown] = useState(3);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (stage !== "countdown") return;
    if (countdown === 0) {
      const start = window.setTimeout(() => {
        setIndex(0);
        setStage("running");
      }, 500);
      return () => window.clearTimeout(start);
    }
    const timer = window.setTimeout(() => setCountdown((value) => value - 1), 850);
    return () => window.clearTimeout(timer);
  }, [stage, countdown]);

  useEffect(() => {
    if (stage !== "running") return;
    const timer = window.setTimeout(() => {
      if (index === challenges.length - 1) setStage("done");
      else setIndex((value) => value + 1);
    }, durationFor(index));
    return () => window.clearTimeout(timer);
  }, [stage, index]);

  const start = () => {
    setCountdown(3);
    setIndex(0);
    setStage("countdown");
  };

  const challenge = challenges[index];

  return (
    <div className="mind-game">
      <div className="monitor">
        <div className="monitor-camera" aria-hidden="true" />
        <div className="monitor-screen" style={stage === "running" ? { backgroundColor: challenge.bg } : undefined}>
          {stage === "ready" && (
            <div className="game-panel">
              <span className="game-kicker">Exercício de atenção · Efeito Stroop</span>
              <h2>Confunda a mente.<br /><strong>Domine o foco.</strong></h2>
              <p>Em cada tela, diga em voz alta somente a <b>cor das letras</b>. Ignore o nome da cor escrito e ignore a cor do fundo.</p>
              <div className="rule-example">
                <span style={{ background: "#f2c94c", color: "#e63946" }}>AZUL</span>
                <small>A resposta correta é: <b>VERMELHO</b></small>
              </div>
              <button type="button" onClick={start}>Iniciar exercício</button>
            </div>
          )}

          {stage === "countdown" && (
            <div className="countdown" aria-live="assertive">
              <small>Prepare-se</small>
              <strong>{countdown || "VAI!"}</strong>
              <p>Responda a cor das letras</p>
            </div>
          )}

          {stage === "running" && (
            <div className="challenge" aria-live="assertive">
              <div className="challenge-top">
                <span>{phaseLabel(index)}</span>
                <b>{String(index + 1).padStart(2, "0")} / 21</b>
              </div>
              <strong style={{ color: challenge.ink }}>{challenge.word}</strong>
              <div className="progress-track"><i style={{ width: `${((index + 1) / challenges.length) * 100}%` }} /></div>
            </div>
          )}

          {stage === "done" && (
            <div className="game-panel done">
              <span className="game-kicker">Exercício concluído</span>
              <h2>Seu cérebro tentou ler.<br /><strong>Você escolheu focar.</strong></h2>
              <p>Quanto mais rápida ficou a passagem, maior foi o esforço para inibir a leitura automática e nomear a cor real.</p>
              <button type="button" onClick={start}>Repetir desafio</button>
            </div>
          )}
        </div>
        <div className="monitor-brand">WD <span>×</span> RAMOS CONSULTORIA</div>
      </div>
      <div className="monitor-neck" aria-hidden="true" />
      <div className="monitor-base" aria-hidden="true" />

      <style jsx>{`
        .mind-game{min-height:min(690px,72vh);display:grid;place-items:center;padding:28px 18px 48px;background:radial-gradient(circle at 50% 28%,rgba(214,166,59,.14),transparent 44%),#060606;border-radius:19px;overflow:hidden}
        .monitor{position:relative;width:min(1180px,94%);padding:16px 16px 38px;border:1px solid rgba(255,226,153,.38);border-radius:32px;background:linear-gradient(145deg,#303033,#0c0c0e 55%,#26262a);box-shadow:inset 2px 2px rgba(255,255,255,.16),inset -3px -3px 10px #000,0 42px 75px rgba(0,0,0,.7),0 0 45px rgba(214,166,59,.18)}
        .monitor-camera{position:absolute;top:6px;left:50%;width:7px;height:7px;border-radius:50%;background:#050505;box-shadow:0 0 0 2px #454545,0 0 8px #d6a63b;transform:translateX(-50%);z-index:2}
        .monitor-screen{position:relative;min-height:min(560px,58vh);display:grid;place-items:center;overflow:hidden;border:2px solid #020202;border-radius:19px;background:radial-gradient(circle at 50% 25%,#201a10,#080808 65%);box-shadow:inset 0 0 50px rgba(0,0,0,.8);transition:background-color .16s linear}
        .monitor-screen:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,rgba(255,255,255,.09),transparent 24%,transparent 75%,rgba(255,255,255,.035))}
        .monitor-brand{position:absolute;bottom:12px;left:0;right:0;color:#aaa49a;font-size:10px;font-weight:800;letter-spacing:.18em;text-align:center}.monitor-brand span{color:#d6a63b}
        .monitor-neck{width:130px;height:48px;margin-top:-3px;background:linear-gradient(90deg,#111,#3b3b3e 48%,#101010);clip-path:polygon(25% 0,75% 0,88% 100%,12% 100%);filter:drop-shadow(0 12px 9px #000)}
        .monitor-base{width:280px;height:19px;margin-top:-2px;border:1px solid #4b4b4d;border-radius:50%;background:linear-gradient(#454549,#111);box-shadow:0 16px 22px rgba(0,0,0,.7)}
        .game-panel{position:relative;z-index:1;width:min(880px,88%);text-align:center}.game-kicker{display:inline-block;padding:9px 15px;border:1px solid rgba(255,216,119,.35);border-radius:999px;color:#e7c979;background:rgba(214,166,59,.08);font-size:11px;font-weight:850;letter-spacing:.15em;text-transform:uppercase}
        .game-panel h2{margin:20px 0 15px;color:#f8f4eb;font-size:clamp(36px,5vw,70px);line-height:.95;letter-spacing:-.05em}.game-panel h2 strong{color:#f0c75e}.game-panel p{max-width:760px;margin:0 auto;color:#c9c3b8;font-size:clamp(15px,1.4vw,20px);line-height:1.55}.game-panel p b{color:#fff}
        .rule-example{display:flex;align-items:center;justify-content:center;gap:18px;margin:24px auto}.rule-example span{padding:14px 26px;border-radius:12px;font-size:28px;font-weight:950;letter-spacing:.07em}.rule-example small{color:#aaa49b;font-size:14px}.rule-example small b{display:block;margin-top:4px;color:#e5c567}
        button{padding:15px 28px;border:1px solid #ffe29a;border-radius:14px;color:#171006;background:linear-gradient(145deg,#ffe29a,#d6a63b 58%,#9b6714);box-shadow:inset 0 1px rgba(255,255,255,.6),0 5px 0 #5e3e0d,0 13px 30px rgba(0,0,0,.42);font:800 15px inherit;letter-spacing:.05em;cursor:pointer}button:hover{filter:brightness(1.1);transform:translateY(-1px)}
        .countdown{position:relative;z-index:1;display:grid;justify-items:center;color:#fff;text-align:center}.countdown small{color:#e4c774;font-size:16px;font-weight:850;letter-spacing:.22em;text-transform:uppercase}.countdown strong{margin:8px 0;color:#fff2c5;font-size:clamp(110px,18vw,230px);line-height:.82;text-shadow:0 0 55px rgba(214,166,59,.58)}.countdown p{color:#bdb6aa;font-size:19px}
        .challenge{position:absolute;z-index:1;inset:0;display:grid;place-items:center}.challenge>strong{font-size:clamp(74px,14vw,220px);font-weight:1000;letter-spacing:.02em;line-height:1;text-shadow:0 5px 16px rgba(0,0,0,.25)}.challenge-top{position:absolute;top:24px;left:28px;right:28px;display:flex;justify-content:space-between;color:rgba(255,255,255,.9);font-size:12px;font-weight:850;letter-spacing:.1em;text-shadow:0 2px 8px rgba(0,0,0,.5);text-transform:uppercase}.challenge-top b{font-size:15px}.progress-track{position:absolute;left:28px;right:28px;bottom:24px;height:5px;border-radius:9px;background:rgba(0,0,0,.22);overflow:hidden}.progress-track i{display:block;height:100%;background:#fff;box-shadow:0 0 12px #fff;transition:width .2s}
        .done h2{font-size:clamp(34px,4.5vw,64px)}
        @media(max-width:700px){.mind-game{padding:15px 6px 38px}.monitor{width:100%;padding:10px 10px 32px;border-radius:22px}.monitor-screen{min-height:520px}.rule-example{flex-direction:column}.challenge>strong{font-size:clamp(58px,19vw,110px)}.challenge-top{top:18px;left:15px;right:15px}.progress-track{left:15px;right:15px}.monitor-base{width:210px}.game-panel{width:92%}}
        @media(prefers-reduced-motion:reduce){*{transition:none!important}}
      `}</style>
    </div>
  );
}
