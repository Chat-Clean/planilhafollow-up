"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, BarChart3, ChevronRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-[100%] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-border mb-8 shadow-sm"
        >
          <BarChart3 className="w-4 h-4 text-brand-primary" />
          <span className="text-sm text-zinc-700 font-semibold">
            Planilha de Gestão 100% Gratuita
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-zinc-900 max-w-4xl leading-[1.1]"
        >
          Assuma o controle total do seu negócio com{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-500">
            precisão.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-zinc-600 max-w-2xl font-light"
        >
          Dê o play no vídeo abaixo para entender como essa ferramenta gratuita
          vai organizar seus dados e fluxos de atendimento de forma definitiva.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 w-full max-w-5xl aspect-video bg-surface rounded-2xl md:rounded-[2rem] border border-surface-border shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-2 md:p-4 relative group"
        >
          <div className="w-full h-full bg-zinc-100 rounded-xl md:rounded-2xl overflow-hidden relative flex items-center justify-center border border-surface-border/50">
            <video
              ref={videoRef}
              src="/video.mp4"
              className="w-full h-full object-cover bg-zinc-900"
              controls={isPlaying}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              preload="metadata"
            />

            {!isPlaying && (
              <div
                className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
                onClick={handlePlayVideo}
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

                <div className="relative w-20 h-20 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_8px_30px_var(--color-brand-light)] group-hover:scale-110 transition-transform duration-300">
                  <Play className="text-white w-8 h-8 ml-1 fill-white" />
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center gap-4 flex-col sm:flex-row"
        >
          <Link
            href="/download"
            className="group flex items-center gap-2 bg-brand-primary hover:bg-brand-hover text-white font-semibold py-4 px-10 rounded-xl transition-all shadow-[0_10px_20px_var(--color-brand-light)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)] text-lg"
          >
            Baixar Planilha Gratuita
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
