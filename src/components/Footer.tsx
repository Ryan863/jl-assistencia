"use client";

import Link from "next/link";
import { Snowflake, Zap, MapPin, ArrowUp } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const instagramProfileUrl = "https://www.instagram.com/jlclima";
  const whatsappHref =
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico%20com%20a%20JL%20Clima.";

  return (
    <footer className="bg-[#081423] text-[#D9E2E9] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#007AAD] to-[#0C1D32] border border-[#007AAD]/40">
                <Snowflake className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                JL Clima
              </span>
            </div>

            <p className="text-sm text-[#D9E2E9]/75 leading-relaxed max-w-sm mb-6">
              Assistência técnica especializada em climatização, refrigeração e serviços elétricos
              residenciais e comerciais. Rigor técnico e pontualidade operacional.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-[#007AAD] flex items-center justify-center text-white hover:text-[#007AAD] transition-colors"
                aria-label="Instagram oficial da JL Clima"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <span className="text-xs text-[#D9E2E9]/70">@jlclima</span>
            </div>
          </div>

          {/* Servicos */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D9E2E9]/80">
              <li>Instalação & Manutenção de Ar-Condicionado</li>
              <li>Tecnologia Inverter & Higienização</li>
              <li>Manutenção de Geladeiras & Freezers</li>
              <li>Conserto de Bebedouros de Água</li>
              <li>Manutenção de Máquinas de Lavar</li>
              <li>Elétrica Residencial & Comercial</li>
            </ul>
          </div>

          {/* Endereço & Praças */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Bases de Atendimento
            </h4>
            <div className="space-y-3 text-xs text-[#D9E2E9]/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#007AAD] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Unidade São Paulo:</strong>
                  <span>Av. Dr. José Augusto Mesquita, 48</span>
                  <br />
                  <span>Moreira César, Pindamonhangaba - SP, CEP 12440-010</span>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#007AAD] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Unidade Pará:</strong>
                  <span>Atendimento técnico em Marabá (PA) e região</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9E2E9]/60">
          <p>© {new Date().getFullYear()} JL Clima. Todos os direitos reservados.</p>

          <div className="flex items-center gap-6">
            <a href="#servicos" className="hover:text-white transition-colors">
              Serviços
            </a>
            <a href="#atuacao" className="hover:text-white transition-colors">
              Atuação
            </a>
            <a href="#localizacao" className="hover:text-white transition-colors">
              Localização
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-white transition-colors ml-2"
              aria-label="Voltar ao topo"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
