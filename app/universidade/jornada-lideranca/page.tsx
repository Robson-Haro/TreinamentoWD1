"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { leadershipModules } from "../data";
import styles from "../universidade.module.css";

type ProgressMap = Record<string, { status: string; score?: number }>;

export default function JornadaLiderancaPage() {
  const [progress, setProgress] = useState<ProgressMap>({});

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wd_uc_progress");
      if (saved) setProgress(JSON.parse(saved));
    } catch {
      // A jornada continua navegável mesmo sem armazenamento local.
    }
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.journeyShell}>
        <Link className={styles.backLink} href="/universidade">← Universidade Corporativa</Link>

        <section className={styles.journeyHero}>
          <span className={styles.kicker}>Jornada do Conhecimento · Trilha ativa</span>
          <h1>Jornada de Liderança</h1>
          <p>
            Uma trilha construída a partir do TreinamentoWD1 do Grupo WD. O conteúdo foi organizado em dois módulos independentes,
            cada um com sua avaliação. A conclusão dos dois módulos libera a certificação da jornada.
          </p>
        </section>

        <section className={styles.moduleGrid} aria-label="Módulos da Jornada de Liderança">
          {leadershipModules.map((module) => {
            const item = progress[module.id];
            const passed = item?.status === "passed";
            return (
              <article className={styles.modulePanel} key={module.id}>
                <span className={styles.courseBadge}>Módulo {module.number}</span>
                <h2>{module.title}</h2>
                <p><strong>{module.subtitle}</strong></p>
                <p>{module.description}</p>

                <ul className={styles.topicList}>
                  {module.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>

                <p>
                  <strong>Status:</strong>{" "}
                  {passed ? "Avaliação aprovada · " + String(item.score || 0) + "%" : item ? "Avaliação realizada · " + String(item.score || 0) + "%" : "Em andamento"}
                </p>

                <div className={styles.moduleActions}>
                  <Link className={styles.primaryButton} href={module.href}>
                    Acessar conteúdo
                  </Link>
                  <Link className={styles.secondaryButton} href={"/universidade/jornada-lideranca/avaliacao/" + module.number}>
                    {passed ? "Rever avaliação" : "Fazer avaliação"}
                  </Link>
                </div>
              </article>
            );
          })}
        </section>

        <section className={styles.courseRow} style={{ marginTop: 26 }}>
          <article className={[styles.courseCard, styles.certificateCard].join(" ")}>
            <span className={styles.courseBadge}>Etapa final</span>
            <h3>Certificado da Jornada de Liderança</h3>
            <p>A emissão é liberada após aprovação mínima de 70% nas avaliações dos módulos 1 e 2.</p>
            <Link href="/universidade/certificados">Acessar certificação →</Link>
          </article>
          <article className={styles.courseCard}>
            <span className={styles.courseBadge}>Módulo 1</span>
            <h3>{progress["modulo-1"]?.score ? String(progress["modulo-1"].score) + "%" : "Pendente"}</h3>
            <p>Resultado da avaliação “Se conhecendo para liderar”.</p>
          </article>
          <article className={styles.courseCard}>
            <span className={styles.courseBadge}>Módulo 2</span>
            <h3>{progress["modulo-2"]?.score ? String(progress["modulo-2"].score) + "%" : "Pendente"}</h3>
            <p>Resultado da avaliação “Comunicação e Excelência”.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
