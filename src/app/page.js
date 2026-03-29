import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Grid Decorative */}
        <div 
          className="absolute inset-0 z-0 opacity-5 pointer-events-none" 
          style={{ backgroundImage: "linear-gradient(#cafd00 1px, transparent 1px), linear-gradient(90deg, #cafd00 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        ></div>
        
        <div className="relative z-10 max-w-5xl w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/5 border border-primary/20">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse shadow-[0_0_8px_#00fc40]"></span>
              <span className="font-label text-xs tracking-widest text-primary">INITIALIZING OPERATOR_01</span>
            </div>
            
            <h2 className="font-headline text-5xl md:text-8xl font-black uppercase text-on-surface leading-none tracking-tighter mb-8 glow-text">
              THE <span className="text-primary">ANALOG</span><br/>INTELLIGENCE
            </h2>
            
            <p className="font-body text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
              Compiling multi-dimensional data architectures into high-fidelity neural interfaces. A showcase of algorithmic precision and aesthetic grit.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/operator-profile" className="bg-primary text-on-primary font-headline font-bold uppercase tracking-widest px-10 py-5 text-sm flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(202,253,0,0.4)] transition-all active:scale-95 group border-t-2 border-l-2 border-white/30">
                OPEN_DOSSIER
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <button className="bg-transparent border border-outline-variant/30 text-on-surface font-headline font-bold uppercase tracking-widest px-10 py-5 text-sm hover:bg-surface-container-high transition-all">
                VIEW_ARCHIVES
              </button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md aspect-square relative group">
            <div className="absolute inset-0 bg-primary/10 blur-[60px] rounded-full"></div>
            <div className="relative z-10 w-full h-full border-2 border-primary/20 overflow-hidden bg-surface-container-lowest">
              <Image 
                fill
                alt="Digital Core" 
                className="object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700" 
                src="/assets/images/home_hero.jpg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 border border-primary/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label text-[10px] text-primary">CORE_SYNC_RATE</span>
                  <span className="font-label text-[10px] text-primary">98.4%</span>
                </div>
                <div className="w-full h-1 bg-surface-container-high">
                  <div className="h-full bg-primary" style={{ width: "98%" }}></div>
                </div>
              </div>
            </div>
            {/* Decorative HUD elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary"></div>
          </div>
        </div>
      </section>

      {/* Mission Log Section (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="font-headline text-4xl font-black uppercase text-primary mb-2 tracking-tighter">MISSION_LOG</h3>
            <p className="font-label text-xs tracking-widest text-on-surface-variant">LATEST_DEPLOYMENTS_AND_DATA_NODES</p>
          </div>
          <div className="h-[2px] flex-grow mx-8 bg-surface-container-high hidden md:block"></div>
          <Link href="/mission-log" className="font-label text-xs text-secondary hover:underline tracking-widest flex items-center gap-2">
            VIEW_ALL_NODES <span className="material-symbols-outlined text-sm">open_in_new</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Main Featured Card */}
          <div className="md:col-span-7 bg-surface-container relative overflow-hidden group ghost-border">
            <Image 
              fill
              alt="Project Alpha" 
              className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 z-0" 
              src="/assets/images/home_card1.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <span className="font-label text-[10px] text-secondary mb-2 tracking-[0.3em]">NODE_01 // NEURAL_NAVIGATOR</span>
              <h4 className="font-headline text-3xl font-bold text-on-surface mb-4">AUTONOMOUS DATA SYNTHESIS</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                Developing self-evolving algorithms that map complex dataset relationships in real-time, visualizing latent spaces of human intent.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-[10px] text-primary font-label">TENSORFLOW</span>
                <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-[10px] text-primary font-label">PYTHON_VX</span>
              </div>
            </div>
          </div>
          
          {/* Secondary Cards Stack */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="bg-surface-container-high p-6 relative overflow-hidden ghost-border flex flex-col justify-center">
              <div className="absolute top-0 right-0 p-4">
                <span className="material-symbols-outlined text-primary/20 text-5xl">monitoring</span>
              </div>
              <span className="font-label text-[10px] text-tertiary mb-2 tracking-[0.3em]">NODE_02 // SYSTEM_SCAN</span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">QUBIT_ENCRYPTION_LAYER</h4>
              <p className="font-body text-xs text-on-surface-variant line-clamp-2">
                A study on quantum-resistant cryptographic architectures for secure operator authentication.
              </p>
            </div>
            
            <div className="bg-surface-container relative overflow-hidden ghost-border group">
              <Image 
                fill
                alt="Network visualization" 
                className="object-cover opacity-20 group-hover:scale-110 transition-transform duration-700 z-0" 
                src="/assets/images/home_card2.jpg"
              />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full bg-surface-container/60 backdrop-blur-sm">
                <span className="font-label text-[10px] text-secondary mb-2 tracking-[0.3em]">NODE_03 // VIS_ENGINE</span>
                <h4 className="font-headline text-xl font-bold text-on-surface">VECT_CORE_RENDERER</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skill Tree Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="font-headline text-4xl font-black uppercase text-primary mb-4 glow-text tracking-tighter">SKILL_TREE_PROTOCOL</h3>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
              Quantifying operator proficiency across primary technical domains. Current progress is tracked via real-time telemetry from active systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Progress Bar 1 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                  <h5 className="font-headline font-bold text-sm tracking-widest uppercase">DATA_ENGINEERING</h5>
                </div>
                <span className="font-label text-xs text-primary">0.92</span>
              </div>
              <div className="h-6 bg-surface-container-highest flex items-center px-1">
                <div className="h-3 bg-primary shadow-[0_0_12px_rgba(202,253,0,0.5)]" style={{ width: "92%" }}></div>
              </div>
              <p className="font-label text-[10px] text-on-surface-variant leading-relaxed">
                ETL_PIPELINES / WAREHOUSING / SCALA_OPS
              </p>
            </div>
            
            {/* Progress Bar 2 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <h5 className="font-headline font-bold text-sm tracking-widest uppercase">MACHINE_LEARNING</h5>
                </div>
                <span className="font-label text-xs text-secondary">0.88</span>
              </div>
              <div className="h-6 bg-surface-container-highest flex items-center px-1">
                <div className="h-3 bg-secondary shadow-[0_0_12px_rgba(0,252,64,0.5)]" style={{ width: "88%" }}></div>
              </div>
              <p className="font-label text-[10px] text-on-surface-variant leading-relaxed">
                NEURAL_NETS / COMPUTER_VISION / REINFORCEMENT
              </p>
            </div>
            
            {/* Progress Bar 3 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                  <h5 className="font-headline font-bold text-sm tracking-widest uppercase">STAT_ANALYSIS</h5>
                </div>
                <span className="font-label text-xs text-tertiary">0.75</span>
              </div>
              <div className="h-6 bg-surface-container-highest flex items-center px-1">
                <div className="h-3 bg-tertiary shadow-[0_0_12px_rgba(255,81,250,0.5)]" style={{ width: "75%" }}></div>
              </div>
              <p className="font-label text-[10px] text-on-surface-variant leading-relaxed">
                BAYESIAN_MODELS / PROBABILITY / R_DATA
              </p>
            </div>
            
            {/* Additional Skills in list format */}
            <div className="md:col-span-3 mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "PYTHON", level: "PRO" },
                { name: "TYPESCRIPT", level: "MID" },
                { name: "SQL_ADV", level: "MAX" },
                { name: "DOCKER", level: "SYS" },
                { name: "K8S", level: "OPS" },
                { name: "AWS_CLOUD", level: "CERT" }
              ].map((skill, i) => (
                <div key={i} className="p-4 border border-outline-variant/10 text-center hover:border-primary/40 transition-colors group">
                  <p className="font-label text-[9px] text-on-surface-variant group-hover:text-primary mb-1">{skill.name}</p>
                  <p className="font-headline font-bold text-lg">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
