export default function SideQuests() {
  return (
    <>
      <div className="p-10 relative overflow-hidden min-h-[calc(100vh-64px)]">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        {/* Page Header */}
        <header className="relative z-10 mb-16">
          <div className="flex justify-between items-end gap-6 mb-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tight leading-none mb-4">
                Explorations
              </h1>
              <p className="text-on-surface-variant font-body text-sm max-w-2xl leading-relaxed">
                Projets personnels, expérimentations et sujets de curiosité. C'est ici que je teste de nouvelles idées en dehors du cadre académique.
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-sm text-primary font-headline font-medium mb-1">6 explorations</div>
              <div className="text-xs text-on-surface-variant font-body">dont 3 en cours</div>
            </div>
          </div>
          
          {/* Progress */}
          <div className="glass rounded-xl p-3">
            <div className="flex justify-between items-center px-3 py-2">
              <span className="text-xs font-body text-on-surface-variant">Progression globale</span>
              <span className="text-xs font-headline text-primary font-bold">68%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full transition-all duration-1000" style={{ width: "68%" }}></div>
            </div>
          </div>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {/* Card 1 */}
          <div className="glass rounded-2xl group card-hover flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-body text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full font-medium">En cours</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Générateur de contenu IA</h3>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed">
                Expérimentation avec les LLMs pour la génération automatique de résumés et de rapports à partir de données structurées.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-3">Technologies :</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="glass rounded-lg px-3 py-1.5 text-xs font-body text-primary">LangChain</span>
                    <span className="glass rounded-lg px-3 py-1.5 text-xs font-body text-primary">OpenAI API</span>
                  </div>
                </div>
                <button className="w-full py-3 glass rounded-xl hover:bg-primary/10 text-sm font-body text-primary font-medium transition-all">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-tertiary transition-all duration-700 absolute bottom-0 rounded-full"></div>
          </div>

          {/* Card 2 (Completed) */}
          <div className="glass rounded-2xl group card-hover flex flex-col relative opacity-80 hover:opacity-100 transition-opacity">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-body text-secondary bg-secondary/10 px-2.5 py-1 rounded-full font-medium">Terminé</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Éthique de l'IA</h3>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed">
                Recherche sur les biais algorithmiques et les implications éthiques des modèles de machine learning dans la prise de décision.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-3">Domaines :</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="glass rounded-lg px-3 py-1.5 text-xs font-body text-secondary">Fairness ML</span>
                    <span className="glass rounded-lg px-3 py-1.5 text-xs font-body text-secondary">Gouvernance data</span>
                  </div>
                </div>
                <button className="w-full py-3 glass rounded-xl text-sm font-body text-on-surface-variant cursor-default">
                  Exploration terminée
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass rounded-2xl group card-hover flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-body text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full font-medium">En cours</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>monitoring</span>
                <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Data Viz avec D3.js</h3>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed">
                Création de visualisations interactives et animées pour rendre les données complexes accessibles et compréhensibles.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-3">Technologies :</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="glass rounded-lg px-3 py-1.5 text-xs font-body text-primary">D3.js</span>
                    <span className="glass rounded-lg px-3 py-1.5 text-xs font-body text-primary">Observable</span>
                  </div>
                </div>
                <button className="w-full py-3 glass rounded-xl hover:bg-primary/10 text-sm font-body text-primary font-medium transition-all">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-tertiary transition-all duration-700 absolute bottom-0 rounded-full"></div>
          </div>

          {/* Card 4 (Locked) */}
          <div className="glass rounded-2xl flex flex-col relative opacity-30 grayscale pointer-events-none">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-body text-on-surface-variant bg-white/5 px-2.5 py-1 rounded-full">Bientôt</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-on-surface-variant text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                <h3 className="text-xl font-headline font-bold text-on-surface-variant">MLOps Pipeline</h3>
              </div>
              <p className="text-sm text-on-surface-variant/60 font-body mb-8">
                Mise en production de modèles ML avec monitoring, versioning et déploiement automatisé.
              </p>
              <button className="w-full py-3 glass rounded-xl text-sm font-body text-on-surface-variant/40">
                Prochainement
              </button>
            </div>
          </div>

          {/* Card 5 */}
          <div className="glass rounded-2xl group card-hover flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <span className="text-xs font-body text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full font-medium">En cours</span>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>article</span>
                <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Blog technique</h3>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed">
                Rédaction d'articles de vulgarisation sur le machine learning, la data science et les bonnes pratiques en ingénierie des données.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-3">Sujets :</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="glass rounded-lg px-3 py-1.5 text-xs font-body text-primary">Vulgarisation ML</span>
                  </div>
                </div>
                <button className="w-full py-3 glass rounded-xl hover:bg-primary/10 text-sm font-body text-primary font-medium transition-all">
                  En savoir plus
                </button>
              </div>
            </div>
            <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-tertiary transition-all duration-700 absolute bottom-0 rounded-full"></div>
          </div>

          {/* Add New Card */}
          <div className="border-2 border-dashed border-white/10 rounded-2xl group hover:border-primary/30 transition-all duration-500 flex flex-col items-center justify-center min-h-[400px] cursor-pointer relative overflow-hidden">
            <div className="relative">
              <span className="material-symbols-outlined text-on-surface-variant/30 text-6xl group-hover:text-primary transition-all duration-500 group-hover:rotate-90" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
              <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
            </div>
            <span className="mt-6 text-sm font-body text-on-surface-variant/30 group-hover:text-primary transition-colors font-medium">Nouvelle exploration</span>
          </div>
        </div>
      </div>
    </>
  );
}
