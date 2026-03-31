import Link from "next/link";
import Image from "next/image";

export default function MissionLog() {
  return (
    <>
      <div className="p-8">
        {/* HEADER SECTION */}
        <section className="mb-12" id="projects">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
            <span className="font-body text-sm text-on-surface-variant">Portfolio de projets</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-headline font-bold tracking-tight text-on-surface mb-4">
            Projets
          </h1>
          <p className="max-w-2xl text-on-surface-variant font-body text-sm leading-relaxed">
            Une sélection de mes projets en Data Science, Intelligence Artificielle et développement. Chaque projet illustre une approche concrète de résolution de problèmes avec la donnée.
          </p>
        </section>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-12 border-y border-white/5 py-4">
          <button className="font-body text-xs px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium">Tous</button>
          <button className="font-body text-xs px-4 py-2 rounded-lg glass text-on-surface-variant hover:text-primary hover:border-primary/20 transition-all">Machine Learning</button>
          <button className="font-body text-xs px-4 py-2 rounded-lg glass text-on-surface-variant hover:text-primary hover:border-primary/20 transition-all">Data Engineering</button>
          <button className="font-body text-xs px-4 py-2 rounded-lg glass text-on-surface-variant hover:text-primary hover:border-primary/20 transition-all">Web & App</button>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PROJECT CARD 1 */}
          <Link href="#" className="group glass rounded-2xl overflow-hidden card-hover block">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-body text-xs text-secondary mb-1 block">Machine Learning</span>
                  <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Prédiction de churn</h3>
                </div>
                <div className="px-2.5 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-body font-medium">Terminé</div>
              </div>
              <div className="aspect-video mb-4 rounded-xl overflow-hidden relative bg-surface-container">
                <Image 
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" 
                  alt="Visualisation d'un modèle de prédiction de churn client" 
                  src="/assets/images/mission_1.jpg"
                />
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-4 leading-relaxed">
                Modèle XGBoost pour identifier les clients à risque de désabonnement. Pipeline complet de préparation des données à la mise en production.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">Python</span>
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">XGBoost</span>
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">Pandas</span>
              </div>
              <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-body text-primary">Voir le détail</span>
                <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* PROJECT CARD 2 */}
          <Link href="#" className="group glass rounded-2xl overflow-hidden card-hover block">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-body text-xs text-primary mb-1 block">Data Engineering</span>
                  <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Pipeline ETL Cloud</h3>
                </div>
                <div className="px-2.5 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-body font-medium">Terminé</div>
              </div>
              <div className="aspect-video mb-4 rounded-xl overflow-hidden relative bg-surface-container">
                <Image 
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" 
                  alt="Architecture d'un pipeline de données cloud" 
                  src="/assets/images/mission_2.jpg"
                />
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-4 leading-relaxed">
                Architecture de données sur GCP pour le traitement de flux en temps réel. Automatisation ETL avec Airflow et stockage BigQuery.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">Python</span>
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">GCP</span>
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">Airflow</span>
              </div>
              <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-body text-primary">Voir le détail</span>
                <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* PROJECT CARD 3 */}
          <Link href="#" className="group glass rounded-2xl overflow-hidden card-hover block">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="font-body text-xs text-tertiary mb-1 block">NLP / Deep Learning</span>
                  <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Chatbot intelligent</h3>
                </div>
                <div className="px-2.5 py-1 bg-primary/10 text-primary rounded-full text-xs font-body font-medium">En cours</div>
              </div>
              <div className="aspect-video mb-4 rounded-xl overflow-hidden relative bg-surface-container">
                <Image 
                  fill
                  className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" 
                  alt="Interface d'un chatbot conversationnel intelligent" 
                  src="/assets/images/mission_3.jpg"
                />
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-4 leading-relaxed">
                Assistant conversationnel intégré à ce portfolio. Utilise Gemini via Vercel AI SDK pour guider les visiteurs.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">Next.js</span>
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">Gemini</span>
                <span className="px-3 py-1 glass rounded-lg text-xs font-body text-on-surface-variant">AI SDK</span>
              </div>
              <div className="mt-4 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-body text-primary">Voir le détail</span>
                <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* PROJECT CARD 4 (Full Width) */}
          <div className="lg:col-span-3 glass rounded-2xl overflow-hidden card-hover group">
            <div className="flex flex-col lg:flex-row gap-8 items-center p-8">
              <div className="w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden relative bg-surface-container">
                <Image 
                  fill
                  className="object-cover opacity-50 group-hover:scale-105 transition-all duration-700" 
                  alt="Dashboard de monitoring avec visualisations de données" 
                  src="/assets/images/mission_4.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl group-hover:scale-110 transition-all">play_circle</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="font-body text-xs text-secondary mb-2 block">Projet phare</span>
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">Ce Portfolio</h2>
                <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed max-w-md">
                  Un portfolio interactif construit avec Next.js, intégrant un assistant IA conversationnel. Design "Modern AI Lab" pensé pour montrer l'alliance entre expertise technique et vision business.
                </p>
                <Link href="/decrypt-demos" className="inline-block bg-gradient-to-r from-primary to-tertiary text-white px-8 py-3 rounded-xl font-body text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                  Explorer le playground
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
