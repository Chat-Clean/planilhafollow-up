"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // O botão aparece após passar a primeira dobra (Hero)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 80, opacity: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-8 left-1/2 z-[100] w-[90%] sm:w-auto"
        >
          <Link
            href="/download"
            className="group flex w-full justify-center items-center gap-2 bg-brand-primary hover:bg-brand-hover text-white font-semibold py-4 px-8 rounded-xl transition-all shadow-[0_0_20px_var(--color-brand-light)] hover:shadow-[0_0_30px_var(--color-brand-primary)]"
          >
            Baixar Planilha Gratuita
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
