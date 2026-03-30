/**
 * Instagram DM Simulator
 * Pixel-perfect replica of Instagram Direct Messages (dark mode, mobile only).
 * Connected to the Nayara AI concierge backend.
 * No welcome message — clean slate, user types first.
 */

import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";

const PROFILE_PIC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara_ig_profile_e5de9f8d.png";
const ACCOUNT_NAME = "Nayara Alto Atacama";
const ACCOUNT_HANDLE = "nayaraaltoatacama";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function InstagramDM() {
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
      channel: "instagram" as const,
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
        background: "#000000",
        maxWidth: "100vw",
        maxHeight: "100dvh",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* ── Status Bar (fake iOS) ── */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 shrink-0" style={{ background: "#000" }}>
        <span className="text-white text-sm font-semibold" style={{ fontSize: "15px" }}>
          {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </span>
        <div className="flex items-center gap-1">
          {/* Signal bars */}
          <svg width="17" height="12" viewBox="0 0 17 12" fill="white">
            <rect x="0" y="9" width="3" height="3" rx="0.5" opacity="0.4" />
            <rect x="4.5" y="6" width="3" height="6" rx="0.5" opacity="0.4" />
            <rect x="9" y="3" width="3" height="9" rx="0.5" opacity="0.8" />
            <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
          </svg>
          <span className="text-white text-xs font-semibold ml-1">LTE</span>
          {/* Battery */}
          <svg width="27" height="13" viewBox="0 0 27 13" fill="none" className="ml-1">
            <rect x="0.5" y="0.5" width="23" height="12" rx="2.5" stroke="white" strokeOpacity="0.35" />
            <rect x="2" y="2" width="16" height="9" rx="1.5" fill="white" />
            <path d="M25 4.5V8.5C25.8 8.17 26.5 7.17 26.5 6.5C26.5 5.83 25.8 4.83 25 4.5Z" fill="white" fillOpacity="0.4" />
          </svg>
        </div>
      </div>

      {/* ── Header ── */}
      <div className="flex items-center px-4 py-2 shrink-0" style={{ background: "#000", borderBottom: "1px solid #262626" }}>
        {/* Back arrow */}
        <button className="p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Profile pic */}
        <div className="relative mr-3">
          <img
            src={PROFILE_PIC}
            alt={ACCOUNT_NAME}
            className="w-9 h-9 rounded-full object-cover"
            style={{ border: "2px solid #333" }}
          />
          {/* Online indicator */}
          <div
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full"
            style={{ background: "#00c853", border: "2px solid #000" }}
          />
        </div>

        {/* Name + status */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1">
            <span className="text-white font-semibold text-[15px] truncate">{ACCOUNT_NAME}</span>
            {/* Verified badge */}
            <svg width="16" height="16" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#0095F6" />
              <path d="M17.5 20.5L19.5 22.5L23.5 17.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-[#8e8e8e] text-xs">{ACCOUNT_HANDLE}</span>
        </div>

        {/* Call icons */}
        <div className="flex items-center gap-4">
          {/* Phone */}
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Video */}
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M23 7l-7 5 7 5V7z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="1" y="5" width="15" height="14" rx="2" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Messages Area ── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4"
        style={{ background: "#000", scrollBehavior: "smooth" }}
      >
        {/* Empty state — profile pic + name centered (like real Instagram) */}
        {messages.length === 0 && !chatMutation.isPending && (
          <div className="flex flex-col items-center pt-8 pb-6">
            <img
              src={PROFILE_PIC}
              alt={ACCOUNT_NAME}
              className="w-24 h-24 rounded-full object-cover mb-4"
            />
            <span className="text-white font-bold text-lg">{ACCOUNT_NAME}</span>
            <span className="text-[#8e8e8e] text-sm mt-0.5">{ACCOUNT_HANDLE} · Instagram</span>
            <span className="text-[#8e8e8e] text-xs mt-1">56K followers · 1,441 posts</span>
            <button
              className="mt-4 px-4 py-1.5 rounded-lg text-sm font-semibold"
              style={{ background: "#363636", color: "#fff" }}
            >
              View profile
            </button>
          </div>
        )}

        {/* Message bubbles */}
        {messages.map((msg, i) => {
          const showTimestamp = i === 0 || (msg.timestamp.getTime() - messages[i - 1].timestamp.getTime() > 60000);
          return (
            <div key={i}>
              {showTimestamp && (
                <div className="text-center my-3">
                  <span className="text-[#8e8e8e] text-[11px]">{formatTime(msg.timestamp)}</span>
                </div>
              )}
              <div className={`flex mb-1 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <img
                    src={PROFILE_PIC}
                    alt=""
                    className="w-7 h-7 rounded-full object-cover mr-2 mt-auto shrink-0"
                  />
                )}
                <div
                  className={`max-w-[75%] px-4 py-2.5 text-[15px] leading-[20px] ${
                    msg.role === "user"
                      ? "rounded-[22px] rounded-br-[4px]"
                      : "rounded-[22px] rounded-bl-[4px]"
                  }`}
                  style={{
                    background: msg.role === "user" ? "#3797f0" : "#262626",
                    color: "#fff",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            </div>
          );
        })}

        {/* Typing indicator */}
        {chatMutation.isPending && (
          <div className="flex mb-1 justify-start">
            <img
              src={PROFILE_PIC}
              alt=""
              className="w-7 h-7 rounded-full object-cover mr-2 mt-auto shrink-0"
            />
            <div
              className="px-4 py-3 rounded-[22px] rounded-bl-[4px]"
              style={{ background: "#262626" }}
            >
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full bg-[#8e8e8e] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#8e8e8e] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#8e8e8e] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Input Bar ── */}
      <div className="shrink-0 px-3 py-2" style={{ background: "#000", borderTop: "1px solid #262626" }}>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 rounded-full px-3 py-1.5"
          style={{ background: "#262626" }}
        >
          {/* Camera icon */}
          <button type="button" className="shrink-0">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <circle cx="12" cy="12" r="4" />
                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="white" strokeWidth="1.5" fill="none" />
              </svg>
            </div>
          </button>

          {/* Text input */}
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message..."
            className="flex-1 bg-transparent text-white text-[15px] placeholder-[#8e8e8e] outline-none py-2"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage(input);
              }
            }}
          />

          {/* Right icons — show Send when typing, otherwise show mic/gallery/emoji/plus */}
          {input.trim() ? (
            <button
              type="submit"
              disabled={chatMutation.isPending}
              className="text-[#0095f6] font-semibold text-[15px] shrink-0 pr-1"
            >
              Send
            </button>
          ) : (
            <div className="flex items-center gap-3 shrink-0">
              {/* Mic */}
              <button type="button">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="white" strokeWidth="1.5" />
                  <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {/* Gallery */}
              <button type="button">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="3" stroke="white" strokeWidth="1.5" />
                  <circle cx="8.5" cy="8.5" r="2" stroke="white" strokeWidth="1.5" />
                  <path d="M2 17l5-5 4 4 3-3 8 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* Emoji */}
              <button type="button">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="9" cy="10" r="1" fill="white" />
                  <circle cx="15" cy="10" r="1" fill="white" />
                </svg>
              </button>
              {/* Plus */}
              <button type="button">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <line x1="12" y1="8" x2="12" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          )}
        </form>
      </div>

      {/* Bottom home indicator (iOS style) */}
      <div className="flex justify-center pb-2 pt-1 shrink-0" style={{ background: "#000" }}>
        <div className="w-36 h-1 rounded-full bg-white/30" />
      </div>
    </div>
  );
}
