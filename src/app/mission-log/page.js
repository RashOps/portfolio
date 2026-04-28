"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { missionService } from "@/lib/supabase-client";

export default function MissionLog() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMissions() {
      try {
        const data = await missionService.getMissions();
        // Mapping Supabase data to the expected frontend structure
        const formattedProjects = data.map(m => ({
          id: m.id,
          title: m.title,
          category: m.category || "Mission Officielle",
          filterGroup: m.filterGroup || "Tous",
          status: m.status,
          description: m.description,
          stack: m.tech_stack || [],
          image: m.image_url || "/assets/images/workflow_cover_1775571927684.png",
          links: {
            live: m.url || null,
            github: m.github_url || null
          }
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.error("Erreur lors du chargement des missions", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadMissions();
  }, []);



  const filters = ["Tous", "Machine Learning", "Data Engineering", "Fullstack"];

  const filteredProjects = activeFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.filterGroup === activeFilter);

  return (
    <div className="px-6 py-10 md:p-12 min-h-screen bg-background">
      {/* HEADER SECTION */}
      <section className="mb-12 mt-4" id="projects">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-2"
        >
          <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          <span className="font-body text-[10px] md:text-sm text-on-surface-variant uppercase tracking-widest font-bold opacity-60">Portfolio de projets</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-headline font-bold tracking-tight text-on-surface mb-6"
        >
          Missions & <span className="gradient-text">Réalisations</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl text-on-surface-variant font-body text-sm leading-relaxed mb-8"
        >
          Une sélection de mes projets techniques alliant Data Science, Engineering et vision Business. Chaque mission illustre une transformation de données complexes en actifs stratégiques.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="/decrypt-demos" className="inline-flex items-center gap-3 bg-secondary/10 text-secondary hover:bg-secondary/20 hover:border-secondary/50 transition-all border border-secondary/20 px-6 py-3 rounded-xl font-headline font-bold uppercase tracking-widest text-xs shadow-lg">
            <span className="material-symbols-outlined text-lg">science</span>
            Accéder au Playground (Démos)
          </Link>
        </motion.div>
      </section>

      {/* FILTERS */}
      <div className="flex flex-wrap gap-3 mb-12 border-y border-white/5 py-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-body text-[10px] md:text-xs px-4 md:px-6 py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden ${
              activeFilter === filter 
                ? "bg-primary text-white font-bold shadow-[0_0_15px_rgba(167,139,250,0.3)]" 
                : "glass text-on-surface-variant hover:text-primary hover:bg-white/5"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      {isLoading ? (
        <div className="flex justify-center py-20 text-primary">
          <span className="material-symbols-outlined animate-spin text-4xl">autorenew</span>
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group glass rounded-2xl overflow-hidden card-hover block flex flex-col h-full border border-white/5"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="font-body text-[10px] text-secondary mb-1 block uppercase tracking-[0.2em] font-black opacity-60">{project.category}</span>
                    <h3 className="text-xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors">{project.title}</h3>
                  </div>
                  <div className={`px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-tight ${project.status === "Déployé" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-primary/10 text-primary border border-primary/20"}`}>
                    {project.status}
                  </div>
                </div>
                
                <div className="aspect-video mb-6 rounded-xl overflow-hidden relative bg-surface-container-low border border-white/5 shadow-inner">
                  <Image 
                    fill
                    className="object-cover opacity-40 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-out" 
                    alt={project.title} 
                    src={project.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-5">
                    <div className="flex gap-3 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.links.live && (
                        project.links.live.startsWith('http') ? (
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="flex-1 bg-primary text-white text-center py-2.5 rounded-xl text-[10px] font-black uppercase hover:bg-primary-dim transition-all shadow-lg flex items-center justify-center gap-1.5 active:scale-95">
                            <span className="material-symbols-outlined text-sm">visibility</span> Live Demo
                          </a>
                        ) : (
                          <Link href={project.links.live} className="flex-1 bg-primary text-white text-center py-2.5 rounded-xl text-[10px] font-black uppercase hover:bg-primary-dim transition-all shadow-lg flex items-center justify-center gap-1.5 active:scale-95">
                            <span className="material-symbols-outlined text-sm">visibility</span> Live Demo
                          </Link>
                        )
                      )}
                      {project.links.github && (
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className={`flex-1 ${project.links.live ? 'bg-white/10 backdrop-blur-md' : 'bg-primary'} text-white text-center py-2.5 rounded-xl text-[10px] font-black uppercase hover:bg-white/20 transition-all shadow-lg flex items-center justify-center gap-1.5 active:scale-95`}>
                          <span className="material-symbols-outlined text-sm">code</span> View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-on-surface-variant font-body mb-6 leading-relaxed flex-grow opacity-80">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-white/[0.03] border border-white/5 rounded-lg text-[9px] font-bold font-body text-on-surface-variant tracking-tighter hover:text-primary hover:border-primary/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Decorative footer */}
      <footer className="mt-24 mb-12 flex flex-col items-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"></div>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="glass px-8 py-5 rounded-3xl flex items-center gap-6 border border-white/5"
        >
          <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
          <p className="font-body text-sm text-on-surface-variant font-medium">Explore more architecture on <a href="https://github.com/RashOps" target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:underline">GitHub</a></p>
          <span className="material-symbols-outlined text-primary text-xl">terminal</span>
        </motion.div>
      </footer>
    </div>
  );
}
