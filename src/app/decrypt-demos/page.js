import Image from "next/image";

export default function DecryptDemos() {
  return (
    <>
      <div className="relative pt-8 pb-32 px-6 lg:px-12 max-w-[1440px]">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        {/* Header */}
        <section className="mb-12 space-y-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">science</span>
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Playground</h1>
            </div>
            <p className="font-body text-on-surface-variant text-sm max-w-2xl leading-relaxed">
              Espace d'expérimentation et de démonstrations interactives. Testez mes projets en direct et explorez les possibilités de la Data &amp; de l'IA.
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="glass rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-body text-sm text-on-surface-variant">Projets déployés</span>
              <span className="font-headline text-sm text-primary font-bold">3 / 5</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-tertiary h-full rounded-full transition-all duration-1000" style={{ width: "60%" }}></div>
            </div>
          </div>
        </section>

        {/* Demo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          {/* Sidebar Info */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-headline text-sm text-primary mb-4 font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Environnement actif
              </h3>
              <div className="font-body text-sm text-on-surface-variant space-y-3 leading-relaxed">
                <p>Les démos ci-dessous sont des projets fonctionnels que vous pouvez tester directement dans votre navigateur.</p>
                <p>Chaque démo illustre un concept différent : machine learning, visualisation de données ou traitement du langage naturel.</p>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5 flex gap-4">
                <span className="text-xs font-body text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-green-400">check_circle</span>
                  3 actives
                </span>
                <span className="text-xs font-body text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs text-primary">schedule</span>
                  2 en dev
                </span>
              </div>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h4 className="font-headline text-sm text-on-surface-variant mb-4">Technologies utilisées</h4>
              <div className="aspect-square rounded-xl overflow-hidden relative bg-surface-container">
                <Image 
                  fill
                  className="object-cover opacity-20 transition-all duration-500" 
                  alt="Visualisation de technologies de données et intelligence artificielle" 
                  src="/assets/images/decrypt_hero.jpg"
                />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-3 w-full">
                    <div className="h-2 bg-primary/40 rounded-full"></div>
                    <div className="h-2 bg-primary/10 rounded-full"></div>
                    <div className="h-2 bg-primary/60 rounded-full"></div>
                    <div className="h-2 bg-secondary/40 rounded-full"></div>
                    <div className="h-2 bg-tertiary/40 rounded-full"></div>
                    <div className="h-2 bg-secondary/60 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          
          {/* Main: Demo Cards */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <h2 className="font-headline text-2xl font-bold flex items-center gap-3">
                <span className="gradient-text">/</span> Démos disponibles
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="group glass rounded-2xl card-hover">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 glass rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-all">
                      <span className="material-symbols-outlined text-primary text-2xl">visibility</span>
                    </div>
                    <div className="text-xs font-body text-green-400 font-medium">En ligne</div>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">Visualisation de données</h3>
                  <p className="text-on-surface-variant text-sm mb-8 leading-relaxed font-body">
                    Dashboard interactif de visualisation de jeux de données avec graphiques dynamiques et filtres en temps réel.
                  </p>
                  <div className="mt-auto">
                    <button className="w-full bg-gradient-to-r from-primary to-tertiary text-white text-sm font-body font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]">
                      Lancer la démo
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Card 2 */}
              <div className="group glass rounded-2xl card-hover">
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 glass rounded-xl flex items-center justify-center group-hover:bg-secondary/10 transition-all">
                      <span className="material-symbols-outlined text-secondary text-2xl">smart_toy</span>
                    </div>
                    <div className="text-xs font-body text-green-400 font-medium">En ligne</div>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">Assistant IA</h3>
                  <p className="text-on-surface-variant text-sm mb-8 leading-relaxed font-body">
                    Chatbot conversationnel intégré à ce portfolio. Posez-lui des questions sur mon profil et mes projets.
                  </p>
                  <div className="mt-auto">
                    <button className="w-full bg-gradient-to-r from-secondary to-secondary-dim text-white text-sm font-body font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-secondary/20 active:scale-[0.98]">
                      Lancer la démo
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Card 3 (Wide) */}
              <div className="group glass rounded-2xl card-hover md:col-span-2">
                <div className="p-8 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-2/5 aspect-video rounded-xl overflow-hidden relative bg-surface-container">
                    <Image 
                      fill
                      className="object-cover opacity-25 group-hover:scale-105 transition-transform duration-700 z-0" 
                      alt="Visualisation de modèle de machine learning prédictif" 
                      src="/assets/images/decrypt_bg.jpg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 glass rounded-xl">
                        <span className="material-symbols-outlined text-primary text-4xl">analytics</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-body text-primary font-medium mb-2">Projet en vedette</div>
                    <h3 className="font-headline text-2xl font-bold mb-4">Modèle de prédiction ML</h3>
                    <p className="text-on-surface-variant text-sm mb-8 max-w-lg leading-relaxed font-body">
                      Explorez un modèle de machine learning entraîné sur des données réelles. Visualisez les prédictions, les métriques de performance et l'importance des features en temps réel.
                    </p>
                    <button className="bg-gradient-to-r from-primary to-tertiary text-white text-sm font-body font-medium px-8 py-3 rounded-xl inline-flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]">
                      Explorer le modèle
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
