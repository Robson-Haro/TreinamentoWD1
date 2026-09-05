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
    ] },
    { title: 'Pontos Fortes', blocks: [{ title: 'O que se destaca nos materiais', paragraphs: report.strengths }] },
    { title: 'Pontos de Melhoria e Desenvolvimento', blocks: [{ title: 'Aspectos a desenvolver e ações práticas', paragraphs: report.actions }] },
  ];
}
