"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "../../modulo-1/experience.css";

const videos = [
  { title: "Vídeo 1", duration: "50s", parts: ["/videos/modulo-2/reacao-1/part-000","/videos/modulo-2/reacao-1/part-001","/videos/modulo-2/reacao-1/part-002","/videos/modulo-2/reacao-1/part-003","/videos/modulo-2/reacao-1/part-004"] },
  { title: "Vídeo 2", duration: "25s", parts: ["/videos/modulo-2/reacao-2/part-000","/videos/modulo-2/reacao-2/part-001"] },
  { title: "Vídeo 3", duration: "59s", parts: ["/videos/modulo-2/reacao-3/part-000","/videos/modulo-2/reacao-3/part-001","/videos/modulo-2/reacao-3/part-002"] },
  { title: "Vídeo 4", duration: "51s", parts: ["/videos/modulo-2/reacao-4/part-000","/videos/modulo-2/reacao-4/part-001","/videos/modulo-2/reacao-4/part-002","/videos/modulo-2/reacao-4/part-003","/videos/modulo-2/reacao-4/part-004"] },
];

export default function VideoEuOucoEReajo() {
  const [videoUrls, setVideoUrls] = useState<(string | null)[]>(videos.map(() => null));
  const [failed, setFailed] = useState<boolean[]>(videos.map(() => false));
  const [current, setCurrent] = useState(0);
  const [needsPlaybackGesture, setNeedsPlaybackGesture] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentUrl = videoUrls[current];

  useEffect(() => {
    const player = videoRef.current;
    if (!currentUrl || !player) return;
    let active = true;
    player.muted = false;
    player.volume = 1;
    player.play().catch((error: unknown) => {
      if (active && error instanceof DOMException && error.name === "NotAllowedError") {
        setNeedsPlaybackGesture(true);
      }
    });
    return () => { active = false; };
  }, [currentUrl]);

  const startWithSound = () => {
    const player = videoRef.current;
    if (!player) return;
    player.muted = false;
    player.volume = 1;
    player.play().catch(() => setNeedsPlaybackGesture(true));
  };

  useEffect(() => {
    let active = true;
    const objectUrls: string[] = [];

    videos.forEach((video, index) => {
      Promise.all(video.parts.map((part) =>
        fetch(part).then((response) => {
          if (!response.ok) throw new Error("Não foi possível carregar uma parte do vídeo.");
          return response.arrayBuffer();
        })
      ))
        .then((buffers) => {
          if (!active) return;
          const url = URL.createObjectURL(new Blob(buffers, { type: "video/mp4" }));
          objectUrls.push(url);
          setVideoUrls((current) => current.map((item, itemIndex) => itemIndex === index ? url : item));
        })
        .catch(() => {
          if (active) setFailed((current) => current.map((item, itemIndex) => itemIndex === index ? true : item));
        });
    });

    return () => {
      active = false;
      objectUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, []);

  return (
    <main className="module-two-screen module-two-video-screen reaction-all-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <Link className="brand-mark" href="/">WD <span>×</span> RC</Link>
        <div className="screen-nav">
          <Link className="back-link" href="/modulo-2/eu-ouco-e-reajo">← Tela anterior</Link>
          <span className="module-two-step">Módulo 2 · Tela 5</span>
        </div>
      </nav>

      <section className="module-two-video-content reaction-all-content">
        <header className="module-two-video-heading module-two-glass-panel">
          <div>
            <span>Descontração também é aprender</span>
            <h1>Eu ouço e reajo</h1>
            <p>Assista aos quatro vídeos em sequência, com o som ligado.</p>
          </div>
          <div className="influence-logos" aria-label="Grupo WD e Ramos Consultoria">
            <Image src="/grupo-wd.png" alt="Grupo WD" width={180} height={100} />
            <Image src="/ramos-consultoria.png" alt="Ramos Consultoria" width={180} height={100} />
          </div>
        </header>

        <div className="reaction-sequence">
          <div className="reaction-sequence-progress" aria-label="Sequência dos vídeos">
            {videos.map((video, index) => (
              <button
                type="button"
                className={index === current ? "is-active" : index < current ? "is-complete" : ""}
                onClick={() => setCurrent(index)}
                aria-label={`Reproduzir ${video.title}`}
                aria-current={index === current ? "step" : undefined}
                key={video.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{video.title}</strong>
                <small>{video.duration}</small>
              </button>
            ))}
          </div>

          <article className="reaction-featured-card">
            <header>
              <span>Reproduzindo agora</span>
              <strong>{videos[current].title}</strong>
              <small>{current + 1} de {videos.length} · o próximo começa automaticamente</small>
            </header>

            {currentUrl && needsPlaybackGesture && (
              <div className="reaction-start">
                <button type="button" className="module-two-button" onClick={startWithSound}>
                  Iniciar vídeo com som
                </button>
              </div>
            )}

            <div className="reaction-featured-video">
              {currentUrl && (
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  muted={false}
                  playsInline
                  preload="auto"
                  src={currentUrl}
                  style={{ width: "100%", height: "100%", objectFit: "contain", aspectRatio: "9 / 16" }}
                  onEnded={() => setCurrent((index) => (index + 1) % videos.length)}
                  onPlay={() => setNeedsPlaybackGesture(false)}
                  aria-label={`${videos[current].title} da dinâmica Eu ouço e reajo`}
                >
                  Seu navegador não oferece suporte à reprodução de vídeo.
                </video>
              )}

              {!videoUrls[current] && !failed[current] && (
                <div className="reaction-loading">
                  <span aria-hidden="true">▶</span>
                  <strong>Preparando {videos[current].title}</strong>
                  <p>Aguarde um instante.</p>
                </div>
              )}

              {failed[current] && (
                <div className="reaction-loading">
                  <span aria-hidden="true">!</span>
                  <strong>Não foi possível carregar</strong>
                  <p>Atualize a página e tente novamente.</p>
                </div>
              )}
            </div>
          </article>
        </div>

        <div className="module-two-next-row reaction-next-row">
          <Link className="module-two-button" href="/modulo-2/etapas-da-comunicacao">
            <span>Etapas da comunicação</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
        </div>
      </section>

      <style jsx>{`
        .reaction-all-screen{overflow:auto}
        .reaction-all-content{padding-bottom:70px}
        .reaction-sequence{width:min(1180px,100%);margin:28px auto 0}
        .reaction-sequence-progress{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:18px}
        .reaction-sequence-progress button{min-height:78px;display:grid;grid-template-columns:48px 1fr;grid-template-rows:1fr 1fr;align-items:center;gap:0 12px;padding:12px 15px;border:1px solid rgba(65,197,255,.3);border-radius:17px;color:#fff;background:linear-gradient(135deg,rgba(7,61,119,.62),rgba(0,22,60,.78));text-align:left;cursor:pointer;transition:.22s ease}
        .reaction-sequence-progress button:hover,.reaction-sequence-progress button.is-active{border-color:#ffd43b;transform:translateY(-3px);box-shadow:0 0 28px rgba(255,212,59,.18)}
        .reaction-sequence-progress button>span{grid-row:1/-1;width:46px;height:46px;display:grid;place-items:center;border-radius:50%;color:#07152d;background:#ffd43b;font-weight:950}
        .reaction-sequence-progress button.is-complete>span{color:#fff;background:#1686c9}
        .reaction-sequence-progress strong{align-self:end;font-size:16px}.reaction-sequence-progress small{align-self:start;color:rgba(255,255,255,.62);font-size:12px}
        .reaction-featured-card{width:min(100%,620px);margin:0 auto;overflow:hidden;border:1px solid rgba(65,197,255,.44);border-radius:32px;background:linear-gradient(145deg,rgba(7,61,119,.72),rgba(0,18,51,.9));box-shadow:inset 0 1px rgba(255,255,255,.14),0 32px 84px rgba(0,8,31,.46)}
        .reaction-featured-card>header{min-height:92px;display:flex;align-items:center;gap:18px;padding:18px 26px;border-bottom:1px solid rgba(65,197,255,.28)}
        .reaction-featured-card>header>span{padding:9px 13px;border-radius:999px;color:#07152d;background:#ffd43b;font-size:12px;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
        .reaction-featured-card>header strong{color:#fff;font-size:25px}.reaction-featured-card>header small{margin-left:auto;color:rgba(255,255,255,.68);font-size:14px}
        .reaction-featured-video{position:relative;width:100%;aspect-ratio:9/16;display:grid;place-items:center;overflow:hidden;background:#020817}
        .reaction-featured-video video{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:0!important;max-height:none!important;aspect-ratio:9/16!important;object-fit:contain!important;object-position:center!important;border-radius:0!important;background:#020817}
        .reaction-loading{display:grid;justify-items:center;gap:8px;color:#fff;text-align:center}.reaction-loading>span{width:80px;height:80px;display:grid;place-items:center;border:1px solid rgba(255,212,59,.55);border-radius:50%;color:#07152d;background:#ffd43b;font-size:30px;font-weight:950;animation:reaction-pulse 1.1s ease-in-out infinite}.reaction-loading strong{font-size:22px}.reaction-loading p{margin:0;color:rgba(255,255,255,.65)}
        .reaction-start{display:flex;justify-content:center;padding:20px}.reaction-start button{margin:0;min-width:0;width:100%;font-size:24px}
        .reaction-next-row{max-width:1180px;margin:24px auto 0}
        @keyframes reaction-pulse{50%{transform:scale(1.1);filter:brightness(1.2)}}
        @media(max-width:760px){.reaction-sequence-progress{grid-template-columns:repeat(2,1fr)}.reaction-featured-card{width:min(100%,520px)}.reaction-featured-card>header{align-items:flex-start;flex-wrap:wrap}.reaction-featured-card>header small{width:100%;margin-left:0}}
        @media(max-width:560px){.reaction-sequence-progress button{grid-template-columns:40px 1fr;padding:10px}.reaction-sequence-progress button>span{width:38px;height:38px}.reaction-featured-card{width:min(100%,430px);border-radius:22px}}
        @media(prefers-reduced-motion:reduce){.reaction-loading>span{animation:none}}
      `}</style>
    </main>
  );
}
