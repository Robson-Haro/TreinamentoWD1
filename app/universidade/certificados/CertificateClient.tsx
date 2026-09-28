"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import styles from "../universidade.module.css";

type Participant = { name: string; email: string };
type ProgressMap = Record<string, { status: string; score?: number }>;

async function imageAsDataUrl(url: string) {
  const response = await fetch(url);
  const blob = await response.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function createCertificateCode() {
  const token = crypto.randomUUID().split("-")[0].toUpperCase();
  return "WD-LID-" + new Date().getFullYear() + "-" + token;
}

export default function CertificateClient() {
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [progress, setProgress] = useState<ProgressMap>({});
  const [certificateCode, setCertificateCode] = useState("");
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    try {
      const savedParticipant = localStorage.getItem("wd_uc_participant");
      const savedProgress = localStorage.getItem("wd_uc_progress");
      const savedCode = localStorage.getItem("wd_uc_certificate_lideranca");
      if (savedParticipant) setParticipant(JSON.parse(savedParticipant));
      if (savedProgress) setProgress(JSON.parse(savedProgress));
      if (savedCode) setCertificateCode(savedCode);
    } catch {
      // A página continuará mostrando o status disponível.
    }
  }, []);

  const eligible = useMemo(
    () => progress["modulo-1"]?.status === "passed" && progress["modulo-2"]?.status === "passed",
    [progress],
  );

  async function downloadCertificate() {
    if (!participant || !eligible) return;
    setDownloading(true);
    try {
      const code = certificateCode || createCertificateCode();
      if (!certificateCode) {
        setCertificateCode(code);
        localStorage.setItem("wd_uc_certificate_lideranca", code);
      }

      const [wdLogo, ramosLogo] = await Promise.all([
        imageAsDataUrl("/grupo-wd.png"),
        imageAsDataUrl("/ramos-consultoria.png"),
      ]);

      const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
      const width = 297;
      const height = 210;

      doc.setFillColor(29, 33, 36);
      doc.rect(0, 0, width, height, "F");

      doc.setDrawColor(190, 158, 84);
      doc.setLineWidth(0.8);
      doc.roundedRect(10, 10, width - 20, height - 20, 4, 4, "S");
      doc.setLineWidth(0.25);
      doc.roundedRect(14, 14, width - 28, height - 28, 3, 3, "S");

      doc.setFillColor(248, 248, 246);
      doc.roundedRect(22, 22, 35, 22, 3, 3, "F");
      doc.addImage(wdLogo, "PNG", 25, 25, 29, 16);
      doc.roundedRect(width - 57, 22, 35, 22, 3, 3, "F");
      doc.addImage(ramosLogo, "PNG", width - 54, 25, 29, 16);

      doc.setTextColor(216, 188, 119);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.text("GRUPO WD / RAMOS CONSULTORIA", width / 2, 31, { align: "center" });

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(26);
      doc.text("CERTIFICADO", width / 2, 53, { align: "center" });
      doc.setFontSize(11);
      doc.setFont("helvetica", "normal");
      doc.text("DE CONCLUSÃO", width / 2, 61, { align: "center" });

      doc.setTextColor(205, 209, 211);
      doc.setFontSize(10);
      doc.text("Certificamos que", width / 2, 75, { align: "center" });

      doc.setTextColor(226, 198, 126);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(21);
      doc.text(participant.name, width / 2, 88, { align: "center" });

      doc.setTextColor(232, 234, 235);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text("concluiu a Jornada de aprimoramento e qualificação da liderança do Grupo WD.", width / 2, 100, { align: "center" });
      doc.setFont("helvetica", "bold");
      doc.text("Módulos 1 e 2 · Jornada de Liderança", width / 2, 109, { align: "center" });

      doc.setFontSize(8);
      doc.setTextColor(216, 188, 119);
      doc.text("CONTEÚDO PROGRAMÁTICO", width / 2, 122, { align: "center" });

      doc.setTextColor(215, 218, 220);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.4);
      const line1 = "Autoconhecimento • Estilos de Liderança • DISC • Decisões e Leitura de Cenário • Comunicação e Influência";
      const line2 = "Liderança Situacional • Segurança Psicológica • Qualidade na Origem • Excelência Operacional";
      doc.text(line1, width / 2, 130, { align: "center" });
      doc.text(line2, width / 2, 136, { align: "center" });

      doc.setDrawColor(150, 155, 159);
      doc.line(45, 163, 110, 163);
      doc.line(187, 163, 252, 163);

      doc.setTextColor(236, 238, 239);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(8.5);
      doc.text("Grupo WD · Ramos Consultoria", 77.5, 170, { align: "center" });
      doc.text("Psi Robson Ramos · Instrutor", 219.5, 170, { align: "center" });

      const dateText = new Intl.DateTimeFormat("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date());

      doc.setFont("helvetica", "normal");
      doc.setTextColor(185, 190, 193);
      doc.setFontSize(7.5);
      doc.text("Emissão: " + dateText, 22, 186);
      doc.text("Código de validação: " + code, width - 22, 186, { align: "right" });

      doc.save("Certificado-Jornada-Lideranca-" + participant.name.replace(/\s+/g, "-") + ".pdf");

      fetch("/api/universidade", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          action: "certificate",
          participant,
          journey: "lideranca",
          certificate_code: code,
          module_1_score: progress["modulo-1"]?.score || 0,
          module_2_score: progress["modulo-2"]?.score || 0,
        }),
      }).catch(() => undefined);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <main className={styles.page}>
      <div className={styles.certificateLayout}>
        <section className={styles.certificatePreview}>
          <div className={styles.certLogos}>
            <img src="/grupo-wd.png" alt="Grupo WD" />
            <img src="/ramos-consultoria.png" alt="Ramos Consultoria" />
          </div>
          <span className={styles.kicker} style={{ marginTop: 34 }}>Certificado de conclusão</span>
          <h2>Jornada de Liderança</h2>
          <p>Certificamos que</p>
          <p className={styles.certName}>{participant?.name || "Nome do participante"}</p>
          <p>concluiu os módulos 1 e 2 da Jornada de aprimoramento e qualificação da liderança do Grupo WD.</p>
          <p><strong>Módulo 1:</strong> Se conhecendo para liderar<br /><strong>Módulo 2:</strong> Comunicação e Excelência</p>
          {certificateCode ? <p>Código: <strong>{certificateCode}</strong></p> : null}
        </section>

        <aside className={styles.certificatePanel}>
          <Link className={styles.backLink} href="/universidade/jornada-lideranca">← Jornada de Liderança</Link>
          <span className={styles.kicker}>Certificação</span>
          <h1>Seu certificado</h1>
          <p>
            O modelo segue a linguagem do certificado final do Grupo WD criado no Canva:
            Grupo WD / Ramos Consultoria, identificação do participante, conteúdo programático,
            realização, instrutor e código de validação.
          </p>

          {!participant ? (
            <div className={styles.locked}>Identifique-se na página inicial da Universidade antes de emitir o certificado.</div>
          ) : !eligible ? (
            <div className={styles.locked}>
              Certificado bloqueado. É necessário atingir pelo menos 70% nas avaliações dos módulos 1 e 2.
            </div>
          ) : (
            <div className={styles.resultBox}>
              <strong>100%</strong>
              <p>Requisitos de certificação atendidos. O PDF A4 paisagem está liberado para emissão.</p>
            </div>
          )}

          <div style={{ marginTop: 20 }}>
            <p><strong>Módulo 1:</strong> {progress["modulo-1"]?.score ? String(progress["modulo-1"].score) + "%" : "pendente"}</p>
            <p><strong>Módulo 2:</strong> {progress["modulo-2"]?.score ? String(progress["modulo-2"].score) + "%" : "pendente"}</p>
          </div>

          <button
            className={styles.primaryButton}
            type="button"
            disabled={!eligible || !participant || downloading}
            onClick={downloadCertificate}
            style={{ opacity: !eligible || !participant ? .45 : 1, marginTop: 18 }}
          >
            {downloading ? "Gerando PDF..." : "Baixar certificado em PDF"}
          </button>
        </aside>
      </div>
    </main>
  );
}
