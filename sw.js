self.addEventListener('push', function(event) {
    const options = {
        body: 'تم إرسال تحذير! يرجى التصرف بهدوء ومتابعة التعليمات.',
        icon: 'https://cdn-icons-png.flaticon.com/512/179/179386.png',
        vibrate: [500, 100, 500, 100, 500],
        data: { dateOfArrival: Date.now() }
    };
    event.waitUntil(self.registration.showNotification('⚠️ تحذيرات سلومي', options));
});
