import type { Metadata } from "next";
import UniversityClient from "./UniversityClient";

export const metadata: Metadata = {
  title: "Universidade Corporativa Grupo WD",
  description: "Jornada do Conhecimento do Grupo WD.",
};

export default function UniversidadePage() {
  return <UniversityClient />;
}
