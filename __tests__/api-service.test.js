import { expect, test, describe, mock, afterEach } from "bun:test";
import { apiService } from "../src/lib/api-service";

describe("API Service - MarketPulse", () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test("getSystemStatus devrait retourner le status avec succès", async () => {
    const mockResponse = { status: "online", version: "1.0" };
    
    global.fetch = mock(() => Promise.resolve(new Response(JSON.stringify(mockResponse), { status: 200 })));

    const status = await apiService.getSystemStatus();
    expect(status).toEqual(mockResponse);
    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test("getSystemStatus devrait gérer les erreurs réseau", async () => {
    global.fetch = mock(() => Promise.resolve(new Response("Not Found", { status: 404 })));

    const status = await apiService.getSystemStatus();
    expect(status).toEqual({ status: "offline", message: "Moteur indisponible." });
  });
});
