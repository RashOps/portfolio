import { streamText, tool, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';
import { simpleRateLimit } from '@/lib/rate-limit';
import { SYSTEM_PROMPT } from '@/lib/bot-knowledge';

export async function POST(req) {
  // 1. Rate Limiting Sécurité
  // On récupère l'IP du header (Vercel/Cloudflare) ou on fallback pour le dév local
  const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
  const rateLimit = simpleRateLimit(ip);

  if (!rateLimit.success) {
    return new Response(JSON.stringify({ error: 'Système Surchargé. Trop de requêtes.' }), {
      status: 429,
      headers: {
        'Content-Type': 'application/json',
        'X-RateLimit-Limit': rateLimit.limit.toString(),
        'X-RateLimit-Remaining': rateLimit.remaining.toString(),
      }
    });
  }

  try {
    // 2. Lecture du Corps de la Requête
    const { messages } = await req.json();

    // 3. Appel au LLM (Google Gemini) avec Streaming
    // IMPORTANT: Assurez-vous d'avoir GOOGLE_GENERATIVE_AI_API_KEY dans votre fichier .env.local
    const result = streamText({
      model: google('gemini-2.5-flash'),
      messages: await convertToModelMessages(messages),
      system: SYSTEM_PROMPT,
      // On donne à l'intelligence artificielle la "capacité" de déclencher une fonction
      tools: {
        navigateTo: tool({
          description: "Naviguer l'utilisateur de force vers une autre page du portfolio (Skill Tree, Mission Log, Demos, etc).",
          parameters: z.object({
            path: z.string().describe("Le chemin relatif obligatoire (ex: '/mission-log', '/skill-tree', '/decrypt-demos')"),
            reason: z.string().describe("Une phrase courte, style robotique/système, pour expliquer l'action (ex: 'Transfert vers la base de données des missions...')")
          }),
          // L'exécution côté serveur ne fait rien de particulier ici, elle renvoie les paramètres au front-end 
          // qui se chargera d'exécuter l'action via next/router.
        }),
      },
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Erreur API Chat:", error);
    return new Response(JSON.stringify({ error: "Erreur interne du serveur de communication." }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
