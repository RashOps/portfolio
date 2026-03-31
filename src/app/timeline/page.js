export default function Timeline() {
  return (
    <>
      <div className="p-10 relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <header className="mb-12 relative z-10">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-body text-sm text-on-surface-variant">Formation &amp; Expériences</span>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tight mb-4">
            Mon <span className="gradient-text">Parcours</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-body text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">school</span>
              <span>Double cursus Tech &amp; Business</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
              <span>France</span>
            </div>
          </div>
        </header>

        {/* Split Timeline */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* FORMATION */}
          <div className="relative pl-12" id="academic-path">
            <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-primary">school</span>
              <h2 className="font-headline text-lg text-on-surface font-bold">Formation</h2>
            </div>
            {/* Vertical Line */}
            <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-primary to-tertiary rounded-full"></div>
            </div>
            
            <div className="space-y-12">
              {/* Entry 1 */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-primary/60 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-secondary mb-2">2024 — En cours</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Cursus Data &amp; Intelligence Artificielle</h4>
                  <div className="text-sm font-body text-on-surface-variant mb-3">PSTB — Paris School of Technology &amp; Business</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 glass rounded-lg text-xs text-primary">Machine Learning</span>
                    <span className="px-2 py-1 glass rounded-lg text-xs text-primary">Data Science</span>
                  </div>
                </div>
              </div>

              {/* Entry 2 */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-primary/40 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary/80 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-secondary mb-2">2024 — En cours</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Programme Grande École — Business</h4>
                  <div className="text-sm font-body text-on-surface-variant mb-3">Excelia Business School</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 glass rounded-lg text-xs text-secondary">Management</span>
                    <span className="px-2 py-1 glass rounded-lg text-xs text-secondary">Stratégie</span>
                  </div>
                </div>
              </div>

              {/* Entry 3 */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">verified</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 opacity-60">
                  <div className="font-body text-xs text-on-surface-variant mb-2">Avant 2024</div>
                  <h4 className="font-headline text-lg text-on-surface-variant mb-1 font-bold">Baccalauréat</h4>
                  <div className="text-sm font-body text-on-surface-variant/60">Spécialités scientifiques</div>
                </div>
              </div>
            </div>
          </div>

          {/* EXPÉRIENCES PROFESSIONNELLES */}
          <div className="relative pl-12" id="professional-path">
            <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-secondary">work</span>
              <h2 className="font-headline text-lg text-on-surface font-bold">Expériences</h2>
            </div>
            {/* Vertical Line */}
            <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-[80%] bg-gradient-to-b from-secondary to-primary rounded-full"></div>
            </div>
            
            <div className="space-y-12">
              {/* Entry 1 */}
              <div className="relative">
                <div className="absolute -left-12 top-0">
                  <div className="w-12 h-12 bg-surface rounded-full border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/10">
                    <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-green-400 mb-2">En recherche — Stage / Alternance</div>
                  <h4 className="font-headline text-xl text-primary mb-1 font-bold">Prochaine aventure</h4>
                  <div className="text-sm font-body text-on-surface-variant">À la recherche d'un stage ou d'une alternance en Data Science / IA</div>
                  <p className="text-on-surface-variant text-sm mt-3 leading-relaxed font-body">
                    Motivé pour appliquer mes compétences en analyse de données et en machine learning dans un environnement professionnel stimulant.
                  </p>
                </div>
              </div>

              {/* Entry 2 */}
              <div className="relative">
                <div className="absolute -left-10 top-0">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-secondary/50 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">code</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-secondary mb-2">2024 — Présent</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Projets personnels &amp; Portfolio</h4>
                  <div className="text-sm font-body text-on-surface-variant">Freelance / Auto-formation</div>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="px-2 py-1 glass rounded-lg text-xs text-on-surface-variant">Python</span>
                    <span className="px-2 py-1 glass rounded-lg text-xs text-on-surface-variant">Next.js</span>
                    <span className="px-2 py-1 glass rounded-lg text-xs text-on-surface-variant">TensorFlow</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Double cursus</span>
              <span className="material-symbols-outlined text-primary text-lg">school</span>
            </div>
            <div className="text-2xl font-headline font-bold gradient-text">Tech &amp; Business</div>
            <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full w-3/4"></div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Projets réalisés</span>
              <span className="material-symbols-outlined text-secondary text-lg">insights</span>
            </div>
            <div className="text-2xl font-headline font-bold text-secondary">10+</div>
            <div className="text-xs font-body text-on-surface-variant mt-2">En Data, IA &amp; Web</div>
          </div>
          
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Disponibilité</span>
              <span className="material-symbols-outlined text-green-400 text-lg">check_circle</span>
            </div>
            <div className="text-2xl font-headline font-bold text-green-400">Disponible</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-body text-on-surface-variant">Stage / Alternance</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
