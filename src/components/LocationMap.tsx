"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, Shield, ExternalLink, ArrowRight } from "lucide-react";

export function LocationMap() {
  const addressQuery = encodeURIComponent(
    "Av. Dr. José Augusto Mesquita, 48 - Moreira César, Pindamonhangaba - SP, 12440-010"
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
  const whatsappHref =
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20visita%20t%C3%A9cnica%20em%20Pindamonhangaba.";

  return (
    <section id="localizacao" className="py-24 bg-[#0C1D32] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Information Column */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#D9E2E9]/20 text-[#D9E2E9] text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <MapPin className="w-3.5 h-3.5 text-[#007AAD]" />
              <span>Base São Paulo</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6"
            >
              Localização & Atendimento
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[#D9E2E9]/80 leading-relaxed mb-8"
            >
              Base estratégica localizada no distrito de Moreira César em Pindamonhangaba,
              garantindo rapidez no deslocamento para atendimentos residenciais, condomínios
              e estabelecimentos comerciais.
            </motion.p>

            <div className="space-y-4 mb-8">
              {/* Address card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#007AAD]/20 text-[#007AAD] shrink-0 mt-0.5">
                  <Navigation className="w-5 h-5 text-[#D9E2E9]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Endereço Oficial (Unidade SP)
                  </h4>
                  <p className="text-sm text-[#D9E2E9]/90 font-medium">
                    Av. Dr. José Augusto Mesquita, 48
                  </p>
                  <p className="text-xs text-[#D9E2E9]/70">
                    Moreira César, Pindamonhangaba - SP • CEP 12440-010
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#007AAD]/20 text-[#007AAD] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#D9E2E9]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    Horário de Atendimento
                  </h4>
                  <p className="text-sm text-[#D9E2E9]/90">
                    Segunda a Sábado — 08:00 às 18:00
                  </p>
                  <p className="text-xs text-[#D9E2E9]/70">
                    Agendamentos programados com pontualidade técnica
                  </p>
                </div>
              </div>
            </div>

            {/* Maps CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 transition-colors"
              >
                <span>Traçar Rota no Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#007AAD] hover:bg-[#1693C7] text-white font-semibold text-sm shadow-md transition-colors"
              >
                <span>Agendar Visita Técnica</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>

          {/* Interactive Map Graphic Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl bg-[#112742] border border-[#D9E2E9]/20 p-8 shadow-2xl overflow-hidden"
            >
              {/* Radial glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#007AAD]/20 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-ping" />
                  <span className="text-xs uppercase tracking-wider font-semibold text-white">
                    Ponto de Partida & Cobertura
                  </span>
                </div>
                <span className="text-xs text-[#D9E2E9]/70 font-mono">
                  SP-12440-010
                </span>
              </div>

              {/* Graphical Blueprint / Map visual element */}
              <div className="relative aspect-[16/10] rounded-2xl bg-[#081423] border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
                {/* Vector Grid Lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Radar pulse around location pin */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-24 h-24 rounded-full bg-[#007AAD]/20 animate-ping opacity-60" />
                    <span className="absolute w-16 h-16 rounded-full bg-[#007AAD]/40" />
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#007AAD] flex items-center justify-center text-white shadow-xl shadow-[#007AAD]/50 border-2 border-white">
                      <MapPin className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Bottom detail pill */}
                <div className="relative z-10 p-3 rounded-xl bg-[#0C1D32]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Moreira César • Pinda</p>
                    <p className="text-[11px] text-[#D9E2E9]/70">Atendimento a domicílio e empresas</p>
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#007AAD] hover:underline font-semibold"
                  >
                    Ver Mapa →
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-[#D9E2E9]/70">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  Atendimento oficial e verificado
                </span>
                <span>JL Clima • Assistência Técnica</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
