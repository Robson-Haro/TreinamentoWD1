import type { Metadata } from "next";
import "../../modulo-1/experience.css";
import RecapScreen from "../_components/RecapScreen";

export const metadata: Metadata = {
  title: "Vamos recapitular o treinamento passado | TreinamentoWD1",
  description: "As principais ideias do Módulo 1: autoconhecimento, atenção, liderança pelo exemplo, desenvolvimento e decisões responsáveis.",
};

const sections = [
  {
    label: "Conhecer-se para liderar",
    items: [
      { topic: "Autoconhecimento", text: "reconhecer forças e pontos de atenção." },
      { topic: "Estilo de liderança", text: "perceber o impacto das próprias atitudes." },
      { topic: "DISC", text: "entender diferenças e adaptar a abordagem, sem rotular pessoas." },
      { topic: "Tipos diferentes de pessoas", text: "cada colaborador tem sua personalidade. Precisamos adaptar nossa liderança, a comunicação e o apoio às necessidades de cada um." },
      { topic: "Atenção e foco", text: "observar os detalhes antes de agir." },
    ],
  },
  {
    label: "Transformar reflexão em prática",
    items: [
      { topic: "Exemplo e desenvolvimento", text: "praticar o que se espera e treinar a equipe." },
      { topic: "Decisões éticas", text: "avaliar critérios, riscos e consequências." },
      { topic: "Estratégia e organização", text: "antecipar cenários, priorizar e preparar alternativas." },
      { topic: "Responsabilidade na operação", text: "cuidar das pessoas, do serviço e do cliente." },
    ],
  },
];

export default function RecapitulacaoModuloUm() {
  return <RecapScreen
    title="Vamos recapitular"
    emphasis="o treinamento passado"
    subtitle="Módulo 1 · Se conhecendo para liderar"
    screenNumber={2}
    previous={{ href: "/modulo-2", label: "Abertura do Módulo 2" }}
    next={{ href: "/modulo-2/influencia", label: "O tamanho da sua influência" }}
    sections={sections}
  />;
}
