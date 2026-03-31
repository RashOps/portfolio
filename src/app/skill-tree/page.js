export default function SkillTree() {
  return (
    <>
      <div className="p-8 pb-16 lg:px-12 max-w-[1400px]">
        {/* Header Section */}
        <section className="mb-16">
          <h1 className="font-headline text-5xl md:text-6xl font-bold tracking-tight text-on-surface mb-2">
            Stack <span className="gradient-text">&amp; Technologies</span>
          </h1>
          <div className="flex items-center gap-4 mt-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
            <p className="font-body text-sm text-on-surface-variant">Les outils que je maîtrise au quotidien</p>
          </div>
        </section>

        {/* Skill Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Machine Learning Core */}
          <div className="lg:col-span-8 glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <span className="material-symbols-outlined text-8xl text-primary">psychology</span>
            </div>
            <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">neurology</span>
              Machine Learning &amp; IA
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-body text-sm text-on-surface">Deep Learning &amp; Neural Networks</span>
                  <span className="font-headline text-sm text-primary font-medium">Avancé</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-primary-dim h-full rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-body text-sm text-on-surface">NLP &amp; Traitement du langage</span>
                  <span className="font-headline text-sm text-on-surface-variant font-medium">Intermédiaire+</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/80 to-primary-dim/80 h-full rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-body text-sm text-on-surface">Computer Vision</span>
                  <span className="font-headline text-sm text-on-surface-variant font-medium">Intermédiaire</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/60 to-primary-dim/60 h-full rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stats Panel */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-headline text-sm text-secondary mb-4 font-medium">Confiance globale</h3>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-headline font-bold gradient-text">87</span>
                <span className="text-sm font-body text-on-surface-variant mb-1">/ 100</span>
              </div>
              <div className="grid grid-cols-10 gap-1 h-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
                ))}
                <div className="bg-white/5 rounded-full"></div>
              </div>
            </div>

            {/* DevOps / Outils */}
            <div className="glass rounded-2xl p-6">
              <h2 className="font-headline text-lg font-bold mb-6 text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">cloud</span>
                Cloud &amp; DevOps
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-on-surface-variant">Docker</span>
                  <span className="text-primary font-medium">Avancé</span>
                </div>
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-on-surface-variant">GCP / BigQuery</span>
                  <span className="text-primary font-medium">Avancé</span>
                </div>
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-on-surface-variant">Git / CI-CD</span>
                  <span className="text-primary font-medium">Courant</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Engineering Section */}
        <section className="mb-20">
          <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-4">
            <div className="w-10 h-[2px] bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
            Data Engineering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Traitement</p>
              <h3 className="font-headline text-lg font-bold mb-4">Spark &amp; Streaming</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Pipelines d'ingestion haute fréquence et traitement distribué en temps réel.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Stockage</p>
              <h3 className="font-headline text-lg font-bold mb-4">Data Warehousing</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Architecture et optimisation BigQuery &amp; Snowflake pour l'analyse à grande échelle.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Orchestration</p>
              <h3 className="font-headline text-lg font-bold mb-4">ETL &amp; Pipelines</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Automatisation du cycle de vie des données avec Airflow et Prefect.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-tertiary rounded-full"></div>
                <div className="flex-1 bg-tertiary rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Certifications */}
          <section>
            <h2 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">verified</span>
              Certifications
            </h2>
            <div className="space-y-4">
              <div className="glass rounded-xl p-5 flex items-center justify-between group card-hover">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">cloud</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">Google Cloud — Data Engineer</h4>
                    <p className="text-xs font-body text-on-surface-variant">Certification professionnelle</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-green-400/50">check_circle</span>
              </div>
              
              <div className="glass rounded-xl p-5 flex items-center justify-between group card-hover">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">database</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">AWS — Cloud Practitioner</h4>
                    <p className="text-xs font-body text-on-surface-variant">Certification fondamentale</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-green-400/50">check_circle</span>
              </div>
              
              <div className="glass rounded-xl p-5 flex items-center justify-between group card-hover">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">DeepLearning.AI — TensorFlow</h4>
                    <p className="text-xs font-body text-on-surface-variant">Spécialisation complète</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-green-400/50">check_circle</span>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">code</span>
              Langages de programmation
            </h2>
            <div className="glass rounded-2xl p-8">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-headline text-sm">Python</span>
                    <span className="text-xs text-primary font-medium">Langage principal</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-headline text-sm">SQL</span>
                    <span className="text-xs text-secondary font-medium">Usage quotidien</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary to-secondary-dim rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-headline text-sm">JavaScript / TypeScript</span>
                    <span className="text-xs text-on-surface-variant font-medium">Projets web</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
