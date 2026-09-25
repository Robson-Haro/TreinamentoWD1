import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import shared from "../normalizacao-do-desvio/desvios.module.css";
import styles from "./comunicacao.module.css";

export const metadata: Metadata = {
  title: "Comunicação na liderança | TreinamentoWD1",
  description: "Liderança Situacional, Segurança Psicológica e Comunicação Não Violenta: conceitos e exemplos para aplicar na rotina da liderança.",
};

const situations = [
  ["Pouca experiência na tarefa", "Dê mais orientação e clareza: explique o que fazer, como conferir e quando pedir ajuda."],
  ["Está aprendendo", "Combine orientação, explicação e feedback. Acompanhe a prática e ajuste o apoio."],
  ["Sabe fazer, mas está inseguro", "Escute, faça perguntas e ofereça apoio para fortalecer a confiança."],
  ["Tem domínio e autonomia", "Delegue com resultado, limites e pontos de acompanhamento combinados."],
];

const questions = [
  ["Está tudo entendido?", "Qual parte dessa orientação pode gerar mais dificuldade na operação?"],
  ["Alguém tem alguma ideia?", "Se vocês pudessem mudar uma coisa nesse processo, o que mudariam?"],
];

const components = [
  ["01", "Observação", "Descreva o fato que pode ser verificado, sem rótulos ou generalizações."],
  ["02", "Sentimento", "Expresse como você se sente diante da situação, sem acusar o outro."],
  ["03", "Necessidade", "Explique o que precisa ser cuidado: clareza, cooperação ou previsibilidade, por exemplo."],
  ["04", "Pedido", "Proponha uma ação concreta e viável. Escute a resposta e construa um acordo."],
];

const references = [
  ["1", "The Center for Leadership Studies", "A origem do modelo de Liderança Situacional de Hersey e Blanchard.", "https://situational.com/blog/the-history-of-the-situational-leadership-framework/"],
  ["2", "Harvard Business School — Amy Edmondson", "Segurança psicológica, participação e responsabilidade por resultados.", "https://www.hbs.edu/recruiting/guides-and-stories/leading-in-tough-times"],
  ["3", "Harvard Business School — Working Knowledge", "Práticas de liderança para construir segurança psicológica.", "https://www.library.hbs.edu/working-knowledge/four-steps-to-build-the-psychological-safety-that-high-performing-teams-need-today"],
  ["4", "Centro de Comunicação Não-Violenta", "Empatia, expressão honesta e compreensão das necessidades.", "https://www.cnvc.org/pt/about/purpose-of-nvc"],
  ["5", "CNVC — Marshall Rosenberg", "Os quatro componentes da Comunicação Não Violenta.", "https://www.cnvc.org/store/nonviolent-communication-audio"],
];

function Cite({ numbers }: { numbers: string }) {
  return <a className={shared.citation} href="#referencias" aria-label={`Referências ${numbers}`}>[{numbers}]</a>;
}

