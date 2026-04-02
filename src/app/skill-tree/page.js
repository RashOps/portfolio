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
            <p className="font-body text-sm text-on-surface-variant">Mon arsenal technique pour transformer la donnée</p>
          </div>
        </section>

        {/* Skill Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Data Science & IA Core */}
          <div className="lg:col-span-8 glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <span className="material-symbols-outlined text-8xl text-primary">psychology</span>
            </div>
            <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">neurology</span>
              Data Science &amp; IA
            </h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-body text-sm text-on-surface">NLP &amp; Traitement du langage (BERT, FastText, Sentiment Analysis)</span>
                  <span className="font-headline text-sm text-primary font-medium">Avancé</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary to-primary-dim h-full rounded-full" style={{ width: "88%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-body text-sm text-on-surface">Machine Learning (Clustering K-Means, Scikit-Learn)</span>
                  <span className="font-headline text-sm text-on-surface-variant font-medium">Expert</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/80 to-primary-dim/80 h-full rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-3">
                  <span className="font-body text-sm text-on-surface">Data Cleaning &amp; Statistiques descriptives (Pandas, NumPy)</span>
                  <span className="font-headline text-sm text-on-surface-variant font-medium">Maîtrise</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-primary/60 to-primary-dim/60 h-full rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stats Panel */}
          <div className="lg:col-span-4 space-y-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-headline text-sm text-secondary mb-4 font-medium">Indice de polyvalence</h3>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-headline font-bold gradient-text">92</span>
                <span className="text-sm font-body text-on-surface-variant mb-1">/ 100</span>
              </div>
              <div className="grid grid-cols-10 gap-1 h-2">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
                ))}
                <div className="bg-white/5 rounded-full"></div>
              </div>
            </div>

            {/* Outils & DevOps */}
            <div className="glass rounded-2xl p-6">
              <h2 className="font-headline text-lg font-bold mb-6 text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">terminal</span>
                Dev &amp; Ops
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-on-surface-variant">Docker / Gunicorn</span>
                  <span className="text-primary font-medium">Opérationnel</span>
                </div>
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-on-surface-variant">Git / GitHub</span>
                  <span className="text-primary font-medium">Courant</span>
                </div>
                <div className="flex justify-between items-center text-sm font-body">
                  <span className="text-on-surface-variant">n8n / Automatisation</span>
                  <span className="text-primary font-medium">Avancé</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Engineering Section */}
        <section className="mb-20">
          <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-4">
            <div className="w-10 h-[2px] bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
            Data Engineering & Architecture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Ingestion</p>
              <h3 className="font-headline text-lg font-bold mb-4">Architecture ETL</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Harmonisation de datasets hétérogènes (multi-sources) et optimisation des flux de données.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Base de données</p>
              <h3 className="font-headline text-lg font-bold mb-4">SQL & NoSQL</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Modélisation relationnelle (PostgreSQL, MySQL) et non-relationnelle (MongoDB). Triggers & Listen/Notify.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-secondary rounded-full"></div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Système</p>
              <h3 className="font-headline text-lg font-bold mb-4">DataOps & Intégrité</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Déploiement de workflows automatisés pour la surveillance temps réel des bases critiques.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-tertiary rounded-full"></div>
                <div className="flex-1 bg-tertiary rounded-full"></div>
                <div className="flex-1 bg-tertiary rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Dataviz & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Business Intelligence & Dataviz */}
          <section>
            <h2 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">monitoring</span>
              Business Intelligence & Dataviz
            </h2>
            <div className="space-y-4">
              <div className="glass rounded-xl p-5 flex items-center justify-between group card-hover">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">dashboard</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">Streamlit / Dash / Plotly</h4>
                    <p className="text-xs font-body text-on-surface-variant">Applications Data interactives</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-green-400/50">check_circle</span>
              </div>
              
              <div className="glass rounded-xl p-5 flex items-center justify-between group card-hover">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">bar_chart</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">Power BI</h4>
                    <p className="text-xs font-body text-on-surface-variant">Reporting Business & Analyse</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-green-400/50">check_circle</span>
              </div>
              
              <div className="glass rounded-xl p-5 flex items-center justify-between group card-hover">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">draw</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-sm">Figma / PlantUML</h4>
                    <p className="text-xs font-body text-on-surface-variant">Design UI & Modélisation Système</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-green-400/50">check_circle</span>
              </div>
            </div>
          </section>

          {/* Programming Languages */}
          <section>
            <h2 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">code</span>
              Maîtrise des langages
            </h2>
            <div className="glass rounded-2xl p-8">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-headline text-sm">Python</span>
                    <span className="text-xs text-primary font-medium">Expert (Analyse & Scripting)</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-headline text-sm">SQL (PostgreSQL, MySQL)</span>
                    <span className="text-xs text-secondary font-medium">Avancé</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary to-secondary-dim rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-headline text-sm">Anglais</span>
                    <span className="text-xs text-on-surface-variant font-medium">Courant (Professionnel)</span>
                  </div>
                  <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim rounded-full" style={{ width: "80%" }}></div>
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
