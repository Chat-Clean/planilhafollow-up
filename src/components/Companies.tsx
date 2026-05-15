"use client";
import { FadeUp } from "./ui/FadeUp";

export function Companies() {
  const segments = [
    "E-commerce",
    "SaaS & Tech",
    "Serviços B2B",
    "Infoprodutos",
    "Agências",
    "Clínicas",
  ];

  return (
    <section className="py-12 border-y border-zinc-900 bg-background/50 overflow-hidden">
      <FadeUp delay={0.1} className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-zinc-500 mb-8 uppercase tracking-widest">
          Metodologia de gestão validada por empresas de diversos setores
        </p>
        <div className="flex gap-12 items-center justify-center flex-wrap opacity-60">
          {segments.map((item) => (
            <span key={item} className="text-xl font-bold text-zinc-400">
              {item}
            </span>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
