import Link from "next/link";
import Image from "next/image";

export default function MissionLog() {
  const projects = [
    {
      id: "echopulse",
      title: "EchoPulse",
      category: "NLP & Data Science",
      status: "Déployé",
      description: "Customer Sentiment & Insight Engine. Dashboard identifiant les frictions produits via l'analyse automatisée de feedbacks non structurés (Sentiment Analysis & Topic Modeling).",
      stack: ["Python", "Dash", "TextBlob", "NLP"],
      image: "/assets/images/mission_1.jpg",
      links: {
        live: "https://echopulse-customer-voice.onrender.com/",
        github: "https://github.com/RashOps/echopulse-customer-voice"
      }
    },
    {
      id: "marketpulse",
      title: "MarketPulse AI",
      category: "ML Engine & Backend",
      status: "Terminé",
      description: "Moteur de segmentation de marché en temps réel utilisant l'apprentissage non supervisé (Standardization → PCA → K-Means). API haute performance avec FastAPI et MongoDB.",
      stack: ["FastAPI", "MongoDB", "PCA", "K-Means", "uv"],
      image: "/assets/images/mission_4.jpg",
      links: {
        live: "/decrypt-demos/marketpulse-ai",
        github: "https://github.com/RashOps/MarketPulse-IA"
      }
    },
    {
      id: "n8n-workflow",
      title: "Workflow n8n & SQL",
      category: "DataOps & Automatisation",
      status: "Terminé",
      description: "Système de surveillance temps réel garantissant l'intégrité de bases critiques via l'écoute d'événements SQL (Triggers) et la génération d'alertes par agent IA (OpenAI).",
      stack: ["PostgreSQL", "n8n", "Docker", "OpenAI"],
      image: "/assets/images/mission_2.jpg",
      links: {
        github: "https://github.com/RashOps/postgreSQL_workflow"
      }
    },
    {
      id: "segmentation-rfm",
      title: "Segmentation IA (RFM)",
      category: "Machine Learning",
      status: "Déployé",
      description: "Moteur de recommandation e-commerce basé sur le modèle RFM (Clustering K-Means) prescrivant des actions marketing ciblées (Rétention, Up-sell) selon les profils.",
      stack: ["Scikit-Learn", "Pandas", "Streamlit", "ML"],
      image: "/assets/images/mission_3.jpg",
      links: {
        live: "https://huggingface.co/spaces/RashOps/rfm-segmentation-kmeans",
        github: "https://github.com/RashOps/rfm-segmentation-kmeans"
      }
    },
    {
      id: "dataviz-dashboard",
      title: "Netflix & Happiness",
      category: "Data Visualisation",
      status: "Déployé",
      description: "Application web multi-pages de data visualisation complète. Harmonisation de datasets complexes et création de dashboards interactifs avec Plotly et Seaborn.",
      stack: ["Streamlit", "Plotly", "Seaborn", "EDA"],
      image: "/assets/images/home_card1.jpg",
      links: {
        live: "https://mon-projet-dataviz.streamlit.app/",
        github: "https://github.com/RashOps/projet-data-visualisation"
      }
    },
    {
      id: "omnihub",
      title: "OmniHub",
      category: "Fullstack Development",
      status: "Terminé",
      description: "Dashboard d'organisation personnelle (To-Do, Contacts, Notes) avec interface Glassmorphism. Architecture découplée React/Node.js et validation de données Joi.",
      stack: ["React", "Node.js", "Express", "Ky", "CSS3"],
      image: "/assets/images/home_card2.jpg",
      links: {
        github: "https://github.com/RashOps/OmniHub"
      }
    }
  ];

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
            Missions & Réalisations
          </h1>
          <p className="max-w-2xl text-on-surface-variant font-body text-sm leading-relaxed">
            Une sélection de mes projets techniques alliant Data Science, Engineering et vision Business. Chaque mission illustre une transformation de données complexes en actifs stratégiques et actionnables.
          </p>
        </section>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 mb-12 border-y border-white/5 py-4">
          <button className="font-body text-xs px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium">Tous</button>
          <button className="font-body text-xs px-4 py-2 rounded-lg glass text-on-surface-variant hover:text-primary hover:border-primary/20 transition-all">Machine Learning</button>
          <button className="font-body text-xs px-4 py-2 rounded-lg glass text-on-surface-variant hover:text-primary hover:border-primary/20 transition-all">Data Engineering</button>
          <button className="font-body text-xs px-4 py-2 rounded-lg glass text-on-surface-variant hover:text-primary hover:border-primary/20 transition-all">Fullstack</button>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group glass rounded-2xl overflow-hidden card-hover block flex flex-col h-full">
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="font-body text-xs text-secondary mb-1 block uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <div className={`px-2.5 py-1 rounded-full text-xs font-body font-medium ${project.status === "Déployé" ? "bg-green-500/10 text-green-400" : "bg-primary/10 text-primary"}`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="aspect-video mb-4 rounded-xl overflow-hidden relative bg-surface-container">
                  <Image 
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" 
                    alt={project.title} 
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex gap-3 w-full">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-primary-dim transition-colors flex items-center justify-center gap-1">
                          <span className="material-symbols-outlined text-sm">visibility</span> Live
                        </a>
                      )}
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={`flex-1 ${project.links.live ? 'bg-white/10' : 'bg-primary'} text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-white/20 transition-colors flex items-center justify-center gap-1`}>
                        <span className="material-symbols-outlined text-sm">code</span> Code
                      </a>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-on-surface-variant font-body mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1 glass rounded-lg text-[10px] font-body text-on-surface-variant font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative footer */}
        <div className="mt-20 flex flex-col items-center">
          <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4">
            <span className="w-3 h-3 bg-primary rounded-full animate-pulse"></span>
            <p className="font-body text-sm text-on-surface-variant">Plus de projets disponibles sur <a href="https://github.com/RashOps" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a></p>
          </div>
        </div>
      </div>
    </>
  );
}
