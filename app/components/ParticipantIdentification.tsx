"use client";

import { FormEvent, useEffect, useState } from "react";

type ParticipantIdentificationProps = {
  title: string;
  description: string;
  targetPath: string;
  sessionCode: string;
  badge: string;
};

const fieldStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,.16)",
  background: "rgba(255,255,255,.06)",
  color: "#f4f4f5",
  fontSize: 16,
  outline: "none",
} as const;

export default function ParticipantIdentification({
  title,
  description,
  targetPath,
  sessionCode,
  badge,
}: ParticipantIdentificationProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    setNome(sessionStorage.getItem("wd_participant_name") ?? "");
    setEmail(sessionStorage.getItem("wd_participant_email") ?? "");
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanName = nome.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (cleanName.length < 3) {
      setErro("Digite seu nome completo para continuar.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setErro("Digite um e-mail válido para continuar.");
      return;
    }

    sessionStorage.setItem("wd_participant_name", cleanName);
    sessionStorage.setItem("wd_participant_email", cleanEmail);

    const params = new URLSearchParams({
      sessao: sessionCode,
      nome: cleanName,
      email: cleanEmail,
    });

    window.location.assign(`${targetPath}?${params.toString()}`);
  }

  return (
    <div className="test-grid">
      <div className="test-copy">
        <span className="eyebrow">{badge}</span>
        <h1 className="test-title">{title}</h1>
        <p className="test-intro">{description}</p>
        <div className="test-steps">
          <span><b>01</b> Identifique-se</span>
          <span><b>02</b> Responda individualmente</span>
          <span><b>03</b> Receba seu resultado</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="qr-card"
        style={{
          alignSelf: "center",
          width: "100%",
          maxWidth: 520,
          padding: 30,
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <div>
          <strong style={{ display: "block", fontSize: 20, marginBottom: 7 }}>
            Sua identificação
          </strong>
          <span style={{ color: "rgba(255,255,255,.62)", fontSize: 13, lineHeight: 1.5 }}>
            Nome e e-mail vinculam os dois testes ao seu registro individual e evitam mistura de resultados entre participantes.
          </span>
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>
            Nome completo
          </span>
          <input
            autoComplete="name"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Digite seu nome completo"
            style={fieldStyle}
            required
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>
            E-mail
          </span>
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="seuemail@empresa.com"
            style={fieldStyle}
            required
          />
        </label>

        {erro ? (
          <p role="alert" style={{ color: "#e7b7b7", margin: 0, fontSize: 13 }}>
            {erro}
          </p>
        ) : null}

        <button
          type="submit"
          className="gold-button test-open"
          style={{ border: 0, cursor: "pointer", width: "100%" }}
        >
          <span>Começar meu teste</span>
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>

        <small style={{ color: "rgba(255,255,255,.42)", lineHeight: 1.45 }}>
          Cada envio gera um registro próprio. O resultado individual aparece ao final do teste e o consolidado fica disponível no dashboard do facilitador.
        </small>
      </form>
    </div>
  );
}
