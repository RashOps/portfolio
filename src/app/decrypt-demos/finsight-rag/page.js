"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { finSightApiService } from "@/lib/api-service";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function FinSightDashboard() {
  // Telemetry States
  const [health, setHealth] = useState(null);
  const [dbStatus, setDbStatus] = useState(null);
  const [articlesStatus, setArticlesStatus] = useState(null);
  const [isLoadingTelemetry, setIsLoadingTelemetry] = useState(true);

  // Ingestion Controllers State
  const [isScraping, setIsScraping] = useState(false);
  const [isVectorizing, setIsVectorizing] = useState(false);
  const [ingestionMessage, setIngestionMessage] = useState(null);

  // RAG Chat States
  const [query, setQuery] = useState("");
  const [isQuerying, setIsQuerying] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      id: 1,
      role: 'assistant',
      content: "Système RAG en ligne. Posez une question sur l'actualité financière pour interroger la base Qdrant. Les réponses sont générées par Llama-3-70B.",
      timestamp: new Date().toISOString()
    }
  ]);
  const chatEndRef = useRef(null);

  // Cooldown States (Protection)
  const [cooldown, setCooldown] = useState(0); // in seconds
  const COOLDOWN_TIME = 15; // 15 seconds between queries

  // Articles Feed States
  const [articles, setArticles] = useState([]);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const [articleFilter, setArticleFilter] = useState("all");

  // Fetch Telemetry Function
  const fetchTelemetry = async () => {
    setIsLoadingTelemetry(true);
    const [h, db, art] = await Promise.all([
      finSightApiService.getHealth(),
      finSightApiService.getDbStatus(),
      finSightApiService.getArticlesStatus()
    ]);
    setHealth(h);
    setDbStatus(db);
    setArticlesStatus(art);
    setIsLoadingTelemetry(false);
  };

  // Initialization
  useEffect(() => {
    fetchTelemetry();
  }, []);

  // Cooldown Timer Logic
  useEffect(() => {
    let timer;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  // Auto-scroll désactivé selon la demande
  // useEffect(() => {
  //   chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chatHistory, isQuerying]);

  // Fetch articles when filter changes
  const fetchArticlesList = async () => {
    setIsLoadingArticles(true);
    const result = await finSightApiService.getArticles(0, 20, null, articleFilter);
    if (result) {
      setArticles(Array.isArray(result) ? result : []);
    }
    setIsLoadingArticles(false);
  };

  useEffect(() => {
    fetchArticlesList();
  }, [articleFilter]);

  // Chat Query Handler
  const handleQuery = async (e) => {
    e.preventDefault();
    if (!query.trim() || isQuerying || cooldown > 0) return;

    const userQuery = query;
    setQuery("");
    
    // Add User Message
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content: userQuery,
      timestamp: new Date().toISOString()
    };
    setChatHistory(prev => [...prev, userMessage]);
    
    setIsQuerying(true);

    // Call API
    const result = await finSightApiService.queryRAG(userQuery);
    
    // Add Assistant Message
    if (result) {
      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: result.answer,
        sources: result.sources_used || [],
        processingTime: result.processing_time,
        timestamp: new Date().toISOString()
      };
      setChatHistory(prev => [...prev, assistantMessage]);
    } else {
      setChatHistory(prev => [...prev, {
        id: Date.now() + 1,
        role: 'system',
        content: "Erreur de connexion à l'API RAG. Le service est peut-être en veille sur Hugging Face.",
        timestamp: new Date().toISOString()
      }]);
    }
    
    setIsQuerying(false);
    setCooldown(COOLDOWN_TIME); // Start Cooldown
  };

  // Trigger Ingestion Handlers
  const handleTriggerScraping = async () => {
    if (isScraping) return;
    setIsScraping(true);
    setIngestionMessage("Lancement du scraper RSS en arrière-plan...");
    
    const result = await finSightApiService.triggerScraping(5);
    
    setTimeout(() => {
      setIngestionMessage(result ? "Scraping démarré avec succès. Actualisez dans quelques instants." : "Erreur lors du lancement du scraper.");
      setIsScraping(false);
      // Refresh telemetry after 3 seconds to see new raw docs
      setTimeout(() => { fetchTelemetry(); setIngestionMessage(null); }, 3000);
    }, 1500); // UI delay for feedback
  };

  const handleTriggerVectorization = async () => {
    if (isVectorizing) return;
    setIsVectorizing(true);
    setIngestionMessage("Pipeline de vectorisation Cohere lancé...");
    
    const result = await finSightApiService.triggerVectorization(10);
    
    setTimeout(() => {
      setIngestionMessage(result ? "Vectorisation asynchrone démarrée." : "Erreur lors de la vectorisation.");
      setIsVectorizing(false);
      // Refresh telemetry after 5 seconds to see vectorized changes
      setTimeout(() => { fetchTelemetry(); setIngestionMessage(null); }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface font-body p-4 md:p-8 pt-24 md:pt-28">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link href="/decrypt-demos" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors text-xs font-bold uppercase tracking-widest mb-6">
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Retour au Playground
        </Link>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-green-400 text-3xl">hub</span>
              <h1 className="text-3xl md:text-5xl font-headline font-black tracking-tight">FinSight <span className="text-green-400">RAG</span></h1>
            </div>
            <p className="text-on-surface-variant max-w-2xl text-sm leading-relaxed">
              Moteur RAG (Retrieval-Augmented Generation) financier. Interrogez l'actualité des marchés, le moteur extraira les documents vectorisés de Qdrant pour générer une synthèse via Groq (Llama-3).
            </p>
          </div>
          
          <div className="flex items-center gap-4 glass px-5 py-3 rounded-xl border border-green-400/20 bg-green-400/5">
            <div className="flex flex-col">
              <span className="text-[10px] text-green-400/70 uppercase font-bold tracking-widest mb-1">FastAPI Backend</span>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${health?.status === 'healthy' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
                <span className="text-xs font-bold text-on-surface">{health?.status === 'healthy' ? 'SYSTEM OPERATIONAL' : 'OFFLINE'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DASHBOARD GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT PANE: RAG Terminal & Telemetry */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* RAG TERMINAL (CHAT) */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-2xl border border-white/10 flex flex-col h-[600px] overflow-hidden">
            <div className="bg-surface-container/80 px-5 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-green-400 text-sm">terminal</span>
                <span className="text-xs font-mono text-on-surface-variant tracking-wider uppercase">Interactive Chat Console</span>
              </div>
              <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded">llama-3.3-70b-instruct</span>
            </div>
            
            <div className="flex-grow flex flex-col relative bg-surface-container-low/30 min-h-0">
              
              {/* Chat History */}
              <div className="flex-grow p-5 overflow-y-auto custom-scrollbar flex flex-col gap-6 min-h-0">
                {chatHistory.map((msg) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} 
                    key={msg.id} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl p-4 ${msg.role === 'user' ? 'bg-green-400 text-background rounded-tr-sm' : msg.role === 'system' ? 'bg-red-400/10 border border-red-400/30 text-red-400 rounded-tl-sm' : 'bg-surface-container border border-white/5 rounded-tl-sm'}`}>
                      
                      {/* Avatar/Icon Indicator */}
                      <div className="flex items-center gap-2 mb-2 opacity-70">
                        <span className="material-symbols-outlined text-sm">
                          {msg.role === 'user' ? 'person' : msg.role === 'system' ? 'error' : 'smart_toy'}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider">
                          {msg.role}
                        </span>
                      </div>

                      {/* Message Content */}
                      <div className={`text-sm leading-relaxed ${msg.role === 'user' ? 'font-medium whitespace-pre-wrap' : 'text-on-surface prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 prose-headings:font-headline prose-a:text-green-400'}`}>
                        {msg.role === 'user' || msg.role === 'system' ? (
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        ) : (
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {msg.content}
                          </ReactMarkdown>
                        )}
                      </div>

                      {/* Sources Block (Assistant Only) */}
                      {msg.sources && msg.sources.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-white/5">
                          <h4 className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-2 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[12px]">link</span>
                            Sources
                          </h4>
                          <div className="flex flex-col gap-1.5">
                            {msg.sources.map((url, idx) => {
                              let domain = "Link";
                              try { domain = new URL(url).hostname.replace('www.', ''); } catch(e){}
                              return (
                                <a key={idx} href={url} target="_blank" rel="noopener noreferrer" className="text-xs font-mono text-green-400 hover:underline flex items-center justify-between group bg-background/50 px-2 py-1.5 rounded">
                                  <span className="truncate max-w-[200px]">{url}</span>
                                  <span className="text-[9px] bg-green-400/20 px-1.5 py-0.5 rounded text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">Visiter ↗</span>
                                </a>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Processing Time */}
                      {msg.processingTime && (
                        <div className="mt-2 text-[9px] font-mono opacity-50 text-right">
                          {msg.processingTime.toFixed(3)}s
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* Loading Indicator */}
                {isQuerying && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-surface-container border border-white/5 rounded-2xl rounded-tl-sm p-4 flex items-center gap-3">
                      <div className="w-4 h-4 border-2 border-green-400/20 border-t-green-400 rounded-full animate-spin"></div>
                      <span className="text-xs font-mono text-green-400 animate-pulse">Retrieving and Generating...</span>
                    </div>
                  </motion.div>
                )}
                
                {/* Dummy ref for auto-scroll */}
                <div ref={chatEndRef} />
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleQuery} className="p-4 border-t border-white/10 bg-surface-container-low flex flex-col shrink-0 relative z-10">
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={cooldown > 0 ? `Veuillez patienter ${cooldown}s...` : "Écrivez votre question ici..."}
                    className="w-full bg-surface-container border border-white/10 rounded-xl py-4 pl-4 pr-32 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-green-400/50 focus:ring-1 focus:ring-green-400/50 transition-all shadow-inner disabled:opacity-50"
                    disabled={isQuerying || cooldown > 0}
                  />
                  <button 
                    type="submit"
                    disabled={isQuerying || cooldown > 0 || !query.trim()}
                    className="absolute inset-y-2 right-2 bg-green-400 text-background px-4 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-green-300 transition-colors disabled:opacity-30 disabled:hover:bg-green-400 flex items-center gap-2"
                  >
                    {isQuerying ? '...' : cooldown > 0 ? `${cooldown}s` : 'Send'}
                    <span className="material-symbols-outlined text-sm">send</span>
                  </button>
                </div>
                {/* Rate limit warning */}
                <div className="mt-2 text-[10px] text-on-surface-variant font-mono text-center flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-[12px] text-orange-400">gavel</span>
                  Protection Anti-Abus : 1 requête toutes les 15 secondes max.
                </div>
              </form>
            </div>
          </motion.div>

          {/* TELEMETRY & INGESTION CONTROLLERS */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* MongoDB Telemetry & Scraping */}
            <div className="glass rounded-xl p-5 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-green-400 text-xl">storage</span>
                  <h3 className="font-headline font-bold text-sm">MongoDB Data Lake</h3>
                </div>
                {isLoadingTelemetry ? (
                  <div className="animate-pulse h-10 bg-white/5 rounded w-full"></div>
                ) : dbStatus ? (
                  <ul className="space-y-3 font-mono text-xs text-on-surface-variant mb-6">
                    <li className="flex justify-between items-center">
                      <span>Collection</span>
                      <span className="text-white bg-white/10 px-2 py-0.5 rounded">{dbStatus.collection}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Documents (Raw)</span>
                      <span className="text-green-400 font-bold">{dbStatus.document_count}</span>
                    </li>
                  </ul>
                ) : (
                  <p className="text-xs font-mono text-red-400 mb-6">Unavailable</p>
                )}
              </div>
              
              <button 
                onClick={handleTriggerScraping}
                disabled={isScraping || isLoadingTelemetry}
                className="w-full py-2 bg-surface border border-white/10 hover:border-green-400/50 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isScraping ? (
                  <><span className="w-3 h-3 border-2 border-green-400/20 border-t-green-400 rounded-full animate-spin"></span> Scraping...</>
                ) : (
                  <><span className="material-symbols-outlined text-sm text-green-400">rss_feed</span> Run Scraper</>
                )}
              </button>
            </div>

            {/* Qdrant Telemetry & Vectorization */}
            <div className="glass rounded-xl p-5 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-purple-400 text-xl">data_array</span>
                  <h3 className="font-headline font-bold text-sm">Qdrant Vector DB</h3>
                </div>
                {isLoadingTelemetry ? (
                  <div className="animate-pulse h-10 bg-white/5 rounded w-full"></div>
                ) : articlesStatus ? (
                  <ul className="space-y-3 font-mono text-xs text-on-surface-variant mb-6">
                    <li className="flex justify-between items-center">
                      <span>Vectorized</span>
                      <span className="text-purple-400 font-bold">{articlesStatus.vectorized_articles}</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Pending Queue</span>
                      <span className="text-orange-400 font-bold">{articlesStatus.non_vectorized_articles}</span>
                    </li>
                  </ul>
                ) : (
                  <p className="text-xs font-mono text-red-400 mb-6">Unavailable</p>
                )}
              </div>

              <button 
                onClick={handleTriggerVectorization}
                disabled={isVectorizing || isLoadingTelemetry}
                className="w-full py-2 bg-surface border border-white/10 hover:border-purple-400/50 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isVectorizing ? (
                  <><span className="w-3 h-3 border-2 border-purple-400/20 border-t-purple-400 rounded-full animate-spin"></span> Embedding...</>
                ) : (
                  <><span className="material-symbols-outlined text-sm text-purple-400">memory</span> Run Cohere</>
                )}
              </button>
            </div>
            
            {/* Action Feedback Message */}
            {ingestionMessage && (
              <div className="col-span-1 sm:col-span-2 text-center text-[10px] font-mono text-green-400 animate-pulse">
                {ingestionMessage}
              </div>
            )}
          </motion.div>
        </div>

        {/* RIGHT PANE: Articles Feed */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="lg:col-span-5 glass rounded-2xl border border-white/10 flex flex-col h-[700px] lg:h-[840px]">
          
          <div className="p-5 border-b border-white/5 flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-on-surface text-xl">article</span>
                <h3 className="font-headline font-bold text-lg">Knowledge Base</h3>
              </div>
              <button 
                onClick={fetchArticlesList}
                className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant hover:text-green-400 transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[12px]">refresh</span>
                Refresh
              </button>
            </div>
            
            {/* Filter Pills */}
            <div className="flex bg-surface-container-low p-1 rounded-lg">
              {[
                { id: 'all', label: 'All' },
                { id: 'vectorized', label: 'Vectorized' },
                { id: 'non-vectorized', label: 'Pending' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setArticleFilter(f.id)}
                  className={`flex-1 text-[10px] font-bold uppercase tracking-wider py-2 rounded-md transition-all ${
                    articleFilter === f.id 
                      ? 'bg-surface border border-white/10 text-green-400 shadow-sm' 
                      : 'text-on-surface-variant hover:text-white'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-grow overflow-y-auto p-4 custom-scrollbar bg-surface-container-low/20">
            {isLoadingArticles ? (
              <div className="h-full flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-green-400/20 border-t-green-400 rounded-full animate-spin"></div>
              </div>
            ) : articles.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                <span className="material-symbols-outlined text-4xl mb-2 text-on-surface-variant">inbox</span>
                <p className="text-xs font-mono text-on-surface-variant">Aucun document trouvé.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <AnimatePresence>
                  {articles.map((art, idx) => (
                    <motion.div 
                      key={art._id || idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05 }}
                      className="p-4 bg-surface-container-low border border-white/5 rounded-xl hover:border-green-400/20 transition-colors group flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-2 gap-3">
                        <a 
                          href={art.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm font-bold text-on-surface line-clamp-2 leading-snug group-hover:text-green-400 hover:underline transition-colors flex-grow"
                        >
                          {art.title}
                        </a>
                        <span className="material-symbols-outlined text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                      </div>
                      
                      <p className="text-xs text-on-surface-variant line-clamp-3 mb-4 leading-relaxed font-body">
                        {art.summary || art.content?.substring(0, 150) + "..." || "Aucun extrait disponible."}
                      </p>
                      
                      <div className="flex justify-between items-end mt-auto pt-3 border-t border-white/5">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-mono text-on-surface-variant uppercase">{art.source}</span>
                          <span className="text-[10px] font-mono text-on-surface-variant opacity-70">
                            {art.published_at ? new Date(art.published_at).toLocaleDateString() : 'Date inconnue'}
                          </span>
                        </div>
                        
                        <div className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider flex items-center gap-1 ${art.vectorized ? 'bg-purple-400/10 text-purple-400' : 'bg-orange-400/10 text-orange-400'}`}>
                          <span className="material-symbols-outlined text-[10px]">{art.vectorized ? 'check_circle' : 'pending'}</span>
                          {art.vectorized ? 'Vectorized' : 'Pending'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
