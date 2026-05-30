import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { usePushNotifications } from "@/hooks/usePushNotifications";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { id: "sleep", label: "Sleep", icon: "🌙" },
  { id: "nutrition", label: "Nutrition", icon: "🥗" },
  { id: "therapy", label: "Therapy", icon: "🧠" },
  { id: "exercise", label: "Exercise", icon: "🏃" },
  { id: "meds", label: "Meds", icon: "💊" },
  { id: "social", label: "Social", icon: "👥" },
  { id: "journal", label: "Journal", icon: "📓" },
];

const DAYS = [
  { id: "0", label: "S" },
  { id: "1", label: "M" },
  { id: "2", label: "T" },
  { id: "3", label: "W" },
  { id: "4", label: "T" },
  { id: "5", label: "F" },
  { id: "6", label: "S" },
];

export default function SofiaReminders() {
  const { isSupported, permission, isSubscribed, subscribe } = usePushNotifications();
  const { data: reminders = [], refetch } = trpc.reminders.list.useQuery();
  const createMutation = trpc.reminders.create.useMutation({ onSuccess: () => refetch() });
  const updateMutation = trpc.reminders.update.useMutation({ onSuccess: () => refetch() });
  const deleteMutation = trpc.reminders.delete.useMutation({ onSuccess: () => refetch() });

  const [showForm, setShowForm] = useState(false);
  const [formCategory, setFormCategory] = useState("meds");
  const [formLabel, setFormLabel] = useState("");
  const [formTime, setFormTime] = useState("09:00");
  const [formDays, setFormDays] = useState("0123456");

  const handleEnableNotifications = async () => {
    const success = await subscribe();
    if (!success) {
      alert("Could not enable notifications. Please allow notifications in your browser settings.");
    }
  };

  const handleCreate = async () => {
    if (!formLabel.trim()) return;

    // Convert local time to UTC for storage
    const [h, m] = formTime.split(":").map(Number);
    const localDate = new Date();
    localDate.setHours(h, m, 0, 0);
    const utcHH = String(localDate.getUTCHours()).padStart(2, "0");
    const utcMM = String(localDate.getUTCMinutes()).padStart(2, "0");

    await createMutation.mutateAsync({
      category: formCategory,
      label: formLabel.trim(),
      timeUtc: `${utcHH}:${utcMM}`,
      days: formDays,
    });

    setFormLabel("");
    setShowForm(false);
  };

  const toggleDay = (dayId: string) => {
    if (formDays.includes(dayId)) {
      setFormDays(formDays.replace(dayId, ""));
    } else {
      const newDays = (formDays + dayId).split("").sort().join("");
      setFormDays(newDays);
    }
  };

  const toggleEnabled = async (id: number, currentEnabled: number) => {
    await updateMutation.mutateAsync({ id, enabled: currentEnabled === 1 ? 0 : 1 });
  };

  // Convert UTC time to local for display
  const utcToLocal = (timeUtc: string) => {
    const [h, m] = timeUtc.split(":").map(Number);
    const d = new Date();
    d.setUTCHours(h, m, 0, 0);
    return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="space-y-6">
      {/* Notification Permission Banner */}
      {isSupported && !isSubscribed && (
        <div
          className="p-4 rounded-lg border"
          style={{ background: "#525642" + "10", borderColor: "#525642" + "30" }}
        >
          <p
            className="text-sm mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#3a2a1a" }}
          >
            Enable notifications to get reminders for your daily routine.
          </p>
          <button
            onClick={handleEnableNotifications}
            className="px-4 py-2 rounded-full text-white text-sm"
            style={{ background: "#525642", fontFamily: "'DM Sans', sans-serif" }}
          >
            Enable Notifications
          </button>
        </div>
      )}

      {!isSupported && (
        <div
          className="p-4 rounded-lg border"
          style={{ background: "#f5e6d3", borderColor: "#d4a574" }}
        >
          <p className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: "#3a2a1a" }}>
            Your browser doesn't support push notifications. For the best experience, add Sofía to your home screen.
          </p>
        </div>
      )}

      {/* Header + Add Button */}
      <div className="flex items-center justify-between">
        <h2
          className="text-lg uppercase tracking-[0.08em]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#3a2a1a" }}
        >
          My Reminders
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-lg"
          style={{ background: "#525642" }}
        >
          {showForm ? "×" : "+"}
        </button>
      </div>

      {/* Add Reminder Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 rounded-lg space-y-4" style={{ background: "#f7f5f0", border: "1px solid #e8e4dc" }}>
              {/* Category */}
              <div>
                <label className="text-xs uppercase tracking-wider opacity-60 block mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setFormCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-full text-xs flex items-center gap-1 transition-all ${
                        formCategory === cat.id ? "text-white" : "bg-white border"
                      }`}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        ...(formCategory === cat.id ? { background: "#525642" } : { borderColor: "#e8e4dc" }),
                      }}
                    >
                      <span>{cat.icon}</span>
                      <span>{cat.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Label */}
              <div>
                <label className="text-xs uppercase tracking-wider opacity-60 block mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Reminder Label
                </label>
                <input
                  type="text"
                  value={formLabel}
                  onChange={(e) => setFormLabel(e.target.value)}
                  placeholder="e.g., Take morning meds"
                  className="w-full px-3 py-2 rounded-lg border text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", borderColor: "#e8e4dc" }}
                />
              </div>

              {/* Time */}
              <div>
                <label className="text-xs uppercase tracking-wider opacity-60 block mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Time
                </label>
                <input
                  type="time"
                  value={formTime}
                  onChange={(e) => setFormTime(e.target.value)}
                  className="px-3 py-2 rounded-lg border text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif", borderColor: "#e8e4dc" }}
                />
              </div>

              {/* Days */}
              <div>
                <label className="text-xs uppercase tracking-wider opacity-60 block mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Days
                </label>
                <div className="flex gap-2">
                  {DAYS.map((day) => (
                    <button
                      key={day.id}
                      onClick={() => toggleDay(day.id)}
                      className={`w-8 h-8 rounded-full text-xs flex items-center justify-center transition-all ${
                        formDays.includes(day.id) ? "text-white" : "bg-white border"
                      }`}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        ...(formDays.includes(day.id) ? { background: "#525642" } : { borderColor: "#e8e4dc" }),
                      }}
                    >
                      {day.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <button
                onClick={handleCreate}
                disabled={!formLabel.trim() || createMutation.isPending}
                className="w-full py-2.5 rounded-full text-white text-sm disabled:opacity-50"
                style={{ background: "#525642", fontFamily: "'DM Sans', sans-serif" }}
              >
                {createMutation.isPending ? "Saving..." : "Add Reminder"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Reminder List */}
      <div className="space-y-3">
        {reminders.length === 0 && !showForm && (
          <p className="text-sm opacity-50 text-center py-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            No reminders yet. Tap + to add one.
          </p>
        )}

        {reminders.map((reminder: any) => {
          const cat = CATEGORIES.find((c) => c.id === reminder.category);
          return (
            <div
              key={reminder.id}
              className="flex items-center gap-3 p-3 rounded-lg border"
              style={{ borderColor: "#e8e4dc", opacity: reminder.enabled ? 1 : 0.5 }}
            >
              <span className="text-xl">{cat?.icon || "⏰"}</span>
              <div className="flex-1 min-w-0">
                <p
                  className="text-sm truncate"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: "#3a2a1a" }}
                >
                  {reminder.label}
                </p>
                <p className="text-xs opacity-50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {utcToLocal(reminder.timeUtc)} · {reminder.days === "0123456" ? "Every day" : reminder.days.split("").map((d: string) => DAYS[parseInt(d)]?.label).join("")}
                </p>
              </div>
              <button
                onClick={() => toggleEnabled(reminder.id, reminder.enabled)}
                className="w-10 h-6 rounded-full relative transition-all"
                style={{ background: reminder.enabled ? "#525642" : "#d4d4d4" }}
              >
                <span
                  className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all"
                  style={{ left: reminder.enabled ? "18px" : "2px" }}
                />
              </button>
              <button
                onClick={() => deleteMutation.mutate({ id: reminder.id })}
                className="text-red-400 text-xs opacity-60 hover:opacity-100"
              >
                ✕
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
