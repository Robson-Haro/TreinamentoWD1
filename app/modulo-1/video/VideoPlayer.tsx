"use client";

import { useEffect, useState } from "react";

const TOTAL_PARTS = 67;

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
          const response = await fetch(`/video-parts/part-${name}`);
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
    return <div className="video-loading">Não foi possível carregar o vídeo. Atualize a página para tentar novamente.</div>;
  }

  if (!videoUrl) {
    return (
      <div className="video-loading" aria-live="polite">
        <span>Preparando a experiência</span>
        <strong>{progress}%</strong>
        <div><i style={{ width: `${progress}%` }} /></div>
      </div>
    );
  }

  return (
    <video controls preload="metadata" playsInline>
      <source src={videoUrl} type="video/mp4" />
      Seu navegador não consegue reproduzir este vídeo.
    </video>
  );
}
