"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import styles from "./universidade.module.css";

type Participant = { name: string; email: string };
type ProgressMap = Record<string, { status: string; score?: number }>;

const tracks = [
  {
    key: "lideranca",
    title: "Jornada de Liderança",
    label: "Disponível",
    description: "Autoconhecimento, comunicação e excelência para quem lidera pessoas e operações.",
    href: "/universidade/jornada-lideranca",
    active: true,
    icon: "01",
  },
  {
    key: "integracao",
    title: "Integração Grupo WD",
    label: "Em preparação",
    description: "Cultura, propósito, padrões e forma de trabalhar no Grupo WD.",
    href: "#",
    active: false,
    icon: "02",
  },
  {
    key: "portaria",
    title: "Portaria & Atendimento",
    label: "Em preparação",
    description: "Acesso, postura profissional, comunicação e experiência do cliente.",
    href: "#",
    active: false,
    icon: "03",
  },
  {
    key: "facilities",
    title: "Facilities & Qualidade",
    label: "Em preparação",
    description: "Rotina, padrão, produtividade, segurança e qualidade na execução.",
    href: "#",
    active: false,
    icon: "04",
  },
  {
    key: "seguranca",
    title: "Segurança & Ronda",
    label: "Em preparação",
    description: "Prevenção, atenção, disciplina operacional e registro de ocorrências.",
    href: "#",
    active: false,
    icon: "05",
  },
  {
    key: "desenvolvimento",
    title: "Desenvolvimento Contínuo",
    label: "Em preparação",
    description: "Trilhas para evolução profissional e construção de novas competências.",
    href: "#",
    active: false,
    icon: "06",
  },
];

