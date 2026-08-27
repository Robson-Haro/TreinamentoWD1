"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./stroop.module.css";

type Phase = "intro" | "countdown" | "running" | "finished";

type Challenge = {
  word: string;
  ink: string;
  background: string;
};

const challenges: Challenge[] = [
  { word: "AZUL", ink: "#ff3b30", background: "#ffd60a" },
  { word: "VERDE", ink: "#bf5af2", background: "#ff453a" },
  { word: "AMARELO", ink: "#0a84ff", background: "#30d158" },
  { word: "VERMELHO", ink: "#64d2ff", background: "#bf5af2" },
  { word: "ROXO", ink: "#ffd60a", background: "#0a84ff" },
  { word: "LARANJA", ink: "#30d158", background: "#ff375f" },
  { word: "ROSA", ink: "#ff9f0a", background: "#64d2ff" },
  { word: "VERDE", ink: "#ff453a", background: "#ffd60a" },
  { word: "AZUL", ink: "#30d158", background: "#ff9f0a" },
  { word: "ROXO", ink: "#64d2ff", background: "#ff453a" },
  { word: "AMARELO", ink: "#ff375f", background: "#0a84ff" },
  { word: "LARANJA", ink: "#bf5af2", background: "#30d158" },
  { word: "VERMELHO", ink: "#ffd60a", background: "#64d2ff" },
  { word: "ROSA", ink: "#0a84ff", background: "#ffd60a" },
  { word: "LARANJA", ink: "#30d158", background: "#bf5af2" },
  { word: "VERMELHO", ink: "#64d2ff", background: "#ffd60a" },
  { word: "AZUL", ink: "#ff375f", background: "#30d158" },
  { word: "AMARELO", ink: "#bf5af2", background: "#ff453a" },
  { word: "VERDE", ink: "#ff9f0a", background: "#0a84ff" },
  { word: "ROSA", ink: "#ffd60a", background: "#64d2ff" },
  { word: "ROXO", ink: "#ff453a", background: "#30d158" },
];

function durationFor(index: number) {
  if (index < 7) return 3000;
  if (index < 14) return 2000;
  return 1000;
}

export default function StroopExercise() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [countdown, setCountdown] = useState(3);
  const [index, setIndex] = useState(0);
  const current = challenges[index];
  const speed = useMemo(() => (index < 7 ? "3 segundos" : index < 14 ? "2 segundos" : "1 segundo"), [index]);

  useEffect(() => {
    if (phase !== "countdown") return;
    if (countdown === 0) {
      setIndex(0);
      setPhase("running");
      return;
    }
    const timer = window.setTimeout(() => setCountdown((value) => value - 1), 850);
    return () => window.clearTimeout(timer);
  }, [phase, countdown]);

  useEffect(() => {
    if (phase !== "running") return;
    const timer = window.setTimeout(() => {
      if (index === challenges.length - 1) setPhase("finished");
      else setIndex((value) => value + 1);
    }, durationFor(index));
    return () => window.clearTimeout(timer);
  }, [phase, index]);

  const start = () => {
    setCountdown(3);
    setPhase("countdown");
  };

  const restart = () => {
    setIndex(0);
    setCountdown(3);
    setPhase("countdown");
  };

  return (
    <div className={styles.exercise}>
      <div className={styles.monitor}>
        <div className={styles.monitorTop}>
          <i /><i /><i />
          <span>DESAFIO DE ATENÇÃO · EFEITO STROOP</span>
          <b>{phase === "running" ? `${index + 1}/21` : "WD × RC"}</b>
        </div>

        <div className={styles.display}>
          {phase === "intro" && (
            <div className={styles.intro}>
              <span className={styles.kicker}>Confunda o automático. Comande sua atenção.</span>
              <h2>Diga em voz alta a <strong>cor das letras</strong>.</h2>
              <p>Ignore a palavra escrita e ignore a cor do fundo. Parece simples — até o cérebro tentar responder no piloto automático.</p>
              <div className={styles.rules}>
                <span><b>01</b> Olhe para as letras</span>
                <span><b>02</b> Fale a cor, não leia</span>
                <span><b>03</b> Não pause a sequência</span>
              </div>
              <button onClick={start}>Iniciar exercício <em>→</em></button>
            </div>
          )}

          {phase === "countdown" && (
            <div className={styles.countdown} aria-live="assertive">
              <small>Prepare sua atenção</small>
              <strong>{countdown || "VAI!"}</strong>
            </div>
          )}

          {phase === "running" && (
            <div
              className={styles.challenge}
              style={{ backgroundColor: current.background }}
              aria-live="assertive"
            >
              <div className={styles.progress}><i style={{ width: `${((index + 1) / challenges.length) * 100}%` }} /></div>
              <small>FALE A COR DAS LETRAS · {speed}</small>
              <strong style={{ color: current.ink }}>{current.word}</strong>
              <span>{index < 7 ? "Ritmo 1" : index < 14 ? "Ritmo 2" : "Ritmo final"}</span>
            </div>
          )}

          {phase === "finished" && (
            <div className={styles.finished}>
              <span>EXERCÍCIO CONCLUÍDO</span>
              <h2>Seu cérebro quis ler.<br /><strong>Você precisou escolher.</strong></h2>
              <p>Liderança também exige interromper respostas automáticas, sustentar a atenção e decidir com consciência sob pressão.</p>
              <div className={styles.actions}>
                <button onClick={restart}>Repetir exercício</button>
                <a href="/modulo-1/video">Continuar treinamento <em>→</em></a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className={styles.stand}><span /></div>
    </div>
  );
}
