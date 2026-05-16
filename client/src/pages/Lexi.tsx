/**
 * LEXI — Dual Diagnosis Management Tool
 * For people navigating co-occurring addiction and mood disorders.
 * Categories: Mood, Therapy, Sleep, Nutrition, Exercise, Meds, Social, Triggers, Sobriety, Cravings
 * Calendar view with color-coded entries and 5-min-before reminders
 * Each category uses FAQ format for educational content.
 */

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS & TYPES
   ═══════════════════════════════════════════════════════════════ */

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663090891297/aPU7TBha6XBXzi9S9Q7tf2/lexi-logo-final-PHebnBoX7bAEZYhGVRja4c.png";

const CATEGORIES = [
  { id: "mood", label: "Mood", color: "#C9A96E", icon: "◐" },
  { id: "therapy", label: "Therapy", color: "#5C6B4A", icon: "◉" },
  { id: "sleep", label: "Sleep", color: "#5A6B7A", icon: "☽" },
  { id: "nutrition", label: "Nutrition", color: "#7A9E7E", icon: "◈" },
  { id: "exercise", label: "Exercise", color: "#B8704A", icon: "△" },
  { id: "meds", label: "Meds", color: "#8B6B7A", icon: "⊕" },
  { id: "social", label: "Social", color: "#6B8A9E", icon: "◇" },
  { id: "triggers", label: "Triggers", color: "#A65D5D", icon: "⚡" },
  { id: "addiction", label: "Addiction", color: "#4A7C6B", icon: "◎" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

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

  // 5-minute-before reminder system
  useEffect(() => {
    if (!("Notification" in window)) return;
    Notification.requestPermission();

    const interval = setInterval(() => {
      const now = new Date();
      entries.forEach((entry) => {
        if (entry.completed) return;
        const entryTime = new Date(`${entry.date}T${entry.time}`);
        const diff = entryTime.getTime() - now.getTime();
        if (diff > 240000 && diff < 300000) {
          if (Notification.permission === "granted") {
            new Notification(`Lexi Reminder`, {
              body: `${entry.note || CATEGORIES.find(c => c.id === entry.category)?.label} in 5 minutes`,
              icon: LOGO_URL,
            });
            playBeep();
          }
        }
      });
    }, 30000);

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
          alt="Lexi"
          className="h-14 w-14 object-contain"
          onClick={() => { setActiveView("home"); setMenuOpen(false); }}
          style={{ cursor: "pointer" }}
        />

        {/* Calendar pill */}
        <button
          onClick={() => { setActiveView("calendar"); setMenuOpen(false); }}
          className="flex items-center justify-center h-11 px-5 rounded-full backdrop-blur-md shadow-lg transition-all duration-300"
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
        ) : activeView === "addiction" ? (
          <AddictionPage {...categoryProps("addiction")} />
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
          {CATEGORIES.map((cat) => (
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

function AddEntryForm({
  date,
  onAdd,
  onCancel,
}: {
  date: string;
  onAdd: (entry: Omit<CalendarEntry, "id">) => void;
  onCancel: () => void;
}) {
  const [category, setCategory] = useState<CategoryId>("mood");
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
            {CATEGORIES.map((cat) => (
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
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="e.g., AA meeting, craving passed, mood check..."
          className="w-full px-3 py-2 rounded-lg border text-sm bg-white"
          style={{ borderColor: "rgba(58, 42, 26, 0.15)" }}
        />
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
      {/* Hero */}
      <div className="text-center pt-4">
        <h1
          className="text-3xl tracking-wide mb-2"
          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 400 }}
        >
          Living Well with Dual Diagnosis
        </h1>
        <p className="text-sm opacity-60 max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          A personal tool for managing co-occurring addiction and mood disorders.
        </p>
      </div>

      {/* What is Dual Diagnosis */}
      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          What is Dual Diagnosis?
        </h2>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Dual diagnosis means living with both a substance use disorder and a mood disorder at the same time. 
          Depression, bipolar disorder, anxiety, and PTSD are the most common mood conditions that co-occur 
          with addiction. Nearly half of people with a severe mental health condition also experience substance 
          use disorder. These are not two separate problems. They are one interconnected condition where each 
          side feeds the other.
        </p>
      </section>

      {/* How They Amplify Each Other */}
      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          How Addiction and Mood Disorders Amplify Each Other
        </h2>
        <p className="text-sm leading-relaxed opacity-80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Substances change brain chemistry in the same systems that regulate mood. Alcohol suppresses 
          serotonin and GABA over time. Stimulants flood and then deplete dopamine. Opioids hijack the 
          brain's reward circuitry. When you already have a mood disorder, these chemical disruptions hit 
          harder and recover slower.
        </p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          The cycle works both ways. A depressive episode makes you reach for relief. A manic episode 
          lowers inhibition and amplifies risk-taking. Withdrawal mimics and triggers mood episodes. 
          Shame from relapse deepens depression. Without treating both conditions together, recovery 
          from either one is significantly harder.
        </p>
      </section>

      {/* Why Routine */}
      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Why Routine is the Foundation
        </h2>
        <p className="text-sm leading-relaxed opacity-80 mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Research on Interpersonal and Social Rhythm Therapy (IPSRT) shows that stabilizing daily routines 
          is one of the most effective interventions for mood disorders. For addiction, structure is equally 
          critical. Idle time, disrupted sleep, skipped meals, and social isolation are the environments 
          where cravings thrive and relapse happens.
        </p>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Lexi helps you track the pillars of stability for both conditions:
        </p>
      </section>

      {/* Category Cards */}
      <div className="grid grid-cols-2 gap-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="rounded-lg p-4 text-center"
            style={{ background: cat.color + "15", borderLeft: `3px solid ${cat.color}` }}
          >
            <span className="text-2xl block mb-1">{cat.icon}</span>
            <span className="text-xs uppercase tracking-wider font-medium" style={{ color: cat.color }}>
              {cat.label}
            </span>
          </div>
        ))}
      </div>

      {/* The Goal */}
      <section className="rounded-xl p-6" style={{ background: "#E8E3DA" }}>
        <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Catch It Before It Catches You
        </h2>
        <p className="text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          The goal is not perfection. It is awareness. By logging your mood, sleep, meds, exercise, 
          nutrition, social activity, therapy, sobriety, cravings, and triggers, you start to see patterns. 
          You notice when sleep is slipping. When you are isolating. When cravings spike after certain 
          situations. These are the early warning signs. Lexi helps you see them before they become 
          episodes or relapses.
        </p>
      </section>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MOOD PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function MoodPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "mood")!;

  const faq: FAQItem[] = [
    {
      question: "How does addiction affect mood stability?",
      answer: "Substances directly alter the neurotransmitter systems that regulate mood. Alcohol depletes serotonin over time. Stimulants cause dopamine crashes. Even after you stop using, your brain's mood regulation system can take months to recalibrate. During that window, mood swings are more frequent and more intense than they would be from the mood disorder alone.",
    },
    {
      question: "Why do mood episodes trigger cravings?",
      answer: "During depressive episodes, the brain seeks relief from emotional pain, and substances offer fast (temporary) relief. During manic or hypomanic episodes, impulsivity increases and risk assessment decreases, making it easier to justify using. The mood disorder creates the vulnerability; the addiction exploits it.",
    },
    {
      question: "What does the 1 to 10 mood scale mean for dual diagnosis?",
      answer: "1 is deeply depressed, 5 is stable, 10 is manic. For dual diagnosis, pay special attention to the extremes. Both very low moods (1 to 3) and elevated moods (8 to 10) are high-risk windows for relapse. Tracking your number daily helps you and your treatment team spot patterns before they escalate.",
    },
    {
      question: "How do I tell the difference between withdrawal and a mood episode?",
      answer: "They can look identical. Withdrawal from alcohol or benzodiazepines can mimic depression or anxiety. Stimulant withdrawal mimics depressive episodes. The key differentiator is timeline. Withdrawal symptoms follow a predictable arc after your last use. Mood episodes can emerge at any time. Logging both your substance use and your mood helps your provider distinguish between them.",
    },
    {
      question: "Should I track mood even on good days?",
      answer: "Especially on good days. Consistent tracking builds the baseline that makes warning signs visible. If you only log when things are bad, you lose the contrast. A stable week followed by a dip is meaningful data. A stable week with no log before it tells you nothing.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Mood
        </h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Track where you are on the spectrum today
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      <LoggingSection
        categoryId="mood"
        categoryColor={category.color}
        logLabel="Log Mood"
        {...props}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   THERAPY PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function TherapyPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "therapy")!;

  const faq: FAQItem[] = [
    {
      question: "Why is therapy essential for dual diagnosis?",
      answer: "Medication manages brain chemistry. Therapy manages the behaviors, thought patterns, and relationship dynamics that either stabilize or destabilize you. Research consistently shows that integrated treatment addressing both addiction and mood disorders simultaneously produces significantly better outcomes than treating either condition alone.",
    },
    {
      question: "What types of therapy work best for co-occurring disorders?",
      answer: "Cognitive Behavioral Therapy (CBT) helps identify distorted thinking in both mood episodes and addiction (such as 'one drink won't hurt' or 'nothing will ever get better'). Dialectical Behavior Therapy (DBT) teaches distress tolerance so you can ride out cravings and mood episodes without acting on them. Interpersonal and Social Rhythm Therapy (IPSRT) stabilizes daily routines, which protects against both relapse and mood episodes. Many people benefit from a combination.",
    },
    {
      question: "How often should I go to therapy?",
      answer: "Weekly sessions during unstable periods or early recovery. Biweekly during maintenance. Skipping therapy when you feel good is one of the most common mistakes in dual diagnosis. Stability is when you build the skills you will need during the next crisis. Your therapist is also an early warning system who can spot changes you cannot see in yourself.",
    },
    {
      question: "What about group therapy and 12-step programs?",
      answer: "Group therapy and peer support (AA, NA, SMART Recovery, DBSA) provide accountability, community, and the experience of people who understand both conditions. They are not a replacement for individual therapy, but they fill a gap that individual therapy cannot: the knowledge that you are not alone in this, and the structure of regular attendance.",
    },
    {
      question: "What should I tell my therapist about my substance use?",
      answer: "Everything. Holding back information about your use makes it impossible for your therapist to help you effectively. If your therapist only treats the mood disorder and does not know about the addiction (or vice versa), you are getting half-treatment. The best outcomes come from providers who understand both conditions and treat them as one integrated problem.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Therapy
        </h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Track sessions and build your support system
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      <LoggingSection
        categoryId="therapy"
        categoryColor={category.color}
        logLabel="Log Session"
        {...props}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SLEEP PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function SleepPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "sleep")!;

  const faq: FAQItem[] = [
    {
      question: "Why is sleep the number one priority in dual diagnosis?",
      answer: "Sleep disruption is both the earliest warning sign and the most potent trigger for mood episodes. Even one night of lost sleep can trigger hypomania in vulnerable individuals. For addiction, poor sleep is one of the strongest predictors of relapse. The brain's ability to resist cravings, regulate emotions, and make good decisions all depend on adequate sleep. When sleep goes, everything else follows.",
    },
    {
      question: "How does substance use disrupt sleep?",
      answer: "Alcohol fragments sleep architecture, suppressing REM sleep and causing early morning waking. Stimulants prevent sleep onset and can cause insomnia for days. Cannabis suppresses dreaming and creates rebound insomnia during withdrawal. Opioid withdrawal causes severe insomnia. Even after substances are removed, sleep disturbance can persist for weeks or months as the brain recalibrates.",
    },
    {
      question: "How does sleep loss affect mood episodes?",
      answer: "For bipolar disorder, decreased sleep is the single strongest trigger for mania. The feedback loop is dangerous: less sleep leads to more energy, which leads to even less sleep, which leads to a full episode. For depression, irregular sleep timing deepens the episode. Maintaining a consistent wake time, even during depression, is one of the most effective interventions.",
    },
    {
      question: "What are the sleep hygiene rules for dual diagnosis?",
      answer: "Same bedtime and wake time every day, including weekends. No screens one hour before bed. Dark, cool room. No caffeine after noon. No alcohol (it fragments sleep even if it helps you fall asleep). If you cannot sleep after 20 minutes, get up and do something boring until drowsy. These rules are non-negotiable for dual diagnosis because the margin for error is smaller.",
    },
    {
      question: "What should I track?",
      answer: "Log hours slept, time to bed, time awake, and quality on a 1 to 10 scale. Over time, you will see the correlation between sleep changes and both mood shifts and craving intensity. Often the sleep change comes 2 to 3 days before the mood change or craving spike. That is your early warning window.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Sleep
        </h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Protect the foundation everything else is built on
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      <LoggingSection
        categoryId="sleep"
        categoryColor={category.color}
        logLabel="Log Sleep"
        {...props}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   NUTRITION PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function NutritionPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "nutrition")!;

  const faq: FAQItem[] = [
    {
      question: "Why does nutrition matter for dual diagnosis?",
      answer: "Your brain consumes 20% of your daily calories despite being only 2% of your body weight. What you eat directly impacts neurotransmitter production, inflammation levels, and gut-brain signaling, all of which are disrupted in both mood disorders and addiction. Chronic substance use depletes essential nutrients, and nutritional deficiencies worsen mood instability and increase craving intensity.",
    },
    {
      question: "How does blood sugar affect mood and cravings?",
      answer: "Blood sugar spikes and crashes from refined carbs and sugar can mimic or trigger mood episodes and amplify cravings. The crash after a sugar spike feels similar to the come-down from substances, which can trigger the brain's craving response. Stable blood sugar means more stable mood and fewer craving spikes. Eat protein with every meal, prioritize complex carbs, and avoid long gaps between meals.",
    },
    {
      question: "What role do omega-3 fatty acids play?",
      answer: "Multiple studies show that omega-3s (EPA and DHA from fish oil) have antidepressant effects and may help stabilize mood. They reduce neuroinflammation and support cell membrane integrity in the brain. For people in recovery, omega-3s also support the brain's healing process as it recalibrates after substance use. Aim for fatty fish 2 to 3 times per week or supplement with 1 to 2 grams of EPA and DHA.",
    },
    {
      question: "How does the gut-brain connection affect recovery?",
      answer: "90% of serotonin is produced in the gut. Chronic alcohol use, poor diet, and antibiotics disrupt the microbiome, which directly impacts mood regulation and craving intensity. Fermented foods, fiber, and diverse plant intake support a healthy microbiome. Rebuilding gut health is an underappreciated part of dual diagnosis recovery.",
    },
    {
      question: "Are there foods or substances I should avoid with my medications?",
      answer: "Lithium levels are affected by sodium and hydration. Grapefruit interacts with many psychiatric medications. Caffeine can trigger anxiety and disrupt sleep. Alcohol destabilizes mood and reduces medication effectiveness. If you are on MAOIs, tyramine-rich foods (aged cheese, cured meats) can cause dangerous blood pressure spikes. Track what you eat to spot patterns and share logs with your prescriber.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Nutrition
        </h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Fuel the brain that is healing
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      <LoggingSection
        categoryId="nutrition"
        categoryColor={category.color}
        logLabel="Log Meal"
        {...props}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   EXERCISE PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function ExercisePage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "exercise")!;

  const faq: FAQItem[] = [
    {
      question: "How does exercise help with dual diagnosis?",
      answer: "Exercise directly impacts the neurotransmitter systems (serotonin, dopamine, norepinephrine, BDNF) that are dysregulated in both mood disorders and addiction. For depression, aerobic exercise has been shown to be as effective as antidepressants for mild-to-moderate cases. For addiction, exercise provides a natural dopamine release that helps fill the void left by substances and reduces craving intensity.",
    },
    {
      question: "Can exercise replace the high from substances?",
      answer: "Not exactly, but it activates overlapping reward pathways. The endorphin release from exercise engages the same opioid receptors that substances target, just at a lower, sustainable level. Over time, regular exercise helps the brain's reward system recalibrate toward natural sources of pleasure. Studies show that people who exercise regularly in early recovery have significantly lower relapse rates.",
    },
    {
      question: "How much exercise is enough?",
      answer: "30 minutes of moderate aerobic exercise (walking, swimming, cycling) 3 to 5 times per week. Yoga and weight training also show benefits. The key is consistency over intensity. Showing up matters more than performance. For dual diagnosis, the routine aspect of exercise is as important as the physical benefit because it anchors your daily schedule.",
    },
    {
      question: "Can too much exercise be a problem?",
      answer: "Yes. Over-exercise can trigger hypomania in people with bipolar disorder. It can also become a substitute addiction, replacing substances with compulsive exercise. Warning signs include working out twice a day, inability to rest, exercising through injury, and feeling anxious or guilty when you miss a session. Moderation and consistency are the goals.",
    },
    {
      question: "When is the best time to exercise?",
      answer: "Morning exercise is particularly effective for dual diagnosis because it reinforces your circadian clock, improves sleep onset at night, and provides a natural mood boost that carries through the day. It also fills the early morning hours, which can be a high-risk time for cravings. Whatever time you choose, keep it consistent.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Exercise
        </h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Move your body, heal your brain
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      <LoggingSection
        categoryId="exercise"
        categoryColor={category.color}
        logLabel="Log Exercise"
        {...props}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MEDS PAGE — FAQ Format + Medication Reference
   ═══════════════════════════════════════════════════════════════ */

const MEDICATIONS = [
  {
    id: "lithium",
    name: "Lithium",
    type: "Mood Stabilizer",
    description: "First-line treatment for bipolar disorder. Reduces frequency and severity of manic episodes. Requires regular blood level monitoring.",
    commonDoses: ["300mg", "450mg", "600mg", "900mg", "1200mg"],
  },
  {
    id: "depakote",
    name: "Depakote",
    type: "Mood Stabilizer / Anticonvulsant",
    description: "Divalproex sodium. Effective for manic episodes and mixed states. Also used as maintenance therapy.",
    commonDoses: ["250mg", "500mg", "750mg", "1000mg", "1500mg"],
  },
  {
    id: "seroquel",
    name: "Seroquel",
    type: "Atypical Antipsychotic",
    description: "Quetiapine. Used for both manic and depressive episodes. Also helps with sleep at lower doses.",
    commonDoses: ["25mg", "50mg", "100mg", "200mg", "300mg", "400mg"],
  },
  {
    id: "naltrexone",
    name: "Naltrexone",
    type: "Opioid Antagonist / Anti-Craving",
    description: "Blocks opioid receptors and reduces alcohol cravings. Available as daily pill or monthly injection (Vivitrol). Does not cause dependence.",
    commonDoses: ["50mg daily", "380mg monthly injection"],
  },
  {
    id: "gabapentin",
    name: "Gabapentin",
    type: "Anticonvulsant / Anxiolytic",
    description: "Used off-label for anxiety, alcohol withdrawal, and craving reduction. Also helps with sleep and neuropathic pain. Lower abuse potential than benzodiazepines.",
    commonDoses: ["100mg", "300mg", "600mg", "900mg"],
  },
];

function MedsPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "meds")!;
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

  const faq: FAQItem[] = [
    {
      question: "Why is medication compliance harder with dual diagnosis?",
      answer: "Substances interfere with medication effectiveness. Alcohol reduces the efficacy of most psychiatric medications. Stimulants can counteract mood stabilizers. Beyond the chemistry, the impulsivity and cognitive distortion that come with active use make it easy to rationalize skipping doses. Consistent medication tracking is one of the most impactful things you can do for stability.",
    },
    {
      question: "Can I drink alcohol on psychiatric medications?",
      answer: "In almost all cases, no. Alcohol interacts dangerously with lithium (dehydration affects blood levels), benzodiazepines (combined CNS depression), antidepressants (increased side effects and reduced efficacy), and antipsychotics (excessive sedation). Beyond interactions, alcohol destabilizes the mood you are trying to stabilize. This is one of the hardest realities of dual diagnosis.",
    },
    {
      question: "What medications help with both mood and addiction?",
      answer: "Naltrexone reduces alcohol and opioid cravings while being safe with most mood stabilizers. Gabapentin helps with anxiety, sleep, and alcohol cravings. Some antidepressants (particularly bupropion) can help with both depression and nicotine/stimulant cravings. Your prescriber should know about both conditions to choose medications that address the full picture.",
    },
    {
      question: "What happens if I relapse while on medication?",
      answer: "Do not stop your medication. Contact your prescriber. A relapse does not erase the progress your medication has made on your mood stability. Stopping medication during a relapse creates a double crisis: active use plus unmedicated mood disorder. Your treatment team needs to know so they can adjust your plan, not so they can judge you.",
    },
    {
      question: "How do I track medication effectively?",
      answer: "Log each dose with the time taken. Note any side effects or missed doses. Track how you feel 1 to 2 hours after taking medication. Over time, this data helps your prescriber fine-tune dosing and timing. It also builds accountability: seeing a streak of consistent doses is motivating, and gaps become visible patterns rather than forgotten moments.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Medications
        </h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Mood stabilizers, anti-craving, and more
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      {/* Medication Reference Cards */}
      <div>
        <h3 className="text-xs uppercase tracking-[0.15em] opacity-50 font-medium mb-3">Medication Reference</h3>
        <div className="flex flex-col gap-3">
          {MEDICATIONS.map((med) => (
            <div
              key={med.id}
              className="p-4 rounded-xl border transition-all"
              style={{
                borderColor: selectedMed === med.id ? category.color : "rgba(58, 42, 26, 0.1)",
                background: selectedMed === med.id ? `${category.color}08` : "white",
              }}
            >
              <div>
                <h3 className="text-lg font-semibold" style={{ color: "#3a2a1a" }}>{med.name}</h3>
                <span
                  className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full inline-block mt-1"
                  style={{ background: `${category.color}20`, color: category.color }}
                >
                  {med.type}
                </span>
                <p className="text-sm opacity-60 mt-2 leading-relaxed">{med.description}</p>
              </div>

              <div className="mt-3 flex items-center gap-2">
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
      </div>

      {/* Today's med log */}
      {todayEntries.length > 0 && (
        <div>
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

  const faq: FAQItem[] = [
    {
      question: "Why is social connection critical for dual diagnosis?",
      answer: "Isolation is one of the most dangerous states for someone with co-occurring disorders. It removes accountability, eliminates external reality checks, and allows both distorted thinking and craving cycles to go unchallenged. Social connection is a fundamental human need and a powerful protective factor against both depression and relapse.",
    },
    {
      question: "How do I handle social situations where people are drinking or using?",
      answer: "Early in recovery, avoid them entirely. This is not weakness; it is strategy. As you build stability, you can gradually reintroduce social situations with a plan: bring a sober support person, have an exit strategy, keep a non-alcoholic drink in hand, and leave when you feel uncomfortable. Never test your willpower when you do not have to.",
    },
    {
      question: "What if my social circle revolves around substance use?",
      answer: "This is one of the hardest parts of dual diagnosis recovery. You may need to build an entirely new social network. Recovery meetings (AA, NA, SMART Recovery), group therapy, volunteer work, and hobby-based communities are all places to find people who support your recovery. The people who only want to be around you when you are using are not your support system.",
    },
    {
      question: "How does over-socializing affect mood disorders?",
      answer: "During hypomania, the instinct is to say yes to everything, stay out late, talk to everyone. This feels amazing but it disrupts sleep, overstimulates the brain, and can accelerate into full mania. The key is recognizing when your social drive is elevated beyond your baseline. If you are suddenly the life of every party, that is data, not just personality.",
    },
    {
      question: "What should I track?",
      answer: "Log who you saw, for how long, and how you felt after. Note whether the interaction was in a recovery-supportive environment or a high-risk one. Over time, you will identify which relationships energize versus drain you, and whether your social patterns are shifting in ways that predict episodes or relapse risk.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Social
        </h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Build the network that keeps you stable
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      <LoggingSection
        categoryId="social"
        categoryColor={category.color}
        logLabel="Log Social"
        {...props}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   TRIGGERS PAGE — FAQ Format
   ═══════════════════════════════════════════════════════════════ */

function TriggersPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "triggers")!;

  const faq: FAQItem[] = [
    {
      question: "What are triggers in dual diagnosis?",
      answer: "Triggers are situations, emotions, people, places, or internal states that increase the risk of either a mood episode or a relapse. In dual diagnosis, triggers often overlap: the same stressor that destabilizes your mood also activates cravings. Identifying your personal triggers is the first line of defense because you cannot manage what you do not recognize.",
    },
    {
      question: "What are HALT states and why do they matter?",
      answer: "HALT stands for Hungry, Angry, Lonely, Tired. These four basic states are the most common precursors to both mood destabilization and relapse. They are deceptively simple but profoundly dangerous. When you are in a HALT state, your brain's prefrontal cortex (the part that makes good decisions) is compromised. Checking in with yourself using HALT before any major decision is a foundational recovery skill.",
    },
    {
      question: "How do emotional triggers differ from environmental triggers?",
      answer: "Emotional triggers are internal states like shame, boredom, excitement, loneliness, or anger that activate craving or mood instability. Environmental triggers are external: a bar you used to drink at, a person you used with, a song associated with past use, or even a time of day. Both types require different strategies. Emotional triggers need coping skills. Environmental triggers need avoidance or reframing.",
    },
    {
      question: "Can positive events be triggers?",
      answer: "Absolutely. Falling in love, getting a promotion, celebrating a milestone, or any intense positive emotion can trigger hypomania in people with bipolar disorder. For addiction, celebrations are high-risk because they are culturally associated with substance use ('let's celebrate with a drink'). Positive triggers are harder to recognize because they feel good, which makes them more dangerous.",
    },
    {
      question: "How do I build a trigger management plan?",
      answer: "List your known triggers. For each one, write down the early warning signs (what you feel in your body and mind), the action plan (what you will do instead of using or spiraling), and the support contact (who you will call). Review this plan with your therapist. Keep it accessible on your phone. The time to build the plan is when you are stable, not when you are in crisis.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Triggers
        </h2>
        <p className="text-xs opacity-50 mt-1 max-w-sm mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Know what destabilizes you before it happens
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      <LoggingSection
        categoryId="triggers"
        categoryColor={category.color}
        logLabel="Log Trigger"
        {...props}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   ADDICTION PAGE — FAQ Format (substance-specific)
   ═══════════════════════════════════════════════════════════════ */

function AddictionPage(props: CategoryPageProps) {
  const category = CATEGORIES.find((c) => c.id === "addiction")!;

  const faq: FAQItem[] = [
    {
      question: "How does alcohol interact with mood disorders?",
      answer: "Alcohol is a central nervous system depressant that initially produces relaxation and euphoria by boosting GABA and dopamine. But chronic use suppresses serotonin production and disrupts sleep architecture. For people with depression, alcohol deepens depressive episodes within days of heavy use. For people with bipolar disorder, alcohol can trigger rapid cycling between mania and depression. Withdrawal from alcohol can produce anxiety, insomnia, and seizures that mimic or worsen mood episodes. Alcohol is the most common substance involved in dual diagnosis.",
    },
    {
      question: "How does cocaine affect people with mood disorders?",
      answer: "Cocaine floods the brain with dopamine, producing intense euphoria followed by a severe crash. For people with depression, the crash is devastating because the brain was already low on dopamine. For people with bipolar disorder, cocaine can trigger manic episodes and psychosis. The comedown mimics a depressive episode so closely that it is often impossible to tell where the drug effect ends and the mood disorder begins. Chronic cocaine use permanently reduces the brain's ability to produce dopamine naturally, making the underlying mood disorder worse over time.",
    },
    {
      question: "What is the relationship between marijuana and mood disorders?",
      answer: "Marijuana affects the endocannabinoid system, which regulates mood, sleep, appetite, and stress response. Short-term use can reduce anxiety, but chronic use disrupts the brain's natural ability to regulate these functions. High-THC strains are associated with increased risk of psychosis, particularly in people with bipolar disorder or schizophrenia. For depression, marijuana creates a cycle of temporary relief followed by amotivation and emotional blunting. Many people underestimate marijuana's impact because it feels less dangerous than other substances, but for dual diagnosis it can be a significant destabilizer.",
    },
    {
      question: "How do crack and meth affect mood disorders?",
      answer: "Crack cocaine and methamphetamine are both powerful stimulants that produce extreme dopamine surges. Crack delivers a shorter, more intense high than powder cocaine, leading to rapid binge cycles. Meth produces a longer high but causes severe neurotoxicity, literally damaging dopamine-producing neurons. Both substances can trigger psychosis, paranoia, and aggression even in people without pre-existing conditions. For people with mood disorders, these substances accelerate the progression of the illness. Meth in particular can cause permanent changes to brain structure that worsen depression and anxiety for years after the last use.",
    },
    {
      question: "How does Xanax and benzodiazepine use complicate mood disorders?",
      answer: "Benzodiazepines like Xanax, Klonopin, and Valium are prescribed for anxiety but carry high addiction potential. They work by enhancing GABA, producing calm and sedation. Tolerance develops quickly, requiring higher doses for the same effect. Withdrawal from benzodiazepines is medically dangerous and can include seizures, panic attacks, and rebound anxiety worse than the original condition. For people with mood disorders, benzodiazepine dependence creates a secondary layer of chemical instability. The withdrawal cycle can trigger depressive and manic episodes, and the cognitive impairment from chronic use interferes with therapy and self-awareness.",
    },
    {
      question: "How do opiates interact with mood disorders?",
      answer: "Opiates including heroin, fentanyl, oxycodone, and hydrocodone hijack the brain's endorphin system. They produce profound pain relief and euphoria by binding to mu-opioid receptors. For people with depression, opiates feel like the first time they have not been in emotional pain, which makes them extraordinarily addictive in this population. Chronic opiate use suppresses the brain's natural endorphin production, creating a state where you cannot feel pleasure or relief without the drug. Withdrawal produces severe physical symptoms plus depression and anxiety that can last months. Medication-assisted treatment with buprenorphine or methadone is often essential for people with co-occurring opiate addiction and mood disorders.",
    },
    {
      question: "What should I log for addiction tracking?",
      answer: "Log your substance of concern, days since last use, craving intensity on a 1 to 10 scale, what triggered the craving, what coping strategy you used, and your mood state at the time. If you used, log that honestly without judgment. The data is for you. Over time, this log reveals which mood states precede cravings, which situations are highest risk, and which coping strategies actually work versus which ones you think should work but do not.",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="text-3xl">{category.icon}</span>
        <h2 className="text-2xl mt-2" style={{ fontFamily: "'Playfair Display', serif", color: category.color }}>
          Addiction
        </h2>
        <p className="text-xs opacity-50 mt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Understanding how substances interact with your mood
        </p>
      </div>

      <FAQSection items={faq} accentColor={category.color} />

      <LoggingSection
        categoryId="addiction"
        categoryColor={category.color}
        logLabel="Log Entry"
        {...props}
      />
    </div>
  );
}


