export type PersonalReport = {
  id: string; name: string; scores: Record<string, number>; files: string[];
  personalNarrative?: string[]; instrumentLine?: string; leadershipDetails?: string[];
  summary: string; profile: string; communication: string; essay: string;
  observation: string; application: string; strengths: string[]; actions: string[];
  leadershipStatus: string; leadershipNote: string; date: string;
  method: string; sources: string; status: string;
};
export type ReportDelivery = { role: 'participant' | 'coordinator'; reports: PersonalReport[] };

export function sections(report: PersonalReport) {
  return [
    { title: 'Perfil Pessoal:', blocks: [
      { title: report.instrumentLine ?? 'Materiais consultados nesta versão', paragraphs: report.personalNarrative ?? [report.profile, report.communication, report.essay] },
    ] },
    { title: 'Estilo de Liderança', blocks: [
      { title: 'Resultado do teste: identificação pendente', paragraphs: [report.leadershipNote] },
      { title: 'Uma aplicação para experimentar', paragraphs: report.leadershipDetails ?? [report.application] },
    ] },
    { title: 'Pontos Fortes', blocks: [{ title: 'Possibilidades para reconhecer na prática', paragraphs: report.strengths }] },
    { title: 'Recomendações de Desenvolvimento', blocks: [{ title: 'Seu próximo passo nos próximos 30 dias', paragraphs: report.actions }] },
  ];
}
