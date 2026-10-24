import type { Metadata } from "next";
import "../../modulo-1/experience.css";
import RecapScreen from "../_components/RecapScreen";
import { moduleOneSections } from "../_components/moduleOneRecap";
import CommunicationExamples from "../_components/CommunicationExamples";
import NonverbalExamples from "../_components/NonverbalExamples";
import styles from "../_components/communication-examples.module.css";

export const metadata: Metadata = {
  title: "Resumo do módulo 1 e início do módulo 2 | TreinamentoWD1",
  description: "Recapitulação de autoconhecimento, liderança e comunicação, com exemplos de ambiguidade, vírgulas e postura antes de Excelência Operacional.",
};
const recap = [
  ["Influência e reação", "O comportamento do líder influencia o time. Escute até o fim, perceba sua reação e escolha como responder antes de agir por impulso."],
  ["Da intenção ao entendimento", "Quem fala organiza uma mensagem; quem ouve interpreta com suas experiências e o contexto. Reduza ruídos, escolha palavras claras e confirme o entendimento."],
  ["Comunicar para orientar", "Adapte a orientação à experiência e à necessidade da pessoa. Combine resultado esperado, prazo, responsabilidade e apoio."],
  ["Conversas com respeito", "Descreva fatos e impactos, evite rótulos, escute necessidades e faça pedidos claros. Abra espaço para dúvidas, alertas e discordâncias."],
  ["Expressões, postura e dinâmica da história", "Observe os sinais não verbais e como a mensagem muda ao ser interpretada ou repassada. Diferencie o que foi observado daquilo que foi presumido."],
  ["Dicas de comunicação para líderes", "Explique o porquê, dê feedback específico, cuide do tom e escolha o momento da conversa. Reconheça boas práticas e acompanhe o que foi combinado."],
  ["Operação em alerta", "Ao decidir sob pressão, proteja pessoas, continuidade do serviço e cliente. Apresente decisão, justificativa, risco e plano B; comunique prioridades e responsáveis."],
];
export default function ResumoModulos() {
  return <RecapScreen title="Resumo do módulo 1" emphasis="e início do módulo 2"
    subtitle="Vamos recapitular o treinamento passado · Comunicação e liderança até aqui"
    screenNumber="12B · Resumo"
    previous={{ href: "/modulo-2/operacao-em-alerta", label: "Operação em alerta" }}
    next={{ href: "/modulo-2/excelencia-operacional", label: "Excelência Operacional" }}
    sections={moduleOneSections}>
    <section className={styles.section} aria-label="Resumo do início do Módulo 2">
      <h2 className={styles.heading}>Módulo 2 · <strong>O que aprendemos até aqui</strong></h2>
      <div className={styles.grid}>{recap.map(([title, text]) => <article className={`module-two-glass-panel ${styles.card}`} key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
    <CommunicationExamples />
    <NonverbalExamples />
    <aside className={styles.note}><p><strong>Da comunicação à excelência:</strong> uma orientação clara precisa se transformar em execução consistente. Na próxima tela, vamos conectar esses aprendizados aos detalhes da operação.</p></aside>
  </RecapScreen>;
}
