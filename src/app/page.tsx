import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Companies } from "../components/Companies";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { FloatingCTA } from "../components/FloatingCTA"; // Importando o botão

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans relative pb-20 md:pb-0">
      {/* pb-20 no mobile impede que o footer fique escondido atrás do botão flutuante */}

      <Header />
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />

      {/* Botão Flutuante Injetado Aqui */}
      <FloatingCTA />
    </main>
  );
}
