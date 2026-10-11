"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Snowflake, Wrench, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export function Services() {
  const whatsappHref =
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico%20com%20a%20JL%20Clima.";

  const services = [
    {
      id: "ar-condicionado",
      icon: Snowflake,
      tag: "Alta Eficiência & Conforto Térmico",
      title: "Ar-Condicionado & Tecnologia Inverter",
      description:
        "Instalação técnica padronizada, higienização completa, recarga de gás refrigerante e manutenção preventiva e corretiva para sistemas residenciais e corporativos.",
      image: "/images/ac-service.jpg",
      imageAlt: "Instalação e manutenção técnica de ar-condicionado Inverter",
      highlights: [
        "Instalação técnica conforme diretrizes de fábrica",
        "Higienização com produtos específicos antibacterianos",
        "Carga e recomposição de fluido refrigerante (gás)",
        "Manutenção preventiva e corretiva para tecnologia Inverter",
      ],
      badge: "Sistemas Inverter",
    },
    {
      id: "linha-branca",
      icon: Wrench,
      tag: "Refrigeração & Lavadoras",
      title: "Linha Branca & Refrigeração",
      description:
        "Conserto e assistência especializada para geladeiras, freezers, bebedouros e lavadoras de roupa. Diagnóstico direto com reposição técnica confiável.",
      image: "/images/refrigeration-service.jpg",
      secondaryImage: "/images/washing-machine-service.jpg",
      imageAlt: "Manutenção técnica de geladeiras, freezers e máquinas de lavar",
      highlights: [
        "Manutenção preventiva e corretiva de geladeiras e freezers",
        "Reparo e higienização de bebedouros de água",
        "Manutenção técnica de máquinas de lavar roupas",
        "Diagnóstico de compressores, motores e placas eletrônicas",
      ],
      badge: "Geladeiras & Máquinas",
    },
    {
      id: "eletrica-geral",
      icon: Zap,
      tag: "Infraestrutura & Estabilidade",
      title: "Elétrica & Refrigeração Geral",
      description:
        "Suporte elétrico especializado para infraestrutura residencial e empresarial. Alimentação segura e estável para equipamentos de alta demanda térmica e refrigeração.",
      image: "/images/electrical-service.jpg",
      imageAlt: "Serviços elétricos e infraestrutura para ar-condicionado e refrigeração",
      highlights: [
        "Adequação de circuitos elétricos e disjuntores para ar-condicionado",
        "Revisão técnica de quadros de distribuição",
        "Infraestrutura elétrica para residências e comércios",
        "Conformidade e segurança operacional dos equipamentos",
      ],
      badge: "Residencial & Corporativo",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-[#FFFBFC] text-[#0C1D32] relative">
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#D9E2E9_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9E2E9]/40 border border-[#007AAD]/20 text-[#007AAD] text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Snowflake className="w-3.5 h-3.5" />
            <span>Engenharia Prática</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0C1D32] mb-4"
          >
            Soluções Técnicas & Especialidades
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#0C1D32]/70 leading-relaxed"
          >
            Atendimento rigoroso executado com ferramentas de precisão, preservando a vida útil e a máxima eficiência dos seus aparelhos.
          </motion.p>
        </div>

        {/* Services Editorial Grid */}
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group rounded-3xl bg-white border border-[#D9E2E9] shadow-sm hover:shadow-xl hover:border-[#007AAD]/40 transition-all duration-300 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center ${
                    isReversed ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Visual Content Column */}
                  <div
                    className={`lg:col-span-6 relative overflow-hidden rounded-2xl bg-[#0C1D32] ${
                      isReversed ? "lg:col-start-7" : ""
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0C1D32]/60 via-transparent to-transparent pointer-events-none" />

                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#0C1D32]/80 backdrop-blur-md border border-white/20 text-white text-xs font-medium flex items-center gap-1.5 shadow-md">
                        <Icon className="w-3.5 h-3.5 text-[#007AAD]" />
                        <span>{service.badge}</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Information Column */}
                  <div
                    className={`lg:col-span-6 flex flex-col justify-center ${
                      isReversed ? "lg:col-start-1" : ""
                    }`}
                  >
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#007AAD] mb-2">
                      {service.tag}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0C1D32] tracking-tight mb-4 group-hover:text-[#007AAD] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#0C1D32]/75 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-3 mb-8">
                      {service.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[#0C1D32]/85">
                          <CheckCircle2 className="w-4 h-4 text-[#007AAD] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Link */}
                    <div>
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0C1D32] text-white text-sm font-semibold hover:bg-[#007AAD] transition-colors shadow-sm group/btn"
                      >
                        <span>Solicitar Atendimento Técnico</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
