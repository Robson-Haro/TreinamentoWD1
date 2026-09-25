import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import styles from "./dicas.module.css";

export const metadata: Metadata = {
  title: "Dicas práticas de comunicação para líderes | TreinamentoWD1",
  description: "15 práticas de comunicação para líderes aplicarem em conversas, feedbacks, alinhamentos e decisões difíceis.",
};

const tips = [
  {
    number: "01",
    title: "Fale para ser compreendido, não apenas para ser ouvido",
    content: (
      <>
        <p>Comunicar não é simplesmente transmitir informação.</p>
        <p>O líder precisa verificar se a mensagem realmente foi compreendida.</p>
        <div className={styles.quote}><span>Uma boa pergunta é:</span><strong>“Me conta como você entendeu o que combinamos.”</strong></div>
        <div className={styles.contrast}><span>Isso é muito melhor do que:</span><strong>“Entendeu?”</strong></div>
      </>
    ),
  },
  {
    number: "02",
    title: "Seja claro sobre o que espera",
    content: (
      <>
        <p>Muitos conflitos nas equipes começam com expectativas implícitas.</p>
        <div className={styles.avoid}><span>Evite</span><strong>“Preciso disso rápido.”</strong></div>
        <div className={styles.prefer}><span>Prefira</span><strong>“Preciso desse relatório amanhã até as 14h, contendo esses três indicadores.”</strong></div>
        <p><strong>Clareza reduz interpretação.</strong></p>
      </>
    ),
  },
  {
    number: "03",
    title: "Explique o porquê",
    content: (
      <>
        <p>Pessoas executam melhor quando compreendem a lógica da decisão.</p>
        <div className={styles.flow}><strong>O que precisa ser feito</strong><span>→</span><strong>Por que precisa ser feito</strong><span>→</span><strong>Qual resultado esperamos</strong></div>
        <div className={styles.example}><span>Por exemplo:</span><p>“Precisamos revisar esse processo porque tivemos três retrabalhos neste mês. Nosso objetivo é reduzir os erros antes do fechamento.”</p></div>
      </>
    ),
  },
  {
    number: "04",
    title: "Escute antes de responder",
    content: (
      <>
        <p>Um erro comum de liderança é ouvir enquanto já está preparando a resposta.</p>
        <p><strong>Escuta ativa significa tentar compreender antes de argumentar.</strong></p>
        <div className={styles.questionList}>
          <span>Perguntas úteis:</span>
          <ul>
            <li>“Me explique melhor.”</li>
            <li>“O que aconteceu?”</li>
            <li>“Na sua visão, qual foi a causa?”</li>
            <li>“O que você faria diferente?”</li>
            <li>“O que você precisa de mim?”</li>
          </ul>
        </div>
      </>
    ),
  },
  {
    number: "05",
    title: "Faça perguntas em vez de dar todas as respostas",
    content: (
      <>
        <p>O líder que responde tudo cria dependência.</p>
        <p>O líder que pergunta desenvolve pensamento.</p>
        <div className={styles.quote}><span>Antes de dizer o que fazer, pergunte:</span><strong>“O que você acredita que deveríamos fazer?”</strong><small>ou</small><strong>“Quais alternativas você enxerga?”</strong></div>
      </>
    ),
  },
  {
    number: "06",
    title: "Adapte sua comunicação à pessoa",
    content: (
      <>
        <p>Algumas pessoas precisam de <strong>mais contexto</strong>. Outras precisam de <strong>objetividade</strong>.</p>
        <p>Algumas precisam discutir possibilidades. Outras querem entender exatamente <strong>o quê, quando e como</strong>.</p>
        <p>Essa lógica está diretamente relacionada à <strong>Liderança Situacional</strong>.</p>
        <a className={styles.inlineSource} href="https://situational.com/blog/the-history-of-the-situational-leadership-framework/" target="_blank" rel="noopener noreferrer">The Center for Leadership Studies ↗</a>
      </>
    ),
  },
  {
    number: "07",
    title: "Fale sobre comportamento, não sobre personalidade",
    content: (
      <>
        <div className={styles.avoid}><span>Evite</span><strong>“Você é irresponsável.”</strong></div>
        <div className={styles.prefer}><span>Use</span><strong>“O relatório deveria ter sido entregue ontem e ainda não foi entregue.”</strong></div>
        <p>Um ataca identidade. O outro descreve um fato que pode ser corrigido.</p>
      </>
    ),
  },
  {
    number: "08",
    title: "Feedback deve ser específico",
    content: (
      <>
        <p>Feedback genérico ensina pouco.</p>
        <div className={styles.avoid}><span>❌ Genérico</span><strong>“Você precisa melhorar sua comunicação.”</strong></div>
        <div className={styles.prefer}><span>✅ Específico</span><strong>“Na reunião de ontem, você apresentou os resultados sem contextualizar os números. Na próxima, comece explicando o cenário e depois apresente os indicadores.”</strong></div>
      </>
    ),
  },
  {
    number: "09",
    title: "Não corrija alguém apenas apontando o erro",
    content: (
      <>
        <p>Use três etapas:</p>
        <div className={styles.flow}><strong>O que aconteceu</strong><span>→</span><strong>Qual foi o impacto</strong><span>→</span><strong>O que esperamos daqui para frente</strong></div>
        <div className={styles.example}><span>Exemplo:</span><p>“O cliente recebeu uma informação diferente da combinada. Isso gerou retrabalho. Nas próximas comunicações, confirme o alinhamento antes do envio.”</p></div>
      </>
    ),
  },
  {
    number: "10",
    title: "Crie espaço para discordância",
    content: (
      <>
        <p>Uma equipe que nunca discorda do líder pode não ser uma equipe alinhada.</p>
        <p><strong>Pode ser uma equipe com medo.</strong></p>
        <p>A pesquisa sobre segurança psicológica mostra a importância de as pessoas sentirem que podem trazer preocupações, ideias e opiniões divergentes.</p>
        <a className={styles.inlineSource} href="https://www.library.hbs.edu/working-knowledge/four-steps-to-build-the-psychological-safety-that-high-performing-teams-need-today" target="_blank" rel="noopener noreferrer">Harvard Business School ↗</a>
        <div className={styles.quote}><span>Pergunte:</span><strong>“Quem enxerga algum risco nessa decisão?”</strong><small>Essa pergunta é excelente.</small></div>
      </>
    ),
  },
  {
    number: "11",
    title: "Cuidado com o tom",
    content: (
      <>
        <p>A mesma frase pode gerar reações completamente diferentes dependendo de:</p>
        <div className={styles.flow}><strong>tom de voz</strong><span>+</span><strong>expressão facial</strong><span>+</span><strong>contexto</strong><span>+</span><strong>momento</strong></div>
        <p>Por isso, uma regra simples: <strong>quanto mais difícil a conversa, mais controlado deve ser o tom.</strong></p>
      </>
    ),
  },
  {
    number: "12",
    title: "Não dê feedback importante no auge da emoção",
    content: (
      <>
        <p>Quando líder ou colaborador estão emocionalmente ativados, a tendência é defender posições.</p>
        <p>Conversa difícil exige:</p>
        <div className={styles.flow}><strong>fato</strong><span>+</span><strong>calma</strong><span>+</span><strong>clareza</strong><span>+</span><strong>pergunta</strong></div>
      </>
    ),
  },
  {
    number: "13",
    title: "Reconheça publicamente e corrija preferencialmente em particular",
    content: (
      <>
        <p>O reconhecimento público ajuda a reforçar comportamentos desejados.</p>
        <p>Já uma correção pública pode gerar vergonha e comportamento defensivo.</p>
        <p>Existem exceções operacionais, principalmente quando há risco imediato, mas essa é uma boa regra de liderança.</p>
      </>
    ),
  },
  {
    number: "14",
    title: "Comunicação não termina quando você fala",
    content: (
      <>
        <p>Existe um ciclo:</p>
        <div className={styles.flow}><strong>Falar</strong><span>→</span><strong>Ouvir</strong><span>→</span><strong>Confirmar entendimento</strong><span>→</span><strong>Ajustar</strong><span>→</span><strong>Acompanhar</strong></div>
        <p>Sem acompanhamento, muitas orientações desaparecem no cotidiano.</p>
      </>
    ),
  },
  {
    number: "15",
    title: "O líder precisa saber comunicar más notícias",
    content: (
      <>
        <p>Uma estrutura interessante:</p>
        <div className={styles.flow}><strong>Fato</strong><span>→</span><strong>contexto</strong><span>→</span><strong>impacto</strong><span>→</span><strong>decisão</strong><span>→</span><strong>próximo passo</strong></div>
        <div className={styles.example}><span>Por exemplo:</span><p>“Nosso resultado ficou 12% abaixo da meta. A principal diferença veio da queda no volume. Por isso vamos revisar nossa estratégia para o próximo mês. Amanhã vamos definir três ações prioritárias.”</p></div>
        <p><strong>Sem dramatização. Sem esconder informação.</strong></p>
      </>
    ),
  },
];

