"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./relatorio.module.css";

export type LeadershipRow = {
  id: string; top: string; second: string; lowest: string;
  diretivo: number; modelador: number; participativo: number;
  agregador: number; coaching: number; visionario: number;
};

export type DiscRow = {
  id: string; nome?: string | null; email?: string | null;
  top: string; second: string; lowest: string;
  dominancia: number; influencia: number; estabilidade: number; conformidade: number;
};

const leadLabel: Record<string, string> = { diretivo: "Diretivo", modelador: "Modelador", participativo: "Participativo", agregador: "Agregador", coaching: "Desenvolvedor", visionario: "Visionário" };
const discLabel: Record<string, string> = { dominancia: "Dominância", influencia: "Influência", estabilidade: "Estabilidade", conformidade: "Conformidade" };

const discText: Record<string, { profile: string; communication: string; application: string; strengths: string[]; improvements: string[] }> = {
  dominancia: {
    profile: "Você tende a encarar desafios de frente, buscar movimento e manter atenção no resultado. Gosta de perceber avanço e pode se sentir mais à vontade quando tem autonomia para decidir e agir.",
    communication: "Sua comunicação costuma ser objetiva, firme e voltada ao que precisa acontecer. Você tende a ir rapidamente ao ponto e valoriza conversas que terminam com uma decisão clara.",
    application: "Na liderança, essa clareza ajuda a equipe a entender prioridades. O melhor efeito aparece quando você explica o contexto, escuta antes de concluir e confirma se a mensagem foi compreendida.",
    strengths: ["Coragem para enfrentar situações difíceis", "Agilidade para tomar decisões", "Foco em metas e entregas", "Capacidade de dar direção ao time"],
    improvements: ["Reservar alguns minutos para ouvir outras perspectivas", "Cuidar do tom em momentos de pressão", "Explicar o motivo das decisões, não apenas o que deve ser feito"]
  },
  influencia: {
    profile: "Você tende a criar conexão com facilidade, envolver as pessoas e colocar energia nas relações. Ambientes com troca, novidade e participação costumam despertar o seu melhor.",
    communication: "Sua comunicação costuma ser aberta, envolvente e espontânea. Você transmite entusiasmo, convence pelas ideias e tem facilidade para mobilizar pessoas.",
    application: "Como liderança, use essa presença para aproximar o time e dar sentido às metas. Para aumentar a confiança, transforme conversas em combinados claros, com responsáveis e prazos.",
    strengths: ["Facilidade para criar vínculos", "Entusiasmo que mobiliza", "Poder de persuasão", "Abertura para novas ideias"],
    improvements: ["Registrar decisões e próximos passos", "Equilibrar entusiasmo com acompanhamento", "Criar espaço para pessoas mais reservadas se expressarem"]
  },
  estabilidade: {
    profile: "Você tende a valorizar relações de confiança, constância e cooperação. Costuma contribuir para um ambiente seguro e demonstra atenção ao ritmo e às necessidades das pessoas.",
    communication: "Sua comunicação costuma ser calma, respeitosa e acolhedora. Você ouve com atenção e prefere conversas conduzidas sem confronto desnecessário.",
    application: "Na liderança, essa serenidade fortalece a confiança. Ela se torna ainda mais potente quando você trata assuntos difíceis no momento certo e apresenta mudanças de forma clara e gradual.",
    strengths: ["Escuta atenta", "Paciência e constância", "Capacidade de gerar confiança", "Cooperação com o grupo"],
    improvements: ["Não adiar conversas necessárias", "Expressar discordâncias com clareza", "Comunicar mudanças com antecedência e direção"]
  },
  conformidade: {
    profile: "Você tende a observar detalhes, buscar qualidade e tomar decisões com cuidado. Sente-se mais seguro quando existem informações, critérios e expectativas bem definidos.",
    communication: "Sua comunicação costuma ser cuidadosa, organizada e apoiada em fatos. Você valoriza precisão e prefere apresentar uma ideia depois de avaliá-la com atenção.",
    application: "Na liderança, essa consistência ajuda a reduzir erros e orientar padrões. Para ganhar impacto, apresente primeiro a mensagem principal e depois os detalhes, ajustando a profundidade ao público.",
    strengths: ["Qualidade e atenção aos detalhes", "Organização", "Decisões bem fundamentadas", "Compromisso com padrões"],
    improvements: ["Evitar excesso de detalhes em mensagens simples", "Definir um tempo limite para decidir", "Reconhecer quando uma solução já está boa o suficiente para avançar"]
  }
};

