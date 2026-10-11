"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ShieldCheck, Star, MapPin, Zap } from "lucide-react";

export function Hero() {
  const whatsappHref =
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico%20com%20a%20JL%20Clima.";

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0C1D32] text-white pt-24 pb-16 overflow-hidden">
      {/* Background Graphic Integration with Mask Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Soft Radial Ambient Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#007AAD]/20 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#007AAD]/15 blur-[120px] rounded-full" />

        {/* Hero Background Photo Seamlessly Blended */}
        <div className="absolute inset-0 opacity-40 lg:opacity-50">
          <Image
            src="/images/hero-technician.jpg"
            alt="Técnico qualificado JL Clima realizando inspeção em ar-condicionado"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%] mask-hero-fade filter contrast-[1.05] brightness-[0.85]"
          />
        </div>

        {/* Gradient Overlays for Supreme Readability and Editorial Elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D32] via-[#0C1D32]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1D32] via-[#0C1D32]/75 to-[#0C1D32]/50" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Subtle Technical Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#D9E2E9]/20 backdrop-blur-md mb-6"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#007AAD] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#007AAD]"></span>
            </span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#D9E2E9]">
              Engenharia Térmica & Manutenção Especializada
            </span>
          </motion.div>

          {/* Primary High-Impact Editorial Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 text-balance"
          >
            Climatização precisa e{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D9E2E9] to-[#007AAD]">
              assistência técnica especializada.
            </span>
          </motion.h1>

          {/* Objective Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-lg sm:text-xl text-[#D9E2E9]/90 font-normal leading-relaxed max-w-2xl mb-10"
          >
            Instalação e manutenção de ar-condicionado, refrigeração e elétrica para
            residências e comércios em Pindamonhangaba e Marabá.
          </motion.p>

          {/* Call-to-Action Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14"
          >
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#007AAD] text-white font-semibold text-base shadow-xl shadow-[#007AAD]/30 hover:bg-[#1693C7] transition-all group"
            >
              <span>Solicitar Orçamento Técnico</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-base border border-white/15 backdrop-blur-sm transition-colors"
            >
              <span>Ver Soluções Técnicas</span>
            </motion.a>
          </motion.div>

          {/* Clean Trust Indicators Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10"
          >
            {/* Google Rating */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-xs font-semibold text-white">
                  <span>5.0 Estrelas</span>
                  <span className="text-[#D9E2E9]/60 font-normal">no Google</span>
                </div>
                <p className="text-[11px] text-[#D9E2E9]/70">Avaliação de Lucas Alves</p>
              </div>
            </div>

            {/* Operating Centers */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#007AAD]/20 border border-[#007AAD]/30 text-[#007AAD]">
                <MapPin className="w-4 h-4 text-[#D9E2E9]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Pindamonhangaba & Marabá</p>
                <p className="text-[11px] text-[#D9E2E9]/70">Bases em SP e PA</p>
              </div>
            </div>

            {/* Quality Standard */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">Tecnologia Inverter</p>
                <p className="text-[11px] text-[#D9E2E9]/70">Procedimentos padronizados</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-center pointer-events-none"
      >
        <span className="text-[11px] tracking-wider uppercase text-[#D9E2E9]/60 font-medium">
          Role para conhecer os serviços
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#007AAD]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