export default function ComunicacaoNaLideranca() {
  return (
    <main className={`module-two-screen ${styles.screen}`} id="inicio">
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${shared.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${shared.topLinks}`}>
          <Link className="back-link" href="/modulo-2/frases-de-comunicacao">← Frases de comunicação</Link>
          <Link className="back-link" href="/modulo-2/video-comunicacao-na-lideranca">Assistir ao vídeo →</Link>
          <span className="module-two-step">Módulo 2 · Tela 8</span>
        </div>
      </nav>

      <div className={`${shared.content} ${styles.content}`}>
        <header className={`module-two-glass-panel ${styles.hero}`}>
          <span className={shared.kicker}>Comunicação e liderança · Da teoria à prática</span>
          <h1>Comunicar para <strong>orientar, ouvir e construir acordos.</strong></h1>
          <p>Três abordagens para adaptar a orientação, abrir espaço para a equipe e conversar com clareza.</p>
          <div className={shared.logos} aria-label="Grupo WD e Ramos Consultoria">
            <Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} />
            <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} />
          </div>
        </header>

        <nav className={`${shared.navigation} ${styles.topicNav}`} aria-label="Temas desta tela">
          <a href="#situacional">1 · Liderança Situacional</a>
          <a href="#seguranca">2 · Segurança Psicológica</a>
          <a href="#cnv">3 · Comunicação Não Violenta</a>
        </nav>

        <section className={shared.section} id="situacional" aria-labelledby="situacional-title">
          <span className={shared.kicker}>1 · Adaptar a orientação</span>
          <h2 id="situacional-title">Liderança <strong>Situacional</strong></h2>
          <p className={styles.author}>Paul Hersey e Ken Blanchard</p>
          <p>A ideia central é simples: <strong>não existe uma única forma de liderar adequada a todas as situações.</strong> Ajuste a orientação e o apoio conforme a capacidade, a experiência e a disposição da pessoa para realizar aquela tarefa. <Cite numbers="1" /></p>
          <div className={`module-two-glass-panel ${styles.tableFrame}`}>
            <table className={styles.table}>
              <caption>Como adaptar a comunicação · Exemplos de aplicação</caption>
              <thead><tr><th scope="col">Situação do colaborador</th><th scope="col">Comunicação do líder</th></tr></thead>
              <tbody>{situations.map(([situation, action]) => <tr key={situation}><th scope="row">{situation}</th><td>{action}</td></tr>)}</tbody>
            </table>
          </div>
          <div className={shared.callout}><p><strong>Avalie a pessoa naquela tarefa.</strong> Alguém pode ter autonomia na rotina e precisar de orientação ao aprender um procedimento novo.</p></div>
          <p><strong>Na operação:</strong> ao ensinar um novo controle de acesso, demonstre a sequência, acompanhe uma execução e confirme a compreensão. À medida que a pessoa ganha domínio, amplie a autonomia com acompanhamento combinado.</p>
        </section>

        <section className={shared.section} id="seguranca" aria-labelledby="seguranca-title">
          <span className={shared.kicker}>2 · Dar espaço para a equipe se manifestar</span>
          <h2 id="seguranca-title">Segurança <strong>Psicológica</strong></h2>
          <p className={styles.author}>Amy Edmondson · Harvard Business School</p>
          <p>É a percepção de que a equipe pode <strong>fazer perguntas, trazer ideias, discordar, admitir erros e apresentar preocupações</strong> sem ser humilhada ou punida por se manifestar. <Cite numbers="2" /></p>
          <div className={`module-two-glass-panel ${shared.panel} ${styles.example}`}>
            <h3>“Alguma dúvida?”</h3>
            <p>O silêncio pode ter vários motivos. A equipe pode ter entendido — ou alguém pode estar com receio de dizer que não entendeu.</p>
            <p><strong>O silêncio não confirma o entendimento.</strong></p>
          </div>
          <p>A liderança ajuda quando reconhece que não tem todas as respostas, convida contribuições e escuta sem hostilidade, inclusive quando recebe uma notícia difícil. <Cite numbers="3" /></p>
          <h3 className={styles.subheading}>Perguntas para aplicar na rotina</h3>
          {questions.map(([before, after]) => <div className={styles.questionPair} key={before}>
            <article className={`module-two-glass-panel ${shared.panel}`}><span className={shared.smallLabel}>Em vez de uma pergunta genérica</span><p>“{before}”</p></article>
            <article className={`module-two-glass-panel ${shared.panel} ${styles.preferred}`}><span className={shared.smallLabel}>Convide uma contribuição concreta</span><p>“{after}”</p></article>
          </div>)}
          <p>Outros convites: <strong>“O que você pensa?”</strong> e <strong>“Tem alguma coisa que eu não estou vendo?”</strong> Depois, dê tempo para a resposta, agradeça a contribuição e explique o encaminhamento.</p>
          <div className={shared.callout}><p><strong>Escuta e responsabilidade caminham juntas.</strong> A abertura para falar deve conviver com padrões claros, feedback e acompanhamento dos compromissos. <Cite numbers="2" /></p></div>
        </section>

        <section className={shared.section} id="cnv" aria-labelledby="cnv-title">
          <span className={shared.kicker}>3 · Conversar com empatia e clareza</span>
          <h2 id="cnv-title">Comunicação <strong>Não Violenta</strong></h2>
          <p className={styles.author}>Marshall Rosenberg</p>
          <p>A CNV propõe expressão honesta e escuta empática, com atenção aos sentimentos, às necessidades e ao que cada pessoa pode pedir ou oferecer. Na liderança, ajuda a conversar sobre dificuldades sem transformar a conversa em um ataque pessoal. <Cite numbers="4" /></p>
          <div className={shared.callout}><p><strong>Observação → Sentimento → Necessidade → Pedido</strong> <Cite numbers="5" /></p></div>
          <div className={styles.componentGrid}>{components.map(([number, title, body]) => <article className={`module-two-glass-panel ${shared.panel}`} key={number}>
            <span className={shared.smallLabel}>Componente {number}</span><h3>{title}</h3><p>{body}</p>
          </article>)}</div>
          <p>O impacto no trabalho pode complementar a descrição do fato. O sentimento identifica como a pessoa se sente diante dessa situação.</p>
          <div className={`module-two-glass-panel ${shared.panel} ${styles.example}`}>
            <span className={shared.smallLabel}>Evite o rótulo</span>
            <p>“Você é desorganizado e nunca entrega as coisas direito.”</p>
          </div>
          <div className={`module-two-glass-panel ${shared.panel} ${styles.example} ${styles.preferred}`}>
            <span className={shared.smallLabel}>Exemplo de conversa · Adaptação para liderança</span>
            <p>“Nos últimos três relatórios, dois foram entregues depois do prazo. Isso atrasou a consolidação da área. <strong>Fico preocupado, porque preciso de previsibilidade e cooperação nas entregas.</strong> Você consegue entregar o próximo relatório até quarta-feira, às 15h? O que precisamos ajustar para tornar esse combinado viável?”</p>
          </div>
          <p>A primeira frase julga a pessoa. A segunda apresenta <strong>um fato, seu impacto, um sentimento, uma necessidade e um pedido verificável</strong>, com abertura para ouvir as dificuldades.</p>
          <div className={shared.callout}><p><strong>Antes de encerrar:</strong> confirme o que será feito, por quem e até quando. Combine também como a pessoa avisará se surgir um impedimento.</p></div>
        </section>

        <details className={`module-two-glass-panel ${shared.panel} ${shared.sources}`} id="referencias">
          <summary>Referências e bases do conteúdo</summary>
          <ol>{references.map(([number, title, description, url]) => <li key={number}><a href={url} target="_blank" rel="noopener noreferrer">{title} ↗</a><p>{description}</p></li>)}</ol>
          <p>Os exemplos e as perguntas foram adaptados para este treinamento; não são transcrições de falas dos autores.</p>
        </details>

        <footer className={shared.footer}>
          <Link className="module-two-button" href="/modulo-2/frases-de-comunicacao">← Frases de comunicação</Link>
          <span>Parceria do Grupo WD e Ramos Consultoria</span>
          <Link className="module-two-button" href="/modulo-2/video-comunicacao-na-lideranca">Assistir ao vídeo →</Link>
        </footer>
      </div>
    </main>
  );
}
