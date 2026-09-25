import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "../../modulo-1/experience.css";
import shared from "../normalizacao-do-desvio/desvios.module.css";
import styles from "./video.module.css";
import VideoPlayer from "./VideoPlayer";

export const metadata: Metadata = {
  title: "Vídeo complementar | TreinamentoWD1",
  description: "Vídeo complementar da jornada de Comunicação e Liderança.",
};

export default function VideoComunicacaoNaLideranca() {
  return (
    <main className={`module-two-screen ${styles.screen}`} id="inicio">
      <div className="noise" aria-hidden="true" />
      <nav className={`topbar module-topbar module-two-topbar ${shared.topbar}`} aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className={`screen-nav ${shared.topLinks}`}>
          <Link className="back-link" href="/modulo-2/comunicacao-na-lideranca">← Comunicação na liderança</Link>
          <Link className="back-link" href="/modulo-2/leitura-dos-sentimentos">Leitura dos sentimentos →</Link>
          <span className="module-two-step">Módulo 2 · Vídeo complementar</span>
        </div>
      </nav>

      <section className={`${shared.content} ${styles.content}`} aria-labelledby="video-title">
        <header className={`module-two-glass-panel ${styles.hero}`}>
          <span className={shared.kicker}>Comunicação e liderança · Vídeo complementar</span>
          <h1 id="video-title">Veja, reflita e leve para a sua <strong>próxima conversa.</strong></h1>
          <p>Assista ao vídeo e observe quais atitudes ajudam a criar clareza, escuta e acordos no dia a dia.</p>
          <div className={shared.logos} aria-label="Grupo WD e Ramos Consultoria">
            <Image src="/grupo-wd.png" alt="Grupo WD" width={105} height={70} />
            <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={105} height={70} />
          </div>
        </header>

        <div className={`module-two-glass-panel ${styles.videoFrame}`}>
          <VideoPlayer />
        </div>

        <aside className={`module-two-glass-panel ${shared.panel} ${styles.reflection}`} aria-label="Pergunta para reflexão">
          <span className={shared.smallLabel}>Enquanto assiste, reflita</span>
          <p>Em qual conversa da sua rotina você pode ser mais claro, fazer uma pergunta melhor ou confirmar o entendimento antes de encerrar?</p>
        </aside>

        <footer className={shared.footer}>
          <Link className="module-two-button" href="/modulo-2/comunicacao-na-lideranca">← Comunicação na liderança</Link>
          <span>Parceria do Grupo WD e Ramos Consultoria</span>
          <Link className="module-two-button" href="/modulo-2/leitura-dos-sentimentos">Leitura dos sentimentos →</Link>
        </footer>
      </section>
    </main>
  );
}
