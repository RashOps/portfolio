"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import CVModal from '@/components/ui/CVModal';
import { skillService, profileService, experienceService, techStackService } from '@/lib/supabase-client';
import { motion } from 'framer-motion';

export default function OperatorProfile() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [profile, setProfile] = useState(null);
  const [experiences, setExperiences] = useState([]);
  const [techStack, setTechStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [fetchedSkills, fetchedProfile, fetchedExperiences, fetchedTech] = await Promise.all([
          skillService.getSkills(),
          profileService.getProfile(),
          experienceService.getExperiences(),
          techStackService.getTechStack()
        ]);
        setSkills(fetchedSkills || []);
        setProfile(fetchedProfile || null);
        setExperiences(fetchedExperiences || []);
        setTechStack(fetchedTech || []);
      } catch (error) {
        console.error("Erreur de chargement", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <main className="p-6 md:p-10 lg:p-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn direction="down" className="mb-12">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-on-surface mb-2 uppercase">
            Profil <span className="gradient-text">Opérateur</span>
          </h1>
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 bg-primary"></div>
            <p className="font-body text-sm text-on-surface-variant uppercase tracking-widest">Dossier #99-25 — {profile?.name || "Rayhan Touboui"}</p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity Panel */}
          <div className="md:col-span-12 lg:col-span-4 space-y-8">
            <StaggerItem className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-tertiary/20 blur-lg rounded-2xl group-hover:from-primary/30 group-hover:to-tertiary/30 transition duration-1000"></div>
              <div className="relative glass rounded-2xl p-2">
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <Image 
                    fill
                    className="object-cover brightness-90 z-0" 
                    alt="Photo de profil" 
                    src="/assets/images/photo-pro.webp"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40"></div>
                  <div className="absolute bottom-4 left-4 glass rounded-lg px-3 py-1.5">
                    <span className="font-label text-xs text-primary font-medium">Recherche d'Alternance (24 mois)</span>
                  </div>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem className="flex gap-4">
              <button 
                onClick={() => setIsCVOpen(true)}
                className="flex-1 glass rounded-xl py-4 flex items-center justify-center gap-3 hover:bg-primary/10 hover:border-primary/30 transition-all group"
              >
                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">visibility</span>
                <span className="font-headline text-xs font-bold uppercase tracking-widest text-on-surface">Visualiser CV</span>
              </button>
              <a 
                href="/assets/cv.pdf" 
                download
                className="w-14 glass rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
                title="Télécharger directement"
              >
                <span className="material-symbols-outlined">download</span>
              </a>
            </StaggerItem>
            
            <StaggerItem className="glass rounded-2xl p-6 space-y-4">
              <h2 className="font-headline text-xs tracking-widest text-secondary uppercase">Identité</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-1">Nom</div>
                  <div className="font-headline text-lg text-primary">{profile?.name || "Rayhan Touboui"}</div>
                </div>
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-1">Statut</div>
                  <div className="font-headline text-lg text-primary text-balance">{profile?.status || "Étudiant"}</div>
                </div>
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-1">Spécialisation</div>
                  <div className="font-body text-sm text-on-surface">{profile?.specialization || "Data & IA"}</div>
                </div>
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-1">Localisation</div>
                  <div className="font-body text-sm text-on-surface">{profile?.location || "Paris, France"}</div>
                </div>
              </div>
            </StaggerItem>
          </div>
          
          {/* Details Panel */}
          <div className="md:col-span-12 lg:col-span-8 space-y-8">
            
            {/* Core Competencies (Skills) */}
            <StaggerItem className="glass rounded-2xl p-6 sm:p-8 relative">
              <h2 className="font-headline text-xl tracking-tight text-on-surface mb-8 pb-2 border-b border-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                Profil Opérationnel
              </h2>
              
              <div className="space-y-6">
                {isLoading ? (
                  <div className="animate-pulse space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <div className="h-4 bg-white/10 rounded w-1/3"></div>
                          <div className="h-4 bg-white/10 rounded w-8"></div>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full"></div>
                      </div>
                    ))}
                  </div>
                ) : skills.length > 0 ? (
                  skills.map((skill) => {
                    let colorClass = "primary";
                    if (skill.category === "Engineering" || skill.name.toLowerCase().includes("engineering")) colorClass = "secondary";
                    else if (skill.category === "Biz" || skill.name.toLowerCase().includes("business") || skill.name.toLowerCase().includes("vision")) colorClass = "tertiary";

                    return (
                      <div key={skill.id} className="space-y-2">
                        <div className="flex justify-between items-end">
                          <span className="font-body text-sm">{skill.name}</span>
                          <span className={`font-headline text-${colorClass} text-sm`}>{skill.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.percentage}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className={`h-full bg-gradient-to-r from-${colorClass} to-${colorClass}-dim rounded-full`} 
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-on-surface-variant text-sm font-body">Aucune compétence opérationnelle trouvée en base.</p>
                )}
              </div>
            </StaggerItem>
            
            {/* About & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StaggerItem className="glass rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                  <h3 className="font-headline text-sm font-bold">Formation</h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body text-balance whitespace-pre-line">
                  {profile?.formation_text || "Aucune description de formation."}
                </p>
              </StaggerItem>
              
              <StaggerItem className="glass rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  <h3 className="font-headline text-sm font-bold">Objectifs & Vision</h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body text-balance whitespace-pre-line">
                  {profile?.objectives_text || "Aucun objectif défini."}
                </p>
              </StaggerItem>
            </div>

            {/* Parcours (Expériences) */}
            <StaggerItem className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="font-headline text-xl tracking-tight text-on-surface mb-8 pb-2 border-b border-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>work_history</span>
                Parcours & Expériences
              </h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
                {isLoading ? (
                   <p className="text-center animate-pulse text-on-surface-variant">Chargement du parcours...</p>
                ) : experiences.length > 0 ? (
                  experiences.map((exp) => (
                    <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-surface-container group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                        <span className="material-symbols-outlined text-sm text-on-surface-variant group-hover:text-primary transition-colors">
                          {exp.type === "Académique" ? "school" : "work"}
                        </span>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-4 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h3 className="font-bold text-white text-sm">{exp.title}</h3>
                          <span className="text-[10px] text-primary uppercase tracking-wider font-bold bg-primary/10 px-2 py-1 rounded">{exp.start_date} - {exp.end_date || "Présent"}</span>
                        </div>
                        <div className="text-xs text-secondary mb-3 font-bold uppercase tracking-wide">{exp.company}</div>
                        <p className="text-xs text-on-surface-variant leading-relaxed">{exp.description}</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-on-surface-variant text-sm font-body">Aucun parcours renseigné.</p>
                )}
              </div>
            </StaggerItem>

            {/* Tech Stack */}
            <StaggerItem className="glass rounded-2xl p-6 sm:p-8">
              <h2 className="font-headline text-xl tracking-tight text-on-surface mb-8 pb-2 border-b border-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>terminal</span>
                Stack Technique
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {isLoading ? (
                  <p className="text-center animate-pulse text-on-surface-variant col-span-full">Chargement de la stack...</p>
                ) : techStack.length > 0 ? (
                  techStack.map(tech => (
                    <div key={tech.id} className="flex flex-col items-center justify-center p-4 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 rounded-xl transition-colors gap-3 group">
                      {tech.icon_url ? (
                        <div className="w-10 h-10 relative grayscale group-hover:grayscale-0 transition-all duration-300">
                          <Image src={tech.icon_url} alt={tech.name} fill className="object-contain" />
                        </div>
                      ) : (
                        <span className="material-symbols-outlined text-3xl text-on-surface-variant group-hover:text-white transition-colors">code</span>
                      )}
                      <span className="text-xs font-bold text-on-surface-variant group-hover:text-white transition-colors text-center">{tech.name}</span>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-on-surface-variant text-sm font-body col-span-full">Aucune technologie renseignée.</p>
                )}
              </div>
            </StaggerItem>
            
            {/* CTA */}
            <StaggerItem className="pt-4">
              <Link className="block group w-full relative overflow-hidden rounded-xl" href="/mission-log">
                <div className="bg-gradient-to-r from-primary to-tertiary px-8 py-5 flex items-center justify-between rounded-xl group-active:scale-[0.98] transition-all">
                  <span className="font-headline text-white font-bold tracking-wide text-lg">Voir mes projets (Missions)</span>
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-white/30 group-hover:w-20 transition-all"></div>
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          </div>
        </StaggerContainer>

        {/* Decorative footer */}
        <FadeIn direction="up" className="max-w-6xl mx-auto mt-12 border-t border-white/5 pt-4 flex justify-between items-center text-on-surface-variant/40">
          <div className="font-body text-xs hidden sm:block">Mis à jour dynamiquement</div>
          <div className="font-body text-xs">Portfolio conçu avec Next.js &amp; Tailwind</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <div className="font-body text-xs text-balance">Connectivité Supabase CMS : OK</div>
          </div>
        </FadeIn>
      </div>

      {/* CV Modal Overlay */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </main>
  );
}
