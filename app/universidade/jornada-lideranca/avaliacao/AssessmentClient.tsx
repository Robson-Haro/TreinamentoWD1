"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { assessments } from "../../data";
import styles from "../../universidade.module.css";

type Participant = { name: string; email: string };

export default function AssessmentClient({ moduleId }: { moduleId: "1" | "2" }) {
  const questions = assessments[moduleId];
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wd_uc_participant");
      if (saved) setParticipant(JSON.parse(saved));
    } catch {
      // sem efeito
    }
  }, []);

  const moduleTitle = moduleId === "1" ? "Se conhecendo para liderar" : "Comunicação e Excelência";
  const answered = useMemo(() => Object.keys(answers).length, [answers]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!participant) {
      setMessage("Volte à Universidade e identifique-se antes de concluir a avaliação.");
      return;
    }
    if (answered !== questions.length) {
      setMessage("Responda todas as questões antes de finalizar.");
      return;
    }

    const correct = questions.reduce((total, question) => total + (answers[question.id] === question.correct ? 1 : 0), 0);
    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= 70;
    const nextResult = { score, passed };
    setResult(nextResult);
    setMessage("");

    try {
      const progress = JSON.parse(localStorage.getItem("wd_uc_progress") || "{}");
      progress["modulo-" + moduleId] = {
        status: passed ? "passed" : "attempted",
        score,
        updated_at: new Date().toISOString(),
      };
      localStorage.setItem("wd_uc_progress", JSON.stringify(progress));
    } catch {
      // o resultado permanece na tela
    }

    fetch("/api/universidade", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        action: "assessment",
        participant,
        journey: "lideranca",
        module_id: "modulo-" + moduleId,
        score,
        passed,
        answers,
      }),
    }).catch(() => undefined);
  }

  return (
    <main className={styles.page}>
      <div className={styles.assessmentLayout}>
        <Link className={styles.backLink} href="/universidade/jornada-lideranca">← Jornada de Liderança</Link>

        <section className={styles.journeyHero}>
          <span className={styles.kicker}>Avaliação · Módulo {moduleId}</span>
          <h1>{moduleTitle}</h1>
          <p>Responda todas as questões. Para aprovação e avanço na jornada, o aproveitamento mínimo é de 70%.</p>
        </section>

        {!participant ? (
          <div className={styles.locked}>
            Você ainda não se identificou na Universidade Corporativa. Volte à página inicial, clique em “Identificar-se” e informe nome e e-mail.
          </div>
        ) : (
          <p style={{ margin: "22px 0 0" }}>
            Participante: <strong>{participant.name}</strong>
          </p>
        )}

        <form onSubmit={submit}>
          {questions.map((question, index) => (
            <section className={styles.assessmentCard} key={question.id}>
              <span className={styles.courseBadge}>Questão {index + 1} de {questions.length}</span>
              <h3>{question.prompt}</h3>
              {question.options.map((option, optionIndex) => (
                <label className={styles.optionLabel} key={option}>
                  <input
                    type="radio"
                    name={question.id}
                    checked={answers[question.id] === optionIndex}
                    onChange={() => setAnswers((current) => ({ ...current, [question.id]: optionIndex }))}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </section>
          ))}

          {message ? <div className={styles.locked}>{message}</div> : null}

          <button className={styles.primaryButton} type="submit">
            Finalizar avaliação
          </button>
        </form>

        {result ? (
          <section className={styles.resultBox}>
            <span className={styles.kicker}>Resultado</span>
            <strong>{result.score}%</strong>
            <p>
              {result.passed
                ? "Aprovado. O resultado foi registrado nesta jornada e você pode seguir para a próxima etapa."
                : "Ainda não atingiu os 70%. Revise o conteúdo do módulo e tente novamente."}
            </p>
            <Link className={styles.secondaryButton} href="/universidade/jornada-lideranca">
              Voltar à jornada
            </Link>
          </section>
        ) : null}
      </div>
    </main>
  );
}
