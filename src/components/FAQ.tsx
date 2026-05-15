"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "./ui/FadeUp";

const faqs = [
  {
    question: "A planilha é realmente 100% gratuita?",
    answer:
      "Sim! Nosso objetivo é ajudar empreendedores e gestores a organizarem seus processos de forma rápida. Não há cobranças ocultas ou pegadinhas.",
  },
  {
    question: "Preciso ter conhecimento avançado em Excel/Google Sheets?",
    answer:
      "De forma alguma. A planilha foi estruturada para ser intuitiva e pronta para uso (plug-and-play). Basta preencher com as informações do seu negócio e os painéis farão o resto.",
  },
  {
    question: "Posso personalizar a planilha para a minha empresa?",
    answer:
      "Com certeza. Assim que você fizer o download ou a cópia para o seu Google Drive, o arquivo será totalmente seu. Você pode adicionar colunas, mudar cores e adaptar conforme a sua necessidade.",
  },
  {
    question: "Como vou receber o acesso ao material?",
    answer:
      "Logo após preencher o formulário rápido com seus dados, você será redirecionado para a página de sucesso com o link de acesso imediato. Você também pode receber uma cópia no seu WhatsApp dependendo da automação ativa.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative border-t border-surface-border">
      <div className="max-w-3xl mx-auto px-6">
        <FadeUp className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">
            Dúvidas frequentes
          </h2>
          <p className="text-zinc-600">
            Respostas rápidas para você baixar seu material sem receios.
          </p>
        </FadeUp>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="border border-surface-border rounded-2xl overflow-hidden bg-surface shadow-sm hover:border-surface-border/80 transition-colors">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left flex items-center justify-between transition-colors focus:outline-none"
                >
                  <span className="font-bold text-zinc-800">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-zinc-600 leading-relaxed border-t border-surface-border pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
