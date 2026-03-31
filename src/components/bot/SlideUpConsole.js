"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useBot } from "./BotProvider";
import { BOT_NAME } from "@/lib/bot-knowledge";

export default function SlideUpConsole() {
  const { isOpen, closeConsole, chat } = useBot();
  const { messages, isLoading, append, sendMessage } = chat;
  const messagesEndRef = useRef(null);
  
  const [localInput, setLocalInput] = useState("");

  const handleInputChange = (e) => setLocalInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localInput || !localInput.trim()) return;
    
    if (sendMessage) {
      sendMessage({ text: localInput });
    } else if (append) {
      append({ role: "user", content: localInput });
    } else {
      console.error("No valid message sending method found in chat object.");
    }
    setLocalInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeConsole}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Console */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:left-[256px] lg:bottom-6 lg:right-6 lg:w-auto lg:rounded-2xl glass border-t lg:border border-white/10 shadow-2xl shadow-primary/5 flex flex-col h-[60vh] lg:h-[500px] lg:max-w-2xl ml-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm">smart_toy</span>
                </div>
                <div>
                  <span className="font-headline text-sm font-bold text-on-surface">
                    {BOT_NAME}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {isLoading ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    ) : (
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                    )}
                    <span className="text-[10px] text-on-surface-variant font-body">
                      {isLoading ? "Réflexion..." : "En ligne"}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeConsole}
                className="text-on-surface-variant hover:text-on-surface transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-on-surface-variant text-sm font-body space-y-2 p-4 glass rounded-xl">
                  <p className="font-medium text-on-surface">👋 Bonjour !</p>
                  <p>Je suis <span className="text-primary font-medium">{BOT_NAME}</span>, l'assistant IA de Rayhan. Posez-moi une question sur son profil, ses compétences ou ses projets.</p>
                </div>
              )}

              {messages.map((m) => {
                const isBot = m.role === "assistant" || m.role === "system";
                
                let toolElements = null;
                if (m.parts) {
                  const toolParts = m.parts.filter(p => p.type === 'tool-invocation');
                  if (toolParts.length > 0) {
                    toolElements = toolParts.map((part) => (
                      <div key={part.toolInvocation.toolCallId} className="text-primary/70 text-xs font-body mb-2 flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        Navigation en cours...
                      </div>
                    ));
                  }
                }

                const rawText = m.content || (m.parts ? m.parts.filter(p => p.type === 'text').map(p => p.text).join('') : "");

                return (
                  <div key={m.id} className="w-full">
                    {toolElements}
                    {rawText && (
                      <div className={`flex flex-col ${isBot ? "items-start" : "items-end"}`}>
                        <span className="text-[10px] text-on-surface-variant mb-1 font-body">
                          {isBot ? BOT_NAME : "Vous"}
                        </span>
                        <div
                          className={`max-w-[85%] p-3 rounded-xl whitespace-pre-wrap text-sm font-body ${
                            isBot
                              ? "glass text-on-surface"
                              : "bg-gradient-to-r from-primary to-tertiary text-white"
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

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
              <div className="flex items-center glass rounded-xl px-4 py-2">
                <input
                  type="text"
                  value={localInput}
                  onChange={handleInputChange}
                  placeholder="Posez une question sur Rayhan..."
                  className="flex-1 bg-transparent border-none outline-none text-on-surface placeholder-on-surface-variant/50 focus:ring-0 text-sm font-body"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={isLoading || !localInput || !localInput.trim()}
                  className="text-primary disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/5 p-2 transition-all rounded-lg"
                >
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </div>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
