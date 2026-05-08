import type { Express, Request, Response } from "express";
import { ENV } from "./env";

/**
 * Storage proxy for /manus-storage/* paths.
 * Instead of 307 redirecting to signed CloudFront URLs (which can fail in
 * iframe previews and with concurrent video loads), we fetch the signed URL
 * and then pipe the actual content back to the client.
 * 
 * For large files (videos), we support Range requests so the browser can
 * seek and stream efficiently.
 */
export function registerStorageProxy(app: Express) {
  // In-memory cache for signed URLs (they expire, so short TTL)
  const signedUrlCache = new Map<string, { url: string; expires: number }>();
  const CACHE_TTL_MS = 4 * 60 * 1000; // 4 minutes (signed URLs typically last 5-10 min)

  async function getSignedUrl(key: string): Promise<string | null> {
    // Check cache first
    const cached = signedUrlCache.get(key);
    if (cached && cached.expires > Date.now()) {
      return cached.url;
    }

    if (!ENV.forgeApiUrl || !ENV.forgeApiKey) {
      return null;
    }

    try {
      const forgeUrl = new URL(
        "v1/storage/presign/get",
        ENV.forgeApiUrl.replace(/\/+$/, "") + "/",
      );
      forgeUrl.searchParams.set("path", key);
      const forgeResp = await fetch(forgeUrl, {
        headers: { Authorization: `Bearer ${ENV.forgeApiKey}` },
      });
      if (!forgeResp.ok) {
        const body = await forgeResp.text().catch(() => "");
        console.error(`[StorageProxy] forge error: ${forgeResp.status} ${body}`);
        return null;
      }
      const { url } = (await forgeResp.json()) as { url: string };
      if (!url) return null;

      // Cache the signed URL
      signedUrlCache.set(key, { url, expires: Date.now() + CACHE_TTL_MS });
      return url;
    } catch (err) {
      console.error("[StorageProxy] failed to get signed URL:", err);
      return null;
    }
  }

  app.get("/manus-storage/*", async (req: Request, res: Response) => {
    const key = (req.params as Record<string, string>)[0];
    if (!key) {
      res.status(400).send("Missing storage key");
      return;
    }

    const signedUrl = await getSignedUrl(key);
    if (!signedUrl) {
      res.status(502).send("Storage backend error");
      return;
    }

    try {
      // Build headers for the upstream request
      const upstreamHeaders: Record<string, string> = {};
      
      // Forward Range header for video seeking/streaming
      if (req.headers.range) {
        upstreamHeaders["Range"] = req.headers.range;
      }

      const upstream = await fetch(signedUrl, { headers: upstreamHeaders });

      if (!upstream.ok && upstream.status !== 206) {
        console.error(`[StorageProxy] upstream error: ${upstream.status}`);
        res.status(502).send("Storage upstream error");
        return;
      }

      // Forward relevant headers
      const contentType = upstream.headers.get("content-type");
      const contentLength = upstream.headers.get("content-length");
      const contentRange = upstream.headers.get("content-range");
      const acceptRanges = upstream.headers.get("accept-ranges");
      const lastModified = upstream.headers.get("last-modified");
      const etag = upstream.headers.get("etag");

      if (contentType) res.set("Content-Type", contentType);
      if (contentLength) res.set("Content-Length", contentLength);
      if (contentRange) res.set("Content-Range", contentRange);
      if (acceptRanges) res.set("Accept-Ranges", acceptRanges);
      if (lastModified) res.set("Last-Modified", lastModified);
      if (etag) res.set("ETag", etag);
      
      // Cache for 1 hour (the signed URL in our cache handles expiry)
      res.set("Cache-Control", "public, max-age=3600");

      // Set status (200 for full, 206 for partial/range)
      res.status(upstream.status);

      // Pipe the body
      if (upstream.body) {
        const reader = upstream.body.getReader();
        const pump = async () => {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              res.end();
              return;
            }
            if (!res.write(value)) {
              // Backpressure , wait for drain
              await new Promise<void>((resolve) => res.once("drain", resolve));
            }
          }
        };
        pump().catch((err) => {
          console.error("[StorageProxy] pipe error:", err);
          if (!res.headersSent) {
            res.status(502).send("Pipe error");
          } else {
            res.end();
          }
        });
      } else {
        res.end();
      }
    } catch (err) {
      console.error("[StorageProxy] request failed:", err);
      if (!res.headersSent) {
        res.status(502).send("Storage proxy error");
      }
    }
  });
}
