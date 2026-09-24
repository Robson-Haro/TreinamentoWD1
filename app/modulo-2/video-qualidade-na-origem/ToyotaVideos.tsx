"use client";

import { useState } from "react";
import styles from "../qualidade-na-origem/qualidade.module.css";

const videos = [
  { id: "zQeQWGqfFN0", title: "1. Da chapa à expedição", description: "Visão geral oficial: estamparia, soldagem, pintura, montagem, inspeção e expedição.", source: "https://global.toyota/en/company/plant-tours/" },
  { id: "TUKpxjAftnk", title: "2. Anormalidade: chamar e agir", description: "Demonstração oficial de jidoka: sinalização pelo andon e resposta da liderança ao problema.", source: "https://global.toyota/en/company/plant-tours/production-system/" },
  { id: "PEfMzggk1Lw", title: "3. O erro não deve avançar", description: "Exemplo oficial de poka-yoke: verificação do aperto e sinalização de uma condição não aprovada.", source: "https://global.toyota/en/company/plant-tours/production-system/" },
];

export default function ToyotaVideos() {
  const [selected, setSelected] = useState(0);
  const current = videos[selected];
  return (
    <section className={styles.videoSection} aria-label="Vídeos oficiais da Toyota">
      <div className={styles.videoChoices} role="group" aria-label="Escolher vídeo">
        {videos.map((video, index) => <button type="button" key={video.id} aria-pressed={selected === index} onClick={() => setSelected(index)}>{video.title}</button>)}
      </div>
      <div className={styles.videoFrame}>
        <iframe key={current.id} src={`https://www.youtube-nocookie.com/embed/${current.id}?rel=0&playsinline=1&cc_lang_pref=pt&cc_load_policy=1`} title={`Toyota — ${current.title}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
      </div>
      <div className={styles.videoInfo} aria-live="polite"><p>{current.description}</p></div>
      <div className={styles.videoLinks}>
        <a href={`https://www.youtube.com/watch?v=${current.id}`} target="_blank" rel="noopener noreferrer">Abrir este vídeo no YouTube ↗</a>
        <a href={current.source} target="_blank" rel="noopener noreferrer">Fonte: Toyota Motor Corporation ↗</a>
        <button type="button" onClick={() => setSelected((selected + 1) % videos.length)}>{selected === videos.length - 1 ? "Voltar ao primeiro vídeo" : "Próximo vídeo →"}</button>
      </div>
      <span className={styles.mediaNote}>Selecione um vídeo e pressione reproduzir. Conteúdo oficial externo, em idioma original; legendas e tradução dependem da disponibilidade no YouTube.</span>
    </section>
  );
}
