"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Camera } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function InstagramSection() {
  const instagramPostUrl = "https://www.instagram.com/p/DHXPuJwJxdn/";
  const instagramProfileUrl = "https://www.instagram.com/jlclima";

  return (
    <section id="instagram" className="py-20 bg-[#FFFBFC] text-[#0C1D32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-[#0C1D32] to-[#112742] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl"
        >
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#007AAD]/30 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-60 h-60 bg-[#D9E2E9]/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Text description */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#D9E2E9] text-xs font-semibold uppercase tracking-wider mb-4">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Canal Oficial</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Acompanhe nossos projetos no Instagram
              </h2>

              <p className="text-base text-[#D9E2E9]/85 leading-relaxed mb-6">
                Veja o dia a dia dos nossos técnicos em campo: instalações de sistemas
                Inverter, higienizações detalhadas, manutenções em refrigeradores e revisões
                elétricas com fotos e vídeos reais.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-[#D9E2E9] mb-8">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#007AAD]" />
                  Fotos reais de serviços
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#007AAD]" />
                  Dicas de uso e conservação
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#007AAD]" />
                  Transparência de ponta a ponta
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#007AAD] to-[#1693C7] text-white font-semibold text-sm shadow-md hover:opacity-95 transition-all"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Seguir @jlclima</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={instagramPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-sm font-medium border border-white/20 transition-colors"
                >
                  <span>Ver Publicação em Destaque</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Visual Instagram Card Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md p-5 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-[2px]">
                      <div className="w-full h-full rounded-full bg-[#0C1D32] flex items-center justify-center">
                        <Camera className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">@jlclima</p>
                      <p className="text-[10px] text-[#D9E2E9]/70">Pindamonhangaba & Marabá</p>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#007AAD] font-semibold">Oficial</span>
                </div>

                <div className="relative aspect-square rounded-xl overflow-hidden bg-[#081423] mb-3">
                  <Image
                    src="/images/hero-technician.jpg"
                    alt="Publicação oficial JL Clima no Instagram"
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                    <p className="text-xs text-white font-medium">
                      Atendimento especializado em climatização e refrigeração.
                    </p>
                  </div>
                </div>

                <a
                  href={instagramPostUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
                >
                  <span>Abrir post no Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
