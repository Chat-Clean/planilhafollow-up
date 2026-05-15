"use client";

import React, { MouseEvent, useRef } from "react";
import { Users, TrendingUp, Zap, Target } from "lucide-react";
import { FadeUp } from "./ui/FadeUp";

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Gestão de Leads",
    desc: "Acompanhe cada contato desde a primeira mensagem até o fechamento.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Dashboard Visual",
    desc: "Entenda suas taxas de conversão e faturamento com gráficos claros.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Pronto para Uso",
    desc: "Sem configurações complexas. Faça uma cópia e comece a usar em 1 minuto.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Foco no CRM",
    desc: "A base perfeita para estruturar seu funil antes de ir para ferramentas caras.",
  },
];

function FeatureCard({ feature }: { feature: any }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative bg-surface border border-surface-border rounded-2xl p-8 overflow-hidden shadow-sm hover:shadow-md transition-all"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(400px circle at var(--x) var(--y), rgba(16,185,129,0.08), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-white border border-surface-border flex items-center justify-center mb-6 text-zinc-800 group-hover:scale-110 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all shadow-sm">
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-zinc-900 mb-3">
          {feature.title}
        </h3>
        <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
      </div>
    </div>
  );
}

export function Features() {
  return (
    <section className="py-24 bg-background relative z-20">
      <div className="max-w-4xl mx-auto px-6">
        <FadeUp className="mb-16">
          {/* Título alterado: sem fundo verde, texto preto/escuro */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-900 mb-4 tracking-tight">
            O que você vai encontrar na planilha?
          </h2>
          <p className="text-zinc-500 text-lg">
            A estrutura exata que os maiores players usam para organizar vendas.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <FeatureCard feature={feature} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
