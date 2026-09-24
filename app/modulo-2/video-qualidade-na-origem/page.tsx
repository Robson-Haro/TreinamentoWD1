import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import shared from "../normalizacao-do-desvio/desvios.module.css";
import styles from "../qualidade-na-origem/qualidade.module.css";
import ToyotaVideos from "./ToyotaVideos";
import story from "./story.json";

export const metadata: Metadata = { title: "Toyota: a qualidade nasce na linha | TreinamentoWD1", description: "Vídeos oficiais da Toyota e roteiro de uma dramatização sobre anormalidades, atuação da liderança e qualidade na origem." };

export default function VideoQualidadeNaOrigem() {
  return (
    <main className="module-two-screen" id="inicio">
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${shared.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${shared.topLinks}`}><Link className="back-link" href="/modulo-2/cafe-5-minutos">← Pausa para o café</Link><Link className="back-link" href="/modulo-2/qualidade-na-origem">Próxima tela →</Link><span className="module-two-step">Módulo 2 · Tela 17</span></div>
      </nav>
      <div className={`${shared.content} ${styles.content}`}>
        <header className={shared.header}>
          <div><span className={shared.kicker}>Excelência Operacional · Aprendendo com o Sistema Toyota</span><h1>A qualidade nasce <strong>durante o processo.</strong></h1></div>
          <div className={shared.logos}><Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} /><Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} /></div>
        </header>
        <p>Observe o fluxo da fábrica, os sinais de anormalidade e a resposta da equipe.</p>
        <span className={styles.mediaNote}>Referências audiovisuais oficiais da Toyota. O filme personalizado com a história do supervisor ainda não foi gerado; seu roteiro completo está abaixo.</span>
        <ToyotaVideos />
        <div className={shared.afterVideo}><Link className="module-two-button" href="/modulo-2/qualidade-na-origem">Avançar para qualidade na origem, gestão visual e 5S →</Link></div>
        <section className={shared.section}>
          <h2>O que observar <strong>durante os vídeos?</strong></h2>
          <div className={shared.grid}>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>A referência</h3><p>Como a equipe identifica o resultado esperado e percebe o que está fora da condição prevista?</p></article>
            <article className={`module-two-glass-panel ${shared.panel}`}><h3>A resposta</h3><p>Como o problema é sinalizado, quem presta apoio e o que impede uma entrega suspeita de avançar?</p></article>
          </div>
        </section>
        <details id="roteiro" className={`module-two-glass-panel ${shared.panel} ${shared.transcript} ${styles.story}`}>
          <summary>Roteiro do filme personalizado · 16 cenas · 2min40s previstos</summary>
          <p><strong>{story.title}</strong></p><p>{story.disclosure}</p>
          <p>A história acompanha toda a sequência principal de fabricação e duas intervenções: um alerta de condição da máquina e uma verificação de aperto reprovada.</p>
          <div className={shared.resourceLinks}><a href="/videos/modulo-2/qualidade-na-origem/roteiro-e-prompts.md" download>Baixar roteiro, narração e prompts completos</a></div>
          <ol className={styles.sceneList}>{story.scenes.map(scene => <li key={scene.number}><span className={shared.smallLabel}>{scene.time} · Cena {scene.number}</span><h3>{scene.title}</h3><p>{scene.action}</p><p><strong>Narração:</strong> {scene.narration}</p></li>)}</ol>
          <p>O monitoramento de condição identifica um sinal presente que merece investigação. Jidoka acrescenta a capacidade de detectar anormalidades e impedir que o trabalho prossiga sem a resposta necessária. A dramatização aproxima esses conceitos sem tratá-los como sinônimos.</p>
        </details>
        <footer className={shared.footer}><Link className="module-two-button" href="/modulo-2/cafe-5-minutos">← Café</Link><span>Parceria do Grupo WD e Ramos Consultoria</span><Link className="module-two-button" href="/modulo-2/qualidade-na-origem">Próxima tela →</Link></footer>
      </div>
    </main>
  );
}
