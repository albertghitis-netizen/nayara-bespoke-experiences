/**
 * Nayara Resorts — Website Concierge Chat Widget
 * A luxury-styled floating chat that represents the Nayara brand directly.
 * Warm, professional, knowledgeable — not a character, not "Starry."
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_PROMPTS = [
  "Which property is right for me?",
  "Tell me about your dining experiences",
  "What excursions do you recommend?",
  "I'm interested in booking a stay",
];

/* ── Nayara leaf/compass icon ── */
function NayaraIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.2}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" strokeWidth={0.6} opacity={0.3} />
      <path d="M12 6l2 4-2 2-2-2z" fill="currentColor" stroke="none" opacity={0.8} />
      <path d="M12 18l-2-4 2-2 2 2z" fill="currentColor" stroke="none" opacity={0.4} />
      <path d="M6 12l4-2 2 2-2 2z" fill="currentColor" stroke="none" opacity={0.5} />
      <path d="M18 12l-4 2-2-2 2-2z" fill="currentColor" stroke="none" opacity={0.6} />
    </svg>
  );
}

export default function ConciergeChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const chatMutation = trpc.concierge.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize — I'm having a moment. Could you try that again? Or feel free to reach us directly at reservations@nayararesorts.com or call 1-844-865-2002.",
        },
      ]);
    },
  });

  /* Auto-scroll to bottom on new messages */
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, chatMutation.isPending]);

  /* Focus input when opened */
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const sendMessage = (content: string) => {
    if (!content.trim() || chatMutation.isPending) return;

    const userMsg: Message = { role: "user", content: content.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setShowWelcome(false);

    chatMutation.mutate({
      messages: newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* ── Floating Chat Button ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-[#3a2a1a] shadow-xl px-6 py-4 hover:bg-[#4a3a2a] transition-colors group cursor-pointer"
            aria-label="Open concierge"
          >
            <NayaraIcon className="w-7 h-7 text-[#c9b99a] group-hover:text-white transition-colors shrink-0" />
            <span
              className="text-white text-sm tracking-[0.12em] uppercase whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Chat with us
            </span>

            {/* Pulse indicator for new visitors */}
            {messages.length === 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#c9b99a] rounded-full animate-pulse" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[1200px] h-[85vh] max-h-[calc(100vh-100px)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              background: "#f7f5f0",
              border: "1px solid rgba(58, 42, 26, 0.12)",
            }}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-5 py-4 shrink-0 bg-[#3a2a1a]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c9b99a]/20 flex items-center justify-center">
                  <NayaraIcon className="w-5 h-5 text-[#c9b99a]" />
                </div>
                <div>
                  <h3
                    className="text-white text-sm tracking-[0.08em]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Nayara Concierge
                  </h3>
                  <p
                    className="text-[#c9b99a] text-[10px] tracking-[0.12em] uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {chatMutation.isPending ? "Typing..." : "How can we help?"}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-white/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>

            {/* ── Messages ── */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {/* Welcome state */}
              {showWelcome && messages.length === 0 && (
                <div className="flex flex-col items-center text-center pt-4 pb-4">
                  <div className="w-16 h-16 rounded-full bg-[#3a2a1a]/5 flex items-center justify-center mb-4">
                    <NayaraIcon className="w-8 h-8 text-[#3a2a1a]/25" />
                  </div>
                  <h4
                    className="text-[#3a2a1a] text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Welcome to Nayara
                  </h4>
                  <p
                    className="text-[#5a4a3a]/60 text-xs leading-relaxed mb-6 max-w-[500px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    I'm your personal concierge for all six Nayara properties — from the Atacama Desert to the Costa Rican rainforest, Easter Island to the Caribbean. Ask me anything about our resorts, dining, experiences, or destinations.
                  </p>

                  {/* Suggested prompts */}
                  <div className="flex flex-col gap-2 w-full">
                    {SUGGESTED_PROMPTS.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => sendMessage(prompt)}
                        className="text-left px-4 py-2.5 rounded-xl text-xs border border-[#3a2a1a]/10 hover:border-[#3a2a1a]/25 hover:bg-[#3a2a1a]/[0.03] transition-all"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: "#3a2a1a",
                        }}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message bubbles */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                      msg.role === "user"
                        ? "bg-[#3a2a1a] text-white rounded-br-md"
                        : "bg-white text-[#3a2a1a] rounded-bl-md shadow-sm border border-[#3a2a1a]/5"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      <div
                        className="text-[13px] leading-relaxed [&_p]:mb-2 [&_p:last-child]:mb-0 [&_a]:text-[#8b6f47] [&_a]:underline [&_ul]:ml-4 [&_ul]:list-disc [&_ol]:ml-4 [&_ol]:list-decimal [&_strong]:font-semibold"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <Streamdown>{msg.content}</Streamdown>
                      </div>
                    ) : (
                      <p
                        className="text-[13px] leading-relaxed whitespace-pre-wrap"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {msg.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {chatMutation.isPending && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-[#3a2a1a]/5">
                    <div className="flex gap-1.5 items-center h-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3a2a1a]/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3a2a1a]/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3a2a1a]/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Input ── */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-[#3a2a1a]/8 bg-white/50 shrink-0"
            >
              <div className="flex items-end gap-2">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about our properties, dining, experiences..."
                  rows={1}
                  className="flex-1 resize-none bg-transparent text-[13px] text-[#3a2a1a] placeholder:text-[#3a2a1a]/30 focus:outline-none max-h-24 py-2"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || chatMutation.isPending}
                  className="shrink-0 w-9 h-9 rounded-full bg-[#3a2a1a] flex items-center justify-center disabled:opacity-30 hover:bg-[#4a3a2a] transition-all"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>

              {/* Powered by line */}
              <p
                className="text-center text-[9px] text-[#3a2a1a]/20 mt-2 tracking-[0.05em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Nayara Resorts Concierge
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
