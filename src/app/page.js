import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
              <span className="font-body text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Disponible pour Alternance (24 mois)</span>
            </div>
            
            <h2 className="font-headline text-5xl md:text-7xl font-black leading-none tracking-tight mb-8">
              <span className="text-on-surface">Data Science</span><br/>
              <span className="gradient-text">&amp; Intelligence</span><br/>
              <span className="gradient-text">Artificielle</span>
            </h2>
            
            <p className="font-body text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
              Moi c'est <span className="text-primary font-bold">Rayhan</span>. Étudiant admis en <span className="text-on-surface font-bold">Master IA</span> avec un double cursus Tech & Business. Je transforme les flux de données complexes en actifs stratégiques.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/mission-log" className="bg-gradient-to-r from-primary to-tertiary text-white font-headline font-bold px-8 py-4 rounded-xl text-sm flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-95 group">
                Voir mes missions
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <a href="/assets/cv.pdf" target="_blank" className="glass text-on-surface font-headline font-medium px-8 py-4 rounded-xl text-sm hover:bg-white/10 transition-all text-center">
                Consulter mon CV
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md aspect-square relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tertiary/20 blur-[60px] rounded-full"></div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass">
              <Image 
                fill
                alt="Rayhan Touboui - Data & IA" 
                className="object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
                src="/assets/images/photo_portfolio.jpg"
              />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label text-xs text-primary">PSTB × Excelia</span>
                  <span className="font-label text-xs text-secondary">Master IA (2026)</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full">
                  <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="font-headline text-4xl font-bold mb-2 tracking-tight">Missions Phares</h3>
            <p className="font-body text-sm text-on-surface-variant">Une sélection de mes réalisations les plus techniques</p>
          </div>
          <Link href="/mission-log" className="font-body text-sm text-primary hover:underline flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
            Toutes les missions <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Main Featured Card - MarketPulse AI */}
          <Link href="/decrypt-demos/marketpulse-ai" className="md:col-span-7 glass rounded-2xl relative overflow-hidden group card-hover block">
            <Image 
              fill
              alt="MarketPulse AI Engine" 
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 z-0" 
              src="/assets/images/home_card1.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <span className="font-label text-xs text-secondary mb-2 tracking-wide uppercase font-bold">Machine Learning Engine</span>
              <h4 className="font-headline text-3xl font-bold text-on-surface mb-4">MarketPulse AI</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                Moteur de segmentation temps réel (PCA / K-Means) pour la détection de régimes de marché financier via API FastAPI.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 glass rounded-lg text-[10px] text-primary font-bold uppercase tracking-wider">FastAPI</span>
                <span className="px-3 py-1 glass rounded-lg text-[10px] text-primary font-bold uppercase tracking-wider">Scikit-Learn</span>
                <span className="px-3 py-1 glass rounded-lg text-[10px] text-primary font-bold uppercase tracking-wider">MongoDB</span>
              </div>
            </div>
          </Link>
          
          {/* Secondary Cards Stack */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            {/* EchoPulse */}
            <Link href="/mission-log" className="glass rounded-2xl p-6 relative overflow-hidden card-hover flex flex-col justify-center block">
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary/20 text-4xl">analytics</span>
              </div>
              <span className="font-label text-xs text-secondary mb-2 tracking-wide uppercase font-bold">NLP & Dataviz</span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">EchoPulse</h4>
              <p className="font-body text-xs text-on-surface-variant line-clamp-2">
                Analyse de sentiment et topic modeling sur 23k+ avis clients via Python et Dash.
              </p>
            </Link>
            
            {/* OmniHub */}
            <Link href="/mission-log" className="glass rounded-2xl relative overflow-hidden card-hover group block">
              <Image 
                fill
                alt="OmniHub Fullstack" 
                className="object-cover opacity-15 group-hover:scale-110 transition-transform duration-700 z-0" 
                src="/assets/images/home_card2.jpg"
              />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <span className="font-label text-xs text-tertiary mb-2 tracking-wide uppercase font-bold">Fullstack JS</span>
                <h4 className="font-headline text-xl font-bold text-on-surface">OmniHub Dashboard</h4>
                <p className="text-[10px] text-on-surface-variant font-body mt-2">Architecture React / Express avec Glassmorphism UI.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-24 px-6 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="font-headline text-4xl font-bold tracking-tight mb-4 text-on-surface">Maîtrise de l'écosystème <span className="gradient-text">Data</span></h3>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
              Une expertise hybride permettant de couvrir l'intégralité du pipeline : de l'ingestion brute à l'insight stratégique.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Progress Bar 1 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <h5 className="font-headline font-bold text-sm">Data Science & IA</h5>
                </div>
                <span className="font-label text-xs text-primary">90%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary-dim rounded-full" style={{ width: "90%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                NLP (BERT, TextBlob) · Clustering (K-Means) · Scikit-Learn
              </p>
            </div>
            
            {/* Progress Bar 2 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                  <h5 className="font-headline font-bold text-sm">Data Engineering</h5>
                </div>
                <span className="font-label text-xs text-secondary">85%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-secondary-dim rounded-full" style={{ width: "85%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                Python (uv) · SQL (PostgreSQL) · Docker · n8n · ETL
              </p>
            </div>
            
            {/* Progress Bar 3 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
                  <h5 className="font-headline font-bold text-sm">Business Strategy</h5>
                </div>
                <span className="font-label text-xs text-tertiary">95%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim rounded-full" style={{ width: "95%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                Analyse ROI · Dataviz (Power BI, Streamlit) · Management
              </p>
            </div>
            
            {/* Skill Tags */}
            <div className="md:col-span-3 mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Python", level: "Expert" },
                { name: "SQL", level: "Avancé" },
                { name: "FastAPI", level: "Maîtrisé" },
                { name: "Docker", level: "Opérat." },
                { name: "React", level: "Avancé" },
                { name: "n8n", level: "Expert" }
              ].map((skill, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center card-hover group">
                  <p className="font-body text-[10px] text-on-surface-variant group-hover:text-primary mb-1 transition-colors uppercase font-bold tracking-widest">{skill.name}</p>
                  <p className="font-headline font-bold text-xs">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
