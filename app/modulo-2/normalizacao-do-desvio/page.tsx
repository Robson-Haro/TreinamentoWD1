import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import styles from "./desvios.module.css";

export const metadata: Metadata = {
  title: "O perigo do está bom assim | TreinamentoWD1",
  description: "Como reconhecer e interromper a normalização do desvio na portaria, na manutenção e na limpeza.",
};

const phrases = ["Sempre fizemos assim.", "Isso nunca deu problema.", "Depois a gente arruma.", "Ninguém vai perceber.", "É só dessa vez.", "Não precisa conferir.", "Está bom o suficiente.", "Para cumprir o prazo, tem que ser assim."];
const cases = [
  { area: "Portaria", excuse: "“Eu já vi essa pessoa por aqui.”", risk: "Dispensar identificação e autorização pode permitir acesso indevido, furto ou exposição de pessoas e informações.", action: "Confira identidade, autorização e destino; registre a visita conforme o procedimento e confirme dúvidas com o responsável. Aparência e familiaridade não substituem autorização.", ref: 4 },
  { area: "Manutenção", excuse: "“Esse defeito está aí há meses.”", risk: "Adiar a avaliação de uma anomalia pode permitir que a deterioração avance e comprometa a operação.", action: "Registre o sinal, encaminhe para avaliação competente e aplique as medidas de proteção definidas para o risco. Reparo e liberação precisam de critérios claros.", ref: 3 },
  { area: "Limpeza", excuse: "“Seca rapidinho. Nem precisa isolar.”", risk: "Piso molhado com circulação de pessoas pode causar escorregões e quedas.", action: "Organize a limpeza para impedir o acesso à área molhada e confirme a condição segura antes da liberação. A placa avisa; sozinha, não impede a passagem.", ref: 5 },
  { area: "Passagem de turno", excuse: "“O próximo turno já sabe.”", risk: "Uma pendência sem registro pode desaparecer da comunicação e continuar sem tratamento.", action: "Informe o que ocorreu, qual proteção foi adotada, quem assumirá a correção e o prazo. Confirme que a equipe seguinte recebeu a informação.", ref: 3 },
];
const sources = [
  ["NASA — Engineering Best Practices, episódio 79 (2022)", "Normalização do desvio e silêncio organizacional.", "https://www.nasa.gov/podcasts/small-steps-giant-leaps/small-steps-giant-leaps-episode-79-engineering-best-practices-part-2/"],
  ["NASA — EVA 23: um quase acidente durante uma caminhada espacial (2023)", "Relato do incidente de 16 de julho de 2013 e dos sinais inicialmente tratados como normais.", "https://www.nasa.gov/general/10-years-ago-eva-23-how-a-high-visibility-close-call-cut-short-a-spacewalk/"],
  ["HSE — Managing human failures", "Erros, desvios deliberados e condições que influenciam o trabalho.", "https://www.hse.gov.uk/humanfactors/topics/humanfail.htm"],
  ["ProtectUK — Access control", "Identificação, autorização, treinamento e cultura de controle de acesso.", "https://www.protectuk.police.uk/advice-and-guidance/risk/access-control"],
  ["HSE — Cleaning: slips and trips", "Proteção de áreas molhadas e limites do uso de sinalização isolada.", "https://www.hse.gov.uk/slips/cleaning.htm"],
  ["HSE — Procedures", "Desenvolvimento, uso e revisão de procedimentos adequados à tarefa.", "https://www.hse.gov.uk/humanfactors/topics/procedures.htm"],
];

