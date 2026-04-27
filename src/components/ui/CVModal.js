"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function CVModal({ isOpen, onClose }) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-[90vh] glass rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-white/10"
          >
            {/* Header */}
            <div className="p-4 md:p-6 border-b border-white/10 flex items-center justify-between bg-surface-container/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">description</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface">Curriculum Vitae</h3>
                  <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Rayhan Touboui — 2026</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <a 
                  href="/assets/cv.pdf" 
                  download 
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-xs font-bold uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined text-sm">download</span>
                  Télécharger
                </a>
                <button 
                  onClick={onClose}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
                >
                  <span className="material-symbols-outlined text-on-surface-variant group-hover:text-on-surface">close</span>
                </button>
              </div>
            </div>

            {/* Content (PDF) */}
            <div className="flex-grow bg-[#525659]">
              <iframe 
                src="/assets/cv.pdf#toolbar=0&view=FitH" 
                className="w-full h-full border-none"
                title="Visualisation du CV"
              />
            </div>
            
            {/* Mobile Download Bar */}
            <div className="sm:hidden p-4 border-t border-white/10 bg-surface-container/50">
              <a 
                href="/assets/cv.pdf" 
                download 
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Télécharger le PDF
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
