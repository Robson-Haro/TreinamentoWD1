import type { Metadata } from "next";
import CertificateClient from "./CertificateClient";

export const metadata: Metadata = {
  title: "Certificados | Universidade Corporativa Grupo WD",
};

export default function CertificadosPage() {
  return <CertificateClient />;
}
