"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, MapPin } from "lucide-react";

export function FinalCta() {
  const whatsappHref =
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20or%C3%A7amento%20t%C3%A9cnico%20sem%20compromisso%20com%20a%20JL%20Clima.";

  return (
    <section className="py-24 bg-[#0C1D32] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#007AAD]/25 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#D9E2E9]/20 text-[#D9E2E9] text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-[#007AAD]" />
          <span>Atendimento Ágil • Residencial & Comercial</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 text-balance"
        >
          Pronto para climatizar seu espaço ou reparar seus aparelhos com precisão técnica?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-[#D9E2E9]/85 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Solicite seu orçamento sem compromisso. Nossa equipe técnica está pronta para
          atender em Pindamonhangaba (SP) e Marabá (PA) com pontualidade e transparência.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#007AAD] text-white font-semibold text-base shadow-xl shadow-[#007AAD]/30 hover:bg-[#1693C7] transition-all group"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Falar com Técnico no WhatsApp</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#servicos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium text-base border border-white/15 transition-colors"
          >
            <span>Rever Serviços Atendidos</span>
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#D9E2E9]/75 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#007AAD]" />
            <span>Orçamento Transparente</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#007AAD]" />
            <span>Técnicos Capacitados</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#007AAD]" />
            <span>Pindamonhangaba (SP) & Marabá (PA)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
