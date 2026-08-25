"use client";

import { useEffect, useState } from "react";

export default function QRCodePanel() {
  const [testUrl, setTestUrl] = useState("/teste/index.html?sessao=grupo-wd-2026-08-29");

  useEffect(() => {
    setTestUrl(`${window.location.origin}/teste/index.html?sessao=grupo-wd-2026-08-29`);
  }, []);

  const qrUrl =
    "https://quickchart.io/qr?size=700&margin=2&dark=111111&light=ffffff&text=" +
    encodeURIComponent(testUrl);

  return (
    <div className="test-grid">
      <div className="test-copy">
        <span className="eyebrow">Módulo 1 · Tela 3</span>
        <h1 className="test-title">Teste: Que tipo de líder você é?</h1>
        <p className="test-intro">
          Aponte a câmera do celular para o QR Code. Cada participante acessa
          sua própria página, responde individualmente e recebe o resultado ao final.
        </p>
        <div className="test-steps">
          <span><b>01</b> Escaneie</span>
          <span><b>02</b> Responda</span>
          <span><b>03</b> Veja seu perfil</span>
        </div>
        <a className="gold-button test-open" href={testUrl} target="_blank" rel="noreferrer">
          <span>Abrir o teste neste aparelho</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>

      <div className="qr-stage">
        <div className="qr-glow" aria-hidden="true" />
        <div className="qr-card">
          <img src={qrUrl} alt={"QR Code para acessar " + testUrl} />
          <div>
            <strong>ACESSE E RESPONDA</strong>
            <span>Participação individual e simultânea</span>
          </div>
        </div>
      </div>
    </div>
  );
}
