importScripts('https://cdn.webpushr.com/sw-server.js');

// استجابة ذكية عند الضغط على الإشعار
self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/alert/')
    );
});