const leadershipText: Record<string, { description: string; strength: string; improvement: string }> = {
  diretivo: { description: "Você tende a assumir a direção e decidir com rapidez, especialmente quando o cenário pede firmeza. Sua equipe costuma saber o que você espera e para onde precisa seguir.", strength: "Clareza, coragem e rapidez em momentos críticos", improvement: "Abrir espaço para contribuições antes de fechar decisões que permitem participação" },
  modelador: { description: "Você lidera pelo exemplo e demonstra, na prática, o padrão de entrega que espera. Sua energia pode elevar a qualidade e acelerar o desempenho do grupo.", strength: "Exemplo pessoal e compromisso com a excelência", improvement: "Delegar sem refazer o trabalho e respeitar diferentes ritmos de aprendizagem" },
  participativo: { description: "Você gosta de construir caminhos com a equipe e considera diferentes opiniões antes de decidir. Isso favorece o envolvimento e a responsabilidade compartilhada.", strength: "Escuta, participação e construção de compromisso", improvement: "Definir prazos para a conversa e decidir com agilidade quando necessário" },
  agregador: { description: "Você coloca atenção especial nas relações, na confiança e no clima da equipe. Sua presença tende a aproximar as pessoas e fortalecer o sentimento de pertencimento.", strength: "União, acolhimento e fortalecimento dos vínculos", improvement: "Manter o cuidado com as pessoas sem evitar feedbacks firmes sobre resultados" },
  coaching: { description: "Você tende a desenvolver as pessoas por meio de perguntas, orientação e autonomia. Valoriza o crescimento contínuo e enxerga potencial para além da tarefa atual.", strength: "Desenvolvimento, autonomia e preparação de sucessores", improvement: "Ajustar o nível de orientação à experiência de cada pessoa e às urgências do momento" },
  visionario: { description: "Você conecta o trabalho a uma direção de futuro e costuma mobilizar as pessoas pelo propósito. Tem facilidade para mostrar por que uma mudança ou objetivo importa.", strength: "Inspiração, visão de futuro e capacidade de dar sentido", improvement: "Traduzir a visão em prioridades, responsáveis, prazos e acompanhamento" }
};

function scoreLine(label: string, value: number) {
  return <div className="report-score"><span>{label}</span><div><i style={{ width: `${value}%` }} /></div><strong>{value}%</strong></div>;
}

