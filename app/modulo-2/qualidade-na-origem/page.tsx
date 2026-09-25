import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import shared from "../normalizacao-do-desvio/desvios.module.css";
import styles from "./qualidade.module.css";
import VisualManagement from "./VisualManagement";

export const metadata: Metadata = { title: "Qualidade na origem, gestão visual e 5S | TreinamentoWD1", description: "Detectar anormalidades, responder aos desvios e sustentar padrões: exemplos para portaria, limpeza, manutenção e liderança." };

const response = [
  ["Pare e proteja", "Interrompa a atividade afetada conforme o procedimento. Proteja as pessoas e impeça que uma entrega suspeita siga adiante."],
  ["Observe e comunique", "Compare a situação com o padrão. Registre o que ocorreu e acione quem deve responder."],
  ["Entenda a causa", "Verifique condições, informação, equipamento e método. Trabalhe com evidências, sem encerrar a análise em “faltou atenção”."],
  ["Corrija e verifique", "A equipe competente executa a correção. Confirme segurança, funcionamento e qualidade antes da liberação."],
  ["Aprenda e atualize", "Incorpore a mudança validada ao padrão e prepare os envolvidos para aplicá-la."],
  ["Acompanhe a recorrência", "Defina responsável e momento de revisão. Verifique se o problema deixou de se repetir."],
];
const references = [
  ["Toyota Motor Corporation — Toyota Production System", "Jidoka, identificação de anormalidades e qualidade incorporada ao processo.", "https://global.toyota/en/company/vision-and-philosophy/production-system/"],
  ["Toyota — Virtual Plant Tour: Production System", "Andon, chamada da liderança e exemplo de poka-yoke na verificação do aperto.", "https://global.toyota/en/company/plant-tours/production-system/"],
  ["Lean Enterprise Institute — Standardized Work", "Referência de execução, redução de variação, treinamento e base para melhoria.", "https://www.lean.org/lexicon-terms/standardized-work/"],
  ["John Shook / LEI — Visual Management: Good, Bad, and Ugly", "Gestão visual com propósito, responsáveis e resposta aos problemas.", "https://www.lean.org/the-lean-post/articles/visual-management-the-good-the-bad-and-the-ugly/"],
  ["Lean Enterprise Institute — 5S", "Os cinco termos e sua relação com organização, padrões e visibilidade dos problemas.", "https://www.lean.org/lexicon-terms/five-s/"],
  ["NIST / MEP — Organize Your Workplace", "Caso de aplicação de 5S com participação da equipe, identificação e sustentação.", "https://www.nist.gov/mep/successstories/2024/organize-your-workplace"],
  ["HSE — Maintenance of work equipment", "Planejamento da manutenção, competência e condições seguras para intervir.", "https://www.hse.gov.uk/work-equipment-machinery/maintenance.htm"],
  ["Toyota Motor Corporation — Virtual Plant Tour", "Fluxo principal: estamparia, soldagem, pintura, montagem, inspeção e expedição.", "https://global.toyota/en/company/plant-tours/"],
];
const fiveS = [
  ["01", "Seiri · Separar", "Manter o necessário", "Avalie o que tem utilidade e destine corretamente itens sem uso, vencidos ou inadequados.", "Na portaria: retirar formulários obsoletos da área de uso e separar crachás danificados. Documentos e materiais seguem as regras de retenção e descarte."],
  ["02", "Seiton · Organizar", "Encontrar sem procurar", "Defina um lugar identificado e acessível para cada recurso, de acordo com a frequência de uso.", "Na limpeza: organizar o carrinho com posições definidas, recipientes identificados e separação adequada de materiais. Uma ausência deve ficar visível."],
  ["03", "Seiso · Limpar", "Cuidar e perceber", "Limpar também ajuda a perceber vazamentos, desgaste e outras condições que precisam de tratamento.", "Na manutenção: ao identificar um vazamento, sinalizar e encaminhar a causa. Enxugar repetidamente sem tratar a origem mantém o problema."],
  ["04", "Seiketsu · Padronizar", "Tornar o cuidado repetível", "Combine referências, responsabilidades, frequência e critérios de verificação.", "No posto de trabalho: uma referência visual mostra como receber e entregar o turno. Defina também o que fazer quando algo não estiver conforme."],
  ["05", "Shitsuke · Sustentar", "Fazer disso uma rotina", "Pratique, acompanhe e melhore o padrão com a equipe, com condições reais para mantê-lo.", "Na troca de turno: conferir o essencial, registrar a pendência e definir o responsável. Se o desvio se repete, investigar o que dificulta o padrão."],
];

