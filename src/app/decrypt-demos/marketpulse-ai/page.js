"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Link from "next/link";
import { apiService } from "@/lib/api-service";
import { motion, AnimatePresence } from "framer-motion";

const NEWS_PER_PAGE = 8;
const HEALTH_CHECK_INTERVAL = 30000;

const COLORS = {
  primary: "#a78bfa",
  secondary: "#06b6d4",
  tertiary: "#3b82f6",
  error: "#ef4444"
};

export default function MarketPulseDemo() {
  const [retraining, setRetraining] = useState(false);
  const [scraping, setScraping] = useState(false);
  const [tickerScraping, setTickerScraping] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const [apiStatus, setApiStatus] = useState("checking...");
  const [systemMessage, setSystemMessage] = useState("Initializing Engine...");
  const [segments, setSegments] = useState([]);
  const [news, setNews] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [pcaPoints, setPcaPoints] = useState([]);
  const [totalAssets, setTotalAssets] = useState(0);
  const [engineConfig, setEngineConfig] = useState(null);
  
  const [newsPage, setNewsPage] = useState(0);
  const [newsSource, setNewsSource] = useState(null);
  const isFetchingRef = useRef(false);

  // Fallback Data
  const mockSegments = [
    { business_segment: "Growth Tech", color: "text-primary", asset_count: 124, feature_volatility_pct: "4.2%", feature_momentum_pct: "+2.1%" },
    { business_segment: "High Volatility", color: "text-error", asset_count: 45, feature_volatility_pct: "12.5%", feature_momentum_pct: "-1.5%" },
    { business_segment: "Defensive Value", color: "text-secondary", asset_count: 89, feature_volatility_pct: "1.2%", feature_momentum_pct: "+0.4%" }
  ];

  const fetchEngineData = useCallback(async (showLoading = false) => {
    if (isFetchingRef.current) return;
    isFetchingRef.current = true;
    if (showLoading) setIsRefreshing(true);
    
    try {
      const [_segResult, _realNews, _realMetrics, _inventory, _config] = await Promise.all([
        apiService.getMarketSegments(),
        apiService.getMarketNews(50, newsSource),
        apiService.getModelMetrics(),
        apiService.getInventory(),
        apiService.getSystemConfig()
      ]);

      if (_segResult && Array.isArray(_segResult.profiles)) {
        setSegments(_segResult.profiles);
        if (Array.isArray(_segResult.data)) setPcaPoints(_segResult.data);
      } else if (!showLoading) {
        setSegments(mockSegments);
      }

      if (_inventory) setTotalAssets(_inventory.total_raw_records);
      else if (_segResult) setTotalAssets(_segResult.metadata?.total_assets || 0);

      if (_config) setEngineConfig(_config);
      if (Array.isArray(_realNews) && _realNews.length > 0) setNews(_realNews);
      if (_realMetrics) setMetrics(_realMetrics);
      
      setApiStatus("online");
    } catch (error) {
      console.error("Fetch Data Error:", error);
      setApiStatus("offline");
    } finally {
      setIsRefreshing(false);
      isFetchingRef.current = false;
    }
  }, [newsSource]);

  useEffect(() => {
    async function checkHealth() {
      const statusRes = await apiService.getSystemStatus();
      if (statusRes) {
        setApiStatus(statusRes.status);
        setSystemMessage(statusRes.message);
      }
    }
    checkHealth();
    fetchEngineData();
    const interval = setInterval(checkHealth, HEALTH_CHECK_INTERVAL);
    return () => clearInterval(interval);
  }, [fetchEngineData]);

  const formattedPca = useMemo(() => {
    return pcaPoints.slice(0, 800).map(pt => ({
      ...pt,
      x: 50 + (pt.PCA_1 * 22),
      y: 50 - (pt.PCA_2 * 22)
    }));
  }, [pcaPoints]);

  const triggerTraining = async () => {
    setRetraining(true);
    await apiService.triggerRetraining();
    setTimeout(() => {
      setRetraining(false);
      fetchEngineData(true);
    }, 2000);
  };

  const triggerNewsScraping = async () => {
    setScraping(true);
    await apiService.triggerNewsScraping(15);
    setTimeout(() => {
      setScraping(false);
      fetchEngineData(true);
      setNewsPage(0);
    }, 2500);
  };

  const triggerTickerScraping = async () => {
    setTickerScraping(true);
    await apiService.triggerTickerScraping(30);
    setTimeout(() => {
      setTickerScraping(false);
      fetchEngineData(true);
    }, 3000);
  };

  const paginatedNews = news.slice(newsPage * NEWS_PER_PAGE, (newsPage + 1) * NEWS_PER_PAGE);
  const totalPages = Math.ceil(news.length / NEWS_PER_PAGE);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(167,139,250,0.1),transparent_70%)]" />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="grid grid-cols-12 h-full opacity-10">
          {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white/5 h-full"></div>)}
        </div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 py-6 md:px-8 md:py-10 grid grid-cols-1 xl:grid-cols-[280px_1fr_320px] gap-8 h-full min-h-[90vh]">
        
        {/* === COLUMN 1: SYSTEM & OPERATIONS === */}
        <aside className="space-y-8 flex flex-col order-2 xl:order-1">
          {/* Engine Header */}
          <section className="space-y-4">
            <Link href="/decrypt-demos" className="inline-flex items-center gap-2 text-[10px] uppercase font-bold text-on-surface-variant hover:text-primary transition-colors mb-2">
              <span className="material-symbols-outlined text-sm">arrow_back</span> Return to Hub
            </Link>
            <div className="space-y-1">
              <h1 className="font-headline text-2xl md:text-3xl font-bold tracking-tight">MarketPulse</h1>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-tighter border border-primary/20">CORE V1.2.0</span>
                <div className={`w-1.5 h-1.5 rounded-full ${apiStatus === 'online' ? 'bg-green-400' : 'bg-orange-400'} animate-pulse`} />
              </div>
            </div>
            <p className="text-[11px] leading-relaxed text-on-surface-variant/80 uppercase tracking-widest">{systemMessage}</p>
          </section>

          {/* Engine Stats */}
          <div className="glass rounded-2xl p-5 border border-white/5 space-y-4">
            <div className="flex justify-between items-end border-b border-white/5 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold opacity-60">Asset Inventory</span>
                <div className="font-headline text-2xl font-bold gradient-text">{totalAssets || "---"}</div>
              </div>
              <button 
                onClick={() => fetchEngineData(true)}
                className="btn-ghost p-2 rounded-lg hover:bg-white/5 transition-all text-primary"
              >
                <span className={`material-symbols-outlined text-sm ${isRefreshing ? 'animate-spin' : ''}`}>sync</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-3 pt-2">
              <div className="flex justify-between text-[10px] font-bold">
                <span className="opacity-40 uppercase tracking-widest">PCA Components</span>
                <span className="text-secondary">{engineConfig?.pca_components || 2} AXIS</span>
              </div>
              <div className="flex justify-between text-[10px] font-bold">
                <span className="opacity-40 uppercase tracking-widest">Max Clusters</span>
                <span className="text-tertiary">{engineConfig?.max_clusters || 8} RANGE</span>
              </div>
            </div>
          </div>

          {/* Command Center */}
          <div className="space-y-4">
            <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 px-2">Command Center</h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { label: "Fetch Assets", icon: "query_stats", color: "text-secondary", action: triggerTickerScraping, active: tickerScraping, sub: "yFinance / S&P500" },
                { label: "Scrape Intelligence", icon: "rss_feed", color: "text-primary", action: triggerNewsScraping, active: scraping, sub: "Market Feeds Ingestion" },
                { label: "Optimize Model", icon: "model_training", color: "text-tertiary", action: triggerTraining, active: retraining, sub: "Latent Space Projection" }
              ].map((btn, i) => (
                <button
                  key={i}
                  disabled={btn.active}
                  onClick={btn.action}
                  className="w-full text-left glass rounded-xl p-4 border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform ${btn.color}`}>
                      <span className={`material-symbols-outlined ${btn.active ? 'animate-spin' : ''}`}>{btn.icon}</span>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-tight text-on-surface">{btn.label}</div>
                      <div className="text-[9px] text-on-surface-variant font-medium">{btn.active ? "Executing..." : btn.sub}</div>
                    </div>
                  </div>
                  {btn.active && (
                    <motion.div 
                      layoutId="loader" 
                      className="absolute bottom-0 left-0 h-0.5 bg-primary" 
                      initial={{ width: 0 }} 
                      animate={{ width: "100%" }} 
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* === COLUMN 2: TOPOLOGICAL VISUALIZATION === */}
        <main className="order-1 xl:order-2 space-y-8">
          <div className="glass rounded-[24px] md:rounded-[32px] p-5 md:p-8 min-h-[400px] md:min-h-[600px] flex flex-col border border-white/10 relative overflow-hidden group">
            {/* Header / Legend */}
            <div className="flex justify-between items-start relative z-10 mb-8">
              <div>
                <h2 className="font-headline text-xl md:text-2xl font-bold mb-1">Topological Market Mapping</h2>
                <div className="flex items-center gap-4">
                  <p className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest opacity-60">Mapping de {formattedPca.length} regimes latents</p>
                  <div className="h-[1px] w-8 bg-white/10" />
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#a78bfa]" />
                       <span className="text-[8px] uppercase font-bold opacity-40">Main Stream</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-error shadow-[0_0_8px_#ef4444]" />
                       <span className="text-[8px] uppercase font-bold opacity-40">Risk Zone</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold opacity-30 uppercase mb-1">Silhouette Accuracy</div>
                <div className="font-headline text-2xl font-bold text-secondary">
                  {metrics?.results?.silhouette_score?.toFixed(3) || "0.---"}
                </div>
              </div>
            </div>

            {/* Grid / Plot Area */}
            <div className="flex-grow glass rounded-2xl bg-surface-container-low/30 border border-white/5 relative flex items-center justify-center overflow-hidden">
               {/* Grid Pattern */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
               
               {/* Scanner Effect */}
               <motion.div 
                 initial={{ y: -500 }}
                 animate={{ y: 500 }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-20"
               />

               <div className="relative w-full h-[400px]">
                 <AnimatePresence>
                    {formattedPca.map((pt, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.001, duration: 0.5 }}
                        whileHover={{ scale: 2.5, zIndex: 100 }}
                        className="absolute w-2 h-2 rounded-full hover:shadow-[0_0_15px_currentColor]"
                        style={{
                          left: `${pt.x}%`,
                          top: `${pt.y}%`,
                          backgroundColor: pt.cluster === 0 ? COLORS.primary : pt.cluster === 1 ? COLORS.error : pt.cluster === 2 ? COLORS.secondary : COLORS.tertiary,
                          boxShadow: `0 0 10px ${pt.cluster === 0 ? COLORS.primary : pt.cluster === 1 ? COLORS.error : pt.cluster === 2 ? COLORS.secondary : COLORS.tertiary}44`
                        }}
                      >
                         {/* Optional Tooltip Concept */}
                         <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 hidden">
                            {pt.ticker}
                         </div>
                      </motion.div>
                    ))}
                 </AnimatePresence>
                 
                 {formattedPca.length === 0 && (
                   <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-on-surface-variant/20">
                      <span className="material-symbols-outlined text-6xl animate-pulse">grain</span>
                      <span className="text-[10px] uppercase font-bold tracking-[0.5em]">Synchronizing Stream</span>
                   </div>
                 )}
               </div>
            </div>

            {/* Metrics Footer */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-white/5 relative z-10">
               {[
                 { label: "Explained Var.", value: metrics?.results?.total_variance_explained ? (metrics.results.total_variance_explained * 100).toFixed(1) + '%' : "---", color: "text-primary" },
                 { label: "Cluster Regimes", value: metrics?.results?.optimal_k || "---", color: "text-tertiary" },
                 { label: "Last Optimized", value: metrics?.timestamp ? new Date(metrics.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "---", color: "text-on-surface-variant" },
                 { label: "Core Version", value: "AQUILA v1.2", color: "text-on-surface-variant opacity-40" }
               ].map((m, i) => (
                 <div key={i} className="space-y-1">
                    <div className="text-[9px] uppercase font-bold opacity-30 tracking-widest">{m.label}</div>
                    <div className={`font-headline text-lg font-bold ${m.color}`}>{m.value}</div>
                 </div>
               ))}
            </div>
          </div>

          {/* Segment Profiles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segments.map((segment, i) => (
              <motion.div
                layout
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border-l-4 border-white/5 hover:border-l-primary transition-all group card-hover relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                   <span className="material-symbols-outlined text-6xl">analytics</span>
                </div>
                
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className={`font-headline font-bold text-base tracking-tight mb-1 ${segment.color || 'text-primary'}`}>
                      {segment.business_segment}
                    </h3>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-on-surface-variant bg-white/5 px-2 py-0.5 rounded uppercase">{segment.asset_count} assets</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase text-on-surface-variant font-bold opacity-40 tracking-wider">Volatility Median</span>
                    <div className="text-sm font-bold text-white">{segment.feature_volatility_pct || "---"}</div>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase text-on-surface-variant font-bold opacity-40 tracking-wider">Momentum Avg</span>
                    <div className={`text-sm font-bold ${parseFloat(segment.feature_momentum_pct) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {segment.feature_momentum_pct || "---"}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </main>

        {/* === COLUMN 3: INTELLIGENCE FEED === */}
        <aside className="order-3 space-y-8 flex flex-col">
           <div className="glass rounded-[24px] md:rounded-[32px] p-6 border border-white/10 flex flex-col h-[500px] md:h-full bg-surface-container-low/50 xl:sticky xl:top-10 overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">dynamic_feed</span>
                  <h3 className="font-headline font-bold text-lg">Intelligence</h3>
                </div>
                <div className="flex gap-1">
                  {["All", "Yahoo Finance", "Investing.com"].map(src => (
                    <button
                      key={src}
                      onClick={() => { setNewsSource(src === "All" ? null : src); setNewsPage(0); }}
                      className={`text-[8px] font-bold px-2 py-1 rounded transition-all uppercase tracking-tighter ${newsSource === (src === "All" ? null : src) ? 'bg-primary text-white' : 'glass text-on-surface-variant hover:bg-white/10'}`}
                    >
                      {src === "Yahoo Finance" ? "Y" : src === "Investing.com" ? "I" : "A"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-6 flex-grow overflow-y-auto custom-scrollbar pr-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${newsPage}-${newsSource}`}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    {paginatedNews.map((n, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="flex justify-between items-center mb-2">
                           <span className="text-[8px] font-black text-primary opacity-60 uppercase bg-primary/5 px-1.5 py-0.5 rounded leading-none">
                             {n.source?.split(" ")[0]}
                           </span>
                           <span className="text-[8px] font-bold text-on-surface-variant opacity-40">
                             {n.published?.slice(11, 16) || "RECENT"}
                           </span>
                        </div>
                        <a href={n.url} target="_blank" rel="noopener noreferrer" className="block">
                          <h4 className="text-[11px] font-body font-medium leading-relaxed group-hover:text-primary transition-colors line-clamp-3">
                            {n.title}
                          </h4>
                        </a>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
                
                {paginatedNews.length === 0 && (
                   <div className="h-full flex items-center justify-center text-[10px] uppercase font-bold opacity-20 tracking-widest text-center">
                      No matching intelligence streams
                   </div>
                )}
              </div>

              {/* Pagination Controls */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <button 
                  disabled={newsPage === 0}
                  onClick={() => setNewsPage(p => p - 1)}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-all disabled:opacity-20"
                >
                  <span className="material-symbols-outlined text-sm">chevron_left</span>
                </button>
                <div className="text-[9px] font-bold uppercase tracking-widest opacity-40">
                  {newsPage + 1} / {totalPages || 1}
                </div>
                <button 
                  disabled={newsPage >= totalPages - 1}
                  onClick={() => setNewsPage(p => p + 1)}
                  className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-all disabled:opacity-20"
                >
                  <span className="material-symbols-outlined text-sm">chevron_right</span>
                </button>
              </div>
           </div>
        </aside>
      </div>

      {/* Grid Canvas Helper */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(167, 139, 250, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(167, 139, 250, 0.3);
        }
      `}</style>
    </div>
  );
}
