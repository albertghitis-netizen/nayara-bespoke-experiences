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

/* ── Social DM addendum — injected when channel is instagram or messenger ── */
const SOCIAL_DM_ADDENDUM = `

IMPORTANT — You are responding inside a social media DM (Instagram or Facebook Messenger). Follow these rules strictly:
1. Keep every reply to 2-3 SHORT sentences max. Think text message, not email.
2. Never use markdown formatting — no **, no *, no bullet points, no numbered lists.
3. Write in plain conversational text only, like a real person texting.
4. If someone asks a complex question, give the key answer first in 1-2 sentences, then ask if they want more detail.
5. Use line breaks between thoughts instead of long paragraphs.
6. Be warm but brief. Every word should earn its place.
`;

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
          channel: z.enum(["website", "instagram", "messenger"]).optional().default("website"),
        })
      )
      .mutation(async ({ input }) => {
        // Build system prompt — add social DM rules when channel is social
        const isSocial = input.channel === "instagram" || input.channel === "messenger";
        const systemPrompt = isSocial
          ? NAYARA_CONCIERGE_SYSTEM_PROMPT + SOCIAL_DM_ADDENDUM
          : NAYARA_CONCIERGE_SYSTEM_PROMPT;

        // Build the full message array with system prompt prepended
        const messagesForLLM = [
          {
            role: "system" as const,
            content: systemPrompt,
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
