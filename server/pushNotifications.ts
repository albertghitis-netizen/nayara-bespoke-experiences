import webpush from "web-push";
import { getDb } from "./db";
import { pushSubscriptions } from "../drizzle/schema";
import { eq } from "drizzle-orm";

// VAPID keys — generated for this project
const VAPID_PUBLIC_KEY = "BFEVGTFd8SDC7277SIXkgSXbnnNpZrTNZUwilQt9uaEuwdoS93gF7EKXiav1MXDqhwQgE0Pd001QKAV-OUSnntU";
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY || "AXM9KKllP3QbSaVn2aX2Ob8tckk6ZnRBazvGVyBHqm0";

webpush.setVapidDetails(
  "mailto:hello@humbeing.com",
  VAPID_PUBLIC_KEY,
  VAPID_PRIVATE_KEY
);

export { VAPID_PUBLIC_KEY };

/**
 * Save a push subscription for a user
 */
export async function savePushSubscription(
  userOpenId: string,
  subscription: { endpoint: string; keys: { p256dh: string; auth: string } }
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Remove any existing subscription with same endpoint for this user
  await db.delete(pushSubscriptions).where(
    eq(pushSubscriptions.endpoint, subscription.endpoint)
  );

  await db.insert(pushSubscriptions).values({
    userOpenId,
    endpoint: subscription.endpoint,
    p256dh: subscription.keys.p256dh,
    auth: subscription.keys.auth,
  });
}

/**
 * Remove a push subscription
 */
export async function removePushSubscription(endpoint: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(pushSubscriptions).where(
    eq(pushSubscriptions.endpoint, endpoint)
  );
}

/**
 * Send push notification to all of a user's subscriptions
 */
export async function sendPushToUser(
  userOpenId: string,
  payload: { title: string; body: string; tag?: string; url?: string; icon?: string }
) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const subs = await db
    .select()
    .from(pushSubscriptions)
    .where(eq(pushSubscriptions.userOpenId, userOpenId));

  const results = await Promise.allSettled(
    subs.map(async (sub: typeof subs[number]) => {
      const pushSub = {
        endpoint: sub.endpoint,
        keys: { p256dh: sub.p256dh, auth: sub.auth },
      };
      try {
        await webpush.sendNotification(pushSub, JSON.stringify(payload));
      } catch (err: any) {
        // If subscription is expired/invalid, remove it
        if (err.statusCode === 410 || err.statusCode === 404) {
          await db.delete(pushSubscriptions).where(eq(pushSubscriptions.id, sub.id));
        }
        throw err;
      }
    })
  );

  const sent = results.filter((r: PromiseSettledResult<void>) => r.status === "fulfilled").length;
  const failed = results.filter((r: PromiseSettledResult<void>) => r.status === "rejected").length;
  return { sent, failed };
}
