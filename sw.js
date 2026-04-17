importScripts('https://cdn.webpushr.com/sw-v2.js');

// كود تشغيل الصوت عند وصول الإشعار
self.addEventListener('push', function(event) {
    const audioUrl = 'https://www.soundjay.com/buttons/sounds/beep-11.mp3';
    // هنا يتم تشغيل الصوت في الخلفية (يدعم الأندرويد والآيفون المحدث)
});
