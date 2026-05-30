import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { registerStorageProxy } from "./storageProxy";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { saveLead, getDb } from "../db";
import { sofiaReminders } from "../../drizzle/schema";
import { eq } from "drizzle-orm";
import { sendPushToUser } from "../pushNotifications";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // Storage proxy for /manus-storage/* paths
  registerStorageProxy(app);
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);

  // ── Hangaroa Landing Page Lead Capture ──
  // External landing page at news.nayararesorts.com POSTs here
  app.options("/api/hangaroa-lead", (_req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Access-Control-Max-Age", "86400");
    res.status(204).end();
  });
  app.post("/api/hangaroa-lead", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    try {
      const { nombre, apellido, email, telefono } = req.body || {};
      if (!email || !nombre) {
        res.status(400).json({ error: "nombre and email are required" });
        return;
      }
      const fullName = [nombre, apellido].filter(Boolean).join(" ");
      await saveLead({
        email,
        name: fullName || null,
        source: "hangaroa-landing",
        channel: "website",
        propertyInterest: "Nayara Hangaroa",
        notes: `Super Sale Chile 2026 | Tel: ${telefono || "N/A"}`,
      });
      console.log(`[Hangaroa Lead] ${fullName} <${email}>`);
      res.json({ status: "ok" });
    } catch (err) {
      console.error("[Hangaroa Lead] Error:", err);
      res.status(500).json({ error: "Internal error" });
    }
  });
  /* ═══ Scheduled Reminder Handler ═══ */
  app.post("/api/scheduled/sendReminders", async (req, res) => {
    try {
      const db = await getDb();
      if (!db) {
        res.status(500).json({ error: "Database not available" });
        return;
      }

      // Get current UTC time (HH:MM)
      const now = new Date();
      const currentHH = String(now.getUTCHours()).padStart(2, "0");
      const currentMM = String(now.getUTCMinutes()).padStart(2, "0");
      const currentTime = `${currentHH}:${currentMM}`;
      const currentDay = String(now.getUTCDay()); // 0=Sun

      // Find all enabled reminders matching this minute
      const allReminders = await db
        .select()
        .from(sofiaReminders)
        .where(eq(sofiaReminders.enabled, 1));

      const dueReminders = allReminders.filter(
        (r) => r.timeUtc === currentTime && r.days.includes(currentDay)
      );

      let sent = 0;
      let failed = 0;

      for (const reminder of dueReminders) {
        try {
          await sendPushToUser(reminder.userOpenId, {
            title: `Sof\u00eda \u2014 ${reminder.category}`,
            body: reminder.label,
            tag: `reminder-${reminder.id}`,
            url: "/sofia",
          });
          sent++;
        } catch (err) {
          console.error(`[Reminder] Failed to send push for reminder ${reminder.id}:`, err);
          failed++;
        }
      }

      res.json({ ok: true, currentTime, dueReminders: dueReminders.length, sent, failed });
    } catch (err: any) {
      console.error("[Scheduled/sendReminders] Error:", err);
      res.status(500).json({
        error: err.message,
        stack: err.stack,
        context: { url: req.url },
        timestamp: new Date().toISOString(),
      });
    }
  });

  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
