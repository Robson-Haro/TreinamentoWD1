"use client";

import { useEffect, useState } from "react";

const TOTAL_PARTS = 65;
const PARTS_URL = "https://raw.githubusercontent.com/Robson-Haro/TreinamentoWD1/cabe341/public/video-parts";

export default function VideoPlayer() {
  const [videoUrl, setVideoUrl] = useState<string>();
  const [progress, setProgress] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let objectUrl: string | undefined;
    let cancelled = false;

    async function prepareVideo() {
      try {
        const parts: ArrayBuffer[] = [];
        for (let index = 0; index < TOTAL_PARTS; index += 1) {
          const name = String(index).padStart(3, "0");
          const response = await fetch(`${PARTS_URL}/part-${name}`, { cache: "force-cache" });
          if (!response.ok) throw new Error(`Parte ${name} indisponível`);
          parts.push(await response.arrayBuffer());
          if (!cancelled) setProgress(Math.round(((index + 1) / TOTAL_PARTS) * 100));
        }
        if (!cancelled) {
          objectUrl = URL.createObjectURL(new Blob(parts, { type: "video/mp4" }));
          setVideoUrl(objectUrl);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    prepareVideo();
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, []);

  if (failed) {
    return <div className="video-loading">Não foi possível carregar o vídeo. Verifique sua conexão e atualize a página.</div>;
  }

  if (!videoUrl) {
    return (
      <div className="video-loading" aria-live="polite">
        <span>Preparando o vídeo com áudio</span>
        <strong>{progress}%</strong>
        <div><i style={{ width: `${progress}%` }} /></div>
      </div>
    );
  }

  return (
    <video controls preload="metadata" playsInline controlsList="nodownload">
      <source src={videoUrl} type="video/mp4" />
      Seu navegador não consegue reproduzir este vídeo.
    </video>
  );
}
