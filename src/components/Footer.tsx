import React from "react";
import Link from "next/link";
import Image from "next/image";

// Componentes SVG nativos para manter o minimalismo
const Linkedin = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-surface-border py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Branding & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <Link href="/">
            <Image
              src="/logo.png" // Ajusta para o nome exato do teu ficheiro na pasta public
              alt="ChatClean"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>
          <p className="text-zinc-500 text-xs tracking-wide">
            © {currentYear} ChatClean. Todos os direitos reservados.
          </p>
        </div>

        {/* Redes Sociais */}
        <div className="flex items-center gap-4">
          <a
            href="https://instagram.com/chatclean"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center hover:bg-brand-primary/10 hover:border-brand-primary/50 text-zinc-400 hover:text-brand-primary transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/company/chatclean"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-surface border border-surface-border flex items-center justify-center hover:bg-brand-primary/10 hover:border-brand-primary/50 text-zinc-400 hover:text-brand-primary transition-all duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
