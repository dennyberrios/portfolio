"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "ia";
  content: string;
}

export default function FloatingAiButton() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage: Message = { role: "user", content: input };
    setHistory((prev) => [...prev, newUserMessage]);
    setInput("");
    setTyping(true);
    setLoading(true);

    setTimeout(() => {
      const iaResponse: Message = {
        role: "ia",
        content: "✨ IA diz: “Funcionalidade em breve será realidade!”",
      };
      setHistory((prev) => [...prev, iaResponse]);
      setTyping(false);
      setLoading(false);

      if (!open) setHasNewMessage(true);
    }, 1500);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [history, typing]);

  const handleOpen = () => {
    setOpen(true);
    setHasNewMessage(false);
  };

  return (
    <>
      {/* Botão flutuante */}
      {!open && (
        <button
          onClick={handleOpen}
          className="fixed bottom-4 right-4 z-50 flex items-center justify-center bg-[#341F97] hover:bg-[#4A30B2] text-white p-4 rounded-full transition-all duration-300 shadow-lg"
          aria-label="IA Mágica"
        >
          <Sparkles className="w-6 h-6 text-[#FF2DFE]" />
          {hasNewMessage && (
            <span className="absolute top-1 right-1 w-3 h-3 bg-pink-500 rounded-full animate-ping" />
          )}
        </button>
      )}

      {/* Chat flutuante */}
      {open && (
        <div className="fixed bottom-4 right-4 z-50 w-[320px] bg-[#1A083D] border border-[#341F97] rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#341F97] bg-[#0F103F]">
            <h2 className="text-[#A55EEA] font-semibold">
              Assistente IA Mágica
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-[#A55EEA] hover:text-red-500 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Corpo do chat */}
          <div className="px-4 py-3 max-h-[500px]">
            {/* Histórico */}
            <div
              ref={chatRef}
              className="flex flex-col justify-end -gap-0 h-64 overflow-y-auto pr-1 border border-[#341F97] rounded-md p-3 bg-[#0F103F]"
            >
              {history.map((msg, index) => {
                const isLastUserMessage =
                  history[index - 1]?.role === "user" && msg.role === "ia";
                return (
                  <div
                    key={index}
                    className={`p-3 rounded-md text-xs ${
                      isLastUserMessage ? "" : ""
                    } ${
                      msg.role === "user"
                        ? "bg-[#2D0B63] self-end text-right"
                        : "bg-[#130F40] self-start text-left text-green-300"
                    }`}
                  >
                    {msg.content}
                  </div>
                );
              })}
              {typing && (
                <div className="animate-pulse text-green-300 text-xs self-start bg-[#130F40] rounded-md p-2 w-fit">
                  IA está digitando...
                </div>
              )}
            </div>

            {/* Campo de texto */}
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Fale com a IA..."
              className="bg-[#0F103F] text-white border border-[#341F97] placeholder:text-[#A55EEA] mt-4 resize-none"
            />

            {/* Botão de enviar */}
            <Button
              onClick={handleSend}
              disabled={loading}
              className="bg-[#341F97] hover:bg-[#4A30B2] mt-2 text-white w-full"
            >
              {loading ? "Gerando..." : "Enviar"}
            </Button>

            <p className="text-sm text-[#A55EEA] mt-2 italic">
              ⚠️ IA de demonstração visual. Integração real em breve.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
