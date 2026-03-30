import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
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
            "Welcome to Nayara! The Atacama Desert is truly magical. I'd recommend our stargazing excursion — the skies here are the clearest on Earth. Would you like to know more about our excursions?",
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

    // Should not throw — concierge is a public procedure
    const result = await caller.concierge.chat({
      messages: [{ role: "user", content: "Hello" }],
    });

    expect(result).toHaveProperty("reply");
  });

  it("rejects empty messages array", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Empty messages should still work (the LLM just gets the system prompt)
    const result = await caller.concierge.chat({
      messages: [],
    });

    expect(result).toHaveProperty("reply");
  });
});
