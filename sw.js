self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const options = {
        body: data.message || 'إنذار طوارئ عاجل! 🚨',
        icon: 'https://img.icons8.com/emoji/96/alert-light.png',
        vibrate: [500, 100, 500],
        data: { url: data.target_url || '/' }
    };
    event.waitUntil(self.registration.showNotification(data.title || '🚨 تنبيه سلومي', options));
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow(event.notification.data.url));
});
