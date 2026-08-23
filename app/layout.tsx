import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TreinamentoWD1 | Jornada de Liderança",
  description: "Jornada de aprimoramento e qualificação da liderança do Grupo WD, em parceria com a Ramos Consultoria.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
