import { expect, test, describe, beforeEach } from "bun:test";
import { simpleRateLimit } from "../src/lib/rate-limit";

describe("Rate Limiter", () => {
  const mockIP = "192.168.1.1";

  // Note: Comme on teste un module avec un état interne global (rateLimitMap),
  // l'idéal serait d'exporter la map pour la reset, mais on peut simuler avec un IP différent ou juste tester la logique de base.
  
  test("Devrait autoriser la première requête", () => {
    const result = simpleRateLimit("ip_1");
    expect(result.success).toBe(true);
    expect(result.remaining).toBe(14);
  });

  test("Devrait bloquer après 15 requêtes", () => {
    const testIP = "ip_block_test";
    
    // Consommer 15 requêtes
    for (let i = 0; i < 15; i++) {
      const res = simpleRateLimit(testIP);
      expect(res.success).toBe(true);
    }
    
    // La 16ème doit échouer
    const result = simpleRateLimit(testIP);
    expect(result.success).toBe(false);
    expect(result.remaining).toBe(0);
  });
});
