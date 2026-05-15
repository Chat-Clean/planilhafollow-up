"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DownloadPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    celular: "",
    segmento: "",
    faturamento: "",
  });

  // Função para aplicar máscara de telefone (XX) XXXXX-XXXX
  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "celular") {
      setFormData({ ...formData, [name]: maskPhone(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validação: Verifica se o telefone tem o tamanho mínimo (11 dígitos numéricos)
    const onlyNumbers = formData.celular.replace(/\D/g, "");
    if (onlyNumbers.length < 11) {
      alert("Por favor, digite um número de WhatsApp válido com DDD.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Criamos uma cópia dos dados limpando o celular para enviar apenas NÚMEROS
      const dataToSubmit = {
        ...formData,
        celular: onlyNumbers, // Aqui removemos os () e - definitivamente
      };

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSubmit),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Erro ao salvar dados. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10 flex justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="ChatClean"
              width={180}
              height={45}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="bg-surface border border-surface-border rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          {!isSuccess ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-zinc-900 mb-2">
                  Quase lá!
                </h1>
                <p className="text-zinc-500 text-sm">
                  Preencha os dados para liberar a planilha.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
                    Nome completo
                  </label>
                  <input
                    required
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
                    WhatsApp (DDD + Número)
                  </label>
                  <input
                    required
                    type="tel"
                    name="celular"
                    value={formData.celular}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
                    Segmento da Empresa
                  </label>
                  <select
                    required
                    name="segmento"
                    value={formData.segmento}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 outline-none"
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="Tecnologia">Tecnologia</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Servicos">Serviços</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-zinc-700 mb-1.5">
                    Média de Faturamento
                  </label>
                  <select
                    required
                    name="faturamento"
                    value={formData.faturamento}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-zinc-900 outline-none"
                  >
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="Ate 10k">Até R$ 10k</option>
                    <option value="10k a 50k">R$ 10k - 50k</option>
                    <option value="Acima de 50k">Acima de R$ 50k</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2 bg-brand-primary hover:bg-brand-hover text-white font-bold py-4 rounded-xl transition-all flex justify-center items-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Validando..." : "Liberar Planilha"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-8"
            >
              <CheckCircle2 className="w-16 h-16 text-brand-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                Sucesso!
              </h2>
              <p className="text-zinc-600 mb-8">
                Clique abaixo para acessar sua cópia.
              </p>
              <a
                href="LINK_DA_SUA_PLANILHA"
                target="_blank"
                className="w-full bg-zinc-900 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Baixar Agora
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
