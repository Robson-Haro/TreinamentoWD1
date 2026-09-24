import type { Metadata } from "next";
import "../../modulo-1/experience.css";
import WorkGroup from "./WorkGroup";

export const metadata: Metadata = {
  title: "Grupo de Trabalho | TreinamentoWD1",
  description: "Mapeamento, Causa Raiz e Plano de Ação. Atividade em grupos com cronômetro de 30 minutos.",
};

export default function GrupoDeTrabalho() {
  return <WorkGroup />;
}
