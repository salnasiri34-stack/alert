importScripts('https://cdn.webpushr.com/sw-server.js');

// استجابة ذكية واهتزاز عسكري
self.addEventListener('push', function(event) {
    const options = {
        body: 'إنذار طوارئ عاجل من نظام العرّاب سلومي! 🚨',
        icon: 'https://cdn-icons-png.flaticon.com/512/559/559343.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/559/559343.png',
        vibrate: [500, 110, 500, 110, 500],
        data: { url: '/alert/' }
    };
    event.waitUntil(self.registration.showNotification('⚠️ تنبيه أمني عاجل', options));
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/alert/'));
});
