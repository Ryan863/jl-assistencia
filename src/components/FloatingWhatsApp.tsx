"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappHref =
    "https://wa.me/?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20t%C3%A9cnico%20com%20a%20JL%20Clima.";

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip / Badge for Desktop */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden sm:flex items-center px-3.5 py-1.5 rounded-full bg-[#0C1D32]/90 backdrop-blur-md border border-[#D9E2E9]/20 shadow-lg text-white text-xs font-semibold"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2" />
        <span>Orçamento Rápido</span>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com a JL Clima"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 hover:bg-[#20bd5a] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        {/* Radar ping ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-transparent relative z-10" />
      </motion.a>
    </aside>
  );
}
