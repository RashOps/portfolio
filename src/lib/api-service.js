/**
 * API SERVICE - MarketPulse AI & Projects
 * Interfacage avec le backend FastAPI (MarketPulse Engine)
 */

const MARKETPULSE_API_URL = process.env.NEXT_PUBLIC_MARKETPULSE_API_URL || "https://rashops-marketpulse-ai.hf.space";

export const apiService = {
	/**
	 * Vérifie la santé du système
	 * Endpoint: GET /status
	 */
	getSystemStatus: async () => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(`${MARKETPULSE_API_URL}/status`, {
				cache: "no-store",
			});
			if (!response.ok) throw new Error("Erreur réseau");
			return await response.json();
		} catch (error) {
			console.error("Erreur getSystemStatus:", error);
			return { status: "offline", message: "Moteur indisponible." };
		}
	},

	/**
	 * Récupère les segments de marché (Clusters PCA)
	 * Endpoint: GET /market-segments
	 * Retourne: { metadata, data, profiles }
	 */
	getMarketSegments: async () => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(`${MARKETPULSE_API_URL}/market-segments`, {
				next: { revalidate: 3600 },
			});
			if (!response.ok) throw new Error("Erreur réseau");
			return await response.json();
		} catch (error) {
			console.error("Erreur getMarketSegments:", error);
			return null;
		}
	},

	/**
	 * Récupère les dernières news financières
	 * Endpoint: GET /market-news
	 * @param {number} limit - Nombre d'articles
	 * @param {string} source - Filtre source (Yahoo Finance, Investing.com)
	 */
	getMarketNews: async (limit = 15, source = null) => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			let url = `${MARKETPULSE_API_URL}/market-news?limit=${limit}`;
			if (source) url += `&source=${encodeURIComponent(source)}`;

			const response = await fetch(url, { next: { revalidate: 3600 } });
			if (!response.ok) throw new Error("Erreur réseau");
			const result = await response.json();
			return result.data || [];
		} catch (error) {
			console.error("Erreur getMarketNews:", error);
			return [];
		}
	},

	/**
	 * Récupère les métriques de monitoring du modèle
	 * Endpoint: GET /monitoring/latest-metrics
	 */
	getModelMetrics: async () => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(
				`${MARKETPULSE_API_URL}/monitoring/latest-metrics`,
				{ cache: "no-store" },
			);
			if (!response.ok) throw new Error("Erreur réseau");
			return await response.json();
		} catch (error) {
			console.error("Erreur getModelMetrics:", error);
			return null;
		}
	},

	/**
	 * Déclenche le réentraînement du modèle (ASYNCHRONE)
	 * Endpoint: POST /trigger-update
	 */
	triggerRetraining: async () => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(`${MARKETPULSE_API_URL}/trigger-update`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			return await response.json();
		} catch (error) {
			console.error("Erreur triggerRetraining:", error);
			return null;
		}
	},

	/**
	 * Récupère l'inventaire des données en base
	 * Endpoint: GET /data/inventory
	 */
	getInventory: async () => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(`${MARKETPULSE_API_URL}/data/inventory`, {
				next: { revalidate: 86400 },
			});
			if (!response.ok) throw new Error("Erreur réseau");
			return await response.json();
		} catch (error) {
			console.error("Erreur getInventory:", error);
			return null;
		}
	},

	/**
	 * Récupère l'historique des entraînements
	 * Endpoint: GET /monitoring/history
	 */
	getModelHistory: async () => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(
				`${MARKETPULSE_API_URL}/monitoring/history`,
				{ next: { revalidate: 86400 } },
			);
			if (!response.ok) throw new Error("Erreur réseau");
			return await response.json();
		} catch (error) {
			console.error("Erreur getModelHistory:", error);
			return null;
		}
	},

	/**
	 * Récupère la configuration du moteur
	 * Endpoint: GET /config
	 */
	getSystemConfig: async () => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(`${MARKETPULSE_API_URL}/config`, {
				cache: "force-cache",
			});
			if (!response.ok) throw new Error("Erreur réseau");
			return await response.json();
		} catch (error) {
			console.error("Erreur getSystemConfig:", error);
			return null;
		}
	},

	/**
	 * Déclenche le scraper de TICKETS (yFinance)
	 * Endpoint: POST /scrape-tickers
	 */
	triggerTickerScraping: async (limit = 30) => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(
				`${MARKETPULSE_API_URL}/scrape-tickers?limit=${limit}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
				},
			);
			return await response.json();
		} catch (error) {
			console.error("Erreur triggerTickerScraping:", error);
			return null;
		}
	},

	/**
	 * Déclenche le scraper de NEWS (Yahoo / Investing)
	 * Endpoint: POST /scrape-news
	 */
	triggerNewsScraping: async (limit = 15) => {
		if (!MARKETPULSE_API_URL) return null;
		try {
			const response = await fetch(
				`${MARKETPULSE_API_URL}/scrape-news?limit_per_source=${limit}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
				},
			);
			return await response.json();
		} catch (error) {
			console.error("Erreur triggerNewsScraping:", error);
			return null;
		}
	},
};

/**
 * API SERVICE - FinSight RAG
 * Interfacage avec le moteur RAG déployé sur Hugging Face
 */
const FINSIGHT_API_URL = process.env.NEXT_PUBLIC_FINSIGHT_API_URL || "https://rashops-finsight-rag.hf.space";

