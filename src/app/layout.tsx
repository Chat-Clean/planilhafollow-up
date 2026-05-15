import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Planilha de Gestão e Escala",
  description:
    "Baixe gratuitamente a planilha definitiva para controle de leads e faturamento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
