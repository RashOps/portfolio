import Link from "next/link";
import Image from "next/image";
export default function MissionLog() {
  return (
    <>
      <div className="p-8">
        {/* HEADER SECTION */}
        <section className="mb-12" id="mission-log">
          <div className="flex items-center gap-4 mb-2">
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="font-headline text-primary uppercase tracking-[0.3em] text-xs">Accessing Archives...</span>
          </div>
          <h1 className="text-6xl font-headline font-bold text-primary text-glow uppercase tracking-tighter mb-4">MISSION_LOG</h1>
          <p className="max-w-2xl text-on-surface-variant font-body text-sm leading-relaxed">
            Decrypted project data from the Kinetic mainframe. This repository contains end-to-end AI deployments, neural architectures, and distributed systems logged by OPERATOR_01.
          </p>
        </section>

        {/* FILTERS / STATUS BAR */}
        <div className="flex flex-wrap gap-6 mb-12 border-y border-outline-variant/15 py-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-sm">filter_list</span>
            <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">Classification:</span>
          </div>
          <button className="font-label text-[10px] tracking-widest uppercase px-3 py-1 border border-primary text-primary bg-primary/5">All_Files</button>
          <button className="font-label text-[10px] tracking-widest uppercase px-3 py-1 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-all">Neural_Nets</button>
          <button className="font-label text-[10px] tracking-widest uppercase px-3 py-1 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-all">Data_Pipelines</button>
          <button className="font-label text-[10px] tracking-widest uppercase px-3 py-1 border border-outline-variant/30 text-on-surface-variant hover:text-primary hover:border-primary transition-all">Cloud_Ops</button>
        </div>

        {/* BENTO GRID ARCHIVE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PROJECT CARD 1 */}
          <Link href="#project-neuro-sync" className="group relative bg-surface-container border-l-4 border-secondary p-6 transition-all hover:bg-surface-container-high hover:translate-x-2 block">
            <div className="absolute top-2 right-2 flex gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="w-1 h-1 bg-secondary"></span>
              <span className="w-1 h-1 bg-secondary"></span>
            </div>
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <span className="font-label text-[9px] text-secondary tracking-[0.2em] mb-1">LOG_ID: #4092-ALPHA</span>
                <h3 className="text-xl font-headline font-bold text-primary group-hover:text-glow transition-all">PROJECT_NEURO_SYNC</h3>
              </div>
              <div className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 text-[9px] font-label tracking-widest uppercase">ACTIVE</div>
            </div>
            <div className="aspect-video mb-6 bg-surface-container-lowest overflow-hidden border border-outline-variant/15 relative">
              <Image 
                fill
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                alt="abstract neural network visualization with neon green connections on deep black background with digital noise" 
                src="/assets/images/mission_1.jpg"
              />
              <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-secondary/5 transition-all"></div>
            </div>
            <p className="text-xs text-on-surface-variant font-body mb-6 leading-relaxed">
                Decentralized AI inference engine running on Kubernetes edge clusters. Real-time signal synchronization between 500+ nodes.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">PyTorch</span>
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">Kubernetes</span>
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">gRPC</span>
            </div>
            <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-label text-primary uppercase">Execute_Access_01</span>
              <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
            </div>
          </Link>

          {/* PROJECT CARD 2 */}
          <Link href="#void-analytics" className="group relative bg-surface-container border-l-4 border-primary p-6 transition-all hover:bg-surface-container-high hover:translate-x-2 block">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <span className="font-label text-[9px] text-primary tracking-[0.2em] mb-1">LOG_ID: #1105-BETA</span>
                <h3 className="text-xl font-headline font-bold text-primary group-hover:text-glow transition-all">VOID_ANALYTICS</h3>
              </div>
              <div className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 text-[9px] font-label tracking-widest uppercase">COMPLETED</div>
            </div>
            <div className="aspect-video mb-6 bg-surface-container-lowest overflow-hidden border border-outline-variant/15 relative">
              <Image 
                fill
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                alt="digital encryption visualization with matrix-like data streams and golden light accents in a dark terminal space" 
                src="/assets/images/mission_2.jpg"
              />
              <div className="absolute inset-0 pointer-events-none group-hover:bg-primary/5 transition-all"></div>
            </div>
            <p className="text-xs text-on-surface-variant font-body mb-6 leading-relaxed">
                Custom data lake architecture optimized for high-velocity streaming. Automated ETL pipelines processing 10TB+ daily.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">Python</span>
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">Kafka</span>
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">Spark</span>
            </div>
            <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-label text-primary uppercase">Read_Manifest</span>
              <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
            </div>
          </Link>

          {/* PROJECT CARD 3 */}
          <Link href="#project-glitch" className="group relative bg-surface-container border-l-4 border-tertiary p-6 transition-all hover:bg-surface-container-high hover:translate-x-2 block">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <span className="font-label text-[9px] text-tertiary tracking-[0.2em] mb-1">LOG_ID: #7721-GAMMA</span>
                <h3 className="text-xl font-headline font-bold text-primary group-hover:text-glow transition-all">PROJECT_GLITCH</h3>
              </div>
              <div className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 text-[9px] font-label tracking-widest uppercase">EXPERIMENTAL</div>
            </div>
            <div className="aspect-video mb-6 bg-surface-container-lowest overflow-hidden border border-outline-variant/15 relative">
              <Image 
                fill
                className="object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-80 transition-all duration-500" 
                alt="cyberpunk aesthetic digital art with vibrant magenta glitch effects and dark futuristic geometric shapes" 
                src="/assets/images/mission_3.jpg"
              />
              <div className="absolute inset-0 bg-tertiary/5 mix-blend-overlay"></div>
            </div>
            <p className="text-xs text-on-surface-variant font-body mb-6 leading-relaxed">
                Generative Adversarial Networks (GANs) designed for high-fidelity signal restoration in low-bandwidth environments.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">TensorFlow</span>
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">React</span>
              <span className="px-2 py-1 bg-surface-container-highest text-[9px] font-label text-on-surface-variant border border-outline-variant/20 uppercase">OpenCV</span>
            </div>
            <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-label text-primary uppercase">Decrypt_Source</span>
              <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
            </div>
          </Link>

          {/* PROJECT CARD 4 (Full Width Style) */}
          <div className="lg:col-span-3 group relative bg-surface-container border-l-4 border-secondary p-8 transition-all hover:bg-surface-container-high overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/2 aspect-video bg-surface-container-lowest border border-outline-variant/15 relative overflow-hidden">
                <Image 
                  fill
                  className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  alt="close-up of advanced computer hardware with glowing green circuits and futuristic electronic components" 
                  src="/assets/images/mission_4.jpg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-secondary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-4xl group-hover:scale-125 transition-all">play_circle</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <span className="font-label text-[10px] text-secondary tracking-[0.3em] mb-2 block">MASTER_LOG_00</span>
                <h2 className="text-4xl font-headline font-bold text-primary mb-4 group-hover:text-glow">KINETIC_CORE_INTERFACE</h2>
                <p className="text-sm text-on-surface-variant font-body mb-8 leading-relaxed max-w-md">
                    The central intelligence hub for the entire portfolio ecosystem. Integrates real-time telemetry from all active projects into a unified dashboard. Built with resilience and extreme low-latency response times in mind.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-label text-outline uppercase tracking-widest mb-1">STABILITY</span>
                    <div className="w-32 h-1 bg-outline-variant/30">
                      <div className="w-[98%] h-full bg-secondary shadow-[0_0_8px_#00fc40]"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[9px] font-label text-outline uppercase tracking-widest mb-1">COMPLETION</span>
                    <div className="w-32 h-1 bg-outline-variant/30">
                      <div className="w-[100%] h-full bg-primary shadow-[0_0_8px_#cafd00]"></div>
                    </div>
                  </div>
                </div>
                <Link href="#decrypt-demos" className="inline-block bg-primary text-on-primary px-8 py-3 font-label text-xs tracking-[0.2em] uppercase font-bold hover:shadow-[0_0_15px_rgba(202,253,0,0.4)] transition-all active:scale-95 duration-100 ease-in-out">
                    ENTER_TERMINAL_INTERFACE
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SYSTEM STATUS */}
        <div className="mt-20 pt-8 border-t border-outline-variant/15 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_5px_#00fc40]"></div>
            <span className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Live_System_Telemetry: Optimal</span>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-label text-outline uppercase">Logged_At:</span>
              <span className="text-[10px] font-headline text-primary">2026.03.29 // 01:57:00</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-label text-outline uppercase">Operator_Key:</span>
              <span className="text-[10px] font-headline text-primary">IA_X_992_KINETIC</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
