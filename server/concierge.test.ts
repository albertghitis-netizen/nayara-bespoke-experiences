import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import { NAYARA_CONCIERGE_SYSTEM_PROMPT } from "./conciergePrompt";
import type { TrpcContext } from "./_core/context";

/**
 * Mock the LLM module so we don't make real API calls in tests.
 * The mock returns a canned concierge response.
 */
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    id: "test-id",
    created: Date.now(),
    model: "test-model",
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content:
            "Welcome to Nayara! The Atacama Desert is truly magical. I'd recommend our stargazing excursion , the skies here are the clearest on Earth. Would you like to know more about our excursions?",
        },
        finish_reason: "stop",
      },
    ],
    usage: { prompt_tokens: 100, completion_tokens: 50, total_tokens: 150 },
  }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

/* ═══════════════════════════════════════════
   CONCIERGE SYSTEM PROMPT TESTS
   ═══════════════════════════════════════════ */

describe("Nayara Concierge System Prompt", () => {
  it("should not reference 'Starry' anywhere in the prompt", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT.toLowerCase()).not.toContain("starry");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Henry");
  });

  it("should identify as Henry, Nayara's AI concierge", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Nayara Concierge");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Henry");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toMatch(/I'm Henry/);
  });

  it("should contain reservation contact information", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("reservations@nayararesorts.com");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("1-844-865-2002");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("+506 2479-1600");
  });

  it("should contain all 6 property names", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Nayara Tented Camp");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Nayara Springs");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Nayara Gardens");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Nayara Alto Atacama");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Nayara Hangaroa");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Nayara Bocas del Toro");
  });

  it("should contain SynXis booking URLs for all properties", () => {
    const synxisMatches = NAYARA_CONCIERGE_SYSTEM_PROMPT.match(/be\.synxis\.com/g);
    expect(synxisMatches?.length).toBeGreaterThanOrEqual(6);
  });

  it("should warn against using 'Nayara Arenal'", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("NEVER say \"Nayara Arenal\"");
  });

  it("should contain correct Michelin Keys information", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("THREE Michelin Keys");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("TWO Michelin Keys");
  });

  it("should contain Costa Rica dining venues", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Amor Loco");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Nostalgia");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Lapas Bar");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Terraza");
  });

  it("should contain Poerava restaurant menu details for Hangaroa", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Poerava");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Ceviche Rapa Nui");
  });

  it("should contain Bocas del Toro spa details", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Bliss Massage");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Jungle Rub");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Reflexology");
  });

  it("should contain Lapas Bar info", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Lapas Bar");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toMatch(/cocktail/i);
  });

  it("should contain Terraza restaurant info", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Terraza");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toMatch(/Bar Azul/i);
  });

  it("should reference the gastronomy page", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("/gastronomy");
  });

  it("should contain lead capture and escalation instructions", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Lead Capture");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Guest Relations");
  });

  it("should contain property access rules", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Adults-only");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Family-friendly");
  });

  it("should contain sustainability certifications", () => {
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("S Certification");
    expect(NAYARA_CONCIERGE_SYSTEM_PROMPT).toContain("Green Globe");
  });
});

/* ═══════════════════════════════════════════
   CONCIERGE CHAT PROCEDURE TESTS
   ═══════════════════════════════════════════ */

describe("concierge.chat", () => {
  it("returns a reply from the LLM for a simple user message", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.concierge.chat({
      messages: [
        { role: "user", content: "What excursions do you recommend at Alto Atacama?" },
      ],
    });

    expect(result).toHaveProperty("reply");
    expect(typeof result.reply).toBe("string");
    expect(result.reply.length).toBeGreaterThan(0);
    expect(result.reply).toContain("Nayara");
  });

  it("handles multi-turn conversation", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.concierge.chat({
      messages: [
        { role: "user", content: "Tell me about Alto Atacama" },
        { role: "assistant", content: "Alto Atacama is set in the Catarpe Valley..." },
        { role: "user", content: "What about stargazing?" },
      ],
    });

    expect(result).toHaveProperty("reply");
    expect(typeof result.reply).toBe("string");
    expect(result.reply.length).toBeGreaterThan(0);
  });

  it("works without authentication (public procedure)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.concierge.chat({
      messages: [{ role: "user", content: "Hello" }],
    });

    expect(result).toHaveProperty("reply");
  });

  it("handles empty messages array", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.concierge.chat({
      messages: [],
    });

    expect(result).toHaveProperty("reply");
  });

  it("accepts channel parameter for social DM context", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.concierge.chat({
      messages: [{ role: "user", content: "Hi there" }],
      channel: "instagram",
    });

    expect(result).toHaveProperty("reply");
  });
});

/* ═══════════════════════════════════════════
   ROUTER STRUCTURE TESTS
   ═══════════════════════════════════════════ */

describe("Router structure", () => {
  it("should have concierge.chat procedure", () => {
    expect(appRouter._def.procedures).toHaveProperty("concierge.chat");
  });

  it("should have leads.save procedure", () => {
    expect(appRouter._def.procedures).toHaveProperty("leads.save");
  });
});
