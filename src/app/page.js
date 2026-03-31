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
              <span className="font-body text-xs text-on-surface-variant">Disponible pour un stage / alternance</span>
            </div>
            
            <h2 className="font-headline text-5xl md:text-7xl font-black leading-none tracking-tight mb-8">
              <span className="text-on-surface">Data Science</span><br/>
              <span className="gradient-text">&amp; Intelligence</span><br/>
              <span className="gradient-text">Artificielle</span>
            </h2>
            
            <p className="font-body text-on-surface-variant text-lg max-w-xl mb-10 leading-relaxed">
              Étudiant en double cursus Tech &amp; Business, je construis des solutions à la croisée de la data, de l'IA et de la stratégie. Bienvenue dans mon portfolio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/mission-log" className="bg-gradient-to-r from-primary to-tertiary text-white font-headline font-bold px-8 py-4 rounded-xl text-sm flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-95 group">
                Voir mes projets
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <a href="/assets/cv.pdf" download className="glass text-on-surface font-headline font-medium px-8 py-4 rounded-xl text-sm hover:bg-white/10 transition-all text-center">
                Télécharger mon CV
              </a>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md aspect-square relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-tertiary/20 blur-[60px] rounded-full"></div>
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden glass">
              <Image 
                fill
                alt="Portrait professionnel" 
                className="object-cover brightness-90 group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" 
                src="/assets/images/home_hero.jpg"
              />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-label text-xs text-primary">PSTB × Excelia</span>
                  <span className="font-label text-xs text-secondary">Double cursus</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full">
                  <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full" style={{ width: "75%" }}></div>
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
            <h3 className="font-headline text-4xl font-bold mb-2 tracking-tight">Projets récents</h3>
            <p className="font-body text-sm text-on-surface-variant">Sélection de mes dernières réalisations en Data &amp; IA</p>
          </div>
          <Link href="/mission-log" className="font-body text-sm text-primary hover:underline flex items-center gap-2">
            Voir tous les projets <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Main Featured Card */}
          <div className="md:col-span-7 glass rounded-2xl relative overflow-hidden group card-hover">
            <Image 
              fill
              alt="Projet principal" 
              className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700 z-0" 
              src="/assets/images/home_card1.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
            <div className="relative z-10 h-full p-8 flex flex-col justify-end">
              <span className="font-label text-xs text-secondary mb-2 tracking-wide">Machine Learning</span>
              <h4 className="font-headline text-3xl font-bold text-on-surface mb-4">Prédiction de séries temporelles</h4>
              <p className="font-body text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                Modèle LSTM pour la prévision de données financières avec pipeline de données automatisé et dashboard de monitoring en temps réel.
              </p>
              <div className="flex gap-3">
                <span className="px-3 py-1 glass rounded-lg text-xs text-primary font-label">Python</span>
                <span className="px-3 py-1 glass rounded-lg text-xs text-primary font-label">TensorFlow</span>
                <span className="px-3 py-1 glass rounded-lg text-xs text-primary font-label">Streamlit</span>
              </div>
            </div>
          </div>
          
          {/* Secondary Cards Stack */}
          <div className="md:col-span-5 grid grid-rows-2 gap-6">
            <div className="glass rounded-2xl p-6 relative overflow-hidden card-hover flex flex-col justify-center">
              <div className="absolute top-4 right-4">
                <span className="material-symbols-outlined text-primary/20 text-4xl">analytics</span>
              </div>
              <span className="font-label text-xs text-secondary mb-2 tracking-wide">Data Engineering</span>
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Pipeline ETL Cloud</h4>
              <p className="font-body text-xs text-on-surface-variant line-clamp-2">
                Architecture de données sur GCP avec ingestion en temps réel via Pub/Sub et transformation Dataflow.
              </p>
            </div>
            
            <div className="glass rounded-2xl relative overflow-hidden card-hover group">
              <Image 
                fill
                alt="Visualisation de données" 
                className="object-cover opacity-15 group-hover:scale-110 transition-transform duration-700 z-0" 
                src="/assets/images/home_card2.jpg"
              />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <span className="font-label text-xs text-tertiary mb-2 tracking-wide">NLP</span>
                <h4 className="font-headline text-xl font-bold text-on-surface">Analyse de sentiments</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-24 px-6 bg-surface-container-low/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h3 className="font-headline text-4xl font-bold tracking-tight mb-4">Stack &amp; Technologies</h3>
            <p className="font-body text-on-surface-variant max-w-2xl mx-auto">
              Les outils et technologies que je maîtrise pour concevoir des solutions data-driven, de l'exploration à la mise en production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Progress Bar 1 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                  <h5 className="font-headline font-bold text-sm">Machine Learning</h5>
                </div>
                <span className="font-label text-xs text-primary">92%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-primary-dim rounded-full" style={{ width: "92%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                TensorFlow · PyTorch · Scikit-learn · NLP
              </p>
            </div>
            
            {/* Progress Bar 2 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>database</span>
                  <h5 className="font-headline font-bold text-sm">Data Engineering</h5>
                </div>
                <span className="font-label text-xs text-secondary">88%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-secondary to-secondary-dim rounded-full" style={{ width: "88%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                SQL · Python · Spark · Airflow · GCP
              </p>
            </div>
            
            {/* Progress Bar 3 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
                  <h5 className="font-headline font-bold text-sm">Développement</h5>
                </div>
                <span className="font-label text-xs text-tertiary">78%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim rounded-full" style={{ width: "78%" }}></div>
              </div>
              <p className="font-body text-xs text-on-surface-variant">
                React · Next.js · TypeScript · Tailwind
              </p>
            </div>
            
            {/* Skill Tags */}
            <div className="md:col-span-3 mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Python", level: "Avancé" },
                { name: "SQL", level: "Avancé" },
                { name: "TypeScript", level: "Inter." },
                { name: "Docker", level: "Inter." },
                { name: "GCP", level: "Certifié" },
                { name: "Git", level: "Avancé" }
              ].map((skill, i) => (
                <div key={i} className="glass rounded-xl p-4 text-center card-hover group">
                  <p className="font-body text-xs text-on-surface-variant group-hover:text-primary mb-1 transition-colors">{skill.name}</p>
                  <p className="font-headline font-bold text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
