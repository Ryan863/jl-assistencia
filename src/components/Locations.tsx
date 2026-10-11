"use client";

import { motion } from "framer-motion";
import { MapPin, Building2, Home, Check, Navigation, ArrowUpRight } from "lucide-react";

export function Locations() {
  const whatsappHref =
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico%20com%20a%20JL%20Clima.";

  return (
    <section id="atuacao" className="py-24 bg-[#0C1D32] text-white relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#007AAD]/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#007AAD]/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D9E2E9]/20 text-[#D9E2E9] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MapPin className="w-3.5 h-3.5 text-[#007AAD]" />
            <span>Praças de Operação</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Cidades Atendidas
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#D9E2E9]/80 leading-relaxed"
          >
            Estrutura técnica preparada para mobilização ágil e atendimento residencial e comercial em São Paulo e no Pará.
          </motion.p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Pindamonhangaba - SP */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-[#112742]/80 border border-[#D9E2E9]/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#007AAD]/50 transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#007AAD]/20 border border-[#007AAD]/40 text-[#007AAD] text-xs font-semibold uppercase tracking-wider">
                  São Paulo • Sede Operacional
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento Ativo
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Pindamonhangaba (SP)
              </h3>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-[#007AAD] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#D9E2E9]/60 uppercase tracking-wider font-semibold">
                      Endereço da Unidade
                    </p>
                    <p className="text-sm sm:text-base font-medium text-white">
                      Av. Dr. José Augusto Mesquita, 48
                    </p>
                    <p className="text-xs text-[#D9E2E9]/80">
                      Moreira César, Pindamonhangaba - SP, CEP 12440-010
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-[#D9E2E9]/90">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#007AAD]" />
                  <span>Instalação técnica e manutenção em residências e condomínios</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#007AAD]" />
                  <span>Suporte a comércios, clínicas e empresas locais</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#007AAD]" />
                  <span>Visitas técnicas programadas e atendimento de emergência</span>
                </li>
              </ul>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#007AAD] text-white font-semibold text-sm shadow-md hover:bg-[#1693C7] transition-colors"
            >
              <span>Solicitar Atendimento em Pindamonhangaba</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>

          {/* Card 2: Marabá - PA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl bg-[#112742]/80 border border-[#D9E2E9]/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#007AAD]/50 transition-colors shadow-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                  Pará • Base Técnica
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Atendimento Ativo
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Marabá (PA)
              </h3>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#007AAD] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-[#D9E2E9]/60 uppercase tracking-wider font-semibold">
                      Cobertura Técnica Regional
                    </p>
                    <p className="text-sm sm:text-base font-medium text-white">
                      Marabá e Região Metropolitana
                    </p>
                    <p className="text-xs text-[#D9E2E9]/80">
                      Assistência técnica em climatização, refrigeração e elétrica
                    </p>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-8 text-sm text-[#D9E2E9]/90">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#007AAD]" />
                  <span>Manutenção em ar-condicionado residencial e comercial</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#007AAD]" />
                  <span>Reparo em freezers, geladeiras, bebedouros e lavadoras</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#007AAD]" />
                  <span>Equipe capacitada para demandas de alta temperatura local</span>
                </li>
              </ul>
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-colors"
            >
              <span>Solicitar Atendimento em Marabá</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
