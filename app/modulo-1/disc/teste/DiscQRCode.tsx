"use client";

import { useEffect, useState } from "react";

export default function DiscQRCode() {
  const [testUrl, setTestUrl] = useState("/teste-disc/index.html");

  useEffect(() => {
    setTestUrl(`${window.location.origin}/teste-disc/index.html`);
  }, []);

  const qrUrl =
    "https://quickchart.io/qr?size=700&margin=2&dark=111111&light=ffffff&text=" +
    encodeURIComponent(testUrl);

  return (
    <div className="test-grid">
      <div className="test-copy">
        <span className="eyebrow">Módulo 1 · Tela 6</span>
        <h1 className="test-title">Teste Comportamental DISC</h1>
        <p className="test-intro">
          Cada pessoa responde pelo próprio celular. São 20 blocos de escolha
          forçada para identificar a prevalência entre D, I, S e C.
        </p>
        <div className="test-steps">
          <span><b>01</b> Escaneie</span>
          <span><b>02</b> Responda individualmente</span>
          <span><b>03</b> Receba seu perfil</span>
        </div>
        <a className="gold-button test-open" href={testUrl} target="_blank" rel="noreferrer">
          <span>Abrir teste neste aparelho</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
      </div>
      <div className="qr-stage">
        <div className="qr-glow" aria-hidden="true" />
        <div className="qr-card">
          <img src={qrUrl} alt={"QR Code para acessar " + testUrl} />
          <div>
            <strong>TESTE DISC</strong>
            <span>Respostas individuais e simultâneas</span>
          </div>
        </div>
      </div>
    </div>
  );
}
