"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Cpu, Gauge, Clock, ArrowRight } from "lucide-react";

export function TechnicalAuthority() {
  const whatsappHref =
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico%20com%20a%20JL%20Clima.";

  const differentiators = [
    {
      icon: Gauge,
      title: "Instrumentação Calibrada",
      desc: "Uso de vacuômetro e manifold digital para precisão absoluta na carga de fluido refrigerante.",
    },
    {
      icon: Cpu,
      title: "Domínio da Tecnologia Inverter",
      desc: "Diagnóstico especializado em placas eletrônicas e compressores de frequência variável.",
    },
    {
      icon: ShieldCheck,
      title: "Transparência Diagnóstica",
      desc: "Identificação da causa raiz do problema sem trocas desnecessárias de peças.",
    },
    {
      icon: Clock,
      title: "Pontualidade & Compromisso",
      desc: "Horários agendados e cumprimento estrito dos prazos combinados com o cliente.",
    },
  ];

  return (
    <section className="py-24 bg-[#FFFBFC] text-[#0C1D32] relative overflow-hidden border-b border-[#D9E2E9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Montage (Inspired by Image 1) */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Primary Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-[#0C1D32] border border-[#D9E2E9]">
                <Image
                  src="/images/ac-service.jpg"
                  alt="Técnico da JL Clima calibrando ar-condicionado com instrumental de precisão"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D32]/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge (Like the 15+ years badge in reference Image 1) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-[#007AAD] text-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-xl shadow-[#007AAD]/30 border-2 border-white flex flex-col items-center justify-center text-center max-w-[180px]"
              >
                <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-white/90">
                  Rigor Técnico Padronizado
                </span>
              </motion.div>

              {/* Secondary Accent Graphic Box */}
              <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 bg-[#007AAD]/10 rounded-2xl -z-10 border border-[#007AAD]/20" />
            </motion.div>
          </div>

          {/* Right Column: Authority Text & Pillars */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9E2E9]/40 border border-[#007AAD]/20 text-[#007AAD] text-xs font-semibold uppercase tracking-wider mb-4"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Engenharia & Rigor</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0C1D32] mb-6 leading-tight"
            >
              Excelência prática em climatização e eletrodomésticos
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[#0C1D32]/75 leading-relaxed mb-8"
            >
              A <strong>JL Clima</strong> une ferramentas modernas e procedimentos padronizados para
              solucionar falhas térmicas e elétricas com rapidez, sem retrabalho e com respeito total
              às especificações do fabricante.
            </motion.p>

            {/* Differentiator grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {differentiators.map((diff, index) => {
                const Icon = diff.icon;
                return (
                  <motion.div
                    key={diff.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="p-4 rounded-2xl bg-white border border-[#D9E2E9] hover:border-[#007AAD]/40 transition-colors shadow-sm"
                  >
                    <div className="p-2 w-fit rounded-lg bg-[#007AAD]/10 text-[#007AAD] mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-[#0C1D32] mb-1">
                      {diff.title}
                    </h3>
                    <p className="text-xs text-[#0C1D32]/70 leading-relaxed">
                      {diff.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Action button */}
            <div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#007AAD] text-white font-semibold text-sm shadow-md shadow-[#007AAD]/25 hover:bg-[#1693C7] transition-all group"
              >
                <span>Solicitar Avaliação com Técnico</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