export default function UniversityClient() {
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [showIdentity, setShowIdentity] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wd_uc_participant");
      const savedProgress = localStorage.getItem("wd_uc_progress");
      if (saved) setParticipant(JSON.parse(saved));
      if (savedProgress) setProgress(JSON.parse(savedProgress));
    } catch {
      // Mantém a experiência disponível mesmo se o armazenamento local estiver indisponível.
    }
  }, []);

  const completed = useMemo(
    () => Object.values(progress).filter((item) => item.status === "passed" || item.status === "completed").length,
    [progress],
  );

  const filteredTracks = tracks.filter((track) =>
    [track.title, track.description].join(" ").toLowerCase().includes(search.toLowerCase()),
  );

  function saveIdentity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim().toLowerCase(),
    };
    if (!next.name || !next.email.includes("@")) return;
    localStorage.setItem("wd_uc_participant", JSON.stringify(next));
    setParticipant(next);
    setShowIdentity(false);
  }

  return (
    <main className={styles.page}>
      <div className={styles.bgHexOne} aria-hidden="true" />
      <div className={styles.bgHexTwo} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/universidade" className={styles.brand}>
          <img src="/grupo-wd.png" alt="Grupo WD" />
          <span>
            <strong>Universidade Corporativa</strong>
            <small>Grupo WD</small>
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Navegação da Universidade Corporativa">
          <Link className={styles.activeNav} href="/universidade">Início</Link>
          <a href="#trilhas">Trilhas</a>
          <Link href="/universidade/jornada-lideranca">Meus cursos</Link>
          <Link href="/universidade/certificados">Certificados</Link>
        </nav>

        <button className={styles.profileButton} type="button" onClick={() => setShowIdentity(true)}>
          <span className={styles.avatar}>{participant?.name?.slice(0, 1).toUpperCase() || "WD"}</span>
          <span>{participant?.name || "Identificar-se"}</span>
        </button>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.kicker}>Jornada do Conhecimento</span>
          <h1>Conhecimento que melhora a rotina. Desenvolvimento que transforma pessoas.</h1>
          <p>
            Um espaço único para aprender, praticar, acompanhar sua evolução e construir novos padrões
            de excelência em todas as áreas do Grupo WD.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} href="/universidade/jornada-lideranca">
              Continuar aprendendo
              <span>→</span>
            </Link>
            <a className={styles.secondaryButton} href="#trilhas">Explorar trilhas</a>
          </div>
          <div className={styles.quickStats}>
            <div><strong>2</strong><span>módulos disponíveis</span></div>
            <div><strong>{completed}</strong><span>etapas concluídas</span></div>
            <div><strong>1</strong><span>trilha ativa</span></div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.photoCard}>
            <img src="/images/grupo-de-trabalho.webp" alt="Equipe em atividade de desenvolvimento" />
            <div className={styles.photoOverlay}>
              <span>Aprender • Aplicar • Evoluir</span>
              <strong>Todos fazem parte da Jornada do Conhecimento.</strong>
            </div>
          </div>
          <div className={[styles.floatingHex, styles.hexA].join(" ")}>Pessoas</div>
          <div className={[styles.floatingHex, styles.hexB].join(" ")}>Cliente</div>
          <div className={[styles.floatingHex, styles.hexC].join(" ")}>Excelência</div>
        </div>
      </section>

      <section className={styles.dashboardStrip}>
        <div>
          <span>Olá{participant ? ", " + participant.name.split(" ")[0] : ""}</span>
          <strong>Onde você quer evoluir hoje?</strong>
        </div>
        <label className={styles.searchBox}>
          <span>⌕</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar trilhas e cursos"
            aria-label="Buscar trilhas e cursos"
          />
        </label>
      </section>

      <section id="trilhas" className={styles.tracksSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.kicker}>Mapa de aprendizagem</span>
            <h2>Trilhas em formato de colmeia</h2>
          </div>
          <p>Cada célula representa uma jornada de desenvolvimento. Comece pela Liderança e avance conforme novos conteúdos forem liberados.</p>
        </div>

        <div className={styles.honeycomb}>
          {filteredTracks.map((track, index) => {
            const cardClass = [
              styles.hexCard,
              track.active ? styles.hexActive : styles.hexMuted,
              index % 2 ? styles.hexOffset : "",
            ].filter(Boolean).join(" ");
            const content = (
              <>
                <span className={styles.hexNumber}>{track.icon}</span>
                <span className={styles.hexStatus}>{track.label}</span>
                <h3>{track.title}</h3>
                <p>{track.description}</p>
                <span className={styles.hexLink}>{track.active ? "Acessar jornada →" : "Em breve"}</span>
              </>
            );
            return track.active ? (
              <Link key={track.key} href={track.href} className={cardClass}>{content}</Link>
            ) : (
              <div key={track.key} className={cardClass}>{content}</div>
            );
          })}
        </div>
      </section>

      <section className={styles.continueSection}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.kicker}>Continue aprendendo</span>
            <h2>Jornada de Liderança</h2>
          </div>
          <Link href="/universidade/jornada-lideranca">Ver jornada completa →</Link>
        </div>

        <div className={styles.courseRow}>
          <article className={styles.courseCard}>
            <span className={styles.courseBadge}>Módulo 1</span>
            <h3>Se conhecendo para liderar</h3>
            <p>Autoconhecimento, DISC, decisões e responsabilidade.</p>
            <div className={styles.progressLine}><span style={{ width: progress["modulo-1"] ? "100%" : "12%" }} /></div>
            <Link href="/modulo-1/video">Acessar conteúdo</Link>
          </article>
          <article className={styles.courseCard}>
            <span className={styles.courseBadge}>Módulo 2</span>
            <h3>Comunicação e Excelência</h3>
            <p>Comunicação, segurança psicológica e excelência operacional.</p>
            <div className={styles.progressLine}><span style={{ width: progress["modulo-2"] ? "100%" : "6%" }} /></div>
            <Link href="/modulo-2">Acessar conteúdo</Link>
          </article>
          <article className={[styles.courseCard, styles.certificateCard].join(" ")}>
            <span className={styles.courseBadge}>Certificação</span>
            <h3>Jornada de Liderança</h3>
            <p>Conclua os dois módulos e as avaliações para liberar seu certificado.</p>
            <Link href="/universidade/certificados">Ver certificados</Link>
          </article>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <img src="/grupo-wd.png" alt="" />
          <span>Universidade Corporativa Grupo WD</span>
        </div>
        <p>Jornada do Conhecimento · Aprender para fazer melhor.</p>
      </footer>

      {showIdentity ? (
        <div className={styles.modalBackdrop} role="presentation" onMouseDown={() => setShowIdentity(false)}>
          <form className={styles.identityModal} onSubmit={saveIdentity} onMouseDown={(event) => event.stopPropagation()}>
            <button className={styles.closeButton} type="button" onClick={() => setShowIdentity(false)}>×</button>
            <span className={styles.kicker}>Seu progresso</span>
            <h2>Identifique-se para acompanhar sua jornada</h2>
            <p>Use seu nome e e-mail profissional. Essas informações serão utilizadas nos registros de conclusão e certificados.</p>
            <label>Nome completo<input name="name" required defaultValue={participant?.name || ""} /></label>
            <label>E-mail<input name="email" type="email" required defaultValue={participant?.email || ""} /></label>
            <button className={styles.primaryButton} type="submit">Salvar identificação</button>
          </form>
        </div>
      ) : null}
    </main>
  );
}
