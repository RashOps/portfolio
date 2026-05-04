"use client";

import { useState, useEffect } from 'react';
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { skillService, techStackService, profileService } from '@/lib/supabase-client';

export default function SkillTree() {
  const [skills, setSkills] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedSkills, fetchedTech, fetchedProfile] = await Promise.all([
          skillService.getSkills(),
          techStackService.getTechStack(),
          profileService.getProfile()
        ]);
        setSkills(fetchedSkills || []);
        setTechStack(fetchedTech || []);
        setProfile(fetchedProfile || null);
      } catch (error) {
        console.error("Erreur de chargement", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // --- Filtering Data ---
  const validSkills = skills.filter(s => s.display_location !== "profile");
  
  const dataScienceSkills = validSkills.filter(s => s.category === "Science");
  const languagesSkills = validSkills.filter(s => s.category === "Languages" || s.category === "Engineering");
  const devopsTech = techStack.filter(t => t.category === "Frameworks" || t.name.toLowerCase().includes("docker") || t.name.toLowerCase().includes("git") || t.name.toLowerCase().includes("n8n"));
  const datavizTech = techStack.filter(t => t.category === "Dataviz & BI" || t.category === "Databases & Tools");

  const radarTech = techStack.filter(t => t.show_in_radar !== false);

  // --- Versatility Index Calculation ---
  let versatilityIndex = 86;
  if (profile) {
    if (profile.versatility_dynamic !== false && validSkills.length > 0) {
      versatilityIndex = Math.round(validSkills.reduce((acc, curr) => acc + curr.percentage, 0) / validSkills.length);
    } else if (profile.versatility_manual) {
      versatilityIndex = profile.versatility_manual;
    }
  }

  const bars = Array.from({ length: 10 }, (_, i) => i < Math.round(versatilityIndex / 10));

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-primary animate-pulse font-headline tracking-widest uppercase">Chargement de l'arsenal technique...</div>;
  }

  return (
    <>
      <div className="p-8 pb-16 lg:px-12 max-w-[1400px] mx-auto">
        {/* Header Section */}
        <FadeIn direction="down" className="mb-10 md:mb-16">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-on-surface mb-2">
            Stack <span className="gradient-text">&amp; Technologies</span>
          </h1>
          <div className="flex items-center gap-4 mt-3">
            <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
            <p className="font-body text-xs md:text-sm text-on-surface-variant">Mon arsenal technique pour transformer la donnée</p>
          </div>
        </FadeIn>

        {/* Skill Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-20">
          {/* Data Science & IA Core */}
          <StaggerItem className="lg:col-span-8 glass rounded-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 opacity-10">
              <span className="material-symbols-outlined text-8xl text-primary">psychology</span>
            </div>
            <h2 className="font-headline text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">neurology</span>
              Data Science &amp; IA
            </h2>
            <div className="space-y-8 relative z-10">
              {dataScienceSkills.length > 0 ? dataScienceSkills.map((skill, index) => {
                 let opacity = 100 - (index * 20);
                 if (opacity < 40) opacity = 40;
                 return (
                  <FadeIn key={skill.id} delay={0.2 + (index * 0.1)} direction="left">
                    <div className="flex justify-between items-end mb-3">
                      <span className="font-body text-sm text-on-surface">{skill.name}</span>
                      <span className="font-headline text-sm text-primary font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className={`bg-gradient-to-r from-primary to-primary-dim h-full rounded-full transition-all duration-1000 ease-out`} style={{ width: `${skill.percentage}%`, opacity: opacity / 100 }}></div>
                    </div>
                  </FadeIn>
                )
              }) : (
                <p className="text-sm text-on-surface-variant font-body">Aucune compétence Science ajoutée.</p>
              )}
            </div>
          </StaggerItem>

          {/* Side Stats Panel */}
          <div className="lg:col-span-4 space-y-8">
            <StaggerItem className="glass rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline text-sm text-secondary font-medium">Indice de polyvalence</h3>
                {profile?.versatility_dynamic !== false && <span className="material-symbols-outlined text-xs text-primary animate-pulse" title="Calculé dynamiquement">auto_awesome</span>}
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-4xl font-headline font-bold gradient-text">{versatilityIndex}</span>
                <span className="text-sm font-body text-on-surface-variant mb-1">/ 100</span>
              </div>
              <div className="grid grid-cols-10 gap-1 h-2">
                {bars.map((isFilled, i) => (
                  <div 
                    key={i} 
                    className={`${isFilled ? "bg-gradient-to-r from-primary to-tertiary" : "bg-white/5"} rounded-full transition-all duration-[1500ms]`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  ></div>
                ))}
              </div>
            </StaggerItem>

            {/* Outils & DevOps */}
            <StaggerItem className="glass rounded-2xl p-6">
              <h2 className="font-headline text-lg font-bold mb-6 text-on-surface flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">terminal</span>
                Dev &amp; Ops
              </h2>
              <div className="space-y-4">
                {devopsTech.length > 0 ? devopsTech.map(tech => (
                  <div key={tech.id} className="flex justify-between items-center text-sm font-body">
                    <span className="text-on-surface-variant flex items-center gap-2">
                      {tech.icon_url && <img src={tech.icon_url} className="w-4 h-4 object-contain" alt={tech.name}/>}
                      {tech.name}
                    </span>
                    <span className="text-primary font-medium text-[10px] uppercase tracking-wider bg-primary/10 px-2 py-0.5 rounded">Opérationnel</span>
                  </div>
                )) : (
                  <p className="text-xs text-on-surface-variant">Aucun outil Dev & Ops renseigné.</p>
                )}
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* Data Engineering Section */}
        <section className="mb-20">
          <FadeIn direction="up" className="mb-8">
            <h2 className="font-headline text-2xl font-bold flex items-center gap-4">
              <div className="w-10 h-[2px] bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
              Data Engineering & Architecture
            </h2>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <StaggerItem className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Ingestion</p>
              <h3 className="font-headline text-lg font-bold mb-4">Architecture ETL</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Harmonisation de datasets hétérogènes (multi-sources) et optimisation des flux de données.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-primary rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
              </div>
            </StaggerItem>

            <StaggerItem className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Base de données</p>
              <h3 className="font-headline text-lg font-bold mb-4">SQL & NoSQL</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Modélisation relationnelle (PostgreSQL, MySQL) et non-relationnelle (MongoDB). Triggers & Listen/Notify.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-secondary rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
              </div>
            </StaggerItem>

            <StaggerItem className="glass rounded-2xl p-8 card-hover group">
              <p className="text-xs font-body text-primary mb-2">Système</p>
              <h3 className="font-headline text-lg font-bold mb-4">DataOps & Intégrité</h3>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed mb-6">Déploiement de workflows automatisés pour la surveillance temps réel des bases critiques.</p>
              <div className="flex gap-1 h-1.5 rounded-full overflow-hidden">
                <div className="flex-1 bg-tertiary rounded-full"></div>
                <div className="flex-1 bg-tertiary rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
                <div className="flex-1 bg-white/5 rounded-full"></div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </section>

        {/* Dataviz & Languages */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Business Intelligence & Dataviz */}
          <StaggerItem>
            <h2 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">monitoring</span>
              Business Intelligence & Dataviz
            </h2>
            <div className="space-y-4">
              {datavizTech.length > 0 ? datavizTech.map((tech) => (
                <div key={tech.id} className="glass rounded-xl p-5 flex items-center justify-between group card-hover">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center p-2">
                      {tech.icon_url ? (
                        <img src={tech.icon_url} alt={tech.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                      ) : (
                        <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">dashboard</span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-sm">{tech.name}</h4>
                      <p className="text-xs font-body text-on-surface-variant">{tech.category}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-green-400/50">check_circle</span>
                </div>
              )) : (
                <p className="text-sm text-on-surface-variant font-body">Aucun outil Dataviz ajouté.</p>
              )}
            </div>
          </StaggerItem>

          {/* Programming Languages */}
          <StaggerItem>
            <h2 className="font-headline text-xl font-bold mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">code</span>
              Maîtrise des langages
            </h2>
            <div className="glass rounded-2xl p-8">
              <div className="space-y-8">
                {languagesSkills.length > 0 ? languagesSkills.map((skill, index) => (
                  <FadeIn key={skill.id} delay={0.1 * (index + 1)} direction="up">
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-headline text-sm">{skill.name}</span>
                      <span className="text-xs text-primary font-medium">{skill.percentage}%</span>
                    </div>
                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full transition-all duration-1000 ${index % 2 === 0 ? 'bg-gradient-to-r from-primary to-tertiary' : 'bg-gradient-to-r from-secondary to-secondary-dim'}`} style={{ width: `${skill.percentage}%` }}></div>
                    </div>
                  </FadeIn>
                )) : (
                  <p className="text-sm text-on-surface-variant font-body">Aucun langage ajouté.</p>
                )}
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Interactive Tech Cloud / Radar */}
        <section className="mb-10">
          <FadeIn direction="up" className="mb-8">
            <h2 className="font-headline text-2xl font-bold flex items-center gap-4">
              <div className="w-10 h-[2px] bg-gradient-to-r from-secondary to-tertiary rounded-full"></div>
              Radar Technologique & Outils
            </h2>
            <p className="font-body text-sm text-on-surface-variant mt-2">Vue d'ensemble de mon écosystème technique global.</p>
          </FadeIn>
          
          <StaggerContainer className="glass rounded-2xl p-8 border border-white/5">
            <div className="flex flex-wrap gap-4 justify-center">
              {radarTech.length > 0 ? radarTech.map(tech => (
                <StaggerItem key={tech.id} className="group relative flex items-center justify-center p-4 bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-primary/30 rounded-xl transition-all cursor-crosshair">
                  {tech.icon_url ? (
                    <div className="w-10 h-10 relative grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300">
                      <img src={tech.icon_url} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <span className="material-symbols-outlined text-3xl text-on-surface-variant opacity-70 group-hover:opacity-100 group-hover:text-primary transition-colors">terminal</span>
                  )}
                  {/* Hover Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-surface border border-white/10 px-3 py-1.5 rounded-lg text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    {tech.name}
                    <span className="block text-[9px] text-primary mt-0.5 uppercase tracking-wider">{tech.category}</span>
                  </div>
                </StaggerItem>
              )) : (
                <p className="text-sm text-on-surface-variant font-body">Aucune technologie dans le radar.</p>
              )}
            </div>
          </StaggerContainer>
        </section>
      </div>
    </>
  );
}
