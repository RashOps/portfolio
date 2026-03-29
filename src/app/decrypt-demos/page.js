import Image from "next/image";

export default function DecryptDemos() {
  return (
    <>
      <div className="relative pt-8 pb-32 px-6 lg:px-12 max-w-[1440px]">
        {/* Background Decor */}
        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-screen scanline-bg"></div>
        
        {/* Header Alerts Section */}
        <section className="mb-12 space-y-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-l-4 border-error pl-6 py-2">
            <div>
              <div className="flex items-center gap-3 text-error mb-2 animate-pulse">
                <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                <h1 className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter">SYSTEM_BREACH_DETECTED</h1>
              </div>
              <p className="font-headline text-primary-container text-lg tracking-[0.3em] uppercase opacity-80">DECRYPTION_IN_PROGRESS // UNAUTHORIZED_ACCESS</p>
            </div>
            <div className="bg-error/10 border border-error/30 p-4 inline-block shadow-[0_0_15px_rgba(185,41,2,0.3)]">
              <div className="text-error font-headline text-[10px] tracking-widest uppercase mb-1">THREAT_LEVEL</div>
              <div className="text-error text-xl font-bold font-headline uppercase">CRITICAL_OVERRIDE</div>
            </div>
          </div>
          
          {/* Global Progress Bar */}
          <div className="bg-surface-container h-14 relative flex items-center overflow-hidden border border-[#cafd00]/10">
            <div className="absolute inset-0 bg-primary-container/5 animate-pulse"></div>
            <div className="bg-primary-container h-full relative z-10 flex items-center justify-end px-6 shadow-[0_0_15px_rgba(202,253,0,0.3)]" style={{ width: "64%" }}>
              <span className="text-[#0e0e0e] font-headline font-bold text-lg tracking-tighter">64%</span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <span className="font-headline text-[10px] tracking-[0.8em] text-on-surface-variant uppercase mix-blend-difference">DECRYPTION_STATUS_VECTOR_MAP</span>
            </div>
          </div>
        </section>

        {/* Breach Interface Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          {/* Sidebar: Terminal Readout */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container-low p-6 border border-[#cafd00]/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 text-[8px] text-secondary opacity-30 font-headline">STREAM_ID: 882-X9</div>
              <h3 className="font-headline text-[#cafd00] text-[10px] tracking-[0.3em] uppercase mb-4 flex items-center gap-2 font-bold">
                <span className="w-2 h-2 bg-[#cafd00] animate-pulse"></span>
                LIVE_FEED_RECOVERY
              </h3>
              <div className="font-mono text-[10px] leading-relaxed text-secondary/80 space-y-1">
                <p className="text-secondary">&gt; INJECTING_SQL_POLYMORPHIC_SEED...</p>
                <p>&gt; BRUTE_FORCE_ARRAY: [SUCCESS]</p>
                <p className="text-on-surface-variant">0x0045FF - ATTEMPTING_HANDSHAKE</p>
                <p className="text-on-surface-variant">0x0046AA - HANDSHAKE_ACCEPTED</p>
                <p className="text-tertiary">&gt; GLITCH_FOUND: BYPASSING_KERNEL_PANIC</p>
                <p className="text-[#cafd00]">&gt; DECRYPTING_OBJECT_MANIFEST...</p>
                <p className="text-[#cafd00]">&gt; SUCCESS: 3_FILES_RECOVERED</p>
                <div className="pt-4 text-xs font-headline text-on-surface flex w-full">
                  <pre className="leading-none text-primary-container opacity-60">
                    {"   ____  ____  ____ \n  / __ \\/ __ \\/ __ \\\n / /_/ / /_/ / /_/ /\n \\____/\\____/\\____/ "}
                  </pre>
                </div>
              </div>
              
              {/* Integrated Terminal Actions */}
              <div className="mt-6 pt-4 border-t border-[#cafd00]/10 flex gap-4">
                <button className="text-[10px] font-bold text-[#cafd00] hover:text-white transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">keyboard_return</span>
                  RESET_TERMINAL
                </button>
                <button className="text-[10px] font-bold text-secondary hover:text-white transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">terminal</span>
                  OPEN_SHELL
                </button>
              </div>
            </div>
            
            <div className="bg-surface-container-lowest p-6 border-l-2 border-primary-container/40">
              <h4 className="font-headline text-on-surface-variant text-[10px] tracking-widest uppercase mb-4">SYSTEM_ARCHITECTURE</h4>
              <div className="aspect-square bg-[#0e0e0e] border border-[#cafd00]/10 flex items-center justify-center relative overflow-hidden group">
                <Image 
                  fill
                  className="object-cover opacity-20 grayscale contrast-125 transition-all duration-500 group-hover:scale-110 z-0" 
                  alt="Digital blue circuit board pattern with glowing green data connections and technical wireframe overlay" 
                  src="/assets/images/decrypt_hero.jpg"
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-3 w-full opacity-60">
                    <div className="h-1 bg-primary-container/40"></div>
                    <div className="h-1 bg-primary-container/10"></div>
                    <div className="h-1 bg-primary-container/60"></div>
                    <div className="h-1 bg-secondary/40"></div>
                    <div className="h-1 bg-tertiary/40"></div>
                    <div className="h-1 bg-secondary/60"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main Canvas: Decrypted Objects */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between border-b border-[#48484826] pb-4">
              <h2 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-surface flex items-center gap-4 drop-shadow-[0_0_10px_rgba(202,253,0,0.5)]">
                <span className="text-primary-container">/</span> DECRYPTED_OBJECTS
              </h2>
              <div className="flex items-center gap-4">
                <button className="font-headline text-[10px] tracking-[0.2em] text-[#cafd00] hover:text-white uppercase transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-xs">arrow_back</span>
                  RETURN_TO_VAULT
                </button>
                <span className="font-headline text-[10px] tracking-[0.2em] text-on-surface-variant uppercase">FILTER: ALL_ASSETS</span>
              </div>
            </div>
            
            {/* Object Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="group bg-surface-container-low p-1 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(202,253,0,0.1)] border border-white/5">
                <div className="bg-surface p-8 h-full flex flex-col border border-white/5">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-primary-container/10 border border-primary-container/20 flex items-center justify-center group-hover:bg-primary-container/20 transition-all">
                      <span className="material-symbols-outlined text-primary-container text-2xl">visibility</span>
                    </div>
                    <div className="text-[10px] font-headline text-tertiary uppercase tracking-widest font-bold">SIG: 0x82A</div>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary-container transition-colors uppercase tracking-tight">NEURAL_GLITCH_DETECTOR</h3>
                  <p className="text-on-surface-variant text-sm mb-10 leading-relaxed font-body">
                      Real-time diagnostic tool for identifying sub-perceptual data corruption within high-bandwidth AI thought-streams.
                  </p>
                  <div className="mt-auto">
                    <button className="w-full bg-[#cafd00] text-black text-[10px] font-headline font-black py-4 uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all hover:bg-white active:scale-[0.98]">
                      RUN_DEMO
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="group bg-surface-container-low p-1 relative transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(202,253,0,0.1)] border border-white/5">
                <div className="bg-surface p-8 h-full flex flex-col border border-white/5">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:bg-secondary/20 transition-all">
                      <span className="material-symbols-outlined text-secondary text-2xl">graphic_eq</span>
                    </div>
                    <div className="text-[10px] font-headline text-secondary uppercase tracking-widest font-bold">SIG: 0x44C</div>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary-container transition-colors uppercase tracking-tight">SYNTH_VOICE_BYPASS</h3>
                  <p className="text-on-surface-variant text-sm mb-10 leading-relaxed font-body">
                      Advanced audio decryption suite capable of isolating organic vocal patterns from layered synthetic modulation.
                  </p>
                  <div className="mt-auto">
                    <button className="w-full bg-[#cafd00] text-black text-[10px] font-headline font-black py-4 uppercase tracking-[0.3em] flex items-center justify-center gap-2 transition-all hover:bg-white active:scale-[0.98]">
                      RUN_DEMO
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Card 3 (Wide) */}
              <div className="group bg-surface-container-low p-1 relative transition-all duration-300 hover:-translate-y-1 md:col-span-2 border border-white/5">
                <div className="bg-surface p-10 h-full flex flex-col md:flex-row gap-10 items-center border border-white/5">
                  <div className="w-full md:w-2/5 aspect-video bg-[#0e0e0e] border border-white/5 relative overflow-hidden">
                    <Image 
                      fill
                      className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 z-0" 
                      alt="Abstract digital data visualization with green neon vertical lines and cascading character blocks resembling matrix code" 
                      src="/assets/images/decrypt_bg.jpg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 border border-primary-container bg-surface/80 shadow-[0_0_15px_rgba(202,253,0,0.15)]">
                        <span className="material-symbols-outlined text-primary-container text-5xl">lock_open</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] font-headline text-primary-container uppercase tracking-[0.4em] mb-3 font-black">STATUS: FULLY_DECRYPTED</div>
                    <h3 className="font-headline text-3xl font-bold mb-4 uppercase tracking-tighter">CORE_KERNEL_VULN_SCAN</h3>
                    <p className="text-on-surface-variant text-sm mb-10 max-w-lg leading-relaxed">
                        A deep-level probe into centralized terminal nodes, exposing dormant security exploits within legacy mainframe structures. Designed for rapid infiltration of high-value data silos.
                    </p>
                    <button className="bg-primary-container text-black text-[10px] font-headline font-black px-10 py-4 uppercase tracking-[0.3em] inline-flex items-center gap-3 transition-all hover:bg-white active:scale-[0.98]">
                      ACCESS_FILE_STRETCH
                      <span className="material-symbols-outlined text-sm">file_download</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 md:left-64 right-0 bg-surface/90 backdrop-blur-xl border-t border-[#48484826] px-8 py-4 z-50 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#cafd00] shadow-[0_0_8px_rgba(202,253,0,0.8)] animate-pulse"></div>
            <span className="font-headline text-[10px] tracking-widest uppercase font-bold text-[#cafd00]">UP_LINK_STABLE</span>
          </div>
          <div className="hidden md:flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm opacity-50">location_on</span>
            <span className="font-headline text-[10px] uppercase tracking-widest">SECTOR_7G_HUB</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-headline text-[10px] text-on-surface-variant uppercase tracking-[0.2em] hidden sm:inline">IA_CORE: <span className="text-[#cafd00]">ACTIVE</span></span>
          <button className="bg-[#cafd00] text-black font-headline text-[10px] font-black px-6 py-2.5 uppercase tracking-[0.2em] transition-all hover:bg-white active:scale-95 shadow-[0_0_15px_rgba(202,253,0,0.2)]">
            INITIATE_UPLINK
          </button>
        </div>
      </footer>
    </>
  );
}
