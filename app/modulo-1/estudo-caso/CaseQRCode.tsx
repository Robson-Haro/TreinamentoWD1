"use client";

import { useEffect, useState } from "react";

export default function CaseQRCode() {
  const [caseUrl, setCaseUrl] = useState(
    "https://treinamento-wd-1.vercel.app/modulo-1/estudo-caso"
  );

  useEffect(() => {
    setCaseUrl(`${window.location.origin}/modulo-1/estudo-caso`);
  }, []);

  const qrUrl =
    "https://quickchart.io/qr?size=700&margin=2&dark=111111&light=ffffff&text=" +
    encodeURIComponent(caseUrl);

  return (
    <aside className="case-access-card">
      <div className="case-access-copy">
        <span>ACESSE PELO CELULAR</span>
        <strong>Estudo de caso completo</strong>
        <small>Escaneie para acompanhar os dados e as cinco decisões.</small>
        <a href={caseUrl} target="_blank" rel="noreferrer">Abrir neste aparelho →</a>
      </div>
      <img src={qrUrl} alt="QR Code para acessar o estudo de caso Operação em Alerta" />
      <code>treinamento-wd-1.vercel.app/modulo-1/estudo-caso</code>
    </aside>
  );
}
