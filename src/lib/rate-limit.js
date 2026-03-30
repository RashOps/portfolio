// src/lib/rate-limit.js
// Rate Limiter en-mémoire très basique pour protéger l'API Gemini.
// NOTE: Vercel serverless functions sont éphémères, donc la mémoire sera réinitialisée à chaque "cold start".
// Pour la production massive, il est recommandé de passer sur Upstash Redis plus tard.

const rateLimitMap = new Map();

/**
 * Interface de Rate Limiting modulaire.
 * @param {string} ip - L'adresse IP de l'utilisateur (ou identifiant unique)
 * @returns {object} - Résultat: { success: boolean, limit: number, remaining: number, reset: Date }
 */
export function simpleRateLimit(ip) {
  const limit = 15; // 15 messages max
  const windowMs = 60 * 1000; // Par minute (60,000 millisecondes)
  const now = Date.now();

  const record = rateLimitMap.get(ip) || { count: 0, resetTime: now + windowMs };

  // Si le temps de la fenêtre est dépassé, on réinitialise pour ce IP
  if (now > record.resetTime) {
    record.count = 0;
    record.resetTime = now + windowMs;
  }

  // Si l'utilisateur a atteint sa limite
  if (record.count >= limit) {
    return {
      success: false,
      limit,
      remaining: 0,
      reset: new Date(record.resetTime),
    };
  }

  // Incrémenter le compteur
  record.count += 1;
  rateLimitMap.set(ip, record);

  return {
    success: true,
    limit,
    remaining: limit - record.count,
    reset: new Date(record.resetTime),
  };
}
