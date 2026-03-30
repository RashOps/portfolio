"use client";

import { motion } from "framer-motion";
import { useBot } from "./BotProvider";
import { BOT_NAME } from "@/lib/bot-knowledge";

export default function FloatingWidget() {
  const { toggleConsole, isOpen } = useBot();

  // Si la console est ouverte, on cache le widget pour ne pas encombrer l'écran
  if (isOpen) return null;

  return (
    <motion.button
      onClick={toggleConsole}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 bg-[#0e0e0e] border border-[#cafd00] hover:bg-[#cafd00]/10 p-4 rounded-full shadow-[0_0_20px_rgba(202,253,0,0.3)] flex items-center justify-center group"
    >
      <div className="relative flex items-center justify-center">
        {/* Effet Sonar/Radar en arrière plan */}
        <span className="absolute w-full h-full bg-[#cafd00] rounded-full opacity-20 animate-ping"></span>
        
        {/* Icône du Terminal Center */}
        <span className="material-symbols-outlined text-[#cafd00] text-3xl z-10">smart_toy</span>
      </div>
      
      {/* Tooltip Hover "Need Backup?" */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-[#cafd00] border border-[#cafd00]/30 text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity rounded">
        {BOT_NAME} // SYSTEM_READY
      </span>
    </motion.button>
  );
}
