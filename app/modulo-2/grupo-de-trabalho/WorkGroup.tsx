"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./grupo.module.css";

const DURATION = 30 * 60 * 1000;

export default function WorkGroup() {
  const [remaining, setRemaining] = useState(DURATION);
  const [running, setRunning] = useState(false);
  const deadline = useRef<number | null>(null);
  const pausedRemaining = useRef(DURATION);

  useEffect(() => {
    if (!running) return;
    const tick = () => {
      if (deadline.current === null) return;
      const next = Math.max(0, deadline.current - Date.now());
      setRemaining(next);
      if (next === 0) {
        pausedRemaining.current = 0;
        deadline.current = null;
        setRunning(false);
      }
    };
    // Calculate elapsed time, including when the browser tab is in the background.
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
    } else if (pausedRemaining.current > 0) {
      deadline.current = Date.now() + pausedRemaining.current;
      setRunning(true);
    }
  }

  function restart() {
    deadline.current = null;
    pausedRemaining.current = DURATION;
    setRemaining(DURATION);
    setRunning(false);
  }

  const seconds = Math.ceil(remaining / 1000);
  const minutes = Math.floor(seconds / 60);
  const clock = `${minutes.toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;
  const finished = seconds === 0;
  const started = remaining < DURATION;

  return (
    <main className={`module-two-screen ${styles.screen}`}>
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={styles.navLinks}>
          <Link className="back-link" href="/modulo-2/qualidade-na-origem">← Qualidade na origem</Link>
          <Link className="back-link" href="/modulo-2/recapitulacao-modulo-2">Recapitular Módulo 2 →</Link>
          <span className="module-two-step">Módulo 2 · Tela 19</span>
        </div>
      </nav>

      <section className={styles.stage} aria-labelledby="work-group-title">
        <header className={styles.heading}>
          <h1 id="work-group-title">Grupo de <strong>Trabalho</strong></h1>
          <p>Mapeamento, Causa Raiz e Plano de Ação</p>
        </header>

        <figure className={styles.imageFrame}>
          <Image
            src="/images/grupo-de-trabalho.webp"
            alt="Três grupos de profissionais colaboram com mapas de processos, post-its e um flipchart para analisar causas e planejar ações."
            width={1916}
            height={821}
            sizes="95vw"
            priority
          />
        </figure>

        <div className={`${styles.timerBar} ${finished ? styles.finished : ""}`}>
          <div className={styles.timeBlock}>
            <span className={styles.timeLabel}>Tempo do grupo</span>
            <div className={styles.clock} role="timer" aria-live="off" aria-label={`Tempo restante: ${minutes} minutos e ${seconds % 60} segundos`}>{clock}</div>
          </div>
          <div className={styles.timerActions}>
            <span className={styles.status} role="status" aria-live="polite">
              {finished ? "Tempo concluído. Vamos compartilhar as propostas!" : running ? "Atividade em andamento." : started ? "Cronômetro pausado." : "Quando os grupos estiverem prontos, clique em Iniciar."}
            </span>
            <div className={styles.buttons}>
              <button type="button" className={styles.start} onClick={toggleTimer} disabled={finished}>
                {running ? "Pausar" : started && !finished ? "Continuar" : "Iniciar"}
              </button>
              <button type="button" onClick={restart}>Reiniciar 30 minutos</button>
            </div>
          </div>
          <Link className={styles.next} href="/modulo-2/recapitulacao-modulo-2">Recapitular Módulo 2 →</Link>
          <div className={styles.progress} aria-hidden="true"><span style={{ transform: `scaleX(${remaining / DURATION})` }} /></div>
        </div>
      </section>
    </main>
  );
}
