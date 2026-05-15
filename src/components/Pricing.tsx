"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { FadeUp } from "./ui/FadeUp";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section
      className="py-32 bg-background relative overflow-hidden"
      id="pricing"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-rocket-purple/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rocket-purple font-bold tracking-wider uppercase text-sm mb-4 block">
            Oferta Especial
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            O investimento para a sua fluência
          </h2>
          <p className="text-xl text-zinc-400">
            Acesso à plataforma completa. Aprenda no seu tempo, com a
            metodologia que já aprovou milhares de devs.
          </p>
        </FadeUp>

        {/* Toggle Mensal/Anual */}
        <FadeUp delay={0.2} className="flex justify-center mb-12">
          <div className="bg-rocket-shape p-1 rounded-full inline-flex border border-zinc-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`relative px-8 py-3 rounded-full text-sm font-bold transition-colors ${!isAnnual ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              {!isAnnual && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-zinc-800 rounded-full"
                />
              )}
              <span className="relative z-10">Mensal</span>
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`relative px-8 py-3 rounded-full text-sm font-bold transition-colors flex items-center gap-2 ${isAnnual ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}
            >
              {isAnnual && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 bg-rocket-purple rounded-full shadow-[0_0_15px_rgba(130,87,229,0.3)]"
                />
              )}
              <span className="relative z-10">Anual</span>
              <span className="relative z-10 text-[10px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full uppercase tracking-wider">
                -50%
              </span>
            </button>
          </div>
        </FadeUp>

        {/* Card Único de Oferta */}
        <FadeUp delay={0.4}>
          <div className="relative bg-rocket-dark border border-rocket-purple rounded-3xl p-1 shadow-[0_0_40px_rgba(130,87,229,0.15)] max-w-3xl mx-auto overflow-hidden">
            {/* Linha brilhante superior */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-rocket-purple to-transparent opacity-50" />

            <div className="bg-background rounded-[23px] p-8 md:p-12 border border-zinc-900 flex flex-col md:flex-row gap-12 relative z-10">
              {/* Esquerda: Preço e CTA */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-rocket-purple font-bold mb-6">
                  <Sparkles className="w-5 h-5" />
                  Plano Pro
                </div>

                <div className="mb-2 flex items-center gap-3">
                  <span className="text-zinc-500 line-through text-lg">
                    {isAnnual ? "R$ 1.164" : "R$ 147"}
                  </span>
                </div>

                <div className="flex items-baseline text-white mb-8">
                  <span className="text-sm font-bold mr-1">R$</span>
                  <span className="text-6xl font-extrabold tracking-tighter">
                    {isAnnual ? "47" : "97"}
                  </span>
                  <span className="text-zinc-500 font-medium ml-2">
                    {isAnnual ? "/mês (cobrado anualmente)" : "/mês"}
                  </span>
                </div>

                <button className="w-full bg-rocket-purple hover:bg-[#996DFF] text-white font-bold py-5 px-6 rounded-xl text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(130,87,229,0.4)] flex justify-center items-center">
                  Garantir minha vaga agora
                </button>
                <p className="text-center text-xs text-zinc-500 mt-4">
                  Garantia incondicional de 7 dias.
                </p>
              </div>

              {/* Direita: Features */}
              <div className="flex-1 md:border-l md:border-zinc-800 md:pl-12">
                <h4 className="text-white font-bold mb-6 text-lg">
                  O que está incluso:
                </h4>
                <ul className="space-y-4">
                  {[
                    "Acesso vitalício ao material de apoio",
                    "Aulas de conversação imersivas",
                    "Vocabulário técnico para entrevistas",
                    "Mentoria em grupo (Apenas Anual)",
                    "Suporte no Discord",
                    "Certificado de proficiência técnica",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-start ${!isAnnual && feature.includes("Anual") ? "opacity-40 grayscale" : "text-zinc-300"}`}
                    >
                      <Check className="h-5 w-5 text-rocket-purple shrink-0 mr-3 mt-0.5" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
