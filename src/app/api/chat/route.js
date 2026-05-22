import { google } from "@ai-sdk/google";
import { convertToModelMessages, streamText } from "ai";
import { z } from "zod";
import { SYSTEM_PROMPT } from "@/lib/bot-knowledge";
import { simpleRateLimit } from "@/lib/rate-limit";

const chatSchema = z.object({
	messages: z.array(
		z
			.object({
				role: z.string(),
				content: z.string(),
			})
			.passthrough(),
	),
});

export async function POST(req) {
	// 1. Rate Limiting Sécurité
	const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
	const rateLimit = simpleRateLimit(ip);

	if (!rateLimit.success) {
		return new Response(
			JSON.stringify({ error: "Système Surchargé. Trop de requêtes." }),
			{
				status: 429,
				headers: {
					"Content-Type": "application/json",
					"X-RateLimit-Limit": rateLimit.limit.toString(),
					"X-RateLimit-Remaining": rateLimit.remaining.toString(),
				},
			},
		);
	}

	try {
		// 2. Lecture du Corps de la Requête
		const body = await req.json();
		const parseResult = chatSchema.safeParse(body);

		if (!parseResult.success) {
			return new Response(
				JSON.stringify({
					error: "Payload invalide.",
					details: parseResult.error,
				}),
				{
					status: 400,
					headers: { "Content-Type": "application/json" },
				},
			);
		}

		const { messages } = parseResult.data;

		// 3. Appel au LLM (Google Gemini) avec Streaming
		const result = streamText({
			model: google("gemini-2.5-flash"),
			messages: await convertToModelMessages(messages),
			system: SYSTEM_PROMPT,
			temperature: 0,
			// La navigation est désormais gérée par des marqueurs textuels [GOTO:/path]
			// définis dans le SYSTEM_PROMPT et interceptés côté client.
		});

		return result.toUIMessageStreamResponse();
	} catch (error) {
		console.error("Erreur API Chat:", error);
		return new Response(
			JSON.stringify({ error: "Erreur interne du serveur de communication." }),
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			},
		);
	}
}
