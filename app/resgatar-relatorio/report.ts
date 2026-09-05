export type PersonalReport = {
  id: string; name: string; scores: Record<string, number>; files: string[];
  summary: string; profile: string; communication: string; essay: string;
  observation: string; application: string; strengths: string[]; actions: string[];
  leadershipStatus: string; leadershipNote: string; date: string;
  method: string; sources: string; status: string;
};
export type ReportDelivery = { role: 'participant' | 'coordinator'; reports: PersonalReport[] };

export function sections(report: PersonalReport) {
  return [
    { title: 'Perfil Pessoal', blocks: [
      { title: 'Suas respostas ao DISC', paragraphs: [report.profile] },
      { title: 'Sua comunicação na liderança', paragraphs: [report.communication] },
      { title: 'O que sua redação acrescenta', paragraphs: [report.essay] },
      { title: 'Observações da escrita', paragraphs: [report.observation] },
    ] },
    { title: 'Estilo de Liderança', blocks: [
      { title: 'Resultado do teste: identificação pendente', paragraphs: [report.leadershipNote] },
      { title: 'Uma aplicação para experimentar', paragraphs: [report.application] },
    ] },
    { title: 'Pontos Fortes', blocks: [{ title: 'Possibilidades para reconhecer na prática', paragraphs: report.strengths }] },
    { title: 'Recomendações de Desenvolvimento', blocks: [{ title: 'Seu próximo passo nos próximos 30 dias', paragraphs: report.actions }] },
  ];
}
