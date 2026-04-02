import { streamText, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';
import { simpleRateLimit } from '@/lib/rate-limit';
import { SYSTEM_PROMPT } from '@/lib/bot-knowledge';

export async function POST(req) {
  // 1. Rate Limiting Sécurité
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
    const result = streamText({
      model: google('gemini-2.5-flash'), 
      messages: await convertToModelMessages(messages),
      system: SYSTEM_PROMPT,
      temperature: 0,
      // La navigation est désormais gérée par des marqueurs textuels [GOTO:/path]
      // définis dans le SYSTEM_PROMPT et interceptés côté client.
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