const references = [
  {
    title: "Center for Leadership Studies — Situational Leadership®",
    label: "Situational Leadership Model",
    href: "https://situational.com/blog/the-history-of-the-situational-leadership-framework/",
  },
  {
    title: "Harvard Business School — Amy Edmondson e Segurança Psicológica",
    label: "Psychological Safety",
    href: "https://www.hbs.edu/recruiting/guides-and-stories/leading-in-tough-times",
  },
  {
    title: "Harvard Business School Working Knowledge",
    label: "Four Steps to Building Psychological Safety",
    href: "https://www.library.hbs.edu/working-knowledge/four-steps-to-build-the-psychological-safety-that-high-performing-teams-need-today",
  },
  {
    title: "Center for Nonviolent Communication — Marshall Rosenberg",
    label: "Comunicação Não Violenta",
    href: "https://www.cnvc.org/pt/about/purpose-of-nvc",
  },
];

export default function DicasComunicacaoLideres() {
  return (
    <main className={`module-two-screen ${styles.screen}`} id="inicio">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className="screen-nav">
          <Link className="back-link" href="/modulo-2/descontrair-e-aprender">← Dinâmica da história</Link>
          <Link className="back-link" href="/modulo-2/pausa-para-o-cafe">Hora do café →</Link>
          <span className="module-two-step">Módulo 2 · Tela 11</span>
        </div>
      </nav>

      <div className={styles.content}>
        <header className={`module-two-glass-panel ${styles.hero}`}>
          <div>
            <span className={styles.kicker}>Comunicação e liderança · Aplicação prática</span>
            <h1>Dicas práticas de comunicação <strong>para líderes</strong></h1>
            <p>Estas eu colocaria praticamente como um slide do seu treinamento.</p>
          </div>
          <div className={styles.logos} aria-label="Grupo WD e Ramos Consultoria">
            <Image src="/grupo-wd.png" alt="Grupo WD" width={116} height={82} />
            <span>×</span>
            <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={116} height={82} />
          </div>
        </header>

        <div className={styles.tipGrid}>
          {tips.map((tip) => (
            <article className={`module-two-glass-panel ${styles.tipCard}`} key={tip.number}>
              <div className={styles.tipHeader}>
                <span>{tip.number}</span>
                <h2>{tip.title}</h2>
              </div>
              <div className={styles.tipBody}>{tip.content}</div>
            </article>
          ))}
        </div>

        <section className={`module-two-glass-panel ${styles.highlight}`} aria-labelledby="conceito-destaque">
          <span>Conceito para destacar no treinamento</span>
          <h2 id="conceito-destaque">A qualidade da liderança é percebida principalmente <strong>nas conversas difíceis.</strong></h2>
          <p>É relativamente fácil comunicar quando tudo está bem.</p>
          <p>A competência do líder aparece quando ele precisa <strong>corrigir, cobrar, discordar, negar, ouvir críticas, explicar decisões difíceis e conduzir conflitos.</strong></p>
        </section>

        <section className={styles.provocation} aria-label="Provocação para reflexão">
          <span>Provocação</span>
          <h2>Você está se comunicando ou apenas falando?</h2>
          <p>Comunicação só aconteceu quando a outra pessoa compreendeu a mensagem.</p>
        </section>

        <section className={`module-two-glass-panel ${styles.references}`} aria-labelledby="referencias">
          <div>
            <span className={styles.kicker}>Referências</span>
            <h2 id="referencias">Bases para aprofundar o conteúdo</h2>
          </div>
          <div className={styles.referenceGrid}>
            {references.map((reference) => (
              <a href={reference.href} target="_blank" rel="noopener noreferrer" key={reference.title}>
                <strong>{reference.title}</strong>
                <span>{reference.label} ↗</span>
              </a>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <Link className="module-two-button" href="/modulo-2/descontrair-e-aprender">← Dinâmica da história</Link>
          <span>Parceria do Grupo WD e Ramos Consultoria</span>
          <Link className="module-two-button" href="/modulo-2/pausa-para-o-cafe">Hora do café →</Link>
        </footer>
      </div>
    </main>
  );
}
