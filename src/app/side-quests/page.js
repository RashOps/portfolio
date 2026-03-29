export default function SideQuests() {
  return (
    <>
      <div className="p-10 relative overflow-hidden bg-[#0e0e0e] min-h-[calc(100vh-64px)]">
        <div className="absolute inset-0 scanline-bg opacity-30 pointer-events-none"></div>
        
        {/* Page Header */}
        <header className="relative z-10 mb-16">
          <div className="flex justify-between items-end gap-6 mb-8">
            <div>
              <h1 className="text-[4.5rem] font-headline font-bold uppercase tracking-[-0.04em] text-primary leading-none text-glow-primary text-shadow-[0_0_12px_rgba(202,253,0,0.6)]">SIDE_QUESTS</h1>
              <p className="text-[#ababab] font-body text-[0.875rem] max-w-2xl mt-4 tracking-tight border-l-2 border-[#cafd00]/30 pl-4 uppercase font-['Space_Grotesk'] leading-relaxed">
                EXPLORATION_MODE: <span className="text-[#cafd00]">ENABLED</span>. 
                ENGAGING SUPPLEMENTARY OBJECTIVES TO OPTIMIZE OPERATOR PERFORMANCE AND DATA THROUGHPUT.
              </p>
            </div>
            <div className="text-right hidden sm:block font-['Space_Grotesk'] uppercase tracking-[0.15em]">
              <div className="text-[0.6875rem] text-secondary mb-1">TOTAL_XP: 14,250</div>
              <div className="text-[0.6875rem] text-[#ababab]">LEVEL: 42_ARCHITECT</div>
            </div>
          </div>
          
          {/* Progress Section */}
          <div className="bg-surface-container/40 p-1 border-t border-[#48484826]">
            <div className="flex justify-between items-center px-4 py-3">
              <span className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.3em] text-[#cafd00]">OBJECTIVE_COMPLETION_INDEX</span>
              <span className="text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.2em] text-primary font-bold">68.4%</span>
            </div>
            <div className="h-1 w-full bg-[#131313] relative overflow-hidden">
              <div className="h-full bg-[#cafd00] shadow-[0_0_15px_rgba(202,253,0,0.15)] transition-all duration-1000 ease-out" style={{ width: "68%" }}></div>
              <div className="absolute top-0 right-[32%] h-full w-[10px] bg-white/20 blur-sm"></div>
            </div>
          </div>
        </header>

        {/* Quest Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {/* Quest Card 1 */}
          <div className="bg-surface-container/20 border border-[#48484826] group hover:border-[#cafd00]/30 transition-all duration-500 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-secondary/10 border-b border-l border-secondary/20">
              <span className="text-[8px] font-['Space_Grotesk'] tracking-[0.2em] text-secondary uppercase font-bold">STATUS: ONGOING</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-primary text-[2.5rem] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                <h3 className="text-[1.5rem] font-headline font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors">RETRO_COMPUTING</h3>
              </div>
              <p className="text-[0.8125rem] text-[#ababab] font-body mb-8 leading-relaxed font-['Space_Grotesk'] uppercase tracking-wider">
                Restoration of a Commodore 64 unit and developing basic 6502 Assembly routines to interface with modern AI subroutines.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="text-[9px] font-['Space_Grotesk'] uppercase text-primary/60 mb-3 tracking-[0.2em]">REWARD_NODES:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#131313] px-3 py-1.5 text-[9px] font-['Space_Grotesk'] text-primary border border-[#cafd00]/10 hover:border-primary/40 transition-colors cursor-default">LOW_LEVEL_LOGIC</span>
                    <span className="bg-[#131313] px-3 py-1.5 text-[9px] font-['Space_Grotesk'] text-primary border border-[#cafd00]/10 hover:border-primary/40 transition-colors cursor-default">HARDWARE_ARCH</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-transparent border border-[#cafd00]/20 hover:bg-[#cafd00]/10 text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.3em] text-[#cafd00] font-bold transition-all active:-skew-x-2">
                  RESUME_LOG_INTERFACE
                </button>
              </div>
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-[#cafd00] transition-all duration-700 absolute bottom-0"></div>
          </div>

          {/* Quest Card 2 (Completed) */}
          <div className="bg-surface-container/10 border border-secondary/20 group transition-all duration-500 flex flex-col relative opacity-80 hover:opacity-100">
            <div className="absolute top-0 right-0 px-3 py-1 bg-secondary/20 border-b border-l border-secondary/40">
              <span className="text-[8px] font-['Space_Grotesk'] tracking-[0.2em] text-secondary uppercase font-bold">STATUS: COMPLETED</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-secondary text-[2.5rem] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <h3 className="text-[1.5rem] font-headline font-bold uppercase tracking-tight text-white group-hover:text-secondary transition-colors">AI_ETHICS_FRAMEWORK</h3>
              </div>
              <p className="text-[0.8125rem] text-[#ababab] font-body mb-8 leading-relaxed font-['Space_Grotesk'] uppercase tracking-wider">
                Analyzing the moral implications of neural network agency and developing guardrails for autonomous data synthesis.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="text-[9px] font-['Space_Grotesk'] uppercase text-secondary/60 mb-3 tracking-[0.2em]">REWARD_NODES:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#131313] px-3 py-1.5 text-[9px] font-['Space_Grotesk'] text-secondary border border-secondary/20 cursor-default">ALGORITHMIC_BIAS_DETECTION</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-secondary/5 border border-secondary/10 text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.3em] text-secondary/50 font-bold cursor-default">
                  ARCHIVE_STABILIZED
                </button>
              </div>
            </div>
          </div>

          {/* Quest Card 3 */}
          <div className="bg-surface-container/20 border border-[#48484826] group hover:border-[#cafd00]/30 transition-all duration-500 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-secondary/10 border-b border-l border-secondary/20">
              <span className="text-[8px] font-['Space_Grotesk'] tracking-[0.2em] text-secondary uppercase font-bold">STATUS: ONGOING</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-primary text-[2.5rem] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>audio_file</span>
                <h3 className="text-[1.5rem] font-headline font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors">SYNTH_WAVE_SPLICING</h3>
              </div>
              <p className="text-[0.8125rem] text-[#ababab] font-body mb-8 leading-relaxed font-['Space_Grotesk'] uppercase tracking-wider">
                Modular synthesis experimentation. Creating procedural audio tracks using granular oscillators for background ambiance.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="text-[9px] font-['Space_Grotesk'] uppercase text-primary/60 mb-3 tracking-[0.2em]">REWARD_NODES:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#131313] px-3 py-1.5 text-[9px] font-['Space_Grotesk'] text-primary border border-[#cafd00]/10 cursor-default">SIGNAL_PROCESSING</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-transparent border border-[#cafd00]/20 hover:bg-[#cafd00]/10 text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.3em] text-[#cafd00] font-bold transition-all active:-skew-x-2">
                  RESUME_LOG_INTERFACE
                </button>
              </div>
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-[#cafd00] transition-all duration-700 absolute bottom-0"></div>
          </div>

          {/* Quest Card 4 (Locked) */}
          <div className="bg-[#131313] border border-[#48484826] flex flex-col relative opacity-40 grayscale pointer-events-none">
            <div className="absolute top-0 right-0 px-3 py-1 bg-[#131313] border-b border-l border-[#4848484d]">
              <span className="text-[8px] font-['Space_Grotesk'] tracking-[0.2em] text-[#ababab] uppercase font-bold">STATUS: LOCKED</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-[#ababab] text-[2.5rem] mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                <h3 className="text-[1.5rem] font-headline font-bold uppercase tracking-tight text-[#ababab]">HAPTIC_INTERFACE_MOD</h3>
              </div>
              <p className="text-[0.8125rem] text-[#757575] font-body mb-8 font-['Space_Grotesk'] uppercase tracking-wider">
                Upgrade standard input devices with ultrasonic haptic feedback. Requires 'HARDWARE_ARCH' level 5.
              </p>
              <div className="mt-8">
                <button className="w-full py-3 bg-transparent border border-[#48484826] text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.3em] text-[#757575] font-bold">
                  INSUFFICIENT_ACCESS
                </button>
              </div>
            </div>
          </div>

          {/* Quest Card 5 */}
          <div className="bg-surface-container/20 border border-[#48484826] group hover:border-[#cafd00]/30 transition-all duration-500 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 px-3 py-1 bg-secondary/10 border-b border-l border-secondary/20">
              <span className="text-[8px] font-['Space_Grotesk'] tracking-[0.2em] text-secondary uppercase font-bold">STATUS: ONGOING</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-primary text-[2.5rem] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>satellite_alt</span>
                <h3 className="text-[1.5rem] font-headline font-bold uppercase tracking-tight text-white group-hover:text-primary transition-colors">NEON_LOCATOR</h3>
              </div>
              <p className="text-[0.8125rem] text-[#ababab] font-body mb-8 leading-relaxed font-['Space_Grotesk'] uppercase tracking-wider">
                Mapping decommissioned industrial sites for signal dead-zones to establish local mesh network nodes.
              </p>
              <div className="space-y-6">
                <div>
                  <div className="text-[9px] font-['Space_Grotesk'] uppercase text-primary/60 mb-3 tracking-[0.2em]">REWARD_NODES:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#131313] px-3 py-1.5 text-[9px] font-['Space_Grotesk'] text-primary border border-[#cafd00]/10 cursor-default">NETWORK_TOPOLOGY</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-transparent border border-[#cafd00]/20 hover:bg-[#cafd00]/10 text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.3em] text-[#cafd00] font-bold transition-all active:-skew-x-2">
                  RESUME_LOG_INTERFACE
                </button>
              </div>
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-[#cafd00] transition-all duration-700 absolute bottom-0"></div>
          </div>

          {/* Add Empty Slot */}
          <div className="border-2 border-[#48484826] border-dashed group hover:border-[#cafd00]/40 transition-all duration-500 flex flex-col items-center justify-center min-h-[400px] cursor-pointer bg-surface-container/5 relative overflow-hidden">
            <div className="relative">
              <span className="material-symbols-outlined text-[#484848] text-[4rem] group-hover:text-primary transition-all duration-500 group-hover:rotate-90" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="mt-6 text-[10px] font-['Space_Grotesk'] uppercase tracking-[0.4em] text-[#484848] group-hover:text-primary transition-colors font-black relative z-10">INITIALIZE_NEW_QUEST</span>
          </div>
        </div>

        {/* System Footer */}
        <footer className="mt-20 pt-8 border-t border-[#48484826] flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
          <div className="font-['Space_Grotesk'] text-[9px] text-[#757575] uppercase tracking-[0.3em]">
            SYS_THREAD_ID: <span className="text-[#ababab]">0x94F2</span> // CACHE_STATUS: <span className="text-secondary">NOMINAL</span> // BUFFER: <span className="text-primary">08/10</span>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-secondary animate-pulse rounded-full"></span>
              <span className="font-['Space_Grotesk'] text-[9px] text-secondary uppercase tracking-[0.3em] font-bold">SENSORS_ONLINE</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-error-dim rounded-full"></span>
              <span className="font-['Space_Grotesk'] text-[9px] text-error-dim uppercase tracking-[0.3em] font-bold">SYNC_ERROR_04</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
