"use client";

import { useEffect, useRef, useState } from "react";
import "../../modulo-1/experience.css";

const videos = [
  { title: "Vídeo 1", duration: "50s", parts: ["/videos/modulo-2/reacao-1/part-000","/videos/modulo-2/reacao-1/part-001","/videos/modulo-2/reacao-1/part-002","/videos/modulo-2/reacao-1/part-003","/videos/modulo-2/reacao-1/part-004"] },
  { title: "Vídeo 2", duration: "25s", parts: ["/videos/modulo-2/reacao-2/part-000","/videos/modulo-2/reacao-2/part-001"] },
  { title: "Vídeo 3", duration: "59s", parts: ["/videos/modulo-2/reacao-3/part-000","/videos/modulo-2/reacao-3/part-001","/videos/modulo-2/reacao-3/part-002"] },
  { title: "Vídeo 4", duration: "51s", parts: ["/videos/modulo-2/reacao-4/part-000","/videos/modulo-2/reacao-4/part-001","/videos/modulo-2/reacao-4/part-002","/videos/modulo-2/reacao-4/part-003","/videos/modulo-2/reacao-4/part-004"] },
];

export default function VideoEuOucoEReajo() {
  const [current, setCurrent] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let active = true;
    let objectUrl = "";
    setLoading(true);
    setVideoUrl("");

    Promise.all(videos[current].parts.map((part) =>
      fetch(part).then((response) => {
        if (!response.ok) throw new Error("Não foi possível carregar uma parte do vídeo.");
        return response.arrayBuffer();
      })
    ))
      .then((buffers) => {
        if (!active) return;
        objectUrl = URL.createObjectURL(new Blob(buffers, { type: "video/mp4" }));
        setVideoUrl(objectUrl);
        setLoading(false);
      })
      .catch(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [current]);

  const selectVideo = (index: number) => {
    if (index === current) {
      videoRef.current?.play();
      return;
    }
    setCurrent(index);
  };

  return (
    <main className="module-two-screen module-two-video-screen">
      <div className="module-two-silver-glow module-two-silver-glow-one" aria-hidden="true" />
      <div className="module-two-silver-glow module-two-silver-glow-two" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />

      <nav className="topbar module-topbar module-two-topbar" aria-label="Navegação do módulo">
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/eu-ouco-e-reajo">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 4</span>
        </div>
      </nav>

      <section className="module-two-video-content">
        <header className="module-two-video-heading module-two-glass-panel">
          <div>
            <span>Descontração também é aprender</span>
            <h1>Eu ouço e reajo</h1>
            <p>Assista aos quatro vídeos com atenção. A escuta é o primeiro movimento da reação.</p>
          </div>
          <div className="influence-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="reaction-video-layout">
          <div className="reaction-video-selector" aria-label="Seleção dos vídeos">
            {videos.map((video, index) => (
              <button
                type="button"
                className={index === current ? "is-active" : ""}
                onClick={() => selectVideo(index)}
                aria-pressed={index === current}
                key={video.title}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{video.title}</strong>
                <small>{video.duration}</small>
              </button>
            ))}
          </div>

          <div className="module-two-video-frame reaction-video-frame">
            {videoUrl && (
              <video
                ref={videoRef}
                key={videoUrl}
                controls
                playsInline
                preload="metadata"
                src={videoUrl}
                aria-label={`${videos[current].title} da dinâmica Eu ouço e reajo`}
              >
                Seu navegador não oferece suporte à reprodução de vídeo.
              </video>
            )}

            {loading && (
              <div className="module-two-video-placeholder">
                <div className="video-placeholder-icon is-loading" aria-hidden="true"><span>▶</span></div>
                <strong>Preparando {videos[current].title}</strong>
                <p>O vídeo está sendo carregado. Aguarde um instante.</p>
              </div>
            )}

            {!loading && !videoUrl && (
              <div className="module-two-video-placeholder">
                <div className="video-placeholder-icon" aria-hidden="true"><span>!</span></div>
                <strong>Não foi possível carregar o vídeo</strong>
                <p>Atualize a página e tente novamente.</p>
              </div>
            )}
          </div>
        </div>

        <div className="module-two-next-row">
          <a className="module-two-button" href="/modulo-2/etapas-da-comunicacao">
            <span>Etapas da comunicação</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>

      <style jsx>{`
        .reaction-video-layout{display:grid;grid-template-columns:210px minmax(0,1fr);gap:20px;align-items:stretch}
        .reaction-video-selector{display:grid;gap:12px;align-content:start}
        .reaction-video-selector button{min-height:104px;display:grid;grid-template-columns:48px 1fr;grid-template-rows:1fr 1fr;align-items:center;gap:0 12px;padding:16px;border:1px solid rgba(65,197,255,.32);border-radius:20px;color:#fff;background:linear-gradient(135deg,rgba(7,61,119,.58),rgba(0,22,60,.72));box-shadow:inset 0 1px rgba(255,255,255,.12),0 12px 32px rgba(0,8,31,.28);text-align:left;cursor:pointer;transition:.25s ease}
        .reaction-video-selector button:hover,.reaction-video-selector button.is-active{border-color:#ffd43b;transform:translateX(5px);box-shadow:inset 0 1px rgba(255,255,255,.18),0 0 28px rgba(255,212,59,.18)}
        .reaction-video-selector button>span{grid-row:1/-1;width:46px;height:46px;display:grid;place-items:center;border-radius:50%;color:#07152d;background:#ffd43b;font-weight:950}
        .reaction-video-selector strong{align-self:end;font-size:18px}.reaction-video-selector small{align-self:start;margin-top:4px;color:rgba(255,255,255,.64);font-size:13px}
        .reaction-video-frame{min-height:640px}.reaction-video-frame video{width:100%;height:100%;min-height:640px;max-height:78vh;object-fit:contain;background:#020817}
        .is-loading{animation:reaction-pulse 1.1s ease-in-out infinite}
        @keyframes reaction-pulse{50%{transform:scale(1.1);filter:brightness(1.3)}}
        @media(max-width:850px){.reaction-video-layout{grid-template-columns:1fr}.reaction-video-selector{grid-template-columns:repeat(4,1fr)}.reaction-video-selector button{min-height:84px;grid-template-columns:1fr;grid-template-rows:auto auto}.reaction-video-selector button>span{display:none}.reaction-video-selector button:hover,.reaction-video-selector button.is-active{transform:translateY(-3px)}.reaction-video-selector small{display:none}.reaction-video-frame,.reaction-video-frame video{min-height:500px}}
        @media(max-width:560px){.reaction-video-selector{grid-template-columns:repeat(2,1fr)}.reaction-video-frame,.reaction-video-frame video{min-height:420px}}
        @media(prefers-reduced-motion:reduce){.is-loading{animation:none}}
      `}</style>
    </main>
  );
}
