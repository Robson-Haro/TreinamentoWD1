import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import styles from "../normalizacao-do-desvio/desvios.module.css";

export const metadata: Metadata = { title: "Antes que o desvio vire rotina | TreinamentoWD1", description: "Vídeo de abertura sobre os riscos de normalizar falhas na operação." };

export default function VideoNormalizacaoDoDesvio() {
  return (
    <main className="module-two-screen">
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${styles.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${styles.topLinks}`}><Link className="back-link" href="/modulo-2/comportamentos-e-resultados">← Tela anterior</Link><Link className="back-link" href="/modulo-2/normalizacao-do-desvio">Próxima tela →</Link><span className="module-two-step">Módulo 2 · Tela 13</span></div>
      </nav>
      <div className={styles.content}>
        <header className={styles.header}>
          <div><span className={styles.kicker}>Excelência Operacional · Observe antes de discutir</span><h1>Antes que o desvio <strong>vire rotina.</strong></h1></div>
          <div className={styles.logos} aria-label="Grupo WD e Ramos Consultoria"><Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} /><Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} /></div>
        </header>
        <p className={styles.watchLead}>Em que momento alguém poderia ter interrompido essa sequência?</p>
        <div className={styles.cinema}>
          <video controls playsInline preload="metadata" poster="/videos/modulo-2/normalizacao-do-desvio/capa.webp" aria-label="Vídeo narrado: Antes que o desvio vire rotina" aria-describedby="video-description">
            <source src="/videos/modulo-2/normalizacao-do-desvio/filme.mp4" type="video/mp4" />
            <track kind="captions" src="/videos/modulo-2/normalizacao-do-desvio/legendas.vtt" srcLang="pt-BR" label="Português" default />
            Seu navegador não conseguiu reproduzir o vídeo. Use o link para abrir o arquivo abaixo.
          </video>
          <span id="video-description" className={styles.videoCaption}>Dramatização educativa com imagens geradas por IA. Ponte em miniatura, portaria e limpeza. Narração em português e legendas disponíveis.</span>
        </div>
        <div className={styles.afterVideo}><Link className="module-two-button" href="/modulo-2/normalizacao-do-desvio">O perigo do “está bom assim” →</Link></div>
        <details className={`module-two-glass-panel ${styles.panel} ${styles.transcript}`}>
          <summary>Ler a narração e acessar o roteiro</summary>
          <p>“Está bom assim.” É assim que um desvio pode virar rotina.</p>
          <p>Na ponte em miniatura, sinais de falha são ignorados. Passar várias vezes não prova que a estrutura é segura.</p>
          <p>Na portaria, a conferência é dispensada. A entrada sem identificação pode abrir espaço para um furto.</p>
          <p>Na limpeza, o piso continua molhado. Sem proteção, alguém pode escorregar.</p>
          <p>A ausência de acidente não comprova ausência de risco.</p>
          <p>Percebeu um desvio? Proteja as pessoas, comunique, corrija e confira. A liderança precisa garantir condições para trabalhar certo.</p>
          <p>Excelência é rotina. Não normalize o erro.</p>
          <div className={styles.resourceLinks}><a href="/videos/modulo-2/normalizacao-do-desvio/roteiro-e-prompt.md" download>Baixar roteiro e prompt</a><a href="/videos/modulo-2/normalizacao-do-desvio/filme.mp4">Abrir o vídeo</a></div>
        </details>
        <footer className={styles.footer}><Link className="module-two-button" href="/modulo-2/comportamentos-e-resultados">← Comportamentos e resultados</Link><span>Parceria do Grupo WD e Ramos Consultoria</span><Link className="module-two-button" href="/modulo-2/normalizacao-do-desvio">Próxima tela →</Link></footer>
      </div>
    </main>
  );
}
