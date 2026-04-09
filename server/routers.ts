import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { invokeLLM } from "./_core/llm";
import { NAYARA_CONCIERGE_SYSTEM_PROMPT } from "./conciergePrompt";
import { z } from "zod";
import { saveLead } from "./db";

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

        // Retry with backoff for rate limiting
        let result;
        let lastError;
        for (let attempt = 0; attempt < 3; attempt++) {
          try {
            result = await invokeLLM({
              messages: messagesForLLM,
            });
            break; // success
          } catch (err: any) {
            lastError = err;
            const is429 = err?.message?.includes("429") || err?.message?.includes("Too Many Requests") || err?.message?.includes("request too many");
            if (is429 && attempt < 2) {
              // Wait before retrying: 2s, 4s
              await new Promise(r => setTimeout(r, (attempt + 1) * 2000));
              continue;
            }
            throw err;
          }
        }
        if (!result) throw lastError;

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

        // --- Lead extraction: check if the user provided an email in this conversation ---
        try {
          const lastUserMsg = input.messages.filter(m => m.role === "user").pop()?.content ?? "";
          const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
          const emailMatch = lastUserMsg.match(emailRegex);
          if (emailMatch) {
            // Extract name from conversation context
            const allUserMsgs = input.messages.filter(m => m.role === "user").map(m => m.content).join(" ");
            const namePatterns = [
              /(?:my name is|i'm|i am|this is|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)/i,
              /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)?)$/m,
            ];
            let name: string | null = null;
            for (const pattern of namePatterns) {
              const match = allUserMsgs.match(pattern);
              if (match) { name = match[1]; break; }
            }

            await saveLead({
              email: emailMatch[0],
              name: name,
              source: "chatbot",
              channel: input.channel,
              notes: `Captured during chat conversation`,
            });
          }
        } catch (e) {
          console.error("[Lead Capture] Failed to extract/save lead:", e);
        }

        return { reply: content };
      }),
  }),

  /* ═══════════════════════════════════════════
     LEAD CAPTURE — Direct endpoint
     ═══════════════════════════════════════════ */
  leads: router({
    save: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          name: z.string().optional(),
          source: z.string().optional().default("chatbot"),
          channel: z.string().optional().default("website"),
          propertyInterest: z.string().optional(),
          notes: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const success = await saveLead({
          email: input.email,
          name: input.name ?? null,
          source: input.source,
          channel: input.channel,
          propertyInterest: input.propertyInterest ?? null,
          notes: input.notes ?? null,
        });
        return { success };
      }),
  }),
});

export type AppRouter = typeof appRouter;
