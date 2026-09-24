import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import styles from "./comportamentos.module.css";

export const metadata: Metadata = {
  title: "Comportamentos, resultados e excelência | TreinamentoWD1",
  description: "Como a rotina, a liderança e a atenção aos detalhes críticos constroem resultados sustentáveis.",
};

const questions = [
  "Como as pessoas tomam decisões: com fatos e critérios claros ou apenas pela urgência?",
  "Ao encontrar um problema, comunicam e agem ou esperam que alguém resolva?",
  "Conseguem expor erros e pedir ajuda sem medo de humilhação?",
  "Seguem os padrões e sinalizam quando eles precisam melhorar?",
  "Questionam desperdícios de tempo, material e esforço?",
  "Testam melhorias e verificam se elas realmente funcionaram?",
  "Assumem responsabilidade pela qualidade antes de entregar?",
  "A liderança oferece recursos, orienta e reconhece os comportamentos esperados?",
];

const impacts = [
  ["Cliente", "O combinado será atendido?"],
  ["Segurança", "Alguém pode se machucar?"],
  ["Qualidade", "A entrega atende ao padrão?"],
  ["Custo", "Haverá perda ou retrabalho?"],
  ["Prazo", "Essa falha compromete a entrega?"],
  ["Produtividade", "Estamos usando bem os recursos?"],
  ["Reputação", "A confiança pode ser afetada?"],
  ["Conformidade", "Os requisitos aplicáveis estão sendo cumpridos?"],
];

const references = [
  { name: "Shingo Institute — Shingo Model", subject: "Princípios, sistemas, comportamentos e resultados.", url: "https://shingo.org/shingo-model/" },
  { name: "Amy C. Edmondson / Harvard Business School (2022)", subject: "Leading in Tough Times: segurança psicológica, aprendizagem e responsabilidade.", url: "https://www.hbs.edu/recruiting/guides-and-stories/leading-in-tough-times" },
  { name: "Lean Enterprise Institute — What is Lean?", subject: "Valor para o cliente, redução de desperdícios e experimentação contínua.", url: "https://www.lean.org/explore-lean/what-is-lean/" },
  { name: "ISO/TC 176 — The Process Approach in ISO 9001:2015", subject: "Orientação técnica sobre processos, riscos e melhoria contínua.", url: "https://www.iso.org/iso/iso9001_2015_process_approach.pdf" },
  { name: "Health and Safety Executive — HSG254", subject: "Indicadores de resultado e de controle; lógica adaptada aqui para exemplos de serviços.", url: "https://www.hse.gov.uk/pubns/books/hsg254.htm" },
];

