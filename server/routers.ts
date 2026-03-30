import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { NAYARA_CONCIERGE_SYSTEM_PROMPT } from "./conciergePrompt";
import { z } from "zod";

/* ── Message schema for the chat endpoint ── */
const messageSchema = z.object({
  role: z.enum(["system", "user", "assistant"]),
  content: z.string(),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  /* ═══════════════════════════════════════════
     CONCIERGE CHATBOT — LLM-powered
     Public procedure (no auth required for guests)
     ═══════════════════════════════════════════ */
  concierge: router({
    chat: publicProcedure
      .input(
        z.object({
          messages: z.array(messageSchema),
        })
      )
      .mutation(async ({ input }) => {
        // Build the full message array with system prompt prepended
        const messagesForLLM = [
          {
            role: "system" as const,
            content: NAYARA_CONCIERGE_SYSTEM_PROMPT,
          },
          ...input.messages.map((m) => ({
            role: m.role as "system" | "user" | "assistant",
            content: m.content,
          })),
        ];

        const result = await invokeLLM({
          messages: messagesForLLM,
        });

        const assistantMessage =
          result.choices?.[0]?.message?.content ?? "I'm sorry, I wasn't able to process that. Could you try again?";

        // Handle content that might be an array
        const content = typeof assistantMessage === "string"
          ? assistantMessage
          : Array.isArray(assistantMessage)
            ? assistantMessage
                .filter((p): p is { type: "text"; text: string } => p.type === "text")
                .map((p) => p.text)
                .join("\n")
            : String(assistantMessage);

        return { reply: content };
      }),
  }),
});

export type AppRouter = typeof appRouter;
