/* Sofía Service Worker — Push Notifications & Offline Shell */

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

/* Push notification handler */
self.addEventListener("push", (event) => {
  let data = { title: "Sofía Reminder", body: "Time to check in.", icon: "/sofia-icon-192.png" };

  if (event.data) {
    try {
      data = { ...data, ...event.data.json() };
    } catch (e) {
      data.body = event.data.text();
    }
  }

  const options = {
    body: data.body,
    icon: data.icon || "/sofia-icon-192.png",
    badge: "/sofia-icon-192.png",
    vibrate: [200, 100, 200],
    tag: data.tag || "sofia-reminder",
    renotify: true,
    data: {
      url: data.url || "/sofia",
    },
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

/* Notification click — open or focus the app */
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const targetUrl = event.notification.data?.url || "/sofia";

  event.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes("/sofia") && "focus" in client) {
          return client.focus();
        }
      }
      return self.clients.openWindow(targetUrl);
    })
  );
});
