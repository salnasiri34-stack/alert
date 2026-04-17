importScripts('https://cdn.webpushr.com/sw-server.js');

self.addEventListener('push', function(event) {
    const options = {
        body: 'تنبيه طوارئ من العراب سلومي! 🚨',
        icon: 'https://cdn-icons-png.flaticon.com/512/559/559343.png',
        vibrate: [500, 100, 500, 100, 500]
    };
    event.waitUntil(self.registration.showNotification('⚠️ إنذار عاجل', options));
});
