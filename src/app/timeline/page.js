export default function Timeline() {
  return (
    <>
      <div className="p-10 relative">
        {/* Decoration Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
        
        <header className="mb-12 relative z-10">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-secondary font-headline text-[0.6875rem] tracking-[0.3em]">PROGRESS_TRACKER // CORE_EVOLUTION</span>
            <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-headline text-primary uppercase leading-tight tracking-[-0.05em] mb-4">
            EXPERIENCE_TIMELINE
          </h1>
          <div className="flex flex-wrap items-center gap-8 text-[0.6875rem] font-headline uppercase tracking-[0.1em] text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="text-secondary">LEVEL:</span> <span className="text-on-surface">34</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary">CLASS:</span> <span className="text-on-surface">SR_SYSTEM_ARCHITECT</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary">XP_TOTAL:</span> <span className="text-on-surface">89,450 / 100,000</span>
            </div>
          </div>
        </header>

        {/* Split Timeline Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* ACADEMIC_PATH */}
          <div className="relative pl-12" id="academic-path">
            <div className="flex items-center gap-3 mb-10 border-b border-primary/20 pb-4">
              <span className="material-symbols-outlined text-secondary">school</span>
              <h2 className="font-headline text-lg text-primary uppercase tracking-[0.2em]">ACADEMIC_PATH</h2>
            </div>
            {/* Academic Vertical Line */}
            <div className="absolute left-6 top-20 bottom-0 w-1 bg-surface-container-highest -translate-x-1/2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[60%] bg-primary/50 shadow-[0_0_15px_rgba(202,253,0,0.3)]"></div>
            </div>
            
            <div className="space-y-16">
              {/* Academic Entry 1 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 z-10">
                  <div className="w-8 h-8 bg-background border-2 border-primary/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary/50 text-sm">history_edu</span>
                  </div>
                </div>
                <div className="bg-surface-container p-6 border-l-4 border-primary/20 hover:bg-surface-container-high transition-all">
                  <div className="font-headline text-[0.6rem] tracking-[0.2em] text-secondary mb-2">2021 — 2023</div>
                  <h4 className="font-headline text-lg text-on-surface uppercase mb-1">MSC_ARTIFICIAL_INTELLIGENCE</h4>
                  <div className="text-[0.6875rem] font-headline text-on-surface-variant uppercase tracking-widest">STANFORD_NEURAL_LABS</div>
                  <div className="mt-4">
                    <span className="text-[0.6rem] font-headline text-secondary/40">SPECIALIZATION: DEEP_REINFORCEMENT_LEARNING</span>
                  </div>
                </div>
              </div>

              {/* Academic Entry 2 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 z-10">
                  <div className="w-8 h-8 bg-background border-2 border-primary/60 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary/80 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                  </div>
                </div>
                <div className="bg-[#000000] shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] p-6 border-l-4 border-primary/40 hover:bg-surface-container-high transition-all">
                  <div className="font-headline text-[0.6rem] tracking-[0.2em] text-secondary mb-2">2014 — 2018</div>
                  <h4 className="font-headline text-lg text-on-surface uppercase mb-1">BSC_COMPUTER_SCIENCE</h4>
                  <div className="text-[0.6875rem] font-headline text-on-surface-variant uppercase tracking-widest">MIT_PROTOCOL_LABS</div>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 bg-primary/5 text-primary/60 text-[0.5rem] font-headline">ALGORITHMS</span>
                    <span className="px-2 py-1 bg-primary/5 text-primary/60 text-[0.5rem] font-headline">SYSTEMS_ARCH</span>
                  </div>
                </div>
              </div>

              {/* Academic Entry 3 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 z-10">
                  <div className="w-8 h-8 bg-background border-2 border-primary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary/30 text-sm">verified</span>
                  </div>
                </div>
                <div className="bg-surface-container p-6 border-l-4 border-primary/10 opacity-60">
                  <div className="font-headline text-[0.6rem] tracking-[0.2em] text-secondary mb-2">2012 — 2014</div>
                  <h4 className="font-headline text-lg text-on-surface-variant uppercase mb-1">CORE_GENESIS_PRGM</h4>
                  <div className="text-[0.6875rem] font-headline text-on-surface-variant/60 uppercase tracking-widest">HIGH_LOGIC_ACADEMY</div>
                </div>
              </div>
            </div>
          </div>

          {/* PROFESSIONAL_DEPLOYMENTS */}
          <div className="relative pl-12" id="professional-deployments">
            <div className="flex items-center gap-3 mb-10 border-b border-primary/20 pb-4">
              <span className="material-symbols-outlined text-secondary">terminal</span>
              <h2 className="font-headline text-lg text-primary uppercase tracking-[0.2em]">PROFESSIONAL_DEPLOYMENTS</h2>
            </div>
            {/* Professional Vertical Line */}
            <div className="absolute left-6 top-20 bottom-0 w-1 bg-surface-container-highest -translate-x-1/2 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[90%] bg-primary shadow-[0_0_15px_rgba(202,253,0,0.3)]"></div>
            </div>
            
            <div className="space-y-16">
              {/* Professional Entry 1 */}
              <div className="relative">
                <div className="absolute -left-12 top-0 z-10">
                  <div className="w-12 h-12 bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(202,253,0,0.4)]">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                  </div>
                </div>
                <div className="bg-surface-container p-6 border-l-4 border-secondary relative overflow-hidden group hover:bg-surface-container-high transition-all duration-300">
                  <div className="absolute top-0 right-0 p-2 text-[0.5rem] font-headline text-secondary/30">ENTITY_ID: NX-900</div>
                  <div className="font-headline text-[0.6rem] tracking-[0.2em] text-secondary mb-2">2023 — PRESENT</div>
                  <h4 className="font-headline text-xl text-primary uppercase mb-1">NEURAL_DYNAMICS_CORP</h4>
                  <div className="text-[0.6875rem] font-headline text-on-surface-variant uppercase tracking-widest">RANK: LEAD_OPERATOR</div>
                  <p className="text-on-surface-variant text-xs mt-3 leading-relaxed mb-4">Implementing neural-mesh clusters for decentralized data processing.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[0.6rem] font-headline uppercase">RUST</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[0.6rem] font-headline uppercase">PYTORCH</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-[0.6rem] font-headline uppercase">CUDA</span>
                  </div>
                </div>
              </div>

              {/* Professional Entry 2 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 z-10">
                  <div className="w-8 h-8 bg-background border-2 border-primary/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary/80 text-sm">near_me</span>
                  </div>
                </div>
                <div className="bg-[#000000] shadow-[inset_0_0_10px_rgba(0,0,0,0.8)] p-6 border-l-4 border-primary/30 relative group hover:bg-surface-container-high transition-all duration-300">
                  <div className="font-headline text-[0.6rem] tracking-[0.2em] text-secondary mb-2">2021 — 2023</div>
                  <h4 className="font-headline text-lg text-on-surface uppercase mb-1">CYBERDINE_SYSTEMS</h4>
                  <div className="text-[0.6875rem] font-headline text-on-surface-variant uppercase tracking-widest">RANK: SENIOR_DEV</div>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 bg-outline-variant/20 text-on-surface-variant text-[0.6rem] font-headline">KUBERNETES</span>
                    <span className="px-2 py-1 bg-outline-variant/20 text-on-surface-variant text-[0.6rem] font-headline">GO</span>
                  </div>
                </div>
              </div>

              {/* Professional Entry 3 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 z-10">
                  <div className="w-8 h-8 bg-background border-2 border-primary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary/50 text-sm">data_thresholding</span>
                  </div>
                </div>
                <div className="bg-surface-container p-6 border-l-4 border-primary/20 relative group hover:bg-surface-container-high transition-all duration-300">
                  <div className="font-headline text-[0.6rem] tracking-[0.2em] text-secondary mb-2">2018 — 2021</div>
                  <h4 className="font-headline text-lg text-on-surface uppercase mb-1">GLOBAL_DATA_GRID</h4>
                  <div className="text-[0.6875rem] font-headline text-on-surface-variant uppercase tracking-widest">RANK: JUNIOR_ENG</div>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2 py-1 bg-outline-variant/20 text-on-surface-variant text-[0.6rem] font-headline">PYTHON</span>
                    <span className="px-2 py-1 bg-outline-variant/20 text-on-surface-variant text-[0.6rem] font-headline">SQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* System Stats Footer (Floating) */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="bg-surface-container-low p-6 border-t border-primary/10">
            <div className="flex items-center justify-between mb-4">
              <span className="font-headline text-[0.6875rem] text-on-surface-variant tracking-[0.2em]">CURRENT_ZONE</span>
              <span className="material-symbols-outlined text-secondary text-sm">explore</span>
            </div>
            <div className="text-2xl font-headline text-primary">EUROPE_NORTH_1</div>
            <div className="mt-2 h-1 bg-surface-container-highest overflow-hidden">
              <div className="h-full bg-secondary w-2/3"></div>
            </div>
          </div>
          
          <div className="bg-surface-container-low p-6 border-t border-primary/10">
            <div className="flex items-center justify-between mb-4">
              <span className="font-headline text-[0.6875rem] text-on-surface-variant tracking-[0.2em]">SYSTEM_UPTIME</span>
              <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
            </div>
            <div className="text-2xl font-headline text-primary">3285:12:44:02</div>
            <div className="text-[0.6rem] font-headline text-on-surface-variant mt-2 uppercase">TOTAL_DEPLOYMENT_DAYS</div>
          </div>
          
          <div className="bg-surface-container-low p-6 border-t border-primary/10">
            <div className="flex items-center justify-between mb-4">
              <span className="font-headline text-[0.6875rem] text-on-surface-variant tracking-[0.2em]">CORE_STABILITY</span>
              <span className="material-symbols-outlined text-secondary text-sm">verified_user</span>
            </div>
            <div className="text-2xl font-headline text-secondary">99.98%</div>
            <div className="flex items-center gap-1 mt-2">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
              <span className="w-1.5 h-1.5 bg-secondary/20 rounded-full"></span>
              <span className="ml-2 text-[0.6rem] font-headline text-on-surface-variant">OPTIMAL</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAB for Command Prompt */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <button className="w-14 h-14 bg-[#cafd00] text-[#0e0e0e] flex items-center justify-center shadow-[0_0_20px_rgba(202,253,0,0.5)] active:scale-90 transition-transform cursor-pointer">
          <span className="material-symbols-outlined font-bold">add</span>
        </button>
      </div>
    </>
  );
}
