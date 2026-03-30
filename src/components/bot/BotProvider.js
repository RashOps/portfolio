"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRouter } from "next/navigation";

const BotContext = createContext();

export function BotProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  // Initialisation du Vercel AI SDK (client-side) avec le nouveau système de transport v5+
  const chat = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
    // Interception des appels de fonction de l'IA côté client
    onToolCall: async ({ toolCall }) => {
      if (toolCall.toolName === "navigateTo") {
        const { path, reason } = toolCall.args;
        console.log(`[N.E.X.U.S CMD] Redirection vers ${path}. Raison: ${reason}`);
        
        // Simuler un léger temps de traitement "Système" pour l'immersion
        setTimeout(() => {
          router.push(path);
          // Optionnel: fermer la console après navigation, ou la laisser ouverte
          // setIsOpen(false); 
        }, 1200);

        // Renvoyer le succès au modèle (pour qu'il termine sa réponse)
        return "Command executed successfully.";
      }
    },
  });

  const toggleConsole = () => setIsOpen((prev) => !prev);
  const closeConsole = () => setIsOpen(false);

  return (
    <BotContext.Provider value={{ isOpen, toggleConsole, closeConsole, chat }}>
      {children}
    </BotContext.Provider>
  );
}

// Hook personnalisé pour accéder à l'état du bot depuis n'importe où
export const useBot = () => {
  const context = useContext(BotContext);
  if (!context) {
    throw new Error("useBot doit être utilisé à l'intérieur d'un BotProvider");
  }
  return context;
};
