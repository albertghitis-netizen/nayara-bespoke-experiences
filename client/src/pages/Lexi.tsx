/**
 * LEXI — Dual Diagnosis Management Tool
 * For people navigating co-occurring addiction and mood disorders.
 * Categories: Mood, Therapy, Sleep, Nutrition, Exercise, Meds, Social, Triggers, Sobriety, Cravings
 * Calendar view with color-coded entries and 5-min-before reminders
 * Each category uses FAQ format for educational content.
 */

import React, { useState, useEffect, useCallback, useRef } from "react";
import { trpc } from "@/lib/trpc";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   ASK LEXI — Floating Chat Widget (bottom-left)
   Visual shell only — backend wiring TBD
   ═══════════════════════════════════════════════════════════════ */
function AskLexiWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const chatMutation = trpc.lexi.chat.useMutation({
    onSuccess: (data) => {
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      setLoading(false);
    },
    onError: (err) => {
      console.error("Ask Sofía error:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I'm having trouble connecting right now. Please try again in a moment." },
      ]);
      setLoading(false);
    },
  });

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    const newMessages = [...messages, { role: "user" as const, content: userMsg }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    chatMutation.mutate({
      messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
    });
  };

  return (
    <>
      {/* Floating trigger button — bottom left */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2 h-11 px-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          style={{ background: "rgba(92, 107, 74, 0.9)", backdropFilter: "blur(8px)" }}
        >
          <span className="text-white text-sm tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>Ask Sofía</span>
        </button>
      )}

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 left-6 z-50 w-80 max-h-[70vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden"
            style={{ background: "#F7F5F0", border: "1px solid rgba(92, 107, 74, 0.2)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: "rgba(92, 107, 74, 0.9)" }}>
              <div className="flex items-center gap-2">
                <img src={LOGO_URL} alt="Sofía" className="w-7 h-7 rounded-full object-contain" style={{ background: "white" }} />
                <span className="text-white text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>Ask Sofía</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white text-lg transition">✕</button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-3 space-y-3" style={{ maxHeight: "50vh" }}>
              {messages.length === 0 && (
                <p className="text-sm opacity-50 italic text-center pt-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Hi, I'm Sofía. Ask me anything about managing your dual diagnosis journey.
                </p>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[85%] px-3 py-2 rounded-xl text-sm leading-relaxed"
                    style={{
                      background: msg.role === "user" ? "rgba(92, 107, 74, 0.15)" : "white",
                      fontFamily: "'DM Sans', sans-serif",
                      border: msg.role === "assistant" ? "1px solid rgba(58, 42, 26, 0.08)" : "none",
                    }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="px-3 py-2 rounded-xl text-sm opacity-50" style={{ background: "white" }}>...</div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-3 py-3 border-t" style={{ borderColor: "rgba(58, 42, 26, 0.08)" }}>
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 px-3 py-2 rounded-lg border text-sm bg-white"
                  style={{ borderColor: "rgba(58, 42, 26, 0.12)", fontFamily: "'DM Sans', sans-serif" }}
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="px-3 py-2 rounded-lg text-white text-sm transition"
                  style={{ background: input.trim() ? "#5C6B4A" : "#ccc" }}
                >
                  →
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS & TYPES
   ═══════════════════════════════════════════════════════════════ */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/sofia-logo-v2-asukdCPjq95Z289Qy4MZ5d.png";

const CATEGORIES = [
  { id: "mood", label: "Journal", color: "#C9A96E", icon: "◐" },
  { id: "therapy", label: "Therapy", color: "#5C6B4A", icon: "◉" },
  { id: "sleep", label: "Sleep", color: "#5A6B7A", icon: "☽" },
  { id: "nutrition", label: "Nutrition", color: "#7A9E7E", icon: "◈" },
  { id: "exercise", label: "Exercise", color: "#B8704A", icon: "△" },
  { id: "meds", label: "Meds", color: "#8B6B7A", icon: "⊕" },
  { id: "social", label: "Social", color: "#6B8A9E", icon: "◇" },
  { id: "triggers", label: "Triggers", color: "#A65D5D", icon: "⚡" },
  { id: "faq", label: "FAQ", color: "#8A7A5A", icon: "?" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

/* Categories that can be logged in the calendar */
const NON_LOGGABLE = new Set(["triggers", "faq"]);
const LOGGABLE_CATEGORIES = CATEGORIES.filter((c) => !NON_LOGGABLE.has(c.id));

interface CalendarEntry {
  id: string;
  category: CategoryId;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  note: string;
  completed: boolean;
}

interface FAQItem {
  question: string;
  answer: string;
}

/* ═══════════════════════════════════════════════════════════════
   REUSABLE FAQ ACCORDION COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function FAQSection({ items, accentColor }: { items: FAQItem[]; accentColor: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-xl overflow-hidden transition-all"
            style={{ background: isOpen ? `${accentColor}12` : "#E8E3DA" }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full text-left px-5 py-4 flex items-start gap-3"
            >
              <span
                className="text-sm mt-0.5 shrink-0 transition-transform duration-200"
                style={{ color: accentColor, transform: isOpen ? "rotate(90deg)" : "rotate(0deg)" }}
              >
                ▸
              </span>
              <span
                className="text-[15px] leading-snug font-medium"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#3a2a1a" }}
              >
                {item.question}
              </span>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pl-11">
                    <p
                      className="text-sm leading-relaxed opacity-75"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   REUSABLE LOGGING SECTION (shared by all category pages)
   ═══════════════════════════════════════════════════════════════ */

function LoggingSection({
  categoryId,
  categoryColor,
  logLabel,
  entries,
  addEntry,
  toggleComplete,
  deleteEntry,
}: {
  categoryId: CategoryId;
  categoryColor: string;
  logLabel: string;
  entries: CalendarEntry[];
  addEntry: (entry: Omit<CalendarEntry, "id">) => void;
  toggleComplete: (id: string) => void;
  deleteEntry: (id: string) => void;
}) {
  const [showAddForm, setShowAddForm] = useState(false);
  const today = new Date().toISOString().split("T")[0];
  const todayEntries = entries.filter((e) => e.date === today);

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-[0.15em] opacity-50 font-medium">Today's Log</h3>
        <button
          onClick={() => setShowAddForm(true)}
          className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full text-white"
          style={{ background: categoryColor }}
        >
          + {logLabel}
        </button>
      </div>

      {todayEntries.length === 0 ? (
        <p className="text-sm opacity-30 italic">Nothing logged today</p>
      ) : (
        <div className="flex flex-col gap-2">
          {todayEntries.map((entry) => (
            <div key={entry.id} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: `${categoryColor}10` }}>
              <button
                onClick={() => toggleComplete(entry.id)}
                className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                style={{ borderColor: categoryColor, background: entry.completed ? categoryColor : "transparent" }}
              >
                {entry.completed && <span className="text-white text-xs">✓</span>}
              </button>
              <div className="flex-1">
                <span className="text-xs opacity-50">{entry.time}</span>
                {entry.note && <p className={`text-sm ${entry.completed ? "line-through opacity-40" : ""}`}>{entry.note}</p>}
              </div>
              <button onClick={() => deleteEntry(entry.id)} className="text-xs opacity-30 hover:opacity-70">✕</button>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {showAddForm && (
          <AddEntryForm
            date={today}
            defaultCategory={categoryId}
            onAdd={(entry) => { addEntry({ ...entry, category: categoryId }); setShowAddForm(false); }}
            onCancel={() => setShowAddForm(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Lexi() {
  const [activeView, setActiveView] = useState<CategoryId | "calendar" | "home">("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [entries, setEntries] = useState<CalendarEntry[]>(() => {
    const saved = localStorage.getItem("lexi-entries");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist entries
  useEffect(() => {
    localStorage.setItem("lexi-entries", JSON.stringify(entries));
  }, [entries]);

  // Reminder system — fires at the exact scheduled time
  const firedRef = useRef<Set<string>>(new Set());
  useEffect(() => {
    if (!("Notification" in window)) return;
    Notification.requestPermission();

    const interval = setInterval(() => {
      const now = new Date();
      entries.forEach((entry) => {
        if (entry.completed) return;
        if (firedRef.current.has(entry.id)) return;
        const entryTime = new Date(`${entry.date}T${entry.time}`);
        const diff = entryTime.getTime() - now.getTime();
        // Fire when we're within 15 seconds of the scheduled time (checks every 10s)
        if (diff >= -15000 && diff <= 15000) {
          firedRef.current.add(entry.id);
          playBeep();
          if (Notification.permission === "granted") {
            new Notification(`Sofía Reminder`, {
              body: `${entry.note || CATEGORIES.find(c => c.id === entry.category)?.label} — now`,
              icon: LOGO_URL,
            });
          }
        }
      });
    }, 10000);

    return () => clearInterval(interval);
  }, [entries]);

  const addEntry = useCallback((entry: Omit<CalendarEntry, "id">) => {
    setEntries((prev) => [...prev, { ...entry, id: crypto.randomUUID() }]);
  }, []);

  const toggleComplete = useCallback((id: string) => {
    setEntries((prev) =>
      prev.map((e) => (e.id === id ? { ...e, completed: !e.completed } : e))
    );
  }, []);

  const deleteEntry = useCallback((id: string) => {
    setEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const categoryProps = (catId: CategoryId) => ({
    entries: entries.filter((e) => e.category === catId),
    addEntry,
    toggleComplete,
    deleteEntry,
  });

  return (
    <div className="min-h-screen" style={{ background: "#F7F5F0", color: "#3a2a1a" }}>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4">
        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center w-11 h-11 rounded-full backdrop-blur-md shadow-lg transition-all duration-300"
          style={{ background: "rgba(92, 107, 74, 0.85)" }}
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
          </div>
        </button>

        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="Sofía"
          className="h-20 w-20 object-contain"
          onClick={() => { setActiveView("home"); setMenuOpen(false); }}
          style={{ cursor: "pointer" }}
        />

        {/* Calendar pill */}
        <button
          onClick={() => { setActiveView("calendar"); setMenuOpen(false); }}
          className="flex items-center justify-center h-8 px-2.5 rounded-full backdrop-blur-md shadow-lg transition-all duration-300"
          style={{
            background: "rgba(92, 107, 74, 0.85)",
          }}
        >
          <span className="text-white text-[11px] tracking-[0.2em] uppercase font-medium">
            Calendar
          </span>
        </button>
      </header>

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 backdrop-blur-md overflow-y-auto"
            style={{ background: "rgba(247, 245, 240, 0.97)" }}
          >
            <div className="max-w-sm mx-auto px-8 pt-28 pb-16">
              {CATEGORIES.map((cat, idx) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => { setActiveView(cat.id); setMenuOpen(false); }}
                  className="flex items-center gap-4 w-full text-left py-4 border-b"
                  style={{ borderColor: "rgba(58, 42, 26, 0.1)" }}
                >
                  <span className="w-4 h-4 rounded-full" style={{ background: cat.color }} />
                  <span
                    className="text-lg tracking-[0.06em] uppercase"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#3a2a1a" }}
                  >
                    {cat.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ask Sofía Floating Chat Widget */}
      <AskLexiWidget />

      {/* Main Content Area */}
      <main className="pt-24 px-4 pb-12 max-w-2xl mx-auto">
        {activeView === "home" ? (
          <HomePage />
        ) : activeView === "calendar" ? (
          <CalendarView entries={entries} toggleComplete={toggleComplete} deleteEntry={deleteEntry} addEntry={addEntry} />
        ) : activeView === "mood" ? (
          <MoodPage {...categoryProps("mood")} />
        ) : activeView === "therapy" ? (
          <TherapyPage {...categoryProps("therapy")} />
        ) : activeView === "sleep" ? (
          <SleepPage {...categoryProps("sleep")} />
        ) : activeView === "nutrition" ? (
          <NutritionPage {...categoryProps("nutrition")} />
        ) : activeView === "exercise" ? (
          <ExercisePage {...categoryProps("exercise")} />
        ) : activeView === "meds" ? (
          <MedsPage {...categoryProps("meds")} />
        ) : activeView === "social" ? (
          <SocialPage {...categoryProps("social")} />
        ) : activeView === "triggers" ? (
          <TriggersPage {...categoryProps("triggers")} />
        ) : activeView === "faq" ? (
          <FAQPage />
        ) : (
          <CategoryPage
            category={CATEGORIES.find((c) => c.id === activeView)!}
            {...categoryProps(activeView)}
          />
        )}
      </main>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   CALENDAR VIEW
   ═══════════════════════════════════════════════════════════════ */

function CalendarView({
  entries,
  toggleComplete,
  deleteEntry,
  addEntry,
}: {
  entries: CalendarEntry[];
  toggleComplete: (id: string) => void;
  deleteEntry: (id: string) => void;
  addEntry: (entry: Omit<CalendarEntry, "id">) => void;
}) {
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfWeek = currentMonth.getDay();
  const today = new Date().toISOString().split("T")[0];

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const monthStr = currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" });

  const getEntriesForDate = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return entries.filter((e) => e.date === dateStr);
  };

  const selectedEntries = selectedDate ? entries.filter((e) => e.date === selectedDate) : [];

  return (
    <div>
      {/* Month header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={prevMonth} className="text-2xl px-3 py-1 rounded hover:bg-black/5 transition">&larr;</button>
        <h2
          className="text-xl tracking-[0.08em] uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
        >
          {monthStr}
        </h2>
        <button onClick={nextMonth} className="text-2xl px-3 py-1 rounded hover:bg-black/5 transition">&rarr;</button>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="text-center text-xs uppercase tracking-wider opacity-50 py-1">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 mb-8">
        {Array.from({ length: firstDayOfWeek }).map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const day = i + 1;
          const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
          const dayEntries = getEntriesForDate(day);
          const isToday = dateStr === today;
          const isSelected = dateStr === selectedDate;

          return (
            <button
              key={day}
              onClick={() => setSelectedDate(dateStr)}
              className={`aspect-square rounded-lg flex flex-col items-center justify-center gap-0.5 transition-all relative ${isToday ? "font-bold" : ""}`}
              style={{
                background: isSelected ? "rgba(92, 107, 74, 0.12)" : "transparent",
                outline: isSelected ? "2px solid #5C6B4A" : undefined,
              }}
            >
              <span className={`text-sm ${isToday ? "underline" : ""}`}>{day}</span>
              {dayEntries.length > 0 && (
                <div className="flex gap-0.5 flex-wrap justify-center max-w-full">
                  {dayEntries.slice(0, 4).map((entry) => (
                    <span
                      key={entry.id}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: CATEGORIES.find((c) => c.id === entry.category)?.color }}
                    />
                  ))}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Selected date entries */}
      {selectedDate && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t pt-6"
          style={{ borderColor: "rgba(58, 42, 26, 0.1)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm uppercase tracking-[0.1em] font-medium opacity-70">
              {new Date(selectedDate + "T12:00:00").toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h3>
            <button
              onClick={() => setShowAddForm(true)}
              className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full transition"
              style={{ background: "#5C6B4A", color: "#fff" }}
            >
              + Add
            </button>
          </div>

          {selectedEntries.length === 0 ? (
            <p className="text-sm opacity-40 italic">No entries for this day</p>
          ) : (
            <div className="flex flex-col gap-3">
              {selectedEntries
                .sort((a, b) => a.time.localeCompare(b.time))
                .map((entry) => {
                  const cat = CATEGORIES.find((c) => c.id === entry.category)!;
                  return (
                    <div
                      key={entry.id}
                      className="flex items-center gap-3 p-3 rounded-lg transition"
                      style={{ background: `${cat.color}15` }}
                    >
                      <button
                        onClick={() => toggleComplete(entry.id)}
                        className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition"
                        style={{ borderColor: cat.color, background: entry.completed ? cat.color : "transparent" }}
                      >
                        {entry.completed && <span className="text-white text-xs">✓</span>}
                      </button>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded"
                            style={{ background: cat.color, color: "#fff" }}
                          >
                            {cat.label}
                          </span>
                          <span className="text-xs opacity-50">{entry.time}</span>
                        </div>
                        {entry.note && (
                          <p className={`text-sm mt-1 ${entry.completed ? "line-through opacity-40" : ""}`}>
                            {entry.note}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => deleteEntry(entry.id)}
                        className="text-xs opacity-30 hover:opacity-70 transition"
                      >
                        ✕
                      </button>
                    </div>
                  );
                })}
            </div>
          )}

          <AnimatePresence>
            {showAddForm && (
              <AddEntryForm
                date={selectedDate}
                onAdd={(entry) => { addEntry(entry); setShowAddForm(false); }}
                onCancel={() => setShowAddForm(false)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Legend */}
      <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(58, 42, 26, 0.1)" }}>
        <div className="flex flex-wrap gap-4">
          {LOGGABLE_CATEGORIES.map((cat) => (
            <div key={cat.id} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ background: cat.color }} />
              <span className="text-xs uppercase tracking-wider opacity-60">{cat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ADD ENTRY FORM
   ═══════════════════════════════════════════════════════════════ */

function NoteInputWithVoice({ note, setNote }: { note: string; setNote: (v: string) => void }) {
  const noteRef = useRef(note);
  noteRef.current = note;
  const { isListening, toggle } = useVoiceInput(
    useCallback((text: string) => {
      const prev = noteRef.current;
      setNote((prev ? prev + " " : "") + text);
    }, [setNote])
  );
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder={isListening ? "Listening..." : "Type or tap mic to speak..."}
        className="flex-1 px-3 py-2 rounded-lg border text-sm bg-white"
        style={{ borderColor: isListening ? "#ef4444" : "rgba(58, 42, 26, 0.15)" }}
      />
      <MicButton isListening={isListening} onClick={toggle} />
    </div>
  );
}

function AddEntryForm({
  date,
  onAdd,
  onCancel,
  defaultCategory,
}: {
  date: string;
  onAdd: (entry: Omit<CalendarEntry, "id">) => void;
  onCancel: () => void;
  defaultCategory?: CategoryId;
}) {
  const [category, setCategory] = useState<CategoryId>(defaultCategory || "mood");
  const [time, setTime] = useState("09:00");
  const [note, setNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ category, date, time, note, completed: false });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      onSubmit={handleSubmit}
      className="mt-4 p-4 rounded-xl"
      style={{ background: "rgba(58, 42, 26, 0.04)" }}
    >
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="text-[10px] uppercase tracking-wider opacity-50 block mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as CategoryId)}
            className="w-full px-3 py-2 rounded-lg border text-sm bg-white"
            style={{ borderColor: "rgba(58, 42, 26, 0.15)" }}
          >
            {LOGGABLE_CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[10px] uppercase tracking-wider opacity-50 block mb-1">Time</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border text-sm bg-white"
            style={{ borderColor: "rgba(58, 42, 26, 0.15)" }}
          />
        </div>
      </div>
      <div className="mb-3">
        <label className="text-[10px] uppercase tracking-wider opacity-50 block mb-1">Note (optional)</label>
        <NoteInputWithVoice note={note} setNote={setNote} />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 py-2 rounded-lg text-sm uppercase tracking-wider text-white transition"
          style={{ background: "#5C6B4A" }}
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 rounded-lg text-sm uppercase tracking-wider opacity-50 hover:opacity-80 transition"
        >
          Cancel
        </button>
      </div>
    </motion.form>
  );
}

/* ═══════════════════════════════════════════════════════════════
   GENERIC CATEGORY PAGE (fallback)
   ═══════════════════════════════════════════════════════════════ */

interface CategoryPageProps {
  entries: CalendarEntry[];
  addEntry: (entry: Omit<CalendarEntry, "id">) => void;
  toggleComplete: (id: string) => void;
  deleteEntry: (id: string) => void;
}

function CategoryPage({
  category,
  entries,
  addEntry,
  toggleComplete,
  deleteEntry,
}: CategoryPageProps & { category: (typeof CATEGORIES)[number] }) {
  const today = new Date().toISOString().split("T")[0];
  const recentEntries = entries
    .filter((e) => e.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time))
    .slice(0, 10);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <span
          className="text-3xl w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: `${category.color}20`, color: category.color }}
        >
          {category.icon}
        </span>
        <div>
          <h1
            className="text-2xl uppercase tracking-[0.1em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}
          >
            {category.label}
          </h1>
          <p className="text-sm opacity-50 mt-1">Track and monitor your {category.label.toLowerCase()}</p>
        </div>
      </div>

      <LoggingSection
        categoryId={category.id}
        categoryColor={category.color}
        logLabel={`Log ${category.label}`}
        entries={entries}
        addEntry={addEntry}
        toggleComplete={toggleComplete}
        deleteEntry={deleteEntry}
      />

      {recentEntries.length > 0 && (
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] opacity-50 font-medium mb-3">Recent</h3>
          <div className="flex flex-col gap-2">
            {recentEntries.map((entry) => (
              <div key={entry.id} className="flex items-center gap-3 p-2 rounded-lg opacity-60" style={{ background: `${category.color}08` }}>
                <span className="text-xs w-20 shrink-0">{entry.date.slice(5)}</span>
                <span className="text-xs opacity-50">{entry.time}</span>
                <span className={`text-sm flex-1 ${entry.completed ? "line-through" : ""}`}>{entry.note || "\u2014"}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(58, 42, 26, 0.1)" }}>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-semibold" style={{ color: category.color }}>{entries.length}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-40">Total Entries</div>
          </div>
          <div>
            <div className="text-2xl font-semibold" style={{ color: category.color }}>{entries.filter((e) => e.completed).length}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-40">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-semibold" style={{ color: category.color }}>{getStreak(entries)}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-40">Day Streak</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   UTILITY FUNCTIONS
   ═══════════════════════════════════════════════════════════════ */

function getStreak(entries: CalendarEntry[]): number {
  const dates = Array.from(new Set(entries.filter((e) => e.completed).map((e) => e.date))).sort().reverse();
  if (dates.length === 0) return 0;
  let streak = 1;
  for (let i = 0; i < dates.length - 1; i++) {
    const curr = new Date(dates[i] + "T12:00:00");
    const prev = new Date(dates[i + 1] + "T12:00:00");
    const diff = (curr.getTime() - prev.getTime()) / 86400000;
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

/* ═══════════════════════════════════════════════════════════════
   VOICE-TO-TEXT HOOK — MediaRecorder + Whisper (works on iOS Safari & Chrome)
   ═══════════════════════════════════════════════════════════════ */
function useVoiceInput(onResult: (text: string) => void) {
  const [isListening, setIsListening] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const transcribeMutation = trpc.voice.transcribe.useMutation({
    onSuccess: (data) => {
      if (data.text) onResult(data.text);
      setIsTranscribing(false);
    },
    onError: (err) => {
      console.error("Transcription failed:", err);
      alert("Transcription failed. Please try again.");
      setIsTranscribing(false);
    },
  });

  const startListening = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];

      // Use audio/mp4 for Safari, audio/webm for Chrome
      const mimeType = MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/mp4")
          ? "audio/mp4"
          : "audio/webm";

      const recorder = new MediaRecorder(stream, { mimeType });
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = async () => {
        // Stop all tracks
        stream.getTracks().forEach((t) => t.stop());
        streamRef.current = null;

        if (chunksRef.current.length === 0) return;

        const blob = new Blob(chunksRef.current, { type: mimeType });
        chunksRef.current = [];

        // Convert to base64
        const arrayBuffer = await blob.arrayBuffer();
        const uint8 = new Uint8Array(arrayBuffer);
        let binary = "";
        for (let i = 0; i < uint8.length; i++) {
          binary += String.fromCharCode(uint8[i]);
        }
        const base64 = btoa(binary);

        setIsTranscribing(true);
        transcribeMutation.mutate({
          audioBase64: base64,
          mimeType: mimeType.split(";")[0],
          language: "en",
        });
      };

      recorder.start(1000); // collect in 1s chunks
      setIsListening(true);
      playBeep();
    } catch (err) {
      console.error("Microphone access denied:", err);
      alert("Please allow microphone access to use voice input.");
    }
  }, [transcribeMutation]);

  const stopListening = useCallback(() => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    setIsListening(false);
  }, []);

  const toggle = useCallback(() => {
    if (isListening) stopListening(); else startListening();
  }, [isListening, startListening, stopListening]);

  return { isListening: isListening || isTranscribing, toggle };
}

function MicButton({ isListening, onClick }: { isListening: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
        isListening
          ? "bg-red-500 text-white shadow-lg animate-pulse"
          : "text-[#5C6B4A] hover:bg-[#5C6B4A]/10"
      }`}
      style={{ border: isListening ? "none" : "2px solid #5C6B4A" }}
      title={isListening ? "Stop recording" : "Speak your entry"}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    </button>
  );
}

function playBeep() {
  try {
    const ctx = new AudioContext();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.frequency.value = 800;
    oscillator.type = "sine";
    gain.gain.value = 0.3;
    oscillator.start();
    setTimeout(() => {
      oscillator.stop();
      ctx.close();
    }, 200);
  } catch {
    // Audio not available
  }
}

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE — Dual Diagnosis: Addiction & Mood Disorders
   ═══════════════════════════════════════════════════════════════ */

function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center pt-4">
        <h1
          className="text-3xl tracking-wide mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
        >
          A Life Well Lived
        </h1>
        <p className="text-sm opacity-60 max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          A personal tool for understanding, tracking, and managing your condition.
        </p>
      </div>

      {/* ── BIPOLAR SECTION ── */}

      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>What is Bipolar Disorder?</h2>
        <p className="text-sm leading-relaxed opacity-80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Bipolar disorder is a chronic condition involving extreme shifts in mood, energy, and activity levels. These shifts go far beyond normal ups and downs. Depressive episodes bring crushing fatigue, hopelessness, and an inability to function. Manic episodes bring elevated energy, reduced need for sleep, impulsivity, and sometimes psychosis. Hypomania is a milder form that can feel productive but often leads to poor decisions.
        </p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          There are several types. Bipolar I involves full manic episodes that last at least seven days or require hospitalization. Bipolar II involves hypomanic episodes and major depressive episodes but never full mania. Cyclothymia involves chronic fluctuating mood with periods of hypomania and mild depression lasting at least two years. Each type requires different treatment strategies.
        </p>
      </section>

      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>The Neuroscience</h2>
        <p className="text-sm leading-relaxed opacity-80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Bipolar disorder involves dysregulation of multiple neurotransmitter systems. Dopamine surges during mania and crashes during depression. Serotonin, norepinephrine, and GABA are all affected. The prefrontal cortex, which handles impulse control and decision-making, shows reduced activity during episodes. The amygdala, which processes emotions, becomes hyperactive.
        </p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          This is not a willpower problem. It is a brain chemistry problem. Medication stabilizes these systems. Therapy builds the skills to manage what medication cannot. Routine protects the circadian rhythms that directly influence episode cycling.
        </p>
      </section>

      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Early Warning Signs</h2>
        <p className="text-sm leading-relaxed opacity-80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Episodes rarely arrive without warning. Depression often starts with sleep changes, social withdrawal, loss of interest, and difficulty concentrating days or weeks before the full episode hits. Mania often starts with decreased need for sleep, racing thoughts, increased talking, and taking on too many projects.
        </p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          The purpose of tracking is to catch these signals early. A mood shift from 7 to 5 over three days is information. A night of 4 hours sleep followed by feeling "great" is a red flag. Sofía helps you see these patterns before they become full episodes.
        </p>
      </section>

      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Why Routine Matters</h2>
        <p className="text-sm leading-relaxed opacity-80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Research on Interpersonal and Social Rhythm Therapy (IPSRT) shows that stabilizing daily routines is one of the most effective interventions for bipolar disorder. Consistent sleep and wake times, regular meals, structured social activity, and predictable daily rhythms protect against episode cycling.
        </p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>Sofía helps you track the pillars of stability:</p>
      </section>

      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.filter(c => c.id !== "faq").map((cat) => (
          <div key={cat.id} className="rounded-lg p-4 text-center" style={{ background: cat.color + "15", borderLeft: `3px solid ${cat.color}` }}>
            <span className="text-2xl block mb-1">{cat.icon}</span>
            <span className="text-xs uppercase tracking-wider font-medium" style={{ color: cat.color }}>{cat.label}</span>
          </div>
        ))}
      </div>

      {/* ── DUAL DIAGNOSIS SECTION ── */}

      <div className="pt-4">
        <div className="w-16 h-px mx-auto" style={{ background: "#3a2a1a", opacity: 0.2 }} />
      </div>

      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>When Addiction Enters the Picture</h2>
        <p className="text-sm leading-relaxed opacity-80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Nearly half of people with bipolar disorder also experience substance use disorder. This is called dual diagnosis. It is not a coincidence. The same brain chemistry that drives mood episodes also makes substances feel like solutions. A depressive episode makes you reach for relief. A manic episode lowers inhibition and amplifies risk-taking.
        </p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Substances change brain chemistry in the same systems that regulate mood. Alcohol suppresses serotonin. Stimulants flood and then deplete dopamine. Opioids hijack the reward circuitry. When you already have bipolar disorder, these chemical disruptions hit harder and recover slower. Withdrawal mimics and triggers mood episodes. Shame from relapse deepens depression. Without treating both conditions together, recovery from either one is significantly harder.
        </p>
      </section>

      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Catch It Before It Catches You</h2>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          The goal is not perfection. It is awareness. By logging your mood, sleep, meds, exercise, nutrition, social activity, therapy, and triggers, you start to see patterns. You notice when sleep is slipping. When you are isolating. When cravings spike after certain situations. These are the early warning signs. Sofía helps you see them before they become episodes or relapses.
        </p>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   INFORMATIONAL SECTION COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function InfoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
      <h3 className="text-base font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      <div className="text-sm leading-relaxed opacity-80 space-y-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {children}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   JOURNAL PAGE — Pure mood journal, entries first
   ═══════════════════════════════════════════════════════════════ */

function MoodPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "mood")!;
  const [showAddForm, setShowAddForm] = useState(false);
  const [voiceNote, setVoiceNote] = useState("");
  const today = new Date().toISOString().split("T")[0];
  const allEntries = props.entries
    .sort((a, b) => b.date.localeCompare(a.date) || b.time.localeCompare(a.time));
  const todayEntries = allEntries.filter((e) => e.date === today);
  const pastEntries = allEntries.filter((e) => e.date < today);

  const handleVoiceResult = useCallback((text: string) => {
    setVoiceNote((prev) => (prev ? prev + " " : "") + text);
  }, []);
  const { isListening, toggle: toggleVoice } = useVoiceInput(handleVoiceResult);

  const saveVoiceEntry = () => {
    if (!voiceNote.trim()) return;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    props.addEntry({ category: "mood", date: today, time, note: voiceNote.trim(), completed: false });
    setVoiceNote("");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl" style={{ fontFamily: "'Playfair Display', serif", color: "#3a2a1a" }}>Journal</h2>
          <p className="text-xs opacity-50 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>How are you feeling?</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="text-xs uppercase tracking-wider px-4 py-2 rounded-full text-white shadow-sm"
          style={{ background: category.color }}
        >
          + New Entry
        </button>
      </div>

      {/* Voice Journal — big mic button */}
      <div className="rounded-xl p-5" style={{ background: `${category.color}10`, border: `1px solid ${category.color}30` }}>
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={toggleVoice}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-md ${
              isListening
                ? "bg-red-500 text-white animate-pulse shadow-red-200"
                : "bg-[#5C6B4A] text-white hover:bg-[#4a5a3a]"
            }`}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="23" />
              <line x1="8" y1="23" x2="16" y2="23" />
            </svg>
          </button>
          <div className="flex-1">
            <p className="text-sm font-medium" style={{ color: "#3a2a1a" }}>
              {isListening ? "Listening... speak now" : "Tap to speak your journal entry"}
            </p>
            <p className="text-[10px] opacity-40 mt-0.5">Voice entries are saved with the current time</p>
          </div>
        </div>
        {(voiceNote || isListening) && (
          <div className="mt-3">
            <textarea
              value={voiceNote}
              onChange={(e) => setVoiceNote(e.target.value)}
              placeholder={isListening ? "Listening..." : "Your voice entry will appear here..."}
              rows={3}
              className="w-full px-3 py-2 rounded-lg border text-sm bg-white resize-none"
              style={{ borderColor: isListening ? "#ef4444" : "rgba(58, 42, 26, 0.15)" }}
            />
            <div className="flex gap-2 mt-2">
              <button
                onClick={saveVoiceEntry}
                disabled={!voiceNote.trim()}
                className="flex-1 py-2 rounded-lg text-sm uppercase tracking-wider text-white transition disabled:opacity-30"
                style={{ background: "#5C6B4A" }}
              >
                Save Entry
              </button>
              <button
                onClick={() => { setVoiceNote(""); }}
                className="px-4 py-2 rounded-lg text-sm uppercase tracking-wider opacity-50 hover:opacity-80 transition"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Add form (manual) */}
      <AnimatePresence>
        {showAddForm && (
          <AddEntryForm
            date={today}
            onAdd={(entry) => { props.addEntry({ ...entry, category: "mood" }); setShowAddForm(false); }}
            onCancel={() => setShowAddForm(false)}
          />
        )}
      </AnimatePresence>

      {/* Today's entries */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] opacity-50 font-medium mb-3">Today</h3>
        {todayEntries.length === 0 ? (
          <div className="rounded-xl p-6 text-center" style={{ background: "#E8E3DA" }}>
            <p className="text-sm opacity-40 italic">No entries yet today. How are you feeling?</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {todayEntries.map((entry) => (
              <div key={entry.id} className="rounded-xl p-4" style={{ background: `${category.color}12` }}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => props.toggleComplete(entry.id)}
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ borderColor: category.color, background: entry.completed ? category.color : "transparent" }}
                    >
                      {entry.completed && <span className="text-white text-xs">✓</span>}
                    </button>
                    <div>
                      <span className="text-xs opacity-40">{entry.time}</span>
                      {entry.note && <p className={`text-sm mt-0.5 ${entry.completed ? "line-through opacity-40" : ""}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>{entry.note}</p>}
                    </div>
                  </div>
                  <button onClick={() => props.deleteEntry(entry.id)} className="text-xs opacity-30 hover:opacity-70">✕</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Past entries */}
      {pastEntries.length > 0 && (
        <div>
          <h3 className="text-xs uppercase tracking-[0.15em] opacity-50 font-medium mb-3">Previous</h3>
          <div className="flex flex-col gap-2">
            {pastEntries.slice(0, 20).map((entry) => (
              <div key={entry.id} className="rounded-lg p-3 flex items-start gap-3" style={{ background: "#E8E3DA" }}>
                <div className="shrink-0">
                  <span className="text-xs font-medium opacity-60">{entry.date.slice(5)}</span>
                  <span className="text-xs opacity-40 ml-2">{entry.time}</span>
                </div>
                <p className={`text-sm flex-1 ${entry.completed ? "line-through opacity-40" : ""}`} style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {entry.note || "\u2014"}
                </p>
                <button onClick={() => props.deleteEntry(entry.id)} className="text-xs opacity-20 hover:opacity-60">✕</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="pt-4 border-t" style={{ borderColor: "rgba(58, 42, 26, 0.1)" }}>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-semibold" style={{ color: category.color }}>{allEntries.length}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-40">Total Entries</div>
          </div>
          <div>
            <div className="text-2xl font-semibold" style={{ color: category.color }}>{allEntries.filter((e) => e.completed).length}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-40">Completed</div>
          </div>
          <div>
            <div className="text-2xl font-semibold" style={{ color: category.color }}>{getStreak(allEntries)}</div>
            <div className="text-[10px] uppercase tracking-wider opacity-40">Day Streak</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THERAPY PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function TherapyPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "therapy")!;
  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>Therapy</h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Track sessions and build your support system</p>
      </div>

      <InfoSection title="Why Therapy is Essential">
        <p>Medication manages brain chemistry. Therapy manages the behaviors, thought patterns, and relationship dynamics that either stabilize or destabilize you. Research consistently shows that integrated treatment addressing both addiction and mood disorders simultaneously produces significantly better outcomes than treating either condition alone.</p>
      </InfoSection>

      <InfoSection title="Types of Therapy That Work">
        <p>Cognitive Behavioral Therapy (CBT) helps identify distorted thinking in both mood episodes and addiction—thoughts like "one drink won't hurt" or "nothing will ever get better." Dialectical Behavior Therapy (DBT) teaches distress tolerance so you can ride out cravings and mood episodes without acting on them. Interpersonal and Social Rhythm Therapy (IPSRT) stabilizes daily routines, which protects against both relapse and mood episodes. Many people benefit from a combination.</p>
      </InfoSection>

      <InfoSection title="How Often to Go">
        <p>Weekly sessions during unstable periods or early recovery. Biweekly during maintenance. Skipping therapy when you feel good is one of the most common mistakes. Stability is when you build the skills you will need during the next crisis. Your therapist is also an early warning system who can spot changes you cannot see in yourself.</p>
      </InfoSection>

      <InfoSection title="Group Therapy and Peer Support">
        <p>Group therapy and peer support (AA, NA, SMART Recovery, DBSA) provide accountability, community, and the experience of people who understand both conditions. They are not a replacement for individual therapy, but they fill a gap that individual therapy cannot: the knowledge that you are not alone in this, and the structure of regular attendance.</p>
      </InfoSection>

      <InfoSection title="What to Tell Your Therapist">
        <p>Everything. Holding back information about your use makes it impossible for your therapist to help you effectively. If your therapist only treats the mood disorder and does not know about the addiction, you are getting half-treatment. The best outcomes come from providers who understand both conditions and treat them as one integrated problem.</p>
      </InfoSection>

      <LoggingSection categoryId="therapy" categoryColor={category.color} logLabel="Log Session" {...props} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SLEEP PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function SleepPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "sleep")!;
  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>Sleep</h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Protect the foundation everything else is built on</p>
      </div>

      <InfoSection title="Sleep is the Number One Priority">
        <p>Sleep disruption is both the earliest warning sign and the most potent trigger for mood episodes. Even one night of lost sleep can trigger hypomania in vulnerable individuals. Poor sleep is also one of the strongest predictors of relapse. The brain's ability to resist cravings, regulate emotions, and make good decisions all depend on adequate sleep. When sleep goes, everything else follows.</p>
      </InfoSection>

      <InfoSection title="How Substances Disrupt Sleep">
        <p>Alcohol fragments sleep architecture, suppressing REM sleep and causing early morning waking. Stimulants prevent sleep onset and can cause insomnia for days. Cannabis suppresses dreaming and creates rebound insomnia during withdrawal. Opioid withdrawal causes severe insomnia. Even after substances are removed, sleep disturbance can persist for weeks or months as the brain recalibrates.</p>
      </InfoSection>

      <InfoSection title="Sleep Loss and Mood Episodes">
        <p>For bipolar disorder, decreased sleep is the single strongest trigger for mania. The feedback loop is dangerous: less sleep leads to more energy, which leads to even less sleep, which leads to a full episode. For depression, irregular sleep timing deepens the episode. Maintaining a consistent wake time, even during depression, is one of the most effective interventions.</p>
      </InfoSection>

      <InfoSection title="Sleep Hygiene Rules">
        <p>Same bedtime and wake time every day, including weekends. No screens one hour before bed. Dark, cool room. No caffeine after noon. No alcohol—it fragments sleep even if it helps you fall asleep. If you cannot sleep after 20 minutes, get up and do something boring until drowsy. The margin for error is smaller when you are managing both conditions.</p>
      </InfoSection>

      <InfoSection title="What to Track">
        <p>Log hours slept, time to bed, time awake, and quality on a 1 to 10 scale. Over time, you will see the correlation between sleep changes and both mood shifts and craving intensity. Often the sleep change comes 2 to 3 days before the mood change or craving spike. That is your early warning window.</p>
      </InfoSection>

      <LoggingSection categoryId="sleep" categoryColor={category.color} logLabel="Log Sleep" {...props} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NUTRITION PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function NutritionPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "nutrition")!;
  const [openDessert, setOpenDessert] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>Nutrition</h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Under 20g net carbs · Equal protein & fat</p>
      </div>

      {/* THE APPROACH */}
      <InfoSection title="The Approach">
        <p>This is a modified ketogenic protocol: under 20 grams of net carbs per day with roughly equal amounts of protein and fat. Unlike traditional keto, the goal is not to load up on fat. Protein is prioritized equally. No breakfast. Two meals and a snack window. Simple, repeatable, and designed for people who need stable blood sugar and stable mood without the complexity of calorie counting.</p>
      </InfoSection>

      {/* LUNCH */}
      <InfoSection title="Lunch — Salads with Protein">
        <p>The base is always a large salad: romaine, spinach, or mixed greens. Top with a generous portion of protein. Dressing should be full-fat and low-sugar (ranch, blue cheese, olive oil and vinegar, Caesar).</p>
        <div className="mt-3 space-y-2">
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Tuna salad</strong> — canned tuna mixed with mayo, celery, on a bed of greens</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Grilled chicken</strong> — sliced chicken breast or thigh over salad with avocado</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Salmon</strong> — baked or canned salmon with cucumber, tomato, and olive oil</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Steak salad</strong> — sliced steak over arugula with parmesan and lemon</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Shrimp</strong> — grilled shrimp with spinach, feta, and a squeeze of lemon</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Egg salad</strong> — hard-boiled eggs with mayo, mustard, over greens</span></div>
        </div>
      </InfoSection>

      {/* SNACKS */}
      <InfoSection title="Snacks — Between Lunch & Dinner">
        <p>Keep it simple. These are grab-and-go options that keep you in ketosis without spiking blood sugar.</p>
        <div className="mt-3 space-y-2">
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Nuts</strong> — almonds, macadamias, pecans, walnuts (avoid cashews, higher carb)</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Cheese</strong> — string cheese, cheddar cubes, brie, or cream cheese on celery</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Carrot sticks</strong> — small portion (carrots have some carbs, keep to a handful)</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Celery with ranch</strong> — full-fat ranch dressing as a dip</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Pork rinds</strong> — zero carb, crunchy, satisfies the chip craving</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Olives</strong> — healthy fat, virtually zero carb</span></div>
        </div>
      </InfoSection>

      {/* DINNER */}
      <InfoSection title="Dinner — Protein & Vegetables">
        <p>Dinner is straightforward: a solid portion of protein with a side of low-carb vegetables. Cook with butter, olive oil, or avocado oil. Season generously.</p>
        <div className="mt-3 space-y-2">
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Proteins:</strong> chicken thighs, steak, pork chops, salmon, ground beef, shrimp, lamb</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Vegetables:</strong> broccoli, cauliflower, zucchini, green beans, asparagus, Brussels sprouts, spinach</span></div>
          <div className="flex items-start gap-2"><span className="font-bold text-sm" style={{ color: category.color }}>•</span><span><strong>Avoid:</strong> potatoes, rice, pasta, bread, corn, peas</span></div>
        </div>
      </InfoSection>

      {/* DESSERT */}
      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h3 className="text-base font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Dessert — Sugar-Free Options</h3>
        <p className="text-sm leading-relaxed opacity-80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>Having something sweet after dinner helps with adherence. These are all sugar-free and widely available. Stick to one or two pieces.</p>

        {/* Russell Stover */}
        <button
          onClick={() => setOpenDessert(openDessert === "russell" ? null : "russell")}
          className="w-full flex items-center justify-between py-3 border-b border-stone-300"
        >
          <span className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Russell Stover Sugar Free</span>
          <span className="text-xs opacity-40">{openDessert === "russell" ? "▲" : "▼"}</span>
        </button>
        {openDessert === "russell" && (
          <div className="py-3 space-y-1.5 text-sm opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <p className="text-xs opacity-60 mb-2">Made with Stevia extract. America's #1 sugar-free chocolate brand.</p>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Peanut Butter Cups</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Pecan Delights</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Dark Chocolate Mint Patties</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Caramel in Chocolate</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Coconut in Chocolate</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Toffee Squares in Chocolate</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Dark Chocolate Medallions</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Strawberry Flavored Crème</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Peanut, Caramel & Nougat</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Dark Chocolate Pecan Delights</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Caramel Chocolate Tiles</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Fruit Chews</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Salt Water Taffy</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Assorted Fruit Hard Candy</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Cinnamon Hard Candy</span></div>
          </div>
        )}

        {/* Hershey's */}
        <button
          onClick={() => setOpenDessert(openDessert === "hershey" ? null : "hershey")}
          className="w-full flex items-center justify-between py-3 border-b border-stone-300"
        >
          <span className="text-sm font-semibold" style={{ fontFamily: "'DM Sans', sans-serif" }}>Hershey's Zero Sugar</span>
          <span className="text-xs opacity-40">{openDessert === "hershey" ? "▲" : "▼"}</span>
        </button>
        {openDessert === "hershey" && (
          <div className="py-3 space-y-1.5 text-sm opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <p className="text-xs opacity-60 mb-2">Sweetened with sugar alcohols. About 20% fewer calories than classic versions.</p>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Reese's Zero Sugar Peanut Butter Cups</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>York Zero Sugar Peppermint Patties</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Hershey's Zero Sugar Chocolate Bars</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Hershey's Special Dark Zero Sugar</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Hershey's Zero Sugar Caramel Filled</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Jolly Rancher Zero Sugar Hard Candy</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Jolly Rancher Zero Sugar Gummies</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Twizzlers Zero Sugar Strawberry Twists</span></div>
            <div className="flex items-start gap-2"><span style={{ color: category.color }}>•</span><span>Ice Breakers Sugar-Free Mints</span></div>
          </div>
        )}
      </section>

      {/* IMPORTANT NOTES */}
      <InfoSection title="Important Notes">
        <p><strong>No breakfast.</strong> Intermittent fasting (skipping breakfast) helps maintain ketosis and improves insulin sensitivity. Drink water, black coffee, or tea in the morning.</p>
        <p><strong>Hydration.</strong> Drink at least 8 glasses of water per day. Low-carb diets are diuretic. Add electrolytes (sodium, potassium, magnesium) especially in the first two weeks.</p>
        <p><strong>Sugar alcohols.</strong> The sugar-free desserts use sugar alcohols or stevia. Some people experience digestive discomfort if they eat too many. Start with one piece and see how you feel.</p>
        <p><strong>Medication interactions.</strong> If you take lithium, changes in sodium and hydration can affect your levels. Talk to your prescriber before making major dietary changes.</p>
      </InfoSection>

      <LoggingSection categoryId="nutrition" categoryColor={category.color} logLabel="Log Meal" {...props} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXERCISE PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function ExercisePage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "exercise")!;
  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>Exercise</h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Move your body, heal your brain</p>
      </div>

      <InfoSection title="HOTWORX">
        <p>Infrared sauna workouts that combine heat therapy with exercise. The infrared heat penetrates deep into muscle tissue, increasing circulation and accelerating recovery. Sessions typically run 30 to 40 minutes and include isometric exercises, hot yoga, Pilates, and HIIT variations performed inside the sauna. The heat amplifies calorie burn and promotes detoxification through sweat. The controlled environment also has a calming effect on the nervous system, which can help with anxiety and mood regulation. Start with 2 to 3 sessions per week and hydrate aggressively before and after.</p>
      </InfoSection>

      <InfoSection title="Pilates">
        <p>Pilates builds core strength, flexibility, and body awareness through controlled, low-impact movements. It strengthens the deep stabilizing muscles of the trunk, improves posture, and reduces chronic pain. For mood disorders, the mind-body connection required in Pilates acts as a form of moving meditation — you have to focus on breath and alignment, which pulls attention away from rumination and anxiety. Reformer Pilates adds resistance for a more challenging workout. Mat Pilates is accessible anywhere. Aim for 2 to 3 sessions per week.</p>
      </InfoSection>

      <InfoSection title="Walking">
        <p>The most underrated form of exercise. Walking requires no equipment, no gym membership, and no recovery time. A 30-minute walk elevates serotonin and BDNF (brain-derived neurotrophic factor), which supports neuroplasticity and mood regulation. Walking outdoors adds the benefit of sunlight exposure, which regulates circadian rhythm and vitamin D production. It is also a reliable tool for managing cravings — when an urge hits, a 15-minute walk can reduce its intensity significantly. Build a daily walking habit. Morning walks are especially effective for setting your internal clock.</p>
      </InfoSection>

      <InfoSection title="5K Training">
        <p>Training for a 5K gives exercise a concrete goal and a timeline, which adds structure and accountability. A standard Couch to 5K program takes 8 to 9 weeks and alternates walking and running intervals that gradually increase in duration. The progression is designed so that anyone can complete it regardless of current fitness level. The sense of accomplishment from finishing a 5K is a powerful mood booster and builds self-efficacy — the belief that you can set a goal and follow through. Sign up for an actual race to add external accountability. Run with a friend or group if possible.</p>
        <div className="mt-3 space-y-1">
          <p className="font-semibold text-xs">Sample Week 1:</p>
          <p>Alternate 60 seconds jogging / 90 seconds walking for 20 minutes, 3 days</p>
          <p className="font-semibold text-xs mt-2">Sample Week 5:</p>
          <p>Jog 5 minutes, walk 3 minutes, jog 5 minutes, walk 3 minutes, jog 5 minutes</p>
          <p className="font-semibold text-xs mt-2">Race Day:</p>
          <p>Run 3.1 miles continuously at a comfortable pace</p>
        </div>
      </InfoSection>

      <InfoSection title="Weight Lifting">
        <p>Resistance training is essential for bone density, which decreases with age, certain medications (like lithium and anticonvulsants), and sedentary periods during depressive episodes. Weight-bearing exercise stimulates osteoblasts — the cells that build new bone — and is one of the most effective ways to prevent osteoporosis. Beyond bone health, lifting weights increases lean muscle mass, improves insulin sensitivity, boosts resting metabolism, and has a direct antidepressant effect through increased BDNF and endorphin release.</p>
        <div className="mt-3 space-y-1">
          <p className="font-semibold text-xs">Getting Started:</p>
          <p>Start with bodyweight exercises (squats, lunges, push-ups) or light dumbbells. Focus on compound movements that work multiple muscle groups. Aim for 2 to 3 sessions per week with at least one rest day between sessions. Progressive overload — gradually increasing weight or reps — is the key to continued benefit. Consider working with a trainer for the first few sessions to learn proper form and prevent injury.</p>
          <p className="font-semibold text-xs mt-2">Key Compound Movements:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Squats — legs, glutes, core</li>
            <li>Deadlifts — posterior chain, grip strength</li>
            <li>Bench press — chest, shoulders, triceps</li>
            <li>Rows — back, biceps, posture</li>
            <li>Overhead press — shoulders, core stability</li>
          </ul>
        </div>
      </InfoSection>

      <InfoSection title="When Exercise Becomes a Problem">
        <p>Over-exercise can trigger hypomania in people with bipolar disorder. It can also become a substitute addiction. Warning signs include working out twice a day, inability to take rest days, exercising through injury, and feeling anxious or guilty when you miss a session. Moderation and consistency are the goals. Listen to your body. Rest is part of the program.</p>
      </InfoSection>

      <LoggingSection categoryId="exercise" categoryColor={category.color} logLabel="Log Exercise" {...props} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MEDS PAGE — FAQ Format + Medication Reference
   ═══════════════════════════════════════════════════════════════ */

const MED_CATEGORIES = [
  {
    category: "Antidepressants",
    description: "Target serotonin, norepinephrine, and dopamine systems to lift depressive episodes. In people with co-occurring addiction, the choice of antidepressant matters because some carry higher abuse potential or dangerous interactions with substances.",
    meds: [
      {
        id: "sertraline",
        name: "Sertraline (Zoloft)",
        description: "SSRI. One of the most studied antidepressants for co-occurring alcohol use disorder. Takes 4 to 6 weeks for full effect. Relatively safe in overdose. Alcohol reduces its efficacy and worsens side effects like dizziness and drowsiness. Do not stop abruptly — taper under medical supervision to avoid discontinuation syndrome.",
        commonDoses: ["25mg", "50mg", "100mg", "150mg", "200mg"],
      },
      {
        id: "fluoxetine",
        name: "Fluoxetine (Prozac)",
        description: "SSRI with the longest half-life, which makes missed doses less destabilizing. FDA-approved for depression, OCD, panic disorder, and bulimia. Less sedating than other SSRIs. Can cause activation and insomnia in some people. Interacts with many substances through the CYP2D6 enzyme pathway — tell your prescriber about everything you take.",
        commonDoses: ["10mg", "20mg", "40mg", "60mg"],
      },
      {
        id: "bupropion",
        name: "Bupropion (Wellbutrin)",
        description: "NDRI — works on norepinephrine and dopamine instead of serotonin. Unique among antidepressants because it also reduces nicotine and stimulant cravings. No sexual side effects (common with SSRIs). Lowers seizure threshold, so it is contraindicated in people with seizure disorders, eating disorders, or heavy alcohol use. Not appropriate during active alcohol withdrawal.",
        commonDoses: ["150mg SR", "300mg SR", "150mg XL", "300mg XL", "450mg XL"],
      },
      {
        id: "mirtazapine",
        name: "Mirtazapine (Remeron)",
        description: "Atypical antidepressant that also helps with insomnia and appetite loss — two common problems in early recovery. Sedating at lower doses, less so at higher doses. Weight gain is a common side effect. Some evidence for reducing alcohol cravings. Avoid combining with alcohol or benzodiazepines due to additive sedation.",
        commonDoses: ["7.5mg", "15mg", "30mg", "45mg"],
      },
      {
        id: "venlafaxine",
        name: "Venlafaxine (Effexor)",
        description: "SNRI — works on both serotonin and norepinephrine. Effective for depression with prominent anxiety or chronic pain. Requires consistent dosing; missed doses cause rapid withdrawal symptoms (brain zaps, nausea, irritability). This makes it a poor choice for people who frequently miss doses. Blood pressure monitoring required at higher doses.",
        commonDoses: ["37.5mg", "75mg", "150mg", "225mg"],
      },
    ],
  },
  {
    category: "Mood Stabilizers",
    description: "Prevent the extreme highs and lows of bipolar disorder and reduce emotional volatility. For people with addiction, mood stabilizers are critical because untreated mood swings are one of the strongest relapse triggers.",
    meds: [
      {
        id: "lithium",
        name: "Lithium",
        description: "The gold standard for bipolar disorder since the 1970s. Reduces suicide risk more than any other psychiatric medication. Requires regular blood level monitoring (therapeutic range is narrow). Dehydration from alcohol use, vomiting, or excessive sweating can push lithium to toxic levels. Symptoms of toxicity include tremor, confusion, and nausea. Kidney and thyroid function must be monitored long-term.",
        commonDoses: ["300mg", "450mg", "600mg", "900mg", "1200mg"],
      },
      {
        id: "depakote",
        name: "Depakote (Divalproex)",
        description: "Anticonvulsant used as a mood stabilizer. Particularly effective for rapid cycling and mixed episodes. Also has some evidence for reducing impulsivity, which is relevant to addiction. Liver function must be monitored — heavy alcohol use combined with Depakote significantly increases liver damage risk. Weight gain and hair thinning are common side effects. Contraindicated in pregnancy.",
        commonDoses: ["250mg", "500mg", "750mg", "1000mg", "1500mg"],
      },
      {
        id: "lamotrigine",
        name: "Lamotrigine (Lamictal)",
        description: "Anticonvulsant primarily used to prevent bipolar depressive episodes. One of the better-tolerated mood stabilizers — fewer cognitive side effects than lithium or Depakote. Must be titrated slowly over 6 to 8 weeks to avoid a rare but serious skin reaction (Stevens-Johnson syndrome). Any rash during titration requires immediate medical attention. Relatively safe with moderate alcohol use but alcohol still undermines its mood-stabilizing effect.",
        commonDoses: ["25mg", "50mg", "100mg", "200mg", "300mg"],
      },
      {
        id: "carbamazepine",
        name: "Carbamazepine (Tegretol)",
        description: "Anticonvulsant mood stabilizer. Used when lithium and Depakote are not tolerated. Also used for alcohol withdrawal seizure prevention. Induces liver enzymes, which means it can reduce the effectiveness of many other medications including birth control. Blood count monitoring required due to rare risk of aplastic anemia. Interacts with grapefruit juice.",
        commonDoses: ["200mg", "400mg", "600mg", "800mg", "1200mg"],
      },
    ],
  },
  {
    category: "Antipsychotics",
    description: "Originally developed for schizophrenia, atypical antipsychotics are now widely used for bipolar disorder, treatment-resistant depression, and agitation. They work primarily by modulating dopamine and serotonin receptors.",
    meds: [
      {
        id: "seroquel",
        name: "Quetiapine (Seroquel)",
        description: "One of the most prescribed psychiatric medications. FDA-approved for bipolar mania, bipolar depression, and as an add-on for major depression. At low doses (25 to 100mg) it is primarily sedating and used for insomnia. At higher doses (300 to 800mg) it has full antipsychotic and mood-stabilizing effects. Weight gain and metabolic syndrome are significant long-term risks. Blood sugar and cholesterol should be monitored. Combining with alcohol or opioids increases sedation dangerously.",
        commonDoses: ["25mg", "50mg", "100mg", "200mg", "300mg", "400mg"],
      },
      {
        id: "aripiprazole",
        name: "Aripiprazole (Abilify)",
        description: "Partial dopamine agonist — it stabilizes dopamine rather than simply blocking it. Less sedating and less metabolic impact than Seroquel. FDA-approved for bipolar mania, schizophrenia, and as an add-on for depression. Available as a monthly injection (Abilify Maintena) for people who struggle with daily pill adherence. Can cause akathisia (restlessness) which is sometimes mistaken for anxiety.",
        commonDoses: ["2mg", "5mg", "10mg", "15mg", "20mg", "30mg"],
      },
      {
        id: "olanzapine",
        name: "Olanzapine (Zyprexa)",
        description: "Potent antipsychotic effective for acute mania and psychotic features. Works quickly for agitation. The combination of olanzapine and fluoxetine (Symbyax) is FDA-approved for bipolar depression. Major downside is weight gain — average of 10 to 15 pounds in the first year. Increases risk of diabetes. Requires metabolic monitoring. Very sedating, which can be therapeutic for insomnia but problematic for daily functioning.",
        commonDoses: ["2.5mg", "5mg", "10mg", "15mg", "20mg"],
      },
      {
        id: "risperidone",
        name: "Risperidone (Risperdal)",
        description: "Effective for mania and psychotic symptoms. Available as a long-acting injection (Risperdal Consta) given every two weeks. At higher doses, can cause elevated prolactin levels leading to breast tenderness, menstrual changes, or sexual dysfunction. Less weight gain than olanzapine but more than aripiprazole. Can cause movement side effects (EPS) at higher doses.",
        commonDoses: ["0.5mg", "1mg", "2mg", "3mg", "4mg"],
      },
      {
        id: "lurasidone",
        name: "Lurasidone (Latuda)",
        description: "FDA-approved specifically for bipolar depression. Must be taken with food (at least 350 calories) for proper absorption. Lower metabolic risk than most other antipsychotics — less weight gain, less impact on blood sugar and cholesterol. Can cause nausea and akathisia. One of the better options when metabolic side effects are a concern.",
        commonDoses: ["20mg", "40mg", "60mg", "80mg", "120mg"],
      },
    ],
  },
];

/* Flat list for logging */
const ALL_MEDICATIONS = MED_CATEGORIES.flatMap((cat) => cat.meds);

function MedsPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "meds")!;
  const [expandedCat, setExpandedCat] = useState<string | null>("Antidepressants");
  const [selectedMed, setSelectedMed] = useState<string | null>(null);
  const [showLogForm, setShowLogForm] = useState(false);
  const [logDose, setLogDose] = useState("");
  const [logTime, setLogTime] = useState("09:00");
  const today = new Date().toISOString().split("T")[0];
  const todayEntries = props.entries.filter((e) => e.date === today);

  const handleLogMed = (medName: string, dose: string, time: string) => {
    props.addEntry({
      category: "meds",
      date: today,
      time,
      note: `${medName}: ${dose}`,
      completed: false,
    });
    setShowLogForm(false);
    setSelectedMed(null);
    setLogDose("");
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>Medications</h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Antidepressants, mood stabilizers, antipsychotics</p>
      </div>

      {/* Category sections */}
      {MED_CATEGORIES.map((medCat) => (
        <div key={medCat.category}>
          {/* Category header — clickable to expand/collapse */}
          <button
            onClick={() => setExpandedCat(expandedCat === medCat.category ? null : medCat.category)}
            className="w-full text-left flex items-center justify-between py-3 border-b"
            style={{ borderColor: "rgba(58, 42, 26, 0.15)" }}
          >
            <h3 className="text-lg" style={{ fontFamily: "'Playfair Display', serif", color: "#3a2a1a" }}>{medCat.category}</h3>
            <span className="text-sm opacity-40 transition-transform" style={{ transform: expandedCat === medCat.category ? "rotate(180deg)" : "rotate(0)" }}>
              ▼
            </span>
          </button>

          <AnimatePresence>
            {expandedCat === medCat.category && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {/* Category description */}
                <p className="text-sm opacity-60 leading-relaxed mt-3 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {medCat.description}
                </p>

                {/* Individual medication cards */}
                <div className="flex flex-col gap-3">
                  {medCat.meds.map((med) => (
                    <div
                      key={med.id}
                      className="p-4 rounded-xl border transition-all"
                      style={{
                        borderColor: selectedMed === med.id ? category.color : "rgba(58, 42, 26, 0.1)",
                        background: selectedMed === med.id ? `${category.color}08` : "white",
                      }}
                    >
                      <h4 className="text-base font-semibold" style={{ color: "#3a2a1a" }}>{med.name}</h4>
                      <p className="text-sm opacity-60 mt-2 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>{med.description}</p>

                      <div className="mt-3 flex items-center gap-2 flex-wrap">
                        <button
                          onClick={() => { setSelectedMed(med.id); setShowLogForm(true); }}
                          className="text-xs uppercase tracking-wider px-3 py-1.5 rounded-full text-white transition"
                          style={{ background: category.color }}
                        >
                          + Log Dose
                        </button>
                        <span className="text-xs opacity-40">
                          Doses: {med.commonDoses.join(", ")}
                        </span>
                      </div>

                      {showLogForm && selectedMed === med.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-3 pt-3 border-t flex items-center gap-2 flex-wrap"
                          style={{ borderColor: "rgba(58, 42, 26, 0.1)" }}
                        >
                          <select
                            value={logDose}
                            onChange={(e) => setLogDose(e.target.value)}
                            className="px-2 py-1.5 rounded-lg border text-sm bg-white"
                            style={{ borderColor: "rgba(58, 42, 26, 0.15)" }}
                          >
                            <option value="">Select dose</option>
                            {med.commonDoses.map((d) => (
                              <option key={d} value={d}>{d}</option>
                            ))}
                          </select>
                          <input
                            type="time"
                            value={logTime}
                            onChange={(e) => setLogTime(e.target.value)}
                            className="px-2 py-1.5 rounded-lg border text-sm bg-white"
                            style={{ borderColor: "rgba(58, 42, 26, 0.15)" }}
                          />
                          <button
                            onClick={() => logDose && handleLogMed(med.name, logDose, logTime)}
                            className="px-3 py-1.5 rounded-lg text-xs uppercase tracking-wider text-white"
                            style={{ background: logDose ? category.color : "#ccc" }}
                            disabled={!logDose}
                          >
                            Save
                          </button>
                          <button
                            onClick={() => { setShowLogForm(false); setSelectedMed(null); }}
                            className="text-xs opacity-40 hover:opacity-70"
                          >
                            Cancel
                          </button>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      {/* Today's med log */}
      {todayEntries.length > 0 && (
        <div className="pt-4">
          <h3 className="text-xs uppercase tracking-[0.15em] opacity-50 font-medium mb-3">Today's Doses</h3>
          <div className="flex flex-col gap-2">
            {todayEntries.map((entry) => (
              <div key={entry.id} className="flex items-center gap-3 p-3 rounded-lg" style={{ background: `${category.color}10` }}>
                <button
                  onClick={() => props.toggleComplete(entry.id)}
                  className="w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0"
                  style={{ borderColor: category.color, background: entry.completed ? category.color : "transparent" }}
                >
                  {entry.completed && <span className="text-white text-xs">✓</span>}
                </button>
                <div className="flex-1">
                  <span className="text-xs opacity-50">{entry.time}</span>
                  {entry.note && <p className={`text-sm ${entry.completed ? "line-through opacity-40" : ""}`}>{entry.note}</p>}
                </div>
                <button onClick={() => props.deleteEntry(entry.id)} className="text-xs opacity-30 hover:opacity-70">✕</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SOCIAL PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function SocialPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "social")!;
  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>Social</h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Build the network that keeps you stable</p>
      </div>

      <InfoSection title="The Danger of Isolation">
        <p>Isolation is one of the most dangerous states for someone with co-occurring disorders. It removes accountability, eliminates external reality checks, and allows both distorted thinking and craving cycles to go unchallenged. Social connection is a fundamental human need and a powerful protective factor against both depression and relapse.</p>
      </InfoSection>

      <InfoSection title="Navigating Social Situations">
        <p>Early in recovery, avoid situations where people are drinking or using. This is not weakness; it is strategy. As you build stability, you can gradually reintroduce social situations with a plan: bring a sober support person, have an exit strategy, keep a non-alcoholic drink in hand, and leave when you feel uncomfortable. Never test your willpower when you do not have to.</p>
      </InfoSection>

      <InfoSection title="Rebuilding Your Social Circle">
        <p>You may need to build an entirely new social network. Recovery meetings (AA, NA, SMART Recovery), group therapy, volunteer work, and hobby-based communities are all places to find people who support your recovery. The people who only want to be around you when you are using are not your support system.</p>
      </InfoSection>

      <InfoSection title="Over-Socializing and Mood">
        <p>During hypomania, the instinct is to say yes to everything, stay out late, talk to everyone. This feels amazing but it disrupts sleep, overstimulates the brain, and can accelerate into full mania. The key is recognizing when your social drive is elevated beyond your baseline. If you are suddenly the life of every party, that is data, not just personality.</p>
      </InfoSection>

      <InfoSection title="What to Track">
        <p>Log who you saw, for how long, and how you felt after. Note whether the interaction was in a recovery-supportive environment or a high-risk one. Over time, you will identify which relationships energize versus drain you, and whether your social patterns are shifting in ways that predict episodes or relapse risk.</p>
      </InfoSection>

      <LoggingSection categoryId="social" categoryColor={category.color} logLabel="Log Social" {...props} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TRIGGERS PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function TriggersPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "triggers")!;
  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>Triggers</h2>
        <p className="text-xs opacity-50 mt-1 max-w-sm mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>Know what destabilizes you before it happens</p>
      </div>

      <InfoSection title="What Are Triggers">
        <p>Triggers are situations, emotions, people, places, or internal states that increase the risk of either a mood episode or a relapse. Triggers often overlap: the same stressor that destabilizes your mood also activates cravings. Identifying your personal triggers is the first line of defense because you cannot manage what you do not recognize.</p>
      </InfoSection>

      <InfoSection title="HALT: Hungry, Angry, Lonely, Tired">
        <p>These four basic states are the most common precursors to both mood destabilization and relapse. They are deceptively simple but profoundly dangerous. When you are in a HALT state, your brain's prefrontal cortex (the part that makes good decisions) is compromised. Checking in with yourself using HALT before any major decision is a foundational recovery skill.</p>
      </InfoSection>

      <InfoSection title="Emotional vs. Environmental Triggers">
        <p>Emotional triggers are internal states like shame, boredom, excitement, loneliness, or anger that activate craving or mood instability. Environmental triggers are external: a bar you used to drink at, a person you used with, a song associated with past use, or even a time of day. Both types require different strategies. Emotional triggers need coping skills. Environmental triggers need avoidance or reframing.</p>
      </InfoSection>

      <InfoSection title="Positive Events as Triggers">
        <p>Falling in love, getting a promotion, celebrating a milestone, or any intense positive emotion can trigger hypomania. Celebrations are also high-risk because they are culturally associated with substance use. Positive triggers are harder to recognize because they feel good, which makes them more dangerous.</p>
      </InfoSection>

      <InfoSection title="Building a Trigger Management Plan">
        <p>List your known triggers. For each one, write down the early warning signs (what you feel in your body and mind), the action plan (what you will do instead of using or spiraling), and the support contact (who you will call). Review this plan with your therapist. Keep it accessible on your phone. The time to build the plan is when you are stable, not when you are in crisis.</p>
      </InfoSection>

      <LoggingSection categoryId="triggers" categoryColor={category.color} logLabel="Log Trigger" {...props} />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   FAQ PAGE — Mega FAQ combining all category questions
   ═══════════════════════════════════════════════════════════════ */

const FAQ_SECTIONS = [
  {
    title: "Mood",
    icon: "\u{1F30A}",
    color: "#C9A96E",
    items: [
      { q: "How does addiction affect mood stability?", a: "Substances directly alter the neurotransmitter systems that regulate mood. Alcohol depletes serotonin over time. Stimulants cause dopamine crashes. Even after you stop using, your brain's mood regulation system can take months to recalibrate. During that window, mood swings are more frequent and more intense." },
      { q: "Why do mood episodes trigger cravings?", a: "During depressive episodes, the brain seeks relief from emotional pain, and substances offer fast but temporary relief. During manic or hypomanic episodes, impulsivity increases and risk assessment decreases, making it easier to justify using." },
      { q: "How do I tell the difference between withdrawal and a mood episode?", a: "They can look identical. The key differentiator is timeline. Withdrawal symptoms follow a predictable arc after your last use. Mood episodes can emerge at any time. Logging both your substance use and your mood helps your provider distinguish between them." },
    ],
  },
  {
    title: "Therapy",
    icon: "\u{1F9E0}",
    color: "#5C6B4A",
    items: [
      { q: "Why is therapy essential?", a: "Medication manages brain chemistry. Therapy manages the behaviors, thought patterns, and relationship dynamics that either stabilize or destabilize you. Integrated treatment addressing both conditions simultaneously produces significantly better outcomes than treating either alone." },
      { q: "What types of therapy work best?", a: "CBT helps identify distorted thinking. DBT teaches distress tolerance so you can ride out cravings and mood episodes without acting on them. IPSRT stabilizes daily routines. Many people benefit from a combination." },
      { q: "How often should I go?", a: "Weekly during unstable periods or early recovery. Biweekly during maintenance. Skipping therapy when you feel good is one of the most common mistakes. Stability is when you build the skills you will need during the next crisis." },
    ],
  },
  {
    title: "Sleep",
    icon: "\u{1F319}",
    color: "#5A6B7A",
    items: [
      { q: "Why is sleep the number one priority?", a: "Sleep disruption is both the earliest warning sign and the most potent trigger for mood episodes. Even one night of lost sleep can trigger hypomania. Poor sleep is also one of the strongest predictors of relapse." },
      { q: "How do substances disrupt sleep?", a: "Alcohol fragments sleep architecture. Stimulants prevent sleep onset. Cannabis suppresses dreaming and creates rebound insomnia during withdrawal. Even after substances are removed, sleep disturbance can persist for weeks or months." },
      { q: "What are the non-negotiable sleep rules?", a: "Same bedtime and wake time every day. No screens one hour before bed. Dark, cool room. No caffeine after noon. No alcohol. If you cannot sleep after 20 minutes, get up and do something boring until drowsy." },
    ],
  },
  {
    title: "Nutrition",
    icon: "\u{1F96C}",
    color: "#7A9E7E",
    items: [
      { q: "Why does nutrition matter?", a: "Your brain consumes 20% of your daily calories despite being only 2% of your body weight. What you eat directly impacts neurotransmitter production, inflammation levels, and gut-brain signaling. Chronic substance use depletes essential nutrients." },
      { q: "How does blood sugar affect mood and cravings?", a: "Blood sugar spikes and crashes can mimic or trigger mood episodes and amplify cravings. The crash after a sugar spike feels similar to the come-down from substances. Eat protein with every meal, prioritize complex carbs, and avoid long gaps between meals." },
      { q: "What about the gut-brain connection?", a: "90% of serotonin is produced in the gut. Chronic alcohol use, poor diet, and antibiotics disrupt the microbiome, which directly impacts mood regulation and craving intensity. Fermented foods, fiber, and diverse plant intake support a healthy microbiome." },
    ],
  },
  {
    title: "Exercise",
    icon: "\u{1F3C3}",
    color: "#B8704A",
    items: [
      { q: "How does exercise help?", a: "Exercise directly impacts serotonin, dopamine, norepinephrine, and BDNF. For depression, aerobic exercise has been shown to be as effective as antidepressants for mild-to-moderate cases. For addiction, exercise provides a natural dopamine release that reduces craving intensity." },
      { q: "Can exercise replace the high from substances?", a: "Not exactly, but it activates overlapping reward pathways. The endorphin release engages the same opioid receptors that substances target, just at a lower, sustainable level. People who exercise regularly in early recovery have significantly lower relapse rates." },
      { q: "Can too much exercise be a problem?", a: "Yes. Over-exercise can trigger hypomania. It can also become a substitute addiction. Warning signs include working out twice a day, inability to rest, exercising through injury, and feeling anxious when you miss a session." },
    ],
  },
  {
    title: "Medications",
    icon: "\u{1F48A}",
    color: "#8B6B7A",
    items: [
      { q: "Can I drink alcohol on psychiatric medications?", a: "In almost all cases, no. Alcohol interacts dangerously with lithium, benzodiazepines, antidepressants, and antipsychotics. Beyond interactions, alcohol destabilizes the mood you are trying to stabilize." },
      { q: "What medications help with both conditions?", a: "Naltrexone reduces alcohol and opioid cravings while being safe with most mood stabilizers. Gabapentin helps with anxiety, sleep, and alcohol cravings. Bupropion can help with both depression and nicotine/stimulant cravings." },
      { q: "What if I relapse while on medication?", a: "Do not stop your medication. Contact your prescriber. A relapse does not erase the progress your medication has made. Stopping medication during a relapse creates a double crisis." },
    ],
  },
  {
    title: "Social",
    icon: "\u{1F465}",
    color: "#5A7B9E",
    items: [
      { q: "How do I handle social situations where people are using?", a: "Early in recovery, avoid them entirely. As you build stability, reintroduce social situations with a plan: bring a sober support person, have an exit strategy, and leave when you feel uncomfortable. Never test your willpower when you do not have to." },
      { q: "What if my social circle revolves around substance use?", a: "You may need to build an entirely new social network. Recovery meetings, group therapy, volunteer work, and hobby-based communities are all places to find people who support your recovery." },
      { q: "How does over-socializing affect mood?", a: "During hypomania, the instinct is to say yes to everything. This disrupts sleep, overstimulates the brain, and can accelerate into full mania. If you are suddenly the life of every party, that is data, not just personality." },
    ],
  },
  {
    title: "Triggers",
    icon: "\u26A1",
    color: "#C45D3E",
    items: [
      { q: "What are HALT states?", a: "Hungry, Angry, Lonely, Tired. These four basic states are the most common precursors to both mood destabilization and relapse. When you are in a HALT state, your brain's decision-making is compromised." },
      { q: "Can positive events be triggers?", a: "Absolutely. Falling in love, getting a promotion, or any intense positive emotion can trigger hypomania. Celebrations are also high-risk because they are culturally associated with substance use." },
      { q: "How do I build a trigger management plan?", a: "List your known triggers. For each one, write down the early warning signs, the action plan, and the support contact. Review this plan with your therapist. The time to build the plan is when you are stable, not when you are in crisis." },
    ],
  },
  {
    title: "Addiction",
    icon: "\u{1F525}",
    color: "#2E8B6E",
    items: [
      { q: "How does alcohol interact with mood disorders?", a: "Chronic use suppresses serotonin production and disrupts sleep architecture. For depression, alcohol deepens episodes within days of heavy use. For bipolar disorder, it can trigger rapid cycling. Withdrawal can produce anxiety, insomnia, and seizures." },
      { q: "What about cocaine?", a: "Cocaine floods the brain with dopamine, producing intense euphoria followed by a severe crash. The comedown mimics a depressive episode so closely that it is often impossible to tell where the drug effect ends and the mood disorder begins." },
      { q: "How do opiates interact with mood disorders?", a: "For people with depression, opiates feel like the first time they have not been in emotional pain, which makes them extraordinarily addictive. Chronic use suppresses natural endorphin production. Medication-assisted treatment is often essential." },
      { q: "What about benzodiazepines?", a: "Tolerance develops quickly. Withdrawal is medically dangerous. Benzodiazepine dependence creates a secondary layer of chemical instability. The withdrawal cycle can trigger depressive and manic episodes." },
    ],
  },
];

function FAQPage() {
  const [openSection, setOpenSection] = useState<number | null>(null);
  const [openQ, setOpenQ] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">❓</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: "#3a2a1a" }}>Frequently Asked Questions</h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Everything you need to know, organized by topic</p>
      </div>

      {FAQ_SECTIONS.map((section, sIdx) => (
        <div key={section.title} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${section.color}30` }}>
          <button
            onClick={() => setOpenSection(openSection === sIdx ? null : sIdx)}
            className="w-full flex items-center gap-3 p-4 text-left transition-colors"
            style={{ background: openSection === sIdx ? `${section.color}15` : "white" }}
          >
            <span className="text-xl">{section.icon}</span>
            <span className="flex-1 text-base font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: section.color }}>
              {section.title}
            </span>
            <motion.span
              animate={{ rotate: openSection === sIdx ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-sm opacity-40"
            >
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {openSection === sIdx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 space-y-2">
                  {section.items.map((item) => {
                    const key = `${sIdx}-${item.q}`;
                    return (
                      <div key={key} className="rounded-lg" style={{ background: "rgba(58,42,26,0.03)" }}>
                        <button
                          onClick={() => setOpenQ(openQ === key ? null : key)}
                          className="w-full text-left p-3 flex items-start gap-2"
                        >
                          <span className="text-xs mt-0.5 shrink-0" style={{ color: section.color }}>{openQ === key ? "▲" : "▼"}</span>
                          <span className="text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif", color: "#3a2a1a" }}>{item.q}</span>
                        </button>
                        <AnimatePresence>
                          {openQ === key && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <p className="px-3 pb-3 text-sm leading-relaxed opacity-70" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                                {item.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

