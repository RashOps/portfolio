"use client";

import { useState, useEffect } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/ui/StaggerContainer";
import { experienceService } from '@/lib/supabase-client';

export default function Timeline() {
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const fetchedExp = await experienceService.getExperiences();
        setExperiences(fetchedExp || []);
      } catch (error) {
        console.error("Erreur de chargement", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  const academic = experiences.filter(e => e.type === "Academique");
  const pro = experiences.filter(e => e.type === "Pro");

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-primary animate-pulse font-headline tracking-widest uppercase">Chargement du parcours...</div>;
  }

  // Helper for border colors
  const getBorderColorClass = (color) => {
    switch(color) {
      case "primary": return "border-primary";
      case "secondary": return "border-secondary";
      case "tertiary": return "border-tertiary";
      case "white": return "border-white/20";
      default: return "border-white/10";
    }
  };

  // Helper for text colors
  const getTextColorClass = (color) => {
    switch(color) {
      case "primary": return "text-primary";
      case "secondary": return "text-secondary";
      case "tertiary": return "text-tertiary";
      case "white": return "text-on-surface-variant";
      default: return "text-on-surface-variant";
    }
  };

  return (
    <>
      <div className="px-6 py-10 md:p-10 relative">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <FadeIn direction="down" className="mb-12 relative z-10 text-center md:text-left">
          <div className="flex items-center gap-4 mb-2">
            <span className="font-body text-xs md:text-sm text-on-surface-variant whitespace-nowrap">Formation &amp; Expériences</span>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4">
            Mon <span className="gradient-text">Parcours</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm font-body text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">school</span>
              <span>Double cursus Bachelor IA & Business</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg">location_on</span>
              <span>Paris / International</span>
            </div>
          </div>
        </FadeIn>

        {/* Split Timeline */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* FORMATION */}
          <div className="relative pl-12" id="academic-path">
            <FadeIn direction="right" className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-primary">school</span>
              <h2 className="font-headline text-lg text-on-surface font-bold">Formation Académique</h2>
            </FadeIn>
            {/* Vertical Line */}
            <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-[95%] bg-gradient-to-b from-primary to-tertiary rounded-full"></div>
            </div>
            
            <div className="space-y-12">
              {academic.map((exp, index) => (
                <FadeIn key={exp.id} delay={0.1 * (index + 1)} direction="right" className="relative">
                  <div className="absolute -left-10 top-1">
                    <div className={`w-8 h-8 bg-surface rounded-full border-2 ${getBorderColorClass(exp.color_theme)} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined ${getTextColorClass(exp.color_theme)} text-sm ${index === 0 ? "animate-pulse" : ""}`}>{exp.icon || "school"}</span>
                    </div>
                  </div>
                  <div className={`glass rounded-2xl p-6 ${exp.color_theme === "primary" && index === 1 ? "border border-primary/20 bg-primary/5" : "card-hover"} ${exp.color_theme === "white" ? "opacity-80 border-l border-white/5" : ""}`}>
                    <div className={`font-body text-xs ${getTextColorClass(exp.color_theme)} mb-2`}>{exp.start_date}</div>
                    <h4 className={`font-headline text-lg text-on-surface mb-1 font-bold ${exp.color_theme === "primary" && index === 1 ? "italic" : ""}`}>{exp.title}</h4>
                    <div className={`text-sm font-body text-on-surface-variant mb-3`}>{exp.company}</div>
                    {exp.description && (
                      <p className={`text-[11px] font-body mb-3 leading-relaxed ${exp.color_theme === "white" ? "text-on-surface-variant/60" : "text-on-surface-variant"}`}>
                        {exp.description}
                      </p>
                    )}
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="flex gap-2 flex-wrap mt-3">
                        {exp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className={`px-2 py-1 glass rounded-lg text-xs ${tIdx % 2 === 0 ? "text-primary" : "text-secondary"}`}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* EXPÉRIENCES PROFESSIONNELLES */}
          <div className="relative pl-12" id="professional-path">
            <FadeIn direction="left" className="flex items-center gap-3 mb-10 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-secondary">work</span>
              <h2 className="font-headline text-lg text-on-surface font-bold">Expériences & Missions</h2>
            </FadeIn>
            {/* Vertical Line */}
            <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-white/5 -translate-x-1/2 overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 w-full h-[90%] bg-gradient-to-b from-secondary to-primary rounded-full"></div>
            </div>
            
            <div className="space-y-12">
              {pro.map((exp, index) => (
                <FadeIn key={exp.id} delay={0.1 * (index + 1)} direction="left" className="relative">
                  <div className="absolute -left-10 top-1">
                    <div className={`w-8 h-8 bg-surface rounded-full border-2 ${getBorderColorClass(exp.color_theme)} flex items-center justify-center`}>
                      <span className={`material-symbols-outlined ${getTextColorClass(exp.color_theme)} text-sm`}>{exp.icon || "work"}</span>
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-6 card-hover">
                    <div className={`font-body text-xs ${getTextColorClass(exp.color_theme)} mb-2`}>{exp.start_date}</div>
                    <h4 className="font-headline text-lg text-on-surface mb-1 font-bold">{exp.title}</h4>
                    <div className="text-sm font-body text-on-surface-variant font-medium">{exp.company}</div>
                    {exp.description && (
                      <p className="text-on-surface-variant text-xs mt-3 leading-relaxed font-body">
                        {exp.description}
                      </p>
                    )}
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="flex gap-2 flex-wrap mt-3">
                        {exp.tags.map((tag, tIdx) => (
                          <span key={tIdx} className={`px-2 py-1 glass rounded-lg text-xs ${tIdx % 2 === 0 ? "text-primary" : "text-secondary"}`}>{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <StaggerContainer className="mt-20 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          <StaggerItem className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Expertise Hybride</span>
              <span className="material-symbols-outlined text-primary text-lg">psychology</span>
            </div>
            <div className="text-xl md:text-2xl font-headline font-bold gradient-text">PSTB &amp; Excelia</div>
            <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full w-[95%]"></div>
            </div>
          </StaggerItem>
          
          <StaggerItem className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Expérience Pro</span>
              <span className="material-symbols-outlined text-secondary text-lg">work_history</span>
            </div>
            <div className="text-xl md:text-2xl font-headline font-bold text-secondary">{pro.length} Missions</div>
            <div className="text-xs font-body text-on-surface-variant mt-2">Data, Comm & Supply Chain</div>
          </StaggerItem>
          
          <StaggerItem className="glass rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="font-body text-sm text-on-surface-variant">Mobilité</span>
              <span className="material-symbols-outlined text-green-400 text-lg">public</span>
            </div>
            <div className="text-xl md:text-2xl font-headline font-bold text-green-400">International</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-xs font-body text-on-surface-variant">Disponible Alternance 24m</span>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </>
  );
}
