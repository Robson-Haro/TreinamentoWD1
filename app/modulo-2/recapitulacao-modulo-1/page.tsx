import type { Metadata } from "next";
import "../../modulo-1/experience.css";
import RecapScreen from "../_components/RecapScreen";

export const metadata: Metadata = {
  title: "Vamos recapitular o treinamento passado | TreinamentoWD1",
  description: "As principais ideias do Módulo 1: autoconhecimento, atenção, liderança pelo exemplo, desenvolvimento e decisões responsáveis.",
};

import { moduleOneSections as sections } from "../_components/moduleOneRecap";

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
