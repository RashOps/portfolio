"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useRouter } from "next/navigation";

const BotContext = createContext();

export function BotProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const chat = useChat({
    api: "/api/chat",
  });

  // Pour éviter de déclencher la même navigation plusieurs fois pour le même message
  const processedRef = useRef(new Set());

  // Surveillance des messages pour déclencher la navigation via marqueurs [GOTO:/path]
  useEffect(() => {
    const lastMessage = chat.messages[chat.messages.length - 1];
    if (!lastMessage || lastMessage.role !== "assistant") return;

    const content = lastMessage.content || "";
    // Log de debug pour voir ce que Atlas envoie réellement au client
    if (content) console.log(`[Atlas DEBUG] Message reçu :`, content);
    
    const gotoMatch = content.match(/\[GOTO:(.+?)\]/);

    if (gotoMatch) {
      const path = gotoMatch[1].trim();
      const messageId = lastMessage.id;

      if (!processedRef.current.has(messageId)) {
        console.log(`[Atlas CLIENT] Marqueur déctecté : Navigation vers ${path}`);
        processedRef.current.add(messageId);
        
        // Navigation instantanée
        router.push(path);
      }
    }
  }, [chat.messages, router]);

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