export default function NormalizacaoDoDesvio() {
  return (
    <main className="module-two-screen" id="inicio">
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${styles.topLinks}`}>
          <Link className="back-link" href="/modulo-2/video-normalizacao-do-desvio">← Voltar ao vídeo</Link>
          <Link className="back-link" href="/modulo-2">Início do módulo</Link>
          <Link className="back-link" href="/modulo-2/cliente-processos-e-padroes">Próxima tela →</Link>
          <span className="module-two-step">Módulo 2 · Tela 15</span>
        </div>
      </nav>
      <div className={styles.content}>
        <header className={styles.header}>
          <div><span className={styles.kicker}>Excelência Operacional · Atenção aos desvios</span><h1>O perigo do <strong>“está bom assim”.</strong></h1></div>
          <div className={styles.logos} aria-label="Grupo WD e Ramos Consultoria">
            <Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} />
            <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} />
          </div>
        </header>
        <nav className={styles.navigation} aria-label="Temas desta tela">
          <a href="#perigo">01 · O perigo do está bom</a><a href="#normalizacao">02 · Normalização do desvio</a><a href="#interromper">03 · Como interromper</a>
        </nav>

        <section className={styles.section} id="perigo">
          <h2>Um pequeno desvio pode <strong>abrir espaço para um grande problema.</strong></h2>
          <p>Uma informação incompleta. Um procedimento ignorado. Uma conferência que não aconteceu. Um defeito adiado. Um erro que ninguém comunicou.</p>
          <p>Quando essas situações se repetem e nada grave acontece, podemos começar a tratar a exposição ao risco como parte normal do trabalho. <a className={styles.citation} href="#referencias" aria-label="Referência 1">[1]</a></p>
          <div className={styles.callout}><p><strong>A ausência de acidente não comprova ausência de risco.</strong></p></div>
          <div className={styles.grid}>
            <article className={`module-two-glass-panel ${styles.panel}`}><h3>“Está bom” com evidência</h3><p>Os requisitos foram atendidos, os pontos críticos foram conferidos e a entrega pode ser liberada.</p></article>
            <article className={`module-two-glass-panel ${styles.panel}`}><h3>“Está bom” como desculpa</h3><p>Uma falha conhecida continua presente, mas é tolerada por pressa, costume ou falta de acompanhamento.</p></article>
          </div>
          <p><strong>Excelência não exige perfeição ilimitada. Exige não transformar um requisito importante em algo opcional.</strong></p>
        </section>

        <section className={styles.section} id="normalizacao">
          <h2>O que é <strong>normalização do desvio?</strong></h2>
          <p>É o processo pelo qual práticas fora do padrão passam a ser aceitas como normais. O desvio se repete, a consequência não aparece de imediato e a percepção de risco diminui. <a className={styles.citation} href="#referencias" aria-label="Referência 1">[1]</a></p>
          <ol className={styles.steps} aria-label="Como uma exceção pode virar regra">
            <li><strong>Surge uma exceção:</strong> “Só hoje vamos pular esta etapa.”</li>
            <li><strong>Nada grave acontece:</strong> “Viu? Não precisava.”</li>
            <li><strong>O atalho se repete:</strong> outras pessoas começam a fazer igual.</li>
            <li><strong>A exceção vira regra:</strong> o padrão escrito perde espaço para o costume.</li>
            <li><strong>As proteções enfraquecem:</strong> uma mudança de condição pode revelar o risco acumulado.</li>
          </ol>
          <div className={styles.callout}><p>Essa sequência é uma síntese didática. <strong>Nem todo desvio termina em acidente; a repetição sem dano também não demonstra que ele seja seguro.</strong></p></div>
          <header className={styles.section}><h2>Frases que merecem <strong>uma segunda pergunta.</strong></h2></header>
          <ul className={`${styles.grid} ${styles.phrases}`}>{phrases.map(phrase => <li key={phrase} className={`module-two-glass-panel ${styles.panel}`}>“{phrase}”</li>)}</ul>
          <p>Ao ouvir uma delas, pergunte: <strong>“Qual evidência mostra que o requisito está atendido e o risco está controlado?”</strong></p>
        </section>

        <section className={styles.section}>
          <h2>Isso pode acontecer <strong>na nossa operação.</strong></h2>
          <p>Exemplos fictícios para reconhecer sinais e discutir decisões:</p>
          <div className={styles.grid}>{cases.map(item => <article className={`module-two-glass-panel ${styles.panel}`} key={item.area}>
            <span className={styles.smallLabel}>{item.area}</span><h3>{item.excuse}</h3><p>{item.risk}</p><p><strong>Como agir:</strong> {item.action} <a className={styles.citation} href="#referencias" aria-label={`Referência ${item.ref}`}>[{item.ref}]</a></p>
          </article>)}</div>
          <div className={`module-two-glass-panel ${styles.panel} ${styles.section}`}>
            <span className={styles.smallLabel}>Um caso real · NASA · 2013</span>
            <h2>Um sinal conhecido <strong>não é um sinal inofensivo.</strong></h2>
            <p>Durante a caminhada espacial EVA 23, uma falha de sensor foi inicialmente aceita por já ter ocorrido antes. Depois, água se acumulou no capacete de Luca Parmitano, e a atividade precisou ser encerrada.</p>
            <p>A NASA identificou a normalização de sinais anteriores entre os fatores que dificultaram reconhecer a gravidade da situação. <strong>O histórico precisava provocar investigação, não acomodação.</strong> <a className={styles.citation} href="#referencias" aria-label="Referência 2">[2]</a></p>
          </div>
        </section>

        <section className={styles.section} id="interromper">
          <h2>Interrompa o ciclo <strong>antes da consequência.</strong></h2>
          <ol className={styles.steps}>
            <li><strong>Perceba e proteja:</strong> identifique o desvio; diante de condição insegura, interrompa a atividade afetada e adote a proteção prevista.</li>
            <li><strong>Comunique e registre:</strong> descreva o fato e o risco, inclusive quando houve apenas um quase acidente.</li>
            <li><strong>Entenda a causa:</strong> o padrão é claro e viável? Há tempo, recursos, treinamento e supervisão?</li>
            <li><strong>Corrija com responsabilidade:</strong> defina ação, responsável, prazo e critério para liberar a atividade.</li>
            <li><strong>Confira e aprenda:</strong> verifique se a solução funcionou e compartilhe o aprendizado com os demais turnos.</li>
          </ol>
          <p>Um esquecimento involuntário e a decisão de pular uma regra não têm a mesma origem. A resposta precisa considerar o contexto e as causas; atribuir tudo à “falta de atenção” limita a prevenção. <a className={styles.citation} href="#referencias" aria-label="Referência 3">[3]</a></p>
          <div className={styles.callout}><p><strong>A liderança também faz parte da solução:</strong> acolher alertas, acompanhar pendências e garantir condições para cumprir o padrão. Cobrar o procedimento enquanto se recompensa o atalho transmite mensagens incompatíveis.</p></div>
          <p>Se o procedimento precisa mudar, a melhoria deve ser avaliada, aprovada e comunicada. <strong>Um improviso repetido não equivale a uma melhoria validada.</strong> <a className={styles.citation} href="#referencias" aria-label="Referência 6">[6]</a></p>
        </section>

        <section className={styles.section}>
          <h2>O que deixamos de perceber <strong>porque nos acostumamos a ver?</strong></h2>
          <p>Pense em uma situação real da sua rotina: qual desvio está sendo tolerado, o que ele pode afetar e qual primeira ação precisa acontecer?</p>
          <div className={styles.callout}><p><strong>Excelência começa quando paramos de normalizar falhas.<br />E se sustenta quando o cuidado vira rotina.</strong></p></div>
        </section>
        <details className={`module-two-glass-panel ${styles.panel} ${styles.sources}`} id="referencias">
          <summary>Referências e bases do conteúdo</summary>
          <ol>{sources.map(([title,subject,url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{title} ↗</a><p>{subject}</p></li>)}</ol>
          <p>Exemplos de facilities e orientações de aplicação elaborados para este treinamento a partir dessas bases. A ponte do vídeo é uma metáfora em miniatura, não uma explicação de engenharia nem uma reconstituição de acidente real.</p>
        </details>
        <footer className={styles.footer}>
          <Link className="module-two-button" href="/modulo-2/video-normalizacao-do-desvio">← Rever o vídeo</Link><span>Parceria do Grupo WD e Ramos Consultoria</span><Link className="module-two-button" href="/modulo-2/cliente-processos-e-padroes">Cliente, processos e padrões →</Link>
        </footer>
      </div>
    </main>
  );
}
