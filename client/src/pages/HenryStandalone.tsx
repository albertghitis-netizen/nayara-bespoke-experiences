/**
 * Henry — Standalone AI Concierge Page
 * Full-page chat experience with Henry, the Nayara Resorts concierge.
 * No site navigation — just the chat.
 */
import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { Streamdown } from "streamdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function HenryStandalone() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const recognitionRef = useRef<any>(null);

  const chatMutation = trpc.concierge.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Our concierge line is momentarily busy. Please try again in a few seconds, or reach us directly at reservations@nayararesorts.com or 1-844-865-2002.",
        },
      ]);
    },
  });

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, chatMutation.isPending]);

  useEffect(() => {
    if (inputRef.current) setTimeout(() => inputRef.current?.focus(), 300);
  }, []);

  const sendMessage = (content: string) => {
    if (!content.trim() || chatMutation.isPending) return;
    const userMsg: Message = { role: "user", content: content.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    chatMutation.mutate({ messages: newMessages.map((m) => ({ role: m.role, content: m.content })) });
  };

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); sendMessage(input); };
  const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); } };

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
      let finalTranscript = '';
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      if (finalTranscript) setInput((prev) => prev + finalTranscript);
      else if (interimTranscript) setInput((prev) => prev.split(' ').slice(0, -1).join(' ') + ' ' + interimTranscript);
    };
    recognition.onerror = () => setIsListening(false);
    recognition.start();
  };

  const stopVoiceInput = () => { if (recognitionRef.current) { recognitionRef.current.stop(); setIsListening(false); } };

  const quickPrompts = [
    "Tell me about Nayara Springs",
    "What dining options are available?",
    "Best time to visit Costa Rica?",
    "Wellness at Alto Atacama",
  ];

  return (
    <div className="h-screen flex flex-col" style={{ background: "#E8DCC8", fontFamily: "'DM Sans', 'Inter', sans-serif" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b shrink-0" style={{ borderColor: "rgba(58,42,26,0.12)" }}>
        <div>
          <h1 className="text-lg font-medium tracking-wide" style={{ color: "#3a2a1a", fontFamily: "'Playfair Display', serif" }}>
            Henry
          </h1>
          <p className="text-xs mt-0.5" style={{ color: "rgba(58,42,26,0.5)" }}>
            Your Nayara Resorts Concierge
          </p>
        </div>
        <a
          href="/"
          className="text-xs px-4 py-2 rounded-full transition-colors"
          style={{ background: "rgba(58,42,26,0.08)", color: "#3a2a1a", textDecoration: "none" }}
        >
          Visit Nayara
        </a>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-6 space-y-4" style={{ scrollBehavior: "smooth" }}>
        {/* Welcome */}
        {messages.length === 0 && (
          <>
            <div className="flex justify-start">
              <div className="max-w-[85%] rounded-2xl rounded-bl-md px-4 py-3 bg-white shadow-sm" style={{ color: "#3a2a1a", border: "1px solid rgba(255,255,255,0.3)" }}>
                <p className="text-sm leading-relaxed">
                  Welcome to Nayara Resorts. I'm Henry, your personal concierge. Ask me about our properties, experiences, dining, wellness, or anything else — I'm here to help.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => sendMessage(p)}
                  className="text-xs border rounded-full px-3 py-1.5 transition-colors hover:border-[#3a2a1a]/40"
                  style={{ color: "rgba(58,42,26,0.6)", borderColor: "rgba(58,42,26,0.15)" }}
                >
                  {p}
                </button>
              ))}
            </div>
          </>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.role === "user" ? "rounded-br-md" : "rounded-bl-md"
              }`}
              style={{
                background: "#fff",
                color: "#3a2a1a",
                border: "1px solid rgba(255,255,255,0.3)",
              }}
            >
              {msg.role === "assistant" ? (
                <div className="text-sm leading-relaxed [&_p]:mb-2 [&_p:last-child]:mb-0 [&_a]:text-[#8b6f47] [&_a]:underline [&_ul]:ml-4 [&_ul]:list-disc [&_ol]:ml-4 [&_ol]:list-decimal [&_strong]:font-semibold">
                  <Streamdown>{msg.content}</Streamdown>
                </div>
              ) : (
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
              )}
            </div>
          </div>
        ))}

        {chatMutation.isPending && (
          <div className="flex justify-start">
            <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-sm" style={{ border: "1px solid rgba(58,42,26,0.05)" }}>
              <div className="flex gap-1.5 items-center h-5">
                <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "rgba(58,42,26,0.3)", animationDelay: "0ms" }} />
                <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "rgba(58,42,26,0.3)", animationDelay: "150ms" }} />
                <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: "rgba(58,42,26,0.3)", animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="px-5 py-3 shrink-0" style={{ borderTop: "1.5px solid rgba(58,42,26,0.15)" }}>
        <div className="flex items-end gap-2 rounded-xl px-3 py-1.5" style={{ background: "#E8DCC8", border: "1px solid rgba(58,42,26,0.12)" }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask the concierge anything..."
            rows={1}
            className="flex-1 resize-none bg-transparent text-sm placeholder:text-[#3a2a1a]/35 focus:outline-none max-h-24 py-2"
            style={{ color: "#3a2a1a" }}
          />
          <button
            type="button"
            onClick={isListening ? stopVoiceInput : startVoiceInput}
            className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
              isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-[#3a2a1a] hover:bg-[#4a3a2a]"
            }`}
            title={isListening ? "Stop listening" : "Start voice input"}
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" />
              <path d="M17 16.91c-1.48 1.46-3.51 2.36-5.7 2.36-2.2 0-4.2-.9-5.7-2.36l-1.41 1.41c1.84 1.84 4.35 2.98 7.11 2.98s5.27-1.13 7.11-2.98l-1.41-1.41zM12 20c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1z" />
            </svg>
          </button>
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
        <p className="text-center mt-2" style={{ fontSize: 10, color: "rgba(58,42,26,0.2)" }}>Powered by Nayara Resorts</p>
      </form>
    </div>
  );
}
