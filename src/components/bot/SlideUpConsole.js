"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBot } from "./BotProvider";
import { BOT_NAME } from "@/lib/bot-knowledge";

export default function SlideUpConsole() {
  const { isOpen, closeConsole, chat } = useBot();
  const { messages, isLoading, append, sendMessage } = chat;
  const messagesEndRef = useRef(null);
  
  // Gestion d'état locale pour l'input form au cas où ai-sdk l'omet
  const [localInput, setLocalInput] = useState("");

  const handleInputChange = (e) => setLocalInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localInput || !localInput.trim()) return;
    
    // Fallback pour ai-sdk v5/v6: sendMessage prend { text: string }
    if (sendMessage) {
      sendMessage({ text: localInput });
    } else if (append) {
      append({ role: "user", content: localInput });
    } else {
      console.error("No valid message sending method found in chat object.");
    }
    setLocalInput("");
  };

  // Auto-scroll vers le bas lors d'un nouveau message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay flouté (cliquable pour fermer) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeConsole}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden" // Caché sur desktop si on veut, mais affiché par défaut pour l'overlay
          />

          {/* La Console en elle-même */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:left-[256px] lg:bottom-6 lg:right-6 lg:w-auto lg:rounded-t-lg border-t lg:border border-[#cafd00]/30 bg-[#0e0e0e] shadow-[0_-10px_40px_rgba(202,253,0,0.1)] scanline-bg flex flex-col h-[60vh] lg:h-[500px] lg:max-w-2xl ml-auto"
          >
            {/* Header de la console */}
            <div className="flex items-center justify-between p-3 border-b border-[#cafd00]/20 bg-[#151515]">
              <div className="flex items-center gap-2 text-[#cafd00]">
                <span className="material-symbols-outlined text-sm">terminal</span>
                <span className="font-['Space_Grotesk'] text-xs uppercase tracking-widest font-bold">
                  {BOT_NAME} // SYSTEM_LINK
                </span>
                {isLoading && (
                   <span className="w-2 h-2 rounded-full bg-[#cafd00] animate-pulse ml-2"></span>
                )}
              </div>
              <button
                onClick={closeConsole}
                className="text-gray-400 hover:text-[#cafd00] transition-colors p-1"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Zone des messages */}
            <div className="flex-1 overflow-y-auto p-4 font-mono text-sm space-y-4">
              {messages.length === 0 && (
                <div className="text-gray-500 text-xs italic opacity-70">
                  <p>&gt; {BOT_NAME} initialisé. Tapez '/' ou demandez-moi votre chemin.</p>
                  <p>&gt; En attente d'une directive d'opérateur...</p>
                </div>
              )}

              {messages.map((m) => {
                const isBot = m.role === "assistant" || m.role === "system";
                
                // Si c'est un appel d'outil (navigation cachée ou système) Vercel AI v5+
                let toolElements = null;
                if (m.parts) {
                  const toolParts = m.parts.filter(p => p.type === 'tool-invocation');
                  if (toolParts.length > 0) {
                    toolElements = toolParts.map((part) => (
                      <div key={part.toolInvocation.toolCallId} className="text-[#cafd00]/70 text-xs italic mb-2">
                        &gt; Exécution d'une routine système : {part.toolInvocation.toolName}...
                      </div>
                    ));
                  }
                }

                // Récupération sécurisée du texte Vercel v5/v6
                const rawText = m.content || (m.parts ? m.parts.filter(p => p.type === 'text').map(p => p.text).join('') : "");

                return (
                  <div key={m.id} className="w-full">
                    {toolElements}
                    {rawText && (
                      <div className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}>
                        <span className="text-[10px] text-gray-500 mb-1 font-['Space_Grotesk'] uppercase tracking-wider">
                          {isBot ? BOT_NAME : "OPERATOR_LOCAL"}
                        </span>
                        <div
                          className={`max-w-[85%] p-3 rounded-none whitespace-pre-wrap ${
                            isBot
                              ? "bg-[#1a1a1a] text-[#cafd00] border-l-2 border-[#cafd00]"
                              : "bg-[#252525] text-gray-300 border-r-2 border-gray-500"
                          }`}
                        >
                          {rawText}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Zone de saisie (Prompt) */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-[#cafd00]/20 bg-[#101010]">
              <div className="flex items-center font-mono">
                <span className="text-[#cafd00] mr-2 text-sm font-bold">operator@kinetic:~$</span>
                <input
                  type="text"
                  value={localInput}
                  onChange={handleInputChange}
                  placeholder="Posez votre question..."
                  className="flex-1 bg-transparent border-none outline-none text-gray-200 placeholder-gray-600 focus:ring-0 text-sm"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={isLoading || !localInput || !localInput.trim()}
                  className="text-[#cafd00] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#cafd00]/10 p-2 transition-all rounded"
                >
                  <span className="material-symbols-outlined text-sm">send</span>
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
