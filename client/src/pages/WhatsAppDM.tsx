/**
 * WhatsApp Business DM Simulator
 * Pixel-perfect replica of WhatsApp (dark mode, mobile only).
 * Branded as Nayara Resorts (umbrella account).
 * Connected to the Nayara AI concierge backend — same brain.
 */

import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";

const PROFILE_PIC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara_resorts_logo_990b5471.png";
const ACCOUNT_NAME = "Nayara Resorts";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function WhatsAppDM() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const chatMutation = trpc.concierge.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply, timestamp: new Date() },
      ]);
    },
    onError: () => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I'm having trouble right now. You can reach us directly at reservations@nayararesorts.com or call (844) 865-2002.",
          timestamp: new Date(),
        },
      ]);
    },
  });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, chatMutation.isPending]);

  const sendMessage = (content: string) => {
    if (!content.trim() || chatMutation.isPending) return;
    const userMsg: Message = { role: "user", content: content.trim(), timestamp: new Date() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");

    chatMutation.mutate({
      messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
      channel: "messenger" as const,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  return (
    <div
      className="fixed inset-0 flex flex-col"
      style={{
        background: "#0b141a",
        maxWidth: "100vw",
        maxHeight: "100dvh",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* ── Status Bar (fake iOS) ── */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 shrink-0" style={{ background: "#1f2c34" }}>
        <span className="text-white text-sm font-semibold" style={{ fontSize: "15px" }}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
        <div className="flex items-center gap-1">
          <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
            <rect x="0" y="9" width="3" height="3" rx="0.5" opacity="0.4" />
            <rect x="4.5" y="6" width="3" height="6" rx="0.5" opacity="0.4" />
            <rect x="9" y="3" width="3" height="9" rx="0.5" opacity="0.8" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
          </svg>
          <span className="text-white text-xs font-semibold ml-1">LTE</span>
          <svg width="27" height="13" viewBox="0 0 27 13" fill="none" className="ml-1">
            <rect x="0.5" y="0.5" width="23" height="12" rx="2.5" stroke="white" strokeOpacity="0.35" />
            <rect x="2" y="2" width="16" height="9" rx="1.5" fill="white" />
            <path d="M25 4.5V8.5C25.8 8.17 26.5 7.17 26.5 6.5C26.5 5.83 25.8 4.83 25 4.5Z" fill="white" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* ── Header — WhatsApp teal-dark style ── */}
      <div className="flex items-center px-2 py-2 shrink-0" style={{ background: "#1f2c34" }}>
        {/* Back arrow */}
        <button className="p-1 mr-1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Profile pic */}
        <div className="relative mr-2.5">
          <img
            src={PROFILE_PIC}
            alt={ACCOUNT_NAME}
            className="w-10 h-10 rounded-full object-cover"
            style={{ background: "#2a3942" }}
          />
        </div>

        {/* Name + online */}
        <div className="flex-1 min-w-0">
          <span className="text-white font-medium text-[16px] block truncate">{ACCOUNT_NAME}</span>
          <span className="text-[#8696a0] text-xs">online</span>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-4">
          {/* Video call */}
          <button>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M23 7l-7 5 7 5V7z" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="1" y="5" width="15" height="14" rx="2" stroke="#8696a0" strokeWidth="1.5" />
            </svg>
          </button>
          {/* Phone */}
          <button>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* More (three dots) */}
          <button>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#8696a0">
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Messages Area — WhatsApp wallpaper dark ── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-3 py-3"
        style={{
          background: "#0b141a",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23111b21' fill-opacity='0.6'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          scrollBehavior: "smooth",
        }}
      >
        {/* Empty state — business account info */}
        {messages.length === 0 && !chatMutation.isPending && (
          <div className="flex flex-col items-center pt-6 pb-4">
            {/* Business badge */}
            <div className="rounded-lg px-4 py-3 mb-4 max-w-[85%]" style={{ background: "#182229" }}>
              <div className="flex items-center gap-2 mb-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#00a884">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
                <span className="text-[#00a884] text-xs font-medium">Business Account</span>
              </div>
              <p className="text-[#8696a0] text-[13px] leading-[18px]">
                Messages to this business account are handled by an AI concierge. Your privacy is important to us.
              </p>
            </div>

            <img
              src={PROFILE_PIC}
              alt={ACCOUNT_NAME}
              className="w-20 h-20 rounded-full object-cover mb-3"
              style={{ background: "#2a3942" }}
            />
            <span className="text-white font-medium text-lg">{ACCOUNT_NAME}</span>
            <span className="text-[#8696a0] text-sm mt-0.5">Luxury Resorts Rooted in Nature</span>
            <span className="text-[#8696a0] text-xs mt-1">+1 (844) 865-2002</span>
          </div>
        )}

        {/* Message bubbles */}
        {messages.map((msg, i) => {
          const showTimestamp = i === 0 || (msg.timestamp.getTime() - messages[i - 1].timestamp.getTime() > 60000);
          return (
            <div key={i}>
              {showTimestamp && (
                <div className="flex justify-center my-2">
                  <span
                    className="text-[#8696a0] text-[11px] px-3 py-1 rounded-lg"
                    style={{ background: "#182229" }}
                  >
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
              )}
              <div className={`flex mb-1 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-1.5 text-[14.5px] leading-[19px] relative ${
                    msg.role === "user"
                      ? "rounded-lg rounded-tr-none"
                      : "rounded-lg rounded-tl-none"
                  }`}
                  style={{
                    background: msg.role === "user" ? "#005c4b" : "#1f2c34",
                    color: "#e9edef",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.content}
                  {/* Timestamp inside bubble */}
                  <span className="text-[#8696a0] text-[11px] float-right mt-1 ml-2 leading-none">
                    {formatTime(msg.timestamp)}
                    {msg.role === "user" && (
                      <svg width="16" height="11" viewBox="0 0 16 11" className="inline ml-0.5 -mt-0.5">
                        <path d="M11.07 0.73L4.53 7.27L1.97 4.71L0.56 6.12L4.53 10.09L12.48 2.14L11.07 0.73Z" fill="#53bdeb" />
                        <path d="M14.07 0.73L7.53 7.27L6.79 6.53L5.38 7.94L7.53 10.09L15.48 2.14L14.07 0.73Z" fill="#53bdeb" />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {chatMutation.isPending && (
          <div className="flex mb-1 justify-start">
            <div
              className="px-4 py-3 rounded-lg rounded-tl-none"
              style={{ background: "#1f2c34" }}
            >
              <div className="flex gap-1.5 items-center">
                <span className="w-2 h-2 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#8696a0] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Input Bar — WhatsApp style ── */}
      <div className="shrink-0 px-2 py-1.5" style={{ background: "#0b141a" }}>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          {/* Input container */}
          <div className="flex-1 flex items-center rounded-full px-3 py-1.5" style={{ background: "#1f2c34" }}>
            {/* Emoji */}
            <button type="button" className="shrink-0 mr-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#8696a0" strokeWidth="1.5" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="9" cy="10" r="1" fill="#8696a0" />
                <circle cx="15" cy="10" r="1" fill="#8696a0" />
              </svg>
            </button>

            {/* Text input */}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message"
              className="flex-1 bg-transparent text-[#e9edef] text-[15px] placeholder-[#8696a0] outline-none py-1.5"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
            />

            {/* Attach */}
            <button type="button" className="shrink-0 ml-2">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ transform: "rotate(45deg)" }}>
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" stroke="#8696a0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Camera */}
            <button type="button" className="shrink-0 ml-3">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="13" r="4" stroke="#8696a0" strokeWidth="1.5" />
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#8696a0" strokeWidth="1.5" fill="none" />
              </svg>
            </button>
          </div>

          {/* Send or Mic */}
          {input.trim() ? (
            <button
              type="submit"
              disabled={chatMutation.isPending}
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#00a884" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#00a884" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
                <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none" />
                <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          )}
        </form>
      </div>

      {/* Bottom home indicator */}
      <div className="flex justify-center pb-2 pt-1 shrink-0" style={{ background: "#0b141a" }}>
        <div className="w-36 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