export default function ComportamentosEResultados() {
  return (
    <main className={`module-two-screen ${styles.screen}`} id="inicio">
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${styles.navigation}`}>
          <Link className="back-link" href="/modulo-2/excelencia-operacional">← Tela anterior</Link>
          <Link className="back-link" href="/modulo-2">Início do módulo</Link>
          <Link className="back-link" href="/modulo-2/video-normalizacao-do-desvio">Próxima tela →</Link>
          <span className="module-two-step">Módulo 2 · Tela 13</span>
        </div>
      </nav>

      <div className={styles.content}>
        <header className={styles.heading}>
          <div>
            <span className={styles.kicker}>Excelência Operacional · Comportamento e critério</span>
            <h1>Resultados são consequência <strong>de comportamentos.</strong></h1>
          </div>
          <div className={styles.logos} aria-label="Grupo WD e Ramos Consultoria">
            <Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} />
            <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} />
          </div>
        </header>

        <nav className={styles.sectionNav} aria-label="Temas desta tela">
          <a href="#comportamentos">01 · Comportamentos e resultados</a>
          <a href="#excelencia">02 · Excelência e perfeccionismo</a>
          <a href="#referencias">Referências</a>
        </nav>

        <section id="comportamentos" className={styles.section} aria-label="Comportamentos que constroem resultados">
          <div className={styles.visualRow}>
            <div className={`module-two-glass-panel ${styles.panel} ${styles.intro}`}>
              <h2>Resultado não nasce <strong>no indicador.</strong></h2>
              <p>Ele começa nas escolhas que fazemos todos os dias: como decidimos, executamos, conferimos e reagimos aos problemas.</p>
              <p><strong>O indicador revela o desempenho. A rotina ajuda a explicar como ele foi produzido.</strong></p>
            </div>
            <figure className={styles.photo}>
              <Image src="/images/excelencia/equipe-aprendendo.webp" alt="Cena ilustrativa de três profissionais de facilities analisando juntos um problema, com tablet e checklist." width={1672} height={941} sizes="(max-width: 1400px) 95vw, 46vw" priority />
              <figcaption>Observar, conversar e corrigir: a melhoria começa no trabalho real.</figcaption>
            </figure>
          </div>

          <ol className={styles.flow} aria-label="Comportamentos influenciam processos, que produzem resultados">
            <li><h3>Comportamentos</h3><p>Decidir, comunicar, conferir.</p></li>
            <li><h3>Processos</h3><p>Organizar e executar o trabalho.</p></li>
            <li><h3>Resultados</h3><p>Entregar valor com consistência.</p></li>
          </ol>
          <p className={styles.callout}>Essa relação também funciona no sentido inverso: <strong>metas, padrões, recursos e exemplos da liderança influenciam os comportamentos.</strong> Melhorar exige olhar para as pessoas e para o sistema de trabalho. <a className={styles.citation} href="#referencias" aria-label="Referência 1: Shingo Institute">[1]</a></p>

          <header className={styles.sectionHeading}>
            <h2>Observe o comportamento <strong>por trás do resultado.</strong></h2>
            <p>Converse com a equipe e procure exemplos concretos:</p>
          </header>
          <ul className={styles.questions}>
            {questions.map((question) => <li className={`module-two-glass-panel ${styles.card}`} key={question}>{question}</li>)}
          </ul>

          <div className={`module-two-glass-panel ${styles.panel} ${styles.learning}`}>
            <h2>Expor um problema é o início <strong>da solução.</strong></h2>
            <p>Receba o relato com respeito, investigue o que ocorreu e combine a correção. A equipe precisa ter abertura para falar e clareza sobre suas responsabilidades.</p>
            <p><strong>Segurança para falar e responsabilidade pela entrega caminham juntas.</strong> <a className={styles.citation} href="#referencias" aria-label="Referência 2: Amy Edmondson">[2]</a></p>
          </div>

          <div className={styles.twoColumns}>
            <article className={`module-two-glass-panel ${styles.card}`}>
              <h3>Observe o que aconteceu</h3>
              <p>Reclamações, atrasos e retrabalho mostram consequências já percebidas.</p>
            </article>
            <article className={`module-two-glass-panel ${styles.card}`}>
              <h3>Acompanhe o que previne</h3>
              <p>Verificações críticas realizadas, manutenção prevista cumprida e correções concluídas ajudam a acompanhar a rotina.</p>
            </article>
          </div>
          <p className={styles.explanation}>Combine as duas perspectivas. Um checklist preenchido precisa representar uma verificação real. Esses exemplos adaptam a lógica de indicadores de resultado e de controle. <a className={styles.citation} href="#referencias" aria-label="Referência 5: HSE">[5]</a></p>

          <blockquote className={styles.takeaway}>Cultura é o que repetimos, incentivamos e toleramos — <strong>inclusive quando ninguém está olhando.</strong></blockquote>
          <div className={styles.nextRow}><a className="module-two-button" href="#excelencia">Excelência não é perfeccionismo ↓</a></div>
        </section>

        <section id="excelencia" className={styles.section} aria-labelledby="excelencia-title">
          <header className={styles.sectionHeading}>
            <span className={styles.kicker}>02 · Atenção aos detalhes com propósito</span>
            <h2 id="excelencia-title">Excelência <strong>não é perfeccionismo.</strong></h2>
            <p>Fazer bem exige critério: reconhecer o que é obrigatório, o que cria valor e o que apenas consome esforço.</p>
          </header>

          <div className={styles.twoColumns}>
            <article className={`module-two-glass-panel ${styles.card} ${styles.perfection}`}>
              <h3>Perfeccionismo que paralisa</h3>
              <p>“Tudo precisa estar absolutamente perfeito antes de entregar.”</p>
              <p>Revisões sem critério de conclusão podem consumir tempo e atrasar o que realmente importa.</p>
            </article>
            <article className={`module-two-glass-panel ${styles.card} ${styles.excellence}`}>
              <h3>Excelência que entrega valor</h3>
              <p>“Cumprimos os requisitos, cuidamos do que é crítico e melhoramos continuamente.”</p>
              <p>O padrão é claro, a entrega é conferida e o aprendizado orienta a próxima melhoria.</p>
            </article>
          </div>
          <p className={styles.callout}>Na melhoria contínua, buscar a perfeição significa <strong>seguir aprendendo e reduzindo desperdícios</strong>. Não significa adiar indefinidamente uma entrega que atende aos requisitos. <a className={styles.citation} href="#referencias" aria-label="Referência 3: Lean Enterprise Institute">[3]</a></p>

          <div className={styles.visualRow}>
            <figure className={styles.photo}>
              <Image src="/images/excelencia/conferencia-da-entrega.webp" alt="Cena ilustrativa de dois profissionais conferindo um corredor limpo, com checklist e sinalização amarela de atenção ao piso." width={1672} height={941} sizes="(max-width: 1400px) 95vw, 46vw" />
              <figcaption>A aparência faz parte da entrega. A segurança também precisa ser conferida.</figcaption>
            </figure>
            <div className={`module-two-glass-panel ${styles.panel} ${styles.intro}`}>
              <h2>Nem todo detalhe <strong>tem o mesmo peso.</strong></h2>
              <p>Em uma limpeza, refazer um acabamento já aprovado não deve atrasar a verificação das condições seguras de circulação.</p>
              <p><strong>Priorizar é concentrar atenção onde uma falha tem maior consequência.</strong></p>
            </div>
          </div>

          <header className={styles.sectionHeading}>
            <h2>O que este detalhe <strong>pode afetar?</strong></h2>
          </header>
          <div className={styles.impacts}>
            {impacts.map(([title, question]) => (
              <article className={`module-two-glass-panel ${styles.card}`} key={title}><h3>{title}</h3><p>{question}</p></article>
            ))}
          </div>

          <div className={`module-two-glass-panel ${styles.panel} ${styles.learning}`}>
            <h2>Antes de entregar, <strong>use três critérios.</strong></h2>
            <ol className={styles.criteria}>
              <li><strong>Consequência:</strong> o que acontece se esse detalhe falhar?</li>
              <li><strong>Requisito:</strong> qual padrão precisa ser cumprido e como será verificado?</li>
              <li><strong>Ação:</strong> quem corrige, em qual prazo e quem confirma a solução?</li>
            </ol>
            <p>Defina controles proporcionais ao risco. <strong>Segurança e requisitos obrigatórios não podem ser dispensados para ganhar tempo.</strong> <a className={styles.citation} href="#referencias" aria-label="Referência 4: ISO">[4]</a></p>
          </div>

          <blockquote className={styles.takeaway}>Atenção ao detalhe é compreender consequências.<br /><strong>Excelência é agir com critério — e fazer disso uma rotina.</strong></blockquote>
          <div className={styles.reflection}>
            <h3>Leve para a sua operação</h3>
            <p>Qual comportamento você precisa reforçar? Qual detalhe crítico sua equipe precisa conferir melhor?</p>
          </div>
        </section>

        <details id="referencias" className={`module-two-glass-panel ${styles.sources}`}>
          <summary>Referências e bases do conteúdo</summary>
          <ol>
            {references.map((reference) => (
              <li key={reference.url}><a href={reference.url} target="_blank" rel="noopener noreferrer">{reference.name} ↗</a><p>{reference.subject}</p></li>
            ))}
          </ol>
          <p>Texto elaborado e adaptado para este treinamento. Situações de facilities são exemplos didáticos. Imagens ilustrativas geradas por IA; não retratam colaboradores do Grupo WD.</p>
        </details>

        <footer className={styles.footer}>
          <Link className="module-two-button" href="/modulo-2/excelencia-operacional">← Excelência Operacional</Link>
          <span>Parceria do Grupo WD e Ramos Consultoria</span>
          <Link className="module-two-button" href="/modulo-2/video-normalizacao-do-desvio">Antes que o desvio vire rotina →</Link>
        </footer>
      </div>
    </main>
  );
}
