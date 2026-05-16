/**
 * Nayara Resorts , Website Concierge Chat Widget
 * A luxury-styled floating chat that represents the Nayara brand directly.
 * Warm, professional, knowledgeable , Henry, the Nayara concierge.
 */

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";
import { getPalette } from "@/data/propertyPalettes";

type Message = {
  role: "user" | "assistant";
  content: string;
};



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

interface ConciergeChatWidgetProps {
  /** Override button colors to match property palette */
  palette?: { dark: string; pillBg: string };
}

export default function ConciergeChatWidget({ palette }: ConciergeChatWidgetProps = {}) {
  const [loc] = useLocation();
  const slug = loc.split("/")[1] || "";
  const fullPath = loc;
  const costaRicaRoutes = ["curated-excursions", "costa-rica-wellness", "tented-camp/gastronomy", "tented-camp-sustainability"];
  // Bocas-specific blog pages should use Bocas palette
  const bocasBlogRoutes = ["/blog/how-we-built-a-hotel-on-an-island"];
  const isBocasBlog = bocasBlogRoutes.some(r => fullPath.startsWith(r));
  const autoPalette = ["tented-camp", "gardens", "springs", "alto-atacama", "bocas-del-toro", "hangaroa"].includes(slug)
    ? getPalette(slug) : isBocasBlog ? getPalette("bocas-del-toro") : null;
  const isCostaRica = costaRicaRoutes.includes(slug);
  const dk = "#FFFFFF";  // Bright white text for concierge button
  const isBrandHome = slug === "";
  const bg = palette?.pillBg ?? (autoPalette ? `${autoPalette.navPillBg}B3` : isCostaRica ? "rgba(134,139,117,0.8)" : isBrandHome ? "rgba(106,96,79,0.8)" : "rgba(59,43,38,0.8)");  // Match nav pill background
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);

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
            "Our concierge line is momentarily busy. Please try again in a few seconds, or reach us directly at reservations@nayararesorts.com or 844-865-2002.",
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

  /* Voice dictation using Web Speech API */
  const startVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Voice input is not supported in your browser. Try Chrome, Edge, or Safari.');
      return;
    }

    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
    const recognition = new SpeechRecognition();
    recognitionRef.current = recognition;

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event: any) => {
      let interimTranscript = '';
      let finalTranscript = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + ' ';
        } else {
          interimTranscript += transcript;
        }
      }

      if (finalTranscript) {
        setInput((prev) => prev + finalTranscript);
      } else if (interimTranscript) {
        // Show interim results as user is speaking
        setInput((prev) => prev.split(' ').slice(0, -1).join(' ') + ' ' + interimTranscript);
      }
    };

    recognition.onerror = (event: any) => {
      console.error('Voice input error:', event.error);
      setIsListening(false);
    };

    recognition.start();
  };

  const stopVoiceInput = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
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
            className="fixed bottom-4 right-4 z-50 flex items-center gap-1.5 rounded-full backdrop-blur-md shadow-lg px-4 py-2 transition-colors group cursor-pointer border"
            style={{ backgroundColor: bg, borderColor: "rgba(255,255,255,0.1)" }}
            aria-label="Concierge"
          >
            <span
              className="text-[11px] font-medium tracking-[0.25em] uppercase whitespace-nowrap flex items-center justify-center"
              style={{ color: dk, fontFamily: "var(--font-body)", fontWeight: 500 }}
            >
              Concierge
            </span>

            {/* Pulse indicator for new visitors */}
            {messages.length === 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#c9b99a] rounded-full animate-pulse" />
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
            className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] md:w-[460px] h-[70vh] max-h-[600px] rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            style={{
              background: "#F2ECE0",
              border: "1px solid rgba(58, 42, 26, 0.12)",
            }}
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#3B2B26]/10 shrink-0">
              <div>
                <h3 className="text-[#3B2B26] text-sm font-medium tracking-[0.04em]" style={{ fontFamily: "var(--font-body)" }}>
                  Henry, Your Concierge
                </h3>
                <p className="text-[#3B2B26]/60 text-xs mt-0.5" style={{ fontFamily: "var(--font-body)" }}>
                  How may I help you today?
                </p>
              </div>
              {/* ── Close button ── */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-[#3B2B26]/10 transition-colors flex-shrink-0"
              >
                <svg
                  className="w-4 h-4 text-[#3B2B26]/40"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* ── Messages ── */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-4"
              style={{ scrollBehavior: "smooth" }}
            >
              {/* Welcome , feels like a person just greeted you */}
              {showWelcome && messages.length === 0 && (
                <div className="flex justify-start">
                  <div
                    className="max-w-[85%] rounded-2xl rounded-bl-md px-4 py-3 bg-white text-[#3B2B26] shadow-sm border border-white/20"
                  >
                    <p
                      className="text-[13px] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Welcome to Nayara Resorts. I'm Henry, your personal concierge. How can I help you today?
                    </p>
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
                        ? "bg-white text-[#3B2B26] rounded-br-md border border-white/30 shadow-sm"
                        : "bg-white text-[#3B2B26] rounded-bl-md shadow-sm border border-white/30"
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
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm border border-[#3B2B26]/5">
                    <div className="flex gap-1.5 items-center h-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B2B26]/30 animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B2B26]/30 animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3B2B26]/30 animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Input ── */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 shrink-0"
              style={{ borderTop: "1.5px solid rgba(58, 42, 26, 0.15)" }}
            >
              <div className="flex items-end gap-2 bg-[#EBE4D6] rounded-xl px-3 py-1.5" style={{ border: "1px solid rgba(58, 42, 26, 0.12)" }}>
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask us anything..."
                  rows={1}
                  className="flex-1 resize-none bg-transparent text-[13px] text-[#3B2B26] placeholder:text-[#3B2B26]/35 focus:outline-none max-h-24 py-2"
                  style={{ fontFamily: "var(--font-body)" }}
                />
                {/* Voice input button */}
                <button
                  type="button"
                  onClick={isListening ? stopVoiceInput : startVoiceInput}
                  className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isListening
                      ? 'bg-red-500 hover:bg-red-600 animate-pulse'
                      : 'bg-[#3B2B26] hover:bg-[#4a3a2a]'
                  }`}
                  title={isListening ? 'Stop listening' : 'Start voice input'}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 16.91c-1.48 1.46-3.51 2.36-5.7 2.36-2.2 0-4.2-.9-5.7-2.36l-1.41 1.41c1.84 1.84 4.35 2.98 7.11 2.98s5.27-1.13 7.11-2.98l-1.41-1.41zM12 20c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1z" />
                  </svg>
                </button>
                {/* Send button */}
                <button
                  type="submit"
                  disabled={!input.trim() || chatMutation.isPending}
                  className="shrink-0 w-9 h-9 rounded-full bg-[#3B2B26] flex items-center justify-center disabled:opacity-30 hover:bg-[#4a3a2a] transition-all"
                >
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </div>


            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
