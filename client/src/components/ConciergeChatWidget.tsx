/**
 * Nayara Concierge — Floating Chat Widget
 * A luxury-styled chat bubble that expands into a full concierge conversation.
 * Works on all pages. Matches the Nayara brand aesthetic.
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
  "Ask me anything about Nayara Tented Camp or Nayara Alto Atacama",
  "What excursions do you recommend?",
  "Tell me about the rooms and suites",
  "What dining options are available?",
];

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
            "I'm sorry, I'm having a moment. Could you try that again? Or feel free to reach us directly at reservations@nayararesorts.com",
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
      {/* ── Floating Chat Bubble ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#3a2a1a] shadow-xl flex items-center justify-center hover:bg-[#4a3a2a] transition-colors group"
            aria-label="Open concierge chat"
          >
            {/* Nayara leaf-inspired icon */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-[#c9b99a] group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>

            {/* Pulse indicator */}
            {messages.length === 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#c9b99a] rounded-full animate-pulse" />
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
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-100px)] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              background: "#f7f5f0",
              border: "1px solid rgba(58, 42, 26, 0.12)",
            }}
          >
            {/* ── Header ── */}
            <div
              className="flex items-center justify-between px-5 py-4 shrink-0"
              style={{
                background: "#3a2a1a",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#c9b99a]/20 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-[#c9b99a]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className="text-white text-sm tracking-[0.08em]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                    }}
                  >
                    Starry
                  </h3>
                  <p
                    className="text-[#c9b99a] text-[10px] tracking-[0.12em] uppercase"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {chatMutation.isPending ? "Typing..." : "Nayara AI Concierge"}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
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
                <div className="flex flex-col items-center text-center pt-6 pb-4">
                  <div className="w-16 h-16 rounded-full bg-[#3a2a1a]/5 flex items-center justify-center mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-[#3a2a1a]/30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  </div>
                  <h4
                    className="text-[#3a2a1a] text-lg mb-2"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                    }}
                  >
                    Hi, I'm Starry
                  </h4>
                  <p
                    className="text-[#5a4a3a]/60 text-xs leading-relaxed mb-6 max-w-[280px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Named after the Atacama night sky, I'm your AI concierge for all six Nayara properties. Ask me anything about our resorts, experiences, or destinations. If you'd like to speak with a real person, I can connect you with Albert from Guest Relations right away.
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
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
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
                        className="prose prose-sm max-w-none text-[13px] leading-relaxed"
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
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#3a2a1a]/30 animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#3a2a1a]/30 animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#3a2a1a]/30 animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
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
                  placeholder="Ask me anything..."
                  rows={1}
                  className="flex-1 resize-none bg-transparent text-[13px] text-[#3a2a1a] placeholder:text-[#3a2a1a]/30 focus:outline-none max-h-24 py-2"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || chatMutation.isPending}
                  className="shrink-0 w-9 h-9 rounded-full bg-[#3a2a1a] flex items-center justify-center disabled:opacity-30 hover:bg-[#4a3a2a] transition-all"
                >
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Powered by line */}
              <p
                className="text-center text-[9px] text-[#3a2a1a]/25 mt-2 tracking-[0.05em]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Starry — Nayara AI Concierge
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