function Cite({ numbers }: { numbers: string }) { return <a className={shared.citation} href="#referencias" aria-label={`Referências ${numbers}`}>[{numbers}]</a>; }

export default function QualidadeNaOrigem() {
  return (
    <main className="module-two-screen" id="inicio">
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${shared.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${shared.topLinks}`}><Link className="back-link" href="/modulo-2/cafe-5-minutos">← Café de 5 minutos</Link><Link className="back-link" href="/modulo-2">Início do módulo</Link><Link className="back-link" href="/modulo-2/grupo-de-trabalho">Grupo de Trabalho →</Link><span className="module-two-step">Módulo 2 · Tela 18</span></div>
      </nav>
      <div className={`${shared.content} ${styles.content}`}>
        <header className={shared.header}>
          <div><span className={shared.kicker}>Excelência Operacional · Qualidade, referência e rotina</span><h1>Perceber cedo. <strong>Agir na origem.</strong></h1></div>
          <div className={shared.logos}><Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} /><Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} /></div>
        </header>
        <nav className={shared.navigation} aria-label="Temas desta tela"><a href="#qualidade">10 · Qualidade na origem</a><a href="#anormal">11 · Enxergar o anormal</a><a href="#visual">12 · Gestão visual</a><a href="#cinco-s">13 · 5S</a></nav>

        <section className={shared.section} id="qualidade">
          <span className={shared.kicker}>10 · Qualidade na origem</span>
          <h2>O problema precisa ser tratado <strong>onde é percebido.</strong></h2>
          <p>No Sistema Toyota, <strong>jidoka</strong> associa a detecção de anormalidades à capacidade de interromper a operação e sinalizar a necessidade de resposta. O objetivo é incorporar qualidade ao processo e evitar que defeitos avancem. <Cite numbers="1" /></p>
          <p>Esperar o final da linha ou a reclamação do cliente amplia o caminho percorrido pelo problema. Detectar cedo pode reduzir propagação, retrabalho e exposição ao risco; o impacto também depende da gravidade e da resposta adotada.</p>
          <div className={shared.grid}>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>Andon: tornar o problema visível</h3><p>Na demonstração oficial da Toyota, um botão de chamada sinaliza a ocorrência e informa a liderança. A sinalização inicia uma resposta; sozinha, não resolve a causa. <Cite numbers="2" /></p></article>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>Poka-yoke: prevenir ou detectar o erro</h3><p>A Toyota mostra um dispositivo associado à ferramenta de aperto que sinaliza uma condição inadequada. O controle ajuda a impedir que a falha siga para a próxima etapa. <Cite numbers="2" /></p></article>
          </div>
          <div className={shared.section}><h2>Encontrou um desvio? <strong>Organize a resposta.</strong></h2><p>Este roteiro didático adapta o princípio à operação. O procedimento local define a parada, os responsáveis e os critérios de liberação.</p></div>
          <ol className={styles.response}>{response.map(([title,body],index) => <li className={`module-two-glass-panel ${shared.panel}`} key={title}><span className={shared.smallLabel}>Passo {index+1}</span><h3>{title}</h3><p>{body}</p></li>)}</ol>
          <div className={shared.callout}><p><strong>Conter é impedir que o problema se espalhe. Corrigir é tratar o que falhou. Prevenir recorrência é mudar o que permitiu a falha.</strong> As três ações podem ser necessárias.</p></div>
          <div className={shared.grid}>
            <article className={`module-two-glass-panel ${shared.panel}`}><span className={shared.smallLabel}>Exemplo adaptado · Portaria</span><h3>A dúvida fica antes da entrada</h3><p>A pessoa apresenta um nome, mas a autorização não consta. O porteiro mantém o atendimento na área de espera e confirma com o responsável pelo canal previsto.</p><p>Depois, a equipe verifica por que o cadastro não chegou e ajusta a comunicação entre solicitante e portaria.</p></article>
            <article className={`module-two-glass-panel ${shared.panel}`}><span className={shared.smallLabel}>Exemplo adaptado · Limpeza</span><h3>Não transferir o risco para quem passa</h3><p>Ao concluir a limpeza, a equipe percebe água acumulada no corredor. Mantém a área protegida, comunica, corrige a condição e verifica antes de liberar.</p><p>Se acontece de novo, investiga método, equipamento ou vazamento, em vez de apenas repetir a secagem.</p></article>
          </div>
          <p>Intervenções em máquinas exigem profissionais competentes e condições seguras de manutenção. <strong>O supervisor coordena o atendimento; não substitui habilitação técnica nem improvisa reparos.</strong> <Cite numbers="7" /></p>
        </section>

        <section className={shared.section} id="anormal">
          <span className={shared.kicker}>11 · Treine as pessoas para enxergar o anormal</span>
          <h2>Para perceber o desvio, <strong>torne o normal claro.</strong></h2>
          <p>“Faça direito” deixa espaço para interpretações. Um padrão útil explica a entrega, a sequência essencial e como verificar o resultado. Ele apoia o treinamento e oferece uma referência para melhorar. <Cite numbers="3" /></p>
          <ul className={`${shared.grid} ${shared.phrases}`}>
            <li className={`module-two-glass-panel ${shared.panel}`}><strong>Condição:</strong> como ambiente, material e equipamento devem estar.</li>
            <li className={`module-two-glass-panel ${shared.panel}`}><strong>Resultado:</strong> o que caracteriza uma entrega aceita.</li>
            <li className={`module-two-glass-panel ${shared.panel}`}><strong>Tempo e quantidade:</strong> o esperado e os limites que exigem atenção.</li>
            <li className={`module-two-glass-panel ${shared.panel}`}><strong>Informação:</strong> quais dados são indispensáveis e onde encontrá-los.</li>
            <li className={`module-two-glass-panel ${shared.panel}`}><strong>Etapas críticas:</strong> o que precisa ser confirmado antes de avançar.</li>
            <li className={`module-two-glass-panel ${shared.panel}`}><strong>Resposta:</strong> quando parar, quem chamar e como liberar.</li>
          </ul>
          <div className={styles.comparison}>
            <article><span className={shared.smallLabel}>Orientação vaga</span><p>“Deixe a sala pronta.”</p></article>
            <article><span className={shared.smallLabel}>Referência verificável · Exemplo</span><p>“Antes do horário combinado, confira o checklist acordado: mesas limpas, resíduos recolhidos, materiais previstos disponíveis e piso em condição segura para uso. Registre e comunique qualquer pendência.”</p></article>
          </div>
          <p><strong>Treine com situações reais:</strong> mostre uma execução conforme, compare com um desvio e peça que a pessoa explique o que percebeu e qual ação tomaria. Em seguida, acompanhe a execução no trabalho.</p>
          <div className={shared.callout}><p><strong>Sem referência, o desvio pode parecer normal. Sem prática, o padrão pode ficar apenas no papel.</strong></p></div>
        </section>

        <section className={shared.section} id="visual">
          <span className={shared.kicker}>12 · Gestão visual</span>
          <h2>Está dentro do padrão? <strong>O que precisa de ação?</strong></h2>
          <p>Gestão visual aproxima a informação de quem precisa decidir. O recurso deve ter propósito, responsável, frequência de atualização e uma resposta combinada para o desvio. Um quadro que ninguém atualiza ou atende perde sua função. <Cite numbers="4" /></p>
          <VisualManagement />
          <div className={shared.grid}>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>Status que orienta</h3><p>Em um chamado: “aguardando atendimento”, “em execução”, “aguardando verificação” e “liberado”. Mostre também responsável, prazo e última atualização.</p></article>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>Limites que avisam</h3><p>No estoque do posto, uma marca de reposição indica quando solicitar material. O limite precisa considerar o consumo e o tempo de abastecimento.</p></article>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>Local que revela ausência</h3><p>Uma posição identificada para o equipamento torna sua falta visível. A identificação também mostra onde devolver após o uso.</p></article>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>Checklist no ponto certo</h3><p>Confirme os itens críticos no momento da execução. Marcar tudo ao final, de memória, pode esconder uma etapa que não ocorreu.</p></article>
          </div>
          <p>Teste seu quadro com alguém da equipe: <strong>é possível entender a situação, a pendência e o responsável sem uma longa explicação?</strong> Se não, simplifique a informação e esclareça a regra de resposta.</p>
          <div className={shared.callout}><p><strong>Dar visibilidade ao problema é o começo. Atender ao sinal é o que transforma informação em melhoria.</strong></p></div>
        </section>

        <section className={shared.section} id="cinco-s">
          <span className={shared.kicker}>13 · 5S: organização também é qualidade</span>
          <h2>Organizar para trabalhar melhor <strong>e perceber o que mudou.</strong></h2>
          <p>O 5S reúne práticas de organização e conservação que apoiam o controle visual e a execução consistente. Seu resultado precisa permanecer na rotina, com participação da equipe. <Cite numbers="5, 6" /></p>
          <div className={styles.fiveS}>{fiveS.map(([number,name,title,body,example]) => <article className={`module-two-glass-panel ${shared.panel}`} key={number}><span className={shared.smallLabel}>{number} · {name}</span><h3>{title}</h3><p>{body}</p><p><strong>Aplicação:</strong> {example}</p></article>)}</div>
          <div className={shared.grid}>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>Como perceber se está funcionando?</h3><p>Observe tempo de procura, materiais indisponíveis, falhas na troca de turno e desvios que voltam a aparecer. Compare com a situação anterior e com as necessidades do serviço.</p></article>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>Uma prática para começar</h3><p>Escolha um posto. Com a equipe, retire o desnecessário, organize o essencial e defina a verificação de entrega do turno. Acompanhe o uso e ajuste o que não funcionar.</p></article>
          </div>
          <div className={shared.callout}><p><strong>Excelência é rotina: tornar o padrão visível, perceber o desvio, agir na origem e sustentar o aprendizado.</strong></p></div>
        </section>

        <section className={shared.section}><h2>Leve para a sua <strong>próxima operação.</strong></h2><p>Escolha uma situação e responda: <strong>qual é o padrão, qual sinal mostrará o desvio, quem vai responder e como vamos confirmar a solução?</strong></p></section>
        <details id="referencias" className={`module-two-glass-panel ${shared.panel} ${shared.sources}`}><summary>Referências e bases do conteúdo</summary><ol>{references.map(([title,description,url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title} ↗</a><p>{description}</p></li>)}</ol><p>Os exemplos de facilities são adaptações didáticas. Os critérios operacionais devem ser definidos para cada serviço e equipamento. A referência HSE fundamenta princípios de segurança; não substitui os procedimentos e requisitos aplicáveis no Brasil.</p><p>O 5S aparece aqui na forma de cinco práticas difundida na literatura lean. A Toyota também utiliza a denominação 4S em sua tradição; isso não altera a importância de sustentar os cuidados na rotina. <Cite numbers="5" /></p></details>
        <footer className={shared.footer}><Link className="module-two-button" href="/modulo-2/cafe-5-minutos">← Café de 5 minutos</Link><span>Parceria do Grupo WD e Ramos Consultoria</span><Link className="module-two-button" href="/modulo-2/grupo-de-trabalho">Grupo de Trabalho →</Link></footer>
      </div>
    </main>
  );
}
