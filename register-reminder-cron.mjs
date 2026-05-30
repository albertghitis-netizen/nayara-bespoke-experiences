/**
 * Register the Heartbeat cron job that fires /api/scheduled/sendReminders every minute.
 * Run once: node register-reminder-cron.mjs
 */
import "dotenv/config";

const SERVICE = "webdevtoken.v1.WebDevService";
const forgeApiUrl = process.env.BUILT_IN_FORGE_API_URL;
const forgeApiKey = process.env.BUILT_IN_FORGE_API_KEY;

if (!forgeApiUrl || !forgeApiKey) {
  console.error("Missing BUILT_IN_FORGE_API_URL or BUILT_IN_FORGE_API_KEY in .env");
  process.exit(1);
}

const normalizedBase = forgeApiUrl.endsWith("/") ? forgeApiUrl : `${forgeApiUrl}/`;
const endpoint = new URL(`${SERVICE}/CreateHeartbeatJob`, normalizedBase).toString();

const body = {
  name: "sofia-reminders-every-minute",
  cronExpression: "0 * * * * *", // every minute (6-field cron with seconds)
  callbackPath: "/api/scheduled/sendReminders",
  callbackMethod: "POST",
  callbackPayload: "{}",
  description: "Fires every minute to check for due Sofía reminders and send push notifications",
};

console.log("Registering Heartbeat cron job...");
console.log("Endpoint:", endpoint);
console.log("Body:", JSON.stringify(body, null, 2));

const response = await fetch(endpoint, {
  method: "POST",
  headers: {
    accept: "application/json",
    authorization: `Bearer ${forgeApiKey}`,
    "content-type": "application/json",
    "connect-protocol-version": "1",
  },
  body: JSON.stringify(body),
});

const text = await response.text();
console.log(`Status: ${response.status}`);

if (response.ok) {
  const data = JSON.parse(text);
  console.log("Success! Cron job registered.");
  console.log("Task UID:", data.taskUid);
  console.log("Next execution:", data.nextExecutionAt);
} else {
  console.error("Failed to register cron job:", text);
  process.exit(1);
}
