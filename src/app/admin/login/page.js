"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    // Redirects to the GitHub OAuth flow. If successful, redirects to /admin/dashboard
    await signIn("github", { callbackUrl: "/admin/dashboard" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"></div>
      </div>

      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest z-10">
        <span className="material-symbols-outlined text-sm">arrow_back</span>
        Retour
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass rounded-[32px] p-8 md:p-12 relative z-10 shadow-2xl border border-white/10"
      >
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-16 h-16 bg-surface-container rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/5">
            <span className="material-symbols-outlined text-3xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
          </div>
          <h1 className="text-3xl font-headline font-bold text-on-surface mb-2 tracking-tight">Accès Sécurisé</h1>
          <p className="text-sm font-body text-on-surface-variant leading-relaxed">
            Espace d'administration réservé. Authentification requise via GitHub pour accéder au Dashboard.
          </p>
        </div>

        <div className="space-y-6">
          <button
            onClick={handleLogin}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 bg-white text-black py-4 px-6 rounded-xl font-bold font-body transition-all hover:bg-gray-200 disabled:opacity-50 group"
          >
            {isLoading ? (
              <span className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin"></span>
            ) : (
              <>
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 100.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
                </svg>
                <span>Continuer avec GitHub</span>
              </>
            )}
          </button>
          
          <div className="flex items-center gap-2 justify-center text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">
            <span className="material-symbols-outlined text-xs text-green-400">lock</span>
            Secure OAuth 2.0
          </div>
        </div>
      </motion.div>
    </div>
  );
}
