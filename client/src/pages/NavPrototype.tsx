/**
 * NAV PROTOTYPE — Standalone page for testing the new SidebarNavigation
 * This page is completely isolated from the rest of the site.
 * No other page imports or uses SidebarNavigation.
 */

import { useState } from "react";
import SidebarNavigation from "@/components/SidebarNavigation";

export default function NavPrototype() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f5f0] flex flex-col items-center justify-center px-6">
      {/* Simple trigger button */}
      <div className="text-center max-w-md">
        <h1
          className="text-3xl md:text-4xl tracking-wide text-[#3a2a1a] mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Navigation Prototype
        </h1>
        <p
          className="text-[#5a4a3a] text-sm leading-relaxed mb-8"
          style={{ fontFamily: "var(--font-body)" }}
        >
          This is an isolated test page for the new sidebar navigation.
          It does not affect any other page on the site.
        </p>
        <button
          onClick={() => setSidebarOpen(true)}
          className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#ece8e1] border border-[#3a2a1a]/20 hover:bg-[#d4c9b8]/50 transition-all duration-300"
        >
          <span
            className="text-[#3a2a1a] text-sm tracking-[0.08em]"
            style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}
          >
            Open Sidebar Nav
          </span>
        </button>
      </div>

      {/* The isolated sidebar */}
      <SidebarNavigation
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
}
