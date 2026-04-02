import Link from 'next/link';
import Image from 'next/image';

export default function OperatorProfile() {
  return (
    <>
      <div className="pt-8 pb-12 px-6 md:px-12 min-h-[calc(100vh-64px)] w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* SECTION 1: Photo & Identity */}
          <section className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-tertiary/20 blur-lg rounded-2xl group-hover:from-primary/30 group-hover:to-tertiary/30 transition duration-1000"></div>
              <div className="relative glass rounded-2xl p-2">
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <Image 
                    fill
                    className="object-cover brightness-90 z-0" 
                    alt="Photo de profil de Rayhan Touboui" 
                    src="/assets/images/photo_portfolio.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-40"></div>
                  <div className="absolute bottom-4 left-4 glass rounded-lg px-3 py-1.5">
                    <span className="font-label text-xs text-primary font-medium">Recherche d'Alternance (24 mois)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Identity Card */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h2 className="font-headline text-xs tracking-widest text-secondary uppercase">Identité</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-1">Nom</div>
                  <div className="font-headline text-lg text-primary">Rayhan Touboui</div>
                </div>
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-1">Statut</div>
                  <div className="font-headline text-lg text-primary">Étudiant (Master IA)</div>
                </div>
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-1">Spécialisation</div>
                  <div className="font-body text-sm text-on-surface">Data & Intelligence Artificielle</div>
                </div>
                <div>
                  <div className="text-xs font-body text-on-surface-variant mb-1">Localisation</div>
                  <div className="font-body text-sm text-on-surface">Paris, France (ou Distanciel)</div>
                </div>
              </div>
            </div>
          </section>
          
          {/* SECTION 2: Details */}
          <section className="lg:col-span-7 space-y-8">
            {/* Core Competencies */}
            <div className="glass rounded-2xl p-8 relative">
              <h2 className="font-headline text-xl tracking-tight text-on-surface mb-8 pb-2 border-b border-white/10 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
                Profil Opérationnel
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-body text-sm">Data Science & Intelligence Artificielle</span>
                    <span className="font-headline text-primary text-sm">90%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-primary-dim rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-body text-sm">Data Engineering & Architecture</span>
                    <span className="font-headline text-secondary text-sm">85%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-secondary to-secondary-dim rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-body text-sm">Business Intelligence & Dataviz</span>
                    <span className="font-headline text-tertiary text-sm">88%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-tertiary to-tertiary-dim rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-end">
                    <span className="font-body text-sm">Vision Business (Double diplôme PSTB & Excelia)</span>
                    <span className="font-headline text-primary text-sm">95%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-tertiary rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* About & Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
                  <h3 className="font-headline text-sm font-bold">Formation</h3>
                </div>
                <p className="text-on-surface-variant text-sm leading-relaxed font-body">
                  Double cursus à la croisée de la technologie (Bachelor IA & Data à PSTB) et du management (Bachelor Business à Excelia). Une approche hybride pour comprendre la tech et ses enjeux stratégiques. Admis en Master Data Intelligence Artificielle (2026-2028).
                </p>
              </div>
              
              <div className="glass rounded-2xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-secondary">
                  <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                  <h3 className="font-headline text-sm font-bold">Objectif</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="text-secondary">→</span> Concevoir des pipelines (Engineering)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="text-secondary">→</span> Modéliser l'insight (Science & Analyse)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-on-surface">
                    <span className="text-secondary">→</span> Transformer les données en actifs stratégiques
                  </li>
                </ul>
              </div>
            </div>
            
            {/* CTA */}
            <div className="pt-4">
              <Link className="block group w-full relative overflow-hidden rounded-xl" href="/mission-log">
                <div className="bg-gradient-to-r from-primary to-tertiary px-8 py-5 flex items-center justify-between rounded-xl group-active:scale-[0.98] transition-transform duration-100">
                  <span className="font-headline text-white font-bold tracking-wide text-lg">Voir mes projets (Missions)</span>
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-12 bg-white/30 group-hover:w-20 transition-all"></div>
                    <span className="material-symbols-outlined text-white" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>

        {/* Decorative footer */}
        <div className="max-w-6xl mx-auto mt-12 border-t border-white/5 pt-4 flex justify-between items-center text-on-surface-variant/40">
          <div className="font-body text-xs hidden sm:block">Mis à jour en 2026</div>
          <div className="font-body text-xs">Portfolio conçu avec Next.js &amp; Tailwind</div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <div className="font-body text-xs">En ligne</div>
          </div>
        </div>
      </div>
    </>
  );
}