export const finSightApiService = {
	/**
	 * Effectue une requête sémantique RAG
	 * Endpoint: POST /query
	 */
	queryRAG: async (query, sources = ["scraping"], history = [], maxResults = 5) => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(`${FINSIGHT_API_URL}/query`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ query, sources, history, max_results: maxResults }),
			});
			if (!response.ok) throw new Error("Erreur réseau FinSight RAG");
			return await response.json();
		} catch (error) {
			console.error("Erreur queryRAG:", error);
			return null;
		}
	},

	/**
	 * Récupère l'inventaire des articles paginé
	 * Endpoint: GET /articles
	 */
	getArticles: async (skip = 0, limit = 10, source = null, status = "all") => {
		if (!FINSIGHT_API_URL) return null;
		try {
			let url = `${FINSIGHT_API_URL}/articles?skip=${skip}&limit=${limit}&status=${encodeURIComponent(status)}`;
			if (source) url += `&source=${encodeURIComponent(source)}`;

			const response = await fetch(url, { next: { revalidate: 3600 } });
			if (!response.ok) throw new Error("Erreur réseau FinSight RAG");
			return await response.json();
		} catch (error) {
			console.error("Erreur getArticles:", error);
			return null;
		}
	},

	/**
	 * Vérifie la santé générale du moteur
	 * Endpoint: GET /health
	 */
	getHealth: async () => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(`${FINSIGHT_API_URL}/health`, {
				cache: "no-store",
			});
			if (!response.ok) throw new Error("Erreur réseau FinSight RAG");
			return await response.json();
		} catch (error) {
			console.error("Erreur getHealth:", error);
			return { status: "offline" };
		}
	},

	/**
	 * Récupère les statistiques détaillées (Status)
	 * Endpoint: GET /status
	 */
	getStatus: async () => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(`${FINSIGHT_API_URL}/status`, {
				cache: "no-store",
			});
			if (!response.ok) throw new Error("Erreur réseau FinSight RAG");
			return await response.json();
		} catch (error) {
			console.error("Erreur getStatus:", error);
			return null;
		}
	},

	/**
	 * Récupère l'état de la base MongoDB
	 * Endpoint: GET /db/status
	 */
	getDbStatus: async () => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(`${FINSIGHT_API_URL}/db/status`, {
				cache: "no-store",
			});
			if (!response.ok) throw new Error("Erreur réseau FinSight RAG");
			return await response.json();
		} catch (error) {
			console.error("Erreur getDbStatus:", error);
			return null;
		}
	},

	/**
	 * Récupère les métriques des articles (vectorisés vs bruts)
	 * Endpoint: GET /articles/status
	 */
	getArticlesStatus: async () => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(`${FINSIGHT_API_URL}/articles/status`, {
				cache: "no-store",
			});
			if (!response.ok) throw new Error("Erreur réseau FinSight RAG");
			return await response.json();
		} catch (error) {
			console.error("Erreur getArticlesStatus:", error);
			return null;
		}
	},

	/**
	 * Déclenche le pipeline d'ingestion (Scraping RSS)
	 * Endpoint: POST /fetch-articles
	 */
	triggerScraping: async (limit = 3) => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(
				`${FINSIGHT_API_URL}/fetch-articles?limit=${limit}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
				},
			);
			if (!response.ok) throw new Error("Erreur déclenchement Scraping");
			return await response.json();
		} catch (error) {
			console.error("Erreur triggerScraping:", error);
			return null;
		}
	},

	/**
	 * Déclenche le pipeline de vectorisation asynchrone (Cohere -> Qdrant)
	 * Endpoint: POST /run-vectorizer
	 */
	triggerVectorization: async (limit = 10) => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(
				`${FINSIGHT_API_URL}/run-vectorizer?limit=${limit}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
				},
			);
			if (!response.ok) throw new Error("Erreur déclenchement Vectorisation");
			return await response.json();
		} catch (error) {
			console.error("Erreur triggerVectorization:", error);
			return null;
		}
	},

	/**
	 * Récupère les Live Providers et leur statut
	 * Endpoint: GET /providers
	 */
	getProviders: async () => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(`${FINSIGHT_API_URL}/providers`, {
				cache: "no-store",
			});
			if (!response.ok)
				throw new Error("Erreur réseau FinSight RAG (providers)");
			return await response.json();
		} catch (error) {
			console.error("Erreur getProviders:", error);
			return null;
		}
	},

	/**
	 * Active ou désactive un Live Provider
	 * Endpoint: POST /providers/{name}/{enable|disable}
	 */
	toggleProvider: async (name, enable) => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const action = enable ? "enable" : "disable";
			const response = await fetch(
				`${FINSIGHT_API_URL}/providers/${name}/${action}`,
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
				},
			);
			if (!response.ok) throw new Error(`Erreur ${action} Provider`);
			return await response.json();
		} catch (error) {
			console.error("Erreur toggleProvider:", error);
			return null;
		}
	},

	/**
	 * Récupère les sources de recherche actives
	 * Endpoint: GET /search-sources
	 */
	getSearchSources: async () => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(`${FINSIGHT_API_URL}/search-sources`, {
				cache: "no-store",
			});
			if (!response.ok)
				throw new Error("Erreur réseau FinSight RAG (search-sources)");
			return await response.json();
		} catch (error) {
			console.error("Erreur getSearchSources:", error);
			return null;
		}
	},

	/**
	 * Met à jour les sources de recherche actives
	 * Endpoint: POST /search-sources
	 */
	updateSearchSources: async (sources) => {
		if (!FINSIGHT_API_URL) return null;
		try {
			const response = await fetch(`${FINSIGHT_API_URL}/search-sources`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ sources }),
			});
			if (!response.ok) throw new Error("Erreur updateSearchSources");
			return await response.json();
		} catch (error) {
			console.error("Erreur updateSearchSources:", error);
			return null;
		}
	},
};
