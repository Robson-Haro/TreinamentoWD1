import type { Metadata } from "next";
import "../../modulo-1/experience.css";
import RecapScreen from "../_components/RecapScreen";

export const metadata: Metadata = {
  title: "Principais ideias do Módulo 2 | TreinamentoWD1",
  description: "Recapitulação de comunicação, comportamentos, excelência operacional, valor para o cliente, padrões e melhoria contínua.",
};

const sections = [
  {
    label: "Comunicação e liderança",
    items: [
      { topic: "Influência", text: "as atitudes do líder orientam e mobilizam o time." },
      { topic: "Comunicação", text: "escutar, reduzir ruídos e confirmar o entendimento." },
      { topic: "Expressões e contexto", text: "observar sinais e checar interpretações." },
      { topic: "Comportamentos e resultados", text: "reforçar na rotina o que sustenta a boa entrega." },
    ],
  },
  {
    label: "Excelência na rotina",
    items: [
      { topic: "Excelência é rotina", text: "fazer bem, conferir, corrigir e melhorar." },
      { topic: "Excelência não é perfeccionismo", text: "cuidar dos detalhes críticos para cliente, segurança e qualidade." },
      { topic: "Normalização do desvio", text: "não aceitar falhas só porque “sempre foi assim”." },
      { topic: "Valor para o cliente", text: "melhorar o essencial e eliminar desperdícios." },
    ],
  },
  {
    label: "Do problema à melhoria",
    items: [
      { topic: "Mapeamento e causa raiz", text: "entender o processo antes de culpar uma pessoa." },
      { topic: "Plano de ação", text: "definir responsáveis, prazos e verificar a solução." },
      { topic: "Padrão e qualidade na origem", text: "ensinar o normal, tratar desvios cedo e atualizar o padrão." },
      { topic: "Gestão visual e 5S", text: "organizar, tornar problemas visíveis e sustentar as melhorias." },
    ],
  },
];

export default function RecapitulacaoModuloDois() {
  return <RecapScreen
    title="Principais ideias do"
    emphasis="Módulo 2"
    subtitle="Comunicação e Excelência · O que aprendemos até aqui"
    screenNumber={20}
    previous={{ href: "/modulo-2/grupo-de-trabalho", label: "Grupo de Trabalho" }}
    next={{ href: "/modulo-2", label: "Início do Módulo 2" }}
    sections={sections}
  />;
}