export default function ReportClient({ disc, leadership }: { disc: DiscRow[]; leadership: LeadershipRow[] }) {
  const [selectedId, setSelectedId] = useState(disc[0]?.id ?? "");
  const [links, setLinks] = useState<Record<string, string>>({});
  const [pdfBusy, setPdfBusy] = useState(false);

  useEffect(() => {
    try { setLinks(JSON.parse(localStorage.getItem("wd_report_leadership_links") || "{}")); } catch { setLinks({}); }
  }, []);

  const person = useMemo(() => disc.find((row) => row.id === selectedId) ?? disc[0], [disc, selectedId]);
  const linkedLeadership = person ? leadership.find((row) => row.id === links[person.id]) : undefined;
  const discReading = person ? discText[person.top] : undefined;
  const leadReading = linkedLeadership ? leadershipText[linkedLeadership.top] : undefined;

  function linkLeadership(id: string) {
    if (!person) return;
    const next = { ...links, [person.id]: id };
    if (!id) delete next[person.id];
    setLinks(next);
    localStorage.setItem("wd_report_leadership_links", JSON.stringify(next));
  }

  async function downloadPdf() {
    if (!person || !discReading) return;
    setPdfBusy(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "mm", format: "a4" });
      const left = 18, width = 174;
      let y = 20;
      const addTitle = (title: string) => { if (y > 257) { doc.addPage(); y = 20; } doc.setTextColor(143, 111, 42); doc.setFont("helvetica", "bold"); doc.setFontSize(15); doc.text(title, left, y); y += 8; };
      const addText = (value: string) => { doc.setTextColor(45, 45, 48); doc.setFont("helvetica", "normal"); doc.setFontSize(10.5); const lines = doc.splitTextToSize(value, width); if (y + lines.length * 5 > 280) { doc.addPage(); y = 20; } doc.text(lines, left, y); y += lines.length * 5 + 4; };
      const addList = (values: string[]) => values.forEach((value) => addText(`• ${value}`));

      doc.setFillColor(22, 23, 26); doc.rect(0, 0, 210, 38, "F");
      doc.setTextColor(217, 186, 107); doc.setFont("helvetica", "bold"); doc.setFontSize(18); doc.text("Relatório dos testes", left, 17);
      doc.setTextColor(245, 245, 245); doc.setFontSize(12); doc.text(person.nome || "Participante", left, 27); y = 49;
      addTitle("1. Perfil pessoal"); addText(discReading.profile); addText("Leitura da grafologia: será integrada após a análise da imagem enviada.");
      addTitle("Como você se comunica"); addText(discReading.communication); addText(discReading.application);
      addTitle("2. Seu estilo de liderança"); addText(leadReading?.description || "O resultado do teste de liderança ainda precisa ser vinculado ao seu nome para concluirmos esta parte com segurança.");
      addTitle("3. Seus pontos fortes"); addList([...discReading.strengths, ...(leadReading ? [leadReading.strength] : [])]);
      addTitle("4. Recomendações para o seu desenvolvimento"); addList([...discReading.improvements, ...(leadReading ? [leadReading.improvement] : [])]);
      doc.setFontSize(8); doc.setTextColor(110, 110, 110); doc.text("Material de autoconhecimento e desenvolvimento. Não representa diagnóstico psicológico.", left, 289);
      doc.save(`relatorio-testes-${(person.nome || "participante").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-")}.pdf`);
    } finally { setPdfBusy(false); }
  }

  if (!person || !discReading) return <p>Nenhum participante identificado foi encontrado.</p>;

  const usedByAnother = new Set(Object.entries(links).filter(([id]) => id !== person.id).map(([, value]) => value));

  return <>
    <div className={styles.controls} data-testid="report-controls">
      <label className={styles.field}><span>Escolha o participante</span><select className={styles.select} value={person.id} onChange={(e) => setSelectedId(e.target.value)}>{disc.map((row) => <option key={row.id} value={row.id}>{row.nome || "Participante sem nome"}</option>)}</select></label>
      <label className={styles.field}><span>Vincular teste de liderança antigo</span><select className={styles.select} value={links[person.id] || ""} onChange={(e) => linkLeadership(e.target.value)}><option value="">Ainda não vinculado</option>{leadership.map((row, index) => <option key={row.id} value={row.id} disabled={usedByAnother.has(row.id)}>Resposta {index + 1} · {leadLabel[row.top] || row.top}{usedByAnother.has(row.id) ? " · já vinculada" : ""}</option>)}</select></label>
      <button className={styles.download} type="button" onClick={downloadPdf} disabled={pdfBusy}><span>{pdfBusy ? "Preparando..." : "Baixar em PDF"}</span></button>
    </div>

    {!linkedLeadership && <div className="report-alert">Confirme acima qual resposta do teste de liderança pertence a {person.nome}. Até essa confirmação, o relatório não atribui um resultado anônimo à pessoa.</div>}

    <article className="report-paper">
      <header><div><span className="eyebrow">Relatório individual</span><h2>{person.nome}</h2><p>Uma leitura clara e prática para apoiar o seu desenvolvimento como liderança.</p></div><div className="report-logo-pair"><img src="/grupo-wd.png" alt="Grupo WD"/><img src="/ramos-consultoria.png" alt="Ramos Consultoria"/></div></header>
      <section><span className="report-number">01</span><div><h3>Perfil Pessoal</h3><p>{discReading.profile}</p><div className="graphology-pending"><strong>Grafologia</strong><p>A leitura da sua escrita será integrada aqui após a análise da imagem, formando uma visão conjunta com o DISC.</p></div></div></section>
      <section><span className="report-number">02</span><div><h3>Como você se comunica</h3><p>{discReading.communication}</p><div className="leadership-application"><strong>Como aplicar isso sendo liderança</strong><p>{discReading.application}</p></div></div></section>
      <section><span className="report-number">03</span><div><h3>Seu estilo de liderança</h3>{leadReading ? <><h4>{leadLabel[linkedLeadership!.top]}</h4><p>{leadReading.description}</p><div className="report-scores">{scoreLine("Diretivo", linkedLeadership!.diretivo)}{scoreLine("Modelador", linkedLeadership!.modelador)}{scoreLine("Participativo", linkedLeadership!.participativo)}{scoreLine("Agregador", linkedLeadership!.agregador)}{scoreLine("Desenvolvedor", linkedLeadership!.coaching)}{scoreLine("Visionário", linkedLeadership!.visionario)}</div></> : <p>Este bloco será concluído assim que o resultado de liderança for vinculado ao seu nome.</p>}</div></section>
      <section><span className="report-number">04</span><div><h3>Seus pontos fortes</h3><ul>{discReading.strengths.map((item) => <li key={item}>{item}</li>)}{leadReading && <li>{leadReading.strength}</li>}</ul></div></section>
      <section><span className="report-number">05</span><div><h3>Recomendações para o seu desenvolvimento</h3><p className="report-invite">Pequenos ajustes podem ampliar ainda mais o impacto positivo da sua liderança:</p><ul>{discReading.improvements.map((item) => <li key={item}>{item}</li>)}{leadReading && <li>{leadReading.improvement}</li>}</ul></div></section>
      <footer>Este material apoia o autoconhecimento e o desenvolvimento. Ele não representa diagnóstico psicológico e deve ser compreendido como um convite à reflexão.</footer>
    </article>
  </>;
}
