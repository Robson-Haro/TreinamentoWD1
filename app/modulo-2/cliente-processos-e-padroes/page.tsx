import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import styles from "../normalizacao-do-desvio/desvios.module.css";
import local from "./cliente.module.css";

export const metadata: Metadata = { title: "Cliente, processos e padrões | TreinamentoWD1", description: "Como entender valor para o cliente, investigar processos e melhorar padrões na operação." };

const questions = [
  "O padrão estava claro, atualizado e acessível no local de trabalho?",
  "A pessoa foi treinada e teve oportunidade de demonstrar que sabia executar?",
  "A informação necessária chegou completa e no momento certo?",
  "Havia etapas desnecessárias, sobrecarga, interrupções ou pressão por prazo?",
  "A execução dependia apenas da memória ou havia apoios adequados?",
  "Era possível detectar o desvio antes de chegar ao cliente?",
  "A liderança acompanhava o trabalho e removia dificuldades?",
  "O problema já havia ocorrido? As ações anteriores funcionaram?",
];
const standard = [
  ["Resultado esperado", "O que deve ser entregue, para quem e com qual critério de aceitação."],
  ["Sequência essencial", "Etapas, recursos e pontos de verificação que fazem diferença na execução."],
  ["Cuidados e exceções", "Riscos, proteções e quando interromper, pedir ajuda ou encaminhar uma dúvida."],
  ["Responsável e versão", "Quem mantém o padrão, quando foi revisado e como a equipe aprende a mudança."],
];
const sources = [
  ["Lean Enterprise Institute — Lean Thinking and Practice", "Valor definido a partir do cliente e melhoria do fluxo de entrega.", "https://www.lean.org/lexicon-terms/lean-thinking-and-practice/"],
  ["Lean Enterprise Institute — Seven Wastes", "Trabalho que cria valor, atividades de apoio e desperdícios; exemplos aqui adaptados para serviços.", "https://www.lean.org/lexicon-terms/seven-wastes/"],
  ["HSE — Managing human failures", "Falhas humanas, condições de trabalho e prevenção além da responsabilização individual.", "https://www.hse.gov.uk/humanfactors/topics/humanfail.htm"],
  ["HSE — Procedures", "Procedimentos adequados à tarefa, participação da equipe e relação com a competência.", "https://www.hse.gov.uk/humanfactors/topics/procedures.htm"],
  ["Lean Enterprise Institute — Standardized Work", "Redução de variação, apoio ao treinamento e base para melhoria contínua.", "https://www.lean.org/lexicon-terms/standardized-work/"],
];

