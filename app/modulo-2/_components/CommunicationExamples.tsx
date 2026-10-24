import styles from "./communication-examples.module.css";

const ambiguous = [
  { phrase: "Vi o supervisor com o binóculo.", doubt: "Quem estava com o binóculo: quem observou ou o supervisor?", clear: "Usei o binóculo para observar o supervisor." },
  { phrase: "O gerente falou com o colaborador sobre seu atraso.", doubt: "O atraso foi do gerente ou do colaborador?", clear: "O gerente conversou com o colaborador sobre o atraso do colaborador." },
  { phrase: "Entregue o relatório assim que puder.", doubt: "É para agora, para hoje ou para quando sobrar tempo? A falta de prazo permite entendimentos diferentes.", clear: "Envie o relatório de ocorrências até as 15h de hoje. Se houver impedimento, me avise até as 14h." },
  { phrase: "Pode deixar.", doubt: "Significa ‘eu resolvo’ ou ‘deixe isso como está’? O contexto e o tom mudam a leitura.", clear: "Eu vou resolver essa solicitação e confirmar a conclusão até as 16h." },
];
const commas = [
  { first: "Não espere.", firstMeaning: "Ordem para não esperar.", second: "Não, espere.", secondMeaning: "A negativa é seguida de uma orientação para esperar." },
  { first: "Não queremos saber.", firstMeaning: "O grupo afirma que não quer saber.", second: "Não, queremos saber.", secondMeaning: "O grupo rejeita a afirmação anterior e diz que quer saber." },
  { first: "Os colaboradores que fizeram o treinamento receberão o certificado.", firstMeaning: "Somente os colaboradores que fizeram o treinamento receberão o certificado.", second: "Os colaboradores, que fizeram o treinamento, receberão o certificado.", secondMeaning: "A frase apresenta todos os colaboradores do grupo como tendo feito o treinamento; todos receberão o certificado." },
];
export default function CommunicationExamples() {
  return <section className={styles.section} aria-label="Clareza, ambiguidade e pontuação">
    <h2 className={styles.heading}>A mesma mensagem pode ter <strong>mais de uma interpretação</strong></h2>
    <div className={styles.grid}>{ambiguous.map(item => <article className={`module-two-glass-panel ${styles.card}`} key={item.phrase}>
      <span className={styles.label}>FRASE PARA DISCUTIR</span><h3>“{item.phrase}”</h3>
      <p>{item.doubt}</p><p><strong>Uma forma mais clara:</strong> “{item.clear}”</p>
    </article>)}</div>
    <h2 className={styles.heading}>Uma vírgula <strong>muda o sentido</strong></h2>
    <div className={styles.grid}>{commas.map(item => <article className={`module-two-glass-panel ${styles.card}`} key={item.first}>
      <p><strong>“{item.first}”</strong></p><p>{item.firstMeaning}</p>
      <hr /><p><strong>“{item.second}”</strong></p><p>{item.secondMeaning}</p>
    </article>)}</div>
    <aside className={styles.note}><p><strong>Na prática:</strong> diga quem fará o quê, até quando e com qual padrão. Peça que a pessoa explique o combinado com as próprias palavras.</p><p>“Só para confirmar se fui claro: como você vai executar essa atividade?”</p></aside>
  </section>;
}
