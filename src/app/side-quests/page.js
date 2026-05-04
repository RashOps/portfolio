"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { explorationService } from "@/lib/supabase-client";

export default function SideQuests() {
  const [explorations, setExplorations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await explorationService.getExplorations();
        setExplorations(data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

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
              <div className="text-sm text-primary font-headline font-medium mb-1">
                {isLoading ? "..." : explorations.length} explorations
              </div>
              <div className="text-xs text-on-surface-variant font-body">Profil polyvalent</div>
            </div>
          </div>
          
          <div className="glass rounded-xl p-3">
            <div className="flex justify-between items-center px-3 py-2">
              <span className="text-xs font-body text-on-surface-variant">Progression d'Exploration</span>
              <span className="text-xs font-headline text-primary font-bold">100%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full transition-all duration-1000" style={{ width: "100%" }}></div>
            </div>
          </div>
        </header>

        {isLoading ? (
          <div className="flex justify-center py-20 text-tertiary relative z-10">
            <span className="material-symbols-outlined animate-spin text-4xl">autorenew</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {explorations.map((exp) => {
              const isLocked = exp.status === "Bientôt";
              
              if (isLocked) {
                return (
                  <div key={exp.id} className="glass rounded-2xl flex flex-col relative opacity-30 grayscale pointer-events-none">
                    <div className="absolute top-4 right-4 z-20">
                      <span className="text-xs font-body text-on-surface-variant bg-white/5 px-2.5 py-1 rounded-full">{exp.status}</span>
                    </div>
                    <div className="p-8">
                      <div className="mb-6">
                        <span className="material-symbols-outlined text-on-surface-variant text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                        <h3 className="text-xl font-headline font-bold text-on-surface-variant">{exp.title}</h3>
                      </div>
                      <p className="text-sm text-on-surface-variant/60 font-body mb-8">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <div key={exp.id} className="glass rounded-2xl group card-hover flex flex-col relative overflow-hidden">
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`text-xs font-body px-2.5 py-1 rounded-full font-medium shadow-sm backdrop-blur-md border ${exp.status === "Terminé" ? "text-green-400 bg-green-400/10 border-green-400/20" : "text-secondary bg-secondary/10 border-secondary/20"}`}>
                      {exp.status}
                    </span>
                  </div>
                  
                  {/* Image Cover Optionnelle */}
                  {exp.image_url ? (
                    <div className="h-40 w-full relative border-b border-white/5">
                      <Image 
                        src={exp.image_url} 
                        alt={exp.title} 
                        fill 
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
                    </div>
                  ) : (
                    <div className="h-20 w-full bg-surface-container/50 border-b border-white/5 flex items-center px-8">
                       <span className="material-symbols-outlined text-primary text-4xl opacity-70 group-hover:opacity-100 transition-opacity" style={{ fontVariationSettings: "'FILL' 1" }}>
                         explore
                       </span>
                    </div>
                  )}

                  <div className="p-8 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{exp.title}</h3>
                    </div>
                    <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed flex-grow">
                      {exp.description}
                    </p>
                    
                    {exp.url && (
                      <a href={exp.url} target="_blank" rel="noopener noreferrer" className="w-full text-center py-3 glass hover:bg-white/10 rounded-xl text-sm font-body text-white font-bold tracking-wide transition-colors flex justify-center items-center gap-2">
                        <span className="material-symbols-outlined text-sm">link</span> Découvrir
                      </a>
                    )}
                  </div>
                  <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-tertiary transition-all duration-700 absolute bottom-0 rounded-full"></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
