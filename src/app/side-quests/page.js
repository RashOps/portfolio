export default function SideQuests() {
  const explorations = [
    {
      title: "OmniHub",
      status: "Terminé",
      description: "Dashboard d'organisation personnelle (To-Do, Contacts, Notes) avec une interface moderne en Glassmorphism. Architecture Fullstack découplée.",
      techs: ["React", "Node.js", "Express", "Joi"],
      icon: "dashboard_customize"
    },
    {
      title: "Netflix & Happiness",
      status: "Terminé",
      description: "Analyse exploratoire et harmonisation de datasets hétérogènes. Création d'une application multi-pages interactive pour l'aide à la décision.",
      techs: ["Streamlit", "Plotly", "Pandas", "ETL"],
      icon: "leaderboard"
    },
    {
      title: "Workflow SQL & IA",
      status: "Terminé",
      description: "Système de monitoring de base de données PostgreSQL utilisant des Triggers et n8n pour envoyer des notifications intelligentes via OpenAI.",
      techs: ["n8n", "PostgreSQL", "OpenAI", "Docker"],
      icon: "hub"
    }
  ];

  return (
    <>
      <div className="px-6 py-10 md:p-12 relative overflow-hidden min-h-[calc(100vh-64px)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tertiary/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <header className="relative z-10 mb-16">
          <div className="flex justify-between items-end gap-6 mb-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight leading-none mb-4">
                Explorations
              </h1>
              <p className="text-on-surface-variant font-body text-sm max-w-2xl leading-relaxed">
                Projets personnels, expérimentations et sujets de curiosité. C'est ici que je teste de nouvelles idées en dehors du cadre académique.
              </p>
            </div>
            <div className="text-right hidden sm:block">
              <div className="text-sm text-primary font-headline font-medium mb-1">{explorations.length} explorations</div>
              <div className="text-xs text-on-surface-variant font-body">Profil polyvalent</div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-3">
            <div className="flex justify-between items-center px-3 py-2">
              <span className="text-xs font-body text-on-surface-variant">Progression technique</span>
              <span className="text-xs font-headline text-primary font-bold">100%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full transition-all duration-1000" style={{ width: "100%" }}></div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {explorations.map((exp, i) => (
            <div key={i} className="glass rounded-2xl group card-hover flex flex-col relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="text-xs font-body text-secondary bg-secondary/10 px-2.5 py-1 rounded-full font-medium">{exp.status}</span>
              </div>
              <div className="p-8">
                <div className="mb-6">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>{exp.icon}</span>
                  <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{exp.title}</h3>
                </div>
                <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed h-20">
                  {exp.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-body text-on-surface-variant mb-3">Technologies :</div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techs.map(tech => (
                        <span key={tech} className="glass rounded-lg px-3 py-1.5 text-[10px] font-body text-primary uppercase font-bold tracking-wider">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-tertiary transition-all duration-700 absolute bottom-0 rounded-full"></div>
            </div>
          ))}

          {/* Locked Card */}
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
                Mise en production de modèles ML avec monitoring et versioning automatisé.
              </p>
              <button className="w-full py-3 glass rounded-xl text-sm font-body text-on-surface-variant/40">
                Prochainement
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
