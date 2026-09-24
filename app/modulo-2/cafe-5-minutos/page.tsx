import type { Metadata } from "next";
import "../../modulo-1/experience.css";
import CoffeeBreak from "./CoffeeBreak";

export const metadata: Metadata = {
  title: "5 minutos de café | TreinamentoWD1",
  description: "Uma pausa de cinco minutos com o Grupo WD e a Ramos Consultoria.",
};

export default function CafeCincoMinutos() {
  return <CoffeeBreak />;
}
