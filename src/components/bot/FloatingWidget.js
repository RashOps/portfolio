"use client";

import { motion } from "framer-motion";
import { useBot } from "./BotProvider";
import { BOT_NAME } from "@/lib/bot-knowledge";

export default function FloatingWidget() {
  const { toggleConsole, isOpen } = useBot();

  if (isOpen) return null;

  return (
    <motion.button
      onClick={toggleConsole}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 glass hover:bg-white/10 p-4 rounded-full shadow-lg shadow-primary/10 flex items-center justify-center group border border-primary/20"
    >
      <div className="relative flex items-center justify-center">
        {/* Ping effect */}
        <span className="absolute w-full h-full bg-primary rounded-full opacity-20 animate-ping"></span>
        
        {/* Icon */}
        <span className="material-symbols-outlined text-primary text-3xl z-10">smart_toy</span>
      </div>
      
      {/* Tooltip */}
      <span className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 glass rounded-lg text-primary text-xs font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        ✦ {BOT_NAME} — Assistant IA
      </span>
    </motion.button>
  );
}
