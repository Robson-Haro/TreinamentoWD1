"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./cafe.module.css";

const BREAK_DURATION = 5 * 60 * 1000;

function CoffeeTray() {
  return (
    <svg className={styles.tray} viewBox="0 0 150 100" fill="none" aria-hidden="true">
      <g stroke="#e6f7ff" strokeWidth="3" strokeLinecap="round" className={styles.steam}>
        <path d="M35 30c-9-9 9-12 0-23M88 30c-9-9 9-12 0-23" />
      </g>
      <g stroke="#d7e8f4" strokeWidth="4">
        <path d="M50 43h9c16 0 16 19 0 19h-9M104 43h9c16 0 16 19 0 19h-9" />
      </g>
      <path d="M16 39h38v20c0 18-38 18-38 0zM70 39h38v20c0 18-38 18-38 0z" fill="#fff9ec" />
      <ellipse cx="35" cy="40" rx="18" ry="5" fill="#57301e" />
      <ellipse cx="89" cy="40" rx="18" ry="5" fill="#57301e" />
      <path d="M9 71h54M63 71h54" stroke="#fff9ec" strokeWidth="4" strokeLinecap="round" />
      <path d="M4 78h139l-8 11H12z" fill="#ffd43b" />
      <path d="M4 78h139" stroke="#fff0a8" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function WalkingLogo({ company }: { company: "wd" | "ramos" }) {
  return (
    <div className={`${styles.walker} ${company === "wd" ? styles.wd : styles.ramos}`}>
      <span className={styles.shadow} />
      <span className={`${styles.leg} ${styles.leftLeg}`} />
      <span className={`${styles.leg} ${styles.rightLeg}`} />
      <div className={styles.body}>
        <Image src={company === "wd" ? "/grupo-wd.png" : "/ramos-consultoria.png"} alt="" width={150} height={100} priority />
        <span className={styles.arm} />
        <CoffeeTray />
      </div>
    </div>
  );
}

export default function CoffeeBreak() {
  const [remaining, setRemaining] = useState(BREAK_DURATION);
  const [running, setRunning] = useState(true);
  const [motionPaused, setMotionPaused] = useState(false);
  const deadline = useRef<number | null>(null);
  const pausedRemaining = useRef(BREAK_DURATION);

  useEffect(() => {
    if (!running) return;
    // Use elapsed time so background tabs do not make the five-minute break longer.
    deadline.current ??= Date.now() + pausedRemaining.current;
    const tick = () => {
      const next = Math.max(0, (deadline.current ?? Date.now()) - Date.now());
      setRemaining(next);
      if (next === 0) {
        pausedRemaining.current = 0;
        deadline.current = null;
        setRunning(false);
      }
    };
    const interval = window.setInterval(tick, 200);
    document.addEventListener("visibilitychange", tick);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", tick);
    };
  }, [running]);

  function toggleTimer() {
    if (running) {
      const next = Math.max(0, (deadline.current ?? Date.now()) - Date.now());
      pausedRemaining.current = next;
      deadline.current = null;
      setRemaining(next);
      setRunning(false);
    } else if (remaining > 0) {
      deadline.current = Date.now() + pausedRemaining.current;
      setRunning(true);
    }
  }

  function restart() {
    pausedRemaining.current = BREAK_DURATION;
    deadline.current = Date.now() + BREAK_DURATION;
    setRemaining(BREAK_DURATION);
    setRunning(true);
  }

  const seconds = Math.ceil(remaining / 1000);
  const clock = `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  const finished = seconds === 0;

  return (
    <main className={`module-two-screen ${styles.screen}`}>
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={styles.navLinks}>
          <Link className="back-link" href="/modulo-2/cliente-processos-e-padroes">← Tela anterior</Link>
          <Link className="back-link" href="/modulo-2/grupo-de-trabalho">Grupo de Trabalho →</Link>
          <span className="module-two-step">Módulo 2 · Tela 16</span>
        </div>
      </nav>

      <section className={styles.stage} aria-labelledby="coffee-title">
        <div className={`${styles.arena} ${motionPaused ? styles.still : ""}`} aria-hidden="true">
          <WalkingLogo company="wd" />
          <WalkingLogo company="ramos" />
        </div>

        <div className={styles.card}>
          <span className={styles.eyebrow}>5 minutos · Grupo WD × Ramos Consultoria</span>
          <h1 id="coffee-title">Hora do <strong>café!</strong></h1>
          <p>{finished ? "Vamos retomar com energia?" : "Respire. Converse. Renove."}</p>
          <div className={styles.clock} role="timer" aria-label={`Tempo restante: ${Math.floor(seconds / 60)} minutos e ${seconds % 60} segundos`} aria-live="off">{clock}</div>
          <div className={styles.progress} aria-hidden="true"><span style={{ transform: `scaleX(${remaining / BREAK_DURATION})` }} /></div>
          <span className={styles.status} role="status" aria-live="polite">{finished ? "Pausa concluída. Vamos retomar?" : running ? "Aproveite o café e a conversa." : "Contagem pausada."}</span>
          <div className={styles.controls}>
            <button type="button" onClick={toggleTimer} disabled={finished}>{running ? "Pausar tempo" : "Continuar tempo"}</button>
            <button type="button" onClick={restart}>Reiniciar 5 minutos</button>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <Link href="/modulo-2/cliente-processos-e-padroes">← Voltar ao conteúdo</Link>
        <button type="button" onClick={() => setMotionPaused(!motionPaused)} aria-pressed={motionPaused}>{motionPaused ? "Retomar animação" : "Pausar animação"}</button>
        <Link href="/modulo-2/grupo-de-trabalho">Seguir para Grupo de Trabalho →</Link>
      </footer>
    </main>
  );
}
