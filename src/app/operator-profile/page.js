import Link from 'next/link';
import Image from 'next/image';

export default function OperatorProfile() {
  return (
    <>
      <div className="pt-8 pb-12 px-6 md:px-12 min-h-[calc(100vh-64px)] w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* SECTION 1: PROFILE_GLITCH_AVATAR (Bento Column 1) */}
          <section className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#cafd00]/20 blur-sm group-hover:bg-[#cafd00]/30 transition duration-1000"></div>
              <div className="relative bg-surface-container-lowest border border-outline-variant p-2">
                <div className="aspect-square bg-surface-container-high overflow-hidden relative">
                  <Image 
                    fill
                    className="object-cover grayscale brightness-75 contrast-150 z-0" 
                    alt="stylized glitch portrait of a tech professional with digital chromatic aberration and scanline overlays in neon green and black" 
                    src="/assets/images/photo_portfolio.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 bg-primary px-3 py-1">
                    <span className="font-label text-on-primary text-[0.6rem] font-bold tracking-widest">UNIT_IDENTIFIED</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* OPERATOR_IDENTIFICATION */}
            <div className="bg-surface-container-low border-l-4 border-secondary p-6 space-y-4">
              <h2 className="font-headline text-xs tracking-[0.3em] text-secondary-dim uppercase">OPERATOR_IDENTIFICATION</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[0.6rem] font-label text-on-surface-variant tracking-widest uppercase">NAME</div>
                  <div className="font-headline text-lg text-primary text-shadow-[0_0_10px_rgba(202,253,0,0.5)]">RAYHAN_DEV</div>
                </div>
                <div>
                  <div className="text-[0.6rem] font-label text-on-surface-variant tracking-widest uppercase">ID_CODE</div>
                  <div className="font-headline text-lg text-primary">#992-DELTA-X</div>
                </div>
                <div>
                  <div className="text-[0.6rem] font-label text-on-surface-variant tracking-widest uppercase">ROLE</div>
                  <div className="font-body text-sm text-on-surface">DATA_SCIENTIST // AI_ENGINEER</div>
                </div>
                <div>
                  <div className="text-[0.6rem] font-label text-on-surface-variant tracking-widest uppercase">LOC</div>
                  <div className="font-body text-sm text-on-surface">FRANCE // DIGITAL_REALM</div>
                </div>
              </div>
            </div>
          </section>
          
          {/* SECTION 2: DATA_ANALYSIS (Bento Column 2) */}
          <section className="lg:col-span-7 space-y-8">
            {/* CORE_ATTRIBUTES (RPG STATS) */}
            <div className="bg-surface-container border border-outline-variant/30 p-8 relative">
              <div className="absolute top-0 right-0 p-2 text-[0.5rem] font-label text-primary/30">MODULE_STAT_04</div>
              <h2 className="font-headline text-xl tracking-tight text-primary mb-8 border-b border-primary/10 pb-2 flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span> CORE_ATTRIBUTES
              </h2>
              
              <div className="space-y-6">
                {/* Stat: Logic */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-label text-xs tracking-widest">LOGIC</span>
                    <span className="font-headline text-secondary text-lg">98%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-highest">
                    <div className="h-full bg-secondary shadow-[0_0_8px_rgba(0,252,64,0.5)]" style={{ width: "98%" }}></div>
                  </div>
                </div>
                
                {/* Stat: Creativity */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-label text-xs tracking-widest">CREATIVITY</span>
                    <span className="font-headline text-tertiary text-lg">85%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-highest">
                    <div className="h-full bg-tertiary shadow-[0_0_8px_rgba(255,81,250,0.5)]" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                {/* Stat: Optimization */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-label text-xs tracking-widest">OPTIMIZATION</span>
                    <span className="font-headline text-primary-fixed-dim text-lg">92%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-highest">
                    <div className="h-full bg-primary shadow-[0_0_8px_rgba(202,253,0,0.5)]" style={{ width: "92%" }}></div>
                  </div>
                </div>
                
                {/* Stat: Resilience */}
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-label text-xs tracking-widest">RESILIENCE</span>
                    <span className="font-headline text-secondary text-lg">89%</span>
                  </div>
                  <div className="h-1 w-full bg-surface-container-highest">
                    <div className="h-full bg-secondary shadow-[0_0_8px_rgba(0,252,64,0.5)]" style={{ width: "89%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* TECH_ORIGIN_STORY */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low border border-outline-variant/20 p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>history</span>
                  <h3 className="font-headline text-xs tracking-widest uppercase">TECH_ORIGIN_STORY</h3>
                </div>
                <p className="text-on-surface-variant text-xs leading-relaxed font-body">
                    Forged in the silicon valleys of the old world, now navigating the neural architectures of the new. Mission: To bridge the gap between human intuition and machine precision. Specialist in high-entropy data environments.
                </p>
              </div>
              
              <div className="bg-surface-container-low border border-outline-variant/20 p-6 space-y-4">
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <h3 className="font-headline text-xs tracking-widest uppercase">SYSTEM_DIAGNOSTICS</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[0.65rem] text-on-surface">
                    <span className="text-secondary">&gt;&gt;</span> ANALYTICAL_MINDSET_ACTIVE
                  </li>
                  <li className="flex items-center gap-2 text-[0.65rem] text-on-surface">
                    <span className="text-secondary">&gt;&gt;</span> NEURAL_NETWORK_SYNERGY_MAX
                  </li>
                  <li className="flex items-center gap-2 text-[0.65rem] text-on-surface">
                    <span className="text-secondary">&gt;&gt;</span> ZERO_TOLERANCE_FOR_INEFFICIENCY
                  </li>
                </ul>
              </div>
            </div>
            
            {/* CTA: ACCESS MISSION LOG */}
            <div className="pt-4">
              <Link className="block group w-full relative overflow-hidden bg-primary-container p-[1px]" href="/mission-log">
                <div className="bg-primary-container px-8 py-4 flex items-center justify-between group-active:scale-95 transition-transform duration-100">
                  <span className="font-headline text-[#0e0e0e] font-bold tracking-widest text-lg">ACCESS_MISSION_LOG</span>
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-[#0e0e0e] opacity-20 group-hover:w-24 transition-all"></div>
                    <span className="material-symbols-outlined text-[#0e0e0e]" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/30"></div>
                <div className="absolute top-0 left-0 w-[2px] h-full bg-white/30"></div>
              </Link>
            </div>
          </section>
        </div>

        {/* Decorative UI footer element */}
        <div className="max-w-6xl mx-auto mt-12 border-t border-outline-variant/10 pt-4 flex justify-between items-center opacity-40">
          <div className="font-label text-[0.5rem] tracking-[0.4em] uppercase hidden sm:block">SYSTEM_TIME: 23:59:59_UTC</div>
          <div className="font-label text-[0.5rem] tracking-[0.4em] uppercase">ENCRYPTION: AES_256_ACTIVE</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
            <div className="font-label text-[0.5rem] tracking-[0.4em] uppercase">LIVE_SIGNAL</div>
          </div>
        </div>
      </div>
    </>
  );
}