export default function ClienteProcessosEPadroes() {
  return (
    <main className="module-two-screen" id="inicio">
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${styles.topLinks}`}><Link className="back-link" href="/modulo-2/normalizacao-do-desvio">← Tela anterior</Link><Link className="back-link" href="/modulo-2">Início do módulo</Link><Link className="back-link" href="/modulo-2/cafe-5-minutos">Pausa para o café →</Link><span className="module-two-step">Módulo 2 · Tela 17</span></div>
      </nav>
      <div className={styles.content}>
        <header className={styles.header}>
          <div><span className={styles.kicker}>Excelência Operacional · Valor, processo e padrão</span><h1>Tudo começa <strong>pelo cliente.</strong></h1></div>
          <div className={styles.logos} aria-label="Grupo WD e Ramos Consultoria"><Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} /><Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} /></div>
        </header>
        <nav className={styles.navigation} aria-label="Temas desta tela"><a href="#cliente">01 · Valor para o cliente</a><a href="#processo">02 · Investigar o processo</a><a href="#padrao">03 · Padrão que evolui</a></nav>

        <section className={styles.section} id="cliente">
          <div className={local.visualRow}>
            <div><h2>O que gera valor para <strong>quem recebe nosso trabalho?</strong></h2><p>Antes de mudar uma atividade, entenda a necessidade que ela precisa atender. No pensamento lean, o ponto de partida é o valor percebido pelo cliente. <a className={styles.citation} href="#referencias" aria-label="Referência 1">[1]</a></p><p>Em facilities, isso pode significar um ambiente limpo no horário combinado, acesso seguro, informação confiável ou um equipamento disponível para uso.</p></div>
            <figure className={local.photo}><Image src="/images/excelencia/escuta-do-cliente.webp" alt="Cena ilustrativa de uma gestora de prédio explicando sua necessidade a um supervisor de facilities que a escuta e registra as informações." width={1672} height={941} sizes="(max-width: 1400px) 95vw, 46vw" priority /><figcaption>Escutar antes de melhorar: qual problema o cliente precisa resolver?</figcaption></figure>
          </div>
          <div className={`${styles.grid}`}>
            <article className={`module-two-glass-panel ${styles.panel}`}><h3>Transforme a expectativa em critério</h3><p>Quem recebe a entrega? O que precisa estar pronto? Até quando? Como vamos confirmar que ficou adequado?</p></article>
            <article className={`module-two-glass-panel ${styles.panel}`}><h3>Veja quem recebe a próxima etapa</h3><p>O próximo turno ou outra área também depende da sua entrega. Uma informação incompleta pode transferir o problema até o cliente final.</p></article>
          </div>
          <div className={styles.section}><h2>Olhe para a atividade <strong>em três categorias.</strong></h2><p>Esta classificação ajuda a discutir o trabalho; sua aplicação depende do serviço e dos requisitos envolvidos. <a className={styles.citation} href="#referencias" aria-label="Referência 2">[2]</a></p></div>
          <div className={local.categories}>
            <article className={`module-two-glass-panel ${styles.panel} ${local.category}`}><h3>1. Gera valor</h3><p>Contribui diretamente para o resultado que o cliente precisa.</p><p><strong>Exemplo:</strong> executar a limpeza necessária para disponibilizar uma sala nas condições e no horário acordados.</p><p><strong>Decisão:</strong> melhorar a qualidade e a fluidez dessa entrega.</p></article>
            <article className={`module-two-glass-panel ${styles.panel} ${local.category}`}><h3>2. É necessária, mesmo sem gerar valor diretamente</h3><p>Sustenta a operação ou atende a uma exigência que continua válida no processo atual.</p><p><strong>Exemplo:</strong> um registro obrigatório de rastreabilidade que apoia a entrega.</p><p><strong>Decisão:</strong> simplificar sua execução sem perder a função ou descumprir requisitos.</p></article>
            <article className={`module-two-glass-panel ${styles.panel} ${local.category}`}><h3>3. É desperdício</h3><p>Consome recursos sem contribuir para a entrega ou cumprir uma necessidade justificável.</p><p><strong>Exemplos:</strong> procurar material fora do lugar, redigitar a mesma informação ou refazer um serviço por falha evitável.</p><p><strong>Decisão:</strong> investigar a causa e eliminar o esforço desnecessário.</p></article>
          </div>
          <div className={styles.callout}><p><strong>Segurança, qualidade e conformidade não podem ser retiradas sob o nome de eficiência.</strong> Em serviços de segurança, por exemplo, verificar o acesso pode ser parte central do próprio valor contratado.</p></div>
          <p>Compare o antes e o depois: o cliente recebeu melhor? Houve menos espera e retrabalho? A segurança foi preservada? <strong>Fazer mais tarefas não é o mesmo que entregar mais valor.</strong></p>
        </section>

        <section className={styles.section} id="processo">
          <div className={local.visualRow}>
            <figure className={local.photo}><Image src="/images/excelencia/investigar-o-processo.webp" alt="Cena ilustrativa de uma equipe de facilities analisando uma etapa ausente em um quadro de processo, sem apontar culpa para uma pessoa." width={1672} height={941} sizes="(max-width: 1400px) 95vw, 46vw" /><figcaption>Entenda as condições que tornaram a falha possível.</figcaption></figure>
            <div><h2>Antes de culpar a pessoa, <strong>observe o processo.</strong></h2><p>“Quem errou?” pode identificar um envolvido. Sozinha, essa pergunta não explica por que o erro aconteceu nem como evitar sua repetição.</p><p><strong>“O que no processo permitiu que isso acontecesse — e chegasse até a entrega?”</strong></p><p>A investigação precisa considerar tarefa, equipamentos, informação e condições de trabalho. Pessoas treinadas também podem errar. <a className={styles.citation} href="#referencias" aria-label="Referência 3">[3]</a></p></div>
          </div>
          <div className={styles.section}><h2>Investigue com perguntas <strong>e evidências.</strong></h2></div>
          <ul className={`${styles.grid} ${styles.phrases}`}>{questions.map(question => <li className={`module-two-glass-panel ${styles.panel}`} key={question}>{question}</li>)}</ul>
          <article className={`module-two-glass-panel ${styles.panel} ${local.example}`}>
            <span className={styles.smallLabel}>Exemplo didático · Um chamado ficou sem atendimento</span><h3>Vá além de “alguém esqueceu”.</h3>
            <p>O chamado passou de turno sem responsável definido. O status não mostrava a pendência e ninguém confirmou o recebimento.</p>
            <p><strong>Melhoria possível:</strong> explicitar responsável e prazo, tornar a pendência visível e confirmar a passagem para o próximo turno. Depois, verificar se os chamados realmente deixaram de se perder.</p>
          </article>
          <div className={styles.callout}><p><strong>Investigar o processo não elimina a responsabilidade.</strong> Permite compreender o ocorrido e responder de forma proporcional, distinguindo erro involuntário, lacuna de treinamento e decisão consciente de ignorar uma regra. <a className={styles.citation} href="#referencias" aria-label="Referência 3">[3]</a></p></div>
          <p>Combine orientação com melhorias na tarefa, nos recursos e na detecção dos desvios. <strong>“Preste mais atenção” não substitui uma prevenção bem desenhada.</strong></p>
        </section>

        <section className={styles.section} id="padrao">
          <div className={local.visualRow}>
            <div><h2>Padrão <strong>não é burocracia.</strong></h2><p>Um padrão útil torna o trabalho compreensível, repetível e verificável. Ajuda a treinar, comparar a execução e perceber desvios. <a className={styles.citation} href="#referencias" aria-label="Referências 4 e 5">[4][5]</a></p><p><strong>É o melhor método conhecido e acordado para realizar a atividade neste momento.</strong></p><p>“Neste momento” importa: o padrão deve incorporar o que a equipe aprende e valida na prática.</p></div>
            <figure className={local.photo}><Image src="/images/excelencia/ensinar-o-padrao.webp" alt="Cena ilustrativa de uma supervisora ensinando um padrão visual de limpeza a um colega, junto a um carrinho organizado." width={1672} height={941} sizes="(max-width: 1400px) 95vw, 46vw" /><figcaption>Um padrão claro precisa ser ensinado, praticado e compreendido.</figcaption></figure>
          </div>
          <p>Quando cada pessoa improvisa um método, fica mais difícil saber qual execução gerou o resultado, onde surgiu o problema e o que precisa melhorar. <strong>Para melhorar com consistência, precisamos de uma referência.</strong></p>
          <div className={styles.section}><h2>O que um padrão útil <strong>precisa mostrar?</strong></h2></div>
          <div className={styles.grid}>{standard.map(([title,body]) => <article className={`module-two-glass-panel ${styles.panel}`} key={title}><h3>{title}</h3><p>{body}</p></article>)}</div>
          <p>Use linguagem simples, exemplos e recursos visuais adequados à tarefa. Desenvolva o padrão com quem executa e confirme a aprendizagem na prática. <a className={styles.citation} href="#referencias" aria-label="Referência 4">[4]</a></p>
          <ol className={local.cycle} aria-label="Ciclo de evolução do padrão">{["Padronizar","Executar","Observar","Melhorar","Atualizar o padrão"].map((step,index) => <li key={step}><span>{index+1}.</span>{step}</li>)}</ol>
          <p>Teste a mudança, compare os resultados e verifique seus efeitos sobre qualidade, segurança e prazo. Se funcionar e for validada, atualize a referência e prepare a equipe para usá-la. <a className={styles.citation} href="#referencias" aria-label="Referência 5">[5]</a></p>
          <div className={styles.callout}><p><strong>O padrão organiza o que sabemos hoje. A melhoria amplia o que saberemos amanhã.</strong></p></div>
        </section>

        <section className={styles.section}><h2>Leve uma mudança <strong>para a sua rotina.</strong></h2><p>Escolha uma atividade e responda: qual valor ela entrega, qual dificuldade do processo precisa ser tratada e qual ponto do padrão precisa ficar mais claro?</p><p><strong>Excelência é entender o cliente, melhorar o processo e sustentar o cuidado na rotina.</strong></p></section>
        <details id="referencias" className={`module-two-glass-panel ${styles.panel} ${styles.sources} ${local.sources}`}><summary>Referências e bases do conteúdo</summary><ol>{sources.map(([title,subject,url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title} ↗</a><p>{subject}</p></li>)}</ol><p>Conteúdo e exemplos adaptados para o contexto de facilities. Imagens ilustrativas geradas por IA; não retratam colaboradores do Grupo WD.</p></details>
        <footer className={styles.footer}><Link className="module-two-button" href="/modulo-2/normalizacao-do-desvio">← Normalização do desvio</Link><span>Parceria do Grupo WD e Ramos Consultoria</span><Link className="module-two-button" href="/modulo-2/cafe-5-minutos">Pausa de 5 minutos para o café →</Link></footer>
      </div>
    </main>
  );
}
