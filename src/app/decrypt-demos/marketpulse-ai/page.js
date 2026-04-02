"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { apiService } from "@/lib/api-service";

export default function MarketPulseDemo() {
  const [retraining, setRetraining] = useState(false);
  const [apiStatus, setApiStatus] = useState("checking...");
  const [segments, setSegments] = useState([]);
  const [news, setNews] = useState([]);
  const [metrics, setMetrics] = useState(null);

  // Fallback / Initial Mock Data
  const mockSegments = [
    { label: "Croissance Tech", color: "text-primary", assets: ["NVDA", "AAPL", "MSFT", "GOOGL"], risk: "Modéré", sentiment: "+12%" },
    { label: "Zone de Risque / Volatilité", color: "text-red-400", assets: ["TSLA", "COIN", "MSTR"], risk: "Élevé", sentiment: "-5%" },
    { label: "Secteur Défensif / Value", color: "text-secondary", assets: ["JNJ", "PG", "KO", "PEP"], risk: "Faible", sentiment: "+2%" },
    { label: "Énergie & Matières Premières", color: "text-tertiary", assets: ["XOM", "CVX", "COP"], risk: "Modéré", sentiment: "+8%" }
  ];

  const mockNews = [
    { time: "10:24", title: "S&P 500 : Nouveaux records portés par les valeurs technologiques", sentiment: "Positif", score: 0.85 },
    { time: "09:45", title: "Réserve Fédérale : Les taux pourraient rester stables plus longtemps", sentiment: "Neutre", score: 0.52 },
    { time: "08:12", title: "Secteur Bancaire : Inquiétudes sur l'immobilier commercial", sentiment: "Négatif", score: 0.21 },
    { time: "07:30", title: "NVIDIA : L'IA continue de doper les résultats trimestriels", sentiment: "Très Positif", score: 0.94 }
  ];

  useEffect(() => {
    async function loadData() {
      const realSegments = await apiService.getMarketSegments();
      const realNews = await apiService.getMarketNews();
      const realMetrics = await apiService.getModelMetrics();

      if (realSegments) {
        setSegments(realSegments);
        setApiStatus("online");
      } else {
        setSegments(mockSegments);
        setApiStatus("mock-mode");
      }

      if (realNews) setNews(realNews);
      else setNews(mockNews);

      if (realMetrics) setMetrics(realMetrics);
    }
    loadData();
  }, []);

  const triggerRetraining = async () => {
    setRetraining(true);
    const result = await apiService.triggerRetraining();
    // Simulation du temps de traitement si pas d'API
    if (!result) {
      setTimeout(() => setRetraining(false), 2500);
    } else {
      setRetraining(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 font-body">
      {/* Top Navigation / Status Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
        <div className="flex items-center gap-4">
          <Link href="/decrypt-demos" className="glass p-2 rounded-lg hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
          </Link>
          <div>
            <h1 className="font-headline text-2xl font-bold flex items-center gap-3">
              MarketPulse <span className="text-primary">Engine v0.2</span>
            </h1>
            <p className="text-xs text-on-surface-variant font-medium uppercase tracking-widest">Real-time Market Segmentation</p>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="glass px-4 py-2 rounded-xl flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${apiStatus === 'online' ? 'bg-green-400 animate-pulse' : 'bg-orange-400'}`}></div>
            <span className="text-xs font-bold uppercase tracking-tighter">Status: {apiStatus.toUpperCase()}</span>
          </div>
          <button 
            onClick={triggerRetraining}
            disabled={retraining}
            className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all flex items-center gap-2 ${retraining ? 'bg-white/5 text-white/20' : 'bg-primary text-white hover:shadow-lg hover:shadow-primary/20'}`}
          >
            <span className={`material-symbols-outlined text-sm ${retraining ? 'animate-spin' : ''}`}>sync</span>
            {retraining ? "Retraining Pipeline..." : "Retrain Model"}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Visualizations & Analysis */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Visualizer (PCA Cluster Simulation) */}
          <div className="glass rounded-3xl p-8 relative min-h-[500px] overflow-hidden">
            <div className="absolute top-8 left-8 z-10">
              <h2 className="font-headline text-xl font-bold mb-2">PCA Projection (2D)</h2>
              <p className="text-xs text-on-surface-variant max-w-xs">Visualisation de la variance des actifs financiers réduite sur 2 dimensions pour la détection de régimes de marché.</p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="grid grid-cols-10 grid-rows-10 w-full h-full border border-white/5">
                {[...Array(100)].map((_, i) => <div key={i} className="border-[0.5px] border-white/5"></div>)}
              </div>
            </div>

            {/* Simulated PCA Points */}
            <div className="relative w-full h-[350px] mt-16">
              {/* Cluster 1: Tech */}
              <div className="absolute top-[20%] left-[30%] w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-[25%] left-[35%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]"></div>
              
              {/* Cluster 2: Risk */}
              <div className="absolute bottom-[20%] right-[20%] w-40 h-40 bg-red-400/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-[25%] right-[25%] w-3 h-3 bg-red-400 rounded-full shadow-[0_0_15px_rgba(248,113,113,0.8)]"></div>
              
              {/* Cluster 3: Defensive */}
              <div className="absolute top-[60%] left-[15%] w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
              <div className="absolute top-[65%] left-[18%] w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_rgba(var(--secondary-rgb),0.8)]"></div>
            </div>

            <div className="mt-auto pt-8 flex flex-wrap gap-8 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Explained Variance</span>
                <span className="font-headline text-lg font-bold text-primary">{metrics?.variance || "82.4%"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Silhouette Score</span>
                <span className="font-headline text-lg font-bold text-secondary">{metrics?.silhouette || "0.68"}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest mb-1">Active Clusters (K)</span>
                <span className="font-headline text-lg font-bold text-tertiary">{metrics?.k || "4"}</span>
              </div>
            </div>
          </div>

          {/* Strategic Labels (Cluster Profiling) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {segments.map((segment, i) => (
              <div key={i} className="glass rounded-2xl p-6 border-l-4 border-white/10 hover:border-l-primary transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`font-headline font-bold ${segment.color || 'text-primary'}`}>{segment.label}</h3>
                  <span className="text-[10px] font-body text-on-surface-variant">Momentum {segment.sentiment}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {segment.assets?.map(asset => (
                    <span key={asset} className="px-2 py-0.5 glass rounded text-[10px] font-bold text-on-surface-variant">{asset}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-on-surface-variant font-body italic">Profil de risque</span>
                  <span className="font-bold">{segment.risk}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: News Feed & Scraper Monitoring */}
        <div className="lg:col-span-4 space-y-8">
          <div className="glass rounded-3xl p-6 flex flex-col h-full min-h-[600px]">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-headline text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">rss_feed</span>
                Live Intelligence Feed
              </h2>
              <span className="text-[10px] font-body text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase font-bold">Scraping Active</span>
            </div>

            <div className="space-y-6 flex-grow">
              {news.map((n, i) => (
                <div key={i} className="group relative pl-4 border-l border-white/10 hover:border-primary transition-all">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-body text-on-surface-variant">{n.time}</span>
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${n.score > 0.7 ? 'bg-green-400/10 text-green-400' : n.score < 0.4 ? 'bg-red-400/10 text-red-400' : 'bg-white/5 text-on-surface-variant'}`}>
                      {n.sentiment}
                    </span>
                  </div>
                  <h4 className="text-sm font-body leading-relaxed group-hover:text-primary transition-colors cursor-pointer">
                    {n.title}
                  </h4>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 glass rounded-2xl bg-white/5 text-center">
              <p className="text-[10px] font-body text-on-surface-variant mb-4">Connectez votre API pour voir les flux temps réel</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="text-[10px] font-body px-2 py-1 bg-black/40 rounded border border-white/5">Yahoo Finance</span>
                <span className="text-[10px] font-body px-2 py-1 bg-black/40 rounded border border-white/5">Investing.com</span>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6">
            <h3 className="font-headline text-sm font-bold mb-4">Architecture Detail</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                <div className="text-xs font-body text-on-surface-variant">Unsupervised Learning (K-Means) via Scikit-Learn Pipeline</div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                <div className="text-xs font-body text-on-surface-variant">Real-time Feature Engineering (GARCH & Technical Indicators)</div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                <div className="text-xs font-body text-on-surface-variant">Automated Model Versioning & Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center">
        <p className="text-xs font-body text-on-surface-variant/40 uppercase tracking-[0.3em]">
          Engine Developed by Rayhan Touboui | Powered by FastAPI & Scikit-Learn
        </p>
      </div>
    </div>
  );
}
