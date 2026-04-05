import { useState, useRef, useEffect } from "react";

const body = { fontFamily: "'DM Sans', sans-serif", fontWeight: 400 } as const;

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const WELCOME = "Welcome to Nayara Resorts. I'm your personal concierge. Ask me about our properties, experiences, dining, wellness, or anything else.";

const QUICK = [
  "Tell me about Nayara Springs",
  "What dining options are available?",
  "Best time to visit Costa Rica?",
  "Wellness at Atacama",
];

function getReply(input: string): string {
  const l = input.toLowerCase();
  if (l.includes("springs")) return "Nayara Springs is our adults-only luxury resort in Arenal, Costa Rica. Private villas with volcanic hot spring plunge pools, 3 Michelin Key restaurant Amor Loco, Relais & Chateaux. Perfect for romantic getaways.";
  if (l.includes("gardens")) return "Nayara Gardens is our family-friendly resort in Arenal. Travel + Leisure Hall of Fame. Spacious bungalows, tropical gardens, kids adventure club, multiple dining venues.";
  if (l.includes("atacama") || l.includes("desert")) return "Nayara Alto Atacama is our all-inclusive desert oasis in Chile. 2 Michelin Keys, stargazing, ancestral healing spa, guided desert expeditions.";
  if (l.includes("bocas") || l.includes("panama")) return "Nayara Bocas del Toro is adults-only overwater villas on a private island in Panama. Conde Nast Best Resort Central America 2025.";
  if (l.includes("hangaroa") || l.includes("easter")) return "Nayara Hangaroa on Easter Island (Rapa Nui), Chile. Guided Moai tours, Polynesian cultural experiences, sustainable tourism.";
  if (l.includes("dining") || l.includes("food")) return "Nayara Springs holds 3 Michelin Keys (Amor Loco). Alto Atacama holds 2 Michelin Keys. All properties emphasize farm-to-table dining.";
  if (l.includes("wellness") || l.includes("spa")) return "Each property offers unique wellness: volcanic hot springs at Springs, rainforest spa at Gardens/Tented Camp, ancestral healing at Atacama, overwater treatments at Bocas.";
  if (l.includes("time") || l.includes("visit")) return "Costa Rica: Dec-Apr dry season. Atacama: year-round, best stargazing Mar-Oct. Bocas: Dec-Mar and Jul-Aug. Easter Island: year-round.";
  return "We have six properties across Costa Rica, Chile, and Panama. I can help with dining, wellness, experiences, or sustainability. What interests you?";
}

export default function ChatEmbed() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: WELCOME, timestamp: new Date() },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = (text: string) => {
    if (!text.trim() || typing) return;
    setMessages(p => [...p, { role: "user", content: text.trim(), timestamp: new Date() }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages(p => [...p, { role: "assistant", content: getReply(text), timestamp: new Date() }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <div className="h-screen flex flex-col bg-white" style={body}>
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 bg-[#f7f5f0]">
        <div className="w-8 h-8 rounded-full bg-[#3a2a1a] flex items-center justify-center">
          <span className="text-white text-[10px] tracking-[0.1em]" style={{ fontFamily: "'Playfair Display', serif" }}>N</span>
        </div>
        <div>
          <p className="text-[#3a2a1a] text-[14px] font-medium">Nayara Concierge</p>
          <p className="text-[#3a2a1a]/40 text-[11px]">Always available</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed ${
              msg.role === "user"
                ? "bg-[#3a2a1a] text-white rounded-br-md"
                : "bg-[#f7f5f0] text-[#3a2a1a] rounded-bl-md"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {typing && (
          <div className="flex justify-start">
            <div className="bg-[#f7f5f0] rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#3a2a1a]/20 animate-bounce" />
              <span className="w-2 h-2 rounded-full bg-[#3a2a1a]/20 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="w-2 h-2 rounded-full bg-[#3a2a1a]/20 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        )}
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 pt-2">
            {QUICK.map(p => (
              <button key={p} onClick={() => send(p)} className="text-[12px] text-[#3a2a1a]/60 border border-[#3a2a1a]/15 rounded-full px-3 py-1.5 hover:border-[#3a2a1a]/40 transition-colors">
                {p}
              </button>
            ))}
          </div>
        )}
        <div ref={endRef} />
      </div>

      <div className="px-4 py-3 border-t border-gray-100">
        <form onSubmit={e => { e.preventDefault(); send(input); }} className="flex items-center gap-2">
          <input
            type="text" value={input} onChange={e => setInput(e.target.value)}
            placeholder="Ask about Nayara Resorts..."
            className="flex-1 bg-[#f7f5f0] rounded-full px-4 py-2.5 text-[14px] text-[#3a2a1a] placeholder:text-[#3a2a1a]/30 outline-none focus:ring-2 focus:ring-[#3a2a1a]/10"
          />
          <button type="submit" disabled={!input.trim() || typing}
            className="w-10 h-10 rounded-full bg-[#3a2a1a] text-white flex items-center justify-center disabled:opacity-30 transition-opacity">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>
        </form>
        <p className="text-center text-[10px] text-[#3a2a1a]/20 mt-2">Powered by Nayara Resorts</p>
      </div>
    </div>
  );
}
