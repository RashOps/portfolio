"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BotProvider, useBot } from "./bot/BotProvider";
import FloatingWidget from "./bot/FloatingWidget";
import SlideUpConsole from "./bot/SlideUpConsole";
import { profileService } from "@/lib/supabase-client";

function InnerLayout({ children }) {
  const pathname = usePathname();
  const { toggleConsole } = useBot();
  const [toast, setToast] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cvUrl, setCvUrl] = useState("/assets/cv.pdf");

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Fetch CV URL
  useEffect(() => {
    async function loadCV() {
      try {
        const profile = await profileService.getProfile();
        if (profile?.cv_url) {
          setCvUrl(profile.cv_url);
        }
      } catch (err) {
        console.error(err);
      }
    }
    loadCV();
  }, []);

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const navLinks = [
    { name: "Projets", path: "/mission-log", icon: "insights" },
    { name: "Stack", path: "/skill-tree", icon: "auto_awesome" },
    { name: "Parcours", path: "/timeline", icon: "work_history" },
    { name: "Playground", path: "/decrypt-demos", icon: "science" },
    { name: "Explorations", path: "/side-quests", icon: "explore" },
    { name: "À propos", path: "/operator-profile", icon: "person" },
  ];

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-pulse">
          <div className="glass rounded-xl px-6 py-3 shadow-lg shadow-primary/10">
            <span className="font-label text-sm tracking-wide text-primary font-medium">
              {toast}
            </span>
          </div>
        </div>
      )}

      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-surface/80 backdrop-blur-xl border-b border-white/5">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-on-surface p-2 hover:bg-white/5 rounded-lg active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Link href="/">
            <h1 className="font-headline text-xl font-bold gradient-text tracking-tight">
              Rayhan.
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 font-body text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-primary font-medium"
                  : "text-on-surface-variant hover:text-on-surface transition-colors"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => showToast("✨ Aucune notification pour le moment")} className="text-on-surface-variant hover:text-primary p-2 rounded-lg hover:bg-white/5 transition-all duration-150 active:scale-95">
            <span className="material-symbols-outlined text-xl">notifications</span>
          </button>
          <button onClick={toggleConsole} className="text-on-surface-variant hover:text-primary p-2 rounded-lg hover:bg-white/5 transition-all duration-150 active:scale-95">
            <span className="material-symbols-outlined text-xl">smart_toy</span>
          </button>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 z-40 flex-col bg-surface-container-low/50 backdrop-blur-xl border-r border-white/5 pt-20 hidden md:flex">
        <div className="px-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center">
              <span className="text-white font-headline font-bold text-sm">R</span>
            </div>
            <div>
              <p className="font-headline font-bold text-on-surface text-sm">Rayhan</p>
              <p className="font-body text-[11px] text-on-surface-variant">Data & AI Student</p>
            </div>
          </div>
        </div>

        <nav className="flex-grow flex flex-col gap-1 font-body text-sm overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={
                  isActive
                    ? "flex items-center gap-3 bg-primary/10 text-primary rounded-lg mx-3 px-4 py-2.5 font-medium transition-all duration-200"
                    : "flex items-center gap-3 text-on-surface-variant mx-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-on-surface transition-all duration-200"
                }
              >
                <span className="material-symbols-outlined text-lg">{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
          
          <div className="my-3 border-t border-white/5 mx-6"></div>
          
          <a href="https://www.linkedin.com/in/rayhan-touboui-machine-learning-powerbi-nlp-data-science" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-on-surface-variant mx-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-on-surface transition-all duration-200">
            <span className="material-symbols-outlined text-lg">hub</span>
            LinkedIn
          </a>
          <a href={cvUrl} download className="flex items-center gap-3 text-on-surface-variant mx-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-on-surface transition-all duration-200">
            <span className="material-symbols-outlined text-lg">download</span>
            Télécharger CV
          </a>
        </nav>

        <div className="px-6 mb-6">
          <button onClick={toggleConsole} className="w-full bg-gradient-to-r from-primary to-tertiary text-white font-headline font-bold text-xs py-3 rounded-lg tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            ✦ Demander à l'assistant
          </button>
        </div>

        <div className="mt-auto border-t border-white/5 py-3 flex flex-col gap-1 font-body text-sm">
          <button onClick={() => showToast("🔒 Accès restreint — Droits administrateur requis")} className="flex items-center gap-3 text-on-surface-variant mx-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-on-surface w-full text-left transition-all duration-200">
            <span className="material-symbols-outlined text-lg">settings</span>
            Paramètres
          </button>
          <button onClick={() => showToast("👋 Session active — Déconnexion impossible")} className="flex items-center gap-3 text-on-surface-variant mx-3 px-4 py-2.5 rounded-lg hover:bg-white/5 hover:text-on-surface w-full text-left transition-all duration-200">
            <span className="material-symbols-outlined text-lg">logout</span>
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-surface/80 backdrop-blur-md z-[60] md:hidden"
            />
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-screen w-[85%] max-w-xs z-[70] bg-surface-container-low border-r border-white/5 pt-20 flex flex-col md:hidden"
            >
              <nav className="flex-grow flex flex-col gap-1 font-body text-base overflow-y-auto">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      href={link.path}
                      className={
                        isActive
                          ? "flex items-center gap-4 bg-primary/10 text-primary rounded-lg mx-4 px-5 py-3.5 font-medium"
                          : "flex items-center gap-4 text-on-surface-variant mx-4 px-5 py-3.5 rounded-lg active:bg-white/5"
                      }
                    >
                      <span className="material-symbols-outlined text-xl">{link.icon}</span>
                      {link.name}
                    </Link>
                  );
                })}
                
                <div className="my-4 border-t border-white/5 mx-8"></div>
                
                <a href="https://www.linkedin.com/in/rayhan-seh-fred-touboui" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-on-surface-variant mx-4 px-5 py-3.5 rounded-lg">
                  <span className="material-symbols-outlined text-xl">hub</span>
                  LinkedIn
                </a>
                <a href={cvUrl} download className="flex items-center gap-4 text-on-surface-variant mx-4 px-5 py-3.5 rounded-lg">
                  <span className="material-symbols-outlined text-xl">download</span>
                  Télécharger CV
                </a>
              </nav>

              <div className="p-6 border-t border-white/5">
                <button onClick={toggleConsole} className="w-full bg-gradient-to-r from-primary to-tertiary text-white font-headline font-bold text-sm py-4 rounded-xl tracking-wide">
                  ✦ Assistant Atlas
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-16 min-h-screen relative">
        {children}
        
        {/* Global Footer */}
        <footer className="py-12 px-6 border-t border-white/5 mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <span className="font-headline font-bold text-lg gradient-text">Rayhan.</span>
              <div className="h-6 w-[1px] bg-white/10 hidden md:block"></div>
              <p className="font-body text-xs text-on-surface-variant">
                © 2026 — Conçu avec passion & intelligence artificielle
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://www.linkedin.com/in/rayhan-seh-fred-touboui" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="https://github.com/RashOps" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2.02 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.69 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 2Z" />
                </svg>
              </a>
              <a href="mailto:touboui.sehfredrayhan@gmail.com" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default function AppLayout({ children }) {
  return (
    <BotProvider>
      <InnerLayout>
        {children}
      </InnerLayout>
      <FloatingWidget />
      <SlideUpConsole />
    </BotProvider>
  );
}
