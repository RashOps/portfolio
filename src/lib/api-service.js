/**
 * API SERVICE - MarketPulse AI & Projects
 * Remplacez les URLs ci-dessous par vos liens de déploiement (Render, AWS, Railway, etc.)
 */

const MARKETPULSE_API_URL = ""; // EX: "https://marketpulse-api.onrender.com"

export const apiService = {
  /**
   * Récupère les segments de marché (Clusters PCA)
   * Endpoint: GET /market-segments
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
   */
  getMarketNews: async () => {
    if (!MARKETPULSE_API_URL) return null;
    try {
      const response = await fetch(`${MARKETPULSE_API_URL}/market-news`);
      if (!response.ok) throw new Error("Erreur réseau");
      return await response.json();
    } catch (error) {
      console.error("Erreur getMarketNews:", error);
      return null;
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
   * Déclenche le réentraînement du modèle
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
  }
};
