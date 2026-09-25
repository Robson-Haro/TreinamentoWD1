import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import "../../modulo-1/experience.css";
import styles from "./excelencia.module.css";

export const metadata: Metadata = {
  title: "Excelência Operacional | TreinamentoWD1",
  description: "A excelência mora nos detalhes. Excelência é rotina, consistência e melhoria contínua.",
};

const pillars = [
  { title: "Qualidade e segurança", text: "Fazer bem-feito, atender aos padrões e proteger as pessoas em cada entrega." },
  { title: "Produtividade e eficiência", text: "Entregar valor com bom uso do tempo, dos materiais e dos recursos disponíveis." },
  { title: "Agilidade e previsibilidade", text: "Responder no tempo certo, cumprir o combinado e antecipar desvios." },
  { title: "Redução de desperdícios", text: "Eliminar etapas desnecessárias e reduzir erros, perdas e retrabalho." },
  { title: "Satisfação do cliente", text: "Entender a necessidade, alinhar expectativas e entregar o que foi acordado." },
  { title: "Pessoas e melhoria contínua", text: "Desenvolver a equipe, aprender com os problemas e aperfeiçoar o processo." },
];

const routine = [
  { title: "Preparar", text: "Alinhar o padrão, os recursos e os riscos antes de começar." },
  { title: "Executar", text: "Seguir o combinado com atenção aos detalhes que afetam a entrega." },
  { title: "Conferir", text: "Verificar qualidade, segurança e prazo durante e ao concluir o trabalho." },
  { title: "Melhorar", text: "Corrigir desvios, entender suas causas e incorporar o aprendizado à rotina." },
];

const questions = [
  "Como entregamos?",
  "Com que qualidade e segurança?",
  "Com quanto desperdício?",
  "Com quantos erros?",
  "Com quanto retrabalho?",
  "Conseguiríamos repetir esse resultado amanhã?",
];

export default function ExcelenciaOperacional() {
  return (
    <main className={`module-two-screen ${styles.screen}`} id="inicio-excelencia">
      <div className="noise" aria-hidden="true" />

      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${styles.navigation}`}>
          <a className="back-link" href="/modulo-2/operacao-em-alerta">← Tela anterior</a>
          <a className="back-link" href="/modulo-2">Início do módulo</a>
          <Link className="back-link" href="/modulo-2/comportamentos-e-resultados">Próxima tela →</Link>
          <span className="module-two-step">Módulo 2 · Tela 13</span>
        </div>
      </nav>

      <div className={styles.content}>
        <header className={styles.heading}>
          <div>
            <p className={styles.kicker}>Excelência Operacional</p>
            <h1>A excelência mora <strong>nos detalhes.</strong></h1>
          </div>
          <div className={styles.logos} aria-label="Grupo WD e Ramos Consultoria">
            <Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} />
            <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} />
          </div>
        </header>

        <section className={styles.introGrid} aria-label="O significado da excelência">
          <div className={`module-two-glass-panel ${styles.panel} ${styles.manifesto}`}>
            <p>Excelência não é fazer algo extraordinário uma vez.</p>
            <p className={styles.statement}>É fazer o essencial <strong>extraordinariamente bem, todos os dias.</strong></p>
            <p>Excelência Operacional é entregar valor de forma consistente, segura, eficiente e sustentável.</p>
            <p className={styles.people}>Não depende de heróis.<br /><strong>Depende de pessoas preparadas, processos claros e comportamentos consistentes.</strong></p>
          </div>
          <aside className={`module-two-glass-panel ${styles.panel} ${styles.routineHighlight}`}>
            <span className={styles.kicker}>O compromisso de cada dia</span>
            <h2>Excelência <strong>é rotina.</strong></h2>
            <p>Fazer bem. Conferir. Corrigir. Melhorar.</p>
            <p>O cuidado que se repete transforma uma boa entrega em um padrão de confiança.</p>
            <a className="module-two-button" href="#na-pratica">O que isso significa na prática? ↓</a>
          </aside>
        </section>

        <section id="na-pratica" className={styles.section} aria-labelledby="pratica-title">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>01</span>
            <div>
              <h2 id="pratica-title">O que é <strong>Excelência Operacional?</strong></h2>
              <p>Buscar continuamente resultados melhores em seis frentes que se complementam.</p>
            </div>
          </div>
          <div className={styles.pillars}>
            {pillars.map((pillar, index) => (
              <article className={`module-two-glass-panel ${styles.pillar}`} key={pillar.title}>
                <span className={styles.cardNumber} aria-hidden="true">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.nextRow}><a className="module-two-button" href="#rotina">Como transformar em rotina ↓</a></div>
        </section>

        <section id="rotina" className={styles.section} aria-labelledby="rotina-title">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionNumber}>02</span>
            <div>
              <h2 id="rotina-title">A excelência se constrói <strong>na rotina.</strong></h2>
              <p>Repetir o que funciona e melhorar o que precisa evoluir.</p>
            </div>
          </div>
          <ol className={styles.routine}>
            {routine.map((step, index) => (
              <li className={`module-two-glass-panel ${styles.routineStep}`} key={step.title}>
                <span className={styles.cardNumber} aria-hidden="true">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <p className={styles.detailNote}><strong>Atenção aos detalhes tem propósito:</strong> perceber o que pode comprometer a segurança, a qualidade ou a experiência do cliente — e agir a tempo.</p>
          <div className={styles.nextRow}><a className="module-two-button" href="#reflexao">Avaliar a nossa entrega ↓</a></div>
        </section>

        <section id="reflexao" className={`module-two-glass-panel ${styles.panel} ${styles.reflection}`} aria-labelledby="reflexao-title">
          <span className={styles.kicker}>Não basta entregar</span>
          <h2 id="reflexao-title">Um bom resultado precisa <strong>ser sustentável.</strong></h2>
          <p>Precisamos conseguir responder:</p>
          <ol className={styles.questions}>
            {questions.map((question, index) => (
              <li key={question}><span aria-hidden="true">0{index + 1}</span><strong>{question}</strong></li>
            ))}
          </ol>
          <p className={styles.closing}>Excelência é transformar um bom resultado em uma entrega confiável, <strong>hoje e amanhã.</strong></p>
        </section>

        <footer className={styles.footer}>
          <a className="back-link" href="/modulo-2/operacao-em-alerta">← Operação em alerta</a>
          <p>Parceria do Grupo WD e Ramos Consultoria</p>
          <Link className="module-two-button" href="/modulo-2/comportamentos-e-resultados">Comportamentos e resultados →</Link>
        </footer>
      </div>
    </main>
  );
}
