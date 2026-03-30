/**
 * Facebook Messenger DM Simulator
 * Pixel-perfect replica of Facebook Messenger (dark mode, mobile only).
 * Connected to the Nayara AI concierge backend — same brain as Instagram.
 */

import { useState, useRef, useEffect } from "react";
import { trpc } from "@/lib/trpc";

const PROFILE_PIC = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/nayara_gardens_logo_05492d2c.png";
const ACCOUNT_NAME = "Nayara Gardens";

type Message = {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export default function MessengerDM() {
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
        background: "#1a1a2e",
        maxWidth: "100vw",
        maxHeight: "100dvh",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* ── Status Bar (fake iOS) ── */}
      <div className="flex items-center justify-between px-6 pt-3 pb-1 shrink-0" style={{ background: "#1a1a2e" }}>
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

      {/* ── Header ── */}
      <div className="flex items-center px-4 py-2.5 shrink-0" style={{ background: "#1a1a2e", borderBottom: "1px solid #2d2d44" }}>
        {/* Back arrow */}
        <button className="p-1 mr-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 19l-7-7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Profile pic with Messenger active dot */}
        <div className="relative mr-3">
          <img
            src={PROFILE_PIC}
            alt={ACCOUNT_NAME}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div
            className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full"
            style={{ background: "#31a24c", border: "2.5px solid #1a1a2e" }}
          />
        </div>

        {/* Name + active status */}
        <div className="flex-1 min-w-0">
          <span className="text-white font-bold text-[16px] block truncate">{ACCOUNT_NAME}</span>
          <span className="text-[#65676b] text-xs">Active now</span>
        </div>

        {/* Call icons */}
        <div className="flex items-center gap-5">
          {/* Phone */}
          <button>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="#0084ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {/* Video */}
          <button>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M23 7l-7 5 7 5V7z" stroke="#0084ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="1" y="5" width="15" height="14" rx="2" stroke="#0084ff" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Messages Area ── */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto px-4 py-4"
        style={{ background: "#000000", scrollBehavior: "smooth" }}
      >
        {/* Empty state */}
        {messages.length === 0 && !chatMutation.isPending && (
          <div className="flex flex-col items-center pt-8 pb-6">
            <img
              src={PROFILE_PIC}
              alt={ACCOUNT_NAME}
              className="w-20 h-20 rounded-full object-cover mb-3"
            />
            <span className="text-white font-bold text-lg">{ACCOUNT_NAME}</span>
            <span className="text-[#65676b] text-sm mt-1">You're connected on Messenger</span>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#65676b] text-xs">Luxury Rainforest Resort</span>
              <span className="text-[#65676b] text-xs">·</span>
              <span className="text-[#65676b] text-xs">Typically replies instantly</span>
            </div>
          </div>
        )}

        {/* Message bubbles */}
        {messages.map((msg, i) => {
          const showTimestamp = i === 0 || (msg.timestamp.getTime() - messages[i - 1].timestamp.getTime() > 60000);
          const isLastInGroup = i === messages.length - 1 || messages[i + 1]?.role !== msg.role;
          return (
            <div key={i}>
              {showTimestamp && (
                <div className="text-center my-3">
                  <span className="text-[#65676b] text-[11px]">{formatTime(msg.timestamp)}</span>
                </div>
              )}
              <div className={`flex mb-0.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && isLastInGroup && (
                  <img
                    src={PROFILE_PIC}
                    alt=""
                    className="w-7 h-7 rounded-full object-cover mr-2 mt-auto shrink-0"
                  />
                )}
                {msg.role === "assistant" && !isLastInGroup && (
                  <div className="w-7 mr-2 shrink-0" />
                )}
                <div
                  className={`max-w-[75%] px-3 py-2 text-[15px] leading-[20px] ${
                    msg.role === "user"
                      ? "rounded-[18px] rounded-br-[4px]"
                      : "rounded-[18px] rounded-bl-[4px]"
                  }`}
                  style={{
                    background: msg.role === "user"
                      ? "linear-gradient(83deg, #0084ff 0%, #0099ff 50%, #00c6ff 100%)"
                      : "#303030",
                    color: "#fff",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.content}
                </div>
              </div>
              {/* Seen indicator for last user message */}
              {msg.role === "user" && isLastInGroup && !chatMutation.isPending && i === messages.length - 1 && (
                <div className="flex justify-end mt-0.5 mb-1">
                  <img src={PROFILE_PIC} alt="" className="w-3.5 h-3.5 rounded-full object-cover" />
                </div>
              )}
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
              className="px-4 py-3 rounded-[18px] rounded-bl-[4px]"
              style={{ background: "#303030" }}
            >
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 rounded-full bg-[#65676b] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#65676b] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#65676b] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Input Bar ── */}
      <div className="shrink-0 px-3 py-2" style={{ background: "#000", borderTop: "1px solid #2d2d44" }}>
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2"
        >
          {/* Plus/More */}
          <button type="button" className="shrink-0">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#0084ff" />
              <line x1="12" y1="8" x2="12" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="12" x2="16" y2="12" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Camera */}
          <button type="button" className="shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="13" r="4" stroke="#0084ff" strokeWidth="1.5" />
              <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#0084ff" strokeWidth="1.5" fill="none" />
            </svg>
          </button>

          {/* Gallery */}
          <button type="button" className="shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="2" width="20" height="20" rx="3" stroke="#0084ff" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="2" stroke="#0084ff" strokeWidth="1.5" />
              <path d="M2 17l5-5 4 4 3-3 8 8" stroke="#0084ff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Mic */}
          <button type="button" className="shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" stroke="#0084ff" strokeWidth="1.5" />
              <path d="M19 10v2a7 7 0 01-14 0v-2" stroke="#0084ff" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="23" stroke="#0084ff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Text input */}
          <div className="flex-1 flex items-center rounded-full px-4 py-2" style={{ background: "#303030" }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Aa"
              className="flex-1 bg-transparent text-white text-[15px] placeholder-[#65676b] outline-none"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
            />
            {/* Emoji inside input */}
            <button type="button" className="ml-2 shrink-0">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="#65676b" strokeWidth="1.5" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#65676b" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="9" cy="10" r="1" fill="#65676b" />
                <circle cx="15" cy="10" r="1" fill="#65676b" />
              </svg>
            </button>
          </div>

          {/* Send or Like */}
          {input.trim() ? (
            <button
              type="submit"
              disabled={chatMutation.isPending}
              className="shrink-0"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="#0084ff">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          ) : (
            <button type="button" className="shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="#0084ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </form>
      </div>

      {/* Bottom home indicator */}
      <div className="flex justify-center pb-2 pt-1 shrink-0" style={{ background: "#000" }}>
        <div className="w-36 h-1 rounded-full bg-white/30" />
      </div>
    </div>
  );
}
