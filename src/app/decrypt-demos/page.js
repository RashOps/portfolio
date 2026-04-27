import Image from "next/image";
import Link from "next/link";

export default function DecryptDemos() {
  const demos = [
    {
      title: "EchoPulse NLP",
      icon: "visibility",
      status: "En ligne",
      description: "Dashboard interactif d'analyse de sentiment et topic modeling sur des feedbacks clients. Moteur NLP TextBlob.",
      color: "primary",
      link: "https://echopulse-customer-voice.onrender.com/"
    },
    {
      title: "Segmentation IA",
      icon: "groups",
      status: "En ligne",
      description: "Moteur de recommandation marketing basé sur le clustering K-Means. Segmentation RFM automatisée.",
      color: "secondary",
      link: "https://huggingface.co/spaces/RashOps/rfm-segmentation-kmeans"
    },
    {
      title: "MarketPulse Engine",
      icon: "trending_up",
      status: "Accès Privé",
      description: "Analyse en temps réel des clusters d'actifs financiers via PCA & K-Means. Visualisation des news et news sentiments.",
      color: "tertiary",
      link: "/decrypt-demos/marketpulse-ai",
      internal: true
    },
    {
      title: "FinSight RAG",
      icon: "hub",
      status: "Accès Privé",
      description: "Console de recherche RAG connectée à une API FastAPI. Extraction sémantique (LlamaIndex, Qdrant) et génération augmentée (Groq Llama-3).",
      color: "green-400",
      link: "/decrypt-demos/finsight-rag",
      internal: true
    }
  ];

  return (
    <>
      <div className="relative pt-8 pb-32 px-6 lg:px-12 max-w-[1440px]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <section className="mb-12 space-y-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-2xl">science</span>
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Playground</h1>
            </div>
            <p className="font-body text-on-surface-variant text-sm max-w-2xl leading-relaxed">
              Espace d'expérimentation et de démonstrations interactives. Testez mes modèles d'Intelligence Artificielle en direct.
            </p>
          </div>
          
          <div className="glass rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-body text-sm text-on-surface-variant">Services Opérationnels</span>
              <span className="font-headline text-sm text-primary font-bold">4 / 4</span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-tertiary h-full rounded-full transition-all duration-1000" style={{ width: "100%" }}></div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
          <aside className="lg:col-span-4 space-y-8">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-headline text-sm text-primary mb-4 font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Démos Actives
              </h3>
              <div className="font-body text-sm text-on-surface-variant space-y-3 leading-relaxed">
                <p>Ces démos sont connectées à des modèles de Machine Learning entraînés sur des données réelles.</p>
                <p>Elles démontrent ma capacité à transformer des algorithmes complexes en interfaces décisionnelles fluides.</p>
              </div>
            </div>
          </aside>
          
          <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {demos.map((demo, i) => (
                <div key={i} className="group glass rounded-2xl card-hover flex flex-col h-full">
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 glass rounded-xl flex items-center justify-center group-hover:bg-${demo.color}/10 transition-all`}>
                        <span className={`material-symbols-outlined text-${demo.color} text-2xl`}>{demo.icon}</span>
                      </div>
                      <div className={`text-xs font-body ${demo.status === "En ligne" ? "text-green-400" : "text-primary"} font-medium`}>{demo.status}</div>
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">{demo.title}</h3>
                    <p className="text-on-surface-variant text-sm mb-8 leading-relaxed font-body flex-grow">
                      {demo.description}
                    </p>
                    <div className="mt-auto">
                      {demo.internal ? (
                        <Link href={demo.link} className="w-full bg-gradient-to-r from-primary to-tertiary text-white text-sm font-body font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]">
                          Ouvrir la console
                          <span className="material-symbols-outlined text-sm">terminal</span>
                        </Link>
                      ) : (
                        <a href={demo.link} target="_blank" rel="noopener noreferrer" className={`w-full bg-gradient-to-r from-${demo.color} to-${demo.color}-dim text-white text-sm font-body font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-${demo.color}/20 active:scale-[0.98]`}>
                          Lancer la démo
                          <span className="material-symbols-outlined text-sm">play_arrow</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
