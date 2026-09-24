import type { Metadata } from "next";
import Link from "next/link";
import "../../modulo-1/experience.css";
import styles from "../normalizacao-do-desvio/desvios.module.css";
import { direcao, historias } from "./historias";

export const metadata: Metadata = { title: "Roteiro revisado — O problema começou antes | TreinamentoWD1" };

export default function RoteiroRevisado() {
  return <main className="module-two-screen" id="inicio"><div className="noise" aria-hidden="true" />
    <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação"><Link className="brand-mark" href="/">WD <span>×</span> RC</Link><div className={`screen-nav ${styles.topLinks}`}><Link className="back-link" href="/modulo-2/video-normalizacao-do-desvio">← Tela do vídeo</Link><Link className="back-link" href="/modulo-2/cliente-processos-e-padroes">Cliente, processos e padrões →</Link></div></nav>
    <div className={styles.content}>
      <header className={styles.header}><div><span className={styles.kicker}>Roteiro revisado · {direcao.duracao}</span><h1>{direcao.titulo}</h1></div></header>
      <p>Quatro histórias completas sobre decisões, omissões e consequências. Este é o roteiro da nova versão; o novo filme ainda não foi gerado.</p>
      <div className={styles.resourceLinks}><a href="/videos/modulo-2/normalizacao-do-desvio/roteiro-e-prompt.md" download>Baixar texto e prompts completos</a></div>
      <nav className={`${styles.navigation} ${styles.section}`} aria-label="Histórias">{historias.map((story,i)=><a key={story.id} href={`#${story.id}`}>{i+1} · {story.titulo}</a>)}</nav>
      <section className={styles.section}><h2>Abertura <strong>· 5 segundos</strong></h2><p>{direcao.abertura}</p><details className={`module-two-glass-panel ${styles.panel} ${styles.sources}`}><summary>Direção geral e prompt principal</summary><p>{direcao.prompt}</p></details></section>
      {historias.map((story,i)=><section className={styles.section} id={story.id} key={story.id}>
        <span className={styles.kicker}>História {i+1} · {story.duracao}</span><h2>{story.titulo}</h2><p><strong>Cenário:</strong> {story.local}</p><p><strong>Personagens:</strong> {story.personagens}</p>
        <div className={styles.callout}><p>{story.ideia}</p></div>
        <div className={styles.grid}>{story.cenas.map(scene=><article className={`module-two-glass-panel ${styles.panel}`} key={scene.tempo}><span className={styles.smallLabel}>{scene.tempo}</span><p>{scene.imagem}</p><p><strong>Som e fala:</strong> {scene.fala}</p></article>)}</div>
        <details className={`module-two-glass-panel ${styles.panel} ${styles.sources}`}><summary>Texto de narração da história</summary><p>{story.narracao}</p></details>
        <details className={`module-two-glass-panel ${styles.panel} ${styles.sources}`}><summary>Prompt completo para produzir esta história</summary><p>{story.prompt}</p></details>
      </section>)}
      <section className={styles.section}><h2>Encerramento <strong>· 10 segundos</strong></h2><p>{direcao.encerramento}</p><div className={styles.callout}><p><strong>Excelência é rotina. O cuidado precisa acontecer antes.</strong></p></div></section>
      <section className={styles.section}><h2>Critérios da montagem</h2><ul className={styles.steps}><li>A ponte precisa ter construção, pendências ignoradas, inauguração, passagem de meses e desabamento.</li><li>Na água derramada, mostrar claramente quem derramou, quem viu, o encontro sem aviso e a queda de outra pessoa.</li><li>Na portaria e no EPI, a consequência precisa ser precedida pelas decisões que a tornaram possível.</li><li>Revisar continuidade, física, sincronização e legibilidade antes de substituir o vídeo anterior.</li></ul><p>As histórias são ficcionais. As bases de prevenção estão nas referências da tela de normalização do desvio. Para EPI, considerar seleção adequada ao risco, condições de uso, substituição, orientação e outras medidas preventivas, conforme a <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-6-nr-6" target="_blank" rel="noopener noreferrer">NR-6 ↗</a>.</p></section>
      <footer className={styles.footer}><Link className="module-two-button" href="/modulo-2/video-normalizacao-do-desvio">← Tela do vídeo</Link><span>Parceria do Grupo WD e Ramos Consultoria</span><a className="module-two-button" href="#inicio">Voltar ao topo ↑</a></footer>
    </div>
  </main>;
}
