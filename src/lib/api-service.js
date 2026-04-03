/**
 * API SERVICE - MarketPulse AI & Projects
 * Interfacage avec le backend FastAPI (MarketPulse Engine)
 */

const MARKETPULSE_API_URL = "https://marketpulse-ia-production.up.railway.app";

export const apiService = {
  /**
   * Vérifie la santé du système
   * Endpoint: GET /status
   */
  getSystemStatus: async () => {
    if (!MARKETPULSE_API_URL) return null;
    try {
      const response = await fetch(`${MARKETPULSE_API_URL}/status`);
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
      const response = await fetch(`${MARKETPULSE_API_URL}/market-segments`);
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
      
      const response = await fetch(url);
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
      const response = await fetch(`${MARKETPULSE_API_URL}/monitoring/latest-metrics`);
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
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
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
      const response = await fetch(`${MARKETPULSE_API_URL}/data/inventory`);
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
      const response = await fetch(`${MARKETPULSE_API_URL}/monitoring/history`);
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
      const response = await fetch(`${MARKETPULSE_API_URL}/config`);
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
      const response = await fetch(`${MARKETPULSE_API_URL}/scrape-tickers?limit=${limit}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
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
      const response = await fetch(`${MARKETPULSE_API_URL}/scrape-news?limit_per_source=${limit}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      return await response.json();
    } catch (error) {
      console.error("Erreur triggerNewsScraping:", error);
      return null;
    }
  }
};


