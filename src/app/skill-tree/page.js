export default function SkillTree() {
  return (
    <>
      <div className="p-8 pb-16 lg:px-12 max-w-[1400px]">
        {/* Header Section */}
        <section className="mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-tighter text-on-surface mb-2">
            SKILL_TREE<span className="text-primary drop-shadow-[0_0_12px_rgba(202,253,0,0.5)]">.SYS</span>
          </h1>
          <div className="flex items-center gap-4 border-l-2 border-primary pl-4 py-1">
            <p className="font-headline text-xs tracking-[0.3em] text-on-surface-variant uppercase">Analyzing neural network proficiencies...</p>
            <span className="text-secondary font-headline text-xs tracking-widest">[OK]</span>
          </div>
        </section>

        {/* Skill Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Machine Learning Core */}
          <div className="lg:col-span-8 bg-surface-container border border-outline-variant/15 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <span className="material-symbols-outlined text-9xl">psychology</span>
            </div>
            <h2 className="font-headline text-2xl font-bold mb-8 text-primary flex items-center gap-3">
              <span className="material-symbols-outlined">neurology</span>
              MACHINE_LEARNING
            </h2>
            <div className="space-y-10">
              {/* Progress Item */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-headline text-sm tracking-widest text-on-surface uppercase">Neural_Architecture</span>
                  <span className="font-headline text-xs text-primary">LVL_MAX</span>
                </div>
                <div className="h-4 bg-surface-container-lowest border border-outline-variant/30 flex p-0.5">
                  <div className="bg-primary h-full shadow-[0_0_10px_rgba(202,253,0,0.4)]" style={{ width: "100%" }}></div>
                </div>
              </div>
              {/* Progress Item */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-headline text-sm tracking-widest text-on-surface uppercase">Reinforcement_Learning</span>
                  <span className="font-headline text-xs text-on-surface-variant">LVL_85</span>
                </div>
                <div className="h-4 bg-surface-container-lowest border border-outline-variant/30 flex p-0.5">
                  <div className="bg-primary/60 h-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              {/* Progress Item */}
              <div>
                <div className="flex justify-between items-end mb-2">
                  <span className="font-headline text-sm tracking-widest text-on-surface uppercase">NLP_Engines</span>
                  <span className="font-headline text-xs text-on-surface-variant">LVL_92</span>
                </div>
                <div className="h-4 bg-surface-container-lowest border border-outline-variant/30 flex p-0.5">
                  <div className="bg-primary/80 h-full" style={{ width: "92%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stats Panel */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container-high p-6 border-l-4 border-secondary">
              <h3 className="font-headline text-xs tracking-[0.4em] text-secondary mb-4 uppercase">System_Load</h3>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl font-headline font-bold">98.4</span>
                <span className="text-sm font-headline text-on-surface-variant mb-1">% CAPACITY</span>
              </div>
              <div className="grid grid-cols-10 gap-1 h-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-secondary"></div>
                ))}
                <div className="bg-surface-container-lowest"></div>
              </div>
            </div>

            {/* DevOps Core */}
            <div className="bg-surface-container border border-outline-variant/15 p-6">
              <h2 className="font-headline text-xl font-bold mb-6 text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">terminal</span>
                DEVOPS_CORE
              </h2>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-[10px] font-headline tracking-widest uppercase">
                  <span>Kubernetes</span>
                  <span className="text-primary">LVL_90</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-headline tracking-widest uppercase">
                  <span>Terraform</span>
                  <span className="text-primary">LVL_MAX</span>
                </div>
                <div className="flex justify-between items-center text-[10px] font-headline tracking-widest uppercase">
                  <span>CI/CD_Pipe</span>
                  <span className="text-primary">LVL_88</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Engineering Section (Horizontal Matrix) */}
        <section className="mb-20">
          <h2 className="font-headline text-2xl font-bold mb-8 uppercase tracking-widest flex items-center gap-4">
            <span className="w-12 h-[1px] bg-primary"></span>
            DATA_ENGINEERING
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
            <div className="bg-surface-container p-8 border border-outline-variant/20 hover:bg-surface-container-high transition-all group">
              <p className="text-[10px] font-headline text-primary mb-2">MODULE_01</p>
              <h3 className="font-headline text-lg font-bold mb-4">SPARK_STREAMING</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">High-concurrency data ingestion and real-time processing pipelines.</p>
              <div className="flex gap-1 h-1">
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-primary/20"></div>
              </div>
            </div>

            <div className="bg-surface-container p-8 border border-outline-variant/20 hover:bg-surface-container-high transition-all group">
              <p className="text-[10px] font-headline text-primary mb-2">MODULE_02</p>
              <h3 className="font-headline text-lg font-bold mb-4">WAREHOUSE_OPS</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Snowflake and BigQuery architecture optimization for petabyte-scale analysis.</p>
              <div className="flex gap-1 h-1">
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-primary"></div>
              </div>
            </div>

            <div className="bg-surface-container p-8 border border-outline-variant/20 hover:bg-surface-container-high transition-all group">
              <p className="text-[10px] font-headline text-primary mb-2">MODULE_03</p>
              <h3 className="font-headline text-lg font-bold mb-4">ETL_ORCHESTRATION</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Airflow and Prefect logic for automated data life-cycle management.</p>
              <div className="flex gap-1 h-1">
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-primary"></div>
                <div className="flex-1 bg-primary/20"></div>
                <div className="flex-1 bg-primary/20"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Vault & Languages Module (Split Screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications Vault */}
          <section>
            <h2 className="font-headline text-xl font-bold mb-8 uppercase tracking-widest text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">verified</span>
              CERTIFICATIONS_VAULT
            </h2>
            <div className="space-y-4">
              <div className="bg-surface-container-lowest border border-outline-variant/20 p-5 flex items-center justify-between group hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">cloud</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">AWS SOLUTIONS ARCHITECT</h4>
                    <p className="text-[10px] font-headline text-on-surface-variant uppercase tracking-tighter">ID: AWS-SA-99201 // PRO_LEVEL</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-50">check_circle</span>
              </div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/20 p-5 flex items-center justify-between group hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">database</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">GOOGLE DATA ENGINEER</h4>
                    <p className="text-[10px] font-headline text-on-surface-variant uppercase tracking-tighter">ID: GCP-DE-77112 // PRO_LEVEL</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-50">check_circle</span>
              </div>
              
              <div className="bg-surface-container-lowest border border-outline-variant/20 p-5 flex items-center justify-between group hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-surface-container flex items-center justify-center border border-outline-variant/20">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">storage</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">AZURE AI FUNDAMENTALS</h4>
                    <p className="text-[10px] font-headline text-on-surface-variant uppercase tracking-tighter">ID: AZ-AI-10043 // ASSOC_LEVEL</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary opacity-50">check_circle</span>
              </div>
            </div>
          </section>

          {/* Languages Module */}
          <section>
            <h2 className="font-headline text-xl font-bold mb-8 uppercase tracking-widest text-on-surface flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">keyboard</span>
              LANGUAGES_MODULE
            </h2>
            <div className="bg-surface-container p-8 border border-outline-variant/15 relative">
              <div className="space-y-10">
                {/* Language Item */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-headline text-sm uppercase tracking-[0.2em]">Python_Terminal</span>
                    <span className="text-[10px] text-secondary">ACTIVE_FREQ: 9.2GHz</span>
                  </div>
                  <div className="flex items-end gap-1 h-12 overflow-hidden">
                    <div className="w-full bg-primary/20 h-4"></div>
                    <div className="w-full bg-primary/40 h-8"></div>
                    <div className="w-full bg-primary h-12"></div>
                    <div className="w-full bg-primary/60 h-6"></div>
                    <div className="w-full bg-primary/80 h-10"></div>
                    <div className="w-full bg-primary h-12"></div>
                    <div className="w-full bg-primary/30 h-5"></div>
                    <div className="w-full bg-primary/50 h-9"></div>
                    <div className="w-full bg-primary h-12"></div>
                    <div className="w-full bg-primary/20 h-3"></div>
                    <div className="w-full bg-primary/70 h-11"></div>
                  </div>
                </div>
                
                {/* Language Item */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-headline text-sm uppercase tracking-[0.2em]">Rust_Core</span>
                    <span className="text-[10px] text-on-surface-variant">IDLE_FREQ: 4.5GHz</span>
                  </div>
                  <div className="flex items-end gap-1 h-12 overflow-hidden opacity-50">
                    {[2,4,6,4,2,6,4,2,6,4,2].map((height, i) => (
                      <div key={i} className={`w-full bg-on-surface-variant/${height*10}`} style={{ height: `${height*0.25}rem` }}></div>
                    ))}
                  </div>
                </div>
                
                {/* Language Item */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-headline text-sm uppercase tracking-[0.2em]">SQL_Relational</span>
                    <span className="text-[10px] text-primary">BURST_FREQ: 8.8GHz</span>
                  </div>
                  <div className="flex items-end gap-1 h-12 overflow-hidden">
                    {[10,10,10,2,10,10,10,2,10,10,10].map((height, i) => (
                      <div key={i} className={`w-full ${height === 2 ? 'bg-primary/10' : 'bg-primary/80'}`} style={{ height: `${height*0.25}rem` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* System Footer Specific to this page */}
        <footer className="mt-32 pt-12 border-t border-outline-variant/10 text-center">
          <div className="flex justify-center gap-12 mb-8">
            <div className="text-left">
              <p className="font-headline text-[10px] tracking-widest text-on-surface-variant uppercase mb-1">Last Update</p>
              <p className="font-headline text-xs text-primary">2026.03.29_0400_HRS</p>
            </div>
            <div className="text-left">
              <p className="font-headline text-[10px] tracking-widest text-on-surface-variant uppercase mb-1">Encryption</p>
              <p className="font-headline text-xs text-primary">AES_256_ACTIVE</p>
            </div>
            <div className="text-left">
              <p className="font-headline text-[10px] tracking-widest text-on-surface-variant uppercase mb-1">Neural_Node</p>
              <p className="font-headline text-xs text-primary">NODE_SF_01</p>
            </div>
          </div>
          <p className="font-headline text-[10px] tracking-[0.5em] text-outline-variant uppercase">© 2026 KINETIC_TERMINAL // ALL SYSTEMS OPERATIONAL</p>
        </footer>
      </div>
    </>
  );
}
