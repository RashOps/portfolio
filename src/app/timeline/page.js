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
              <span>Double cursus Bachelor IA & Business</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
              <span>Paris / International</span>
            </div>
          </div>
        </header>

        {/* Split Timeline */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* FORMATION */}
          <div className="relative pl-12" id="academic-path">
            <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-primary">school</span>
              <h2 className="font-headline text-lg text-on-surface font-bold">Formation Académique</h2>
            </div>
            {/* Vertical Line */}
            <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-[85%] bg-gradient-to-b from-primary to-tertiary rounded-full"></div>
            </div>
            
            <div className="space-y-12">
              {/* Entry 1 - Master IA */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm animate-pulse">rocket_launch</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-secondary mb-2">2026 — 2028 (Admis)</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Master Data Intelligence Artificielle</h4>
                  <div className="text-sm font-body text-on-surface-variant mb-3">Nexa Digital School / PSTB / Efrei</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 glass rounded-lg text-xs text-primary">Master Spécialisé</span>
                    <span className="px-2 py-1 glass rounded-lg text-xs text-primary">IA Avancée</span>
                  </div>
                </div>
              </div>

              {/* Entry 2 - Bachelor Double Diplôme */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-primary/60 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover border border-primary/20 bg-primary/5">
                  <div className="font-body text-xs text-secondary mb-2">2025 — 2026</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Double Diplôme PSTB & Excelia</h4>
                  <div className="text-sm font-body text-on-surface-variant mb-3">Bachelor IA & Data (PSTB) + Bachelor Business (Excelia)</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-2 py-1 glass rounded-lg text-xs text-primary">Data Science</span>
                    <span className="px-2 py-1 glass rounded-lg text-xs text-secondary">Business Strategy</span>
                  </div>
                </div>
              </div>

              {/* Entry 3 - Baccalauréat */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">verified</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 opacity-60">
                  <div className="font-body text-xs text-on-surface-variant mb-2">Avant 2024</div>
                  <h4 className="font-headline text-lg text-on-surface-variant mb-1 font-bold">Baccalauréat Scientifique</h4>
                  <div className="text-sm font-body text-on-surface-variant/60">Mention & Spécialités Scientifiques</div>
                </div>
              </div>
            </div>
          </div>

          {/* EXPÉRIENCES PROFESSIONNELLES */}
          <div className="relative pl-12" id="professional-path">
            <div className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-secondary">work</span>
              <h2 className="font-headline text-lg text-on-surface font-bold">Expériences & Missions</h2>
            </div>
            {/* Vertical Line */}
            <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-[90%] bg-gradient-to-b from-secondary to-primary rounded-full"></div>
            </div>
            
            <div className="space-y-12">
              {/* AESIO */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">campaign</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-primary mb-2">Février 2026 — Aujourd'hui</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Responsable Communication & Digital</h4>
                  <div className="text-sm font-body text-on-surface-variant font-medium">AESIO (Association étudiante)</div>
                  <p className="text-on-surface-variant text-xs mt-3 leading-relaxed font-body">
                    Leadership & Gouvernance numérique. Standardisation des processus de production et Knowledge Management via Google Cloud Drive.
                  </p>
                </div>
              </div>

              {/* BDE PSTB */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-sm">analytics</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-secondary mb-2">Septembre 2025 — Aujourd'hui</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Chargé de Communication & Analyse Data</h4>
                  <div className="text-sm font-body text-on-surface-variant font-medium">BDE PSTB — Paris</div>
                  <p className="text-on-surface-variant text-xs mt-3 leading-relaxed font-body">
                    Analyse de l'engagement Social Media et segmentation des canaux de diffusion. Gestion de projet événementiel (20+ événements).
                  </p>
                </div>
              </div>

              {/* Orange CI */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-tertiary flex items-center justify-center">
                    <span className="material-symbols-outlined text-tertiary text-sm">settings_input_component</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-tertiary mb-2">Mai 2025 — Août 2025</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Stage Assistant Ingénieur Data</h4>
                  <div className="text-sm font-body text-on-surface-variant font-medium">Orange Côte d'Ivoire — Abidjan</div>
                  <p className="text-on-surface-variant text-xs mt-3 leading-relaxed font-body">
                    Déploiement de workflows automatisés (DataOps) avec n8n pour la surveillance temps réel de bases PostgreSQL.
                  </p>
                </div>
              </div>

              {/* Emmaüs */}
              <div className="relative">
                <div className="absolute -left-10 top-1">
                  <div className="w-8 h-8 bg-surface rounded-full border-2 border-white/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-sm">inventory_2</span>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="font-body text-xs text-on-surface-variant mb-2">Janvier 2025 — Avril 2025</div>
                  <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">Stage Analyste des Stocks</h4>
                  <div className="text-sm font-body text-on-surface-variant font-medium">Emmaüs Krefeld — Allemagne</div>
                  <p className="text-on-surface-variant text-xs mt-3 leading-relaxed font-body">
                    Supply Chain & Merchandising Data-Driven. Analyse des flux et clustering des comportements clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Expertise Hybride</span>
              <span className="material-symbols-outlined text-primary text-lg">psychology</span>
            </div>
            <div className="text-2xl font-headline font-bold gradient-text">PSTB &amp; Excelia</div>
            <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full w-[95%]"></div>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Expérience Pro</span>
              <span className="material-symbols-outlined text-secondary text-lg">work_history</span>
            </div>
            <div className="text-2xl font-headline font-bold text-secondary">4 Missions</div>
            <div className="text-xs font-body text-on-surface-variant mt-2">Data, Comm & Supply Chain</div>
          </div>
          
          <div className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Mobilité</span>
              <span className="material-symbols-outlined text-green-400 text-lg">public</span>
            </div>
            <div className="text-2xl font-headline font-bold text-green-400">International</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-body text-on-surface-variant">Disponible Alternance 24m</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
