"use client";

import { useEffect, useState } from "react";

const parts = Array.from({ length: 29 }, (_, index) =>
  `/videos/modulo-2/comunicacao-na-lideranca/part-${String(index).padStart(3, "0")}`,
);

export default function VideoPlayer() {
  const [url, setUrl] = useState<string>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let objectUrl: string | undefined;
    async function prepare() {
      try {
        const buffers = await Promise.all(parts.map(async (part) => {
          const response = await fetch(part);
          if (!response.ok) throw new Error("Parte indisponível");
          return response.arrayBuffer();
        }));
        objectUrl = URL.createObjectURL(new Blob(buffers, { type: "video/mp4" }));
        setUrl(objectUrl);
      } catch {
        setFailed(true);
      }
    }
    prepare();
    return () => { if (objectUrl) URL.revokeObjectURL(objectUrl); };
  }, []);

  if (failed) return <div className="video-loading">Não foi possível carregar o vídeo. Atualize a página e tente novamente.</div>;
  if (!url) return <div className="video-loading"><strong>Preparando o vídeo</strong><span>Carregando com áudio…</span></div>;
  return <video controls playsInline preload="metadata" aria-label="Vídeo complementar sobre comunicação e liderança"><source src={url} type="video/mp4" />Seu navegador não consegue reproduzir este vídeo.</video>;
}
