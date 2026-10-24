import styles from "./communication-examples.module.css";
const examples = [
  { title: "O líder continua olhando o celular", posture: "Enquanto alguém apresenta um problema, o líder mantém o olhar na tela e o corpo virado para outro lado.", interpretation: "Pode transmitir desatenção ou pouca disponibilidade, mesmo sem dizer uma palavra.", action: "Guarde o celular, volte-se para a pessoa e combine um momento de escuta se não puder atendê-la agora." },
  { title: "A colaboradora recua e cruza os braços", posture: "Durante uma orientação, ela afasta o tronco, cruza os braços e permanece em silêncio.", interpretation: "Pode haver desconforto ou discordância, mas também frio, cansaço ou apenas uma posição confortável.", action: "Pergunte com respeito: ‘Como você recebeu essa orientação? Há algo que precisamos esclarecer?’" },
  { title: "O supervisor aponta o dedo e se aproxima demais", posture: "Ele mantém o corpo rígido, aponta o dedo e reduz o espaço da outra pessoa.", interpretation: "A postura pode ser percebida como cobrança agressiva ou intimidação, ainda que ele esteja em silêncio.", action: "Respeite o espaço pessoal, relaxe os gestos e mantenha a firmeza sem ameaçar." },
  { title: "A pessoa se volta para quem está falando", posture: "Ela deixa a atividade de lado, mantém uma postura disponível e acompanha a conversa com pequenos acenos.", interpretation: "Pode comunicar atenção e abertura. Acenar, porém, não garante concordância nem compreensão.", action: "Confirme o entendimento e respeite diferenças culturais, individuais e de acessibilidade; contato visual não é obrigatório." },
];
export default function NonverbalExamples() {
  return <section className={styles.section} aria-label="Comunicação não verbal">
    <h2 className={styles.heading}>Mesmo em silêncio, <strong>a postura comunica</strong></h2>
    <div className={styles.grid}>{examples.map(item => <article className={`module-two-glass-panel ${styles.card}`} key={item.title}>
      <h3>{item.title}</h3><p>{item.posture}</p><p><strong>Como pode ser percebido:</strong> {item.interpretation}</p><p><strong>O que fazer:</strong> {item.action}</p>
    </article>)}</div>
    <aside className={styles.note}><p><strong>Observe, não rotule.</strong> Um gesto isolado não revela com certeza o que alguém pensa ou sente. Considere o contexto, o conjunto de sinais e confirme pela conversa.</p><p><strong>Dinâmica:</strong> em duplas, uma pessoa representa disponibilidade ou pressa sem falar. A outra descreve o que observou e pergunta qual era a intenção. Comparem intenção e interpretação.</p></aside>
  </section>;
}
