import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[870px] flex flex-col items-center justify-center px-6 overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-tertiary/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-16 pt-20 md:pt-0">
          <div className="flex-1">
            <FadeIn delay={0.1} direction="up" className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></span>
              <span className="font-body text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Disponible pour Stage & Alternance (24 mois)</span>
            </FadeIn>
            
            <FadeIn delay={0.2} direction="up">
              <h2 className="font-headline text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8 text-balance">
                <span className="text-on-surface">Data Science</span><br className="hidden sm:block"/>
                <span className="gradient-text"> &amp; Intelligence</span><br className="hidden sm:block"/>
                <span className="gradient-text"> Artificielle</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.3} direction="up">
              <p className="font-body text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
                Moi c'est <span className="text-primary font-bold">Rayhan</span>. Après deux ans de <span className="text-on-surface font-bold">Bachelor Business @Excelia</span>, j'ai pivoté en Septembre 2025 vers la <span className="text-on-surface font-bold">Data & l'IA</span>. Je fusionne aujourd'hui vision stratégique et ingénierie pour transformer la donnée en levier de croissance.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4} direction="up" className="flex flex-col sm:flex-row gap-4">
              <Link href="/mission-log" className="bg-gradient-to-r from-primary to-tertiary text-white font-headline font-bold px-8 py-4 rounded-xl text-sm flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-95 group">
                Voir mes missions
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <a href="/assets/cv.pdf" target="_blank" className="glass text-on-surface font-headline font-medium px-8 py-4 rounded-xl text-sm hover:bg-white/10 transition-all text-center">
                Consulter mon CV
              </a>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5} direction="left" className="flex-1 w-full max-w-md aspect-square relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tertiary/20 blur-[60px] rounded-full"></div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass">
              <Image 
                fill
                alt="Rayhan Touboui - Data & IA" 
                className="object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
                src="/assets/images/photo-pro.webp"
              />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label text-xs text-primary">PSTB × Excelia</span>
                  <span className="font-label text-xs text-secondary">Master Data & IA (2026)</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full">
                  <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section (Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <FadeIn direction="up" className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="font-headline text-4xl font-bold mb-2 tracking-tight">Missions Phares</h3>
            <p className="font-body text-sm text-on-surface-variant">Une sélection de mes réalisations les plus techniques</p>
          </div>
          <Link href="/mission-log" className="font-body text-sm text-primary hover:underline flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]">
            Toutes les missions <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </FadeIn>
        
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Main Featured Card - MarketPulse AI */}
          <StaggerItem className="md:col-span-7 relative">
            <Link href="/decrypt-demos/marketpulse-ai" className="h-full w-full glass rounded-2xl relative overflow-hidden group card-hover block">
              <Image 
                fill
                alt="MarketPulse AI Engine" 
                className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 z-0" 
                src="/assets/images/marketpulse_cover_1775571907615.png"
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
          </StaggerItem>
          
          {/* Secondary Cards Stack */}
          <div className="md:col-span-5 grid grid-cols-1 grid-rows-none md:grid-rows-2 gap-6">
            {/* EchoPulse */}
            <StaggerItem className="relative h-full">
              <Link href="/mission-log" className="h-full glass rounded-2xl p-6 min-h-[180px] relative overflow-hidden card-hover flex flex-col justify-center block group">
                <Image 
                  fill
                  alt="EchoPulse NLP" 
                  className="object-cover opacity-10 group-hover:scale-110 transition-transform duration-700 z-0" 
                  src="/assets/images/echopulse_cover_1775571889612.png"
                />
                <div className="absolute top-4 right-4 z-10">
                  <span className="material-symbols-outlined text-primary/20 text-4xl group-hover:text-primary/40 transition-colors">analytics</span>
                </div>
                <div className="relative z-10">
                  <span className="font-label text-xs text-secondary mb-2 tracking-wide uppercase font-bold">NLP & Dataviz</span>
                  <h4 className="font-headline text-xl font-bold text-on-surface mb-2">EchoPulse</h4>
                  <p className="font-body text-xs text-on-surface-variant line-clamp-2">
                    Analyse de sentiment et topic modeling sur 23k+ avis clients via Python et Dash.
                  </p>
                </div>
              </Link>
            </StaggerItem>
            
            {/* OmniHub */}
            <StaggerItem className="relative h-full">
              <Link href="/mission-log" className="h-full glass rounded-2xl min-h-[180px] relative overflow-hidden card-hover group block">
                <Image 
                  fill
                  alt="OmniHub Fullstack" 
                  className="object-cover opacity-15 group-hover:scale-110 transition-transform duration-700 z-0" 
                  src="/assets/images/omnihub_cover_1775571992593.png"
                />
                <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                  <span className="font-label text-xs text-tertiary mb-2 tracking-wide uppercase font-bold">Fullstack JS</span>
                  <h4 className="font-headline text-xl font-bold text-on-surface">OmniHub Dashboard</h4>
                  <p className="text-[10px] text-on-surface-variant font-body mt-2">Architecture React / Express avec Glassmorphism UI.</p>
                </div>
              </Link>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* Skills Preview Section */}
      <section className="py-24 px-6 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto">
            <FadeIn direction="up" className="text-center mb-20">
              <h3 className="font-headline text-4xl font-bold tracking-tight mb-4 text-on-surface">Fondation Business, <span className="gradient-text">Moteurs Data</span></h3>
              <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
                Un profil hybride capable de traduire des besoins métiers complexes en architectures IA performantes.
              </p>
            </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Progress Bar 1 */}
            <StaggerItem className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <h5 className="font-headline font-bold text-sm">Data Science & IA</h5>
                </div>
                <span className="font-label text-xs text-primary">67%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary-dim rounded-full" style={{ width: "67%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                NLP (BERT, TextBlob) · Clustering (K-Means) · Scikit-Learn
              </p>
            </StaggerItem>
            
            {/* Progress Bar 2 */}
            <StaggerItem className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                  <h5 className="font-headline font-bold text-sm">Data Engineering</h5>
                </div>
                <span className="font-label text-xs text-secondary">72%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-secondary-dim rounded-full" style={{ width: "72%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                Python (uv) · SQL (PostgreSQL) · Docker · n8n · ETL
              </p>
            </StaggerItem>
            
            {/* Progress Bar 3 */}
            <StaggerItem className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>business_center</span>
                  <h5 className="font-headline font-bold text-sm">Business Strategy</h5>
                </div>
                <span className="font-label text-xs text-tertiary">69%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim rounded-full" style={{ width: "69%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                Analyse ROI · Dataviz (Power BI, Streamlit) · Management
              </p>
            </StaggerItem>
            
            {/* Skill Tags */}
            <div className="md:col-span-3 mt-8">
              <StaggerContainer staggerDelay={0.05} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Python", level: "Avancé" },
                { name: "SQL", level: "Avancé" },
                { name: "FastAPI", level: "Débutant" },
                { name: "Docker", level: "Intermédiaire" },
                { name: "React", level: "Intermédiaire" },
                { name: "n8n", level: "Avancé" }
              ].map((skill, i) => (
                <StaggerItem key={i} className="glass rounded-xl p-4 text-center card-hover group">
                  <p className="font-body text-[10px] text-on-surface-variant group-hover:text-primary mb-1 transition-colors uppercase font-bold tracking-widest">{skill.name}</p>
                  <p className="font-headline font-bold text-xs">{skill.level}</p>
                </StaggerItem>
              ))}
              </StaggerContainer>
            </div>
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
