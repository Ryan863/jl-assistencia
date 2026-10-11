"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Snowflake, Zap, Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Serviços", href: "#servicos" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Localização", href: "#localizacao" },
    { label: "Instagram", href: "#instagram" },
  ];

  const whatsappHref = "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico%20com%20a%20JL%20Clima.";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0C1D32]/90 backdrop-blur-md border-b border-[#D9E2E9]/10 shadow-lg shadow-black/20 py-3.5"
          : "bg-gradient-to-b from-[#0C1D32]/80 via-[#0C1D32]/40 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#007AAD] to-[#0C1D32] border border-[#007AAD]/40 shadow-sm shadow-[#007AAD]/30 group-hover:scale-105 transition-transform duration-200">
              <Snowflake className="w-5 h-5 text-white" />
              <Zap className="w-3 h-3 text-[#D9E2E9] absolute -bottom-0.5 -right-0.5 fill-[#007AAD]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                JL Clima
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#007AAD] animate-pulse" />
              </span>
              <span className="text-[10px] tracking-wider uppercase font-medium text-[#D9E2E9]/70 -mt-1">
                Climatização & Elétrica
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#D9E2E9]/80 hover:text-white transition-colors duration-150 relative py-1 hover:after:w-full after:w-0 after:h-[2px] after:bg-[#007AAD] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#D9E2E9]/15 text-xs text-[#D9E2E9]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>SP & PA</span>
            </div>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#007AAD] text-white text-sm font-semibold shadow-md shadow-[#007AAD]/25 hover:bg-[#1693C7] transition-colors"
            >
              <span>Solicitar Orçamento</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <motion.a
              whileTap={{ scale: 0.96 }}
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#007AAD] text-white"
            >
              Orçamento
            </motion.a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#D9E2E9] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0C1D32]/95 backdrop-blur-xl border-b border-[#D9E2E9]/10 px-4 py-5"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-[#D9E2E9] hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 mt-1">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#007AAD] text-white font-semibold text-sm shadow-md shadow-[#007AAD]/30"
                >
                  <span>Solicitar Orçamento no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
