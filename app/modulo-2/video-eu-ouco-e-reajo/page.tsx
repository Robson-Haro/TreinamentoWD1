"use client";

import { useEffect, useState } from "react";
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
        <a className="brand-mark" href="/">WD <span>×</span> RC</a>
        <div className="screen-nav">
          <a className="back-link" href="/modulo-2/eu-ouco-e-reajo">← Tela anterior</a>
          <span className="module-two-step">Módulo 2 · Tela 4</span>
        </div>
      </nav>

      <section className="module-two-video-content reaction-all-content">
        <header className="module-two-video-heading module-two-glass-panel">
          <div>
            <span>Descontração também é aprender</span>
            <h1>Eu ouço e reajo</h1>
            <p>Observe os quatro vídeos. Eles começam automaticamente; use os controles para ativar o som.</p>
          </div>
          <div className="influence-logos" aria-label="Grupo WD e Ramos Consultoria">
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
        </header>

        <div className="reaction-video-grid">
          {videos.map((video, index) => (
            <article className="reaction-video-card" key={video.title}>
              <header>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{video.title}</strong><small>{video.duration} · reprodução automática</small></div>
              </header>

              <div className="reaction-video-portrait">
                {videoUrls[index] && (
                  <video
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    src={videoUrls[index] ?? undefined}
                    aria-label={`${video.title} da dinâmica Eu ouço e reajo`}
                  >
                    Seu navegador não oferece suporte à reprodução de vídeo.
                  </video>
                )}

                {!videoUrls[index] && !failed[index] && (
                  <div className="reaction-loading">
                    <span aria-hidden="true">▶</span>
                    <strong>Preparando {video.title}</strong>
                    <p>Aguarde um instante.</p>
                  </div>
                )}

                {failed[index] && (
                  <div className="reaction-loading">
                    <span aria-hidden="true">!</span>
                    <strong>Não foi possível carregar</strong>
                    <p>Atualize a página e tente novamente.</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="reaction-audio-note">Os vídeos iniciam sem som porque essa é uma exigência dos navegadores. Clique no ícone de volume de cada vídeo para ouvir.</p>

        <div className="module-two-next-row reaction-next-row">
          <a className="module-two-button" href="/modulo-2/etapas-da-comunicacao">
            <span>Etapas da comunicação</span>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </a>
        </div>
      </section>

      <style jsx>{`
        .reaction-all-screen{overflow:auto}
        .reaction-all-content{padding-bottom:70px}
        .reaction-video-grid{display:grid;grid-template-columns:repeat(2,minmax(340px,560px));justify-content:center;align-items:start;gap:34px;margin-top:28px}
        .reaction-video-card{overflow:hidden;border:1px solid rgba(65,197,255,.42);border-radius:30px;background:linear-gradient(145deg,rgba(7,61,119,.7),rgba(0,18,51,.88));box-shadow:inset 0 1px rgba(255,255,255,.14),0 30px 75px rgba(0,8,31,.42)}
        .reaction-video-card>header{min-height:88px;display:flex;align-items:center;gap:16px;padding:16px 20px;border-bottom:1px solid rgba(65,197,255,.28)}
        .reaction-video-card>header>span{width:50px;height:50px;flex:0 0 auto;display:grid;place-items:center;border-radius:50%;color:#07152d;background:linear-gradient(135deg,#ffe777,#ffd43b);font-size:18px;font-weight:950;box-shadow:0 0 22px rgba(255,212,59,.25)}
        .reaction-video-card header div{display:grid;gap:4px}.reaction-video-card header strong{color:#fff;font-size:22px}.reaction-video-card header small{color:rgba(255,255,255,.62);font-size:13px}
        .reaction-video-portrait{position:relative;width:100%;aspect-ratio:9/16;display:grid;place-items:center;overflow:hidden;background:#020817}
        .reaction-video-portrait video{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#020817}
        .reaction-loading{display:grid;justify-items:center;gap:8px;color:#fff;text-align:center}.reaction-loading>span{width:76px;height:76px;display:grid;place-items:center;border:1px solid rgba(255,212,59,.55);border-radius:50%;color:#07152d;background:#ffd43b;font-size:28px;font-weight:950;animation:reaction-pulse 1.1s ease-in-out infinite}.reaction-loading strong{font-size:20px}.reaction-loading p{margin:0;color:rgba(255,255,255,.65)}
        .reaction-audio-note{max-width:1160px;margin:28px auto 0;padding:16px 20px;border:1px solid rgba(255,212,59,.34);border-radius:16px;color:#fff;background:rgba(0,20,52,.7);font-size:18px;text-align:center}
        .reaction-next-row{max-width:1160px;margin:24px auto 0}
        @keyframes reaction-pulse{50%{transform:scale(1.1);filter:brightness(1.2)}}
        @media(max-width:840px){.reaction-video-grid{grid-template-columns:minmax(280px,560px)}}
        @media(max-width:560px){.reaction-video-grid{grid-template-columns:1fr;gap:22px}.reaction-video-card{border-radius:22px}.reaction-video-card>header{min-height:76px}.reaction-audio-note{font-size:16px}}
        @media(prefers-reduced-motion:reduce){.reaction-loading>span{animation:none}}
      `}</style>
    </main>
  );
}
