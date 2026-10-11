"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle, Quote, ThumbsUp } from "lucide-react";

export function SocialProof() {
  return (
    <section id="avaliacoes" className="py-20 bg-[#FFFBFC] text-[#0C1D32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9E2E9]/40 border border-[#007AAD]/20 text-[#007AAD] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Star className="w-3.5 h-3.5 fill-[#007AAD]" />
            <span>Satisfação Comprovada</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1D32] mb-3"
          >
            Avaliação no Google
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#0C1D32]/70"
          >
            Compromisso real com a pontualidade, excelência de mão de obra e transparência técnica.
          </motion.p>
        </div>

        {/* Central Editorial Testimonial Card */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl bg-white border border-[#D9E2E9] p-8 sm:p-10 shadow-lg shadow-black/[0.04] overflow-hidden"
          >
            {/* Soft subtle glow accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#007AAD]/5 rounded-bl-full pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              {/* Google Verified Indicator */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0C1D32] flex items-center justify-center text-white font-bold text-xs">
                  G
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#0C1D32]">
                    Google Avaliações
                  </span>
                  <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Avaliação Verificada
                  </span>
                </div>
              </div>

              {/* 5 Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Quote Body */}
            <div className="relative mb-6">
              <Quote className="w-8 h-8 text-[#D9E2E9] absolute -top-3 -left-2 -z-0 opacity-40" />
              <p className="relative z-10 text-base sm:text-lg text-[#0C1D32] font-medium leading-relaxed italic">
                “Excelente atendimento e prestação de serviço técnico de alta qualidade.
                Pontualidade no horário marcado e precisão no conserto.”
              </p>
            </div>

            {/* Author details */}
            <div className="flex items-center justify-between pt-4 border-t border-[#D9E2E9]/60">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007AAD] to-[#0C1D32] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  LA
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0C1D32]">Lucas Alves</h4>
                  <p className="text-xs text-[#0C1D32]/60">Cliente Google Avaliações</p>
                </div>
              </div>

              <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#007AAD] bg-[#007AAD]/10 px-2.5 py-1 rounded-full">
                <ThumbsUp className="w-3.5 h-3.5" />
                <span>5 / 5 Estrelas</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
