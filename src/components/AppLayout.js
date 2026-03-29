"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppLayout({ children }) {
  const pathname = usePathname();

  const navLinks = [
    { name: "MISSION_LOG", path: "/mission-log", icon: "assignment" },
    { name: "SKILL_TREE", path: "/skill-tree", icon: "account_tree" },
    { name: "EXPERIENCE_TIMELINE", path: "/timeline", icon: "timeline" },
    { name: "DECRYPT_DEMOS", path: "/decrypt-demos", icon: "enhanced_encryption" },
    { name: "SIDE_QUESTS", path: "/side-quests", icon: "explore" },
    { name: "DOSSIER", path: "/operator-profile", icon: "badge" },
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#0e0e0e] border-b border-[#cafd00]/10">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h1 className="font-['Space_Grotesk'] uppercase tracking-tighter text-xl font-bold text-[#cafd00] drop-shadow-[0_0_8px_rgba(202,253,0,0.5)]">
              KINETIC_TERMINAL_V1.0
            </h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 font-['Space_Grotesk'] uppercase tracking-tighter text-[11px]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                pathname === link.path
                  ? "text-[#cafd00] border-b-2 border-[#cafd00] pb-1"
                  : "text-[#ababab] hover:text-[#f3ffca] transition-colors"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-[#cafd00] hover:bg-[#cafd00]/5 hover:text-[#cafd00] p-2 transition-transform duration-150 active:scale-95">
            <span className="material-symbols-outlined">notifications_active</span>
          </button>
          <button className="text-[#cafd00] hover:bg-[#cafd00]/5 hover:text-[#cafd00] p-2 transition-transform duration-150 active:scale-95">
            <span className="material-symbols-outlined">terminal</span>
          </button>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-screen w-64 z-40 flex-col bg-[#131313] border-r border-[#cafd00]/10 pt-20 hidden md:flex">
        <div className="px-6 mb-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-surface-container-high flex items-center justify-center border border-[#cafd00]/20">
              <span className="material-symbols-outlined text-[#cafd00] text-xl">person</span>
            </div>
            <div>
              <p className="font-['Space_Grotesk'] font-black text-[#cafd00] text-sm tracking-tighter">OPERATOR_01</p>
              <p className="font-['Space_Grotesk'] text-[10px] text-secondary tracking-widest uppercase">SYSTEM_STABLE_V1</p>
            </div>
          </div>
        </div>

        <nav className="flex-grow flex flex-col gap-1 font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase overflow-y-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={
                  isActive
                    ? "flex items-center gap-3 bg-[#cafd00]/10 text-[#cafd00] border-l-4 border-[#cafd00] px-4 py-3 hover:shadow-[0_0_10px_rgba(202,253,0,0.2)] transition-all duration-200"
                    : "flex items-center gap-3 text-[#ababab] px-4 py-3 hover:bg-[#191919] hover:text-[#cafd00] transition-all duration-200"
                }
              >
                <span className="material-symbols-outlined text-sm">{link.icon}</span>
                {link.name}
              </Link>
            );
          })}
          
          <div className="my-4 border-t border-[#cafd00]/5 mx-4"></div>
          
          <Link href="#" className="flex items-center gap-3 text-[#ababab] px-4 py-3 hover:bg-[#191919] hover:text-[#cafd00] transition-all duration-200">
            <span className="material-symbols-outlined text-sm">security</span>
            Root access
          </Link>
          <Link href="#" className="flex items-center gap-3 text-[#ababab] px-4 py-3 hover:bg-[#191919] hover:text-[#cafd00] transition-all duration-200">
            <span className="material-symbols-outlined text-sm">database</span>
            Data Vault
          </Link>
        </nav>

        <div className="px-6 mb-6">
          <button className="w-full bg-[#cafd00] text-[#0e0e0e] font-['Space_Grotesk'] font-bold text-[10px] py-3 tracking-widest hover:shadow-[0_0_15px_rgba(202,253,0,0.4)] transition-all active:scale-95">
            INITIALIZE_PHASE_2
          </button>
        </div>

        <div className="mt-auto border-t border-[#cafd00]/10 py-4 flex flex-col gap-1 font-['Space_Grotesk'] text-[10px] tracking-[0.2em] uppercase">
          <Link href="#" className="flex items-center gap-3 text-[#ababab] px-4 py-3 hover:bg-[#191919] hover:text-[#cafd00] transition-all duration-200">
            <span className="material-symbols-outlined text-sm">settings</span>
            Settings
          </Link>
          <Link href="#" className="flex items-center gap-3 text-[#ababab] px-4 py-3 hover:bg-[#191919] hover:text-[#cafd00] transition-all duration-200">
            <span className="material-symbols-outlined text-sm">logout</span>
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-16 min-h-screen relative scanline-bg">
        {children}
        
        {/* Global Footer / System Shutdown */}
        <footer className="py-12 px-6 border-t border-[#191919] bg-surface mt-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <span className="font-headline font-black text-xl text-primary opacity-50">KINETIC_TERMINAL_V1.0</span>
              <div className="h-8 w-[1px] bg-outline-variant/20 hidden md:block"></div>
              <p className="font-label text-[10px] text-on-surface-variant uppercase tracking-[0.2em]">
                © 2026 TERMINAL_SESSION_01 // ALL_RIGHTS_ENCRYPTED
              </p>
            </div>
            <div className="flex items-center gap-8">
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">public</span>
              </Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">code</span>
              </Link>
              <Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </Link>
            </div>
          </div>
        </footer>
      </main>

      {/* UI Elements Overlay */}
      <div className="fixed top-24 right-6 z-50 pointer-events-none hidden lg:block">
        <div className="flex flex-col items-end gap-2">
          <div className="bg-primary/5 border border-primary/20 p-2 backdrop-blur-md">
            <p className="font-label text-[8px] text-primary mb-1">LATENCY</p>
            <p className="font-headline font-bold text-xs">12MS</p>
          </div>
          <div className="bg-secondary/5 border border-secondary/20 p-2 backdrop-blur-md">
            <p className="font-label text-[8px] text-secondary mb-1">UPTIME</p>
            <p className="font-headline font-bold text-xs">99.9%</p>
          </div>
        </div>
      </div>
    </>
  );
}
