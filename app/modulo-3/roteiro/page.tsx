import type { Metadata } from "next";
import Link from "next/link";
import Frame from "../Frame";
import { lessons } from "../content";
import styles from "../module.module.css";
export const metadata:Metadata={title:"Líder Desenvolve Líder | Módulo 3 · TreinamentoWD1"};
export default function ModuleThree(){return <Frame title="Líder Desenvolve Líder" section="Módulo 3 · Da própria entrega ao crescimento da equipe" intro="Um líder deixa mais do que tarefas concluídas. Deixa pessoas mais preparadas para pensar, decidir, ensinar e assumir responsabilidades." number="Módulo 3 · Roteiro" previous={{href:"/modulo-3",label:"Capa do Módulo 3"}} next={{href:"/modulo-3/"+lessons[0].slug,label:"Começar a jornada"}}>
 <section className={styles.panel}><span className={styles.kicker}>Nossa pergunta central</span><h2>Quem está mais preparado porque você lidera?</h2><p>Nesta etapa, vamos conectar desenvolvimento humano, aprendizagem, delegação, prevenção de conflitos, prioridades e visão de negócio.</p><p><strong>Ao final:</strong> você terá um plano para desenvolver uma pessoa e critérios para acompanhar o sucesso da sua operação.</p></section>
 <section className={styles.panel}><h2>Seu caminho pelo módulo</h2><div className={`${styles.index} ${styles.grid}`}>{lessons.map((lesson,index)=><Link key={lesson.slug} href={"/modulo-3/"+lesson.slug}><span>{String(index+1).padStart(2,"0")} · {lesson.section}</span><strong>{lesson.title}</strong></Link>)}</div></section>
 <section className={styles.panel}><h2>Teoria com aplicação responsável</h2><p>As referências aparecem em cada tema e na bibliografia. Exemplos, indicadores por função e atividades são adaptações didáticas para facilities. As metas precisam ser pactuadas conforme o contrato e as condições reais.</p><Link className={styles.button} href="/modulo-3/referencias">Autores e referências →</Link></section>
 </Frame>}
