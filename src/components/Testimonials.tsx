"use client";

import React from "react";
import { Star } from "lucide-react";
import { FadeUp } from "./ui/FadeUp";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Dono de Agência",
    text: "Antes dessa planilha, eu perdia horas tentando cruzar dados de clientes e faturamento. Agora tenho uma visão clara do meu negócio em 5 minutos por dia. Mudou o jogo por aqui.",
  },
  {
    name: "Mariana Costa",
    role: "Gerente Comercial",
    text: "A estrutura de acompanhamento é sensacional. Paramos de perder vendas por esquecer de retornar clientes. É simples, direta ao ponto e superou sistemas pagos que já tentamos usar.",
  },
  {
    name: "Roberto Almeida",
    role: "CEO de E-commerce",
    text: "Ter clareza sobre as métricas de conversão e entradas me ajudou a identificar gargalos na mesma semana. Impressionante como um material gratuito entregou tanto valor para a operação.",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Quem já assumiu o controle
          </h2>
          <p className="text-zinc-600">
            Mais de 500+ empresas confiam nessa planilha. Histórias reais de gestores e empreendedores que organizaram a casa.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={index * 0.15}>
              <div className="bg-surface p-8 rounded-2xl border border-surface-border hover:border-brand-primary/30 transition-colors shadow-sm h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-brand-primary text-brand-primary"
                    />
                  ))}
                </div>

                <p className="text-zinc-600 mb-8 italic leading-relaxed flex-1">
                  "{item.text}"
                </p>

                <div className="mt-auto pt-6 border-t border-surface-border">
                  <strong className="block text-zinc-900 font-bold">
                    {item.name}
                  </strong>
                  <span className="text-sm text-zinc-500">{item.role}</span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
