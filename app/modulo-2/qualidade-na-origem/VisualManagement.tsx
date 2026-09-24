"use client";

import { useState } from "react";
import styles from "./qualidade.module.css";

const situations = [
  { area: "Portaria", normal: "✓ Acesso autorizado", expected: "Identidade e autorização conferidas.", abnormal: "! Autorização pendente", response: "Manter a pessoa na área de espera e confirmar com o responsável antes de liberar." },
  { area: "Limpeza", normal: "✓ Área liberada", expected: "Condição do piso verificada antes da liberação.", abnormal: "⛔ Área bloqueada", response: "Restringir o acesso ao piso molhado, comunicar e liberar somente após verificar a condição segura." },
  { area: "Manutenção", normal: "✓ Equipamento disponível", expected: "Verificações previstas concluídas e condição liberada.", abnormal: "! Anormalidade detectada", response: "Aplicar a resposta prevista, impedir o uso inadequado e acionar a equipe habilitada." },
];

export default function VisualManagement() {
  const [showDeviation, setShowDeviation] = useState(false);
  return (
    <div className={styles.simulation}>
      <div className={styles.simulationTop}><span>Exemplo didático · Condição → ação</span><button type="button" aria-pressed={showDeviation} onClick={() => setShowDeviation(!showDeviation)}>{showDeviation ? "Mostrar condição normal" : "Mostrar os desvios"}</button></div>
      <div className={styles.board} aria-live="polite">{situations.map(item => <article className={showDeviation ? styles.alertCard : styles.normalCard} key={item.area}><h3>{item.area}</h3><p><strong>{showDeviation ? item.abnormal : item.normal}</strong></p><p>{showDeviation ? item.response : item.expected}</p></article>)}</div>
      <p>Cada sinal precisa informar <strong>a condição e a resposta esperada.</strong> Cores acompanham palavras e símbolos; a mensagem deve continuar compreensível sem distinguir as cores.</p>
    </div>
  );
}
