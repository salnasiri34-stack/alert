self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(clients.claim()));

self.addEventListener('push', (event) => {
  let data = { title: "🚨 تنبيه عاجل", body: "افتح الرادار فوراً", url: "index.html?alarm=true" };
  if (event.data) {
    try {
      const incoming = event.data.json();
      data.title = incoming.title || data.title;
      data.body = incoming.message || incoming.body || data.body;
      data.url = incoming.target_url || data.url;
    } catch (e) { data.body = event.data.text(); }
  }

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "https://img.icons8.com/emoji/96/alert-light.png",
      badge: "https://img.icons8.com/emoji/96/alert-light.png",
      vibrate: [500, 100, 500],
      data: { url: data.url },
      requireInteraction: true
    })
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((list) => {
      const url = event.notification.data.url;
      for (const client of list) { if (client.url.includes(url) && 'focus' in client) return client.focus(); }
      return clients.openWindow(url);
    })
  );
});
